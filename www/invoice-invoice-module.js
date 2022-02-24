(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "6MpR":
/*!*****************************************!*\
  !*** ./src/app/invoice/invoice.page.ts ***!
  \*****************************************/
/*! exports provided: InvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePage", function() { return InvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice.page.html */ "TRUz");
/* harmony import */ var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.page.scss */ "CZNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ "sVnM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ "K9io");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
var InvoicePage_1;











let InvoicePage = InvoicePage_1 = class InvoicePage {
    constructor(file, socialSharing, modalCtrl, pdfGenerator, router) {
        this.file = file;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.pdfGenerator = pdfGenerator;
        this.router = router;
        this.order = JSON.parse(window.localStorage.getItem("currentsale"));
        this.customer_exists = true;
        this.downlaoaded = false;
    }
    closeModal() {
        this.router.navigate(['pos']);
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ngOnInit() {
        console.log("WE ARE IN THE INVOICE");
        this.basic = window.localStorage.getItem('basic');
        this.user = JSON.parse(window.localStorage.getItem("user"));
        this.storeInfo = JSON.parse(window.localStorage.getItem("storeInfo"));
        this.invoice = "#" + this.randomIntFromInterval(11111, 99999);
        this.email = this.storeInfo.email;
        this.office = this.storeInfo.address + " " + this.storeInfo.city + " " + this.storeInfo.zipcode;
        if (this.basic == 1 || this.user.uType == 1) {
            this.business_name = this.storeInfo.bname;
        }
        else {
            this.business_name = "Smart Stock Management";
            this.email = "Smart Stock Management";
            this.office = "Smart Stock Management";
        }
        this.gstin_owner = this.storeInfo.gstin;
        this.panno = this.storeInfo.panno;
        console.log("GSTIN" + this.gstin);
        this.order = JSON.parse(window.localStorage.getItem("currentsale"));
        this.order.delivery_status = "delivered";
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();
        this.cgst = window.localStorage.getItem("cgst");
        this.sgst = window.localStorage.getItem("sgst");
        console.log("********CGST BEFORE******" + this.cgst);
        if (this.cgst == "null") {
            this.cgst = 0;
            this.sgst = 0;
        }
        console.log("CGST******" + this.cgst);
        console.log("SGST******+" + this.sgst);
        this.order.createdAt = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
        this.products = new Array();
        this.products = JSON.parse(window.localStorage.getItem("Products"));
        console.log(this.products);
        this.customer = JSON.parse(window.localStorage.getItem("selectcustomer"));
        console.log("ORder Information:", this.order);
        console.log("Customer" + this.customer);
        this.address = this.customer.address;
        this.cnumber = this.customer.mobile;
        this.cname = this.customer.name;
        this.gstin = this.customer.gstin;
        if (this.address == '' && this.cnumber == '' && this.cname == '' && this.gstin == '') {
            this.cname_header = '';
            this.gstin_header = '';
            this.address_header = '';
        }
        else {
            this.cname_header = "Client Name";
            this.gstin_header = 'GSTIN';
            this.address_header = "Address  ";
        }
        let product;
        //this.order = JSON.parse(this.order)
        //console.log("Order Products"+this.products)
        this.products = this.order.recipt;
        console.log("Order" + JSON.stringify(this.order.recipt));
    }
    openInvoice(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.order = JSON.parse(window.localStorage.getItem("currentsale"));
            this.order.delivery_status = "delivered";
            this.order.createdAt = "created";
            const InvoiceModal = yield this.createModal(InvoicePage_1, { order });
            yield InvoiceModal.present();
        });
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
                doc.addImage(dataUrl, 25, 40, 150, 100);
                doc.save("invoice.pdf");
                var blob = doc.output();
                console.log(blob);
                //document.body.appendChild(img);
            })
                .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        });
    }
    sendEmail() {
        this.socialSharing.canShareViaEmail().then(() => {
        }).catch(() => {
            // Sharing via email is not possible
        });
        this.socialSharing.shareViaEmail('Invoice has beenb generated fir you.', 'Invoice been sent', ['pathik09@gmail.com', '', '', "file///Downloads/" + "+Order-Invoice.pdf"]).then(() => {
            alert("email sent");
        }).catch(() => {
            // Error!
        });
    }
    createModal(component, componentProps, cssClass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component,
                cssClass,
                componentProps,
                backdropDismiss: true
            });
            return modal;
        });
    }
};
InvoicePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_5__["PDFGenerator"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
InvoicePage = InvoicePage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InvoicePage);



/***/ }),

