(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["borrowers-borrowers-module"],{

/***/ "IxNA":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/borrowers/borrowers.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: black;  /* fallback for old browsers */\r\n \r\n  \">\r\n       <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Staff\r\n      </ion-title>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"helpers\" style=\"padding:10px;\">\r\n    <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n      <ion-card *ngFor=\"let helper of helpers\"\r\n        style=\"display: flex;padding-left: 10px;padding-right: 10px;width: 95%;min-height: 4em;color: black;background: rgba(255, 255, 255, 0.027);\">\r\n        <img style=\"height: 4em;position: relative;top: 0.5em;\" src=\"../../../assets/staff.png\" alt=\"\">\r\n        <div style=\"width: 80%;\">\r\n\r\n          <ion-title style=\"font-size: 24px;margin-top: 10px;\" class=\"balu\">{{helper.helperphone}}</ion-title>\r\n\r\n          <ion-title\r\n            style=\"font-family:Georgia;font-size: 15px;color: rgba(0, 0, 0, 0.781);position: relative;top: -12px;\">\r\n       \r\n       \r\n          </ion-title>\r\n\r\n        </div>\r\n\r\n        <div>\r\n          <ion-icon (click)=\"askDelete(helper)\" color=\"success\"\r\n            style=\"background: rgba(74, 196, 4, 0.041);font-size: 25px;margin-top: 0.5em;border-radius: 50%;padding: 5px;margin-top: 18px;\"\r\n            name=\"trash\">\r\n          </ion-icon>\r\n\r\n        </div>\r\n\r\n      </ion-card>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!helpers\">\r\n\r\n\r\n    <p\r\n      style=\"font-family: impact;color: rgba(128, 128, 128, 0.616);position: relative;top: 10em;text-align: center;font-size: 32px;\">\r\n      NOTHING TO SHOW...!\r\n    </p>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "UYXs":
/*!****************************************************!*\
  !*** ./src/app/home/borrowers/borrowers.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap\");\n.balu {\n  font-family: \"Baloo Tammudu 2\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvcnJvd2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkZBQUE7QUFDUjtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoiYm9ycm93ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUYW1tdWR1KzI6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4uYmFsdSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyBUYW1tdWR1IDJcIjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VKVv":
/*!****************************************************!*\
  !*** ./src/app/home/borrowers/borrowers.module.ts ***!
  \****************************************************/
/*! exports provided: BorrowersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowersPageModule", function() { return BorrowersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _borrowers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./borrowers-routing.module */ "pYvV");
/* harmony import */ var _borrowers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./borrowers.page */ "w6AL");







let BorrowersPageModule = class BorrowersPageModule {
};
BorrowersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _borrowers_routing_module__WEBPACK_IMPORTED_MODULE_5__["BorrowersPageRoutingModule"]
        ],
        declarations: [_borrowers_page__WEBPACK_IMPORTED_MODULE_6__["BorrowersPage"]]
    })
], BorrowersPageModule);



/***/ }),

/***/ "pYvV":
/*!************************************************************!*\
  !*** ./src/app/home/borrowers/borrowers-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BorrowersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowersPageRoutingModule", function() { return BorrowersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _borrowers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borrowers.page */ "w6AL");




const routes = [
    {
        path: '',
        component: _borrowers_page__WEBPACK_IMPORTED_MODULE_3__["BorrowersPage"]
    }
];
let BorrowersPageRoutingModule = class BorrowersPageRoutingModule {
};
BorrowersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BorrowersPageRoutingModule);



/***/ }),

/***/ "w6AL":
/*!**************************************************!*\
  !*** ./src/app/home/borrowers/borrowers.page.ts ***!
  \**************************************************/
/*! exports provided: BorrowersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowersPage", function() { return BorrowersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_borrowers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./borrowers.page.html */ "IxNA");
/* harmony import */ var _borrowers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./borrowers.page.scss */ "UYXs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let BorrowersPage = class BorrowersPage {
    constructor(firestore, alertController) {
        this.firestore = firestore;
        this.alertController = alertController;
    }
    askDelete(helper) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert3 = yield this.alertController.create({
                subHeader: "Do you really want to delete staff?",
                mode: 'ios',
                buttons: [{
                        text: 'Yes',
                        handler: data => {
                            this.delete(helper);
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
    getHelpers() {
        if (window.localStorage.getItem('helpers')) {
            this.helpers = JSON.parse(window.localStorage.getItem('helpers'));
            console.log("HELPERS:" + this.helpers.length);
            let helpers = [];
            this.helpers.forEach((element) => {
                console.log(element.length);
                this.firestore.collection("helpers").doc(element.id).valueChanges().subscribe((res) => {
                    if (res == undefined) {
                    }
                    else {
                        element.helperphone = res.phone;
                        helpers.push(element);
                    }
                });
            });
            this.helpers = helpers;
            console.log(this.helpers);
            //window.localStorage.setItem("helpers",JSON.stringify(this.helpers));
        }
        else {
            this.helpers = [];
        }
    }
    delete(helper) {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user.docID);
        console.log(helper.id);
        console.log("CALLING THE DELETE CODE");
        this.firestore.collection("helpers").doc(helper.id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
        });
        let newhelpers = [];
        this.helpers.forEach((element) => {
            console.log(element.id);
            console.log(helper.id);
            console.log(element.id == helper.id);
            if (element.id == helper.id) {
            }
            else {
                newhelpers.push(element);
            }
        });
        console.log(newhelpers.length);
        this.helpers = newhelpers;
        window.localStorage.setItem("helpers", JSON.stringify(this.helpers));
        this.firestore.collection('stores').doc(this.user.docID).update({
            helper: this.helpers
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getHelpers();
    }
};
BorrowersPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
BorrowersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-borrowers',
        template: _raw_loader_borrowers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrowers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BorrowersPage);



/***/ })

}]);
//# sourceMappingURL=borrowers-borrowers-module.js.map