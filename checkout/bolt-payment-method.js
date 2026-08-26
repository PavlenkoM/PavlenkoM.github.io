"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["bolt-payment-method"],{

/***/ "./packages/bolt-integration/src/BoltClientPaymentMethod.tsx"
/*!*******************************************************************!*\
  !*** ./packages/bolt-integration/src/BoltClientPaymentMethod.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bolt */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/bolt.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");




const BoltClientPaymentMethod = (_a) => {
    var { checkoutService, checkoutState, method } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method"]);
    const initializeBoltPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_1__.createBoltPaymentStrategy], bolt: {
            useBigCommerceCheckout: true,
        } })), [checkoutService]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeBoltPayment, method: method }, rest)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoltClientPaymentMethod);


/***/ },

/***/ "./packages/bolt-integration/src/BoltCustomForm.tsx"
/*!**********************************************************!*\
  !*** ./packages/bolt-integration/src/BoltCustomForm.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");



const agreementTranslationOptions = {
    privacyPolicyUrl: 'https://www.bolt.com/privacy/',
    termsUrl: 'https://www.bolt.com/end-user-terms/',
};
const benefitsList = [
    { id: 'payment.bolt_benefit_1' },
    { id: 'payment.bolt_benefit_2' },
    { id: 'payment.bolt_benefit_3' },
];
const BoltCreateAccountCheckbox = () => {
    const labelContent = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: agreementTranslationOptions, id: "payment.bolt_checkbox_agreement" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, benefitsList.map(({ id }, key) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: id })))))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-checkbox form-field--createAccount", labelContent: labelContent, name: "shouldCreateAccount" }));
};
const BoltCustomForm = ({ containerId, showCreateAccountCheckbox, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-field form-field--bolt-embed", id: containerId }),
        showCreateAccountCheckbox ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoltCreateAccountCheckbox, null) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoltCustomForm);


/***/ },

/***/ "./packages/bolt-integration/src/BoltEmbeddedPaymentMethod.tsx"
/*!*********************************************************************!*\
  !*** ./packages/bolt-integration/src/BoltEmbeddedPaymentMethod.tsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bolt */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/bolt.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _BoltCustomForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BoltCustomForm */ "./packages/bolt-integration/src/BoltCustomForm.tsx");






const BoltEmbeddedPaymentMethod = (_a) => {
    var { checkoutService, checkoutState, method, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method", "paymentForm"]);
    const [showCreateAccountCheckbox, setShowCreateAccountCheckbox] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const boltEmbeddedContainerId = 'bolt-embedded';
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const initializeBoltPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_1__.createBoltPaymentStrategy], bolt: {
            containerId: boltEmbeddedContainerId,
            useBigCommerceCheckout: true,
            onPaymentSelect: (hasBoltAccount) => {
                setShowCreateAccountCheckbox(!hasBoltAccount);
                if (hasBoltAccount) {
                    setFieldValue('shouldCreateAccount', false);
                }
            },
        } })), [checkoutService, boltEmbeddedContainerId, setFieldValue]);
    const initializeBoltCustomer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => {
        return checkoutService.initializeCustomer(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_1__.createBoltCustomerStrategy] }));
    }, [checkoutService]);
    const renderCustomPaymentForm = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_BoltCustomForm__WEBPACK_IMPORTED_MODULE_6__["default"], { containerId: boltEmbeddedContainerId, showCreateAccountCheckbox: showCreateAccountCheckbox })), [boltEmbeddedContainerId, showCreateAccountCheckbox]);
    const { getInstruments, isPaymentDataRequired } = checkoutState.data;
    const { isInitializingPayment, isLoadingInstruments } = checkoutState.statuses;
    const instruments = getInstruments(method) || [];
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ containerId: "boltEmbeddedOneClick", deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, initializeCustomer: initializeBoltCustomer, initializePayment: initializeBoltPayment, instruments: instruments, isInitializing: isInitializingPayment(), isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: !isGuestCustomer, loadInstruments: checkoutService.loadInstruments, method: method, renderCustomPaymentForm: renderCustomPaymentForm, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer }, rest)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoltEmbeddedPaymentMethod);


/***/ },

/***/ "./packages/bolt-integration/src/BoltPaymentMethod.tsx"
/*!*************************************************************!*\
  !*** ./packages/bolt-integration/src/BoltPaymentMethod.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _BoltClientPaymentMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoltClientPaymentMethod */ "./packages/bolt-integration/src/BoltClientPaymentMethod.tsx");
/* harmony import */ var _BoltEmbeddedPaymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoltEmbeddedPaymentMethod */ "./packages/bolt-integration/src/BoltEmbeddedPaymentMethod.tsx");





const BoltPaymentMethod = (_a) => {
    var _b;
    var { checkoutService, checkoutState, method, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method", "paymentForm"]);
    const useBoltEmbedded = (_b = method.initializationData) === null || _b === void 0 ? void 0 : _b.embeddedOneClickEnabled;
    if (useBoltEmbedded) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BoltEmbeddedPaymentMethod__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ checkoutService: checkoutService, checkoutState: checkoutState, method: method, paymentForm: paymentForm }, rest)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BoltClientPaymentMethod__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ checkoutService: checkoutService, checkoutState: checkoutState, method: method, paymentForm: paymentForm }, rest)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_2__["default"])(BoltPaymentMethod, [{ id: 'bolt' }]));


/***/ },

/***/ "./packages/bolt-integration/src/index.ts"
/*!************************************************!*\
  !*** ./packages/bolt-integration/src/index.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoltClientPaymentMethod: () => (/* reexport safe */ _BoltClientPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BoltEmbeddedPaymentMethod: () => (/* reexport safe */ _BoltEmbeddedPaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   BoltPaymentMethod: () => (/* reexport safe */ _BoltPaymentMethod__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _BoltClientPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoltClientPaymentMethod */ "./packages/bolt-integration/src/BoltClientPaymentMethod.tsx");
/* harmony import */ var _BoltEmbeddedPaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoltEmbeddedPaymentMethod */ "./packages/bolt-integration/src/BoltEmbeddedPaymentMethod.tsx");
/* harmony import */ var _BoltPaymentMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoltPaymentMethod */ "./packages/bolt-integration/src/BoltPaymentMethod.tsx");





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
//# sourceMappingURL=bolt-payment-method.js.map