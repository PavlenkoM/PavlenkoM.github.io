"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["wallet-button-v1-resolver"],{

/***/ "./packages/core/src/app/customer/CheckoutButton.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/customer/CheckoutButton.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WALLET_BUTTON_HEIGHT = 40;
const CheckoutButton = ({ containerId, methodId, isShowingWalletButtonsOnTop, deinitialize, initialize, onError, onClick = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const heightOption = isShowingWalletButtonsOnTop && (methodId === 'braintreepaypal' || methodId === 'braintreepaypalcredit')
            ? { buttonHeight: WALLET_BUTTON_HEIGHT }
            : {};
        initialize({
            methodId,
            [methodId]: Object.assign(Object.assign({}, heightOption), { container: containerId, onError, onClick: () => onClick(methodId) }),
        });
        return () => {
            deinitialize({ methodId });
        };
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutButton);


/***/ }),

/***/ "./packages/core/src/app/customer/WalletButtonV1Resolver.tsx":
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/customer/WalletButtonV1Resolver.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bigcommerce-payments */ "../checkout-sdk-js/dist/esm/integrations/bigcommerce-payments.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bolt */ "../checkout-sdk-js/dist/esm/integrations/bolt.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-commerce */ "../checkout-sdk-js/dist/esm/integrations/paypal-commerce.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "../checkout-sdk-js/dist/esm/integrations/stripe.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutButton */ "./packages/core/src/app/customer/CheckoutButton.tsx");








const CheckoutButtonV1Resolver = (_a) => {
    var { isShowingWalletButtonsOnTop = false, initialize, onError, methodId } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["isShowingWalletButtonsOnTop", "initialize", "onError", "methodId"]);
    const initializeWithIntegrations = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((options) => {
        var _a;
        return initialize(Object.assign(Object.assign({}, options), { integrations: [
                ...(_a = options.integrations) !== null && _a !== void 0 ? _a : [],
                _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_1__.createBigCommercePaymentsFastlaneCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_1__.createBigCommercePaymentsVenmoCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_2__.createBoltCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__.createBraintreePaypalCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__.createBraintreePaypalCreditCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__.createBraintreeFastlaneCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__.createBraintreeVisaCheckoutCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_4__.createPayPalCommerceVenmoCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_4__.createPayPalCommerceFastlaneCustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_5__.createStripeUPECustomerStrategy,
                _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_5__.createStripeLinkV2CustomerStrategy,
            ] }));
    }, [initialize]);
    return react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_CheckoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ containerId: `${methodId}CheckoutButton`, initialize: initializeWithIntegrations, isShowingWalletButtonsOnTop: isShowingWalletButtonsOnTop, key: methodId, methodId: methodId, onError: onError }, rest));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutButtonV1Resolver);


/***/ })

}]);
//# sourceMappingURL=wallet-button-v1-resolver.js.map