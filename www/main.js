(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+to8":
/*!*****************************************************!*\
  !*** ./src/app/excel-import/excel-import.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Assistant&display=swap\");\n.assis {\n  font-family: \"Assistant\", sans-serif;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.61);\n  display: flex;\n  justify-content: center;\n  margin-top: 5px;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4Y2VsLWltcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFFUjtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiZXhjZWwtaW1wb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Bc3Npc3RhbnQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLmFzc2lzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/spi/Desktop/personal/workspace/ssm_latest1/src/main.ts */"zUnb");


/***/ }),

/***/ "3cgj":
/*!***************************************************!*\
  !*** ./src/app/select-item/select-item.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtaXRlbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "7MQr":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-item/select-item.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Selecting Supplier..</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let boi of suppliers\">\r\n    <ion-item mode=\"ios\" button (click)=\"selectSupplier(boi)\">\r\n      {{boi.name}}\r\n    </ion-item>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\" (click) = \"addSupplier()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "88it":
/*!***************************************************!*\
  !*** ./src/app/add-supplier/add-supplier.page.ts ***!
  \***************************************************/
/*! exports provided: AddSupplierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierPage", function() { return AddSupplierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_supplier_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-supplier.page.html */ "zBF/");
/* harmony import */ var _add_supplier_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-supplier.page.scss */ "OfI2");
/* harmony import */ var _contacts_list_contacts_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contacts-list/contacts-list.page */ "U7e9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");









let AddSupplierPage = class AddSupplierPage {
    constructor(modalCtrl, toastController, fireStore) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.fireStore = fireStore;
        this.choice = "";
    }
    ionViewWillEnter() {
        this.paid = window.localStorage.getItem("paid");
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Supplier Added!',
                duration: 2000,
                color: 'success',
            });
            toast.present();
        });
    }
    setChoice(choice) {
        this.choice = choice;
    }
    getSuppliers() {
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
            this.suppliers = [];
        }
    }
    getcustomers() {
        if (window.localStorage.getItem('customers')) {
            this.customers = JSON.parse(window.localStorage.getItem('customers'));
        }
        else {
            this.customers = [];
        }
    }
    addCustomer() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if (this.customers == undefined) {
            this.customers = [];
        }
        if (this.suppliers == undefined) {
            this.suppliers = [];
        }
        if (this.suppliers == undefined) {
            this.suppliers = [];
        }
        if (this.address == undefined) {
            this.address = "";
        }
        if (this.gstin == undefined) {
            this.gstin = "";
        }
        let data = {
            name: this.name,
            phone: this.phone,
            address: this.address,
            gstin: this.gstin
        };
        console.log(data);
        this.customers.push(data);
        window.localStorage.setItem('customers', JSON.stringify(this.customers));
        if (this.paid == 1) {
            this.fireStore.collection('stores').doc(this.user.docID).update({
                customers: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(data)
            });
        }
        this.presentToast();
        this.modalCtrl.dismiss(data);
    }
    addSupplier() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if (this.suppliers == undefined) {
            this.suppliers = [];
        }
        if (this.address == undefined) {
            this.address = "";
        }
        if (this.company_name == undefined) {
            this.company_name = "";
        }
        let data = {
            name: this.name,
            phone: this.phone.includes('+') ? this.phone : '+91' + this.phone,
            address: this.address,
            company_name: this.company_name
        };
        this.suppliers.push(data);
        window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
        if (this.paid == 1) {
            this.fireStore.collection('stores').doc(this.user.docID).update({
                suppliers: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(data)
            });
        }
        this.presentToast();
        this.modalCtrl.dismiss(data);
    }
    close() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
        this.getSuppliers();
        this.getcustomers();
    }
    showContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var modal = yield this.modalCtrl.create({
                component: _contacts_list_contacts_list_page__WEBPACK_IMPORTED_MODULE_3__["ContactsListPage"],
                backdropDismiss: false,
            });
            modal.onDidDismiss().then(data => {
                if (data.role == 'selected') {
                    const contact = data.data.contact;
                    this.name = contact.name;
                    this.phone = contact.phone.toString().replace(/\s+/g, '');
                }
            });
            modal.present();
        });
    }
};
AddSupplierPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
AddSupplierPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-supplier',
        template: _raw_loader_add_supplier_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_supplier_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddSupplierPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyBGIs0pZU3wK6UBDuhzi2ZZEQ8vPmn-ZAo",
        authDomain: "smartstockmanagement-335915.firebaseapp.com",
        projectId: "smartstockmanagement-335915",
        storageBucket: "smartstockmanagement-335915.appspot.com",
        messagingSenderId: "636268836328",
        appId: "1:636268836328:web:594a74418c0294d388a05d",
        measurementId: "G-B0JLXVG853"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F3z4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addsupplier1/addsupplier1.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n \n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\n \n  \">   <div style=\"display: flex;color: white;\">\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">ADD PARTY\n      </ion-title>\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\n        <p style=\"color: white;font-family: Impact;\">\n          EXIT\n        </p>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content > \n  \n\n  <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\n    <div\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\n\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\n        ADD A SUPPLIER\n      </h2>\n\n      <div align=\"center\">\n        <ion-button shape=\"round\" (click)=\"showContact()\">Add from phone</ion-button>\n      </div>\n\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\n        <ion-input placeholder=\"Enter name of supplier\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\n        <ion-input type=\"tel\" placeholder=\"Enter phone of supplier\" [(ngModel)]=\"phone\"></ion-input>\n      </ion-item>\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Enter Company Name of supplier\" [(ngModel)]=\"company_name\"></ion-input>\n      </ion-item>\n\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Enter Address of supplier\" [(ngModel)]=\"address\"></ion-input>\n      </ion-item>\n\n\n\n\n      <div style=\"margin-top: 25px;width: 60%;\">\n        <ion-button class=\"shadow-red\" (click)=\"addSupplier()\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\n            Continue\n          </p>\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </div>\n\n    </div>\n\n  </div>\n  </ion-content>\n");

/***/ }),

