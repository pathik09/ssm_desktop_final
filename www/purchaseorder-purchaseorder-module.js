(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchaseorder-purchaseorder-module"],{

/***/ "9Od+":
/*!*******************************************************!*\
  !*** ./src/app/purchaseorder/purchaseorder.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZW9yZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VkCb":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/purchaseorder/purchaseorder.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\n      <ion-button slot=\"icon\">\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios ion-text-capitalize\"> Purchase Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"PrintInvoice\">\n    <table style=\"border:1px solid #999999;\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb\">\n      <tbody>\n        <tr>\n          <td height=\"35\" colspan=\"4\" align=\"center\" class=\"txt\" style=\"border-bottom:1px solid #ddd; color:#d04e00; font-weight:800; font-family: 'Muli', sans-serif;\">Purchase Order</td>\n        </tr>\n        <tr>\n          <td>&nbsp;</td>\n          <td colspan=\"2\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tbody>\n              <tr>\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\" >GSTIN : {{gstin}} </td>\n                </tr>\n              <tr>\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Pan No : {{panno}}</td>\n                </tr>\n              <tr>\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Office : {{address}}</td>\n                </tr>\n              <tr>\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Email:{{email}}</td>\n                </tr>\n           </tbody>\n          </table></td>\n          <td>&nbsp;</td>\n        </tr>\n        <tr>\n          <td height=\"36\" colspan=\"4\">&nbsp;</td>\n        </tr>\n        <tr>\n          <td width=\"3%\">&nbsp;</td>\n          <td colspan=\"2\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb1\">\n            <tbody>\n              <tr>\n                <td><table style=\"border:1px solid #999999;\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tbody>\n                    <tr>\n                      <td width=\"16%\" height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">VENDOR </span></strong></td>\n                      <td width=\"49%\"><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\"></span></td>\n                      <td width=\"20%\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">SHIP TO:</span></strong></td>\n                      <td width=\"15%\"><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\"></span></td>\n                    \n                    </tr>\n                    \n                    <tr>\n                      <td width=\"16%\" height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{supplier.company_name}} </span></strong></td>\n                      <td width=\"49%\"><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\"></span></td>\n                      <td width=\"20%\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{storeInfo.name}}</span></strong></td>\n                      <td width=\"15%\"><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\"></span></td>\n                    </tr>\n                    <tr>\n                      <td height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{supplier.address}}</span></strong></td>\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\"> </span></td>\n                      <td><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{storeInfo.address}} {{storeInfo.city}} {{storeInfo.zipcode}}</span></strong></td>\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\"></span></td>\n                    </tr>\n                    <tr>\n                      <td height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Contact No;</span></strong></td>\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{supplier.phone}}</span></td>\n                      <td><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Contact No</span></strong></td>\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{storeInfo.mobile}}</span></td>\n                   \n                      <td>&nbsp;</td>\n                      <td>&nbsp;</td>\n                    </tr>\n                  </tbody>\n                </table></td>\n              </tr>\n              <tr>\n                <td height=\"31\" style=\"border-top:1px solid #999999;\">&nbsp;</td>\n              </tr>\n              <tr  class=\"item\">\n                <td><table style=\"border:1px solid #999999;\" width=\"100%\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb2\">\n                  <tbody>\n                    <tr style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\n                     \n                      <td width=\"60%\" align=\"center\"><strong>Product Name </strong></td>\n                      <td width=\"8%\" align=\"center\"><strong>Qty </strong></td>\n                      <td width=\"12%\" align=\"center\"><strong>Rate </strong></td>\n                     \n                    </tr>\n                    <tr *ngFor=\"let product of purchaseorders\" style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\n                     \n                      <td align=\"center\"> {{product.name}}</td>\n                      <td align=\"center\">{{product.quantity}}</td>\n                      <td align=\"center\">{{product.pPrice}}</td>\n                     \n                    </tr>\n                    <tr style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\n                      <td height=\"30\" align=\"center\">&nbsp;</td>\n                      <td align=\"center\">&nbsp;</td>\n                      <td align=\"center\">&nbsp;</td>\n                      <td align=\"center\"><strong>TOTAL</strong></td>\n                      <td align=\"center\">&nbsp;{{total}}</td>\n                    </tr>\n                  </tbody>\n                </table></td>\n              </tr>\n              <tr>\n                <td>&nbsp;</td>\n              </tr>\n              <tr>\n                <td>&nbsp;</td>\n              </tr>\n            </tbody>\n          </table></td>\n          <td width=\"3%\">&nbsp;</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">&nbsp;</td>\n        </tr>\n        <tr>\n          <td height=\"32\">&nbsp;</td>\n          <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\" width=\"47%\" height=\"32\"><strong>Date : {{date}}</strong></td>\n        \n          <td height=\"32\">&nbsp;</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">&nbsp;</td>\n        </tr>\n        <tr>\n          <td height=\"72\">&nbsp;</td>\n          <td>&nbsp;</td>\n          <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\" align=\"right\" valign=\"bottom\"><strong>Authorised Signature</strong></td>\n          <td>&nbsp;</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">&nbsp;</td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n    \n    \n    \n    </ion-content>\n    <ion-footer (click)=\"downloadInvoice()\">\n      <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\n        <div class=\"ion-text-center\">\n          <h4 class=\"ion-no-margin\">Download Invoice</h4>\n        </div>\n      </ion-toolbar>\n    </ion-footer>\n    \n\n");

/***/ }),

