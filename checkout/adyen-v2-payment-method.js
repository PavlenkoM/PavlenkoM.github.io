(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["adyen-v2-payment-method"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss"
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss ***!
  \**************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "[id*=facilypay_][id$=-component-field] .adyen-checkout-form-instruction {\n  display: none;\n}\n\n.optimizedCheckout-form-select + [id*=facilypay_][id$=-component-field] {\n  margin-top: 1.5rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "../checkout-sdk-js/dist/esm/integrations/adyen.js"
/*!*********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/adyen.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAdyenV2PaymentStrategy: () => (/* binding */ j),
/* harmony export */   createAdyenV3PaymentStrategy: () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
class i extends Error{constructor(t){var e;super(t||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",e=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,e):this.__proto__=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class a extends i{constructor(t){super(t||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}var o,r,s,d,c,l,p,h;class u{constructor(t,e,n=window){this._scriptLoader=t,this._stylesheetLoader=e,this._window=n}load(t){var e,n,i,o,r,s;return i=this,o=void 0,s=function*(){if(yield Promise.all([this._stylesheetLoader.loadStylesheet(`https://checkoutshopper-${null!==(e=t.environment)&&void 0!==e?e:""}.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css`,{prepend:!1,attributes:{integrity:"sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",crossorigin:"anonymous"}}),this._scriptLoader.loadScript(`https://checkoutshopper-${null!==(n=t.environment)&&void 0!==n?n:""}.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js`,{async:!0,attributes:{integrity:"sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",crossorigin:"anonymous"}})]),!this._window.AdyenCheckout)throw new a;return new this._window.AdyenCheckout(t)},new((r=void 0)||(r=Promise))(function(t,e){function n(t){try{d(s.next(t))}catch(t){e(t)}}function a(t){try{d(s.throw(t))}catch(t){e(t)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof r?i:new r(function(t){t(i)})).then(n,a)}d((s=s.apply(i,o||[])).next())})}}function y(t,e){return Object.assign(t,{resolveIds:e})}function m(t){return"object"==typeof t&&"string"==typeof t.data.paymentMethod.encryptedSecurityCode||"string"==typeof t.data.paymentMethod.encryptedExpiryMonth}!function(t){t.ThreeDS2Fingerprint="threeDS2Fingerprint",t.ThreeDS2="threeDS2",t.Redirect="redirect",t.QRCode="qrCode",t.Voucher="voucher",t.Sdk="sdk"}(o||(o={})),function(t){t.ThreeDS2Fingerprint="threeDS2Fingerprint",t.ThreeDS2Challenge="threeDS2Challenge",t.Redirect="redirect",t.QRCode="qrCode",t.Voucher="voucher"}(r||(r={})),function(t){t.SecuredFields="securedfields"}(s||(s={})),function(t){t.ACH="ach",t.AliPay="alipay",t.Bancontact="bcmc",t.CreditCard="scheme",t.Klarna="klarna",t.KlarnaPayNow="klarna_paynow",t.KlarnaAccount="klarna_account",t.IDEAL="ideal",t.GiroPay="giropay",t.GooglePay="paywithgoogle",t.SEPA="sepadirectdebit",t.Sofort="directEbanking",t.Vipps="vipps",t.WeChatPayQR="wechatpayQR"}(d||(d={})),function(t){t.POST="POST"}(c||(c={})),function(t){t.ChallengeShopper="ChallengeShopper",t.Error="Error",t.IdentifyShopper="IdentifyShopper"}(l||(l={})),function(t){t.CardNumber="encryptedCardNumber",t.SecurityCode="encryptedSecurityCode",t.ExpiryDate="encryptedExpiryDate"}(p||(p={}));class g extends i{constructor(t){super(t||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class f extends g{constructor(t){let e="Unable to submit payment for the order because the payload is invalid.";t&&(e=`${e} Make sure the following fields are provided correctly: ${t.join(", ")}.`),super(e),this.name="PaymentArgumentInvalidError"}}!function(t){t[t.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",t[t.CustomerNotInitialized=1]="CustomerNotInitialized",t[t.PaymentNotInitialized=2]="PaymentNotInitialized",t[t.ShippingNotInitialized=3]="ShippingNotInitialized",t[t.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(h||(h={}));class v extends i{constructor(t){super(function(t){switch(t){case h.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case h.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case h.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case h.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(t)),this.subtype=t,this.name="NotInitializedError",this.type="not_initialized"}}function _(t){return Boolean(t.instrumentId)}function b(){const{navigator:t}=window;let e;return e=t.language?t.language:t.userLanguage,{color_depth:window.screen.colorDepth||24,java_enabled:"function"==typeof t.javaEnabled&&t.javaEnabled(),language:e,screen_height:window.screen.height,screen_width:window.screen.width,time_zone_offset:(new Date).getTimezoneOffset().toString()}}class C extends i{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class w extends i{constructor(t){super(t||"Payment process was cancelled."),this.name="PaymentMethodCancelledError",this.type="payment_cancelled"}}const S=t=>"object"==typeof t&&null!==t&&"body"in t;class O extends i{constructor(t,e){super(e||"Unable to proceed because the payment form contains invalid data."),this.details=t,this.name="PaymentInvalidFormError",this.type="payment_invalid_form"}}var I=function(t,e,n,i){return new(n||(n=Promise))(function(a,o){function r(t){try{d(i.next(t))}catch(t){o(t)}}function s(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}d((i=i.apply(t,e||[])).next())})};class P{constructor(t,e){this._paymentIntegrationService=t,this._scriptLoader=e}initialize(t){return I(this,void 0,void 0,function*(){const{adyenv2:e}=t;if(!e)throw new g('Unable to initialize payment because "options.adyenv2" argument is not provided.');this._paymentInitializeOptions=e;const n=this._paymentIntegrationService.getState().getPaymentMethodOrThrow(t.methodId),{originKey:i,clientKey:a,environment:o,paymentMethodsResponse:r}=n.initializationData||{},s={key:"",value:""};return i?(s.key="originKey",s.value=i):(s.key="clientKey",s.value=a||""),this._adyenClient=yield this._scriptLoader.load({environment:o,locale:this._paymentIntegrationService.getState().getLocale(),[s.key]:s.value,paymentMethodsResponse:r,translations:{es:{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-AR":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-ES":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-MX":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-CL":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-CO":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-PE":{"creditCard.expiryDateField.title":"Fecha de caducidad"}}}),this._paymentComponent=yield this._mountPaymentComponent(n),n.method!==d.CreditCard&&n.method!==d.Bancontact||(this._cardVerificationComponent=yield this._mountCardVerificationComponent()),Promise.resolve()})}execute(t,e){return I(this,void 0,void 0,function*(){const{payment:n}=t,i=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(n[i[a]]=t[i[a]])}return n}(t,["payment"]),a=n&&n.paymentData,o=a&&a.shouldSaveInstrument,r=a&&a.shouldSetAsDefaultInstrument;if(!n)return Promise.reject(new f(["payment"]));this._validateCardData(),yield this._paymentIntegrationService.submitOrder(i,e);const s=this._componentState;if(!s)throw new v(h.PaymentNotInitialized);if(a&&_(a)){let t={};if(m(s)){const{encryptedCardNumber:e,encryptedSecurityCode:n,encryptedExpiryMonth:i,encryptedExpiryYear:a}=s.data.paymentMethod;t={credit_card_number_confirmation:e,expiry_month:i,expiry_year:a,verification_value:n}}if(m(s)||-1!==["ideal","sepadirectdebit","directEbanking","giropay"].indexOf(s.data.paymentMethod.type))try{return void(yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:{formattedPayload:{bigpay_token:Object.assign(Object.assign({},t),{token:a.instrumentId}),origin:window.location.origin,browser_info:b(),set_as_default_stored_instrument:r||null}}})))}catch(t){return void(yield this._processAdditionalAction(t,o,r))}}try{yield this._paymentIntegrationService.submitPayment({methodId:n.methodId,paymentData:{formattedPayload:{credit_card_token:{token:JSON.stringify(Object.assign(Object.assign({},s.data.paymentMethod),{origin:window.location.origin}))},browser_info:b(),vault_payment_instrument:o||null,set_as_default_stored_instrument:r||null}}})}catch(t){yield this._processAdditionalAction(t,o,r)}})}finalize(){return Promise.reject(new C)}deinitialize(){return this._componentState=void 0,this._paymentComponent&&(this._paymentComponent.unmount(),this._paymentComponent=void 0),this._cardVerificationComponent&&(this._cardVerificationComponent.unmount(),this._cardVerificationComponent=void 0),Promise.resolve()}_getAdyenClient(){if(!this._adyenClient)throw new v(h.PaymentNotInitialized);return this._adyenClient}_getPaymentInitializeOptions(){if(!this._paymentInitializeOptions)throw new g('"options.adyenv2" argument was not provided during initialization.');return this._paymentInitializeOptions}_getThreeDS2ChallengeWidgetSize(){const{additionalActionOptions:t,threeDS2Options:e}=this._getPaymentInitializeOptions();return t.widgetSize||(null==e?void 0:e.widgetSize)||"05"}_handleAction(t){return new Promise((e,n)=>{const{threeDS2ContainerId:i,additionalActionOptions:a}=this._getPaymentInitializeOptions(),{onBeforeLoad:o,containerId:s,onLoad:d,onComplete:c}=a,l=JSON.parse(t.action),p=this._getAdyenClient().createFromAction(l,{onAdditionalDetails:t=>{const n={methodId:l.paymentMethodType,paymentData:{nonce:JSON.stringify(t.data)}};c&&c(),e(n)},size:this._getThreeDS2ChallengeWidgetSize(),onError:t=>n(t)});o&&o(l.type===r.ThreeDS2Challenge||l.type===r.QRCode),p.mount(`#${s||i}`),d&&d(()=>{n(new w),p.unmount()})})}_mapAdyenPlaceholderData(t,e){if(!t)return{};const{firstName:n,lastName:i,address1:a,address2:o,postalCode:r,city:s,stateOrProvinceCode:d,countryCode:c}=t;return{holderName:e?`${n} ${i}`:"",billingAddress:{street:a,houseNumberOrName:o,postalCode:r,city:s,stateOrProvince:d,country:c}}}_mountCardVerificationComponent(){const t=this._getPaymentInitializeOptions(),e=this._getAdyenClient();let n;return new Promise((i,a)=>{var o,r,d;if(t.cardVerificationContainerId){n=e.create(s.SecuredFields,Object.assign(Object.assign({},t.options),{styles:Object.assign(Object.assign({},null===(o=t.options)||void 0===o?void 0:o.styles),{placeholder:Object.assign({color:"transparent",caretColor:"#000"},null===(d=null===(r=t.options)||void 0===r?void 0:r.styles)||void 0===d?void 0:d.placeholder)}),onChange:t=>this._updateComponentState(t),onError:e=>t.validateCardFields(e),onFieldValid:e=>t.validateCardFields(e)}));try{n.mount(`#${t.cardVerificationContainerId}`)}catch(t){a(new v(h.PaymentNotInitialized))}}i(n)})}_mountPaymentComponent(t){let e;const n=this._getPaymentInitializeOptions(),i=this._getAdyenClient();return new Promise((a,o)=>{switch(t.method){case d.CreditCard:case d.ACH:case d.Bancontact:{const a=this._paymentIntegrationService.getState().getBillingAddress(),{prefillCardHolderName:r}=t.initializationData;e=i.create(t.method,Object.assign(Object.assign({},n.options),{onChange:t=>this._updateComponentState(t),data:this._mapAdyenPlaceholderData(a,r)}));try{e.mount(`#${n.containerId}`)}catch(t){o(new v(h.PaymentNotInitialized))}break}case d.IDEAL:case d.SEPA:if(n.hasVaultedInstruments)this._updateComponentState({data:{paymentMethod:{type:t.method}}});else{e=i.create(t.method,Object.assign(Object.assign({},n.options),{onChange:t=>this._updateComponentState(t)}));try{e.mount(`#${n.containerId}`)}catch(t){o(new v(h.PaymentNotInitialized))}}break;case d.AliPay:case d.GiroPay:case d.Sofort:case d.Klarna:case d.KlarnaPayNow:case d.KlarnaAccount:case d.Vipps:case d.WeChatPayQR:this._updateComponentState({data:{paymentMethod:{type:t.method}}})}a(e)})}_processAdditionalAction(t,e,i){return I(this,void 0,void 0,function*(){if(!S(t)||!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(t.body.errors,{code:"additional_action_required"}))throw t;const a=yield this._handleAction(t.body.provider_data);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},a),{paymentData:Object.assign(Object.assign({},a.paymentData),{shouldSaveInstrument:e,shouldSetAsDefaultInstrument:i})}))}catch(t){return this._processAdditionalAction(t,e,i)}})}_updateComponentState(t){this._componentState=t}_validateCardData(){var t,e;const n=this._getPaymentInitializeOptions().hasVaultedInstruments?this._cardVerificationComponent:this._paymentComponent;if((null===(t=null==n?void 0:n.componentRef)||void 0===t?void 0:t.showValidation)&&n.state&&(n.componentRef.showValidation(),0===Object.keys(n.state).length||!n.state.isValid&&!n.state.issuer||"sepadirectdebit"===(null===(e=n.props)||void 0===e?void 0:e.type)&&n.state.data&&Object.values(n.state.data).some(t=>0===t.toString().trim().length)))throw new O(this._mapCardErrors(n.state.errors))}_mapCardErrors(t={}){const e={};return Object.keys(t).forEach(n=>{e[n]=[{message:t[n],type:n}]}),e}}const j=y(n=>new P(n,new u((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)(),(0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getStylesheetLoader)())),[{gateway:"adyenv2"}]);class A{constructor(t,e,n=window){this._scriptLoader=t,this._stylesheetLoader=e,this._window=n}load(t){var e,n,i,o,r,s;return i=this,o=void 0,s=function*(){if(yield Promise.all([this._stylesheetLoader.loadStylesheet(`https://checkoutshopper-${null!==(e=t.environment)&&void 0!==e?e:""}.adyen.com/checkoutshopper/sdk/5.71.1/adyen.css`,{prepend:!1,attributes:{integrity:"sha384-5MvB4RnzvviA3VBT4KYABZ4HXNZG5LRqREEgd41xt/pf/QvKmsj2O9GuNuywRXx9",crossorigin:"anonymous"}}),this._scriptLoader.loadScript(`https://checkoutshopper-${null!==(n=t.environment)&&void 0!==n?n:""}.adyen.com/checkoutshopper/sdk/5.71.1/adyen.js`,{async:!0,attributes:{integrity:"sha384-yvY2yFNR4WqIjPqP9MzjI+gJimmaJnAvj4rLHKvgJbgFD5fMuf8zIJrFJOW8Lhhf",crossorigin:"anonymous"}})]),!this._window.AdyenCheckout)throw new a;return yield this._window.AdyenCheckout(t)},new((r=void 0)||(r=Promise))(function(t,e){function n(t){try{d(s.next(t))}catch(t){e(t)}}function a(t){try{d(s.throw(t))}catch(t){e(t)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof r?i:new r(function(t){t(i)})).then(n,a)}d((s=s.apply(i,o||[])).next())})}}var z=function(t,e,n,i){return new(n||(n=Promise))(function(a,o){function r(t){try{d(i.next(t))}catch(t){o(t)}}function s(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}d((i=i.apply(t,e||[])).next())})};class D{constructor(t,e){this.paymentIntegrationService=t,this.scriptLoader=e}initialize(t){return z(this,void 0,void 0,function*(){const{adyenv3:e}=t;if(!e)throw new g('Unable to initialize payment because "options.adyenv3" argument is not provided.');this.paymentInitializeOptions=e;const n=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(t.methodId),{environment:i,clientKey:a,paymentMethodsResponse:o,installmentOptions:r}=n.initializationData||{};return this.adyenClient=yield this.scriptLoader.load({paymentMethodsConfiguration:Object.assign({klarna:{useKlarnaWidget:!0},klarna_account:{useKlarnaWidget:!0},klarna_paynow:{useKlarnaWidget:!0}},r?{card:{installmentOptions:Object.assign({showInstallmentAmounts:!0},r)}}:{}),environment:i,locale:this._getLocale(),clientKey:a,paymentMethodsResponse:o,showPayButton:!1,translations:{es:{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-AR":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-ES":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-MX":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-CL":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-CO":{"creditCard.expiryDateField.title":"Fecha de caducidad"},"es-PE":{"creditCard.expiryDateField.title":"Fecha de caducidad"}}}),this.paymentComponent=yield this._mountPaymentComponent(n),n.method!==d.CreditCard&&n.method!==d.Bancontact||(this.cardVerificationComponent=yield this._mountCardVerificationComponent()),Promise.resolve()})}execute(t,e){var n;return z(this,void 0,void 0,function*(){const{payment:i}=t,a=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(n[i[a]]=t[i[a]])}return n}(t,["payment"]);if(!i)throw new f(["payment"]);const o=i.paymentData,{shouldSaveInstrument:r,shouldSetAsDefaultInstrument:s}="object"!=typeof(d=o)||null===d||void 0!==d.shouldSaveInstrument&&"boolean"!=typeof d.shouldSaveInstrument||void 0!==d.shouldSetAsDefaultInstrument&&"boolean"!=typeof d.shouldSetAsDefaultInstrument?{shouldSaveInstrument:!1,shouldSetAsDefaultInstrument:!1}:o;var d;this._validateCardData(),"klarna"!==i.methodId&&"klarna_account"!==i.methodId&&"klarna_paynow"!==i.methodId||null===(n=this.paymentComponent)||void 0===n||n.submit(),yield this.paymentIntegrationService.submitOrder(a,e);const c=this.componentState||{data:{paymentMethod:{type:i.methodId}}};if(o&&_(o)){let t={};if(m(c)){const{encryptedCardNumber:e,encryptedSecurityCode:n,encryptedExpiryMonth:i,encryptedExpiryYear:a}=c.data.paymentMethod;t={credit_card_number_confirmation:e,expiry_month:i,expiry_year:a,verification_value:n}}try{return void(yield this.paymentIntegrationService.submitPayment(Object.assign(Object.assign({},i),{paymentData:{formattedPayload:{bigpay_token:Object.assign(Object.assign({},t),{token:o.instrumentId}),origin:window.location.origin,browser_info:b(),set_as_default_stored_instrument:s||null}}})))}catch(e){return void(yield this._processAdditionalAction(e,r,s,o.instrumentId,t))}}let l=JSON.stringify(Object.assign(Object.assign({},c.data.paymentMethod),{type:i.methodId,origin:window.location.origin}));"boletobancario"===i.methodId&&function(t){var e,n;return"string"===("object"==typeof t&&typeof t.data.socialSecurityNumber)&&"string"==typeof(null===(e=t.data.shopperName)||void 0===e?void 0:e.firstName)&&"string"==typeof(null===(n=t.data.shopperName)||void 0===n?void 0:n.lastName)}(c)&&(l=JSON.stringify(Object.assign(Object.assign({socialSecurityNumber:c.data.socialSecurityNumber},c.data.shopperName),{type:i.methodId,origin:window.location.origin})));try{yield this.paymentIntegrationService.submitPayment({methodId:i.methodId,paymentData:{formattedPayload:Object.assign(Object.assign({credit_card_token:{token:l}},m(c)&&c.data.installments?{installments:{value:c.data.installments.value,plan:c.data.installments.plan||"regular"}}:{}),{browser_info:b(),vault_payment_instrument:r||null,set_as_default_stored_instrument:s||null})}})}catch(t){yield this._processAdditionalAction(t,r,s)}})}finalize(){return Promise.reject(new C)}deinitialize(){return this.componentState=void 0,this.paymentComponent&&(this.paymentComponent.unmount(),this.paymentComponent=void 0),this.cardVerificationComponent&&(this.cardVerificationComponent.unmount(),this.cardVerificationComponent=void 0),Promise.resolve()}_updateComponentState(t){this.componentState=t}_getLocale(){const t=this.paymentIntegrationService.getState().getLocale();return t&&"es"===t.substring(0,2)?"es":t}_getAdyenClient(){if(!this.adyenClient)throw new v(h.PaymentNotInitialized);return this.adyenClient}_getPaymentInitializeOptions(){if(!this.paymentInitializeOptions)throw new g('"options.adyenv3" argument was not provided during initialization.');return this.paymentInitializeOptions}_handleAction(t){return new Promise((e,n)=>{const{additionalActionOptions:i}=this._getPaymentInitializeOptions(),{onBeforeLoad:a,containerId:r,onLoad:s,onComplete:d,widgetSize:c,onActionHandled:l}=i,p=JSON.parse(t.action),h=this._getAdyenClient().createFromAction(p,{onActionHandled:t=>{l&&"function"==typeof l&&"3DS2Fingerprint"!==t.componentType&&l()},onAdditionalDetails:t=>{const n={methodId:p.paymentMethodType,paymentData:{nonce:JSON.stringify(t.data)}};d&&"function"==typeof d&&d(),e(n)},challengeWindowSize:c||"05",onError:t=>n(t)});a&&"function"==typeof a&&a(p.type===o.ThreeDS2||p.type===o.QRCode||p.type===o.Sdk),this._mountElement(h,r).then(()=>{s&&"function"==typeof s&&s(()=>{n(new w),h.unmount()})}).catch(n)})}_mapAdyenPlaceholderData(t,e){if(!t)return{};const{firstName:n,lastName:i,address1:a,address2:o,postalCode:r,city:s,stateOrProvinceCode:d,countryCode:c}=t;return{holderName:e?`${n} ${i}`:"",firstName:e?n:"",lastName:e?i:"",billingAddress:{street:a,houseNumberOrName:o,postalCode:r,city:s,stateOrProvince:d,country:c}}}_mountCardVerificationComponent(){var t,e,n;return z(this,void 0,void 0,function*(){const i=this._getPaymentInitializeOptions(),a=this._getAdyenClient();if(!i.cardVerificationContainerId)return;const o=a.create(s.SecuredFields,Object.assign(Object.assign({},i.options),{styles:Object.assign(Object.assign({},null===(t=i.options)||void 0===t?void 0:t.styles),{placeholder:Object.assign({color:"transparent",caretColor:"#000"},null===(n=null===(e=i.options)||void 0===e?void 0:e.styles)||void 0===n?void 0:n.placeholder)}),onChange:t=>this._updateComponentState(t),onError:t=>i.validateCardFields(t),onFieldValid:t=>i.validateCardFields(t)}));try{yield this._mountElement(o,i.cardVerificationContainerId)}catch(t){throw new v(h.PaymentNotInitialized)}return o})}_mountPaymentComponent(t){return z(this,void 0,void 0,function*(){const e=this._getPaymentInitializeOptions(),n=this._getAdyenClient(),i=this.paymentIntegrationService.getState().getBillingAddress(),{prefillCardHolderName:a}=t.initializationData,o=n.create(t.method,Object.assign(Object.assign(Object.assign(Object.assign({},this._isOneyPaymentMethod(t.method)?{visibility:{personalDetails:"hidden",billingAddress:"hidden",deliveryAddress:"hidden"}}:{}),e.options),{showBrandsUnderCardNumber:!1,billingAddressRequired:!1,showEmailAddress:!1,onChange:t=>this._updateComponentState(t),onSubmit:t=>this._updateComponentState(t)}),i?{data:this._mapAdyenPlaceholderData(i,a)}:{}));try{yield this._mountElement(o,e.containerId)}catch(t){throw new v(h.PaymentNotInitialized)}return o})}_isOneyPaymentMethod(t){return t.startsWith("facilypay")}_processAdditionalAction(t,e,i,a,o){return z(this,void 0,void 0,function*(){if(!S(t)||!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(t.body.errors,{code:"additional_action_required"}))throw t;const r=yield this._handleAction(t.body.provider_data);try{const t=Object.assign(Object.assign({},r.paymentData),{shouldSaveInstrument:e,shouldSetAsDefaultInstrument:i}),n=i&&!e?{instrumentId:a,formattedPayload:{bigpay_token:Object.assign(Object.assign({},o),{token:a})}}:{};yield this.paymentIntegrationService.submitPayment(Object.assign(Object.assign({},r),{paymentData:Object.assign(Object.assign({},t),n)}))}catch(t){return this._processAdditionalAction(t,e,i,a,o)}})}_validateCardData(){var t;const e=this._getPaymentInitializeOptions().hasVaultedInstruments?this.cardVerificationComponent:this.paymentComponent;if((null===(t=null==e?void 0:e.componentRef)||void 0===t?void 0:t.showValidation)&&e.state&&(e.componentRef.showValidation(),0===Object.keys(e.state).length||!e.state.isValid))throw new O(this._mapCardErrors(e.state.errors))}_mapCardErrors(t={}){const e={};return Object.keys(t).forEach(n=>{e[n]=[{message:t[n],type:n}]}),e}_mountElement(t,e){return z(this,void 0,void 0,function*(){yield this._waitForMountContainer(e);try{t.mount(`#${e}`)}catch(t){throw new v(h.PaymentNotInitialized)}})}_waitForMountContainer(t){return z(this,void 0,void 0,function*(){const e=Math.ceil(D.mountContainerMaxWaitMs/D.mountContainerPollIntervalMs),n=D.mountContainerPollIntervalMs;let i=0;const a=()=>z(this,void 0,void 0,function*(){if(i===e)throw new v(h.PaymentNotInitialized);document.getElementById(t)||(yield new Promise(t=>{setTimeout(t,n)}),i+=1,yield a())});yield a()})}}D.mountContainerMaxWaitMs=5e3,D.mountContainerPollIntervalMs=50;const N=y(n=>new D(n,new A((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)(),(0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getStylesheetLoader)())),[{gateway:"adyenv3"}]);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss"
/*!*****************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./AdyenV3Oney.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/adyen-integration/src/adyenv2/AdyenV2CardValidation.tsx"
/*!**************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv2/AdyenV2CardValidation.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AdyenCardFields;
(function (AdyenCardFields) {
    AdyenCardFields["CardNumber"] = "encryptedCardNumber";
    AdyenCardFields["SecurityCode"] = "encryptedSecurityCode";
    AdyenCardFields["ExpiryDate"] = "encryptedExpiryDate";
})(AdyenCardFields || (AdyenCardFields = {}));
const getInitialValidationState = ({ shouldShowNumberField, method, }) => {
    const validationState = {};
    if (shouldShowNumberField) {
        validationState[AdyenCardFields.CardNumber] = { valid: false };
    }
    if (method === 'scheme') {
        validationState[AdyenCardFields.SecurityCode] = { valid: false };
    }
    if (method === 'bcmc') {
        validationState[AdyenCardFields.ExpiryDate] = { valid: false };
    }
    return validationState;
};
const isFieldInvalid = (fieldKey, fieldsValidation) => !!fieldsValidation[fieldKey] && !fieldsValidation[fieldKey].valid;
const AdyenV2CardValidation = ({ verificationFieldsContainerId, shouldShowNumberField, selectedInstrument, paymentMethod, cardValidationState, language, }) => {
    const [fieldsValidation, setFieldsValidation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a;
        if (!cardValidationState) {
            return;
        }
        if (cardValidationState.fieldType &&
            (!fieldsValidation[cardValidationState.fieldType] ||
                ((_a = fieldsValidation[cardValidationState.fieldType]) === null || _a === void 0 ? void 0 : _a.valid) !==
                    cardValidationState.valid)) {
            if (cardValidationState.fieldType === AdyenCardFields.CardNumber) {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [AdyenCardFields.CardNumber]: cardValidationState.endDigits !== (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4)
                        ? Object.assign(Object.assign({}, cardValidationState), { valid: false }) : Object.assign({}, cardValidationState) }));
            }
            else {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [cardValidationState.fieldType]: cardValidationState }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardValidationState, setFieldsValidation, selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken) {
            setFieldsValidation(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
        }
    }, [selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken, paymentMethod.method, shouldShowNumberField]);
    const showValidationIcon = (key) => isFieldInvalid(key, fieldsValidation) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--invalid", style: { transform: 'none', right: '20px' } },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { alt: "adyen-checkout-icon", className: "adyen-checkout__icon", src: "https://checkoutshopper-test.adyen.com/checkoutshopper/images/components/field_error.svg" })));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, language === null || language === void 0 ? void 0 : language.translate('payment.instrument_trusted_shipping_address_title_text')),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), language === null || language === void 0 ? void 0 :
            language.translate('payment.instrument_trusted_shipping_address_text'))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields", id: verificationFieldsContainerId },
            shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'form-field--ccNumber', {
                    'form-field--ccNumber--hasExpiryDate': paymentMethod.method === 'bcmc',
                }, 
                // This div is hiding by CSS because there is an Adyen library in
                // checkout-sdk which mounts verification fields and if is removed with JS this mounting event will be thrown an error
                { 'form-field-ccNumber--hide': !shouldShowNumberField }) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.CardNumber }, language === null || language === void 0 ? void 0 : language.translate('payment.credit_card_number_label')),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.CardNumber, fieldsValidation),
                    }), "data-cse": AdyenCardFields.CardNumber, id: AdyenCardFields.CardNumber }),
                showValidationIcon(AdyenCardFields.CardNumber))),
            paymentMethod.method === 'scheme' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-ccFields-field--ccCvv" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.SecurityCode }, language === null || language === void 0 ? void 0 : language.translate('payment.credit_card_cvv_label')),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.SecurityCode, fieldsValidation),
                    }), "data-cse": AdyenCardFields.SecurityCode, id: AdyenCardFields.SecurityCode }),
                showValidationIcon(AdyenCardFields.SecurityCode))),
            paymentMethod.method === 'bcmc' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-field--ccExpiry" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.ExpiryDate }, language === null || language === void 0 ? void 0 : language.translate('payment.credit_card_expiration_label')),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.ExpiryDate, fieldsValidation),
                    }), "data-cse": AdyenCardFields.ExpiryDate, id: AdyenCardFields.ExpiryDate }),
                showValidationIcon(AdyenCardFields.ExpiryDate))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV2CardValidation);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv2/AdyenV2Form.tsx"
/*!****************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv2/AdyenV2Form.tsx ***!
  \****************************************************************/
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
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");






const AdyenV2Form = (_a) => {
    var { method, containerId, initializePayment, isAccountInstrument, shouldHideInstrumentExpiryDate, validateInstrument, language, showAdditionalActionContent, cancelAdditionalActionModalFlow, additionalActionContainerId, onUnhandledError, checkoutService, checkoutState, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["method", "containerId", "initializePayment", "isAccountInstrument", "shouldHideInstrumentExpiryDate", "validateInstrument", "language", "showAdditionalActionContent", "cancelAdditionalActionModalFlow", "additionalActionContainerId", "onUnhandledError", "checkoutService", "checkoutState", "paymentForm"]);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const customer = checkoutState.data.getCustomer();
    const { isLoadingInstruments } = checkoutState.statuses;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { checkoutState: { data: { isPaymentDataRequired }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const isSignedIn = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isSignedIn && Boolean(method.config.isVaultingEnabled);
    const isInstrumentCardCodeRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(checkoutState);
    const isInstrumentCardNumberRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializePayment, instruments: instruments, isAccountInstrument: isAccountInstrument, isInstrumentCardCodeRequired: isInstrumentCardCodeRequired, isInstrumentCardNumberRequired: isInstrumentCardNumberRequired, isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: !isSignedIn, loadInstruments: checkoutService.loadInstruments, method: method, onUnhandledError: onUnhandledError, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer, validateInstrument: validateInstrument })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: language.translate('common.close_action'), isOpen: showAdditionalActionContent, onRequestClose: cancelAdditionalActionModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId, style: { width: '100%' } })),
        !showAdditionalActionContent && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId, style: { display: 'none' } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV2Form);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv2/AdyenV2PaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv2/AdyenV2PaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV2PaymentMethodType: () => (/* binding */ AdyenV2PaymentMethodType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/adyen */ "../checkout-sdk-js/dist/esm/integrations/adyen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _AdyenV2CardValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdyenV2CardValidation */ "./packages/adyen-integration/src/adyenv2/AdyenV2CardValidation.tsx");
/* harmony import */ var _AdyenV2Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdyenV2Form */ "./packages/adyen-integration/src/adyenv2/AdyenV2Form.tsx");







var AdyenV2PaymentMethodType;
(function (AdyenV2PaymentMethodType) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV2PaymentMethodType["scheme"] = "scheme";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV2PaymentMethodType["bcmc"] = "bcmc";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV2PaymentMethodType["ideal"] = "ideal";
})(AdyenV2PaymentMethodType || (AdyenV2PaymentMethodType = {}));
const AdyenV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, paymentForm, method, language } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "language"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        shouldShowModal: true,
    });
    const [showAdditionalActionContent, setShowAdditionalActionContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [cardValidationState, setCardValidationState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerId = `adyen-${method.id}-component-field`;
    const additionalActionContainerId = `adyen-${method.id}-additional-action-component-field`;
    const cardVerificationContainerId = `adyen-${method.id}-tsv-component-field`;
    const threeDS2ContainerId = `adyen-${method.id}-additional-action-component-field`;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const component = method.id;
    const shouldHideInstrumentExpiryDate = component === AdyenV2PaymentMethodType.bcmc;
    const onBeforeLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shopperInteraction) => {
        ref.current.shouldShowModal = shopperInteraction;
        setShowAdditionalActionContent(ref.current.shouldShowModal);
    }, []);
    const onComplete = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setShowAdditionalActionContent(false);
        ref.current.cancelAdditionalAction = undefined;
    }, []);
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((cancel) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ref.current.cancelAdditionalAction = cancel;
    }, []);
    const cancelAdditionalActionModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setShowAdditionalActionContent(false);
        if (ref.current.cancelAdditionalAction) {
            ref.current.cancelAdditionalAction();
            ref.current.cancelAdditionalAction = undefined;
        }
    }, []);
    const initializeAdyenPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        const selectedInstrumentId = selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken;
        const adyenOptions = {
            [AdyenV2PaymentMethodType.scheme]: {
                hasHolderName: true,
                holderNameRequired: true,
            },
            [AdyenV2PaymentMethodType.bcmc]: {
                hasHolderName: false,
            },
            [AdyenV2PaymentMethodType.ideal]: {
                showImage: true,
            },
        };
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__.createAdyenV2PaymentStrategy], adyenv2: {
                cardVerificationContainerId: selectedInstrumentId && cardVerificationContainerId,
                containerId,
                hasVaultedInstruments: !!selectedInstrumentId,
                options: adyenOptions[component],
                threeDS2ContainerId,
                additionalActionOptions: {
                    widgetSize: '05',
                    containerId: additionalActionContainerId,
                    onBeforeLoad,
                    onComplete,
                    onLoad,
                },
                shouldShowNumberField: ref.current.shouldShowNumberField,
                validateCardFields: (state) => {
                    setCardValidationState(state);
                },
            } }));
    }), [
        component,
        cardVerificationContainerId,
        containerId,
        additionalActionContainerId,
        threeDS2ContainerId,
        onBeforeLoad,
        onComplete,
        onLoad,
        checkoutService,
    ]);
    const validateInstrument = (shouldShowNumberField, selectedInstrument) => {
        ref.current.shouldShowNumberField = shouldShowNumberField;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV2CardValidation__WEBPACK_IMPORTED_MODULE_6__["default"], { cardValidationState: cardValidationState, language: language, paymentMethod: method, selectedInstrument: selectedInstrument, shouldShowNumberField: shouldShowNumberField, verificationFieldsContainerId: cardVerificationContainerId }));
    };
    const isAccountInstrument = () => {
        switch (method.method) {
            case 'directEbanking':
            case 'giropay':
            case 'ideal':
            case 'sepadirectdebit':
                return true;
            default:
                return false;
        }
    };
    const isLoading = checkoutState.statuses.isLoadingInstruments() ||
        checkoutState.statuses.isLoadingPaymentMethod(method.id);
    const formContextProps = {
        isSubmitted: paymentForm.isSubmitted(),
        setSubmitted: paymentForm.setSubmitted,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: formContextProps },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV2Form__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, { additionalActionContainerId: additionalActionContainerId, cancelAdditionalActionModalFlow: cancelAdditionalActionModalFlow, checkoutService: checkoutService, checkoutState: checkoutState, containerId: containerId, initializePayment: initializeAdyenPayment, isAccountInstrument: isAccountInstrument(), language: language, method: method, paymentForm: paymentForm, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, showAdditionalActionContent: showAdditionalActionContent, validateInstrument: validateInstrument })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(AdyenV2PaymentMethod, [{ gateway: 'adyenv2' }]));


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3CardValidation.tsx"
/*!**************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3CardValidation.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");



var AdyenCardFields;
(function (AdyenCardFields) {
    AdyenCardFields["CardNumber"] = "encryptedCardNumber";
    AdyenCardFields["SecurityCode"] = "encryptedSecurityCode";
    AdyenCardFields["ExpiryDate"] = "encryptedExpiryDate";
})(AdyenCardFields || (AdyenCardFields = {}));
const getInitialValidationState = ({ shouldShowNumberField, method, }) => {
    const validationState = {};
    if (shouldShowNumberField) {
        validationState[AdyenCardFields.CardNumber] = { valid: false };
    }
    if (method === 'scheme') {
        validationState[AdyenCardFields.SecurityCode] = { valid: false };
    }
    if (method === 'bcmc') {
        validationState[AdyenCardFields.ExpiryDate] = { valid: false };
    }
    return validationState;
};
const isFieldInvalid = (fieldKey, fieldsValidation) => !!fieldsValidation[fieldKey] && !fieldsValidation[fieldKey].valid;
const AdyenV3CardValidation = ({ verificationFieldsContainerId, shouldShowNumberField, selectedInstrument, paymentMethod, cardValidationState, }) => {
    const [fieldsValidation, setFieldsValidation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a;
        if (!cardValidationState) {
            return;
        }
        if (cardValidationState.fieldType &&
            (!fieldsValidation[cardValidationState.fieldType] ||
                ((_a = fieldsValidation[cardValidationState.fieldType]) === null || _a === void 0 ? void 0 : _a.valid) !==
                    cardValidationState.valid)) {
            if (cardValidationState.fieldType === AdyenCardFields.CardNumber) {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [AdyenCardFields.CardNumber]: cardValidationState.endDigits !== (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4)
                        ? Object.assign(Object.assign({}, cardValidationState), { valid: false }) : Object.assign({}, cardValidationState) }));
            }
            else {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [cardValidationState.fieldType]: cardValidationState }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardValidationState, setFieldsValidation, selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken) {
            setFieldsValidation(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
        }
    }, [selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken, paymentMethod.method, shouldShowNumberField]);
    const showValidationIcon = (key) => isFieldInvalid(key, fieldsValidation) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--invalid", style: { transform: 'none', right: '20px' } },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { alt: "adyen-checkout-icon", className: "adyen-checkout__icon", src: "https://checkoutshopper-test.adyen.com/checkoutshopper/images/components/field_error.svg" })));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields", id: verificationFieldsContainerId },
            shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'form-field--ccNumber', {
                    'form-field--ccNumber--hasExpiryDate': paymentMethod.method === 'bcmc',
                }, 
                // This div is hiding by CSS because there is an Adyen library in
                // checkout-sdk which mounts verification fields and if is removed with JS this mounting event will be thrown an error
                { 'form-field-ccNumber--hide': !shouldShowNumberField }) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.CardNumber },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_number_label" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.CardNumber, fieldsValidation),
                    }), "data-cse": AdyenCardFields.CardNumber, id: AdyenCardFields.CardNumber }),
                showValidationIcon(AdyenCardFields.CardNumber))),
            paymentMethod.method === 'scheme' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-ccFields-field--ccCvv" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.SecurityCode },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_cvv_label" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.SecurityCode, fieldsValidation),
                    }), "data-cse": AdyenCardFields.SecurityCode, id: AdyenCardFields.SecurityCode }),
                showValidationIcon(AdyenCardFields.SecurityCode))),
            paymentMethod.method === 'bcmc' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-field--ccExpiry" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.ExpiryDate },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_expiration_label" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.ExpiryDate, fieldsValidation),
                    }), "data-cse": AdyenCardFields.ExpiryDate, id: AdyenCardFields.ExpiryDate }),
                showValidationIcon(AdyenCardFields.ExpiryDate))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV3CardValidation);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3Form.tsx"
/*!****************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3Form.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntrustedShippingCardVerificationType: () => (/* binding */ UntrustedShippingCardVerificationType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");