/***/ "ILKU":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/excel-import/excel-import.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Upload Excel File\r\n      </ion-title>\r\n      \r\n      <ion-icon (click)=\"close()\" style=\"position: relative;top: 0.3em;font-size: 30px;right: 3px;\" color=\"light\"\r\n        name=\"close-circle\">\r\n      </ion-icon>\r\n      \r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div style=\"padding:10px\">\r\n    <ion-label class=\"assis\">\r\n    \r\n      {{'UPLOADEXCEL.ins' | translate:params}}\r\n    </ion-label>\r\n\r\n    <input type=\"file\" (change)=\"selectFile($event)\">\r\n\r\n    <div *ngIf=\"tempItems\" style=\"margin-top: 1em;\">\r\n      <ion-item *ngFor=\"let item of tempItems\">\r\n        {{item.name}}\r\n      </ion-item>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"padding: 5px;\">\r\n  <ion-button *ngIf=\"tada\" mode='ios' size=\"block\" (click)=\"addItems()\"> {{ 'UPLOADEXCEL.btn' | translate:params}}\r\n  </ion-button>\r\n  <ion-button *ngIf=\"!tada\" mode='ios' disabled='true' size=\"block\"> {{ 'UPLOADEXCEL.btn' |\r\n    translate:params}}</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "IZCz":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts-list/contacts-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <ion-grid class=\"search-item\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-padding-left\">\r\n        <ion-icon class=\"glassimg\" name=\"search\"></ion-icon>\r\n        <ion-input [(ngModel)]=\"searchBar\" (ionChange)=\"getItems(searchBar)\" placeholder=\"Search\" class=\"inmp\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list no-lines>\r\n    <!-- <ion-list-header no-lines class=\"ion-padding-top\">\r\n      <ion-label>\r\n          Contacts List\r\n      </ion-label>\r\n    </ion-list-header>  -->\r\n\r\n    <ion-item *ngFor=\"let contact of contacts\" (click)=\"getPhone(contact)\" fill=\"clear\" color=\"light\" style=\"width: 100%;\">\r\n      <ion-item lines=\"none\" fill=\"clear\" color=\"light\" style=\"width: 100%;\">\r\n        <ion-label class=\"ion-text-wrap\">\r\n          {{ contact.name }} : {{contact.phone}}\r\n        </ion-label>\r\n        <ion-icon name=\"checkmark\" slot=\"end\" item-end *ngIf='contact.phone == phoneNumber'></ion-icon>\r\n      </ion-item>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"margin-bottom: env(safe-area-inset-bottom); padding-top: 6px;\" class=\"ion-text-center\">\r\n  <ion-toolbar align=\"center\">\r\n    <ion-button fill=\"round\" (click)=\"selected()\" color=\"success\">Ok</ion-button>&nbsp;&nbsp;&nbsp;\r\n    <ion-button fill=\"round\" (click)=\"dismissModal()\" class=\"close\">Close</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "JMA9":
/*!*********************************************!*\
  !*** ./src/app/add-item/add-item.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap\");\nion-item {\n  background: white !important;\n  border: 1px solid black;\n  border-radius: 14px;\n  width: 70%;\n}\nion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.shadow-red {\n  border-radius: 10px;\n}\nion-card {\n  min-width: 90%;\n  padding: 15px;\n}\n.container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.h-divider {\n  margin: auto;\n  margin-top: 80px;\n  width: 80%;\n  position: relative;\n}\n.h-divider .shadow {\n  overflow: hidden;\n  height: 20px;\n}\n.h-divider .shadow:after {\n  content: \"\";\n  display: block;\n  margin: -25px auto 0;\n  width: 100%;\n  height: 25px;\n  border-radius: 125px/12px;\n  box-shadow: 0 0 8px black;\n}\n.h-divider .text {\n  width: 100px;\n  height: 45px;\n  padding: 10px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: -22px;\n  left: 50%;\n  margin-left: -60px;\n  border-radius: 100%;\n  box-shadow: 0 2px 4px rgba(59, 5, 5, 0.123);\n  background: white;\n  font-family: verdana;\n}\n.h-divider .text i {\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  left: 4px;\n  right: 4px;\n  border-radius: 100%;\n  border: 1px solid #aaa;\n  text-align: center;\n  line-height: 50px;\n  font-style: normal;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRlEsOEZBQUE7QUFyRlI7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRUo7QUFESTtFQUNJLG1EQUFBO0FBR1I7QUFBQTtFQUNJLG1CQUFBO0FBR0o7QUFEQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBSUo7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSUo7QUFEQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBQUlKO0FBREE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7QUFERTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFJSjtBQURFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUlKO0FBREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlKIiwiZmlsZSI6ImFkZC1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMwZGEwMmQpO1xyXG4gICAgfVxyXG59XHJcbi5zaGFkb3ctcmVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uaC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuaC1kaXZpZGVyIC5zaGFkb3cge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmgtZGl2aWRlciAuc2hhZG93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0yNXB4IGF1dG8gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI1cHgvMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5oLWRpdmlkZXIgLnRleHQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDU5LCA1LCA1LCAwLjEyMyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gIH1cclxuICBcclxuICAuaC1kaXZpZGVyIC50ZXh0IGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIHJpZ2h0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIFxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4iXX0= */");

/***/ }),

/***/ "OfI2":
/*!*****************************************************!*\
  !*** ./src/app/add-supplier/add-supplier.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap\");\nion-item {\n  background: white !important;\n  border: 1px solid black;\n  border-radius: 14px;\n  width: 70%;\n}\nion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.shadow-red {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1zdXBwbGllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVEsOEZBQUE7QUFaUjtFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFFSjtBQURJO0VBQ0ksbURBQUE7QUFHUjtBQUFBO0VBQ0ksbUJBQUE7QUFHSiIsImZpbGUiOiJhZGQtc3VwcGxpZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzBkYTAyZCk7XHJcbiAgICB9XHJcbn1cclxuLnNoYWRvdy1yZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpOyJdfQ== */");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_item_add_item_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-item/add-item.page */ "w6bI");
/* harmony import */ var _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-supplier/add-supplier.page */ "88it");
/* harmony import */ var _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-supplier/select-supplier.page */ "mLb4");
/* harmony import */ var _select_item_select_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-item/select-item.page */ "jD7L");
/* harmony import */ var _excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../excel-import/excel-import.page */ "kc0D");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_5__["AddItemPage"], _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_6__["AddSupplierPage"], _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_7__["SelectSupplierPage"], _select_item_select_item_page__WEBPACK_IMPORTED_MODULE_8__["SelectItemPage"], _excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_9__["ExcelImportPage"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        ],
        exports: [_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_5__["AddItemPage"], _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_6__["AddSupplierPage"], _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_7__["SelectSupplierPage"], _select_item_select_item_page__WEBPACK_IMPORTED_MODULE_8__["SelectItemPage"], _excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_9__["ExcelImportPage"]]
    })
], SharedModule);



/***/ }),

/***/ "PnTl":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-supplier/select-supplier.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: #2b5876;  /* fallback for old browsers */\r\n  --background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n  --background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  \">\r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Select from suppliers\r\n      </ion-title>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"display: flex;justify-content: center;align-items: center;\">\r\n\r\n    <ion-list style=\"width: 80%;position: relative;top: 1em;\" class=\"line-input\">\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-input (ionChange)=\"searchItem()\" [(ngModel)]=\"searchParam\"\r\n          placeholder=\"enter supplier name to search...\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div *ngFor=\"let boi of toShow\">\r\n    <ion-item mode=\"ios\" button (click)=\"selectSupplier(boi)\">\r\n      {{boi.name}}  {{boi.phone}}\r\n    </ion-item>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\" (click)=\"addSupplier()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translate-config.service */ "ZjVV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");




//import { FCM } from '@ionic-native/fcm/ngx';











