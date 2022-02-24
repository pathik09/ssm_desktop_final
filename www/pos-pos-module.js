(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pos-pos-module"],{

/***/ "2Oj6":
/*!*******************************************!*\
  !*** ./src/app/pos/pos-routing.module.ts ***!
  \*******************************************/
/*! exports provided: POSPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSPageRoutingModule", function() { return POSPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pos.page */ "buir");




const routes = [
    {
        path: '',
        component: _pos_page__WEBPACK_IMPORTED_MODULE_3__["POSPage"]
    }
];
let POSPageRoutingModule = class POSPageRoutingModule {
};
POSPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], POSPageRoutingModule);



/***/ }),

/***/ "ODp1":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/pos.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"currentPage=='viewsales'\">\r\n  <ion-toolbar style=\"--background: #2b5876;  /* fallback for old browsers */\r\n  --background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n  --background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  \">\r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">VIEW SALES\r\n      </ion-title>\r\n      <ion-button (click)=\"changePage('dashboard')\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          BACK </p>\r\n      </ion-button>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"currentPage == 'dashboard' || currentPage == 'search'\">\r\n\r\n  <ion-searchbar (ionChange)=\"searchItem()\" [(ngModel)]=\"searchParam\" mode='ios'>\r\n  </ion-searchbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n  <div style=\"margin-top: 15px;\">\r\n\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"currentPage == 'dashboard'\" class=\"respcardwrapper\">\r\n   \r\n\r\n    <ion-card class=\"card\" (click)=\"addDiscount()\">\r\n      <div style=\"color: rgb(255, 228, 192);\">\r\n        <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"cafe\"></ion-icon>\r\n      </div>\r\n      <ion-label class=\"cardtxt\">\r\n        {{ 'POS.c2' | translate:params}}\r\n      </ion-label>\r\n    </ion-card>\r\n\r\n    \r\n    <ion-card class=\"card\" (click)=\"clearRecipt()\">\r\n      <div style=\"color: rgb(77, 52, 5);\">\r\n        <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"refresh\"></ion-icon>\r\n      </div>\r\n      <ion-label class=\"cardtxt\">\r\n        {{ 'POS.c5' | translate:params}}\r\n      </ion-label>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card\" (click)=\"endSale()\">\r\n      <div style=\"color: rgba(5, 139, 45, 0.815);\">\r\n        <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"card\"></ion-icon>\r\n      </div>\r\n      <ion-label class=\"cardtxt\">\r\n        {{ 'POS.c6' | translate:params}}\r\n      </ion-label>\r\n    </ion-card>\r\n    \r\n    <ion-card class=\"card\" (click)=\"generatePO()\">\r\n    <div style=\"color: rgba(5, 139, 45, 0.815);\">\r\n      <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"card\"></ion-icon>\r\n    </div>\r\n    <ion-label class=\"cardtxt\">\r\n      Generate Purchase Order\r\n    </ion-label>\r\n  </ion-card>\r\n  <ion-card class=\"card\" (click)=\"createQuotation()\">\r\n    <div style=\"color: rgba(5, 139, 45, 0.815);\">\r\n      <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"card\"></ion-icon>\r\n    </div>\r\n    <ion-label class=\"cardtxt\">\r\n      Generate quotation\r\n    </ion-label>\r\n  </ion-card>\r\n\r\n \r\n\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"currentPage=='search'\">\r\n    <div *ngIf=\"searchFound && searchFound.length > 0\">\r\n\r\n\r\n\r\n      <ion-item-sliding *ngFor=\"let item of searchFound\">\r\n        <ion-item (click)=\"addSearchItem(item)\">\r\n          <ion-checkbox mode='ios' color=\"success\" slot=\"end\"></ion-checkbox>\r\n\r\n          <div style=\"padding: 5px;\">\r\n            <ion-label style=\"text-align: center;padding: 10px;font-size: 20px;font-weight: bold;\" class=\"robothin\">\r\n              {{item.name}}\r\n            </ion-label>\r\n\r\n            <div style=\"display: flex;flex-wrap: wrap;justify-content: center;\">\r\n\r\n              <ion-label style=\"padding: 1px;\">\r\n                <b>\r\n                  {{ 'POS.pr' | translate:params}}:\r\n                </b> {{item.rPrice}}\r\n              </ion-label>\r\n              <ion-label style=\"padding: 1px;\">\r\n                <b>\r\n                  {{ 'POS.br' | translate:params}}:\r\n                </b>\r\n                {{item.barcode}}\r\n              </ion-label>\r\n\r\n              <ion-label style=\"padding: 1px;\">\r\n                <b>\r\n                  {{ 'POS.st' | translate:params}}\r\n                </b>\r\n                {{item.stock}}\r\n              </ion-label>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item-options>\r\n          <ion-item-option color=\"danger\">\r\n\r\n            <ion-label>DELETE</ion-label>\r\n\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n\r\n      </ion-item-sliding>\r\n    </div>\r\n\r\n  </div>\r\n\r\n \r\n\r\n    \r\n\r\n     \r\n\r\n\r\n\r\n    \r\n\r\n  \r\n\r\n\r\n    <div *ngIf=\"recipt && recipt.length > 0\">\r\n      <h2 style=\"text-align: center;\"> {{ 'POS.total' | translate:params}}: {{total}}</h2>\r\n\r\n      <ion-card *ngFor=\"let item of recipt;let i = index\" style=\"padding: 10px;color: black;\" class=\"items\">\r\n        <img style=\"object-fit: contain;height: 4em;\" src=\"../../assets/prodicon.png\" alt=\"\">\r\n\r\n        <div style=\"width: 60%;\">\r\n\r\n          <ion-title style=\"color: rgba(0, 0, 0, 0.705);\" class=\"opensans\">{{item.name}}</ion-title>\r\n\r\n          <div style=\"display: flex;\">\r\n\r\n            <ion-chip style=\"font-family: Impact;\" fill=\"outline\" color=\"success\">\r\n              {{ 'POS.is' | translate:params}}\r\n            </ion-chip>\r\n\r\n\r\n            <ion-chip mode='ios' style=\"padding-left: 20px;padding-right: 20px;font-weight: bold;\" color=\"medium\">\r\n              <ion-label class=\"opensans\">Quantity</ion-label>x <ion-input [(ngModel)]=\"item.quantity\"\r\n                (ionChange)=\"calculateTotal()\" type=\"number\" placeholder=\"{{item.quantity}}\">\r\n              </ion-input>\r\n            </ion-chip>\r\n            <ion-icon style=\"position: relative;top: 0.8em;left: -1.5em;\" color=\"danger\" name=\"create-outline\">\r\n            </ion-icon>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"margin-top: 1.5em;\">\r\n          <ion-title style=\"color: #4e4376;\" class=\"opensans\">{{item.rPrice}}</ion-title>\r\n        </div>\r\n        <div (click)=\"deleteItem(i)\" style=\"position: relative;top: -1em;z-index: 1;\">\r\n          <ion-icon style=\"font-size: 32px;\" color=\"danger\" name=\"trash\"></ion-icon>\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n\r\n  \r\n\r\n  <div style=\"height: 100%;background-color: white;\" *ngIf=\"currentPage=='viewsales'\">\r\n    <ion-item-sliding *ngFor=\"let sale of statSales.sales\">\r\n      <ion-item>\r\n\r\n        <div style=\"display: flex;\">\r\n\r\n          <div style=\"width: 20%;\">\r\n            <img style=\"margin-top: 15px;\" src=\"../../assets/allokey.png\" alt=\"\">\r\n          </div>\r\n\r\n          <div style=\"width: 50%;\">\r\n\r\n            <div style=\"padding: 5px;\">\r\n              <ion-label *ngIf=\"sale.cName\"\r\n                style=\"text-align: center;padding: 10px;font-size: 20px;font-weight: bold;font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\">\r\n                {{sale.cName}}\r\n              </ion-label>\r\n\r\n              <div style=\"display: flex;flex-wrap: wrap;justify-content: center;flex-direction: column;\">\r\n\r\n                <ion-label style=\"padding: 1px;\">\r\n                  <b>\r\n                    {{ 'POS.date' | translate:params}}\r\n                  </b>\r\n                  {{sale.date | date:'dd/MM/yyyy'}}\r\n                </ion-label>\r\n                <ion-label style=\"padding: 1px;\">\r\n                  <b>\r\n                    {{ 'POS.sold' | translate:params}}\r\n                  </b>\r\n                  {{sale.soldBy}}\r\n                </ion-label>\r\n\r\n                <ion-label style=\"padding: 1px;\">\r\n                  <b>\r\n                    {{ 'POS.items' | translate:params}}\r\n                  </b>\r\n                  <span *ngIf=\"sale.recipt\">{{sale.recipt.length}}</span>\r\n                </ion-label>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div style=\"width: 30%;\">\r\n            <ion-label\r\n              style=\"text-align: right;padding: 10px;font-size: 20px;font-weight: bold;margin-top: 30px;font-family: Open Sans;color: rgba(158, 43, 8, 0.897);\">\r\n              <ion-icon style=\"position: relative;top: 2px;\" name=\"arrow-back\"></ion-icon>\r\n              {{ 'POS.swipe' | translate:params}}\r\n            </ion-label>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item-options>\r\n        <ion-item-option color=\"light\">\r\n\r\n          <ion-label> {{ 'POS.total' | translate:params}} {{sale.total}}</ion-label>\r\n\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </div>\r\n\r\n \r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"currentPage !='viewsales'\" class=\"footer\">\r\n\r\n  <div style=\"display: flex;color: white;position: relative;top: 0.5em;\">\r\n    <ion-icon  (click)=\"back()\" style=\"font-size: 25px;margin-left: 6px;\"\r\n      name=\"close-circle\"></ion-icon>\r\n      \r\n\r\n    <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">BACK\r\n    </ion-title>\r\n\r\n  </div>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "buir":
/*!*********************************!*\
  !*** ./src/app/pos/pos.page.ts ***!
  \*********************************/
