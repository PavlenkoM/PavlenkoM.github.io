"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["hosted-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/external.js"
/*!************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/external.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createExternalPaymentStrategy: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
class t extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class r extends t{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class n extends r{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class i extends t{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class o{constructor(e,t){this._formPoster=e,this._paymentIntegrationService=t}execute(e,t){return r=this,i=void 0,a=function*(){const{payment:r}=e,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["payment"]),o=r&&r.paymentData;if(!r||!o)throw new n(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(i,t);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},r),{paymentData:o}))}catch(e){if(!(e=>"object"==typeof e&&null!==e&&"body"in e)(e)||"object"!=typeof(a=e.body)||null===a||!("additional_action_required"in a)||!this._isAdditionalActionRequired(e.body))return Promise.reject(e);const{body:{additional_action_required:{data:{redirect_url:t}}}}=e;return new Promise(()=>{this.redirectUrl(t)})}var a},new((o=void 0)||(o=Promise))(function(e,t){function n(e){try{c(a.next(e))}catch(e){t(e)}}function s(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o(function(e){e(r)})).then(n,s)}c((a=a.apply(r,i||[])).next())});// removed by dead control flow
 var r, i, o, a; }finalize(){return Promise.reject(new i)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}redirectUrl(e){return this._formPoster.postForm(e,{})}_isAdditionalActionRequired(e){const{additional_action_required:t,status:r}=e;return"additional_action_required"===r&&t&&"offsite_redirect"===t.type}}const a=(s=t=>new o((0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__.createFormPoster)(),t),c=[{id:"laybuy"}],Object.assign(s,{resolveIds:c}));var s,c;


/***/ },

/***/ "../checkout-sdk-js/dist/esm/integrations/humm.js"
/*!********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/humm.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHummPaymentStrategy: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
class t extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class r extends t{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class o extends r{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class n extends t{constructor(e,t,r){super(r||"Payment cannot be processed for this order, please select another payment method"),this.type="custom_provider_execute_error",this.name=t,this.subtype=e}}class i extends t{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class s{constructor(e,t){this.paymentIntegrationService=e,this.formPoster=t}execute(e,t){var r,i,s,a,c;return i=this,s=void 0,c=function*(){const{payment:i}=e,s=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["payment"]);if(!(null==i?void 0:i.methodId))throw new o(["payment.methodId"]);yield this.paymentIntegrationService.loadPaymentMethod(i.methodId,t);const a=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(i.methodId);if(!(null===(r=a.initializationData)||void 0===r?void 0:r.processable))throw new n("payment.humm_not_processable_error","hummNotProcessableError");yield this.paymentIntegrationService.submitOrder(s,t);try{yield this.paymentIntegrationService.submitPayment({methodId:i.methodId})}catch(e){return this.isOffsiteRedirectResponse(e)?this.handleOffsiteRedirectResponse(e):Promise.reject(e)}},new((a=void 0)||(a=Promise))(function(e,t){function r(e){try{n(c.next(e))}catch(e){t(e)}}function o(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a(function(e){e(n)})).then(r,o)}n((c=c.apply(i,s||[])).next())})}finalize(){return Promise.reject(new i)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}handleOffsiteRedirectResponse(e){const t=e.body.additional_action_required.data.redirect_url,r=e.body.provider_data;return new Promise(e=>{this.formPoster.postForm(t,JSON.parse(r),e)})}isOffsiteRedirectResponse(e){if("object"!=typeof e||null===e)return!1;const t=e;if(!t.body)return!1;const r=t.body;return"additional_action_required"===r.status&&!!r.additional_action_required&&"offsite_redirect"===r.additional_action_required.type&&"string"==typeof r.provider_data}}const a=(c=t=>new s(t,(0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__.createFormPoster)()),d=[{id:"humm"}],Object.assign(c,{resolveIds:d}));var c,d;


/***/ },