let AppComponent = class AppComponent {
    constructor(auth, router, platform, splashScreen, statusBar, firestore, datePipe, translateConfigService, 
    // private fcm: FCM,
    onesignal, alertCtrl) {
        this.auth = auth;
        this.router = router;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.firestore = firestore;
        this.datePipe = datePipe;
        this.translateConfigService = translateConfigService;
        this.onesignal = onesignal;
        this.alertCtrl = alertCtrl;
        // this.initializeApp();
        console.log("Forwarding to login");
        this.checkLogin();
    }
    checkLogin() {
        console.log("checkLogin()");
        this.auth.authState.subscribe(user => {
            if (user && user.uid) {
                if (window.localStorage.getItem('user')) {
                    this.user = JSON.parse(window.localStorage.getItem('user'));
                    console.log(console.log(this.user.usertype));
                    if (this.user.uType == 'Owner') {
                        if (this.user.docID) {
                            this.router.navigate(['home/dashboard']);
                        }
                        else {
                            this.router.navigate(['ownerpage']);
                        }
                    }
                    else if (this.user.uType == '1') {
                        if (this.user.docID) {
                            this.checkRequestsSent(user.uid);
                        }
                        else {
                            this.router.navigate(['home/inventory']);
                        }
                    }
                }
                else {
                    this.router.navigate(['login']);
                }
            }
            else {
                this.router.navigate(['login']);
            }
        });
    }
    checkRequestsSent(userID) {
        this.firestore.collection('helpers').doc(userID).valueChanges().subscribe((data) => {
            console.log('just to chekc', data);
            if (data == undefined) {
                console.log('no user found on firebase');
            }
            else if (data.requestStatus) {
                if (data.requestStatus == 'pending') {
                    this.router.navigate(['helperpage']);
                }
                else if (data.requestStatus == 'recieved') {
                    this.router.navigate(['helperpage']);
                }
                else if (data.requestStatus == 'approved') {
                    this.router.navigate(['home/inventory']);
                }
            }
            else {
                this.router.navigate(['helperpage']);
                console.log('na request sent na recienved');
            }
        });
    }
    checkUpload() {
        if (window.localStorage.getItem('itemsToBeUploaded')) {
            this.itemsToBeUploaded = JSON.parse(window.localStorage.getItem('itemsToBeUploaded'));
            this.user = JSON.parse(window.localStorage.getItem('user'));
            for (var i = 0; i < this.itemsToBeUploaded.length; i++) {
                this.firestore.collection('stores').doc(this.user.docID).update({
                    items: firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.arrayUnion(this.itemsToBeUploaded[i])
                }).then(() => {
                    this.itemsToBeUploaded.splice(i, 1);
                });
            }
        }
        else {
            this.itemsToBeUploaded = [];
        }
        if (window.localStorage.getItem('salesToBeUpload')) {
            this.salesToBeUpload = JSON.parse(window.localStorage.getItem('salesToBeUpload'));
            this.user = JSON.parse(window.localStorage.getItem('user'));
            for (var i = 0; i < this.salesToBeUpload.length; i++) {
                const sale = JSON.stringify(this.salesToBeUpload[i]);
                const pathDate = this.datePipe.transform(this.salesToBeUpload[i].date, 'ddMMyyyy');
                const sub = this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(pathDate).get().subscribe(data2 => {
                    if (data2.exists) {
                        this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(pathDate).update({
                            sales: firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.arrayUnion(sale)
                        }).then(data2 => this.salesToBeUpload.splice(i, 1));
                        sub.unsubscribe();
                    }
                    else {
                        this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(pathDate).set({
                            sales: firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.arrayUnion(sale)
                        }).then(data2 => this.salesToBeUpload.splice(i, 1));
                        sub.unsubscribe();
                    }
                });
            }
        }
        else {
            this.salesToBeUpload = [];
        }
    }
    languageChanged(lang) {
        this.selectedLanguage = lang;
        console.log('language=>', this.selectedLanguage);
        this.translateConfigService.setLanguage(this.selectedLanguage);
    }
    getUserLanguage() {
        this.temp = JSON.parse(window.localStorage.getItem('user'));
        if (!this.temp) {
            console.log('no user found');
            this.router.navigate(['login']);
        }
        else {
            console.log(this.temp);
            this.languageChanged(this.temp.language);
        }
    }
    getplayerID() {
        this.onesignal.getIds().then(i => {
            console.log('id->' + i.userId);
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            console.log('platform ready');
            this.statusBar.show();
            this.statusBar.backgroundColorByHexString("ffffff");
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            //this.checkLogin();
            // this.checkUpload();
            // this.getUserLanguage();
            //Is your phone connected!!
            //yes!! okey and did you installed plugin???onesignal?yes it is installed, Run tis code nd make sale to check notifications!! 
            //didn't got you,,build and test the notifications make a sale using pos !!!Can we have a call?sure! on hangouts? 
            this.onesignal.startInit('493d92dc-dc92-429f-bbd5-4574bda77623', '935392129637');
            this.onesignal.endInit();
            this.getplayerID();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "U7e9":
/*!*****************************************************!*\
  !*** ./src/app/contacts-list/contacts-list.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsListPage", function() { return ContactsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacts_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacts-list.page.html */ "IZCz");
/* harmony import */ var _contacts_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts-list.page.scss */ "UnEX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "TzAO");






let ContactsListPage = class ContactsListPage {
    constructor(contact, modalCtrl, loadingController, alertController) {
        this.contact = contact;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.contacts = [];
        this.searchContacts = [];
        this.phoneNumber = '';
    }
    ngOnInit() {
        this.getContactList();
    }
    getContactList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const loading = await this.loadingController.create({
            //   message: 'contactlist loading',
            // });
            // await loading.present();
            this.contact.find(["displayName", "phoneNumbers"], { multiple: true }).then((data) => {
                console.log("contact info == : ", data);
                for (let i in data) {
                    var ccc = data[i];
                    var pp = [];
                    if (ccc["_objectInstance"].phoneNumbers) {
                        pp = ccc["_objectInstance"].phoneNumbers;
                        for (let j in pp) {
                            let cc = {};
                            cc["name"] = ccc["_objectInstance"].name.formatted;
                            cc["phone"] = pp[j].value;
                            this.contacts.push(cc);
                            this.searchContacts.push(cc);
                        }
                    }
                }
                // loading.dismiss();
                if (this.contacts.length === 0) {
                    this.presentAlert("Contact list", "There is no contact.");
                }
            });
        });
    }
    presentAlert(type, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: type,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getPhone(contact) {
        this.phoneNumber = contact.phone;
        this.selectedContact = contact;
    }
    initializeItems() {
        this.contacts = this.searchContacts;
    }
    getItems(ccc) {
        console.log("contact search === ", ccc);
        this.initializeItems();
        let q = ccc;
        if (!q) {
            return;
        }
        this.contacts = this.contacts.filter(item => item.name.toLowerCase().indexOf(q.toLowerCase()) > -1);
    }
    selected() {
        this.modalCtrl.dismiss({ contact: this.selectedContact }, 'selected');
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ContactsListPage.ctorParameters = () => [
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ContactsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts-list',
        template: _raw_loader_contacts_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactsListPage);



/***/ }),

/***/ "UnEX":
/*!*******************************************************!*\
  !*** ./src/app/contacts-list/contacts-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-item {\n  margin-top: 10%;\n  margin-bottom: 3%;\n}\n\nion-list {\n  height: 85%;\n  overflow: scroll;\n  margin-bottom: 0px;\n}\n\n.glassimg {\n  position: relative;\n  z-index: 10000;\n  left: 25px;\n  top: 8px;\n  font-size: 20px;\n}\n\n.inmp {\n  top: 5px;\n  position: absolute;\n  border: none;\n  background: #efefef;\n  height: 34px;\n  border-radius: 10px;\n  width: 90%;\n  margin-left: 15px !important;\n  left: 0;\n  text-align: center;\n}\n\nion-footer {\n  border-top: none;\n}\n\nion-footer ion-button {\n  --background: #2dd36f;\n  height: 36px;\n  width: 40%;\n  text-transform: none;\n}\n\nion-footer .close {\n  --background: #dcdada !important;\n}\n\n.footer-md:before, .footer-ios:before {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3RzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFGRTtFQUNFLGdDQUFBO0FBSUo7O0FBREE7RUFDRSxnQkFBQTtBQUlGIiwiZmlsZSI6ImNvbnRhY3RzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGhlaWdodDogODUlO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5nbGFzc2ltZ3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgbGVmdDogMjVweDtcclxuICB0b3A6IDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmlubXB7XHJcbiAgdG9wOjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmRkMzZmO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2RjZGFkYSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uZm9vdGVyLW1kOmJlZm9yZSwgLmZvb3Rlci1pb3M6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "WIBh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">ADD ITEM\r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content *ngIf=\"choice == 'barcode'\">\r\n\r\n  <div *ngIf=\"barcode\" style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n   \r\n\r\n\r\n\r\n    <div\r\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n\r\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n        {{'ADDITEM.ai'| translate:params}}\r\n      </h2>\r\n\r\n\r\n      <ion-item style=\"margin-top: 6px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"name\" placeholder=\"Enter product name here...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"rPrice\" type=\"number\" placeholder=\"Enter retail price here..\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"pPrice\" type=\"number\" placeholder=\"Enter purchase price here..\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"stock\" type=\"number\" placeholder=\"Enter stock here..\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"uom\"  placeholder=\"Enter units of measurement here..\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"mquantity\" type=\"number\" placeholder=\"Stocks at which you want to get alert..\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n      <div style=\"margin-top: 25px;width: 60%;\">\r\n        <ion-button (click)=\"addItem()\" class=\"shadow-red\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n            Continue\r\n          </p>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-content *ngIf=\"choice == 'manually'\">\r\n\r\n  <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n   \r\n\r\n\r\n\r\n    <div\r\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n\r\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n        {{'ADDITEM.ai'| translate:params}}\r\n      </h2>\r\n\r\n\r\n      <ion-item style=\"margin-top: 6px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"name\" placeholder=\"Enter product name here...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"rPrice\" type=\"number\" placeholder=\"Enter retail price here..\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"pPrice\" type=\"number\" placeholder=\"Enter purchase price here..\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"gst\" type=\"number\" placeholder=\"Please enter gst percentage..\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"stock\" type=\"number\" placeholder=\"Enter stock here..\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"uom\"  placeholder=\"Enter units of measurement here..\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n\r\n        <ion-input [(ngModel)]=\"lowstockalerts\" type=\"number\" placeholder=\"Stocks at which you want to get alert..\"></ion-input>\r\n      </ion-item>\r\n\r\n      \r\n\r\n      <div style=\"margin-top: 25px;width: 60%;\">\r\n        <ion-button (click)=\"addItem()\" class=\"shadow-red\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n            Continue\r\n          </p>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: LanguageLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "MMa0");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "7DPu");
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ "jBhA");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-papaparse */ "P6Fj");
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ "K9io");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "F7eh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./translate-config.service */ "ZjVV");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "TzAO");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ "BeAq");

















/////////////////EKNIAZI IMPORTS/////////////////////////////









/////////////////FOR MULTILANGUAGE SUPPORT/////////////////////////////







// // import FCM
// import { FCM } from '@ionic-native/fcm/ngx';
function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig),
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_20__["PapaParseModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"],
                    useFactory: (LanguageLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                }
            })
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"],
            _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"],
            _translate_config_service__WEBPACK_IMPORTED_MODULE_28__["TranslateConfigService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["BarcodeScanner"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_19__["CallNumber"],
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"],
            _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppPurchase2"],
            _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_30__["Contacts"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_31__["Device"],
            _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_32__["SmsRetriever"],
            // FCM,
            _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_22__["InAppPurchase"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_24__["FileChooser"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_25__["FilePath"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicRouteStrategy"], }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZjVV":
/*!*********************************************!*\
  !*** ./src/app/translate-config.service.ts ***!
  \*********************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
    }
    getDefaultLanguage() {
        let language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        return language;
    }
    setLanguage(setLang) {
        this.translate.use(setLang);
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslateConfigService);



/***/ }),

/***/ "fuOd":
/*!*****************************************************!*\
  !*** ./src/app/addsupplier1/addsupplier1.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap\");\nion-item {\n  background: white !important;\n  border: 1px solid black;\n  border-radius: 14px;\n  width: 70%;\n}\nion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.shadow-red {\n  border-radius: 10px;\n}\nion-card {\n  min-width: 90%;\n  padding: 15px;\n}\n.container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.h-divider {\n  margin: auto;\n  margin-top: 80px;\n  width: 80%;\n  position: relative;\n}\n.h-divider .shadow {\n  overflow: hidden;\n  height: 20px;\n}\n.h-divider .shadow:after {\n  content: \"\";\n  display: block;\n  margin: -25px auto 0;\n  width: 100%;\n  height: 25px;\n  border-radius: 125px/12px;\n  box-shadow: 0 0 8px black;\n}\n.h-divider .text {\n  width: 100px;\n  height: 45px;\n  padding: 10px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: -22px;\n  left: 50%;\n  margin-left: -60px;\n  border-radius: 100%;\n  box-shadow: 0 2px 4px rgba(59, 5, 5, 0.123);\n  background: white;\n  font-family: verdana;\n}\n.h-divider .text i {\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  left: 4px;\n  right: 4px;\n  border-radius: 100%;\n  border: 1px solid #aaa;\n  text-align: center;\n  line-height: 50px;\n  font-style: normal;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZHN1cHBsaWVyMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZRLDhGQUFBO0FBckZSO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVKO0FBREk7RUFDSSxtREFBQTtBQUdSO0FBQUE7RUFDSSxtQkFBQTtBQUdKO0FBREE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUlKO0FBREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUlKO0FBREE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUFJSjtBQURBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSUo7QUFERTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBSUo7QUFERTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFJSjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJSiIsImZpbGUiOiJhZGRzdXBwbGllcjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICB3aWR0aDogNzAlO1xuICAgICYuaXRlbS1oYXMtZm9jdXMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzBkYTAyZCk7XG4gICAgfVxufVxuLnNoYWRvdy1yZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY2FyZCB7XG4gICAgbWluLXdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5oLWRpdmlkZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaC1kaXZpZGVyIC5zaGFkb3cge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuaC1kaXZpZGVyIC5zaGFkb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogLTI1cHggYXV0byAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMjVweC8xMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggYmxhY2s7XG4gIH1cbiAgXG4gIC5oLWRpdmlkZXIgLnRleHQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IC0yMnB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSg1OSwgNSwgNSwgMC4xMjMpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xuICB9XG4gIFxuICAuaC1kaXZpZGVyIC50ZXh0IGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuIl19 */");

/***/ }),

/***/ "iw8I":
/*!***********************************************************!*\
  !*** ./src/app/select-supplier/select-supplier.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Francois+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Anton&display=swap\");\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbGVjdC1zdXBwbGllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsdUZBQUE7QUFDQSxpRkFBQTtBQUNBLG9GQUFBO0FBQ0EsMEVBQUEiLCJmaWxlIjoic2VsZWN0LXN1cHBsaWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vL2hlbGxvIGZvbnRcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmFuY29pcytPbmUmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFtbWVyc21pdGgrT25lJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcFwiKTtcclxuIl19 */");

/***/ }),

