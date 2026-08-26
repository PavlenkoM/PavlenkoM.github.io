"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["apple-pay-button"],{

/***/ "./packages/apple-pay-integration/src/ApplePayButton.tsx"
/*!***************************************************************!*\
  !*** ./packages/apple-pay-integration/src/ApplePayButton.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_apple_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/apple-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/apple-pay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-button-integration */ "./packages/checkout-button-integration/src/CheckoutButton.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/navigateToOrderConfirmation.ts");





const ApplePayButton = (props) => {
    const { language, onUnhandledError } = props;
    const integrations = [_bigcommerce_checkout_sdk_integrations_apple_pay__WEBPACK_IMPORTED_MODULE_0__.createApplePayCustomerStrategy];
    const additionalInitializationOptions = {
        shippingLabel: language.translate('cart.shipping_text'),
        subtotalLabel: language.translate('cart.subtotal_text'),
        onPaymentAuthorize: _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_4__["default"],
        onError: onUnhandledError,
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ additionalInitializationOptions: additionalInitializationOptions, integrations: integrations }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(ApplePayButton, [
    { id: 'applepay' },
]));


/***/ },

/***/ "./packages/apple-pay-integration/src/ApplePayPaymentMethod.tsx"
/*!**********************************************************************!*\
  !*** ./packages/apple-pay-integration/src/ApplePayPaymentMethod.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_apple_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/apple-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/apple-pay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");




const ApplePayPaymentMethod = ({ method, checkoutService, language, onUnhandledError, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const initializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_apple_pay__WEBPACK_IMPORTED_MODULE_1__.createApplePayPaymentStrategy],
                    applepay: {
                        shippingLabel: language.translate('cart.shipping_text'),
                        subtotalLabel: language.translate('cart.subtotal_text'),
                    },
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
    }, [checkoutService, language, method, onUnhandledError]);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(ApplePayPaymentMethod, [{ id: 'applepay' }]));


/***/ },

/***/ "./packages/apple-pay-integration/src/index.ts"
/*!*****************************************************!*\
  !*** ./packages/apple-pay-integration/src/index.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplePayButton: () => (/* reexport safe */ _ApplePayButton__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ApplePayPaymentMethod: () => (/* reexport safe */ _ApplePayPaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _ApplePayButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplePayButton */ "./packages/apple-pay-integration/src/ApplePayButton.tsx");
/* harmony import */ var _ApplePayPaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplePayPaymentMethod */ "./packages/apple-pay-integration/src/ApplePayPaymentMethod.tsx");




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
//# sourceMappingURL=apple-pay-button.js.map