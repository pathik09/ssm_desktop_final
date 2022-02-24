(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ledger-report-date-input-ledger-report-date-input-module"],{

/***/ "8ucs":
/*!***************************************************************************!*\
  !*** ./src/app/ledger-report-date-input/ledger-report-date-input.page.ts ***!
  \***************************************************************************/
/*! exports provided: LedgerReportDateInputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerReportDateInputPage", function() { return LedgerReportDateInputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ledger_report_date_input_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ledger-report-date-input.page.html */ "vpW2");
/* harmony import */ var _ledger_report_date_input_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledger-report-date-input.page.scss */ "h/LR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let LedgerReportDateInputPage = class LedgerReportDateInputPage {
    constructor(router, datePipe) {
        this.router = router;
        this.datePipe = datePipe;
    }
    ngOnInit() {
        this.today = new Date(this.today.getTime() + (1000 * 60 * 60 * 24));
        this.today = this.today.toISOString();
    }
    addItem() {
    }
    setChoice(sd) {
    }
    scanBarcode() {
    }
    continue() {
        this.date1 = this.datePipe.transform(this.date1, 'dd/MM/yyyy');
        this.date2 = this.datePipe.transform(this.date2, 'dd/MM/yyyy');
        if (this.date1 > this.date2) {
            this.fromdate = this.date1;
            this.todate = this.date2;
        }
        else {
            this.todate = this.date1;
            this.fromdate = this.date2;
        }
        let data = {
            todate: this.todate,
            fromdate: this.fromdate,
        };
        window.localStorage.setItem("ledgerreportdates", JSON.stringify(data));
        this.router.navigate(['ledgerreport']);
    }
    close() {
        this.router.navigate(['home/inventory']);
    }
};
LedgerReportDateInputPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
LedgerReportDateInputPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ledger-report-date-input',
        template: _raw_loader_ledger_report_date_input_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ledger_report_date_input_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LedgerReportDateInputPage);



/***/ }),

/***/ "h/LR":
/*!*****************************************************************************!*\
  !*** ./src/app/ledger-report-date-input/ledger-report-date-input.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWRnZXItcmVwb3J0LWRhdGUtaW5wdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "rpOF":
/*!*************************************************************************************!*\
  !*** ./src/app/ledger-report-date-input/ledger-report-date-input-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LedgerReportDateInputPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerReportDateInputPageRoutingModule", function() { return LedgerReportDateInputPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ledger_report_date_input_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ledger-report-date-input.page */ "8ucs");




const routes = [
    {
        path: '',
        component: _ledger_report_date_input_page__WEBPACK_IMPORTED_MODULE_3__["LedgerReportDateInputPage"]
    }
];
let LedgerReportDateInputPageRoutingModule = class LedgerReportDateInputPageRoutingModule {
};
LedgerReportDateInputPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LedgerReportDateInputPageRoutingModule);



/***/ }),

/***/ "vpW2":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ledger-report-date-input/ledger-report-date-input.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">   <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">SHOW LEDGER REPORT \r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"choice == ''\">\r\n\r\n  <div class=\"container\">\r\n    <div style=\"width: 90%;\" class=\"vertical-center\">\r\n      <ion-card mode=\"ios\" button (click)=\"scanBarcode()\" style=\"text-align: center;\">\r\n        <img src=\"../../assets/barcode.png\" />\r\n        <ion-card-header>\r\n          <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\"> SHOW LEDGER REPORT\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <div class=\"h-divider\">\r\n        <div class=\"shadow\"></div>\r\n        <div class=\"text\"><i>Show Ledger Report</i></div>\r\n      </div>\r\n\r\n      <ion-card mode=\"ios\" button (click)=\"setChoice('manually')\" style=\"text-align: center;\">\r\n        <img src=\"../../assets/typewriter.png\" />\r\n        <ion-card-header>\r\n          <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\">SHOW LEDGER REPORT\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-content >\r\n  <ion-item>\r\n    <ion-label>FROM</ion-label>\r\n    <ion-datetime [(ngModel)]=\"date1\" displayFormat=\"MM DD YY\" placeholder=\"From\"  [max]=\"today\"></ion-datetime>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>TO</ion-label>\r\n    <ion-datetime  [(ngModel)]=\"date2\" displayFormat=\"MM DD YY\" placeholder=\"To\"   [max]=\"today\" ></ion-datetime>\r\n  </ion-item>\r\n  </ion-content>\r\n  <div style=\"margin-top: 25px;width: 100%;\">\r\n    <ion-button (click)=\"continue()\" class=\"shadow-red\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #4e4376, #2b5876);\" expand='full' >\r\n      <p style=\"font-family: Impact;color: rgba(255, 255, 255);\">        Continue\r\n      </p>\r\n\r\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n<ion-content >\r\n\r\n ");

/***/ }),

/***/ "zkoH":
/*!*****************************************************************************!*\
  !*** ./src/app/ledger-report-date-input/ledger-report-date-input.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LedgerReportDateInputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerReportDateInputPageModule", function() { return LedgerReportDateInputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ledger_report_date_input_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ledger-report-date-input-routing.module */ "rpOF");
/* harmony import */ var _ledger_report_date_input_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ledger-report-date-input.page */ "8ucs");







let LedgerReportDateInputPageModule = class LedgerReportDateInputPageModule {
};
LedgerReportDateInputPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ledger_report_date_input_routing_module__WEBPACK_IMPORTED_MODULE_5__["LedgerReportDateInputPageRoutingModule"]
        ],
        declarations: [_ledger_report_date_input_page__WEBPACK_IMPORTED_MODULE_6__["LedgerReportDateInputPage"]]
    })
], LedgerReportDateInputPageModule);



/***/ })

}]);
//# sourceMappingURL=ledger-report-date-input-ledger-report-date-input-module.js.map