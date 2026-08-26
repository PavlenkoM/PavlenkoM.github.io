"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["stripe-ocspayment-method"],{

/***/ "./packages/checkout-button-integration/src/CheckoutButton.tsx"
/*!*********************************************************************!*\
  !*** ./packages/checkout-button-integration/src/CheckoutButton.tsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/dom-utils/src/getAppliedStyles.ts"
/*!****************************************************!*\
  !*** ./packages/dom-utils/src/getAppliedStyles.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx"
/*!************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");




const HostedCreditCardCodeField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "has-icon", appearFocused: appearFocused, id: id }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], null))), [id, appearFocused]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_cvv_label" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_1__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "has-tip" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-ccFields-field--ccCvv", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardCodeField);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx"
/*!************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");



const HostedCreditCardExpiryField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: appearFocused, id: id }), [id, appearFocused]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccExpiry", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_expiration_label" }), name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardExpiryField);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx"
/*!****************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");



const HostedCreditCardNumberField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "has-icon", appearFocused: appearFocused, id: id }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null))), [id, appearFocused]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccNumber", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_number_label" }), name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardNumberField);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx"
/*!**************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx");



const HostedCreditCardValidation = ({ cardCodeId, cardNumberId, cardExpiryId, focusedFieldType, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    cardNumberId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        cardNumberId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: focusedFieldType === 'cardNumber', id: cardNumberId, name: "hostedForm.errors.cardNumberVerification" })),
        cardCodeId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_3__["default"], { appearFocused: focusedFieldType === 'cardCode', id: cardCodeId, name: "hostedForm.errors.cardCodeVerification" })),
        cardExpiryId && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_4__["default"], { appearFocused: focusedFieldType === 'cardExpiry', id: cardExpiryId, name: "hostedForm.errors.cardExpiryVerification" })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardValidation);


/***/ },

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

/***/ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx"
/*!********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardInputStylesType: () => (/* binding */ CreditCardInputStylesType),
/* harmony export */   "default": () => (/* binding */ getCreditCardInputStyles)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");





var CreditCardInputStylesType;
(function (CreditCardInputStylesType) {
    CreditCardInputStylesType["Default"] = "default";
    CreditCardInputStylesType["Error"] = "error";
    CreditCardInputStylesType["Focus"] = "focus";
})(CreditCardInputStylesType || (CreditCardInputStylesType = {}));
function getCreditCardInputStyles(containerId, properties, type = CreditCardInputStylesType.Default) {
    const container = document.createElement('div');
    const parentContainer = document.getElementById(containerId);
    if (!parentContainer) {
        throw new Error('Unable to retrieve input styles as the provided container ID is not valid.');
    }
    parentContainer.appendChild(container);
    return new Promise((resolve) => {
        const callbackRef = (element) => {
            if (!element) {
                return;
            }
            resolve((0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(element, properties));
            react_dom__WEBPACK_IMPORTED_MODULE_2__.unmountComponentAtNode(container);
            if (container.parentElement) {
                container.parentElement.removeChild(container);
            }
        };
        react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: { isSubmitted: true, setSubmitted: lodash__WEBPACK_IMPORTED_MODULE_0__.noop } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hasError: type === CreditCardInputStylesType.Error },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { appearFocused: type === CreditCardInputStylesType.Focus, ref: callbackRef }))), container);
    });
}


/***/ },

/***/ "./packages/stripe-integration/src/index.ts"
/*!**************************************************!*\
  !*** ./packages/stripe-integration/src/index.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StripeLinkV2Button: () => (/* reexport safe */ _stripe_ocs_StripeLinkV2Button__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   StripeOCSPaymentMethod: () => (/* reexport safe */ _stripe_ocs_StripeOCSPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   StripeUPEPaymentMethod: () => (/* reexport safe */ _stripe_upe_StripeUPEPaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   StripeV3PaymentMethod: () => (/* reexport safe */ _stripev3_StripeV3PaymentMethod__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _stripe_ocs_StripeOCSPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripe-ocs/StripeOCSPaymentMethod */ "./packages/stripe-integration/src/stripe-ocs/StripeOCSPaymentMethod.tsx");
/* harmony import */ var _stripe_upe_StripeUPEPaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripe-upe/StripeUPEPaymentMethod */ "./packages/stripe-integration/src/stripe-upe/StripeUPEPaymentMethod.tsx");
/* harmony import */ var _stripev3_StripeV3PaymentMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripev3/StripeV3PaymentMethod */ "./packages/stripe-integration/src/stripev3/StripeV3PaymentMethod.tsx");
/* harmony import */ var _stripe_ocs_StripeLinkV2Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-ocs/StripeLinkV2Button */ "./packages/stripe-integration/src/stripe-ocs/StripeLinkV2Button.tsx");