/***/ "jD7L":
/*!*************************************************!*\
  !*** ./src/app/select-item/select-item.page.ts ***!
  \*************************************************/
/*! exports provided: SelectItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItemPage", function() { return SelectItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_item_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-item.page.html */ "7MQr");
/* harmony import */ var _select_item_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-item.page.scss */ "3cgj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_item_add_item_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-item/add-item.page */ "w6bI");






let SelectItemPage = class SelectItemPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.ModalPage,
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.returnDat = event['data'];
                    setTimeout(() => {
                        this.selectSupplier(this.returnDat);
                    }, 600);
                }
            });
            return yield modal.present();
        });
    }
    getSuppliers() {
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
            this.suppliers = [];
        }
    }
    addSupplier() {
        this.ModalPage = _add_item_add_item_page__WEBPACK_IMPORTED_MODULE_5__["AddItemPage"];
        this.openModal();
    }
    selectSupplier(boi) {
        this.modalController.dismiss(boi);
    }
    ngOnInit() {
        this.getSuppliers();
    }
};
SelectItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SelectItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-item',
        template: _raw_loader_select_item_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_item_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectItemPage);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kc0D":
/*!***************************************************!*\
  !*** ./src/app/excel-import/excel-import.page.ts ***!
  \***************************************************/
