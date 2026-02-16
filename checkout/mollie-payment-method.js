"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["mollie-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/mollie.js":
/*!**********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/mollie.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMolliePaymentStrategy: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var n,o;class s extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class a extends s{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(n||(n={}));class r extends s{constructor(e){super(function(e){switch(e){case n.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case n.MissingCart:return"Unable to proceed because cart data is unavailable.";case n.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case n.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case n.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case n.MissingCheckoutConfig:case n.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case n.MissingOrder:return"Unable to proceed because order data is unavailable.";case n.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case n.MissingPayment:return"Unable to proceed because payment data is unavailable.";case n.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case n.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case n.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class d extends a{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}function l(){const{navigator:e}=window;let t;return t=e.language?e.language:e.userLanguage,{color_depth:window.screen.colorDepth||24,java_enabled:"function"==typeof e.javaEnabled&&e.javaEnabled(),language:t,screen_height:window.screen.height,screen_width:window.screen.width,time_zone_offset:(new Date).getTimezoneOffset().toString()}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(o||(o={}));class c extends s{constructor(e){super(function(e){switch(e){case o.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case o.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case o.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case o.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var u,m=function(e,t,i,n){return new(i||(i=Promise))(function(o,s){function a(e){try{d(n.next(e))}catch(e){s(e)}}function r(e){try{d(n.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,r)}d((n=n.apply(e,t||[])).next())})};!function(e){e.CREDIT_CARD="credit_card"}(u||(u={}));const h=["klarnapaylater","klarnasliceit"];class p{constructor(e,t){this.mollieScriptLoader=e,this.paymentIntegrationService=t}initialize(e){return m(this,void 0,void 0,function*(){const{mollie:i,methodId:o,gatewayId:s}=e;if(!i)throw new a('Unable to initialize payment because "options.mollie" argument is not provided.');if(!o||!s)throw new a('Unable to initialize payment because "methodId" and/or "gatewayId" argument is not provided.');const d=document.querySelectorAll(".mollie-components-controller");(0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(d,e=>e.remove());const l=this.paymentIntegrationService.getState(),c=l.getStoreConfigOrThrow();this.initializeOptions=i;const u=l.getPaymentMethodOrThrow(o,s),{config:{merchantId:m,testMode:h}}=u;if(this.locale=l.getLocale(),!m)throw new r(n.MissingPaymentMethod);return this.isCreditCard(o)&&i.form&&this.shouldShowTSVHostedForm(o,s)?this.hostedForm=yield this.mountCardVerificationfields(i.form):this.isCreditCard(o)&&(this.mollieClient=yield this.loadMollieJs(m,c.storeProfile.storeLanguage,h),this.mountElements()),this.unsubscribe=()=>{if(this.paymentIntegrationService.getState().isPaymentMethodInitialized({methodId:e.methodId,gatewayId:e.gatewayId})){const e=document.getElementById(`${s}-${o}-paragraph`);e&&e.remove(),i.disableButton(!1),this.loadPaymentMethodsAllowed(i,o,s)}},this.unsubscribe(),this.loadPaymentMethodsAllowed(i,o,s),Promise.resolve()})}execute(e,t){return m(this,void 0,void 0,function*(){const{payment:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(e,["payment"]),o=null==i?void 0:i.paymentData;if(!i||!i.gatewayId||!o)throw new d(["payment","gatewayId","paymentData"]);try{return yield this.paymentIntegrationService.submitOrder(n,t),Boolean(o.instrumentId)?yield this.executeWithVaulted(i):this.isCreditCard(i.methodId)?yield this.executeWithCC(i):yield this.executeWithAPM(i)}catch(e){yield this.processAdditionalAction(e)}})}finalize(){return Promise.resolve()}deinitialize(e){if(this.unsubscribe&&this.unsubscribe(),this.hostedForm&&this.hostedForm.detach(),e&&e.methodId&&e.gatewayId&&!this.hostedForm){const t=document.getElementById(`${e.gatewayId}-${e.methodId}`);t&&t.remove()}else e&&e.methodId&&this.isCreditCard(e.methodId)&&this.cardHolderElement&&this.cardNumberElement&&this.verificationCodeElement&&this.expiryDateElement&&(this.cardHolderElement.unmount(),this.cardHolderElement=void 0,this.cardNumberElement.unmount(),this.cardNumberElement=void 0,this.verificationCodeElement.unmount(),this.verificationCodeElement=void 0,this.expiryDateElement.unmount(),this.expiryDateElement=void 0);return this.mollieClient=void 0,Promise.resolve()}executeWithCC(e){return m(this,void 0,void 0,function*(){const t=e.paymentData,{shouldSaveInstrument:i=!1,shouldSetAsDefaultInstrument:n=!1}="object"!=typeof(o=t)||null===o||void 0!==o.shouldSaveInstrument&&"boolean"!=typeof o.shouldSaveInstrument||void 0!==o.shouldSetAsDefaultInstrument&&"boolean"!=typeof o.shouldSetAsDefaultInstrument?{}:t;var o;const{token:s,error:a}=yield this.getMollieClient().createToken();if(a)return Promise.reject(a);const r={credit_card_token:{token:s},vault_payment_instrument:i,set_as_default_stored_instrument:n,browser_info:l(),shopper_locale:this.getShopperLocale()};yield this.paymentIntegrationService.submitPayment(Object.assign(Object.assign({},e),{paymentData:{formattedPayload:r}}))})}executeWithVaulted(e){return m(this,void 0,void 0,function*(){if(this.isHostedPaymentFormEnabled(e.methodId,e.gatewayId)){const t=this.hostedForm;if(!t)throw new c(o.PaymentNotInitialized);yield t.validate(),yield t.submit(e),yield this.paymentIntegrationService.loadCurrentOrder()}else yield this.paymentIntegrationService.submitPayment(e)})}executeWithAPM(e){return m(this,void 0,void 0,function*(){const t=e.paymentData,i=t&&"issuer"in t?t.issuer:"";yield this.paymentIntegrationService.submitPayment(Object.assign(Object.assign({},e),{paymentData:Object.assign(Object.assign({},t),{formattedPayload:{issuer:i,shopper_locale:this.getShopperLocale()}})}))})}isCreditCard(e){return e===u.CREDIT_CARD}shouldShowTSVHostedForm(e,t){return this.isHostedPaymentFormEnabled(e,t)&&this.isHostedFieldAvailable()}mountCardVerificationfields(e){return new Promise((t,i)=>m(this,void 0,void 0,function*(){try{const i=this.paymentIntegrationService.getState().getStoreConfig(),o=null==i?void 0:i.paymentSettings.bigpayBaseUrl;if(!o)throw new r(n.MissingCheckoutConfig);const s=this.paymentIntegrationService.createHostedForm(o,e);yield s.attach(),t(s)}catch(e){i(e)}}))}isHostedPaymentFormEnabled(e,t){const{getPaymentMethodOrThrow:i}=this.paymentIntegrationService.getState();return!0===i(e,t).config.isHostedFormEnabled}isHostedFieldAvailable(){var e;return!!(null===(e=this.getInitializeOptions().form)||void 0===e?void 0:e.fields)}processAdditionalAction(e){if(!(e=>"object"==typeof e&&null!==e&&"body"in e)(e))return Promise.reject(e);if((0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(e.body.errors,{code:"additional_action_required"})){const{additional_action_required:{data:{redirect_url:t}}}=e.body;return new Promise(()=>window.location.replace(t))}return Promise.reject(e)}getInitializeOptions(){if(!this.initializeOptions)throw new c(o.PaymentNotInitialized);return this.initializeOptions}loadMollieJs(e,t,i=!1){return this.mollieClient?Promise.resolve(this.mollieClient):this.mollieScriptLoader.load(e,t,i)}getMollieClient(){if(!this.mollieClient)throw new c(o.PaymentNotInitialized);return this.mollieClient}getShopperLocale(){if(!this.locale)throw new c(o.PaymentNotInitialized);return this.locale}mountElements(){const{containerId:e,cardNumberId:t,cardCvcId:i,cardExpiryId:n,cardHolderId:o,styles:s}=this.getInitializeOptions();let a;e&&(a=document.getElementById(e)),setTimeout(()=>{if(!e||"none"!==(null==a?void 0:a.style.display)){const e=this.getMollieClient();this.cardHolderElement=e.createComponent("cardHolder",{styles:s}),this.cardHolderElement.mount(`#${o}`),this.cardNumberElement=e.createComponent("cardNumber",{styles:s}),this.cardNumberElement.mount(`#${t}`),this.verificationCodeElement=e.createComponent("verificationCode",{styles:s}),this.verificationCodeElement.mount(`#${i}`),this.expiryDateElement=e.createComponent("expiryDate",{styles:s}),this.expiryDateElement.mount(`#${n}`)}},0)}loadPaymentMethodsAllowed(e,t,i){var n;if(h.includes(t)){const o=null===(n=this.paymentIntegrationService.getState().getCartOrThrow().lineItems)||void 0===n?void 0:n.digitalItems;if(o&&o.length>0){const{containerId:n}=this.getInitializeOptions();if(n){const o=document.getElementById(n);if(o){const n=document.createElement("p");n.setAttribute("id",`${i}-${t}-paragraph`),e.unsupportedMethodMessage&&(n.innerText=e.unsupportedMethodMessage,o.appendChild(n),e.disableButton(!0))}}}}}}class g extends s{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class y{constructor(e,t=window){this.scriptLoader=e,this.mollieHostWindow=t}load(e,t,i){return n=this,o=void 0,a=function*(){if(yield this.scriptLoader.loadScript("https://js.mollie.com/v1/mollie.js"),!function(e){return"Mollie"in e}(this.mollieHostWindow))throw new g;return this.mollieHostWindow.Mollie(e,{locale:t,testmode:i})},new((s=void 0)||(s=Promise))(function(e,t){function i(e){try{d(a.next(e))}catch(e){t(e)}}function r(e){try{d(a.throw(e))}catch(e){t(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s(function(e){e(n)})).then(i,r)}d((a=a.apply(n,o||[])).next())});// removed by dead control flow
 var n, o, s, a; }}const b=(f=t=>new p(new y((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)()),t),v=[{gateway:"mollie"},{gateway:"mollie",id:"applepay"}],Object.assign(f,{resolveIds:v}));var f,v;


/***/ }),