/***/ },

/***/ "./packages/stripe-integration/src/stripe-ocs/StripeLinkV2Button.tsx"
/*!***************************************************************************!*\
  !*** ./packages/stripe-integration/src/stripe-ocs/StripeLinkV2Button.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/stripe.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-button-integration */ "./packages/checkout-button-integration/src/CheckoutButton.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/navigateToOrderConfirmation.ts");





const StripeLinkV2Button = (props) => {
    const additionalInitializationOptions = {
        onComplete: _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_4__["default"],
        loadingContainerId: 'checkout-app',
        methodId: 'optimized_checkout',
        gatewayId: 'stripeocs',
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ additionalInitializationOptions: additionalInitializationOptions, integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_0__.createStripeLinkV2CustomerStrategy] }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(StripeLinkV2Button, [{ id: 'stripeocs' }]));


/***/ },

/***/ "./packages/stripe-integration/src/stripe-ocs/StripeOCSPaymentMethod.tsx"
/*!*******************************************************************************!*\
  !*** ./packages/stripe-integration/src/stripe-ocs/StripeOCSPaymentMethod.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/stripe.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/ChecklistSkeleton.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/accordion/AccordionContext.tsx");
/* harmony import */ var _getStripeOCSStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getStripeOCSStyles */ "./packages/stripe-integration/src/stripe-ocs/getStripeOCSStyles.ts");










