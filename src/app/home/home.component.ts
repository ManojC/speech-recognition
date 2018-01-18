import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'
import { SpeechRecognition } from "../speech-recognition";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private user: any;
    private _SpeechRecognition: SpeechRecognition;
    private translatedtext: string = "";
    private section: number = 1;

    constructor(private _AngularFireAuth: AngularFireAuth,
        private _Router: Router) { }

    public ngOnInit(): void {
        let section: string = sessionStorage.getItem('section');
        if (section && !isNaN(parseInt(section))) {
            this.section = parseInt(section);
        }
        this._AngularFireAuth.authState.subscribe((user: firebase.User) => {
            if (user && user.uid) {
                this.user = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid,
                    practiceTestPassed: false
                };
                sessionStorage.setItem('user', JSON.stringify(this.user));
                this.user.practiceTestPassed = !!sessionStorage.getItem('practiceTestPassed');
            }
        });
    }

    private startSpeech(answerNumber: number) {
        if (!this.user.practiceTestPassed) {
            this.initialise();
        }
    }

    private endSpeech() {
        this.checkResult();
        this._SpeechRecognition.onresult = null;
    }

    private initialise(): void {
        document.getElementById("answer").innerHTML= "";
        this.translatedtext = "";
        if (this._SpeechRecognition) {
            this._SpeechRecognition.onresult = this.onResult.bind(this);
            return;
        }
        this._SpeechRecognition = this._SpeechRecognition || new SpeechRecognition('en-GB', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
    }

    private onResult(event: any): void {
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

        document.getElementById("answer").innerHTML = this.translatedtext + '<span style="color:#777">' + intermidiateResults + '</span>';
    }

    private checkResult() {
        if (document.getElementById("answer").innerText === document.getElementById("question").innerText) {
            this.user.practiceTestPassed = true;
            sessionStorage.setItem('practiceTestPassed', this.user.practiceTestPassed);
        }
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

        message = message.charAt(0).toUpperCase() + message.slice(1);

        return message.trim();
    }

    private login(): void {
        this._AngularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    private logout(): void {
        this._AngularFireAuth.auth.signOut().then((response: any) => {
            this.user = null;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('section');
            sessionStorage.removeItem('practiceTestPassed');
        });
    }

    private home(): void {
        this._Router.navigate(['']);
    }

    private typingTest(): void {
        this._Router.navigate(['typing']);
    }

    private speechTest(): void {
        this._Router.navigate(['speech']);
    }

    private setSection(isNext: boolean) {
        isNext ? ++this.section : --this.section;
        sessionStorage.setItem('section', this.section.toString());
    }
}