/***/ "./packages/dom-utils/src/getAppliedStyles.ts":
/*!****************************************************!*\
  !*** ./packages/dom-utils/src/getAppliedStyles.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx":
/*!************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx":
/*!********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/mollie-integration/src/MollieAPMCustomForm.tsx":
/*!*****************************************************************!*\
  !*** ./packages/mollie-integration/src/MollieAPMCustomForm.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiddenInput: () => (/* binding */ HiddenInput),
/* harmony export */   IssuerSelectButton: () => (/* binding */ IssuerSelectButton),
/* harmony export */   OptionButton: () => (/* binding */ OptionButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/dropdown/DropdownTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");






const MollieAPMCustomForm = ({ method, language, }) => {
    var _a;
    const issuers = (_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.paymentMethodsResponse;
    const [selectedIssuer, setSelectedIssuer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: language.translate('payment.select_your_bank'),
        id: '',
        image: { size1x: '' },
    });
    const render = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((props) => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(HiddenInput, Object.assign({}, props, { selectedIssuer: selectedIssuer })), [selectedIssuer]);
    if (!issuers || issuers.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null);
    }
    const handleClick = ({ currentTarget }) => {
        const _selectedIssuer = issuers.find(({ id }) => id === currentTarget.dataset.id);
        if (!_selectedIssuer) {
            return;
        }
        setSelectedIssuer(_selectedIssuer);
    };
    const issuersList = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: "dropdown-menu instrumentSelect-dropdownMenu mollie-instrument-card", id: "issuersDropdown" }, issuers.map((issuer) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", { className: "dropdown-menu-item dropdown-menu-item--select", key: issuer.id },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OptionButton, { issuer: issuer, onClick: handleClick }))))));
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { dropdown: issuersList },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(IssuerSelectButton, { selectedIssuer: selectedIssuer })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { input: render, name: "issuer" })));
};
const HiddenInput = (_a) => {
    var _b = _a.field, { value } = _b, restField = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["value"]), { selectedIssuer } = _a;
    const [field, _, helpers] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(restField.name);
    const Input = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", Object.assign({}, field, { type: "hidden" })), [field]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (value === selectedIssuer) {
            return;
        }
        void helpers.setValue(selectedIssuer === null || selectedIssuer === void 0 ? void 0 : selectedIssuer.id);
    }, [value, selectedIssuer, helpers]);
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Input, null);
};
const IssuerSelectButton = ({ selectedIssuer }) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { className: "instrumentSelect instrumentSelect-card button dropdown-button dropdown-toogle--select", href: "#", id: "issuerToggle", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])() }, selectedIssuer.name));
const OptionButton = (_a) => {
    var { issuer } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["issuer"]);
    const { name, image, id } = issuer;
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", Object.assign({ className: "instrumentSelect-details mollie-instrument-list" }, props, { "data-id": id }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", { className: "mollie-instrument-left" }, name),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { alt: name, "data-test": "cart-item-image", src: image.size1x })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"])(MollieAPMCustomForm));


