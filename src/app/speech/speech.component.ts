import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'
import * as Diff from "text-diff";

import { AngularFireDatabase } from 'angularfire2/database';
import { SpeechRecognition } from "../speech-recognition";
import { Speech } from "../models/speech.model";
import { BaseComponent } from "../base.component";

@Component({
    selector: 'app-recognition',
    templateUrl: './speech.component.html',
    styleUrls: ['./speech.component.css']
})
export class SpeechComponent extends BaseComponent implements OnInit {

    private _SpeechRecognition: SpeechRecognition;
    private dbList: any;
    private user: any;
    private diff: Diff;
    private isStopped: boolean = true;
    private startTime: Date;
    private speech: Speech;

    private time: string;
    private resetTimer: any;

    private translatedtext: string = "";

    constructor(private _AngularFireAuth: AngularFireAuth,
        private _db: AngularFireDatabase,
            private _Router: Router) { 
        super();
        this.diff = new Diff();
    }

    public ngOnInit(): void {
        this._AngularFireAuth.authState.subscribe((user: firebase.User) => {
            if (user && user.uid) {
                this.user = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid
                };
                sessionStorage.setItem('user', JSON.stringify(this.user));
                this.dbList = this._db.list(`/${this.user.uid}/speech`);
            }
        });
    }

    private initialise(): void {
        if (this._SpeechRecognition) {
            return;
        }
        this._SpeechRecognition = this._SpeechRecognition || new SpeechRecognition('en-GB', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
        this.speech = null;
    }

    private onResult(event: any): void {
        if (this.isStopped) {
            return;
        }
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.translatedtext += transcript;
            } else {
                intermidiateResults += transcript;
            }
        }
        this.translatedtext = this.translatePanctuations(this.translatedtext);
        intermidiateResults = this.translatePanctuations(intermidiateResults);
        document.getElementById('text').innerHTML = this.translatedtext + '<span style="color:#777">' + intermidiateResults + '</span>';
    }

    private translatePanctuations(message: string): string {
        message = message.replace(/full stop/ig, '.');
        message = message.replace(/comma/ig, ',');
        message = message.replace(/exclamation/ig, '!');
        message = message.replace(/question mark/ig, '?');

        message = message.replace(' .', '. ');
        message = message.replace(' ,', ', ');
        message = message.replace(' !', '! ');
        message = message.replace(' ?', '? ');

        message = message.replace('.  ', '. ');
        message = message.replace(',  ', ', ');
        message = message.replace('!  ', '! ');
        message = message.replace('?  ', '? ');

        message = message.replace('universe', 'Universe');

        message = this.titleCase(message);

        return message.trim();
    }

    private titleCase(message: string) {
        return message.split('. ').map(function (sentence: string) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join('. ');
    }

    private logout(): void {
        this._AngularFireAuth.auth.signOut().then((response: any) => {
            this.isStopped = true;
            this.time = null;
            this.speech = null;
            document.getElementById('text').innerText = "recognised speech...";
            document.getElementById('result').innerHTML = "";
            if (this.resetTimer) {
                clearTimeout(this.resetTimer);
            }
            this.user = null;
            sessionStorage.removeItem('user');
        });
    }

    private login(): void {
        this._AngularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    private timer(): void {
        this.isStopped = !this.isStopped;
        if (this.isStopped) {
            this.processData();
            this.updateData();
            return;
        }
        this.initialise();
        let time: number = 0;
        this.startTime = new Date();
        this.resetTimer = setInterval(() => {
            ++time;
            let minutes: number = Math.floor(time / 60);
            let seconds: number = time % 60;
            this.time = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
        }, 1000);
    }

    private updateData(): void {
        this.dbList.push(this.speech).then((response: any) => {
            console.log(response);
        }).catch((error: any) => console.log(error));
    }

    private processData() {
        clearInterval(this.resetTimer);
        let textDiff: string = this.diff.main(this.sampleText, document.getElementById('text').innerText);
        document.getElementById('result').innerHTML = this.diff.prettyHtml(textDiff);

        let sampleTextArray: Array<string> = this.sampleText.split(' ');
        let recognisedTextArray: Array<string> = document.getElementById('text').innerText.split(' ');

        this.speech = new Speech();
        this.speech.userName = this.user.displayName;
        this.speech.data = document.getElementById('text').innerText;
        this.speech.diff = document.getElementById('result').innerHTML;
        this.speech.actualWordCount = sampleTextArray.length;
        this.speech.recognisedWordCount = recognisedTextArray.length;
        this.speech.correctWordCount = 0;

        for (let i = 0; i < recognisedTextArray.length; i++) {
            if (sampleTextArray.indexOf(recognisedTextArray[i]) > -1) {
                this.speech.correctWordCount += 1;
                sampleTextArray.splice(sampleTextArray.indexOf(recognisedTextArray[i]), 1);
            }
        }

        this.speech.accuracy = (this.speech.correctWordCount / this.speech.actualWordCount) * 100;
        this.speech.accuracy = parseFloat(this.speech.accuracy.toFixed(2));
        this.speech.completionTime = (new Date().valueOf() - this.startTime.valueOf()) / 1000;
        this.speech.completionTime = parseFloat(this.speech.completionTime.toFixed(2));
    }

    private home(): void {
        this._Router.navigate(['']);
    }
}
