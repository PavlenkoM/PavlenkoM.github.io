(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["google-pay-button"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/google-pay-integration/src/GooglePayButton.scss"
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/google-pay-integration/src/GooglePayButton.scss ***!
  \***************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".google-pay-top-button > div {\n  height: 100%;\n  width: 100%;\n}\n.google-pay-top-button .gpay-card-info-container {\n  height: 40px;\n  width: 100%;\n  min-width: 100%;\n  min-height: unset;\n}\n.google-pay-top-button .gpay-card-info-animation-container {\n  height: 100%;\n}\n.google-pay-top-button .gpay-card-info-container, .google-pay-top-button .gpay-button {\n  outline: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/google-pay-integration/src/GooglePayButton.scss"
/*!******************************************************************!*\
  !*** ./packages/google-pay-integration/src/GooglePayButton.scss ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./GooglePayButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/google-pay-integration/src/GooglePayButton.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/checkout-button-integration/src/CheckoutButton.tsx"
/*!*********************************************************************!*\
  !*** ./packages/checkout-button-integration/src/CheckoutButton.tsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./packages/google-pay-integration/src/GooglePayButton.tsx"
/*!*****************************************************************!*\
  !*** ./packages/google-pay-integration/src/GooglePayButton.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/google-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/google-pay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-button-integration */ "./packages/checkout-button-integration/src/CheckoutButton.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/errors/EmbeddedCheckoutUnsupportedError.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/isEmbedded.ts");
/* harmony import */ var _GooglePayButton_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GooglePayButton.scss */ "./packages/google-pay-integration/src/GooglePayButton.scss");
/* harmony import */ var _GooglePayButton_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_GooglePayButton_scss__WEBPACK_IMPORTED_MODULE_6__);





const GooglePayButton = (props) => {
    const { language, onUnhandledError } = props;
    if ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__["default"])()) {
        onUnhandledError(new _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"](language.translate('embedded_checkout.unsupported_error', {
            methods: 'googlepay',
        })));
        return null;
    }
    const integrations = [
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayAdyenV2CustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayAdyenV3CustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayAuthorizeDotNetCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayCheckoutComCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayCybersourceCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayBnzCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayOrbitalCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayStripeCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayStripeUpeCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayWorldpayAccessCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayBraintreeCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayPayPalCommerceCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayBigCommercePaymentsCustomerStrategy,
        _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayTdOnlineMartCustomerStrategy,
    ];
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ checkoutButtonContainerClass: "google-pay-top-button", integrations: integrations }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(GooglePayButton, [
    { id: 'googlepayadyenv2' },
    { id: 'googlepayadyenv3' },
    { id: 'googlepayauthorizenet' },
    { id: 'googlepaybnz' },
    { id: 'googlepaybraintree' },
    { id: 'googlepaypaypalcommerce' },
    { id: 'googlepaycheckoutcom' },
    { id: 'googlepaycybersourcev2' },
    { id: 'googlepayorbital' },
    { id: 'googlepaystripe' },
    { id: 'googlepaystripeupe' },
    { id: 'googlepayworldpayaccess' },
    { id: 'googlepaytdonlinemart' },
    { id: 'googlepaystripeocs' },
    { id: 'googlepay_bigcommerce_payments' },
]));


/***/ },

/***/ "./packages/google-pay-integration/src/GooglePayPaymentMethod.tsx"
/*!************************************************************************!*\
  !*** ./packages/google-pay-integration/src/GooglePayPaymentMethod.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/PaymentMethodId.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_wallet_button_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/wallet-button-integration */ "./packages/wallet-button-integration/src/WalletButtonPaymentMethodComponent.tsx");
/* harmony import */ var _GooglePayPaymentMethodComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GooglePayPaymentMethodComponent */ "./packages/google-pay-integration/src/GooglePayPaymentMethodComponent.tsx");
/* harmony import */ var _googlePayIntegrations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./googlePayIntegrations */ "./packages/google-pay-integration/src/googlePayIntegrations.ts");








