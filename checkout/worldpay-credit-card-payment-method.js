"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["worldpay-credit-card-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/worldpayaccess.js"
/*!******************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/worldpayaccess.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorldpayAccessPaymentStrategy: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var o;class r extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class a extends r{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class s extends r{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class d extends a{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(o||(o={}));class c extends r{constructor(e){super(function(e){switch(e){case o.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case o.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case o.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case o.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var u=function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{d(i.next(e))}catch(e){r(e)}}function s(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}d((i=i.apply(e,t||[])).next())})},l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};class m{constructor(e){this._paymentIntegrationService=e}execute(e,t){var n,i;return this._isHostedPaymentFormEnabled(null===(n=e.payment)||void 0===n?void 0:n.methodId,null===(i=e.payment)||void 0===i?void 0:i.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,n=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:i=""}={}}=n.getStoreConfigOrThrow();if(!t)throw new a;const o=this._paymentIntegrationService.createHostedForm(i,t);return o.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=o,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new s)}_executeWithoutHostedForm(e,t){return u(this,void 0,void 0,function*(){const{payment:n}=e,i=l(e,["payment"]),o=n&&n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(i,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:o}))})}_executeWithHostedForm(e,t){return u(this,void 0,void 0,function*(){const{payment:n}=e,i=l(e,["payment"]),r=this._hostedForm;if(!r)throw new c(o.PaymentNotInitialized);if(!n||!n.methodId)throw new d(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(i,t),yield r.validate().then(()=>r.submit(n))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(t){return!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(t&&t.creditCard&&t.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)}}const h=e=>"object"==typeof e&&null!==e&&"body"in e;var p=function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{d(i.next(e))}catch(e){r(e)}}function s(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}d((i=i.apply(e,t||[])).next())})};const y="Payment cannot continue";let f;class v extends m{initialize(e){const t=Object.create(null,{initialize:{get:()=>super.initialize}});return p(this,void 0,void 0,function*(){if(this._initializeOptions=e&&e.worldpay,!this._initializeOptions)throw new c(o.PaymentNotInitialized);return t.initialize.call(this,e)})}execute(e,t){const n=Object.create(null,{execute:{get:()=>super.execute}});return p(this,void 0,void 0,function*(){const{payment:i}=e;if(f=this._submitAdditionalAction(),!i)throw new d(["payment"]);try{return yield n.execute.call(this,e,t)}catch(e){return this._processAdditionalAction(e,i)}})}_processAdditionalAction(e,i){return p(this,void 0,void 0,function*(){return h(e)&&(0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(e.body.errors,{code:"additional_action_required"})?new Promise((r,a)=>{const s=e=>p(this,void 0,void 0,function*(){if(-1===e.origin.indexOf("cardinalcommerce.com"))return;if("string"!=typeof e.data||!this._isValidJsonWithSessionId(e.data))return a(new Error(y));window.removeEventListener("message",s),d.remove();const u=JSON.parse(e.data),l=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({},i,{paymentData:{threeDSecure:{token:u.SessionId}}});try{r(yield f(l))}catch(e){if(!h(e)||!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(e.body.errors,{code:"three_d_secure_required"}))return a(e);if(!this._initializeOptions)return a(new c(o.PaymentNotInitialized));const{onLoad:t}=this._initializeOptions,i=this._createIframe(e.body.three_ds_result);try{t(i,()=>a(new Error("Payment was cancelled")))}catch(e){a(new Error(y))}}});let d;window.addEventListener("message",s);try{d=this._createHiddenIframe(e.body)}catch(e){throw window.removeEventListener("message",s),new Error(y)}}):Promise.reject(e)})}_createHiddenIframe(e){const t=document.createElement("iframe");if(document.body.appendChild(t),!t.contentWindow)throw new Error;t.id="worldpay_hosted_hidden_payment_page",t.height="0px",t.width="0px";const n=document.createElement("form"),i="collectionForm";n.id=i,n.name="devicedata",n.method="post";const o=e.additional_action_required.data.redirect_url;n.action=o;const r=document.createElement("input");r.name="Bin",r.type="hidden",r.value=e.provider_data.source_id,n.appendChild(r);const a=document.createElement("input");a.name="JWT",a.type="hidden",a.value=e.provider_data.data,n.appendChild(a);const s=document.createElement("button");s.type="submit",s.id="btnsubmit",n.appendChild(s),navigator.userAgent.match("Firefox")?t.srcdoc=n.outerHTML:t.contentWindow.document.body.appendChild(n);const d=document.createElement("script");return d.innerHTML=`\n            document.getElementById('${i}').submit();\n        `,t.contentWindow.document.body.appendChild(d),t}_createIframe(e){const t=document.createElement("form");t.id="challengeForm",t.method="POST",t.action=e.acs_url;const n=document.createElement("input");n.name="JWT",n.type="hidden",n.value=e.payer_auth_request,t.appendChild(n);const i=document.createElement("input");i.name="MD",i.type="hidden",i.value=`merchantSessionId=${e.merchant_data}`,t.appendChild(i);const o=document.createElement("script");o.type="text/javascript",o.innerHTML="window.onload = function() { document.getElementById('challengeForm').submit(); }";const r=document.createElement("iframe");return r.name="worldpay_hosted_payment_page",r.height="400",r.width="100%",r.srcdoc=`${t.outerHTML} ${o.outerHTML}`,r}_submitAdditionalAction(){if(this._shouldRenderHostedForm){if(!this._hostedForm)throw new c(o.PaymentNotInitialized);const e=this._hostedForm;return t=>p(this,void 0,void 0,function*(){yield e.submit(t)})}return e=>p(this,void 0,void 0,function*(){yield this._paymentIntegrationService.submitPayment(e)})}_isValidJsonWithSessionId(e){try{const t=JSON.parse(e);return!(!t.SessionId||!t.Status)}catch(e){return!1}}}const _=(b=e=>new v(e),w=[{id:"worldpayaccess"}],Object.assign(b,{resolveIds:w}));var b,w;


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx"
/*!***********************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHostedCreditCard: () => (/* binding */ useHostedCreditCard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");





