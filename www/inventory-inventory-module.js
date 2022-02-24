(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "HLVB":
/*!****************************************************!*\
  !*** ./src/app/home/inventory/inventory.module.ts ***!
  \****************************************************/
/*! exports provided: InventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function() { return InventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-routing.module */ "bPQB");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory.page */ "tFxm");
/* harmony import */ var src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/add-item/add-item.page */ "w6bI");









let InventoryPageModule = class InventoryPageModule {
};
InventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_6__["InventoryPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        ],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_7__["InventoryPage"]],
        entryComponents: [src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_8__["AddItemPage"]],
    })
], InventoryPageModule);



/***/ }),

/***/ "bPQB":
/*!************************************************************!*\
  !*** ./src/app/home/inventory/inventory-routing.module.ts ***!
  \************************************************************/
/*! exports provided: InventoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageRoutingModule", function() { return InventoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.page */ "tFxm");




const routes = [
    {
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_3__["InventoryPage"]
    }
];
let InventoryPageRoutingModule = class InventoryPageRoutingModule {
};
InventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InventoryPageRoutingModule);



/***/ }),

/***/ "oFtN":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventory/inventory.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">\r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">SmartStock Inventory\r\n      </ion-title>\r\n      <ion-icon (click)=\"addItem()\" style=\"position: relative;top: 0.3em;font-size: 30px;right: 3px;\" name=\"add-circle\">\r\n      </ion-icon>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <div *ngIf=\"allowed\" >\r\n  <ion-card class=\"card\" (click)=\"openPOS()\">\r\n      <div style=\"color: brown;\">\r\n        <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"print\"></ion-icon>\r\n      </div>\r\n      <ion-label class=\"cardtxt\">\r\n        {{ 'dashboardOne.POS' | translate:params}}\r\n      </ion-label>\r\n    </ion-card> \r\n    <ion-card class=\"card\" (click)=\"excelImport()\">\r\n      <div style=\"color: rgba(0, 128, 28, 0.555);\">\r\n        <ion-icon color=\"none\" style=\"font-size: 30px;\" name=\"attach\"></ion-icon>\r\n      </div>\r\n      <ion-label class=\"cardtxt\">\r\n        {{ 'dashboardOne.UE' | translate:params}}\r\n      </ion-label>\r\n    </ion-card>\r\n\r\n  </div>\r\n \r\n  <div class=\"scrollwrapper\">\r\n    <div class=\"cards\" style=\"background-color:rgb(202, 221, 233)\">\r\n      <div class=\"flexdisp centertext\">\r\n        <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;color:  rgb(15, 15, 15);\">NUMBER OF ITEMS</h3>\r\n\r\n      </div>\r\n\r\n      <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color: rgb(27, 133, 194);\">{{noofitems}}\r\n      </ion-label>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"cards\"style=\"background-color:rgb(213, 230, 202)\">\r\n      <div class=\"flexdisp centertext\">\r\n        <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;ccolor:rgb(7, 8, 7)\"> {{\r\n          'INVENTORY.lsi'\r\n          | translate:params}}</h3>\r\n\r\n      </div>\r\n\r\n      <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color: rgb(89, 196, 18)\">{{lowStock}}\r\n      </ion-label>\r\n\r\n    </div>\r\n\r\n\r\n    \r\n    <div class=\"cards\" style=\"background-color:rgb(243, 215, 189)\">\r\n      <div class=\"flexdisp centertext\">\r\n        <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;color: rgb(15, 14, 14)\">{{\r\n          'INVENTORY.hsi'\r\n          | translate:params}}</h3>\r\n\r\n      </div>\r\n\r\n      <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color: rgb(243, 113, 7);\">{{highStock}}\r\n      </ion-label>\r\n\r\n    </div>\r\n    <div class=\"cards\" style=\"background-color:rgb(218, 191, 213)\">\r\n      <div class=\"flexdisp centertext\">\r\n        <h3 style=\"font-size:15px;font-weight: light;font-family: 'Secular One', sans-serif;color:rgb(14, 15, 10)\">{{\r\n          'INVENTORY.sv'\r\n          | translate:params}}</h3>\r\n\r\n      </div>\r\n\r\n      <ion-label style=\"font-size: 25px;font-family: 'Anton', sans-serif;color:rgb(191, 14, 214);\">{{stockValue}}\r\n      </ion-label>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  \r\n\r\n\r\n  <div style=\"margin-top: 1em;max-width: 100%;display: flex;justify-content: center;flex-direction: column;\">\r\n\r\n    <ion-title\r\n      style=\"text-align: center;font-family:'Anton', sans-serif;letter-spacing: 0.6px;margin-top: 0.3em;font-size: 25px;color: black;\">\r\n      {{ 'INVENTORY.si'\r\n      | translate:params}}\r\n    </ion-title>\r\n\r\n    <div style=\"display: flex;justify-content: center;align-items: center;\">\r\n\r\n      <ion-list style=\"width: 80%;position: relative;top: 1em;\" class=\"line-input\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-input (ionChange)=\"searchItem()\" [(ngModel)]=\"searchParam\"\r\n            placeholder=\"Enter item name\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <div style=\"display: flex;justify-content:flex-end;margin-top: 22px;padding-right: 10px;\">\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-top: 0.2em;display: flex;justify-content: center;\">\r\n      <ion-chip mode='ios' color=\"primary\" (click)=\"sortLowStock()\"> {{ 'INVENTORY.lsf'\r\n        | translate:params}}<ion-icon name=\"arrow-down\">\r\n        </ion-icon>\r\n      </ion-chip>\r\n      <ion-chip mode='ios' color=\"primary\" (click)=\"sortAlpha()\"> {{ 'INVENTORY.Alphabetical'\r\n        | translate:params}}</ion-chip>\r\n      <ion-chip mode='ios' color=\"primary\" (click)=\"sortPriceDown()\"> {{ 'INVENTORY.Price'\r\n        | translate:params}}<ion-icon name=\"arrow-down\"></ion-icon>\r\n      </ion-chip>\r\n      <ion-chip mode='ios' color=\"primary\" (click)=\"sortPriceUp()\"> {{ 'INVENTORY.Price'\r\n        | translate:params}}<ion-icon name=\"arrow-up\"></ion-icon>\r\n      </ion-chip>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"display: flex;justify-content: center;margin-top: 0.5em;flex-direction: column;text-align: center;\">\r\n\r\n    <div *ngFor=\"let item of toShow\" class=\"prodcard\">\r\n     \r\n      <div style=\"display: flex;justify-content: space-between;\">\r\n        <ion-item class=\"item-text-wrap\">        <ion-title size = \"large\" style=\"\r\n        text-align: left;font-family: 'Sans-serif', sans-serif;color: rgba(0, 0, 0, 0.836);\">\r\n      <ion-icon name=\"copy-outline\"></ion-icon>\r\n      {{item.name}}({{item.stock}})</ion-title>\r\n</ion-item>\r\n        <ion-icon (click)=\"showOption(item)\" style=\"margin-right: 2px;font-size: 20px;\"\r\n          name=\"ellipsis-vertical-outline\">\r\n        </ion-icon>\r\n      </div>\r\n\r\n      <div style=\"display: flex;justify-content: space-between;margin-top: 4px;\">\r\n\r\n        <div>\r\n          <ion-title\r\n            style=\"text-align: left;font-family: 'Sans-serif', sans-serif;color: rgba(0, 0, 0, 0.39);font-size: 18px;\">\r\n           Stock Available : {{item.stock}} {{item.uom}}</ion-title>\r\n\r\n          <br>\r\n          \r\n\r\n          <ion-title\r\n            style=\"text-align: left;font-family: 'Secular One', sans-serif;color: rgb(5, 202, 120);font-size: 18px;\">\r\n           Rs.{{item.rPrice}}\r\n          </ion-title>\r\n        </div>\r\n\r\n        <div style=\"position: relative;top: 6px;\">\r\n          <ion-label\r\n            style=\"display: flex;text-align: left;font-family: 'Secular One', sans-serif;color: palevioletred;font-size: 20px;padding: 10px;border-radius: 14px;margin-right: 10px;position: relative;top: 1em;\">\r\n            Rs.\r\n\r\n            {{item.pPrice}}        \r\n\r\n\r\n\r\n          </ion-label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    \r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  \r\n  \r\n</ion-content>");

