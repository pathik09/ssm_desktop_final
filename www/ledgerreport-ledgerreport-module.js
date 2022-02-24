(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ledgerreport-ledgerreport-module"],{

/***/ "2HCy":
/*!***************************************************!*\
  !*** ./src/app/ledgerreport/ledgerreport.page.ts ***!
  \***************************************************/
/*! exports provided: LedgerreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerreportPage", function() { return LedgerreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ledgerreport_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ledgerreport.page.html */ "RV2m");
/* harmony import */ var _ledgerreport_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledgerreport.page.scss */ "PzXA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let LedgerreportPage = class LedgerreportPage {
    constructor(dataPipee, alertController, router, firestore) {
        this.dataPipee = dataPipee;
        this.alertController = alertController;
        this.router = router;
        this.firestore = firestore;
    }
    calculateVariables() {
        this.intendedsio = [];
        this.selecteditem = JSON.parse(window.localStorage.getItem('selecteditem'));
        this.items = JSON.parse(window.localStorage.getItem('items'));
        // console.log(this.items);
        this.user = JSON.parse(window.localStorage.getItem("user"));
        this.stockinout = [];
        let data = JSON.parse(window.localStorage.getItem('ledgerreportdates'));
        let fromdate = data.fromdate;
        let todate = data.todate;
        let item = JSON.parse(window.localStorage.getItem("selecteditem"));
        this.OpeningStock = item.stock;
        this.item_name = item.name;
        this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(item.index.toString()).valueChanges().subscribe((res) => {
            if (res == undefined) {
            }
            else {
                let firsttime = true;
                let firsttimes = true;
                var selected = false;
                this.OpeningStock = item.stock;
                this.stockinout = res.stock_added;
                // console.log("this.stockinoutentry"+this.stockinout.length)
                this.intendedsio = [];
                this.stockin = [];
                this.items = JSON.parse(window.localStorage.getItem('items'));
                //      console.log(this.items[this.selecteditem.index].stock); 
                //    console.log(item.stock);    
                this.OpeningStock = this.items[this.selecteditem.index].stock;
                this.closingStock = 0;
                //  console.log(this.OpeningStock);
                firsttime = true;
                firsttimes = true;
                selected = false;
                //          console.log("******We are here*********"+this.OpeningStock)
                //        console.log("*********((((((((()))))))))&&&&&&&&&"+this.stockinout.length);
                for (let i = 0; i < this.stockinout.length; i++) {
                    // console.log("I am called");
                    //     console.log("we are calling*******************caclulateVariables()"+JSON.stringify(this.selecteditem))
                    let selectedindex = this.selecteditem.index;
                    //  console.log("******selecredindex&&&&&&"+selectedindex)
                    let fromDate = data.fromdate;
                    let toDate = data.todate;
                    //console.log(fromDate);
                    let currentsio = this.stockinout[i];
                    currentsio.amount = currentsio.stock * this.selecteditem.rPrice;
                    currentsio.purchaseprice = currentsio.stock * this.selecteditem.pPrice;
                    currentsio.amount = Math.abs(currentsio.amount);
                    // this.item_name = this.stockinout[i].item;
                    // console.log("******selecredindex&&&&&&"+selectedindex)
                    //console.log(currentsio.index==selectedindex)
                    if (currentsio.index == selectedindex) {
                        //console.log("***********currentsio***********"+JSON.stringify(currentsio));
                        if (currentsio.Date >= toDate && currentsio.Date <= fromDate) {
                            // console.log("We are here********(((((((()))))))))") 
                            if (currentsio.stock > 0) {
                                // console.log("*******We are in the stock in")
                                currentsio.outentry = "Stock In";
                                this.intendedsio.push(currentsio);
                                //console.log("*******+++++++++"+this.intendedsio.length)
                            }
                            if (currentsio.stock < 0) {
                                //console.log("*******?????????********"+JSON.stringify(currentsio))
                                this.stockin.push(currentsio);
                                currentsio.outentry = "Stock Out";
                                currentsio.stock = currentsio.stock - currentsio.stock - currentsio.stock;
                            }
                        }
                    }
                }
            }
            for (let i = 0; i < this.stockinout.length; i++) {
                let currentsio = this.stockinout[i];
                if (currentsio.index == undefined) {
                    console.log("Our Entry" + currentsio.outentry);
                    console.log("Currentsio.outentry == Stock In" + currentsio.outentry == "Stock In");
                    if (currentsio.outentry == "Stock In") {
                        console.log(this.intendedsio.length);
                        for (let j = 0; j < this.intendedsio.length; j++) {
                            if (this.intendedsio[j].maxStockAdded == currentsio.maxStockAdded) {
                                let modifiedsio;
                                modifiedsio = this.intendedsio[j];
                                modifiedsio.returnedquantity = currentsio.stock;
                                modifiedsio.returneddate = currentsio.Date;
                                modifiedsio.returnedamount = currentsio.stock * this.selecteditem.pPrice;
                                modifiedsio.returned = true;
                                console.log("Modified Sio" + JSON.stringify(modifiedsio));
                                this.intendedsio[j] = modifiedsio;
                                console.log(JSON.stringify(this.intendedsio[j]));
                            }
                        }
                    }
                    else if (currentsio.outentry == "Stock Out") {
                        for (let j = 0; j < this.stockin.length; j++) {
                            if (this.stockin[j].maxStockAdded == currentsio.maxStockAdded) {
                                let modifiedsio;
                                modifiedsio = this.stockin[j];
                                modifiedsio.returnedquantity = currentsio.stock;
                                modifiedsio.returneddate = currentsio.Date;
                                modifiedsio.returnedamount = currentsio.stock * this.selecteditem.rPrice;
                                modifiedsio.returned = true;
                                // delete this.stockin[j]
                                console.log("Modified Sio" + JSON.stringify(modifiedsio));
                                this.stockin[j] = modifiedsio;
                            }
                        }
                    }
                }
            }
        });
    }
    changeOpeningStock(data) {
        let changeinQuantity = data.stock - data.openingStock;
        let data1 = {
            stock: changeinQuantity
        };
        this.addItemStockToFireBase(this.selecteditem, data1);
        // this.calculateVariables();
    }
    ionViewWillEnter() {
        this.calculateVariables();
    }
    addItemStockToFireBase(item, data) {
        console.log("*********We are in additemstock to data+++++++++++" + JSON.stringify(data));
        if (data.outentry == "Stock In") {
            data.stock = data.stock - data.stock - data.stock;
        } //console.log("we are called");
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).update({
                    stock: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.increment(data.stock),
                }).then(data2 => console.log('data2')).catch((err) => {
                    //console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).set({
                    stock: item.stock + data.stock
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
        this.items = JSON.parse(window.localStorage.getItem('items'));
        this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).valueChanges().subscribe((res) => {
            if (res == undefined) {
            }
            else {
                this.items[this.selecteditem.index].stock = res.stock;
                console.log("***************" + res.stock);
                window.localStorage.setItem('items', JSON.stringify(this.items));
                this.addToFireBase();
                // window.localStorage.setItem('items',JSON.stringify(this.items));
                // this.calculateVariables();
            }
        });
        this.calculateVariables();
    }
    edit(stockinoutentry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(stockinoutentry);
            console.log(stockinoutentry);
            var pstock = stockinoutentry.stock;
            const alert2 = yield this.alertController.create({
                subHeader: "Please enter the stock quantity returned.  ",
                header: "This option is for the return of the  stock entry in the " + stockinoutentry.outentry + ".",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: stockinoutentry.stock,
                        placeholder: "Enter the return quantity",
                    },
                ],
                buttons: [{
                        text: 'Return items',
                        handler: data => {
                            if (Number(data.input > stockinoutentry.stock)) {
                                alert("returned quantity cannot exceed the original entity");
                            }
                            else {
                                this.quantity_changed = Number(data.input);
                                var currentDate = new Date();
                                let data1 = {
                                    stock: this.quantity_changed,
                                    pstock: pstock,
                                    reason: "Returned/returning",
                                    Date: this.dataPipee.transform(new Date(), "dd/MM/yyyy"),
                                    maxStockAdded: stockinoutentry.maxStockAdded,
                                    outentry: stockinoutentry.outentry
                                };
                                this.makechangestofirestore(data1);
                            }
                        },
                    },
                ],
            });
            alert2.present();
        });
    }
    updateFirebase(stockinoutentry) {
        this.firestore.collection("stores").doc;
    }
    addToFireBase() {
        //this.items = JSON.parse(window.localStorage.getItem('items'));
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        //  window.localStorage.setItem('items', JSON.stringify(this.items));
        if (this.user.paid == 1) {
            this.firestore.collection('stores').doc(this.user.docID).update({
                items: this.items,
            });
        }
        console.log("we are here in the");
    }
    makechangestofirestore(data1) {
        // data1.maxStockAdded = data1.stockinoutentry.maxStockAdded;
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(this.selecteditem.index.toString()).get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(this.selecteditem.index.toString()).update({
                    stock_added: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion(data1)
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            this.addItemStockToFireBase(data1, data1);
        });
        //console.log()
        this.intendedsio = [];
        // this.calculateVariables();
    }
    updateOpeningStock(openingStock) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert3 = yield this.alertController.create({
                subHeader: "Please enter the stock entity to change. Previous value was  " + this.OpeningStock,
                header: "This option is to update the stock entry in the " + this.OpeningStock + ".",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: openingStock,
                        placeholder: "Change the quantity in this entry.",
                    },
                ],
                buttons: [{
                        text: 'Change the entry',
                        handler: data => {
                            this.quantity_changed = Number(data.input);
                            var currentDate = new Date();
                            let data1 = {
                                stock: this.quantity_changed,
                                openingStock: openingStock
                            };
                            console.log(data1);
                            this.changeOpeningStock(data1);
                        },
                    },
                ],
            });
            alert3.present();
        });
    }
    close() {
        this.router.navigate(['home/inventory']);
    }
    ngOnInit() {
    }
};
LedgerreportPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
LedgerreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ledgerreport',
        template: _raw_loader_ledgerreport_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ledgerreport_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LedgerreportPage);



