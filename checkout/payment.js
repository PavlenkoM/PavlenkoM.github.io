(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["payment"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/afterpay.js":
/*!************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/afterpay.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAfterpayPaymentStrategy: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
var t;class n extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(t||(t={}));class i extends n{constructor(e){super(function(e){switch(e){case t.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case t.MissingCart:return"Unable to proceed because cart data is unavailable.";case t.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case t.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case t.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case t.MissingCheckoutConfig:case t.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case t.MissingOrder:return"Unable to proceed because order data is unavailable.";case t.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case t.MissingPayment:return"Unable to proceed because payment data is unavailable.";case t.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case t.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case t.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class a extends n{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class r extends a{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class s extends n{constructor(e){super(e||"The current order could not be finalized successfully"),this.name="OrderFinalizationNotCompletedError",this.type="order_finalization_not_completed"}}var o;!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(o||(o={}));class c extends n{constructor(e){super(function(e){switch(e){case o.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case o.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case o.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case o.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}const d={body:{},headers:{},status:0};class u extends n{constructor(e,{message:t,errors:n}={}){const{body:i,headers:a,status:r}=e||d;super(t||"An unexpected error has occurred."),this.name="RequestError",this.type="request",this.body=i,this.headers=a,this.status=r,this.errors=n||[]}}var l=function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}c((i=i.apply(e,t||[])).next())})};class p{constructor(e,t){this._paymentIntegrationService=e,this._afterpayScriptLoader=t}initialize(e){var n;return l(this,void 0,void 0,function*(){const a=this._paymentIntegrationService.getState(),r=a.getPaymentMethod(e.methodId,e.gatewayId),s=(null===(n=a.getCart())||void 0===n?void 0:n.currency.code)||"",o=this._mapCurrencyToISO2(s),c=function(e,t,n=!0){var i;return null!==(i=e["PI-4789.afterpay_script_use_https"])&&void 0!==i?i:n}(a.getStoreConfigOrThrow().checkoutSettings.features,0,!1);if(!r)throw new i(t.MissingPaymentMethod);this._afterpaySdk=yield this._afterpayScriptLoader.load(r,o,c)})}deinitialize(){return this._afterpaySdk&&(this._afterpaySdk=void 0),Promise.resolve()}execute(e,t){var n;return l(this,void 0,void 0,function*(){if(!e.payment)throw new r(["payment.gatewayId","payment.methodId"]);const{gatewayId:i,methodId:a}=e.payment;if(!i||!a)throw new r(["payment.gatewayId","payment.methodId"]);const{useStoreCredit:s}=e;void 0!==s&&(yield this._paymentIntegrationService.applyStoreCredit(s)),yield this._loadPaymentMethod(i,a,t);const o=this._paymentIntegrationService.getState();yield this._paymentIntegrationService.validateCheckout(o.getCheckout(),t);const c=(null===(n=o.getCart())||void 0===n?void 0:n.currency.code)||"",d=this._mapCurrencyToISO2(c);return this._redirectToAfterpay(d,o.getPaymentMethod(a,i)),new Promise(()=>{})})}finalize(e){var n,a,r;return l(this,void 0,void 0,function*(){const o=this._paymentIntegrationService.getState(),c=o.getPaymentId(),d=o.getContextConfig();if(!c)throw new i(t.MissingCheckout);if(!(null==d?void 0:d.payment.token))throw new i(t.MissingCheckoutConfig);const u={methodId:c.providerId,paymentData:{nonce:d.payment.token}};yield this._paymentIntegrationService.submitOrder({},e);try{yield this._paymentIntegrationService.submitPayment(u)}catch(e){if(yield this._paymentIntegrationService.forgetCheckout(c.providerId),yield this._paymentIntegrationService.loadPaymentMethods(),(e=>"object"==typeof e&&null!==e&&"body"in e)(e))throw new s(null===(r=null===(a=null===(n=e.body)||void 0===n?void 0:n.errors)||void 0===a?void 0:a[0])||void 0===r?void 0:r.message)}})}_redirectToAfterpay(e,t){if(!this._afterpaySdk||!(null==t?void 0:t.clientToken))throw new c(o.PaymentNotInitialized);this._afterpaySdk.initialize({countryCode:e}),this._afterpaySdk.redirect({token:t.clientToken})}_mapCurrencyToISO2(e){return{AUD:"AU",NZD:"NZ",CAD:"CA",USD:"US"}[e]||"AU"}_loadPaymentMethod(e,t,n){var i;return l(this,void 0,void 0,function*(){try{return yield this._paymentIntegrationService.loadPaymentMethod(e,Object.assign(Object.assign({},n),{params:Object.assign(Object.assign({},null==n?void 0:n.params),{method:t})}))}catch(e){if(e instanceof u&&422===(null===(i=e.body)||void 0===i?void 0:i.status))throw new a("Afterpay can't process your payment for this order, please try another payment method");throw e}})}}class h extends n{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}var y,m;!function(e){e.PROD="//portal.afterpay.com/afterpay-async.js",e.SANDBOX="//portal.sandbox.afterpay.com/afterpay.js",e.HTTPS_PROD="https://portal.afterpay.com/afterpay-async.js",e.HTTPS_SANDBOX="https://portal.sandbox.afterpay.com/afterpay.js"}(y||(y={})),function(e){e.PROD="//portal.afterpay.com/afterpay-async.js",e.SANDBOX="//portal.sandbox.afterpay.com/afterpay.js",e.HTTPS_PROD="https://portal.afterpay.com/afterpay-async.js",e.HTTPS_SANDBOX="https://portal.sandbox.afterpay.com/afterpay.js"}(m||(m={}));class g{constructor(e){this._scriptLoader=e}load(e,t,n=!1){return i=this,a=void 0,s=function*(){const i=e.config.testMode||!1,a=this._getScriptURI(t,i,n);return this._scriptLoader.loadScript(a).then(()=>{if(!function(e){return"AfterPay"in e}(window))throw new h;return window.AfterPay})},new((r=void 0)||(r=Promise))(function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function o(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r(function(e){e(i)})).then(n,o)}c((s=s.apply(i,a||[])).next())});// removed by dead control flow
 var i, a, r, s; }_getScriptURI(e,t,n=!1){return"US"===e?n?t?m.HTTPS_SANDBOX:m.HTTPS_PROD:t?m.SANDBOX:m.PROD:n?t?y.HTTPS_SANDBOX:y.HTTPS_PROD:t?y.SANDBOX:y.PROD}}const f=(b=t=>new p(t,new g((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.createScriptLoader)())),v=[{gateway:"afterpay"},{id:"afterpay"}],Object.assign(b,{resolveIds:v}));var b,v;


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js":
/*!*******************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBlueSnapDirectAPMPaymentStrategy: () => (/* binding */ V),
/* harmony export */   createBlueSnapDirectCreditCardPaymentStrategy: () => (/* binding */ F),
/* harmony export */   createBlueSnapV2PaymentStrategy: () => (/* binding */ K)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var i,a={};function r(e,t){return Object.assign(e,{resolveIds:t})}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);class s extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class o extends s{constructor(e){super(e||"Unable to proceed because the client library of a payment method has thrown an unexpected error."),this.name="PaymentMethodFailedError",this.type="payment_method_client_invalid"}}function d(e,t){if(null==e)throw t?t():new Error("An unexpected error has occurred.");return e}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(i||(i={}));class c extends s{constructor(e){super(function(e){switch(e){case i.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case i.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case i.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case i.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var u,l;class p{initialize(e){this._blueSnapSdk=e}initialize3ds(e,t){return n=this,i=void 0,r=function*(){const n=this._getBlueSnapSdk();return new Promise((i,a)=>{n.threeDsPaymentsSetup(e,e=>"1"===e.code?i(e.threeDSecure.threeDSecureReferenceId):a(new o)),n.threeDsPaymentsSubmitData(t)})},new((a=void 0)||(a=Promise))(function(e,t){function s(e){try{d(r.next(e))}catch(e){t(e)}}function o(e){try{d(r.throw(e))}catch(e){t(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a(function(e){e(n)})).then(s,o)}d((r=r.apply(n,i||[])).next())});// removed by dead control flow
 var n, i, a, r; }_getBlueSnapSdk(){return d(this._blueSnapSdk,()=>new c(i.PaymentNotInitialized))}}class m extends s{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class h extends m{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}function y(e){return!("object"!=typeof e||null===e||void 0!==e.shouldSaveInstrument&&"boolean"!=typeof e.shouldSaveInstrument||void 0!==e.shouldSetAsDefaultInstrument&&"boolean"!=typeof e.shouldSetAsDefaultInstrument)}function b(e){return Boolean(e.instrumentId)}class g extends s{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(u||(u={}));class _ extends s{constructor(e){super(function(e){switch(e){case u.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case u.MissingCart:return"Unable to proceed because cart data is unavailable.";case u.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case u.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case u.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case u.MissingCheckoutConfig:case u.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case u.MissingOrder:return"Unable to proceed because order data is unavailable.";case u.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case u.MissingPayment:return"Unable to proceed because payment data is unavailable.";case u.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case u.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case u.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}!function(e){e.CardCode="cardCode",e.CardCodeVerification="cardCodeVerification",e.CardExpiry="cardExpiry",e.CardName="cardName",e.CardNumber="cardNumber",e.CardNumberVerification="cardNumberVerification",e.CardExpiryVerification="cardExpiryVerification"}(l||(l={}));const f=l;function v(e){return f.CardNumber in e}function I(e){return f.CardCodeVerification in e||f.CardNumberVerification in e}var S,C,N,O,E,w=function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function s(e){try{d(i.next(e))}catch(e){r(e)}}function o(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}d((i=i.apply(e,t||[])).next())})};class P{constructor(e,t,n,i){this._scriptLoader=e,this._paymentIntegrationService=t,this._blueSnapDirectHostedForm=n,this._blueSnapDirect3ds=i}initialize(e){return w(this,void 0,void 0,function*(){const{methodId:t,gatewayId:n,creditCard:i}=e;if(!n||!i)throw new m;const a=yield this._paymentIntegrationService.loadPaymentMethod(n,{params:{method:t,bigpayToken:i.bigpayToken}}),{config:{testMode:r,is3dsEnabled:s},clientToken:o}=a.getPaymentMethodOrThrow(t,n);this._blueSnapSdk=yield this._scriptLoader.load(r),this._paymentFieldsToken=o,this._shouldUseHostedFields=v(i.form.fields)||I(i.form.fields)&&!!i.form.fields.cardNumberVerification,this._shouldUseHostedFields&&(this._blueSnapDirectHostedForm.initialize(this._blueSnapSdk,i.form.fields),yield this._blueSnapDirectHostedForm.attach(this._getPaymentFieldsToken(),i,s))})}execute(e){return w(this,void 0,void 0,function*(){if(!e.payment)throw new h(["payment"]);if(!this._blueSnapSdk)throw new h(["payment"]);const{paymentData:t}=e.payment,{shouldSaveInstrument:n,shouldSetAsDefaultInstrument:i}=y(t)?t:{shouldSaveInstrument:!1,shouldSetAsDefaultInstrument:!1},a=this._getPaymentFieldsToken();let r;const{is3dsEnabled:s}=this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e.payment.methodId,e.payment.gatewayId).config,o=this._shouldUseHostedFields?yield this._blueSnapDirectHostedForm.validate().submit(s?this._getBlueSnapDirectThreeDSecureData():void 0,!(y(t)&&b(t))):void 0;if(yield this._paymentIntegrationService.submitOrder(),y(t)&&b(t)&&this._paymentFieldsToken&&t.instrumentId){if(s){this._blueSnapDirect3ds.initialize(this._blueSnapSdk);const{last4:e,brand:n}=this._paymentIntegrationService.getState().getCardInstrumentOrThrow(t.instrumentId),i=Object.assign({last4Digits:e,ccType:n.toUpperCase()},this._getBlueSnapDirectThreeDSecureData());r=yield this._blueSnapDirect3ds.initialize3ds(this._paymentFieldsToken,i)}yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},e.payment),{paymentData:Object.assign(Object.assign(Object.assign({instrumentId:t.instrumentId},this._shouldUseHostedFields?{nonce:a}:{}),r?{deviceSessionId:r}:{}),{shouldSetAsDefaultInstrument:!!i})}))}else yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},e.payment),{paymentData:{formattedPayload:{credit_card_token:{token:JSON.stringify({pfToken:a,cardHolderName:o&&o.cardHolderName})},vault_payment_instrument:n,set_as_default_stored_instrument:i}}}))})}finalize(){return Promise.reject(new g)}deinitialize(){return this._shouldUseHostedFields&&this._blueSnapDirectHostedForm.detach(),Promise.resolve()}_getBlueSnapDirectThreeDSecureData(){var e;const{getBillingAddress:t,getShippingAddress:n,getCustomer:i,getCheckoutOrThrow:a,getCartOrThrow:r}=this._paymentIntegrationService.getState(),s=t(),o=n(),d=(null===(e=i())||void 0===e?void 0:e.email)||(null==s?void 0:s.email),c=(null==s?void 0:s.phone)||(null==o?void 0:o.phone);return Object.assign(Object.assign(Object.assign(Object.assign({amount:a().outstandingBalance,currency:r().currency.code},d&&{email:d}),c&&{phone:c}),s&&{billingFirstName:s.firstName,billingLastName:s.lastName,billingCountry:s.countryCode,billingCity:s.city,billingAddress:`${s.address1} ${s.address2}`.trim(),billingZip:s.postalCode}),o&&{shippingFirstName:o.firstName,shippingLastName:o.lastName,shippingCountry:o.countryCode,shippingCity:o.city,shippingAddress:`${o.address1} ${o.address2}`.trim(),shippingZip:o.postalCode})}_getPaymentFieldsToken(){return d(this._paymentFieldsToken,()=>new _(u.MissingPaymentToken))}}class D extends s{constructor(e,t){super(t||"Unable to proceed because the payment form contains invalid data."),this.details=e,this.name="PaymentInvalidFormError",this.type="payment_invalid_form"}}!function(e){e.AMEX="american-express",e.CHINA_UNION_PAY="unionpay",e.DINERS="diners-club",e.DISCOVER="discover",e.JCB="jcb",e.MASTERCARD="mastercard",e.UNKNOWN="unknown",e.VISA="visa"}(S||(S={})),function(e){e.ON_BLUR="onBlur",e.ON_SUBMIT="onSubmit"}(C||(C={})),function(e){e.EMPTY="empty",e.INVALID="invalid",e.THREE_DS_NOT_ENABLED="3D Secure is not enabled"}(N||(N={})),function(e){e.CC_NOT_SUPORTED="22013",e.ERROR_403="403",e.ERROR_404="404",e.ERROR_500="500",e.INVALID_OR_EMPTY="10",e.SESSION_EXPIRED="400",e.THREE_DS_AUTH_FAILED="14101",e.THREE_DS_CLIENT_ERROR="14103",e.THREE_DS_MISSING_FIELDS="14102",e.THREE_DS_NOT_ENABLED="14100",e.TOKEN_EXPIRED="14040",e.TOKEN_NOT_ASSOCIATED="14042",e.TOKEN_NOT_FOUND="14041"}(O||(O={})),function(e){e.CardCode="cvv",e.CardExpiry="exp",e.CardName="noc",e.CardNumber="ccn"}(E||(E={}));const M={[E.CardNumber]:f.CardNumber,[E.CardExpiry]:f.CardExpiry,[E.CardName]:f.CardName,[E.CardCode]:f.CardCode},T={empty:{[f.CardNumber]:{fieldType:"cardNumber",message:"Credit card number is required",type:"required"},[f.CardNumberVerification]:{fieldType:"cardNumber",message:"Credit card number is required",type:"required"},[f.CardExpiry]:{fieldType:"cardExpiry",message:"Expiration date is required",type:"required"},[f.CardCode]:{fieldType:"cardCode",message:"CVV is required",type:"required"},[f.CardName]:{fieldType:"cardName",message:"Full name is required",type:"required"}},invalid:{[f.CardNumber]:{fieldType:"cardNumber",message:"Credit card number must be valid",type:"invalid_card_number"},[f.CardNumberVerification]:{fieldType:"cardNumber",message:"Credit card number must be valid",type:"invalid_card_number"},[f.CardExpiry]:{fieldType:"cardExpiry",message:"Expiration date must be a valid future date in MM / YY format",type:"invalid_card_expiry"},[f.CardCode]:{fieldType:"cardCode",message:"CVV must be valid",type:"invalid_card_code"},[f.CardName]:{fieldType:"cardName",message:"Full name is required",type:"required"}}};class j{constructor(e,t){this._nameOnCardInput=e,this._hostedInputValidator=t}initialize(e,t){this._blueSnapSdk=e,t&&(v(t)?this._hostedInputValidator.initialize():I(t)&&t.cardNumberVerification&&this._hostedInputValidator.initializeValidationFields())}attach(e,t,n){var i,a,r,s,o=t.form,{fields:d}=o,c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(o,["fields"]);return void 0===n&&(n=!1),i=this,a=void 0,s=function*(){const t=this._getBlueSnapSdk();if(!v(d)&&!I(d))throw new m("Field options must be of type HostedCardFieldOptionsMap");return this._onValidate=c.onValidate,v(d)&&this._setCustomBlueSnapAttributes(d),I(d)&&this._setCustomStoredCardsBlueSnapAttributes(d),new Promise(i=>{const a=this._getHostedPaymentFieldsOptions(e,d,c,i,n);t.hostedPaymentFieldsCreate(a),v(d)&&this._nameOnCardInput.attach(a,d.cardName.accessibilityLabel,d.cardName.placeholder)})},new((r=void 0)||(r=Promise))(function(e,t){function n(e){try{d(s.next(e))}catch(e){t(e)}}function o(e){try{d(s.throw(e))}catch(e){t(e)}}function d(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r(function(e){e(i)})).then(n,o)}d((s=s.apply(i,a||[])).next())})}validate(){var e;const t=this._hostedInputValidator.validate();if(null===(e=this._onValidate)||void 0===e||e.call(this,t),!t.isValid){const e=Object.entries(t.errors).reduce((e,[t,n])=>Object.assign(Object.assign({},e),{[t]:n.map(({message:e,type:t})=>({message:e,type:t}))}),{});throw new D(e)}return this}submit(e,t=!1){return new Promise((n,i)=>this._getBlueSnapSdk().hostedPaymentFieldsSubmitData(e=>this._isBlueSnapDirectCallbackError(e)?i(new o(e.statusCode===O.THREE_DS_AUTH_FAILED?e.error[0].errorDescription:`Submission failed with status: ${e.statusCode} and errors: ${JSON.stringify(e.error)}`)):n(Object.assign(Object.assign({},e.cardData),t?{cardHolderName:this._nameOnCardInput.getValue()}:{})),e))}detach(){this._nameOnCardInput.detach()}_isBlueSnapDirectCallbackError(e){return"error"in e}_getHostedPaymentFieldsOptions(e,t,{onFocus:n,onBlur:i,onValidate:a,onCardTypeChange:r,onEnter:s,styles:o},d,c){var u;return Object.assign(Object.assign(Object.assign({token:e,onFieldEventHandler:{setupComplete:()=>d(),onFocus:this._usetUiEventCallback(n),onBlur:this._usetUiEventCallback(i),onError:this._handleError(a),onType:(e,t)=>null==r?void 0:r({cardType:S[t]}),onEnter:this._usetUiEventCallback(s),onValid:e=>null==a?void 0:a(this._hostedInputValidator.validate({tagId:e}))}},v(t)&&{ccnPlaceHolder:t.cardNumber.placeholder||"",cvvPlaceHolder:(null===(u=t.cardCode)||void 0===u?void 0:u.placeholder)||"",expPlaceHolder:t.cardExpiry.placeholder||"MM / YY"}),o&&{style:this._mapStyles(o)}),{"3DS":c})}_mapStyles({default:e,error:n,focus:i}){return Object.entries(Object.assign(Object.assign(Object.assign({},e&&{input:e}),n&&{".invalid":n}),i&&{":focus":i})).reduce((e,[n,i])=>Object.assign(Object.assign({},e),{[n]:Object.entries(i).reduce((e,[n,i])=>Object.assign(Object.assign({},e),{[(0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(n)]:i}),{})}),{})}_handleError(e){return(t,n,i,a)=>{if(n===O.INVALID_OR_EMPTY&&t&&function(e){return void 0!==e&&[N.EMPTY,N.INVALID].includes(e)}(i))return null==e?void 0:e(this._hostedInputValidator.validate({tagId:t,errorDescription:i}));throw new o(`An unexpected error has occurred: ${JSON.stringify({tagId:t,errorCode:n,errorDescription:i,eventOrigin:a})}`)}}_usetUiEventCallback(e){return t=>{e&&e({fieldType:M[t]})}}_getBlueSnapSdk(){return d(this._blueSnapSdk,()=>new c(i.PaymentNotInitialized))}_setCustomBlueSnapAttributes(e){const{cardNumber:t,cardExpiry:n,cardCode:i,cardName:a}=e,r=document.getElementById(t.containerId),s=document.getElementById(n.containerId),o=i&&document.getElementById(i.containerId),d=document.getElementById(a.containerId);if(!(r&&s&&o&&d))throw new m("Unable to create hosted payment fields to invalid HTML container elements.");r.dataset.bluesnap=E.CardNumber,s.dataset.bluesnap=E.CardExpiry,o.dataset.bluesnap=E.CardCode,d.dataset.bluesnap=E.CardName}_setCustomStoredCardsBlueSnapAttributes(e){const{cardNumberVerification:t,cardCodeVerification:n}=e,i=t&&document.getElementById(t.containerId),a=n&&document.getElementById(n.containerId);(i||a)&&(i&&(i.dataset.bluesnap=E.CardNumber),a&&(a.dataset.bluesnap=E.CardCode))}}class k{constructor(){this._errors={}}initialize(){this._errors={cardNumber:[T.empty.cardNumber],cardExpiry:[T.empty.cardExpiry],cardCode:[T.empty.cardCode],cardName:[T.empty.cardName]}}initializeValidationFields(){this._errors={cardNumberVerification:[T.empty.cardNumber]}}validate(e){return e&&this._updateErrors(e.tagId,e.errorDescription),{isValid:Object.values(this._errors).every(e=>0===e.length),errors:this._errors}}_updateErrors(e,t){const n=this._errors.cardNumberVerification?f.CardNumberVerification:M[e];this._errors[n]=t?[T[t][n]]:[]}}class A{attach({style:e,onFieldEventHandler:{onFocus:t,onBlur:n,onValid:i,onError:a,onEnter:r}={}},s,o){var d;this._style=e,this._create(),this._getInput().addEventListener("focus",this._handleFocus(t)),this._getInput().addEventListener("blur",this._handleBlur(n,i,a)),this._getInput().addEventListener("enter",this._handleEnter(r)),s&&this._getInput().setAttribute("aria-label",s),o&&(this._getInput().placeholder=o),null===(d=document.querySelector('[data-bluesnap="noc"]'))||void 0===d||d.appendChild(this._getInput())}getValue(){return this._getInput().value}detach(){this._input&&(this._input.remove(),this._input=void 0)}_handleFocus(e){return()=>{var t;this._applyStyles(null===(t=this._style)||void 0===t?void 0:t[":focus"]),null==e||e(E.CardName)}}_handleBlur(e,t,n){return({target:i})=>{var a,r;null==e||e(E.CardName),i instanceof HTMLInputElement&&(/\w{1,200}/.test(i.value)?(this._applyStyles(null===(a=this._style)||void 0===a?void 0:a.input),null==t||t(E.CardName)):(this._applyStyles(null===(r=this._style)||void 0===r?void 0:r[".invalid"]),null==n||n(E.CardName,O.INVALID_OR_EMPTY,N.EMPTY,C.ON_BLUR)))}}_handleEnter(e){return()=>null==e?void 0:e(E.CardName)}_applyStyles(e={}){const t={color:e.color,fontFamily:e["font-family"],fontSize:e["font-size"],fontWeight:e["font-weight"]},n=Object.keys(t);n.every(e=>["color","fontFamily","fontSize","fontWeight"].includes(e))&&n.forEach(e=>{t[e]&&(this._getInput().style[e]=t[e]||"")})}_configureInput(){this._getInput().autocomplete="cc-name",this._getInput().id=E.CardName,this._getInput().inputMode="text",this._getInput().maxLength=200,this._getInput().style.backgroundColor="transparent",this._getInput().style.border="0",this._getInput().style.height="100%",this._getInput().style.margin="0",this._getInput().style.outline="none",this._getInput().style.padding="0",this._getInput().style.width="100%",this._getInput().type="text"}_getInput(){return d(this._input,()=>new c(i.PaymentNotInitialized))}_create(){var e;this._input=document.createElement("input"),this._configureInput(),this._applyStyles(null===(e=this._style)||void 0===e?void 0:e.input)}}class x extends s{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}var z;!function(e){e.PRODUCTION="https://pay.bluesnap.com/web-sdk/5/bluesnap.js",e.SANDBOX="https://sandpay.bluesnap.com/web-sdk/5/bluesnap.js"}(z||(z={}));class B{constructor(e,t=window){this._scriptLoader=e,this._window=t}load(e=!1){return t=this,n=void 0,a=function*(){if(this._window.bluesnap)return this._window.bluesnap;if(yield this._scriptLoader.loadScript(e?z.SANDBOX:z.PRODUCTION),!this._window.bluesnap)throw new x;return this._window.bluesnap},new((i=void 0)||(i=Promise))(function(e,r){function s(e){try{d(a.next(e))}catch(e){r(e)}}function o(e){try{d(a.throw(e))}catch(e){r(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i(function(e){e(n)})).then(s,o)}d((a=a.apply(t,n||[])).next())});// removed by dead control flow
 var t, n, i, a; }}const F=r(t=>new P(new B((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)()),t,new j(new A,new k),new p),[{id:"credit_card",gateway:"bluesnapdirect"}]);class U{constructor(e){this._paymentIntegrationService=e}execute(e){return t=this,n=void 0,a=function*(){const t=this._formatePaymentPayload(e);yield this._paymentIntegrationService.submitOrder();try{yield this._paymentIntegrationService.submitPayment(t)}catch(e){if(this._isBlueSnapDirectRedirectResponse(e)){const t=e.body.provider_data&&JSON.parse(e.body.provider_data);let n=e.body.additional_action_required.data.redirect_url;if(function(e){if("object"!=typeof e||null===e)return!1;const t=e;return!!t.merchantid&&"string"==typeof t.merchantid}(t)){const e=new URLSearchParams(t).toString();n=`${n}&${e}`}return new Promise(()=>window.location.replace(n))}return Promise.reject(e)}},new((i=void 0)||(i=Promise))(function(e,r){function s(e){try{d(a.next(e))}catch(e){r(e)}}function o(e){try{d(a.throw(e))}catch(e){r(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i(function(e){e(n)})).then(s,o)}d((a=a.apply(t,n||[])).next())});// removed by dead control flow
 var t, n, i, a; }initialize(){return Promise.resolve()}finalize(){return Promise.reject(new g)}deinitialize(){return Promise.resolve()}_formatePaymentPayload({payment:e}){if(!e)throw new h(["payment"]);return e.paymentData&&b(e.paymentData)&&y(e.paymentData)?Object.assign(Object.assign({},e),{paymentData:{instrumentId:e.paymentData.instrumentId,shouldSetAsDefaultInstrument:!!e.paymentData.shouldSetAsDefaultInstrument}}):(t=e.paymentData,Boolean("object"==typeof t&&null!==t&&"accountNumber"in t&&"accountType"in t&&"shopperPermission"in t&&"routingNumber"in t)?Object.assign(Object.assign({},e),{paymentData:{formattedPayload:{ecp:Object.assign({account_number:e.paymentData.accountNumber,account_type:e.paymentData.accountType,shopper_permission:e.paymentData.shopperPermission,routing_number:e.paymentData.routingNumber},e.paymentData.companyName?{company_name:e.paymentData.companyName}:{}),vault_payment_instrument:e.paymentData.shouldSaveInstrument,set_as_default_stored_instrument:e.paymentData.shouldSetAsDefaultInstrument}}}):(n=e.paymentData,Boolean("object"==typeof n&&null!==n&&"iban"in n&&"firstName"in n&&"lastName"in n&&"shopperPermission"in n)?Object.assign(Object.assign({},e),{paymentData:{formattedPayload:{sepa_direct_debit:{iban:e.paymentData.iban,first_name:e.paymentData.firstName,last_name:e.paymentData.lastName,shopper_permission:e.paymentData.shopperPermission},vault_payment_instrument:e.paymentData.shouldSaveInstrument,set_as_default_stored_instrument:e.paymentData.shouldSetAsDefaultInstrument}}}):function(e){return Boolean("object"==typeof e&&null!==e&&"bic"in e)}(e.paymentData)?Object.assign(Object.assign({},e),{paymentData:{formattedPayload:{ideal:{bic:e.paymentData.bic}}}}):function(e){return Boolean("object"==typeof e&&null!==e&&"iban"in e&&!("firstName"in e)&&!("lastName"in e)&&!("shopperPermission"in e))}(e.paymentData)?Object.assign(Object.assign({},e),{paymentData:{formattedPayload:{pay_by_bank:{iban:e.paymentData.iban}}}}):{methodId:e.methodId}));// removed by dead control flow
 var t, n; }_isBlueSnapDirectRedirectResponse(e){var t;if("object"!=typeof e||null===e)return!1;const n=e;if(!n.body)return!1;const i=n.body;return"additional_action_required"===i.status&&!!(null===(t=i.additional_action_required)||void 0===t?void 0:t.data.redirect_url)}}const V=r(e=>new U(e),[{gateway:"bluesnapdirect"}]);class R{constructor(e){const t=new Promise((e,t)=>{this.cancel=t});this.promise=Promise.race([e,t])}}class L extends s{constructor(e){super(e||"Payment process was cancelled."),this.name="PaymentMethodCancelledError",this.type="payment_cancelled"}}var H;!function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(H||(H={}));const q=H;var Y=function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function s(e){try{d(i.next(e))}catch(e){r(e)}}function o(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}d((i=i.apply(e,t||[])).next())})};class ${constructor(e){this._paymentIntegrationService=e}execute(e,t){return Y(this,void 0,void 0,function*(){const{payment:a}=e;if(!a)throw new h(["payment"]);if(!this._initializeOptions)throw new c(i.PaymentNotInitialized);const{onLoad:r,style:s}=this._initializeOptions,o=this._createIframe("bluesnapv2_hosted_payment_page",s),d=new R(new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop));r(o,()=>d.cancel(new L)),yield this._paymentIntegrationService.submitOrder(e,t),yield this._paymentIntegrationService.initializeOffsitePayment({methodId:a.methodId,gatewayId:a.gatewayId,shouldSaveInstrument:!1,target:o.name,promise:d.promise})})}finalize(e){return Y(this,void 0,void 0,function*(){const t=this._paymentIntegrationService.getState(),n=t.getOrder(),i=t.getPaymentStatus();if(!n||i!==q.ACKNOWLEDGE&&i!==q.FINALIZE)return Promise.reject(new g);yield this._paymentIntegrationService.finalizeOrder(e)})}initialize(e){return Y(this,void 0,void 0,function*(){this._initializeOptions=e&&e.bluesnapv2,yield Promise.resolve()})}deinitialize(){return Promise.resolve()}_createIframe(e,t){const n=document.createElement("iframe");if(n.setAttribute("sandbox","allow-top-navigation allow-scripts allow-forms allow-same-origin"),n.name=e,t){const{border:e,height:i,width:a}=t;n.style.border=null!=e?e:"",n.style.height=null!=i?i:"",n.style.width=null!=a?a:""}return n}}const K=r(e=>new $(e),[{gateway:"bluesnapv2"}]);


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/cba-mpgs.js":
/*!************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/cba-mpgs.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCBAMPGSPaymentStrategy: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var r;class a extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class o extends a{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class c extends a{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class d extends o{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(r||(r={}));class u extends a{constructor(e){super(function(e){switch(e){case r.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case r.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case r.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case r.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var l,h=function(e,t,i,n){return new(i||(i=Promise))(function(s,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function o(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,o)}c((n=n.apply(e,t||[])).next())})},m=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i};class p{constructor(e){this._paymentIntegrationService=e}execute(e,t){var i,n;return this._isHostedPaymentFormEnabled(null===(i=e.payment)||void 0===i?void 0:i.methodId,null===(n=e.payment)||void 0===n?void 0:n.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,i=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:n=""}={}}=i.getStoreConfigOrThrow();if(!t)throw new o;const s=this._paymentIntegrationService.createHostedForm(n,t);return s.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=s,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new c)}_executeWithoutHostedForm(e,t){return h(this,void 0,void 0,function*(){const{payment:i}=e,n=m(e,["payment"]),s=i&&i.paymentData;if(!i||!s)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(n,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},i),{paymentData:s}))})}_executeWithHostedForm(e,t){return h(this,void 0,void 0,function*(){const{payment:i}=e,n=m(e,["payment"]),s=this._hostedForm;if(!s)throw new u(r.PaymentNotInitialized);if(!i||!i.methodId)throw new d(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(n,t),yield s.validate().then(()=>s.submit(i))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(e){return!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(e&&e.creditCard&&e.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(l||(l={}));class y extends a{constructor(e){super(function(e){switch(e){case l.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case l.MissingCart:return"Unable to proceed because cart data is unavailable.";case l.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case l.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case l.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case l.MissingCheckoutConfig:case l.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case l.MissingOrder:return"Unable to proceed because order data is unavailable.";case l.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case l.MissingPayment:return"Unable to proceed because payment data is unavailable.";case l.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case l.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case l.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class g extends a{constructor(e){super(e||"Unable to proceed because the client library of a payment method has thrown an unexpected error."),this.name="PaymentMethodFailedError",this.type="payment_method_client_invalid"}}const b={body:{},headers:{},status:0};class f extends a{constructor(e,{message:t,errors:i}={}){const{body:n,headers:s,status:r}=e||b;super(t||"An unexpected error has occurred."),this.name="RequestError",this.type="request",this.body=n,this.headers=s,this.status=r,this.errors=i||[]}}var v;!function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(v||(v={}));const I=v;var w=function(e,t,i,n){return new(i||(i=Promise))(function(s,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function o(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,o)}c((n=n.apply(e,t||[])).next())})};class P extends p{constructor(e,t){super(e),this.paymentIntegrationService=e,this.cbaMGPSScriptLoader=t,this.sessionId=""}initialize(e){const t=Object.create(null,{initialize:{get:()=>super.initialize}});return w(this,void 0,void 0,function*(){yield t.initialize.call(this,e);const{methodId:i}=e;yield this.paymentIntegrationService.loadPaymentMethod(i);const n=this.paymentIntegrationService.getState(),s=n.getPaymentMethodOrThrow(i);if(!function(e){return"object"==typeof e&&null!==e&&"initializationData"in e&&"object"==typeof e.initializationData&&null!==e.initializationData&&"merchantId"in e.initializationData&&"string"==typeof e.initializationData.merchantId&&("boolean"==typeof e.initializationData.isTestModeFlagEnabled||void 0===e.initializationData.isTestModeFlagEnabled)}(s))throw new y(l.MissingPaymentMethod);const{clientToken:a,initializationData:{isTestModeFlagEnabled:o=!1,merchantId:c},config:{is3dsEnabled:d}}=s;if(d){if(this.threeDSjs=yield this.cbaMGPSScriptLoader.load(o),!this.threeDSjs)throw new u(r.PaymentNotInitialized);if(!a||!c)throw new y(l.MissingPaymentMethod);if(this.sessionId=a,this.locale=n.getLocale(),!this.locale)throw new y(l.MissingCart);yield this.threeDSjs.configure({merchantId:c,sessionId:this.sessionId,callback:()=>{var e;if(null===(e=this.threeDSjs)||void 0===e?void 0:e.isConfigured())return this.paymentIntegrationService.getState();throw new g("Failed to configure 3DS API.")},configuration:{userLanguage:this.locale,wsVersion:62}})}return Promise.resolve()})}execute(e,t){const i=Object.create(null,{execute:{get:()=>super.execute}});return w(this,void 0,void 0,function*(){const{payment:s}=e,r=s&&s.paymentData;if(!s||!r)throw new d(["payment.paymentData"]);const a=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(s.methodId),{is3dsEnabled:o}=a.config;if(o){const t=Object.assign(Object.assign({},r),{threeDSecure:{token:this.sessionId}});e.payment&&(e.payment.paymentData=t)}return i.execute.call(this,e,t).catch(e=>{if(!o||!(e=>"object"==typeof e&&null!==e&&"body"in e)(e)||!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(e.body.errors,{code:"three_d_secure_required"}))return Promise.reject(e);const t=this.paymentIntegrationService.getState(),i=t.getOrder(),{storeProfile:{storeId:s}}=t.getStoreConfigOrThrow();if(!i||!this.sessionId)throw new y(l.MissingCheckout);const r=`${s}_${i.orderId}`;if("object"!=typeof(a=e.body)||null===a||!("three_ds_result"in a)||"object"!=typeof a.three_ds_result||null===a.three_ds_result||!("token"in a.three_ds_result)||"string"!=typeof a.three_ds_result.token)throw new f;var a;const{three_ds_result:{token:c}}=e.body;return c?this.initiateAuthentication(r,c):Promise.reject(e)})})}finalize(e){return w(this,void 0,void 0,function*(){const t=this.paymentIntegrationService.getState();return t.getOrder()&&t.getPaymentStatus()===I.FINALIZE?(yield this.paymentIntegrationService.finalizeOrder(e),Promise.resolve()):Promise.reject(new c)})}deinitialize(){return this.threeDSjs=void 0,this.sessionId="",super.deinitialize()}initiateAuthentication(e,t){return w(this,void 0,void 0,function*(){const i=yield new Promise((i,n)=>{if(!this.threeDSjs)throw new u(r.PaymentNotInitialized);this.threeDSjs.initiateAuthentication(e,t,e=>{const t=e.error;return t?n(new g(t.msg)):this.threeDSjs&&"PROCEED"===e.gatewayRecommendation?i(e.restApiResponse):n(new g)})});if(i.transaction&&"AUTHENTICATION_AVAILABLE"===i.transaction.authenticationStatus)return this.authenticatePayer(e,t);throw new g})}authenticatePayer(e,t,n=1){return w(this,void 0,void 0,function*(){return new Promise((s,a)=>{if(!this.threeDSjs)return a(new u(r.PaymentNotInitialized));this.threeDSjs.authenticatePayer(e,t,s=>w(this,void 0,void 0,function*(){const r=s.error;return r?r.cause&&"SERVER_BUSY"===r.cause&&n<5?(yield new Promise(e=>setTimeout(e,3e3)),this.authenticatePayer(e,t,++n)):a(new g):new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)}),{fullScreenRedirect:!0})})})}}class M extends a{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class S{constructor(e,t=window){this._scriptLoader=e,this._window=t}load(e){return t=this,i=void 0,s=function*(){if(yield this._scriptLoader.loadScript(`//${e?"test":"ap"}-gateway.mastercard.com/static/threeDS/1.3.0/three-ds.min.js`),!this._window.ThreeDS)throw new M;return this._window.ThreeDS},new((n=void 0)||(n=Promise))(function(e,r){function a(e){try{c(s.next(e))}catch(e){r(e)}}function o(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n(function(e){e(i)})).then(a,o)}c((s=s.apply(t,i||[])).next())});// removed by dead control flow
 var t, i, n, s; }}const _=(z=t=>new P(t,new S((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())),O=[{id:"cba_mpgs"}],Object.assign(z,{resolveIds:O}));var z,O;


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/checkoutcom-custom.js":
/*!**********************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/checkoutcom-custom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCheckoutComAPMPaymentStrategy: () => (/* binding */ C),
/* harmony export */   createCheckoutComCreditCardPaymentStrategy: () => (/* binding */ j),
/* harmony export */   createCheckoutComFawryPaymentStrategy: () => (/* binding */ w),
/* harmony export */   createCheckoutComIdealPaymentStrategy: () => (/* binding */ E),
/* harmony export */   createCheckoutComSepaPaymentStrategy: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
var o,i={};function a(e,t){return Object.assign(e,{resolveIds:t})}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);class c extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class s extends c{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class d extends s{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class u extends c{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(o||(o={}));class m extends c{constructor(e){super(function(e){switch(e){case o.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case o.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case o.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case o.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var y,l=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};class h{constructor(e){this._paymentIntegrationService=e}execute(e,t){var n,r;return this._isHostedPaymentFormEnabled(null===(n=e.payment)||void 0===n?void 0:n.methodId,null===(r=e.payment)||void 0===r?void 0:r.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,n=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:r=""}={}}=n.getStoreConfigOrThrow();if(!t)throw new s;const o=this._paymentIntegrationService.createHostedForm(r,t);return o.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=o,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new u)}_executeWithoutHostedForm(e,t){return l(this,void 0,void 0,function*(){const{payment:n}=e,r=p(e,["payment"]),o=n&&n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(r,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:o}))})}_executeWithHostedForm(e,t){return l(this,void 0,void 0,function*(){const{payment:n}=e,r=p(e,["payment"]),i=this._hostedForm;if(!i)throw new m(o.PaymentNotInitialized);if(!n||!n.methodId)throw new d(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(r,t),yield i.validate().then(()=>i.submit(n))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(t){return!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(t&&t.creditCard&&t.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)}}!function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(y||(y={}));const f=y,b=e=>"object"==typeof e&&null!==e&&"body"in e;var v;!function(e){e.OffsiteRedirect="offsite_redirect"}(v||(v={}));class O extends h{constructor(e){super(e),this.paymentIntegrationService=e}finalize(e){const t=this.paymentIntegrationService.getState();return t.getOrder()&&t.getPaymentStatus()===f.FINALIZE&&this.paymentIntegrationService.finalizeOrder(e),Promise.reject(new u)}_executeWithHostedForm(e,t){return n=this,r=void 0,a=function*(){const{payment:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["payment"]),i=this._hostedForm;if(!i)throw new m(o.PaymentNotInitialized);if(!n||!n.methodId)throw new d(["payment.methodId"]);try{yield i.validate(),yield this.paymentIntegrationService.submitOrder(r,t),yield i.submit(n)}catch(e){return this._processResponse(e)}this.paymentIntegrationService.loadCurrentOrder()},new((i=void 0)||(i=Promise))(function(e,t){function o(e){try{s(a.next(e))}catch(e){t(e)}}function c(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i(function(e){e(n)})).then(o,c)}s((a=a.apply(n,r||[])).next())});// removed by dead control flow
 var n, r, i, a; }_processResponse(e){if(!b(e))return Promise.reject(e);const t=e.body.additional_action_required;return t&&t.type===v.OffsiteRedirect?this._performRedirect(t):Promise.reject(e)}_performRedirect(e){return new Promise(()=>{window.location.replace(e.data.redirect_url)})}}class g extends O{_executeWithoutHostedForm(e,t){return n=this,r=void 0,i=function*(){const{payment:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["payment"]),o=n&&n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(r,t);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:Object.assign(Object.assign({},o),{formattedPayload:this._createFormattedPayload(n.methodId,o)})}))}catch(e){return this._processResponse(e)}},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{s(i.next(e))}catch(e){t(e)}}function c(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,c)}s((i=i.apply(n,r||[])).next())});// removed by dead control flow
 var n, r, o, i; }_createFormattedPayload(e,t){if("fawry"===e&&"customerMobile"in t&&"customerEmail"in t){const e=t;return{customerMobile:e.customerMobile,customerEmail:e.customerEmail}}}}const w=a(e=>new g(e),[{gateway:"checkoutcom",id:"fawry"}]);function I(e){return b(e)&&(0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(e.body.errors,{code:"three_d_secure_required"})}var P=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};class S extends h{constructor(e,t){super(e),this.paymentIntegrationService=e,this.formPoster=t}finalize(e){const t=this.paymentIntegrationService.getState();return t.getOrder()&&t.getPaymentStatus()===f.FINALIZE&&this.paymentIntegrationService.finalizeOrder(e),Promise.reject(new u)}_executeWithoutHostedForm(e,t){return P(this,void 0,void 0,function*(){const{payment:n}=e,r=_(e,["payment"]),o=n&&n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this.paymentIntegrationService.submitOrder(r,t);try{yield this.paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:o}))}catch(e){return I(e)?this._handleThreeDSecure(e):Promise.reject(e)}})}_executeWithHostedForm(e,t){return P(this,void 0,void 0,function*(){const{payment:n}=e,r=_(e,["payment"]),i=this._hostedForm;if(!i)throw new m(o.PaymentNotInitialized);if(!n||!n.methodId)throw new d(["payment.methodId"]);try{yield i.validate(),yield this.paymentIntegrationService.submitOrder(r,t),yield i.submit(n)}catch(e){return I(e)?this._handleThreeDSecure(e):Promise.reject(e)}this.paymentIntegrationService.loadCurrentOrder()})}_handleThreeDSecure(e){const{acs_url:t,payer_auth_request:n,callback_url:r,merchant_data:o}=e.body.three_ds_result;return new Promise(()=>this.formPoster.postForm(t,{PaReq:n||null,TermUrl:r||null,MD:o||null}))}}const j=a(e=>new S(e,(0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_1__.createFormPoster)()),[{gateway:"checkoutcom",id:"credit_card"},{gateway:"checkoutcom",id:"card"}]);class x extends O{_executeWithoutHostedForm(e,t){return n=this,r=void 0,i=function*(){const{payment:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["payment"]),o=null==n?void 0:n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(r,t);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:Object.assign(Object.assign({},o),{formattedPayload:this._createFormattedPayload(n.methodId,o)})}))}catch(e){return this._processResponse(e)}},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{s(i.next(e))}catch(e){t(e)}}function c(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,c)}s((i=i.apply(n,r||[])).next())});// removed by dead control flow
 var n, r, o, i; }_createFormattedPayload(e,t){const n={iban:"",bic:""},{iban:r,bic:o}="iban"in t&&"bic"in t?t:n;return"sepa"===e&&document&&(n.iban=r,n.bic=o),n}}const F=a(e=>new x(e),[{gateway:"checkoutcom",id:"sepa"}]);class z extends O{_executeWithoutHostedForm(e,t){return n=this,r=void 0,i=function*(){const{payment:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["payment"]),o=null==n?void 0:n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(r,t);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:Object.assign(Object.assign({},o),{formattedPayload:this._createFormattedPayload(n.methodId,o)})}))}catch(e){return this._processResponse(e)}},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{s(i.next(e))}catch(e){t(e)}}function c(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,c)}s((i=i.apply(n,r||[])).next())});// removed by dead control flow
 var n, r, o, i; }_createFormattedPayload(e,t){if("ideal"===e&&"bic"in t)return{bic:t.bic}}}const E=a(e=>new z(e),[{gateway:"checkoutcom",id:"ideal"}]);const D=["boleto","oxxo","qpay","ideal"];class N extends O{_executeWithoutHostedForm(e,t){return n=this,r=void 0,i=function*(){const{payment:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["payment"]),o=null==n?void 0:n.paymentData;if(!n||!o)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(r,t);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:Object.assign(Object.assign({},o),{formattedPayload:this._createFormattedPayload(n.methodId,o)})}))}catch(e){return this._processResponse(e)}},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{s(i.next(e))}catch(e){t(e)}}function c(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,c)}s((i=i.apply(n,r||[])).next())});// removed by dead control flow
 var n, r, o, i; }_createFormattedPayload(e,t){const n={ccDocument:""},r="ccDocument"in t?t.ccDocument:"";return-1!==D.indexOf(e)&&r&&(n.ccDocument=r),n}}const C=a(e=>new N(e),[{gateway:"checkoutcom"}]);


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/clearpay.js":
/*!************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/clearpay.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClearpayPaymentStrategy: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var i;class n extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class a extends n{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class r extends a{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(i||(i={}));class s extends n{constructor(e){super(function(e){switch(e){case i.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case i.MissingCart:return"Unable to proceed because cart data is unavailable.";case i.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case i.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case i.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case i.MissingCheckoutConfig:case i.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case i.MissingOrder:return"Unable to proceed because order data is unavailable.";case i.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case i.MissingPayment:return"Unable to proceed because payment data is unavailable.";case i.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case i.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case i.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class o extends n{constructor(e){super(e||"The current order could not be finalized successfully"),this.name="OrderFinalizationNotCompletedError",this.type="order_finalization_not_completed"}}var c;!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(c||(c={}));class d extends n{constructor(e){super(function(e){switch(e){case c.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case c.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case c.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case c.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}const u={body:{},headers:{},status:0};class l extends n{constructor(e,{message:t,errors:i}={}){const{body:n,headers:a,status:r}=e||u;super(t||"An unexpected error has occurred."),this.name="RequestError",this.type="request",this.body=n,this.headers=a,this.status=r,this.errors=i||[]}}var p=function(e,t,i,n){return new(i||(i=Promise))(function(a,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function o(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(s,o)}c((n=n.apply(e,t||[])).next())})};class h{constructor(e,t){this._paymentIntegrationService=e,this._clearpayScriptLoader=t}initialize(e){return p(this,void 0,void 0,function*(){const{getPaymentMethodOrThrow:t}=this._paymentIntegrationService.getState(),i=t(e.methodId,e.gatewayId),n=this._paymentIntegrationService.getState().getStoreConfigOrThrow().checkoutSettings.features;this._clearpaySdk=yield this._clearpayScriptLoader.load(i,n)})}deinitialize(){return this._clearpaySdk=void 0,Promise.resolve()}execute(e,i){return p(this,void 0,void 0,function*(){const{gatewayId:n,methodId:s}=e.payment||{};if(!n||!s)throw new r(["payment.gatewayId","payment.methodId"]);const o=this._paymentIntegrationService.getState(),{isStoreCreditApplied:c}=o.getCheckoutOrThrow();yield this._paymentIntegrationService.applyStoreCredit(c),yield this._paymentIntegrationService.validateCheckout(o.getCheckout(),i);const{countryCode:d}=o.getBillingAddressOrThrow();if(!this._isCountrySupported(d))throw new a("Unable to proceed because billing country is not supported.");return yield this._loadPaymentMethod(n,s,i),yield this._redirectToClearpay(d,this._paymentIntegrationService.getState().getPaymentMethod(s,n)),new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)})}finalize(e){var t,n,a;return p(this,void 0,void 0,function*(){const r=this._paymentIntegrationService.getState(),c=r.getPaymentId(),d=r.getContextConfig();if(!c)throw new s(i.MissingCheckout);if(!d||!d.payment.token)throw new s(i.MissingCheckoutConfig);const u={methodId:c.providerId,paymentData:{nonce:d.payment.token}};yield this._paymentIntegrationService.submitOrder({},e);try{yield this._paymentIntegrationService.submitPayment(u)}catch(e){if(yield this._paymentIntegrationService.forgetCheckout(c.providerId),yield this._paymentIntegrationService.loadPaymentMethods(),(e=>"object"==typeof e&&null!==e&&"body"in e)(e))throw new o(null===(a=null===(n=null===(t=e.body)||void 0===t?void 0:t.errors)||void 0===n?void 0:n[0])||void 0===a?void 0:a.message)}})}_redirectToClearpay(e,t){return p(this,void 0,void 0,function*(){if(!this._clearpaySdk||!t||!t.clientToken)throw new d(c.PaymentNotInitialized);return this._clearpaySdk.initialize({countryCode:e}),this._clearpaySdk.redirect({token:t.clientToken}),Promise.resolve()})}_isCountrySupported(e){return"GB"===e}_loadPaymentMethod(e,t,i){var n;return p(this,void 0,void 0,function*(){try{return yield this._paymentIntegrationService.loadPaymentMethod(e,Object.assign(Object.assign({},i),{params:Object.assign(Object.assign({},null==i?void 0:i.params),{method:t})}))}catch(e){if(e instanceof l&&422===(null===(n=e.body)||void 0===n?void 0:n.status))throw new a("Clearpay can't process your payment for this order, please try another payment method");throw e}})}}class y extends n{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class g{constructor(e,t=window){this._scriptLoader=e,this._window=t}load(e,t={}){return i=this,n=void 0,r=function*(){if(yield this._scriptLoader.loadScript(this._getScriptUrl(e.config.testMode,t)),!this._window.AfterPay)throw new y;return this._window.AfterPay},new((a=void 0)||(a=Promise))(function(e,t){function s(e){try{c(r.next(e))}catch(e){t(e)}}function o(e){try{c(r.throw(e))}catch(e){t(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a(function(e){e(i)})).then(s,o)}c((r=r.apply(i,n||[])).next())});// removed by dead control flow
 var i, n, a, r; }_getScriptUrl(e,t={}){const i=function(e,t,i=!0){var n;return null!==(n=e["PI-4555.clearpay_add_https_to_prod_script"])&&void 0!==n?n:i}(t,0,!1);return e?i?"https://portal.sandbox.clearpay.co.uk/afterpay-async.js":"//portal.sandbox.clearpay.co.uk/afterpay-async.js":i?"https://portal.clearpay.co.uk/afterpay-async.js":"//portal.clearpay.co.uk/afterpay-async.js"}}const m=(b=t=>new h(t,new g((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())),v=[{gateway:"clearpay"},{id:"clearpay"}],Object.assign(b,{resolveIds:v}));var b,v;


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/offsite.js":
/*!***********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/offsite.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOffsitePaymentStrategy: () => (/* binding */ c)
/* harmony export */ });
var e,t={};function r(e){return!("object"!=typeof e||null===e||void 0!==e.shouldSaveInstrument&&"boolean"!=typeof e.shouldSaveInstrument||void 0!==e.shouldSetAsDefaultInstrument&&"boolean"!=typeof e.shouldSetAsDefaultInstrument)}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);class n extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class o extends n{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class a extends o{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(e||(e={}));const i=e;class s extends n{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}var u=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,s)}u((n=n.apply(e,t||[])).next())})};class d{constructor(e){this._paymentIntegrationService=e}execute(e,t){return u(this,void 0,void 0,function*(){const{payment:n}=e,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["payment"]),i=this._shouldSubmitFullPayload(n)?e:o,s=n&&n.paymentData,u=s&&Boolean(s.instrumentId)&&s.instrumentId||void 0,d=s&&r(s)&&s.shouldSaveInstrument||void 0,c=s&&r(s)&&s.shouldSetAsDefaultInstrument||void 0;if(!n)throw new a(["payment"]);const{methodId:l,gatewayId:y}=n;yield this._paymentIntegrationService.submitOrder(i,t),yield this._paymentIntegrationService.initializeOffsitePayment({methodId:l,gatewayId:y,instrumentId:u,shouldSaveInstrument:d,shouldSetAsDefaultInstrument:c})})}finalize(e){return u(this,void 0,void 0,function*(){const t=this._paymentIntegrationService.getState(),r=t.getOrder(),n=t.getPaymentStatus();if(!r||n!==i.ACKNOWLEDGE&&n!==i.FINALIZE)return Promise.reject(new s);yield this._paymentIntegrationService.finalizeOrder(e)})}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}_shouldSubmitFullPayload(e){return!!e&&("adyen"===e.gatewayId||"barclaycard"===e.gatewayId)}}const c=(l=e=>new d(e),y=[{type:"PAYMENT_TYPE_HOSTED"}],Object.assign(l,{resolveIds:y}));var l,y;


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/paypal-express.js":
/*!******************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/paypal-express.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPaypalExpressButtonStrategy: () => (/* binding */ C),
/* harmony export */   createPaypalExpressPaymentStrategy: () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
var i,a,s,r,o,c,d,l,u={};function p(e,t){return Object.assign(e,{resolveIds:t})}u.d=(e,t)=>{for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);class h extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(i||(i={}));class y extends h{constructor(e){super(function(e){switch(e){case i.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case i.MissingCart:return"Unable to proceed because cart data is unavailable.";case i.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case i.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case i.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case i.MissingCheckoutConfig:case i.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case i.MissingOrder:return"Unable to proceed because order data is unavailable.";case i.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case i.MissingPayment:return"Unable to proceed because payment data is unavailable.";case i.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case i.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case i.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(a||(a={}));class m extends h{constructor(e){super(function(e){switch(e){case a.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case a.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case a.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case a.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}class g extends h{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}!function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(s||(s={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.RESPONSIVE="responsive"}(r||(r={})),function(e){e.GOLD="gold",e.BLUE="blue",e.SIlVER="silver",e.BLACK="black"}(o||(o={})),function(e){e.CHECKOUT="checkout",e.PAY="pay",e.BUYNOW="buynow",e.PAYPAL="paypal",e.CREDIT="credit"}(c||(c={})),function(e){e.PILL="pill",e.RECT="rect"}(d||(d={})),function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(l||(l={}));var f=function(e,t,n,i){return new(n||(n=Promise))(function(a,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function o(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(r,o)}c((i=i.apply(e,t||[])).next())})};class I{constructor(e,t){this.paymentIntegrationService=e,this.scriptLoader=t,this.useRedirectFlow=!1,this.window=window}initialize(e){return f(this,void 0,void 0,function*(){const t=this.paymentIntegrationService.getState();this.paymentMethod=t.getPaymentMethodOrThrow(e.methodId),this.useRedirectFlow=!0===(e.paypalexpress&&e.paypalexpress.useRedirectFlow);const n=this.paymentMethod.config.merchantId;if(!this.isInContextEnabled()||!n)throw new y(i.MissingPaymentMethod);const a=yield this.scriptLoader.loadPaypalSDK();this.paypalSdk=a,this.paypalSdk.checkout.setup(n,{button:"paypal-button",environment:this.paymentMethod.config.testMode?"sandbox":"production"})})}deinitialize(){return this.isInContextEnabled()&&this.paypalSdk&&(this.paypalSdk.checkout.closeFlow(),this.paypalSdk=void 0),Promise.resolve()}execute(e,n){return f(this,void 0,void 0,function*(){let i,s;const r=this.paypalSdk;if(!this.isAcknowledgedOrFinalized()){if(!this.isInContextEnabled()||this.useRedirectFlow)return i=yield this.paymentIntegrationService.submitOrder(e,n),s=i.getPaymentRedirectUrl(),s&&this.window.top&&(this.window.top.location.href=s),new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop);if(!r)throw new m(a.PaymentNotInitialized);r.checkout.initXO();try{i=yield this.paymentIntegrationService.submitOrder(e,n)}catch(e){return r.checkout.closeFlow(),Promise.reject(e)}return s=i.getPaymentRedirectUrl(),s&&r.checkout.startFlow(s),new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)}yield this.paymentIntegrationService.submitOrder(e,n)})}finalize(e){return f(this,void 0,void 0,function*(){return this.paymentIntegrationService.getState().getOrder()&&this.isAcknowledgedOrFinalized()?(yield this.paymentIntegrationService.finalizeOrder(e),Promise.resolve()):Promise.reject(new g)})}isAcknowledgedOrFinalized(){const e=this.paymentIntegrationService.getState();return e.getPaymentStatus()===l.ACKNOWLEDGE||e.getPaymentStatus()===l.FINALIZE}isInContextEnabled(){return!(!this.paymentMethod||!this.paymentMethod.config.merchantId)}}class b extends h{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class w{constructor(e){this.scriptLoader=e,this.window=window}loadPaypalSDK(e=""){return t=this,n=void 0,a=function*(){const t=Object.assign({async:!0,attributes:{"data-merchant-id":e}},e&&{attributes:{"data-merchant-id":e}});if(yield this.scriptLoader.loadScript("//www.paypalobjects.com/api/checkout.min.js",t),!this.window.paypal)throw new b;return this.window.paypal},new((i=void 0)||(i=Promise))(function(e,s){function r(e){try{c(a.next(e))}catch(e){s(e)}}function o(e){try{c(a.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i(function(e){e(n)})).then(r,o)}c((a=a.apply(t,n||[])).next())});// removed by dead control flow
 var t, n, i, a; }}const P=p(t=>new I(t,new w((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())),[{id:"paypalexpress",type:"PAYMENT_TYPE_HOSTED"},{id:"paypalexpresscredit",type:"PAYMENT_TYPE_HOSTED"}]);class M extends h{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}const v={"X-Checkout-SDK-Version":"1.866.1"};var S=function(e,t,n,i){return new(n||(n=Promise))(function(a,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function o(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(r,o)}c((i=i.apply(e,t||[])).next())})};class E{constructor(e,t,n){this.paymentIntegrationService=e,this.paypalExpressScriptLoader=t,this.formPoster=n}initialize(e){return S(this,void 0,void 0,function*(){const t=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e.methodId);if(!e.paypal)throw new M;if(!t.config.merchantId)throw new y(i.MissingPaymentMethod);const n=yield this.paypalExpressScriptLoader.loadPaypalSDK(t.config.merchantId);this.renderButton(e,n)})}deinitialize(){return Promise.resolve()}renderButton(e,t){const{containerId:n,methodId:a,paypal:s}=e,{allowCredit:r,clientId:o,onPaymentError:c,shouldProcessPayment:d,style:l}=s,u=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e.methodId);if(!u.config.merchantId)throw new y(i.MissingPaymentMethod);const p=u.config.merchantId,h=u.config.testMode?"sandbox":"production",m={[h]:o},g=t.FUNDING.CREDIT||"credit",f=r?[g]:[],I=r?[]:[g];return t.Button.render({env:h,client:m,commit:d,funding:{allowed:f,disallowed:I},style:this.getStyle(l),payment:(e,t)=>this.setupPayment(p,t,c),onAuthorize:(e,t)=>this.tokenizePayment(e,a,t,d)},n)}getStyle(e){const{color:t,fundingicons:n,label:i,layout:a,shape:s,size:o,tagline:c}=e||{};return{color:t,fundingicons:n,label:i,layout:a,shape:s||d.RECT,size:"small"===o?r.RESPONSIVE:o,tagline:c}}setupPayment(e,t,n){return S(this,void 0,void 0,function*(){if(!t)throw new m(a.CheckoutButtonNotInitialized);try{const n=yield this.paymentIntegrationService.loadDefaultCheckout(),{id:i}=n.getCartOrThrow(),a=n.getHost()||"";return(yield t.request.post(`${a}/api/storefront/payment/paypalexpress`,{merchantId:e,cartId:i},{headers:Object.assign({"X-API-INTERNAL":"This API endpoint is for internal use only and may change in the future"},v)})).id}catch(e){throw n&&e instanceof h&&n(e),e}})}tokenizePayment(e,t,n,s){return S(this,void 0,void 0,function*(){if(!n)throw new m(a.CheckoutButtonNotInitialized);if(!e.paymentID||!e.payerID)throw new y(i.MissingPayment);const r=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(t),o=yield n.payment.get(e.paymentID);return this.formPoster.postForm("/checkout.php",{payment_type:"paypal",provider:r.id,action:s?"process_payment":"set_external_checkout",paymentId:e.paymentID,payerId:e.payerID,payerInfo:JSON.stringify(o.payer.payer_info)})})}}const C=p(t=>new E(t,new w((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)()),(0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_2__.createFormPoster)()),[{id:"paypalexpress"}]);


/***/ }),

/***/ "../checkout-sdk-js/dist/esm/integrations/sagepay.js":
/*!***********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/sagepay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSagePayPaymentStrategy: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var r;class s extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class a extends s{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class o extends s{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class d extends a{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(r||(r={}));class c extends s{constructor(e){super(function(e){switch(e){case r.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case r.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case r.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case r.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}var u,l=function(e,t,i,n){return new(i||(i=Promise))(function(r,s){function a(e){try{d(n.next(e))}catch(e){s(e)}}function o(e){try{d(n.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,o)}d((n=n.apply(e,t||[])).next())})},h=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};class m{constructor(e){this._paymentIntegrationService=e}execute(e,t){var i,n;return this._isHostedPaymentFormEnabled(null===(i=e.payment)||void 0===i?void 0:i.methodId,null===(n=e.payment)||void 0===n?void 0:n.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,i=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:n=""}={}}=i.getStoreConfigOrThrow();if(!t)throw new a;const r=this._paymentIntegrationService.createHostedForm(n,t);return r.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=r,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new o)}_executeWithoutHostedForm(e,t){return l(this,void 0,void 0,function*(){const{payment:i}=e,n=h(e,["payment"]),r=i&&i.paymentData;if(!i||!r)throw new d(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(n,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},i),{paymentData:r}))})}_executeWithHostedForm(e,t){return l(this,void 0,void 0,function*(){const{payment:i}=e,n=h(e,["payment"]),s=this._hostedForm;if(!s)throw new c(r.PaymentNotInitialized);if(!i||!i.methodId)throw new d(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(n,t),yield s.validate().then(()=>s.submit(i))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(e){return!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(e&&e.creditCard&&e.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(u||(u={}));class g extends s{constructor(e){super(function(e){switch(e){case u.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case u.MissingCart:return"Unable to proceed because cart data is unavailable.";case u.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case u.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case u.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case u.MissingCheckoutConfig:case u.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case u.MissingOrder:return"Unable to proceed because order data is unavailable.";case u.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case u.MissingPayment:return"Unable to proceed because payment data is unavailable.";case u.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case u.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case u.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}function p(){const{navigator:e}=window;let t;return t=e.language?e.language:e.userLanguage,{color_depth:window.screen.colorDepth||24,java_enabled:"function"==typeof e.javaEnabled&&e.javaEnabled(),language:t,screen_height:window.screen.height,screen_width:window.screen.width,time_zone_offset:(new Date).getTimezoneOffset().toString()}}var y;!function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(y||(y={}));const b=y;class f extends m{constructor(e,t){super(e),this.paymentIntegrationService=e,this._formPoster=t}execute(e,t){const{payment:n}=e;if(!n)throw new c(r.PaymentNotInitialized);const{paymentData:s}=n;if(!s)throw new g(u.MissingPayment);if(this._isThreeDSTwoExperimentOn()){const t=Object.assign(Object.assign({},s),{browser_info:p()});e.payment&&(e.payment.paymentData=t)}return super.execute(e,t).catch(e=>(e=>"object"==typeof e&&null!==e&&"body"in e)(e)&&(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(e.body.errors,{code:"three_d_secure_required"})?new Promise(()=>{let t;t=this._isThreeDSTwoExperimentOn()&&!e.body.three_ds_result.merchant_data?{creq:e.body.three_ds_result.payer_auth_request}:{PaReq:e.body.three_ds_result.payer_auth_request,TermUrl:e.body.three_ds_result.callback_url,MD:e.body.three_ds_result.merchant_data},this._formPoster.postForm(e.body.three_ds_result.acs_url,t,void 0,"_top")}):Promise.reject(e))}finalize(e){const t=this.paymentIntegrationService.getState();return t.getOrder()&&t.getPaymentStatus()===b.FINALIZE&&this.paymentIntegrationService.finalizeOrder(e),super.finalize()}_isThreeDSTwoExperimentOn(){return!0===this.paymentIntegrationService.getState().getStoreConfigOrThrow().checkoutSettings.features["INT-4994.Opayo_3DS2"]}}const _=(v=t=>new f(t,(0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__.createFormPoster)()),I=[{id:"sagepay"}],Object.assign(v,{resolveIds:I}));var v,I;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/ui/modal/ModalLink.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/ui/modal/ModalLink.scss ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".modal--withText {\n  padding-bottom: 0.75rem;\n  padding-top: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/ui/tooltip/Tooltip.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/ui/tooltip/Tooltip.scss ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".tooltip--basic {\n  display: block;\n  left: auto;\n  position: relative;\n  visibility: inherit;\n  width: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./packages/bigcommerce-payments-utils/src/BigCommercePaymentsPayLaterBanner.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/bigcommerce-payments-utils/src/BigCommercePaymentsPayLaterBanner.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bigcommerce-payments */ "../checkout-sdk-js/dist/esm/integrations/bigcommerce-payments.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");



const BigCommercePaymentsPayLaterBanner = ({ methodId, containerId, onUnhandledError }) => {
    const { checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            void checkoutService.initializePayment({
                methodId,
                integrations: [
                    _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_0__.createBigCommercePaymentsPayLaterPaymentStrategy,
                    _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_0__.createBigCommercePaymentsPaymentStrategy,
                ],
                [methodId]: {
                    bannerContainerId: containerId,
                },
            });
            void checkoutService.deinitializePayment({
                methodId,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BigCommercePaymentsPayLaterBanner);


/***/ }),

/***/ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx":
/*!******************************************************************!*\
  !*** ./packages/contexts/src/paymentForm/PaymentFormContext.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentFormContext: () => (/* binding */ PaymentFormContext),
/* harmony export */   usePaymentFormContext: () => (/* binding */ usePaymentFormContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PaymentFormContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
function usePaymentFormContext() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaymentFormContext);
    if (!context) {
        throw new Error('usePaymentFormContext must be used within a PaymentFormContextProvider');
    }
    return context;
}


/***/ }),

/***/ "./packages/contexts/src/paymentForm/PaymentFormProvider.tsx":
/*!*******************************************************************!*\
  !*** ./packages/contexts/src/paymentForm/PaymentFormProvider.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentFormProvider: () => (/* binding */ PaymentFormProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentFormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentFormContext */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");


const PaymentFormProvider = ({ children, paymentForm }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PaymentFormContext__WEBPACK_IMPORTED_MODULE_1__.PaymentFormContext.Provider, { value: { paymentForm } }, children));
};


/***/ }),

