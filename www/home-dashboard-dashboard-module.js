(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-dashboard-dashboard-module"],{

/***/ "2owQ":
/*!****************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "Y3wH");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.page */ "jhxF");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/add-item/add-item.page */ "w6bI");
/* harmony import */ var src_app_add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/add-supplier/add-supplier.page */ "88it");
/* harmony import */ var src_app_excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/excel-import/excel-import.page */ "kc0D");












let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]],
        entryComponents: [src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_9__["AddItemPage"], src_app_add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_10__["AddSupplierPage"], src_app_excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_11__["ExcelImportPage"]],
    })
], DashboardPageModule);



/***/ }),

/***/ "Y3wH":
/*!************************************************************!*\
  !*** ./src/app/home/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "jhxF");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "eChx":
/*!****************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Francois+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Anton&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Anton&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Secular+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n.header {\n  border-bottom-right-radius: 50% 75px;\n  background-color: rgba(128, 0, 0, 0.849);\n  padding: 6px;\n}\n.textalignleft {\n  text-align: left;\n}\n.hello {\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  font-weight: bold;\n  font-size: 35px;\n  margin-top: 0.6em;\n  letter-spacing: -2px;\n}\n.name {\n  font-family: \"Francois One\", sans-serif;\n  font-weight: bold;\n  color: white;\n  font-size: 46px;\n  position: relative;\n  top: -0.7em;\n}\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.card {\n  min-height: 5em;\n  width: 45%;\n  background-color: rgba(255, 255, 255, 0.801);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.082);\n  transition: 0.3s;\n  border-radius: 25px;\n  border-color: green;\n  padding-top: 25px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.card .cardtxt {\n  padding-top: 10px;\n  color: rgba(0, 0, 0, 0.459);\n  padding-bottom: 10px;\n  padding-left: 5px;\n  font-weight: bold;\n  font-family: \"Hammersmith One\", sans-serif;\n}\n.todo {\n  font-family: \"Open Sans\", sans-serif;\n  color: black;\n  letter-spacing: -3px;\n  font-size: 33px;\n  word-spacing: -1px;\n  margin-top: 24px;\n}\n.spacebetween {\n  display: flex;\n  justify-content: space-between;\n}\n.viewall {\n  font-family: \"Anton\", sans-serif;\n  color: purple;\n  font-size: 12px;\n  text-align: right;\n  margin-top: 32px;\n}\nion-list {\n  background: none !important;\n}\n.listhead {\n  display: flex;\n  padding-left: 20px;\n  padding-top: 5px;\n}\n.icon1 {\n  border-radius: 50%;\n  background: rgba(128, 0, 128, 0.849);\n  height: 3.4em;\n  width: 3.4em;\n  text-align: center;\n  color: white;\n}\n.inline {\n  display: flex;\n  flex-direction: column;\n}\n.texthead {\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n  top: -0.3em;\n  padding-left: 20px;\n  font-family: \"Hammersmith One\", sans-serif;\n  letter-spacing: -1px;\n}\n.textlabel {\n  color: rgba(0, 0, 0, 0.342);\n  position: relative;\n  top: -1em;\n  padding-left: 24px;\n  font-family: \"Hammersmith One\", sans-serif;\n  letter-spacing: -1px;\n  font-size: 15px;\n}\n.icon2 {\n  border-radius: 50%;\n  background: skyblue;\n  height: 3.4em;\n  width: 3.4em;\n  text-align: center;\n  color: white;\n}\n.icon3 {\n  border-radius: 50%;\n  background: rgba(128, 0, 0, 0.466);\n  height: 3.4em;\n  width: 3.4em;\n  text-align: center;\n  color: white;\n}\n@keyframes rota2 {\n  from {\n    transform: rotate(-225deg);\n  }\n  to {\n    transform: rotate(-45deg);\n  }\n}\n@keyframes rota {\n  from {\n    transform: rotate(-45deg);\n  }\n  to {\n    transform: rotate(315deg);\n  }\n}\n@moz-keyframes rota {\n  from {\n    transform: rotate(-45deg);\n  }\n\n  to {\n    transform: rotate(315deg);\n  }\n}\n.left {\n  border: #ff851bc0 solid 3px;\n  height: 120px;\n  width: 120px;\n  border-radius: 120px;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  position: absolute;\n  transform: rotate(315deg);\n  animation: rota 2000ms linear;\n  -o-animation: rota 2000ms linear;\n  -moz-animation: rota 2000ms linear;\n  -webkit-animation: rota 2000ms linear;\n}\n.middle {\n  color: white;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 150px;\n  position: relative;\n  z-index: 4;\n}\n.right {\n  border: #ff6b00 solid 3px;\n  height: 120px;\n  width: 120px;\n  border-radius: 120px;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  position: absolute;\n  transform: rotate(-45deg);\n  animation: rota2 1000ms linear;\n  -moz-animation: rota2 1000ms linear;\n  -o-animation: rota2 1000ms linear;\n  -webkit-animation: rota2 1000ms linear;\n}\n@keyframes popover {\n  0% {\n    opacity: 1;\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.circlewwrap {\n  padding-left: 0.5em;\n  width: 30%;\n}\n.respcardwrapper {\n  flex-wrap: wrap;\n  display: flex;\n  width: 100%;\n}\n.card {\n  width: 43%;\n}\n@media only screen and (max-device-width: 300px) {\n  .card {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n.flexdisp {\n  display: flex;\n}\n.centertext {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.scrollwrapper {\n  width: auto;\n  overflow-x: scroll;\n  display: flex;\n  padding: 5px;\n}\n.cards {\n  margin-left: 12px;\n  min-width: 160px;\n  min-height: 100px;\n  border-radius: 16px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.055), 0 3px 6px rgba(0, 0, 0, 0.13);\n  display: flex;\n  flex-direction: column;\n  padding: 4px;\n  transition: 0.2s;\n  text-align: center;\n}\n.line-input {\n  margin: 0 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n.line-input ion-item {\n  --border-color: transparent !important;\n  --highlight-height: 0;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 4px;\n}\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 1rem !important;\n}\n.line-input ion-item ion-input {\n  font-family: \"Noto Sans JP\", sans-serif;\n  color: black;\n}\n.prodcard {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(128, 0, 128, 0.404);\n  min-height: 8em;\n  width: 90%;\n  margin-top: 14px;\n  padding-top: 10px;\n  margin-left: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsdUZBQUE7QUFDQSxpRkFBQTtBQUNBLG9GQUFBO0FBQ0EsMEVBQUE7QUErV0EsMEVBQUE7QUFDQSxnRkFBQTtBQUNBLDZGQUFBO0FBL1dSO0VBQ0ksb0NBQUE7RUFFQSx3Q0FBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUNBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUE7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHSjtBQURBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFJSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUtKO0FBSkk7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUFNUjtBQUZBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFNSjtBQUpBO0VBQ0ksZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQUxBO0VBQ0ksMkJBQUE7QUFRSjtBQU5BO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFTSjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVUo7QUFSQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVdKO0FBVEE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtBQVlKO0FBVkE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFhSjtBQVhBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBY0o7QUFaQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWVKO0FBWkE7RUFDSTtJQUNJLDBCQUFBO0VBZU47RUFiRTtJQUNJLHlCQUFBO0VBZU47QUFDRjtBQWNBO0VBQ0k7SUFDSSx5QkFBQTtFQVlOO0VBVkU7SUFDSSx5QkFBQTtFQVlOO0FBQ0Y7QUFGQTtFQUNJO0lBQ0kseUJBQUE7RUFZTjs7RUFWRTtJQUNJLHlCQUFBO0VBYU47QUFDRjtBQUZBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtBQVlKO0FBVkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWFKO0FBWEE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FBY0o7QUFaQTtFQUNJO0lBQ0ksVUFBQTtFQWVOO0VBYkU7SUFDSSxVQUFBO0VBZU47RUFiRTtJQUNJLFVBQUE7RUFlTjtBQUNGO0FBdUJBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBWUo7QUFWQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWFKO0FBWEE7RUFDSSxVQUFBO0FBY0o7QUFYQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VBY047QUFDRjtBQVhBO0VBQ0ksYUFBQTtBQWFKO0FBWEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBZUo7QUFiQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWdCSjtBQWJBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBZ0JKO0FBZkk7RUFDSSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQWlCUjtBQWZRO0VBQ0ksbURBQUE7QUFpQlo7QUFkUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQWdCWjtBQWRRO0VBQ0ksdUNBQUE7RUFDQSxZQUFBO0FBZ0JaO0FBWEE7RUFDSSw2RUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBY0oiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vL2hlbGxvIGZvbnRcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmFuY29pcytPbmUmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFtbWVyc21pdGgrT25lJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJSA3NXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAwLCAwLjg0OSk7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi50ZXh0YWxpZ25sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmhlbGxvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjZlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZyYW5jb2lzIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0wLjdlbTtcclxufVxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDVlbTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4wODIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6Z3JlZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmNhcmR0eHQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDU5KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIYW1tZXJzbWl0aCBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxufVxyXG5cclxuLnRvZG8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIHdvcmQtc3BhY2luZzogLTFweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLnNwYWNlYmV0d2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi52aWV3YWxsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbmlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudCA7XHJcbn1cclxuLmxpc3RoZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5pY29uMSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMCwgMTI4LCAwLjg0OSk7XHJcbiAgICBoZWlnaHQ6IDMuNGVtO1xyXG4gICAgd2lkdGg6IDMuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbmxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRleHRoZWFkIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMC4zZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJIYW1tZXJzbWl0aCBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG59XHJcbi50ZXh0bGFiZWwge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGFtbWVyc21pdGggT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uaWNvbjIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcclxuICAgIGhlaWdodDogMy40ZW07XHJcbiAgICB3aWR0aDogMy40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmljb24zIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAwLCAwLCAwLjQ2Nik7XHJcbiAgICBoZWlnaHQ6IDMuNGVtO1xyXG4gICAgd2lkdGg6IDMuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGEyIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgcm90YTIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGEyIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGEyIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyByb3RhIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxuICAgIH1cclxufVxyXG5AbW96LWtleWZyYW1lcyByb3RhIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxuICAgIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGJvcmRlcjogI2ZmODUxYmMwIHNvbGlkIDNweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICBhbmltYXRpb246IHJvdGEgMjAwMG1zIGxpbmVhcjtcclxuICAgIC1vLWFuaW1hdGlvbjogcm90YSAyMDAwbXMgbGluZWFyO1xyXG4gICAgLW1vei1hbmltYXRpb246IHJvdGEgMjAwMG1zIGxpbmVhcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhIDIwMDBtcyBsaW5lYXI7XHJcbn1cclxuLm1pZGRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG4ucmlnaHQge1xyXG4gICAgYm9yZGVyOiAjZmY2YjAwIHNvbGlkIDNweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGFuaW1hdGlvbjogcm90YTIgMTAwMG1zIGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uOiByb3RhMiAxMDAwbXMgbGluZWFyO1xyXG4gICAgLW8tYW5pbWF0aW9uOiByb3RhMiAxMDAwbXMgbGluZWFyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEyIDEwMDBtcyBsaW5lYXI7XHJcbn1cclxuQGtleWZyYW1lcyBwb3BvdmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgOTklIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBwb3BvdmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgOTklIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBvcG92ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA5OSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9wb3ZlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDk5JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuLmNpcmNsZXd3cmFwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbi5yZXNwY2FyZHdyYXBwZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICBcclxufVxyXG4uZmxleGRpc3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2VudGVydGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zY3JvbGx3cmFwcGVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2FyZHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNTUpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMwZGEwMmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4MDdlN2UgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZGNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMXB4IDJweCByZ2JhKDEyOCwgMCwgMTI4LCAwLjQwNCk7XHJcbiAgICBtaW4taGVpZ2h0OiA4ZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbn1cclxuXHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2VjdWxhcitPbmUmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rVGFtbXVkdSsyOndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "jhxF":
/*!**************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.page.ts ***!
  \**************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "rRmB");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "eChx");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../translate-config.service */ "ZjVV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/add-item/add-item.page */ "w6bI");
