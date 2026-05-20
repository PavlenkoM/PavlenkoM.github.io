(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["hosted-credit-card-payment-method"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.scss"
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.scss ***!
  \**************************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".dropdown-menu--card-code {\n  display: block;\n  left: 0;\n  position: relative;\n  visibility: visible;\n  width: 200px;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "../checkout-sdk-js/dist/esm/integrations/cybersource.js"
/*!***************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/cybersource.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCyberSourcePaymentStrategy: () => (/* binding */ j),
/* harmony export */   createCyberSourceV2PaymentStrategy: () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var s={};function c(e){return Boolean(e.instrumentId)}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const d=e=>"object"==typeof e&&null!==e&&"body"in e;var u,l,h=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((i=i.apply(e,t||[])).next())})};class m{constructor(e,t){this._paymentIntegrationService=e,this._cardinalClient=t}prepare(e){return h(this,void 0,void 0,function*(){yield this._cardinalClient.load(e.id,e.config.testMode),yield this._cardinalClient.configure(yield this._getClientToken(e))})}start(e,t,n,r){return h(this,void 0,void 0,function*(){const{getCardInstrument:a,getPaymentMethodOrThrow:s}=this._paymentIntegrationService.getState(),{payment:{methodId:u="",paymentData:l={}}={}}=t,h=c(l)&&a(l.instrumentId),m=h?h.iin:r&&r.getBin();m&&(yield this._cardinalClient.runBinProcess(m));try{return yield e((0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(t,{payment:{paymentData:{threeDSecure:{token:s(u).clientToken}}}}),n)}catch(e){if(!d(e)||!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(e.body.errors,{code:"three_d_secure_required"}))throw e;const n=yield this._cardinalClient.getThreeDSecureData(e.body.three_ds_result,this._getOrderData());if(!r)return void(yield this._paymentIntegrationService.submitPayment((0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(t.payment,{paymentData:{threeDSecure:n}})));yield r.submit((0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(t.payment,{paymentData:{threeDSecure:n}}))}})}_getClientToken(e){return h(this,void 0,void 0,function*(){return e.clientToken?e.clientToken:(yield this._paymentIntegrationService.loadPaymentMethod(e.id),this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e.id).clientToken||"")})}_getOrderData(){const e=this._paymentIntegrationService.getState(),t=e.getBillingAddressOrThrow(),n=e.getShippingAddress(),i=e.getCheckoutOrThrow(),r=e.getOrderOrThrow();return{billingAddress:t,shippingAddress:n,currencyCode:i.cart.currency.code,id:r.orderId.toString(),amount:i.cart.cartAmount}}}class p extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(u||(u={}));class y extends p{constructor(e){super(function(e){switch(e){case u.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case u.MissingCart:return"Unable to proceed because cart data is unavailable.";case u.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case u.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case u.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case u.MissingCheckoutConfig:case u.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case u.MissingOrder:return"Unable to proceed because order data is unavailable.";case u.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case u.MissingPayment:return"Unable to proceed because payment data is unavailable.";case u.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case u.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case u.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class g extends p{constructor(e){super(e||"Unable to proceed because the client library of a payment method has thrown an unexpected error."),this.name="PaymentMethodFailedError",this.type="payment_method_client_invalid"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(l||(l={}));class f extends p{constructor(e){super(function(e){switch(e){case l.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case l.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case l.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case l.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}const b=[100004,1010,1011,1020];var _,v,C,w,S,P,I;!function(e){e.SetupCompleted="payments.setupComplete",e.Validated="payments.validated"}(_||(_={})),function(e){e.Init="init",e.Complete="complete",e.Confirm="confirm"}(v||(v={})),function(e){e.Success="SUCCESS",e.NoAction="NOACTION",e.Failure="FAILURE",e.Error="ERROR"}(C||(C={})),function(e){e.CCA="CCA",e.Paypal="Paypal",e.Wallet="Wallet",e.VisaCheckout="VisaCheckout",e.ApplePay="ApplePay",e.DiscoverWallet="DiscoverWallet"}(w||(w={})),function(e){e.BinProcess="bin.process"}(S||(S={})),function(e){e.CCA="cca"}(P||(P={})),function(e){e.Yes="Y",e.No="N"}(I||(I={}));class M{constructor(e){this._scriptLoader=e,this._provider="",this._testMode=!1,this._configurationToken=""}load(e,t=!1){return this._provider=e,this._testMode=t,this._sdk||(this._sdk=this._scriptLoader.load(e,t)),this._sdk.then(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)}configure(e){if(this._configurationToken){if(this._configurationToken===e)return Promise.resolve();this._sdk=this._scriptLoader.load(`${this._provider}.${Date.now()}`,this._testMode)}return this._getClientSDK().then(n=>new Promise((i,r)=>{n.on(_.SetupCompleted,()=>{n.off(_.SetupCompleted),n.off(_.Validated),this._configurationToken=e,i()}),n.on(_.Validated,e=>{n.off(_.SetupCompleted),n.off(_.Validated),e.ActionCode===C.Error&&((0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(b,e.ErrorNumber)&&r(new y(u.MissingPaymentMethod)),r(new g(e.ErrorDescription)))}),n.setup(v.Init,{jwt:e})}))}runBinProcess(e){return this._getClientSDK().then(t=>t.trigger(S.BinProcess,e).catch(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)).then(e=>{if(!e||!e.Status)throw new f(l.PaymentNotInitialized)})}getThreeDSecureData(e,t){return this._getClientSDK().then(n=>new Promise((i,r)=>{n.on(_.Validated,(e,t)=>{if(n.off(_.Validated),!t)return r(new g(e.ErrorDescription?e.ErrorDescription:"An error was encountered while processing the transaction."));if(!e.ActionCode)return i({token:t});switch(e.ActionCode){case C.Success:return i({token:t});case C.NoAction:return e.ErrorNumber>0?r(new g(e.ErrorDescription)):e.Payment&&e.Payment.ExtendedData&&e.Payment.ExtendedData.SignatureVerification===I.Yes?i({token:t}):r(new g("Transaction signature could not be validated."));case C.Failure:return r(new g("User failed authentication or an error was encountered while processing the transaction."));case C.Error:return r(new g(e.ErrorDescription))}});const o={AcsUrl:e.acs_url,Payload:e.merchant_data},a=this._mapToPartialOrder(t,e.payer_auth_request);n.continue(P.CCA,o,a)}))}_mapToPartialOrder(e,t){const n={BillingAddress:this._mapToCardinalAddress(e.billingAddress)};return e.paymentData&&(n.Account=this._mapToCardinalAccount(e.paymentData)),e.billingAddress.email&&(n.Email1=e.billingAddress.email),e.shippingAddress&&(n.ShippingAddress=this._mapToCardinalAddress(e.shippingAddress)),{Consumer:n,OrderDetails:{OrderNumber:e.id,Amount:e.amount,CurrencyCode:e.currencyCode,OrderChannel:"S",TransactionId:t}}}_mapToCardinalAccount(e){return{AccountNumber:Number(e.ccNumber),ExpirationMonth:Number(e.ccExpiry.month),ExpirationYear:Number(e.ccExpiry.year),NameOnAccount:e.ccName,CardCode:Number(e.ccCvv)}}_mapToCardinalAddress(e){const t={FirstName:e.firstName,LastName:e.lastName,Address1:e.address1,City:e.city,State:e.stateOrProvince,PostalCode:e.postalCode,CountryCode:e.countryCode};return e.address2&&(t.Address2=e.address2),e.phone&&(t.Phone1=e.phone),t}_getClientSDK(){if(!this._sdk)throw new f(l.PaymentNotInitialized);return this._sdk}}class O extends p{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class A{constructor(e,t=window){this._scriptLoader=e,this._window=t}load(e,t){const n=t?"https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js":"https://static.client.cardinaltrusted.com/songbird/v2.0.0/songbird.js";return this._scriptLoader.loadScript(`${n}?v=${e}`).then(()=>{if(!this._window.Cardinal)throw new O;return this._window.Cardinal})}}function x(e,t){return Object.assign(e,{resolveIds:t})}class k extends p{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class D extends p{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class E extends k{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}var N=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((i=i.apply(e,t||[])).next())})},T=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};class z{constructor(e){this._paymentIntegrationService=e}execute(e,t){var n,i;return this._isHostedPaymentFormEnabled(null===(n=e.payment)||void 0===n?void 0:n.methodId,null===(i=e.payment)||void 0===i?void 0:i.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,n=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:i=""}={}}=n.getStoreConfigOrThrow();if(!t)throw new k;const r=this._paymentIntegrationService.createHostedForm(i,t);return r.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=r,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new D)}_executeWithoutHostedForm(e,t){return N(this,void 0,void 0,function*(){const{payment:n}=e,i=T(e,["payment"]),r=n&&n.paymentData;if(!n||!r)throw new E(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(i,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:r}))})}_executeWithHostedForm(e,t){return N(this,void 0,void 0,function*(){const{payment:n}=e,i=T(e,["payment"]),r=this._hostedForm;if(!r)throw new f(l.PaymentNotInitialized);if(!n||!n.methodId)throw new E(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(i,t),yield r.validate().then(()=>r.submit(n))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(e){return!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(e&&e.creditCard&&e.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)}}var F=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((i=i.apply(e,t||[])).next())})};class U extends z{constructor(e,t){super(e),this._threeDSecureFlow=t}initialize(e){const t=Object.create(null,{initialize:{get:()=>super.initialize}});return F(this,void 0,void 0,function*(){yield t.initialize.call(this,e);const{getPaymentMethodOrThrow:n}=this._paymentIntegrationService.getState(),i=n(e.methodId);i.config.is3dsEnabled&&(yield this._threeDSecureFlow.prepare(i))})}execute(e,t){const n=Object.create(null,{execute:{get:()=>super.execute}});return F(this,void 0,void 0,function*(){const{payment:{methodId:i=""}={}}=e,{getPaymentMethodOrThrow:r}=this._paymentIntegrationService.getState();return r(i).config.is3dsEnabled?this._threeDSecureFlow.start(n.execute.bind(this),e,t,this._hostedForm):n.execute.call(this,e,t)})}}const j=x(t=>new U(t,new m(t,new M(new A((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())))),[{id:"cybersource"}]);var B=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((i=i.apply(e,t||[])).next())})};class H{constructor(e,t){this._paymentIntegrationService=e,this._cardinalClient=t}prepare(e){return B(this,void 0,void 0,function*(){yield this._cardinalClient.load(e.id,e.config.testMode)})}start(e,t,n,i){var r,a,s,c;return B(this,void 0,void 0,function*(){const{getCardInstrument:u}=this._paymentIntegrationService.getState(),{payment:l={methodId:""}}=t,{paymentData:h={}}=l;try{return yield e(t,n)}catch(e){if(d(e)&&"additional_action_required"===(null===(r=e.body)||void 0===r?void 0:r.status)){const t=null===(s=null===(a=e.body.additional_action_required)||void 0===a?void 0:a.data)||void 0===s?void 0:s.token,n=null===(c=e.body.three_ds_result)||void 0===c?void 0:c.payer_auth_request;yield this._cardinalClient.configure(t);const r=this._getBin(h,u,i);r&&(yield this._cardinalClient.runBinProcess(r));try{return yield this._submitPayment(l,{xid:n},i)}catch(e){if(d(e)&&(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(e.body.errors,{code:"three_d_secure_required"})){const t=e.body.three_ds_result,n=null==t?void 0:t.payer_auth_request;return yield this._cardinalClient.getThreeDSecureData(t,this._getOrderData()),this._submitPayment(l,{token:n},i)}throw e}}throw e}})}_getOrderData(){const e=this._paymentIntegrationService.getState(),t=e.getBillingAddressOrThrow(),n=e.getShippingAddress(),{cart:{currency:{code:i},cartAmount:r}}=e.getCheckoutOrThrow();return{billingAddress:t,shippingAddress:n,currencyCode:i,id:e.getOrderOrThrow().orderId.toString(),amount:r}}_submitPayment(e,t,n){return B(this,void 0,void 0,function*(){const r=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},e,{paymentData:{threeDSecure:t}});n||(yield this._paymentIntegrationService.submitPayment(r)),yield null==n?void 0:n.submit(r)})}_getBin(e,t,n){const i=c(e)&&t(e.instrumentId),r=function(e){const t=e;return!c(t)&&"string"==typeof t.ccName&&"string"==typeof t.ccNumber&&"object"==typeof t.ccExpiry&&"string"==typeof t.ccExpiry.month&&"string"==typeof t.ccExpiry.year}(e)&&e.ccNumber,o=n?n.getBin():r;return(i?i.iin:o)||""}}var q=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((i=i.apply(e,t||[])).next())})};class R extends z{constructor(e,t){super(e),this._threeDSecureFlow=t}initialize(e){const t=Object.create(null,{initialize:{get:()=>super.initialize}});return q(this,void 0,void 0,function*(){yield t.initialize.call(this,e);const{getPaymentMethodOrThrow:n}=this._paymentIntegrationService.getState(),i=n(e.methodId);i.config.is3dsEnabled&&(yield this._threeDSecureFlow.prepare(i))})}execute(e,t){const n=Object.create(null,{execute:{get:()=>super.execute}});return q(this,void 0,void 0,function*(){const{payment:{methodId:i=""}={}}=e,{getPaymentMethodOrThrow:r}=this._paymentIntegrationService.getState();return r(i).config.is3dsEnabled?this._threeDSecureFlow.start(n.execute.bind(this),e,t,this._hostedForm):n.execute.call(this,e,t)})}}const V=x(t=>new R(t,new H(t,new M(new A((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())))),[{id:"cybersourcev2"},{id:"bnz"}]);


/***/ },

/***/ "../checkout-sdk-js/dist/esm/integrations/legacy.js"
/*!**********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/legacy.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLegacyPaymentStrategy: () => (/* binding */ n)
/* harmony export */ });
class e extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class t extends e{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class r{constructor(e){this._paymentIntegrationService=e}execute(e,t){return r=this,n=void 0,i=function*(){return yield this._paymentIntegrationService.submitOrder(e,t),Promise.resolve()},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o(function(e){e(r)})).then(a,s)}c((i=i.apply(r,n||[])).next())});// removed by dead control flow
 var r, n, o, i; }finalize(){return Promise.reject(new t)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}}const n=(o=e=>new r(e),i=[{id:"testgateway"}],Object.assign(o,{resolveIds:i}));var o,i;


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.scss"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.scss ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./CreditCardCodeTooltip.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardCodeField.tsx"
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardCodeField.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");
/* harmony import */ var _CreditCardCodeTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreditCardCodeTooltip */ "./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.tsx");




