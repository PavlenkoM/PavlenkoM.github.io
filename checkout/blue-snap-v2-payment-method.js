"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["blue-snap-v2-payment-method"],{

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapDirectAlternativePaymentMethod.tsx"
/*!*********************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapDirectAlternativePaymentMethod.tsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const BlueSnapDirectAlternativePaymentMethod = (_a) => {
    var { checkoutService } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService"]);
    const initializeBlueSnapDirectPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectAPMPaymentStrategy] }));
    }, [checkoutService]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checkoutService: checkoutService, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeBlueSnapDirectPayment })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(BlueSnapDirectAlternativePaymentMethod, [{ gateway: 'bluesnapdirect' }]));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapDirectEcpPaymentMethod.tsx"
/*!*************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapDirectEcpPaymentMethod.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/AccountInstrumentFieldset/AccountInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./packages/bluesnap-direct-integration/src/constants.ts");
/* harmony import */ var _fields_BlueSnapDirectEcpFieldset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/BlueSnapDirectEcpFieldset */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectEcpFieldset.tsx");
/* harmony import */ var _hooks_useEcpInstruments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useEcpInstruments */ "./packages/bluesnap-direct-integration/src/hooks/useEcpInstruments.ts");
/* harmony import */ var _validation_schemas_getEcpValidationSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validation-schemas/getEcpValidationSchema */ "./packages/bluesnap-direct-integration/src/validation-schemas/getEcpValidationSchema.ts");










const BlueSnapDirectEcpPaymentMethod = ({ method, checkoutService: { initializePayment, deinitializePayment, loadInstruments }, checkoutState: { data: { isPaymentDataRequired, getCustomer, getBillingAddress }, statuses: { isLoadingInstruments }, }, paymentForm: { disableSubmit, setValidationSchema, setFieldValue, getFormValues }, language, onUnhandledError, }) => {
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shopperPermission) => setDisabled(!shopperPermission), [setDisabled]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => disableSubmit(method, isPaymentDataRequired() && disabled), [disableSubmit, disabled, isPaymentDataRequired, method]);
    const initializeEcp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield initializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
            integrations: [_bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectAPMPaymentStrategy],
        });
    }), [initializePayment, method]);
    const deinitializeEcp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield deinitializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
        });
    }), [deinitializePayment, method.gateway, method.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void initializeEcp();
        return () => {
            void deinitializeEcp();
        };
    }, [deinitializeEcp, initializeEcp]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const loadInstrumentsOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield loadInstruments();
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        const { isGuest } = getCustomer() || {};
        const shouldLoadInstruments = !isGuest && method.config.isVaultingEnabled;
        if (shouldLoadInstruments) {
            void loadInstrumentsOrThrow();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { accountInstruments, currentInstrument, handleSelectInstrument, handleUseNewInstrument, isInstrumentFeatureAvailable, shouldShowInstrumentFieldset, shouldCreateNewInstrument, } = (0,_hooks_useEcpInstruments__WEBPACK_IMPORTED_MODULE_12__["default"])(method);
    const isLoading = isLoadingInstruments();
    const shouldShowForm = !shouldShowInstrumentFieldset || shouldCreateNewInstrument;
    const accountType = getFormValues().accountType;
    const shouldRenderCompanyName = accountType === _constants__WEBPACK_IMPORTED_MODULE_10__.BluesnapECPAccountType.CorporateChecking ||
        accountType === _constants__WEBPACK_IMPORTED_MODULE_10__.BluesnapECPAccountType.CorporateSavings;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        var _a;
        if (shouldRenderCompanyName) {
            setFieldValue('companyName', (_a = getBillingAddress()) === null || _a === void 0 ? void 0 : _a.company);
        }
        else {
            setFieldValue('companyName', undefined);
        }
    }, [shouldRenderCompanyName, setFieldValue, getBillingAddress]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        setValidationSchema(method, (0,_validation_schemas_getEcpValidationSchema__WEBPACK_IMPORTED_MODULE_13__["default"])(language, shouldShowForm, shouldRenderCompanyName));
    }, [language, shouldShowForm, shouldRenderCompanyName, setValidationSchema, method]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { hidden: true }, language.translate('payment.bluesnap_direct_electronic_check_label')), style: { paddingBottom: '1rem' } },
            shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "checkout-ach-form__instrument" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"], { instruments: accountInstruments, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewInstrument, selectedInstrument: currentInstrument }))),
            shouldShowForm && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fields_BlueSnapDirectEcpFieldset__WEBPACK_IMPORTED_MODULE_11__["default"], { language: language, shouldRenderCompanyName: shouldRenderCompanyName })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { labelContent: language.translate('payment.bluesnap_direct_permission'), name: "shopperPermission", onChange: onChange }),
            isInstrumentFeatureAvailable && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"], { instrumentId: currentInstrument === null || currentInstrument === void 0 ? void 0 : currentInstrument.bigpayToken, instruments: accountInstruments, isAccountInstrument: true })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__["default"])(BlueSnapDirectEcpPaymentMethod, [{ id: 'ecp', gateway: 'bluesnapdirect' }]));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapDirectIdealPaymentMethod.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapDirectIdealPaymentMethod.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _BlueSnapDirectInitializationData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlueSnapDirectInitializationData */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectInitializationData.ts");