const StripeOCSPaymentMethod = (_a) => {
    var { paymentForm, checkoutState, checkoutService, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_2__.noop } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["paymentForm", "checkoutState", "checkoutService", "method", "onUnhandledError"]);
    const collapseStripeElement = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const toggleUpdateTimeout = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const { onToggle, selectedItemId } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"]);
    const [selectedPaymentMethodId, setSelectedPaymentMethodId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(selectedItemId);
    const [isOCSLoading, setIsOCSLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { enhancedThemeV1 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)();
    const methodSelector = `${method.gateway}-${method.id}`;
    const containerId = `${methodSelector}-component-field`;
    const currencySelectorContainerId = `${methodSelector}-provider-section-on-top-of-payments-list`;
    const paymentContext = paymentForm;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        /* INFO:
         * switching and loading BC accordion item takes more time than preloaded Stripe accordion items, and BC accordion toggle is blocked during loading
         * switching BC accordion items and loading payment methods triggers state update for BC accordion context
         * thats why we need to double call onToggle for BC accordion with actual context state, for cases when the first toggle call has no effect because of loading state
         */
        if (toggleUpdateTimeout.current) {
            clearTimeout(toggleUpdateTimeout.current);
            toggleUpdateTimeout.current = undefined;
        }
        if (!!selectedPaymentMethodId && selectedItemId !== selectedPaymentMethodId) {
            toggleUpdateTimeout.current = setTimeout(() => {
                onToggle(selectedPaymentMethodId);
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onToggle]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        var _a;
        if (selectedItemId === methodSelector) {
            return;
        }
        setSelectedPaymentMethodId(selectedItemId);
        (_a = collapseStripeElement.current) === null || _a === void 0 ? void 0 : _a.call(collapseStripeElement);
    }, [selectedItemId, methodSelector]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (selectedPaymentMethodId !== methodSelector) {
            return;
        }
        onToggle(selectedPaymentMethodId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPaymentMethodId, methodSelector]);
    const renderSubmitButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        paymentContext.hidePaymentSubmitButton(method, false);
    }, [paymentContext, method]);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const { initializationData: { isCustomChecklistItem }, } = method;
    const initializeStripePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        setIsOCSLoading(true);
        const theme = enhancedThemeV1 ? _getStripeOCSStyles__WEBPACK_IMPORTED_MODULE_11__.CheckoutTheme.ENHANCED_THEME_V1 : _getStripeOCSStyles__WEBPACK_IMPORTED_MODULE_11__.CheckoutTheme.DEFAULT;
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__.createStripeOCSPaymentStrategy, _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__.createStripeCSPaymentStrategy], stripeocs: {
                containerId,
                currencySelectorContainerId,
                layout: {
                    type: isCustomChecklistItem ? 'accordion' : 'auto',
                    defaultCollapsed: selectedItemId !== methodSelector,
                    radios: 'always',
                    linkInAccordion: true,
                    spacedAccordionItems: !!enhancedThemeV1,
                    visibleAccordionItemsCount: 0,
                },
                appearance: (0,_getStripeOCSStyles__WEBPACK_IMPORTED_MODULE_11__.getAppearanceForOCSElement)(containerId, theme),
                fonts: (0,_getStripeOCSStyles__WEBPACK_IMPORTED_MODULE_11__.getFonts)(),
                onError: onUnhandledError,
                render: renderSubmitButton,
                paymentMethodSelect: setSelectedPaymentMethodId,
                handleClosePaymentMethod: (collapseElement) => {
                    collapseStripeElement.current = collapseElement;
                },
                togglePreloader: setIsOCSLoading,
            } }));
    }), [
        containerId,
        currencySelectorContainerId,
        selectedItemId,
        methodSelector,
        isCustomChecklistItem,
        enhancedThemeV1,
        checkoutService,
        onUnhandledError,
        renderSubmitButton,
        setSelectedPaymentMethodId,
        setIsOCSLoading,
    ]);
    const initializeStripeCustomer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => {
        return checkoutService.initializeCustomer(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__.createStripeLinkV2CustomerStrategy] }));
    }, [checkoutService]);
    if (!isPaymentDataRequired()) {
        return null;
    }
    const renderCustomOCSSectionStyles = () => {
        const currencySelectorStyles = `
            #${currencySelectorContainerId} {
                margin-bottom: 20px;
            }
        `;
        return enhancedThemeV1 ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("style", null,
            `
                    .custom-checklist-item#radio-${methodSelector} {
                        border: none;
                    }
                `,
            currencySelectorStyles)) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("style", null,
            `
                    .custom-checklist-item#radio-${methodSelector} {
                        border-bottom: none;
                    }
                    .custom-checklist-item#radio-${methodSelector}:last-of-type {
                        margin-bottom: -1px;
                    }
                `,
            currencySelectorStyles));
    };
    const renderCheckoutElementsForStripeOCSStyling = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { style: { display: 'none' } },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-checklist-item optimizedCheckout-form-checklist-item", id: `${containerId}--accordion-header` },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", { className: "form-checklist-checkbox optimizedCheckout-form-checklist-checkbox", id: `${containerId}-radio-input`, type: "radio" }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-label optimizedCheckout-form-label sub-header" })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-checklist-item optimizedCheckout-form-checklist-item form-checklist-item--selected optimizedCheckout-form-checklist-item--selected", id: `${containerId}--accordion-header-selected` },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-checklist-header--selected", id: `${containerId}--accordion-header-selected` },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", { className: "form-checklist-checkbox optimizedCheckout-form-checklist-checkbox", defaultChecked: true, id: `${containerId}-radio-input-selected`, type: "radio" }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-label optimizedCheckout-form-label" }))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "optimizedCheckout-form-input", id: `${containerId}--input` },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-field--error" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "optimizedCheckout-form-label", id: `${containerId}--error` })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "optimizedCheckout-form-label", id: `${containerId}--label` }))));
    const renderPreloader = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { "data-test": "stripe-accordion-skeleton", style: { padding: '10px 18px' } },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        isOCSLoading ? renderPreloader() : renderCustomOCSSectionStyles(),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, rest, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializeCustomer: initializeStripeCustomer, initializePayment: initializeStripePayment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(checkoutState), isInstrumentFeatureAvailable: false, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, signOut: checkoutService.signOutCustomer })),
        renderCheckoutElementsForStripeOCSStyling()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_8__["default"])(StripeOCSPaymentMethod, [
    { gateway: 'stripeocs', id: 'optimized_checkout' },
    { gateway: 'stripeocs', id: 'checkout_session' },
]));


/***/ },