var UntrustedShippingCardVerificationType;
(function (UntrustedShippingCardVerificationType) {
    UntrustedShippingCardVerificationType["CVV"] = "cvv";
    UntrustedShippingCardVerificationType["PAN"] = "pan";
})(UntrustedShippingCardVerificationType || (UntrustedShippingCardVerificationType = {}));
const AdyenV3Form = (_a) => {
    var { method, containerId, initializePayment, isAccountInstrument, shouldHideInstrumentExpiryDate, validateInstrument, language, shouldRenderAdditionalActionContentModal, isModalVisible, cancelAdditionalActionModalFlow, additionalActionContainerId, checkoutState, checkoutService, onUnhandledError } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["method", "containerId", "initializePayment", "isAccountInstrument", "shouldHideInstrumentExpiryDate", "validateInstrument", "language", "shouldRenderAdditionalActionContentModal", "isModalVisible", "cancelAdditionalActionModalFlow", "additionalActionContainerId", "checkoutState", "checkoutService", "onUnhandledError"]);
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const customer = checkoutState.data.getCustomer();
    const { isLoadingInstruments } = checkoutState.statuses;
    const { isPaymentDataRequired } = checkoutState.data;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const isSignedIn = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isSignedIn && Boolean(method.config.isVaultingEnabled);
    const isInstrumentCardCodeRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(checkoutState);
    const isInstrumentCardNumberRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializePayment, instruments: instruments, isAccountInstrument: isAccountInstrument, isInstrumentCardCodeRequired: isInstrumentCardCodeRequired, isInstrumentCardNumberRequired: isInstrumentCardNumberRequired, isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: !isSignedIn, loadInstruments: checkoutService.loadInstruments, method: method, onUnhandledError: onUnhandledError, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer, validateInstrument: validateInstrument })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: language.translate('common.close_action'), isOpen: shouldRenderAdditionalActionContentModal, onRequestClose: cancelAdditionalActionModalFlow, shouldShowCloseButton: true, style: !isModalVisible && method.id === 'scheme'
                ? {
                    overlay: {
                        display: 'none',
                    },
                }
                : {} },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId, style: { width: '100%' } })),
        !shouldRenderAdditionalActionContentModal && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV3Form);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3PaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3PaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV3PaymentMethodType: () => (/* binding */ AdyenV3PaymentMethodType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/adyen */ "../checkout-sdk-js/dist/esm/integrations/adyen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _AdyenV3CardValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdyenV3CardValidation */ "./packages/adyen-integration/src/adyenv3/AdyenV3CardValidation.tsx");
/* harmony import */ var _AdyenV3Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdyenV3Form */ "./packages/adyen-integration/src/adyenv3/AdyenV3Form.tsx");
/* harmony import */ var _AdyenV3Oney_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdyenV3Oney.scss */ "./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss");
/* harmony import */ var _AdyenV3Oney_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AdyenV3Oney_scss__WEBPACK_IMPORTED_MODULE_9__);








