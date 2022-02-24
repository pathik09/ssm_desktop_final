(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'dashboard',
                children: [
                    {
                        pathMatch: 'full',
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | home-dashboard-dashboard-module */ "home-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../home/dashboard/dashboard.module */ "2owQ")).then(m => m.DashboardPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        pathMatch: 'full',
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | home-settings-settings-module */ "home-settings-settings-module").then(__webpack_require__.bind(null, /*! ../home/settings/settings.module */ "RtnV")).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: 'inventory',
                children: [
                    {
                        pathMatch: 'full',
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | inventory-inventory-module */[__webpack_require__.e("common"), __webpack_require__.e("inventory-inventory-module")]).then(__webpack_require__.bind(null, /*! ./inventory/inventory.module */ "HLVB")).then(m => m.InventoryPageModule)
                    }
                ]
            },
            {
                path: 'borrowers',
                children: [
                    {
                        pathMatch: 'full',
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | borrowers-borrowers-module */ "borrowers-borrowers-module").then(__webpack_require__.bind(null, /*! ./borrowers/borrowers.module */ "VKVv")).then(m => m.BorrowersPageModule)
                    }
                ]
            },
            {
                path: 'customer',
                children: [
                    {
                        pathMatch: 'full',
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | customer-customer-module */[__webpack_require__.e("default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "Qx6m")).then(m => m.CustomerPageModule)
                    }
                ]
            },
            {
                path: 'suppliers',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | suppliers-suppliers-module */ "suppliers-suppliers-module").then(__webpack_require__.bind(null, /*! ./suppliers/suppliers.module */ "RDzj")).then(m => m.SuppliersPageModule)
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'home/inventory',
        pathMatch: 'full'
    },
    {
        path: 'customer',
        loadChildren: () => Promise.all(/*! import() | customer-customer-module */[__webpack_require__.e("default~add-customer-add-customer-module~customer-customer-module~pos-pos-module~select-customer-sel~f3f42a44"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "Qx6m")).then(m => m.CustomerPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n  <div *ngIf=\"usertype=='Owner'\">\r\n  <ion-tab-bar style=\"--background: rgba(255, 255, 255, 0.164)  \" slot=\"bottom\">\r\n    \r\n    <ion-tab-button tab=\"dashboard\" layout=\"icon-top\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n    \r\n\r\n\r\n    <ion-tab-button tab=\"inventory\" layout=\"icon-top\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label>Inventory</ion-label>\r\n    </ion-tab-button>\r\n\r\n     <ion-tab-button tab=\"borrowers\" layout=\"icon-top\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Staff</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"customer\" layout=\"icon-top\">\r\n      <ion-icon name=\"happy-outline\"></ion-icon>\r\n      <ion-label>Customer</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n\r\n    <ion-tab-button tab=\"suppliers\" layout=\"icon-top\">\r\n      <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n      <ion-label>Suppliers</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"settings\" layout=\"icon-top\">\r\n      <ion-icon name=\"cog\"></ion-icon>\r\n      <ion-label>Settings</ion-label>\r\n    </ion-tab-button>\r\n \r\n  </ion-tab-bar>\r\n</div>\r\n\r\n</ion-tabs>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _add_item_add_item_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-item/add-item.page */ "w6bI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-supplier/add-supplier.page */ "88it");
/* harmony import */ var _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select-supplier/select-supplier.page */ "mLb4");
/* harmony import */ var _excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../excel-import/excel-import.page */ "kc0D");












let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        entryComponents: [_add_item_add_item_page__WEBPACK_IMPORTED_MODULE_7__["AddItemPage"], _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_9__["AddSupplierPage"], _select_supplier_select_supplier_page__WEBPACK_IMPORTED_MODULE_10__["SelectSupplierPage"], _excel_import_excel_import_page__WEBPACK_IMPORTED_MODULE_11__["ExcelImportPage"]],
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  bottom: 2px;\n  position: relative;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n  width: 95%;\n  margin: 0 auto;\n  border: none;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n}\n\nion-tab-button {\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-primary);\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLHdDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLDBDQUFBO0FBQUY7O0FBRUU7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSwwQ0FBQTtBQURKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjE0cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTRweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBcclxuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG5cclxuICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "fm+l":
/*!********************************************!*\
  !*** ./src/app/utility-methods.service.ts ***!
  \********************************************/