/***/ "./packages/stripe-integration/src/stripe-ocs/getStripeOCSStyles.ts"
/*!**************************************************************************!*\
  !*** ./packages/stripe-integration/src/stripe-ocs/getStripeOCSStyles.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutTheme: () => (/* binding */ CheckoutTheme),
/* harmony export */   getAppearanceForOCSElement: () => (/* binding */ getAppearanceForOCSElement),
/* harmony export */   getFonts: () => (/* binding */ getFonts)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");


var CheckoutTheme;
(function (CheckoutTheme) {
    CheckoutTheme["DEFAULT"] = "default";
    CheckoutTheme["ENHANCED_THEME_V1"] = "enhancedThemeV1";
})(CheckoutTheme || (CheckoutTheme = {}));
const radioIconInnerScaleList = {
    [CheckoutTheme.DEFAULT]: 0.66,
    [CheckoutTheme.ENHANCED_THEME_V1]: 0.36,
};
const getStylesFromElement = (selector, properties, pseudoElementSelector) => {
    const element = document.querySelector(selector);
    return element ? (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(element, properties, pseudoElementSelector) : {};
};
const parseRadioIconSize = (size = 0) => typeof size !== 'number' ? parseFloat(size) : size;
const getRadioIconSizes = (sizes) => {
    const { radioIconOuterWidth = 26, radioIconOuterStrokeWidth = 1, radioIconInnerWidth = 17, } = sizes || {};
    const stripeSVGSizeCoefficient = 0.88; // Provided by Stripe team for scaling SVGs.
    const percentageCoefficient = stripeSVGSizeCoefficient * 100;
    const outerWidth = parseRadioIconSize(radioIconOuterWidth);
    const outerStrokeWidth = parseRadioIconSize(radioIconOuterStrokeWidth);
    const innerWidth = parseRadioIconSize(radioIconInnerWidth);
    const stripeEqualOuterWidth = (outerWidth / stripeSVGSizeCoefficient).toFixed(2);
    const stripeEqualOuterStrokeWidth = ((outerStrokeWidth / outerWidth) *
        percentageCoefficient).toFixed(2);
    const stripeEqualInnerRadius = (((innerWidth / outerWidth) * percentageCoefficient) /
        2).toFixed(2);
    return {
        outerWidth: `${stripeEqualOuterWidth}px`,
        outerStrokeWidth: `${stripeEqualOuterStrokeWidth}px`,
        innerRadius: stripeEqualInnerRadius,
    };
};
const getScaleFromTransformMatrix = (transformMatrixString = '') => {
    const transformMatrixRegex = /matrix\(([^)]+)\)/;
    const transformMatrix = transformMatrixRegex.exec(transformMatrixString);
    if (!transformMatrix) {
        return undefined;
    }
    const matrixValues = transformMatrix[1].split(',').map((value) => parseFloat(value.trim()));
    return matrixValues[0];
};
const getAccordionItemSpacing = (accordionSelectedHeaderStyles) => {
    const marginTop = parseFloat(accordionSelectedHeaderStyles['margin-top'] || '0');
    const marginBottom = parseFloat(accordionSelectedHeaderStyles['margin-bottom'] || '0');
    return `${marginTop + marginBottom}px`;
};
const getFonts = (selector = 'link[href*="font"]') => {
    const elementsList = document.querySelectorAll(selector);
    const fonts = [];
    elementsList.forEach((element) => {
        const fontSrc = element === null || element === void 0 ? void 0 : element.getAttribute('href');
        if (fontSrc) {
            fonts.push({ cssSrc: fontSrc });
        }
    });
    return fonts;
};
const getAppearanceForOCSElement = (containerId, theme = CheckoutTheme.DEFAULT) => {
    const defaultAccordionPaddingHorizontal = '18px';
    const defaultAccordionPaddingVertical = '13px';
    const defaultRadioIconInnerScale = radioIconInnerScaleList[theme];
    const formInputStyles = getStylesFromElement(`#${containerId}--input`, [
        'color',
        'background-color',
        'border-color',
        'box-shadow',
        'font-family',
    ]);
    const formLabelStyles = getStylesFromElement(`#${containerId}--label`, ['color']);
    const formErrorStyles = getStylesFromElement(`#${containerId}--error`, ['color']);
    const accordionHeaderLabelStyles = getStylesFromElement(`#${containerId}--accordion-header .form-label`, [
        'color',
        'font-size',
        'font-family',
        'font-weight',
        'padding-top',
        'padding-right',
        'padding-bottom',
    ]);
    const accordionHeaderStyles = getStylesFromElement(`#${containerId}--accordion-header`, [
        'background-color',
    ]);
    const accordionSelectedHeaderStyles = getStylesFromElement(`#${containerId}--accordion-header-selected`, ['background-color', 'border-color', 'margin-bottom', 'margin-top']);
    const formChecklistStyles = getStylesFromElement(`#${containerId}--accordion-header.optimizedCheckout-form-checklist-item`, [
        'border-bottom',
        'border-top',
        'border-left',
        'border-right',
        'border-color',
        'border-radius',
    ]);
    const { color: accordionHeaderColor, 'font-size': accordionItemTitleFontSize, 'font-family': accordionHeaderFontFamily, 'font-weight': accordionItemTitleFontWeight, 'padding-top': accordionPaddingTop = defaultAccordionPaddingVertical, 'padding-right': accordionPaddingRight = defaultAccordionPaddingHorizontal, 'padding-bottom': accordionPaddingBottom = defaultAccordionPaddingVertical, } = accordionHeaderLabelStyles;
    const accordionHeaderPadding = !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(accordionHeaderLabelStyles)
        ? `${accordionPaddingTop} ${accordionPaddingRight} ${accordionPaddingBottom} ${defaultAccordionPaddingHorizontal}`
        : undefined;
    const radioOuter = getStylesFromElement(`#${containerId}--accordion-header .form-label`, ['border-color', 'border-width', 'width', 'background-color'], '::before');
    const radioInner = getStylesFromElement(`#${containerId}--accordion-header .form-label`, ['border-color', 'border-width', 'width', 'background-color'], '::after');
    const radioOuterChecked = getStylesFromElement(`#${containerId}--accordion-header-selected .form-label`, ['border-color', 'background-color'], '::before');
    let radioInnerChecked = getStylesFromElement(`.form-checklist-header--selected .form-label`, ['border-color', 'background-color', 'width', 'transform'], '::after');
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(radioInnerChecked)) {
        radioInnerChecked = getStylesFromElement(`#${containerId}--accordion-header-selected .form-label`, ['border-color', 'background-color', 'width', 'transform'], '::after');
    }
    const radioInnerParsedSize = radioInnerChecked.width || radioOuter.width;
    const radioInnerWidthScale = getScaleFromTransformMatrix(radioInnerChecked.transform) || defaultRadioIconInnerScale;
    const radioIconSize = getRadioIconSizes({
        radioIconOuterWidth: radioOuter.width,
        radioIconOuterStrokeWidth: radioOuter['border-width'],
        radioIconInnerWidth: radioInnerParsedSize && parseRadioIconSize(radioInnerParsedSize) * radioInnerWidthScale,
    });
    const toggleItemBorderRadius = {
        [CheckoutTheme.DEFAULT]: '4px',
        [CheckoutTheme.ENHANCED_THEME_V1]: formChecklistStyles['border-radius'],
    };
    const toggleItemSelectedBorderColor = {
        [CheckoutTheme.DEFAULT]: radioInnerChecked['background-color'],
        [CheckoutTheme.ENHANCED_THEME_V1]: accordionSelectedHeaderStyles['border-color'],
    };
    return {
        variables: {
            colorPrimary: formInputStyles['box-shadow'],
            colorBackground: formInputStyles['background-color'],
            colorText: formLabelStyles.color,
            colorDanger: formErrorStyles.color,
            colorTextSecondary: formLabelStyles.color,
            colorTextPlaceholder: formInputStyles.color,
            colorIcon: formInputStyles.color,
            fontFamily: accordionHeaderFontFamily || formInputStyles['font-family'],
            accordionItemSpacing: getAccordionItemSpacing(accordionSelectedHeaderStyles),
        },
        rules: {
            '.Input': {
                borderColor: formInputStyles['border-color'],
                color: formInputStyles.color,
                boxShadow: formInputStyles['box-shadow'],
            },
            '.AccordionItem': {
                borderRadius: formChecklistStyles['border-radius'],
                borderTop: formChecklistStyles['border-top'],
                borderRight: formChecklistStyles['border-right'],
                borderBottom: formChecklistStyles['border-bottom'],
                borderLeft: formChecklistStyles['border-left'],
                borderColor: formChecklistStyles['border-color'],
                backgroundColor: accordionHeaderStyles['background-color'],
                boxShadow: 'none',
                fontSize: accordionItemTitleFontSize,
                fontWeight: accordionItemTitleFontWeight,
                color: accordionHeaderColor,
                padding: accordionHeaderPadding,
            },
            '.AccordionItem:hover': {
                backgroundColor: accordionSelectedHeaderStyles['background-color'],
                color: accordionHeaderColor,
            },
            '.AccordionItem--selected': {
                fontWeight: 'bold',
                color: accordionHeaderColor,
                backgroundColor: accordionSelectedHeaderStyles['background-color'],
                borderColor: accordionSelectedHeaderStyles['border-color'],
            },
            '.TabLabel': {
                color: accordionHeaderColor,
            },
            '.RadioIcon': {
                width: radioIconSize.outerWidth,
            },
            '.RadioIconInner': {
                r: radioIconSize.innerRadius,
                fill: radioInner['background-color'],
            },
            '.RadioIconOuter': {
                strokeWidth: radioIconSize.outerStrokeWidth,
                stroke: radioOuter['border-color'],
                fill: radioOuter['background-color'],
            },
            '.RadioIconInner--checked': {
                r: radioIconSize.innerRadius,
                fill: radioInnerChecked['background-color'],
            },
            '.RadioIconOuter--checked': {
                stroke: radioOuterChecked['border-color'],
                fill: radioOuterChecked['background-color'],
            },
            '.ToggleItem': Object.assign(Object.assign({}, (toggleItemBorderRadius[theme]
                ? { borderRadius: toggleItemBorderRadius[theme] }
                : {})), { border: formChecklistStyles['border-bottom'], backgroundColor: accordionHeaderStyles['background-color'], boxShadow: 'none', outline: 'none' }),
            '.ToggleItem--selected': Object.assign(Object.assign({ fontWeight: 'bold', color: accordionHeaderColor, backgroundColor: accordionSelectedHeaderStyles['background-color'] }, (toggleItemSelectedBorderColor[theme]
                ? { borderColor: toggleItemSelectedBorderColor[theme] }
                : {})), { outline: 'none', boxShadow: 'none' }),
        },
    };
};