/***/ "./packages/core/src/app/common/error/isCartChangedError.ts":
/*!******************************************************************!*\
  !*** ./packages/core/src/app/common/error/isCartChangedError.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCartChangedError)
/* harmony export */ });
function isCartChangedError(error) {
    const requestError = error;
    return requestError.type === 'cart_changed';
}


/***/ }),

/***/ "./packages/core/src/app/common/form/connectFormik.tsx":
/*!*************************************************************!*\
  !*** ./packages/core/src/app/common/form/connectFormik.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectFormik)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);




function connectFormik(OriginalComponent) {
    const InnerComponent = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OriginalComponent, Object.assign({}, props)), (_a, _b) => {
        var { formik: prevFormik } = _a, prevProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["formik"]);
        var nextFormik = _b.formik, nextProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["formik"]);
        return shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(prevFormik, nextFormik) && shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(prevProps, nextProps);
    });
    const DecoratedComponent = (0,formik__WEBPACK_IMPORTED_MODULE_1__.connect)(InnerComponent);
    DecoratedComponent.displayName = `ConnectFormik(${OriginalComponent.displayName || OriginalComponent.name})`;
    return DecoratedComponent;
}


/***/ }),

/***/ "./packages/core/src/app/common/utility/isMobile.ts":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/common/utility/isMobile.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
}