const CreditCardCodeField = ({ name }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { additionalClassName: "has-icon", autoComplete: "cc-csc", id: field.name, type: "tel" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_cvv_label" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardCodeTooltip__WEBPACK_IMPORTED_MODULE_7__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "has-tip" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null))))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-ccFields-field--ccCvv", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardCodeField));


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.tsx"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCardCodeAmex.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCardCodeVisa.tsx");
/* harmony import */ var _CreditCardCodeTooltip_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreditCardCodeTooltip.scss */ "./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.scss");
/* harmony import */ var _CreditCardCodeTooltip_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CreditCardCodeTooltip_scss__WEBPACK_IMPORTED_MODULE_5__);




const CreditCardCodeTooltip = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dropdown-menu dropdown-menu--content dropdown-menu--card-code" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields-cvvExample" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields-cvvExampleDescription" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_cvv_help_text" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields-cvvExampleFigures" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.IconSize.Large })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.IconSize.Large }))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCardCodeTooltip);


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardCustomerCodeField.tsx"
/*!**********************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardCustomerCodeField.tsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");



const CreditCardCustomerCodeField = ({ name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { id: field.name })), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_customer_code_label" }),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "optimizedCheckout-contentSecondary" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.optional_text" })))), []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { input: renderInput, labelContent: labelContent, name: name });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardCustomerCodeField));


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardExpiryField.tsx"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardExpiryField.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _formatCreditCardExpiryDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatCreditCardExpiryDate */ "./packages/core/src/app/payment/creditCard/formatCreditCardExpiryDate.ts");





