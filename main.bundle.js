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
        this._Router.navigate(['typing']);
    };
    AppComponent.prototype.speechTest = function () {
        this._Router.navigate(['speech']);
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
                    path: 'speech',
                    component: __WEBPACK_IMPORTED_MODULE_9__speech_speech_component__["a" /* SpeechComponent */]
                },
                {
                    path: 'typing',
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

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 12px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2 (click)=\"home()\">Speech Recogniser</h2>\n            </div>\n            <div class=\"col-lg-2\">\n                <button *ngIf=\"user\" class=\"btn btn-success col-lg-8 pull-right\" (click)=\"typingTest()\">\n                    Typing Test\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <button *ngIf=\"user\" class=\"btn btn-success col-lg-8 pull-left\" (click)=\"speechTest()\">\n                    Speech Test\n                </button>\n            </div>\n            <div class=\"col-lg-5\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
                    uid: user.uid
                };
                sessionStorage.setItem('user', JSON.stringify(_this.user));
            }
        });
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
        return message.trim();
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.user = null;
            sessionStorage.removeItem('user');
        });
    };
    HomeComponent.prototype.login = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    HomeComponent.prototype.home = function () {
        this._Router.navigate(['']);
    };
    HomeComponent.prototype.typingTest = function () {
        this._Router.navigate(['typing']);
    };
    HomeComponent.prototype.speechTest = function () {
        this._Router.navigate(['speech']);
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
exports.push([module.i, "h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 12px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}\n\nh3 {\n    text-align: center;\n    margin: 0 0 10px 0;\n    font-weight: bold;\n}\n\ntextarea#text, p#text-sample, #result, #analysis {\n    border: solid thin black;\n    text-align: justify;\n    height: 400px;\n    max-height: 400px;\n    word-wrap: break-word;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 25px;\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#result, #analysis {\n    height: 300px;\n    max-height: 300px;    \n}\n\nli {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2 (click)=\"home()\">Speech Recogniser</h2>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" id=\"btn-test\" [class]=\"isStopped ? 'btn btn-success col-lg-12' : 'btn btn-danger col-lg-12'\" (click)=\"timer(isStopped);\">\n                    {{isStopped ? 'Start Test' : 'End Test'}}\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name\">Time - {{time || '00 : 00'}}</span>\n            </div>\n            <div class=\"col-lg-6\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h3>Input</h3>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Output</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <p id=\"text-sample\">\n                The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies,\n                dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist.\n                The Universe contains billions of galaxies, each containing millions or billions of stars. The space between\n                the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered\n                particles of dust or a few hydrogen atoms per cubic centimeter. Space is also filled with radiation (e.g.\n                light and heat), magnetic fields and high energy particles (e.g. cosmic rays). The Universe is incredibly\n                huge. It would take a modern jet fighter more than a million years to reach the nearest star to the Sun.\n                Travelling at the speed of light (300,000 km per second), it would take 100,000 years to cross our Milky\n                Way galaxy alone. No one knows the exact size of the Universe, because we cannot see the edge – if there\n                is one. All we do know is that the visible Universe is at least 93 billion light years across. (A light year\n                is the distance light travels in one year – about 9 trillion km.)\n            </p>\n        </div>\n        <div id=\"text-generated\" class=\"col-lg-6\">\n            <textarea [disabled]=\"isStopped\" class=\"col-lg-12\" id=\"text\"></textarea>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <h3>Difference</h3>\n        </div>\n        <div class=\"col-lg-4\">\n            <h3>Analysis</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div id=\"result\"></div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div id=\"analysis\">\n                <br>\n                <ul *ngIf=\"speech\" class=\"col-lg-offset-1 col-lg-9\">\n                    <li>\n                        <span> Actual Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.actualWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Recognised Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.recognisedWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Correct Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.correctWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> accuracy - </span>\n                        <span class=\"pull-right\"> {{speech.accuracy}}% </span>\n                    </li>\n                    <li>\n                        <span> Completion Time - </span>\n                        <span class=\"pull-right\"> {{speech.completionTime}} seconds </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KeyboardComponent = (function () {
    function KeyboardComponent(_AngularFireAuth, _db, _Router) {
        this._AngularFireAuth = _AngularFireAuth;
        this._db = _db;
        this._Router = _Router;
        this.isStopped = true;
        this.translatedtext = "";
        this.diff = new __WEBPACK_IMPORTED_MODULE_4_text_diff__();
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
        return message.trim();
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
        var textDiff = this.diff.main(document.getElementById('text-sample').innerText, document.getElementById('text')['value']);
        document.getElementById('result').innerHTML = this.diff.prettyHtml(textDiff);
        var sampleTextArray = document.getElementById('text-sample').innerText.split(' ');
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
}());
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

/***/ "../../../../../src/app/speech/speech.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 12px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}\n\nh3 {\n    text-align: center;\n    margin: 0 0 10px 0;\n    font-weight: bold;\n}\n\np#text, p#text-sample, #result, #analysis {\n    border: solid thin black;\n    text-align: justify;\n    height: 400px;\n    max-height: 400px;\n    word-wrap: break-word;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 25px;\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#result, #analysis {\n    height: 300px;\n    max-height: 300px;    \n}\n\nli {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/speech/speech.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2 (click)=\"home()\">Speech Recogniser</h2>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" id=\"btn-test\" [class]=\"isStopped ? 'btn btn-success col-lg-12' : 'btn btn-danger col-lg-12'\" (click)=\"timer(isStopped);\">\n                    {{isStopped ? 'Start Test' : 'End Test'}}\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name\">Time - {{time || '00 : 00'}}</span>\n            </div>\n            <div class=\"col-lg-6\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h3>Input</h3>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Output</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <p id=\"text-sample\">\n                The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies,\n                dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist.\n                The Universe contains billions of galaxies, each containing millions or billions of stars. The space between\n                the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered\n                particles of dust or a few hydrogen atoms per cubic centimeter. Space is also filled with radiation (e.g.\n                light and heat), magnetic fields and high energy particles (e.g. cosmic rays). The Universe is incredibly\n                huge. It would take a modern jet fighter more than a million years to reach the nearest star to the Sun.\n                Travelling at the speed of light (300,000 km per second), it would take 100,000 years to cross our Milky\n                Way galaxy alone. No one knows the exact size of the Universe, because we cannot see the edge – if there\n                is one. All we do know is that the visible Universe is at least 93 billion light years across. (A light year\n                is the distance light travels in one year – about 9 trillion km.)\n            </p>\n        </div>\n        <div id=\"text-generated\" class=\"col-lg-6\">\n            <p id=\"text\">recognised speech...</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <h3>Difference</h3>\n        </div>\n        <div class=\"col-lg-4\">\n            <h3>Analysis</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div id=\"result\"></div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div id=\"analysis\">\n                <br>\n                <ul *ngIf=\"speech\" class=\"col-lg-offset-1 col-lg-9\">\n                    <li>\n                        <span> Actual Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.actualWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Recognised Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.recognisedWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> Correct Word Count - </span>\n                        <span class=\"pull-right\"> {{speech.correctWordCount}} </span>\n                    </li>\n                    <li>\n                        <span> accuracy - </span>\n                        <span class=\"pull-right\"> {{speech.accuracy}}% </span>\n                    </li>\n                    <li>\n                        <span> Completion Time - </span>\n                        <span class=\"pull-right\"> {{speech.completionTime}} seconds </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SpeechComponent = (function () {
    function SpeechComponent(_AngularFireAuth, _db, _Router) {
        this._AngularFireAuth = _AngularFireAuth;
        this._db = _db;
        this._Router = _Router;
        this.isStopped = true;
        this.translatedtext = "";
        this.diff = new __WEBPACK_IMPORTED_MODULE_4_text_diff__();
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
        this._SpeechRecognition = this._SpeechRecognition || new __WEBPACK_IMPORTED_MODULE_6__speech_recognition__["a" /* SpeechRecognition */]('en-Uk', true, true, 1);
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
        return message.trim();
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
        var textDiff = this.diff.main(document.getElementById('text-sample').innerText, document.getElementById('text').innerText);
        document.getElementById('result').innerHTML = this.diff.prettyHtml(textDiff);
        var sampleTextArray = document.getElementById('text-sample').innerText.split(' ');
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
}());
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