/*! exports provided: ExcelImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelImportPage", function() { return ExcelImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_excel_import_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./excel-import.page.html */ "ILKU");
/* harmony import */ var _excel_import_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excel-import.page.scss */ "+to8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "P6Fj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ "jBhA");
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ "K9io");

















let ExcelImportPage = class ExcelImportPage {
    constructor(file, transfer, http, papa, plt, router, fileChooser, filePath, loadingController, toastController, modalController, firestore) {
        this.file = file;
        this.transfer = transfer;
        this.http = http;
        this.papa = papa;
        this.plt = plt;
        this.router = router;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.csvData = [];
        this.headerRow = [];
        this.tempItems = [];
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.msg,
                duration: 4000,
                color: 'dark',
            });
            toast.present();
        });
    }
    download() {
        const fileTransfer = this.transfer.create();
        const url = 'https://www.smartbusinessolutions.in/smartbusinesssolutions/inputforssm.csv';
        fileTransfer.download(url, this.file.dataDirectory + 'input.csv').then((entry) => {
            console.log('download complete: ' + entry.toURL());
        }, (error) => {
            // handle error
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 6000,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    selectFile(event) {
        this.presentLoading();
        this.selectedFiles = event.target.files;
        this.extractData(this.selectedFiles.item(0));
    }
    // }
    loadCSV(fileURL) {
        this.http
            .get(fileURL, {
            responseType: 'text'
        })
            .subscribe(data => this.extractData(data), err => alert('something went wrong: ' + JSON.stringify(err)));
    }
    extractData(res) {
        console.log(res);
        let csvData = res || '';
        console.log(csvData);
        this.papa.parse(csvData, {
            complete: parsedData => {
                this.headerRow = parsedData.data.splice(0, 1)[0];
                this.csvData = parsedData.data;
                this.processData();
            }
        });
    }
    processData() {
        for (var i = 0; i < this.csvData.length - 1; i++) {
            let data = {
                name: this.csvData[i][0],
                rPrice: this.csvData[i][1],
                pPrice: this.csvData[i][2],
                gst: this.csvData[i][3],
                stock: this.csvData[i][4],
                uom: this.csvData[i][5],
                barcode: this.csvData[i][6],
                mquantity: this.csvData[i][8]
            };
            console.log(data.rPrice);
            console.log(data.pPrice);
            //data.rPrice = Number.parseInt(data.rPrice)
            if (data.mquantity && data.name && data.rPrice && data.pPrice && data.stock && data.barcode && data.gst) {
                console.log(data);
                this.tada = true;
                this.tempItems.push(data);
            }
            else if (!data.name || !data.rPrice || !data.pPrice || !data.stock || !data.barcode || !data.mquantity || !data.gst || !data.uom) {
                if (!data.rPrice) {
                    console.log("We are in the data.rPrice" + data.rPrice);
                    data.rPrice = 0;
                }
                if (!data.pPrice) {
                    data.pPrice = 0;
                }
                if (!data.stock || Number.isInteger(data.stock)) {
                    data.stock = 0;
                }
                if (!data.rPrice || Number.isInteger(data.rPrice)) {
                    data.rPrice = 0;
                }
                if (!data.gst || Number.isInteger(data.gst)) {
                    data.gst = 0;
                }
                if (!data.mquantity || Number.isInteger(data.mquantity)) {
                    data.mquantity = 10;
                }
                if (!data.barcode || data.barcode.length == 0) {
                    data.barcode = " ";
                }
                if (!data.uom || data.uom.length == 0) {
                    data.uom = "";
                }
                console.log(JSON.stringify(data));
                this.tada = true;
                this.tempItems.push(data);
                this.msg = 'we found some missing fields you can add them later';
                this.presentToast();
            }
        }
        this.loadingController.dismiss();
    }
    downloadFile() {
        console.log("We are in the download File()");
        window.open("https://www.smartbusinessolutions.in/smartbusinesssolutions/inputforssm.csv", "_blank");
    }
    exportCSV() {
        let csv = this.papa.unparse({
            fields: this.headerRow,
            data: this.csvData
        });
        if (this.plt.is('cordova')) {
            //this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, { replace: true }).then(res => {
            //});
        }
        else {
            // Dummy implementation for Desktop download purpose
            var blob = new Blob([csv]);
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'newdata.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    trackByFn(index, item) {
        return index;
    }
    addItems() {
        for (var i = 1; i < this.tempItems.length; i++) {
            this.tempItems[i].purchaseOrder = new Array();
            this.items.push(this.tempItems[i]);
            let data = this.tempItems[i];
            console.log(data);
            // console.log(data);
            this.user = JSON.parse(window.localStorage.getItem('user'));
            console.log(this.user);
            if (this.paid == 1 || this.user.uType == 1) {
                this.firestore.collection('stores').doc(this.user.docID).update({
                    items: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.arrayUnion(data)
                });
            }
        }
        this.items = (window.localStorage.setItem('items', JSON.stringify(this.items)));
        this.msg = this.tempItems.length - 1 + ' items have been added to your inventory';
        this.presentToast();
        this.close();
    }
    close() {
        this.modalController.dismiss().then(() => {
        }).catch(() => {
            this.router.navigate(['home/dashboard']);
        });
    }
    getItems() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
        else {
            this.items = [];
        }
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
    }
    ionViewWillEnter() {
        this.getItems();
        this.tempItems = [];
        console.log('temp', this.tempItems);
        this.paid = window.localStorage.getItem("paid");
    }
    ngOnInit() {
        this.getItems();
        if (this.tempItems.length < 1) {
            this.tada = false;
        }
        else {
            this.tada = true;
        }
    }
};
ExcelImportPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"] },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] }
];
ExcelImportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-excel-import',
        template: _raw_loader_excel_import_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_excel_import_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExcelImportPage);



/***/ }),

