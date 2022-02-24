(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-settings-settings-module"],{

/***/ "RtnV":
/*!**************************************************!*\
  !*** ./src/app/home/settings/settings.module.ts ***!
  \**************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-routing.module */ "U1Uv");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "o8QG");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "U1Uv":
/*!**********************************************************!*\
  !*** ./src/app/home/settings/settings-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "o8QG");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "c9l9":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">    <div style=\"display: flex;color: white;\">\r\n      <img *ngIf=\"currentDiv=='one'\" style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n\r\n      <ion-icon *ngIf=\"currentDiv=='languages' || currentDiv=='two'\" (click)=\"currentPage('one')\"\r\n        style=\"margin-left: 5px;font-size: 30px;\" name=\"arrow-back\">\r\n\r\n      </ion-icon>\r\n\r\n      <ion-title *ngIf=\"currentDiv=='one'\"\r\n        style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Settings\r\n      </ion-title>\r\n\r\n      <ion-title *ngIf=\"currentDiv=='languages'\"\r\n        style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">LANGUAGES\r\n      </ion-title>\r\n\r\n      <ion-title *ngIf=\"currentDiv=='two'\"\r\n        style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">REQUESTS\r\n      </ion-title>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <div *ngIf=\"currentDiv=='one'\">\r\n      <div style=\"display: flex;justify-content: center;align-items: center;padding-top: 14px;\">\r\n        <div style=\"color: black;display: flex;width: 85%;\">\r\n\r\n          <div\r\n            style=\"background: skyblue;border-radius: 14px;color: white;width: 3.3em;height: 3.3em;text-align: center;position: relative;top: -0.6em;\">\r\n            <ion-label *ngIf=\"storeInfo\" style=\"font-family: impact;font-size: 30px;position: relative;top: 0.34em;\">\r\n              {{storeInfo.bname}}\r\n            </ion-label>\r\n          </div>\r\n\r\n          <div style=\"position: relative;padding-left: 1px;width: 80%;\">\r\n            <ion-title *ngIf=\"storeInfo\"\r\n              style=\"font-weight: bold;font-family: impact;letter-spacing: -0.5px;font-family: 'Baloo Tammudu 2', cursive;\">\r\n            </ion-title>\r\n\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"h-divider\">\r\n        <div class=\"shadow\"></div>\r\n      </div>\r\n\r\n      <div class=\"respcardwrapper\">\r\n\r\n        \r\n\r\n\r\n        <ion-card (click)=\"gotoPage('business-info')\" class=\"card\">\r\n          <div style=\"color: rgb(14, 187, 8);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"business\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n            {{ 'SETTINGS.bi'\r\n            | translate:params}}\r\n          </ion-label>\r\n        </ion-card>\r\n\r\n\r\n\r\n        \r\n\r\n       \r\n\r\n        <ion-card (click)=\"checkRequests()\" class=\"card\">\r\n          <div style=\"color: rgb(182, 12, 12);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"lock-open\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n            {{ 'SETTINGS.ah'\r\n            | translate:params}}\r\n          </ion-label>\r\n        </ion-card>\r\n\r\n\r\n        <ion-card (click)=\"openPlaystore()\" class=\"card\">\r\n          <div style=\"color: rgb(86, 5, 97);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"logo-google-playstore\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n            Rate Us\r\n          </ion-label>\r\n        </ion-card>\r\n\r\n\r\n        <ion-card (click)=\"currentPage('languages')\" class=\"card\">\r\n          <div style=\"color: rgb(95, 39, 2);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"language\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n            {{ 'SETTINGS.ln'\r\n            | translate:params}}\r\n          </ion-label>\r\n        </ion-card>\r\n        <ion-card (click)=\"call()\" class=\"card\">\r\n          <div style=\"color: rgb(83, 56, 4);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"phone-portrait-sharp\"></ion-icon>\r\n           \r\n          </div>\r\n<ion-label class=\"cardtxt\">\r\n           Call Us </ion-label>\r\n        </ion-card>\r\n        <ion-card (click)=\"email()\" class=\"card\">\r\n          <div style=\"color: rgb(47, 36, 206);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"mail-outline\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n           Email Us</ion-label>\r\n        </ion-card>\r\n        <ion-card (click)=\"gotowebsite()\" class=\"card\">\r\n          <div style=\"color: rgb(24, 178, 224);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"logo-xbox\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n           Go to Website</ion-label>\r\n        </ion-card>\r\n        <ion-card (click)=\"watchtutorialvideos()\" class=\"card\">\r\n          <div style=\"color: rgb(218, 17, 44);\">\r\n            <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"play-circle-sharp\"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"cardtxt\">\r\n           See tutorial videos</ion-label>\r\n        </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>    \r\n    \r\n    \r\n\r\n    <div *ngIf=\"currentDiv=='two'\">\r\n      <ion-card *ngFor=\"let boi of helpers\"\r\n        style=\"display: flex;padding-left: 10px;padding-right: 10px;width: 95%;max-height: 6em;color: black;background: rgba(255, 255, 255, 0.349);margin-top: 18px;\">\r\n\r\n\r\n        <img style=\"height: 4em;position: relative;top: 1em;\" src=\"../../../assets/boi.png\" alt=\"\">\r\n        <div style=\"width: 72%;\">\r\n\r\n          <ion-title style=\"font-size: 24px;margin-top: 8px;text-align: center;\" class=\"balu\"> {{boi.name}}</ion-title>\r\n\r\n          <ion-chip\r\n            style=\"position:relative;top: -1.1em;left: 0.4em;display: flex;justify-content: center;align-items: center;text-align: center;\"\r\n            color=\"primary\" mode='ios'>\r\n            <ion-icon style=\"font-size: 14px;margin-right: 2px;\" name=\"call\"></ion-icon>\r\n            {{boi.phone}}\r\n          </ion-chip>\r\n\r\n        </div>\r\n\r\n        <div>\r\n          <ion-icon (click)=\"accept(boi.userID)\" color=\"success\"\r\n            style=\"background: rgba(74, 196, 4, 0.24);font-size: 25px;margin-top: 1em;border-radius: 50%;padding: 5px;position: relative;left: 20px;\"\r\n            name=\"checkmark\">\r\n          </ion-icon>\r\n\r\n        </div>\r\n        \r\n\r\n\r\n      </ion-card>\r\n\r\n      <div *ngIf=\"helpers==undefined\" style=\"height: 4em;width: 100;\">\r\n        NOTHING NEW REQUESTS FOR NOW..!\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"currentDiv=='languages'\">\r\n\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let entry of languagesAvailable\">\r\n          <ion-label style=\"font-family: Verdana;\">{{entry}}</ion-label>\r\n          <ion-checkbox (ionChange)=\"checkboxClick($event,entry)\" mode='ios' slot=\"start\"></ion-checkbox>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </div>\r\n\r\n\r\n\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "o8QG":
/*!************************************************!*\
  !*** ./src/app/home/settings/settings.page.ts ***!
  \************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "c9l9");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "pHfW");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../translate-config.service */ "ZjVV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/add-supplier/add-supplier.page */ "88it");