/*! exports provided: POSPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSPage", function() { return POSPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pos.page.html */ "ODp1");
/* harmony import */ var _pos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos.page.scss */ "n9z9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _select_customer_select_customer_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-customer/select-customer.page */ "qhlK");
/* harmony import */ var _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../select-supplier/select-supplier.page */ "mLb4");

















let POSPage = class POSPage {
    constructor(router, barcodeScanner, toastController, alertController, datePipe, firestore, platform, http, auth, modalController) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.toastController = toastController;
        this.alertController = alertController;
        this.datePipe = datePipe;
        this.firestore = firestore;
        this.platform = platform;
        this.http = http;
        this.auth = auth;
        this.modalController = modalController;
        this.recipt = [];
        this.searchFound = [];
        //paid: number = 0;
        this.cNum = "";
        this.cName2 = "";
        this.note = "";
        this.discount = 0;
        this.revenue = 0;
        this.profit = 0;
        this.currentPage = 'dashboard';
        this.backDisbale = this.platform.backButton.subscribeWithPriority(999, () => {
            if (this.user.uType == 'Helper') {
                navigator['app'].exitApp();
            }
            else if (this.user.uType == 'Owner') {
                this.router.navigate(['home/dashboard']);
            }
        });
        this.lowStock = 0;
        this.toReturn = 0;
        this.temparray = [];
        /*  getSales() {
            const date = new Date();
            const pathDate = this.datePipe.transform(date, 'ddMMyyyy');
            this.user = JSON.parse(window.localStorage.getItem('user'));
            this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(pathDate).valueChanges().subscribe((data: any) => {
              this.statSales = data;
              this.revenue = 0;
              this.profit = 0;
        
              if (this.statSales) {
                if (this.statSales.sales) {
                  for (var i = 0; i < this.statSales.sales.length; i++) {
                    this.statSales.sales[i] = JSON.parse(this.statSales.sales[i]);
                    this.revenue = this.revenue + this.statSales.sales[i].total;
                    if (this.statSales.sales[i].recipt.length > 0) {
                      for (var k = 0; k < this.statSales.sales[i].recipt.length; k++) {
                        this.profit =
                          (this.statSales.sales[i].recipt[k].rPrice * this.statSales.sales[i].recipt[k].quantity)
                          - (this.statSales.sales[i].recipt[k].pPrice * this.statSales.sales[i].recipt[k].quantity);
                        console.log(this.profit);
                        this.temparray.push(this.profit)
        
        
                      }
        
                    }
                  }
        
        
                  this.calculateProfit(this.temparray);
        
                }
              }
        
            })
        
          }
          */
        this.a = 0;
        this.sub = 0;
        this.sal = 0;
        this.discounts = [];
        this.reven = [];
        this.lett = 0;
        this.lets = 0;
        this.discountsthismonth = 0;
        this.revenuethismonth = 0;
    }
    generatePO() {
        if (this.recipt.length == 0) {
            alert("Please select some items");
            return;
        }
        this.selectSupplier();
    }
    selectCustomer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.recipt);
            if (this.recipt.length == 0) {
                alert("please select items");
                return;
            }
            const modal = yield this.modalController.create({
                component: _select_customer_select_customer_page__WEBPACK_IMPORTED_MODULE_12__["SelectCustomerPage"],
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.customer = event['data'];
                    window.localStorage.setItem('selectcustomer', JSON.stringify(this.customer));
                    this.endSale2();
                    this.router.navigate(['invoice']);
                    //  window.localStorage.setItem('items', JSON.stringify(this.items));
                }
            });
            return yield modal.present();
        });
    }
    generateBill() {
        if (this.recipt.length == 0) {
            alert("Please select some items");
            return;
        }
        this.endSale();
        this.router.navigate(['invoice']);
    }
    changePage(c_page) {
        this.currentPage = c_page;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.msg,
                duration: 800,
                color: this.color,
                position: 'top',
            });
            toast.present();
        });
    }
    getItems() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
        else {
            this.items = [];
        }
        if (window.localStorage.getItem('sales')) {
            this.sales = JSON.parse(window.localStorage.getItem('sales'));
        }
        else {
            this.sales = [];
        }
        if (window.localStorage.getItem('lenders')) {
            this.lenders = JSON.parse(window.localStorage.getItem('lenders'));
        }
        else {
            this.lenders = [];
        }
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        if (window.localStorage.getItem('salesToBeUpload')) {
            this.salesToBeUpload = JSON.parse(window.localStorage.getItem('salesToBeUpload'));
        }
        else {
            this.salesToBeUpload = [];
        }
    }
    scanBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            var barcode = barcodeData.text;
            var found = false;
            for (var i = 0; i < this.items.length; i++) {
                if (barcode == this.items[i].barcode) {
                    let data = this.items[i];
                    data.quantity = 1;
                    data.index = i;
                    for (let i = 0; i < this.recipt.length; i++) {
                        if (this.recipt[i] == this.items[i]) {
                            found = true;
                            this.recipt[i].quantity = this.recipt[i].quantity + 1;
                        }
                    }
                    if (!found) {
                        this.recipt.push(data);
                    }
                    this.msg = "Item added!";
                    this.color = "success";
                    this.presentToast();
                    found = true;
                    break;
                }
            }
            if (found == false) {
                this.msg = "Item not found!";
                this.color = "danger";
                this.presentToast();
            }
        }).catch(err => {
            alert(err);
        });
    }
    getInfo() {
        this.lowStock = 0;
        if (this.items) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].index = i;
                this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
                if (this.items[i].stock < this.items[i].mquantity) {
                    this.lowStock = this.lowStock + 1;
                    console.log(this.items[i], 'lhdfoweg');
                }
            }
        }
        else {
            const content = "you donnot have any items in your shop";
            // this.sendNotification(content)
        }
    }
    calculateTotal() {
        this.total = 0;
        for (var i = 0; i < this.recipt.length; i++) {
            this.total = this.total + (this.recipt[i].rPrice * this.recipt[i].quantity);
        }
        this.total = this.total - this.discount;
    }
    addSearchItem(item) {
        let data = item;
        data.quantity = 1;
        let found = false;
        for (let i = 0; i < this.recipt.length; i++) {
            if (this.recipt[i] == item) {
                found = true;
                this.recipt[i].quantity = this.recipt[i].quantity + 1;
            }
        }
        if (!found) {
            this.recipt.push(data);
        }
        this.msg = "Item added!";
        this.color = "success";
        this.presentToast();
        this.searchParam = "";
        this.searchFound = [];
        this.calculateTotal();
    }
    deleteItem(i) {
        console.log(this.recipt[i]);
        this.total = this.total - this.recipt[i].rPrice * this.recipt[i].quantity;
        /*for(let i =0;i<this.recipt.length;i++)
        {
          if(this.recipt[i]==i)
          {
            this.total =
          }
        }*/
        this.recipt.splice(i, 1);
    }
    clearRecipt() {
        this.recipt = [];
        this.total = 0;
    }
    searchItem() {
        if (this.searchParam) {
            this.changePage('search');
            this.searchFound = [];
            var found = 0;
            if (this.searchParam != "") {
                for (var k = 0; k < this.items.length; k++) {
                    if (this.items[k].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
                        found = found + 1;
                        if (found < 8) {
                            this.searchFound.push(this.items[k]);
                            this.searchFound[this.searchFound.length - 1].index = k;
                        }
                        else
                            break;
                    }
                    else if (this.items[k].barcode.toLowerCase().includes(this.searchParam.toLowerCase())) {
                        found = found + 1;
                        if (found < 8) {
                            this.searchFound.push(this.items[k]);
                            this.searchFound[this.searchFound.length - 1].index = k;
                        }
                        else
                            break;
                    }
                }
            }
        }
        else {
            this.changePage('dashboard');
        }
    }
    addNote() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                subHeader: "Would you like to add additional notes for this sale?",
                mode: 'ios',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'input',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the note here..",
                    },
                ],
                buttons: [{
                        text: 'Next',
                        handler: data => {
                            this.note = data.input;
                        },
                    },
                ]
            });
            yield alert2.present();
        });
    }
    addDiscount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                subHeader: "How much should be the discount?",
                mode: 'ios',
                backdropDismiss: true,
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the amount here..",
                    },
                ],
                buttons: [{
                        text: 'Next',
                        handler: data => {
                            this.discount = Number(data.input);
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'destructive'
                    }
                ]
            });
            yield alert2.present();
        });
    }
    getAmount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.selectCustomer();
            window.localStorage.setItem("selectcustomer", JSON.stringify(this.customer));
            // await alert2.present();
        });
    }
    cName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                header: "Customer's name?",
                subHeader: "To Return: " + this.toReturn,
                message: "Please add customer Name",
                mode: 'ios',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'input',
                        type: 'text',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the name here..",
                    },
                ],
                buttons: [{
                        text: 'Next',
                        handler: data => {
                            this.cName2 = data.input;
                            if (!this.cName2) {
                                this.msg = 'Add customer Name';
                                this.presentToast();
                                this.cName();
                            }
                            else {
                                this.cNumber();
                            }
                        },
                    },
                ]
            });
            yield alert2.present();
        });
    }
    cNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                header: "Please Add Customer's Number",
                subHeader: "Customer's number is must for future tracking",
                mode: 'ios',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the number here..",
                    },
                ],
                buttons: [{
                        text: 'FINISH SALE',
                        handler: data => {
                            this.cNum = data.input;
                            if (!this.cNum || this.cNum.length < 10) {
                                this.cNumber();
                                this.msg = 'Add a valid  Customer Number';
                                this.presentToast();
                            }
                            else {
                                var str = this.cNum;
                                var res = str.substring(0, 2);
                                if (res != '91') {
                                    this.cNum = '+91' + this.cNum;
                                    this.endSale2();
                                }
                                else {
                                    this.endSale2();
                                }
                            }
                        },
                    },
                ]
            });
            yield alert2.present();
        });
    }
    addStockToFireBase(data) {
        // console.log("We are here"+JSON.parse(data))
        //var currentDate = new Date();
        //var futureDate = new Date(currentDate.getTime() - 60000);
        //var past = Date.now() - 60000;
        //   this.firestore.collection('')
        //console.log("data is************"+JSON.stringify(data))
        this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).valueChanges().subscribe((res) => {
            if (res == undefined) {
                data.maxStockAdded = 0;
            }
            else {
                data.maxStockAdded = res.maxStockAdded;
            }
        });
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).update({
                    maxStockAdded: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.increment(1),
                    stock_added: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(data)
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).set({
                    maxStockAdded: 1,
                    stock_added: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(data)
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
        //console.log()
    }
    endSale() {
        this.total = 0;
        this.profit = 0;
        this.revenue = 0;
        for (var i = 0; i < this.recipt.length; i++) {
            this.items[this.recipt[i].index].stock = this.items[this.recipt[i].index].stock - this.recipt[i].quantity;
            this.total = this.total + (this.recipt[i].rPrice * this.recipt[i].quantity);
            stock_added: -this.recipt[i].quantity;
            name: this.recipt[i].name;
            date: Date.now();
            if (this.items[this.recipt[i].index].stock < this.items[this.recipt[i].index].mquantity) {
                this.sendNotification("Low Stock Notification:Item " + this.items[this.recipt[i].index].name + "is low stock.");
            }
            this.profit = this.profit + ((this.recipt[i].rPrice - this.recipt[i].pPrice) * this.recipt[i].quantity);
            this.revenue = this.revenue + (this.recipt[i].rPrice * this.recipt[i].quantity);
            if (this.mnumber == null) {
                this.mnumber = 0;
            }
        }
        console.log("in the end sale");
        this.updateDailySalesandProfit(this.revenue, this.profit);
        this.total = this.total - this.discount;
        this.getAmount();
    }
    updateDailySalesandProfit(revenue, profit) {
        console.log(revenue);
        console.log(profit);
        var date = new Date();
        var date1 = this.datePipe.transform(date, 'dd/MM/yyyy');
        console.log(date1);
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).update({
                    sales: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.increment(1),
                    profit: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.increment(profit),
                    revenue: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.increment(revenue)
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).set({
                    sales: 1,
                    revenue: revenue,
                    profit: profit
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
        this.profit = 0;
        this.revenue = 0;
    }
    endSale2() {
        window.localStorage.setItem('items', JSON.stringify(this.items));
        if (this.paid == 1) {
            this.firestore.collection('stores').doc(this.user.docID).update({
                items: this.items,
            }).then(data2 => console.log('data2'));
        }
        const date = new Date();
        const pathDate = this.datePipe.transform(date, 'dd/MM/yyyy');
        let data = {
            recipt: this.recipt,
            total: this.total,
            paid: this.paid,
            cNum: this.cNum,
            cName: this.cName2,
            date: date,
            discount: this.discount,
            note: this.note,
            soldBy: this.user.name,
        };
        //console.log("**************length****&&&&&&&&&********"+this.recipt.length);
        window.localStorage.setItem("currentsale", JSON.stringify(data));
        console.log(data.recipt);
        this.Products = new Array();
        console.log(this.recipt.length);
        this.finalgst = 0;
        // this.Products = data.recipt;
        // data.recipt.forEach()
        //data.recipt[0].quantity=10;
        let idiscount = this.discount / this.recipt.length;
        console.log(idiscount);
        let totalPrice = 0;
        for (let i = 0; i < this.recipt.length; i++) {
            totalPrice = totalPrice + this.recipt[i].rPrice;
        }
        let discountperPrice = this.discount / totalPrice;
        for (let i = 0; i < this.recipt.length; i++) {
            this.recipt = data.recipt;
            //console.log(data.recipt[i].gst);
            //console.log(data.recipt[i].rPrice); 
            //console.log(data.recipt[i].quantity)
            if (data.recipt[i].gst != 0) {
                this.tempObject = data.recipt[i];
                // console.log(this.tempObject);
                if (this.tempObject.gst == null) {
                    idiscount = this.tempObject.rPrice * discountperPrice;
                    this.tempObject.rPrice = this.tempObject.rPrice - idiscount;
                }
                else {
                    idiscount = this.tempObject.rPrice * discountperPrice;
                    let idiscountgst = idiscount * this.tempObject.gst / 100;
                    console.log("GST*******" + this.tempObject.gst);
                    let gston = this.tempObject.rPrice * this.tempObject.gst / 100 - idiscountgst;
                    console.log(gston);
                    this.tempObject.rPrice = this.tempObject.rPrice - idiscount;
                    this.tempObject.rPrice = this.tempObject.rPrice - gston;
                    console.log("rPrice" + this.tempObject.rPrice);
                    this.finalgst += gston * this.tempObject.quantity;
                }
                //console.log(gston);
                //this.tempObject.cgst = this.tempObject.rPrice - gston
                //this.tempObject.cgst = this.tempObject.cgst - idiscountgst;
                // console.log(data.recipt[i]);
                this.Products.push(this.tempObject);
                // console.log(this.Products);
                // console.log("Product Retail Price"+this.tempObject.rPrice);
                this.tempObject = data.recipt[i];
                // console.log(this.tempObject); 
            }
        }
        if (this.currentcgst != 0) {
            this.currentcgst = this.finalgst / 2;
            this.currentcgst = this.finalgst / 2;
        }
        console.log("CURRENT CGST:", this.currentcgst);
        const sale = JSON.stringify(data);
        if (this.paid < this.total) {
            this.lenders.push(data);
            window.localStorage.setItem('lenders', JSON.stringify(this.lenders));
        }
        const content = "sale made";
        this.shopOwnerPlayerID = this.user.playerID;
        // this.getShopOwnerID();
        // this.sendNotification(content);
        console.log(data.recipt);
        //console.log(this.Products);
        window.localStorage.setItem("Products", JSON.stringify(this.Products));
        window.localStorage.setItem("cgst", JSON.stringify(this.currentcgst));
        window.localStorage.setItem("sgst", JSON.stringify(this.currentcgst));
        console.log("after saving the gst information");
        this.sales.push(data);
        //this.monthlyStuff(this.sales)
        window.localStorage.setItem('sales', JSON.stringify(this.sales));
        for (let i = 0; i < this.recipt.length; i++) {
            let data = {
                stock: -this.recipt[i].quantity,
                customer_name: this.customer.name,
                customer_no: this.customer.phone,
                Date: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
                maxStockAdded: 0,
                index: this.recipt[i].i
            };
            console.log("*********data**********" + JSON.stringify(data));
            if (this.paid == 1) {
                this.addItemStockToFireBase(this.recipt[i], data);
                this.addStockToFireBase(data);
            }
        }
        this.color = "success";
        //   this.presentToast();
        this.discount = 0;
        this.presentToast();
        this.msg = "Sale completed!";
    }
    sendNotification(content) {
        console.log(content);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]();
        header.append("Content-Type", "application/json");
        console.log("ShopOwnerPlayerID" + this.shopOwnerPlayerID);
        return this.http
            .post("https://exportportal.site/ssmpushes.php", {
            message: content,
            playerID: this.user.playerId,
        }, { headers: header, responseType: "text" })
            .subscribe((resp) => {
            console.log(resp);
        }, (error) => { });
    }
    back() {
        if (this.user.uType == 'Owner') {
            this.router.navigate(['home/dashboard']);
        }
        else {
            this.router.navigate(['home/inventory']);
        }
    }
    calculateProfit(array) {
        for (var i = 0; i < array.length; i++) {
            this.sub = array[i] + this.a;
            this.a = this.sub;
        }
    }
    monthlyStuff(sale) {
        console.log('sale', sale);
        for (var i = 0; i < sale.length; i++) {
            this.sal = sale.length;
            if (sale[i].discount) {
                this.discounts.push(sale[i].discount);
            }
            if (sale[i].total) {
                this.reven.push(sale[i].total);
            }
        }
        console.log('discounts', this.discounts);
        console.log('total', this.reven);
        console.log('total sales', this.sal);
        for (var i = 0; i < this.discounts.length; i++) {
            this.lett = this.discounts[i] + this.lett;
            this.discountsthismonth = this.lett;
        }
        for (var i = 0; i < this.reven.length; i++) {
            this.lets = this.reven[i] + this.lets;
            this.revenuethismonth = this.lets;
        }
        alert('Discounts this month is' + this.discountsthismonth + "- okey now lets check revenue " + this.revenuethismonth + "-sales check " + this.sal);
        this.uploadToFirestore();
    }
    uploadToFirestore() {
        let currentDate = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        console.log('today is=>', monthNames[currentDate.getMonth()]);
        console.log('discounts', this.discountsthismonth, 'sales', this.sal, 'revenue', this.revenuethismonth);
        const discounts = this.discountsthismonth;
        const sales = this.sal;
        const revenue = this.revenuethismonth;
        this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).valueChanges().subscribe((res) => {
            if (res == undefined) {
                this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).set({
                    discounts,
                    sales,
                    revenue,
                }).then(() => {
                    this.msg = 'Monthly stats updated';
                    this.presentToast();
                }).catch(err => {
                    this.msg = JSON.stringify(err.message);
                    this.presentToast();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).update({
                    discounts,
                    sales,
                    revenue,
                }).then(() => {
                    this.msg = 'Monthly stats updated';
                    this.presentToast();
                }).catch(err => {
                    this.msg = JSON.stringify(err.message);
                    this.presentToast();
                });
            }
        });
    }
    ngOnInit() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.uType = this.user.uType;
        if (this.user.uType == 1) {
            this.checkIfHelperExists();
        }
        if (this.paid == 1) {
            this.getcurentUsershop();
        }
    }
    ionViewWillEnter() {
        this.getItems();
        this.paid = window.localStorage.getItem("paid");
    }
    ionViewWillLeave() {
        this.recipt = [];
    }
    getShopOwnerID() {
        console.log("Usertype" + this.user.uType);
        console.log("phone" + this.user.phone);
        if (this.user.uType == 'Owner') {
            console.log("We are here in the owner");
            this.firestore.collection('Owner', q => q.where('phone', '==', this.user.phone)).valueChanges().subscribe((r) => {
                console.log('lkdbvo', r);
                this.shopOwnerPlayerID = r[0].playerId;
            });
        }
        else {
            const auth = this.auth.authState.subscribe(user => {
                this.firestore.collection('Helper').doc(user.uid).valueChanges().subscribe((cu) => {
                    if (cu == undefined) {
                    }
                    else {
                        this.firestore.collection('Owner', q => q.where('phone', '==', cu.ownerPhone)).valueChanges().subscribe((r) => {
                            console.log('lkdbvo', r);
                            this.shopOwnerPlayerID = r[0].playerId;
                        });
                    }
                });
            });
        }
    }
    getcurentUsershop() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user);
        this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res) => {
            if (res != undefined) {
                if (res.items) {
                    if (res.items.length < 1) {
                    }
                    else {
                        this.items = JSON.parse(window.localStorage.getItem('items'));
                        console.log(this.items, 'item');
                        this.items = res.items;
                        window.localStorage.setItem('items', JSON.stringify(this.items));
                        this.items = JSON.parse(window.localStorage.getItem('items'));
                    }
                }
            }
            else {
            }
        });
    }
    selectSupplier() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_13__["SelectSupplierPage"],
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.supplier = event['data'];
                    console.log(this.supplier);
                    window.localStorage.setItem('selectsupplier', JSON.stringify(this.supplier));
                    window.localStorage.setItem("po", JSON.stringify(this.recipt));
                    this.router.navigate(['purchaseorder']);
                    //  window.localStorage.setItem('items', JSON.stringify(this.items));
                }
            });
            return yield modal.present();
        });
    }
    createQuotation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.recipt.length == 0) {
                alert("Please select some items");
                return;
            }
            const modal = yield this.modalController.create({
                component: _select_customer_select_customer_page__WEBPACK_IMPORTED_MODULE_12__["SelectCustomerPage"],
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                if (event['data']) {
                    this.customer = event['data'];
                    console.log(this.customer);
                    window.localStorage.setItem('selectCustomer', JSON.stringify(this.customer));
                    window.localStorage.setItem("po", JSON.stringify(this.recipt));
                    this.router.navigate(['quotation']);
                    //  window.localStorage.setItem('items', JSON.stringify(this.items));
                }
            });
            return yield modal.present();
        });
    }
    checkIfHelperExists() {
        var docRef = this.firestore.collection("helpers").doc(this.user.helperid);
        docRef.valueChanges().subscribe((ref) => {
            if (ref == null) {
                window.localStorage.setItem("not allowed", "true");
                this.router.navigate(['home/inventory']);
            }
        });
    }
    addItemStockToFireBase(item, data) {
        console.log("we are called");
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).update({
                    stock: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.increment(data.stock),
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).set({
                    stock: item.stock + data.stock,
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
    }
};
POSPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
POSPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pos',
        template: _raw_loader_pos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [_pos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], POSPage);



