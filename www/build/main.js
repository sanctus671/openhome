webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submissions_submissions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__submissions_submissions__["a" /* SubmissionsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\tabs\tabs.html"*/'<ion-tabs id="tab-navigation">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Submissions" tabIcon="list-box"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_submission_submission__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmissionsPage = (function () {
    function SubmissionsPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.submissions = [];
    }
    SubmissionsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("submissions").then(function (data) {
            if (data) {
                console.log(data);
                _this.submissions = Object.keys(data);
            }
        });
    };
    SubmissionsPage.prototype.selectGroup = function (list) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_submission_submission__["a" /* SubmissionPage */], { list: list });
    };
    return SubmissionsPage;
}());
SubmissionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submissions',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submissions\submissions.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Submissions\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n    <ion-list class="submissions-list">\n        <button ion-item *ngFor="let submissionList of submissions" (click)="selectGroup(submissionList)">\n                {{submissionList}}\n        </button>  \n\n    </ion-list>    \n    \n    \n    \n</ion-content>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submissions\submissions.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
], SubmissionsPage);

var _a, _b;
//# sourceMappingURL=submissions.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmissionPage = (function () {
    function SubmissionPage(navCtrl, storage, params, file, alertCtrl, emailComposer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.params = params;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.submissions = [];
        this.properties = { list: params.data.list };
        this.storage.get("submissions").then(function (data) {
            if (data) {
                console.log(data);
                for (var index in data) {
                    if (index === _this.properties.list) {
                        _this.submissions = data[index];
                        console.log(_this.submissions);
                    }
                }
            }
        });
    }
    SubmissionPage.prototype.getKeys = function (item) {
        return Object.keys(item);
    };
    SubmissionPage.prototype.saveFile = function () {
        var _this = this;
        var csv = this.convertToCSV();
        var fileName = this.properties.list + ".csv";
        this.file.writeFile(this.file.dataDirectory, fileName, csv, { replace: true }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'List saved',
                subTitle: "You can find the file in your data directory",
                buttons: ['OK']
            });
            alert.present();
        }).catch(function (err) {
            _this.file.writeExistingFile(_this.file.dataDirectory, fileName, csv).then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'List saved',
                    subTitle: "You can find the file in your data directory",
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Failed',
                    subTitle: "Couldn't saved this list. Please try again.",
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    SubmissionPage.prototype.convertToCSV = function () {
        var csv = '';
        var line = '';
        var headers = Object.keys(this.submissions[0]);
        //Header
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var header = headers_1[_i];
            if (line !== '') {
                line += ',';
            }
            line += header;
        }
        csv += line + '\r\n';
        //Submissions
        for (var _a = 0, _b = this.submissions; _a < _b.length; _a++) {
            var submission = _b[_a];
            line = '';
            for (var _c = 0, headers_2 = headers; _c < headers_2.length; _c++) {
                var header = headers_2[_c];
                if (line != '')
                    line += ',';
                line += submission[header];
            }
            csv += line + '\r\n';
        }
        return csv;
    };
    SubmissionPage.prototype.sendEmail = function () {
        var email = {
            to: '',
            subject: 'Hi Everyone',
            body: 'Just an update to let you know...',
            isHtml: true
        };
        for (var _i = 0, _a = this.submissions; _i < _a.length; _i++) {
            var submission = _a[_i];
            email.to += submission["email"] ? submission["email"] + "," : "";
        }
        email.to = email.to.replace(/(^,)|(,$)/g, "");
        this.emailComposer.open(email);
    };
    return SubmissionPage;
}());
SubmissionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submission',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submission\submission.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            {{properties.list}}\n        </ion-title>\n        \n        <ion-buttons end>\n            <button ion-button icon-only (click)="saveFile()" class="download-list">\n                <ion-icon name="download"></ion-icon>\n            </button>              \n            <button ion-button icon-only (click)="sendEmail()">\n                <ion-icon name="send"></ion-icon>\n            </button>\n          \n        </ion-buttons>   \n        \n        \n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n    <ion-grid class="submissions-table">\n        <ion-row *ngFor="let submission of submissions">\n            <ion-col *ngFor="let field of getKeys(submission)">\n                <strong>{{field}}</strong>\n                <p>{{submission[field]}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>    \n    \n    \n</ion-content>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submission\submission.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _f || Object])
], SubmissionPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=submission.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_fields_add_field__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_fields_edit_field__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_lists_lists__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, storage, alertCtrl, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.tabbar = document.querySelector("#tab-navigation .tabbar");
        this.fields = [];
        this.storage.get('fields').then(function (data) {
            if (data) {
                _this.fields = data;
            }
            else {
                _this.setupFields();
            }
            console.log(_this.fields);
        });
        this.submission = {};
        this.properties = { list: "default", live: false, background: "assets/img/background.jpg", logo: "assets/img/logo.png", intro: "Please answer the following questions" };
        this.storage.get('currentList').then(function (data) {
            if (data) {
                _this.properties.list = data;
            }
        });
        this.storage.get('isLive').then(function (data) {
            if (data) {
                _this.properties.live = data;
                if (_this.properties.live) {
                    _this.tabbar.style.display = 'none';
                }
            }
        });
        this.storage.get('backgroundImage').then(function (data) {
            if (data) {
                _this.properties.background = data;
            }
        });
        this.storage.get('logoImage').then(function (data) {
            if (data) {
                _this.properties.logo = data;
            }
        });
        this.storage.get('introMessage').then(function (data) {
            console.log(data);
            if (data) {
                _this.properties.intro = data;
            }
        });
    }
    HomePage.prototype.setupFields = function () {
        var fields = [
            {
                name: "name",
                label: "What is your name?",
                inputType: "text",
                required: true,
                order: 1
            },
            {
                name: "email",
                label: "Email Address",
                inputType: "email",
                required: true,
                order: 2
            },
            {
                name: "move",
                label: "When do you need to move?",
                inputType: "select",
                options: [{ value: "0-3 months" }, { value: "4-8 months" }, { value: ">6 months" }],
                required: false,
                order: 3
            }
        ];
        this.storage.set('fields', fields);
        this.fields = fields;
    };
    HomePage.prototype.openAddFieldModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_fields_add_field__["a" /* AddFieldModal */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (!data) {
                return;
            }
            _this.fields.push(data);
            _this.storage.set('fields', _this.fields);
        });
        modal.present();
    };
    HomePage.prototype.openEditFieldModal = function (field) {
        var _this = this;
        if (this.properties.live) {
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_fields_edit_field__["a" /* EditFieldModal */], JSON.parse(JSON.stringify(field)));
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (!data) {
                return;
            }
            for (var index in _this.fields) {
                if (_this.fields[index].name === data.name) {
                    _this.fields[index] = data;
                }
            }
            console.log(_this.fields);
            _this.storage.set('fields', _this.fields);
        });
        modal.present();
    };
    HomePage.prototype.openRemoveField = function (ev, index) {
        var _this = this;
        ev.preventDefault();
        ev.stopPropagation();
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to remove this field?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.fields.splice(index, 1);
                        _this.storage.set("fields", _this.fields);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.reorderFields = function (indexes) {
        var element = this.fields[indexes.from];
        this.fields.splice(indexes.from, 1);
        this.fields.splice(indexes.to, 0, element);
        for (var index in this.fields) {
            this.fields[index].order = index + 1;
        }
        this.storage.set("fields", this.fields);
    };
    HomePage.prototype.openChangeListModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_lists_lists__["a" /* ListsModal */], { list: this.properties.list });
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            _this.properties.list = data;
            _this.storage.set("currentList", _this.properties.list);
        });
        modal.present();
    };
    HomePage.prototype.saveToList = function (submissions) {
        if (submissions[this.properties.list]) {
            submissions[this.properties.list].push(this.submission);
        }
        else {
            submissions[this.properties.list] = [this.submission];
        }
        var submission = this.submission;
        var fields = this.fields;
        this.storage.set('submissions', submissions).then(function () {
            submission = {};
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                field.enteredValue = "";
            }
        });
    };
    HomePage.prototype.saveSubmission = function () {
        var _this = this;
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.required && !field.enteredValue) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Fields Required',
                    subTitle: "You havn't entered information into a field which is required. Please review and submit again.",
                    buttons: ['OK']
                });
                alert_1.present();
                this.submission = {};
                return;
            }
            else if (field.name) {
                this.submission[field.name] = field.enteredValue;
            }
        }
        this.storage.get('submissions').then(function (data) {
            if (data) {
                _this.saveToList(data);
            }
            else {
                _this.saveToList({});
            }
        });
        var alert = this.alertCtrl.create({
            title: 'Thank You!',
            subTitle: "Your information has been saved.",
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.goLive = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to go live?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.properties.live = true;
                        _this.storage.set("isLive", true);
                        _this.tabbar.style.display = 'none';
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.goEditMode = function () {
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            field.enteredValue = "";
            this.submission = {};
        }
        this.properties.live = false;
        this.storage.set("isLive", false);
        this.tabbar.style.display = 'flex';
    };
    HomePage.prototype.setBackground = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1024,
            targetHeight: 1024,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.properties.background = file_uri;
            _this.storage.set("backgroundImage", file_uri);
        }, function (err) { return console.log(err); });
    };
    HomePage.prototype.setLogo = function () {
        var _this = this;
        if (this.properties.live) {
            return;
        }
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1024,
            targetHeight: 1024,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.properties.logo = file_uri;
            _this.storage.set("logoImage", file_uri);
        }, function (err) { return console.log(err); });
    };
    HomePage.prototype.openEditIntro = function () {
        var _this = this;
        if (this.properties.live) {
            return;
        }
        var alert = this.alertCtrl.create({
            title: 'Intro Message',
            inputs: [
                {
                    name: 'message',
                    placeholder: 'Enter Intro Message',
                    value: this.properties.intro
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        if (data.message) {
                            _this.properties.intro = data.message;
                            _this.storage.set("introMessage", data.message);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\home\home.html"*/'\n\n<ion-content padding [ngStyle]="{\'background-image\': \'url(\' + properties.background + \')\'}" class="form-container" [ngClass]="{\'live-mode-container\' : properties.live}">\n    \n    <div class="form-header">         \n        <img [src]="properties.logo" (click)="setLogo()"/>\n        <p (click)="openEditIntro()">{{properties.intro}}</p>\n    </div>\n    \n    <ion-list class="questions">\n        <ion-item-group reorder="{{!properties.live}}" (ionItemReorder)="reorderFields($event)" [ngClass]="{\'edit-mode\' : !properties.live}">\n            <ion-item *ngFor="let field of fields; let i = index" (click)="openEditFieldModal(field)" >\n                \n                <ion-icon name="trash" item-left (click)="openRemoveField($event, i)" *ngIf="!properties.live"></ion-icon>\n                <ion-label floating *ngIf="field.inputType === \'text\' || \n                           field.inputType === \'email\' || \n                           field.inputType === \'number\' || \n                           field.inputType === \'date\' || \n                           field.inputType === \'phone\' || \n                           field.inputType === \'textarea\'">\n                    {{field.label}}\n            </ion-label>\n                \n                <ion-input type="text" *ngIf="field.inputType === \'text\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                <ion-input type="email" *ngIf="field.inputType === \'email\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                <ion-input type="number" *ngIf="field.inputType === \'number\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                \n                <ion-input type="tel" *ngIf="field.inputType === \'phone\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                <ion-datetime displayFormat="DD/MM/YYYY" *ngIf="field.inputType === \'date\'" [(ngModel)]="field.enteredValue"></ion-datetime>\n                \n                <ion-textarea *ngIf="field.inputType === \'textarea\'" [(ngModel)]="field.enteredValue"></ion-textarea>\n                \n                <p *ngIf="field.inputType === \'select\'">{{field.label}}</p>\n                \n                <ion-segment *ngIf="field.inputType === \'select\'" [(ngModel)]="field.enteredValue">\n                    <ion-segment-button *ngFor="let option of field.options" value="{{option.value}}">\n                        {{option.value}}\n                    </ion-segment-button>\n                </ion-segment> \n                \n                \n               \n            </ion-item>\n\n        </ion-item-group>\n        \n        <button ion-button block (click)="openAddFieldModal()" *ngIf="!properties.live">Add Field</button>\n        \n\n        <button ion-button block (click)="saveSubmission()" *ngIf="properties.live">Submit</button>\n    </ion-list>\n    \n    \n    <div class="property-buttons" *ngIf="!properties.live">\n        \n        <button ion-button block color="light" outline (click)="setBackground()" icon-left>\n            <ion-icon name="images"></ion-icon>\n            Background\n        </button>\n        \n        <button ion-button block color="light" outline (click)="openChangeListModal()" icon-left>\n            <ion-icon name="list-box"></ion-icon>    \n            {{properties.list === "default" ? "Current List" : properties.list}}\n        </button>\n        \n    </div>\n    \n    \n    <button ion-button block (click)="goLive()" *ngIf="!properties.live" class="go-live-button">Go Live</button>\n    <button ion-button block (click)="goEditMode()" *ngIf="properties.live" class="go-edit-mode" class="edit-mode-button">Edit Mode</button>\n</ion-content>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFieldModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddFieldModal = (function () {
    function AddFieldModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.field = {
            name: "",
            label: "",
            inputType: "text",
            required: false,
            options: [],
            order: 1
        };
    }
    AddFieldModal.prototype.addOption = function () {
        this.field.options.push("");
    };
    AddFieldModal.prototype.removeOption = function (index) {
        this.field.options.splice(index, 1);
    };
    AddFieldModal.prototype.addField = function () {
        this.viewCtrl.dismiss(this.field);
    };
    AddFieldModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return AddFieldModal;
}());
AddFieldModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'add-field',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\fields\add-field.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Add Field\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-list>\n\n    <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="field.name"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label floating>Label</ion-label>\n        <ion-input type="text" [(ngModel)]="field.label"></ion-input>\n    </ion-item>   \n    \n    <ion-item>\n        <ion-label floating>Field Type</ion-label>\n        <ion-select [(ngModel)]="field.inputType">\n            <ion-option value="text">Text</ion-option>\n            <ion-option value="number">Number</ion-option>\n            <ion-option value="email">Email</ion-option>\n            <ion-option value="phone">Phone</ion-option>\n            <ion-option value="select">Select</ion-option>\n            <ion-option value="textarea">Long Text</ion-option>\n            <ion-option value="date">Date</ion-option>\n        </ion-select>\n    </ion-item>  \n    \n\n    \n    <ion-item-group *ngIf="field.inputType === \'select\'" class="field-options"> \n        <p>Options</p>\n        <ion-item *ngFor="let option of field.options; let i = index" class="from-group details">\n            <ion-label floating>Option {{i + 1}}</ion-label>\n            <ion-input type="text" [(ngModel)]="option.value"></ion-input>\n            <ion-icon name="trash" item-right (click)="removeOption(i)"></ion-icon>\n        </ion-item>        \n        \n        <button ion-button block (click)="addOption()">Add Option</button>\n    </ion-item-group>\n    \n    <ion-item>\n      <ion-label>Required</ion-label>\n      <ion-checkbox [(ngModel)]="field.required"></ion-checkbox>\n    </ion-item>    \n    \n    \n    <button ion-button block (click)="addField()">Add Field</button>\n    \n</ion-list>    \n    \n    \n    \n    \n    \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\fields\add-field.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], AddFieldModal);

//# sourceMappingURL=add-field.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFieldModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditFieldModal = (function () {
    function EditFieldModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        console.log(params);
        this.field = {
            name: params.data.name,
            label: params.data.label,
            inputType: params.data.inputType,
            required: params.data.required,
            options: params.data.options ? params.data.options : [],
            order: params.data.order
        };
        console.log(this.field);
    }
    EditFieldModal.prototype.addOption = function () {
        this.field.options.push({ value: "" });
    };
    EditFieldModal.prototype.removeOption = function (index) {
        this.field.options.splice(index, 1);
    };
    EditFieldModal.prototype.updateField = function () {
        console.log(this.field);
        this.viewCtrl.dismiss(this.field);
    };
    EditFieldModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return EditFieldModal;
}());
EditFieldModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'edit-field',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\fields\edit-field.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Edit Field\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-list>\n\n    <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="field.name"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label floating>Label</ion-label>\n        <ion-input type="text" [(ngModel)]="field.label"></ion-input>\n    </ion-item>   \n    \n    <ion-item>\n        <ion-label floating>Field Type</ion-label>\n        <ion-select [(ngModel)]="field.inputType">\n            <ion-option value="text">Text</ion-option>\n            <ion-option value="number">Number</ion-option>\n            <ion-option value="email">Email</ion-option>\n            <ion-option value="phone">Phone</ion-option>\n            <ion-option value="select">Select</ion-option>\n            <ion-option value="textarea">Long Text</ion-option>\n            <ion-option value="date">Date</ion-option>\n            <ion-option value="time">Time</ion-option>\n        </ion-select>\n    </ion-item>  \n    \n\n    \n    <ion-item-group *ngIf="field.inputType === \'select\'" class="field-options"> \n        <p>Options</p>\n        <ion-item *ngFor="let option of field.options; let i = index" class="from-group details">\n            <ion-label floating>Option {{i + 1}}</ion-label>\n            <ion-input type="text" [(ngModel)]="option.value"></ion-input>\n            <ion-icon name="trash" item-right (click)="removeOption(i)"></ion-icon>\n        </ion-item>        \n        \n        <button ion-button block (click)="addOption()">Add Option</button>\n    </ion-item-group>\n    \n    <ion-item>\n      <ion-label>Required</ion-label>\n      <ion-checkbox [(ngModel)]="field.required"></ion-checkbox>\n    </ion-item>   \n    \n    \n    <button ion-button block (click)="updateField()">Update Field</button>\n    \n    \n</ion-list>    \n    \n    \n    \n    \n    \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\fields\edit-field.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object])
], EditFieldModal);

