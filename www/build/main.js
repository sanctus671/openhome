webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submissions_submissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(202);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_submission_submission__ = __webpack_require__(201);
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
    function SubmissionsPage(navCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
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
    SubmissionsPage.prototype.confirmDelete = function (index, listName) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Submissions',
            message: 'Are you sure you want to remove all submissions for this list?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.submissions.splice(index, 1);
                        _this.storage.get("submissions").then(function (data) {
                            if (data) {
                                delete data[listName];
                                _this.storage.set("submissions", data);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return SubmissionsPage;
}());
SubmissionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submissions',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submissions\submissions.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Submissions\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n    <ion-list class="submissions-list">\n        <ion-item-sliding #item *ngFor="let submissionList of submissions; let i = index">\n        <button ion-item  (click)="selectGroup(submissionList)">\n                {{submissionList}}\n        </button>  \n            \n     <ion-item-options side="right">\n      <button ion-button color="danger" (click)="confirmDelete(i, submissionList)">Delete</button>\n    </ion-item-options>           \n            \n            </ion-item-sliding>\n\n    </ion-list>    \n    \n    \n    \n</ion-content>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submissions\submissions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SubmissionsPage);

//# sourceMappingURL=submissions.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_premium_premium__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(52);
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
    function SubmissionPage(navCtrl, events, storage, modalCtrl, params, file, alertCtrl, emailComposer, fileOpener, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.fileOpener = fileOpener;
        this.iab = iab;
        this.submissions = [];
        this.properties = { list: params.data.list, premium: false };
        this.fields = [];
        this.updateData();
        this.storage.get('premium').then(function (data) {
            if (data) {
                _this.properties.premium = data;
            }
        });
        events.subscribe('premium:purchased', function () {
            _this.properties.premium = true;
        });
    }
    SubmissionPage.prototype.ionViewDidEnter = function () {
        this.updateData();
    };
    SubmissionPage.prototype.updateData = function () {
        var _this = this;
        this.storage.get("submissions").then(function (data) {
            if (data) {
                for (var index in data) {
                    if (index === _this.properties.list) {
                        _this.submissions = data[index];
                    }
                }
            }
        });
        this.storage.get('fields').then(function (data) {
            if (data) {
                _this.fields = data;
            }
        });
    };
    SubmissionPage.prototype.getKeys = function (item) {
        return Object.keys(item);
    };
    SubmissionPage.prototype.openPremiumModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_premium_premium__["a" /* PremiumModal */]);
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            _this.properties.premium = data;
            _this.storage.set('premium', data);
            _this.events.publish('premium:purchased');
        });
        modal.present();
    };
    SubmissionPage.prototype.saveFile = function () {
        var _this = this;
        if (!this.properties.premium) {
            this.openPremiumModal();
            return;
        }
        var csv = this.convertToCSV();
        var fileName = this.properties.list + ".csv";
        var fullPath = this.file.dataDirectory + fileName;
        this.file.writeFile(this.file.dataDirectory, fileName, csv, { replace: true }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'List saved',
                subTitle: "You can find the file in your data directory",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'OK',
                        handler: function () { }
                    },
                    {
                        text: 'Open',
                        handler: function () {
                            _this.fileOpener.open(fullPath, "text/csv");
                        }
                    }
                ]
            });
            alert.present();
        }).catch(function (err) {
            _this.file.writeExistingFile(_this.file.dataDirectory, fileName, csv).then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'List saved',
                    subTitle: "You can find the file in your data directory",
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'OK',
                            handler: function () { }
                        },
                        {
                            text: 'Open',
                            handler: function () {
                                _this.fileOpener.open(fullPath, "text/csv");
                            }
                        }
                    ]
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
        if (!this.properties.premium) {
            this.openPremiumModal();
            return;
        }
        var email = {
            to: [],
            subject: 'Hi Everyone',
            body: 'Just an update to let you know...',
            isHtml: true
        };
        for (var _i = 0, _a = this.submissions; _i < _a.length; _i++) {
            var submission = _a[_i];
            if (submission["email"] && submission["email"].indexOf("@")) {
                email.to.push(submission["email"]);
            }
        }
        this.emailComposer.open(email);
    };
    SubmissionPage.prototype.confirmDelete = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Submission',
            message: 'Are you sure you want to remove this submission?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.submissions.splice(index, 1);
                        _this.storage.get("submissions").then(function (data) {
                            if (data) {
                                for (var index in data) {
                                    if (index === _this.properties.list) {
                                        data[index] = _this.submissions;
                                        _this.storage.set("submissions", data);
                                        break;
                                    }
                                }
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SubmissionPage.prototype.openLink = function (fieldName, value) {
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.name === fieldName) {
                if (field.inputType === "phone") {
                    this.iab.create("tel:" + value, "_system");
                }
                else if (field.inputType === "email") {
                    this.iab.create("mailto:" + value, "_system");
                }
            }
        }
    };
    return SubmissionPage;
}());
SubmissionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submission',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submission\submission.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            {{properties.list}}\n        </ion-title>\n        \n        <ion-buttons end>\n            <button ion-button icon-only (click)="saveFile()" class="download-list">\n                <ion-icon name="download"></ion-icon>\n            </button>              \n            <button ion-button icon-only (click)="sendEmail()">\n                <ion-icon name="send"></ion-icon>\n            </button>\n          \n        </ion-buttons>   \n        \n        \n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n    <ion-grid class="submissions-table">\n        <ion-row *ngFor="let submission of submissions;let i = index" (press)="confirmDelete(i)">\n            <ion-col *ngFor="let field of getKeys(submission)">\n                <strong>{{field}}</strong>\n                <p (click)="openLink(field, submission[field])">{{submission[field]}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>    \n    \n    \n</ion-content>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\submission\submission.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], SubmissionPage);