/* harmony import */ var _fields_BlueSnapDirectSelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/BlueSnapDirectSelectField */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectSelectField.tsx");
/* harmony import */ var _validation_schemas_getIdealValidationSchema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-schemas/getIdealValidationSchema */ "./packages/bluesnap-direct-integration/src/validation-schemas/getIdealValidationSchema.ts");








const BlueSnapDirectIdealPaymentMethod = ({ method, checkoutService: { initializePayment, deinitializePayment }, paymentForm: { setValidationSchema }, language, }) => {
    if (!(0,_BlueSnapDirectInitializationData__WEBPACK_IMPORTED_MODULE_6__.isBlueSnapDirectInitializationData)(method.initializationData)) {
        throw new Error('Unable to get initialization data');
    }
    const { idealIssuers } = method.initializationData;
    const idealIssuersSelectOptions = idealIssuers.map((issuer) => ({
        value: issuer.issuerId,
        label: issuer.issuerName,
    }));
    const initializeIdeal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        setValidationSchema(method, (0,_validation_schemas_getIdealValidationSchema__WEBPACK_IMPORTED_MODULE_8__["default"])(language));
        yield initializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
            integrations: [_bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectAPMPaymentStrategy],
        });
    }), [initializePayment, method, setValidationSchema, language]);
    const deinitializeIdeal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield deinitializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
        });
    }), [deinitializePayment, method.gateway, method.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void initializeIdeal();
        return () => {
            void deinitializeIdeal();
        };
    }, [deinitializeIdeal, initializeIdeal]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: true }, language.translate('payment.ideal.label')), style: { paddingBottom: '1rem' } },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fields_BlueSnapDirectSelectField__WEBPACK_IMPORTED_MODULE_7__["default"], { labelContent: language.translate('payment.ideal.label'), name: "bic", options: {
                helperLabel: language.translate('payment.select_your_bank'),
                items: idealIssuersSelectOptions,
            } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(BlueSnapDirectIdealPaymentMethod, [{ id: 'ideal', gateway: 'bluesnapdirect' }]));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapDirectInitializationData.ts"
/*!**************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapDirectInitializationData.ts ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlueSnapDirectIdealIssuerList: () => (/* binding */ isBlueSnapDirectIdealIssuerList),
/* harmony export */   isBlueSnapDirectInitializationData: () => (/* binding */ isBlueSnapDirectInitializationData)
/* harmony export */ });
const isBlueSnapDirectIdealIssuerList = (array) => {
    if (!(Array.isArray(array) &&
        array.length &&
        'issuerId' in array[0] &&
        'issuerName' in array[0])) {
        return false;
    }
    return true;
};
const isBlueSnapDirectInitializationData = (object) => {
    if (!(typeof object === 'object' &&
        object !== null &&
        (('sepaCreditorCompanyName' in object &&
            typeof object.sepaCreditorCompanyName === 'string') ||
            ('idealIssuers' in object && isBlueSnapDirectIdealIssuerList(object.idealIssuers))))) {
        return false;
    }
    return true;
};


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapDirectPayByBankPaymentMethod.tsx"
/*!*******************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapDirectPayByBankPaymentMethod.tsx ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _BlueSnapDirectInitializationData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlueSnapDirectInitializationData */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectInitializationData.ts");
/* harmony import */ var _fields_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/BlueSnapDirectTextField */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectTextField.tsx");
/* harmony import */ var _validation_schemas_getPayByBankValidationSchema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-schemas/getPayByBankValidationSchema */ "./packages/bluesnap-direct-integration/src/validation-schemas/getPayByBankValidationSchema.ts");