/*! exports provided: UtilityMethodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityMethodsService", function() { return UtilityMethodsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let UtilityMethodsService = class UtilityMethodsService {
    constructor(router, firestore, auth) {
        this.router = router;
        this.firestore = firestore;
        this.auth = auth;
    }
    checkPaid() {
        // alert(this.cart.checkSubscribe());
        this.user = JSON.parse(window.localStorage.getItem('user'));
        //console.log(this.user.uType);
        this.endDate = window.localStorage.getItem("endDate");
        let endDates = new Date(this.endDate);
        if (this.compareDates(endDates, new Date()) < 0) {
            window.localStorage.clear();
            this.firestore.collection("stores").doc(this.user.docID).update({
                desktopemail: ''
            });
            this.router.navigate(['login']);
        }
    }
    checkForBasicService() {
        // this.user = JSON.parse(window.localStorage.getItem('user'))
        // console.log(this.user);
        //this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res:any)=>{
        // this.basic = res.basic;
        //})
        //if(this.basic==1)
        //{window.localStorage.setItem("basic","1")}
        //else{
        //window.localStorage.setItem("basic","0")
        //}
    }
    compareDates(date1, date2) {
        // With Date object we can compare dates them using the >, <, <= or >=.
        // The ==, !=, ===, and !== operators require to use date.getTime(),
        // so we need to create a new instance of Date with 'new Date()'
        let d1 = date1;
        let d2 = date2;
        // Check if the dates are equal
        // Check if the first is greater than second
        if (d1 > d2)
            return 1;
        // Check if the first is less than second
        if (d1 < d2)
            return -1;
    }
    selfExpireStaff() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user.docID);
        console.log(this.user);
        if (this.user.uType == 'Owner') {
            this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res) => {
                this.endDate = res.endDate;
            });
            if (this.endDate > new Date()) {
                this.firestore.collection('helpers').doc(this.user.helperid).update({});
                return this.auth.auth.signOut().then(() => {
                    window.localStorage.removeItem('user');
                    this.router.navigate(['auth']);
                });
            }
        }
    }
};
UtilityMethodsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
UtilityMethodsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilityMethodsService);



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _utility_methods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility-methods.service */ "fm+l");








let HomePage = class HomePage {
    constructor(router, platform, firestore, utility) {
        this.router = router;
        this.platform = platform;
        this.firestore = firestore;
        this.utility = utility;
        this.backDisbale = this.platform.backButton.subscribeWithPriority(999, () => {
            navigator['app'].exitApp();
        });
    }
    gotoPage(pagename) {
        this.router.navigate([pagename]);
    }
    ionViewWillEnter() {
        this.utility.checkPaid();
        this.utility.checkForBasicService();
        this.paid = 0;
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.usertype = this.user.uType;
        if (this.usertype == 1) {
            this.paid = 1;
            window.localStorage.setItem("paid", this.paid);
        }
        this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res) => {
            console.log("paid in firestore is" + res.paid);
            //    this.paid = res.paid;
            //  this.basic = res.basic;
            console.log("Here basic is " + this.basic);
            // window.localStorage.setItem("paid",this.paid);
            if (this.paid == 1) {
                this.basic = 1;
                this.items = res.items;
                this.customers = res.customers;
                this.suppliers = res.suppliers;
                this.purchaseorders = res.purchaseorder;
                this.storeInfo = res.storeInfo;
                this.helpers = res.helper;
                this.owner = res.owner;
                console.log("WE ARE HERE" + this.paid);
                console.log("HELPERS:" + this.helpers);
                if (this.helpers == undefined) {
                    this.helpers = [];
                }
                if (this.items == undefined) {
                    this.items = [];
                }
                if (this.suppliers == undefined) {
                    this.suppliers = [];
                }
                if (this.customers == undefined) {
                    this.customers = [];
                }
                if (this.purchaseorders == undefined) {
                    this.purchaseorders = [];
                }
                if (this.storeInfo == undefined) {
                    this.storeInfo = [];
                }
                console.log("items is" + this.items);
                console.log("paid is" + this.paid);
                window.localStorage.setItem("paid", this.paid);
                window.localStorage.setItem('items', JSON.stringify(this.items));
                window.localStorage.setItem('items', JSON.stringify(this.items));
                window.localStorage.setItem('customers', JSON.stringify(this.customers));
                window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
                window.localStorage.setItem('basic', this.basic);
                window.localStorage.setItem('purchaseOrders', JSON.stringify(this.purchaseorders));
                window.localStorage.setItem('storeInfo', JSON.stringify(this.storeInfo));
                window.localStorage.setItem('helpers', JSON.stringify(this.helpers));
                window.localStorage.setItem('owner', this.owner);
            }
            if (this.basic == undefined) {
                this.basic = 0;
            }
            if (this.paid == undefined) {
                this.paid = 0;
            }
            console.log('BASIC' + this.basic);
            window.localStorage.setItem("paid", "1");
            window.localStorage.setItem("basic", "1");
        });
        console.log("paid is" + this.paid);
        //window.localStorage.setItem('basic',this.basic)
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _utility_methods_service__WEBPACK_IMPORTED_MODULE_7__["UtilityMethodsService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map