/***/ "mLb4":
/*!*********************************************************!*\
  !*** ./src/app/select-supplier/select-supplier.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectSupplierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSupplierPage", function() { return SelectSupplierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_supplier_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-supplier.page.html */ "PnTl");
/* harmony import */ var _select_supplier_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-supplier.page.scss */ "iw8I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addsupplier1_addsupplier1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addsupplier1/addsupplier1.page */ "wgbC");






let SelectSupplierPage = class SelectSupplierPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    searchItem() {
        this.searchFound = [];
        var found = 0;
        console.log(this.searchParam);
        if (this.searchParam != "") {
            for (var k = 0; k < this.suppliers.length; k++) {
                if (this.suppliers[k].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
                    found = found + 1;
                    if (found < 8) {
                        this.searchFound.push(this.suppliers[k]);
                        this.searchFound[this.searchFound.length - 1].index = k;
                    }
                    else
                        break;
                }
            }
        }
        this.toShow = this.searchFound;
        if (this.searchParam == "") {
            this.toShow = this.suppliers;
        }
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.ModalPage,
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.returnDat = event['data'];
                    setTimeout(() => {
                        this.selectSupplier(this.returnDat);
                    }, 600);
                }
            });
            return yield modal.present();
        });
    }
    getSuppliers() {
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
            this.suppliers = [];
        }
    }
    addSupplier() {
        this.ModalPage = _addsupplier1_addsupplier1_page__WEBPACK_IMPORTED_MODULE_5__["Addsupplier1Page"];
        this.openModal();
    }
    selectSupplier(boi) {
        this.modalController.dismiss(boi);
    }
    ngOnInit() {
        this.getSuppliers();
        this.toShow = this.suppliers;
    }
};
SelectSupplierPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SelectSupplierPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-supplier',
        template: _raw_loader_select_supplier_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_supplier_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectSupplierPage);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    }, {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'verify-email',
        loadChildren: () => Promise.all(/*! import() | verify-email-verify-email-module */[__webpack_require__.e("common"), __webpack_require__.e("verify-email-verify-email-module")]).then(__webpack_require__.bind(null, /*! ./verify-email/verify-email.module */ "SwEK")).then(m => m.VerifyEmailPageModule)
    },
    {
        path: 'add-item',
        loadChildren: () => __webpack_require__.e(/*! import() | add-item-add-item-module */ "add-item-add-item-module").then(__webpack_require__.bind(null, /*! ./add-item/add-item.module */ "ZEXe")).then(m => m.AddItemPageModule)
    },
    {
        path: 'add-supplier',
        loadChildren: () => __webpack_require__.e(/*! import() | add-supplier-add-supplier-module */ "add-supplier-add-supplier-module").then(__webpack_require__.bind(null, /*! ./add-supplier/add-supplier.module */ "G+5w")).then(m => m.AddSupplierPageModule)
    },
    {
        path: 'select-supplier',
        loadChildren: () => __webpack_require__.e(/*! import() | select-supplier-select-supplier-module */ "select-supplier-select-supplier-module").then(__webpack_require__.bind(null, /*! ./select-supplier/select-supplier.module */ "cfmw")).then(m => m.SelectSupplierPageModule)
    },
    {
        path: 'pos',
        loadChildren: () => Promise.all(/*! import() | pos-pos-module */[__webpack_require__.e("default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"), __webpack_require__.e("common"), __webpack_require__.e("pos-pos-module")]).then(__webpack_require__.bind(null, /*! ./pos/pos.module */ "qodq")).then(m => m.POSPageModule)
    },
    {
        path: 'select-item',
        loadChildren: () => __webpack_require__.e(/*! import() | select-item-select-item-module */ "select-item-select-item-module").then(__webpack_require__.bind(null, /*! ./select-item/select-item.module */ "y0Gf")).then(m => m.SelectItemPageModule)
    },
    {
        path: 'excel-import',
        loadChildren: () => __webpack_require__.e(/*! import() | excel-import-excel-import-module */ "excel-import-excel-import-module").then(__webpack_require__.bind(null, /*! ./excel-import/excel-import.module */ "3S/X")).then(m => m.ExcelImportPageModule)
    },
    {
        path: 'helperpage',
        loadChildren: () => __webpack_require__.e(/*! import() | helperpage-helperpage-module */ "helperpage-helperpage-module").then(__webpack_require__.bind(null, /*! ./helperpage/helperpage.module */ "tO57")).then(m => m.HelperpagePageModule)
    },
    {
        path: 'ownerpage',
        loadChildren: () => __webpack_require__.e(/*! import() | ownerpage-ownerpage-module */ "ownerpage-ownerpage-module").then(__webpack_require__.bind(null, /*! ./ownerpage/ownerpage.module */ "dXxy")).then(m => m.OwnerpagePageModule)
    },
    {
        path: 'selectpurchaseorder',
        loadChildren: () => Promise.all(/*! import() | selectpurchaseorder-selectpurchaseorder-module */[__webpack_require__.e("common"), __webpack_require__.e("selectpurchaseorder-selectpurchaseorder-module")]).then(__webpack_require__.bind(null, /*! ./selectpurchaseorder/selectpurchaseorder.module */ "+q4G")).then(m => m.SelectpurchaseorderPageModule)
    },
    {
        path: 'purchaseorder',
        loadChildren: () => Promise.all(/*! import() | purchaseorder-purchaseorder-module */[__webpack_require__.e("default~invoice-invoice-module~purchaseorder-purchaseorder-module~quotation-quotation-module"), __webpack_require__.e("purchaseorder-purchaseorder-module")]).then(__webpack_require__.bind(null, /*! ./purchaseorder/purchaseorder.module */ "jA/3")).then(m => m.PurchaseorderPageModule)
    },
    {
        path: 'ledger-report-date-input',
        loadChildren: () => __webpack_require__.e(/*! import() | ledger-report-date-input-ledger-report-date-input-module */ "ledger-report-date-input-ledger-report-date-input-module").then(__webpack_require__.bind(null, /*! ./ledger-report-date-input/ledger-report-date-input.module */ "zkoH")).then(m => m.LedgerReportDateInputPageModule)
    },
    {
        path: 'po-report',
        loadChildren: () => __webpack_require__.e(/*! import() | po-report-po-report-module */ "po-report-po-report-module").then(__webpack_require__.bind(null, /*! ./po-report/po-report.module */ "GCct")).then(m => m.PoReportPageModule)
    },
    {
        path: 'ledgerreport',
        loadChildren: () => __webpack_require__.e(/*! import() | ledgerreport-ledgerreport-module */ "ledgerreport-ledgerreport-module").then(__webpack_require__.bind(null, /*! ./ledgerreport/ledgerreport.module */ "5AYA")).then(m => m.LedgerreportPageModule)
    },
    {
        path: 'business-info',
        loadChildren: () => __webpack_require__.e(/*! import() | business-info-business-info-module */ "business-info-business-info-module").then(__webpack_require__.bind(null, /*! ./business-info/business-info.module */ "eIT4")).then(m => m.BusinessInfoPageModule)
    },
    {
        path: 'sales-page',
        loadChildren: () => __webpack_require__.e(/*! import() | sales-page-sales-page-module */ "sales-page-sales-page-module").then(__webpack_require__.bind(null, /*! ./sales-page/sales-page.module */ "VNGO")).then(m => m.SalesPagePageModule)
    },
    {
        path: 'email-id-creation',
        loadChildren: () => __webpack_require__.e(/*! import() | email-id-creation-email-id-creation-module */ "email-id-creation-email-id-creation-module").then(__webpack_require__.bind(null, /*! ./email-id-creation/email-id-creation.module */ "XRn6")).then(m => m.EmailIdCreationPageModule)
    },
    {
        path: 'invoice',
        loadChildren: () => Promise.all(/*! import() | invoice-invoice-module */[__webpack_require__.e("default~invoice-invoice-module~purchaseorder-purchaseorder-module~quotation-quotation-module"), __webpack_require__.e("invoice-invoice-module")]).then(__webpack_require__.bind(null, /*! ./invoice/invoice.module */ "hdHI")).then(m => m.InvoicePageModule)
    },
    {
        path: 'add-customer',
        loadChildren: () => Promise.all(/*! import() | add-customer-add-customer-module */[__webpack_require__.e("default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"), __webpack_require__.e("add-customer-add-customer-module")]).then(__webpack_require__.bind(null, /*! ./add-customer/add-customer.module */ "h4KG")).then(m => m.AddCustomerPageModule)
    },
    {
        path: 'choicesuppcust',
        loadChildren: () => __webpack_require__.e(/*! import() | choicesuppcust-choicesuppcust-module */ "choicesuppcust-choicesuppcust-module").then(__webpack_require__.bind(null, /*! ./choicesuppcust/choicesuppcust.module */ "CIKI")).then(m => m.ChoicesuppcustPageModule)
    },
    {
        path: 'select-customer',
        loadChildren: () => Promise.all(/*! import() | select-customer-select-customer-module */[__webpack_require__.e("default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"), __webpack_require__.e("common"), __webpack_require__.e("select-customer-select-customer-module")]).then(__webpack_require__.bind(null, /*! ./select-customer/select-customer.module */ "nNEp")).then(m => m.SelectCustomerPageModule)
    },
    {
        path: 'select-customer',
        loadChildren: () => Promise.all(/*! import() | select-customer-select-customer-module */[__webpack_require__.e("default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"), __webpack_require__.e("common"), __webpack_require__.e("select-customer-select-customer-module")]).then(__webpack_require__.bind(null, /*! ./select-customer/select-customer.module */ "nNEp")).then(m => m.SelectCustomerPageModule)
    },
    {
        path: 'quotation',
        loadChildren: () => Promise.all(/*! import() | quotation-quotation-module */[__webpack_require__.e("default~invoice-invoice-module~purchaseorder-purchaseorder-module~quotation-quotation-module"), __webpack_require__.e("quotation-quotation-module")]).then(__webpack_require__.bind(null, /*! ./quotation/quotation.module */ "yF6q")).then(m => m.QuotationPageModule)
    },
    {
        path: 'addsupplier1',
        loadChildren: () => __webpack_require__.e(/*! import() | addsupplier1-addsupplier1-module */ "addsupplier1-addsupplier1-module").then(__webpack_require__.bind(null, /*! ./addsupplier1/addsupplier1.module */ "ldjX")).then(m => m.Addsupplier1PageModule)
    },
    {
        path: 'not-allowed',
        loadChildren: () => __webpack_require__.e(/*! import() | not-allowed-not-allowed-module */ "not-allowed-not-allowed-module").then(__webpack_require__.bind(null, /*! ./not-allowed/not-allowed.module */ "Hnzf")).then(m => m.NotAllowedPageModule)
    },
    {
        path: 'not-authorized',
        loadChildren: () => __webpack_require__.e(/*! import() | not-authorized-not-authorized-module */ "not-authorized-not-authorized-module").then(__webpack_require__.bind(null, /*! ./not-authorized/not-authorized.module */ "gB1K")).then(m => m.NotAuthorizedPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "w6bI":
/*!*******************************************!*\
  !*** ./src/app/add-item/add-item.page.ts ***!
  \*******************************************/
/*! exports provided: AddItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPage", function() { return AddItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_item_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-item.page.html */ "WIBh");
/* harmony import */ var _add_item_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-item.page.scss */ "JMA9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-supplier/select-supplier.page */ "mLb4");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);











let AddItemPage = class AddItemPage {
    constructor(barcodeScanner, modalController, toastController, firestore, router) {
        this.barcodeScanner = barcodeScanner;
        this.modalController = modalController;
        this.toastController = toastController;
        this.firestore = firestore;
        this.router = router;
        this.choice = "manually";
        this.HSN = "";
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.ModalPage,
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.supplier = event['data'];
                }
            });
            return yield modal.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.msg,
                duration: 2000,
                color: this.color,
            });
            toast.present();
        });
    }
    setChoice(choice) {
        this.choice = choice;
    }
    getItems() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
        else {
            this.items = [];
        }
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        if (window.localStorage.getItem('itemsToBeUploaded')) {
            this.itemsToBeUploaded = JSON.parse(window.localStorage.getItem('itemsToBeUploaded'));
        }
        else {
            this.itemsToBeUploaded = [];
        }
    }
    scanBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.barcode = barcodeData.text;
            this.choice = 'barcode';
        }).catch(err => {
            alert(err);
        });
    }
    openSuppliers() {
        this.ModalPage = _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_7__["SelectSupplierPage"];
        this.openModal();
    }
    ionViewWillEnter() {
        this.paid = window.localStorage.getItem("paid");
    }
    close() {
        this.modalController.dismiss().then(() => {
        }).catch(() => {
            this.router.navigate(['home/dashboard']);
        });
    }
    addItem() {
        //this.items = JSON.parse(window.localStorage.getItem('items'));
        let same = false;
        if (!this.name || this.name.length == 0) {
            this.msg = "Invalid name!";
            this.color = "warning";
            this.presentToast();
        }
        else {
            if (!this.SGST) {
                this.SGST = 0;
            }
            if (!this.IGST) {
                this.IGST = 0;
            }
            if (!this.CGST) {
                this.CGST = 0;
            }
            if (!this.rPrice) {
                this.rPrice = 0;
            }
            if (!this.pPrice) {
                this.pPrice = 0;
            }
            if (!this.stock) {
                this.stock = 0;
            }
            if (!this.barcode || this.barcode.length == 0) {
                this.barcode = " ";
            }
            if (!this.HSN || this.HSN.length == 0) {
                this.HSN = "";
            }
            if (!this.uom || this.uom.length == 0) {
                this.uom = "";
            }
            if (!this.mquantity) {
                this.mquantity = 10;
            }
            if (!this.gst) {
                this.gst = 0;
            }
            console.log(this.rPrice);
            console.log(this.pPrice);
            let data = {
                name: this.name,
                rPrice: this.rPrice,
                pPrice: this.pPrice,
                stock: this.stock,
                uom: this.uom,
                barcode: this.barcode,
                openingStock: this.stock,
                gst: this.gst,
                mquantity: this.mquantity
            };
            if (this.items == undefined) {
                this.items = new Array();
            }
            this.items.push(data);
            console.log(this.items);
            window.localStorage.setItem('items', JSON.stringify(this.items));
            console.log(this.user);
            if (this.user.uType == 1 || this.paid == 1) {
                this.firestore.collection('stores').doc(this.user.docID).update({
                    items: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(data)
                });
                this.msg = "Item added!";
                this.color = "success";
                this.presentToast();
            }
            this.modalController.dismiss(data);
        }
    }
    ngOnInit() {
        this.getItems();
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user);
        if (this.user.uType == 1) {
            this.checkIfHelperExists();
        }
    }
    checkIfHelperExists() {
        var docRef = this.firestore.collection("helpers").doc(this.user.helperid);
        docRef.valueChanges().subscribe((ref) => {
            if (ref == null) {
                window.localStorage.setItem("not allowed", "true");
                this.router.navigate(['home/inventory']);
            }
        });
    }
};
AddItemPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-item',
        template: _raw_loader_add_item_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_item_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddItemPage);



