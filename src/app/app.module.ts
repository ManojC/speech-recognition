import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";

import { AppComponent } from './app.component';
import { SpeechComponent } from './speech/speech.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        SpeechComponent,
        KeyboardComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterModule.forRoot([
            {
                path: 'speech',
                component: SpeechComponent
            },
            {
                path: 'typing',
                component: KeyboardComponent
            },
            {
                path: '**',
                component: HomeComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