const useHostedCreditCard = ({ checkoutState, method, language, paymentForm, }) => {
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm } = paymentForm;
    const { config } = method;
    const { cardCode: requireCardCode } = config;
    const isCardCodeRequired = requireCardCode || requireCardCode === null;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState);
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((selectedInstrument) => {
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components__WEBPACK_IMPORTED_MODULE_6__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired
                ? getHostedFieldId('ccNumber')
                : undefined, focusedFieldType: focusedFieldType }));
    }, [
        focusedFieldType,
        getHostedFieldId,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        method,
    ]);
    const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const styleProps = ['color', 'fontFamily', 'fontSize', 'fontWeight'];
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        let styleContainerId;
        if (selectedInstrument) {
            if (isInstrumentCardCodeRequired) {
                styleContainerId = getHostedFieldId('ccCvv');
            }
            else if (isInstrumentCardNumberRequired) {
                styleContainerId = getHostedFieldId('ccNumber');
            }
        }
        else {
            styleContainerId = getHostedFieldId('ccNumber');
        }
        return {
            fields: selectedInstrument
                ? {
                    cardCodeVerification: isInstrumentCardCodeRequired && selectedInstrument
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_cvv_label'),
                            containerId: getHostedFieldId('ccCvv'),
                            instrumentId: selectedInstrument.bigpayToken,
                        }
                        : undefined,
                    cardNumberVerification: isInstrumentCardNumberRequired && selectedInstrument
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_number_label'),
                            containerId: getHostedFieldId('ccNumber'),
                            instrumentId: selectedInstrument.bigpayToken,
                        }
                        : undefined,
                }
                : {
                    cardCode: isCardCodeRequired
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_cvv_label'),
                            containerId: getHostedFieldId('ccCvv'),
                        }
                        : undefined,
                    cardExpiry: {
                        accessibilityLabel: language.translate('payment.credit_card_expiration_label'),
                        containerId: getHostedFieldId('ccExpiry'),
                        placeholder: language.translate('payment.credit_card_expiration_placeholder_text'),
                    },
                    cardName: {
                        accessibilityLabel: language.translate('payment.credit_card_name_label'),
                        containerId: getHostedFieldId('ccName'),
                    },
                    cardNumber: {
                        accessibilityLabel: language.translate('payment.credit_card_number_label'),
                        containerId: getHostedFieldId('ccNumber'),
                    },
                },
            styles: styleContainerId
                ? {
                    default: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(styleContainerId, styleProps),
                    error: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__.CreditCardInputStylesType.Error),
                    focus: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__.CreditCardInputStylesType.Focus),
                }
                : {},
            onBlur: ({ fieldType }) => {
                if (focusedFieldType === fieldType) {
                    setFocusedFieldType(undefined);
                }
            },
            onCardTypeChange: ({ cardType }) => {
                setFieldValue('hostedForm.cardType', cardType);
            },
            onEnter: () => {
                setSubmitted(true);
                submitForm();
            },
            onFocus: ({ fieldType }) => {
                setFocusedFieldType(fieldType);
            },
            onValidate: ({ errors = {} }) => {
                (0,lodash__WEBPACK_IMPORTED_MODULE_1__.forIn)(errors, (fieldErrors = [], fieldType) => {
                    var _a, _b;
                    const errorKey = `hostedForm.errors.${fieldType}`;
                    setFieldValue(errorKey, (_b = (_a = fieldErrors[0]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : '');
                    if (fieldErrors[0]) {
                        setFieldTouched(errorKey);
                    }
                });
            },
        };
    }), [
        focusedFieldType,
        getHostedFieldId,
        isCardCodeRequired,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        language,
        method,
        setFieldTouched,
        setFieldValue,
        setSubmitted,
        submitForm,
    ]);
    return { getHostedStoredCardValidationFieldset, getHostedFormOptions };
};


