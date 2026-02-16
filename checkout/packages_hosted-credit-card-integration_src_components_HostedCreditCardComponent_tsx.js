"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/credit-card.js":
/*!***************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/credit-card.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCreditCardPaymentStrategy: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var i;class n extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class r extends n{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class o extends n{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class a extends r{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(i||(i={}));class s extends n{constructor(e){super(function(e){switch(e){case i.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case i.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case i.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case i.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var d=function(e,t,i,n){return new(i||(i=Promise))(function(r,o){function a(e){try{d(n.next(e))}catch(e){o(e)}}function s(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,s)}d((n=n.apply(e,t||[])).next())})},c=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};class l{constructor(e){this._paymentIntegrationService=e}execute(e,t){var i,n;return this._isHostedPaymentFormEnabled(null===(i=e.payment)||void 0===i?void 0:i.methodId,null===(n=e.payment)||void 0===n?void 0:n.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,i=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:n=""}={}}=i.getStoreConfigOrThrow();if(!t)throw new r;const o=this._paymentIntegrationService.createHostedForm(n,t);return o.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=o,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new o)}_executeWithoutHostedForm(e,t){return d(this,void 0,void 0,function*(){const{payment:i}=e,n=c(e,["payment"]),r=i&&i.paymentData;if(!i||!r)throw new a(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(n,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},i),{paymentData:r}))})}_executeWithHostedForm(e,t){return d(this,void 0,void 0,function*(){const{payment:n}=e,r=c(e,["payment"]),o=this._hostedForm;if(!o)throw new s(i.PaymentNotInitialized);if(!n||!n.methodId)throw new a(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(r,t),yield o.validate().then(()=>o.submit(n))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(i){return!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(i&&i.creditCard&&i.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)}}const h=(u=e=>new l(e),m=[{default:!0}],Object.assign(u,{resolveIds:m}));var u,m;


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/td-bank.js":
/*!***********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/td-bank.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTDOnlineMartPaymentStrategy: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var s,o;class a extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class d extends a{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class c extends d{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(s||(s={}));class u extends a{constructor(e){super(function(e){switch(e){case s.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case s.MissingCart:return"Unable to proceed because cart data is unavailable.";case s.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case s.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case s.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case s.MissingCheckoutConfig:case s.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case s.MissingOrder:return"Unable to proceed because order data is unavailable.";case s.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case s.MissingPayment:return"Unable to proceed because payment data is unavailable.";case s.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case s.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case s.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class l extends a{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}function h(e){return!("object"!=typeof e||null===e||void 0!==e.shouldSaveInstrument&&"boolean"!=typeof e.shouldSaveInstrument||void 0!==e.shouldSetAsDefaultInstrument&&"boolean"!=typeof e.shouldSetAsDefaultInstrument)}function m(){const{navigator:e}=window;let t;return t=e.language?e.language:e.userLanguage,{color_depth:window.screen.colorDepth||24,java_enabled:"function"==typeof e.javaEnabled&&e.javaEnabled(),language:t,screen_height:window.screen.height,screen_width:window.screen.width,time_zone_offset:(new Date).getTimezoneOffset().toString()}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(o||(o={}));class p extends a{constructor(e){super(function(e){switch(e){case o.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case o.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case o.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case o.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}function g(e){return"object"==typeof e&&null!==e&&"bigpayToken"in e&&"defaultInstrument"in e&&"provider"in e&&"trustedShippingAddress"in e&&"method"in e&&"type"in e}var y;!function(e){e.CARD_NUMBER="card-number",e.CVV="cvv",e.EXPIRY="expiry"}(y||(y={}));var b=function(e,t,n,i){return new(n||(n=Promise))(function(r,s){function o(e){try{d(i.next(e))}catch(e){s(e)}}function a(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,a)}d((i=i.apply(e,t||[])).next())})};class f{constructor(e,t,n){this.paymentIntegrationService=e,this.tdOnlineMartScriptLoader=t,this.formPoster=n,this.tdInputs=[{id:"ccNumber",fieldType:y.CARD_NUMBER},{id:"ccCvv",fieldType:y.CVV},{id:"ccExpiry",fieldType:y.EXPIRY}]}initialize(e){return b(this,void 0,void 0,function*(){const{methodId:t}=e;if(!t)throw new d('Unable to initialize payment because "options.methodId" argument is not provided.');this.tdOnlineMartClient=yield this.loadTDOnlineMartJs(),this.mountHostedFields(t)})}execute(e,t){return b(this,void 0,void 0,function*(){const{payment:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["payment"]);if(!n)throw new c(["payment"]);if(!n.methodId)throw new u(s.MissingPaymentMethod);const r=yield this.getPaymentPayloadOrThrow(n);yield this.paymentIntegrationService.submitOrder(i,t);try{yield this.paymentIntegrationService.submitPayment(r)}catch(e){yield this.processWithAdditionalAction(e)}})}finalize(){return Promise.reject(new l)}deinitialize(){return this.tdOnlineMartClient=void 0,this.tdInputs.forEach(({inputElement:e})=>{null==e||e.unmount()}),Promise.resolve()}getPaymentPayloadOrThrow(e){return b(this,void 0,void 0,function*(){const{methodId:t,paymentData:n}=e,{shouldSaveInstrument:i=!1,shouldSetAsDefaultInstrument:r=!1}=h(n)?n:{},s={browser_info:m(),shouldSaveInstrument:i,shouldSetAsDefaultInstrument:r};if(h(n)&&Boolean(n.instrumentId)&&n.instrumentId){const e=!!this.paymentIntegrationService.getState().getCartOrThrow().lineItems.digitalItems.length,i=!this.isTrustedVaultingInstrument(n.instrumentId)||e;return{methodId:t,paymentData:Object.assign(Object.assign(Object.assign({},s),{instrumentId:n.instrumentId}),i?{nonce:n.instrumentId}:{})}}let o;try{o=yield this.getTokenOrThrow()}catch(e){this.throwTokenizationError(e)}return{methodId:t,paymentData:Object.assign(Object.assign({},s),{nonce:o})}})}mountHostedFields(e){const t=this.getHostedFieldsOptions(),n=this.getTDOnlineMartClientOrThrow();this.tdInputs.forEach(i=>{const r=`${e}-${i.id}`;document.getElementById(r)&&(i.inputElement=n.create(i.fieldType,t),i.inputElement.mount(`#${r}`))})}loadTDOnlineMartJs(){return b(this,void 0,void 0,function*(){return this.tdOnlineMartClient?this.tdOnlineMartClient:this.tdOnlineMartScriptLoader.load()})}getTokenOrThrow(){return new Promise((e,t)=>{this.getTDOnlineMartClientOrThrow().createToken(n=>{const{error:i,token:r}=n;if(i||!r)return t(i);e(r)})})}getTDOnlineMartClientOrThrow(){if(!this.tdOnlineMartClient)throw new p(o.PaymentNotInitialized);return this.tdOnlineMartClient}processWithAdditionalAction(e){return b(this,void 0,void 0,function*(){if(!function(e){return(e=>"object"==typeof e&&null!==e&&"body"in e)(e)&&(t=e.body,(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isObject)(t)&&"object"==typeof t&&"errors"in t&&"three_ds_result"in t&&(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(t.errors)&&(0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(t.errors,{code:"three_d_secure_required"}));// removed by dead control flow
 var t; }(e))throw e;const{three_ds_result:t}=e.body,{acs_url:s,payer_auth_request:o,merchant_data:a}=t||{};if(!s||!o||!a)throw new c(["formUrl","threeDSSessionData","creq"]);return new Promise(e=>{this.formPoster.postForm(s,{threeDSSessionData:o,creq:a},e,"_top")})})}throwTokenizationError(e){if(!function(e){return"object"==typeof e&&null!==e&&"field"in e&&"type"in e&&"message"in e}(e))throw new u(s.MissingPaymentToken);throw new Error(e.message)}getHostedFieldsOptions(){return{style:{error:{color:"#d14343"}},classes:{error:"form-input--error"}}}isTrustedVaultingInstrument(e){const t=this.paymentIntegrationService.getState().getInstruments(),n=null==t?void 0:t.find(t=>g(t)&&t.bigpayToken===e);return!(g(n)&&!n.trustedShippingAddress)}}class M extends a{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class v{constructor(e,t=window){this.scriptLoader=e,this.tdOnlineMartWindow=t}load(){return e=this,t=void 0,i=function*(){if(this.tdOnlineMartWindow.customcheckout||(yield this.scriptLoader.loadScript("https://libs.na.bambora.com/customcheckout/1/customcheckout.js")),!this.tdOnlineMartWindow.customcheckout)throw new M;return this.tdOnlineMartWindow.customcheckout()},new((n=void 0)||(n=Promise))(function(r,s){function o(e){try{d(i.next(e))}catch(e){s(e)}}function a(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,a)}d((i=i.apply(e,t||[])).next())});// removed by dead control flow
 var e, t, n, i; }}const I=(w=n=>new f(n,new v((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_1__.getScriptLoader)()),(0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__.createFormPoster)()),O=[{id:"tdonlinemart"}],Object.assign(w,{resolveIds:O}));var w,O;


/***/ }),

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/checkoutcom-custom */ "../checkout-sdk-js/dist/esm/integrations/checkoutcom-custom.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_credit_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/credit-card */ "../checkout-sdk-js/dist/esm/integrations/credit-card.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_td_bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/td-bank */ "../checkout-sdk-js/dist/esm/integrations/td-bank.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/credit-card-integration */ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _getHostedCreditCardValidationSchema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getHostedCreditCardValidationSchema */ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _getHostedInstrumentValidationSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getHostedInstrumentValidationSchema */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _HostedCreditCardFieldset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HostedCreditCardFieldset */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx");
/* harmony import */ var _HostedCreditCardValidation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HostedCreditCardValidation */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");