/***/ "aaJQ":
/*!*****************************************************!*\
  !*** ./src/app/purchaseorder/purchaseorder.page.ts ***!
  \*****************************************************/
/*! exports provided: PurchaseorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderPage", function() { return PurchaseorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_purchaseorder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./purchaseorder.page.html */ "VkCb");
/* harmony import */ var _purchaseorder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchaseorder.page.scss */ "9Od+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_9__);










let PurchaseorderPage = class PurchaseorderPage {
    constructor(router, socialSharing, firestore) {
        this.router = router;
        this.socialSharing = socialSharing;
        this.firestore = firestore;
        this.total = 0;
        this.purchaseorders = new Array();
        this.purchaseorder = {};
    }
    closeModal() {
        this.router.navigate(['pos']);
    }
    downloadInvoice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("We are in the downloadInvoice");
            var node = document.getElementById('PrintInvoice');
            dom_to_image__WEBPACK_IMPORTED_MODULE_9___default.a.toPng(node)
                .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                console.log(dataUrl);
                var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["default"]();
                doc.addImage(dataUrl, 15, 30, 150, 100);
                doc.save("Purchase-Order.pdf");
                //document.body.appendChild(img);
            })
                .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        });
    }
    addPurchaseOrdertoFireBase(purchaseOrder, item) {
        this.paid = window.localStorage.getItem('paid');
        this.basic = window.localStorage.getItem('basic');
        console.log("we are in the method");
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
                [name]: firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion(purchaseOrder)
            }).then(data => console.log(data)).catch((err) => {
            });
        }
        console.log(purchaseOrder);
        let purchaseorders = new Array();
        if (window.localStorage.getItem("purchaseorders")) {
            console.log(purchaseOrder);
            let purchaseorders = JSON.parse(window.localStorage.getItem("purchaseorder"));
            console.log(purchaseOrder);
            purchaseorders.push(purchaseOrder);
            console.log(purchaseorders);
            window.localStorage.setItem('purchaseorder', JSON.stringify(purchaseorders));
        }
        else {
            console.log(purchaseOrder);
            purchaseorders.push(purchaseOrder);
            window.localStorage.setItem('purchaseorder', JSON.stringify(purchaseorders));
        }
    }
    ngOnInit() {
        this.basic = window.localStorage.getItem('basic');
        this.user = JSON.parse(window.localStorage.getItem('user'));
        var purchaseOrder = {};
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();
        this.date = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
        this.storeInfo = JSON.parse(window.localStorage.getItem("storeInfo"));
        console.log(this.storeInfo);
        console.log("BASIC******" + this.basic);
        if (this.user.uType == 1 || this.basic == 1) {
            console.log("WE SHOULD BE HERE*******");
            this.business_name = this.storeInfo.bname;
            this.name = this.storeInfo.name;
            this.address = this.storeInfo.address;
            this.city = this.storeInfo.city;
            this.zipcode = this.storeInfo.zipcode;
            this.gstin = this.storeInfo.gstin;
            this.panno = this.storeInfo.panno;
            this.email = this.storeInfo.email;
        }
        else {
            this.business_name = "Smart Stock Management";
            this.address = "Smart Stock Management";
            this.city = "Smart Stock Management";
            this.zipcode = "Smart Stock Management";
            this.gstin = "Smart Stock Management";
            this.panno = this.storeInfo.panno;
            this.email = this.storeInfo.email;
        }
        this.items = JSON.parse(window.localStorage.getItem('po'));
        this.supplier = JSON.parse(window.localStorage.getItem('selectsupplier'));
        this.purchaseorders = this.items;
        this.total = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].pPrice == 0) {
                alert("Please define the purchase price for item " + this.items[i].name + " before proceeding.");
                this.router.navigate(['home/inventory']);
                return;
            }
            this.purchaseorder.stock = this.items[i].quantity;
            this.total = this.total + this.items[i].pPrice * this.items[i].quantity;
        }
        console.log(this.total);
        console.log(this.purchaseorders);
        this.sendMessageTOSupplier();
        console.log(this.purchaseorders);
    }
    sendMessageTOSupplier() {
        let itemString = "";
        for (let i = 0; i < this.items.length; i++) {
            itemString = itemString.concat("Item Name  " + this.items[i].name + "  Item Quantity  " + this.items[i].quantity + ",");
            this.purchaseorder.item_name = this.items[i].name;
            this.purchaseorder.price = this.items[i].pPrice;
            this.purchaseorder.item_index = this.items[i].index;
            this.purchaseorder.supplier = this.supplier;
            console.log("we are calling the method");
            this.addPurchaseOrdertoFireBase(this.purchaseorder, this.items[i]);
        }
        console.log("ITEM STRING " + itemString);
        this.socialSharing.shareViaWhatsAppToReceiver(this.supplier.phone, "Hi " + this.supplier.name + " ,PurchasseOrder has been generated at for your client, " + this.storeInfo.bname + "for, " + itemString);
    }
};
PurchaseorderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
PurchaseorderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-purchaseorder',
        template: _raw_loader_purchaseorder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_purchaseorder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PurchaseorderPage);



