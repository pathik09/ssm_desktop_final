(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choicesuppcust-choicesuppcust-module"],{

/***/ "+hu4":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choicesuppcust/choicesuppcust.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>choicesuppcust</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-content >\r\n\r\n    <div class=\"container\">\r\n      <div style=\"width: 90%;\" class=\"vertical-center\">\r\n        <ion-card mode=\"ios\" button (click)=\"gotoPage('add-supplier')\" style=\"text-align: center;\">\r\n         \r\n          <ion-card-header>\r\n            <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\"> Add Supplier\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n  \r\n        <div class=\"h-divider\">\r\n          <div class=\"shadow\"></div>\r\n          <div class=\"text\"><i> or</i></div>\r\n        </div>\r\n  \r\n        <ion-card mode=\"ios\" button (click)=\"gotoPage('add-customer')\" style=\"text-align: center;\">\r\n          \r\n          <ion-card-header>\r\n            <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\"> Add Customer\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n  \r\n  </ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "3ZLb":
/*!*****************************************************************!*\
  !*** ./src/app/choicesuppcust/choicesuppcust-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChoicesuppcustPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesuppcustPageRoutingModule", function() { return ChoicesuppcustPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choicesuppcust_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choicesuppcust.page */ "FzPt");




const routes = [
    {
        path: '',
        component: _choicesuppcust_page__WEBPACK_IMPORTED_MODULE_3__["ChoicesuppcustPage"]
    }
];
let ChoicesuppcustPageRoutingModule = class ChoicesuppcustPageRoutingModule {
};
ChoicesuppcustPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChoicesuppcustPageRoutingModule);



/***/ }),

/***/ "CIKI":
/*!*********************************************************!*\
  !*** ./src/app/choicesuppcust/choicesuppcust.module.ts ***!
  \*********************************************************/
/*! exports provided: ChoicesuppcustPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesuppcustPageModule", function() { return ChoicesuppcustPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choicesuppcust_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choicesuppcust-routing.module */ "3ZLb");
/* harmony import */ var _choicesuppcust_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choicesuppcust.page */ "FzPt");







let ChoicesuppcustPageModule = class ChoicesuppcustPageModule {
};
ChoicesuppcustPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choicesuppcust_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoicesuppcustPageRoutingModule"]
        ],
        declarations: [_choicesuppcust_page__WEBPACK_IMPORTED_MODULE_6__["ChoicesuppcustPage"]]
    })
], ChoicesuppcustPageModule);



/***/ }),

/***/ "FzPt":
/*!*******************************************************!*\
  !*** ./src/app/choicesuppcust/choicesuppcust.page.ts ***!
  \*******************************************************/
/*! exports provided: ChoicesuppcustPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesuppcustPage", function() { return ChoicesuppcustPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choicesuppcust_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choicesuppcust.page.html */ "+hu4");
/* harmony import */ var _choicesuppcust_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choicesuppcust.page.scss */ "Pd7p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ChoicesuppcustPage = class ChoicesuppcustPage {
    constructor(router) {
        this.router = router;
    }
    gotoPage(pageName) {
        this.router.navigate([pageName]);
    }
    ngOnInit() {
    }
};
ChoicesuppcustPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ChoicesuppcustPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choicesuppcust',
        template: _raw_loader_choicesuppcust_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choicesuppcust_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChoicesuppcustPage);



/***/ }),

/***/ "Pd7p":
/*!*********************************************************!*\
  !*** ./src/app/choicesuppcust/choicesuppcust.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9pY2VzdXBwY3VzdC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=choicesuppcust-choicesuppcust-module.js.map