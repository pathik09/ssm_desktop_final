(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-info-business-info-module"],{

/***/ "0hJA":
/*!*****************************************************!*\
  !*** ./src/app/business-info/business-info.page.ts ***!
  \*****************************************************/
/*! exports provided: BusinessInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessInfoPage", function() { return BusinessInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_business_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./business-info.page.html */ "mhsm");
/* harmony import */ var _business_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-info.page.scss */ "jIpl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");






let BusinessInfoPage = class BusinessInfoPage {
    constructor(firestore, router) {
        this.firestore = firestore;
        this.router = router;
    }
    continue() {
        if (this.gstin == undefined) {
            this.gstin = "";
        }
        if (this.email == undefined || this.name == undefined || this.mobile == undefined || this.city == undefined || this.company_name == undefined || this.address == undefined || this.zipcode == undefined || this.panno == undefined) {
            alert("all fields are required except gstin");
        }
        console.log(this.name);
        console.log(this.bname);
        //console.log(this.mobille);
        this.user = JSON.parse(window.localStorage.getItem('user'));
        let data = {
            name: this.name,
            bname: this.company_name,
            address: this.address,
            mobile: this.mobile,
            city: this.city,
            zipcode: this.zipcode,
            gstin: this.gstin,
            panno: this.panno,
            email: this.email
        };
        this.firestore.collection('stores').doc(this.user.docID).update({
            storeInfo: data
        }).then(data2 => console.log('data2')).catch((err) => {
            alert("all fields are required except gstin");
            //this.salesToBeUpload.push(data);
            //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
            //sub.unsubscribe();
        });
        window.localStorage.setItem("storeInfo", JSON.stringify(data));
        this.router.navigate(["home/settings"]);
    }
    setchoice(abc) {
    }
    scanBarcode() {
    }
    ngOnInit() {
        //this.user = JSON.parse(window.localStorage.getItem('user'))
    }
    close() {
        this.router.navigate(['home/settings']);
    }
};
BusinessInfoPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BusinessInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-business-info',
        template: _raw_loader_business_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_business_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BusinessInfoPage);



/***/ }),

/***/ "ck3h":
/*!***************************************************************!*\
  !*** ./src/app/business-info/business-info-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: BusinessInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessInfoPageRoutingModule", function() { return BusinessInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _business_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business-info.page */ "0hJA");




const routes = [
    {
        path: '',
        component: _business_info_page__WEBPACK_IMPORTED_MODULE_3__["BusinessInfoPage"]
    }
];
let BusinessInfoPageRoutingModule = class BusinessInfoPageRoutingModule {
};
BusinessInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusinessInfoPageRoutingModule);



/***/ }),

/***/ "eIT4":
/*!*******************************************************!*\
  !*** ./src/app/business-info/business-info.module.ts ***!
  \*******************************************************/
/*! exports provided: BusinessInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessInfoPageModule", function() { return BusinessInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _business_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-info-routing.module */ "ck3h");
/* harmony import */ var _business_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-info.page */ "0hJA");







let BusinessInfoPageModule = class BusinessInfoPageModule {
};
BusinessInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _business_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessInfoPageRoutingModule"]
        ],
        declarations: [_business_info_page__WEBPACK_IMPORTED_MODULE_6__["BusinessInfoPage"]]
    })
], BusinessInfoPageModule);



/***/ }),