/***/ }),

/***/ "./packages/mollie-integration/src/MollieCustomCardForm.tsx":
/*!******************************************************************!*\
  !*** ./packages/mollie-integration/src/MollieCustomCardForm.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _MollieAPMCustomForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MollieAPMCustomForm */ "./packages/mollie-integration/src/MollieAPMCustomForm.tsx");






const MollieCustomCardForm = ({ options, isCreditCard, method, }) => !isCreditCard ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MollieAPMCustomForm__WEBPACK_IMPORTED_MODULE_6__["default"], { method: method })) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-full') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardNumberElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_number_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon'), "data-cse": "CardNumber", id: options.cardNumberElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-full') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardHolderElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_name_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input'), "data-cse": "CardHolder", id: options.cardHolderElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-aside', 'mollie-paddingRight') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardCvcElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_cvv_label" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "has-tip" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null)))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input'), "data-cse": "SecurityCode", id: options.cardCvcElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-aside') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardExpiryElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_expiration_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input'), "data-cse": "ExpiryDate", id: options.cardExpiryElementOptions.containerId }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MollieCustomCardForm);


/***/ }),

/***/ "./packages/mollie-integration/src/MolliePaymentMethod.tsx":
/*!*****************************************************************!*\
  !*** ./packages/mollie-integration/src/MolliePaymentMethod.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MolliePaymentMethodType: () => (/* binding */ MolliePaymentMethodType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_mollie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/mollie */ "../checkout-sdk-js/dist/esm/integrations/mollie.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/LocaleContext.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _MollieCustomCardForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MollieCustomCardForm */ "./packages/mollie-integration/src/MollieCustomCardForm.tsx");