const GooglePayPaymentMethod = (_a) => {
    var _b, _c, _d;
    var { checkoutService, method, onUnhandledError, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "method", "onUnhandledError", "paymentForm"]);
    const { checkoutState: { data: { getCheckout, getConfig }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const checkout = getCheckout();
    const isPaymentSelected = checkout ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(checkout.payments, { providerId: method.id }) : false;
    // Capture whether Google Pay was already selected at mount time
    // (PDP/Cart/Customer step button)
    const wasPaymentSelectedAtMountRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isPaymentSelected);
    const features = (_c = (_b = getConfig()) === null || _b === void 0 ? void 0 : _b.checkoutSettings.features) !== null && _c !== void 0 ? _c : {};
    const isDirectPayEnabled = Boolean((_d = features['PI-5111.google_pay_direct_pay_on_click']) !== null && _d !== void 0 ? _d : false);
    const initializeGooglePayPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((defaultOptions) => {
        const reinitializePayment = (options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.deinitializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
                yield checkoutService.initializePayment(Object.assign(Object.assign({}, options), { gatewayId: method.gateway, methodId: method.id }));
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        const loadingContainerId = 'checkout-app';
        const mergedOptions = Object.assign(Object.assign({}, defaultOptions), { integrations: _googlePayIntegrations__WEBPACK_IMPORTED_MODULE_8__["default"], [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].AdyenV2GooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].AdyenV3GooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].AuthorizeNetGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].BNZGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].BigCommercePaymentsGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].BraintreeGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].PayPalCommerceGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].StripeGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].StripeUPEGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].CybersourceV2GooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].OrbitalGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].CheckoutcomGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].WorldpayAccessGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].TdOnlineMartGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            }, [_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].StripeOCSGooglePay]: {
                loadingContainerId,
                walletButton: 'walletButton',
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            } });
        return checkoutService.initializePayment(mergedOptions);
    }, [checkoutService, method, onUnhandledError]);
    if (isDirectPayEnabled && !wasPaymentSelectedAtMountRef.current) {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_GooglePayPaymentMethodComponent__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, { checkoutService: checkoutService, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_wallet_button_integration__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, rest, { buttonId: "walletButton", deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeGooglePayPayment, method: method, paymentForm: paymentForm, shouldShowEditButton: true, signOutCustomer: checkoutService.signOutCustomer })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__["default"])(GooglePayPaymentMethod, [
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].AdyenV2GooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].AdyenV3GooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].AuthorizeNetGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].BNZGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].BraintreeGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].PayPalCommerceGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].BigCommercePaymentsGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].CheckoutcomGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].CybersourceV2GooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].OrbitalGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].StripeGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].StripeUPEGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].WorldpayAccessGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].TdOnlineMartGooglePay },
    { id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"].StripeOCSGooglePay },
]));


/***/ },

/***/ "./packages/google-pay-integration/src/GooglePayPaymentMethodComponent.tsx"
/*!*********************************************************************************!*\
  !*** ./packages/google-pay-integration/src/GooglePayPaymentMethodComponent.tsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _googlePayIntegrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googlePayIntegrations */ "./packages/google-pay-integration/src/googlePayIntegrations.ts");




const GOOGLE_PAY_BUTTON_CONTAINER_ID = 'checkout-payment-continue';
const GooglePayPaymentMethodComponent = ({ checkoutService, method, paymentForm, onUnhandledError, }) => {
    var _a;
    const { checkoutState: { data: { getConfig }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const isTermsConditionsRequired = Boolean((_a = getConfig()) === null || _a === void 0 ? void 0 : _a.checkoutSettings.enableTermsAndConditions);
    const paymentFormRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(paymentForm);
    paymentFormRef.current = paymentForm;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        let isMounted = true;
        paymentFormRef.current.hidePaymentSubmitButton(method, true);
        const guardTermsConditions = (event) => {
            const container = document.getElementById(GOOGLE_PAY_BUTTON_CONTAINER_ID);
            const target = event.target;
            if (!container || !(target instanceof Node) || !container.contains(target)) {
                return;
            }
            const { terms } = paymentFormRef.current.getFormValues();
            if (isTermsConditionsRequired && !terms) {
                event.stopPropagation();
                event.preventDefault();
                void paymentFormRef.current.validateForm().then((errors) => {
                    if (!isMounted) {
                        return;
                    }
                    paymentFormRef.current.setSubmitted(true);
                    if (errors.terms) {
                        paymentFormRef.current.setFieldTouched('terms', true);
                    }
                });
            }
        };
        document.addEventListener('click', guardTermsConditions, true);
        const timeoutId = setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                const mergedOptions = {
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: _googlePayIntegrations__WEBPACK_IMPORTED_MODULE_3__["default"],
                    [method.id]: {
                        container: GOOGLE_PAY_BUTTON_CONTAINER_ID,
                        buttonColor: 'default',
                        buttonSizeMode: 'fill',
                        buttonType: 'pay',
                        loadingContainerId: 'checkout-app',
                        onError: onUnhandledError,
                    },
                };
                yield checkoutService.initializePayment(mergedOptions);
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        }), 0);
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
            document.removeEventListener('click', guardTermsConditions, true);
            paymentFormRef.current.hidePaymentSubmitButton(method, false);
            void checkoutService.deinitializePayment({
                gatewayId: method.gateway,
                methodId: method.id,
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GooglePayPaymentMethodComponent);


/***/ },