/***/ }),

/***/ "./packages/core/src/app/generated/paymentIntegrations/index.ts":
/*!**********************************************************************!*\
  !*** ./packages/core/src/app/generated/paymentIntegrations/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV2PaymentMethod: () => (/* binding */ AdyenV2PaymentMethod),
/* harmony export */   AdyenV3PaymentMethod: () => (/* binding */ AdyenV3PaymentMethod),
/* harmony export */   AffirmPaymentMethod: () => (/* binding */ AffirmPaymentMethod),
/* harmony export */   AmazonPayV2PaymentMethod: () => (/* binding */ AmazonPayV2PaymentMethod),
/* harmony export */   ApplePayPaymentMethod: () => (/* binding */ ApplePayPaymentMethod),
/* harmony export */   BarclaycardPaymentMethod: () => (/* binding */ BarclaycardPaymentMethod),
/* harmony export */   BigCommercePaymentsAPMsPaymentMethod: () => (/* binding */ BigCommercePaymentsAPMsPaymentMethod),
/* harmony export */   BigCommercePaymentsCreditCardsPaymentMethod: () => (/* binding */ BigCommercePaymentsCreditCardsPaymentMethod),
/* harmony export */   BigCommercePaymentsFastlanePaymentMethod: () => (/* binding */ BigCommercePaymentsFastlanePaymentMethod),
/* harmony export */   BigCommercePaymentsPayLaterPaymentMethod: () => (/* binding */ BigCommercePaymentsPayLaterPaymentMethod),
/* harmony export */   BigCommercePaymentsPaymentMethod: () => (/* binding */ BigCommercePaymentsPaymentMethod),
/* harmony export */   BigCommercePaymentsRatePayPaymentMethod: () => (/* binding */ BigCommercePaymentsRatePayPaymentMethod),
/* harmony export */   BigCommercePaymentsVenmoPaymentMethod: () => (/* binding */ BigCommercePaymentsVenmoPaymentMethod),
/* harmony export */   BlueSnapDirectAlternativePaymentMethod: () => (/* binding */ BlueSnapDirectAlternativePaymentMethod),
/* harmony export */   BlueSnapDirectEcpPaymentMethod: () => (/* binding */ BlueSnapDirectEcpPaymentMethod),
/* harmony export */   BlueSnapDirectIdealPaymentMethod: () => (/* binding */ BlueSnapDirectIdealPaymentMethod),
/* harmony export */   BlueSnapDirectPayByBankPaymentMethod: () => (/* binding */ BlueSnapDirectPayByBankPaymentMethod),
/* harmony export */   BlueSnapDirectSepaPaymentMethod: () => (/* binding */ BlueSnapDirectSepaPaymentMethod),
/* harmony export */   BlueSnapV2PaymentMethod: () => (/* binding */ BlueSnapV2PaymentMethod),
/* harmony export */   BoltClientPaymentMethod: () => (/* binding */ BoltClientPaymentMethod),
/* harmony export */   BoltEmbeddedPaymentMethod: () => (/* binding */ BoltEmbeddedPaymentMethod),
/* harmony export */   BoltPaymentMethod: () => (/* binding */ BoltPaymentMethod),
/* harmony export */   BraintreeAchPaymentMethod: () => (/* binding */ BraintreeAchPaymentMethod),
/* harmony export */   BraintreeCreditCardsPaymentMethod: () => (/* binding */ BraintreeCreditCardsPaymentMethod),
/* harmony export */   BraintreeFastlanePaymentMethod: () => (/* binding */ BraintreeFastlanePaymentMethod),
/* harmony export */   BraintreeLocalPaymentMethod: () => (/* binding */ BraintreeLocalPaymentMethod),
/* harmony export */   BraintreePaypalPaymentMethod: () => (/* binding */ BraintreePaypalPaymentMethod),
/* harmony export */   BraintreeVenmoPaymentMethod: () => (/* binding */ BraintreeVenmoPaymentMethod),
/* harmony export */   CheckoutcomCustomPaymentMethod: () => (/* binding */ CheckoutcomCustomPaymentMethod),
/* harmony export */   ComponentRegistry: () => (/* binding */ ComponentRegistry),
/* harmony export */   GooglePayPaymentMethod: () => (/* binding */ GooglePayPaymentMethod),
/* harmony export */   HostedCreditCardPaymentMethod: () => (/* binding */ HostedCreditCardPaymentMethod),
/* harmony export */   HostedPaymentMethod: () => (/* binding */ HostedPaymentMethod),
/* harmony export */   KlarnaPaymentMethod: () => (/* binding */ KlarnaPaymentMethod),
/* harmony export */   KlarnaV2PaymentMethod: () => (/* binding */ KlarnaV2PaymentMethod),
/* harmony export */   MolliePaymentMethod: () => (/* binding */ MolliePaymentMethod),
/* harmony export */   MonerisPaymentMethod: () => (/* binding */ MonerisPaymentMethod),
/* harmony export */   OfflinePaymentMethod: () => (/* binding */ OfflinePaymentMethod),
/* harmony export */   PPSDKPaymentMethod: () => (/* binding */ PPSDKPaymentMethod),
/* harmony export */   PayPalCommerceAPMsPaymentMethod: () => (/* binding */ PayPalCommerceAPMsPaymentMethod),
/* harmony export */   PayPalCommerceCreditCardsPaymentMethod: () => (/* binding */ PayPalCommerceCreditCardsPaymentMethod),
/* harmony export */   PayPalCommerceCreditPaymentMethod: () => (/* binding */ PayPalCommerceCreditPaymentMethod),
/* harmony export */   PayPalCommerceFastlanePaymentMethod: () => (/* binding */ PayPalCommerceFastlanePaymentMethod),
/* harmony export */   PayPalCommercePaymentMethod: () => (/* binding */ PayPalCommercePaymentMethod),
/* harmony export */   PayPalCommerceVenmoPaymentMethod: () => (/* binding */ PayPalCommerceVenmoPaymentMethod),
/* harmony export */   PayPalPaymentsProPaymentMethod: () => (/* binding */ PayPalPaymentsProPaymentMethod),
/* harmony export */   PaypalCommerceRatePayPaymentMethod: () => (/* binding */ PaypalCommerceRatePayPaymentMethod),
/* harmony export */   PaypalExpressPaymentMethod: () => (/* binding */ PaypalExpressPaymentMethod),
/* harmony export */   SquareV2PaymentMethod: () => (/* binding */ SquareV2PaymentMethod),
/* harmony export */   StripeOCSPaymentMethod: () => (/* binding */ StripeOCSPaymentMethod),
/* harmony export */   StripeUPEPaymentMethod: () => (/* binding */ StripeUPEPaymentMethod),
/* harmony export */   StripeV3PaymentMethod: () => (/* binding */ StripeV3PaymentMethod),
/* harmony export */   VisaCheckoutPaymentMethod: () => (/* binding */ VisaCheckoutPaymentMethod),
/* harmony export */   WorldpayCreditCardPaymentMethod: () => (/* binding */ WorldpayCreditCardPaymentMethod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/PaymentMethodId.ts");

const AdyenV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | adyen-v2-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("adyen-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/adyen-integration */ "./packages/adyen-integration/src/index.ts")).then(module => ({ default: module.AdyenV2PaymentMethod })));
const AdyenV3PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | adyen-v3-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("adyen-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/adyen-integration */ "./packages/adyen-integration/src/index.ts")).then(module => ({ default: module.AdyenV3PaymentMethod })));
const AffirmPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | affirm-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("affirm-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/affirm-integration */ "./packages/affirm-integration/src/index.ts")).then(module => ({ default: module.AffirmPaymentMethod })));
const AmazonPayV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | amazon-pay-v2-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("amazon-pay-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/amazon-pay-v2-integration */ "./packages/amazon-pay-v2-integration/src/index.ts")).then(module => ({ default: module.AmazonPayV2PaymentMethod })));
const ApplePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | apple-pay-payment-method */ "apple-pay-button").then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/apple-pay-integration */ "./packages/apple-pay-integration/src/index.ts")).then(module => ({ default: module.ApplePayPaymentMethod })));
const BarclaycardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | barclaycard-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("barclaycard-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/barclay-integration */ "./packages/barclay-integration/src/index.ts")).then(module => ({ default: module.BarclaycardPaymentMethod })));
const BigCommercePaymentsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsPaymentMethod })));
const BigCommercePaymentsAPMsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-apms-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsAPMsPaymentMethod })));
const BigCommercePaymentsCreditCardsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-credit-cards-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsCreditCardsPaymentMethod })));
const BigCommercePaymentsFastlanePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-fastlane-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsFastlanePaymentMethod })));
const BigCommercePaymentsPayLaterPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-pay-later-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsPayLaterPaymentMethod })));
const BigCommercePaymentsVenmoPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-venmo-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsVenmoPaymentMethod })));
const BigCommercePaymentsRatePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-rate-pay-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsRatePayPaymentMethod })));
const BlueSnapDirectEcpPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-ecp-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectEcpPaymentMethod })));
const BlueSnapDirectAlternativePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-alternative-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectAlternativePaymentMethod })));
const BlueSnapDirectSepaPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-sepa-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectSepaPaymentMethod })));
const BlueSnapDirectIdealPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-ideal-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectIdealPaymentMethod })));
const BlueSnapV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-v2-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapV2PaymentMethod })));
const BlueSnapDirectPayByBankPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-pay-by-bank-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectPayByBankPaymentMethod })));
const BoltClientPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | bolt-client-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("bolt-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bolt-integration */ "./packages/bolt-integration/src/index.ts")).then(module => ({ default: module.BoltClientPaymentMethod })));
const BoltEmbeddedPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | bolt-embedded-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("bolt-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bolt-integration */ "./packages/bolt-integration/src/index.ts")).then(module => ({ default: module.BoltEmbeddedPaymentMethod })));
const BoltPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | bolt-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("bolt-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bolt-integration */ "./packages/bolt-integration/src/index.ts")).then(module => ({ default: module.BoltPaymentMethod })));
const BraintreeAchPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-ach-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeAchPaymentMethod })));
const BraintreeFastlanePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-fastlane-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeFastlanePaymentMethod })));
const BraintreeCreditCardsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-credit-cards-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeCreditCardsPaymentMethod })));
const BraintreeLocalPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-local-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeLocalPaymentMethod })));
const BraintreePaypalPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-paypal-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreePaypalPaymentMethod })));
const VisaCheckoutPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | visa-checkout-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.VisaCheckoutPaymentMethod })));
const BraintreeVenmoPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-venmo-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeVenmoPaymentMethod })));
const CheckoutcomCustomPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | checkoutcom-custom-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("checkoutcom-custom-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/checkoutcom-integration */ "./packages/checkoutcom-integration/src/index.ts")).then(module => ({ default: module.CheckoutcomCustomPaymentMethod })));
const GooglePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | google-pay-payment-method */[__webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("google-pay-button")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/google-pay-integration */ "./packages/google-pay-integration/src/index.ts")).then(module => ({ default: module.GooglePayPaymentMethod })));
const HostedCreditCardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | hosted-credit-card-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-39091b"), __webpack_require__.e("hosted-credit-card-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/index.ts")).then(module => ({ default: module.HostedCreditCardPaymentMethod })));
const HostedPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | hosted-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-39091b"), __webpack_require__.e("hosted-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/index.ts")).then(module => ({ default: module.HostedPaymentMethod })));
const KlarnaPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | klarna-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("klarna-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/klarna-integration */ "./packages/klarna-integration/src/index.ts")).then(module => ({ default: module.KlarnaPaymentMethod })));
const KlarnaV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | klarna-v2-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("klarna-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/klarna-integration */ "./packages/klarna-integration/src/index.ts")).then(module => ({ default: module.KlarnaV2PaymentMethod })));
const MolliePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | mollie-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("mollie-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/mollie-integration */ "./packages/mollie-integration/src/index.ts")).then(module => ({ default: module.MolliePaymentMethod })));
const MonerisPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | moneris-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("moneris-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/moneris-integration */ "./packages/moneris-integration/src/index.ts")).then(module => ({ default: module.MonerisPaymentMethod })));
const OfflinePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | offline-payment-method */ "offline-payment-method").then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/offline-payment-integration */ "./packages/offline-payment-integration/src/index.ts")).then(module => ({ default: module.OfflinePaymentMethod })));
const PayPalCommerceAPMsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-apms-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceAPMsPaymentMethod })));
const PayPalCommerceCreditPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-credit-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceCreditPaymentMethod })));
const PayPalCommerceCreditCardsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-credit-cards-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceCreditCardsPaymentMethod })));
const PayPalCommerceFastlanePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-fastlane-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceFastlanePaymentMethod })));
const PayPalCommercePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommercePaymentMethod })));
const PayPalCommerceVenmoPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-venmo-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceVenmoPaymentMethod })));
const PaypalCommerceRatePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | paypal-commerce-rate-pay-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PaypalCommerceRatePayPaymentMethod })));
const PaypalExpressPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | paypal-express-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("paypal-express-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-express-integration */ "./packages/paypal-express-integration/src/index.ts")).then(module => ({ default: module.PaypalExpressPaymentMethod })));
const PayPalPaymentsProPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-payments-pro-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("pay-pal-payments-pro-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-payments-pro-integration */ "./packages/paypal-payments-pro-integration/src/index.ts")).then(module => ({ default: module.PayPalPaymentsProPaymentMethod })));
const PPSDKPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | ppsdkpayment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("ppsdkpayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/ppsdk-integration */ "./packages/ppsdk-integration/src/index.ts")).then(module => ({ default: module.PPSDKPaymentMethod })));
const SquareV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | square-v2-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("square-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/squarev2-integration */ "./packages/squarev2-integration/src/index.ts")).then(module => ({ default: module.SquareV2PaymentMethod })));
const StripeOCSPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | stripe-ocspayment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("checkout-sdk-js_dist_esm_integrations_stripe_js"), __webpack_require__.e("stripe-ocspayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/stripe-integration */ "./packages/stripe-integration/src/index.ts")).then(module => ({ default: module.StripeOCSPaymentMethod })));
const StripeUPEPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | stripe-upepayment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("checkout-sdk-js_dist_esm_integrations_stripe_js"), __webpack_require__.e("stripe-ocspayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/stripe-integration */ "./packages/stripe-integration/src/index.ts")).then(module => ({ default: module.StripeUPEPaymentMethod })));
const StripeV3PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | stripe-v3-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("checkout-sdk-js_dist_esm_integrations_stripe_js"), __webpack_require__.e("stripe-ocspayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/stripe-integration */ "./packages/stripe-integration/src/index.ts")).then(module => ({ default: module.StripeV3PaymentMethod })));
const WorldpayCreditCardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | worldpay-credit-card-payment-method */[__webpack_require__.e("packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-149597"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("worldpay-credit-card-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/worldpay-access-integration */ "./packages/worldpay-access-integration/src/index.ts")).then(module => ({ default: module.WorldpayCreditCardPaymentMethod })));


const ComponentRegistry = {
    'AdyenV2PaymentMethod': [
        { "gateway": "adyenv2" }
    ],
    'AdyenV3PaymentMethod': [
        { "gateway": "adyenv3" }
    ],
    'AffirmPaymentMethod': [
        { "id": "affirm" }
    ],
    'AmazonPayV2PaymentMethod': [
        { "id": "amazonpay" }
    ],
    'ApplePayPaymentMethod': [
        { "id": "applepay" }
    ],
    'BarclaycardPaymentMethod': [
        { "gateway": "barclaycard" }
    ],
    'BigCommercePaymentsAPMsPaymentMethod': [
        { "gateway": "bigcommerce_payments_apms" }
    ],
    'BigCommercePaymentsCreditCardsPaymentMethod': [
        { "id": "bigcommerce_payments_creditcards" }
    ],
    'BigCommercePaymentsFastlanePaymentMethod': [
        { "id": "bigcommerce_payments_fastlane" }
    ],
    'BigCommercePaymentsPayLaterPaymentMethod': [
        { "id": "bigcommerce_payments_paylater" }
    ],
    'BigCommercePaymentsPaymentMethod': [
        { "id": "bigcommerce_payments" }
    ],
    'BigCommercePaymentsRatePayPaymentMethod': [
        { "gateway": "bigcommerce_payments_apms", "id": "ratepay" }
    ],
    'BigCommercePaymentsVenmoPaymentMethod': [
        { "id": "bigcommerce_payments_venmo" }
    ],
    'BlueSnapDirectAlternativePaymentMethod': [
        { "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectEcpPaymentMethod': [
        { "id": "ecp", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectIdealPaymentMethod': [
        { "id": "ideal", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectPayByBankPaymentMethod': [
        { "id": "pay_by_bank", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectSepaPaymentMethod': [
        { "id": "sepa_direct_debit", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapV2PaymentMethod': [
        { "gateway": "bluesnapv2" }
    ],
    'BoltPaymentMethod': [
        { "id": "bolt" }
    ],
    'BraintreeAchPaymentMethod': [
        { "id": "braintreeach" }
    ],
    'BraintreeCreditCardsPaymentMethod': [
        { "id": "braintree" }
    ],
    'BraintreeFastlanePaymentMethod': [
        { "id": "braintreeacceleratedcheckout" }
    ],
    'BraintreeLocalPaymentMethod': [
        { "gateway": "braintreelocalmethods" }
    ],
    'BraintreePaypalPaymentMethod': [
        { "id": "braintreepaypal" },
        { "id": "braintreepaypalcredit" }
    ],
    'BraintreeVenmoPaymentMethod': [
        { "id": "braintreevenmo" }
    ],
    'CheckoutcomCustomPaymentMethod': [
        { "gateway": "checkoutcom" }
    ],
    'GooglePayPaymentMethod': [
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].AdyenV2GooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].AdyenV3GooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].AuthorizeNetGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BNZGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BraintreeGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].PayPalCommerceGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BigCommercePaymentsGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].CheckoutcomGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].CybersourceV2GooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].OrbitalGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].StripeGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].StripeUPEGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].WorldpayAccessGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].TdOnlineMartGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].StripeOCSGooglePay }
    ],
    'HostedCreditCardPaymentMethod': [
        { "id": "hosted-credit-card" },
        { "id": "credit_card", "gateway": "bluesnapdirect" },
        { "id": "credit_card", "gateway": "checkoutcom" },
        { "id": "tdonlinemart" }
    ],
    'HostedPaymentMethod': [
        { "gateway": "afterpay" },
        { "id": "afterpay" },
        { "gateway": "clearpay" },
        { "id": "clearpay" },
        { "id": "quadpay" },
        { "id": "sezzle" },
        { "id": "zip" }
    ],
    'KlarnaPaymentMethod': [
        { "id": "klarna" }
    ],
    'KlarnaV2PaymentMethod': [
        { "gateway": "klarna" }
    ],
    'MolliePaymentMethod': [
        { "gateway": "mollie" },
        { "gateway": "mollie", "id": "applepay" }
    ],
    'MonerisPaymentMethod': [
        { "id": "moneris" }
    ],
    'OfflinePaymentMethod': [
        { "type": "PAYMENT_TYPE_OFFLINE" }
    ],
    'PayPalCommerceAPMsPaymentMethod': [
        { "gateway": "paypalcommercealternativemethods" }
    ],
    'PayPalCommerceCreditCardsPaymentMethod': [
        { "id": "paypalcommercecreditcards" }
    ],
    'PayPalCommerceCreditPaymentMethod': [
        { "id": "paypalcommercecredit" }
    ],
    'PayPalCommerceFastlanePaymentMethod': [
        { "id": "paypalcommerceacceleratedcheckout" }
    ],
    'PayPalCommercePaymentMethod': [
        { "id": "paypalcommerce" }
    ],
    'PaypalCommerceRatePayPaymentMethod': [
        { "gateway": "paypalcommercealternativemethods", "id": "ratepay" }
    ],
    'PayPalCommerceVenmoPaymentMethod': [
        { "id": "paypalcommercevenmo" }
    ],
    'PaypalExpressPaymentMethod': [
        { "id": "paypalexpress" },
        { "id": "paypalexpresscredit" }
    ],
    'PayPalPaymentsProPaymentMethod': [
        { "id": "paypal" }
    ],
    'PPSDKPaymentMethod': [
        { "type": "PAYMENT_TYPE_SDK" }
    ],
    'SquareV2PaymentMethod': [
        { "id": "squarev2" }
    ],
    'StripeOCSPaymentMethod': [
        { "gateway": "stripeocs", "id": "optimized_checkout" },
        { "gateway": "stripeocs", "id": "checkout_session" }
    ],
    'StripeUPEPaymentMethod': [
        { "gateway": "stripeupe" },
        { "gateway": "stripeupe", "id": "klarna" }
    ],
    'StripeV3PaymentMethod': [
        { "gateway": "stripev3" }
    ],
    'VisaCheckoutPaymentMethod': [
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BraintreeVisaCheckout }
    ],
    'WorldpayCreditCardPaymentMethod': [
        { "id": "worldpayaccess" }
    ]
};


/***/ }),

