"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["moneris-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/moneris.js"
/*!***********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/moneris.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMonerisPaymentStrategy: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var n,s;class r extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class o extends r{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(n||(n={}));class a extends r{constructor(e){super(function(e){switch(e){case n.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case n.MissingCart:return"Unable to proceed because cart data is unavailable.";case n.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case n.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case n.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case n.MissingCheckoutConfig:case n.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case n.MissingOrder:return"Unable to proceed because order data is unavailable.";case n.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case n.MissingPayment:return"Unable to proceed because payment data is unavailable.";case n.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case n.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case n.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class d extends o{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class c extends r{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(s||(s={}));class l extends r{constructor(e){super(function(e){switch(e){case s.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case s.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case s.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case s.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var u=function(e,t,i,n){return new(i||(i=Promise))(function(s,r){function o(e){try{d(n.next(e))}catch(e){r(e)}}function a(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,a)}d((n=n.apply(e,t||[])).next())})};const h="moneris-payment-iframe";class m{constructor(e){this.paymentIntegrationService=e}initialize(e){return u(this,void 0,void 0,function*(){const t=this.paymentIntegrationService.getState(),{moneris:i,methodId:s}=e;if(!s)throw new o('Unable to initialize payment because "methodId" argument is not provided.');if(!i)throw new o('Unable to initialize payment because "options.moneris" argument is not provided.');this.initializeOptions=i;const{config:r,initializationData:d}=t.getPaymentMethodOrThrow(s);if(!(null==d?void 0:d.profileId))throw new a(n.MissingPaymentMethod);return i.form&&this.shouldShowTSVHostedForm(s)&&(this.hostedForm=yield this.mountCardVerificationfields(i.form)),this.iframe||(this.iframe=this.createIframe(i.containerId,d,!!r.testMode)),Promise.resolve()})}execute(e,t){return u(this,void 0,void 0,function*(){const{payment:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["payment"]);if(!i)throw new d(["payment"]);const{isStoreCreditApplied:s}=this.paymentIntegrationService.getState().getCheckoutOrThrow();var r;if(s&&(yield this.paymentIntegrationService.applyStoreCredit(s)),yield this.paymentIntegrationService.submitOrder(n,t),!i.paymentData||(r=i.paymentData,!Boolean(r.instrumentId)))return this.executeWithCC(i);yield this.executeWithVaulted(i)})}finalize(){return Promise.reject(new c)}deinitialize(){return this.hostedForm&&this.hostedForm.detach(),this.windowEventListener&&(window.removeEventListener("message",this.windowEventListener),this.windowEventListener=void 0),this.iframe&&this.iframe.parentNode&&(this.iframe.parentNode.removeChild(this.iframe),this.iframe=void 0),Promise.resolve()}executeWithCC(e){return u(this,void 0,void 0,function*(){const t=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e.methodId).config.testMode,i=e.paymentData||{},n="object"!=typeof(r=i)||null===r||void 0!==r.shouldSaveInstrument&&"boolean"!=typeof r.shouldSaveInstrument||void 0!==r.shouldSetAsDefaultInstrument&&"boolean"!=typeof r.shouldSetAsDefaultInstrument?{shouldSaveInstrument:!1,shouldSetAsDefaultInstrument:!1}:i;var r;const{shouldSaveInstrument:o,shouldSetAsDefaultInstrument:a}=n,d=yield new Promise((e,i)=>{if(!this.iframe)throw new l(s.PaymentNotInitialized);const n=this.iframe.contentWindow;if(null===n)throw new l(s.PaymentNotInitialized);n.postMessage("tokenize",this.monerisURL(!!t)),this.windowEventListener=n=>{if("string"==typeof n.data&&n.origin===`https://${t?"esqa":"www3"}.moneris.com`)try{e(this.handleMonerisResponse(n))}catch(e){i(e)}},window.addEventListener("message",this.windowEventListener)});void 0!==d&&(yield this.paymentIntegrationService.submitPayment({methodId:e.methodId,paymentData:{nonce:d,shouldSaveInstrument:o,shouldSetAsDefaultInstrument:a}}))})}executeWithVaulted(e){return u(this,void 0,void 0,function*(){if(this.hostedForm){const t=this.hostedForm;return yield t.validate(),yield t.submit(e),this.paymentIntegrationService.loadCurrentOrder()}return this.paymentIntegrationService.submitPayment(e)})}shouldShowTSVHostedForm(e){return this.isHostedPaymentFormEnabled(e)&&this.isHostedFieldAvailable()}isHostedPaymentFormEnabled(e){const t=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e);return Boolean(t.config.isHostedFormEnabled)}isHostedFieldAvailable(){var t;const n=this.getInitializeOptions(),s=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(null===(t=n.form)||void 0===t?void 0:t.fields,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty);return!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(s)}getInitializeOptions(){if(!this.initializeOptions)throw new l(s.PaymentNotInitialized);return this.initializeOptions}mountCardVerificationfields(e){var t;return u(this,void 0,void 0,function*(){const i=null===(t=this.paymentIntegrationService.getState().getStoreConfig())||void 0===t?void 0:t.paymentSettings.bigpayBaseUrl;if(!i)throw new a(n.MissingCheckoutConfig);const s=this.paymentIntegrationService.createHostedForm(i,e);return yield s.attach(),s})}createIframe(e,i,n,s){const r=document.getElementById(e);if(!r)throw new o("Unable to create iframe without valid container ID.");const a=document.createElement("iframe"),d={id:i.profileId,pmmsg:!0,display_labels:1,enable_exp:1,enable_cvd:1,css_body:(null==s?void 0:s.cssBody)||"font-family: Arial, Helvetica,sans-serif;background: transparent;",css_textbox:(null==s?void 0:s.cssTextbox)||"border-radius:4px;border: 2px solid rgb(00,00,00);width: 100%;font-weight: 600;padding: 8px 8px;outline: 0;",css_textbox_pan:(null==s?void 0:s.cssTextboxCardNumber)||"width: 240px;",css_textbox_exp:(null==s?void 0:s.cssTextboxExpiryDate)||"margin-bottom: 0;width: calc(30% - 12px);",css_textbox_cvd:(null==s?void 0:s.cssTextboxCVV)||"margin-bottom: 0;width: calc(30% - 12px);",css_input_label:(null==s?void 0:s.cssInputLabel)||"font-size: 10px;position: relative;top: 8px;left: 6px;background: rgb(255,255,255);padding: 3px 2px;color: rgb(66,66,66);font-weight: 600;z-index: 2;",pan_label:i.creditCardLabel||"Credit Card Number",exp_label:i.expiryDateLabel||"Expiration",cvd_label:i.cvdLabel||"CVD"},c=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(d,(e,t)=>`${t}=${e}`).join("&");return a.width="100%",a.height="100%",a.name=h,a.id=h,a.style.border="none",a.src=`${this.monerisURL(n)}?${c}`,a.allow="payment",r.appendChild(a),a}handleMonerisResponse(e){const t=JSON.parse(e.data);if("001"!==t.responseCode[0])throw new Error(t.errorMessage);return t.dataKey}monerisURL(e){return`https://${e?"esqa":"www3"}.moneris.com/HPPtoken/index.php`}}const p=(g=e=>new m(e),b=[{id:"moneris"}],Object.assign(g,{resolveIds:b}));var g,b;


/***/ },

