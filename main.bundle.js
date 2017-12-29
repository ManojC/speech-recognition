webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    text-align: center;\n    margin-top: 50px;\n}\n\n#text {\n    width: 80%;\n    height: 600px;\n    margin-top: 50px;\n    word-wrap: break-word;\n    margin-left: 10%;\n    background-color: black;\n    color: white;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome To Speech Recognition</h1>\n<div id=\"text\">speak anything...</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition__ = __webpack_require__("../../../../../src/app/speech-recognition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.finalResults = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initialise();
    };
    AppComponent.prototype.initialise = function () {
        this.textBody = document.getElementById('text');
        this._SpeechRecognition = new __WEBPACK_IMPORTED_MODULE_1__speech_recognition__["a" /* SpeechRecognition */]('en-Uk', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
    };
    AppComponent.prototype.onResult = function (event) {
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.finalResults += transcript;
            }
            else {
                intermidiateResults += transcript;
            }
        }
        this.textBody.innerHTML = this.finalResults + '<span style="color:blue">' + intermidiateResults + '</span>';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/speech-recognition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (function () {
    function SpeechRecognition(lang, continuous, interimResults, maxAlternatives) {
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
    SpeechRecognition.prototype.abort = function () {
        this._SpeechRecognition && this._SpeechRecognition.abort();
    };
    SpeechRecognition.prototype.start = function () {
        this._SpeechRecognition && this._SpeechRecognition.start();
    };
    SpeechRecognition.prototype.stop = function () {
        this._SpeechRecognition && this._SpeechRecognition.stop();
    };
    SpeechRecognition.prototype.initialise = function () {
        var _this = this;
        this._SpeechRecognition = new window['webkitSpeechRecognition']();
        this._SpeechRecognition.onaudiostart = function (event) {
            console.log(event.type);
            typeof _this.onaudiostart === 'function' && _this.onaudiostart(event);
        };
        this._SpeechRecognition.onaudioendonend = function (event) {
            console.log(event.type);
            typeof _this.onaudioendonend === 'function' && _this.onaudioendonend(event);
        };
        this._SpeechRecognition.onresult = function (event) {
            console.log(event.type);
            typeof _this.onresult === 'function' && _this.onresult(event);
        };
        this._SpeechRecognition.onnomatch = function (event) {
            console.log(event.type);
            typeof _this.onnomatch === 'function' && _this.onnomatch(event);
        };
        this._SpeechRecognition.onsoundstart = function (event) {
            console.log(event.type);
            typeof _this.onsoundstart === 'function' && _this.onsoundstart(event);
        };
        this._SpeechRecognition.onsoundend = function (event) {
            console.log(event.type);
            typeof _this.onsoundend === 'function' && _this.onsoundend(event);
        };
        this._SpeechRecognition.onspeechstart = function (event) {
            console.log(event.type);
            typeof _this.onspeechstart === 'function' && _this.onspeechstart(event);
        };
        this._SpeechRecognition.onspeechend = function (event) {
            console.log(event.type);
            typeof _this.onspeechend === 'function' && _this.onspeechend(event);
        };
        this._SpeechRecognition.onstart = function (event) {
            console.log(event.type);
            typeof _this.onstart === 'function' && _this.onstart(event);
        };
        this._SpeechRecognition.onend = function (event) {
            console.log(event.type);
            typeof _this.onend === 'function' && _this.onend(event);
            _this.abort();
            _this.start();
        };
        this._SpeechRecognition.onerror = function (event) {
            console.log(event);
            typeof _this.onerror === 'function' && _this.onerror(event);
        };
    };
    return SpeechRecognition;
}());

//# sourceMappingURL=speech-recognition.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map