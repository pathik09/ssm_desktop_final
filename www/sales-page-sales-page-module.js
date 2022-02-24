(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-page-sales-page-module"],{

/***/ "BNFx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-page/sales-page.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>sales_page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Tn+U":
/*!*************************************************!*\
  !*** ./src/app/sales-page/sales-page.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VNGO":
/*!*************************************************!*\
  !*** ./src/app/sales-page/sales-page.module.ts ***!
  \*************************************************/
/*! exports provided: SalesPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPagePageModule", function() { return SalesPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sales_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-page-routing.module */ "u7iq");
/* harmony import */ var _sales_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales-page.page */ "lZAh");







let SalesPagePageModule = class SalesPagePageModule {
};
SalesPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sales_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalesPagePageRoutingModule"]
        ],
        declarations: [_sales_page_page__WEBPACK_IMPORTED_MODULE_6__["SalesPagePage"]]
    })
], SalesPagePageModule);



/***/ }),

/***/ "lZAh":
/*!***********************************************!*\
  !*** ./src/app/sales-page/sales-page.page.ts ***!
  \***********************************************/
/*! exports provided: SalesPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPagePage", function() { return SalesPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sales_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sales-page.page.html */ "BNFx");
/* harmony import */ var _sales_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-page.page.scss */ "Tn+U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SalesPagePage = class SalesPagePage {
    constructor() { }
    ngOnInit() {
    }
};
SalesPagePage.ctorParameters = () => [];
SalesPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sales-page',
        template: _raw_loader_sales_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sales_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalesPagePage);



/***/ }),

/***/ "u7iq":
/*!*********************************************************!*\
  !*** ./src/app/sales-page/sales-page-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SalesPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPagePageRoutingModule", function() { return SalesPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sales_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-page.page */ "lZAh");




const routes = [
    {
        path: '',
        component: _sales_page_page__WEBPACK_IMPORTED_MODULE_3__["SalesPagePage"]
    }
];
let SalesPagePageRoutingModule = class SalesPagePageRoutingModule {
};
SalesPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalesPagePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=sales-page-sales-page-module.js.map