/***/ "./packages/dom-utils/src/getAppliedStyles.ts"
/*!****************************************************!*\
  !*** ./packages/dom-utils/src/getAppliedStyles.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAppliedStyles)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function getAppliedStyles(element, properties, pseudoElementSelector) {
    const declaration = window.getComputedStyle(element, pseudoElementSelector);
    return properties.reduce((result, propertyName) => (Object.assign(Object.assign({}, result), { [propertyName]: declaration.getPropertyValue((0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(propertyName)) })), {});
}


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx"
/*!************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");




const HostedCreditCardCodeField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "has-icon", appearFocused: appearFocused, id: id }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], null))), [id, appearFocused]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_cvv_label" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_1__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "has-tip" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-ccFields-field--ccCvv", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardCodeField);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx"
/*!************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");



const HostedCreditCardExpiryField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: appearFocused, id: id }), [id, appearFocused]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccExpiry", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_expiration_label" }), name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardExpiryField);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx"
/*!****************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");



const HostedCreditCardNumberField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "has-icon", appearFocused: appearFocused, id: id }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null))), [id, appearFocused]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccNumber", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_number_label" }), name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardNumberField);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx"
/*!**************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx");



const HostedCreditCardValidation = ({ cardCodeId, cardNumberId, cardExpiryId, focusedFieldType, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    cardNumberId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        cardNumberId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: focusedFieldType === 'cardNumber', id: cardNumberId, name: "hostedForm.errors.cardNumberVerification" })),
        cardCodeId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_3__["default"], { appearFocused: focusedFieldType === 'cardCode', id: cardCodeId, name: "hostedForm.errors.cardCodeVerification" })),
        cardExpiryId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_4__["default"], { appearFocused: focusedFieldType === 'cardExpiry', id: cardExpiryId, name: "hostedForm.errors.cardExpiryVerification" })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardValidation);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts"
/*!*******************************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts ***!
  \*******************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getHostedInstrumentValidationSchema({ language, isCardExpiryRequired = false, }) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)().shape({
        instrumentId: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(),
        hostedForm: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
            .required()
            .shape({
            errors: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
                .required()
                .shape(Object.assign({ cardCodeVerification: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_cvv_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_cvv_invalid_error'),
                    test: (value) => value !== 'invalid_card_code',
                }), cardNumberVerification: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_number_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_number_invalid_error'),
                    test: (value) => value !== 'invalid_card_number',
                })
                    .test({
                    message: language.translate('payment.credit_card_number_mismatch_error'),
                    test: (value) => value !== 'mismatched_card_number',
                }) }, (isCardExpiryRequired
                ? {
                    cardExpiryVerification: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                        .test({
                        message: language.translate('payment.credit_card_expiration_required_error'),
                        test: (value) => value !== 'required',
                    })
                        .test({
                        message: language.translate('payment.credit_card_expiration_invalid_error'),
                        test: (value) => value !== 'invalid_card_expiry',
                    }),
                }
                : {}))),
        }),
    });
}));


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

/***/ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx"
/*!********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardInputStylesType: () => (/* binding */ CreditCardInputStylesType),
/* harmony export */   "default": () => (/* binding */ getCreditCardInputStyles)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");