/***/ "../checkout-sdk-js/dist/esm/integrations/sezzle.js"
/*!**********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/sezzle.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSezzlePaymentStrategy: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
class t extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class r extends t{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class n extends r{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class i extends t{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class o{constructor(e,t){this._formPoster=e,this._paymentIntegrationService=t}execute(e,t){return r=this,i=void 0,a=function*(){const{payment:r}=e,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["payment"]),o=r&&r.paymentData;if(!r||!o)throw new n(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(i,t);try{yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},r),{paymentData:o}))}catch(e){if(!(e=>"object"==typeof e&&null!==e&&"body"in e)(e)||"object"!=typeof(a=e.body)||null===a||!("additional_action_required"in a)||!this._isAdditionalActionRequired(e.body))return Promise.reject(e);const{body:{additional_action_required:{data:{redirect_url:t}}}}=e;return new Promise(()=>{this.redirectUrl(t)})}var a},new((o=void 0)||(o=Promise))(function(e,t){function n(e){try{c(a.next(e))}catch(e){t(e)}}function s(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o(function(e){e(r)})).then(n,s)}c((a=a.apply(r,i||[])).next())});// removed by dead control flow
 var r, i, o, a; }finalize(){return Promise.reject(new i)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}redirectUrl(e){return this._formPoster.postForm(e,{})}_isAdditionalActionRequired(e){const{additional_action_required:t,status:r}=e;return"additional_action_required"===r&&t&&"offsite_redirect"===t.type}}class a extends o{redirectUrl(e){window.location.replace(e)}}const s=(c=t=>new a((0,_bigcommerce_form_poster__WEBPACK_IMPORTED_MODULE_0__.createFormPoster)(),t),d=[{id:"sezzle"}],Object.assign(c,{resolveIds:d}));var c,d;


/***/ },

/***/ "../checkout-sdk-js/dist/esm/integrations/zip.js"
/*!*******************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/zip.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createZipPaymentStrategy: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _bigcommerce_request_sender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/index.js");
var t;(function(e){e.Json="application/json",e.JsonV1="application/vnd.bc.v1+json"})(t||(t={}));const n=t,i={"X-Checkout-SDK-Version":"1.887.0"};var r;class s{constructor(e){this._requestSender=e}saveExternalId(e,t){return r=this,s=void 0,o=function*(){const r=`/api/storefront/payment/${e}/save-external-id`,s={headers:Object.assign({Accept:n.JsonV1,"X-API-INTERNAL":"This API endpoint is for internal use only and may change in the future"},i),body:{externalId:t,provider:e}};yield this._requestSender.post(r,s)},new((a=void 0)||(a=Promise))(function(e,t){function n(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a(function(e){e(r)})).then(n,i)}c((o=o.apply(r,s||[])).next())});// removed by dead control flow
 var r, s, a, o; }}class a extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class o extends a{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class c extends o{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(r||(r={}));class d extends a{constructor(e){super(function(e){switch(e){case r.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case r.MissingCart:return"Unable to proceed because cart data is unavailable.";case r.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case r.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case r.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case r.MissingCheckoutConfig:case r.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case r.MissingOrder:return"Unable to proceed because order data is unavailable.";case r.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case r.MissingPayment:return"Unable to proceed because payment data is unavailable.";case r.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case r.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case r.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class u extends a{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class l{constructor(e,t){this.paymentIntegrationService=e,this.storefrontPaymentRequestSender=t}initialize(){return Promise.resolve()}execute(e,t){return n=this,i=void 0,a=function*(){const{payment:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["payment"]);if(!n)throw new c(["payment"]);const{methodId:s}=n,{getPaymentMethodOrThrow:a}=yield this.paymentIntegrationService.loadPaymentMethod(s,t),{clientToken:o,initializationData:u}=a(s),l=null==u?void 0:u.redirectUrl;if(!o||!l)throw new d(r.MissingPaymentMethod);const{id:g}=JSON.parse(o);if(!g)throw new d(r.MissingPaymentToken);const{isStoreCreditApplied:p}=this.paymentIntegrationService.getState().getCheckoutOrThrow();yield this.paymentIntegrationService.applyStoreCredit(p),yield this.paymentIntegrationService.initializePayment(s,{useStoreCredit:p}),yield this.paymentIntegrationService.submitOrder(i,t),yield this._prepareForReferredRegistration(s,g);try{yield this.paymentIntegrationService.submitPayment({methodId:s,paymentData:{nonce:g}})}catch(e){if((e=>"object"==typeof e&&null!==e&&"body"in e)(e)&&"additional_action_required"===e.body.status)return new Promise(()=>window.location.replace(l));throw e}},new((s=void 0)||(s=Promise))(function(e,t){function r(e){try{c(a.next(e))}catch(e){t(e)}}function o(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s(function(e){e(n)})).then(r,o)}c((a=a.apply(n,i||[])).next())});// removed by dead control flow
 var n, i, s, a; }finalize(){return Promise.reject(new u)}deinitialize(){return Promise.resolve()}_prepareForReferredRegistration(e,t){return this.storefrontPaymentRequestSender.saveExternalId(e,t)}}const g=(p=t=>{const{getHost:n}=t.getState(),i=(0,_bigcommerce_request_sender__WEBPACK_IMPORTED_MODULE_0__.createRequestSender)({host:n()}),r=new s(i);return new l(t,r)},y=[{id:"zip"},{id:"quadpay"}],Object.assign(p,{resolveIds:y}));var p,y;


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/HostedPaymentMethod.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/HostedPaymentMethod.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/external */ "../checkout-sdk-js/dist/esm/integrations/external.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_humm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/humm */ "../checkout-sdk-js/dist/esm/integrations/humm.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offsite */ "../checkout-sdk-js/dist/esm/integrations/offsite.js");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentFieldset.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isAccountInstrument.ts");
/* harmony import */ var _StoreInstrumentFieldset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../StoreInstrumentFieldset */ "./packages/core/src/app/payment/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _withPayment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../withPayment */ "./packages/core/src/app/payment/withPayment.tsx");














