(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suppliers-suppliers-module"],{

/***/ "4bBr":
/*!****************************************************!*\
  !*** ./src/app/home/suppliers/suppliers.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n.balu {\n  font-family: \"Baloo Tammudu 2\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1cHBsaWVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkZBQUE7QUFDUjtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoic3VwcGxpZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUYW1tdWR1KzI6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4uYmFsdSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyBUYW1tdWR1IDJcIjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "QWsN":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/suppliers/suppliers.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">SUPPLIERS\r\n      </ion-title>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n  <div *ngIf=\"suppliers\" style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n\r\n\r\n\r\n    <ion-card *ngFor=\"let boi of suppliers\"\r\n      style=\"display: flex;padding-left: 10px;padding-right: 10px;width: 95%;max-height: 6em;color: black;background: rgba(255, 255, 255, 0.349);margin-top: 18px;\">\r\n      <img style=\"height: 4em;position: relative;top: 1em;\" src=\"../../../assets/boi.png\" alt=\"\">\r\n      <div>\r\n        <ion-icon (click)=\"call(boi)\" color=\"success\"\r\n          style=\"background: rgba(74, 196, 4, 0.24);font-size: 25px;margin-top: 1em;border-radius: 50%;padding: 10px;position: relative;left: 20px;\"\r\n          name=\"call\">\r\n        </ion-icon>\r\n\r\n      </div>\r\n      \r\n      \r\n      <div style=\"width: 72%;\">\r\n\r\n        <ion-title style=\"font-size: 20px;margin-top: 8px;text-align: center;font-family: 'Sans-serif'\" class=\"balu\"> {{boi.name}}</ion-title>\r\n       <br>\r\n        <ion-chip\r\n          style=\"position:relative;top: -1.1em;left: 0.4em;display: flex;justify-content: center;align-items: center;text-align: center;\"\r\n          color=\"primary\" mode='ios'>\r\n          <ion-icon style=\"font-size: 16px;margin-right: 2px;\" name=\"call\"></ion-icon>\r\n          <b>{{boi.phone}}</b>\r\n        </ion-chip>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        <ion-icon (click)=\"askDelete(boi)\" color=\"success\"\r\n          style=\"background: rgba(74, 196, 4, 0.041);font-size: 25px;margin-top: 0.5em;border-radius: 50%;padding: 10px;margin-top: 18px;\"\r\n          name=\"trash\">\r\n        </ion-icon>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </ion-card>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"!suppliers\">\r\n\r\n\r\n    <ion-label\r\n      style=\"font-family: impact;color: rgba(128, 128, 128, 0.616);position: relative;top: 10em;text-align: center;font-size: 32px;display: flex;justify-content: center;align-items: center;\">\r\n      NOTHING TO SHOW...!\r\n    </ion-label>\r\n\r\n  </div>\r\n\r\n  \r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "RDzj":
/*!****************************************************!*\
  !*** ./src/app/home/suppliers/suppliers.module.ts ***!
  \****************************************************/
/*! exports provided: SuppliersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersPageModule", function() { return SuppliersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _suppliers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suppliers-routing.module */ "aH3V");
/* harmony import */ var _suppliers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suppliers.page */ "bD9t");







let SuppliersPageModule = class SuppliersPageModule {
};
SuppliersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _suppliers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuppliersPageRoutingModule"]
        ],
        declarations: [_suppliers_page__WEBPACK_IMPORTED_MODULE_6__["SuppliersPage"]]
    })
], SuppliersPageModule);



/***/ }),

/***/ "aH3V":
/*!************************************************************!*\
  !*** ./src/app/home/suppliers/suppliers-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SuppliersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersPageRoutingModule", function() { return SuppliersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _suppliers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suppliers.page */ "bD9t");




const routes = [
    {
        path: '',
        component: _suppliers_page__WEBPACK_IMPORTED_MODULE_3__["SuppliersPage"]
    }
];
let SuppliersPageRoutingModule = class SuppliersPageRoutingModule {
};
SuppliersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuppliersPageRoutingModule);



/***/ }),

/***/ "bD9t":
/*!**************************************************!*\
  !*** ./src/app/home/suppliers/suppliers.page.ts ***!
  \**************************************************/
/*! exports provided: SuppliersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersPage", function() { return SuppliersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_suppliers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./suppliers.page.html */ "QWsN");
/* harmony import */ var _suppliers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suppliers.page.scss */ "4bBr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addsupplier1_addsupplier1_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../addsupplier1/addsupplier1.page */ "wgbC");
/* harmony import */ var src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utility-methods.service */ "fm+l");











let SuppliersPage = class SuppliersPage {
    constructor(utility, router, callNumber, firestore, modalController, alertController) {
        this.utility = utility;
        this.router = router;
        this.callNumber = callNumber;
        this.firestore = firestore;
        this.modalController = modalController;
        this.alertController = alertController;
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
        this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        console.log(this.suppliers.length);
        this.suppliers.forEach((element) => {
            console.log(element.phone);
            console.log(customer.phone);
            console.log(element.phone != customer.phone);
            if (element.phone != customer.phone) {
                newsuppliers.push(element);
            }
        });
        console.log(newsuppliers.length);
        window.localStorage.setItem('suppliers', JSON.stringify(newsuppliers));
        this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        this.firestore.collection('stores').doc(this.user.docID).update({
            suppliers: newsuppliers,
        });
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
                    setTimeout(() => {
                        // this.selectSupplier(this.returnDat);
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
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
        }
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
        this.ModalPage = _addsupplier1_addsupplier1_page__WEBPACK_IMPORTED_MODULE_8__["Addsupplier1Page"];
        this.openModal();
        this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        this.modalController.dismiss();
        // console.log("suppliers is********"+JSON.stringify(this.suppliers))
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.getSuppliers();
        //this.utility.checkPaid();
        // this.utility.checkForBasicService();
        this.paid = JSON.parse(window.localStorage.getItem('paid'));
        this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        console.log("s************uppliers is************" + this.suppliers);
    }
};
SuppliersPage.ctorParameters = () => [
    { type: src_app_utility_methods_service__WEBPACK_IMPORTED_MODULE_9__["UtilityMethodsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
SuppliersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-suppliers',
        template: _raw_loader_suppliers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suppliers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuppliersPage);



/***/ })

}]);
//# sourceMappingURL=suppliers-suppliers-module.js.map