var AdyenV3PaymentMethodType;
(function (AdyenV3PaymentMethodType) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV3PaymentMethodType["scheme"] = "scheme";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV3PaymentMethodType["bcmc"] = "bcmc";
})(AdyenV3PaymentMethodType || (AdyenV3PaymentMethodType = {}));
const AdyenV3PaymentMethod = (_a) => {
    var _b;
    var { checkoutService, checkoutState, paymentForm, method, language, onUnhandledError } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "language", "onUnhandledError"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        shouldShowModal: true,
    });
    const groupedMethods = // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     (_b = method.initializationData) === null || _b === void 0 ? void 0 : _b.groupedMethods;
    const isGrouped = Boolean(groupedMethods === null || groupedMethods === void 0 ? void 0 : groupedMethods.length);
    const [selectedVariantMethod, setSelectedVariantMethod] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(method);
    const [shouldRenderAdditionalActionContentModal, setShouldRenderAdditionalActionContentModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isAdditionalActionContentModalVisible, setIsAdditionalActionContentModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [cardValidationState, setCardValidationState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const setFieldValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(paymentForm.setFieldValue);
    const containerId = `adyen-${selectedVariantMethod.id}-component-field`;
    const additionalActionContainerId = `adyen-${selectedVariantMethod.id}-additional-action-component-field`;
    const cardVerificationContainerId = `adyen-${selectedVariantMethod.id}-tsv-component-field`;
    const component = selectedVariantMethod.id;
    const shouldHideInstrumentExpiryDate = component === AdyenV3PaymentMethodType.bcmc;
    const handleVariantChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((variantId) => {
        const variant = groupedMethods === null || groupedMethods === void 0 ? void 0 : groupedMethods.find((m) => m.id === variantId);
        if (variant && variant.id !== selectedVariantMethod.id) {
            setSelectedVariantMethod(variant);
            paymentForm.setFieldValue('methodIdOverride', variant.id);
        }
    }, [groupedMethods, paymentForm, selectedVariantMethod.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        setFieldValueRef.current = paymentForm.setFieldValue;
    }, [paymentForm]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!isGrouped) {
            return;
        }
        return () => {
            setFieldValueRef.current('methodIdOverride', undefined);
        };
    }, [isGrouped]);
    const onBeforeLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shopperInteraction) => {
        ref.current.shouldShowModal = shopperInteraction;
        setShouldRenderAdditionalActionContentModal(ref.current.shouldShowModal);
    }, []);
    const onComplete = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setIsAdditionalActionContentModalVisible(false);
        setShouldRenderAdditionalActionContentModal(false);
        ref.current.cancelAdditionalAction = undefined;
    }, []);
    const onActionHandled = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setIsAdditionalActionContentModalVisible(true);
    }, []);
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((cancel) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ref.current.cancelAdditionalAction = cancel;
    }, []);
    const cancelAdditionalActionModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setIsAdditionalActionContentModalVisible(false);
        setShouldRenderAdditionalActionContentModal(false);
        if (ref.current.cancelAdditionalAction) {
            ref.current.cancelAdditionalAction();
            ref.current.cancelAdditionalAction = undefined;
        }
    }, []);
    const initializeAdyenPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const adyenOptions = {
            [AdyenV3PaymentMethodType.scheme]: {
                hasHolderName: true,
                holderNameRequired: true,
            },
        };
        const selectedInstrumentId = selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken;
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { methodId: component, integrations: [_bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__.createAdyenV3PaymentStrategy], adyenv3: {
                cardVerificationContainerId: selectedInstrumentId && cardVerificationContainerId,
                containerId,
                hasVaultedInstruments: !!selectedInstrumentId,
                options: adyenOptions[component],
                additionalActionOptions: {
                    widgetSize: '05',
                    containerId: additionalActionContainerId,
                    onBeforeLoad,
                    onComplete,
                    onLoad,
                    onActionHandled,
                },
                shouldShowNumberField: ref.current.shouldShowNumberField,
                validateCardFields: (state) => {
                    setCardValidationState(state);
                },
            } }));
    }), [
        component,
        cardVerificationContainerId,
        containerId,
        additionalActionContainerId,
        onBeforeLoad,
        onComplete,
        onLoad,
        onActionHandled,
        checkoutService,
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!isGrouped) {
            return;
        }
        paymentForm.setValidationSchema(method, null);
        paymentForm.setSubmit(method, null);
        void initializeAdyenPayment({
            methodId: component,
            gatewayId: method.gateway,
        }).catch((error) => {
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        });
        return () => {
            paymentForm.setValidationSchema(method, null);
            paymentForm.setSubmit(method, null);
            void checkoutService.deinitializePayment({
                gatewayId: method.gateway,
                methodId: component,
            });
        };
        // Re-run only when `initializeAdyenPayment` changes (it already lists `component`, container ids, and `checkoutService`).
        // Adding `method`, `paymentForm`, or `checkoutService` causes an infinite loop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initializeAdyenPayment]);
    const validateInstrument = (shouldShowNumberField, selectedInstrument) => {
        ref.current.shouldShowNumberField = shouldShowNumberField;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV3CardValidation__WEBPACK_IMPORTED_MODULE_7__["default"], { cardValidationState: cardValidationState, paymentMethod: method, selectedInstrument: selectedInstrument, shouldShowNumberField: shouldShowNumberField, verificationFieldsContainerId: cardVerificationContainerId }));
    };
    const isAccountInstrument = () => {
        switch (method.method) {
            case 'directEbanking':
            case 'giropay':
            case 'ideal':
            case 'sepadirectdebit':
                return true;
            default:
                return false;
        }
    };
    const isLoading = checkoutState.statuses.isLoadingInstruments() ||
        checkoutState.statuses.isLoadingPaymentMethod(method.id);
    const formContextProps = {
        isSubmitted: paymentForm.isSubmitted(),
        setSubmitted: paymentForm.setSubmitted,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: formContextProps }, isGrouped ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", { className: "form-select optimizedCheckout-form-select", onChange: (e) => handleVariantChange(e.target.value), value: selectedVariantMethod.id }, groupedMethods.map((m) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", { key: m.id, value: m.id }, m.config.displayName)))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: containerId }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: language.translate('common.close_action'), isOpen: shouldRenderAdditionalActionContentModal, onRequestClose: cancelAdditionalActionModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: additionalActionContainerId, style: { width: '100%' } })),
        !shouldRenderAdditionalActionContentModal && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: additionalActionContainerId })))) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV3Form__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, rest, { additionalActionContainerId: additionalActionContainerId, cancelAdditionalActionModalFlow: cancelAdditionalActionModalFlow, checkoutService: checkoutService, checkoutState: checkoutState, containerId: containerId, hideContentWhenSignedOut: true, initializePayment: initializeAdyenPayment, isAccountInstrument: isAccountInstrument(), isModalVisible: isAdditionalActionContentModalVisible, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, shouldRenderAdditionalActionContentModal: shouldRenderAdditionalActionContentModal, validateInstrument: validateInstrument }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(AdyenV3PaymentMethod, [{ gateway: 'adyenv3' }]));


/***/ },

/***/ "./packages/adyen-integration/src/index.ts"
/*!*************************************************!*\
  !*** ./packages/adyen-integration/src/index.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV2PaymentMethod: () => (/* reexport safe */ _adyenv2_AdyenV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   AdyenV3PaymentMethod: () => (/* reexport safe */ _adyenv3_AdyenV3PaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _adyenv2_AdyenV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adyenv2/AdyenV2PaymentMethod */ "./packages/adyen-integration/src/adyenv2/AdyenV2PaymentMethod.tsx");
/* harmony import */ var _adyenv3_AdyenV3PaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adyenv3/AdyenV3PaymentMethod */ "./packages/adyen-integration/src/adyenv3/AdyenV3PaymentMethod.tsx");




/***/ }

}]);
//# sourceMappingURL=adyen-v2-payment-method.js.map