/***/ "CZNA":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orderSummary p {\n  margin: 0;\n  color: gray;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin-right: 50px;\n}\n\n.subTitle {\n  margin-left: 20px;\n  text-decoration: line-through;\n}\n\n.print {\n  width: 140px;\n  height: 35px;\n  line-height: 32px;\n  text-align: center;\n  border: none;\n  border-radius: 20px;\n  background: #f60;\n  margin-bottom: 20px;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Muli\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUFHSjs7QUFERTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBR04iLCJmaWxlIjoiaW52b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJTdW1tYXJ5IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIGlvbi10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICB9XHJcbiAgLnN1YlRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG4gIC5wcmludFxyXG4gIHtcclxuICAgICAgd2lkdGg6MTQwcHg7XHJcbiAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDozMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgYmFja2dyb3VuZDojZjYwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "EbbV":
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageRoutingModule", function() { return InvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.page */ "6MpR");




const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_3__["InvoicePage"]
    }
];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {
};
InvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoicePageRoutingModule);



/***/ }),

/***/ "TRUz":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-button slot=\"icon\">\r\n        <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-ios ion-text-capitalize\">Order Invoice</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div id=\"PrintInvoice\">\r\n    <table style=\"border:1px solid #999999;\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb\">\r\n      <tbody>\r\n        <tr>\r\n          <td height=\"35\" colspan=\"4\" align=\"center\" class=\"txt\" style=\"border-bottom:1px solid #ddd; color:#d04e00; font-weight:800; font-family: 'Muli', sans-serif;\">Invoice</td>\r\n        </tr>\r\n        <tr>\r\n          <td>&nbsp;</td>\r\n          <td colspan=\"2\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n            <tbody>\r\n              <tr>\r\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\" >GSTIN : {{gstin_owner}} </td>\r\n                </tr>\r\n              <tr>\r\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Pan No : {{panno}}</td>\r\n                </tr>\r\n              <tr>\r\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Office : {{office}}</td>\r\n                </tr>\r\n              <tr>\r\n                <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Email:{{email}}</td>\r\n                </tr>   </tbody>\r\n          </table></td>\r\n          <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td height=\"36\" colspan=\"4\">&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td width=\"3%\">&nbsp;</td>\r\n          <td colspan=\"2\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb1\">\r\n            <tbody>\r\n              <tr>\r\n                <td><table style=\"border:1px solid #999999;\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td width=\"16%\" height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{cname_header}} </span></strong></td>\r\n                      <td width=\"49%\"><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{cname}}</span></td>\r\n                      <td width=\"20%\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Invoice Date</span></strong></td>\r\n                      <td width=\"15%\"><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{order.createdAt}}</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{address_header}}</span></strong></td>\r\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{address}} </span></td>\r\n                      <td><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">Invoice Number</span></strong></td>\r\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{invoice}}</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td height=\"25\"><strong><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{gstin_header}}</span></strong></td>\r\n                      <td><span style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">{{gstin}}</span></td>\r\n                      <td>&nbsp;</td>\r\n                      <td>&nbsp;</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table></td>\r\n              </tr>\r\n              <tr>\r\n                <td height=\"31\" style=\"border-top:1px solid #999999;\">&nbsp;</td>\r\n              </tr>\r\n              <tr  class=\"item\">\r\n                <td><table style=\"border:1px solid #999999;\" width=\"100%\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb2\">\r\n                  <tbody>\r\n                    <tr style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\r\n                     \r\n                      <td width=\"60%\" align=\"center\"><strong>Product Name </strong></td>\r\n                      <td width=\"8%\" align=\"center\"><strong>Qty </strong></td>\r\n                      <td width=\"12%\" align=\"center\"><strong>Rate </strong></td>\r\n                     \r\n                    </tr>\r\n                    <tr *ngFor=\"let product of products\" style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\r\n                     \r\n                      <td align=\"center\"> {{product.name}}</td>\r\n                      <td align=\"center\">{{product.quantity}}</td>\r\n                      <td align=\"center\">{{product.rPrice}}</td>\r\n                     \r\n                    </tr>\r\n                    <tr style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\r\n                      <td height=\"30\" align=\"center\">&nbsp;</td>\r\n                      <td align=\"center\">&nbsp;</td>\r\n                      <td align=\"center\">&nbsp;</td>\r\n                      <td align=\"center\"><strong>TOTAL</strong></td>\r\n                      <td align=\"center\">&nbsp;</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table></td>\r\n              </tr>\r\n              <tr>\r\n                <td>&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                <td><table width=\"100%\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" class=\"tb2\">\r\n                  <tbody>\r\n                    <tr style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\r\n                      <td width=\"7%\" height=\"48\" align=\"center\">&nbsp;</td>\r\n                      <td width=\"60%\" align=\"center\">&nbsp;</td>\r\n                      <td align=\"center\">Add CGST : <br>Add SGST :</td>\r\n                      <td width=\"13%\" align=\"center\">{{cgst}}<br>{{sgst}}</td>\r\n                    </tr>\r\n                    <tr style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\">\r\n                      <td height=\"31\" align=\"center\">&nbsp;</td>\r\n                      <td align=\"center\">&nbsp;</td>\r\n                      <td align=\"center\"><strong>Grand Total</strong></td>\r\n                      <td align=\"center\">{{order.total}}&nbsp;</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table></td>\r\n              </tr>\r\n              <tr>\r\n                <td>&nbsp;</td>\r\n              </tr>\r\n            </tbody>\r\n          </table></td>\r\n          <td width=\"3%\">&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\">&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td height=\"32\">&nbsp;</td>\r\n          <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\" width=\"47%\" height=\"32\"><strong>Date : {{order.createdAt}}</strong></td>\r\n        \r\n          <td height=\"32\">&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\">&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td height=\"72\">&nbsp;</td>\r\n          <td>&nbsp;</td>\r\n          <td style=\" font-size:13px; color:#000; padding:5px; font-family: 'Muli', sans-serif;\" align=\"right\" valign=\"bottom\"><strong>Authorised Signature</strong></td>\r\n          <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\">&nbsp;</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n    \r\n    </ion-content>\r\n    <div *ngIf=\"!downlaoaded\" >  \r\n\r\n<ion-footer (click)=\"downloadInvoice()\">\r\n  <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\r\n    <div class=\"ion-text-center\">\r\n      <h4 class=\"ion-no-margin\">Download Invoice</h4>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</div>\r\n<div *ngIf=\"downlaoaded\" >  \r\n\r\n  <ion-footer (click)=\"sendEmail()\">\r\n    <ion-toolbar color=\"success\" class=\"ion-padding-horizontal\">\r\n      <div class=\"ion-text-center\">\r\n        <h4 class=\"ion-no-margin\">Share Downloaded Invoice</h4>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n  </div>\r\n  ");