/***/ },

/***/ "./packages/stripe-integration/src/stripe-upe/StripeUPEPaymentMethod.tsx"
/*!*******************************************************************************!*\
  !*** ./packages/stripe-integration/src/stripe-upe/StripeUPEPaymentMethod.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/stripe.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");








const StripeUPEPaymentMethod = (_a) => {
    var { paymentForm, checkoutState, checkoutService, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_2__.noop } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["paymentForm", "checkoutState", "checkoutService", "method", "onUnhandledError"]);
    const containerId = `stripe-${method.id}-component-field`;
    const paymentContext = paymentForm;
    const renderSubmitButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        paymentContext.hidePaymentSubmitButton(method, false);
    }, [paymentContext, method]);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired, getPaymentProviderCustomer }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const paymentProviderCustomer = getPaymentProviderCustomer();
    const isStripeLinkAuthenticated = paymentProviderCustomer === null || paymentProviderCustomer === void 0 ? void 0 : paymentProviderCustomer.stripeLinkAuthenticationState;
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const shouldSavingCardsBeEnabled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (!isGuestCustomer && isStripeLinkAuthenticated) {
            return false;
        }
        return true;
    }, [isGuestCustomer, isStripeLinkAuthenticated]);
    const isInstrumentFeatureAvailable = shouldSavingCardsBeEnabled && !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const getStylesFromElement = (id, properties) => {
        const parentContainer = document.getElementById(id);
        if (!parentContainer) {
            throw new Error('Unable to retrieve input styles as the provided container ID is not valid.');
        }
        return (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(parentContainer, properties);
    };
    const initializeStripePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const formInput = getStylesFromElement(`${containerId}--input`, [
            'color',
            'background-color',
            'border-color',
            'box-shadow',
        ]);
        const formLabel = getStylesFromElement(`${containerId}--label`, ['color']);
        const formError = getStylesFromElement(`${containerId}--error`, ['color']);
        paymentContext.hidePaymentSubmitButton(method, true);
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__.createStripeUPEPaymentStrategy], stripeupe: {
                containerId,
                style: {
                    labelText: formLabel.color,
                    fieldText: formInput.color,
                    fieldPlaceholderText: formInput.color,
                    fieldErrorText: formError.color,
                    fieldBackground: formInput['background-color'],
                    fieldInnerShadow: formInput['box-shadow'],
                    fieldBorder: formInput['border-color'],
                },
                onError: onUnhandledError,
                render: renderSubmitButton,
            } }));
    }), [
        checkoutService,
        containerId,
        onUnhandledError,
        method,
        paymentContext,
        renderSubmitButton,
    ]);
    const initializeStripeCustomer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => {
        return checkoutService.initializeCustomer(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__.createStripeUPECustomerStrategy] }));
    }, [checkoutService]);
    const renderCheckoutThemeStylesForStripeUPE = () => {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "optimizedCheckout-form-input", id: `${containerId}--input` },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-field--error" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "optimizedCheckout-form-label", id: `${containerId}--error` })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "optimizedCheckout-form-label", id: `${containerId}--label` })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, rest, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializeCustomer: initializeStripeCustomer, initializePayment: initializeStripePayment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, signOut: checkoutService.signOutCustomer })),
        renderCheckoutThemeStylesForStripeUPE()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_8__["default"])(StripeUPEPaymentMethod, [{ gateway: 'stripeupe' }, { gateway: 'stripeupe', id: 'klarna' }]));


/***/ },

