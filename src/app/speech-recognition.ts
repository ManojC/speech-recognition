export class SpeechRecognition {

    public constructor(lang?: string, continuous?: boolean, interimResults?: boolean, maxAlternatives?: number) {
        if ("webkitSpeechRecognition" in window) {
            this.initialise();
            this._SpeechRecognition.lang = lang || 'en-UK';
            this._SpeechRecognition.continuous = !!continuous;
            this._SpeechRecognition.interimResults = !!interimResults;
            this._SpeechRecognition.maxAlternatives = maxAlternatives || 1;
            return;
        }
        throw new Error("speech recognition is not supported on this browser!");
    }

    private _SpeechRecognition: any;

    public onaudiostart: Function;
    public onaudioendonend: Function;
    public onend: Function;
    public onerror: Function;
    public onnomatch: Function;
    public onresult: Function;
    public onsoundstart: Function;
    public onsoundend: Function;
    public onspeechstart: Function;
    public onspeechend: Function;
    public onstart: Function;

    public abort(): void {
        this._SpeechRecognition && this._SpeechRecognition.abort();
    }

    public start(): void {
        this._SpeechRecognition && this._SpeechRecognition.start();
    }

    public stop(): void {
        this._SpeechRecognition && this._SpeechRecognition.stop();
    }

    public initialise(): void {
        this._SpeechRecognition = new window['webkitSpeechRecognition']();

        this._SpeechRecognition.onaudiostart  = (event: any) => {
            console.log(event.type);
            typeof this.onaudiostart === 'function' && this.onaudiostart(event);
        };
        this._SpeechRecognition.onaudioendonend  = (event: any) => {
            console.log(event.type);
            typeof this.onaudioendonend === 'function' && this.onaudioendonend(event);
        };
        
        this._SpeechRecognition.onresult = (event: any) => {
            console.log(event.type);
            typeof this.onresult === 'function' && this.onresult(event);
        };
        this._SpeechRecognition.onnomatch  = (event: any) => {
            console.log(event.type);
            typeof this.onnomatch === 'function' && this.onnomatch(event);
        };
        
        this._SpeechRecognition.onsoundstart  = (event: any) => {
            console.log(event.type);
            typeof this.onsoundstart === 'function' && this.onsoundstart(event);
        };
        this._SpeechRecognition.onsoundend  = (event: any) => {
            console.log(event.type);
            typeof this.onsoundend === 'function' && this.onsoundend(event);
        };
        
        this._SpeechRecognition.onspeechstart  = (event: any) => {
            console.log(event.type);
            typeof this.onspeechstart === 'function' && this.onspeechstart(event);
        };
        this._SpeechRecognition.onspeechend  = (event: any) => {
            console.log(event.type);
            typeof this.onspeechend === 'function' && this.onspeechend(event);
        };
        
        this._SpeechRecognition.onstart  = (event: any) => {
            console.log(event.type);
            typeof this.onstart === 'function' && this.onstart(event);
        };
        this._SpeechRecognition.onend  = (event: any) => {
            console.log(event.type);
            typeof this.onend === 'function' && this.onend(event);
            this.abort();
            this.start();
        };

        this._SpeechRecognition.onerror  = (event: any) => {
            console.log(event);
            typeof this.onerror === 'function' && this.onerror(event);
        };
    }
}