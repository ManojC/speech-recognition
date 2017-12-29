import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from "./speech-recognition";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private _SpeechRecognition: SpeechRecognition;
    private textBody: HTMLElement;
    private finalResults: string = "";

    public ngOnInit(): void {
        this.initialise();
    }

    private initialise(): void {
        this.textBody = document.getElementById('text');
        this._SpeechRecognition = new SpeechRecognition('en-Uk',  true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
    }

    private onResult(event: any): void {
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.finalResults += transcript;
            } else {
                intermidiateResults += transcript;
            }
        }
        this.textBody.innerHTML = this.finalResults + '<span style="color:blue">' + intermidiateResults + '</span>';
    }
}