const CreditCardExpiryField = ({ language, name, }) => {
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoizeOne)((field, form) => {
        return (event) => {
            form.setFieldValue(field.name, (0,_formatCreditCardExpiryDate__WEBPACK_IMPORTED_MODULE_6__["default"])(event.target.value));
        };
    }), []);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field, form }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, field, { autoComplete: "cc-exp", id: field.name, onChange: handleChange(field, form), placeholder: language.translate('payment.credit_card_expiration_placeholder_text'), type: "tel" }))), [handleChange, language]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_expiration_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "form-field--ccExpiry", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"])(CreditCardExpiryField)));


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardFieldset.tsx"
/*!*************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardFieldset.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _CreditCardCodeField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreditCardCodeField */ "./packages/core/src/app/payment/creditCard/CreditCardCodeField.tsx");
/* harmony import */ var _CreditCardCustomerCodeField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreditCardCustomerCodeField */ "./packages/core/src/app/payment/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _CreditCardExpiryField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreditCardExpiryField */ "./packages/core/src/app/payment/creditCard/CreditCardExpiryField.tsx");
/* harmony import */ var _CreditCardNameField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreditCardNameField */ "./packages/core/src/app/payment/creditCard/CreditCardNameField.tsx");
/* harmony import */ var _CreditCardNumberField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreditCardNumberField */ "./packages/core/src/app/payment/creditCard/CreditCardNumberField.tsx");








const CreditCardFieldset = ({ shouldShowCardCodeField, shouldShowCustomerCodeField, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "creditCardFieldset", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { hidden: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_text" })) },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardNumberField__WEBPACK_IMPORTED_MODULE_8__["default"], { name: "ccNumber" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardExpiryField__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "ccExpiry" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardNameField__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "ccName" }),
        shouldShowCardCodeField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardCodeField__WEBPACK_IMPORTED_MODULE_4__["default"], { name: "ccCvv" }),
        shouldShowCustomerCodeField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardCustomerCodeField__WEBPACK_IMPORTED_MODULE_5__["default"], { name: "ccCustomerCode" }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardFieldset));


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardNameField.tsx"
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardNameField.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");



const CreditCardNameField = ({ name }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { autoComplete: "cc-name", id: field.name })), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_name_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccName", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardNameField));


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/CreditCardNumberField.tsx"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/CreditCardNumberField.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! credit-card-type */ "./node_modules/credit-card-type/index.js");
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(credit_card_type__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");
/* harmony import */ var _formatCreditCardNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatCreditCardNumber */ "./packages/core/src/app/payment/creditCard/formatCreditCardNumber.ts");






const CreditCardNumberField = ({ name }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(({ field, form }) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CreditCardNumberInput, { field: field, form: form })), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_number_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-field--ccNumber", input: renderInput, labelContent: labelContent, name: name }));
};
const CreditCardNumberInput = ({ field, form, }) => {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const nextSelectionEndRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (inputRef.current && inputRef.current.selectionEnd !== nextSelectionEndRef.current) {
            inputRef.current.setSelectionRange(nextSelectionEndRef.current, nextSelectionEndRef.current);
        }
    });
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event) => {
        const separator = ' ';
        const { value = '' } = event.target;
        const { name, value: previousValue = '' } = field;
        const selectionEnd = inputRef.current && inputRef.current.selectionEnd;
        // Only allow digits and spaces
        if (new RegExp(`[^\\d${separator}]`).test(value)) {
            return form.setFieldValue(name, previousValue);
        }
        const maxLength = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.max)(credit_card_type__WEBPACK_IMPORTED_MODULE_0___default()(value).map((info) => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.max)(info.lengths)));
        const formattedValue = (0,_formatCreditCardNumber__WEBPACK_IMPORTED_MODULE_7__["default"])(value.replace(new RegExp(separator, 'g'), '').slice(0, maxLength), separator);
        if (selectionEnd === value.length && value.length < formattedValue.length) {
            nextSelectionEndRef.current = formattedValue.length;
        }
        else {
            nextSelectionEndRef.current = selectionEnd || 0;
        }
        void form.setFieldValue(name, formattedValue);
    }, [field, form]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, field, { additionalClassName: "has-icon", autoComplete: "cc-number", id: field.name, onChange: handleChange, ref: inputRef, type: "tel" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(CreditCardNumberField));


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/configureCardValidator.ts"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/configureCardValidator.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ configureCardValidator)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);

function configureCardValidator() {
    const discoverInfo = card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.getTypeInfo('discover');
    const visaInfo = card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.getTypeInfo('visa');
    // Need to support 13 digit PAN because some gateways only provide test credit card numbers in this format.
    card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.updateCard('visa', {
        lengths: [13, ...(visaInfo.lengths || [])],
    });
    // Add support for 8-BIN Discover Cards.
    card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.updateCard('discover', {
        patterns: [...(discoverInfo.patterns || []), [810, 817]],
    });
    // Add support for Mada-BIN Cards.
    card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.addCard({
        niceType: 'Mada',
        type: 'mada',
        patterns: [
            400861, 401757, 407197, 407395, 409201, 410685, 412565, 417633, 419593, 422817, 422818,
            422819, 428331, 428671, 428672, 428673, 431361, 432328, 434107, 439954, 440533, 440647,
            440795, 445564, 446393, 446404, 446672, 455036, 455708, 457865, 458456, 462220, 468540,
            468541, 468542, 468543, 483010, 483011, 483012, 484783, 486094, 486095, 486096, 489317,
            489318, 489319, 493428, 504300, 506968, 508160, 513213, 520058, 521076, 524130, 524514,
            529415, 529741, 530060, 530906, 531095, 531196, 532013, 535825, 535989, 536023, 537767,
            539931, 543085, 543357, 549760, 554180, 557606, 558848, 585265, 588845, 588846, 588847,
            588848, 588849, 588850, 588851, 588982, 588983, 589005, 589206, 604906, 605141, 636120,
            968201, 968202, 968203, 968204, 968205, 968206, 968207, 968208, 968209, 968210, 968211,
        ],
        gaps: [4, 8, 12],
        lengths: [16, 18, 19],
        code: {
            name: 'CVV',
            size: 3,
        },
    });
}


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/formatCreditCardExpiryDate.ts"
/*!********************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/formatCreditCardExpiryDate.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatCreditCardExpiryDate)
/* harmony export */ });
function formatCreditCardExpiryDate(value) {
    const separator = '/';
    const [month = '', year = ''] = value.split(new RegExp(`\\s*${separator}\\s*`));
    const trimmedMonth = month.slice(0, 2);
    const trimmedYear = year.length === 4 ? year.slice(-2) : year ? year.slice(0, 2) : month.slice(2);
    // i.e.: '1'
    if (value.length < 2) {
        return month;
    }
    // ie.: '10 /' (without trailing space)
    if (value.length > 3 && !trimmedYear) {
        return trimmedMonth;
    }
    return `${trimmedMonth} / ${trimmedYear}`;
}


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/formatCreditCardNumber.ts"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/formatCreditCardNumber.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatCreditCardNumber)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unformatCreditCardNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unformatCreditCardNumber */ "./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts");