const BlueSnapDirectPayByBankPaymentMethod = ({ method, language, paymentForm: { setValidationSchema }, checkoutService: { initializePayment, deinitializePayment }, }) => {
    if (!(0,_BlueSnapDirectInitializationData__WEBPACK_IMPORTED_MODULE_6__.isBlueSnapDirectInitializationData)(method.initializationData)) {
        throw new Error('Unable to get initialization data');
    }
    const initializePayByBank = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        setValidationSchema(method, (0,_validation_schemas_getPayByBankValidationSchema__WEBPACK_IMPORTED_MODULE_8__["default"])(language));
        yield initializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
            integrations: [_bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectAPMPaymentStrategy],
        });
    }), [initializePayment, language, method, setValidationSchema]);
    const deinitializePayByBank = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield deinitializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
        });
    }), [deinitializePayment, method.gateway, method.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void initializePayByBank();
        return () => {
            void deinitializePayByBank();
        };
    }, [deinitializePayByBank, initializePayByBank]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: true }, language.translate('payment.bluesnap_direct_iban.label')), style: { paddingBottom: '1rem' } },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fields_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_7__["default"], { autoComplete: "iban", labelContent: language.translate('payment.bluesnap_direct_iban.label'), name: "iban", useFloatingLabel: true })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(BlueSnapDirectPayByBankPaymentMethod, [{ id: 'pay_by_bank', gateway: 'bluesnapdirect' }]));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapDirectSepaPaymentMethod.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapDirectSepaPaymentMethod.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/AccountInstrumentFieldset/AccountInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _BlueSnapDirectInitializationData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BlueSnapDirectInitializationData */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectInitializationData.ts");
/* harmony import */ var _fields_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/BlueSnapDirectTextField */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectTextField.tsx");
/* harmony import */ var _hooks_useSepaInstruments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useSepaInstruments */ "./packages/bluesnap-direct-integration/src/hooks/useSepaInstruments.ts");
/* harmony import */ var _validation_schemas_getSepaValidationSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validation-schemas/getSepaValidationSchema */ "./packages/bluesnap-direct-integration/src/validation-schemas/getSepaValidationSchema.ts");










const BlueSnapDirectSepaPaymentMethod = (props) => {
    const { method, checkoutService: { initializePayment, deinitializePayment, loadInstruments }, checkoutState: { data: { isPaymentDataRequired }, statuses: { isLoadingInstruments }, }, paymentForm: { disableSubmit, setValidationSchema }, language, onUnhandledError, } = props;
    if (!(0,_BlueSnapDirectInitializationData__WEBPACK_IMPORTED_MODULE_10__.isBlueSnapDirectInitializationData)(method.initializationData)) {
        throw new Error('Unable to get initialization data');
    }
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const toggleSubmitButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shopperPermission) => setDisabled(!shopperPermission), [setDisabled]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => disableSubmit(method, isPaymentDataRequired() && disabled), [disableSubmit, disabled, isPaymentDataRequired, method]);
    const initializeSepa = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield initializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
            integrations: [_bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectAPMPaymentStrategy],
        });
    }), [initializePayment, method]);
    const deinitializeSepa = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield deinitializePayment({
            gatewayId: method.gateway,
            methodId: method.id,
        });
    }), [deinitializePayment, method.gateway, method.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void initializeSepa();
        return () => {
            void deinitializeSepa();
        };
    }, [deinitializeSepa, initializeSepa]);
    const { accountInstruments, currentInstrument, handleSelectInstrument, handleUseNewInstrument, isInstrumentFeatureAvailable, shouldShowInstrumentFieldset, shouldCreateNewInstrument, } = (0,_hooks_useSepaInstruments__WEBPACK_IMPORTED_MODULE_12__["default"])(method);
    const shouldShowForm = !shouldShowInstrumentFieldset || shouldCreateNewInstrument;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        setValidationSchema(method, (0,_validation_schemas_getSepaValidationSchema__WEBPACK_IMPORTED_MODULE_13__["default"])(language, shouldShowForm));
    }, [language, shouldShowForm, setValidationSchema, method]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const loadInstrumentsOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield loadInstruments();
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        if (isInstrumentFeatureAvailable) {
            void loadInstrumentsOrThrow();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const isLoading = isLoadingInstruments();
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { hidden: true }, language.translate('payment.bluesnap_direct_sepa_direct_debit')), style: { paddingBottom: '1rem' } },
            shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "checkout-ach-form__instrument" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"], { instruments: accountInstruments, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewInstrument, selectedInstrument: currentInstrument }))),
            shouldShowForm && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fields_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_11__["default"], { autoComplete: "iban", labelContent: language.translate('payment.bluesnap_direct_iban.label'), name: "iban", useFloatingLabel: true }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fields_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_11__["default"], { labelContent: language.translate('address.first_name_label'), name: "firstName", useFloatingLabel: true }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fields_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_11__["default"], { labelContent: language.translate('address.last_name_label'), name: "lastName", useFloatingLabel: true }))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { labelContent: language.translate('payment.bluesnap_direct_sepa_mandate_disclaimer', {
                    creditorName: method.initializationData.sepaCreditorCompanyName,
                }), name: "shopperPermission", onChange: toggleSubmitButton }),
            isInstrumentFeatureAvailable && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"], { instrumentId: currentInstrument === null || currentInstrument === void 0 ? void 0 : currentInstrument.bigpayToken, instruments: accountInstruments, isAccountInstrument: true })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_5__["default"])(BlueSnapDirectSepaPaymentMethod, [{ id: 'sepa_direct_debit', gateway: 'bluesnapdirect' }]));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/BlueSnapV2PaymentMethod.tsx"
