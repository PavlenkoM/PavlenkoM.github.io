"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["pay-pal-payments-pro-payment-method"],{

/***/ "../checkout-sdk-js/dist/esm/integrations/paypal-pro.js"
/*!**************************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/paypal-pro.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPayPalProPaymentStrategy: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var _bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var o,d,c=function(e,t,n,i){return new(n||(n=Promise))(function(r,a){function s(e){try{d(i.next(e))}catch(e){a(e)}}function o(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}d((i=i.apply(e,t||[])).next())})};class u{constructor(e,t){this._paymentIntegrationService=e,this._cardinalClient=t}prepare(e){return c(this,void 0,void 0,function*(){yield this._cardinalClient.load(e.id,e.config.testMode),yield this._cardinalClient.configure(yield this._getClientToken(e))})}start(e,t,n,r){return c(this,void 0,void 0,function*(){const{getCardInstrument:s,getPaymentMethodOrThrow:o}=this._paymentIntegrationService.getState(),{payment:{methodId:d="",paymentData:c={}}={}}=t,u=function(e){return Boolean(e.instrumentId)}(c)&&s(c.instrumentId),l=u?u.iin:r&&r.getBin();l&&(yield this._cardinalClient.runBinProcess(l));try{return yield e((0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(t,{payment:{paymentData:{threeDSecure:{token:o(d).clientToken}}}}),n)}catch(e){if(!(e=>"object"==typeof e&&null!==e&&"body"in e)(e)||!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(e.body.errors,{code:"three_d_secure_required"}))throw e;const n=yield this._cardinalClient.getThreeDSecureData(e.body.three_ds_result,this._getOrderData());if(!r)return void(yield this._paymentIntegrationService.submitPayment((0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(t.payment,{paymentData:{threeDSecure:n}})));yield r.submit((0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(t.payment,{paymentData:{threeDSecure:n}}))}})}_getClientToken(e){return c(this,void 0,void 0,function*(){return e.clientToken?e.clientToken:(yield this._paymentIntegrationService.loadPaymentMethod(e.id),this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e.id).clientToken||"")})}_getOrderData(){const e=this._paymentIntegrationService.getState(),t=e.getBillingAddressOrThrow(),n=e.getShippingAddress(),i=e.getCheckoutOrThrow(),r=e.getOrderOrThrow();return{billingAddress:t,shippingAddress:n,currencyCode:i.cart.currency.code,id:r.orderId.toString(),amount:i.cart.cartAmount}}}class l extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(o||(o={}));class h extends l{constructor(e){super(function(e){switch(e){case o.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case o.MissingCart:return"Unable to proceed because cart data is unavailable.";case o.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case o.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case o.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case o.MissingCheckoutConfig:case o.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case o.MissingOrder:return"Unable to proceed because order data is unavailable.";case o.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case o.MissingPayment:return"Unable to proceed because payment data is unavailable.";case o.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case o.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case o.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(e)),this.subtype=e,this.name="MissingDataError",this.type="missing_data"}}class m extends l{constructor(e){super(e||"Unable to proceed because the client library of a payment method has thrown an unexpected error."),this.name="PaymentMethodFailedError",this.type="payment_method_client_invalid"}}!function(e){e[e.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",e[e.CustomerNotInitialized=1]="CustomerNotInitialized",e[e.PaymentNotInitialized=2]="PaymentNotInitialized",e[e.ShippingNotInitialized=3]="ShippingNotInitialized",e[e.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(d||(d={}));class p extends l{constructor(e){super(function(e){switch(e){case d.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case d.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case d.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case d.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e)),this.subtype=e,this.name="NotInitializedError",this.type="not_initialized"}}const g=[100004,1010,1011,1020];var y,b,f,v,_,C,I;!function(e){e.SetupCompleted="payments.setupComplete",e.Validated="payments.validated"}(y||(y={})),function(e){e.Init="init",e.Complete="complete",e.Confirm="confirm"}(b||(b={})),function(e){e.Success="SUCCESS",e.NoAction="NOACTION",e.Failure="FAILURE",e.Error="ERROR"}(f||(f={})),function(e){e.CCA="CCA",e.Paypal="Paypal",e.Wallet="Wallet",e.VisaCheckout="VisaCheckout",e.ApplePay="ApplePay",e.DiscoverWallet="DiscoverWallet"}(v||(v={})),function(e){e.BinProcess="bin.process"}(_||(_={})),function(e){e.CCA="cca"}(C||(C={})),function(e){e.Yes="Y",e.No="N"}(I||(I={}));class P{constructor(e){this._scriptLoader=e,this._provider="",this._testMode=!1,this._configurationToken=""}load(e,t=!1){return this._provider=e,this._testMode=t,this._sdk||(this._sdk=this._scriptLoader.load(e,t)),this._sdk.then(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)}configure(e){if(this._configurationToken){if(this._configurationToken===e)return Promise.resolve();this._sdk=this._scriptLoader.load(`${this._provider}.${Date.now()}`,this._testMode)}return this._getClientSDK().then(n=>new Promise((i,r)=>{n.on(y.SetupCompleted,()=>{n.off(y.SetupCompleted),n.off(y.Validated),this._configurationToken=e,i()}),n.on(y.Validated,e=>{n.off(y.SetupCompleted),n.off(y.Validated),e.ActionCode===f.Error&&((0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(g,e.ErrorNumber)&&r(new h(o.MissingPaymentMethod)),r(new m(e.ErrorDescription)))}),n.setup(b.Init,{jwt:e})}))}runBinProcess(e){return this._getClientSDK().then(t=>t.trigger(_.BinProcess,e).catch(lodash__WEBPACK_IMPORTED_MODULE_1__.noop)).then(e=>{if(!e||!e.Status)throw new p(d.PaymentNotInitialized)})}getThreeDSecureData(e,t){return this._getClientSDK().then(n=>new Promise((i,r)=>{n.on(y.Validated,(e,t)=>{if(n.off(y.Validated),!t)return r(new m(e.ErrorDescription?e.ErrorDescription:"An error was encountered while processing the transaction."));if(!e.ActionCode)return i({token:t});switch(e.ActionCode){case f.Success:return i({token:t});case f.NoAction:return e.ErrorNumber>0?r(new m(e.ErrorDescription)):e.Payment&&e.Payment.ExtendedData&&e.Payment.ExtendedData.SignatureVerification===I.Yes?i({token:t}):r(new m("Transaction signature could not be validated."));case f.Failure:return r(new m("User failed authentication or an error was encountered while processing the transaction."));case f.Error:return r(new m(e.ErrorDescription))}});const a={AcsUrl:e.acs_url,Payload:e.merchant_data},s=this._mapToPartialOrder(t,e.payer_auth_request);n.continue(C.CCA,a,s)}))}_mapToPartialOrder(e,t){const n={BillingAddress:this._mapToCardinalAddress(e.billingAddress)};return e.paymentData&&(n.Account=this._mapToCardinalAccount(e.paymentData)),e.billingAddress.email&&(n.Email1=e.billingAddress.email),e.shippingAddress&&(n.ShippingAddress=this._mapToCardinalAddress(e.shippingAddress)),{Consumer:n,OrderDetails:{OrderNumber:e.id,Amount:e.amount,CurrencyCode:e.currencyCode,OrderChannel:"S",TransactionId:t}}}_mapToCardinalAccount(e){return{AccountNumber:Number(e.ccNumber),ExpirationMonth:Number(e.ccExpiry.month),ExpirationYear:Number(e.ccExpiry.year),NameOnAccount:e.ccName,CardCode:Number(e.ccCvv)}}_mapToCardinalAddress(e){const t={FirstName:e.firstName,LastName:e.lastName,Address1:e.address1,City:e.city,State:e.stateOrProvince,PostalCode:e.postalCode,CountryCode:e.countryCode};return e.address2&&(t.Address2=e.address2),e.phone&&(t.Phone1=e.phone),t}_getClientSDK(){if(!this._sdk)throw new p(d.PaymentNotInitialized);return this._sdk}}class w extends l{constructor(e){super(e||"Unable to proceed because the client library of a payment method is not loaded or ready to be used."),this.name="PaymentMethodClientUnavailableError",this.type="payment_method_client_unavailable"}}class S{constructor(e,t=window){this._scriptLoader=e,this._window=t}load(e,t){const n=t?"https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js":"https://static.client.cardinaltrusted.com/songbird/v2.0.0/songbird.js";return this._scriptLoader.loadScript(`${n}?v=${e}`).then(()=>{if(!this._window.Cardinal)throw new w;return this._window.Cardinal})}}class M extends l{constructor(e){super(e||"Invalid arguments have been provided."),this.name="InvalidArgumentError",this.type="invalid_argument"}}class O extends l{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class A extends M{constructor(e){let t="Unable to submit payment for the order because the payload is invalid.";e&&(t=`${t} Make sure the following fields are provided correctly: ${e.join(", ")}.`),super(t),this.name="PaymentArgumentInvalidError"}}var E,N=function(e,t,n,i){return new(n||(n=Promise))(function(r,a){function s(e){try{d(i.next(e))}catch(e){a(e)}}function o(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}d((i=i.apply(e,t||[])).next())})},k=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};class D{constructor(e){this._paymentIntegrationService=e}execute(e,t){var n,i;return this._isHostedPaymentFormEnabled(null===(n=e.payment)||void 0===n?void 0:n.methodId,null===(i=e.payment)||void 0===i?void 0:i.gatewayId)&&this._shouldRenderHostedForm?this._executeWithHostedForm(e,t):this._executeWithoutHostedForm(e,t)}initialize(e){if(!this._isHostedPaymentFormEnabled(null==e?void 0:e.methodId,null==e?void 0:e.gatewayId)||!this._isHostedFieldAvailable(e))return this._shouldRenderHostedForm=!1,Promise.resolve();const t=e&&e.creditCard&&e.creditCard.form,n=this._paymentIntegrationService.getState(),{paymentSettings:{bigpayBaseUrl:i=""}={}}=n.getStoreConfigOrThrow();if(!t)throw new M;const r=this._paymentIntegrationService.createHostedForm(i,t);return r.attach().then(()=>(this._shouldRenderHostedForm=!0,this._hostedForm=r,Promise.resolve()))}deinitialize(){return this._hostedForm&&this._hostedForm.detach(),Promise.resolve()}finalize(){return Promise.reject(new O)}_executeWithoutHostedForm(e,t){return N(this,void 0,void 0,function*(){const{payment:n}=e,i=k(e,["payment"]),r=n&&n.paymentData;if(!n||!r)throw new A(["payment.paymentData"]);yield this._paymentIntegrationService.submitOrder(i,t),yield this._paymentIntegrationService.submitPayment(Object.assign(Object.assign({},n),{paymentData:r}))})}_executeWithHostedForm(e,t){return N(this,void 0,void 0,function*(){const{payment:n}=e,i=k(e,["payment"]),r=this._hostedForm;if(!r)throw new p(d.PaymentNotInitialized);if(!n||!n.methodId)throw new A(["payment.methodId"]);yield this._paymentIntegrationService.submitOrder(i,t),yield r.validate().then(()=>r.submit(n))})}_isHostedPaymentFormEnabled(e,t){return!!e&&!0===this._paymentIntegrationService.getState().getPaymentMethodOrThrow(e,t).config.isHostedFormEnabled}_isHostedFieldAvailable(e){return!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(e&&e.creditCard&&e.creditCard.form.fields).every(lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)}}!function(e){e.ACKNOWLEDGE="ACKNOWLEDGE",e.FINALIZE="FINALIZE",e.INITIALIZE="INITIALIZE"}(E||(E={}));const T=E;var x=function(e,t,n,i){return new(n||(n=Promise))(function(r,a){function s(e){try{d(i.next(e))}catch(e){a(e)}}function o(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}d((i=i.apply(e,t||[])).next())})};class z extends D{constructor(e,t){super(e),this.paymentIntegrationService=e,this.threeDSecureFlow=t}initialize(e){const t=Object.create(null,{initialize:{get:()=>super.initialize}});return x(this,void 0,void 0,function*(){yield t.initialize.call(this,e);const n=this.paymentIntegrationService.getState().getPaymentMethodOrThrow(e.methodId);n.config.is3dsEnabled&&(yield this.threeDSecureFlow.prepare(n))})}execute(e,t){const n=Object.create(null,{execute:{get:()=>super.execute}});return x(this,void 0,void 0,function*(){const{payment:{methodId:i=""}={}}=e,r=this.paymentIntegrationService.getState();return r.getPaymentStatus()===T.ACKNOWLEDGE?(yield this.paymentIntegrationService.submitOrder(Object.assign(Object.assign({},e),{payment:{methodId:i}}),t),Promise.resolve()):r.getPaymentMethodOrThrow(i).config.is3dsEnabled?this.threeDSecureFlow.start(n.execute.bind(this),e,t,this._hostedForm):n.execute.call(this,e,t)})}}const F=(U=t=>new z(t,new u(t,new P(new S((0,_bigcommerce_script_loader__WEBPACK_IMPORTED_MODULE_0__.getScriptLoader)())))),j=[{id:"paypal"}],Object.assign(U,{resolveIds:j}));var U,j;


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

/***/ "./packages/paypal-payments-pro-integration/src/PayPalPaymentsProPaymentMethod.tsx"
/*!*****************************************************************************************!*\
  !*** ./packages/paypal-payments-pro-integration/src/PayPalPaymentsProPaymentMethod.tsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_pro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-pro */ "../checkout-sdk-js/dist/esm/integrations/paypal-pro.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const PayPalPaymentsProPaymentMethod = ({ method, checkoutService, checkoutState, paymentForm, language, onUnhandledError, }) => {
    const initializePayment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((options) => {
        var _a;
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { gatewayId: method.gateway, methodId: method.id, 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            integrations: [...((_a = options.integrations) !== null && _a !== void 0 ? _a : []), _bigcommerce_checkout_sdk_integrations_paypal_pro__WEBPACK_IMPORTED_MODULE_0__.createPayPalProPaymentStrategy] }));
    }, [checkoutService, method]);
    if (method.type === 'PAYMENT_TYPE_HOSTED') {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializePayment, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_2__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, initializePayment: initializePayment, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(PayPalPaymentsProPaymentMethod, [{ id: 'paypal' }]));


/***/ },

/***/ "./packages/paypal-payments-pro-integration/src/index.ts"
/*!***************************************************************!*\
  !*** ./packages/paypal-payments-pro-integration/src/index.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayPalPaymentsProPaymentMethod: () => (/* reexport safe */ _PayPalPaymentsProPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PayPalPaymentsProPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayPalPaymentsProPaymentMethod */ "./packages/paypal-payments-pro-integration/src/PayPalPaymentsProPaymentMethod.tsx");



/***/ }

}]);
//# sourceMappingURL=pay-pal-payments-pro-payment-method.js.map