import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private user: any;

    constructor(private _AngularFireAuth: AngularFireAuth,
        private _Router: Router) { }

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
            }
        });
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

        return message.trim();
    }

    private logout(): void {
        this._AngularFireAuth.auth.signOut().then((response: any) => {
            this.user = null;
            sessionStorage.removeItem('user');
        });
    }

    private login(): void {
        this._AngularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
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
}