/***/ }),

/***/ "n9z9":
/*!***********************************!*\
  !*** ./src/app/pos/pos.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Francois+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n.card {\n  min-height: 8em;\n  width: 45%;\n  background-color: rgba(255, 255, 255, 0.801);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.082);\n  transition: 0.3s;\n  border-radius: 12px;\n  padding-top: 25px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.card .cardtxt {\n  padding-top: 10px;\n  color: rgba(0, 0, 0, 0.459);\n  padding-bottom: 10px;\n  padding-left: 5px;\n  font-weight: bold;\n  font-family: \"Hammersmith One\", sans-serif;\n}\n.stats {\n  min-height: 20em;\n  width: 95%;\n  background-color: rgba(139, 53, 27, 0.096);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.082);\n  transition: 0.3s;\n  border-radius: 12px;\n  padding-top: 10px;\n  padding-left: 6px;\n}\n.right {\n  border: #c5097d solid 2px;\n  height: 120px;\n  width: 120px;\n  border-radius: 120px;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  position: absolute;\n  transform: rotate(-45deg);\n  animation: rota2 1000ms linear;\n  -moz-animation: rota2 1000ms linear;\n  -o-animation: rota2 1000ms linear;\n  -webkit-animation: rota2 1000ms linear;\n}\n@keyframes rota2 {\n  from {\n    transform: rotate(-225deg);\n  }\n  to {\n    transform: rotate(-45deg);\n  }\n}\n.left {\n  border: #c5097d solid 2px;\n  height: 120px;\n  width: 120px;\n  border-radius: 120px;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  position: absolute;\n  transform: rotate(315deg);\n  animation: rota 2000ms linear;\n  -o-animation: rota 2000ms linear;\n  -moz-animation: rota 2000ms linear;\n  -webkit-animation: rota 2000ms linear;\n}\n@keyframes rota {\n  from {\n    transform: rotate(-45deg);\n  }\n  to {\n    transform: rotate(315deg);\n  }\n}\n@moz-keyframes rota {\n  from {\n    transform: rotate(-45deg);\n  }\n\n  to {\n    transform: rotate(315deg);\n  }\n}\n.middle {\n  color: white;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 150px;\n  position: relative;\n  z-index: 4;\n}\n@keyframes popover {\n  0% {\n    opacity: 1;\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.hello {\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  font-weight: bold;\n  font-size: 35px;\n  margin-top: 0.6em;\n  letter-spacing: -2px;\n}\n.footer {\n  background: #f8005fce;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f8005fce, #fe0094d7);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  height: 3em;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.opensans {\n  font-family: \"Open Sans\", sans-serif;\n}\nb {\n  font-family: \"Hammersmith One\", sans-serif;\n  font-weight: lighter;\n}\n.a_card {\n  min-height: 8em;\n  min-width: 95%;\n  margin-top: 2em;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  background-color: #15045e96;\n}\n.a_card .txt {\n  color: white;\n  padding-top: 12px;\n  font-size: 2em;\n  font-weight: bold;\n  font-family: \"Hammersmith One\", sans-serif;\n}\n.a_card .amount {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  color: white;\n  padding-top: 12px;\n  font-size: 2em;\n}\n.items {\n  display: flex;\n}\n.respcardwrapper {\n  flex-wrap: wrap;\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n}\n.card {\n  width: 43%;\n}\n@media only screen and (max-device-width: 300px) {\n  .card {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUZBQUE7QUFDQSxvRkFBQTtBQUNBLHVGQUFBO0FBMlBBLDZGQUFBO0FBelBSO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FBQ0o7QUFFQTtFQUNJO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0kseUJBQUE7RUFDTjtBQUNGO0FBNEJBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtBQUZKO0FBSUE7RUFDSTtJQUNJLHlCQUFBO0VBRE47RUFHRTtJQUNJLHlCQUFBO0VBRE47QUFDRjtBQVdBO0VBQ0k7SUFDSSx5QkFBQTtFQUROOztFQUdFO0lBQ0kseUJBQUE7RUFBTjtBQUNGO0FBV0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURKO0FBSUE7RUFDSTtJQUNJLFVBQUE7RUFETjtFQUdFO0lBQ0ksVUFBQTtFQUROO0VBR0U7SUFDSSxVQUFBO0VBRE47QUFDRjtBQXdDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBTEo7QUFRQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFMSjtBQU9BO0VBQ0kscUJBQUE7RUFBdUIsOEJBQUE7RUFDOEMsK0JBQUE7RUFDckUsMkRBQUE7RUFJRyxxRUFBQTtFQUNILFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBTEo7QUFPQTtFQUNJLG9DQUFBO0FBSko7QUFNQTtFQUNJLDBDQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBRko7QUFHSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FBRFI7QUFHSTtFQUNJLHFEQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFLQTtFQUNJLGFBQUE7QUFGSjtBQU1BO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtBO0VBQ0ksVUFBQTtBQUZKO0FBS0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoicG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmFuY29pcytPbmUmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFtbWVyc21pdGgrT25lJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4ZW07XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgwMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgyKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5jYXJkdHh0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1OSk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGFtbWVyc21pdGggT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMGVtO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCA1MywgMjcsIDAuMDk2KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4wODIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgYm9yZGVyOiAjYzUwOTdkIHNvbGlkIDJweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGFuaW1hdGlvbjogcm90YTIgMTAwMG1zIGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uOiByb3RhMiAxMDAwbXMgbGluZWFyO1xyXG4gICAgLW8tYW5pbWF0aW9uOiByb3RhMiAxMDAwbXMgbGluZWFyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGEyIDEwMDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YTIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyByb3RhMiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm90YTIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YTIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgYm9yZGVyOiAjYzUwOTdkIHNvbGlkIDJweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICBhbmltYXRpb246IHJvdGEgMjAwMG1zIGxpbmVhcjtcclxuICAgIC1vLWFuaW1hdGlvbjogcm90YSAyMDAwbXMgbGluZWFyO1xyXG4gICAgLW1vei1hbmltYXRpb246IHJvdGEgMjAwMG1zIGxpbmVhcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhIDIwMDBtcyBsaW5lYXI7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxuICAgIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHJvdGEge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBtb3ota2V5ZnJhbWVzIHJvdGEge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xyXG4gICAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwb3BvdmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgOTklIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBwb3BvdmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgOTklIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBvcG92ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA5OSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9wb3ZlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDk5JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5oZWxsbyB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC42ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxufVxyXG4uZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmODAwNWZjZTsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODAwNWZjZSwgI2ZlMDA5NGQ3KTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZjgwMDVmY2UsXHJcbiAgICAgICAgI2ZlMDA5NGQ3XHJcbiAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG4ub3BlbnNhbnMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuYiB7XHJcbiAgICBmb250LWZhbWlseTogXCJIYW1tZXJzbWl0aCBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbi5hX2NhcmQge1xyXG4gICAgbWluLWhlaWdodDogOGVtO1xyXG4gICAgbWluLXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MDQ1ZTk2O1xyXG4gICAgLnR4dCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhhbW1lcnNtaXRoIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUYW1tdWR1KzI6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLnJlc3BjYXJkd3JhcHBlciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "qodq":
/*!***********************************!*\
  !*** ./src/app/pos/pos.module.ts ***!
  \***********************************/
/*! exports provided: POSPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSPageModule", function() { return POSPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pos-routing.module */ "2Oj6");
/* harmony import */ var _pos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pos.page */ "buir");
/* harmony import */ var _select_item_select_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-item/select-item.page */ "jD7L");









let POSPageModule = class POSPageModule {
};
POSPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pos_routing_module__WEBPACK_IMPORTED_MODULE_6__["POSPageRoutingModule"]
        ],
        declarations: [_pos_page__WEBPACK_IMPORTED_MODULE_7__["POSPage"]],
        entryComponents: [_select_item_select_item_page__WEBPACK_IMPORTED_MODULE_8__["SelectItemPage"]]
    })
], POSPageModule);



/***/ })

}]);
//# sourceMappingURL=pos-pos-module.js.map