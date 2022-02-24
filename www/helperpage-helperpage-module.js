(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helperpage-helperpage-module"],{

/***/ "8cSn":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helperpage/helperpage.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <div class=\"wrapper\" style=\"position: relative;top: 75px;\r\n  \">\r\n\r\n    <div *ngIf=\"currentDiv=='one'\" style=\"position: relative;top:65px;\" class=\"fade-in one\">\r\n      <div style=\"text-align: center;\">\r\n        <img style=\"height: 10em;\" src=\"../../assets/logo.png\" alt=\"\">\r\n        <h2 style=\"font-weight: bold;\">JOIN AS A STAFF</h2>\r\n      </div>\r\n\r\n      <div\r\n        style=\"display: flex;justify-content: center;align-items: center;position: relative;top: 30px;flex-direction: column;text-align: left;\">\r\n        <ion-label\r\n          style=\"text-align: center;color: rgba(128, 58, 0, 0.74);display: flex;max-width: 80%;font-family: imapct;\">\r\n          Enter Shop\r\n          Owner\r\n          Number To\r\n          Request Joining As A Staff.\r\n\r\n        </ion-label>\r\n        <div style=\"width: 90%;display: flex;justify-content: center;flex-direction: column;margin-top: 15px;\">\r\n\r\n          <div style=\"display: flex;\">\r\n\r\n            <div style=\"width: 5%;\">\r\n\r\n            </div>\r\n            <div style=\"width: 65%;\">\r\n\r\n              <ion-list class=\"line-input\">\r\n                <ion-item lines=\"none\" color=\"none\">\r\n                  <ion-input type='tel' [(ngModel)]=\"phone\" maxlength=\"10\" ></ion-input>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <div style=\"margin-top: 15px;\">\r\n\r\n            <ion-button (click)=\"sendRequest()\" style=\"margin-top: 5px;\" mode='ios' color=\"success\" expand=\"block\">\r\n              REQUEST TO\r\n              JOIN\r\n            </ion-button>\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"currentDiv=='two'\" style=\"position: relative;top:65px;\" class=\"fade-in one\">\r\n      <div style=\"text-align: center;\">\r\n        <img style=\"height: 10em;\" src=\"../../assets/logo.png\" alt=\"\">\r\n        <h2 style=\"font-weight: bold;\">JOIN AS A HELPER</h2>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top: 40px;padding-left: 1em;padding-right: 1em;\">\r\n\r\n\r\n\r\n\r\n\r\n        <div style=\"margin-top:20px;\">\r\n          <div class=\"loader5\"></div>\r\n        </div>\r\n\r\n        <ion-label\r\n          style=\"text-align: center;color: rgba(128, 0, 28, 0.705);display: flex;justify-content: center;align-items: center;margin-top: 25px;font-weight: bold;font-family: Impact;\">\r\n          AWAITING ACCEPTANCE\r\n        </ion-label>\r\n\r\n\r\n        <ion-button disabled='true' style=\"margin-top: 20px;\" mode='ios' color=\"success\" expand=\"block\">REQUESTED\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"withdrawRequest()\" style=\"margin-top: 10px;\" fill='outline' mode='ios' color=\"danger\"\r\n          expand=\"block\">WITHDRAW\r\n        </ion-button>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"currentDiv=='three'\" style=\"position: relative;top:65px;\" class=\"fade-in one\">\r\n      <div style=\"text-align: center;\">\r\n        <img style=\"height: 10em;\" src=\"../../assets/logo.png\" alt=\"\">\r\n        <h2 style=\"font-weight: bold;\">An Owner Invited You To His Shop</h2>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top: 40px;padding-left: 1em;padding-right: 1em;\">\r\n\r\n\r\n\r\n\r\n\r\n        <div style=\"margin-top:20px;\">\r\n          <div class=\"loader5\"></div>\r\n        </div>\r\n\r\n        <ion-label\r\n          style=\"text-align: center;color: rgba(128, 0, 28, 0.705);display: flex;justify-content: center;align-items: center;margin-top: 25px;font-weight: bold;font-family: Impact;\">\r\n          AWAITING ACCEPTANCE\r\n        </ion-label>\r\n\r\n\r\n        <ion-button (click)=\"acceptReq()\" style=\"margin-top: 20px;\" mode='ios' color=\"success\" expand=\"block\">ACCEPT\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"withdrawRequest()\" style=\"margin-top: 10px;\" fill='outline' mode='ios' color=\"danger\"\r\n          expand=\"block\">REJECT\r\n        </ion-button>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "HOSm":
/*!*************************************************!*\
  !*** ./src/app/helperpage/helperpage.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap\");\nion-select {\n  width: 100%;\n  color: black;\n  font-family: \"Noto Sans JP\", sans-serif;\n  text-align: center;\n  max-height: 0.7em;\n  position: relative;\n}\nh2 {\n  font-family: \"Noto Sans JP\", sans-serif;\n}\nion-input {\n  min-height: 2em;\n  font-family: \"Noto Sans JP\";\n  font-size: 18px;\n  color: black;\n}\n.line-input {\n  margin: 0 !important;\n  background: none !important;\n  padding: 0 !important;\n}\n.line-input ion-item {\n  --border-color: transparent !important;\n  --highlight-height: 0;\n  border: 1px solid rgba(0, 0, 0, 0.514);\n  border-radius: 4px;\n}\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-success, #0da02d);\n}\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 1rem !important;\n}\n.line-input ion-item ion-input {\n  font-family: \"Noto Sans JP\", sans-serif;\n  color: black;\n}\n.loader {\n  width: 150px;\n  height: 550px;\n  display: inline-block;\n  padding: 0px;\n  opacity: 0.5;\n  border: 3px solid #09acfd;\n  animation: loader 1s ease-in-out infinite alternate;\n}\n.loader:before {\n  content: \" \";\n  position: absolute;\n  z-index: -1;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border: 3px solid #09acfd;\n}\n.loader:after {\n  content: \" \";\n  position: absolute;\n  z-index: -1;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border: 3px solid #09acfd;\n}\n@keyframes loader {\n  from {\n    transform: rotate(0deg) scale(1, 1);\n    border-radius: 0px;\n  }\n  to {\n    transform: rotate(360deg) scale(0, 0);\n    border-radius: 50px;\n  }\n}\n.loader5 {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #4183d7;\n  border-top: 10px solid #f5ab35;\n  animation: loader5 1.2s ease-in-out infinite alternate;\n}\n@keyframes loader5 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(720deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlbHBlcnBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNRLGlGQUFBO0FBQ0EsaUdBQUE7QUFWUjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUdBO0VBQ0ksdUNBQUE7QUFBSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFBSTtFQUNJLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFBUTtFQUNJLG1EQUFBO0FBRVo7QUFDUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUNaO0FBQ1E7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7QUFDWjtBQUlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxtREFBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlBO0VBQ0k7SUFDSSxtQ0FBQTtJQUNBLGtCQUFBO0VBRE47RUFHRTtJQUNJLHFDQUFBO0lBQ0EsbUJBQUE7RUFETjtBQUNGO0FBY0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFFQSxzREFBQTtBQUZKO0FBS0E7RUFDSTtJQUNJLHVCQUFBO0VBRk47RUFJRTtJQUNJLHlCQUFBO0VBRk47QUFDRiIsImZpbGUiOiJoZWxwZXJwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDAuN2VtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEpQXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUxNCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMwZGEwMmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4MDdlN2UgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDlhY2ZkO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IGxvYWRlciAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5sb2FkZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwOWFjZmQ7XHJcbn1cclxuXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwOWFjZmQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDAsIDApO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMCwgMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvYWRlcjUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzQxODNkNztcclxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Y1YWIzNTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXI1IDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkZXI1IDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRlcjUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGVyNSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Nfbs":
/*!*********************************************************!*\
  !*** ./src/app/helperpage/helperpage-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HelperpagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperpagePageRoutingModule", function() { return HelperpagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _helperpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperpage.page */ "p4uu");




