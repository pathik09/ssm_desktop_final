(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "9Tb1":
/*!***********************************************************!*\
  !*** ./src/app/select-customer/select-customer.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtY3VzdG9tZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "IK0N":
/*!*****************************************************************!*\
  !*** ./src/app/selectpurchaseorder/selectpurchaseorder.page.ts ***!
  \*****************************************************************/
/*! exports provided: SelectpurchaseOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectpurchaseOrderPage", function() { return SelectpurchaseOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_selectpurchaseorder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selectpurchaseorder.page.html */ "LVZB");
/* harmony import */ var _selectpurchaseorder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectpurchaseorder.page.scss */ "vEKP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-supplier/add-supplier.page */ "88it");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let SelectpurchaseOrderPage = class SelectpurchaseOrderPage {
    constructor(modalController, firestore, router) {
        this.modalController = modalController;
        this.firestore = firestore;
        this.router = router;
        this.noitem = false;
    }
    close() {
        this.modalController.dismiss().then(() => {
        }).catch(() => {
            this.router.navigate(['home/inventory']);
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
                        this.selectSupplier(this.returnDat);
                    }, 600);
                }
            });
            return yield modal.present();
        });
    }
    addSupplier() {
        this.ModalPage = _add_supplier_add_supplier_page__WEBPACK_IMPORTED_MODULE_5__["AddSupplierPage"];
        this.openModal();
    }
    selectSupplier(boi) {
        this.modalController.dismiss(boi);
    }
    getPurchaseOrders() {
        this.paid = window.localStorage.getItem('paid');
        var selecteditem = window.localStorage.getItem("selecteditem");
        console.log("selecteditem index" + selecteditem);
        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user = [];
        }
        let purchaseorder = new Array();
        let selectedPO = new Array();
        this.purchaseorder = new Array();
        let PO = new Array();
        purchaseorder = JSON.parse(window.localStorage.getItem('purchaseorder'));
        purchaseorder.forEach(function (value) {
            //console.log("value.item_index"+value.item_index);
            if (value.item_index == selecteditem) {
                console.log("value.item_index" + value.item_index);
                selectedPO.push(value);
            }
        });
        console.log("selectedPO" + selectedPO);
        this.selectedpurchaseorder = selectedPO;
        console.log(this.selectedpurchaseorder.length);
        if (this.selectedpurchaseorder.length == 0) {
            console.log("NO item is true");
            this.noitem = true;
        }
        /*
      let purchaseorder = new Array();
       this.selectedpurchaseorder = new Array();
       console.log("selecteditem index"+selecteditem);
       this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res: any) => {
        
   
   
         if (res.purchaseorder) {
   
           if (res.purchaseorder < 1) {
     
   
           }
           else {
             let selectedPO = new Array();
            purchaseorder =JSON.parse(JSON.stringify(res.purchaseorder));
            console.log(purchaseorder)
            console.log("selecteditem index"+selecteditem);
            
           purchaseorder.forEach(function(value){
             console.log("value.item_index"+value.item_index);
             console.log("selecteditem index"+selecteditem)
            
            
             if(value.item_index==selecteditem)
             {
               console.log("value.item_index"+value.item_index);
               selectedPO.push(value);
               
             }
   
           });
           this.selectedpurchaseorder = selectedPO;
   
             
   
   
           }
         }
   
       })*/
    }
    ngOnInit() {
        this.getPurchaseOrders();
    }
};
SelectpurchaseOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
SelectpurchaseOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-selectpurchaseorder',
        template: _raw_loader_selectpurchaseorder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selectpurchaseorder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectpurchaseOrderPage);



/***/ }),

/***/ "LVZB":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectpurchaseorder/selectpurchaseorder.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: #2b5876;  /* fallback for old browsers */\r\n  --background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n  --background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  \">\r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Select from Purchase Orders\r\n      </ion-title>\r\n      <ion-button (click)=\"close()\" style=\"padding-top: 5px;\" fill='clear' color=\"primary\">\r\n        <p style=\"color: white;font-family: Impact;\">\r\n          EXIT\r\n        </p>\r\n      </ion-button>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let boi of selectedpurchaseorder\">\r\n    <ion-item mode=\"ios\" button (click)=\"selectSupplier(boi)\">\r\n      {{boi.supplier.name}}        {{boi.stock}} \r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"noitem\">\r\n\r\n\r\n    <ion-label\r\n      style=\"font-family: impact;color: rgba(128, 128, 128, 0.616);position: relative;top: 10em;text-align: center;font-size: 32px;display: flex;justify-content: center;align-items: center;\">\r\n      NOTHING TO SHOW...!\r\n    </ion-label>\r\n\r\n  </div>\r\n\r\n  \r\n  </ion-content>");

