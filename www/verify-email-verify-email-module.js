(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-email-verify-email-module"],{

/***/ "F8s+":
/*!***************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.ts ***!
  \***************************************************/
/*! exports provided: VerifyEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function() { return VerifyEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-email.page.html */ "oeFT");
/* harmony import */ var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-email.page.scss */ "aY1l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");






let VerifyEmailPage = class VerifyEmailPage {
    constructor(authService, afAuth) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.user$ = this.afAuth.user;
    }
    onSendEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authService.sendVerificationEmail();
            }
            catch (error) {
                console.error('Error --> ', error);
            }
        });
    }
    ngOnDestroy() {
        this.authService.logout();
    }
};
VerifyEmailPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
VerifyEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-email',
        template: _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyEmailPage);



/***/ }),

/***/ "SwEK":
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.module.ts ***!
  \*****************************************************/
/*! exports provided: VerifyEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function() { return VerifyEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-email-routing.module */ "hlOy");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-email.page */ "F8s+");







let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPageRoutingModule"]
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ "aY1l":
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "hlOy":
/*!*************************************************************!*\
  !*** ./src/app/verify-email/verify-email-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function() { return VerifyEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-email.page */ "F8s+");




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ "oeFT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Verification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"user$ | async as user\" > \n  <ion-row>\n    <ion-col>\n      <h2>Thank you for registering!</h2>\n      <p>We have sent a confirmation email to <strong>{{user.email}}</strong></p>\n      <p>Please, check your email and click on the link provided to verify your email address.</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" (click)=\"onSendEmail()\" expand=\"block\">Resend verification email</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=verify-email-verify-email-module.js.map