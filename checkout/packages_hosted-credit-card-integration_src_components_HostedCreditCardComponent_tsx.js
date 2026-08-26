"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"],{

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx"
/*!**********************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardComponent.tsx ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/cba-mpgs */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/cba-mpgs.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/checkoutcom-custom */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/checkoutcom-custom.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_credit_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/credit-card */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/credit-card.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/sagepay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/sagepay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_td_bank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/td-bank */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/td-bank.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/credit-card-integration */ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _getHostedCreditCardValidationSchema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getHostedCreditCardValidationSchema */ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _getHostedInstrumentValidationSchema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./getHostedInstrumentValidationSchema */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _HostedCreditCardFieldset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HostedCreditCardFieldset */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx");
/* harmony import */ var _HostedCreditCardValidation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HostedCreditCardValidation */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");















const HOSTED_FIELD_INIT_TIMEOUT_MS = 30000;
function withTimeout(promise, ms, timeoutError) {
    let timer;
    const timeoutPromise = new Promise((_resolve, reject) => {
        timer = setTimeout(() => reject(timeoutError), ms);
    });
    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
}
const HostedCreditCardComponent = ({ method, checkoutService, checkoutState, paymentForm, language, onUnhandledError, initializePayment: initializePaymentProp, }) => {
    var _a, _b, _c, _d, _e, _f;
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const isCBAMPGSResolverEnabled = (_c = (_b = (_a = checkoutState.data.getConfig()) === null || _a === void 0 ? void 0 : _a.checkoutSettings.features) === null || _b === void 0 ? void 0 : _b['PI-4748.cba_resolver_configuration']) !== null && _c !== void 0 ? _c : false;
    const isSagePayResolverEnabled = (_f = (_e = (_d = checkoutState.data.getConfig()) === null || _d === void 0 ? void 0 : _d.checkoutSettings.features) === null || _e === void 0 ? void 0 : _e['PI-4754.sage_pay_resolver_configuration']) !== null && _f !== void 0 ? _f : false;
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_13__["default"])(checkoutState);
    const { config: { cardCode, isHostedFormEnabled, showCardHolderName }, } = method;
    const isCardCodeRequired = cardCode || cardCode === null;
    const isCardHolderNameRequired = showCardHolderName !== null && showCardHolderName !== void 0 ? showCardHolderName : true;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_7__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
    const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const styleProps = ['color', 'fontFamily', 'fontSize', 'fontWeight'];
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        let styleContainerId = '';
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
                    cardCodeVerification: isInstrumentCardCodeRequired
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_cvv_label'),
                            containerId: getHostedFieldId('ccCvv'),
                            instrumentId: selectedInstrument.bigpayToken,
                        }
                        : undefined,
                    cardNumberVerification: isInstrumentCardNumberRequired
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
                    cardName: isCardHolderNameRequired
                        ? {
                            accessibilityLabel: language.translate('payment.credit_card_name_label'),
                            containerId: getHostedFieldId('ccName'),
                        }
                        : undefined,
                    cardNumber: {
                        accessibilityLabel: language.translate('payment.credit_card_number_label'),
                        containerId: getHostedFieldId('ccNumber'),
                    },
                },
            styles: styleContainerId
                ? {
                    default: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(styleContainerId, styleProps),
                    error: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__.CreditCardInputStylesType.Error),
                    focus: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__.CreditCardInputStylesType.Focus),
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
                (0,lodash__WEBPACK_IMPORTED_MODULE_7__.forIn)(errors, (fieldErrors = [], fieldType) => {
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
        isCardHolderNameRequired,
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
    const hostedFieldset = (react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_HostedCreditCardFieldset__WEBPACK_IMPORTED_MODULE_16__["default"], { additionalFields: method.config.requireCustomerCode && (react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "ccCustomerCode" })), cardCodeId: isCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardExpiryId: getHostedFieldId('ccExpiry'), cardNameId: isCardHolderNameRequired ? getHostedFieldId('ccName') : undefined, cardNumberId: getHostedFieldId('ccNumber'), focusedFieldType: focusedFieldType }));
    const hostedValidationSchema = (0,_getHostedCreditCardValidationSchema__WEBPACK_IMPORTED_MODULE_14__["default"])({ language });
    const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((selectedInstrument) => {
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_HostedCreditCardValidation__WEBPACK_IMPORTED_MODULE_17__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired
                ? getHostedFieldId('ccNumber')
                : undefined, focusedFieldType: focusedFieldType }));
    }, [
        focusedFieldType,
        getHostedFieldId,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        method,
    ]);
    const initializePayment = initializePaymentProp !== null && initializePaymentProp !== void 0 ? initializePaymentProp : checkoutService.initializePayment;
    const initializeHostedCreditCardPayment = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const initializeOptions = Object.assign(Object.assign(Object.assign({}, options), { integrations: [
                _bigcommerce_checkout_sdk_integrations_credit_card__WEBPACK_IMPORTED_MODULE_4__.createCreditCardPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_1__.createBlueSnapDirectCreditCardPaymentStrategy,
                ...(isCBAMPGSResolverEnabled ? [_bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_2__.createCBAMPGSPaymentStrategy] : []),
                ...(isSagePayResolverEnabled ? [_bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_5__.createSagePayPaymentStrategy] : []),
                _bigcommerce_checkout_sdk_integrations_td_bank__WEBPACK_IMPORTED_MODULE_6__.createTDOnlineMartPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_3__.createCheckoutComCreditCardPaymentStrategy,
            ] }), (isHostedFormEnabled && {
            creditCard: {
                form: yield getHostedFormOptions(selectedInstrument),
                bigpayToken: selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken,
            },
        }));
        if (!isHostedFormEnabled) {
            return initializePayment(initializeOptions);
        }
        return withTimeout(initializePayment(initializeOptions), HOSTED_FIELD_INIT_TIMEOUT_MS, new Error(language.translate('payment.payment_method_unavailable_error')));
    }), [
        getHostedFormOptions,
        initializePayment,
        isHostedFormEnabled,
        isCBAMPGSResolverEnabled,
        isSagePayResolverEnabled,
        language,
    ]);
    const hostedStoredCardValidationSchema = (0,_getHostedInstrumentValidationSchema__WEBPACK_IMPORTED_MODULE_15__["default"])({ language });
    const props = {
        checkoutService,
        checkoutState,
        paymentForm,
        language,
        method,
        onUnhandledError,
    };
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, (isHostedFormEnabled && {
        cardFieldset: hostedFieldset,
        cardValidationSchema: hostedValidationSchema,
        getHostedFormOptions,
        getStoredCardValidationFieldset: getHostedStoredCardValidationFieldset,
        storedCardValidationSchema: hostedStoredCardValidationSchema,
    }), { deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeHostedCreditCardPayment })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardComponent);


/***/ }

}]);
//# sourceMappingURL=packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx.js.map