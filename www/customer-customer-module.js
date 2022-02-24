(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "4mYg":
/*!**********************************************************!*\
  !*** ./src/app/home/customer/customer-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: CustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function() { return CustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.page */ "RelV");




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
    }
];
let CustomerPageRoutingModule = class CustomerPageRoutingModule {
};
CustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerPageRoutingModule);



/***/ }),

/***/ "Qx6m":
/*!**************************************************!*\
  !*** ./src/app/home/customer/customer.module.ts ***!
  \**************************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-routing.module */ "4mYg");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "RelV");







let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPageRoutingModule"]
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
    })
], CustomerPageModule);



/***/ }),

/***/ "RelV":
/*!************************************************!*\
  !*** ./src/app/home/customer/customer.page.ts ***!
  \************************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer.page.html */ "i/5J");
/* harmony import */ var _customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.page.scss */ "emE7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../add-customer/add-customer.page */ "jO1E");










let CustomerPage = class CustomerPage {
    constructor(router, callNumber, firestore, modalController, alertController) {
        this.router = router;
        this.callNumber = callNumber;
        this.firestore = firestore;
        this.modalController = modalController;
        this.alertController = alertController;
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
                    console.log("We are here");
                    this.returnDat = event['data'];
                    setTimeout(() => {
                        this.selectSupplier(this.returnDat);
                    }, 600);
                }
            });
            return yield modal.present();
        });
    }
    selectSupplier(boi) {
        this.modalController.dismiss(boi);
    }
    call(boi) {
        this.callNumber.callNumber(boi.phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    getSuppliers() {
        if (window.localStorage.getItem('customers')) {
            this.customers = JSON.parse(window.localStorage.getItem('customers'));
        }
        else {
        }
    }
    askDelete(customer) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert3 = yield this.alertController.create({
                subHeader: "Do you really want to delete staff?",
                mode: 'ios',
                buttons: [{
                        text: 'Yes',
                        handler: data => {
                            this.delete(customer);
                        },
                    }, {
                        text: 'No',
                        handler: data => {
                        }
                    }
                ],
            });
            yield alert3.present();
        });
    }
    delete(customer) {
        let newsuppliers = new Array();
        this.customers = JSON.parse(window.localStorage.getItem('customers'));
        console.log(this.customers.length);
        this.customers.forEach((element) => {
            console.log(element.phone);
            console.log(customer.phone);
            console.log(element.phone != customer.phone);
            if (element.phone != customer.phone) {
                newsuppliers.push(element);
            }
        });
        console.log(newsuppliers.length);
        window.localStorage.setItem('customers', JSON.stringify(newsuppliers));
        this.customers = JSON.parse(window.localStorage.getItem('customers'));
        this.firestore.collection('stores').doc(this.user.docID).update({
            customers: newsuppliers,
        });
    }
    checkPaid() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res) => {
            this.user.paid = res.paid;
            this.user.basic = res.basic;
        });
        if (this.user.paid == 1) {
            console.log("We are here");
            this.user.basic = 1;
        }
        window.localStorage.setItem('user', JSON.stringify(this.user));
    }
    addsupplier() {
        this.ModalPage = _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_8__["AddCustomerPage"];
    }
    ngOnInit() {
        this.customers = JSON.parse(window.localStorage.getItem('customers'));
    }
    ionViewWillEnter() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.getSuppliers();
        this.paid = JSON.parse(window.localStorage.getItem('paid'));
        this.customers = JSON.parse(window.localStorage.getItem('customers'));
        console.log(JSON.stringify(this.customers));
    }
};
CustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
CustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-customer',
        template: _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerPage);



/***/ }),

/***/ "emE7":
/*!**************************************************!*\
  !*** ./src/app/home/customer/customer.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inline {\n  width: 100%;\n  height: auto;\n  display: flex;\n}\n\n.one, .two {\n  width: 50%;\n  height: 100px;\n  background-color: green;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLFdBQUE7RUFBVyxZQUFBO0VBQVksYUFBQTtBQUkvQjs7QUFIQTtFQUFVLFVBQUE7RUFBVSxhQUFBO0VBQWEsdUJBQUE7RUFBdUIsWUFBQTtBQVV4RCIsImZpbGUiOiJjdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5saW5le3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG87ZGlzcGxheTpmbGV4O30gXG4ub25lLC50d297d2lkdGg6NTAlO2hlaWdodDoxMDBweDtiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO21hcmdpbjoxMHB4O30iXX0= */");

/***/ }),

/***/ "i/5J":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/customer/customer.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\n \n  \">    <div style=\"display: flex;color: white;\">\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">CUSTOMERS\n      </ion-title>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <div *ngIf=\"customers\" style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\n\n\n\n\n    <ion-card *ngFor=\"let boi of customers\"\n      style=\"display: flex;padding-left: 10px;padding-right: 10px;width: 95%;max-height: 6em;color: black;background: rgba(255, 255, 255, 0.349);margin-top: 18px;\">\n      <img style=\"height: 4em;position: relative;top: 1em;\" src=\"../../../assets/boi.png\" alt=\"\">\n      <div>\n        <ion-icon (click)=\"call(boi)\" color=\"success\"\n          style=\"background: rgba(74, 196, 4, 0.24);font-size: 25px;margin-top: 1em;border-radius: 50%;padding: 5px;position: relative;left: 20px;\"\n          name=\"call\">\n        </ion-icon>\n\n      </div>\n      \n      \n      <div style=\"width: 72%;\">\n\n        <ion-title style=\"font-size: 20px;margin-top: 8px;text-align: center;font-family: 'Sans-serif'\" class=\"balu\"> {{boi.name}}</ion-title>\n       <br>\n        <ion-chip\n          style=\"position:relative;top: -1.1em;left: 0.4em;display: flex;justify-content: center;align-items: center;text-align: center;\"\n          color=\"primary\" mode='ios'>\n          <ion-icon style=\"font-size: 16px;margin-right: 2px;\" name=\"call\"></ion-icon>\n          <b>{{boi.phone}}</b>\n        </ion-chip>\n\n      </div>\n\n      <div>\n        <ion-icon (click)=\"askDelete(boi)\" color=\"success\"\n          style=\"background: rgba(74, 196, 4, 0.041);font-size: 25px;margin-top: 0.5em;border-radius: 50%;padding: 5px;margin-top: 18px;\"\n          name=\"trash\">\n        </ion-icon>\n\n      </div>\n\n\n\n    </ion-card>\n\n  </div>\n\n  <div *ngIf=\"!customers\">\n\n\n    <ion-label\n      style=\"font-family: impact;color: rgba(128, 128, 128, 0.616);position: relative;top: 10em;text-align: center;font-size: 32px;display: flex;justify-content: center;align-items: center;\">\n      NOTHING TO SHOW...!\n    </ion-label>\n\n  </div>\n\n </ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map