/***/ "./packages/stripe-integration/src/stripev3/StripeV3CustomCardForm.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/stripe-integration/src/stripev3/StripeV3CustomCardForm.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");





const StripeV3CustomCardForm = ({ options, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'form-field--stripe-ccNumber') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardNumberElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_number_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'widget-input--stripev3'), "data-cse": "CardNumber", id: options.cardNumberElementOptions.containerId }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-field--ccExpiry" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardExpiryElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_expiration_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'widget-input--stripev3'), "data-cse": "ExpiryDate", id: options.cardExpiryElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-ccFields-field--ccCvv" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardCvcElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_cvv_label" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "has-tip" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null)))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'widget-input--stripev3'), "data-cse": "SecurityCode", id: options.cardCvcElementOptions.containerId }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeV3CustomCardForm);


/***/ },

/***/ "./packages/stripe-integration/src/stripev3/StripeV3PaymentMethod.tsx"
/*!****************************************************************************!*\
  !*** ./packages/stripe-integration/src/stripev3/StripeV3PaymentMethod.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StripeElementType: () => (/* binding */ StripeElementType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/stripe.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _StripeV3CustomCardForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StripeV3CustomCardForm */ "./packages/stripe-integration/src/stripev3/StripeV3CustomCardForm.tsx");