/*!******************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/BlueSnapV2PaymentMethod.tsx ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "../checkout-sdk-js/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");






const BlueSnapV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, method, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "method", "paymentForm"]);
    const [isLoadingIframe, setisLoadingIframe] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [paymentPageContent, setPaymentPageContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        paymentPageContentRef: (0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)(),
    });
    const cancelBlueSnapV2ModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setPaymentPageContent(undefined);
        if (ref.current.cancelBlueSnapV2Payment) {
            ref.current.cancelBlueSnapV2Payment();
            ref.current.cancelBlueSnapV2Payment = undefined;
        }
    }, []);
    const initializeBlueSnapV2Payment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapV2PaymentStrategy], bluesnapv2: {
                onLoad(content, cancel) {
                    setPaymentPageContent(content);
                    setisLoadingIframe(true);
                    ref.current.cancelBlueSnapV2Payment = cancel;
                },
                style: {
                    border: '1px solid lightgray',
                    height: '60vh',
                    width: '100%',
                },
            } }));
    }, [checkoutService]);
    const appendPaymentPageContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        if (ref.current.paymentPageContentRef.current && paymentPageContent) {
            paymentPageContent.addEventListener('load', () => {
                setisLoadingIframe(false);
            });
            ref.current.paymentPageContentRef.current.appendChild(paymentPageContent);
        }
    }, [paymentPageContent]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeBlueSnapV2Payment, method: method, paymentForm: paymentForm })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalModalClassName: "modal--bluesnap", isOpen: !!paymentPageContent, onAfterOpen: appendPaymentPageContent, onRequestClose: cancelBlueSnapV2ModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: isLoadingIframe },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { ref: ref.current.paymentPageContentRef })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(BlueSnapV2PaymentMethod, [{ gateway: 'bluesnapv2' }]));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/constants.ts"
/*!***************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/constants.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BluesnapECPAccountType: () => (/* binding */ BluesnapECPAccountType)
/* harmony export */ });
var BluesnapECPAccountType;
(function (BluesnapECPAccountType) {
    BluesnapECPAccountType["ConsumerChecking"] = "CONSUMER_CHECKING";
    BluesnapECPAccountType["ConsumerSavings"] = "CONSUMER_SAVINGS";
    BluesnapECPAccountType["CorporateChecking"] = "CORPORATE_CHECKING";
    BluesnapECPAccountType["CorporateSavings"] = "CORPORATE_SAVINGS";
})(BluesnapECPAccountType || (BluesnapECPAccountType = {}));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectEcpFieldset.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectEcpFieldset.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/bluesnap-direct-integration/src/constants.ts");
/* harmony import */ var _BlueSnapDirectNumberField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlueSnapDirectNumberField */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectNumberField.tsx");
/* harmony import */ var _BlueSnapDirectSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlueSnapDirectSelectField */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectSelectField.tsx");
/* harmony import */ var _BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlueSnapDirectTextField */ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectTextField.tsx");