/***/ "./packages/core/src/app/payment/Payment.tsx":
/*!***************************************************!*\
  !*** ./packages/core/src/app/payment/Payment.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapToPaymentProps: () => (/* binding */ mapToPaymentProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/afterpay */ "../checkout-sdk-js/dist/esm/integrations/afterpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/cba-mpgs */ "../checkout-sdk-js/dist/esm/integrations/cba-mpgs.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/checkoutcom-custom */ "../checkout-sdk-js/dist/esm/integrations/checkoutcom-custom.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/clearpay */ "../checkout-sdk-js/dist/esm/integrations/clearpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offsite */ "../checkout-sdk-js/dist/esm/integrations/offsite.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_express__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-express */ "../checkout-sdk-js/dist/esm/integrations/paypal-express.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/sagepay */ "../checkout-sdk-js/dist/esm/integrations/sagepay.js");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/ChecklistSkeleton.tsx");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../analytics */ "./packages/core/src/app/analytics/withAnalytics.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/ErrorModal.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isCartChangedError.ts");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isErrorWithType.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/emptyData.ts");
/* harmony import */ var _termsConditions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../termsConditions */ "./packages/core/src/app/termsConditions/TermsConditionsField.tsx");
/* harmony import */ var _mapSubmitOrderErrorMessage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mapSubmitOrderErrorMessage */ "./packages/core/src/app/payment/mapSubmitOrderErrorMessage.ts");
/* harmony import */ var _mapToOrderRequestBody__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mapToOrderRequestBody */ "./packages/core/src/app/payment/mapToOrderRequestBody.ts");
/* harmony import */ var _PaymentContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PaymentContext */ "./packages/core/src/app/payment/PaymentContext.tsx");
/* harmony import */ var _PaymentForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PaymentForm */ "./packages/core/src/app/payment/PaymentForm.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
























