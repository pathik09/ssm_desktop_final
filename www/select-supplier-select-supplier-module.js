(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-supplier-select-supplier-module"],{

/***/ "cfmw":
/*!***********************************************************!*\
  !*** ./src/app/select-supplier/select-supplier.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectSupplierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSupplierPageModule", function() { return SelectSupplierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-supplier-routing.module */ "dIbi");






let SelectSupplierPageModule = class SelectSupplierPageModule {
};
SelectSupplierPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectSupplierPageRoutingModule"]
        ],
        declarations: []
    })
], SelectSupplierPageModule);



/***/ }),

/***/ "dIbi":
/*!*******************************************************************!*\
  !*** ./src/app/select-supplier/select-supplier-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectSupplierPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSupplierPageRoutingModule", function() { return SelectSupplierPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-supplier.page */ "mLb4");




const routes = [
    {
        path: '',
        component: _select_supplier_page__WEBPACK_IMPORTED_MODULE_3__["SelectSupplierPage"]
    }
];
let SelectSupplierPageRoutingModule = class SelectSupplierPageRoutingModule {
};
SelectSupplierPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectSupplierPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=select-supplier-select-supplier-module.js.map