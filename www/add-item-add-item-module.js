(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-item-add-item-module"],{

/***/ "K9mH":
/*!*****************************************************!*\
  !*** ./src/app/add-item/add-item-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageRoutingModule", function() { return AddItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item.page */ "w6bI");




const routes = [
    {
        path: '',
        component: _add_item_page__WEBPACK_IMPORTED_MODULE_3__["AddItemPage"]
    }
];
let AddItemPageRoutingModule = class AddItemPageRoutingModule {
};
AddItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddItemPageRoutingModule);



/***/ }),

/***/ "ZEXe":
/*!*********************************************!*\
  !*** ./src/app/add-item/add-item.module.ts ***!
  \*********************************************/
/*! exports provided: AddItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-item-routing.module */ "K9mH");
/* harmony import */ var _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select-supplier/select-supplier.page */ "mLb4");







let AddItemPageModule = class AddItemPageModule {
};
AddItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddItemPageRoutingModule"],
        ],
        declarations: [],
        entryComponents: [_select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_6__["SelectSupplierPage"]],
    })
], AddItemPageModule);



/***/ })

}]);
//# sourceMappingURL=add-item-add-item-module.js.map