/***/ },

/***/ "./packages/worldpay-access-integration/src/WorldpayCreditCardPaymentMethod.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/worldpay-access-integration/src/WorldpayCreditCardPaymentMethod.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_worldpayaccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/worldpayaccess */ "../checkout-sdk-js/dist/esm/integrations/worldpayaccess.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/credit-card-integration */ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");









const WorldpayCreditCardPaymentMethod = (_a) => {
    var { language, paymentForm, checkoutState, checkoutService, method } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["language", "paymentForm", "checkoutState", "checkoutService", "method"]);
    const [threeDSecureVerification, setThreeDSecureVerification] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { getHostedStoredCardValidationFieldset } = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__.useHostedCreditCard)({
        checkoutState,
        method,
        language,
        paymentForm,
    });
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(checkoutState);
    const { config: { cardCode }, } = method;
    const isCardCodeRequired = cardCode || cardCode === null;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
    const hostedStoredCardValidationSchema = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__["default"])({ language });
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({
        paymentPageContentRef: (0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)(),
    });
    const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const styleProps = ['color', 'fontFamily', 'fontSize', 'fontWeight'];
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        const styleContainerId = selectedInstrument
            ? isInstrumentCardCodeRequired
                ? getHostedFieldId('ccCvv')
                : undefined
            : getHostedFieldId('ccNumber');
        return {
            fields: selectedInstrument
                ? {
                    cardCodeVerification: isInstrumentCardCodeRequired && selectedInstrument
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_cvv_label'),
                            containerId: getHostedFieldId('ccCvv'),
                            instrumentId: selectedInstrument.bigpayToken,
                        }
                        : undefined,
                    cardNumberVerification: isInstrumentCardNumberRequired && selectedInstrument
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_number_label'),
                            containerId: getHostedFieldId('ccNumber'),
                            instrumentId: selectedInstrument.bigpayToken,
                        }
                        : undefined,
                }
                : {
                    cardCode: isCardCodeRequired
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_cvv_label'),
                            containerId: getHostedFieldId('ccCvv'),
                        }
                        : undefined,
                    cardExpiry: {
                        accessibilityLabel: language.translate('payment.credit_card_expiration_label'),
                        containerId: getHostedFieldId('ccExpiry'),
                        placeholder: language.translate('payment.credit_card_expiration_placeholder_text'),
                    },
                    cardName: {
                        accessibilityLabel: language.translate('payment.credit_card_name_label'),
                        containerId: getHostedFieldId('ccName'),
                    },
                    cardNumber: {
                        accessibilityLabel: language.translate('payment.credit_card_number_label'),
                        containerId: getHostedFieldId('ccNumber'),
                    },
                },
            styles: styleContainerId
                ? {
                    default: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(styleContainerId, styleProps),
                    error: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__.CreditCardInputStylesType.Error),
                    focus: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__.CreditCardInputStylesType.Focus),
                }
                : {},
            onBlur: ({ fieldType }) => {
                if (focusedFieldType === fieldType) {
                    setFocusedFieldType(undefined);
                }
            },
            onCardTypeChange: ({ cardType }) => {
                setFieldValue('hostedForm.cardType', cardType);
            },
            onEnter: () => {
                setSubmitted(true);
                submitForm();
            },
            onFocus: ({ fieldType }) => {
                setFocusedFieldType(fieldType);
            },
            onValidate: ({ errors = {} }) => {
                (0,lodash__WEBPACK_IMPORTED_MODULE_2__.forIn)(errors, (fieldErrors = [], fieldType) => {
                    var _a, _b;
                    const errorKey = `hostedForm.errors.${fieldType}`;
                    setFieldValue(errorKey, (_b = (_a = fieldErrors[0]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : '');
                    if (fieldErrors[0]) {
                        setFieldTouched(errorKey);
                    }
                });
            },
        };
    }), [
        focusedFieldType,
        getHostedFieldId,
        isCardCodeRequired,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        language,
        method,
        setFieldValue,
        setFieldTouched,
        setFocusedFieldType,
        setSubmitted,
        submitForm,
    ]);
    const cancelWorldpayModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        setThreeDSecureVerification(undefined);
        if (ref.current.cancelThreeDSecureVerification) {
            ref.current.cancelThreeDSecureVerification();
            ref.current.cancelThreeDSecureVerification = undefined;
        }
    }, []);
    const initializeWorldpayPayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_worldpayaccess__WEBPACK_IMPORTED_MODULE_1__.createWorldpayAccessPaymentStrategy], creditCard: {
                form: getHostedFormOptions && (yield getHostedFormOptions(selectedInstrument)),
            }, worldpay: {
                onLoad(content, cancel) {
                    setThreeDSecureVerification(content);
                    ref.current.cancelThreeDSecureVerification = cancel;
                },
            } }));
    }), [checkoutService, getHostedFormOptions]);
    const hostedValidationSchema = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"])({ language });
    const appendPaymentPageContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        var _a;
        if (threeDSecureVerification) {
            (_a = ref.current.paymentPageContentRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(threeDSecureVerification);
        }
    }, [threeDSecureVerification]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { cardFieldset: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_8__["default"], { additionalFields: method.config.requireCustomerCode && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"], { name: "ccCustomerCode" })), cardCodeId: isCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardExpiryId: getHostedFieldId('ccExpiry'), cardNameId: getHostedFieldId('ccName'), cardNumberId: getHostedFieldId('ccNumber'), focusedFieldType: focusedFieldType }), cardValidationSchema: hostedValidationSchema, checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, getStoredCardValidationFieldset: getHostedStoredCardValidationFieldset, initializePayment: initializeWorldpayPayment, language: language, method: method, paymentForm: paymentForm, storedCardValidationSchema: hostedStoredCardValidationSchema })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_14__["default"], { isOpen: !!threeDSecureVerification, onAfterOpen: appendPaymentPageContent, onRequestClose: cancelWorldpayModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { ref: ref.current.paymentPageContentRef }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_13__["default"])(WorldpayCreditCardPaymentMethod, [{ id: 'worldpayaccess' }]));


/***/ },

/***/ "./packages/worldpay-access-integration/src/index.ts"
/*!***********************************************************!*\
  !*** ./packages/worldpay-access-integration/src/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldpayCreditCardPaymentMethod: () => (/* reexport safe */ _WorldpayCreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _WorldpayCreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorldpayCreditCardPaymentMethod */ "./packages/worldpay-access-integration/src/WorldpayCreditCardPaymentMethod.tsx");



/***/ }

}]);
//# sourceMappingURL=worldpay-credit-card-payment-method.js.map