/***/ }),

/***/ "5AYA":
/*!*****************************************************!*\
  !*** ./src/app/ledgerreport/ledgerreport.module.ts ***!
  \*****************************************************/
/*! exports provided: LedgerreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerreportPageModule", function() { return LedgerreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ledgerreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ledgerreport-routing.module */ "KxoW");
/* harmony import */ var _ledgerreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ledgerreport.page */ "2HCy");







let LedgerreportPageModule = class LedgerreportPageModule {
};
LedgerreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ledgerreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["LedgerreportPageRoutingModule"]
        ],
        declarations: [_ledgerreport_page__WEBPACK_IMPORTED_MODULE_6__["LedgerreportPage"]]
    })
], LedgerreportPageModule);



/***/ }),

/***/ "KxoW":
/*!*************************************************************!*\
  !*** ./src/app/ledgerreport/ledgerreport-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LedgerreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerreportPageRoutingModule", function() { return LedgerreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ledgerreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ledgerreport.page */ "2HCy");




const routes = [
    {
        path: '',
        component: _ledgerreport_page__WEBPACK_IMPORTED_MODULE_3__["LedgerreportPage"]
    }
];
let LedgerreportPageRoutingModule = class LedgerreportPageRoutingModule {
};
LedgerreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LedgerreportPageRoutingModule);



