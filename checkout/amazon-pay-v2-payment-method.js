"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["amazon-pay-v2-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/amazon-pay.js":
/*!**************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/amazon-pay.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAmazonPayV2ButtonStrategy: () => (/* binding */ F),
/* harmony export */   createAmazonPayV2CustomerStrategy: () => (/* binding */ N),
/* harmony export */   createAmazonPayV2PaymentStrategy: () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_request_sender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/index.js");
var o,a;class r extends Error{constructor(t){var e;super(t||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",e=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,e):this.__proto__=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}!function(t){t[t.MissingBillingAddress=0]="MissingBillingAddress",t[t.MissingCart=1]="MissingCart",t[t.MissingCheckout=2]="MissingCheckout",t[t.MissingConsignments=3]="MissingConsignments",t[t.MissingCustomer=4]="MissingCustomer",t[t.MissingCheckoutConfig=5]="MissingCheckoutConfig",t[t.MissingOrder=6]="MissingOrder",t[t.MissingOrderConfig=7]="MissingOrderConfig",t[t.MissingOrderId=8]="MissingOrderId",t[t.MissingPayment=9]="MissingPayment",t[t.MissingPaymentId=10]="MissingPaymentId",t[t.MissingPaymentInstrument=11]="MissingPaymentInstrument",t[t.MissingPaymentMethod=12]="MissingPaymentMethod",t[t.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",t[t.MissingPaymentStatus=14]="MissingPaymentStatus",t[t.MissingPaymentToken=15]="MissingPaymentToken",t[t.MissingShippingAddress=16]="MissingShippingAddress"}(o||(o={}));class s extends r{constructor(t){super(function(t){switch(t){case o.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case o.MissingCart:return"Unable to proceed because cart data is unavailable.";case o.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case o.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case o.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case o.MissingCheckoutConfig:case o.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case o.MissingOrder:return"Unable to proceed because order data is unavailable.";case o.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case o.MissingPayment:return"Unable to proceed because payment data is unavailable.";case o.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case o.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case o.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(t)),this.subtype=t,this.name="MissingDataError",this.type="missing_data"}}function c(t){return e=t.lineItems.physicalItems.filter(t=>!t.addedByPromotion),(0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(e,(t,e)=>t+e.quantity,0);// removed by dead control flow
 var e; }function u(t,e){if(null==t)throw e?e():new Error("An unexpected error has occurred.");return t}!function(t){t[t.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",t[t.CustomerNotInitialized=1]="CustomerNotInitialized",t[t.PaymentNotInitialized=2]="PaymentNotInitialized",t[t.ShippingNotInitialized=3]="ShippingNotInitialized",t[t.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(a||(a={}));class d extends r{constructor(t){super(function(t){switch(t){case a.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case a.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case a.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case a.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(t)),this.subtype=t,this.name="NotInitializedError",this.type="not_initialized"}}const h={de:"eu",jp:"fe",uk:"eu",us:"na"};var l,y,m,p,g,P;!function(t){t.en_US="en_US",t.en_GB="en_GB",t.de_DE="de_DE",t.fr_FR="fr_FR",t.it_IT="it_IT",t.es_ES="es_ES",t.ja_JP="ja_JP"}(l||(l={})),function(t){t.Home="Home",t.Product="Product",t.Cart="Cart",t.Checkout="Checkout",t.Other="Other"}(y||(y={})),function(t){t.USD="USD",t.EUR="EUR",t.GBP="GBP",t.JPY="JPY"}(m||(m={})),function(t){t.PayAndShip="PayAndShip",t.PayOnly="PayOnly"}(p||(p={})),function(t){t.Gold="Gold",t.LightGray="LightGray",t.DarkGray="DarkGray"}(g||(g={})),function(t){t.C0001="C0001"}(P||(P={}));var f=function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}c((i=i.apply(t,e||[])).next())})};class b{constructor(t){this.amazonPayV2ScriptLoader=t}initialize(t){return f(this,void 0,void 0,function*(){this.amazonPayV2SDK=yield this.amazonPayV2ScriptLoader.load(t),this.buttonParentContainer=this.buttonParentContainer||this.createAmazonPayButtonParentContainer()})}deinitialize(){var t;return this.amazonPayV2Button=void 0,null===(t=this.buttonParentContainer)||void 0===t||t.remove(),this.buttonParentContainer=void 0,this.amazonPayV2SDK=void 0,Promise.resolve()}bindButton(t,e,n){this.getAmazonPayV2SDK().Pay.bindChangeAction(`#${t}`,{amazonCheckoutSessionId:e,changeAction:n})}createButton(t,e){this.amazonPayV2Button=this.getAmazonPayV2SDK().Pay.renderButton(`#${t}`,e)}prepareCheckout(t){const e=this.prepareRequestConfig(t);this.getAmazonPayV2Button().onClick(()=>{this.getAmazonPayV2Button().initCheckout(e)})}prepareCheckoutWithCreationRequestConfig(t){this.getAmazonPayV2Button().onClick(()=>f(this,void 0,void 0,function*(){const e=yield t();if(e){const t=this.prepareRequestConfig(e.createCheckoutSessionConfig,e.estimatedOrderAmount,e.productType);this.getAmazonPayV2Button().initCheckout(t)}}))}signout(){return f(this,void 0,void 0,function*(){return this.amazonPayV2SDK&&this.amazonPayV2SDK.Pay.signout(),Promise.resolve()})}renderAmazonPayButton({buttonColor:t,checkoutState:e,containerId:n,decoupleCheckoutInitiation:i=!1,methodId:o,options:a,placement:r,isButtonMicroTextDisabled:s=!1}){const c=document.querySelector(`#${n}`);if(!c)return;const{id:u}=c.appendChild(this.getButtonParentContainer());a&&s&&(a.design=P.C0001);const d=null!=a?a:this.getAmazonPayV2ButtonOptions(e,o,r,i,t);return this.createButton(u,d),this.getButtonParentContainer()}updateBuyNowFlowFlag(t){this.isBuyNowFlow=Boolean(t)}isPh4Enabled(t,e){const n=!!t["PROJECT-3483.amazon_pay_ph4"],i=!!t["INT-6885.amazon_pay_ph4_us_only"];return n&&i?"US"===e:n}prepareRequestConfig(t,e,n){const{publicKeyId:i}=t,o=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}(t,["publicKeyId"]);return Object.assign(Object.assign({createCheckoutSessionConfig:this.isEnvironmentSpecific(i)?o:t},e&&{estimatedOrderAmount:e}),n&&{productType:n})}createAmazonPayButtonParentContainer(){const t=Math.random().toString(16).substr(-4),e=document.createElement("div");return e.id=`amazonpay_button_parent_container_${t}`,e}getAmazonPayV2ButtonOptions(t,e,n,i=!1,a=g.Gold){var r;const{getCart:u,getCheckout:d,getStoreConfigOrThrow:h,getPaymentMethodOrThrow:l}=this.getCheckoutState(t),{config:{merchantId:y,testMode:m},initializationData:f}=l(e);if(!f)throw new s(o.MissingPaymentMethod);const{checkoutLanguage:b,checkoutSessionMethod:v,createCheckoutSessionConfig:C,extractAmazonCheckoutSessionId:z,ledgerCurrency:w,publicKeyId:S="",isButtonMicroTextDisabled:I}=f;if(!y||!w)throw new s(o.MissingPaymentMethod);const _=Object.assign({merchantId:y,ledgerCurrency:w,checkoutLanguage:b,placement:n,buttonColor:a},I?{design:P.C0001}:{});if(this.isBuyNowFlow)return Object.assign(Object.assign({},_),{sandbox:!!m});const O=u();_.productType=O&&0===c(O)?p.PayOnly:p.PayAndShip;const{checkoutSettings:{features:k},storeProfile:{shopPath:M,storeCountryCode:B}}=h();if(this.isPh4Enabled(k,B)){if(!C)throw new s(o.MissingPaymentMethod);const t=null===(r=d())||void 0===r?void 0:r.outstandingBalance.toString(),e=null==O?void 0:O.currency.code,n=Object.assign({},_);let a;return this.isEnvironmentSpecific(S)?(n.publicKeyId=S,a=C):(n.sandbox=!!m,a=Object.assign(Object.assign({},C),{publicKeyId:S})),i||(n.createCheckoutSessionConfig=a),t&&e&&(n.estimatedOrderAmount={amount:t,currencyCode:e}),n}const A={method:v,url:`${M}/remote-checkout/${e}/payment-session`,extractAmazonCheckoutSessionId:z};return Object.assign(Object.assign({},_),{createCheckoutSession:A,sandbox:!!m})}isEnvironmentSpecific(t){return/^(SANDBOX|LIVE)/.test(t)}getAmazonPayV2SDK(){return this.getOrThrow(this.amazonPayV2SDK)}getButtonParentContainer(){return this.getOrThrow(this.buttonParentContainer)}getAmazonPayV2Button(){return this.getOrThrow(this.amazonPayV2Button)}getOrThrow(t){return u(t,()=>new d(a.PaymentNotInitialized))}getCheckoutState(t){return"object"==typeof(e=t)&&null!==e&&"cart"in e&&"checkout"in e&&"config"in e&&"paymentMethods"in e?{getCart:t.cart.getCart,getCheckout:t.checkout.getCheckout,getStoreConfigOrThrow:t.config.getStoreConfigOrThrow,getPaymentMethodOrThrow:e=>t.paymentMethods.getPaymentMethodOrThrow(e)}:t;// removed by dead control flow
 var e; }}class v extends r{constructor(t){super(t||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class C{constructor(t,e=window){this.scriptLoader=t,this.windowWithAmazonPay=e}load(t){return e=this,n=void 0,o=function*(){const{initializationData:e}=t,n=(null==e?void 0:e.region)||"us",i=h[n];if(yield this.scriptLoader.loadScript(`https://static-${i}.payments-amazon.com/checkout.js`),!this.windowWithAmazonPay.amazon)throw new v;return this.windowWithAmazonPay.amazon},new((i=void 0)||(i=Promise))(function(t,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i(function(t){t(n)})).then(r,s)}c((o=o.apply(e,n||[])).next())});// removed by dead control flow
 var e, n, i, o; }}function z(){return new b(new C((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)()))}function w(t,e){return Object.assign(t,{resolveIds:e})}class S extends r{constructor(t){super(t||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class I extends S{constructor(t){let e="Unable to submit payment for the order because the payload is invalid.";t&&(e=`${e} Make sure the following fields are provided correctly: ${t.join(", ")}.`),super(e),this.name="PaymentArgumentInvalidError"}}class _ extends r{constructor(t){super(t||"Payment process was cancelled."),this.name="PaymentMethodCancelledError",this.type="payment_cancelled"}}class O extends r{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}var k=function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}c((i=i.apply(t,e||[])).next())})};class M{constructor(t,e){this.paymentIntegrationService=t,this.amazonPayV2PaymentProcessor=e}initialize(t){return k(this,void 0,void 0,function*(){const{methodId:e,amazonpay:n}=t;if(!e)throw new S('Unable to proceed because "methodId" argument is not provided.');const i=this.paymentIntegrationService.getState(),{features:o}=i.getStoreConfigOrThrow().checkoutSettings,a=i.getPaymentMethodOrThrow(e),r=a.initializationData||{},{paymentToken:s="",region:c="",isButtonMicroTextDisabled:u}=r;if(yield this.amazonPayV2PaymentProcessor.initialize(a),this._isReadyToPay(s))(null==n?void 0:n.editButtonId)&&this._bindEditButton(n.editButtonId,s,"changePayment",this._isModalFlow(c));else{const{id:t}=this._createContainer();if(this._amazonPayButton=this.amazonPayV2PaymentProcessor.renderAmazonPayButton({checkoutState:i,containerId:t,decoupleCheckoutInitiation:this._isOneTimeTransaction(o,c.toUpperCase()),methodId:e,placement:y.Checkout,isButtonMicroTextDisabled:u}),!this._amazonPayButton)throw new S("Unable to render the Amazon Pay button to an invalid HTML container element.")}})}execute(t,n){return k(this,void 0,void 0,function*(){const{payment:i}=t;if(!i)throw new I(["payment"]);const{methodId:o}=i,a=this.paymentIntegrationService.getState(),{features:r}=a.getStoreConfigOrThrow().checkoutSettings,s=a.getPaymentMethodOrThrow(o).initializationData||{},{paymentToken:c="",region:u=""}=s;if(this._isReadyToPay(c)||this._isOneTimeTransaction(r,u.toUpperCase())){const e={methodId:o,paymentData:{nonce:c||"apb"}};yield this.paymentIntegrationService.submitOrder(t,n);try{return void(yield this.paymentIntegrationService.submitPayment(e))}catch(t){if(!((t=>"object"==typeof t&&null!==t&&"body"in t)(t)&&(d=t.body,"object"==typeof d&&null!==d&&"status"in d&&"additional_action_required"in d&&"additional_action_required"===d.status&&"data"in d.additional_action_required&&"redirect_url"in d.additional_action_required.data&&"string"==typeof d.additional_action_required.data.redirect_url)))throw t;const{additional_action_required:e}=t.body,{redirect_url:n}=e.data;if(c)return new Promise(()=>window.location.assign(n));this.amazonPayV2PaymentProcessor.prepareCheckout(JSON.parse(n))}}var d;return this._getAmazonPayButton().click(),this._isModalFlow(u)?new Promise((t,e)=>{const n=()=>{window.removeEventListener("focus",n),e(new _("Shopper needs to login to Amazonpay to continue"))};window.addEventListener("focus",n)}):new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)})}finalize(){return Promise.reject(new O)}deinitialize(){return k(this,void 0,void 0,function*(){yield this.amazonPayV2PaymentProcessor.deinitialize(),this._amazonPayButton=void 0})}_bindEditButton(t,e,n,i){const o=document.getElementById(t);if(o&&o.parentNode){if(!i){const t=o.cloneNode(!0);o.parentNode.replaceChild(t,o),t.addEventListener("click",()=>{this._showLoadingSpinner()})}this.amazonPayV2PaymentProcessor.bindButton(t,e,n)}}_isModalFlow(t){return"us"===t}_showLoadingSpinner(){return k(this,void 0,void 0,function*(){yield this.paymentIntegrationService.widgetInteraction(()=>new Promise(lodash__WEBPACK_IMPORTED_MODULE_1__.noop))})}_createContainer(){let t=document.getElementById("AmazonPayButton");return t||(t=document.createElement("div"),t.id="AmazonPayButton",t.style.display="none",document.body.appendChild(t))}_getAmazonPayButton(){return u(this._amazonPayButton,()=>new d(a.PaymentNotInitialized))}_isOneTimeTransaction(t,e){return this.amazonPayV2PaymentProcessor.isPh4Enabled(t,e)&&t["INT-6399.amazon_pay_apb"]}_isReadyToPay(t){return!!t}}const B=w(t=>new M(t,z()),[{id:"amazonpay"}]);class A extends r{constructor(t){super(t||"Not implemented."),this.name="NotImplementedError",this.type="not_implemented"}}var T=function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}c((i=i.apply(t,e||[])).next())})};class V{constructor(t,e){this.paymentIntegrationService=t,this.amazonPayV2PaymentProcessor=e}initialize(t){return T(this,void 0,void 0,function*(){const{methodId:e,amazonpay:n}=t;if(!e||!(null==n?void 0:n.container))throw new S('Unable to proceed because "methodId" or "containerId" argument is not provided.');let i;try{i=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e)}catch(t){yield this.paymentIntegrationService.loadPaymentMethod(e),i=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e)}yield this.amazonPayV2PaymentProcessor.initialize(i),this.amazonPayV2PaymentProcessor.renderAmazonPayButton({checkoutState:this.paymentIntegrationService.getState(),containerId:n.container,methodId:e,placement:y.Checkout})})}deinitialize(){return T(this,void 0,void 0,function*(){yield this.amazonPayV2PaymentProcessor.deinitialize()})}signIn(){throw new A('In order to sign in via Amazon, the shopper must click on "Amazon Pay" button.')}signOut(t){return T(this,void 0,void 0,function*(){const e=this.paymentIntegrationService.getState().getPaymentId();e&&(yield this.amazonPayV2PaymentProcessor.signout(),yield this.paymentIntegrationService.remoteCheckoutSignOut(e.providerId,t))})}executePaymentMethodCheckout(t){var e;return null===(e=null==t?void 0:t.continueWithCheckoutCallback)||void 0===e||e.call(t),Promise.resolve()}}const N=w(t=>new V(t,z()),[{id:"amazonpay"}]);class x extends r{constructor(t){super(t||"An unexpected error has occurred during buy now cart creation process. Please try again later."),this.name="BuyNowCartCreationError",this.type="buy_now_cart_creation_error"}}class E extends r{constructor(t){super(t||"An unexpected error has occurred during config creation process. Please try again later."),this.name="AmazonPayV2ConfigCreationError",this.type="amazon_pay_v2_config_creation_error"}}function U(t){return t instanceof Object&&"buyNowInitializeOptions"in t}var j,D=function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}c((i=i.apply(t,e||[])).next())})};class q{constructor(t,e,n){this.paymentIntegrationService=t,this.amazonPayV2PaymentProcessor=e,this.amazonPayV2ConfigRequestSender=n}initialize(t){var e;return D(this,void 0,void 0,function*(){const{methodId:n,containerId:i,amazonpay:o}=t,{buttonColor:a}=o||{};if(!n||!i)throw new S('Unable to proceed because "methodId" or "containerId" argument is not provided.');const{getPaymentMethodOrThrow:r}=this.paymentIntegrationService.getState(),s=r(n),{initializationData:c}=s;yield this.amazonPayV2PaymentProcessor.initialize(s),o||(yield this.paymentIntegrationService.loadDefaultCheckout());const u=U(o)?void 0:o;U(o)&&"function"==typeof(null===(e=o.buyNowInitializeOptions)||void 0===e?void 0:e.getBuyNowCartRequestBody)&&(this._buyNowInitializeOptions=o.buyNowInitializeOptions,this.amazonPayV2PaymentProcessor.updateBuyNowFlowFlag(!0)),this.amazonPayV2PaymentProcessor.renderAmazonPayButton({checkoutState:this.paymentIntegrationService.getState(),containerId:i,methodId:n,options:u,placement:y.Cart,buttonColor:a,isButtonMicroTextDisabled:null==c?void 0:c.isButtonMicroTextDisabled}),this._buyNowInitializeOptions&&this.amazonPayV2PaymentProcessor.prepareCheckoutWithCreationRequestConfig(this._getCheckoutCreationRequestConfig.bind(this))})}deinitialize(){return this.amazonPayV2PaymentProcessor.deinitialize()}_createBuyNowCartOrThrow(){var t,e;return D(this,void 0,void 0,function*(){const n=null===(e=null===(t=this._buyNowInitializeOptions)||void 0===t?void 0:t.getBuyNowCartRequestBody)||void 0===e?void 0:e.call(t);if(!n)throw new s(o.MissingCart);try{return yield this.paymentIntegrationService.createBuyNowCart(n)}catch(t){throw new x}})}_createCheckoutConfig(t){return D(this,void 0,void 0,function*(){try{const e=(yield this.amazonPayV2ConfigRequestSender.createCheckoutConfig(t)).body,{payload:n,public_key:i}=e,o=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}(e,["payload","public_key"]);return Object.assign({payloadJSON:n,publicKeyId:i},o)}catch(t){throw new E}})}_getCheckoutCreationRequestConfig(){return D(this,void 0,void 0,function*(){const t=yield this._createBuyNowCartOrThrow(),e={amount:String(t.baseAmount),currencyCode:t.currency.code};return{createCheckoutSessionConfig:yield this._createCheckoutConfig(t.id),estimatedOrderAmount:e,productType:0===c(t)?p.PayOnly:p.PayAndShip}})}}!function(t){t.Json="application/json",t.JsonV1="application/vnd.bc.v1+json"}(j||(j={}));const R=j,L={"X-Checkout-SDK-Version":"1.867.0"};class K{constructor(t){this._requestSender=t}createCheckoutConfig(t){const e={cartId:t},n=Object.assign({"X-API-INTERNAL":"This API endpoint is for internal use only and may change in the future","Content-Type":R.Json},L);return this._requestSender.post("/api/storefront/payment/amazonpay",{headers:n,body:e})}}const F=w(t=>{const e=(0,_bigcommerce_request_sender__WEBPACK_IMPORTED_MODULE_2__.createRequestSender)(),n=new K(e),o=z();return new q(t,o,n)},[{id:"amazonpay"}]);


