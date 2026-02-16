"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["square-v2-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/squarev2.js":
/*!************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/squarev2.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSquareV2PaymentStrategy: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../checkout-sdk-js/node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../checkout-sdk-js/node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../checkout-sdk-js/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../checkout-sdk-js/node_modules/rxjs/_esm5/internal/operators/map.js");
var o,a;class s extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class d extends s{constructor(e,t,i){super(i||"Payment cannot be processed for this order, please select another payment method"),this.type="custom_provider_execute_error",this.name=t,this.subtype=e}}function c(e,t){if(null==e)throw t?t():new Error("An unexpected error has occurred.");return e}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(o||(o={}));class u extends s{constructor(e){super(function(e){switch(e){case o.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case o.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case o.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case o.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}!function(e){e.CHARGE="CHARGE",e.STORE="STORE"}(a||(a={}));var l=function(e,t,i,n){return new(i||(i=Promise))(function(r,o){function a(e){try{d(n.next(e))}catch(e){o(e)}}function s(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,s)}d((n=n.apply(e,t||[])).next())})};class h{constructor(e,t){this._scriptLoader=e,this._paymentIntegrationService=t}initialize({testMode:e,applicationId:t,locationId:i}){return l(this,void 0,void 0,function*(){const n=yield this._scriptLoader.load(e);this._payments=n.payments(t,i)})}deinitialize(){return l(this,void 0,void 0,function*(){this._formValidationSubscription&&this._formValidationSubscription.unsubscribe(),this._card&&(yield this._card.destroy()),this._formValidationSubscription=void 0,this._card=void 0,this._payments=void 0})}initializeCard({containerId:e,style:t,onValidationChange:i}){return l(this,void 0,void 0,function*(){const{postalCode:n}=this._paymentIntegrationService.getState().getBillingAddress()||{};this._card=yield this._getPayments().card(),yield this._card.attach(`#${e}`);try{yield this._card.configure({postalCode:n,style:t})}catch(e){}i&&(this._formValidationSubscription=this._subscribeToFormValidation(this._card,i))})}tokenize(){return l(this,void 0,void 0,function*(){const e=yield this._getCard().tokenize();if("OK"!==e.status||!e.token){let t=`Tokenization failed with status: ${e.status}`;throw e.errors&&(t+=` and errors: ${JSON.stringify(e.errors)}`),new d("payment.errors.card_error","SquareV2TokenizationError",t)}return e.token})}verifyBuyer(e,t){return l(this,void 0,void 0,function*(){return t===a.CHARGE?this._chargeVerifyBuyer(e):this._storeVerifyBuyer(e)})}_getPayments(){return c(this._payments,()=>new u(o.PaymentNotInitialized))}_subscribeToFormValidation(e,o){const a=["cardNumber","cvv"],s=new Set(a),d=["focusClassAdded","focusClassRemoved","errorClassAdded","errorClassRemoved","cardBrandChanged","postalCodeChanged"].map(i=>(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(e,i));return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(...d).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(e=>{const{detail:{field:t,currentState:{isCompletelyValid:i}}}=e;return a.includes(t)&&s[i?"delete":"add"](t),0===s.size}),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)()).subscribe(o)}_getCard(){return c(this._card,()=>new u(o.PaymentNotInitialized))}_mapToSquareBillingContact({firstName:e,lastName:t,address1:i,address2:n,city:r,stateOrProvinceCode:o,postalCode:a,countryCode:s,email:d,phone:c}){return{givenName:e,familyName:t,addressLines:[i,n],city:r,state:o,postalCode:a,countryCode:s,email:d,phone:c}}_chargeVerifyBuyer(e){return l(this,void 0,void 0,function*(){const{getCheckoutOrThrow:t,getBillingAddressOrThrow:i}=this._paymentIntegrationService.getState(),{outstandingBalance:n,cart:r}=t(),o={amount:n.toString(),billingContact:this._mapToSquareBillingContact(i()),currencyCode:r.currency.code,intent:a.CHARGE},s=yield this._getPayments().verifyBuyer(e,o);return s?s.token:""})}_storeVerifyBuyer(e){return l(this,void 0,void 0,function*(){const{getBillingAddressOrThrow:t}=this._paymentIntegrationService.getState(),i={billingContact:this._mapToSquareBillingContact(t()),intent:a.STORE},n=yield this._getPayments().verifyBuyer(e,i);return n?n.token:""})}}class y extends s{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}const m={body:{},headers:{},status:0};class p extends s{constructor(e,{message:t,errors:i}={}){const{body:n,headers:r,status:o}=e||m;super(t||"An unexpected error has occurred."),this.name="RequestError",this.type="request",this.body=n,this.headers=r,this.status=o,this.errors=i||[]}}class f extends p{constructor(e){super(e,{message:"There is a problem processing your payment. Please try again later."}),this.name="PaymentMethodInvalidError",this.type="payment_method_invalid"}}class v extends y{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}class _ extends s{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}var g=function(e,t,i,n){return new(i||(i=Promise))(function(r,o){function a(e){try{d(n.next(e))}catch(e){o(e)}}function s(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(a,s)}d((n=n.apply(e,t||[])).next())})};class b{constructor(e,t){this._paymentIntegrationService=e,this._squareV2PaymentProcessor=t}initialize(e){var t;return g(this,void 0,void 0,function*(){if(!(null===(t=null==e?void 0:e.squarev2)||void 0===t?void 0:t.containerId))throw new y('Unable to proceed because "containerId" argument is not provided.');const{methodId:i,squarev2:n}=e,{config:{testMode:r},initializationData:o}=this._paymentIntegrationService.getState().getPaymentMethodOrThrow(i),{applicationId:a,locationId:s}=o||{};if(!a)throw new f;yield this._squareV2PaymentProcessor.initialize({applicationId:a,locationId:s,testMode:r}),yield this._squareV2PaymentProcessor.initializeCard(n)})}execute({payment:e}){return g(this,void 0,void 0,function*(){if(!e)throw new v(["payment"]);const{methodId:t,paymentData:i}=e,{shouldSaveInstrument:n,shouldSetAsDefaultInstrument:r}="object"!=typeof(o=i)||null===o||void 0!==o.shouldSaveInstrument&&"boolean"!=typeof o.shouldSaveInstrument||void 0!==o.shouldSetAsDefaultInstrument&&"boolean"!=typeof o.shouldSetAsDefaultInstrument?{shouldSaveInstrument:!1,shouldSetAsDefaultInstrument:!1}:i;var o;yield this._paymentIntegrationService.submitOrder();const a=i&&function(e){return Boolean(e.instrumentId)}(i)?yield this._getVaultedInstrumentPayload(t,i):yield this._getCardPayload(t,n);yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},e),{paymentData:{formattedPayload:Object.assign(Object.assign({},a),{vault_payment_instrument:n||!1,set_as_default_stored_instrument:r||!1})}}))})}finalize(){return Promise.reject(new _)}deinitialize(){return this._squareV2PaymentProcessor.deinitialize()}shouldVerify(){const{features:e}=this._paymentIntegrationService.getState().getStoreConfigOrThrow().checkoutSettings;return e["PROJECT-3828.add_3ds_support_on_squarev2"]}_getCardPayload(e,t){return g(this,void 0,void 0,function*(){const{getPaymentMethodOrThrow:i}=this._paymentIntegrationService.getState(),{initializationData:n}=i(e),r=yield this._squareV2PaymentProcessor.tokenize();if(n&&"isSquareV2ApiV2Enabled"in n?!n.isSquareV2ApiV2Enabled:!this.shouldVerify())return{credit_card_token:{token:r}};let o={nonce:r,token:yield this._squareV2PaymentProcessor.verifyBuyer(r,a.CHARGE)};if(t){const e=yield this._squareV2PaymentProcessor.tokenize();o=Object.assign(Object.assign({},o),{store_card_nonce:e,store_card_token:yield this._squareV2PaymentProcessor.verifyBuyer(e,a.STORE)})}return{credit_card_token:{token:JSON.stringify(o)}}})}_getVaultedInstrumentPayload(e,t){return g(this,void 0,void 0,function*(){const{getPaymentMethodOrThrow:i}=this._paymentIntegrationService.getState(),{initializationData:n}=i(e),{instrumentId:r}=t,o=(n&&"isSquareV2ApiV2Enabled"in n?n.isSquareV2ApiV2Enabled:this.shouldVerify())?yield this._squareV2PaymentProcessor.verifyBuyer(yield this._getSquareCardIdOrThrow(e,r),a.CHARGE):void 0;return{bigpay_token:Object.assign({token:r},o&&{three_d_secure:{token:o}})}})}_getSquareCardIdOrThrow(e,t){return g(this,void 0,void 0,function*(){const i=yield this._paymentIntegrationService.loadPaymentMethod(e,{params:{method:e,bigpayToken:t}}),{initializationData:n}=i.getPaymentMethodOrThrow(e),{cardId:r}=n||{};if(!r)throw new v(["cardId"]);return r})}}class S extends s{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}var I;!function(e){e.LIVE="https://web.squarecdn.com/v1/square.js",e.SANDBOX="https://sandbox.web.squarecdn.com/v1/square.js"}(I||(I={}));class P{constructor(e){this._scriptLoader=e}load(e=!1){return t=this,i=void 0,r=function*(){return yield this._scriptLoader.loadScript(e?I.SANDBOX:I.LIVE),function(e){if(!function(e){return"Square"in e}(e))throw new S}(window),window.Square},new((n=void 0)||(n=Promise))(function(e,o){function a(e){try{d(r.next(e))}catch(e){o(e)}}function s(e){try{d(r.throw(e))}catch(e){o(e)}}function d(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n(function(e){e(i)})).then(a,s)}d((r=r.apply(t,i||[])).next())});// removed by dead control flow
 var t, i, n, r; }}const w=(z=t=>new b(t,new h(new P((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)()),t)),C=[{id:"squarev2"}],Object.assign(z,{resolveIds:C}));var z,C;


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

/***/ "./packages/instrument-utils/src/storedInstrument/CardInstrumentFieldset/CardInstrumentFieldset.tsx":
/*!**********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/CardInstrumentFieldset/CardInstrumentFieldset.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalTrigger.tsx");
/* harmony import */ var _InstrumentSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InstrumentSelect */ "./packages/instrument-utils/src/storedInstrument/InstrumentSelect/InstrumentSelect.tsx");
/* harmony import */ var _ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ManageInstrumentsModal */ "./packages/instrument-utils/src/storedInstrument/ManageInstrumentsModal/ManageInstrumentsModal.tsx");





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


