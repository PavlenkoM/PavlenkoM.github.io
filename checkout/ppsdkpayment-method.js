"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["ppsdkpayment-method"],{

/***/ "./packages/hosted-credit-card-integration/src/HostedCreditCardPaymentMethod.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/HostedCreditCardPaymentMethod.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx");



const HostedCreditCardPaymentMethod = ({ method, checkoutService, checkoutState, paymentForm, language, onUnhandledError, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"])(HostedCreditCardPaymentMethod, [
    {
        id: 'hosted-credit-card',
    },
    { id: 'credit_card', gateway: 'bluesnapdirect' },
    { id: 'credit_card', gateway: 'checkoutcom' },
    { id: 'tdonlinemart' },
]));


/***/ },

/***/ "./packages/ppsdk-integration/src/NoUI.tsx"
/*!*************************************************!*\
  !*** ./packages/ppsdk-integration/src/NoUI.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoUI: () => (/* binding */ NoUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usePropsToOnMount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePropsToOnMount */ "./packages/ppsdk-integration/src/usePropsToOnMount.ts");


const NoUI = (props) => {
    const onMount = (0,_usePropsToOnMount__WEBPACK_IMPORTED_MODULE_1__.usePropsToOnMount)(props);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(onMount, [onMount]);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};


/***/ },

/***/ "./packages/ppsdk-integration/src/PPSDKPaymentMethod.tsx"
/*!***************************************************************!*\
  !*** ./packages/ppsdk-integration/src/PPSDKPaymentMethod.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _initializationComponentMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initializationComponentMap */ "./packages/ppsdk-integration/src/initializationComponentMap.ts");




const PPSDKPaymentMethod = (props) => {
    var _a;
    const { method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_0__.noop } = props;
    const componentKey = ((_a = method.initializationStrategy) === null || _a === void 0 ? void 0 : _a.type) || '';
    const Component = _initializationComponentMap__WEBPACK_IMPORTED_MODULE_3__.initializationComponentMap[componentKey];
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!Component) {
        onUnhandledError(new Error('PPSDK initialization strategy not found'));
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, Object.assign({}, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__["default"])(PPSDKPaymentMethod, [
    {
        type: 'PAYMENT_TYPE_SDK',
    },
]));


/***/ },

/***/ "./packages/ppsdk-integration/src/index.ts"
/*!*************************************************!*\
  !*** ./packages/ppsdk-integration/src/index.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PPSDKPaymentMethod: () => (/* reexport safe */ _PPSDKPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PPSDKPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPSDKPaymentMethod */ "./packages/ppsdk-integration/src/PPSDKPaymentMethod.tsx");



/***/ },

/***/ "./packages/ppsdk-integration/src/initializationComponentMap.ts"
/*!**********************************************************************!*\
  !*** ./packages/ppsdk-integration/src/initializationComponentMap.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializationComponentMap: () => (/* binding */ initializationComponentMap)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/HostedCreditCardPaymentMethod.tsx");
/* harmony import */ var _NoUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoUI */ "./packages/ppsdk-integration/src/NoUI.tsx");


const initializationComponentMap = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    card_ui: _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_0__["default"],
    none: _NoUI__WEBPACK_IMPORTED_MODULE_1__.NoUI,
};


/***/ },

/***/ "./packages/ppsdk-integration/src/usePropsToOnMount.ts"
/*!*************************************************************!*\
  !*** ./packages/ppsdk-integration/src/usePropsToOnMount.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePropsToOnMount: () => (/* binding */ usePropsToOnMount)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const usePropsToOnMount = (props) => {
    const { checkoutService, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_0__.noop } = props;
    const { initializePayment, deinitializePayment } = checkoutService;
    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
        gatewayId: method.gateway,
        methodId: method.id,
    }), [method.gateway, method.id]);
    const onInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => initializePayment(options), [initializePayment, options]);
    const onDeinit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => deinitializePayment(options), [deinitializePayment, options]);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        onInit().catch(onUnhandledError);
        return () => {
            onDeinit().catch(onUnhandledError);
        };
    }, [onInit, onUnhandledError, onDeinit]);
};


/***/ }

}]);
//# sourceMappingURL=ppsdkpayment-method.js.map