function formatCreditCardNumber(value, separator = ' ') {
    const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(value);
    if (!card) {
        return value;
    }
    const unformattedValue = (0,_unformatCreditCardNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(value, separator);
    return card.gaps
        .filter((gapIndex) => unformattedValue.length > gapIndex)
        .reduce((output, gapIndex, index) => [output.slice(0, gapIndex + index), output.slice(gapIndex + index)].join(separator), unformattedValue);
}


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/getCreditCardInputStyles.tsx"
/*!*******************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/getCreditCardInputStyles.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./packages/core/src/app/payment/creditCard/getCreditCardValidationSchema.ts"
/*!***********************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/getCreditCardValidationSchema.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getCreditCardValidationSchema({ isCardCodeRequired, language, }) {
    const schema = {
        ccCustomerCode: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)(),
        ccCvv: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)(),
        ccExpiry: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .required(language.translate('payment.credit_card_expiration_required_error'))
            .test({
            message: language.translate('payment.credit_card_expiration_invalid_error'),
            test: (value) => (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.expirationDate)(value).isValid,
        }),
        ccName: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .max(200)
            .required(language.translate('payment.credit_card_name_required_error')),
        ccNumber: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .required(language.translate('payment.credit_card_number_required_error'))
            .test({
            message: language.translate('payment.credit_card_number_invalid_error'),
            test: (value) => (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.number)(value).isValid,
        }),
    };
    if (isCardCodeRequired) {
        schema.ccCvv = (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .required(language.translate('payment.credit_card_cvv_required_error'))
            .test({
            message: language.translate('payment.credit_card_cvv_invalid_error'),
            test(value) {
                const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.number)(this.parent.ccNumber);
                return (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.cvv)(value, card && card.code ? card.code.size : undefined).isValid;
            },
        });
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_2__.object)(schema);
}));


/***/ },

/***/ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardCodeField.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardCodeField.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/CreditCardCodeTooltip.tsx");




const HostedCreditCardCodeField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "has-icon", appearFocused: appearFocused, id: id }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))), [id, appearFocused]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_cvv_label" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_creditCard__WEBPACK_IMPORTED_MODULE_7__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "has-tip" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null))))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-ccFields-field--ccCvv", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardCodeField);


/***/ },

/***/ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardExpiryField.tsx"
/*!****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardExpiryField.tsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardFieldset.tsx"
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardFieldset.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _HostedCreditCardCodeField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HostedCreditCardCodeField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardCodeField.tsx");
/* harmony import */ var _HostedCreditCardExpiryField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HostedCreditCardExpiryField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardExpiryField.tsx");
/* harmony import */ var _HostedCreditCardNameField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HostedCreditCardNameField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNameField.tsx");
/* harmony import */ var _HostedCreditCardNumberField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HostedCreditCardNumberField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNumberField.tsx");







const HostedCreditCardFieldset = ({ additionalFields, cardCodeId, cardExpiryId, cardNameId, cardNumberId, focusedFieldType, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { hidden: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_text" })) },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardNumberField__WEBPACK_IMPORTED_MODULE_7__["default"], { appearFocused: focusedFieldType === 'cardNumber', id: cardNumberId, name: "hostedForm.errors.cardNumber" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardExpiryField__WEBPACK_IMPORTED_MODULE_5__["default"], { appearFocused: focusedFieldType === 'cardExpiry', id: cardExpiryId, name: "hostedForm.errors.cardExpiry" }),
        cardNameId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardNameField__WEBPACK_IMPORTED_MODULE_6__["default"], { appearFocused: focusedFieldType === 'cardName', id: cardNameId, name: "hostedForm.errors.cardName" })),
        cardCodeId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardCodeField__WEBPACK_IMPORTED_MODULE_4__["default"], { appearFocused: focusedFieldType === 'cardCode', id: cardCodeId, name: "hostedForm.errors.cardCode" })),
        additionalFields)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardFieldset);


/***/ },

/***/ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNameField.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNameField.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");



const HostedCreditCardNameField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: appearFocused, id: id }), [id, appearFocused]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccName", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_name_label" }), name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardNameField);


/***/ },

/***/ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNumberField.tsx"
/*!****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNumberField.tsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardValidation.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardValidation.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _HostedCreditCardCodeField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HostedCreditCardCodeField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardCodeField.tsx");
/* harmony import */ var _HostedCreditCardExpiryField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HostedCreditCardExpiryField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardExpiryField.tsx");
/* harmony import */ var _HostedCreditCardNumberField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HostedCreditCardNumberField */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardNumberField.tsx");





const HostedCreditCardValidation = ({ cardCodeId, cardNumberId, cardExpiryId, focusedFieldType, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    cardNumberId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        cardNumberId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardNumberField__WEBPACK_IMPORTED_MODULE_4__["default"], { appearFocused: focusedFieldType === 'cardNumber', id: cardNumberId, name: "hostedForm.errors.cardNumberVerification" })),
        cardCodeId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardCodeField__WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: focusedFieldType === 'cardCode', id: cardCodeId, name: "hostedForm.errors.cardCodeVerification" })),
        cardExpiryId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HostedCreditCardExpiryField__WEBPACK_IMPORTED_MODULE_3__["default"], { appearFocused: focusedFieldType === 'cardExpiry', id: cardExpiryId, name: "hostedForm.errors.cardExpiryVerification" })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardValidation);


/***/ },

/***/ "./packages/core/src/app/payment/hostedCreditCard/getHostedCreditCardValidationSchema.ts"
/*!***********************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/getHostedCreditCardValidationSchema.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getHostedCreditCardValidationSchema({ language, }) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)().shape({
        hostedForm: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
            .required()
            .shape({
            errors: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
                .required()
                .shape({
                cardCode: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_cvv_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_cvv_invalid_error'),
                    test: (value) => value !== 'invalid_card_code',
                }),
                cardExpiry: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_expiration_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_expiration_invalid_error'),
                    test: (value) => value !== 'invalid_card_expiry',
                }),
                cardName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_name_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_name_invalid_error'),
                    test: (value) => value !== 'invalid_card_name',
                }),
                cardNumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_number_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_number_invalid_error'),
                    test: (value) => value !== 'invalid_card_number',
                }),
            }),
        }),
    });
}));


/***/ },

