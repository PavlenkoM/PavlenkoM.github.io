"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["worldpay-credit-card-payment-method"],{

/***/ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx"
/*!***********************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./packages/worldpay-access-integration/src/WorldpayCreditCardPaymentMethod.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/worldpay-access-integration/src/WorldpayCreditCardPaymentMethod.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_worldpayaccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/worldpayaccess */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/worldpayaccess.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/credit-card-integration */ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");









const WorldpayCreditCardPaymentMethod = (_a) => {
    var { language, paymentForm, checkoutState, checkoutService, method } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["language", "paymentForm", "checkoutState", "checkoutService", "method"]);
    const [threeDSecureVerification, setThreeDSecureVerification] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { getHostedStoredCardValidationFieldset } = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__.useHostedCreditCard)({
        checkoutState,
        method,
        language,
        paymentForm,
    });
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(checkoutState);
    const { config: { cardCode }, } = method;
    const isCardCodeRequired = cardCode || cardCode === null;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
    const hostedStoredCardValidationSchema = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__["default"])({ language });
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({
        paymentPageContentRef: (0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)(),
    });
    const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
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
                    default: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(styleContainerId, styleProps),
                    error: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__.CreditCardInputStylesType.Error),
                    focus: yield (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(styleContainerId, styleProps, _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__.CreditCardInputStylesType.Focus),
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
                (0,lodash__WEBPACK_IMPORTED_MODULE_2__.forIn)(errors, (fieldErrors = [], fieldType) => {
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
    const cancelWorldpayModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        setThreeDSecureVerification(undefined);
        if (ref.current.cancelThreeDSecureVerification) {
            ref.current.cancelThreeDSecureVerification();
            ref.current.cancelThreeDSecureVerification = undefined;
        }
    }, []);
    const initializeWorldpayPayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_worldpayaccess__WEBPACK_IMPORTED_MODULE_1__.createWorldpayAccessPaymentStrategy], creditCard: {
                form: getHostedFormOptions && (yield getHostedFormOptions(selectedInstrument)),
            }, worldpay: {
                onLoad(content, cancel) {
                    setThreeDSecureVerification(content);
                    ref.current.cancelThreeDSecureVerification = cancel;
                },
            } }));
    }), [checkoutService, getHostedFormOptions]);
    const hostedValidationSchema = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"])({ language });
    const appendPaymentPageContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        var _a;
        if (threeDSecureVerification) {
            (_a = ref.current.paymentPageContentRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(threeDSecureVerification);
        }
    }, [threeDSecureVerification]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { cardFieldset: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_8__["default"], { additionalFields: method.config.requireCustomerCode && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"], { name: "ccCustomerCode" })), cardCodeId: isCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardExpiryId: getHostedFieldId('ccExpiry'), cardNameId: getHostedFieldId('ccName'), cardNumberId: getHostedFieldId('ccNumber'), focusedFieldType: focusedFieldType }), cardValidationSchema: hostedValidationSchema, checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, getStoredCardValidationFieldset: getHostedStoredCardValidationFieldset, initializePayment: initializeWorldpayPayment, language: language, method: method, paymentForm: paymentForm, storedCardValidationSchema: hostedStoredCardValidationSchema })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_14__["default"], { isOpen: !!threeDSecureVerification, onAfterOpen: appendPaymentPageContent, onRequestClose: cancelWorldpayModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { ref: ref.current.paymentPageContentRef }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_13__["default"])(WorldpayCreditCardPaymentMethod, [{ id: 'credit_card', gateway: 'worldpayaccess' }, { id: 'worldpayaccess' }]));


/***/ },

/***/ "./packages/worldpay-access-integration/src/WorldpayOpenBankingPaymentMethod.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/worldpay-access-integration/src/WorldpayOpenBankingPaymentMethod.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_worldpayaccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/worldpayaccess */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/worldpayaccess.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");




const WorldpayOpenBankingPaymentMethod = ({ method, checkoutService: { initializePayment, deinitializePayment }, onUnhandledError, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const initializeOpenBanking = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_worldpayaccess__WEBPACK_IMPORTED_MODULE_1__.createWorldpayAccessOpenBankingPaymentStrategy],
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void initializeOpenBanking();
        return () => {
            const deinitializeOpenBanking = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                try {
                    yield deinitializePayment({
                        gatewayId: method.gateway,
                        methodId: method.id,
                    });
                }
                catch (error) {
                    if (error instanceof Error) {
                        onUnhandledError(error);
                    }
                }
            });
            void deinitializeOpenBanking();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(WorldpayOpenBankingPaymentMethod, [{ id: 'open_banking', gateway: 'worldpayaccess' }]));


/***/ },

/***/ "./packages/worldpay-access-integration/src/index.ts"
/*!***********************************************************!*\
  !*** ./packages/worldpay-access-integration/src/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldpayCreditCardPaymentMethod: () => (/* reexport safe */ _WorldpayCreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   WorldpayOpenBankingPaymentMethod: () => (/* reexport safe */ _WorldpayOpenBankingPaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _WorldpayCreditCardPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorldpayCreditCardPaymentMethod */ "./packages/worldpay-access-integration/src/WorldpayCreditCardPaymentMethod.tsx");
/* harmony import */ var _WorldpayOpenBankingPaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldpayOpenBankingPaymentMethod */ "./packages/worldpay-access-integration/src/WorldpayOpenBankingPaymentMethod.tsx");




/***/ }

}]);
//# sourceMappingURL=worldpay-credit-card-payment-method.js.map