const getDefaultPaymentMethod = ({ checkout, consignments, getPaymentMethod, methods, paymentProviderCustomer, }) => {
    let filteredMethods = methods;
    // TODO: In accordance with the checkout team, this functionality is temporary and will be implemented in the backend instead.
    if (paymentProviderCustomer === null || paymentProviderCustomer === void 0 ? void 0 : paymentProviderCustomer.stripeLinkAuthenticationState) {
        const stripeUpePaymentMethod = filteredMethods.filter((method) => method.id === 'card' && method.gateway === _paymentMethod__WEBPACK_IMPORTED_MODULE_25__["default"].StripeUPE);
        filteredMethods = stripeUpePaymentMethod.length ? stripeUpePaymentMethod : filteredMethods;
    }
    filteredMethods = filteredMethods.filter((method) => {
        if (method.id === _paymentMethod__WEBPACK_IMPORTED_MODULE_25__["default"].Bolt && method.initializationData) {
            return Boolean(method.initializationData.showInCheckout);
        }
        return method.id !== _paymentMethod__WEBPACK_IMPORTED_MODULE_25__["default"].BraintreeLocalPaymentMethod;
    });
    if (consignments && consignments.length > 1) {
        const multiShippingIncompatibleMethodIds = [
            _paymentMethod__WEBPACK_IMPORTED_MODULE_25__["default"].AmazonPay,
        ];
        filteredMethods = filteredMethods.filter((method) => !multiShippingIncompatibleMethodIds.includes(method.id));
    }
    const selectedPayment = checkout.payments
        ? (0,lodash__WEBPACK_IMPORTED_MODULE_10__.find)(checkout.payments, { providerType: _paymentMethod__WEBPACK_IMPORTED_MODULE_26__["default"].Hosted })
        : undefined;
    let selectedPaymentMethod;
    if (selectedPayment) {
        selectedPaymentMethod = getPaymentMethod(selectedPayment.providerId, selectedPayment.gatewayId);
        filteredMethods = selectedPaymentMethod ? (0,lodash__WEBPACK_IMPORTED_MODULE_10__.compact)([selectedPaymentMethod]) : filteredMethods;
    }
    else {
        selectedPaymentMethod = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.find)(filteredMethods, {
            config: { hasDefaultStoredInstrument: true },
        });
    }
    return {
        defaultMethod: selectedPaymentMethod || filteredMethods[0],
        filteredMethods,
    };
};
const Payment = (props) => {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
        didExceedSpamLimit: false,
        isReady: false,
        shouldDisableSubmit: {},
        shouldHidePaymentSubmitButton: {},
        submitFunctions: {},
    });
    const isReadyRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(state.isReady);
    const grandTotalChangeUnsubscribe = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)();
    const validationSchemasRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)({});
    const renderOrderErrorModal = () => {
        const { finalizeOrderError, language, shouldLocaliseErrorMessages, submitOrderError } = props;
        // FIXME: Export correct TS interface
        const error = submitOrderError || finalizeOrderError;
        if (!error ||
            error.type === 'order_finalization_not_required' ||
            error.type === 'payment_cancelled' ||
            error.type === 'payment_invalid_form' ||
            error.type === 'spam_protection_not_completed' ||
            error.type === 'invalid_hosted_form_value') {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_common_error__WEBPACK_IMPORTED_MODULE_16__["default"], { error: error, message: (0,_mapSubmitOrderErrorMessage__WEBPACK_IMPORTED_MODULE_21__["default"])(error, language.translate.bind(language), shouldLocaliseErrorMessages), onClose: handleCloseModal, title: (0,_mapSubmitOrderErrorMessage__WEBPACK_IMPORTED_MODULE_21__.mapSubmitOrderErrorTitle)(error, language.translate.bind(language)) }));
    };
    const renderEmbeddedSupportErrorModal = () => {
        const { checkEmbeddedSupport = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, methods } = props;
        try {
            checkEmbeddedSupport(methods.map(({ id }) => id));
        }
        catch (error) {
            if (error instanceof Error) {
                return react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_common_error__WEBPACK_IMPORTED_MODULE_16__["default"], { error: error, onClose: handleCloseModal });
            }
        }
        return null;
    };
    const disableSubmit = (method, disabled = true) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"])(method.id, method.gateway);
        const { shouldDisableSubmit } = state;
        if (shouldDisableSubmit[uniqueId] === disabled) {
            return;
        }
        setState(prevState => (Object.assign(Object.assign({}, prevState), { shouldDisableSubmit: Object.assign(Object.assign({}, shouldDisableSubmit), { [uniqueId]: disabled }) })));
    };
    const hidePaymentSubmitButton = (method, disabled = true) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"])(method.id, method.gateway);
        const { shouldHidePaymentSubmitButton } = state;
        if (shouldHidePaymentSubmitButton[uniqueId] === disabled) {
            return;
        }
        setState(prevState => (Object.assign(Object.assign({}, prevState), { shouldHidePaymentSubmitButton: Object.assign(Object.assign({}, shouldHidePaymentSubmitButton), { [uniqueId]: disabled }) })));
    };
    const handleBeforeUnload = (event) => {
        const { defaultMethod, isSubmittingOrder, language } = props;
        const { selectedMethod = defaultMethod } = state;
        if (!isSubmittingOrder ||
            !selectedMethod ||
            selectedMethod.type === _paymentMethod__WEBPACK_IMPORTED_MODULE_26__["default"].Hosted ||
            selectedMethod.type === _paymentMethod__WEBPACK_IMPORTED_MODULE_26__["default"].PPSDK ||
            selectedMethod.skipRedirectConfirmationAlert) {
            return;
        }
        const message = language.translate('common.leave_warning');
        event.returnValue = message;
        return message;
    };
    const handleCloseModal = (_1, _a) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, [_1, _a], void 0, function* (_, { error }) {
        var _b;
        if (!error) {
            return;
        }
        const { cartUrl, clearError, loadCheckout } = props;
        const { type: errorType } = error; // FIXME: Export correct TS interface
        if (errorType === 'provider_fatal_error' ||
            errorType === 'order_could_not_be_finalized_error') {
            window.location.replace(cartUrl || '/');
        }
        if (errorType === 'tax_provider_unavailable') {
            window.location.reload();
        }
        if (errorType === 'cart_consistency') {
            yield loadCheckout();
        }
        if ((0,_common_error__WEBPACK_IMPORTED_MODULE_18__["default"])(error) && error.body) {
            const { body, headers, status } = error;
            if (body.type === 'provider_error' && headers.location) {
                (_b = window.top) === null || _b === void 0 ? void 0 : _b.location.assign(headers.location);
            }
            // Reload the checkout object to get the latest `shouldExecuteSpamCheck` value,
            // which will in turn make `SpamProtectionField` visible again.
            // NOTE: As a temporary fix, we're checking the status code instead of the error
            // type because of an issue with Nginx config, which causes the server to return
            // HTML page instead of JSON response when there is a 429 error.
            if (status === 429 ||
                body.type === 'spam_protection_expired' ||
                body.type === 'spam_protection_failed') {
                setState(prevState => (Object.assign(Object.assign({}, prevState), { didExceedSpamLimit: true })));
                yield loadCheckout();
            }
        }
        clearError(error);
    });
    const handleStoreCreditChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((useStoreCredit) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { applyStoreCredit, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop } = props;
        try {
            yield applyStoreCredit(useStoreCredit);
        }
        catch (e) {
            onUnhandledError(e);
        }
    }), []);
    const handleError = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((error) => {
        const { onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, errorLogger } = props;
        const { type } = error;
        if (type === 'unexpected_detachment') {
            errorLogger.log(error);
            return;
        }
        return onUnhandledError(error);
    }, []);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { defaultMethod, loadPaymentMethods, isPaymentDataRequired, onCartChangedError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onSubmit = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onSubmitError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, submitOrder, analyticsTracker } = props;
        const { selectedMethod = defaultMethod, submitFunctions } = state;
        analyticsTracker.clickPayButton({ shouldCreateAccount: values.shouldCreateAccount });
        const customSubmit = selectedMethod &&
            submitFunctions[(0,_paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"])(selectedMethod.id, selectedMethod.gateway)];
        if (customSubmit) {
            return customSubmit(values);
        }
        try {
            const state = yield submitOrder((0,_mapToOrderRequestBody__WEBPACK_IMPORTED_MODULE_22__["default"])(values, isPaymentDataRequired()));
            const order = state.data.getOrder();
            analyticsTracker.paymentComplete();
            onSubmit(order === null || order === void 0 ? void 0 : order.orderId);
        }
        catch (error) {
            analyticsTracker.paymentRejected();
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_18__["default"])(error) && error.type === 'payment_method_invalid') {
                return loadPaymentMethods();
            }
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_17__["default"])(error)) {
                return onCartChangedError();
            }
            onSubmitError(error);
        }
    }), [props.defaultMethod, state.selectedMethod, props.isPaymentDataRequired()]);
    const trackSelectedPaymentMethod = (method) => {
        const { analyticsTracker } = props;
        const methodName = method.config.displayName || method.id;
        const methodId = method.id;
        analyticsTracker.selectedPaymentMethod(methodName, methodId);
    };
    const setSelectedMethod = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((method) => {
        const { selectedMethod } = state;
        if (selectedMethod === method) {
            return;
        }
        if (method) {
            trackSelectedPaymentMethod(method);
        }
        setState(prevState => (Object.assign(Object.assign({}, prevState), { selectedMethod: method })));
    }, []);
    const setSubmit = (method, fn) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"])(method.id, method.gateway);
        const { submitFunctions } = state;
        if (submitFunctions[uniqueId] === fn) {
            return;
        }
        setState(prevState => (Object.assign(Object.assign({}, prevState), { submitFunctions: Object.assign(Object.assign({}, submitFunctions), { [uniqueId]: fn }) })));
    };
    const setValidationSchema = (method, schema) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"])(method.id, method.gateway);
        if (validationSchemasRef.current[uniqueId] === schema) {
            return;
        }
        validationSchemasRef.current[uniqueId] = schema;
    };
    const loadPaymentMethodsOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { loadPaymentMethods, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, } = props;
        try {
            const updatedState = yield loadPaymentMethods();
            const checkout = updatedState.data.getCheckout();
            const methods = updatedState.data.getPaymentMethods() || _common_utility__WEBPACK_IMPORTED_MODULE_19__.EMPTY_ARRAY;
            const defaultMethod = checkout
                ? getDefaultPaymentMethod({
                    checkout,
                    consignments: updatedState.data.getConsignments(),
                    getPaymentMethod: updatedState.data.getPaymentMethod,
                    methods,
                    paymentProviderCustomer: updatedState.data.getPaymentProviderCustomer(),
                }).defaultMethod
                : undefined;
            const selectedMethod = state.selectedMethod || defaultMethod;
            if (selectedMethod) {
                trackSelectedPaymentMethod(selectedMethod);
            }
        }
        catch (error) {
            onUnhandledError(error);
        }
    });
    const handleCartTotalChange = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const isReady = isReadyRef.current;
        if (!isReady) {
            return;
        }
        setState(prevState => (Object.assign(Object.assign({}, prevState), { isReady: false })));
        yield loadPaymentMethodsOrThrow();
        setState(prevState => (Object.assign(Object.assign({}, prevState), { isReady: true })));
    });
    const getContextValue = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_9__.memoizeOne)(() => {
        return {
            disableSubmit,
            setSubmit,
            setValidationSchema,
            hidePaymentSubmitButton,
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
        isReadyRef.current = state.isReady;
    }, [state.isReady]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
        const init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            const { finalizeOrderIfNeeded, onFinalize = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onFinalizeError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onReady = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, usableStoreCredit, checkoutServiceSubscribe, } = props;
            if (usableStoreCredit) {
                yield handleStoreCreditChange(true);
            }
            yield loadPaymentMethodsOrThrow();
            try {
                const state = yield finalizeOrderIfNeeded({
                    integrations: [
                        _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__.createAfterpayPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_2__.createBlueSnapV2PaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_3__.createCBAMPGSPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComAPMPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComCreditCardPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComFawryPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComIdealPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComSepaPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_5__.createClearpayPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_6__.createOffsitePaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_paypal_express__WEBPACK_IMPORTED_MODULE_7__.createPaypalExpressPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_8__.createSagePayPaymentStrategy,
                    ],
                });
                const order = state.data.getOrder();
                onFinalize(order === null || order === void 0 ? void 0 : order.orderId);
            }
            catch (error) {
                if ((0,_common_error__WEBPACK_IMPORTED_MODULE_18__["default"])(error) && error.type !== 'order_finalization_not_required') {
                    onFinalizeError(error);
                }
            }
            grandTotalChangeUnsubscribe.current = checkoutServiceSubscribe(() => handleCartTotalChange(), ({ data }) => { var _a; return (_a = data.getCheckout()) === null || _a === void 0 ? void 0 : _a.grandTotal; }, ({ data }) => { var _a; return (_a = data.getCheckout()) === null || _a === void 0 ? void 0 : _a.outstandingBalance; });
            window.addEventListener('beforeunload', handleBeforeUnload);
            setState(prevState => (Object.assign(Object.assign({}, prevState), { isReady: true })));
            onReady();
        });
        void init();
        return () => {
            const deInit = () => {
                if (grandTotalChangeUnsubscribe.current) {
                    grandTotalChangeUnsubscribe.current();
                    grandTotalChangeUnsubscribe.current = undefined;
                }
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
            deInit();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
        const { checkEmbeddedSupport = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, methods } = props;
        checkEmbeddedSupport(methods.map(({ id }) => id));
    }, [props.methods]);
    const { selectedMethod = props.defaultMethod } = state;
    const uniqueSelectedMethodId = selectedMethod && (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"])(selectedMethod.id, selectedMethod.gateway);
    return (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_PaymentContext__WEBPACK_IMPORTED_MODULE_23__["default"].Provider, { value: getContextValue() },
        react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_13__["default"], { isLoading: !state.isReady }, !(0,lodash__WEBPACK_IMPORTED_MODULE_10__.isEmpty)(props.methods) && props.defaultMethod && (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_PaymentForm__WEBPACK_IMPORTED_MODULE_24__["default"], { availableStoreCredit: props.availableStoreCredit, defaultGatewayId: props.defaultMethod.gateway, defaultMethodId: props.defaultMethod.id, didExceedSpamLimit: state.didExceedSpamLimit, isEmbedded: props.isEmbedded, isInitializingPayment: props.isInitializingPayment, isPaymentDataRequired: props.isPaymentDataRequired, isStoreCreditApplied: props.isStoreCreditApplied, isTermsConditionsRequired: props.isTermsConditionsRequired, isUsingMultiShipping: props.isUsingMultiShipping, methods: props.methods, onMethodSelect: setSelectedMethod, onStoreCreditChange: handleStoreCreditChange, onSubmit: handleSubmit, onUnhandledError: handleError, selectedMethod: state.selectedMethod, shouldDisableSubmit: (uniqueSelectedMethodId && state.shouldDisableSubmit[uniqueSelectedMethodId]) || undefined, shouldExecuteSpamCheck: props.shouldExecuteSpamCheck, shouldHidePaymentSubmitButton: (uniqueSelectedMethodId && props.isPaymentDataRequired() && state.shouldHidePaymentSubmitButton[uniqueSelectedMethodId]) || undefined, termsConditionsText: props.termsConditionsText, termsConditionsUrl: props.termsConditionsUrl, usableStoreCredit: props.usableStoreCredit, validationSchema: (uniqueSelectedMethodId && validationSchemasRef.current[uniqueSelectedMethodId]) || undefined }))),
        renderOrderErrorModal(),
        renderEmbeddedSupportErrorModal()));
};
function mapToPaymentProps({ checkoutService, checkoutState, }) {
    const { data: { getCheckout, getConfig, getCustomer, getConsignments, getOrder, getPaymentMethod, getPaymentMethods, isPaymentDataRequired, getPaymentProviderCustomer, }, errors: { getFinalizeOrderError, getSubmitOrderError }, statuses: { isInitializingPayment, isSubmittingOrder }, } = checkoutState;
    const checkout = getCheckout();
    const config = getConfig();
    const customer = getCustomer();
    const consignments = getConsignments();
    const paymentProviderCustomer = getPaymentProviderCustomer();
    const { isComplete = false } = getOrder() || {};
    const methods = getPaymentMethods() || _common_utility__WEBPACK_IMPORTED_MODULE_19__.EMPTY_ARRAY;
    if (!checkout || !config || !customer || isComplete) {
        return null;
    }
    const { enableTermsAndConditions: isTermsConditionsEnabled, features, orderTermsAndConditionsType: termsConditionsType, orderTermsAndConditions: termsCondtitionsText, orderTermsAndConditionsLink: termsCondtitionsUrl, } = config.checkoutSettings;
    const isTermsConditionsRequired = isTermsConditionsEnabled;
    const { isStoreCreditApplied } = checkout;
    const { defaultMethod, filteredMethods } = getDefaultPaymentMethod({
        checkout,
        consignments,
        getPaymentMethod,
        methods,
        paymentProviderCustomer,
    });
    return {
        applyStoreCredit: checkoutService.applyStoreCredit,
        availableStoreCredit: customer.storeCredit,
        cartUrl: config.links.cartLink,
        clearError: checkoutService.clearError,
        defaultMethod,
        finalizeOrderError: getFinalizeOrderError(),
        finalizeOrderIfNeeded: checkoutService.finalizeOrderIfNeeded,
        loadCheckout: checkoutService.loadCheckout,
        isInitializingPayment: isInitializingPayment(),
        isPaymentDataRequired,
        isStoreCreditApplied,
        isSubmittingOrder: isSubmittingOrder(),
        isTermsConditionsRequired,
        loadPaymentMethods: checkoutService.loadPaymentMethods,
        methods: filteredMethods,
        shouldExecuteSpamCheck: checkout.shouldExecuteSpamCheck,
        shouldLocaliseErrorMessages: features['PAYMENTS-6799.localise_checkout_payment_error_messages'],
        submitOrder: checkoutService.submitOrder,
        submitOrderError: getSubmitOrderError(),
        checkoutServiceSubscribe: checkoutService.subscribe,
        termsConditionsText: isTermsConditionsRequired && termsConditionsType === _termsConditions__WEBPACK_IMPORTED_MODULE_20__.TermsConditionsType.TextArea
            ? termsCondtitionsText
            : undefined,
        termsConditionsUrl: isTermsConditionsRequired && termsConditionsType === _termsConditions__WEBPACK_IMPORTED_MODULE_20__.TermsConditionsType.Link
            ? termsCondtitionsUrl
            : undefined,
        usableStoreCredit: checkout.grandTotal > 0 ? Math.min(checkout.grandTotal, customer.storeCredit || 0) : 0,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_analytics__WEBPACK_IMPORTED_MODULE_14__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_15__["default"])(mapToPaymentProps)(Payment))));


/***/ }),

/***/ "./packages/core/src/app/payment/PaymentContext.tsx":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentContext.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PaymentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentContext);


/***/ }),

/***/ "./packages/core/src/app/payment/PaymentForm.tsx":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentForm.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-extension */ "./packages/checkout-extension/src/Extension.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _termsConditions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../termsConditions */ "./packages/core/src/app/termsConditions/TermsConditions.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _getPaymentValidationSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getPaymentValidationSchema */ "./packages/core/src/app/payment/getPaymentValidationSchema.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodList.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts");
/* harmony import */ var _PaymentRedeemables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PaymentRedeemables */ "./packages/core/src/app/payment/PaymentRedeemables.tsx");
/* harmony import */ var _PaymentSubmitButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PaymentSubmitButton */ "./packages/core/src/app/payment/PaymentSubmitButton.tsx");
/* harmony import */ var _SpamProtectionField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SpamProtectionField */ "./packages/core/src/app/payment/SpamProtectionField.tsx");
/* harmony import */ var _storeCredit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./storeCredit */ "./packages/core/src/app/payment/storeCredit/StoreCreditField.tsx");
/* harmony import */ var _storeCredit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./storeCredit */ "./packages/core/src/app/payment/storeCredit/StoreCreditOverlay.tsx");
