/***/ }),

/***/ "jA/3":
/*!*******************************************************!*\
  !*** ./src/app/purchaseorder/purchaseorder.module.ts ***!
  \*******************************************************/
/*! exports provided: PurchaseorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderPageModule", function() { return PurchaseorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _purchaseorder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchaseorder-routing.module */ "rXGe");
/* harmony import */ var _purchaseorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchaseorder.page */ "aaJQ");







let PurchaseorderPageModule = class PurchaseorderPageModule {
};
PurchaseorderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _purchaseorder_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchaseorderPageRoutingModule"]
        ],
        declarations: [_purchaseorder_page__WEBPACK_IMPORTED_MODULE_6__["PurchaseorderPage"]]
    })
], PurchaseorderPageModule);



/***/ }),

/***/ "rXGe":
/*!***************************************************************!*\
  !*** ./src/app/purchaseorder/purchaseorder-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PurchaseorderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderPageRoutingModule", function() { return PurchaseorderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _purchaseorder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchaseorder.page */ "aaJQ");




const routes = [
    {
        path: '',
        component: _purchaseorder_page__WEBPACK_IMPORTED_MODULE_3__["PurchaseorderPage"]
    }
];
let PurchaseorderPageRoutingModule = class PurchaseorderPageRoutingModule {
};
PurchaseorderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PurchaseorderPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=purchaseorder-purchaseorder-module.js.map