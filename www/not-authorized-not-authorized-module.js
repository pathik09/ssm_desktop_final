(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-authorized-not-authorized-module"],{

/***/ "H1rB":
/*!*******************************************************!*\
  !*** ./src/app/not-authorized/not-authorized.page.ts ***!
  \*******************************************************/
/*! exports provided: NotAuthorizedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedPage", function() { return NotAuthorizedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_authorized_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-authorized.page.html */ "WaPf");
/* harmony import */ var _not_authorized_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-authorized.page.scss */ "sE7X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotAuthorizedPage = class NotAuthorizedPage {
    constructor() { }
    ngOnInit() {
    }
};
NotAuthorizedPage.ctorParameters = () => [];
NotAuthorizedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-authorized',
        template: _raw_loader_not_authorized_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_authorized_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotAuthorizedPage);



/***/ }),

/***/ "UWO3":
/*!*****************************************************************!*\
  !*** ./src/app/not-authorized/not-authorized-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotAuthorizedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedPageRoutingModule", function() { return NotAuthorizedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_authorized_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-authorized.page */ "H1rB");




const routes = [
    {
        path: '',
        component: _not_authorized_page__WEBPACK_IMPORTED_MODULE_3__["NotAuthorizedPage"]
    }
];
let NotAuthorizedPageRoutingModule = class NotAuthorizedPageRoutingModule {
};
NotAuthorizedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotAuthorizedPageRoutingModule);



/***/ }),

/***/ "WaPf":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-authorized/not-authorized.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>SMART STOCK MANAGEMENT</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  sorry, you are not allowed, to allow yourself go to mobile app and enter email address for desktop verification,\n\n\n</ion-content>\n");

/***/ }),

/***/ "gB1K":
/*!*********************************************************!*\
  !*** ./src/app/not-authorized/not-authorized.module.ts ***!
  \*********************************************************/
/*! exports provided: NotAuthorizedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedPageModule", function() { return NotAuthorizedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _not_authorized_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-authorized-routing.module */ "UWO3");
/* harmony import */ var _not_authorized_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-authorized.page */ "H1rB");







let NotAuthorizedPageModule = class NotAuthorizedPageModule {
};
NotAuthorizedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _not_authorized_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotAuthorizedPageRoutingModule"]
        ],
        declarations: [_not_authorized_page__WEBPACK_IMPORTED_MODULE_6__["NotAuthorizedPage"]]
    })
], NotAuthorizedPageModule);



/***/ }),

/***/ "sE7X":
/*!*********************************************************!*\
  !*** ./src/app/not-authorized/not-authorized.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtYXV0aG9yaXplZC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=not-authorized-not-authorized-module.js.map