/***/ }),

/***/ "./packages/instrument-utils/src/storedInstrument/InstrumentSelect/InstrumentSelect.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/InstrumentSelect/InstrumentSelect.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/CreditCardIcon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/dropdown/DropdownTrigger.tsx");
/* harmony import */ var _mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mapFromInstrumentCardType */ "./packages/instrument-utils/src/storedInstrument/mapFromInstrumentCardType/mapFromInstrumentCardType.ts");








const InstrumentMenuItem = ({ className, instrument, testId, shouldHideExpiryDate = false, onClick, }) => {
    var _a;
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
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { cardType: cardType }),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect-card", "data-test": `${testId !== null && testId !== void 0 ? testId : ''}-last4` }, cardInfo ? (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: {
                    cardTitle: (_a = cardInfo.niceType) !== null && _a !== void 0 ? _a : '',
                    endingIn: instrument.last4,
                }, id: "payment.instrument_ending_in_text" })) : (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: { endingIn: instrument.last4 }, id: "payment.instrument_default_ending_in_text" }))),
            !shouldHideExpiryDate && (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('instrumentSelect-expiry', {
                    'instrumentSelect-expiry--expired': isExpired,
                }), "data-test": `${testId || ''}-expiry` }, isExpired ? (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: {
                    expiryDate: `${instrument.expiryMonth}/${instrument.expiryYear}`,
                }, id: "payment.instrument_expired_text" })) : (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: {
                    expiryDate: `${instrument.expiryMonth}/${instrument.expiryYear}`,
                }, id: "payment.instrument_expires_text" })))))));
};
const InstrumentOption = ({ instrument, shouldHideExpiryDate = false, onClick = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, }) => {
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
        onClick(instrument.bigpayToken);
    }, [onClick, instrument]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentMenuItem, { instrument: instrument, onClick: handleClick, shouldHideExpiryDate: shouldHideExpiryDate, testId: "instrument-select-option" }));
};
const InstrumentUseNewButton = ({ className, testId, onClick = lodash__WEBPACK_IMPORTED_MODULE_3__.noop, }) => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect-details instrumentSelect-details--addNew" },
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect-card" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "payment.instrument_add_card_action" })))));
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
const InstrumentSelect = ({ field, form, instruments, onSelectInstrument, onUseNewInstrument, selectedInstrumentId, shouldHideExpiryDate = false, }) => {
    const prevSelectedInstrumentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(selectedInstrumentId);
    const updateFieldValue = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((instrumentId = '') => {
        void form.setFieldValue(field.name, instrumentId);
    }, [form, field.name]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
        // FIXME: Used setTimeout here because setFieldValue call doesnot set value if called before formik is properly mounted.
        //        This ensures that update Field value is called after formik has mounted.
        // See GitHub issue: https://github.com/jaredpalmer/formik/issues/930
        setTimeout(() => updateFieldValue(selectedInstrumentId));
        return () => {
            if (field.value === '' && selectedInstrumentId !== undefined) {
                updateFieldValue();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
        if (prevSelectedInstrumentIdRef.current !== selectedInstrumentId) {
            // FIXME: Used setTimeout here because setFieldValue call doesnot set value if called before formik is properly mounted.
            //        This ensures that update Field value is called after formik has mounted.
            // See GitHub issue: https://github.com/jaredpalmer/formik/issues/930
            setTimeout(() => updateFieldValue(selectedInstrumentId));
        }
        prevSelectedInstrumentIdRef.current = selectedInstrumentId;
    }, [selectedInstrumentId, updateFieldValue]);
    const selectedInstrument = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(instruments, { bigpayToken: selectedInstrumentId });
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: "instrumentSelect" },
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { dropdown: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentMenu, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrumentId, shouldHideExpiryDate: shouldHideExpiryDate }) },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(InstrumentSelectButton, { instrument: selectedInstrument, shouldHideExpiryDate: shouldHideExpiryDate, testId: "instrument-select" }),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", Object.assign({ type: "hidden" }, field)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstrumentSelect);