/***/ }),

/***/ "./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx":
/*!**********************************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/amazon-pay */ "../checkout-sdk-js/dist/esm/integrations/amazon-pay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-button-integration */ "./packages/checkout-button-integration/src/CheckoutButton.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const beautifyAmazonButton = () => {
    var _a;
    if (!document.querySelector('.checkout-button-container')) {
        return;
    }
    const container = document.querySelector('#amazonpayCheckoutButton > div');
    if (container) {
        const amazonButton = (_a = container.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.amazonpay-button-view1');
        if ((0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(amazonButton)) {
            amazonButton.style.height = '36px';
            return;
        }
    }
    setTimeout(beautifyAmazonButton, 10);
};
const AmazonPayV2Button = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        beautifyAmazonButton();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "AmazonPayContainer" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ integrations: [_bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_0__.createAmazonPayV2CustomerStrategy] }, props))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(AmazonPayV2Button, [{ id: 'amazonpay' }]));


/***/ }),

/***/ "./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/amazon-pay */ "../checkout-sdk-js/dist/esm/integrations/amazon-pay.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");







const AmazonPayV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, paymentForm, method, method: { initializationData: { paymentDescriptor, paymentToken }, } } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "method"]);
    const initializeAmazonPayV2Payment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_1__.createAmazonPayV2PaymentStrategy], amazonpay: {
            editButtonId: 'editButtonId',
        } })), [checkoutService]);
    const reload = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => window.location.reload(), []);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const instruments = checkoutState.data.getInstruments(method) || [];
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { buttonId: "editButtonId", containerId: "paymentWidget", deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, hideWidget: true, initializePayment: initializeAmazonPayV2Payment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignInRequired: false, isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, onSignOut: reload, paymentDescriptor: paymentDescriptor, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldShow: !!paymentToken, shouldShowDescriptor: !!paymentToken, shouldShowEditButton: !!paymentToken, signOut: checkoutService.signOutCustomer })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__["default"])(AmazonPayV2PaymentMethod, [{ id: 'amazonpay' }]));


/***/ }),

/***/ "./packages/amazon-pay-v2-integration/src/index.ts":
/*!*********************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmazonPayV2Button: () => (/* reexport safe */ _AmazonPayV2Button__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   AmazonPayV2PaymentMethod: () => (/* reexport safe */ _AmazonPayV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AmazonPayV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmazonPayV2PaymentMethod */ "./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx");
/* harmony import */ var _AmazonPayV2Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmazonPayV2Button */ "./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx");




/***/ }),

/***/ "./packages/checkout-button-integration/src/CheckoutButton.tsx":
/*!*********************************************************************!*\
  !*** ./packages/checkout-button-integration/src/CheckoutButton.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts":
/*!*****************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isHTMLElement)
/* harmony export */ });
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}


/***/ })

}]);
//# sourceMappingURL=amazon-pay-v2-payment-method.js.map