const BlueSnapDirectEcpFieldset = ({ language, useFloatingLabel, shouldRenderCompanyName, }) => {
    const options = {
        helperLabel: language.translate('payment.bluesnap_direct_account_type_select.label'),
        items: [
            {
                label: language.translate('payment.bluesnap_direct_account_type_select.option_consumer_checking'),
                value: _constants__WEBPACK_IMPORTED_MODULE_1__.BluesnapECPAccountType.ConsumerChecking,
            },
            {
                label: language.translate('payment.bluesnap_direct_account_type_select.option_consumer_savings'),
                value: _constants__WEBPACK_IMPORTED_MODULE_1__.BluesnapECPAccountType.ConsumerSavings,
            },
            {
                label: language.translate('payment.bluesnap_direct_account_type_select.option_corporate_checking'),
                value: _constants__WEBPACK_IMPORTED_MODULE_1__.BluesnapECPAccountType.CorporateChecking,
            },
            {
                label: language.translate('payment.bluesnap_direct_account_type_select.option_corporate_savings'),
                value: _constants__WEBPACK_IMPORTED_MODULE_1__.BluesnapECPAccountType.CorporateSavings,
            },
        ],
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlueSnapDirectNumberField__WEBPACK_IMPORTED_MODULE_2__["default"], { labelContent: language.translate('payment.bluesnap_direct_account_number.label'), maxLength: 17, name: "accountNumber", useFloatingLabel: useFloatingLabel }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlueSnapDirectNumberField__WEBPACK_IMPORTED_MODULE_2__["default"], { labelContent: language.translate('payment.bluesnap_direct_routing_number.label'), maxLength: 9, name: "routingNumber", useFloatingLabel: useFloatingLabel }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlueSnapDirectSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], { labelContent: language.translate('payment.bluesnap_direct_account_type.label'), name: "accountType", options: options, useFloatingLabel: useFloatingLabel }),
        shouldRenderCompanyName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlueSnapDirectTextField__WEBPACK_IMPORTED_MODULE_4__["default"], { labelContent: language.translate('address.company_name_label'), name: "companyName", useFloatingLabel: useFloatingLabel }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BlueSnapDirectEcpFieldset));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectNumberField.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectNumberField.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");



const BlueSnapDirectNumberField = (_a) => {
    var { maxLength, useFloatingLabel } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["maxLength", "useFloatingLabel"]);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { "aria-labelledby": `${field.name}-label ${field.name}-field-error-message`, autoComplete: "cc-number", fieldType: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].TELEPHONE, id: field.name, isFloatingLabelEnabled: useFloatingLabel, maxLength: maxLength }))), [maxLength, useFloatingLabel]);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ input: renderInput }, rest));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BlueSnapDirectNumberField));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectSelectField.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectSelectField.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");



const BlueSnapDirectSelectField = (_a) => {
    var { options: { helperLabel, items, rows }, useFloatingLabel } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["options", "useFloatingLabel"]);
    const renderSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { "aria-labelledby": `${field.name}-label ${field.name}-field-error-message`, fieldType: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].DROPDOWM, id: field.name, isFloatingLabelEnabled: useFloatingLabel, options: items, placeholder: helperLabel, rows: rows }))), [helperLabel, items, rows, useFloatingLabel]);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, rest, { input: renderSelect }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BlueSnapDirectSelectField));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectTextField.tsx"