/***/ }),

/***/ "./packages/instrument-utils/src/storedInstrument/mapFromInstrumentCardType/mapFromInstrumentCardType.ts":
/*!***************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/mapFromInstrumentCardType/mapFromInstrumentCardType.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapFromInstrumentCardType)
/* harmony export */ });
function mapFromInstrumentCardType(type) {
    switch (type) {
        case 'amex':
        case 'american_express':
            return 'american-express';
        case 'diners':
        case 'diners_club':
            return 'diners-club';
        default:
            return type;
    }
}


/***/ }),

/***/ "./packages/squarev2-integration/src/SquareV2Form.tsx":
/*!************************************************************!*\
  !*** ./packages/squarev2-integration/src/SquareV2Form.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/CardInstrumentFieldset/CardInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");





const SquareV2Form = ({ checkoutService, checkoutState, containerId, deinitializePayment, initializePayment, method, }) => {
    var _a;
    const [isAddingNewCard, setIsAddingNewCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedInstrumentId, setSelectedInstrumentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { getCustomer, getInstruments } = checkoutState.data;
    const isSignedIn = (_a = getCustomer()) === null || _a === void 0 ? void 0 : _a.isGuest;
    const isInstrumentFeatureAvailable = !isSignedIn && Boolean(method.config.isVaultingEnabled);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (isInstrumentFeatureAvailable) {
            void checkoutService.loadInstruments();
        }
    }, [checkoutService, isInstrumentFeatureAvailable]);
    const instruments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getInstruments(method) || [], [getInstruments, method]);
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailable && instruments.length > 0;
    const shouldShowCreditCardFieldset = !shouldShowInstrumentFieldset || isAddingNewCard;
    const getDefaultInstrumentId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (isAddingNewCard) {
            return;
        }
        if (instruments.length > 0) {
            const defaultInstrument = instruments.find((instrument) => instrument.defaultInstrument) || instruments[0];
            return defaultInstrument.bigpayToken;
        }
    }, [instruments, isAddingNewCard]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const defaultInstrumentId = getDefaultInstrumentId() || undefined;
        setSelectedInstrumentId(defaultInstrumentId);
    }, [getDefaultInstrumentId, instruments]);
    const { setFieldValue } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)().paymentForm;
    const handleSelectInstrument = (id) => {
        setIsAddingNewCard(false);
        setSelectedInstrumentId(id);
    };
    const handleDeleteInstrument = (id) => {
        if (instruments.length === 0) {
            setIsAddingNewCard(true);
            setSelectedInstrumentId(undefined);
            setFieldValue('instrumentId', '');
        }
        else if (selectedInstrumentId === id) {
            setSelectedInstrumentId(getDefaultInstrumentId());
            setFieldValue('instrumentId', getDefaultInstrumentId());
        }
    };
    const handleUseNewCard = () => {
        setIsAddingNewCard(true);
        setSelectedInstrumentId(undefined);
        void deinitializePayment();
        void initializePayment();
    };
    const renderPlaceholderFields = () => {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": "squarev2_placeholder_form", style: { display: 'none' } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-label optimizedCheckout-form-label", id: "messageIsDefault" }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-input optimizedCheckout-form-input", id: "inputIsDefault" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-input optimizedCheckout-form-input form-input--focus optimizedCheckout-form-input--focus", id: "inputIsFocus" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-field--error" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-inlineMessage", id: "messageIsError" }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-input optimizedCheckout-form-input", id: "inputIsError" }))));
    };
    const { isLoadingInstruments } = checkoutState.statuses;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { "data-test": "squarev2_loading_overlay", hideContentWhenLoading: true, isLoading: isLoadingInstruments() },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "paymentMethod--hosted" },
            shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"]
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            , { 
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                instruments: instruments, onDeleteInstrument: handleDeleteInstrument, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewCard, selectedInstrumentId: selectedInstrumentId || getDefaultInstrumentId() })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('widget', `widget--${method.id}`, 'payment-widget'), "data-test": containerId, style: {
                    display: !shouldShowCreditCardFieldset ? 'none' : undefined,
                }, tabIndex: -1 },
                renderPlaceholderFields(),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: containerId })),
            isInstrumentFeatureAvailable && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"], { instrumentId: selectedInstrumentId, instruments: instruments })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SquareV2Form);


/***/ }),