const HostedCreditCardComponent = ({ method, checkoutService, checkoutState, paymentForm, language, onUnhandledError, initializePayment: initializePaymentProp, }) => {
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState);
    const { config: { cardCode, showCardHolderName }, } = method;
    const isCardCodeRequired = cardCode || cardCode === null;
    const isCardHolderNameRequired = showCardHolderName !== null && showCardHolderName !== void 0 ? showCardHolderName : true;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
    const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const styleProps = ['color', 'fontFamily', 'fontSize', 'fontWeight'];
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        let styleContainerId = '';
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
                    cardCodeVerification: isInstrumentCardCodeRequired
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_cvv_label'),
                            containerId: getHostedFieldId('ccCvv'),
                            instrumentId: selectedInstrument.bigpayToken,
                        }
                        : undefined,
                    cardNumberVerification: isInstrumentCardNumberRequired
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
                    cardName: isCardHolderNameRequired
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_name_label'),
                            containerId: getHostedFieldId('ccName'),
                        }
                        : undefined,
                    cardNumber: {
                        accessibilityLabel: language.translate('payment.credit_card_number_label'),
                        containerId: getHostedFieldId('ccNumber'),
                    },
                },
            styles: styleContainerId
                ? {
                    default: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__["default"])(styleContainerId, styleProps),
                    error: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__.CreditCardInputStylesType.Error),
                    focus: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__.CreditCardInputStylesType.Focus),
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
                (0,lodash__WEBPACK_IMPORTED_MODULE_5__.forIn)(errors, (fieldErrors = [], fieldType) => {
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
        isCardHolderNameRequired,
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
    const hostedFieldset = (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_HostedCreditCardFieldset__WEBPACK_IMPORTED_MODULE_14__["default"], { additionalFields: method.config.requireCustomerCode && (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"], { name: "ccCustomerCode" })), cardCodeId: isCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardExpiryId: getHostedFieldId('ccExpiry'), cardNameId: isCardHolderNameRequired ? getHostedFieldId('ccName') : undefined, cardNumberId: getHostedFieldId('ccNumber'), focusedFieldType: focusedFieldType }));
    const hostedValidationSchema = (0,_getHostedCreditCardValidationSchema__WEBPACK_IMPORTED_MODULE_12__["default"])({ language });
    const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((selectedInstrument) => {
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_HostedCreditCardValidation__WEBPACK_IMPORTED_MODULE_15__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired
                ? getHostedFieldId('ccNumber')
                : undefined, focusedFieldType: focusedFieldType }));
    }, [
        focusedFieldType,
        getHostedFieldId,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        method,
    ]);
    const initializePayment = initializePaymentProp !== null && initializePaymentProp !== void 0 ? initializePaymentProp : checkoutService.initializePayment;
    const initializeHostedCreditCardPayment = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return initializePayment(Object.assign(Object.assign({}, options), { integrations: [
                _bigcommerce_checkout_sdk_integrations_credit_card__WEBPACK_IMPORTED_MODULE_3__.createCreditCardPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectCreditCardPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_td_bank__WEBPACK_IMPORTED_MODULE_4__.createTDOnlineMartPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_2__.createCheckoutComCreditCardPaymentStrategy,
            ], creditCard: {
                form: yield getHostedFormOptions(selectedInstrument),
                bigpayToken: selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken,
            } }));
    }), [getHostedFormOptions, initializePayment]);
    const hostedStoredCardValidationSchema = (0,_getHostedInstrumentValidationSchema__WEBPACK_IMPORTED_MODULE_13__["default"])({ language });
    const props = {
        checkoutService,
        checkoutState,
        paymentForm,
        language,
        method,
        onUnhandledError,
    };
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, { cardFieldset: hostedFieldset, cardValidationSchema: hostedValidationSchema, deinitializePayment: checkoutService.deinitializePayment, getHostedFormOptions: getHostedFormOptions, getStoredCardValidationFieldset: getHostedStoredCardValidationFieldset, initializePayment: initializeHostedCreditCardPayment, storedCardValidationSchema: hostedStoredCardValidationSchema })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardComponent);


/***/ })

}]);
//# sourceMappingURL=packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx.js.map