var CreditCardInputStylesType;
(function (CreditCardInputStylesType) {
    CreditCardInputStylesType["Default"] = "default";
    CreditCardInputStylesType["Error"] = "error";
    CreditCardInputStylesType["Focus"] = "focus";
})(CreditCardInputStylesType || (CreditCardInputStylesType = {}));
function getCreditCardInputStyles(containerId, properties, type = CreditCardInputStylesType.Default) {
    const container = document.createElement('div');
    const parentContainer = document.getElementById(containerId);
    if (!parentContainer) {
        throw new Error('Unable to retrieve input styles as the provided container ID is not valid.');
    }
    parentContainer.appendChild(container);
    return new Promise((resolve) => {
        const callbackRef = (element) => {
            if (!element) {
                return;
            }
            resolve((0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(element, properties));
            react_dom__WEBPACK_IMPORTED_MODULE_2__.unmountComponentAtNode(container);
            if (container.parentElement) {
                container.parentElement.removeChild(container);
            }
        };
        react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: { isSubmitted: true, setSubmitted: lodash__WEBPACK_IMPORTED_MODULE_0__.noop } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hasError: type === CreditCardInputStylesType.Error },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { appearFocused: type === CreditCardInputStylesType.Focus, ref: callbackRef }))), container);
    });
}


/***/ },

/***/ "./packages/moneris-integration/src/MonerisPaymentMethod.tsx"
/*!*******************************************************************!*\
  !*** ./packages/moneris-integration/src/MonerisPaymentMethod.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_moneris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/moneris */ "../checkout-sdk-js/dist/esm/integrations/moneris.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");








const MonerisPaymentMethod = (_a) => {
    var { language, paymentForm, checkoutState, checkoutService, method } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["language", "paymentForm", "checkoutState", "checkoutService", "method"]);
    const containerId = `moneris-iframe-container`;
    const { getHostedStoredCardValidationFieldset, getHostedFormOptions } = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__.useHostedCreditCard)({
        checkoutState,
        method,
        language,
        paymentForm,
    });
    const hostedStoredCardValidationSchema = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__["default"])({ language });
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const initializeMonerisPayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const paymentConfig = Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_moneris__WEBPACK_IMPORTED_MODULE_1__.createMonerisPaymentStrategy], moneris: Object.assign({ containerId }, (selectedInstrument && {
                form: yield getHostedFormOptions(selectedInstrument),
            })) });
        return checkoutService.initializePayment(paymentConfig);
    }), [containerId, getHostedFormOptions, checkoutService]);
    const validateInstrument = (_shouldShowNumber, selectedInstrument) => {
        return getHostedStoredCardValidationFieldset(selectedInstrument);
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeMonerisPayment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, signOut: checkoutService.signOutCustomer, storedCardValidationSchema: hostedStoredCardValidationSchema, validateInstrument: validateInstrument }, rest)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_9__["default"])(MonerisPaymentMethod, [{ id: 'moneris' }]));


/***/ },

/***/ "./packages/moneris-integration/src/index.ts"
/*!***************************************************!*\
  !*** ./packages/moneris-integration/src/index.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonerisPaymentMethod: () => (/* reexport safe */ _MonerisPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MonerisPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonerisPaymentMethod */ "./packages/moneris-integration/src/MonerisPaymentMethod.tsx");



/***/ },

/***/ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx"
/*!************************************************************************************!*\
  !*** ./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const TextInputIframeContainer = (_a) => {
    var { additionalClassName, appearFocused, testId } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "appearFocused", "testId"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", Object.assign({}, props, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input', 'optimizedCheckout-form-input', { 'form-input--focus': appearFocused }, { 'optimizedCheckout-form-input--focus': appearFocused }, additionalClassName), "data-test": testId })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInputIframeContainer);


/***/ }

}]);
//# sourceMappingURL=moneris-payment-method.js.map