const PaymentForm = ({ availableStoreCredit = 0, didExceedSpamLimit, isEmbedded, isInitializingPayment, isPaymentDataRequired, isTermsConditionsRequired, isStoreCreditApplied, isUsingMultiShipping, language, methods, onMethodSelect, onStoreCreditChange, onUnhandledError, resetForm, selectedMethod, shouldDisableSubmit, shouldHidePaymentSubmitButton, shouldExecuteSpamCheck, termsConditionsText = '', termsConditionsUrl, usableStoreCredit = 0, values, }) => {
    var _a, _b, _c;
    const selectedMethodId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (!selectedMethod) {
            return;
        }
        switch (selectedMethod.id) {
            case _paymentMethod__WEBPACK_IMPORTED_MODULE_14__["default"].AmazonPay:
                if (selectedMethod.initializationData.paymentToken) {
                    return;
                }
                return selectedMethod.id;
            default:
                return selectedMethod.id;
        }
    }, [selectedMethod]);
    const brandName = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        var _a, _b, _c;
        if (!selectedMethod) {
            return;
        }
        return (((_b = (_a = selectedMethod.initializationData) === null || _a === void 0 ? void 0 : _a.payPalCreditProductBrandName) === null || _b === void 0 ? void 0 : _b.credit) ||
            ((_c = selectedMethod.initializationData) === null || _c === void 0 ? void 0 : _c.payPalCreditProductBrandName));
    }, [selectedMethod]);
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
    const { checkoutSettings } = (_a = checkoutState.data.getConfig()) !== null && _a !== void 0 ? _a : {};
    const isMultiCouponEnabled = (0,_common_utility__WEBPACK_IMPORTED_MODULE_8__["default"])(checkoutSettings, 'CHECKOUT-9674.multi_coupon_cart_checkout', false);
    if (shouldExecuteSpamCheck) {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SpamProtectionField__WEBPACK_IMPORTED_MODULE_20__["default"], { didExceedSpamLimit: didExceedSpamLimit, onUnhandledError: onUnhandledError }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_11__["default"], { className: "checkout-form", testId: "payment-form" },
        usableStoreCredit > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_storeCredit__WEBPACK_IMPORTED_MODULE_21__["default"], { availableStoreCredit: availableStoreCredit, isStoreCreditApplied: isStoreCreditApplied, name: "useStoreCredit", onChange: onStoreCreditChange, usableStoreCredit: usableStoreCredit })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PaymentMethodListFieldset, { isEmbedded: isEmbedded, isInitializingPayment: isInitializingPayment, isPaymentDataRequired: isPaymentDataRequired, isUsingMultiShipping: isUsingMultiShipping, methods: methods, onMethodSelect: onMethodSelect, onUnhandledError: onUnhandledError, resetForm: resetForm, values: values }),
        !isMultiCouponEnabled && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PaymentRedeemables__WEBPACK_IMPORTED_MODULE_18__["default"], null),
        isTermsConditionsRequired && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_termsConditions__WEBPACK_IMPORTED_MODULE_9__.TermsConditions, { termsConditionsText: termsConditionsText, termsConditionsUrl: termsConditionsUrl })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-actions" }, shouldHidePaymentSubmitButton ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PaymentMethodSubmitButtonContainer, null)) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PaymentSubmitButton__WEBPACK_IMPORTED_MODULE_19__["default"], { brandName: brandName, initialisationStrategyType: selectedMethod && ((_b = selectedMethod.initializationStrategy) === null || _b === void 0 ? void 0 : _b.type), isComplete: !!((_c = selectedMethod === null || selectedMethod === void 0 ? void 0 : selectedMethod.initializationData) === null || _c === void 0 ? void 0 : _c.isComplete), isDisabled: shouldDisableSubmit, methodGateway: selectedMethod && selectedMethod.gateway, methodId: selectedMethodId, methodName: selectedMethod && (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_17__["default"])(language)(selectedMethod), methodType: selectedMethod && selectedMethod.method })))));
};
const PaymentMethodSubmitButtonContainer = () => {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "submitButtonContainer", id: "checkout-payment-continue" });
};
const PaymentMethodListFieldset = ({ isEmbedded, isInitializingPayment, isPaymentDataRequired, isUsingMultiShipping, methods, onMethodSelect = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onUnhandledError, resetForm, values, }) => {
    const { setSubmitted } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"]);
    const handlePaymentMethodSelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((method) => {
        const updatedValues = Object.assign(Object.assign({}, values), { ccCustomerCode: '', ccCvv: '', ccDocument: '', customerEmail: '', customerMobile: '', ccExpiry: '', ccName: '', ccNumber: '', instrumentId: '', paymentProviderRadio: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_16__["default"])(method.id, method.gateway), shouldCreateAccount: true, shouldSaveInstrument: false });
        resetForm({ values: updatedValues });
        setSubmitted(false);
        onMethodSelect(method);
    }, [values, onMethodSelect, resetForm, setSubmitted]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_10__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_12__["default"], { hidden: true },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "payment.payment_methods_text" })) },
        !isPaymentDataRequired() && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_storeCredit__WEBPACK_IMPORTED_MODULE_22__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_3__.Extension, { region: "payment.paymentMethodList.before" /* ExtensionRegion.PaymentPaymentMethodListBefore */ }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_paymentMethod__WEBPACK_IMPORTED_MODULE_15__["default"], { isEmbedded: isEmbedded, isInitializingPayment: isInitializingPayment, isUsingMultiShipping: isUsingMultiShipping, methods: methods, onSelect: handlePaymentMethodSelect, onUnhandledError: onUnhandledError })));
};
const paymentFormConfig = {
    mapPropsToValues: ({ defaultGatewayId, defaultMethodId }) => ({
        ccCustomerCode: '',
        ccCvv: '',
        ccDocument: '',
        customerEmail: '',
        customerMobile: '',
        ccExpiry: '',
        ccName: '',
        ccNumber: '',
        paymentProviderRadio: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_16__["default"])(defaultMethodId, defaultGatewayId),
        instrumentId: '',
        shouldCreateAccount: true,
        shouldSaveInstrument: false,
        terms: false,
        hostedForm: {
            cardType: '',
            errors: {
                cardCode: '',
                cardCodeVerification: '',
                cardExpiry: '',
                cardName: '',
                cardNumber: '',
                cardNumberVerification: '',
            },
        },
        accountNumber: '',
        routingNumber: '',
    }),
    handleSubmit: (values, { props: { onSubmit = lodash__WEBPACK_IMPORTED_MODULE_1__.noop } }) => {
        onSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(values, (value, key) => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(value) || value === '' || key === 'hostedForm'));
    },
    validationSchema: ({ language, isTermsConditionsRequired = false, validationSchema, }) => (0,_getPaymentValidationSchema__WEBPACK_IMPORTED_MODULE_13__["default"])({
        additionalValidation: validationSchema,
        isTermsConditionsRequired,
        language,
    }),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_0__.withFormik)(paymentFormConfig)((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(PaymentForm))));


/***/ }),

/***/ "./packages/core/src/app/payment/PaymentRedeemables.tsx":
/*!**************************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentRedeemables.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart */ "./packages/core/src/app/cart/Redeemable.tsx");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart */ "./packages/core/src/app/cart/mapToRedeemableProps.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");





const PaymentRedeemables = (redeemableProps) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "redeemable-payments", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_6__["default"], { hidden: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.redeemable_payments_text" })) },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cart__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, redeemableProps, { showAppliedRedeemables: true }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_4__["default"])(_cart__WEBPACK_IMPORTED_MODULE_3__["default"])((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PaymentRedeemables)));


/***/ }),

/***/ "./packages/core/src/app/payment/PaymentSubmitButton.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentSubmitButton.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconBolt.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");






const providersWithCustomClasses = [_paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].Bolt];
const PaymentSubmitButtonText = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ methodId, methodName, methodType, methodGateway, initialisationStrategyType, brandName, isComplete, isPaymentDataRequired, }) => {
    if (!isPaymentDataRequired) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.place_order_action" });
    }
    if (methodName && initialisationStrategyType === 'none') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { methodName }, id: "payment.ppsdk_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].AmazonPay) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.amazonpay_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].Bolt) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "payment-submit-button-bolt-icon" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.place_order_action" })));
    }
    if (methodGateway === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].Barclaycard) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.barclaycard_continue_action" });
    }
    if (methodGateway === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].BlueSnapV2) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.bluesnap_v2_continue_action" });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_6__["default"].VisaCheckout) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.visa_checkout_continue_action" });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_6__["default"].PaypalVenmo ||
        methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].BraintreeVenmo) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.paypal_venmo_continue_action" });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_6__["default"].Paypal) {
        const continueActionId = methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].PaypalCommerce
            ? 'payment.place_order_action'
            : 'payment.paypal_continue_action';
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { isComplete }, id: isComplete ? 'payment.paypal_complete_action' : continueActionId });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_6__["default"].PaypalCredit) {
        const continueTranslationId = brandName
            ? 'payment.continue_with_brand'
            : 'payment.paypal_pay_later_continue_action';
        const completeTranslationId = brandName
            ? 'payment.complete_with_brand'
            : 'payment.paypal_pay_later_complete_action';
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { brandName, isComplete, continueTranslationId, completeTranslationId }, id: isComplete
                ? completeTranslationId
                : continueTranslationId }));
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].Quadpay) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.quadpay_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].Zip) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.zip_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"].Klarna) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.klarna_continue_action" });
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.place_order_action" });
});
const PaymentSubmitButton = ({ isDisabled, isInitializing, isSubmitting, isPaymentDataRequired, methodGateway, methodId, methodName, methodType, initialisationStrategyType, brandName, isComplete, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_3__["default"], { className: providersWithCustomClasses.includes(methodId)
        ? `payment-submit-button-${methodId}`
        : undefined, "data-test": "payment-submit-button", disabled: isInitializing || isSubmitting || isDisabled, id: "checkout-payment-continue", isFullWidth: true, isLoading: isSubmitting, size: _ui_button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.Large, type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_3__.ButtonVariant.Action },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaymentSubmitButtonText, { brandName: brandName, initialisationStrategyType: initialisationStrategyType, isComplete: isComplete, isPaymentDataRequired: isPaymentDataRequired, methodGateway: methodGateway, methodId: methodId, methodName: methodName, methodType: methodType })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_2__["default"])(({ checkoutState }) => {
    const { data: { isPaymentDataRequired }, statuses: { isInitializingCustomer, isInitializingPayment, isSubmittingOrder }, } = checkoutState;
    return {
        isInitializing: isInitializingCustomer() || isInitializingPayment(),
        isPaymentDataRequired: isPaymentDataRequired(),
        isSubmitting: isSubmittingOrder(),
    };
})((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PaymentSubmitButton)));


/***/ }),

/***/ "./packages/core/src/app/payment/SpamProtectionField.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/payment/SpamProtectionField.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isErrorWithType.ts");






const SpamProtectionField = ({ didExceedSpamLimit, onUnhandledError }) => {
    const [shouldShowRetryButton, setShouldShowRetryButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { checkoutService: { executeSpamCheck }, checkoutState: { statuses } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const isExecutingSpamCheck = statuses.isExecutingSpamCheck();
    const verify = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield executeSpamCheck();
        }
        catch (error) {
            setShouldShowRetryButton(true);
            // Notify the parent component if the user experiences a problem other than cancelling the reCaptcha challenge.
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_5__["default"])(error) && error.type !== 'spam_protection_challenge_not_completed' && onUnhandledError) {
                onUnhandledError(error);
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (didExceedSpamLimit) {
            return;
        }
        verify();
    }, []);
    const handleRetry = (event) => {
        event.preventDefault();
        verify();
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spamProtection-container" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { isLoading: isExecutingSpamCheck }, (didExceedSpamLimit || shouldShowRetryButton) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spamProtection-panel optimizedCheckout-overlay" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: "spamProtection-panel-message optimizedCheckout-primaryContent", "data-test": "spam-protection-verify-button", onClick: handleRetry },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "spam_protection.verify_action" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpamProtectionField);


/***/ }),

/***/ "./packages/core/src/app/payment/createPaymentFormService.ts":
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/payment/createPaymentFormService.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPaymentFormService)
/* harmony export */ });
function createPaymentFormService(formikContext, formContext, paymentContext) {
    const { setFieldTouched, setFieldValue, submitForm, validateForm, values, } = formikContext;
    const { isSubmitted, setSubmitted } = formContext;
    const { disableSubmit, setSubmit, setValidationSchema, hidePaymentSubmitButton } = paymentContext;
    const getFieldValue = (key) => values[key];
    return {
        disableSubmit,
        getFieldValue,
        getFormValues: () => values,
        hidePaymentSubmitButton,
        isSubmitted: () => isSubmitted,
        setFieldTouched: setFieldTouched,
        setFieldValue: setFieldValue,
        setSubmit,
        setSubmitted,
        setValidationSchema,
        submitForm,
        validateForm,
    };
}


/***/ }),

/***/ "./packages/core/src/app/payment/creditCard/unformatCreditCardExpiryDate.ts":
/*!**********************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/unformatCreditCardExpiryDate.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unformatCreditCardExpiryDate)
/* harmony export */ });
function unformatCreditCardExpiryDate(value) {
    const separator = '/';
    const [month = '', year = ''] = value.split(new RegExp(`\\s*${separator}\\s*`));
    if (!/^\d+$/.test(month) || !/^\d+$/.test(year)) {
        return { month: '', year: '' };
    }
    return {
        month: month.length === 1 ? `0${month}` : month.slice(0, 2),
        year: year.length === 2 ? `20${year}` : year.slice(0, 4),
    };
}


/***/ }),

/***/ "./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts":
/*!******************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unformatCreditCardNumber)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);

function unformatCreditCardNumber(value, separator = ' ') {
    const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(value);
    if (!card) {
        return value;
    }
    return value.replace(new RegExp(separator, 'g'), '');
}


/***/ }),

/***/ "./packages/core/src/app/payment/getPaymentValidationSchema.ts":
/*!*********************************************************************!*\
  !*** ./packages/core/src/app/payment/getPaymentValidationSchema.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _termsConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../termsConditions */ "./packages/core/src/app/termsConditions/getTermsConditionsValidationSchema.ts");


function getPaymentValidationSchema({ additionalValidation, isTermsConditionsRequired, language, }) {
    const schemaFields = {
        paymentProviderRadio: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
    };
    const schemaFieldsWithTerms = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)(schemaFields).concat((0,_termsConditions__WEBPACK_IMPORTED_MODULE_1__["default"])({ isTermsConditionsRequired, language }));
    return additionalValidation
        ? schemaFieldsWithTerms.concat(additionalValidation)
        : schemaFieldsWithTerms;
}


/***/ }),

/***/ "./packages/core/src/app/payment/mapSubmitOrderErrorMessage.ts":
/*!*********************************************************************!*\
  !*** ./packages/core/src/app/payment/mapSubmitOrderErrorMessage.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapSubmitOrderErrorMessage),
/* harmony export */   mapSubmitOrderErrorTitle: () => (/* binding */ mapSubmitOrderErrorTitle)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapSubmitOrderErrorMessage(error, translate, shouldLocalise) {
    switch (error.type) {
        case 'not_initialized':
            return translate('payment.payment_error');
        case 'custom_provider_execute_error':
            return translate(error.subtype);
        case 'payment_cancelled':
            return translate('payment.payment_cancelled');
        case 'payment_method_invalid':
            return translate('payment.payment_method_disabled_error');
        case 'tax_provider_unavailable':
            return translate('payment.tax_provider_unavailable');
        case 'cart_changed':
            return translate('shipping.cart_change_error');
        case 'cart_consistency':
            return translate('cart.consistency_error');
        case 'empty_cart':
            return translate('cart.empty_cart_error_message');
        default:
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)([
                'order_could_not_be_finalized_error',
                'provider_fatal_error',
                'payment_invalid',
                'provider_error',
                'provider_widget_error',
                'user_payment_error',
            ], error.body && error.body.type)) {
                return translate('payment.payment_method_error', { message: error.message });
            }
            if (shouldLocalise && error.body && error.body.errors && error.body.errors.length) {
                const messages = error.body.errors.map((err) => translate(`payment.errors.${err.code}`));
                return messages.join(' ');
            }
            if (error.message) {
                return error.message;
            }
            return error.type === 'unrecoverable'
                ? translate('common.unavailable_error')
                : translate('payment.place_order_error');
    }
}
function mapSubmitOrderErrorTitle(error, translate) {
    if (error.type === 'unrecoverable') {
        return translate('common.unavailable_heading');
    }
    if (error.type === 'missing_shipping_method') {
        return translate('common.missing_shipping_method_heading');
    }
    if (error.type === 'invalid_shipping_address') {
        return translate('common.invalid_shipping_address');
    }
    return translate('common.error_heading');
}


/***/ }),

/***/ "./packages/core/src/app/payment/mapToOrderRequestBody.ts":
/*!****************************************************************!*\
  !*** ./packages/core/src/app/payment/mapToOrderRequestBody.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapToOrderRequestBody)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creditCard */ "./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creditCard */ "./packages/core/src/app/payment/creditCard/unformatCreditCardExpiryDate.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts");




function mapToOrderRequestBody(values, isPaymentDataRequired) {
    if (!isPaymentDataRequired) {
        return {};
    }
    const { paymentProviderRadio } = values, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(values, ["paymentProviderRadio"]);
    const { methodId, gatewayId } = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_4__.parseUniquePaymentMethodId)(paymentProviderRadio);
    const payload = {
        payment: { gatewayId, methodId },
    };
    const paymentData = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(Object.assign(Object.assign({}, rest), { ccExpiry: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_5__.hasCreditCardExpiry)(values)
            ? (0,_creditCard__WEBPACK_IMPORTED_MODULE_3__["default"])(values.ccExpiry)
            : null, ccNumber: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_5__.hasCreditCardNumber)(values)
            ? (0,_creditCard__WEBPACK_IMPORTED_MODULE_2__["default"])(values.ccNumber)
            : null }), lodash__WEBPACK_IMPORTED_MODULE_1__.isNil);
    if (payload.payment && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(paymentData)) {
        payload.payment.paymentData = paymentData;
    }
    return payload;
}


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts":
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasCreditCardExpiry: () => (/* binding */ hasCreditCardExpiry),
/* harmony export */   hasCreditCardNumber: () => (/* binding */ hasCreditCardNumber)
/* harmony export */ });
function hasCreditCardNumber(values) {
    if (!(values instanceof Object)) {
        return false;
    }
    return 'ccNumber' in values;
}
function hasCreditCardExpiry(values) {
    if (!(values instanceof Object)) {
        return false;
    }
    return 'ccExpiry' in values;
}


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/HostedCreditCardFieldsetValues.ts":
/*!***************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/HostedCreditCardFieldsetValues.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHostedCreditCardFieldsetValues: () => (/* binding */ isHostedCreditCardFieldsetValues)
/* harmony export */ });
function isHostedCreditCardFieldsetValues(value) {
    if (!(value instanceof Object)) {
        return false;
    }
    if (!('hostedForm' in value)) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodList.tsx":
/*!***************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodList.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utility */ "./packages/core/src/app/common/utility/isMobile.ts");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/Checklist.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/ChecklistItem.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/CustomChecklistItem.tsx");
/* harmony import */ var _getPaymentMethodName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getPaymentMethodName */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts");
/* harmony import */ var _getUniquePaymentMethodId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getUniquePaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _PaymentMethodTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PaymentMethodTitle */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodTitle.tsx");
/* harmony import */ var _PaymentMethodV2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PaymentMethodV2 */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodV2.tsx");










function getPaymentMethodFromListValue(methods, value) {
    const { gatewayId: gateway, methodId: id } = (0,_getUniquePaymentMethodId__WEBPACK_IMPORTED_MODULE_10__.parseUniquePaymentMethodId)(value);
    const method = gateway ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(methods, { gateway, id }) : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(methods, { id });
    if (!method) {
        throw new Error(`Unable to find payment method with id: ${id}`);
    }
    return method;
}
const PaymentMethodList = ({ formik: { values }, isEmbedded, isInitializingPayment, isUsingMultiShipping, methods, onSelect = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onUnhandledError, }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    const { checkoutState: { data: { getConfig } } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const config = getConfig();
    const titleText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (config && values.paymentProviderRadio) {
            const checkoutSettings = config.checkoutSettings;
            const cdnBasePath = config.cdnPath;
            const storeCountryCode = config.storeProfile.storeCountryCode;
            const paymentMethod = getPaymentMethodFromListValue(methods, values.paymentProviderRadio);
            const methodName = (0,_getPaymentMethodName__WEBPACK_IMPORTED_MODULE_9__["default"])(language)(paymentMethod);
            const { titleText } = (0,_PaymentMethodTitle__WEBPACK_IMPORTED_MODULE_11__.getPaymentMethodTitle)(language, cdnBasePath, checkoutSettings, storeCountryCode)(paymentMethod);
            return titleText || methodName;
        }
        return '';
    }, [config, values.paymentProviderRadio]);
    const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value) => {
        onSelect(getPaymentMethodFromListValue(methods, value));
    }, [methods, onSelect]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-live": "assertive", className: 'is-srOnly', role: "status" }, titleText),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_6__["default"], { defaultSelectedItemId: values.paymentProviderRadio, isDisabled: isInitializingPayment, name: "paymentProviderRadio", onSelect: handleSelect }, methods.map((method) => {
            const value = (0,_getUniquePaymentMethodId__WEBPACK_IMPORTED_MODULE_10__["default"])(method.id, method.gateway);
            const showOnlyOnMobileDevices = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(method, 'initializationData.showOnlyOnMobileDevices', false);
            if (showOnlyOnMobileDevices && !(0,_common_utility__WEBPACK_IMPORTED_MODULE_5__["default"])()) {
                return;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PaymentMethodListItem, { isDisabled: isInitializingPayment, isEmbedded: isEmbedded, isUsingMultiShipping: isUsingMultiShipping, key: value, method: method, onUnhandledError: onUnhandledError, value: value }));
        }))));
};
const PaymentMethodListItem = ({ isDisabled, isEmbedded, isUsingMultiShipping, method, onUnhandledError, value, }) => {
    var _a;
    const renderPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PaymentMethodV2__WEBPACK_IMPORTED_MODULE_12__["default"], { isEmbedded: isEmbedded, isUsingMultiShipping: isUsingMultiShipping, method: method, onUnhandledError: onUnhandledError || lodash__WEBPACK_IMPORTED_MODULE_0__.noop }));
    }, [isEmbedded, isUsingMultiShipping, method, onUnhandledError]);
    const renderPaymentMethodTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((isSelected) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PaymentMethodTitle__WEBPACK_IMPORTED_MODULE_11__["default"], { isSelected: isSelected, method: method, onUnhandledError: onUnhandledError }), [method]);
    if ((_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.isCustomChecklistItem) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_8__["default"], { content: renderPaymentMethod, htmlId: `radio-${value}` }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_7__["default"], { content: renderPaymentMethod, htmlId: `radio-${value}`, isDisabled: isDisabled, label: renderPaymentMethodTitle, value: value }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_4__["default"])((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PaymentMethodList)));


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts":
/*!**********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PaymentMethodProviderType;
(function (PaymentMethodProviderType) {
    PaymentMethodProviderType["Api"] = "PAYMENT_TYPE_API";
    PaymentMethodProviderType["Hosted"] = "PAYMENT_TYPE_HOSTED";
    PaymentMethodProviderType["Offline"] = "PAYMENT_TYPE_OFFLINE";
    PaymentMethodProviderType["PPSDK"] = "PAYMENT_TYPE_SDK";
})(PaymentMethodProviderType || (PaymentMethodProviderType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethodProviderType);


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodTitle.tsx":
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodTitle.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getPaymentMethodTitle: () => (/* binding */ getPaymentMethodTitle)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_bigcommerce_payments_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/bigcommerce-payments-utils */ "./packages/bigcommerce-payments-utils/src/BigCommercePaymentsPayLaterBanner.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-utils */ "./packages/paypal-utils/src/PaypalCommerceCreditBanner.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-utils */ "./packages/paypal-utils/src/BraintreePaypalCreditBanner.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/CreditCardIconList.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _CreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CreditCardFieldsetValues */ "./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts");
/* harmony import */ var _getPaymentMethodDisplayName__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./getPaymentMethodDisplayName */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodDisplayName.tsx");
/* harmony import */ var _getPaymentMethodName__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./getPaymentMethodName */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts");
/* harmony import */ var _HostedCreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HostedCreditCardFieldsetValues */ "./packages/core/src/app/payment/paymentMethod/HostedCreditCardFieldsetValues.ts");
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PaymentMethodType */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");


















