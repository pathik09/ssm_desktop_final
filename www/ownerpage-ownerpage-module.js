(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ownerpage-ownerpage-module"],{

/***/ "/9G+":
/*!*******************************************************!*\
  !*** ./src/app/ownerpage/ownerpage-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OwnerpagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerpagePageRoutingModule", function() { return OwnerpagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ownerpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ownerpage.page */ "KLAJ");




const routes = [
    {
        path: '',
        component: _ownerpage_page__WEBPACK_IMPORTED_MODULE_3__["OwnerpagePage"]
    }
];
let OwnerpagePageRoutingModule = class OwnerpagePageRoutingModule {
};
OwnerpagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OwnerpagePageRoutingModule);



/***/ }),

/***/ "DGkN":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownerpage/ownerpage.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Please enter your mobile number</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-row>\n    <ion-col>\n      <ion-input [(ngModel)]=\"mno\" type=\"number\" placeholder=\"Enter your mobile number associated with ssm..\"></ion-input> \n    </ion-col>\n      <ion-col size=\"12\">\n        <ion-button type=\"submit\" (click)=\"fetchData()\" expand=\"full\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n   \n    \n  \n</ion-content>");

/***/ }),

/***/ "KLAJ":
/*!*********************************************!*\
  !*** ./src/app/ownerpage/ownerpage.page.ts ***!
  \*********************************************/
/*! exports provided: OwnerpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerpagePage", function() { return OwnerpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ownerpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ownerpage.page.html */ "DGkN");
/* harmony import */ var _ownerpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ownerpage.page.scss */ "cRZY");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "F7eh");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");









let OwnerpagePage = class OwnerpagePage {
    constructor(iap, firestore, router, auth, oneSignal) {
        this.iap = iap;
        this.firestore = firestore;
        this.router = router;
        this.auth = auth;
        this.oneSignal = oneSignal;
        this.userTyp = ["Trial", "Paid"];
        this.newShop = true;
        this.selectedPlan = "Trial";
        this.name = "sample";
        this.address = "sample";
        this.referal = "";
    }
    ngOnInit() {
    }
    fetchData() {
        this.user = [];
        const num = '+91' + this.mno;
        const sub = this.firestore
            .collection("stores", (q) => q.where("owner", "==", num))
            .valueChanges()
            .subscribe((r) => {
            console.log(r);
            this.user = JSON.parse(window.localStorage.getItem('user'));
            this.user.uType = 'Owner';
            window.localStorage.setItem('user', JSON.stringify(this.user));
            console.log(this.user.email);
            if (r[0].desktopemail == this.user.email) {
                window.localStorage.setItem('storeInfo', JSON.stringify(r[0]));
                this.user.docID = r[0].docID;
                this.user.paid = r[0].paid;
                window.localStorage.setItem("endDate", r[0].endDate);
                window.localStorage.setItem("paid", "1");
                window.localStorage.setItem("basic", "1");
                this.user.playerID = window.localStorage.getItem('playerID');
                console.log(r[0]);
                this.items = r[0].items;
                this.staff = r[0].helper;
                this.suppliers = r[0].suppliers;
                //console.log(this.staff);
                //console.log(this.staff != undefined)
                console.log(this.user);
                window.localStorage.setItem('user', JSON.stringify(this.user));
                if (this.items != undefined) {
                    window.localStorage.setItem('items', JSON.stringify(this.items));
                }
                if (this.staff != undefined) {
                    window.localStorage.setItem('helpers', JSON.stringify(this.staff));
                }
                if (this.suppliers != undefined) {
                    window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
                }
                this.router.navigate(['home/dashboard']);
                sub.unsubscribe();
            }
            else {
                this.router.navigate(['not-authorized']);
            }
        });
    }
    startTrial() {
        var myCurrentDate = new Date();
        var expiry = new Date(myCurrentDate);
        expiry.setDate(expiry.getDate() + 15);
        var owner = this.auth.auth.currentUser.phoneNumber;
        console.log("PlayerId" + this.user.playerId);
        const data = {
            referal: this.referal,
            selectedPlan: "",
            expiry: "",
            creationTime: new Date(),
            owner,
            paid: 0,
            maxStockIndex: 0,
            playerID: this.user.playerId //  playerId:this.playerID
        };
        this.firestore.collection('stores').add(data).then((data2) => {
            window.localStorage.setItem('storeInfo', JSON.stringify(data));
            console.log(data2.id);
            this.user.docID = data2.id;
            const docID = data2.id;
            this.firestore.collection('stores').doc(data2.id).update({ docID });
            window.localStorage.setItem('user', JSON.stringify(this.user));
            this.router.navigate(['home/dashboard']);
        }).catch(err => alert(err.message));
    }
    getplayerID() {
        console.log("getplayerId() called");
        alert("we are in the getplayerid()  method");
        this.oneSignal.getIds().then(identity => {
            const deviceID = identity.userId;
            alert("Unique Id for device is " + deviceID);
            this.playerID = deviceID;
            this.auth.authState.subscribe(user => {
                //this.userID = user.uid;
                this.firestore.collection('users').doc(user.uid).update({
                    deviceID
                }).then(() => {
                    console.log('player id got and updated');
                }).catch(err => {
                    alert(err);
                    console.log('unable to get id');
                    this.getplayerID();
                });
            });
        });
    }
    paymentProceed() {
        this.iap
            .getProducts(['prod1', 'prod2'])
            .then((products) => {
            console.log(products);
            //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
        })
            .catch((err) => {
            alert(err.message);
        });
        this.iap
            .buy('prod1')
            .then((data) => {
            console.log(data);
            // {
            //   transactionId: ...
            //   receipt: ...
            //   signature: ...
            // }
        })
            .catch((err) => {
            alert(err.message);
        });
    }
};
OwnerpagePage.ctorParameters = () => [
    { type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppPurchase"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] }
];
OwnerpagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ownerpage',
        template: _raw_loader_ownerpage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ownerpage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OwnerpagePage);



