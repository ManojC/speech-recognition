webpackJsonp([1],{

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    function AppComponent(_AngularFireAuth, _Router) {
        this._AngularFireAuth = _AngularFireAuth;
        this._Router = _Router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user && user.uid) {
                _this.user = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid
                };
                sessionStorage.setItem('user', JSON.stringify(_this.user));
            }
        });
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
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.home = function () {
        this._Router.navigate(['']);
    };
    AppComponent.prototype.typingTest = function () {
        this._Router.navigate(['speech-recognition', 'typing']);
    };
    AppComponent.prototype.speechTest = function () {
        this._Router.navigate(['speech-recognition', 'speech']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__speech_speech_component__ = __webpack_require__("../../../../../src/app/speech/speech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__keyboard_keyboard_component__ = __webpack_require__("../../../../../src/app/keyboard/keyboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__speech_speech_component__["a" /* SpeechComponent */],
            __WEBPACK_IMPORTED_MODULE_10__keyboard_keyboard_component__["a" /* KeyboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'speech-recognition/speech',
                    component: __WEBPACK_IMPORTED_MODULE_9__speech_speech_component__["a" /* SpeechComponent */]
                },
                {
                    path: 'speech-recognition/typing',
                    component: __WEBPACK_IMPORTED_MODULE_10__keyboard_keyboard_component__["a" /* KeyboardComponent */]
                },
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
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

/***/ "../../../../../src/app/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent() {
        this.sampleText = "The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. The Universe contains billions of galaxies, each containing millions or billions of stars. The space between the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered particles of dust or a few hydrogen atoms per cubic centimeter. Space is also filled with radiation, magnetic fields and high energy particles. The Universe is incredibly huge. It would take a modern jet fighter more than a million years to reach the nearest star to the Sun. No one knows the exact size of the Universe, because we cannot  see the edge if there is one. All we do know is that the visible Universe is at least 93 billion  light years across.";
    }
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.navbar-header h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 10px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}\n\nul {\n    font-size: 18px;\n}\n\nli {\n    margin-top: 5px;\n}\n\nbutton.btn-sm {\n    margin-top: 0;\n    font-size: 12px;\n    font-weight: bold;\n}\n\n.question, .answer {\n    margin-top: 10px;\n    height: 50px;\n    padding: 10px;\n    color: white;\n    background-color: black;\n    font-size: 18px;\n}\n\n.success-test, .error-test {\n    color: green;\n    font-weight: bold;\n    font-size: 20px;\n}\n\n.error-test {\n    color: red;\n}\n\n.test {\n    font-weight: bold;\n    font-size: 20px;\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2 (click)=\"home()\">Home Page</h2>\n            </div>\n            <div class=\"col-lg-2\">\n                <button *ngIf=\"user?.practiceTestPassed\" class=\"btn btn-success col-lg-6\" (click)=\"typingTest()\">\n                    Typing Test\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button *ngIf=\"user?.practiceTestPassed\" class=\"btn btn-success col-lg-6\" (click)=\"speechTest()\">\n                    Speech Test\n                </button>\n            </div>\n            <div class=\"col-lg-5\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h3><u><b>Instructions</b></u> :</h3>\n                </div>\n                <div class=\"col-lg-12\">\n                    <ul>\n                        <li>This application works <b>only on chrome browser.</b></li>\n                        <li>This application will ask for <b>permission to access microphone.</b></li>\n                        <li>The test involves 2 sub tests - <b>Typing</b> & <b>Speech Recognition.</b></li>\n                        <li>\n                            To start the test, click\n                            <button class=\"btn btn-success btn-sm\">Login</button>\n                            button & log in using your <b>google account.</b></li>\n                        <li>After login, a small practice task will appear on the right side of the window.</li>\n                        <li>\n                            Once the practice task is completed,\n                            <button class=\"btn btn-success btn-sm\">Typing Test</button> & \n                            <button class=\"btn btn-success btn-sm\">Speech Test</button> \n                            buttons will appear.\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h3><u><b>Typing Task</b></u> :</h3>\n                </div>\n                <div class=\"col-lg-12\">\n                    <ul>\n                        <li>\n                            click\n                            <button class=\"btn btn-success btn-sm\">Typing Test</button>\n                            button (provided on the top of home window) to navigate to this task.\n                        </li>\n                        <li>\n                            Click\n                            <button class=\"btn btn-success btn-sm\">Start Task</button>\n                            button (provided on the top of typing task window) to start the task.\n                        </li>\n                        <li>\n                            A timer will start as soon as \n                            <button class=\"btn btn-success btn-sm\">Start Task</button>\n                            button is pressed.\n                        </li>\n                        <li>\n                            Start typing the text (provided in left box), in the text box on the right side\n                        </li>\n                        <li>\n                            Press\n                            <button class=\"btn btn-danger btn-sm\"> End Task </button>\n                            button to finish the test & check the results.\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h3><u><b>Speech Task</b></u> :</h3>\n                </div>\n                <div class=\"col-lg-12\">\n                    <ul>\n                        <li>\n                            click\n                            <button class=\"btn btn-success btn-sm\">Speech Test</button>\n                            button (provided on the top of home window) to navigate to this task.\n                        </li>\n                        <li>\n                            Click\n                            <button class=\"btn btn-success btn-sm\">Start Task</button>\n                            button (provided on the top of speech task window) to start the task.\n                        </li>\n                        <li>\n                            A timer will start &\n                            <img src=\"./assets/speech-icon.png\" alt=\"speech icon\">\n                            icon will appear on browser tab once\n                            <button class=\"btn btn-success btn-sm\">Start Task</button>\n                            button is pressed.\n                        </li>\n                        <li>\n                            Start reading the text (provided in left box) loudly.\n                        </li>\n                        <li>\n                            The  spoken words will appear in the right box.\n                        </li>\n                        <li>\n                            Press\n                            <button class=\"btn btn-danger btn-sm\"> End Task </button>\n                            button to finish the test & check the results.\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"user\" class=\"col-lg-6\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2><b>Practice Test</b></h2>\n                </div>\n                <div class=\"col-lg-12\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 test\">\n                            <ul>\n                                <li>\n                                    Press this button to start the test (press again to restart).\n                                    <button class=\"btn btn-success btn-sm\" (click)=\"startSpeech()\">Start Test</button>\n                                </li>\n                                <li>\n                                    Read the text loudly.\n                                </li>\n                                <li>\n                                    Read panctuations (e.g. read  '.' as fullstop & ',' as comma).\n                                </li>\n                                <li>\n                                    Press this button to end the test.\n                                    <button class=\"btn btn-danger btn-sm\" (click)=\"endSpeech(1)\">End Test</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"question\" id=\"question\">\n                                    Elephant, lion, horse, dog, cat are animals.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div id=\"answer\" class=\"answer\">\n                                {{user?.practiceTestPassed ? 'Elephant, lion, horse, dog, cat are animals.' : ''}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div id=\"answer\" class=\"success-test\" *ngIf=\"user?.practiceTestPassed\">\n                                Test passed successfully! Go for the main tests.\n                            </div>\n                            <div id=\"answer\" class=\"error-test\" *ngIf=\"!user?.practiceTestPassed\">\n                                Text is not matching!!\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_recognition__ = __webpack_require__("../../../../../src/app/speech-recognition.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_AngularFireAuth, _Router) {
        this._AngularFireAuth = _AngularFireAuth;
        this._Router = _Router;
        this.translatedtext = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user && user.uid) {
                _this.user = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid,
                    practiceTestPassed: false
                };
                sessionStorage.setItem('user', JSON.stringify(_this.user));
                _this.user.practiceTestPassed = !!sessionStorage.getItem('practiceTestPassed');
            }
        });
    };
    HomeComponent.prototype.startSpeech = function (answerNumber) {
        if (!this.user.practiceTestPassed) {
            this.initialise();
        }
    };
    HomeComponent.prototype.endSpeech = function () {
        this.checkResult();
        this._SpeechRecognition.onresult = null;
    };
    HomeComponent.prototype.initialise = function () {
        document.getElementById("answer").innerHTML = "";
        this.translatedtext = "";
        if (this._SpeechRecognition) {
            this._SpeechRecognition.onresult = this.onResult.bind(this);
            return;
        }
        this._SpeechRecognition = this._SpeechRecognition || new __WEBPACK_IMPORTED_MODULE_4__speech_recognition__["a" /* SpeechRecognition */]('en-GB', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
    };
    HomeComponent.prototype.onResult = function (event) {
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.translatedtext += transcript;
            }
            else {
                intermidiateResults += transcript;
            }
        }
        this.translatedtext = this.translatePanctuations(this.translatedtext);
        intermidiateResults = this.translatePanctuations(intermidiateResults);
        document.getElementById("answer").innerHTML = this.translatedtext + '<span style="color:#777">' + intermidiateResults + '</span>';
    };
    HomeComponent.prototype.checkResult = function () {
        if (document.getElementById("answer").innerText === document.getElementById("question").innerText) {
            this.user.practiceTestPassed = true;
            sessionStorage.setItem('practiceTestPassed', this.user.practiceTestPassed);
        }
    };
    HomeComponent.prototype.translatePanctuations = function (message) {
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
    };
    HomeComponent.prototype.login = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.user = null;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('practiceTestPassed');
        });
    };
    HomeComponent.prototype.home = function () {
        this._Router.navigate(['']);
    };
    HomeComponent.prototype.typingTest = function () {
        this._Router.navigate(['speech-recognition', 'typing']);
    };
    HomeComponent.prototype.speechTest = function () {
        this._Router.navigate(['speech-recognition', 'speech']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 12px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}\n\nh3 {\n    text-align: center;\n    margin: 0 0 10px 0;\n    font-weight: bold;\n}\n\ntextarea#text, #result, #analysis {\n    border: solid thin black;\n    text-align: justify;\n    height: 400px;\n    max-height: 400px;\n    word-wrap: break-word;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 25px;\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#result, #analysis {\n    height: 300px;\n    max-height: 300px;    \n}\n\nli {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2 (click)=\"home()\">Home Page</h2>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" id=\"btn-test\" [class]=\"isStopped ? 'btn btn-success col-lg-12' : 'btn btn-danger col-lg-12'\" (click)=\"timer(isStopped);\">\n                    {{isStopped ? 'Start Test' : 'End Test'}}\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name\">Time - {{time || '00 : 00'}}</span>\n            </div>\n            <div class=\"col-lg-6\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h3>Sample</h3>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>User Input</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <img id=\"image-sample\" src=\".speech-recognition/assets/sample.png\" alt=\"sample-text\">\n        </div>\n        <div id=\"text-generated\" class=\"col-lg-6\">\n            <textarea spellcheck=\"false\" [disabled]=\"isStopped\" class=\"col-lg-12\" id=\"text\"></textarea>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <h3>Difference</h3>\n        </div>\n        <div class=\"col-lg-4\">\n            <h3>Analysis</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div id=\"result\"></div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div id=\"analysis\">\n                <br>\n                <ul *ngIf=\"speech\" class=\"col-lg-offset-1 col-lg-9\">\n                    <li>\n                        <span> Actual Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.actualWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Recognised Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.recognisedWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Correct Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.correctWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> accuracy - </span>\n                        <span class=\"pull-right\"> {{speech.accuracy}}% </span>\n                    </li>\n                    <li>\n                        <span> Completion Time - </span>\n                        <span class=\"pull-right\"> {{speech.completionTime}} seconds </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_diff__ = __webpack_require__("../../../../text-diff/diff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_speech_model__ = __webpack_require__("../../../../../src/app/models/speech.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_component__ = __webpack_require__("../../../../../src/app/base.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KeyboardComponent = (function (_super) {
    __extends(KeyboardComponent, _super);
    function KeyboardComponent(_AngularFireAuth, _db, _Router) {
        var _this = _super.call(this) || this;
        _this._AngularFireAuth = _AngularFireAuth;
        _this._db = _db;
        _this._Router = _Router;
        _this.isStopped = true;
        _this.translatedtext = "";
        _this.diff = new __WEBPACK_IMPORTED_MODULE_4_text_diff__();
        return _this;
    }
    KeyboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user && user.uid) {
                _this.user = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid
                };
                sessionStorage.setItem('user', JSON.stringify(_this.user));
                _this.dbList = _this._db.list("/" + _this.user.uid + "/typing");
            }
        });
    };
    KeyboardComponent.prototype.translatePanctuations = function (message) {
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
    };
    KeyboardComponent.prototype.titleCase = function (message) {
        return message.split('. ').map(function (sentence) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join('. ');
    };
    KeyboardComponent.prototype.logout = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.isStopped = true;
            _this.time = null;
            _this.speech = null;
            document.getElementById('result').innerHTML = "";
            if (_this.resetTimer) {
                clearTimeout(_this.resetTimer);
            }
            _this.user = null;
            sessionStorage.removeItem('user');
        });
    };
    KeyboardComponent.prototype.login = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    KeyboardComponent.prototype.timer = function () {
        var _this = this;
        this.isStopped = !this.isStopped;
        if (this.isStopped) {
            this.processData();
            this.updateData();
            return;
        }
        this.speech = null;
        var time = 0;
        this.startTime = new Date();
        this.resetTimer = setInterval(function () {
            ++time;
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            _this.time = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
        }, 1000);
    };
    KeyboardComponent.prototype.updateData = function () {
        this.dbList.push(this.speech).then(function (response) {
            console.log(response);
        }).catch(function (error) { return console.log(error); });
    };
    KeyboardComponent.prototype.processData = function () {
        clearInterval(this.resetTimer);
        var textDiff = this.diff.main(this.sampleText, document.getElementById('text')['value']);
        document.getElementById('result').innerHTML = this.diff.prettyHtml(textDiff);
        var sampleTextArray = this.sampleText.split(' ');
        var recognisedTextArray = document.getElementById('text')['value'].split(' ');
        this.speech = new __WEBPACK_IMPORTED_MODULE_6__models_speech_model__["a" /* Speech */]();
        this.speech.userName = this.user.displayName;
        this.speech.data = document.getElementById('text')['value'];
        this.speech.diff = document.getElementById('result').innerHTML;
        this.speech.actualWordCount = sampleTextArray.length;
        this.speech.recognisedWordCount = recognisedTextArray.length;
        this.speech.correctWordCount = 0;
        for (var i = 0; i < recognisedTextArray.length; i++) {
            if (sampleTextArray.indexOf(recognisedTextArray[i]) > -1) {
                this.speech.correctWordCount += 1;
                sampleTextArray.splice(sampleTextArray.indexOf(recognisedTextArray[i]), 1);
            }
        }
        this.speech.accuracy = (this.speech.correctWordCount / this.speech.actualWordCount) * 100;
        this.speech.accuracy = parseFloat(this.speech.accuracy.toFixed(2));
        this.speech.completionTime = (new Date().valueOf() - this.startTime.valueOf()) / 1000;
        this.speech.completionTime = parseFloat(this.speech.completionTime.toFixed(2));
    };
    KeyboardComponent.prototype.home = function () {
        this._Router.navigate(['']);
    };
    return KeyboardComponent;
}(__WEBPACK_IMPORTED_MODULE_7__base_component__["a" /* BaseComponent */]));
KeyboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-keyboard',
        template: __webpack_require__("../../../../../src/app/keyboard/keyboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/keyboard/keyboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], KeyboardComponent);

var _a, _b, _c;
//# sourceMappingURL=keyboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/speech.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speech; });
var Speech = (function () {
    function Speech() {
    }
    return Speech;
}());

//# sourceMappingURL=speech.model.js.map

/***/ }),