/***/ "./packages/squarev2-integration/src/SquareV2PaymentMethod.tsx":
/*!*********************************************************************!*\
  !*** ./packages/squarev2-integration/src/SquareV2PaymentMethod.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_squarev2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/squarev2 */ "../checkout-sdk-js/dist/esm/integrations/squarev2.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _SquareV2Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SquareV2Form */ "./packages/squarev2-integration/src/SquareV2Form.tsx");







const SquareV2PaymentMethod = ({ method, checkoutService, checkoutState, }) => {
    const getStylesFromElement = (id, properties) => {
        const container = document.querySelector(`#${id}`);
        if (!container) {
            throw new Error(`Unable to retrieve input styles as the provided container ID "${id}" is not valid.`);
        }
        return (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(container, properties);
    };
    const copyStylesFromDummyFormFields = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        const styleProps = [
            'backgroundColor',
            'borderColor',
            'borderRadius',
            'borderWidth',
            'color',
            'fontSize',
            'fontWeight',
        ];
        return {
            default: {
                message: getStylesFromElement('messageIsDefault', ['color']),
                input: getStylesFromElement('inputIsDefault', styleProps),
            },
            focus: {
                input: getStylesFromElement('inputIsFocus', (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)(styleProps, ['borderRadius'])),
            },
            error: {
                message: getStylesFromElement('messageIsError', ['color']),
                input: getStylesFromElement('inputIsError', [
                    'borderColor',
                    'borderWidth',
                    'color',
                ]),
            },
        };
    }, []);
    const mapToSquareStyles = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((styles) => {
        const _a = styles.default.input, { borderColor, borderRadius, borderWidth } = _a, input = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["borderColor", "borderRadius", "borderWidth"]);
        const _b = styles.focus.input, { borderColor: borderColorIsFocus, borderWidth: borderWidthIsFocus } = _b, inputIsFocus = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["borderColor", "borderWidth"]);
        const { borderColor: borderColorIsError, borderWidth: borderWidthIsError, color: colorIsError, } = styles.error.input;
        return {
            input,
            'input.is-focus': Object.assign({}, inputIsFocus),
            'input.is-error': {
                color: colorIsError,
            },
            '.input-container': {
                borderColor,
                borderRadius,
                borderWidth,
            },
            '.input-container.is-focus': {
                borderColor: borderColorIsFocus,
                borderWidth: borderWidthIsFocus,
            },
            '.input-container.is-error': {
                borderColor: borderColorIsError,
                borderWidth: borderWidthIsError,
            },
            '.message-text': {
                color: styles.default.message.color,
            },
            '.message-icon': {
                color: styles.default.message.color,
            },
            '.message-text.is-error': {
                color: styles.error.message.color,
            },
            '.message-icon.is-error': {
                color: styles.error.message.color,
            },
        };
    }, []);
    const containerId = 'squarev2_payment_element_container';
    const initializePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        let style;
        try {
            style = mapToSquareStyles(copyStylesFromDummyFormFields());
        }
        catch (_a) {
            /* Do nothing: we should not block shoppers from buying. */
        }
        yield checkoutService.initializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
            integrations: [_bigcommerce_checkout_sdk_integrations_squarev2__WEBPACK_IMPORTED_MODULE_1__.createSquareV2PaymentStrategy],
            squarev2: {
                containerId,
                style,
            },
        });
    }), [
        checkoutService,
        copyStylesFromDummyFormFields,
        mapToSquareStyles,
        method.gateway,
        method.id,
    ]);
    const deinitializePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield checkoutService.deinitializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
        });
    }), [checkoutService, method.gateway, method.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        void initializePayment();
        return () => {
            void deinitializePayment();
        };
    }, [deinitializePayment, initializePayment]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SquareV2Form__WEBPACK_IMPORTED_MODULE_6__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, containerId: containerId, deinitializePayment: deinitializePayment, initializePayment: initializePayment, method: method }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__["default"])(SquareV2PaymentMethod, [{ id: 'squarev2' }]));


/***/ }),

/***/ "./packages/squarev2-integration/src/index.ts":
/*!****************************************************!*\
  !*** ./packages/squarev2-integration/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SquareV2PaymentMethod: () => (/* reexport safe */ _SquareV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SquareV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareV2PaymentMethod */ "./packages/squarev2-integration/src/SquareV2PaymentMethod.tsx");



/***/ })

}]);
//# sourceMappingURL=square-v2-payment-method.js.map