function getPaymentMethodTitle(language, basePath, checkoutSettings, storeCountryCode) {
    const cdnPath = (path) => `${basePath}${path}`;
    return (method) => {
        var _a, _b;
        const paymentWithLogo = ((_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.methodsWithLogo)
            ? method.initializationData.methodsWithLogo
            : [];
        const methodName = (0,_getPaymentMethodName__WEBPACK_IMPORTED_MODULE_16__["default"])(language)(method);
        const methodDisplayName = (0,_getPaymentMethodDisplayName__WEBPACK_IMPORTED_MODULE_15__["default"])(language)(method);
        // TODO: API could provide the data below so UI can read simply read it.
        // However, I'm not sure how we deal with translation yet. TBC.
        const customTitles = {
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].CreditCard]: {
                logoUrl: '',
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreeVenmo]: {
                logoUrl: method.logoUrl || '',
                titleText: method.logoUrl ? '' : methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreePaypalCredit]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
                subtitle: (props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ containerId: 'braintree-credit-banner-container' }, props))),
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalCredit]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreeAch]: {
                logoUrl: method.logoUrl || '',
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreeLocalPaymentMethod]: {
                logoUrl: method.logoUrl || '',
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BigCommercePaymentsPayPal]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo.svg'),
                titleText: '',
                subtitle: (props) => react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_bigcommerce_payments_utils__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ containerId: 'bigcommerce-payments-banner-container' }, props))
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BigCommercePaymentsPayLater]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
                subtitle: (props) => react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_bigcommerce_payments_utils__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ containerId: 'bigcommerce-payments-paylater-banner-container' }, props))
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BigCommercePaymentsAlternativeMethod]: {
                logoUrl: method.logoUrl || '',
                titleText: method.logoUrl ? '' : methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].PaypalCommerce]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo.svg'),
                titleText: '',
                subtitle: (props) => react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ containerId: 'paypal-commerce-banner-container' }, props))
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].PaypalCommerceCredit]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
                subtitle: (props) => react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ containerId: 'paypal-commerce-credit-banner-container' }, props))
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].PaypalCommerceAlternativeMethod]: {
                logoUrl: method.logoUrl || '',
                titleText: method.logoUrl ? '' : methodDisplayName,
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].VisaCheckout]: {
                logoUrl: cdnPath('/img/payment-providers/visa-checkout.png'),
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Affirm]: {
                logoUrl: cdnPath('/img/payment-providers/affirm-checkout-header.png'),
                titleText: language.translate('payment.affirm_display_name_text'),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Afterpay]: {
                logoUrl: (0,_common_utility__WEBPACK_IMPORTED_MODULE_13__["default"])(checkoutSettings, 'PROJECT-6993.change_afterpay_logo_for_us_stores') && storeCountryCode === 'US' ? cdnPath('/img/payment-providers/afterpay-new-us.svg') : cdnPath('/img/payment-providers/afterpay-badge-blackonmint.png'),
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].AmazonPay]: {
                logoUrl: cdnPath('/img/payment-providers/amazon-header.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].ApplePay]: {
                logoUrl: cdnPath('/modules/checkout/applepay/images/applepay-header@2x.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Bolt]: {
                logoUrl: '',
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Clearpay]: {
                logoUrl: cdnPath('/img/payment-providers/clearpay-header.png'),
                titleText: '',
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].GooglePay]: {
                logoUrl: cdnPath('/img/payment-providers/google-pay.png'),
                titleText: '',
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].PayWithGoogle]: {
                logoUrl: cdnPath('/img/payment-providers/google-pay.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Humm]: {
                logoUrl: cdnPath('/img/payment-providers/humm-checkout-header.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Klarna]: {
                logoUrl: ((_b = method.initializationData) === null || _b === void 0 ? void 0 : _b.enableBillie)
                    ? cdnPath('/img/payment-providers/klarna-billie-header.png')
                    : cdnPath('/img/payment-providers/klarna-header.png'),
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Laybuy]: {
                logoUrl: cdnPath('/img/payment-providers/laybuy-checkout-header.png'),
                titleText: '',
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].Paypal]: {
                // TODO: method.id === PaymentMethodId.BraintreeVenmo should be removed after the PAYPAL-1380.checkout_button_strategies_update experiment removal
                logoUrl: method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreeVenmo && method.logoUrl
                    ? method.logoUrl
                    : cdnPath('/img/payment-providers/paypalpaymentsprouk.png'),
                titleText: '',
                subtitle: (props) => {
                    if ((0,_common_utility__WEBPACK_IMPORTED_MODULE_13__["default"])(checkoutSettings, 'CHECKOUT-9450.lazy_load_payment_strategies', false)) {
                        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreePaypalCredit || method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BraintreePaypal) {
                            return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ containerId: 'braintree-banner-container' }, props));
                        }
                        return null;
                    }
                    return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ containerId: 'braintree-banner-container' }, props));
                },
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Quadpay]: {
                logoUrl: cdnPath('/img/payment-providers/quadpay.png'),
                titleText: language.translate('payment.quadpay_display_name_text'),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Sezzle]: {
                logoUrl: cdnPath('/img/payment-providers/sezzle-checkout-header.png'),
                titleText: language.translate('payment.sezzle_display_name_text'),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Zip]: {
                logoUrl: cdnPath('/img/payment-providers/zip.png'),
                titleText: language.translate('payment.zip_display_name_text'),
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].Barclaycard]: {
                logoUrl: cdnPath(`/img/payment-providers/barclaycard_${method.id.toLowerCase()}.png`),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].AdyenV2]: {
                logoUrl: `https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/${method.method === 'scheme' ? 'card' : method.method}.svg`,
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].AdyenV3]: {
                logoUrl: `https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/${method.method === 'scheme' ? 'card' : method.method}.svg`,
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Mollie]: {
                logoUrl: method.method === 'credit_card'
                    ? ''
                    : cdnPath(`/img/payment-providers/mollie_${method.method}.svg`),
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Checkoutcom]: {
                logoUrl: ['credit_card', 'card', 'checkoutcom'].includes(method.id)
                    ? ''
                    : cdnPath(`/img/payment-providers/checkoutcom_${method.id.toLowerCase()}.svg`),
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].StripeV3]: {
                logoUrl: paymentWithLogo.includes(method.id)
                    ? cdnPath(`/img/payment-providers/stripe-${method.id.toLowerCase()}.svg`)
                    : '',
                titleText: method.method === 'iban'
                    ? language.translate('payment.stripe_sepa_display_name_text')
                    : methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].StripeUPE]: {
                logoUrl: paymentWithLogo.includes(method.id)
                    ? cdnPath(`/img/payment-providers/stripe-${method.id.toLowerCase()}.svg`)
                    : '',
                titleText: method.method === 'iban'
                    ? language.translate('payment.stripe_sepa_display_name_text')
                    : methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].WorldpayAccess]: {
                logoUrl: '',
                titleText: language.translate('payment.credit_debit_card_text'),
            },
        };
        if (method.gateway === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BlueSnapDirect) {
            if (method.id === 'credit_card') {
                return { logoUrl: '', titleText: language.translate('payment.credit_card_text') };
            }
            if (method.id === 'ecp') {
                return { logoUrl: '', titleText: language.translate('payment.bluesnap_direct_electronic_check_label') };
            }
            if (method.id === 'banktransfer') {
                return { logoUrl: '', titleText: language.translate('payment.bluesnap_direct_local_bank_transfer_label') };
            }
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].PaypalCommerceVenmo) {
            return customTitles[_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].PaypalCommerceAlternativeMethod];
        }
        if (method.gateway === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BigCommercePaymentsAlternativeMethod &&
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Klarna) {
            return {
                logoUrl: cdnPath('/img/payment-providers/klarna.png'),
                titleText: methodDisplayName,
            };
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BigCommercePaymentsVenmo) {
            return customTitles[_PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].BigCommercePaymentsAlternativeMethod];
        }
        // KLUDGE: 'paypal' is actually a credit card method. It is the only
        // exception to the rule below. We should probably fix it on API level,
        // but apparently it would break LCO if we are not careful.
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].PaypalPaymentsPro &&
            method.method === _PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].CreditCard) {
            return customTitles[_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].CreditCard];
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_18__["default"].Ratepay) {
            return { logoUrl: method.logoUrl || '', titleText: language.translate('payment.ratepay.payment_method_title') };
        }
        return (customTitles[method.gateway || ''] ||
            customTitles[method.id] ||
            customTitles[method.method] ||
            customTitles[_PaymentMethodType__WEBPACK_IMPORTED_MODULE_19__["default"].CreditCard]);
    };
}
function getInstrumentForMethod(instruments, method, values) {
    const instrumentsForMethod = instruments.filter(instrument => instrument.provider === method.id);
    const selectedInstrument = instrumentsForMethod.find(instrument => instrument.bigpayToken === values.instrumentId);
    return selectedInstrument;
}
const PaymentMethodTitle = ({ cdnBasePath, checkoutSettings, storeCountryCode, onUnhandledError, formik: { values }, instruments, isSelected, language, method }) => {
    const methodName = (0,_getPaymentMethodName__WEBPACK_IMPORTED_MODULE_16__["default"])(language)(method);
    const { logoUrl, titleText, subtitle } = getPaymentMethodTitle(language, cdnBasePath, checkoutSettings, storeCountryCode)(method);
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useThemeContext)();
    const getSelectedCardType = () => {
        if (!isSelected) {
            return;
        }
        const instrumentSelected = getInstrumentForMethod(instruments, method, values);
        if ((0,_HostedCreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_17__.isHostedCreditCardFieldsetValues)(values) && values.hostedForm.cardType) {
            return values.hostedForm.cardType;
        }
        if ((0,_CreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_14__.hasCreditCardNumber)(values) && values.ccNumber) {
            const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(values.ccNumber);
            if (!card) {
                return;
            }
            return card.type;
        }
        if (instrumentSelected) {
            return instrumentSelected.brand;
        }
    };
    const getSubtitle = () => {
        const node = subtitle instanceof Function ? subtitle({ onUnhandledError, methodId: method.id }) : subtitle;
        return node ? react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-subtitleContainer" }, node) : null;
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('paymentProviderHeader-container', { 'paymentProviderHeader-container-googlePay': method.id.includes('googlepay') }) },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-nameContainer", "data-test": `payment-method-${method.id}` },
            logoUrl && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", { alt: `${methodName} icon`, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('paymentProviderHeader-img', { 'paymentProviderHeader-img-applePay': method.id === 'applepay' }, { 'paymentProviderHeader-img-googlePay': method.id.includes('googlepay') }), "data-test": "payment-method-logo", src: logoUrl })),
            titleText && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('paymentProviderHeader-name', { 'sub-header': themeV2 }), "data-test": "payment-method-name" }, titleText)),
            getSubtitle()),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-cc" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { cardTypes: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)(method.supportedCards.map(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"])), selectedCardType: getSelectedCardType() }))));
};
function mapToCheckoutProps({ checkoutState }) {
    const { data: { getConfig, getInstruments }, } = checkoutState;
    const config = getConfig();
    const instruments = getInstruments() || [];
    if (!config) {
        return null;
    }
    const storeCountryCode = config.storeProfile.storeCountryCode;
    return {
        instruments,
        checkoutSettings: config.checkoutSettings,
        storeCountryCode,
        cdnBasePath: config.cdnPath,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_11__["default"])(mapToCheckoutProps)((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(PaymentMethodTitle)))));


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts":
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["ApplePay"] = "applepay";
    PaymentMethodType["Barclaycard"] = "barclaycard";
    PaymentMethodType["CreditCard"] = "credit-card";
    PaymentMethodType["GooglePay"] = "googlepay";
    PaymentMethodType["PayWithGoogle"] = "paywithgoogle";
    PaymentMethodType["MultiOption"] = "multi-option";
    PaymentMethodType["Paypal"] = "paypal";
    PaymentMethodType["PaypalCredit"] = "paypal-credit";
    PaymentMethodType["PaypalVenmo"] = "paypal-venmo";
    PaymentMethodType["VisaCheckout"] = "visa-checkout";
})(PaymentMethodType || (PaymentMethodType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethodType);


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodV2.tsx":
/*!*************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodV2.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormProvider.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LazyContainer.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/withForm.tsx");
/* harmony import */ var _createPaymentFormService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../createPaymentFormService */ "./packages/core/src/app/payment/createPaymentFormService.ts");
/* harmony import */ var _resolvePaymentMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resolvePaymentMethod */ "./packages/core/src/app/payment/resolvePaymentMethod.ts");
/* harmony import */ var _withPayment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../withPayment */ "./packages/core/src/app/payment/withPayment.tsx");










const PaymentMethodV1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | payment-method-v1 */ "payment-method-v1").then(__webpack_require__.bind(__webpack_require__, /*! ./PaymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethod.tsx")));
const PaymentMethodContainer = ({ formik: formikContext, checkoutService, checkoutState, disableSubmit, hidePaymentSubmitButton, isEmbedded, isSubmitted, isUsingMultiShipping, language, method, onUnhandledError, setSubmit, setSubmitted, setValidationSchema, }) => {
    const formContext = {
        isSubmitted,
        setSubmitted,
    };
    const paymentContext = {
        disableSubmit,
        hidePaymentSubmitButton,
        setSubmit,
        setValidationSchema,
    };
    const ResolvedPaymentMethod = (0,_resolvePaymentMethod__WEBPACK_IMPORTED_MODULE_8__["default"])({
        id: method.id,
        gateway: method.gateway,
        type: method.type,
    });
    if (!ResolvedPaymentMethod) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaymentMethodV1, { isEmbedded: isEmbedded, isUsingMultiShipping: isUsingMultiShipping, method: method, onUnhandledError: onUnhandledError })));
    }
    const paymentForm = (0,_createPaymentFormService__WEBPACK_IMPORTED_MODULE_7__["default"])(formikContext, formContext, paymentContext);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.PaymentFormProvider, { paymentForm: paymentForm },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResolvedPaymentMethod, { checkoutService: checkoutService, checkoutState: checkoutState, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_4__["default"])((props) => props)((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_withPayment__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_form__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_common_form__WEBPACK_IMPORTED_MODULE_5__["default"])(PaymentMethodContainer))))));


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodDisplayName.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/getPaymentMethodDisplayName.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentMethodDisplayName)
/* harmony export */ });
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");

function getPaymentMethodDisplayName(language) {
    return (method) => {
        const { displayName } = method.config;
        const isCreditCard = (displayName === null || displayName === void 0 ? void 0 : displayName.toLowerCase()) === 'credit card';
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].PaypalCommerceCredit ||
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].BigCommercePaymentsPayLater ||
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].BraintreePaypalCredit) {
            const { payPalCreditProductBrandName } = method.initializationData;
            if (payPalCreditProductBrandName) {
                return payPalCreditProductBrandName.credit || payPalCreditProductBrandName;
            }
            return 'Pay Later';
        }
        if ((isCreditCard && method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].AdyenV2) ||
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].AdyenV3) {
            return language.translate('payment.credit_debit_card_text');
        }
        if (isCreditCard) {
            return language.translate('payment.credit_card_text');
        }
        return displayName || '';
    };
}


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts":
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentMethodName),
/* harmony export */   getTranslatedPaymentMethodName: () => (/* binding */ getTranslatedPaymentMethodName)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentMethodType */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");



/**
 * Always return the translated name of a payment method unless it is a
 * multi-option payment method or it doesn't have any translation. It's possible
 * to translate the gateway name of multi-option methods, i.e.: AfterPay.
 * However, because the options provided by the gateway can vary a lot, i.e.:
 * "Pay by Installment", therefore it's not feasible to do the translation on
 * the UI level.
 */
function getPaymentMethodName(language) {
    return (method) => {
        let name = getTranslatedPaymentMethodName(language)(method);
        if (!name || method.method === _PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].MultiOption) {
            name = method.config && method.config.displayName;
        }
        if (!name) {
            name = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(method, 'initializationData.paymentData.cardData.digital_wallet_type') ||
                method.method ||
                method.id);
        }
        return name;
    };
}
function getTranslatedPaymentMethodName(language) {
    return (method) => {
        const translations = {
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Affirm]: language.translate('payment.affirm_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Afterpay]: language.translate('payment.afterpay_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].AmazonPay]: language.translate('payment.amazon_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Bolt]: language.translate('payment.bolt_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Clearpay]: language.translate('payment.clearpay_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].GooglePay]: language.translate('payment.google_pay_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Klarna]: language.translate('payment.klarna_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].Paypal]: language.translate('payment.paypal_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].PaypalCredit]: language.translate('payment.paypal_credit_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].VisaCheckout]: language.translate('payment.vco_name_text'),
        };
        return translations[method.id] || translations[method.method];
    };
}


/***/ }),

/***/ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts":
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUniquePaymentMethodId),
/* harmony export */   parseUniquePaymentMethodId: () => (/* binding */ parseUniquePaymentMethodId)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function getUniquePaymentMethodId(methodId, gatewayId) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)([gatewayId, methodId]).join('-');
}
function parseUniquePaymentMethodId(value) {
    const [gatewayId, methodId] = value.includes('-') ? value.split('-') : [undefined, value];
    return { gatewayId, methodId };
}


/***/ }),

/***/ "./packages/core/src/app/payment/resolvePaymentMethod.ts":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/payment/resolvePaymentMethod.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resolvePaymentMethod)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/resolver */ "./packages/core/src/app/common/resolver/resolveLazyComponent.ts");
/* harmony import */ var _generated_paymentIntegrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/paymentIntegrations */ "./packages/core/src/app/generated/paymentIntegrations/index.ts");



function resolvePaymentMethod(query) {
    const { ComponentRegistry } = _generated_paymentIntegrations__WEBPACK_IMPORTED_MODULE_2__, allExports = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_generated_paymentIntegrations__WEBPACK_IMPORTED_MODULE_2__, ["ComponentRegistry"]);
    const components = Object.fromEntries(Object.keys(ComponentRegistry).map((key) => [key, allExports[key]]));
    return (0,_common_resolver__WEBPACK_IMPORTED_MODULE_1__["default"])(query, components, ComponentRegistry);
}


/***/ }),

/***/ "./packages/core/src/app/payment/storeCredit/StoreCreditField.tsx":
/*!************************************************************************!*\
  !*** ./packages/core/src/app/payment/storeCredit/StoreCreditField.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withCurrency.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/CheckboxInput.tsx");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/tooltip */ "./packages/core/src/app/ui/tooltip/Tooltip.tsx");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/tooltip */ "./packages/core/src/app/ui/tooltip/TooltipTrigger.tsx");







const StoreCreditField = ({ availableStoreCredit, currency, name, onChange = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, usableStoreCredit, isStoreCreditApplied, }) => {
    const { checkoutState: { statuses: { isSubmittingOrder } } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event) => onChange(event.target.checked), [onChange]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.apply_store_credit_before_action" }),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], { testId: "payment-store-credit-tooltip" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: {
                        storeCredit: currency.toCustomerCurrency(availableStoreCredit),
                    }, id: "redeemable.store_credit_available_text" })) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])() }, currency.toCustomerCurrency(usableStoreCredit))),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.apply_store_credit_after_action" }))), [availableStoreCredit, currency, usableStoreCredit]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_6__["default"], { checked: isStoreCreditApplied, disabled: isSubmittingOrder(), id: name, label: labelContent, name: name, onChange: handleChange, value: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"])(StoreCreditField));


/***/ }),

/***/ "./packages/core/src/app/payment/storeCredit/StoreCreditOverlay.tsx":
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/storeCredit/StoreCreditOverlay.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");


const StoreCreditOverlay = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "storeCreditOverlay", "data-test": "payment-store-credit-overlay" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "storeCreditOverlay-text" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.payment_not_required_text" }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreCreditOverlay);


/***/ }),

/***/ "./packages/core/src/app/payment/withPayment.tsx":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/payment/withPayment.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/legacy-hoc */ "./packages/legacy-hoc/src/createInjectHoc.tsx");
/* harmony import */ var _PaymentContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentContext */ "./packages/core/src/app/payment/PaymentContext.tsx");


const withPayment = (0,_bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__["default"])(_PaymentContext__WEBPACK_IMPORTED_MODULE_1__["default"], { displayNamePrefix: 'WithPayment' });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPayment);


/***/ }),

/***/ "./packages/core/src/app/termsConditions/TermsConditions.tsx":
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/termsConditions/TermsConditions.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsConditions: () => (/* binding */ TermsConditions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermsConditionsField */ "./packages/core/src/app/termsConditions/TermsConditionsField.tsx");


const TermsConditions = ({ termsConditionsUrl, termsConditionsText = '', }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, termsConditionsUrl ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "terms", type: _TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsType.Link, url: termsConditionsUrl })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "terms", terms: termsConditionsText, type: _TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsType.TextArea }))));


/***/ }),

/***/ "./packages/core/src/app/termsConditions/TermsConditionsField.tsx":
/*!************************************************************************!*\
  !*** ./packages/core/src/app/termsConditions/TermsConditionsField.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsConditionsType: () => (/* binding */ TermsConditionsType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/parseAnchor.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/FormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/CheckboxFormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/TextArea.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/ModalLink.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/ModalHeader.tsx");
/* harmony import */ var _ui_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/text */ "./packages/core/src/app/ui/text/MultiLineText.tsx");