/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "lEgL":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-customer/select-customer.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: #2b5876;  /* fallback for old browsers */\r\n  --background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */\r\n  --background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  \">\r\n    <div style=\"display: flex;color: white;\">\r\n      <img style=\"height: 3em;object-fit: contain;\" src=\"../../../assets/logo.png\" alt=\"\">\r\n      <ion-title style=\"text-align: center;color: white;  font-family: 'Francois One', sans-serif;\">Select from suppliers\r\n      </ion-title>\r\n\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"display: flex;justify-content: center;align-items: center;\">\r\n\r\n    <ion-list style=\"width: 80%;position: relative;top: 1em;\" class=\"line-input\">\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-input (ionChange)=\"searchItem()\" [(ngModel)]=\"searchParam\"\r\n          placeholder=\"enter Customer name to search...\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div *ngFor=\"let boi of toShow\">\r\n    <ion-item mode=\"ios\" button (click)=\"selectSupplier(boi)\">\r\n      {{boi.name}}  {{boi.phone}}\r\n    </ion-item>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\" (click)=\"addSupplier()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");




let AuthService = class AuthService {
    constructor(afAuth, afStore) {
        this.afAuth = afAuth;
        this.afStore = afStore;
        //this.checkUserState();
    }
    resentPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.afAuth.auth.sendPasswordResetEmail(email);
            }
            catch (error) {
                console.error('Error --> ', error);
            }
        });
    }
    register(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                yield this.sendVerificationEmail();
                return user;
            }
            catch (error) {
                console.error('Error --> ', error);
            }
        });
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
                this.updateUserData(user);
                return user;
            }
            catch (error) {
                console.error('Error --> ', error);
            }
        });
    }
    sendVerificationEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return (yield this.afAuth.auth.currentUser).sendEmailVerification();
            }
            catch (error) {
                console.error('Error --> ', error);
            }
        });
    }
    isEmailVerified(user) {
        return user.emailVerified === true ? true : false;
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afAuth.auth.signOut();
            }
            catch (error) {
                console.error('Error --> ', error);
            }
        });
    }
    updateUserData(user) {
        const userRef = this.afStore.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName
        };
        window.localStorage.setItem('user', JSON.stringify(data));
        return userRef.set(data, { merge: true });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qhlK":
/*!*********************************************************!*\
  !*** ./src/app/select-customer/select-customer.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectCustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomerPage", function() { return SelectCustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-customer.page.html */ "lEgL");
/* harmony import */ var _select_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-customer.page.scss */ "9Tb1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-customer/add-customer.page */ "jO1E");






let SelectCustomerPage = class SelectCustomerPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    searchItem() {
        this.searchFound = [];
        var found = 0;
        console.log(this.searchParam);
        if (this.searchParam != "") {
            for (var k = 0; k < this.suppliers.length; k++) {
                if (this.suppliers[k].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
                    found = found + 1;
                    if (found < 8) {
                        this.searchFound.push(this.suppliers[k]);
                        this.searchFound[this.searchFound.length - 1].index = k;
                    }
                    else
                        break;
                }
            }
        }
        this.toShow = this.searchFound;
        if (this.searchParam == "") {
            this.toShow = this.suppliers;
        }
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
                        this.selectSupplier(this.returnDat);
                    }, 600);
                }
            });
            return yield modal.present();
        });
    }
    getSuppliers() {
        if (window.localStorage.getItem('customers')) {
            this.suppliers = JSON.parse(window.localStorage.getItem('customers'));
        }
        else {
            this.suppliers = [];
        }
    }
    addSupplier() {
        this.ModalPage = _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_5__["AddCustomerPage"];
        this.openModal();
    }
    selectSupplier(boi) {
        this.modalController.dismiss(boi);
    }
    ngOnInit() {
        this.getSuppliers();
        this.toShow = this.suppliers;
    }
};
SelectCustomerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SelectCustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-customer',
        template: _raw_loader_select_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectCustomerPage);



/***/ }),

/***/ "vEKP":
/*!*******************************************************************!*\
  !*** ./src/app/selectpurchaseorder/selectpurchaseorder.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3RwdXJjaGFzZW9yZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=common.js.map