const routes = [
    {
        path: '',
        component: _helperpage_page__WEBPACK_IMPORTED_MODULE_3__["HelperpagePage"]
    }
];
let HelperpagePageRoutingModule = class HelperpagePageRoutingModule {
};
HelperpagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelperpagePageRoutingModule);



/***/ }),

/***/ "p4uu":
/*!***********************************************!*\
  !*** ./src/app/helperpage/helperpage.page.ts ***!
  \***********************************************/
/*! exports provided: HelperpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperpagePage", function() { return HelperpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_helperpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./helperpage.page.html */ "8cSn");
/* harmony import */ var _helperpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperpage.page.scss */ "HOSm");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let HelperpagePage = class HelperpagePage {
    constructor(auth, firestore, router, toast, loading) {
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.toast = toast;
        this.loading = loading;
        this.code = 91;
        this.currentDiv = 'one';
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: this.msg,
                duration: 800,
                mode: 'ios',
                color: this.color,
                position: 'top',
            });
            toast.present();
        });
    }
    //loading
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: this.loadermsg,
                spinner: 'dots',
                id: this.loaderID,
                mode: 'ios',
            });
            yield loading.present();
        });
    }
    changeDiv(name) {
        this.currentDiv = name;
    }
    checkRequestsSent(userID) {
        this.firestore.collection('helpers').doc(userID).valueChanges().subscribe((data) => {
            console.log('just to chekc', data);
            if (data == undefined) {
                console.log('no user found on firebase');
                this.loading.dismiss('load');
            }
            else if (data.requestStatus) {
                if (data.requestStatus == 'pending') {
                    this.currentDiv = 'two';
                    console.log('request sent and is pending');
                    this.loading.dismiss('load');
                }
                else if (data.requestStatus == 'recieved') {
                    this.currentDiv = 'three';
                    this.loading.dismiss('load');
                }
                else if (data.requestStatus == 'approved') {
                    this.loading.dismiss('load');
                    this.acceptReq();
                    this.router.navigate(['/home/inventory']);
                }
            }
            else {
                console.log('na request sent na recienved');
                this.currentDiv = 'one';
                this.loading.dismiss('load');
            }
        });
    }
    withdrawRequest() {
        const requestStatus = '';
        this.firestore.collection('helpers').doc(this.userID).update({
            requestStatus,
        }).then(() => {
            this.msg = 'request removed';
            this.presentToast();
        });
    }
    acceptReq() {
        const uid = this.auth.auth.currentUser.uid;
        this.firestore.collection('helpers').doc(uid).get().subscribe((u) => {
            console.log(u);
            if (u.exists) {
                this.user = JSON.parse(window.localStorage.getItem('user'));
                this.user.docID = u.Df.sn.proto.mapValue.fields.docID.stringValue;
                this.user.uType = 1;
                this.user.helperid = this.userID;
                this.user.helpephone = this.phone;
                window.localStorage.setItem('user', JSON.stringify(this.user));
                this.user = JSON.parse(window.localStorage.getItem('user'));
                console.log(this.user);
                // 
            }
        });
        // const requestStatus = 'approved'
        // this.firestore.collection('helpers').doc(this.userID).update({
        //   requestStatus,
        // }).then(() => {
        //   this.msg = 'request accepted'
        //   this.presentToast()
        //   this.router.navigate(['pos'])
        // })
    }
    sendRequest() {
        if (!this.phone || !this.code) {
            this.msg = 'Phone number is blank';
            this.presentToast();
        }
        else {
            const ownerPhone = '+' + this.code + this.phone;
            const requestStatus = 'pending';
            this.firestore.collection('helpers').doc(this.userID).update({
                ownerPhone,
                requestStatus,
            }).then(() => {
                this.msg = 'request to shopOwner';
                this.presentToast();
                this.checkRequestsSent(this.userID);
            }).catch(err => {
                this.msg = JSON.stringify(err.message);
                this.presentToast();
            });
        }
    }
    getuserdata(uid) {
        this.firestore.collection('helpers').doc(uid).valueChanges().subscribe((res) => {
            if (res == undefined) {
            }
            else if (res.docID) {
                this.user.docID = res.docID;
                this.user.paid = 1;
                window.localStorage.setItem('user', JSON.stringify(this.user));
            }
        });
    }
    ngOnInit() {
        this.loaderID = 'load';
        this.loadermsg = 'HOLD ON A MOMENT..';
        this.presentLoading();
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user);
        const sb = this.auth.authState.subscribe(u => {
            this.userID = u.uid;
            console.log(this.userID);
            this.getuserdata(u.uid);
            console.log(this.user);
            console.log(this.user.phone);
            this.firestore.collection('helpers').doc(this.userID).valueChanges().subscribe((res) => {
                if (res == undefined) {
                    const userID = this.userID;
                    const timestamp = new Date();
                    const userDetails = this.user;
                    console.log(userDetails);
                    console.log(userID);
                    console.log(timestamp);
                    const name = this.user.name;
                    const phone = this.user.phone;
                    console.log(name);
                    console.log(phone);
                    this.user.uType = 'helper';
                    this.firestore.collection('helpers').doc(this.userID).set({
                        timestamp,
                        userID,
                        userDetails,
                        phone,
                    }).then(() => {
                        this.loading.dismiss('load');
                    });
                }
                else {
                    if (!res.userDetails) {
                        const userDetails = this.user;
                        this.firestore.collection('helpers').doc(this.userID).update({
                            userDetails,
                        });
                    }
                    this.checkRequestsSent(this.userID);
                }
            });
        });
    }
};
HelperpagePage.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
HelperpagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-helperpage',
        template: _raw_loader_helperpage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_helperpage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelperpagePage);



/***/ }),

/***/ "tO57":
/*!*************************************************!*\
  !*** ./src/app/helperpage/helperpage.module.ts ***!
  \*************************************************/
/*! exports provided: HelperpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperpagePageModule", function() { return HelperpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _helperpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helperpage-routing.module */ "Nfbs");
/* harmony import */ var _helperpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helperpage.page */ "p4uu");







let HelperpagePageModule = class HelperpagePageModule {
};
HelperpagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _helperpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelperpagePageRoutingModule"]
        ],
        declarations: [_helperpage_page__WEBPACK_IMPORTED_MODULE_6__["HelperpagePage"]]
    })
], HelperpagePageModule);



/***/ })

}]);
//# sourceMappingURL=helperpage-helperpage-module.js.map