(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"],{

/***/ "fagX":
/*!*****************************************************!*\
  !*** ./src/app/add-customer/add-customer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap\");\nion-item {\n  background: white !important;\n  border: 1px solid black;\n  border-radius: 14px;\n  width: 70%;\n}\nion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.shadow-red {\n  border-radius: 10px;\n}\nion-card {\n  min-width: 90%;\n  padding: 15px;\n}\n.container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.h-divider {\n  margin: auto;\n  margin-top: 80px;\n  width: 80%;\n  position: relative;\n}\n.h-divider .shadow {\n  overflow: hidden;\n  height: 20px;\n}\n.h-divider .shadow:after {\n  content: \"\";\n  display: block;\n  margin: -25px auto 0;\n  width: 100%;\n  height: 25px;\n  border-radius: 125px/12px;\n  box-shadow: 0 0 8px black;\n}\n.h-divider .text {\n  width: 100px;\n  height: 45px;\n  padding: 10px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: -22px;\n  left: 50%;\n  margin-left: -60px;\n  border-radius: 100%;\n  box-shadow: 0 2px 4px rgba(59, 5, 5, 0.123);\n  background: white;\n  font-family: verdana;\n}\n.h-divider .text i {\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  left: 4px;\n  right: 4px;\n  border-radius: 100%;\n  border: 1px solid #aaa;\n  text-align: center;\n  line-height: 50px;\n  font-style: normal;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZRLDhGQUFBO0FBckZSO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVKO0FBREk7RUFDSSxtREFBQTtBQUdSO0FBQUE7RUFDSSxtQkFBQTtBQUdKO0FBREE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUlKO0FBREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUlKO0FBREE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUFJSjtBQURBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSUo7QUFERTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBSUo7QUFERTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFJSjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJSiIsImZpbGUiOiJhZGQtY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICB3aWR0aDogNzAlO1xuICAgICYuaXRlbS1oYXMtZm9jdXMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzBkYTAyZCk7XG4gICAgfVxufVxuLnNoYWRvdy1yZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY2FyZCB7XG4gICAgbWluLXdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5oLWRpdmlkZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaC1kaXZpZGVyIC5zaGFkb3cge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuaC1kaXZpZGVyIC5zaGFkb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogLTI1cHggYXV0byAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMjVweC8xMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggYmxhY2s7XG4gIH1cbiAgXG4gIC5oLWRpdmlkZXIgLnRleHQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IC0yMnB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSg1OSwgNSwgNSwgMC4xMjMpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xuICB9XG4gIFxuICAuaC1kaXZpZGVyIC50ZXh0IGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuIl19 */");

/***/ }),

/***/ "jO1E":
/*!***************************************************!*\
  !*** ./src/app/add-customer/add-customer.page.ts ***!
  \***************************************************/
/*! exports provided: AddCustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPage", function() { return AddCustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-customer.page.html */ "rMJu");
/* harmony import */ var _add_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-customer.page.scss */ "fagX");
/* harmony import */ var _contacts_list_contacts_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contacts-list/contacts-list.page */ "U7e9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");









let AddCustomerPage = class AddCustomerPage {
    constructor(modalCtrl, toastController, fireStore) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.fireStore = fireStore;
        this.choice = "";
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Supplier Added!',
                duration: 2000,
                color: 'success',
            });
            toast.present();
        });
    }
    setChoice(choice) {
        this.choice = choice;
    }
    getSuppliers() {
        if (window.localStorage.getItem('suppliers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
        }
        else {
            this.suppliers = [];
        }
    }
    getcustomers() {
        if (window.localStorage.getItem('customers')) {
            this.customers = JSON.parse(window.localStorage.getItem('customers'));
        }
        else {
            this.customers = [];
        }
    }
    ionViewWillEnter() {
        this.paid = window.localStorage.getItem("paid");
    }
    addCustomer() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if (this.customers == undefined) {
            this.customers = [];
        }
        if (this.name == undefined) {
            this.name = "";
        }
        if (this.phone == undefined) {
            this.phone = "";
        }
        if (this.address == undefined) {
            this.address = "";
        }
        if (this.gstin == undefined) {
            this.gstin = "";
        }
        let data = {
            name: this.name,
            phone: this.phone.includes('+') ? this.phone : '+91' + this.phone,
            address: this.address,
            gstin: this.gstin
        };
        this.customers.push(data);
        window.localStorage.setItem('customers', JSON.stringify(this.customers));
        if (this.paid == 1) {
            this.fireStore.collection('stores').doc(this.user.docID).update({
                customers: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(data)
            });
        }
        this.presentToast();
        this.modalCtrl.dismiss(data);
    }
    addSupplier() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        let data = {
            name: this.name,
            phone: this.phone.includes('+') ? this.phone : '+91' + this.phone,
        };
        this.suppliers.push(data);
        window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
        if (this.paid == 1) {
            this.fireStore.collection('stores').doc(this.user.docID).update({
                suppliers: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(data)
            });
        }
        this.presentToast();
        this.modalCtrl.dismiss(data);
    }
    close() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
        this.getSuppliers();
        this.getcustomers();
    }
    showContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var modal = yield this.modalCtrl.create({
                component: _contacts_list_contacts_list_page__WEBPACK_IMPORTED_MODULE_3__["ContactsListPage"],
                backdropDismiss: false,
            });
            modal.onDidDismiss().then(data => {
                if (data.role == 'selected') {
                    const contact = data.data.contact;
                    this.name = contact.name;
                    this.phone = contact.phone.toString().replace(/\s+/g, '');
                }
            });
            modal.present();
        });
    }
};
AddCustomerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
AddCustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-customer',
        template: _raw_loader_add_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddCustomerPage);



/***/ }),

/***/ "rMJu":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-customer/add-customer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">   <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">ADD PARTY\r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content >\r\n\r\n  \r\n\r\n  <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n    <div\r\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n        ADD A Customer\r\n      </h2>\r\n\r\n      \r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input placeholder=\"Enter name of Customer\" [(ngModel)]=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"tel\" placeholder=\"Enter phone of supplier\" [(ngModel)]=\"phone\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input  placeholder=\"Enter Address of customer\" [(ngModel)]=\"address\"></ion-input>\r\n      </ion-item>\r\n     \r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input  placeholder=\"Enter GSTIN of customer\" [(ngModel)]=\"gstin\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n\r\n      <div style=\"margin-top: 25px;width: 60%;\">\r\n        <ion-button class=\"shadow-red\" (click)=\"addCustomer()\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n            Continue\r\n          </p>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44.js.map