/* harmony import */ var src_app_excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/excel-import/excel-import.page */ "kc0D");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/add-supplier/add-supplier.page */ "88it");
/* harmony import */ var src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/utility-methods.service */ "fm+l");













let DashboardPage = class DashboardPage {
    constructor(TranslateConfigService, utility, modalController, router, firestore, datePipe, translateConfigService) {
        this.TranslateConfigService = TranslateConfigService;
        this.utility = utility;
        this.modalController = modalController;
        this.router = router;
        this.firestore = firestore;
        this.datePipe = datePipe;
        this.translateConfigService = translateConfigService;
        this.revenue = 0;
        this.profit = 0;
        this.a = 0;
        this.sub = 0;
        this.temparray = [];
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.ModalPage,
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.returnDat = event['data'];
                }
            });
            return yield modal.present();
        });
    }
    gotTotPage(path) {
        this.router.navigate([path]);
    }
    openPOS() {
        this.router.navigate(['pos']);
    }
    addItem() {
        this.ModalPage = src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_7__["AddItemPage"];
        this.openModal();
    }
    addSupplier() {
        this.ModalPage = src_app_add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_11__["AddSupplierPage"];
        this.openModal();
    }
    excelImport() {
        this.ModalPage = src_app_excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_8__["ExcelImportPage"];
        this.openModal();
    }
    getItems() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
        else {
            this.items = [];
        }
        if (window.localStorage.getItem('helpers')) {
            this.helpers = JSON.parse(window.localStorage.getItem('helpers'));
        }
        else {
            this.helpers = [];
        }
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
            this.suppliers = [];
        }
        if (window.localStorage.getItem('customers')) {
            this.customers = JSON.parse(window.localStorage.getItem('customers'));
        }
        else {
            this.customers = [];
        }
        if (window.localStorage.getItem('lenders')) {
            this.lenders = JSON.parse(window.localStorage.getItem('lenders'));
        }
        else {
            this.lenders = [];
        }
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
            // this.getHelpers()
        }
        else {
            this.user = [];
        }
    }
    getHelpers() {
        this.firestore.collection('helpers', q => q.where('docID', '==', this.user.docID)).valueChanges().subscribe(res => {
            if (res.length < 1) {
            }
            else {
                this.helpers = res.length;
            }
        });
    }
    calculateProfit(array) {
        for (var i = 0; i < array.length; i++) {
            this.sub = array[i] + this.a;
            this.a = this.sub;
        }
    }
    getMonthlyStats() {
        let currentDate = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (this.user.docID) {
            this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).valueChanges().subscribe((res) => {
                if (res == undefined) {
                }
                else {
                    this.mDiscounts = res.discounts;
                    this.mRevenue = res.revenue;
                    this.mSales = res.sales;
                }
            });
        }
    }
    getDailySales() {
        console.log("I am called");
        var date = new Date();
        var date1 = this.datePipe.transform(date, 'dd/MM/yyyy');
        console.log(date1);
        if (this.user.docID) {
            this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).valueChanges().subscribe((res) => {
                if (res == undefined) {
                }
                else {
                    this.profit = res.profit;
                    this.revenue = res.revenue;
                    this.statSales = res.sales;
                }
            });
        }
        // this.getItems();
    }
    ionViewWillEnter() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user.uType);
        if (this.user.uType == 'Owner') {
            this.utility.checkPaid();
            // this.utility.checkForBasicService();
        }
        if (this.user.uType == 1) {
            this.getOwnerPlayerId();
        }
    }
    getOwnerPlayerId() {
        if (this.user.docID) {
            this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res) => {
                if (res == undefined) {
                }
                else {
                    this.user.playerId = res.playerID;
                    this.items = res.items;
                    this.suppliers = res.suppliers;
                    this.helpers = res.helper;
                    window.localStorage.setItem('user', JSON.stringify(this.user));
                    window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
                    window.localStorage.setItem('helpers', JSON.stringify(this.helpers));
                    window.localStorage.setItem('item', JSON.stringify(this.items));
                    this.getItems();
                }
            });
        }
    }
    ngOnInit() {
        this.TranslateConfigService.setLanguage("English");
        this.getItems();
        // this.getMonthlyStats()
        const date = new Date();
        const pathDate = this.datePipe.transform(date, 'dd/MM/yyyy');
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.getDailySales();
        if (this.user.uType == 1) {
            this.getOwnerPlayerId();
        }
    }
};
DashboardPage.ctorParameters = () => [
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] },
    { type: src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_12__["UtilityMethodsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "rRmB":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n   \r\n      \r\n   \r\n \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">\r\n     \r\n   \r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">SmartStock Management\r\n      </ion-title>\r\n      \r\n      \r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"textalignleft\">\r\n\r\n    <div style=\"display: flex;justify-content: center;margin-top: 0.3em;width: 100%;\">\r\n      <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.082);border-radius:14px;margin-top: 4px;width: 96%;background: #0f0c29;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, rgb(58, 43, 43),grey);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, rgb(58, 43, 43),grey); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n        \">\r\n        <ion-title style=\"color: white;font-size: 28px;\" class=\"hello\">\r\n          {{ 'dashboardOne.overView' | translate:params}}\r\n        </ion-title>\r\n\r\n        <div class=\"respcardwrapper\">\r\n\r\n          <ion-card style=\"background: white;\" class=\"card\" (click)=\"gotTotPage('home/inventory')\">\r\n            <div style=\"color: purple;\">\r\n              <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"cart-outline\"></ion-icon>\r\n            </div>\r\n            <ion-label class=\"cardtxt\">\r\n              <span *ngIf=\"items\">{{items.length}}</span><span *ngIf=\"!items\">0</span> {{ 'dashboardOne.prod' |\r\n              translate:params}}\r\n            </ion-label>\r\n          </ion-card>\r\n\r\n          <ion-card style=\"background: white;\" class=\"card\" (click)=\"gotTotPage('home/borrowers')\">\r\n            <div style=\"color: rgb(24, 224, 114);\">\r\n              <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"person-circle-outline\"></ion-icon>\r\n            </div>\r\n            <ion-label class=\"cardtxt\">\r\n              <span *ngIf=\"helpers\">{{helpers.length}}</span><span *ngIf=\"!helpers\">0</span> {{ 'dashboardOne.help'\r\n              | translate:params}}\r\n            </ion-label>\r\n          </ion-card>\r\n\r\n          <ion-card style=\"background: white;\" class=\"card\" (click)=\"gotTotPage('home/suppliers')\">\r\n            <div style=\"color: rgb(25, 94, 223);\">\r\n              <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"accessibility-outline\"></ion-icon>\r\n            </div>\r\n            <ion-label class=\"cardtxt\">\r\n              <span *ngIf=\"suppliers\">{{suppliers.length}}</span><span *ngIf=\"!suppliers\">0</span> {{ 'dashboardOne.rp'\r\n              | translate:params}}\r\n            </ion-label>\r\n          </ion-card>\r\n\r\n\r\n          <ion-card style=\"background: white;\" class=\"card\" (click)=\"gotTotPage('home/customer')\">\r\n            <div style=\"color: rgb(121, 49, 168);\">\r\n              <div style=\"color: rgb(189, 88, 22);\">\r\n                <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"happy-outline\"></ion-icon>\r\n              </div>\r\n              \r\n            </div>\r\n            <ion-label class=\"cardtxt\">\r\n              <span *ngIf=\"customers\">{{customers.length}}</span><span *ngIf=\"!customers\">0</span> Customers\r\n            </ion-label>\r\n\r\n          </ion-card>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"scrollwrapper\">\r\n    \r\n\r\n      <div class=\"cards\" style=\"background-color:rgb(202, 221, 233)\" >\r\n        <div class=\"flexdisp centertext\">\r\n          <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;color:rgb(15, 15, 15)\"> {{ 'dashboardOne.sales' | translate:params}}</h3>\r\n  \r\n        </div>\r\n  \r\n        <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color: rgb(27, 133, 194);\">{{statSales}}\r\n        </ion-label>\r\n  \r\n      </div>\r\n  \r\n      <div class=\"cards\" style=\"background-color:rgb(213, 230, 202)\">\r\n        <div class=\"flexdisp centertext\">\r\n          <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;color:rgb(7, 8, 7)\">   {{ 'dashboardOne.rev' | translate:params}}</h3>\r\n  \r\n        </div>\r\n  \r\n        <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color: rgb(89, 196, 18)\">{{revenue}}\r\n        </ion-label>\r\n  \r\n      </div>\r\n  \r\n      <div class=\"cards\" style=\"background-color:rgb(243, 215, 189)\">\r\n        <div class=\"flexdisp centertext\">\r\n          <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;color: rgb(15, 14, 14);\">{{ 'dashboardOne.pr' | translate:params}}</h3>\r\n  \r\n        </div>\r\n  \r\n        <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color: rgb(243, 113, 7);\">{{[profit]}}\r\n        </ion-label>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n  \r\n    \r\n\r\n    <div class=\"flex\">\r\n\r\n      <ion-card class=\"card\" (click)=\"addItem()\">\r\n        <div style=\"color: pink;\">\r\n          <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"prism\"></ion-icon>\r\n        </div>\r\n        <ion-label class=\"cardtxt\">\r\n          {{ 'dashboardOne.AI' | translate:params}}\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"card\" (click)=\"excelImport()\">\r\n        <div style=\"color: rgba(0, 128, 28, 0.555);\">\r\n          <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"attach\"></ion-icon>\r\n        </div>\r\n        <ion-label class=\"cardtxt\">\r\n          {{ 'dashboardOne.UE' | translate:params}}\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n\r\n      <ion-card class=\"card\" (click)=\"addSupplier()\">\r\n        <div style=\"color: purple;\">\r\n          <ion-icon color=\"none\" style=\"font-size: 30px;font-weight: bold;\" name=\"add-circle\"></ion-icon>\r\n        </div>\r\n        <ion-label class=\"cardtxt\">\r\n          {{ 'dashboardOne.AS' | translate:params}}\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n\r\n      <ion-card class=\"card\" (click)=\"openPOS()\">\r\n        <div style=\"color: brown;\">\r\n          <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"print\"></ion-icon>\r\n        </div>\r\n        <ion-label class=\"cardtxt\">\r\n          {{ 'dashboardOne.POS' | translate:params}}\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n\r\n    </div>\r\n\r\n    \r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=home-dashboard-dashboard-module.js.map