/***/ }),

/***/ "PzXA":
/*!*****************************************************!*\
  !*** ./src/app/ledgerreport/ledgerreport.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-column-padding: 5px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.odd {\n  color: blue;\n}\n.even {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xlZGdlcnJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7QUFBTjtBQUdFO0VBQ0UsV0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0FBQ0oiLCJmaWxlIjoibGVkZ2VycmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAub2Rke1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG4gIC5ldmVue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuIl19 */");

/***/ }),

/***/ "RV2m":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ledgerreport/ledgerreport.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">   <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">LEDGER REPORT \r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-text color=\"success\">\r\n  \r\n  \r\n  \r\n </ion-text>\r\n\r\n <b><h1>{{item_name}}</h1></b>\r\n\r\n <ion-text color=\"success\">\r\n  <b><h1>STOCK IN</h1></b> \r\n \r\n \r\n</ion-text>\r\n\r\n<ion-content class=\"ion-margin\">\r\n  <ion-grid class=\"ion-margin\">\r\n    \r\n    <ion-row *ngFor=\"let sio of intendedsio\" >\r\n      <ion-col>\r\n        Purchase Number<br>\r\n        Date:<br>\r\n        Name<br>\r\n        quantity<br>\r\n          Amount<br>\r\n          <div *ngIf=\"!sio.returned\">         Purchase Return </div>\r\n          <div *ngIf=\"sio.returned\" style=\"color: rgb(218, 17, 44);\">\r\n            Returned Date<br>\r\n            Returned Quantity<br>\r\n            Returned Amount\r\n          </div>\r\n          \r\n\r\n\r\n      </ion-col>\r\n      <ion-col>\r\n        {{sio.maxStockAdded}}<br>{{sio.Date}}<br>\r\n      {{sio.customer_name}}<br>\r\n      {{sio.stock}}\r\n      <br>\r\n      {{sio.purchaseprice}}<br>\r\n      \r\n      <div *ngIf=\"!sio.returned\" style=\"color: rgb(218, 17, 44);\">\r\n        <ion-icon (click)=\"edit(sio)\" color=\"none\" style=\"font-size: 30px;\" name=\"arrow-redo-outline\"></ion-icon>\r\n             </div>\r\n             <div *ngIf=\"sio.returned\" style=\"color: rgb(218, 17, 44);\">\r\n              {{sio.returneddate}}<br>\r\n              {{sio.returnedquantity}}<br>\r\n             {{sio.returnedamount}}\r\n            </div>\r\n            \r\n      \r\n    </ion-col>\r\n      \r\n          \r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div *ngIf=\"!intendedsio\">\r\n\r\n\r\n    <ion-label\r\n      style=\"font-family: impact;color: rgba(128, 128, 128, 0.616);position: relative;top: 10em;text-align: center;font-size: 32px;display: flex;justify-content: center;align-items: center;\">\r\n      NOTHING TO SHOW...!\r\n    </ion-label>\r\n\r\n  </div>\r\n\r\n \r\n \r\n</ion-content>\r\n<ion-text color=\"red\">\r\n <h1>STOCK OUT</h1> \r\n \r\n</ion-text>\r\n\r\n\r\n<ion-content class=\"ion-margin\">\r\n  <ion-grid class=\"ion-margin\">\r\n    \r\n    <ion-row *ngFor=\"let sio of stockin\" >\r\n      <ion-col>\r\n        Sale Number<br>\r\n        Date:<br>\r\n        Name<br>\r\n        quantity<br>\r\n          Amount<br>\r\n          <div *ngIf=\"!sio.returned\">          Sales Return</div>\r\n          <div *ngIf=\"sio.returned\" style=\"color: rgb(218, 17, 44);\">\r\n            Returned Date<br>\r\n            Returned Quantity<br>\r\n            Returned Amount\r\n          </div>\r\n          \r\n\r\n\r\n          \r\n\r\n\r\n      </ion-col>\r\n      <ion-col>{{sio.maxStockAdded}}<br>{{sio.Date}}<br>\r\n      {{sio.customer_name}}<br>\r\n      {{sio.stock}}\r\n      <br>\r\n      {{sio.amount}}<br>\r\n      <div *ngIf=\"!sio.returned\" style=\"color: rgb(218, 17, 44);\">\r\n        <ion-icon (click)=\"edit(sio)\" color=\"none\" style=\"font-size: 30px;\" name=\"arrow-undo-outline\"></ion-icon>\r\n             </div>\r\n             <div *ngIf=\"sio.returned\" style=\"color: rgb(218, 17, 44);\">\r\n              {{sio.returneddate}}<br>\r\n              {{sio.returnedquantity}}<br>\r\n             {{sio.returnedamount}}\r\n            </div>\r\n            \r\n       \r\n     \r\n    </ion-col>\r\n      \r\n          \r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div *ngIf=\"!stockin\">\r\n\r\n\r\n    <ion-label\r\n      style=\"font-family: impact;color: rgba(128, 128, 128, 0.616);position: relative;top: 10em;text-align: center;font-size: 32px;display: flex;justify-content: center;align-items: center;\">\r\n      NOTHING TO SHOW...!\r\n    </ion-label>\r\n\r\n  </div>\r\n\r\n\r\n \r\n \r\n</ion-content>\r\n\r\n\r\n\r\n<ion-content >\r\n  \r\n\r\n<ion-content >\r\n\r\n ");

/***/ })

}]);
//# sourceMappingURL=ledgerreport-ledgerreport-module.js.map