/*!*************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/fields/BlueSnapDirectTextField.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx");



const BlueSnapDirectTextField = (_a) => {
    var { maxLength, useFloatingLabel, autoComplete } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["maxLength", "useFloatingLabel", "autoComplete"]);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { "aria-labelledby": `${field.name}-label ${field.name}-field-error-message`, autoComplete: autoComplete, id: field.name, isFloatingLabelEnabled: useFloatingLabel, maxLength: maxLength }))), [maxLength, useFloatingLabel, autoComplete]);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ input: renderInput }, rest));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BlueSnapDirectTextField));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/hooks/useEcpInstruments.ts"
/*!*****************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/hooks/useEcpInstruments.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isAchInstrument/isAchInstrument.ts");




const useEcpInstruments = (method) => {
    const [currentInstrument, setCurrentInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const customer = checkoutState.data.getCustomer();
    const instruments = checkoutState.data.getInstruments(method);
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const { setFieldValue } = paymentForm;
    const accountInstruments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (instruments) {
            return instruments.filter(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"]);
        }
        return [];
    }, [instruments]);
    const isInstrumentFeatureAvailable = !(customer === null || customer === void 0 ? void 0 : customer.isGuest) && Boolean(method.config.isVaultingEnabled);
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailable && accountInstruments.length > 0;
    const shouldCreateNewInstrument = shouldShowInstrumentFieldset && !currentInstrument;
    const getDefaultInstrument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (!accountInstruments.length) {
            return;
        }
        const defaultAccountInstrument = accountInstruments.filter(({ defaultInstrument }) => defaultInstrument);
        return defaultAccountInstrument[0] || accountInstruments[0];
    }, [accountInstruments]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setCurrentInstrument(isInstrumentFeatureAvailable ? getDefaultInstrument() : undefined);
    }, [isInstrumentFeatureAvailable, getDefaultInstrument]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!shouldShowInstrumentFieldset) {
            setFieldValue('instrumentId', '');
        }
    }, [setFieldValue, shouldShowInstrumentFieldset]);
    const handleSelectInstrument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id) => {
        setCurrentInstrument((0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(accountInstruments, { bigpayToken: id }));
        setFieldValue('instrumentId', id);
        setFieldValue('shouldSetAsDefaultInstrument', false);
    }, [accountInstruments, setFieldValue]);
    const handleUseNewInstrument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setCurrentInstrument(undefined);
        setFieldValue('instrumentId', '');
        setFieldValue('shouldSaveInstrument', false);
        setFieldValue('shouldSetAsDefaultInstrument', false);
    }, [setFieldValue]);
    return {
        accountInstruments,
        currentInstrument,
        handleSelectInstrument,
        handleUseNewInstrument,
        isInstrumentFeatureAvailable,
        shouldShowInstrumentFieldset,
        shouldCreateNewInstrument,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEcpInstruments);


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/hooks/useSepaInstruments.ts"
/*!******************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/hooks/useSepaInstruments.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isSepaInstrument/isSepaInstrument.ts");




const useSepaInstruments = (method) => {
    const [currentInstrument, setCurrentInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const customer = checkoutState.data.getCustomer();
    const instruments = checkoutState.data.getInstruments(method);
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const { setFieldValue } = paymentForm;
    const accountInstruments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (instruments) {
            return instruments.filter(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__.isSepaInstrument);
        }
        return [];
    }, [instruments]);
    const isInstrumentFeatureAvailable = !(customer === null || customer === void 0 ? void 0 : customer.isGuest) && Boolean(method.config.isVaultingEnabled);
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailable && accountInstruments.length > 0;
    const shouldCreateNewInstrument = shouldShowInstrumentFieldset && !currentInstrument;
    const getDefaultInstrument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (!accountInstruments.length) {
            return;
        }
        const defaultAccountInstrument = accountInstruments.filter(({ defaultInstrument }) => defaultInstrument);
        return defaultAccountInstrument[0] || accountInstruments[0];
    }, [accountInstruments]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setCurrentInstrument(isInstrumentFeatureAvailable ? getDefaultInstrument() : undefined);
    }, [isInstrumentFeatureAvailable, getDefaultInstrument]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!shouldShowInstrumentFieldset) {
            setFieldValue('instrumentId', '');
        }
    }, [setFieldValue, shouldShowInstrumentFieldset]);
    const handleSelectInstrument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id) => {
        setCurrentInstrument((0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(accountInstruments, { bigpayToken: id }));
        setFieldValue('instrumentId', id);
        setFieldValue('shouldSetAsDefaultInstrument', false);
    }, [accountInstruments, setFieldValue]);
    const handleUseNewInstrument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setCurrentInstrument(undefined);
        setFieldValue('instrumentId', '');
        setFieldValue('shouldSaveInstrument', false);
        setFieldValue('shouldSetAsDefaultInstrument', false);
    }, [setFieldValue]);
    return {
        accountInstruments,
        currentInstrument,
        handleSelectInstrument,
        handleUseNewInstrument,
        isInstrumentFeatureAvailable,
        shouldShowInstrumentFieldset,
        shouldCreateNewInstrument,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSepaInstruments);


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/index.ts"
/*!***********************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlueSnapDirectAlternativePaymentMethod: () => (/* reexport safe */ _BlueSnapDirectAlternativePaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   BlueSnapDirectEcpPaymentMethod: () => (/* reexport safe */ _BlueSnapDirectEcpPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BlueSnapDirectIdealPaymentMethod: () => (/* reexport safe */ _BlueSnapDirectIdealPaymentMethod__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   BlueSnapDirectPayByBankPaymentMethod: () => (/* reexport safe */ _BlueSnapDirectPayByBankPaymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   BlueSnapDirectSepaPaymentMethod: () => (/* reexport safe */ _BlueSnapDirectSepaPaymentMethod__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   BlueSnapV2PaymentMethod: () => (/* reexport safe */ _BlueSnapV2PaymentMethod__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _BlueSnapDirectEcpPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlueSnapDirectEcpPaymentMethod */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectEcpPaymentMethod.tsx");
/* harmony import */ var _BlueSnapDirectAlternativePaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlueSnapDirectAlternativePaymentMethod */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectAlternativePaymentMethod.tsx");
/* harmony import */ var _BlueSnapDirectSepaPaymentMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlueSnapDirectSepaPaymentMethod */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectSepaPaymentMethod.tsx");
/* harmony import */ var _BlueSnapDirectIdealPaymentMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlueSnapDirectIdealPaymentMethod */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectIdealPaymentMethod.tsx");
/* harmony import */ var _BlueSnapV2PaymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlueSnapV2PaymentMethod */ "./packages/bluesnap-direct-integration/src/BlueSnapV2PaymentMethod.tsx");
/* harmony import */ var _BlueSnapDirectPayByBankPaymentMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlueSnapDirectPayByBankPaymentMethod */ "./packages/bluesnap-direct-integration/src/BlueSnapDirectPayByBankPaymentMethod.tsx");








/***/ },

/***/ "./packages/bluesnap-direct-integration/src/validation-schemas/getEcpValidationSchema.ts"
/*!***********************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/validation-schemas/getEcpValidationSchema.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getEcpValidationSchema(language, shouldRenderFields, shouldRenderCompanyName) {
    const schema = Object.assign(Object.assign({}, (!shouldRenderFields ? { instrumentId: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required() } : {})), (shouldRenderFields
        ? Object.assign(Object.assign({ accountNumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                .required(language.translate('payment.bluesnap_direct_account_number.is_required'))
                .matches(/^\d+$/, language.translate('payment.bluesnap_direct_account_number.only_numbers'))
                .min(4, language.translate('payment.bluesnap_direct_account_number.length'))
                .max(17, language.translate('payment.bluesnap_direct_account_number.length_max')), routingNumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                .required(language.translate('payment.bluesnap_direct_routing_number.is_required'))
                .matches(/^\d+$/, language.translate('payment.bluesnap_direct_routing_number.only_numbers'))
                .length(9, language.translate('payment.bluesnap_direct_routing_number.length')) }, (shouldRenderCompanyName
            ? {
                companyName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .required(language.translate('address.company_name_required_error'))
                    .max(50, language.translate('payment.bluesnap_direct_company_name.length_max')),
            }
            : {})), { accountType: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('payment.bluesnap_direct_account_type.is_required')) }) : {}));
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)(schema);
}));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/validation-schemas/getIdealValidationSchema.ts"
/*!*************************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/validation-schemas/getIdealValidationSchema.ts ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getIdealValidationSchema(language) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
        bic: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('payment.ideal_bic_required')),
    });
}));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/validation-schemas/getPayByBankValidationSchema.ts"
/*!*****************************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/validation-schemas/getPayByBankValidationSchema.ts ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getPayByBankValidationSchema(language) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
        iban: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .matches(/^[a-zA-Z0-9]+$/i, language.translate(`address.invalid_characters_error`, { label: 'IBAN' }))
            .required(language.translate('payment.pay_by_bank_iban_required')),
    });
}));


/***/ },

/***/ "./packages/bluesnap-direct-integration/src/validation-schemas/getSepaValidationSchema.ts"
/*!************************************************************************************************!*\
  !*** ./packages/bluesnap-direct-integration/src/validation-schemas/getSepaValidationSchema.ts ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getSepaValidationSchema(language, shouldRenderFields) {
    const schema = Object.assign(Object.assign({}, (!shouldRenderFields ? { instrumentId: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required() } : {})), (shouldRenderFields
        ? {
            iban: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                .matches(/^[a-zA-Z0-9]+$/i, language.translate(`address.invalid_characters_error`, { label: 'IBAN' }))
                .required(language.translate('payment.sepa_account_number_required')),
            firstName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('address.first_name_required_error')),
            lastName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('address.last_name_required_error')),
        }
        : {}));
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)(schema);
}));


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


/***/ },