/***/ "jIpl":
/*!*******************************************************!*\
  !*** ./src/app/business-info/business-info.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap\");\nion-item {\n  background: white !important;\n  border: 1px solid black;\n  border-radius: 14px;\n  width: 70%;\n}\nion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.shadow-red {\n  border-radius: 10px;\n}\nion-card {\n  min-width: 90%;\n  padding: 15px;\n}\n.container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.h-divider {\n  margin: auto;\n  margin-top: 80px;\n  width: 80%;\n  position: relative;\n}\n.h-divider .shadow {\n  overflow: hidden;\n  height: 20px;\n}\n.h-divider .shadow:after {\n  content: \"\";\n  display: block;\n  margin: -25px auto 0;\n  width: 100%;\n  height: 25px;\n  border-radius: 125px/12px;\n  box-shadow: 0 0 8px black;\n}\n.h-divider .text {\n  width: 100px;\n  height: 45px;\n  padding: 10px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: -22px;\n  left: 50%;\n  margin-left: -60px;\n  border-radius: 100%;\n  box-shadow: 0 2px 4px rgba(59, 5, 5, 0.123);\n  background: white;\n  font-family: verdana;\n}\n.h-divider .text i {\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  left: 4px;\n  right: 4px;\n  border-radius: 100%;\n  border: 1px solid #aaa;\n  text-align: center;\n  line-height: 50px;\n  font-style: normal;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1c2luZXNzLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGUSw4RkFBQTtBQXJGUjtFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFFSjtBQURJO0VBQ0ksbURBQUE7QUFHUjtBQUFBO0VBQ0ksbUJBQUE7QUFHSjtBQURBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFJSjtBQURBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0FBSUo7QUFEQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUlKO0FBREU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFJSjtBQURFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUlKO0FBREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSUo7QUFERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSUoiLCJmaWxlIjoiYnVzaW5lc3MtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgJi5pdGVtLWhhcy1mb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMGRhMDJkKTtcbiAgICB9XG59XG4uc2hhZG93LXJlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmgtZGl2aWRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5oLWRpdmlkZXIgLnNoYWRvdyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5oLWRpdmlkZXIgLnNoYWRvdzphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAtMjVweCBhdXRvIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEyNXB4LzEycHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCBibGFjaztcbiAgfVxuICBcbiAgLmgtZGl2aWRlciAudGV4dCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIycHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDU5LCA1LCA1LCAwLjEyMyk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XG4gIH1cbiAgXG4gIC5oLWRpdmlkZXIgLnRleHQgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICByaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4iXX0= */");

/***/ }),

/***/ "mhsm":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business-info/business-info.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n \r\n  <ion-toolbar style=\"--background:  rgb(58, 43, 43);  /* fallback for old browsers */\r\n \r\n  \">   <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Add Information \r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"choice == ''\">\r\n\r\n  <div class=\"container\">\r\n    <div style=\"width: 90%;\" class=\"vertical-center\">\r\n      <ion-card mode=\"ios\" button (click)=\"scanBarcode()\" style=\"text-align: center;\">\r\n        <img src=\"../../assets/barcode.png\" />\r\n        <ion-card-header>\r\n          <ion-card-title style=\"font-family: impact;color: rgba(0, 0, 0, 0.644);\"> SHOW LEDGER REPORT\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <div class=\"h-divider\">\r\n        <div class=\"shadow\"></div>\r\n        <div class=\"text\"><i>Add b/s info</i></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-content >\r\n  <div style=\"display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n    <div\r\n      style=\"margin-top: 1em;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;\">\r\n\r\n      <h2 style=\"font-family: 'Roboto Condensed', sans-serif;font-size:29px\">\r\n        ADD YOUR BUSINESS INFORMATION\r\n      </h2>\r\n\r\n    \r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input placeholder=\"Enter Your name\" [(ngModel)]=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter your company/shop name\" [(ngModel)]=\"company_name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"tel\" placeholder=\"Enter your phone number\" [(ngModel)]=\"mobile\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Your Address\" [(ngModel)]=\"address\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Your city\" [(ngModel)]=\"city\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"tel\" placeholder=\"Enter Your zipcode\" [(ngModel)]=\"zipcode\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Your gstin number\" [(ngModel)]=\"gstin\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Your pan number\" [(ngModel)]=\"panno\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"margin-top: 15px;\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter Your email address\" [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <div style=\"margin-top: 25px;width: 60%;\">\r\n        <ion-button class=\"shadow-red\" (click)=\"continue()\" color=\"none\" style=\"background: #2b5876;  /* fallback for old browsers */\r\n        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n        background: linear-gradient(to right, #4e4376, #2b5876);\" expand='block' mode='ios'>\r\n          <p style=\"font-family: Impact;color: rgba(255, 255, 255, 0.897);\">\r\n            Continue\r\n          </p>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  \r\n\r\n</ion-content >\r\n\r\n ");

/***/ })

}]);
//# sourceMappingURL=business-info-business-info-module.js.map