class HostedPaymentMethod extends react__WEBPACK_IMPORTED_MODULE_6__.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isAddingNewInstrument: false,
        };
        this.handleUseNewInstrument = () => {
            this.setState({
                isAddingNewInstrument: true,
                selectedInstrument: undefined,
            });
        };
        this.handleSelectInstrument = (id) => {
            const { instruments } = this.props;
            this.setState({
                isAddingNewInstrument: false,
                selectedInstrument: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.find)(instruments, { bigpayToken: id }),
            });
        };
    }
    componentDidMount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { initializePayment, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, loadInstruments, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_5__.noop, } = this.props;
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [
                        _bigcommerce_checkout_sdk_integrations_humm__WEBPACK_IMPORTED_MODULE_2__.createHummPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_external__WEBPACK_IMPORTED_MODULE_1__.createExternalPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_3__.createOffsitePaymentStrategy,
                    ],
                });
                if (isInstrumentFeatureAvailableProp) {
                    yield loadInstruments();
                }
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
    }
    componentWillUnmount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { deinitializePayment, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_5__.noop } = this.props;
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
    render() {
        const { description, isInitializing = false, isLoadingInstruments, instruments, isNewAddress, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, } = this.props;
        const { selectedInstrument = this.getDefaultInstrument() } = this.state;
        const isLoading = isInitializing || isLoadingInstruments;
        const shouldShowInstrumentFieldset = isInstrumentFeatureAvailableProp && (instruments.length > 0 || isNewAddress);
        if (!description && !isInstrumentFeatureAvailableProp) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", { className: "paymentMethod paymentMethod--hosted" },
                description,
                shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_storedInstrument__WEBPACK_IMPORTED_MODULE_12__["default"], { instruments: instruments, onSelectInstrument: this.handleSelectInstrument, onUseNewInstrument: this.handleUseNewInstrument, selectedInstrument: selectedInstrument })),
                isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_StoreInstrumentFieldset__WEBPACK_IMPORTED_MODULE_14__["default"], { instrumentId: selectedInstrument && selectedInstrument.bigpayToken, isAccountInstrument: true })))));
    }
    getDefaultInstrument() {
        const { isAddingNewInstrument } = this.state;
        const { instruments } = this.props;
        if (isAddingNewInstrument || !instruments.length) {
            return;
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.find)(instruments, { defaultInstrument: true }) || instruments[0];
    }
}
const mapFromCheckoutProps = () => {
    const filterAccountInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_4__.memoizeOne)((instruments = []) => instruments.filter(_storedInstrument__WEBPACK_IMPORTED_MODULE_13__["default"]));
    const filterTrustedInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_4__.memoizeOne)((instruments = []) => instruments.filter(({ trustedShippingAddress }) => trustedShippingAddress));
    return (context, props) => {
        const { method } = props;
        const { checkoutService, checkoutState } = context;
        const { data: { getCart, getConfig, getCustomer, getInstruments, isPaymentDataRequired, isPaymentDataSubmitted, }, statuses: { isLoadingInstruments }, } = checkoutState;
        const cart = getCart();
        const config = getConfig();
        const customer = getCustomer();
        if (!config || !cart || !customer || !method) {
            return null;
        }
        const currentMethodInstruments = filterAccountInstruments(getInstruments(method));
        const trustedInstruments = filterTrustedInstruments(currentMethodInstruments);
        return {
            instruments: trustedInstruments,
            isNewAddress: trustedInstruments.length === 0 && currentMethodInstruments.length > 0,
            isInstrumentFeatureAvailable: !isPaymentDataSubmitted(method.id, method.gateway) &&
                (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_11__["default"])({
                    config,
                    customer,
                    paymentMethod: method,
                }),
            isLoadingInstruments: isLoadingInstruments(),
            isPaymentDataRequired: isPaymentDataRequired(),
            loadInstruments: checkoutService.loadInstruments,
        };
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_withPayment__WEBPACK_IMPORTED_MODULE_15__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_9__["default"])(mapFromCheckoutProps)(HostedPaymentMethod)))));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentFieldset.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/AccountInstrumentFieldset.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/modal */ "./packages/core/src/app/ui/modal/ModalTrigger.tsx");
/* harmony import */ var _AccountInstrumentSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccountInstrumentSelect */ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentSelect.tsx");
/* harmony import */ var _ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ManageInstrumentsModal */ "./packages/core/src/app/payment/storedInstrument/ManageInstrumentsModal.tsx");






