(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-supplier-add-supplier-module"],{

/***/ "437R":
/*!*************************************************************!*\
  !*** ./src/app/add-supplier/add-supplier-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddSupplierPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierPageRoutingModule", function() { return AddSupplierPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-supplier.page */ "88it");




const routes = [
    {
        path: '',
        component: _add_supplier_page__WEBPACK_IMPORTED_MODULE_3__["AddSupplierPage"]
    }
];
let AddSupplierPageRoutingModule = class AddSupplierPageRoutingModule {
};
AddSupplierPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddSupplierPageRoutingModule);



/***/ }),

/***/ "9Oev":
/*!*******************************************************!*\
  !*** ./src/app/contacts-list/contacts-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsListPageModule", function() { return ContactsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contacts_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts-list.page */ "U7e9");







const routes = [
    {
        path: '',
        component: _contacts_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactsListPage"]
    }
];
let ContactsListPageModule = class ContactsListPageModule {
};
ContactsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contacts_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactsListPage"]]
    })
], ContactsListPageModule);



/***/ }),

/***/ "G+5w":
/*!*****************************************************!*\
  !*** ./src/app/add-supplier/add-supplier.module.ts ***!
  \*****************************************************/
/*! exports provided: AddSupplierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierPageModule", function() { return AddSupplierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _contacts_list_contacts_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../contacts-list/contacts-list.module */ "9Oev");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_supplier_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-supplier-routing.module */ "437R");







let AddSupplierPageModule = class AddSupplierPageModule {
};
AddSupplierPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _add_supplier_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddSupplierPageRoutingModule"],
            _contacts_list_contacts_list_module__WEBPACK_IMPORTED_MODULE_1__["ContactsListPageModule"]
        ],
        declarations: []
    })
], AddSupplierPageModule);



/***/ })

}]);
//# sourceMappingURL=add-supplier-add-supplier-module.js.map