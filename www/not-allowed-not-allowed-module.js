(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-allowed-not-allowed-module"],{

/***/ "Hnzf":
/*!***************************************************!*\
  !*** ./src/app/not-allowed/not-allowed.module.ts ***!
  \***************************************************/
/*! exports provided: NotAllowedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAllowedPageModule", function() { return NotAllowedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _not_allowed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-allowed-routing.module */ "wwH2");
/* harmony import */ var _not_allowed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-allowed.page */ "Ja0Y");







let NotAllowedPageModule = class NotAllowedPageModule {
};
NotAllowedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _not_allowed_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotAllowedPageRoutingModule"]
        ],
        declarations: [_not_allowed_page__WEBPACK_IMPORTED_MODULE_6__["NotAllowedPage"]]
    })
], NotAllowedPageModule);



/***/ }),

/***/ "I07i":
/*!***************************************************!*\
  !*** ./src/app/not-allowed/not-allowed.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtYWxsb3dlZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Ja0Y":
/*!*************************************************!*\
  !*** ./src/app/not-allowed/not-allowed.page.ts ***!
  \*************************************************/
/*! exports provided: NotAllowedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAllowedPage", function() { return NotAllowedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_allowed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-allowed.page.html */ "VYGM");
/* harmony import */ var _not_allowed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-allowed.page.scss */ "I07i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotAllowedPage = class NotAllowedPage {
    constructor() { }
    ngOnInit() {
        navigator['app'].exitApp();
    }
};
NotAllowedPage.ctorParameters = () => [];
NotAllowedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-allowed',
        template: _raw_loader_not_allowed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_allowed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotAllowedPage);



/***/ }),

/***/ "VYGM":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-allowed/not-allowed.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>not-allowed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "wwH2":
/*!***********************************************************!*\
  !*** ./src/app/not-allowed/not-allowed-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NotAllowedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAllowedPageRoutingModule", function() { return NotAllowedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_allowed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-allowed.page */ "Ja0Y");




const routes = [
    {
        path: '',
        component: _not_allowed_page__WEBPACK_IMPORTED_MODULE_3__["NotAllowedPage"]
    }
];
let NotAllowedPageRoutingModule = class NotAllowedPageRoutingModule {
};
NotAllowedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotAllowedPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=not-allowed-not-allowed-module.js.map