/***/ "./packages/locale/src/withDate.tsx"
/*!******************************************!*\
  !*** ./packages/locale/src/withDate.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/LocaleContext.ts");
/* harmony import */ var _bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/legacy-hoc */ "./packages/legacy-hoc/src/createInjectHoc.tsx");


const withDate = (0,_bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_1__["default"])(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_0__.LocaleContext, {
    displayNamePrefix: 'withDate',
    pickProps: (value, key) => key === 'date' && !!value,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDate);


/***/ },

/***/ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx"
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/DynamicFormField/DynamicInput.tsx ***!
  \****************************************************************/
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
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withDate.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon */ "./packages/ui/src/icon/IconChevronDown.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CheckboxInput */ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx");
/* harmony import */ var _RadioInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RadioInput */ "./packages/ui/src/form/RadioInput/RadioInput.tsx");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TextArea */ "./packages/ui/src/form/TextArea/TextArea.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TextInput */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DynamicFormFieldType */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");











const ReactDatePicker = (0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(() => __webpack_require__.e(/*! import() | react-datepicker */ "react-datepicker").then(__webpack_require__.t.bind(__webpack_require__, /*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js", 23)));
const DynamicInput = (_a) => {
    var { fieldType, id, name, onChange = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, options, placeholder, value, isFloatingLabelEnabled, date, inputDateFormat } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["fieldType", "id", "name", "onChange", "options", "placeholder", "value", "isFloatingLabelEnabled", "date", "inputDateFormat"]);
    const inputFormat = inputDateFormat || date.inputFormat || '';
    const handleDateChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((dateValue, event) => onChange(Object.assign(Object.assign({}, event), { target: {
            name,
            value: dateValue,
        } })), [onChange, name]);
    switch (fieldType) {
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].DROPDOWM:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'dropdown-chevron': !isFloatingLabelEnabled }, { 'floating-select-chevron': isFloatingLabelEnabled }) },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null)),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("select", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-select': isFloatingLabelEnabled }, 'form-select optimizedCheckout-form-select', { 'floating-form-field-input': isFloatingLabelEnabled }), "data-test": `${id}-select`, id: id, name: name, onChange: onChange, value: value !== null && value !== void 0 ? value : '' }),
                    !!placeholder && react__WEBPACK_IMPORTED_MODULE_3___default().createElement("option", { value: "" }, placeholder),
                    options &&
                        options.map(({ label, value: optionValue }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("option", { key: optionValue, value: optionValue }, label))))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].RADIO:
            if (!options || !options.length) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, options.map(({ label, value: optionValue }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_RadioInput__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, { checked: optionValue === value, id: `${id}-${optionValue}`, key: optionValue, label: label, name: name, onChange: onChange, testId: `${id}-${optionValue}-radio`, value: optionValue }))))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].CHECKBOX:
            if (!options || !options.length) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, options.map(({ label, value: optionValue }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, rest, { checked: Array.isArray(value) ? value.includes(optionValue) : false, id: `${id}-${optionValue}`, key: optionValue, label: label, name: name, onChange: onChange, testId: `${id}-${optionValue}-checkbox`, value: optionValue }))))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].DATE:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ReactDatePicker
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                , Object.assign({}, rest, { autoComplete: "off", 
                    // FIXME: we can avoid this by simply using onChangeRaw, but it's not being triggered properly
                    // https://github.com/Hacker0x01/react-datepicker/issues/1357
                    // onChangeRaw={ rest.onChange }
                    calendarClassName: "optimizedCheckout-contentPrimary", className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input optimizedCheckout-form-input', {
                        'floating-input floating-form-field-input': isFloatingLabelEnabled,
                    }), dateFormat: inputFormat, maxDate: rest.max ? new Date(`${rest.max}T00:00:00Z`) : undefined, minDate: rest.min ? new Date(`${rest.min}T00:00:00Z`) : undefined, name: name, onChange: handleDateChange, placeholderText: inputFormat.toUpperCase(), popperClassName: "optimizedCheckout-contentPrimary", selected: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isDate)(value) ? value : undefined }))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].MULTILINE:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TextArea__WEBPACK_IMPORTED_MODULE_8__["default"]
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            , Object.assign({}, rest, { id: id, isFloatingLabelEnabled: isFloatingLabelEnabled, name: name, onChange: onChange, testId: `${id}-text`, type: fieldType, value: value })));
        default:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, rest, { id: id, isFloatingLabelEnabled: isFloatingLabelEnabled, name: name, onChange: onChange, placeholder: placeholder, testId: `${id}-${fieldType === _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].PASSWORD ? 'password' : 'text'}`, type: fieldType, value: value })));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"])(DynamicInput)));


/***/ },

/***/ "./packages/ui/src/form/RadioInput/RadioInput.tsx"
/*!********************************************************!*\
  !*** ./packages/ui/src/form/RadioInput/RadioInput.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input/Input */ "./packages/ui/src/form/Input/Input.tsx");
/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Label/Label */ "./packages/ui/src/form/Label/Label.tsx");





const RadioInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, value, checked, id } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "value", "checked", "id"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checked: checked, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-radio', 'optimizedCheckout-form-radio', additionalClassName), id: id, ref: ref, type: "radio", value: value })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "body-regular", htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioInput);


/***/ },

/***/ "./packages/ui/src/icon/IconChevronDown.tsx"
/*!**************************************************!*\
  !*** ./packages/ui/src/icon/IconChevronDown.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconChevronDownSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })));
const IconChevronDown = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconChevronDownSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconChevronDown));


/***/ }

}]);
//# sourceMappingURL=blue-snap-v2-payment-method.js.map