var TermsConditionsType;
(function (TermsConditionsType) {
    TermsConditionsType["Link"] = "link";
    TermsConditionsType["TextArea"] = "textarea";
    TermsConditionsType["Modal"] = "modal";
})(TermsConditionsType || (TermsConditionsType = {}));
const BaseTermsConditionsModalCheckboxField = ({ language, name, terms }) => {
    const translatedLabel = language.translate('terms_and_conditions.agreement_with_link_text', {
        url: '',
    });
    const parsedLabel = (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(translatedLabel);
    const labelContent = parsedLabel ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        parsedLabel[0],
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_10__["default"], { body: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_text__WEBPACK_IMPORTED_MODULE_12__["default"], null, terms), header: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_11__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "terms_and_conditions.heading" })) }, parsedLabel[1]),
        parsedLabel[2])) : (translatedLabel);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_7__["default"], { labelContent: labelContent, name: name });
};
const TermsConditionsModalCheckboxField = (0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"])(BaseTermsConditionsModalCheckboxField);
const TermsConditionsCheckboxField = ({ name, url, }) => {
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => url ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { url }, id: "terms_and_conditions.agreement_with_link_text" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "terms_and_conditions.agreement_text" })), [url]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_7__["default"], { labelContent: labelContent, name: name });
};
const TermsConditionsTextField = ({ name, terms, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_8__["default"], { defaultValue: terms, name: field.name, readOnly: true }), [terms]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_6__["default"], { input: renderInput, name: `${name}Text` });
};
const TermsConditionsFieldset = (props) => {
    const { type } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "checkout-terms", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_9__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "terms_and_conditions.terms_and_conditions_heading" })) },
        isTermsConditionsTextArea(props) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TermsConditionsTextField, Object.assign({}, props)),
        isTermsConditionModal(props) && type === TermsConditionsType.Modal ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TermsConditionsModalCheckboxField, Object.assign({}, props))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TermsConditionsCheckboxField, Object.assign({}, props)))));
};
function isTermsConditionsTextArea(props) {
    return props.type === TermsConditionsType.TextArea;
}
function isTermsConditionModal(props) {
    return props.type === TermsConditionsType.Modal;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TermsConditionsFieldset));


/***/ }),

/***/ "./packages/core/src/app/termsConditions/getTermsConditionsValidationSchema.ts":
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/termsConditions/getTermsConditionsValidationSchema.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTermsConditionsValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

function getTermsConditionsValidationSchema({ isTermsConditionsRequired, language, }) {
    const schemaFields = {};
    if (isTermsConditionsRequired) {
        schemaFields.terms = (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().oneOf([true], language.translate('terms_and_conditions.agreement_required_error'));
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)(schemaFields);
}


/***/ }),

/***/ "./packages/core/src/app/ui/form/CheckboxFormField.tsx":
/*!*************************************************************!*\
  !*** ./packages/core/src/app/ui/form/CheckboxFormField.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicFormField */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxInput */ "./packages/core/src/app/ui/form/CheckboxInput.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormFieldError */ "./packages/core/src/app/ui/form/FormFieldError.tsx");





const CheckboxFormField = ({ additionalClassName, disabled = false, labelContent, onChange, name, id, testId, themeV2 = false, }) => {
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { checked: !!field.value, disabled: disabled, id: id || field.name, label: labelContent, testId: testId, themeV2: themeV2 })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_4__["default"], { errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name)}-field-error-message` }))), [disabled, id, labelContent, name]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: additionalClassName, name: name, onChange: onChange, render: renderField }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CheckboxFormField));


/***/ }),

/***/ "./packages/core/src/app/ui/form/CheckboxInput.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/form/CheckboxInput.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./packages/core/src/app/ui/form/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./packages/core/src/app/ui/form/Label.tsx");





const CheckboxInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, id, testId, themeV2 = false } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id", "testId", "themeV2"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', additionalClassName), id: id, ref: ref, testId: testId, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: themeV2 ? 'body-regular' : '', htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ }),

/***/ "./packages/core/src/app/ui/form/Checklist.tsx":
/*!*****************************************************!*\
  !*** ./packages/core/src/app/ui/form/Checklist.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecklistContext: () => (/* binding */ ChecklistContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/accordion/Accordion.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");





const ChecklistContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(undefined);
const Checklist = (_a) => {
    var { formik: { setFieldValue }, name, onSelect = lodash__WEBPACK_IMPORTED_MODULE_1__.noop } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["formik", "name", "onSelect"]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        return () => {
            setFieldValue(name, '');
        };
    }, []);
    const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value) => {
        setFieldValue(name, value);
        onSelect(value);
    }, [name, onSelect, setFieldValue]);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => ({ name }), [name]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ChecklistContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { className: "form-checklist optimizedCheckout-form-checklist", onSelect: handleSelect }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_4__["default"])((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Checklist)));


/***/ }),

/***/ "./packages/core/src/app/ui/form/ChecklistItem.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/form/ChecklistItem.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/accordion/AccordionItem.tsx");
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicFormField */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _Checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Checklist */ "./packages/core/src/app/ui/form/Checklist.tsx");
/* harmony import */ var _ChecklistItemInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChecklistItemInput */ "./packages/core/src/app/ui/form/ChecklistItemInput.tsx");








const ChecklistItem = (_a) => {
    var { isDisabled, value, content, htmlId = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(value), label } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["isDisabled", "value", "content", "htmlId", "label"]);
    const { name = '' } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Checklist__WEBPACK_IMPORTED_MODULE_6__.ChecklistContext) || {};
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((isSelected) => ({ field }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ChecklistItemInput__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, field, { disabled: isDisabled, id: htmlId, isSelected: field.value === value, value: value }), label instanceof Function ? label(isSelected) : label))), [htmlId, isDisabled, label, value]);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((onToggle) => (selectedValue) => {
        if (value === selectedValue) {
            onToggle(value);
        }
    }), []);
    const renderHeaderContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ isSelected, onToggle }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "form-checklist-option", name: name, onChange: handleChange(onToggle), render: renderInput(isSelected) })), [handleChange, name, renderInput]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { bodyClassName: "form-checklist-body", className: "form-checklist-item optimizedCheckout-form-checklist-item", classNameSelected: "form-checklist-item--selected optimizedCheckout-form-checklist-item--selected", headerClassName: "form-checklist-header", headerClassNameSelected: "form-checklist-header--selected", headerContent: renderHeaderContent, itemId: value }), content));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(ChecklistItem));


/***/ }),

/***/ "./packages/core/src/app/ui/form/ChecklistItemInput.tsx":
/*!**************************************************************!*\
  !*** ./packages/core/src/app/ui/form/ChecklistItemInput.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./packages/core/src/app/ui/form/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./packages/core/src/app/ui/form/Label.tsx");




const ChecklistItemInput = (_a) => {
    var { id, isSelected, children } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["id", "isSelected", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, { checked: isSelected, className: "form-checklist-checkbox optimizedCheckout-form-checklist-checkbox", id: id, type: "radio" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], { htmlFor: id }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChecklistItemInput);


/***/ }),

/***/ "./packages/core/src/app/ui/form/CustomChecklistItem.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/ui/form/CustomChecklistItem.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CustomChecklistItem = ({ content, htmlId, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "form-checklist-item optimizedCheckout-form-checklist-item custom-checklist-item", id: htmlId }, content));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CustomChecklistItem));


/***/ }),

/***/ "./packages/core/src/app/ui/form/TextArea.tsx":
/*!****************************************************!*\
  !*** ./packages/core/src/app/ui/form/TextArea.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const TextArea = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, testId, className, isFloatingLabelEnabled } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "testId", "className", "isFloatingLabelEnabled"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", Object.assign({}, rest, { className: className ||
            classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-textarea': isFloatingLabelEnabled }, 'form-input', 'optimizedCheckout-form-input', additionalClassName), "data-test": testId, ref: ref })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ }),

/***/ "./packages/core/src/app/ui/form/withForm.tsx":
/*!****************************************************!*\
  !*** ./packages/core/src/app/ui/form/withForm.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/legacy-hoc */ "./packages/legacy-hoc/src/createInjectHoc.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");


const withForm = (0,_bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__["default"])(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__["default"], { displayNamePrefix: 'WithForm' });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withForm);


/***/ }),

/***/ "./packages/core/src/app/ui/modal/ModalLink.scss":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/ui/modal/ModalLink.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./ModalLink.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/ui/modal/ModalLink.scss");

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

/***/ }),

/***/ "./packages/core/src/app/ui/modal/ModalLink.tsx":
/*!******************************************************!*\
  !*** ./packages/core/src/app/ui/modal/ModalLink.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./packages/core/src/app/ui/modal/Modal.tsx");
/* harmony import */ var _ModalLink_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalLink.scss */ "./packages/core/src/app/ui/modal/ModalLink.scss");
/* harmony import */ var _ModalLink_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ModalLink_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ModalTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalTrigger */ "./packages/core/src/app/ui/modal/ModalTrigger.tsx");







const ModalLink = ({ children, body, header }) => {
    const renderModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { additionalBodyClassName: "modal--withText", footer: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: props.onRequestClose, size: _button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.Small },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "common.ok_action" })), header: header, shouldShowCloseButton: true }), body)), [header, body]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModalTrigger__WEBPACK_IMPORTED_MODULE_6__["default"], { modal: renderModal }, ({ onClick }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(onClick) }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalLink);


/***/ }),

/***/ "./packages/core/src/app/ui/modal/ModalTrigger.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/modal/ModalTrigger.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalTrigger = ({ children, modal }) => {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const canHandleEventRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        canHandleEventRef.current = true;
        return () => {
            canHandleEventRef.current = false;
        };
    }, []);
    const handleOpen = () => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(true);
    };
    const handleClose = () => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(false);
    };
    const handleKeyOpen = (keyboardEvent) => {
        if (keyboardEvent.key === 'Enter') {
            handleOpen();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        children({
            onClick: handleOpen,
            onKeyPress: handleKeyOpen,
        }),
        modal({
            isOpen,
            onRequestClose: handleClose,
        })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);


/***/ }),

/***/ "./packages/core/src/app/ui/text/MultiLineText.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/text/MultiLineText.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MultiLineText = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children.split('\n').map((line, key) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: key },
    line,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiLineText);


/***/ }),

/***/ "./packages/core/src/app/ui/tooltip/Tooltip.scss":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/ui/tooltip/Tooltip.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./Tooltip.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/ui/tooltip/Tooltip.scss");

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

/***/ }),

/***/ "./packages/core/src/app/ui/tooltip/Tooltip.tsx":
/*!******************************************************!*\
  !*** ./packages/core/src/app/ui/tooltip/Tooltip.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.scss */ "./packages/core/src/app/ui/tooltip/Tooltip.scss");
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_scss__WEBPACK_IMPORTED_MODULE_1__);


const Tooltip = ({ children, testId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip tooltip--basic", "data-test": testId }, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ "./packages/core/src/app/ui/tooltip/TooltipTrigger.tsx":
/*!*************************************************************!*\
  !*** ./packages/core/src/app/ui/tooltip/TooltipTrigger.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Reference.js");


const TooltipTrigger = ({ placement = 'bottom', tooltip, children, }) => {
    const [shouldShow, setShouldShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleShow = () => {
        setShouldShow(true);
    };
    const handleHide = () => {
        setShouldShow(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_2__.Manager, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__.Reference, null, ({ ref }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { onBlur: handleHide, onFocus: handleShow, onMouseEnter: handleShow, onMouseLeave: handleHide, ref: ref }, children))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_1__.Popper, { modifiers: [
                { name: 'hide', enabled: false },
                { name: 'flip', enabled: false },
                { name: 'preventOverflow', enabled: false },
            ], placement: placement }, ({ ref, style }) => shouldShow && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: ref, style: style }, tooltip)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipTrigger);


/***/ }),

/***/ "./packages/dom-utils/src/parseAnchor.ts":
/*!***********************************************!*\
  !*** ./packages/dom-utils/src/parseAnchor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseAnchor)
/* harmony export */ });
function parseAnchor(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    const anchor = div.querySelector('a');
    if (!anchor) {
        return [];
    }
    const anchorSiblings = div.innerHTML.split(anchor.outerHTML);
    return [anchorSiblings[0], anchor.text, anchorSiblings[1]];
}


/***/ }),

/***/ "./packages/paypal-utils/src/BraintreePaypalCreditBanner.tsx":
/*!*******************************************************************!*\
  !*** ./packages/paypal-utils/src/BraintreePaypalCreditBanner.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");



const BraintreePaypalCreditBanner = ({ methodId, containerId, onUnhandledError, }) => {
    const { checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            void checkoutService.initializePayment({
                methodId,
                integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_0__.createBraintreePaypalPaymentStrategy],
                braintree: {
                    bannerContainerId: containerId,
                },
            });
            void checkoutService.deinitializePayment({
                methodId,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
            }
        }
        return () => {
            try {
                void checkoutService.deinitializePayment({
                    methodId,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
                }
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreePaypalCreditBanner);


/***/ }),

/***/ "./packages/paypal-utils/src/PaypalCommerceCreditBanner.tsx":
/*!******************************************************************!*\
  !*** ./packages/paypal-utils/src/PaypalCommerceCreditBanner.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-commerce */ "../checkout-sdk-js/dist/esm/integrations/paypal-commerce.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");



const PaypalCommerceCreditBanner = ({ methodId, containerId, onUnhandledError }) => {
    const { checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            void checkoutService.initializePayment({
                methodId,
                integrations: [
                    _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_0__.createPayPalCommerceCreditPaymentStrategy,
                    _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_0__.createPayPalCommercePaymentStrategy,
                ],
                [methodId]: {
                    bannerContainerId: containerId,
                },
            });
            void checkoutService.deinitializePayment({
                methodId,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaypalCommerceCreditBanner);


/***/ }),

/***/ "./packages/ui/src/accordion/Accordion.tsx":
/*!*************************************************!*\
  !*** ./packages/ui/src/accordion/Accordion.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccordionContext */ "./packages/ui/src/accordion/AccordionContext.tsx");




const Accordion = ({ children, className = 'accordion', defaultSelectedItemId, isDisabled, onSelect = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, }) => {
    const [selectedItemId, setSelectedItemId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultSelectedItemId);
    const handleToggleItem = (id) => {
        if (isDisabled) {
            return;
        }
        setSelectedItemId(id);
        onSelect(id);
    };
    const getContextValue = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoizeOne)((newSelectedItemId) => {
        return {
            onToggle: handleToggleItem,
            selectedItemId: newSelectedItemId,
        };
    });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, { value: getContextValue(selectedItemId) },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: className }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ "./packages/ui/src/accordion/AccordionContext.tsx":
/*!********************************************************!*\
  !*** ./packages/ui/src/accordion/AccordionContext.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({ onToggle: lodash__WEBPACK_IMPORTED_MODULE_0__.noop });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionContext);


/***/ }),

/***/ "./packages/ui/src/accordion/AccordionItem.tsx":
/*!*****************************************************!*\
  !*** ./packages/ui/src/accordion/AccordionItem.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccordionContext */ "./packages/ui/src/accordion/AccordionContext.tsx");




const AccordionItem = ({ bodyClassName = 'accordion-item-body', children, className = 'accordion-item', classNameSelected = 'accordion-item--selected', headerClassName = 'accordion-item-header', headerClassNameSelected = 'accordion-item-header--selected', headerContent, itemId, }) => {
    const { onToggle, selectedItemId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AccordionContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const isSelected = selectedItemId === itemId;
    const transitionEndListener = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node, done) => {
        node.addEventListener('transitionend', ({ target }) => {
            if (target === node) {
                done();
            }
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, { [classNameSelected]: isSelected }) },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(headerClassName, { [headerClassNameSelected]: isSelected }) }, headerContent({ isSelected, onToggle })),
        children ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], { addEndListener: transitionEndListener, classNames: bodyClassName, in: isSelected, mountOnEnter: true, timeout: {}, unmountOnExit: true },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-live": "polite", className: bodyClassName }, children))) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AccordionItem));


/***/ }),

/***/ "./packages/ui/src/icon/CreditCardIcon.tsx":
/*!*************************************************!*\
  !*** ./packages/ui/src/icon/CreditCardIcon.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapFromPaymentMethodCardType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapFromPaymentMethodCardType */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");



const CreditCardIcon = ({ cardType }) => {
    const iconProps = {
        additionalClassName: 'cardIcon-icon',
        size: _withIconContainer__WEBPACK_IMPORTED_MODULE_2__.IconSize.Medium,
        testId: `credit-card-icon-${cardType || 'default'}`,
    };
    const IconComponent = (0,_mapFromPaymentMethodCardType__WEBPACK_IMPORTED_MODULE_1__.getPaymentMethodIconComponent)(cardType);
    return IconComponent ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, Object.assign({}, iconProps)))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cardIcon-icon cardIcon-icon--default icon icon--medium" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardIcon));


/***/ }),

/***/ "./packages/ui/src/icon/CreditCardIconList.tsx":
/*!*****************************************************!*\
  !*** ./packages/ui/src/icon/CreditCardIconList.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./packages/ui/src/icon/CreditCardIcon.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");



const CreditCardIconList = ({ selectedCardType, cardTypes, }) => {
    const filteredCardTypes = (0,___WEBPACK_IMPORTED_MODULE_3__.filterInstrumentTypes)(cardTypes);
    if (!filteredCardTypes.length) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "creditCardTypes-list" }, filteredCardTypes.map((type) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('creditCardTypes-list-item', { 'is-active': selectedCardType === type }, { 'not-active': selectedCardType && selectedCardType !== type }), "data-test": `${type}-icon`, key: type },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cardIcon" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__["default"], { cardType: type })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CreditCardIconList));


/***/ }),

/***/ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts":
/*!**************************************************************!*\
  !*** ./packages/ui/src/icon/mapFromPaymentMethodCardType.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapFromPaymentMethodCardType),
/* harmony export */   filterInstrumentTypes: () => (/* binding */ filterInstrumentTypes),
/* harmony export */   getPaymentMethodIconComponent: () => (/* binding */ getPaymentMethodIconComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const instrumentTypeMap = {
    AMEX: {
        instrument: 'american-express',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-amex */ "icon-card-amex").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardAmex */ "./packages/ui/src/icon/IconCardAmex.tsx"))),
    },
    BITCOIN: {
        instrument: 'bitcoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-bitcoin */ "icon-bitcoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconBitCoin */ "./packages/ui/src/icon/IconBitCoin.tsx"))),
    },
    BITCOIN_CASH: {
        instrument: 'bitcoin-cash',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-bitcoin-cash */ "icon-bitcoin-cash").then(__webpack_require__.bind(__webpack_require__, /*! ./IconBitCoinCash */ "./packages/ui/src/icon/IconBitCoinCash.tsx"))),
    },
    BANCONTACT: {
        instrument: 'bancontact',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-bancontact */ "icon-card-bancontact").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardBancontact */ "./packages/ui/src/icon/IconCardBancontact.tsx"))),
    },
    CARNET: {
        instrument: 'carnet',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-carnet */ "icon-card-carnet").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardCarnet */ "./packages/ui/src/icon/IconCardCarnet.tsx"))),
    },
    CB: {
        instrument: 'cb',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-cb */ "icon-card-cb").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardCB */ "./packages/ui/src/icon/IconCardCB.tsx"))),
    },
    DINERS: {
        instrument: 'diners-club',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-diners-club */ "icon-card-diners-club").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDinersClub */ "./packages/ui/src/icon/IconCardDinersClub.tsx"))),
    },
    DANKORT: {
        instrument: 'dankort',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-dankort */ "icon-card-dankort").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDankort */ "./packages/ui/src/icon/IconCardDankort.tsx"))),
    },
    DISCOVER: {
        instrument: 'discover',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-discover */ "icon-card-discover").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDiscover */ "./packages/ui/src/icon/IconCardDiscover.tsx"))),
    },
    DOGECOIN: {
        instrument: 'dogecoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-dogecoin */ "icon-dogecoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconDogeCoin */ "./packages/ui/src/icon/IconDogeCoin.tsx"))),
    },
    ELECTRON: {
        instrument: 'electron',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-electron */ "icon-card-electron").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardElectron */ "./packages/ui/src/icon/IconCardElectron.tsx"))),
    },
    ELO: {
        instrument: 'elo',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-elo */ "icon-card-elo").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardElo */ "./packages/ui/src/icon/IconCardElo.tsx"))),
    },
    ETHEREUM: {
        instrument: 'ethereum',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-ethereum */ "icon-ethereum").then(__webpack_require__.bind(__webpack_require__, /*! ./IconEthereum */ "./packages/ui/src/icon/IconEthereum.tsx"))),
    },
    HIPER: {
        instrument: 'hiper',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-hipercard */ "icon-card-hipercard").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardHipercard */ "./packages/ui/src/icon/IconCardHipercard.tsx"))),
    },
    JCB: {
        instrument: 'jcb',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-jcb */ "icon-card-jcb").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardJCB */ "./packages/ui/src/icon/IconCardJCB.tsx"))),
    },
    LITECOIN: {
        instrument: 'litecoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-litecoin */ "icon-litecoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconLiteCoin */ "./packages/ui/src/icon/IconLiteCoin.tsx"))),
    },
    MADA: {
        instrument: 'mada',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-mada */ "icon-card-mada").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMada */ "./packages/ui/src/icon/IconCardMada.tsx"))),
    },
    MAESTRO: {
        instrument: 'maestro',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-maestro */ "icon-card-maestro").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMaestro */ "./packages/ui/src/icon/IconCardMaestro.tsx"))),
    },
    MC: {
        instrument: 'mastercard',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-mastercard */ "icon-card-mastercard").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMastercard */ "./packages/ui/src/icon/IconCardMastercard.tsx"))),
    },
    SHIBA_INU: {
        instrument: 'shiba-inu',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-shiba-inu */ "icon-shiba-inu").then(__webpack_require__.bind(__webpack_require__, /*! ./IconShibaInu */ "./packages/ui/src/icon/IconShibaInu.tsx"))),
    },
    TROY: {
        instrument: 'troy',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-troy */ "icon-card-troy").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardTroy */ "./packages/ui/src/icon/IconCardTroy.tsx"))),
    },
    CUP: {
        instrument: 'unionpay',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-unionpay */ "icon-card-unionpay").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardUnionPay */ "./packages/ui/src/icon/IconCardUnionPay.tsx"))),
    },
    USD_COIN: {
        instrument: 'usd-coin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-usd-coin */ "icon-usd-coin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconUsdCoin */ "./packages/ui/src/icon/IconUsdCoin.tsx"))),
    },
    VISA: {
        instrument: 'visa',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-visa */ "icon-card-visa").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardVisa */ "./packages/ui/src/icon/IconCardVisa.tsx"))),
    },
};
function mapFromPaymentMethodCardType(type) {
    var _a;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return ((_a = instrumentTypeMap[type]) === null || _a === void 0 ? void 0 : _a.instrument) || undefined;
}
function getPaymentMethodIconComponent(type) {
    if (!type) {
        return undefined;
    }
    const instrumentType = Object.values(instrumentTypeMap).find((record) => record.instrument === type);
    return instrumentType ? instrumentType.component : undefined;
}
function getSupportedInstrumentTypes() {
    return Object.values(instrumentTypeMap).map((record) => record.instrument);
}
function filterInstrumentTypes(instrumentTypes) {
    const supportedInstrumentTypes = getSupportedInstrumentTypes();
    return instrumentTypes.filter((type) => supportedInstrumentTypes.includes(type));
}


/***/ })

}]);
//# sourceMappingURL=payment.js.map