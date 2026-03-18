"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["payment-method-v1"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/no-payment.js"
/*!**************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/no-payment.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNoPaymentStrategy: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
class t extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class r extends t{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class n{constructor(e){this._paymentIntegrationService=e}execute(t,r){return n=this,o=void 0,a=function*(){yield this._paymentIntegrationService.submitOrder((0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(t,"payment"),r)},new((i=void 0)||(i=Promise))(function(e,t){function r(e){try{c(a.next(e))}catch(e){t(e)}}function s(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i(function(e){e(n)})).then(r,s)}c((a=a.apply(n,o||[])).next())});// removed by dead control flow
 var n, o, i, a; }finalize(){return Promise.reject(new r)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}}const o=(i=e=>new n(e),a=[{id:"nopaymentdatarequired"}],Object.assign(i,{resolveIds:a}));var i,a;


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethod.tsx"
/*!***********************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethod.tsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_no_payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/no-payment */ "../checkout-sdk-js/dist/esm/integrations/no-payment.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/CaptureMessageComponent.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaymentMethodProviderType */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts");
/* harmony import */ var _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaymentMethodType */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");




const HostedCreditCardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() | hosted-credit-card-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-39091b"), __webpack_require__.e("hosted-credit-card-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! ./HostedCreditCardPaymentMethod */ "./packages/core/src/app/payment/paymentMethod/HostedCreditCardPaymentMethod.tsx")));
const HostedPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() | hosted-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-39091b"), __webpack_require__.e("hosted-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! ./HostedPaymentMethod */ "./packages/core/src/app/payment/paymentMethod/HostedPaymentMethod.tsx")));



/**
 * If possible, try to avoid having components that are specific to a specific
 * payment provider or method. Instead, try to generalise the requirements and
 * use components that can are reusable for multiple payment methods. i.e.:
 * CreditCardPaymentMethod, HostedPaymentMethod etc... If it is really necessary
 * for a particular payment method, you may write a method-specific component for
 * the purpose of configuring a general-purpose component in order to fulfill
 * its specific product or technical requirements.
 */
const PaymentMethodComponent = (props) => {
    const { method } = props;
    if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_4__["default"].Humm ||
        method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_4__["default"].Laybuy ||
        method.type === _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Hosted) {
        const sentryMessage = `DataHostedPaymentMethod ${JSON.stringify(method)}`;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__.CaptureMessageComponent, { message: sentryMessage }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HostedPaymentMethod, Object.assign({}, props))));
    }
    // NOTE: Some payment methods have `method` as `credit-card` but they are
    // actually not. Therefore, as a workaround, we are doing the following
    // check last.
    if (method.method === _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard ||
        method.type === _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api) {
        const knownMethods = [
            { id: 'authorizenet', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'clover', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'cba_mpgs', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'cybersourcev2', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'ewayrapid', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'hps', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'nmi', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'quickbooks', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'sagepay', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'stripe', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'usaepay', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'vantiv', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'orbital', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'elavon', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'firstdatae4v14', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'cybersource', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'migs', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'vantivcore', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'bnz', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'shopkeep', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'paymetric', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'googlepay', gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].GooglePay, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: "eway", gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: "wepay", gateway: null, method: _PaymentMethodType__WEBPACK_IMPORTED_MODULE_6__["default"].CreditCard, type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: "stripev3", gateway: null, method: "multi-option", type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'bigpaypay', gateway: null, method: 'zzzblackhole', type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'testgateway', gateway: null, method: 'zzzblackhole', type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
            { id: 'afterpay', gateway: null, method: 'pay_by_installment', type: _PaymentMethodProviderType__WEBPACK_IMPORTED_MODULE_5__["default"].Api },
        ];
        let sentryMessage;
        if (knownMethods.some(knownMethod => knownMethod.id === method.id &&
            knownMethod.gateway === method.gateway &&
            knownMethod.method === method.method &&
            knownMethod.type === method.type)) {
            sentryMessage = '';
        }
        else {
            sentryMessage = `DataHostedCreditCardPaymentMethodUpdated ${JSON.stringify(method)}`;
        }
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__.CaptureMessageComponent, { message: sentryMessage }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HostedCreditCardPaymentMethod, Object.assign({}, props))));
    }
    return null;
};
function mapToWithCheckoutPaymentMethodProps({ checkoutService, checkoutState }, { method }) {
    const { statuses: { isInitializingPayment }, } = checkoutState;
    return {
        deinitializeCustomer: checkoutService.deinitializeCustomer,
        deinitializePayment: checkoutService.deinitializePayment,
        initializeCustomer: checkoutService.initializeCustomer,
        initializePayment: (options) => {
            var _a;
            return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [
                    ...(_a = options.integrations) !== null && _a !== void 0 ? _a : [],
                    // The strategies below don’t appear to correspond to any existing component,
                    // so they are initialized globally at the root level.
                    _bigcommerce_checkout_sdk_integrations_no_payment__WEBPACK_IMPORTED_MODULE_0__.createNoPaymentStrategy,
                ] }));
        },
        isInitializing: isInitializingPayment(method.id),
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_3__["default"])(mapToWithCheckoutPaymentMethodProps)((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PaymentMethodComponent)));


/***/ },

/***/ "./packages/payment-integration-api/src/CaptureMessageComponent.tsx"
/*!**************************************************************************!*\
  !*** ./packages/payment-integration-api/src/CaptureMessageComponent.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureMessageComponent: () => (/* binding */ CaptureMessageComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");


const CaptureMessageComponent = ({ message }) => {
    const { errorLogger } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!message || !errorLogger) {
            return;
        }
        if (errorLogger.logMessage) {
            errorLogger.logMessage(message);
        }
        else {
            // eslint-disable-next-line no-console
            console.log(`checkout-js attempted to log the following message: "${message}", but no Sentry logger is configured.`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);
    return null;
};


/***/ }

}]);
//# sourceMappingURL=payment-method-v1.js.map