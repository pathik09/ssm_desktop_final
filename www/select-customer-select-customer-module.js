(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-customer-select-customer-module"],{

/***/ "iVrP":
/*!*******************************************************************!*\
  !*** ./src/app/select-customer/select-customer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectCustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomerPageRoutingModule", function() { return SelectCustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-customer.page */ "qhlK");




const routes = [
    {
        path: '',
        component: _select_customer_page__WEBPACK_IMPORTED_MODULE_3__["SelectCustomerPage"]
    }
];
let SelectCustomerPageRoutingModule = class SelectCustomerPageRoutingModule {
};
SelectCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectCustomerPageRoutingModule);



/***/ }),

/***/ "nNEp":
/*!***********************************************************!*\
  !*** ./src/app/select-customer/select-customer.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectCustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomerPageModule", function() { return SelectCustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-customer-routing.module */ "iVrP");
/* harmony import */ var _select_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-customer.page */ "qhlK");







let SelectCustomerPageModule = class SelectCustomerPageModule {
};
SelectCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCustomerPageRoutingModule"]
        ],
        declarations: [_select_customer_page__WEBPACK_IMPORTED_MODULE_6__["SelectCustomerPage"]]
    })
], SelectCustomerPageModule);



/***/ })

}]);
//# sourceMappingURL=select-customer-select-customer-module.js.map