/***/ "./packages/google-pay-integration/src/googlePayIntegrations.ts"
/*!**********************************************************************!*\
  !*** ./packages/google-pay-integration/src/googlePayIntegrations.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/google-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/google-pay.js");

const googlePayIntegrations = [
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayAdyenV2PaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayAdyenV3PaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayAuthorizeNetPaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayCheckoutComPaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayCybersourcePaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayOrbitalPaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayStripePaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayWorldpayAccessPaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayBraintreePaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayPPCPPaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayBigCommercePaymentsPaymentStrategy,
    _bigcommerce_checkout_sdk_integrations_google_pay__WEBPACK_IMPORTED_MODULE_0__.createGooglePayTdOnlineMartPaymentStrategy,
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (googlePayIntegrations);


/***/ },

/***/ "./packages/google-pay-integration/src/index.ts"
/*!******************************************************!*\
  !*** ./packages/google-pay-integration/src/index.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GooglePayButton: () => (/* reexport safe */ _GooglePayButton__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   GooglePayPaymentMethod: () => (/* reexport safe */ _GooglePayPaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _GooglePayButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GooglePayButton */ "./packages/google-pay-integration/src/GooglePayButton.tsx");
/* harmony import */ var _GooglePayPaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GooglePayPaymentMethod */ "./packages/google-pay-integration/src/GooglePayPaymentMethod.tsx");




/***/ },

/***/ "./packages/payment-integration-api/src/errors/EmbeddedCheckoutUnsupportedError.ts"
/*!*****************************************************************************************!*\
  !*** ./packages/payment-integration-api/src/errors/EmbeddedCheckoutUnsupportedError.ts ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmbeddedCheckoutUnsupportedError)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setPrototypeOf */ "./packages/payment-integration-api/src/setPrototypeOf.ts");
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomError */ "./packages/payment-integration-api/src/errors/CustomError.ts");


class EmbeddedCheckoutUnsupportedError extends _CustomError__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(message) {
        super({
            name: 'EMBEDDED_CHECKOUT_UNSUPPORTED_ERROR',
            message,
        });
        (0,_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmbeddedCheckoutUnsupportedError.prototype);
    }
}


/***/ },

/***/ "./packages/payment-integration-api/src/isEmbedded.ts"
/*!************************************************************!*\
  !*** ./packages/payment-integration-api/src/isEmbedded.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEmbedded)
/* harmony export */ });
function isEmbedded(pathname = document.location.pathname) {
    const basePath = `/${pathname.split('/')[1]}`;
    return basePath === '/embedded-checkout';
}


/***/ },

/***/ "./packages/payment-integration-api/src/setPrototypeOf.ts"
/*!****************************************************************!*\
  !*** ./packages/payment-integration-api/src/setPrototypeOf.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPrototypeOf)
/* harmony export */ });
function setPrototypeOf(object, prototype) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(object, prototype);
    }
    else if (hasProto(object)) {
        // eslint-disable-next-line no-proto
        object.__proto__ = prototype;
    }
    return object;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function hasProto(object) {
    return '__proto__' in object;
}


/***/ },

/***/ "./packages/payment-integration-api/src/toResolvableComponent.tsx"
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/toResolvableComponent.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//# sourceMappingURL=google-pay-button.js.map