(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-item-select-item-module"],{

/***/ "9p9J":
/*!***********************************************************!*\
  !*** ./src/app/select-item/select-item-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItemPageRoutingModule", function() { return SelectItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-item.page */ "jD7L");




const routes = [
    {
        path: '',
        component: _select_item_page__WEBPACK_IMPORTED_MODULE_3__["SelectItemPage"]
    }
];
let SelectItemPageRoutingModule = class SelectItemPageRoutingModule {
};
SelectItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectItemPageRoutingModule);



/***/ }),

/***/ "y0Gf":
/*!***************************************************!*\
  !*** ./src/app/select-item/select-item.module.ts ***!
  \***************************************************/
/*! exports provided: SelectItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItemPageModule", function() { return SelectItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-item-routing.module */ "9p9J");






let SelectItemPageModule = class SelectItemPageModule {
};
SelectItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectItemPageRoutingModule"]
        ],
        declarations: []
    })
], SelectItemPageModule);



/***/ })

}]);
//# sourceMappingURL=select-item-select-item-module.js.map