/***/ }),

/***/ "tFxm":
/*!**************************************************!*\
  !*** ./src/app/home/inventory/inventory.page.ts ***!
  \**************************************************/
/*! exports provided: InventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPage", function() { return InventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventory.page.html */ "oFtN");
/* harmony import */ var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.page.scss */ "x6lW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/add-item/add-item.page */ "w6bI");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/select-supplier/select-supplier.page */ "mLb4");
/* harmony import */ var src_app_selectpurchaseorder_selectpurchaseorder_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/selectpurchaseorder/selectpurchaseorder.page */ "IK0N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/excel-import/excel-import.page */ "kc0D");
/* harmony import */ var src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/utility-methods.service */ "fm+l");




















let InventoryPage = class InventoryPage {
    constructor(actionSheetController, barcodeScanner, toastController, alertController, callNumber, modalController, firestore, router, datePipe, http, utility) {
        this.actionSheetController = actionSheetController;
        this.barcodeScanner = barcodeScanner;
        this.toastController = toastController;
        this.alertController = alertController;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.firestore = firestore;
        this.router = router;
        this.datePipe = datePipe;
        this.http = http;
        this.utility = utility;
        this.searchFound = [];
        this.toCollect = 0;
        this.lowStock = 0;
        this.highStock = 0;
        this.stockValue = 0;
        this.salesValue = 0;
        this.allowed = false;
    }
    getInfo1() {
        this.lowStock = 0;
        if (this.items) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].index = i;
                this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
                if (this.items[i].stock < this.items[i].mquantity) {
                    this.lowStock = this.lowStock + 1;
                    // console.log(this.items[i], 'lhdfoweg');
                    const content = "Low Stock Notification! This is to notify you " + this.items[i].name + "is below minimum quantity" + this.items[i].mquantity;
                    this.sendNotification(content);
                }
            }
        }
        else {
            const content = "you donnot have any items in your shop";
            // this.sendNotification(content)
        }
    }
    sendNotification(content) {
        //  console.log(content);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]();
        header.append("Content-Type", "application/json");
        return this.http
            .post("https://exportportal.site/ssmpushes.php", {
            message: content,
            playerID: this.user.playerId,
        }, { headers: header, responseType: "text" })
            .subscribe((resp) => {
            console.log(resp);
        }, (error) => { });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.ModalPage,
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                this.getItems();
                if (event['data']) {
                    this.returnDat = event['data'];
                }
            });
            return yield modal.present();
        });
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
    addItem() {
        this.ModalPage = src_app_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_8__["AddItemPage"];
        this.openModal();
    }
    ngOnInit() {
    }
    addSupplier(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_10__["SelectSupplierPage"],
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                this.getItems();
                if (event['data']) {
                    this.supplier = event['data'];
                    //  window.localStorage.setItem('items', JSON.stringify(this.items));
                }
            });
            return yield modal.present();
        });
    }
    addpurchaseorder(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_selectpurchaseorder_selectpurchaseorder_page__WEBPACK_IMPORTED_MODULE_11__["SelectpurchaseOrderPage"],
                cssClass: 'color-modal',
            });
            modal.onDidDismiss()
                .then((event) => {
                this.getItems();
                if (event['data']) {
                    this.selectedpurchaseorder = event['data'];
                    //  window.localStorage.setItem('items', JSON.stringify(this.items));
                }
            });
            return yield modal.present();
        });
    }
    editPurchase(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.forEach((value, index) => {
                value.i = index;
            });
            const alert2 = yield this.alertController.create({
                subHeader: "Enter the purchase price in rupees",
                header: "This option is to change the pruchase price of the item stored in the app.",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the pruchase price here..",
                    },
                ],
                buttons: [{
                        text: 'Change',
                        handler: data => {
                            this.items[item.i].pPrice = Number(data.input);
                            window.localStorage.setItem('items', JSON.stringify(this.items));
                        }
                    }, {
                        text: 'Cancel',
                        role: 'destructive',
                        handler: data => {
                        }
                    }
                ]
            });
            if (this.paid == 1) {
                this.addToFireBase();
            }
            yield alert2.present();
        });
    }
    editUom(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.forEach((value, index) => {
                value.i = index;
            });
            const alert2 = yield this.alertController.create({
                subHeader: "Enter the purchase price in rupees",
                header: "This option is to change the pruchase price of the item stored in the app.",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'text',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the units of measurement here..",
                    },
                ],
                buttons: [{
                        text: 'Change',
                        handler: data => {
                            this.items[item.i].uom = data.input;
                            window.localStorage.setItem('items', JSON.stringify(this.items));
                        }
                    }, {
                        text: 'Cancel',
                        role: 'destructive',
                        handler: data => {
                        }
                    }
                ]
            });
            this.addToFireBase();
            yield alert2.present();
        });
    }
    addFirebaseExample() {
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc("Sales").get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc("Sales").update({
                    sales: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion("Add thayu")
                }).then(data2 => console.log('data2')).catch((err) => {
                    //console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc("Sales").set({
                    sales: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion("Add thayu")
                }).then(data2 => console.log('data2')).catch((err) => {
                    //console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
    }
    editRetail(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.forEach((value, index) => {
                value.i = index;
            });
            window.localStorage.setItem('items', JSON.stringify(this.items));
            const alert2 = yield this.alertController.create({
                subHeader: "Enter the retail price",
                header: "This option is to change the retail price of the item stored in the app.",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the retail price here..",
                    },
                ],
                buttons: [{
                        text: 'Change',
                        handler: data => {
                            this.items[item.i].rPrice = Number(data.input);
                            window.localStorage.setItem('items', JSON.stringify(this.items));
                            this.addToFireBase();
                        }
                    }, {
                        text: 'Cancel',
                        role: 'destructive',
                        handler: data => {
                        }
                    }
                ]
            });
            yield alert2.present();
        });
    }
    changeStock(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.forEach((value, index) => {
                value.i = index;
            });
            const alert3 = yield this.alertController.create({
                subHeader: "Enter the ppening stock to change  in" + item.uom,
                header: "This option is to change the  stock of " + item.name,
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: item.stock,
                        placeholder: "Enter the  stock that you want to change in " + item.uom,
                    },
                ],
                buttons: [{
                        text: 'Change',
                        handler: data => {
                            let diffrenceinStock = Number(data.input);
                            let data1 = {
                                stock: diffrenceinStock,
                                originalStock: Number(data.input)
                            };
                            this.items[item.index].stock = Number(data.input);
                            this.changeItemOpeningStock(item, Number(data.input));
                            this.changeItemStockInFireBase(item, data1);
                            this.items = JSON.parse(window.localStorage.getItem("items"));
                            //window.localStorage.setItem('items', JSON.stringify(this.items));
                            // console.log("Items"+JSON.parse(this.items))
                            //this.addToFireBase();
                        },
                    },
                ]
            });
            // this.addToFireBase();
            yield alert3.present();
        });
    }
    addStock(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.forEach((value, index) => {
                value.i = index;
            });
            const alert2 = yield this.alertController.create({
                subHeader: "Enter the received stock in " + item.uom,
                header: "This option is for stock in for item " + item.name,
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the received stock in" + item.uom,
                    },
                ],
                buttons: [{
                        text: 'Add to Stock',
                        handler: data => {
                            this.items[item.index].stock = Number(this.items[item.index].stock) + Number(data.input);
                            this.stock_added = Number(data.input);
                            var currentDate = new Date();
                            let data1 = {
                                stock: this.stock_added,
                                item: item.name,
                                index: item.index,
                                Date: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
                            };
                            this.checkForSynchronization(data1);
                            {
                                if (this.user.uType == 1 || this.paid == 1) {
                                    //.log("user.paid is 1");
                                    this.addStockToFireBase(data1);
                                    this.addItemStockToFireBase(item, data1);
                                }
                                window.localStorage.setItem("items", JSON.stringify(this.items));
                            }
                        },
                    },
                ]
            });
            // this.addToFireBase();
            yield alert2.present();
        });
    }
    checkForSynchronization(data) {
        return true;
    }
    addStockToFireBase(data) {
        console.log(JSON.stringify(data));
        // console.log("We are here"+JSON.parse(data))
        //var currentDate = new Date();
        //var futureDate = new Date(currentDate.getTime() - 60000);
        //var past = Date.now() - 60000;
        //   this.firestore.collection('')
        // console.log("data is************"+JSON.stringify(data))
        this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).valueChanges().subscribe((res) => {
            if (res == undefined) {
                data.maxStockAdded = 0;
            }
            else {
                data.maxStockAdded = res.maxStockAdded;
            }
        });
        //console.log("After data**********+++++++++++"+JSON.stringify(data))
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
    addToFireBase() {
        this.items = JSON.parse(window.localStorage.getItem('items'));
        // console.log(this.items);
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        //  window.localStorage.setItem('items', JSON.stringify(this.items));
        if (this.paid == 1 || this.user.uType == 1) {
            this.firestore.collection('stores').doc(this.user.docID).update({
                items: this.items,
            });
        }
        //console.log("we are here in the");
    }
    getOwnerPlayerId() {
        this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res) => {
            if (res == undefined) {
            }
            else {
                this.user.playerId = res.playerID;
                this.customers = res.customers;
                //    console.log(this.customers);
                this.items = res.items;
                //  console.log(this.items);
                this.suppliers = res.suppliers;
                this.purchaseOrder = res.purchaseorder;
                console.log("PurchasseOrder" + this.purchaseOrder);
                window.localStorage.setItem("customers", JSON.stringify(this.customers));
                window.localStorage.setItem("items", JSON.stringify(this.items));
                window.localStorage.setItem("suppliers", JSON.stringify(this.suppliers));
                window.localStorage.setItem("purchaseOrders", JSON.stringify(this.purchaseOrder));
                window.localStorage.setItem("playerID", res.playerID);
                this.toShow = this.items;
                this.getInfo();
                window.localStorage.setItem('user', JSON.stringify(this.user));
            }
        });
        // this.utility.checkPaid();
    }
    findItemIndex(item) {
        for (var k = 0; k < this.items.length; k++) {
            if (item == this.items[k]) {
                return k;
            }
        }
    }
    showOption(item) {
        this.paid = window.localStorage.getItem('paid');
        this.basic = window.localStorage.getItem('basic');
        console.log("PAID VALUE" + this.paid);
        console.log("basic value****" + this.basic);
        if (this.user.uType == 1) {
            this.showOptionsforstaff(item);
        }
        else if (this.paid == 0 && this.basic == 0) {
            this.showOptionsforfree(item);
        }
        else if (this.paid == 1) {
            this.showOptions1(item);
        }
        else if (this.basic == 1 && this.paid == 0) {
            console.log("we are not here");
            this.showOptionforBasic(item);
        }
    }
    showOptionsforstaff(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: item.name,
                mode: 'ios',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Stock In',
                        handler: () => {
                            this.addStock(item);
                        }
                    }, {
                        text: 'Stock Out/Sale',
                        handler: () => {
                            this.StockOut(item);
                        }
                    },
                    {
                        text: 'Change  Stock',
                        handler: () => {
                            this.
                                changeStock(item);
                        }
                    },
                    {
                        text: 'Use purchase order to add stock',
                        handler: () => {
                            this.
                                addStockWithPO(item);
                        }
                    },
                    {
                        text: 'Daily report',
                        handler: () => {
                            this.
                                dailyreport(item);
                        }
                    },
                    {
                        text: 'Ledger report',
                        handler: () => {
                            this.
                                showLedger(item);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'destructive',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
            actionSheet.onDidDismiss().then(() => {
                this.getInfo();
            });
        });
    }
    showOptions1(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: item.name,
                mode: 'ios',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Edit Product Specification',
                        handler: () => {
                            this.editProductSpecification(item);
                        }
                    },
                    {
                        text: 'Stock In',
                        handler: () => {
                            this.addStock(item);
                        }
                    },
                    {
                        text: 'Stock Out/Sale',
                        handler: () => {
                            this.StockOut(item);
                        }
                    }, {
                        text: 'Use purchase order to add stock',
                        handler: () => {
                            this.
                                addStockWithPO(item);
                        }
                    }, {
                        text: 'Change  Stock',
                        handler: () => {
                            this.
                                changeStock(item);
                        }
                    }, {
                        text: ']Ledger report',
                        handler: () => {
                            this.showLedger(item);
                        }
                    },
                    {
                        text: 'Daily report',
                        handler: () => {
                            this.dailyreport(item);
                        }
                    },
                    {
                        text: 'Generate PO Report',
                        handler: () => {
                            this.
                                generateporeport(item);
                        }
                    },
                    {
                        text: 'Remove Item',
                        handler: () => {
                            this.
                                removeItem(item);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'destructive',
                        handler: () => {
                            ;
                        }
                    }
                ]
            });
            yield actionSheet.present();
            actionSheet.onDidDismiss().then(() => {
                this.getInfo();
            });
        });
    }
    showOptionforBasic(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: item.name,
                mode: 'ios',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Edit Product Specification',
                        handler: () => {
                            this.editProductSpecification(item);
                        }
                    }, {
                        text: 'Stock Out/Sale',
                        handler: () => {
                            this.StockOut(item);
                        }
                    },
                    {
                        text: 'Stock In',
                        handler: () => {
                            this.addStock(item);
                        }
                    },
                    {
                        text: 'Use purchase order to add stock',
                        handler: () => {
                            this.
                                addStockWithPO(item);
                        }
                    },
                    {
                        text: 'Change  Stock',
                        handler: () => {
                            this.
                                changeStock(item);
                        }
                    },
                    {
                        text: 'Generate PO Report',
                        handler: () => {
                            this.
                                generateporeport(item);
                        }
                    },
                    {
                        text: 'Remove Item',
                        handler: () => {
                            this.
                                removeItem(item);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'destructive',
                        handler: () => {
                            ;
                        }
                    }
                ]
            });
            yield actionSheet.present();
            actionSheet.onDidDismiss().then(() => {
                this.getInfo();
            });
        });
    }
    showOptionsforfree(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: item.name,
                mode: 'ios',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Edit Product Specification',
                        handler: () => {
                            this.editProductSpecification(item);
                        }
                    },
                    {
                        text: 'Stock In',
                        handler: () => {
                            this.addStock(item);
                        }
                    }, {
                        text: 'Stock Out/Sale',
                        handler: () => {
                            this.StockOut(item);
                        }
                    },
                    {
                        text: 'Change Stock',
                        handler: () => {
                            this.
                                changeStock(item);
                        }
                    },
                    {
                        text: 'Remove Item',
                        handler: () => {
                            this.
                                removeItem(item);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'destructive',
                        handler: () => {
                            ;
                        }
                    }
                ]
            });
            yield actionSheet.present();
            actionSheet.onDidDismiss().then(() => {
                this.getInfo();
            });
        });
    }
    excelImport() {
        this.ModalPage = src_app_excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_15__["ExcelImportPage"];
        this.openModal();
    }
    dailyreport(item) {
        window.localStorage.setItem("selecteditem", JSON.stringify(item));
        let date1 = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
        //let date2 = this.datePipe.transform(new Date(),'dd/MM/yyyy');
        let data = {
            todate: date1,
            fromdate: date1,
        };
        window.localStorage.setItem("ledgerreportdates", JSON.stringify(data));
        this.router.navigate(['ledgerreport']);
    }
    generateporeport(item) {
        this.checkPaid();
        if (this.basic == 1) {
            window.localStorage.setItem("selecteditem", item.index);
            console.log("we ARE HERE");
            this.router.navigate(['po-report']);
        }
        else {
            this.router.navigate(['cart']);
        }
    }
    addOpeningandClosingStock(item) {
    }
    editProductSpecification(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item.rPrice == 0) {
                item.rPrice = undefined;
            }
            if (item.pPrice == 0) {
                item.pPrice = undefined;
            }
            const alert3 = yield this.alertController.create({
                subHeader: "Edit Product Specification(if you dont want to edit anything leave it blank) ",
                header: "This option is to edit product specification in the app.",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: item.rPrice,
                        placeholder: "Enter the retail price here",
                    },
                    {
                        name: 'input1',
                        type: 'number',
                        id: 'name',
                        value: item.pPrice,
                        placeholder: "Enter the purchase price here.",
                    },
                    {
                        name: 'input4',
                        type: 'number',
                        id: 'name',
                        value: item.gst,
                        placeholder: "Enter the gst percentage",
                    },
                    {
                        name: 'input2',
                        type: 'text',
                        id: 'name',
                        value: item.uom,
                        placeholder: "Enter the uom(unit of measurement)",
                    }, {
                        name: 'input3',
                        type: 'number',
                        id: 'name',
                        value: item.mquantity,
                        placeholder: "Enter the minimum quantity below which you want to get notification",
                    },
                ],
                buttons: [{
                        text: 'Change Product Specs',
                        handler: data => {
                            let data1 = {
                                rPrice: Number(data.input),
                                pPrice: Number(data.input1),
                                minimumquantity: Number(data.input3),
                                uom: data.input2,
                                gst: data.input4
                            };
                            this.editProductSpecs(data1, item);
                        },
                    },
                ]
            });
            yield alert3.present();
        });
    }
    editProductSpecs(data, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items = JSON.parse(window.localStorage.getItem("items"));
            console.log(this.items);
            console.log(data.rPrice);
            console.log(data.pPrice);
            console.log(item.index);
            if (data.rPrice != 0) {
                this.items[item.index].rPrice = data.rPrice;
            }
            if (data.pPrice != 0) {
                this.items[item.index].pPrice = data.pPrice;
            }
            if (data.minimumquantity != 0) {
                this.items[item.index].mquantity = data.minimumquantity;
            }
            if (data.uom != '') {
                this.items[item.index].uom = data.uom;
            }
            if (data.gst != 0) {
                this.items[item.index].gst = data.gst;
            }
            window.localStorage.setItem('items', JSON.stringify(this.items));
            console.log("We are here");
            this.addToFireBase();
        });
    }
    showLedger(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.paid == 1) {
                window.localStorage.setItem("selecteditem", JSON.stringify(item));
                this.router.navigate(['ledger-report-date-input']);
            }
            else {
                this.router.navigate(['cart']);
            }
        });
    }
    removeItem(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ritem = new Array();
            this.items.forEach(element => {
                console.log(element);
                if (element.index != item.index) {
                    ritem.push(element);
                }
            });
            this.firestore.collection("stores").doc(this.user.docID).collection("items").doc(item.index.toString()).delete();
            this.items = ritem;
            window.localStorage.setItem('items', JSON.stringify(this.items));
            this.addToFireBase();
        });
    }
    gotoBsInfo() {
        this.router.navigate(['business-info']);
    }
    StockOut(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profit = 0;
            this.revenue = 0;
            window.localStorage.setItem("selecteditem", item.index);
            const alert3 = yield this.alertController.create({
                subHeader: "Enter the out stock quantity in " + item.uom,
                header: "This option is for stock out(sale) of the item " + item.name,
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the stock quantity here..",
                    },
                    {
                        name: 'input1',
                        type: 'text',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the customer name here..",
                    },
                    {
                        name: 'input2',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the customer number here..",
                    },
                ],
                buttons: [{
                        text: 'Stock Out',
                        handler: data => {
                            console.log(item);
                            this.items[item.index].stock = Number(this.items[item.index].stock) - Number(data.input);
                            window.localStorage.setItem('items', JSON.stringify(this.items));
                            this.stock_added = -Number(data.input);
                            let data1 = {
                                stock: this.stock_added,
                                customer_name: data.input1,
                                customer_mno: Number(data.input2),
                                iname: item.name,
                                index: item.index,
                                Date: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
                            };
                            this.profit = this.profit + (this.items[item.index].rPrice - this.items[item.index].pPrice) * Number(data.input);
                            this.revenue = this.revenue + (this.items[item.index].rPrice * Number(data.input));
                            console.log("Profit" + this.profit);
                            console.log("Revenue" + this.revenue);
                            this.updateDailySalesandProfit(this.revenue, this.profit);
                            if (this.user.uType == 1 || this.paid == 1) {
                                this.sendNotificationcheck(item);
                                this.addStockToFireBase(data1);
                                this.addItemStockToFireBase(item, data1);
                            }
                        },
                    },
                ]
            });
            yield alert3.present();
        });
    }
    changeItemStockInFireBase(item, data) {
        const sub = this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).get().subscribe(data2 => {
            if (data2.exists) {
                this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).update({
                    stock: data.stock,
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //this.salesToBeUpload.push(data);
                    //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
            else {
                this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).set({
                    stock: data.stock,
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
    }
    addItemStockToFireBase(item, data) {
        if (this.paid == 1) {
            //  console.log("we are called");
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
                        stock: item.stock,
                    }).then(data2 => console.log('data2')).catch((err) => {
                        console.log(err);
                        //   this.salesToBeUpload.push(data);
                        // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                        sub.unsubscribe();
                    });
                }
            });
            this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).valueChanges().subscribe((res) => {
                if (res == undefined) {
                }
                else {
                    this.items[item.index].stock = res.stock;
                    window.localStorage.setItem('items', JSON.stringify(this.items));
                    this.addToFireBase();
                }
            });
        }
        //window.localStorage.setItem('items',JSON.stringify(this.items));
        //console.log("ITEMA")
        //window.localStorage.setItem('items',JSON.stringify(this.items));
        // this.addToFireBase();
        this.items = JSON.parse(window.localStorage.getItem('items'));
    }
    addItemStockToFireBase1(item, data) {
        console.log("we are called");
        console.log(data.stock + "data stock");
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
                    stock: Number(item.stock) + (data.stock),
                }).then(data2 => console.log('data2')).catch((err) => {
                    console.log(err);
                    //   this.salesToBeUpload.push(data);
                    // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                    sub.unsubscribe();
                });
            }
        });
        this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).valueChanges().subscribe((res) => {
            if (res == undefined) {
            }
            else {
                this.items[item.index].stock = res.stock;
                window.localStorage.setItem('items', JSON.stringify(this.items));
                this.addToFireBase();
            }
        });
        this.items = JSON.parse(window.localStorage.getItem('items'));
    }
    sendNotificationcheck(item) {
        this.items = JSON.parse(window.localStorage.getItem('items'));
        if (this.items[item.index].stock < this.items[item.index].mquantity) {
            this.sendNotification("Low Stock Notification:Item " + this.items[item.index].name + "is low stock.");
        }
    }
    changeItemOpeningStock(item, stock) {
        this.items[item.index].stock = stock;
        console.log("stock" + this.items[item.index].stock);
        window.localStorage.setItem("items", JSON.stringify(this.items));
        this.addToFireBase();
    }
    updateDailySalesandProfit(revenue, profit) {
        console.log("*********revenue********" + revenue);
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
    addStockWithPO(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.checkPaid();
            this.items.forEach((value, index) => {
                value.i = index;
            });
            window.localStorage.setItem("selecteditem", item.index);
            const alert2 = yield this.alertController.create({
                subHeader: "Enter the received stock quantity in " + item.uom,
                header: "This option is for the stock in associated with purchase order",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Enter the received stock quantity here..",
                    },
                ],
                buttons: [{
                        text: 'Add to Stock',
                        handler: data => {
                            this.items[item.index].stock = Number(this.items[item.index].stock) + Number(data.input);
                            window.localStorage.setItem('items', JSON.stringify(this.items));
                            let data1 = {
                                stock: Number(data.input),
                                item: item.name,
                                index: item.index,
                                Date: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
                                supplier_name: this.selectedpurchaseorder.supplier.name
                            };
                            window.localStorage.setItem('items', JSON.stringify(this.items));
                            this.addItemStockToFireBase(item, data1);
                            this.completePurchaseOrder(data.input);
                            this.addStockToFireBase(data1);
                        }
                    },
                ]
            });
            // this.
            this.addpurchaseorder(item);
            // this.addToFireBase();
            yield alert2.present();
        });
    }
    completePurchaseOrder(stock) {
        console.log("IN COMPLETE PURCHASE ORDER***************");
        let item;
        let pendingpurchaseorders = new Array;
        let completedpurchaseorder = this.selectedpurchaseorder;
        this.purchaseOrder = JSON.parse(window.localStorage.getItem('purchaseorder'));
        this.purchaseOrder.forEach(function (value) {
            console.log("VALUE.STOCK" + value.stock);
            if (value.stock == completedpurchaseorder.stock && value.item_index == completedpurchaseorder.item_index && value.supplier.phone == completedpurchaseorder.supplier.phone) {
                completedpurchaseorder = value;
            }
            else {
                pendingpurchaseorders.push(value);
            }
        });
        completedpurchaseorder.stock_received = stock;
        completedpurchaseorder.stock_missed = Number(completedpurchaseorder.stock) - Number(stock);
        if (completedpurchaseorder.stock_missed > 0) {
            completedpurchaseorder.stock = completedpurchaseorder.stock_missed;
            pendingpurchaseorders.push(completedpurchaseorder);
        }
        window.localStorage.setItem("purchaseOrders", JSON.stringify(pendingpurchaseorders));
        console.log("PEnding Purchase orders" + JSON.stringify(pendingpurchaseorders));
        if (this.paid == 1 || this.user.uType == 1) {
            console.log("We are in the adding purchaseorders");
            this.firestore.collection('stores').doc(this.user.docID).update({
                purchaseorder: pendingpurchaseorders,
            });
            var name = "CompletePO";
            const sub = this.firestore.collection('stores').doc(this.user.docID).collection('completedPO').doc("completedPO").get().subscribe(data2 => {
                if (data2.exists) {
                    this.firestore.collection('stores').doc(this.user.docID).collection('completedPO').doc("completedPO").update({
                        completedPO: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(completedpurchaseorder)
                    }).then(data2 => console.log('data2')).catch((err) => {
                        console.log(err);
                        //this.salesToBeUpload.push(data);
                        //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                        sub.unsubscribe();
                    });
                }
                else {
                    this.firestore.collection('stores').doc(this.user.docID).collection('completedPO').doc("completedPO").set({
                        completedPO: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(completedpurchaseorder)
                    }).then(data2 => console.log('data2')).catch((err) => {
                        console.log(err);
                        //   this.salesToBeUpload.push(data);
                        // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
                        sub.unsubscribe();
                    });
                }
            });
            console.log("PENDING PURCHASE ORDERS LENGTH" + pendingpurchaseorders.length);
        }
        window.localStorage.setItem("purchaseorder", JSON.stringify(pendingpurchaseorders));
        if (completedpurchaseorder.stock_missed <= 0) {
            this.msg = "All stock received";
            this.color = "success";
            this.presentToast();
        }
        if (completedpurchaseorder.stock_missed > 0) {
            console.log("completedpurchaseorder" + completedpurchaseorder);
            completedpurchaseorder.stock = completedpurchaseorder.stock_missed;
            console.log("completed stock" + completedpurchaseorder.stock);
            pendingpurchaseorders.push(completedpurchaseorder);
            this.msg = completedpurchaseorder.stock_missed + "pieces  left to be received";
            this.color = "danger";
            this.presentToast();
        }
    }
    scanBarcodes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log("about to call native method");
            yield this.barcodeScanner.scan().then(barcodeData => {
                var barcode = barcodeData.text;
                this.barcode = barcode;
                return barcode;
            });
        });
    }
    searchItemUsingBarcode() {
        this.searchFound = [];
        var found = 0;
        console.log(this.searchParam);
        if (this.searchParam != "") {
            for (var k = 0; k < this.items.length; k++) {
                if (this.items[k].barcode == this.searchParam) {
                    // alert("ITem found"+this.items[k].name);
                    this.searchFound.push(this.items[k]);
                }
            }
        }
        this.toShow = this.searchFound;
        this.items = this.toShow;
    }
    scanBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            var barcode = barcodeData.text;
            var found = false;
            for (var i = 0; i < this.items.length; i++) {
                if (barcode == this.items[i].barcode) {
                    this.searchParam = barcode;
                    this.barcode = barcode;
                    this.searchItemUsingBarcode();
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
        });
    }
    generatePurchaseOrder(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.checkPaid();
            console.log(this.user);
            var purchaseOrder = {
                supplier: { name: "", phonenumber: "" },
                stock: 0,
                item_index: 0,
                item_name: String,
                PDate: new Date(),
                uom: String,
            };
            window.localStorage.setItem('items', JSON.stringify(this.items));
            const alert2 = yield this.alertController.create({
                subHeader: "Enter the ordered item quantity in " + item.uom,
                header: "THis is to generate purchase order with supplier",
                mode: 'ios',
                inputs: [
                    {
                        name: 'input',
                        type: 'number',
                        id: 'name',
                        value: name,
                        placeholder: "Please enter ordered stock here",
                    }
                ],
                buttons: [{
                        text: 'Generate PO',
                        handler: data => {
                            purchaseOrder.supplier = this.supplier;
                            purchaseOrder.stock = data.input;
                            purchaseOrder.item_index = item.index;
                            purchaseOrder.item_name = item.name;
                            purchaseOrder.PDate = new Date();
                            purchaseOrder.uom = item.uom;
                            if (this.paid == 1 && this.user.uType == 1) {
                                this.addPurchaseOrdertoFireBase(purchaseOrder, item);
                            }
                        }
                    },
                ]
            });
            this.addSupplier(item);
            yield alert2.present();
        });
    }
    addPurchaseOrdertoFireBase(purchaseOrder, item) {
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        "";
        var name = "purchaseorder";
        if (this.paid == 1) {
            this.firestore.collection('stores').doc(this.user.docID).update({
                [name]: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(purchaseOrder)
            }).then(data => console.log(data)).catch((err) => {
            });
        }
    }
    searchItem() {
        this.searchFound = [];
        var found = 0;
        console.log(this.searchParam);
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
            }
        }
        this.toShow = this.searchFound;
        if (this.searchParam == "") {
            this.toShow = this.items;
        }
    }
    call(boi) {
        this.callNumber.callNumber(boi.phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    registerBarcode(item) {
        this.barcodeScanner.scan().then(barcodeData => {
            if (barcodeData.text != undefined) {
                this.barcode = barcodeData.text;
                let same = false;
                this.items[item.index].barcode = this.barcode;
                //console.log(this.items[item.index]);
                //console.log(this.items);
                window.localStorage.setItem('items', JSON.stringify(this.items));
                this.addToFireBase();
            }
        });
        //console.log("we are here");
        // console.log(this.items[item.index]);
    }
    getInfo() {
        this.toCollect = 0;
        this.lowStock = 0;
        this.highStock = 0;
        this.stockValue = 0;
        this.noofitems = this.items.length;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].index = i;
            this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
            if (this.items[i].stock < 10) {
                this.lowStock = this.lowStock + 1;
            }
            if (this.items[i].stock > 30) {
                this.highStock = this.highStock + 1;
            }
        }
        this.toShow = this.items;
        for (var i = 0; i < this.lenders.length; i++) {
            if (this.lenders[i].paid) {
                this.toCollect = this.toCollect + (this.lenders[i].total - this.lenders[i].paid);
            }
            else {
                this.toCollect = this.toCollect + (this.lenders[i].total);
            }
        }
        for (var i = 0; i < this.sales.length; i++) {
            if (this.sales[i].paid) {
                this.salesValue = this.salesValue + Number(this.sales[i].paid);
            }
        }
    }
    sortLowStock() {
        this.toShow.sort((a, b) => (a.stock > b.stock) ? 1 : ((b.stock > a.stock) ? -1 : 0));
    }
    sortAlpha() {
        this.toShow.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }
    sortPriceDown() {
        this.toShow.sort((a, b) => (a.rPrice > b.rPrice) ? 1 : ((b.rPrice > a.rPrice) ? -1 : 0));
    }
    sortPriceUp() {
        this.toShow.sort((a, b) => (a.rPrice < b.rPrice) ? 1 : ((b.rPrice < a.rPrice) ? -1 : 0));
    }
    getItems() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
        else {
            this.items = [];
        }
        if (window.localStorage.getItem('lenders')) {
            this.lenders = JSON.parse(window.localStorage.getItem('lenders'));
        }
        else {
            this.lenders = [];
        }
        if (window.localStorage.getItem('sales')) {
            this.sales = JSON.parse(window.localStorage.getItem('sales'));
        }
        else {
            this.sales = [];
        }
        if (window.localStorage.getItem('storeInfo')) {
            this.storeInfo = JSON.parse(window.localStorage.getItem('storeInfo'));
        }
        else {
            this.storeInfo = [];
        }
        if (window.localStorage.getItem('sales')) {
            this.sales = JSON.parse(window.localStorage.getItem('sales'));
        }
        else {
            this.sales = [];
        }
        setTimeout(() => {
            this.getInfo();
        }, 600);
    }
    ionViewWillEnter() {
        this.paid = JSON.parse(window.localStorage.getItem('paid'));
        this.basic = JSON.parse(window.localStorage.getItem('basic'));
        // console.log("PAID VALUE"+this.paid);
        console.log(this.paid);
        this.user = JSON.parse(window.localStorage.getItem('user'));
        //console.log(this.user.uType)
        // this.utility.selfExpireStaff();
        //this.utility.checkPaid();
        //this.utility.checkForBasicService();
        //this.deleteStaffandDesktopData();
        if (this.paid == 1) {
            this.getOwnerPlayerId();
            this.paid = window.localStorage.getItem('paid');
            console.log("PAID*******+++++++" + this.paid);
        }
        if (this.user.uType == 1) {
            this.checkIfHelperExists();
        }
        this.items = JSON.parse(window.localStorage.getItem('items'));
        //console.log(JSON.stringify(this.it
        this.noofitems = this.items.length;
        // this.getInfo();
        //console.log(this.items);
        this.toShow = this.items;
        // this.getcurentUsershop();
        this.getItems();
        this.searchFound = this.items;
        this.toShow = this.items;
        // console.log(this.items);
        //this.toShow = this.items;
        this.user = JSON.parse(window.localStorage.getItem('user'));
    }
    openPOS() {
        this.router.navigate(['pos']);
    }
    getcurentUsershop() {
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        if (this.user.paid == 1) {
            this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res) => {
                if (res.items) {
                    this.items = res.items;
                    window.localStorage.setItem('items', JSON.stringify(this.items));
                    this.items = JSON.parse(window.localStorage.getItem('items'));
                }
                if (res.purchaseorder) {
                    this.purchaseOrder = res.purchaseorder;
                    window.localStorage.setItem('purchaseOrders', JSON.stringify(this.purchaseOrder));
                    this.purchaseOrder = JSON.parse(window.localStorage.getItem('purchaseOrders'));
                }
            });
        }
    }
    checkPaid() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res) => {
            this.user.paid = res.paid;
            this.user.basic = res.basic;
            console.log("We are here");
        });
        if (this.paid == 1) {
            this.user.basic = 1;
        }
        window.localStorage.setItem('user', JSON.stringify(this.user));
    }
    checkIfHelperExists() {
        console.log("HelperId" + this.user.helperid);
        var docRef = this.firestore.collection("helpers").doc(this.user.helperid);
        docRef.valueChanges().subscribe((ref) => {
            console.log("ref************" + ref);
            if (ref == null) {
                console.log("We are here");
                window.localStorage.clear();
                navigator['app'].exitApp();
            }
            else {
                this.allowed = true;
            }
        });
    }
};
InventoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] },
    { type: src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_16__["UtilityMethodsService"] }
];
InventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InventoryPage);