var MolliePaymentMethodType;
(function (MolliePaymentMethodType) {
    MolliePaymentMethodType["creditcard"] = "credit_card";
})(MolliePaymentMethodType || (MolliePaymentMethodType = {}));
const MolliePaymentMethod = (_a) => {
    var { method, checkoutState, checkoutService, language, paymentForm } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["method", "checkoutState", "checkoutService", "language", "paymentForm"]);
    const paymentContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.PaymentFormContext);
    const localeContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.LocaleContext);
    const containerId = `mollie-${method.method}`;
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm, setSubmit, hidePaymentSubmitButton, disableSubmit, setValidationSchema, } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState);
    const { config: { cardCode }, } = method;
    const isCardCodeRequired = cardCode || cardCode === null;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
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
        setFieldTouched,
        setFieldValue,
        setSubmitted,
        submitForm,
    ]);
    const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((selectedInstrument) => {
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired
                ? getHostedFieldId('ccNumber')
                : undefined, focusedFieldType: focusedFieldType }));
    }, [
        focusedFieldType,
        getHostedFieldId,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        method,
    ]);
    const initializeMolliePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const mollieElements = getMolliesElementOptions();
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_mollie__WEBPACK_IMPORTED_MODULE_1__.createMolliePaymentStrategy], mollie: Object.assign({ containerId, cardNumberId: mollieElements.cardNumberElementOptions.containerId, cardCvcId: mollieElements.cardCvcElementOptions.containerId, cardHolderId: mollieElements.cardHolderElementOptions.containerId, cardExpiryId: mollieElements.cardExpiryElementOptions.containerId, styles: {
                    base: {
                        color: '#333333',
                        '::placeholder': {
                            color: '#999999',
                        },
                    },
                    valid: {
                        color: '#090',
                    },
                    invalid: {
                        color: '#D14343',
                    },
                }, unsupportedMethodMessage: localeContext === null || localeContext === void 0 ? void 0 : localeContext.language.translate('payment.mollie_unsupported_method_error'), disableButton: (disabled) => {
                    if (paymentContext) {
                        disableSubmit(method, disabled);
                    }
                } }, (selectedInstrument && {
                form: yield getHostedFormOptions(selectedInstrument),
            })) }));
    }), [
        checkoutService,
        containerId,
        disableSubmit,
        localeContext === null || localeContext === void 0 ? void 0 : localeContext.language,
        getHostedFormOptions,
        paymentContext,
        method,
    ]);
    const getMolliesElementOptions = () => {
        return {
            cardNumberElementOptions: {
                containerId: 'mollie-card-number-component-field',
            },
            cardExpiryElementOptions: {
                containerId: 'mollie-card-expiry-component-field',
            },
            cardCvcElementOptions: {
                containerId: 'mollie-card-cvc-component-field',
            },
            cardHolderElementOptions: {
                containerId: 'mollie-card-holder-component-field',
            },
        };
    };
    function renderCustomPaymentForm() {
        const options = getMolliesElementOptions();
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_MollieCustomCardForm__WEBPACK_IMPORTED_MODULE_13__["default"], { isCreditCard: isCreditCard(), method: method, options: options }));
    }
    function isCreditCard() {
        return method.method === MolliePaymentMethodType.creditcard;
    }
    function validateInstrument(_shouldShowNumber, selectedInstrument) {
        return getHostedStoredCardValidationFieldset(selectedInstrument);
    }
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired, getCustomer }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeMolliePayment, instruments: instruments, isAccountInstrument: !isCreditCard(), isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, renderCustomPaymentForm: renderCustomPaymentForm, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer, storedCardValidationSchema: (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"])({ language }), validateInstrument: validateInstrument })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_12__["default"])(MolliePaymentMethod, [{ gateway: 'mollie' }, { gateway: 'mollie', id: 'applepay' }]));


/***/ }),

/***/ "./packages/mollie-integration/src/index.ts":
/*!**************************************************!*\
  !*** ./packages/mollie-integration/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MolliePaymentMethod: () => (/* reexport safe */ _MolliePaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MolliePaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MolliePaymentMethod */ "./packages/mollie-integration/src/MolliePaymentMethod.tsx");



/***/ }),

/***/ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx":
/*!************************************************************************************!*\
  !*** ./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=mollie-payment-method.js.map