const AccountInstrumentFieldset = ({ instruments, onSelectInstrument, onUseNewInstrument, selectedInstrument, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AccountInstrumentSelect__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, field, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrument && selectedInstrument.bigpayToken }))), [instruments, onSelectInstrument, onUseNewInstrument, selectedInstrument]);
    const renderModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ instruments: instruments }, props))), [instruments]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "instrumentFieldset", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.account_instrument_text" })) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_6__["default"], { modal: renderModal }, ({ onClick }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "instrumentModal-trigger", onClick: onClick, type: "button" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.instrument_manage_button" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_4__["default"], { name: "instrumentId", render: renderInput }),
        instruments.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "instrumentSelect-note" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.account_instrument_new_shipping_address" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(AccountInstrumentFieldset));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentSelect.tsx"
/*!************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/AccountInstrumentSelect.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _ui_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/dropdown */ "./packages/core/src/app/ui/dropdown/DropdownTrigger.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/icon */ "./packages/core/src/app/ui/icon/IconContainer.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/icon */ "./packages/core/src/app/ui/icon/IconPaypal.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/icon */ "./packages/core/src/app/ui/icon/IconNewAccount.tsx");
/* harmony import */ var _isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isBankAccountInstrument */ "./packages/core/src/app/payment/storedInstrument/isBankAccountInstrument.ts");








