"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["klarna-payment-method"],{

/***/ "./packages/klarna-integration/src/index.ts"
/*!**************************************************!*\
  !*** ./packages/klarna-integration/src/index.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KlarnaPaymentMethod: () => (/* reexport safe */ _klarna_KlarnaPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   KlarnaV2PaymentMethod: () => (/* reexport safe */ _klarnav2_KlarnaV2PaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _klarna_KlarnaPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klarna/KlarnaPaymentMethod */ "./packages/klarna-integration/src/klarna/KlarnaPaymentMethod.tsx");
/* harmony import */ var _klarnav2_KlarnaV2PaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./klarnav2/KlarnaV2PaymentMethod */ "./packages/klarna-integration/src/klarnav2/KlarnaV2PaymentMethod.tsx");




/***/ },

/***/ "./packages/klarna-integration/src/klarna/KlarnaPaymentMethod.tsx"
/*!************************************************************************!*\
  !*** ./packages/klarna-integration/src/klarna/KlarnaPaymentMethod.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_klarna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/klarna */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/klarna.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");







const KlarnaPaymentMethod = (_a) => {
    var { checkoutService, checkoutState, method, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method", "paymentForm"]);
    const initializeKlarnaPayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_klarna__WEBPACK_IMPORTED_MODULE_1__.createKlarnaPaymentStrategy], klarna: {
            container: `#${options.methodId}Widget`,
        } })), [checkoutService]);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ containerId: `${method.id}Widget`, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeKlarnaPayment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, signOut: checkoutService.signOutCustomer }, rest)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__["default"])(KlarnaPaymentMethod, [{ id: 'klarna' }]));


/***/ },

/***/ "./packages/klarna-integration/src/klarnav2/KlarnaV2PaymentMethod.tsx"
/*!****************************************************************************!*\
  !*** ./packages/klarna-integration/src/klarnav2/KlarnaV2PaymentMethod.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_klarna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/klarna */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/klarna.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");







const KlarnaV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, method, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method", "paymentForm"]);
    const initializeKlarnaV2Payment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_klarna__WEBPACK_IMPORTED_MODULE_1__.createKlarnaV2PaymentStrategy], klarnav2: {
            container: `#${options.methodId}Widget`,
        } })), [checkoutService]);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ containerId: `${method.id}Widget`, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeKlarnaV2Payment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, signOut: checkoutService.signOutCustomer }, rest)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__["default"])(KlarnaV2PaymentMethod, [{ gateway: 'klarna' }]));


/***/ }

}]);
//# sourceMappingURL=klarna-payment-method.js.map