var StripeElementType;
(function (StripeElementType) {
    StripeElementType["Alipay"] = "alipay";
    StripeElementType["Card"] = "card";
    StripeElementType["CardCvc"] = "cardCvc";
    StripeElementType["CardExpiry"] = "cardExpiry";
    StripeElementType["CardNumber"] = "cardNumber";
    StripeElementType["Iban"] = "iban";
    StripeElementType["IdealBank"] = "idealBank";
})(StripeElementType || (StripeElementType = {}));
const StripeV3PaymentMethod = (_a) => {
    var { language, paymentForm, checkoutState, checkoutService, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_2__.noop } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["language", "paymentForm", "checkoutState", "checkoutService", "method", "onUnhandledError"]);
    const { useIndividualCardFields } = method.initializationData;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const paymentMethodType = method.id;
    const additionalStripeV3Classes = paymentMethodType !== StripeElementType.Alipay
        ? 'optimizedCheckout-form-input widget--stripev3'
        : '';
    const containerId = `stripe-${paymentMethodType}-component-field`;
    const stripeOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        const classes = {
            base: 'form-input optimizedCheckout-form-input',
        };
        return {
            [StripeElementType.Card]: {
                classes,
            },
            [StripeElementType.CardCvc]: {
                classes,
                placeholder: '',
            },
            [StripeElementType.CardExpiry]: {
                classes,
            },
            [StripeElementType.CardNumber]: {
                classes,
                showIcon: true,
                placeholder: '',
            },
            [StripeElementType.Iban]: {
                classes,
                supportedCountries: ['SEPA'],
            },
            [StripeElementType.IdealBank]: {
                classes,
            },
        };
    }, []);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const { data: { getCheckout, isPaymentDataRequired, getCustomer, getConfig }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = getCustomer();
    const config = getConfig();
    const instruments = checkoutState.data.getInstruments(method) || [];
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const storeUrl = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (!config) {
            return null;
        }
        return config.links.siteLink;
    }, [config]);
    const onUnhandledStripeV3Error = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((error) => {
        if (error.type === 'stripev3_error' && error.subtype === 'auth_failure') {
            error.message = language.translate('payment.stripev3_auth_3ds_fail');
        }
        onUnhandledError(error);
    }, [language, onUnhandledError]);
    const getIndividualCardElementOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((stripeInitializeOptions) => {
        return {
            cardNumberElementOptions: Object.assign(Object.assign({}, stripeInitializeOptions[StripeElementType.CardNumber]), { containerId: 'stripe-card-number-component-field' }),
            cardExpiryElementOptions: Object.assign(Object.assign({}, stripeInitializeOptions[StripeElementType.CardExpiry]), { containerId: 'stripe-expiry-component-field' }),
            cardCvcElementOptions: Object.assign(Object.assign({}, stripeInitializeOptions[StripeElementType.CardCvc]), { containerId: 'stripe-cvc-component-field' }),
        };
    }, []);
    const getStripeOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((stripeInitializeOptions) => {
        if (useIndividualCardFields) {
            return getIndividualCardElementOptions(stripeInitializeOptions);
        }
        return stripeInitializeOptions[paymentMethodType];
    }, [paymentMethodType, getIndividualCardElementOptions, useIndividualCardFields]);
    const { getHostedStoredCardValidationFieldset, getHostedFormOptions } = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__.useHostedCreditCard)({
        checkoutState,
        method,
        language,
        paymentForm,
    });
    const initializeStripePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_1__.createStripeV3PaymentStrategy], stripev3: Object.assign({ containerId, options: getStripeOptions(stripeOptions) }, (selectedInstrument && {
                form: yield getHostedFormOptions(selectedInstrument),
            })) }));
    }), [containerId, getStripeOptions, stripeOptions, checkoutService, getHostedFormOptions]);
    const renderCustomPaymentForm = () => {
        const optionsCustomForm = getIndividualCardElementOptions(stripeOptions);
        return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_StripeV3CustomCardForm__WEBPACK_IMPORTED_MODULE_10__["default"], { options: optionsCustomForm });
    };
    const validateInstrument = (_shouldShowNumber, selectedInstrument) => {
        return getHostedStoredCardValidationFieldset(selectedInstrument);
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, rest, { additionalContainerClassName: additionalStripeV3Classes, containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeStripePayment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, onUnhandledError: onUnhandledStripeV3Error, renderCustomPaymentForm: renderCustomPaymentForm, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldRenderCustomInstrument: useIndividualCardFields, signOut: checkoutService.signOutCustomer, validateInstrument: validateInstrument })),
        method.id === 'iban' && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", { className: "stripe-sepa-mandate-disclaimer" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { data: { storeUrl }, id: "payment.stripe_sepa_mandate_disclaimer" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_9__["default"])(StripeV3PaymentMethod, [{ gateway: 'stripev3' }]));


/***/ },

/***/ "./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx"
/*!************************************************************************************!*\
  !*** ./packages/ui/src/form/TextInputIframeContainer/TextInputIframeContainer.tsx ***!
  \************************************************************************************/
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



const TextInputIframeContainer = (_a) => {
    var { additionalClassName, appearFocused, testId } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "appearFocused", "testId"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", Object.assign({}, props, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input', 'optimizedCheckout-form-input', { 'form-input--focus': appearFocused }, { 'optimizedCheckout-form-input--focus': appearFocused }, additionalClassName), "data-test": testId })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInputIframeContainer);


/***/ }

}]);
//# sourceMappingURL=stripe-ocspayment-method.js.map