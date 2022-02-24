(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["po-report-po-report-module"],{

/***/ "+8fb":
/*!*********************************************!*\
  !*** ./src/app/po-report/po-report.page.ts ***!
  \*********************************************/
/*! exports provided: PoReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoReportPage", function() { return PoReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_po_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./po-report.page.html */ "bos3");
/* harmony import */ var _po_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./po-report.page.scss */ "Mxvv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");






let PoReportPage = class PoReportPage {
    constructor(router, callNumber) {
        this.router = router;
        this.callNumber = callNumber;
        this.noitem = false;
    }
    close() {
        this.router.navigate(['home/inventory']);
    }
    call(boi) {
        this.callNumber.callNumber(boi.phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    ngOnInit() {
        this.selpo = [];
        this.purchaseorders = [];
        this.purchaseorders = JSON.parse(window.localStorage.getItem("purchaseOrders"));
        let selecteditem_index = window.localStorage.getItem("selecteditem");
        for (let i = 0; i < this.purchaseorders.length; i++) {
            if (this.purchaseorders[i].item_index == selecteditem_index) {
                this.selpo.push(this.purchaseorders[i]);
            }
        }
        console.log(this.selpo.length);
        if (this.selpo.length == 0) {
            console.log("NO item is true");
            this.noitem = true;
        }
        console.log(this.selpo);
    }
};
PoReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }
];
PoReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-po-report',
        template: _raw_loader_po_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_po_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PoReportPage);



/***/ }),

/***/ "GCct":
/*!***********************************************!*\
  !*** ./src/app/po-report/po-report.module.ts ***!
  \***********************************************/
/*! exports provided: PoReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoReportPageModule", function() { return PoReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _po_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./po-report-routing.module */ "VVlV");
/* harmony import */ var _po_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./po-report.page */ "+8fb");







let PoReportPageModule = class PoReportPageModule {
};
PoReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _po_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["PoReportPageRoutingModule"]
        ],
        declarations: [_po_report_page__WEBPACK_IMPORTED_MODULE_6__["PoReportPage"]]
    })
], PoReportPageModule);



/***/ }),

/***/ "Mxvv":
/*!***********************************************!*\
  !*** ./src/app/po-report/po-report.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BvLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ0k7RUFDRSw2QkFBQTtBQUNOO0FBRUk7RUFDRSw4QkFBQTtBQUFOIiwiZmlsZSI6InBvLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBpb24tcm93OmZpcnN0LWNoaWxkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogICMyZGQzNmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "VVlV":
/*!*******************************************************!*\
  !*** ./src/app/po-report/po-report-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PoReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoReportPageRoutingModule", function() { return PoReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _po_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./po-report.page */ "+8fb");




const routes = [
    {
        path: '',
        component: _po_report_page__WEBPACK_IMPORTED_MODULE_3__["PoReportPage"]
    }
];
let PoReportPageRoutingModule = class PoReportPageRoutingModule {
};
PoReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PoReportPageRoutingModule);



/***/ }),

/***/ "bos3":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/po-report/po-report.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">\r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">PO REPORT \r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"choice == ''\">\r\n\r\n  <div class=\"container\">\r\n    <div style=\"width: 90%;\" class=\"vertical-center\">\r\n     \r\n      <div class=\"h-divider\">\r\n        <div class=\"shadow\"></div>\r\n        <div class=\"text\"><i>PO Report</i></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n<div style=\"height: 100%;background-color: white;\" >\r\n   <ion-item-sliding *ngFor=\"let po of selpo\">\r\n  <ion-item>\r\n\r\n    <div style=\"display: flex;\">\r\n\r\n      <div style=\"width: 20%;\">\r\n        <img style=\"margin-top: 15px;\" src=\"../../assets/allokey.png\" alt=\"\">\r\n      </div>\r\n\r\n      <div style=\"width: 50%;\">\r\n\r\n        <div style=\"padding: 5px;\">\r\n\r\n          <div style=\"display: flex;flex-wrap: wrap;justify-content: center;flex-direction: column;\">\r\n\r\n            <ion-label style=\"padding: 1px;\">\r\n              <b>\r\n              Supplier Name\r\n              </b>\r\n              {{po.supplier.name}}\r\n            </ion-label>\r\n            <ion-label style=\"padding: 1px;\">\r\n              <b>\r\n               Supplier Phone\r\n              </b>\r\n              {{po.supplier.phone}}\r\n            </ion-label>\r\n\r\n            <ion-label style=\"padding: 1px;\">\r\n              <b>\r\n               Stock\r\n              </b>\r\n              {{po.stock}}\r\n            </ion-label>\r\n\r\n          </div>\r\n\r\n        \r\n\r\n      </div>\r\n      <div style=\"width: 30%;\">\r\n        <ion-label (click)=\"call(po.supplier)\"\r\n          style=\"text-align: right;padding: 10px;font-size: 20px;font-weight: bold;margin-top: 30px;font-family: Open Sans;color: rgba(158, 43, 8, 0.897);\">\r\n          <ion-icon style=\"position: relative;top: 2px;\" name=\"call\"></ion-icon>\r\n         \r\n        </ion-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n\r\n   \r\n  \r\n  </ion-item>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n<ion-content >\r\n  \r\n\r\n\r\n\r\n ");

/***/ })

}]);
//# sourceMappingURL=po-report-po-report-module.js.map