/***/ "./packages/core/src/app/payment/hostedCreditCard/getHostedInstrumentValidationSchema.ts"
/*!***********************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/getHostedInstrumentValidationSchema.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getHostedInstrumentValidationSchema({ language, isCardExpiryRequired, }) {
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

/***/ "./packages/core/src/app/payment/hostedCreditCard/withHostedCreditCardFieldset.tsx"
/*!*****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/hostedCreditCard/withHostedCreditCardFieldset.tsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withHostedCreditCardFieldset)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/getCreditCardInputStyles.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _withForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../withForm */ "./packages/core/src/app/payment/withForm.tsx");
/* harmony import */ var _getHostedCreditCardValidationSchema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getHostedCreditCardValidationSchema */ "./packages/core/src/app/payment/hostedCreditCard/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _getHostedInstrumentValidationSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getHostedInstrumentValidationSchema */ "./packages/core/src/app/payment/hostedCreditCard/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _HostedCreditCardFieldset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HostedCreditCardFieldset */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardFieldset.tsx");
/* harmony import */ var _HostedCreditCardValidation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HostedCreditCardValidation */ "./packages/core/src/app/payment/hostedCreditCard/HostedCreditCardValidation.tsx");













function withHostedCreditCardFieldset(OriginalComponent) {
    const Component = (_a) => {
        var { formik: { setFieldValue, setFieldTouched, submitForm }, isCardCodeRequired, isInstrumentCardCodeRequired: isInstrumentCardCodeRequiredProp, isInstrumentCardNumberRequired: isInstrumentCardNumberRequiredProp, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, isSubmitted, language, method, setSubmitted } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["formik", "isCardCodeRequired", "isInstrumentCardCodeRequired", "isInstrumentCardNumberRequired", "isInstrumentFeatureAvailable", "isSubmitted", "language", "method", "setSubmitted"]);
        const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
        const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((name) => {
            return `${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.compact)([method.gateway, method.id]).join('-')}-${name}`;
        }, [method]);
        const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
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
                        default: yield (0,_creditCard__WEBPACK_IMPORTED_MODULE_7__["default"])(styleContainerId, styleProps),
                        error: yield (0,_creditCard__WEBPACK_IMPORTED_MODULE_7__["default"])(styleContainerId, styleProps, _creditCard__WEBPACK_IMPORTED_MODULE_7__.CreditCardInputStylesType.Error),
                        focus: yield (0,_creditCard__WEBPACK_IMPORTED_MODULE_7__["default"])(styleContainerId, styleProps, _creditCard__WEBPACK_IMPORTED_MODULE_7__.CreditCardInputStylesType.Focus),
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
            setFieldValue,
            setFieldTouched,
            setFocusedFieldType,
            setSubmitted,
            submitForm,
        ]);
        const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((selectedInstrument) => {
            const isInstrumentCardNumberRequired = selectedInstrument
                ? isInstrumentCardNumberRequiredProp(selectedInstrument)
                : false;
            const isInstrumentCardCodeRequired = selectedInstrument
                ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
                : false;
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_HostedCreditCardValidation__WEBPACK_IMPORTED_MODULE_15__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired
                    ? getHostedFieldId('ccNumber')
                    : undefined, focusedFieldType: focusedFieldType }));
        }, [
            focusedFieldType,
            getHostedFieldId,
            isInstrumentCardCodeRequiredProp,
            isInstrumentCardNumberRequiredProp,
            method,
        ]);
        if (!method.config.isHostedFormEnabled) {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OriginalComponent, Object.assign({}, rest, { method: method }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OriginalComponent, Object.assign({}, rest, { getHostedFormOptions: getHostedFormOptions, getHostedStoredCardValidationFieldset: getHostedStoredCardValidationFieldset, hostedFieldset: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_HostedCreditCardFieldset__WEBPACK_IMPORTED_MODULE_14__["default"], { additionalFields: method.config.requireCustomerCode && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_creditCard__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "ccCustomerCode" })), cardCodeId: isCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardExpiryId: getHostedFieldId('ccExpiry'), cardNameId: getHostedFieldId('ccName'), cardNumberId: getHostedFieldId('ccNumber'), focusedFieldType: focusedFieldType }), hostedStoredCardValidationSchema: (0,_getHostedInstrumentValidationSchema__WEBPACK_IMPORTED_MODULE_13__["default"])({ language }), hostedValidationSchema: (0,_getHostedCreditCardValidationSchema__WEBPACK_IMPORTED_MODULE_12__["default"])({ language }), method: method })));
    };
    return (0,_common_form__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_withForm__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_4__["default"])(mapFromCheckoutProps)(Component))));
}
const mapFromCheckoutProps = () => {
    return ({ checkoutState }, { method }) => {
        const { data: { getConfig, getCustomer }, } = checkoutState;
        const config = getConfig();
        const customer = getCustomer();
        if (!config || !customer) {
            return null;
        }
        const isInstrumentFeatureAvailableProp = (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_8__["default"])({
            config,
            customer,
            paymentMethod: method,
        });
        return {
            method,
            isCardCodeRequired: method.config.cardCode || method.config.cardCode === null,
            isInstrumentCardCodeRequired: (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_9__["default"])(checkoutState),
            isInstrumentCardNumberRequired: (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState),
            isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp,
        };
    };
};


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/CreditCardPaymentMethod.tsx"
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/CreditCardPaymentMethod.tsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/legacy */ "../checkout-sdk-js/dist/esm/integrations/legacy.js");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/configureCardValidator.ts");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/CreditCardFieldset.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/getCreditCardValidationSchema.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/getInstrumentValidationSchema.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/CardInstrumentFieldset.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/CreditCardValidation.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isCardInstrument.ts");
/* harmony import */ var _StoreInstrumentFieldset__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../StoreInstrumentFieldset */ "./packages/core/src/app/payment/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _withForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../withForm */ "./packages/core/src/app/payment/withForm.tsx");
/* harmony import */ var _withPayment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../withPayment */ "./packages/core/src/app/payment/withPayment.tsx");














