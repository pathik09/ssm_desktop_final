(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-customer-add-customer-module"],{

/***/ "TfPU":
/*!*************************************************************!*\
  !*** ./src/app/add-customer/add-customer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddCustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPageRoutingModule", function() { return AddCustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customer.page */ "jO1E");




const routes = [
    {
        path: '',
        component: _add_customer_page__WEBPACK_IMPORTED_MODULE_3__["AddCustomerPage"]
    }
];
let AddCustomerPageRoutingModule = class AddCustomerPageRoutingModule {
};
AddCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCustomerPageRoutingModule);



/***/ }),

/***/ "h4KG":
/*!*****************************************************!*\
  !*** ./src/app/add-customer/add-customer.module.ts ***!
  \*****************************************************/
/*! exports provided: AddCustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPageModule", function() { return AddCustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-customer-routing.module */ "TfPU");
/* harmony import */ var _add_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-customer.page */ "jO1E");







let AddCustomerPageModule = class AddCustomerPageModule {
};
AddCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCustomerPageRoutingModule"]
        ],
        declarations: [_add_customer_page__WEBPACK_IMPORTED_MODULE_6__["AddCustomerPage"]]
    })
], AddCustomerPageModule);



/***/ })

}]);
//# sourceMappingURL=add-customer-add-customer-module.js.map