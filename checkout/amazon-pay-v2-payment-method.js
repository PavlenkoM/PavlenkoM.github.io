"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["amazon-pay-v2-payment-method"],{

/***/ "./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx"
/*!**********************************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/amazon-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/amazon-pay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-button-integration */ "./packages/checkout-button-integration/src/CheckoutButton.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const beautifyAmazonButton = () => {
    var _a;
    if (!document.querySelector('.checkout-button-container')) {
        return;
    }
    const container = document.querySelector('#amazonpayCheckoutButton > div');
    if (container) {
        const amazonButton = (_a = container.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.amazonpay-button-view1');
        if ((0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(amazonButton)) {
            amazonButton.style.height = '36px';
            return;
        }
    }
    setTimeout(beautifyAmazonButton, 10);
};
const AmazonPayV2Button = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        beautifyAmazonButton();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "AmazonPayContainer" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ integrations: [_bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_0__.createAmazonPayV2CustomerStrategy] }, props))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(AmazonPayV2Button, [{ id: 'amazonpay' }]));


/***/ },

/***/ "./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/amazon-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/amazon-pay.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");







const AmazonPayV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, paymentForm, method, method: { initializationData: { paymentDescriptor, paymentToken }, } } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "method"]);
    const initializeAmazonPayV2Payment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_1__.createAmazonPayV2PaymentStrategy], amazonpay: {
            editButtonId: 'editButtonId',
        } })), [checkoutService]);
    const reload = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => window.location.reload(), []);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const instruments = checkoutState.data.getInstruments(method) || [];
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { buttonId: "editButtonId", containerId: "paymentWidget", deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, hideWidget: true, initializePayment: initializeAmazonPayV2Payment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignInRequired: false, isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, onSignOut: reload, paymentDescriptor: paymentDescriptor, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldShow: !!paymentToken, shouldShowDescriptor: !!paymentToken, shouldShowEditButton: !!paymentToken, signOut: checkoutService.signOutCustomer })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__["default"])(AmazonPayV2PaymentMethod, [{ id: 'amazonpay' }]));


/***/ },

/***/ "./packages/amazon-pay-v2-integration/src/index.ts"
/*!*********************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/index.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmazonPayV2Button: () => (/* reexport safe */ _AmazonPayV2Button__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   AmazonPayV2PaymentMethod: () => (/* reexport safe */ _AmazonPayV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AmazonPayV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmazonPayV2PaymentMethod */ "./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx");
/* harmony import */ var _AmazonPayV2Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmazonPayV2Button */ "./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx");




/***/ },

/***/ "./packages/checkout-button-integration/src/CheckoutButton.tsx"
/*!*********************************************************************!*\
  !*** ./packages/checkout-button-integration/src/CheckoutButton.tsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");



const CheckoutButton = ({ checkoutService: { deinitializeCustomer, initializeCustomer }, checkoutButtonContainerClass, containerId, methodId, onUnhandledError, onWalletButtonClick, additionalInitializationOptions, integrations, }) => {
    const initializeCustomerStrategyOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield initializeCustomer({
                methodId,
                integrations,
                [methodId]: Object.assign({ container: containerId, onUnhandledError, onClick: () => onWalletButtonClick(methodId) }, additionalInitializationOptions),
            });
        }
        catch (error) {
            if (typeof onUnhandledError === 'function' && error instanceof Error) {
                onUnhandledError(error);
            }
        }
    });
    const deinitializeCustomerStrategyOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield deinitializeCustomer({ methodId });
        }
        catch (error) {
            if (typeof onUnhandledError === 'function' && error instanceof Error) {
                onUnhandledError(error);
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        void initializeCustomerStrategyOrThrow();
        return () => {
            void deinitializeCustomerStrategyOrThrow();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: checkoutButtonContainerClass, "data-test": containerId, id: containerId }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__["default"])(CheckoutButton, []));


/***/ },

/***/ "./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts"
/*!*****************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isHTMLElement)
/* harmony export */ });
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}


/***/ }

}]);
//# sourceMappingURL=amazon-pay-v2-payment-method.js.map