class CreditCardPaymentMethod extends react__WEBPACK_IMPORTED_MODULE_4__.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isAddingNewCard: false,
            isPreloaderOn: true,
        };
        this.handleUseNewCard = () => {
            const { formik: { setFieldValue }, } = this.props;
            setFieldValue('hostedForm.cardType', '');
            this.setState({
                isAddingNewCard: true,
                selectedInstrumentId: undefined,
            });
        };
        this.handleSelectInstrument = (id) => {
            const { formik: { setFieldValue }, } = this.props;
            setFieldValue('hostedForm.cardType', '');
            this.setState({
                isAddingNewCard: false,
                selectedInstrumentId: id,
            });
        };
        this.handleDeleteInstrument = (id) => {
            const { instruments, formik: { setFieldValue }, } = this.props;
            const { selectedInstrumentId } = this.state;
            if (instruments.length === 0) {
                this.setState({
                    isAddingNewCard: true,
                    selectedInstrumentId: undefined,
                });
                setFieldValue('instrumentId', '');
            }
            else if (selectedInstrumentId === id) {
                this.setState({
                    selectedInstrumentId: this.getDefaultInstrumentId(),
                });
                setFieldValue('instrumentId', this.getDefaultInstrumentId());
            }
        };
    }
    componentDidMount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { initializePayment, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, loadInstruments, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, setValidationSchema, } = this.props;
            setValidationSchema(method, this.getValidationSchema());
            (0,_creditCard__WEBPACK_IMPORTED_MODULE_9__["default"])();
            try {
                if (isInstrumentFeatureAvailableProp) {
                    yield loadInstruments();
                }
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_legacy__WEBPACK_IMPORTED_MODULE_1__.createLegacyPaymentStrategy],
                }, this.getSelectedInstrument()).then(() => this.setState({ isPreloaderOn: false }));
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
    }
    componentWillUnmount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { deinitializePayment, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, setValidationSchema, } = this.props;
            setValidationSchema(method, null);
            try {
                yield deinitializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
    }
    componentDidUpdate(_prevProps, prevState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { deinitializePayment, initializePayment, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, setValidationSchema, } = this.props;
            const { isAddingNewCard, selectedInstrumentId } = this.state;
            setValidationSchema(method, this.getValidationSchema());
            if (selectedInstrumentId !== prevState.selectedInstrumentId ||
                isAddingNewCard !== prevState.isAddingNewCard) {
                try {
                    yield deinitializePayment({
                        gatewayId: method.gateway,
                        methodId: method.id,
                    });
                    yield initializePayment({
                        gatewayId: method.gateway,
                        methodId: method.id,
                        integrations: [_bigcommerce_checkout_sdk_integrations_legacy__WEBPACK_IMPORTED_MODULE_1__.createLegacyPaymentStrategy],
                    }, this.getSelectedInstrument());
                }
                catch (error) {
                    onUnhandledError(error);
                }
            }
        });
    }
    render() {
        const { cardFieldset, getStoredCardValidationFieldset, instruments, isInitializing, isInstrumentCardCodeRequired: isInstrumentCardCodeRequiredProp, isInstrumentCardNumberRequired: isInstrumentCardNumberRequiredProp, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, isLoadingInstruments, shouldShowInstrumentFieldset, method, } = this.props;
        const { isAddingNewCard, isPreloaderOn } = this.state;
        const selectedInstrument = this.getSelectedInstrument();
        const shouldShowCreditCardFieldset = !shouldShowInstrumentFieldset || isAddingNewCard;
        const isLoading = isInitializing || isLoadingInstruments || isPreloaderOn;
        const shouldShowNumberField = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument)
            : false;
        const shouldShowCardCodeField = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "paymentMethod paymentMethod--creditCard", "data-test": "credit-cart-payment-method" },
                shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_storedInstrument__WEBPACK_IMPORTED_MODULE_16__["default"], { instruments: instruments, onDeleteInstrument: this.handleDeleteInstrument, onSelectInstrument: this.handleSelectInstrument, onUseNewInstrument: this.handleUseNewCard, selectedInstrumentId: selectedInstrument && selectedInstrument.bigpayToken, validateInstrument: getStoredCardValidationFieldset ? (getStoredCardValidationFieldset(selectedInstrument)) : (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_storedInstrument__WEBPACK_IMPORTED_MODULE_17__["default"], { shouldShowCardCodeField: shouldShowCardCodeField, shouldShowNumberField: shouldShowNumberField })) })),
                shouldShowCreditCardFieldset && !cardFieldset && (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_creditCard__WEBPACK_IMPORTED_MODULE_10__["default"], { shouldShowCardCodeField: method.config.cardCode || method.config.cardCode === null, shouldShowCustomerCodeField: method.config.requireCustomerCode })),
                shouldShowCreditCardFieldset && cardFieldset,
                isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_StoreInstrumentFieldset__WEBPACK_IMPORTED_MODULE_19__["default"], { instrumentId: selectedInstrument && selectedInstrument.bigpayToken })))));
    }
    getSelectedInstrument() {
        const { instruments } = this.props;
        const { selectedInstrumentId = this.getDefaultInstrumentId() } = this.state;
        return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(instruments, { bigpayToken: selectedInstrumentId });
    }
    getDefaultInstrumentId() {
        const { isAddingNewCard } = this.state;
        if (isAddingNewCard) {
            return;
        }
        const { instruments } = this.props;
        const defaultInstrument = instruments.find((instrument) => instrument.defaultInstrument) || instruments[0];
        return defaultInstrument && defaultInstrument.bigpayToken;
    }
    getValidationSchema() {
        const { cardValidationSchema, isInstrumentCardCodeRequired: isInstrumentCardCodeRequiredProp, isInstrumentCardNumberRequired: isInstrumentCardNumberRequiredProp, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, isPaymentDataRequired, language, method, storedCardValidationSchema, } = this.props;
        if (!isPaymentDataRequired) {
            return null;
        }
        const selectedInstrument = this.getSelectedInstrument();
        if (isInstrumentFeatureAvailableProp && selectedInstrument) {
            return (storedCardValidationSchema ||
                (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_13__["default"])({
                    instrumentBrand: selectedInstrument.brand,
                    instrumentLast4: selectedInstrument.last4,
                    isCardCodeRequired: isInstrumentCardCodeRequiredProp(selectedInstrument, method),
                    isCardNumberRequired: isInstrumentCardNumberRequiredProp(selectedInstrument),
                    language,
                }));
        }
        return (cardValidationSchema ||
            (0,_creditCard__WEBPACK_IMPORTED_MODULE_11__["default"])({
                isCardCodeRequired: method.config.cardCode === true,
                language,
            }));
    }
}
const mapFromCheckoutProps = () => {
    const filterInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((instruments = []) => instruments.filter(_storedInstrument__WEBPACK_IMPORTED_MODULE_18__["default"]));
    return (context, props) => {
        const { method } = props;
        const { checkoutService, checkoutState } = context;
        const { data: { getConfig, getCustomer, getInstruments, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
        const config = getConfig();
        const customer = getCustomer();
        if (!config || !customer || !method) {
            return null;
        }
        const instruments = filterInstruments(getInstruments(method));
        const isInstrumentFeatureAvailableProp = (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_12__["default"])({
            config,
            customer,
            paymentMethod: method,
        });
        return {
            instruments,
            isCardCodeRequired: method.config.cardCode || method.config.cardCode === null,
            isCustomerCodeRequired: !!method.config.requireCustomerCode,
            isInstrumentCardCodeRequired: (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_14__["default"])(checkoutState),
            isInstrumentCardNumberRequired: (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_15__["default"])(checkoutState),
            isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp,
            isLoadingInstruments: isLoadingInstruments(),
            isPaymentDataRequired: isPaymentDataRequired(),
            loadInstruments: checkoutService.loadInstruments,
            shouldShowInstrumentFieldset: isInstrumentFeatureAvailableProp && instruments.length > 0,
        };
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_withForm__WEBPACK_IMPORTED_MODULE_20__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_withPayment__WEBPACK_IMPORTED_MODULE_21__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_7__["default"])(mapFromCheckoutProps)(CreditCardPaymentMethod))))));


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/HostedCreditCardPaymentMethod.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/HostedCreditCardPaymentMethod.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/cba-mpgs */ "../checkout-sdk-js/dist/esm/integrations/cba-mpgs.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_credit_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/credit-card */ "../checkout-sdk-js/dist/esm/integrations/credit-card.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_cybersource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/cybersource */ "../checkout-sdk-js/dist/esm/integrations/cybersource.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/sagepay */ "../checkout-sdk-js/dist/esm/integrations/sagepay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hostedCreditCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hostedCreditCard */ "./packages/core/src/app/payment/hostedCreditCard/withHostedCreditCardFieldset.tsx");
/* harmony import */ var _CreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreditCardPaymentMethod */ "./packages/core/src/app/payment/paymentMethod/CreditCardPaymentMethod.tsx");