class AccountInstrumentSelect extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
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
        const { field, instruments, onSelectInstrument, onUseNewInstrument, selectedInstrumentId } = this.props;
        const selectedInstrument = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { bigpayToken: selectedInstrumentId });
        const { value } = field, otherFieldProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(field, ["value"]);
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], { dropdown: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentMenu, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrumentId }) },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentSelectButton, { instrument: selectedInstrument, testId: "instrument-select" }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", Object.assign({ type: "hidden", value: value || '' }, otherFieldProps)))));
    }
    updateFieldValue(instrumentId = '') {
        const { form, field } = this.props;
        form.setFieldValue(field.name, instrumentId);
    }
}
const AccountInstrumentMenu = ({ instruments, selectedInstrumentId, onSelectInstrument, onUseNewInstrument, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", { className: "instrumentSelect-dropdownMenu instrumentSelect-dropdownMenuNext dropdown-menu", "data-test": "instrument-select-menu" },
        instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('instrumentSelect-option dropdown-menu-item', {
                'instrumentSelect-option--selected': instrument.bigpayToken === selectedInstrumentId,
            }), key: instrument.bigpayToken },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentOption, { instrument: instrument, onClick: onSelectInstrument, testId: "instrument-select-option" })))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", { className: "instrumentSelect-option instrumentSelect-option--addNew dropdown-menu-item" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentUseNewButton, { onClick: onUseNewInstrument, testId: "instrument-select-option-use-new" }))));
};
const AccountInstrumentSelectButton = ({ instrument, testId, onClick, }) => {
    if (!instrument) {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentUseNewButton, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", testId: testId }));
    }
    return !(0,_isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__["default"])(instrument) ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentMenuItem, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", instrument: instrument, onClick: onClick, testId: testId })) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(BankInstrumentMenuItem, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", instrument: instrument, onClick: onClick, testId: testId }));
};
const AccountInstrumentOption = ({ instrument, onClick = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, }) => {
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        onClick(instrument.bigpayToken);
    }, [onClick, instrument]);
    return !(0,_isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__["default"])(instrument) ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentMenuItem, { instrument: instrument, onClick: handleClick, testId: "instrument-select-option" })) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(BankInstrumentMenuItem, { instrument: instrument, onClick: handleClick, testId: "instrument-select-option" }));
};
const AccountInstrumentMenuItem = ({ className, instrument: { externalId }, testId, onClick, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-details" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_7__["default"], { additionalClassName: "accountIcon-icon", size: _ui_icon__WEBPACK_IMPORTED_MODULE_6__.IconSize.Medium }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-account", "data-test": `${testId}-externalId` }, externalId))));
};
const BankInstrumentMenuItem = ({ className, instrument, testId, onClick, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-details" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-card" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { accountNumber: instrument.accountNumber }, id: "payment.instrument_account_number_ending" })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-issuer" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_issuer" }),
                ": ",
                instrument.issuer))));
};
const AccountInstrumentUseNewButton = ({ className, testId, onClick = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-details instrumentSelect-details--addNew" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { additionalClassName: "accountIcon-icon", size: _ui_icon__WEBPACK_IMPORTED_MODULE_6__.IconSize.Medium }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-account" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.account_instrument_add_action" })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountInstrumentSelect);


/***/ },

/***/ "./packages/core/src/app/ui/icon/IconNewAccount.tsx"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconNewAccount.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/core/src/app/ui/icon/IconContainer.tsx");


const IconNewAccountSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "25", viewBox: "0 0 35 25", width: "35", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M33 2H2L2 23H33V2ZM2 0C0.895431 0 0 0.89543 0 2V23C0 24.1046 0.89543 25 2 25H33C34.1046 25 35 24.1046 35 23V2C35 0.89543 34.1046 0 33 0H2Z", fill: "#D1D7E0", fillRule: "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M11 12C11 11.4477 11.4477 11 12 11H24C24.5523 11 25 11.4477 25 12V14C25 14.5523 24.5523 15 24 15H12C11.4477 15 11 14.5523 11 14V12Z", fill: "#D1D7E0", fillRule: "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M19 6C19.5523 6 20 6.44772 20 7V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V7C16 6.44772 16.4477 6 17 6H19Z", fill: "#D1D7E0", fillRule: "evenodd" })));
const IconNewAccount = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconNewAccountSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconNewAccount));


/***/ },

/***/ "./packages/hosted-payment-integration/src/HostedPaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/hosted-payment-integration/src/HostedPaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/afterpay */ "../checkout-sdk-js/dist/esm/integrations/afterpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/clearpay */ "../checkout-sdk-js/dist/esm/integrations/clearpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_sezzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/sezzle */ "../checkout-sdk-js/dist/esm/integrations/sezzle.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_zip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/zip */ "../checkout-sdk-js/dist/esm/integrations/zip.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");








const HostedPaymentMethod = ({ checkoutService, checkoutState, method, onUnhandledError, language, paymentForm, }) => {
    const initializeHostedPaymentMethod = (options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [
                _bigcommerce_checkout_sdk_integrations_zip__WEBPACK_IMPORTED_MODULE_4__.createZipPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__.createAfterpayPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_sezzle__WEBPACK_IMPORTED_MODULE_3__.createSezzlePaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_2__.createClearpayPaymentStrategy,
            ] }));
    });
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components__WEBPACK_IMPORTED_MODULE_7__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeHostedPaymentMethod, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_6__["default"])(HostedPaymentMethod, [
    { gateway: 'afterpay' },
    { id: 'afterpay' },
    { gateway: 'clearpay' },
    { id: 'clearpay' },
    { id: 'quadpay' },
    { id: 'sezzle' },
    { id: 'zip' },
]));