/***/ }),

/***/ "hdHI":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: InvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-routing.module */ "EbbV");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.page */ "6MpR");







let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoicePageRoutingModule"]
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]]
    })
], InvoicePageModule);



/***/ }),

/***/ "sVnM":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/pdf-generator/__ivy_ngcc__/ngx/index.js ***!
  \****************************************************************************/
/*! exports provided: PDFGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFGenerator", function() { return PDFGenerator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var PDFGenerator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PDFGenerator, _super);
    function PDFGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGenerator.prototype.fromURL = function (url, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fromURL", { "otherPromise": true }, arguments); };
    PDFGenerator.prototype.fromData = function (data, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fromData", { "otherPromise": true }, arguments); };
    PDFGenerator.pluginName = "PDFGenerator";
    PDFGenerator.plugin = "cordova-pdf-generator";
    PDFGenerator.pluginRef = "cordova.plugins.pdf";
    PDFGenerator.repo = "https://github.com/cesarvr/pdf-generator";
    PDFGenerator.platforms = ["Android", "iOS"];
PDFGenerator.ɵfac = function PDFGenerator_Factory(t) { return ɵPDFGenerator_BaseFactory(t || PDFGenerator); };
PDFGenerator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PDFGenerator, factory: function (t) { return PDFGenerator.ɵfac(t); }, providedIn: 'root' });
var ɵPDFGenerator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PDFGenerator);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PDFGenerator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return PDFGenerator;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcGRmLWdlbmVyYXRvci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFHUSxJQTJEMEIsZ0NBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQU1uRyw4QkFBTyxhQUFDLEdBQVcsRUFBRSxPQUE2QjtBQUtuQixJQU0vQiwrQkFBUSxhQUFDLElBQVksRUFBRSxPQUE2QjtBQUlmO0FBQThDO0FBQW1EO0FBQW9EO0FBQW9FO2dEQTFCL1AsVUFBVSxTQUFDLHNCQUNWLFVBQVUsRUFBRSxNQUFNO2VBQ25COzs7Ozs7OzBCQUNRO0FBQUMsdUJBaEVWO0FBQUUsRUFnRWdDLGlCQUFpQjtBQUNsRCxTQURZLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBERkdlbmVyYXRvck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGRvY3VtZW50IHNpemUsIGUuZy4sIEEyLCBBMywgb3IgQTQuXG4gICAqIE9ubHkgc3VwcG9ydGVkIG9uIGlPUy5cbiAgICogVGhlIGRlZmF1bHQgaXMgJ0E0Jy5cbiAgICovXG4gIGRvY3VtZW50U2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIHRvIGNoYW5nZSB0byBsYW5kc2NhcGUgb3JpZW50YXRpb24uXG4gICAqIERlZmF1bHQgaXMgJ3BvcnRyYWl0Jy5cbiAgICovXG4gIGxhbmRzY2FwZT86ICdsYW5kc2NhcGUnIHwgJ3BvcnRyYWl0JztcblxuICAvKipcbiAgICogVGhlIHR5cGUgdG8gYmUgcmV0dXJuZWQsIGVpdGhlciAnc2hhcmUnIG9yICdiYXNlNjQnLlxuICAgKiBJZiAnc2hhcmUgaXMgY2hvc2VuLCB0aGUgUERGIGlzIHNoYXJlZCB3aXRoIHRoZSBzeXN0ZW0gY2FwYWJpbGl0aWVzLlxuICAgKiBEZWZhdWx0IGlzICdiYXNlNjQnXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVzaXJlZCBmaWxlbmFtZSB0aGUgcmVzdWx0aW5nIFBERiBzaG91bGQgaGF2ZS5cbiAgICogRGVmYXVsdCBpcyAnZGVmYXVsdC5wZGYnXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIHRvIHNldCB0aGUgYmFzZSBVUkwgZm9yIHBhdGhpbmcuXG4gICAqIERlZmF1bHQgaXMgJ251bGwnLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBQREZHZW5lcmF0b3JcbiAqIEBkZXNjcmlwdGlvblxuICogU2ltcGxlIHBsdWdpbiB0byBnZW5lcmF0ZSAob2ZmbGluZSkgcGRmLiBUaGUgcGx1Z2luIHRyYW5zZm9ybXMgSFRNTCB0byBQREYgYW5kIGFsc28gcHJvdmlkZSB0aGUgbWVjaGFuaXNtIHRvIHNoYXJlIHRoZSBwZGYgdG8gb3RoZXIgYXBwcyBsaWtlIE1haWwsIGV0Yy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBERkdlbmVyYXRvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGRmLWdlbmVyYXRvcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwZGZHZW5lcmF0b3I6IFBERkdlbmVyYXRvcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wZGZHZW5lcmF0b3IuZnJvbVVSTCh1cmwsIG9wdGlvbnMpLnRoZW4oYmFzZTY0U3RyaW5nID0+IGNvbnNvbGUubG9nKGJhc2U2NFN0cmluZykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1BERkdlbmVyYXRvcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGRmLWdlbmVyYXRvcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5wZGYnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nlc2FydnIvcGRmLWdlbmVyYXRvcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQREZHZW5lcmF0b3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUERGIHVzaW5nIGEgVVJMLCBpdCBkb3dubG9hZCB0aGUgZG9jdW1lbnQgaW50byBhbiBpbiBtZW1vcnkgV2Via2l0IG9iamVjdCwgYW5kIHJlbmRlcnMgaXQgaW50byBhIFBERi5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVUkwgdG8gY3JlYXRlIGEgUERGIGZyb21cbiAgICogQHBhcmFtIG9wdGlvbnMge1BERkdlbmVyYXRvck9wdGlvbnN9IG9wdGlvbnMgZm9yIFBERiBnZW5lcmF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBmcm9tVVJMKHVybDogc3RyaW5nLCBvcHRpb25zPzogUERGR2VuZXJhdG9yT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBQREYgdXNpbmcgc3RyaW5nIHdpdGggdGhlIEhUTUwgcmVwcmVzZW50YXRpb24sIGl0IGRvd25sb2FkIHRoZSBkb2N1bWVudCBpbnRvIGFuIGluIG1lbW9yeSBXZWJraXQgb2JqZWN0LCBhbmQgcmVuZGVycyBpdCBpbnRvIGEgUERGLlxuICAgKiBAcGFyYW0gZGF0YSB7c3RyaW5nfSBIVE1MIHN0cmluZyByZXByZXNlbnRhdGlvbiB0byBjcmVhdGUgYSBQREYgZnJvbVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UERGR2VuZXJhdG9yT3B0aW9uc30gb3B0aW9ucyBmb3IgUERGIGdlbmVyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGZyb21EYXRhKGRhdGE6IHN0cmluZywgb3B0aW9ucz86IFBERkdlbmVyYXRvck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module.js.map