var _a, _b, _c;
//# sourceMappingURL=edit-field.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListsModal = (function () {
    function ListsModal(platform, params, viewCtrl, storage) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.properties = { list: params.data.list };
        this.lists = ["default"];
        this.storage.get('lists').then(function (data) {
            if (data) {
                _this.lists = data;
            }
        });
    }
    ListsModal.prototype.addList = function (newList) {
        console.log(newList);
        if (!newList) {
            return;
        }
        this.lists.push(newList);
        this.storage.set("lists", this.lists);
    };
    ListsModal.prototype.removeList = function (ev, index) {
        ev.preventDefault();
        ev.stopPropagation();
        this.lists.splice(index, 1);
        this.storage.set("lists", this.lists);
    };
    ListsModal.prototype.selectList = function (list) {
        this.properties.list = list;
        this.viewCtrl.dismiss(this.properties.list);
    };
    ListsModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return ListsModal;
}());
ListsModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'lists',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\lists\lists.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Lists\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    \n<ion-list class="select-list">\n    <button ion-item *ngFor="let list of lists; let i = index;" (click)="selectList(list)" [ngClass]="{\'is-active\':list === properties.list}">\n            <ion-icon name="trash" item-left (click)="removeList($event,i)"></ion-icon>\n        {{ list }}\n    </button>  \n    \n    <ion-item class="from-group details">\n        <ion-label color="primary">Add List</ion-label>\n        <ion-input type="text" [(ngModel)]="newList" placeholder="Enter list name">></ion-input>\n        <ion-icon name="add" item-right (click)="addList(newList);newList=\'\'"></ion-icon>\n    </ion-item>       \n    \n    \n</ion-list>    \n    \n    \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\lists\lists.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], ListsModal);

var _a, _b, _c, _d;
//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_submissions_submissions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_submission_submission__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_fields_add_field__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_fields_edit_field__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_lists_lists__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(202);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_submissions_submissions__["a" /* SubmissionsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_submission_submission__["a" /* SubmissionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__modals_fields_add_field__["a" /* AddFieldModal */],
            __WEBPACK_IMPORTED_MODULE_12__modals_fields_edit_field__["a" /* EditFieldModal */],
            __WEBPACK_IMPORTED_MODULE_13__modals_lists_lists__["a" /* ListsModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_submissions_submissions__["a" /* SubmissionsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_submission_submission__["a" /* SubmissionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__modals_fields_add_field__["a" /* AddFieldModal */],
            __WEBPACK_IMPORTED_MODULE_12__modals_fields_edit_field__["a" /* EditFieldModal */],
            __WEBPACK_IMPORTED_MODULE_13__modals_lists_lists__["a" /* ListsModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map