//# sourceMappingURL=submission.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_fields_add_field__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_fields_edit_field__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_lists_lists__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_premium_premium__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_help_help__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_intro_intro__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(208);
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
    function HomePage(navCtrl, events, modalCtrl, storage, alertCtrl, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
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
        });
        this.submission = {};
        this.properties = { list: "default", live: false, background: "assets/img/background.jpg", logo: "assets/img/logo.png", intro: "Please answer the following questions", premium: false };
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
            if (data) {
                _this.properties.intro = data;
            }
        });
        this.storage.get('premium').then(function (data) {
            if (data) {
                _this.properties.premium = true;
            }
        });
        events.subscribe('premium:purchased', function () {
            _this.properties.premium = true;
        });
        this.storage.get("intro").then(function (data) {
            if (!data || !data.seen) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modals_intro_intro__["a" /* IntroModal */]);
                modal.present();
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
    HomePage.prototype.openPremiumModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_premium_premium__["a" /* PremiumModal */]);
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            _this.properties.premium = data;
            _this.storage.set('premium', data);
            _this.events.publish('premium:purchased');
        });
        modal.present();
    };
    HomePage.prototype.openAddFieldModal = function () {
        var _this = this;
        if (this.fields.length > 3 && !this.properties.premium) {
            this.openPremiumModal();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_fields_add_field__["a" /* AddFieldModal */]);
        modal.onDidDismiss(function (data) {
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
            if (!data) {
                return;
            }
            for (var index in _this.fields) {
                if (_this.fields[index].name === data.name) {
                    _this.fields[index] = data;
                }
            }
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
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 100
        };
        this.camera.getPicture(cameraOptions)
            .then(function (imageData) {
            //alert(imageData);
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.properties.background = base64Image;
            _this.storage.set("backgroundImage", base64Image);
        }, function (err) { return console.log(err); });
    };
    HomePage.prototype.setLogo = function () {
        var _this = this;
        if (this.properties.live) {
            return;
        }
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 100
        };
        this.camera.getPicture(cameraOptions)
            .then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.properties.logo = base64Image;
            ;
            _this.storage.set("logoImage", base64Image);
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
    HomePage.prototype.openHelpModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modals_help_help__["a" /* HelpModal */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\home\home.html"*/'\n\n<ion-content padding [ngStyle]="{\'background-image\': \'url(\' + properties.background + \')\'}" class="form-container" [ngClass]="{\'live-mode-container\' : properties.live}">\n    \n    <div class="form-header">         \n        <img [src]="properties.logo" (click)="setLogo()"/>\n        <p (click)="openEditIntro()">{{properties.intro}}</p>\n    </div>\n    \n    <ion-list class="questions">\n        <ion-item-group reorder="{{!properties.live}}" (ionItemReorder)="reorderFields($event)" [ngClass]="{\'edit-mode\' : !properties.live}">\n            <ion-item *ngFor="let field of fields; let i = index" (click)="openEditFieldModal(field)" >\n                \n                <ion-icon name="trash" item-left (click)="openRemoveField($event, i)" *ngIf="!properties.live"></ion-icon>\n                <ion-label floating *ngIf="field.inputType === \'text\' || \n                           field.inputType === \'email\' || \n                           field.inputType === \'number\' || \n                           field.inputType === \'date\' || \n                           field.inputType === \'phone\' || \n                           field.inputType === \'textarea\'">\n                    {{field.label}}\n            </ion-label>\n                \n                <ion-input type="text" *ngIf="field.inputType === \'text\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                <ion-input type="email" *ngIf="field.inputType === \'email\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                <ion-input type="number" *ngIf="field.inputType === \'number\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                \n                <ion-input type="tel" *ngIf="field.inputType === \'phone\'" [(ngModel)]="field.enteredValue"></ion-input>\n                \n                <ion-datetime displayFormat="DD/MM/YYYY" *ngIf="field.inputType === \'date\'" [(ngModel)]="field.enteredValue"></ion-datetime>\n                \n                <ion-textarea *ngIf="field.inputType === \'textarea\'" [(ngModel)]="field.enteredValue"></ion-textarea>\n                \n                <p *ngIf="field.inputType === \'select\'">{{field.label}}</p>\n                \n                <ion-segment *ngIf="field.inputType === \'select\'" [(ngModel)]="field.enteredValue">\n                    <ion-segment-button *ngFor="let option of field.options" value="{{option.value}}">\n                        {{option.value}}\n                    </ion-segment-button>\n                </ion-segment> \n                \n                \n               \n            </ion-item>\n\n        </ion-item-group>\n        \n        <button ion-button block (click)="openAddFieldModal()" *ngIf="!properties.live">Add Field</button>\n        \n\n        <button ion-button block (click)="saveSubmission()" *ngIf="properties.live">Submit</button>\n    </ion-list>\n    \n    \n    <div class="property-buttons" *ngIf="!properties.live">\n        \n        <button ion-button block color="light" outline (click)="setBackground()" icon-left>\n            <ion-icon name="images"></ion-icon>\n            Background\n        </button>\n        \n        <button ion-button block color="light" outline (click)="openChangeListModal()" icon-left>\n            <ion-icon name="list-box"></ion-icon>    \n            {{properties.list === "default" ? "Current List" : properties.list}}\n        </button>\n        \n    </div>\n             \n             \n    <div class="property-buttons help-button" *ngIf="!properties.live">\n        <button ion-button block color="light" outline (click)="openHelpModal()" icon-left>\n            <ion-icon name="help"></ion-icon>    \n            Help\n        </button>                 \n    </div>         \n    \n    \n\n</ion-content>\n\n\n<button ion-button block (click)="goLive()" *ngIf="!properties.live" class="go-live-button">Go Live</button>\n<button ion-button block (click)="goEditMode()" *ngIf="properties.live" class="go-edit-mode" class="edit-mode-button">Edit Mode</button>\n\n<button ion-button block outline (click)="openPremiumModal()" *ngIf="!properties.live && !properties.premium" class="upgrade-button">Upgrade</button>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFieldModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        this.field.options.push({ value: "" });
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], AddFieldModal);

//# sourceMappingURL=add-field.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFieldModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], EditFieldModal);

//# sourceMappingURL=edit-field.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_premium_premium__ = __webpack_require__(53);
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
    function ListsModal(platform, params, events, modalCtrl, viewCtrl, storage) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.properties = { list: params.data.list, premium: false };
        this.newList = "";
        this.lists = ["default"];
        this.storage.get('lists').then(function (data) {
            if (data) {
                _this.lists = data;
            }
        });
        this.storage.get('premium').then(function (data) {
            if (data) {
                _this.properties.premium = data;
            }
        });
        events.subscribe('premium:purchased', function () {
            _this.properties.premium = true;
        });
    }
    ListsModal.prototype.openPremiumModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_premium_premium__["a" /* PremiumModal */]);
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            _this.properties.premium = data;
            _this.storage.set('premium', data);
            _this.events.publish('premium:purchased');
        });
        modal.present();
    };
    ListsModal.prototype.addList = function (ev, newList) {
        ev.stopPropagation();
        ev.preventDefault();
        if (!newList) {
            return;
        }
        if (this.lists.length > 3 && !this.properties.premium) {
            this.openPremiumModal();
            return;
        }
        this.lists.push(newList);
        this.storage.set("lists", this.lists);
        this.newList = "";
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
        selector: 'lists',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\lists\lists.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Lists\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    \n<ion-list class="select-list">\n    <button ion-item *ngFor="let list of lists; let i = index;" (click)="selectList(list)" [ngClass]="{\'is-active\':list === properties.list}">\n            <ion-icon name="trash" item-left (click)="removeList($event,i)"></ion-icon>\n        {{ list }}\n    </button>  \n    \n    <ion-item class="from-group details">\n        <ion-label color="primary">New List</ion-label>\n        <ion-input type="text" [(ngModel)]="newList" placeholder="Enter list name">></ion-input>\n        <button class="add-list-button" item-right (click)="addList($event, newList)"><ion-icon name="add" ></ion-icon></button>\n        \n    </ion-item>       \n    \n    \n</ion-list>    \n    \n    \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\lists\lists.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], ListsModal);

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpModal = (function () {
    function HelpModal(platform, params, iab, viewCtrl, storage, alertCtrl, emailComposer) {
        this.platform = platform;
        this.params = params;
        this.iab = iab;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.contact = { subject: "", message: "" };
    }
    HelpModal.prototype.sendMessage = function () {
        var email = {
            to: ["info@beachliving.co.nz"],
            subject: "Support request: " + this.contact.subject,
            body: 'Message: ' + this.contact.message,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    HelpModal.prototype.openVideo = function () {
        this.iab.create("https://www.useloom.com/share/501ffe7bf0ff4ae2a51d0a3b77e2f46b", "_system");
    };
    HelpModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return HelpModal;
}());
HelpModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'help',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\help\help.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Help\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n\n    <div class="help-list">\n        <ion-list>\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem = !openItem">\n                    Overview\n                    <ion-icon [name]="openItem ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem">\n\n\n                    <p>Collect data from the visitors of your open home. Create a series of questions to ask, and save them to specific lists for different houses. You can watch <a (click)="openVideo()">this video</a> for a thorough overview of the app.</p>\n\n                </ion-item>\n            </div>\n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem2 = !openItem2">\n                    General Usage\n                    <ion-icon [name]="openItem2 ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem2">\n            <p>Running through how your visitor would use the app when they view your open home, tap on the Go Live button to set the app in visitor mode. Your visitor would then fill out the form and tap on submit. This data is then saved to a list that you can view.</p>\n            <img src="assets/img/intro/2.jpg" />\n                </ion-item>\n            </div>       \n\n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem3 = !openItem3">\n                    Accessing Submitted Data\n                    <ion-icon [name]="openItem3 ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem3">\n            <p>Exit visitor mode, and enter edit mode by tapping the top left corner where the Go Live button was. Go into the submissions tab, select your list and view the data that was just submitted.</p>\n            <img src="assets/img/intro/3.jpg" />\n                </ion-item>\n            </div>       \n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem4 = !openItem4">\n                    Editor Mode\n                    <ion-icon [name]="openItem4 ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem4">\n            <p>You can add, edit, reorder, or delete any of the questions that you ask your visitors. Add a field by tapping the Add Field button. Reorder questions by dragging the icon on the right. Delete questions by tapping the trash icon. Edit a question by tapping on it.</p>\n            <img src="assets/img/intro/4.jpg" />\n                </ion-item>\n            </div>     \n\n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem5 = !openItem5">\n                    Lists\n                    <ion-icon [name]="openItem5 ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem5">\n            <p>To manage your lists, tap on the Current List button in the bottom left of the screen. The data will be saved against different lists depending on which list is selected.</p>\n            <img src="assets/img/intro/5.jpg" />\n                </ion-item>\n            </div>                    \n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem6 = !openItem6">\n                    Cosmetic Changes\n                    <ion-icon [name]="openItem6 ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem6">\n            <p>You can make cosmetic changes to app by tapping on the background button to change the background, tapping on the logo to change the logo, and tapping on the intro message to change the text.</p>\n            <img src="assets/img/intro/6.jpg" />\n                </ion-item>\n            </div> \n\n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem7 = !openItem7">\n                    Submissions\n                    <ion-icon [name]="openItem7 ? \'remove-circle\' : \'add-circle\'" item-end ></ion-icon>\n                </ion-list-header>\n                <ion-item *ngIf="openItem7">\n            <p>Tap on the list to view all submissions saved against it. Each list has the option to save as a CSV file and email all respondents.</p>\n            <img src="assets/img/intro/7.jpg" />\n                </ion-item>\n            </div> \n\n\n            <div class="accordion-item">\n                <ion-list-header (click)="openItem8 = !openItem8">\n                    Have a question?\n                    <ion-icon [name]="openItem8 ? \'remove-circle\' : \'add-circle\'" item-end></ion-icon>\n                </ion-list-header>\n\n                <div *ngIf="openItem8">\n\n                    <p class="help-message">\n                        If you require assistance with anything to do with the app, or just need to get in touch, fill out the below form.\n                    </p>\n                    <ion-list class="help-form">\n                        <ion-item>\n                            <ion-label>Subject</ion-label>\n                            <ion-select [(ngModel)]="contact.subject">\n                                <ion-option value="Genereal Help">General Help</ion-option>\n                              <ion-option value="Report Bug">Report Bug</ion-option>\n                              <ion-option value="Feature Request">Feature Request</ion-option>\n                              <ion-option value="Other">Other</ion-option>\n                            </ion-select>\n                        </ion-item>     \n\n\n                        <ion-item class="set-notes">\n                            <ion-label floating>Message</ion-label>\n                            <ion-textarea [(ngModel)]="contact.message"></ion-textarea>\n                        </ion-item>   \n                    </ion-list>   \n\n                    <div class="send-button">\n                        <button ion-button (click)="sendMessage()">\n                            <span ion-text>Send</span>\n                        </button>     \n                    </div>\n\n\n                </div>\n\n            </div> \n\n\n\n        </ion-list>\n    </div>\n  \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\help\help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
], HelpModal);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroModal = (function () {
    function IntroModal(platform, iab, params, viewCtrl, storage, alertCtrl) {
        this.platform = platform;
        this.iab = iab;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.storage.set("intro", { seen: true });
    }
    IntroModal.prototype.openVideo = function () {
        this.iab.create("https://www.useloom.com/share/501ffe7bf0ff4ae2a51d0a3b77e2f46b", "_system");
    };
    IntroModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return IntroModal;
}());
IntroModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'intro',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\intro\intro.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Getting Started\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary">Skip</span>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n        <ion-slides class="intro-slides" pager="true" centeredSlides="false">\n            <ion-slide>\n                <h1>Welcome</h1>\n                <p>Collect data from the visitors of your open home. Create a series of questions to ask, and save them to specific lists for different houses. Learn how to getting started by following this brief introduction or watching <a (click)="openVideo()">this video</a>. </p>\n                <img src="assets/img/intro/1.jpg" />\n            </ion-slide>\n            \n            <ion-slide>\n                <h1>General Usage</h1>\n                <p>Running through how your visitor would use the app when they view your open home, tap on the Go Live button to set the app in visitor mode. Your visitor would then fill out the form and tap on submit. This data is then saved to a list that you can view.</p>\n                <img src="assets/img/intro/2.jpg" />\n            </ion-slide>    \n            \n            <ion-slide>\n                <h1>Accessing Submitted Data</h1>\n                <p>Exit visitor mode, and enter edit mode by tapping the top left corner where the Go Live button was. Go into the submissions tab, select your list and view the data that was just submitted.</p>\n                <img src="assets/img/intro/3.jpg" />\n            </ion-slide>   \n            \n            <ion-slide>\n                <h1>Editor Mode</h1>\n                <p>You can add, edit, reorder, or delete any of the questions that you ask your visitors. Add a field by tapping the Add Field button. Reorder questions by dragging the icon on the right. Delete questions by tapping the trash icon. Edit a question by tapping on it.</p>\n                <img src="assets/img/intro/4.jpg" />\n            </ion-slide>             \n            \n\n            <ion-slide>\n                <h1>Lists</h1>\n                <p>To manage your lists, tap on the Current List button in the bottom left of the screen. The data will be saved against different lists depending on which list is selected.</p>\n                <img src="assets/img/intro/5.jpg" />\n            </ion-slide>  \n\n            <ion-slide>\n                <h1>Cosmetic Changes</h1>\n                <p>You can make cosmetic changes to app by tapping on the background button to change the background, tapping on the logo to change the logo, and tapping on the intro message to change the text.</p>\n                <img src="assets/img/intro/6.jpg" />\n            </ion-slide>              \n\n            <ion-slide>\n                <h1>Submissions</h1>\n                <p>Tap on the list to view all submissions saved against it. Each list has the option to save as a CSV file and email all respondents.</p>\n                <img src="assets/img/intro/7.jpg" />\n            </ion-slide> \n\n\n            <ion-slide>\n                <h1>All Done!</h1>\n                <p>You are now ready to start using the app. You can view this information again at any time by tapping the help button in the bottom right of the screen.</p>\n                <button ion-button block (click)="dismiss()">Get Started</button>\n            </ion-slide> \n            \n        </ion-slides>\n    \n    \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\intro\intro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], IntroModal);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_submissions_submissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_submission_submission__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_fields_add_field__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modals_fields_edit_field__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modals_lists_lists__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modals_premium_premium__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modals_help_help__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modals_intro_intro__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(208);
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
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_submissions_submissions__["a" /* SubmissionsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_submission_submission__["a" /* SubmissionPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__modals_fields_add_field__["a" /* AddFieldModal */],
            __WEBPACK_IMPORTED_MODULE_15__modals_fields_edit_field__["a" /* EditFieldModal */],
            __WEBPACK_IMPORTED_MODULE_16__modals_lists_lists__["a" /* ListsModal */],
            __WEBPACK_IMPORTED_MODULE_17__modals_premium_premium__["a" /* PremiumModal */],
            __WEBPACK_IMPORTED_MODULE_18__modals_help_help__["a" /* HelpModal */],
            __WEBPACK_IMPORTED_MODULE_19__modals_intro_intro__["a" /* IntroModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_submissions_submissions__["a" /* SubmissionsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_submission_submission__["a" /* SubmissionPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__modals_fields_add_field__["a" /* AddFieldModal */],
            __WEBPACK_IMPORTED_MODULE_15__modals_fields_edit_field__["a" /* EditFieldModal */],
            __WEBPACK_IMPORTED_MODULE_16__modals_lists_lists__["a" /* ListsModal */],
            __WEBPACK_IMPORTED_MODULE_17__modals_premium_premium__["a" /* PremiumModal */],
            __WEBPACK_IMPORTED_MODULE_18__modals_help_help__["a" /* HelpModal */],
            __WEBPACK_IMPORTED_MODULE_19__modals_intro_intro__["a" /* IntroModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
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
            splashScreen.hide();
            if (platform.is("android")) {
                statusBar.styleLightContent();
            }
            else {
                statusBar.styleDefault();
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PremiumModal = (function () {
    function PremiumModal(platform, params, viewCtrl, storage, iap, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.iap = iap;
        this.alertCtrl = alertCtrl;
        this.product = { price: "$9.99", title: "Premium", productId: "com.openhome.app.premium" };
        this.iap
            .getProducts(['com.openhome.app.premium'])
            .then(function (products) {
            if (products.length > 0) {
                _this.product = products[0];
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    }
    PremiumModal.prototype.buyPremium = function () {
        var _this = this;
        this.iap
            .buy('com.openhome.app.premium')
            .then(function (data) {
            _this.viewCtrl.dismiss(true);
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: "There was an error trying to activate premium. Contact us immediately to resolve.",
                buttons: ['OK']
            });
            alert.present();
            //alert(JSON.stringify(err));
            console.log(err);
        });
    };
    PremiumModal.prototype.restorePremium = function () {
        var _this = this;
        this.iap.restorePurchases().then(function (products) {
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var product = products_1[_i];
                if (product.productId === _this.product.productId) {
                    _this.viewCtrl.dismiss(true);
                    return;
                }
            }
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: "Could not restore premium as we couldn't find it in your purchases.",
                buttons: ['OK']
            });
            alert.present();
        })
            .catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: "There was an error trying to restore your purchase.",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    PremiumModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return PremiumModal;
}());
PremiumModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'premium',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\premium\premium.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Upgrade To Premium\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <div class=\'premium-header\'>    \n        <h1>Upgrade to premium to continue</h1>\n        <p>See below for the full features you get from upgrading</p>\n        <button ion-button block (click)="buyPremium()">Upgrade Now - {{product.price}}</button>\n    </div>    \n    \n    <ion-list class=\'premium-list\'>\n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Unlimited fields</h2>\n            <p>Don\'t be restricted to just 4 fields. Add as many fields as you need.</p>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Unlimited lists</h2>\n            <p>Create individual lists for each property or location.</p>\n        </ion-item>    \n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Export submissions</h2>\n            <p>Save your submissions for each list to CSV for further analysis.</p>\n        </ion-item>    \n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Email your respondents</h2>\n            <p>Easily send group emails to the respondents in your lists.</p>\n        </ion-item>    \n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Priority support</h2>\n            <p>Stuck with something? We\'ll help right away.</p>\n        </ion-item>    \n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Priority feature requests</h2>\n            <p>Have an idea for a new feature? We\'ll listen and add it to future releases.</p>\n        </ion-item>              \n    </ion-list>  \n    \n    \n    <div class="restore">\n        <p>Already purchased premium?</p>\n        <button ion-button outline block (click)="restorePremium()">Restore Premium</button>\n    </div>\n    \n    \n</ion-content>'/*ion-inline-end:"D:\Taylor\Documents\Websites\openhome\openHome\src\modals\premium\premium.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PremiumModal);

//# sourceMappingURL=premium.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map