/***/ }),

/***/ "cRZY":
/*!***********************************************!*\
  !*** ./src/app/ownerpage/ownerpage.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap\");\nion-select {\n  width: 100%;\n  color: black;\n  font-family: \"Noto Sans JP\", sans-serif;\n  text-align: center;\n  max-height: 0.7em;\n  position: relative;\n}\nh2 {\n  font-family: \"Noto Sans JP\", sans-serif;\n}\nion-input {\n  min-height: 2em;\n  font-family: \"Noto Sans JP\";\n  font-size: 18px;\n  color: black;\n}\n.line-input {\n  margin: 0 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n.line-input ion-item {\n  --border-color: transparent !important;\n  --highlight-height: 0;\n  border: 1px solid rgba(0, 0, 0, 0.514);\n  border-radius: 4px;\n}\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 1rem !important;\n}\n.line-input ion-item ion-input {\n  font-family: \"Noto Sans JP\", sans-serif;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL293bmVycGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1EsaUZBQUE7QUFDQSxpR0FBQTtBQVZSO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBR0E7RUFDSSx1Q0FBQTtBQUFKO0FBRUE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUFJO0VBQ0ksc0NBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFRO0VBQ0ksbURBQUE7QUFFWjtBQUNRO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ1o7QUFDUTtFQUNJLHVDQUFBO0VBQ0EsWUFBQTtBQUNaIiwiZmlsZSI6Im93bmVycGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEpQXCIsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC1oZWlnaHQ6IDAuN2VtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zK0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcbn1cbmlvbi1pbnB1dCB7XG4gICAgbWluLWhlaWdodDogMmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5saW5lLWlucHV0IHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUxNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMGRhMDJkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "dXxy":
/*!***********************************************!*\
  !*** ./src/app/ownerpage/ownerpage.module.ts ***!
  \***********************************************/
/*! exports provided: OwnerpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerpagePageModule", function() { return OwnerpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ownerpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ownerpage-routing.module */ "/9G+");
/* harmony import */ var _ownerpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ownerpage.page */ "KLAJ");







let OwnerpagePageModule = class OwnerpagePageModule {
};
OwnerpagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ownerpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["OwnerpagePageRoutingModule"]
        ],
        declarations: [_ownerpage_page__WEBPACK_IMPORTED_MODULE_6__["OwnerpagePage"]]
    })
], OwnerpagePageModule);



/***/ })

}]);
//# sourceMappingURL=ownerpage-ownerpage-module.js.map