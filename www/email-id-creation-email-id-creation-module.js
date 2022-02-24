(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-id-creation-email-id-creation-module"],{

/***/ "1ywZ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email-id-creation/email-id-creation.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">   <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">DESKTOP APP REGISTRATION\r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n    <div\r\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n        Please register for Desktop App by entering your email id\r\n      </h2>\r\n\r\n      \r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"email\" placeholder=\"Enter email id for use in desktop application\" [(ngModel)]=\"email\"></ion-input>\r\n        \r\n\r\n      </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n      <div style=\"margin-top: 25px;width: 60%;\">\r\n        <ion-button class=\"shadow-red\" (click)=\"updateEmailId()\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n            Continue\r\n          </p>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "5Ofe":
/*!***************************************************************!*\
  !*** ./src/app/email-id-creation/email-id-creation.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1pZC1jcmVhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "XRn6":
/*!***************************************************************!*\
  !*** ./src/app/email-id-creation/email-id-creation.module.ts ***!
  \***************************************************************/
/*! exports provided: EmailIdCreationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIdCreationPageModule", function() { return EmailIdCreationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _email_id_creation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-id-creation-routing.module */ "aTwi");
/* harmony import */ var _email_id_creation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-id-creation.page */ "j0D+");







let EmailIdCreationPageModule = class EmailIdCreationPageModule {
};
EmailIdCreationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _email_id_creation_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailIdCreationPageRoutingModule"]
        ],
        declarations: [_email_id_creation_page__WEBPACK_IMPORTED_MODULE_6__["EmailIdCreationPage"]]
    })
], EmailIdCreationPageModule);



/***/ }),

/***/ "aTwi":
/*!***********************************************************************!*\
  !*** ./src/app/email-id-creation/email-id-creation-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EmailIdCreationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIdCreationPageRoutingModule", function() { return EmailIdCreationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email_id_creation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-id-creation.page */ "j0D+");




const routes = [
    {
        path: '',
        component: _email_id_creation_page__WEBPACK_IMPORTED_MODULE_3__["EmailIdCreationPage"]
    }
];
let EmailIdCreationPageRoutingModule = class EmailIdCreationPageRoutingModule {
};
EmailIdCreationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmailIdCreationPageRoutingModule);



/***/ }),

/***/ "j0D+":
/*!*************************************************************!*\
  !*** ./src/app/email-id-creation/email-id-creation.page.ts ***!
  \*************************************************************/
/*! exports provided: EmailIdCreationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIdCreationPage", function() { return EmailIdCreationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_id_creation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email-id-creation.page.html */ "1ywZ");
/* harmony import */ var _email_id_creation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-id-creation.page.scss */ "5Ofe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");






let EmailIdCreationPage = class EmailIdCreationPage {
    constructor(router, firestore) {
        this.router = router;
        this.firestore = firestore;
    }
    ionViewWillEnter() {
        this.paid = window.localStorage.getItem("paid");
    }
    updateEmailId() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.firestore.collection("stores").doc(this.user.docID).update({
            desktopemail: this.email
        });
        this.router.navigate(['home/settings']);
    }
    close() {
        this.router.navigate(['home/settings']);
    }
    ngOnInit() {
        this.paid = window.localStorage.getItem("paid");
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if (this.paid == 0) {
            this.router.navigate(['cart-home/cart-premium']);
        }
    }
};
EmailIdCreationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
EmailIdCreationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-email-id-creation',
        template: _raw_loader_email_id_creation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_id_creation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmailIdCreationPage);



/***/ })

}]);
//# sourceMappingURL=email-id-creation-email-id-creation-module.js.map