const HostedCreditCardPaymentMethod = (_a) => {
    var { getHostedFormOptions, getHostedStoredCardValidationFieldset, hostedFieldset, hostedStoredCardValidationSchema, hostedValidationSchema, initializePayment } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["getHostedFormOptions", "getHostedStoredCardValidationFieldset", "hostedFieldset", "hostedStoredCardValidationSchema", "hostedValidationSchema", "initializePayment"]);
    const initializeHostedCreditCardPayment = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        var _a;
        return initializePayment(Object.assign(Object.assign({}, options), { integrations: [
                ...((_a = options.integrations) !== null && _a !== void 0 ? _a : []),
                _bigcommerce_checkout_sdk_integrations_credit_card__WEBPACK_IMPORTED_MODULE_2__.createCreditCardPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_cybersource__WEBPACK_IMPORTED_MODULE_3__.createCyberSourcePaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_cybersource__WEBPACK_IMPORTED_MODULE_3__.createCyberSourceV2PaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_4__.createSagePayPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_1__.createCBAMPGSPaymentStrategy,
            ], creditCard: getHostedFormOptions && {
                form: yield getHostedFormOptions(selectedInstrument),
            } }));
    }), [getHostedFormOptions, initializePayment]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_CreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, { cardFieldset: hostedFieldset, cardValidationSchema: hostedValidationSchema, getStoredCardValidationFieldset: getHostedStoredCardValidationFieldset, initializePayment: initializeHostedCreditCardPayment, storedCardValidationSchema: hostedStoredCardValidationSchema })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hostedCreditCard__WEBPACK_IMPORTED_MODULE_6__["default"])(HostedCreditCardPaymentMethod));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/CardInstrumentFieldset.tsx"
/*!***********************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/CardInstrumentFieldset.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntrustedShippingCardVerificationType: () => (/* binding */ UntrustedShippingCardVerificationType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalTrigger.tsx");
/* harmony import */ var _InstrumentSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InstrumentSelect */ "./packages/core/src/app/payment/storedInstrument/InstrumentSelect.tsx");
/* harmony import */ var _ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ManageInstrumentsModal */ "./packages/core/src/app/payment/storedInstrument/ManageInstrumentsModal.tsx");





var UntrustedShippingCardVerificationType;
(function (UntrustedShippingCardVerificationType) {
    UntrustedShippingCardVerificationType["CVV"] = "cvv";
    UntrustedShippingCardVerificationType["PAN"] = "pan";
})(UntrustedShippingCardVerificationType || (UntrustedShippingCardVerificationType = {}));
const CardInstrumentFieldset = ({ instruments, onDeleteInstrument, onSelectInstrument, onUseNewInstrument, selectedInstrumentId, shouldHideExpiryDate = false, validateInstrument = null, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InstrumentSelect__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, field, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrumentId, shouldHideExpiryDate: shouldHideExpiryDate }))), [
        instruments,
        onSelectInstrument,
        onUseNewInstrument,
        selectedInstrumentId,
        shouldHideExpiryDate,
    ]);
    const renderModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ instruments: instruments, onDeleteInstrument: onDeleteInstrument }, props))), [instruments, onDeleteInstrument]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "instrumentFieldset", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { hidden: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_text" })) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { modal: renderModal }, ({ onClick }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "instrumentModal-trigger", onClick: onClick, type: "button" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_button" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { name: "instrumentId", render: renderInput }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: selectedInstrumentId ? undefined : 'none' } }, validateInstrument)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CardInstrumentFieldset));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/CreditCardValidation.tsx"
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/CreditCardValidation.tsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/CreditCardCodeField.tsx");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditCard */ "./packages/core/src/app/payment/creditCard/CreditCardNumberField.tsx");



const CreditCardValidation = ({ shouldShowNumberField, shouldShowCardCodeField, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        shouldShowNumberField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_creditCard__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "ccNumber" }),
        shouldShowCardCodeField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_creditCard__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "ccCvv" }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCardValidation);


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/InstrumentSelect.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/InstrumentSelect.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! credit-card-type */ "./node_modules/credit-card-type/index.js");
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(credit_card_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/dropdown/DropdownTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/CreditCardIcon.tsx");
/* harmony import */ var _mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapFromInstrumentCardType */ "./packages/core/src/app/payment/storedInstrument/mapFromInstrumentCardType.ts");








class InstrumentSelect extends react__WEBPACK_IMPORTED_MODULE_4__.PureComponent {
    componentDidMount() {
        const { selectedInstrumentId } = this.props;
        // FIXME: Used setTimeout here because setFieldValue call doesnot set value if called before formik is properly mounted.
        //        This ensures that update Field value is called after formik has mounted.
        // See GitHub issue: https://github.com/jaredpalmer/formik/issues/930
        setTimeout(() => this.updateFieldValue(selectedInstrumentId));
    }
    componentDidUpdate(prevProps) {
        const { selectedInstrumentId: prevSelectedInstrumentId } = prevProps;
        const { selectedInstrumentId } = this.props;
        if (prevSelectedInstrumentId !== selectedInstrumentId) {
            this.updateFieldValue(selectedInstrumentId);
        }
    }
    componentWillUnmount() {
        const { selectedInstrumentId, field } = this.props;
        if (field.value === '' && selectedInstrumentId !== undefined) {
            this.updateFieldValue();
        }
    }
    render() {
        const { field, instruments, onSelectInstrument, onUseNewInstrument, selectedInstrumentId, shouldHideExpiryDate = false, } = this.props;
        const selectedInstrument = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(instruments, { bigpayToken: selectedInstrumentId });
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { dropdown: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentMenu, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrumentId, shouldHideExpiryDate: shouldHideExpiryDate }) },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentSelectButton, { instrument: selectedInstrument, shouldHideExpiryDate: shouldHideExpiryDate, testId: "instrument-select" }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", Object.assign({ type: "hidden" }, field)))));
    }
    updateFieldValue(instrumentId = '') {
        const { form, field } = this.props;
        form.setFieldValue(field.name, instrumentId);
    }
}
const InstrumentMenu = ({ instruments, selectedInstrumentId, shouldHideExpiryDate = false, onSelectInstrument, onUseNewInstrument, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", { className: "instrumentSelect-dropdownMenu instrumentSelect-dropdownMenuNext dropdown-menu", "data-test": "instrument-select-menu" },
        instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('instrumentSelect-option dropdown-menu-item', {
                'instrumentSelect-option--selected': instrument.bigpayToken === selectedInstrumentId,
            }), key: instrument.bigpayToken },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentOption, { instrument: instrument, onClick: onSelectInstrument, shouldHideExpiryDate: shouldHideExpiryDate, testId: "instrument-select-option" })))),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", { className: "instrumentSelect-option instrumentSelect-option--addNew dropdown-menu-item" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentUseNewButton, { onClick: onUseNewInstrument, testId: "instrument-select-option-use-new" }))));
};
const InstrumentSelectButton = ({ instrument, shouldHideExpiryDate = false, testId, onClick, }) => {
    if (!instrument) {
        return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentUseNewButton, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", testId: testId }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentMenuItem, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", instrument: instrument, onClick: onClick, shouldHideExpiryDate: shouldHideExpiryDate, testId: testId }));
};
const InstrumentOption = ({ instrument, shouldHideExpiryDate = false, onClick = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, }) => {
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
        onClick(instrument.bigpayToken);
    }, [onClick, instrument]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentMenuItem, { instrument: instrument, onClick: handleClick, shouldHideExpiryDate: shouldHideExpiryDate, testId: "instrument-select-option" }));
};
const InstrumentMenuItem = ({ className, instrument, testId, shouldHideExpiryDate = false, onClick, }) => {
    const cardType = (0,_mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_8__["default"])(instrument.brand);
    const cardInfo = credit_card_type__WEBPACK_IMPORTED_MODULE_2___default().getTypeInfo(cardType);
    const isExpired = !(0,card_validator__WEBPACK_IMPORTED_MODULE_0__.expirationDate)({
        month: instrument.expiryMonth,
        year: instrument.expiryYear,
    }).isValid;
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('instrumentSelect-details', {
                'instrumentSelect-details--expired': isExpired,
            }) },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { cardType: cardType }),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect-card", "data-test": `${testId}-last4` }, cardInfo ? (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: { cardTitle: cardInfo.niceType, endingIn: instrument.last4 }, id: "payment.instrument_ending_in_text" })) : (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: { endingIn: instrument.last4 }, id: "payment.instrument_default_ending_in_text" }))),
            !shouldHideExpiryDate && (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('instrumentSelect-expiry', {
                    'instrumentSelect-expiry--expired': isExpired,
                }), "data-test": `${testId}-expiry` }, isExpired ? (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: {
                    expiryDate: `${instrument.expiryMonth}/${instrument.expiryYear}`,
                }, id: "payment.instrument_expired_text" })) : (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: {
                    expiryDate: `${instrument.expiryMonth}/${instrument.expiryYear}`,
                }, id: "payment.instrument_expires_text" })))))));
};
const InstrumentUseNewButton = ({ className, testId, onClick = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, }) => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect-details instrumentSelect-details--addNew" },
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect-card" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "payment.instrument_add_card_action" })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstrumentSelect);


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/getInstrumentValidationSchema.ts"
/*!*****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/getInstrumentValidationSchema.ts ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! credit-card-type */ "./node_modules/credit-card-type/index.js");
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(credit_card_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapFromInstrumentCardType */ "./packages/core/src/app/payment/storedInstrument/mapFromInstrumentCardType.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getInstrumentValidationSchema({ instrumentBrand, instrumentLast4, isCardCodeRequired, isCardNumberRequired, language, }) {
    const schema = {
        instrumentId: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required(),
    };
    if (isCardCodeRequired) {
        schema.ccCvv = (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)()
            .required(language.translate('payment.credit_card_cvv_required_error'))
            .test({
            message: language.translate('payment.credit_card_cvv_invalid_error'),
            test(value = '') {
                const cardType = (0,_mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_4__["default"])(instrumentBrand);
                const cardInfo = credit_card_type__WEBPACK_IMPORTED_MODULE_2___default().getTypeInfo(cardType);
                return (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.cvv)(value, cardInfo && cardInfo.code ? cardInfo.code.size : undefined)
                    .isValid;
            },
        });
    }
    if (isCardNumberRequired) {
        schema.ccNumber = (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)()
            .required(language.translate('payment.credit_card_number_required_error'))
            .test({
            message: language.translate('payment.credit_card_number_invalid_error'),
            test: (value = '') => (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.number)(value).isValid,
        })
            .test({
            message: language.translate('payment.credit_card_number_mismatch_error'),
            test: (value = '') => value.slice(-instrumentLast4.length) === instrumentLast4,
        });
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_3__.object)(schema);
}));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequired.ts"
/*!****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequired.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROVIDERS_WITHOUT_CARD_CODE: () => (/* binding */ PROVIDERS_WITHOUT_CARD_CODE),
/* harmony export */   "default": () => (/* binding */ isInstrumentCardCodeRequired)
/* harmony export */ });
/* harmony import */ var _CardInstrumentFieldset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardInstrumentFieldset */ "./packages/core/src/app/payment/storedInstrument/CardInstrumentFieldset.tsx");