/***/ "../../../../../src/app/speech-recognition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (function () {
    function SpeechRecognition(lang, continuous, interimResults, maxAlternatives) {
        if ("webkitSpeechRecognition" in window) {
            this.initialise();
            this._SpeechRecognition.lang = 'en-IN';
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

/***/ "../../../../../src/app/speech/speech.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 12px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}\n\nh3 {\n    text-align: center;\n    margin: 0 0 10px 0;\n    font-weight: bold;\n}\n\np#text, #result, #analysis {\n    border: solid thin black;\n    text-align: justify;\n    height: 400px;\n    max-height: 400px;\n    word-wrap: break-word;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 25px;\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#result, #analysis {\n    height: 300px;\n    max-height: 300px;    \n}\n\nli {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/speech/speech.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2 (click)=\"home()\">Home Page</h2>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" id=\"btn-test\" [class]=\"isStopped ? 'btn btn-success col-lg-12' : 'btn btn-danger col-lg-12'\" (click)=\"timer(isStopped);\">\n                    {{isStopped ? 'Start Test' : 'End Test'}}\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name\">Time - {{time || '00 : 00'}}</span>\n            </div>\n            <div class=\"col-lg-6\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h3>Sample</h3>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>User Input</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <img id=\"image-sample\" src=\"speech-recognition/assets/sample.png\" alt=\"sample-text\">\n        </div>\n        <div id=\"text-generated\" class=\"col-lg-6\">\n            <p id=\"text\">recognised speech...</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <h3>Difference</h3>\n        </div>\n        <div class=\"col-lg-4\">\n            <h3>Analysis</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div id=\"result\"></div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div id=\"analysis\">\n                <br>\n                <ul *ngIf=\"speech\" class=\"col-lg-offset-1 col-lg-9\">\n                    <li>\n                        <span> Actual Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.actualWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Recognised Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.recognisedWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Correct Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.correctWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> accuracy - </span>\n                        <span class=\"pull-right\"> {{speech.accuracy}}% </span>\n                    </li>\n                    <li>\n                        <span> Completion Time - </span>\n                        <span class=\"pull-right\"> {{speech.completionTime}} seconds </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/speech/speech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_diff__ = __webpack_require__("../../../../text-diff/diff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__speech_recognition__ = __webpack_require__("../../../../../src/app/speech-recognition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_speech_model__ = __webpack_require__("../../../../../src/app/models/speech.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_component__ = __webpack_require__("../../../../../src/app/base.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SpeechComponent = (function (_super) {
    __extends(SpeechComponent, _super);
    function SpeechComponent(_AngularFireAuth, _db, _Router) {
        var _this = _super.call(this) || this;
        _this._AngularFireAuth = _AngularFireAuth;
        _this._db = _db;
        _this._Router = _Router;
        _this.isStopped = true;
        _this.translatedtext = "";
        _this.diff = new __WEBPACK_IMPORTED_MODULE_4_text_diff__();
        return _this;
    }
    SpeechComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user && user.uid) {
                _this.user = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid
                };
                sessionStorage.setItem('user', JSON.stringify(_this.user));
                _this.dbList = _this._db.list("/" + _this.user.uid + "/speech");
            }
        });
    };
    SpeechComponent.prototype.initialise = function () {
        if (this._SpeechRecognition) {
            return;
        }
        this._SpeechRecognition = this._SpeechRecognition || new __WEBPACK_IMPORTED_MODULE_6__speech_recognition__["a" /* SpeechRecognition */]('en-GB', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
        this.speech = null;
    };
    SpeechComponent.prototype.onResult = function (event) {
        if (this.isStopped) {
            return;
        }
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.translatedtext += transcript;
            }
            else {
                intermidiateResults += transcript;
            }
        }
        this.translatedtext = this.translatePanctuations(this.translatedtext);
        intermidiateResults = this.translatePanctuations(intermidiateResults);
        document.getElementById('text').innerHTML = this.translatedtext + '<span style="color:#777">' + intermidiateResults + '</span>';
    };
    SpeechComponent.prototype.translatePanctuations = function (message) {
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
    };
    SpeechComponent.prototype.titleCase = function (message) {
        return message.split('. ').map(function (sentence) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join('. ');
    };
    SpeechComponent.prototype.logout = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.isStopped = true;
            _this.time = null;
            _this.speech = null;
            document.getElementById('text').innerText = "recognised speech...";
            document.getElementById('result').innerHTML = "";
            if (_this.resetTimer) {
                clearTimeout(_this.resetTimer);
            }
            _this.user = null;
            sessionStorage.removeItem('user');
        });
    };
    SpeechComponent.prototype.login = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    SpeechComponent.prototype.timer = function () {
        var _this = this;
        this.isStopped = !this.isStopped;
        if (this.isStopped) {
            this.processData();
            this.updateData();
            return;
        }
        this.initialise();
        var time = 0;
        this.startTime = new Date();
        this.resetTimer = setInterval(function () {
            ++time;
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            _this.time = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
        }, 1000);
    };
    SpeechComponent.prototype.updateData = function () {
        this.dbList.push(this.speech).then(function (response) {
            console.log(response);
        }).catch(function (error) { return console.log(error); });
    };
    SpeechComponent.prototype.processData = function () {
        clearInterval(this.resetTimer);
        var textDiff = this.diff.main(this.sampleText, document.getElementById('text').innerText);
        document.getElementById('result').innerHTML = this.diff.prettyHtml(textDiff);
        var sampleTextArray = this.sampleText.split(' ');
        var recognisedTextArray = document.getElementById('text').innerText.split(' ');
        this.speech = new __WEBPACK_IMPORTED_MODULE_7__models_speech_model__["a" /* Speech */]();
        this.speech.userName = this.user.displayName;
        this.speech.data = document.getElementById('text').innerText;
        this.speech.diff = document.getElementById('result').innerHTML;
        this.speech.actualWordCount = sampleTextArray.length;
        this.speech.recognisedWordCount = recognisedTextArray.length;
        this.speech.correctWordCount = 0;
        for (var i = 0; i < recognisedTextArray.length; i++) {
            if (sampleTextArray.indexOf(recognisedTextArray[i]) > -1) {
                this.speech.correctWordCount += 1;
                sampleTextArray.splice(sampleTextArray.indexOf(recognisedTextArray[i]), 1);
            }
        }
        this.speech.accuracy = (this.speech.correctWordCount / this.speech.actualWordCount) * 100;
        this.speech.accuracy = parseFloat(this.speech.accuracy.toFixed(2));
        this.speech.completionTime = (new Date().valueOf() - this.startTime.valueOf()) / 1000;
        this.speech.completionTime = parseFloat(this.speech.completionTime.toFixed(2));
    };
    SpeechComponent.prototype.home = function () {
        this._Router.navigate(['']);
    };
    return SpeechComponent;
}(__WEBPACK_IMPORTED_MODULE_8__base_component__["a" /* BaseComponent */]));
SpeechComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-recognition',
        template: __webpack_require__("../../../../../src/app/speech/speech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/speech/speech.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SpeechComponent);

var _a, _b, _c;
//# sourceMappingURL=speech.component.js.map

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