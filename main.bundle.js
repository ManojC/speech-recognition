webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: #337ab7;\n}\n\n#btn-test {\n    margin-top: 8px;\n    font-weight: bold;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n}\n\nbutton.navbar-brand {\n    color: white;\n}\n\nh3 {\n    text-align: center;\n    margin: 0 0 10px 0;\n    font-weight: bold;\n}\n\ndiv#text-sample {\n    border-right: thin solid black;\n}\n\np#text, div#text-sample {\n    text-align: justify;\n    height: 600px;\n    max-height: 600px;\n    word-wrap: break-word;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 25px;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-12\">\n                <button class=\"navbar-brand btn btn-link\">Home</button>\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"navbar-brand btn btn-link\">Login</button>\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"navbar-brand btn btn-link\">Logout</button>\n                <button *ngIf=\"user\" id=\"btn-test\" class=\"btn btn-success pull-right\">Start Test</button>\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right\">Hello {{user?.displayName}}!</span>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h3 class=\"text-center\">Input</h3>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3 class=\"text-center\">Output</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div id=\"text-sample\" class=\"col-lg-6\">\n            <p>\n                The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist.\n            </p>\n            <p>\n                The Universe contains billions of galaxies, each containing millions or billions of stars. The space between the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered particles of dust or a few hydrogen atoms per cubic centimeter. Space is also filled with radiation (e.g. light and heat), magnetic fields and high energy particles (e.g. cosmic rays).\n            </p>\n            <p>\n                The Universe is incredibly huge. It would take a modern jet fighter more than a million years to reach the nearest star to the Sun. Travelling at the speed of light (300,000 km per second), it would take 100,000 years to cross our Milky Way galaxy alone.\n            </p>\n            <p>\n                No one knows the exact size of the Universe, because we cannot see the edge – if there is one. All we do know is that the visible Universe is at least 93 billion light years across. (A light year is the distance light travels in one year – about 9 trillion km.)\n            </p>\n        </div>\n        <div id=\"text-generated\" class=\"col-lg-6\">\n            <p id=\"text\">speak anything...</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_recognition__ = __webpack_require__("../../../../../src/app/speech-recognition.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_AngularFireAuth, _db) {
        this._AngularFireAuth = _AngularFireAuth;
        this._db = _db;
        this.window = window;
        this.finalResults = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialise();
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user) {
                _this.updateStorage(user);
                _this.initialiseDatabase();
            }
        });
    };
    AppComponent.prototype.initialise = function () {
        this.textBody = document.getElementById('text');
        this._SpeechRecognition = new __WEBPACK_IMPORTED_MODULE_4__speech_recognition__["a" /* SpeechRecognition */]('en-Uk', true, true, 1);
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
        this.finalResults = this.translatePanctuations(this.finalResults);
        intermidiateResults = this.translatePanctuations(intermidiateResults);
        this.textBody.innerHTML = this.finalResults + '<span style="color:#777">' + intermidiateResults + '</span>';
    };
    AppComponent.prototype.translatePanctuations = function (message) {
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
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.user = null;
            sessionStorage.removeItem('user');
        });
    };
    AppComponent.prototype.login = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.updateStorage = function (user) {
        this.user = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid
        };
        sessionStorage.setItem('user', JSON.stringify(this.user));
    };
    AppComponent.prototype.initialiseDatabase = function () {
        if (this.user && this.user.uid) {
            this.dbList = this._db.list("/" + this.user.uid + "/speech");
            this.dbList.subscribe(function (response) {
                console.log(response);
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ]
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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCyB4cu00prvg504Y_XXVlZaJ15GErwJG8",
        authDomain: "mark-it-1.firebaseapp.com",
        databaseURL: "https://mark-it-1.firebaseio.com",
        projectId: "mark-it-1",
        storageBucket: "mark-it-1.appspot.com",
        messagingSenderId: "978631038383"
    }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map