/***/ }),

/***/ "wgbC":
/*!***************************************************!*\
  !*** ./src/app/addsupplier1/addsupplier1.page.ts ***!
  \***************************************************/
/*! exports provided: Addsupplier1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addsupplier1Page", function() { return Addsupplier1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addsupplier1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addsupplier1.page.html */ "F3z4");
/* harmony import */ var _addsupplier1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addsupplier1.page.scss */ "fuOd");
/* harmony import */ var _contacts_list_contacts_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contacts-list/contacts-list.page */ "U7e9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");









let Addsupplier1Page = class Addsupplier1Page {
    constructor(modalCtrl, toastController, fireStore) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.fireStore = fireStore;
        this.choice = "";
    }
    ionViewWillEnter() {
        this.paid = window.localStorage.getItem("paid");
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Supplier Added!',
                duration: 2000,
                color: 'success',
            });
            toast.present();
        });
    }
    setChoice(choice) {
        this.choice = choice;
    }
    getSuppliers() {
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
            this.suppliers = [];
        }
    }
    getcustomers() {
        if (window.localStorage.getItem('customers')) {
            this.customers = JSON.parse(window.localStorage.getItem('customers'));
        }
        else {
            this.customers = [];
        }
    }
    addCustomer() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if (this.customers == undefined) {
            this.customers = [];
        }
        if (this.name == undefined) {
            this.name = "";
        }
        if (this.phone == undefined) {
            this.phone = "";
        }
        if (this.address == undefined) {
            this.address = "";
        }
        if (this.gstin == undefined) {
            this.gstin = "";
        }
        let data = {
            name: this.name,
            phone: this.phone,
            address: this.address,
            gstin: this.gstin
        };
        this.customers.push(data);
        window.localStorage.setItem('customers', JSON.stringify(this.customers));
        if (this.paid == 1) {
            this.fireStore.collection('stores').doc(this.user.docID).update({
                customers: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(data)
            });
        }
        this.presentToast();
        this.modalCtrl.dismiss(data);
    }
    addSupplier() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if (this.suppliers == undefined) {
            this.suppliers = [];
        }
        if (this.name == undefined) {
            this.name = "";
        }
        if (this.phone == undefined) {
            this.phone = "";
        }
        if (this.address == undefined) {
            this.address = "";
        }
        if (this.company_name == undefined) {
            this.company_name = "";
        }
        let data = {
            name: this.name,
            phone: this.phone.includes('+') ? this.phone : '+91' + this.phone,
            address: this.address,
            company_name: this.company_name
        };
        this.suppliers.push(data);
        window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
        if (this.paid == 1) {
            this.fireStore.collection('stores').doc(this.user.docID).update({
                suppliers: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(data)
            });
        }
        this.presentToast();
        this.modalCtrl.dismiss(data);
    }
    close() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
        this.getSuppliers();
        this.getcustomers();
    }
    showContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var modal = yield this.modalCtrl.create({
                component: _contacts_list_contacts_list_page__WEBPACK_IMPORTED_MODULE_3__["ContactsListPage"],
                backdropDismiss: false,
            });
            modal.onDidDismiss().then(data => {
                if (data.role == 'selected') {
                    const contact = data.data.contact;
                    this.name = contact.name;
                    this.phone = contact.phone.toString().replace(/\s+/g, '');
                }
            });
            modal.present();
        });
    }
};
Addsupplier1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
Addsupplier1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-addsupplier1',
        template: _raw_loader_addsupplier1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addsupplier1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Addsupplier1Page);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBF/":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-supplier/add-supplier.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">ADD PARTY\r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"choice == ''\">\r\n\r\n  <div class=\"container\">\r\n    <div style=\"width: 90%;\" class=\"vertical-center\">\r\n      <ion-card mode=\"ios\" button (click)=\"setChoice('supplier')\" style=\"text-align: center;\">\r\n        <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/supplier.png\" alt=\"\">\r\n       \r\n        <ion-card-header>\r\n          <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\"> {{'ADDITEM.addsupplier'| translate:params}}\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <div class=\"h-divider\">\r\n        <div class=\"shadow\"></div>\r\n        <div class=\"text\"><i> {{'ADDITEM.or'| translate:params}}</i></div>\r\n      </div>\r\n\r\n      <ion-card mode=\"ios\" button (click)=\"setChoice('customer')\" style=\"text-align: center;\">\r\n        <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/customer.png\" alt=\"\">\r\n        \r\n        <ion-card-header>\r\n          <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\"> {{'ADDITEM.addcustomer'| translate:params}}\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<ion-content *ngIf=\"choice == 'supplier'\"> \r\n  \r\n\r\n  <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n    <div\r\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n        ADD A SUPPLIER\r\n      </h2>\r\n\r\n      <div align=\"center\">\r\n        <ion-button shape=\"round\" (click)=\"showContact()\">Add from phone</ion-button>\r\n      </div>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input placeholder=\"Enter name of supplier\" [(ngModel)]=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"tel\" placeholder=\"Enter phone of supplier\" [(ngModel)]=\"phone\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Company Name of supplier\" [(ngModel)]=\"company_name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Address of supplier\" [(ngModel)]=\"address\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n\r\n      <div style=\"margin-top: 25px;width: 60%;\">\r\n        <ion-button class=\"shadow-red\" (click)=\"addSupplier()\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n            Continue\r\n          </p>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  </ion-content>\r\n  <ion-content *ngIf=\"choice == 'customer'\"> \r\n  \r\n\r\n    <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n      <div\r\n        style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n  \r\n        <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n          ADD A Customer\r\n        </h2>\r\n        <div align=\"center\">\r\n          <ion-button shape=\"round\" (click)=\"showContact()\">Add from phone</ion-button>\r\n        </div>\r\n  \r\n  \r\n        \r\n        <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n          <ion-input placeholder=\"Enter name of Customer\" [(ngModel)]=\"name\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n          <ion-input type=\"tel\" placeholder=\"Enter phone of customer\" [(ngModel)]=\"phone\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n          <ion-input  placeholder=\"Enter Address of customer\" [(ngModel)]=\"address\"></ion-input>\r\n        </ion-item>\r\n        \r\n  \r\n        <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n          <ion-input  placeholder=\"Enter GSTIN of customer\" [(ngModel)]=\"gstin\"></ion-input>\r\n        </ion-item>\r\n  \r\n  \r\n  \r\n  \r\n        <div style=\"margin-top: 25px;width: 60%;\">\r\n          <ion-button class=\"shadow-red\" (click)=\"addCustomer()\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n          background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n          background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n            <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n              Continue\r\n            </p>\r\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n    </ion-content>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map