/***/ },

/***/ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isAccountInstrument/isAccountInstrument.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/AccountInstrumentFieldset/AccountInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");






function getHostedPaymentMethodDerivedProps(props) {
    const filterAccountInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((instruments = []) => instruments.filter(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"]));
    const filterTrustedInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((instruments = []) => instruments.filter(({ trustedShippingAddress }) => trustedShippingAddress));
    const { checkoutService, checkoutState, isUsingMultiShipping = false, method } = props;
    const { data: { getCart, getConfig, getCustomer, getInstruments, isPaymentDataRequired, isPaymentDataSubmitted, }, statuses: { isLoadingInstruments }, } = checkoutState;
    const cart = getCart();
    const config = getConfig();
    const customer = getCustomer();
    if (!config || !cart || !customer) {
        throw new Error('Unable to get checkout');
    }
    const currentMethodInstruments = filterAccountInstruments(getInstruments(method));
    const trustedInstruments = filterTrustedInstruments(currentMethodInstruments);
    return {
        instruments: trustedInstruments,
        isNewAddress: trustedInstruments.length === 0 && currentMethodInstruments.length > 0,
        isInstrumentFeatureAvailable: !isPaymentDataSubmitted(method.id, method.gateway) &&
            (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])({
                config,
                customer,
                isUsingMultiShipping,
                paymentMethod: method,
            }),
        isLoadingInstruments: isLoadingInstruments(),
        isPaymentDataRequired: isPaymentDataRequired(),
        loadInstruments: checkoutService.loadInstruments,
    };
}
const HostedPaymentMethodComponent = (props) => {
    const { description, isInitializing = false, initializePayment, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, deinitializePayment, } = props;
    const [isAddingNewInstrument, setIsAddingNewInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [selectedInstrument, setSelectedInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const derivedProps = getHostedPaymentMethodDerivedProps(props);
    const { isLoadingInstruments, instruments, isNewAddress, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, loadInstruments, } = derivedProps;
    const getDefaultInstrument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        if (isAddingNewInstrument || !instruments.length) {
            return;
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { defaultInstrument: true }) || instruments[0];
    }, [isAddingNewInstrument, instruments]);
    const handleUseNewInstrument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        setIsAddingNewInstrument(true);
        setSelectedInstrument(undefined);
    }, []);
    const handleSelectInstrument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((id) => {
        setIsAddingNewInstrument(false);
        setSelectedInstrument((0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { bigpayToken: id }));
    }, [instruments]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const initializePaymentAsync = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
                if (isInstrumentFeatureAvailableProp) {
                    yield loadInstruments();
                }
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
        void initializePaymentAsync();
        return () => {
            const deinitializePaymentAsync = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
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
            void deinitializePaymentAsync();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const currentSelectedInstrument = selectedInstrument || getDefaultInstrument();
    const isLoading = isInitializing || isLoadingInstruments;
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailableProp && (instruments.length > 0 || isNewAddress);
    if (!description && !isInstrumentFeatureAvailableProp) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentMethod paymentMethod--hosted" },
            description,
            shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"], { instruments: instruments, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewInstrument, selectedInstrument: currentSelectedInstrument })),
            isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"], { instrumentId: currentSelectedInstrument && currentSelectedInstrument.bigpayToken, instruments: instruments, isAccountInstrument: true })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedPaymentMethodComponent);


/***/ },

/***/ "./packages/hosted-payment-integration/src/index.ts"
/*!**********************************************************!*\
  !*** ./packages/hosted-payment-integration/src/index.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HostedPaymentComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   HostedPaymentMethod: () => (/* reexport safe */ _HostedPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _HostedPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HostedPaymentMethod */ "./packages/hosted-payment-integration/src/HostedPaymentMethod.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");




/***/ },

/***/ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts"
/*!***********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInstrumentFeatureAvailable)
/* harmony export */ });
function isInstrumentFeatureAvailable({ config, customer, isUsingMultiShipping, paymentMethod, }) {
    if (!config.checkoutSettings.isCardVaultingEnabled ||
        !paymentMethod.config.isVaultingEnabled ||
        customer.isGuest ||
        isUsingMultiShipping) {
        return false;
    }
    return true;
}


/***/ }

}]);
//# sourceMappingURL=hosted-payment-method.js.map