/***/ }),

/***/ "x6lW":
/*!****************************************************!*\
  !*** ./src/app/home/inventory/inventory.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Anton&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Secular+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n.flexdisp {\n  display: flex;\n}\n.centertext {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.scrollwrapper {\n  width: auto;\n  overflow-x: scroll;\n  display: flex;\n  padding: 5px;\n}\n.cards {\n  margin-left: 12px;\n  min-width: 160px;\n  min-height: 100px;\n  border-radius: 16px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.055), 0 3px 6px rgba(0, 0, 0, 0.13);\n  display: flex;\n  flex-direction: column;\n  padding: 4px;\n  transition: 0.2s;\n  text-align: center;\n}\n.line-input {\n  margin: 0 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n.line-input ion-item {\n  --border-color: transparent !important;\n  --highlight-height: 0;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 4px;\n}\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 1rem !important;\n}\n.line-input ion-item ion-input {\n  font-family: \"Noto Sans JP\", sans-serif;\n  color: black;\n}\n.prodcard {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(128, 0, 128, 0.404);\n  min-height: 8em;\n  width: 90%;\n  margin-top: 14px;\n  padding-top: 10px;\n  margin-left: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludmVudG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RRLDBFQUFBO0FBQ0EsZ0ZBQUE7QUFDQSw2RkFBQTtBQWpFUjtFQUNJLGFBQUE7QUFJSjtBQUZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU1KO0FBSkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlFQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQUxBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBUUo7QUFQSTtFQUNJLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBU1I7QUFQUTtFQUNJLG1EQUFBO0FBU1o7QUFOUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVFaO0FBTlE7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7QUFRWjtBQUhBO0VBQ0ksNkVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KIiwiZmlsZSI6ImludmVudG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGRpc3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2VudGVydGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zY3JvbGx3cmFwcGVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2FyZHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNTUpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMGRhMDJkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2RjYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDFweCAycHggcmdiYSgxMjgsIDAsIDEyOCwgMC40MDQpO1xyXG4gICAgbWluLWhlaWdodDogOGVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xyXG59XHJcblxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNlY3VsYXIrT25lJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1RhbW11ZHUrMjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module.js.map