/* harmony import */ var src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/utility-methods.service */ "fm+l");

















let SettingsPage = class SettingsPage {
    constructor(utility, actionSheetController, firebaseauth, toastController, alertController, callNumber, modalController, router, socialSharing, TranslateConfigService, firestore) {
        this.utility = utility;
        this.actionSheetController = actionSheetController;
        this.firebaseauth = firebaseauth;
        this.toastController = toastController;
        this.alertController = alertController;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.router = router;
        this.socialSharing = socialSharing;
        this.TranslateConfigService = TranslateConfigService;
        this.firestore = firestore;
        this.searchFound = [];
        this.toCollect = 0;
        this.lowStock = 0;
        this.highStock = 0;
        this.stockValue = 0;
        this.salesValue = 0;
        this.languagesAvailable = ['English', 'Gujrati', 'Hindi', 'Marathi', 'Bengali', 'Tamil', 'Malayalam', 'Telugu', 'Kannada'];
        this.currentDiv = 'one';
    }
    call() {
        this.callNumber.callNumber('+919737694267', true);
    }
    email() {
        this.socialSharing.shareViaEmail('Query about smart stock management', 'HI Team,', ['info@smartbusinesssolutions.in']);
    }
    gotowebsite() {
        window.open("https://www.smartbusinessolutions.in/", "_blank");
    }
    watchtutorialvideos() {
        window.open("https://www.youtube.com/channel/UCXQ90ZW8P6J45rhnbDByVhw", "_blank");
    }
    checkPaid() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res) => {
            this.user.paid = res.paid;
            this.user.basic = res.basic;
        });
        if (this.user.paid == 1) {
            this.user.basic = 1;
        }
        window.localStorage.setItem('user', JSON.stringify(this.user));
    }
    currentPage(name) {
        this.currentDiv = name;
    }
    //toasts
    toastCreater() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: this.color,
                duration: 2000,
                message: this.msg,
                animated: true,
                mode: 'ios',
            });
            yield toast.present();
        });
    }
    languageChanged(lang) {
        this.selectedLanguage = lang;
        console.log('language=>', this.selectedLanguage);
        this.TranslateConfigService.setLanguage(this.selectedLanguage);
        this.updateLanguage(this.selectedLanguage);
    }
    updateLanguage(param) {
        this.temp = JSON.parse(window.localStorage.getItem('user'));
        this.temp.language = param;
        window.localStorage.setItem('user', JSON.stringify(this.temp));
    }
    getHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                subHeader: "What is your query?",
                mode: 'ios',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'message',
                        id: 'message',
                        placeholder: "Enter the querry here..",
                    },
                ],
                buttons: [{
                        text: 'GET HELP',
                        handler: data => {
                            this.message = data.message;
                            const user = JSON.parse(window.localStorage.getItem('user'));
                            const text = 'Hi Smart Developers, My name is ' + user.name + ',I am facing following issue' + this.message;
                            alert(text);
                            this.socialSharing.shareViaWhatsAppToPhone('+923168807850', text, "");
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'destructive',
                    }
                ]
            });
            yield alert2.present();
        });
    }
    openPlaystore() {
        console.log('method ');
        window.open('https://play.google.com/store/apps/details?id=com.app.ssm');
    }
    addNote() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                subHeader: "please add a phone number with 913568878952 format",
                mode: 'ios',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'name',
                        id: 'name',
                        placeholder: "Enter the name here..",
                    },
                    {
                        name: 'phone',
                        id: 'phone',
                        type: 'number',
                        placeholder: "Enter the number here..",
                    },
                ],
                buttons: [{
                        text: 'Next',
                        handler: data => {
                            this.phone = data.phone;
                            this.name = data.name;
                            if (!this.name || !this.phone) {
                                this.msg = 'Fields cannot be left blank';
                                this.toastCreater();
                                this.addNote();
                            }
                            else {
                                alert('all okey');
                                const docID = this.storeInfo.docID;
                                const phone = '+' + this.phone;
                                const name = this.name;
                                const timestamp = new Date();
                                this.firestore.collection('helpers', q => q.where('phone', '==', phone)).valueChanges().subscribe((res) => {
                                    console.log('lkaho', res[0].userID + 'phone' + phone);
                                    if (res.length < 1) {
                                        this.msg = 'cannot send invitation user donnot exist!!';
                                        this.toastCreater();
                                    }
                                    else {
                                        const requestStatus = 'recieved';
                                        this.firestore.collection('helpers').doc(res[0].userID).update({
                                            docID,
                                            name,
                                            phone,
                                            timestamp,
                                            requestStatus
                                        }).then(() => {
                                            this.msg = 'helper invitation sent successfully';
                                            this.toastCreater();
                                        }).catch(err => {
                                            this.msg = JSON.stringify(err.message);
                                            this.toastCreater();
                                        });
                                    }
                                });
                            }
                        },
                    }, {
                        text: 'Cancel',
                        role: 'destructive',
                    }]
            });
            yield alert2.present();
        });
    }
    checkRequests() {
        this.currentPage('two');
        let owner = JSON.parse(window.localStorage.getItem('user'));
        console.log('check req', this.storeInfo);
        console.log(owner.phone);
        let owner_phone = '+' + owner.phone;
        this.firestore.collection('helpers', q => q.where('ownerPhone', '==', owner_phone).where('requestStatus', '==', 'pending')).valueChanges().subscribe((data) => {
            console.log(data);
            if (data == '') {
                console.log("We are here");
                this.msg = 'NO new requests at the moment';
                this.toastCreater();
                this.helpers = undefined;
            }
            else {
                console.log("Data is" + data);
                this.helpers = data;
            }
        });
    }
    accept(id) {
        console.log(id);
        let helperphone;
        this.paid = window.localStorage.getItem('paid');
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        if (window.localStorage.getItem('helper')) {
            this.helpers = JSON.parse(window.localStorage.getItem('helpers'));
        }
        else {
            this.helpers = [];
        }
        if (this.paid == 1) {
            const requestStatus = 'approved';
            const docID = this.user.docID;
            let data = {
                id: id,
            };
            this.firestore.collection('stores').doc(docID).update({
                helper: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.arrayUnion(data)
            }).then(() => {
                alert('PERMITED');
                this.currentDiv = 'one';
            }).catch;
            this.firestore.collection('helpers').doc(id).update({
                docID,
                requestStatus,
            }).then(() => {
                alert('PERMITED');
                this.currentDiv = 'one';
            }).catch;
            this.firestore.collection('helpers').doc(id).valueChanges().subscribe((res) => {
                if (res == undefined) {
                }
                else {
                    this.helperphone = res.phone;
                }
            });
            let data1 = {
                id: id,
            };
            this.helpers.push(data1);
            window.localStorage.setItem('helpers', JSON.stringify(this.helpers));
        }
        else {
            this.router.navigate(['cart']);
        }
    }
    logout() {
        this.firebaseauth.auth.signOut();
    }
    getItems() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
        else {
            this.items = [];
        }
        if (window.localStorage.getItem('helpers')) {
            this.lenders = JSON.parse(window.localStorage.getItem('helpers'));
        }
        else {
            this.lenders = [];
        }
        if (window.localStorage.getItem('sales')) {
            this.sales = JSON.parse(window.localStorage.getItem('sales'));
        }
        else {
            this.sales = [];
        }
        if (window.localStorage.getItem('storeInfo')) {
            this.storeInfo = JSON.parse(window.localStorage.getItem('storeInfo'));
        }
        else {
            this.storeInfo = [];
        }
        if (window.localStorage.getItem('sales')) {
            this.sales = JSON.parse(window.localStorage.getItem('sales'));
        }
        else {
            this.sales = [];
        }
        setTimeout(() => {
            this.getInfo();
        }, 600);
    }
    getInfo() {
        this.toCollect = 0;
        this.lowStock = 0;
        this.highStock = 0;
        this.stockValue = 0;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].index = i;
            this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
            if (this.items[i].stock < 10) {
                this.lowStock = this.lowStock + 1;
            }
            if (this.items[i].stock > 30) {
                this.highStock = this.highStock + 1;
            }
        }
        this.toShow = this.items;
        for (var i = 0; i < this.lenders.length; i++) {
            if (this.lenders[i].paid) {
                this.toCollect = this.toCollect + (this.lenders[i].total - this.lenders[i].paid);
            }
            else {
                this.toCollect = this.toCollect + (this.lenders[i].total);
            }
        }
        for (var i = 0; i < this.sales.length; i++) {
            if (this.sales[i].paid) {
                this.salesValue = this.salesValue + Number(this.sales[i].paid);
            }
        }
    }
    gotoPage(pageName) {
        this.router.navigate([pageName]);
    }
    gotoUrl(url) {
        this.router.navigateByUrl(url);
    }
    checkboxClick(e, value) {
        console.log(value);
        this.languageChanged(value);
        var statement = true;
        if (statement) {
            e.checked = true;
        }
        this.msg = 'Language Changed!!';
        this.toastCreater();
        this.currentDiv = 'one';
    }
    addSupplier() {
        this.ModalPage = src_app_add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_12__["AddSupplierPage"];
        this.openModal();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log("we are here***************************");
        this.user = window.localStorage.getItem('user');
        this.getItems();
        this.utility.checkPaid();
        this.utility.checkForBasicService();
        this.paid = JSON.parse(window.localStorage.getItem('paid'));
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.ModalPage,
                cssClass: 'color-modal',
            });
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_13__["UtilityMethodsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "pHfW":
/*!**************************************************!*\
  !*** ./src/app/home/settings/settings.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Francois+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Anton&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Secular+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n.settings {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  color: white;\n}\nion-list {\n  background: none !important;\n}\n.robo {\n  font-family: \"Roboto\", sans-serif;\n}\n.h-divider {\n  margin: auto;\n  width: 80%;\n  position: relative;\n}\n.h-divider .shadow {\n  overflow: hidden;\n  height: 20px;\n}\n.h-divider .shadow:after {\n  content: \"\";\n  display: block;\n  margin: -25px auto 0;\n  width: 100%;\n  height: 25px;\n  border-radius: 125px/12px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.575);\n}\n.h-divider .text {\n  width: 100px;\n  height: 45px;\n  padding: 10px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: -33px;\n  left: 50%;\n  margin-left: -60px;\n  border-radius: 100%;\n  box-shadow: 0 2px 4px #999;\n  background: white;\n}\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.card {\n  min-height: 5em;\n  width: 45%;\n  background-color: rgba(255, 255, 255, 0.801);\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.061);\n  transition: 0.3s;\n  border-radius: 25px;\n  padding-top: 25px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.card .cardtxt {\n  padding-top: 10px;\n  color: rgba(0, 0, 0, 0.459);\n  padding-bottom: 10px;\n  padding-left: 5px;\n  font-weight: bold;\n  font-family: \"Hammersmith One\", sans-serif;\n}\n.flexdisp {\n  display: flex;\n}\n.centertext {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.scrollwrapper {\n  width: auto;\n  overflow-x: scroll;\n  display: flex;\n  padding: 5px;\n}\n.cards {\n  margin-left: 12px;\n  min-width: 160px;\n  min-height: 100px;\n  border-radius: 16px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.055), 0 3px 6px rgba(0, 0, 0, 0.13);\n  display: flex;\n  flex-direction: column;\n  padding: 4px;\n  transition: 0.2s;\n  text-align: center;\n}\n.line-input {\n  margin: 0 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n.line-input ion-item {\n  --border-color: transparent !important;\n  --highlight-height: 0;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 4px;\n}\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 1rem !important;\n}\n.line-input ion-item ion-input {\n  font-family: \"Noto Sans JP\", sans-serif;\n  color: black;\n}\n.prodcard {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(128, 0, 128, 0.404);\n  min-height: 8em;\n  width: 90%;\n  margin-top: 14px;\n  padding-top: 10px;\n  margin-left: 1.5em;\n}\n.balu {\n  font-family: \"Baloo Tammudu 2\";\n}\n.respcardwrapper {\n  flex-wrap: wrap;\n  display: flex;\n  width: 100%;\n}\n.card {\n  width: 43%;\n}\n@media only screen and (max-device-width: 300px) {\n  .card {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpRkFBQTtBQUNBLHVGQUFBO0FBQ0Esb0ZBQUE7QUF5SUEsMEVBQUE7QUFDQSxnRkFBQTtBQUNBLDZGQUFBO0FBRUEsNkZBQUE7QUEzSVI7RUFDSSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREE7RUFDSSwyQkFBQTtBQUlKO0FBRkE7RUFDSSxpQ0FBQTtBQUtKO0FBSEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBTUo7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQU1KO0FBSEE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBTUo7QUFIQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBTUo7QUFIQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBTUo7QUFKQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBT0o7QUFOSTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQVFSO0FBSkE7RUFDSSxhQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFRSjtBQU5BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFTSjtBQVBBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVUo7QUFSQTtFQUNJLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQVdKO0FBVkk7RUFDSSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQVlSO0FBVlE7RUFDSSxtREFBQTtBQVlaO0FBVFE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFXWjtBQVRRO0VBQ0ksdUNBQUE7RUFDQSxZQUFBO0FBV1o7QUFOQTtFQUNJLDZFQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQUFBO0VBQ0ksOEJBQUE7QUFHSjtBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBR0o7QUFEQTtFQUNJLFVBQUE7QUFJSjtBQURBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUFJTjtBQUNGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmFuY29pcytPbmUmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uc2V0dGluZ3Mge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5yb2JvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5oLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmgtZGl2aWRlciAuc2hhZG93IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oLWRpdmlkZXIgLnNoYWRvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0yNXB4IGF1dG8gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI1cHgvMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjU3NSk7XHJcbn1cclxuXHJcbi5oLWRpdmlkZXIgLnRleHQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zM3B4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogNWVtO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNjEpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmNhcmR0eHQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDU5KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIYW1tZXJzbWl0aCBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxufVxyXG5cclxuLmZsZXhkaXNwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNlbnRlcnRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2Nyb2xsd3JhcHBlciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNhcmRzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDU1KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpbmUtaW5wdXQge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzBkYTAyZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEpQXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAxcHggMnB4IHJnYmEoMTI4LCAwLCAxMjgsIDAuNDA0KTtcclxuICAgIG1pbi1oZWlnaHQ6IDhlbTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxufVxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TZWN1bGFyK09uZSZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUYW1tdWR1KzI6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1RhbW11ZHUrMjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIik7XHJcbi5iYWx1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIFRhbW11ZHUgMlwiO1xyXG59XHJcblxyXG4ucmVzcGNhcmR3cmFwcGVyIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAzMDBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=home-settings-settings-module.js.map