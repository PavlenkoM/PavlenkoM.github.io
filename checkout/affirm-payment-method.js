"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["affirm-payment-method"],{

/***/ "./packages/affirm-integration/src/AffirmPaymentMethod.tsx"
/*!*****************************************************************!*\
  !*** ./packages/affirm-integration/src/AffirmPaymentMethod.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_affirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/affirm */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/affirm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");






const AffirmPaymentMethod = (_a) => {
    var { checkoutService } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService"]);
    const description = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.affirm_body_text" }), []);
    const initializeAffirmPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_affirm__WEBPACK_IMPORTED_MODULE_1__.createAffirmPaymentStrategy] }));
    }, [checkoutService]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checkoutService: checkoutService, deinitializePayment: checkoutService.deinitializePayment, description: description, initializePayment: initializeAffirmPayment })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__["default"])(AffirmPaymentMethod, [{ id: 'affirm' }]));


/***/ },

/***/ "./packages/affirm-integration/src/index.ts"
/*!**************************************************!*\
  !*** ./packages/affirm-integration/src/index.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffirmPaymentMethod: () => (/* reexport safe */ _AffirmPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AffirmPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AffirmPaymentMethod */ "./packages/affirm-integration/src/AffirmPaymentMethod.tsx");



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
//# sourceMappingURL=affirm-payment-method.js.map