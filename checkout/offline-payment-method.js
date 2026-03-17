"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["offline-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/offline.js"
/*!***********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/offline.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOfflinePaymentStrategy: () => (/* binding */ n)
/* harmony export */ });
class e extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class t extends e{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class r{constructor(e){this._paymentIntegrationService=e}execute(e,t){return r=this,n=void 0,i=function*(){return yield this._paymentIntegrationService.submitOrder(Object.assign(Object.assign({},e),{payment:e.payment?{methodId:e.payment.methodId}:void 0}),t),Promise.resolve()},new((o=void 0)||(o=Promise))(function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o(function(e){e(r)})).then(s,a)}c((i=i.apply(r,n||[])).next())});// removed by dead control flow
 var r, n, o, i; }finalize(){return Promise.reject(new t)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}}const n=(o=e=>new r(e),i=[{type:"PAYMENT_TYPE_OFFLINE"}],Object.assign(o,{resolveIds:i}));var o,i;


/***/ },

/***/ "./packages/offline-payment-integration/src/OfflinePaymentMethod.tsx"
/*!***************************************************************************!*\
  !*** ./packages/offline-payment-integration/src/OfflinePaymentMethod.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offline */ "../checkout-sdk-js/dist/esm/integrations/offline.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");




const OfflinePaymentMethod = ({ method, checkoutService, onUnhandledError, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const initializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_offline__WEBPACK_IMPORTED_MODULE_1__.createOfflinePaymentStrategy],
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void initializePayment();
        return () => {
            const deinitializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                try {
                    yield checkoutService.deinitializePayment({
                        gatewayId: method.gateway,
                        methodId: method.id,
                    });
                }
                catch (error) {
                    if (error instanceof Error) {
                        onUnhandledError(error);
                    }
                }
            });
            void deinitializePayment();
        };
    }, [checkoutService, method.gateway, method.id, onUnhandledError]);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(OfflinePaymentMethod, [
    {
        type: 'PAYMENT_TYPE_OFFLINE',
    },
]));


/***/ },

/***/ "./packages/offline-payment-integration/src/index.ts"
/*!***********************************************************!*\
  !*** ./packages/offline-payment-integration/src/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfflinePaymentMethod: () => (/* reexport safe */ _OfflinePaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _OfflinePaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfflinePaymentMethod */ "./packages/offline-payment-integration/src/OfflinePaymentMethod.tsx");



/***/ },

/***/ "./packages/payment-integration-api/src/toResolvableComponent.tsx"
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/toResolvableComponent.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toResolvableComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function toResolvableComponent(
// eslint-disable-next-line @typescript-eslint/naming-convention
Component, resolveIds) {
    return Object.assign((props) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, Object.assign({}, props)), { resolveIds });
}


/***/ }

}]);
//# sourceMappingURL=offline-payment-method.js.map