const PROVIDERS_WITHOUT_CARD_CODE = ['bluesnapdirect'];
function isInstrumentCardCodeRequired({ instrument, lineItems, paymentMethod, }) {
    if (PROVIDERS_WITHOUT_CARD_CODE.includes(instrument.provider)) {
        return false;
    }
    // If there's a digital item in the cart, always show CVV field
    if (lineItems.digitalItems.length > 0 || lineItems.giftCertificates.length > 0) {
        return true;
    }
    // If the shipping address is trusted, show CVV field based on the merchant's configuration
    if (instrument.trustedShippingAddress) {
        return !!paymentMethod.config.isVaultingCvvEnabled;
    }
    // If the shipping address is untrusted, card verficiation mode has set with cvv, card code is required
    if ('untrustedShippingCardVerificationMode' in instrument &&
        instrument.untrustedShippingCardVerificationMode ===
            _CardInstrumentFieldset__WEBPACK_IMPORTED_MODULE_0__.UntrustedShippingCardVerificationType.CVV) {
        return true;
    }
    // Otherwise, if the shipping address is untrusted, show CVV field if the
    // merchant either requires it for regular card or stored card payments.
    return !!(paymentMethod.config.isVaultingCvvEnabled || paymentMethod.config.cardCode);
}


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequiredSelector.ts"
/*!************************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequiredSelector.ts ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _isInstrumentCardCodeRequired__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstrumentCardCodeRequired */ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardCodeRequired.ts");


const isInstrumentCardCodeRequiredSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(({ data }) => {
    const cart = data.getCart();
    return cart && cart.lineItems;
}, (lineItems) => (instrument, method) => {
    if (!lineItems) {
        return false;
    }
    return (0,_isInstrumentCardCodeRequired__WEBPACK_IMPORTED_MODULE_1__["default"])({
        instrument,
        lineItems,
        paymentMethod: method,
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isInstrumentCardCodeRequiredSelector);


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequired.ts"
/*!******************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequired.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInstrumentCardNumberRequired)
/* harmony export */ });
/* harmony import */ var _CardInstrumentFieldset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardInstrumentFieldset */ "./packages/core/src/app/payment/storedInstrument/CardInstrumentFieldset.tsx");

function isInstrumentCardNumberRequired({ lineItems, instrument, }) {
    if (lineItems.physicalItems.length === 0) {
        return false;
    }
    if (instrument.trustedShippingAddress) {
        return false;
    }
    return !(instrument.untrustedShippingCardVerificationMode ===
        _CardInstrumentFieldset__WEBPACK_IMPORTED_MODULE_0__.UntrustedShippingCardVerificationType.CVV);
}


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequiredSelector.ts"
/*!**************************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequiredSelector.ts ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _isInstrumentCardNumberRequired__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstrumentCardNumberRequired */ "./packages/core/src/app/payment/storedInstrument/isInstrumentCardNumberRequired.ts");


const isInstrumentCardNumberRequiredSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(({ data }) => {
    const cart = data.getCart();
    return cart && cart.lineItems;
}, (lineItems) => (instrument) => {
    if (!lineItems) {
        return false;
    }
    return (0,_isInstrumentCardNumberRequired__WEBPACK_IMPORTED_MODULE_1__["default"])({
        lineItems,
        instrument,
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isInstrumentCardNumberRequiredSelector);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/HostedCreditCardPaymentMethod.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/HostedCreditCardPaymentMethod.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    { id: 'cba_mpgs' },
]));


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx"
/*!***********************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./packages/hosted-credit-card-integration/src/index.ts"
/*!**************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/index.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HostedCreditCardComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   HostedCreditCardFieldset: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   HostedCreditCardPaymentMethod: () => (/* reexport safe */ _HostedCreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   HostedCreditCardValidation: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   getHostedCreditCardValidationSchema: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   getHostedInstrumentValidationSchema: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   useHostedCreditCard: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_6__.useHostedCreditCard)
/* harmony export */ });
/* harmony import */ var _HostedCreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HostedCreditCardPaymentMethod */ "./packages/hosted-credit-card-integration/src/HostedCreditCardPaymentMethod.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx");





/***/ }

}]);
//# sourceMappingURL=hosted-credit-card-payment-method.js.map