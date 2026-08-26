"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["moneris-payment-method"],{

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

/***/ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts"
/*!*******************************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts ***!
  \*******************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getHostedInstrumentValidationSchema({ language, isCardExpiryRequired = false, }) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)().shape({
        instrumentId: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(),
        hostedForm: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
            .required()
            .shape({
            errors: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
                .required()
                .shape(Object.assign({ cardCodeVerification: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_cvv_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_cvv_invalid_error'),
                    test: (value) => value !== 'invalid_card_code',
                }), cardNumberVerification: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_number_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_number_invalid_error'),
                    test: (value) => value !== 'invalid_card_number',
                })
                    .test({
                    message: language.translate('payment.credit_card_number_mismatch_error'),
                    test: (value) => value !== 'mismatched_card_number',
                }) }, (isCardExpiryRequired
                ? {
                    cardExpiryVerification: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                        .test({
                        message: language.translate('payment.credit_card_expiration_required_error'),
                        test: (value) => value !== 'required',
                    })
                        .test({
                        message: language.translate('payment.credit_card_expiration_invalid_error'),
                        test: (value) => value !== 'invalid_card_expiry',
                    }),
                }
                : {}))),
        }),
    });
}));


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

/***/ "./packages/moneris-integration/src/MonerisPaymentMethod.tsx"
/*!*******************************************************************!*\
  !*** ./packages/moneris-integration/src/MonerisPaymentMethod.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_moneris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/moneris */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/moneris.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_error_handling_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/error-handling-utils */ "./packages/error-handling-utils/src/ErrorLogger.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/hooks/useHostedCreditCard.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _getMonerisIframeStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getMonerisIframeStyles */ "./packages/moneris-integration/src/getMonerisIframeStyles.ts");











const MonerisPaymentMethod = (_a) => {
    var { language, paymentForm, checkoutState, checkoutService, method, onUnhandledError } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["language", "paymentForm", "checkoutState", "checkoutService", "method", "onUnhandledError"]);
    const containerId = 'moneris-iframe-container';
    const { errorLogger } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
    const { getHostedStoredCardValidationFieldset, getHostedFormOptions } = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__.useHostedCreditCard)({
        checkoutState,
        method,
        language,
        paymentForm,
    });
    const hostedStoredCardValidationSchema = (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"])({ language });
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((name) => `${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([method.gateway, method.id]).join('-')}-${name}`, [method]);
    const cardNumberStyleContainerId = getHostedFieldId('ccNumber');
    const styleSamplerClassName = 'form-ccFields form-ccFields--without-card-name';
    const logMissingStyleContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((error) => {
        errorLogger === null || errorLogger === void 0 ? void 0 : errorLogger.log(error, { errorCode: 'monerisStyleProbe' }, _bigcommerce_checkout_error_handling_utils__WEBPACK_IMPORTED_MODULE_5__.ErrorLevelType.Warning, {
            containerId: cardNumberStyleContainerId,
        });
    }, [cardNumberStyleContainerId, errorLogger]);
    const initializeMonerisPayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const style = (0,_getMonerisIframeStyles__WEBPACK_IMPORTED_MODULE_12__["default"])({
            cardNumberContainerId: cardNumberStyleContainerId,
            onMissingStyleContainer: logMissingStyleContainer,
        });
        const paymentConfig = Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_moneris__WEBPACK_IMPORTED_MODULE_1__.createMonerisPaymentStrategy], moneris: Object.assign({ containerId,
                style }, (selectedInstrument && {
                form: yield getHostedFormOptions(selectedInstrument),
            })) });
        return checkoutService.initializePayment(paymentConfig);
    }), [
        cardNumberStyleContainerId,
        containerId,
        getHostedFormOptions,
        checkoutService,
        logMissingStyleContainer,
    ]);
    const validateInstrument = (_shouldShowNumber, selectedInstrument) => {
        return getHostedStoredCardValidationFieldset(selectedInstrument);
    };
    const renderCheckoutThemeStylesForMoneris = () => {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { "aria-hidden": "true", className: "u-hiddenVisually" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: styleSamplerClassName },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-field form-field--ccNumber" },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { id: cardNumberStyleContainerId })))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeMonerisPayment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, onUnhandledError: onUnhandledError, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, signOut: checkoutService.signOutCustomer, storedCardValidationSchema: hostedStoredCardValidationSchema, validateInstrument: validateInstrument }, rest)),
        renderCheckoutThemeStylesForMoneris()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_11__["default"])(MonerisPaymentMethod, [{ id: 'moneris' }]));


/***/ },

/***/ "./packages/moneris-integration/src/getMonerisIframeStyles.ts"
/*!********************************************************************!*\
  !*** ./packages/moneris-integration/src/getMonerisIframeStyles.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonerisIframeStyles)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");


const INPUT_STYLE_PROPERTIES = [
    'backgroundColor',
    'border',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'borderWidth',
    'color',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'height',
    'outline',
];
const LABEL_STYLE_PROPERTIES = ['color', 'fontFamily', 'fontWeight'];
const CSS_BODY_LAYOUT = 'margin: 0; padding: 20px 0 0; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; row-gap: 30px; column-gap: 20px;';
const CSS_INPUT_LABEL_LAYOUT = 'justify-self: start; align-self: start; font-size: 0.75rem; line-height: 1; pointer-events: none; z-index: 1; transform: translateY(-160%);';
const CSS_TEXTBOX_LAYOUT = 'justify-self: stretch; align-self: stretch; width: 100%; box-sizing: border-box; padding: 0 12px;';
const CSS_GRID_PLACEMENT = {
    cardNumberLabel: 'grid-column: 1 / 3; grid-row: 1;',
    cardNumberInput: 'grid-column: 1 / 3; grid-row: 1;',
    expiryDateLabel: 'grid-column: 1; grid-row: 2;',
    expiryDateInput: 'grid-column: 1; grid-row: 2;',
    cvvLabel: 'grid-column: 2; grid-row: 2;',
    cvvInput: 'grid-column: 2; grid-row: 2;',
};
function getStylesFromElement(element, properties) {
    return (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(element, properties);
}
function getStylesFromContainer(container, properties, className = 'form-input optimizedCheckout-form-input') {
    const probe = document.createElement('div');
    probe.className = className;
    container.appendChild(probe);
    const styles = getStylesFromElement(probe, properties);
    container.removeChild(probe);
    return styles;
}
function getLabelStyles(container) {
    const field = document.createElement('div');
    const label = document.createElement('label');
    field.className = 'form-field form-field--ccNumber';
    label.className = 'form-label optimizedCheckout-form-label';
    field.appendChild(label);
    container.appendChild(field);
    const styles = getStylesFromElement(label, LABEL_STYLE_PROPERTIES);
    container.removeChild(field);
    return styles;
}
function sanitizeLabelStyles(styles) {
    const sanitizedStyles = Object.assign({}, styles);
    if (sanitizedStyles.fontFamily) {
        sanitizedStyles.fontFamily = sanitizedStyles.fontFamily.replace(/"/g, '');
    }
    return sanitizedStyles;
}
function toCssString(styles, properties) {
    return properties
        .map((property) => {
        const value = styles[property];
        if (!value) {
            return '';
        }
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(property)}: ${value};`;
    })
        .join('');
}
function buildMonerisIframeStyles(inputStyles, labelStyles) {
    const cssTextbox = `${CSS_TEXTBOX_LAYOUT}${toCssString(Object.assign(Object.assign({}, inputStyles), { outline: inputStyles.outline || '0' }), INPUT_STYLE_PROPERTIES.concat('outline'))}`;
    const cssBody = `${CSS_BODY_LAYOUT}${toCssString(inputStyles, ['fontFamily'])}background: transparent;`;
    const cssInputLabel = `${CSS_INPUT_LABEL_LAYOUT}${toCssString(labelStyles, LABEL_STYLE_PROPERTIES)}`;
    return {
        cssBody,
        cssTextbox,
        cssTextboxCardNumber: CSS_GRID_PLACEMENT.cardNumberInput,
        cssTextboxExpiryDate: CSS_GRID_PLACEMENT.expiryDateInput,
        cssTextboxCVV: CSS_GRID_PLACEMENT.cvvInput,
        cssInputLabel,
        cssLabelCardNumber: CSS_GRID_PLACEMENT.cardNumberLabel,
        cssLabelExpiryDate: CSS_GRID_PLACEMENT.expiryDateLabel,
        cssLabelCVV: CSS_GRID_PLACEMENT.cvvLabel,
    };
}
function getMonerisIframeStyles({ cardNumberContainerId, onMissingStyleContainer, }) {
    const container = document.getElementById(cardNumberContainerId);
    if (!container) {
        const error = new Error('Unable to retrieve input styles as the provided container ID is not valid.');
        if (onMissingStyleContainer) {
            onMissingStyleContainer(error);
        }
        else {
            console.error(error, { containerId: cardNumberContainerId });
        }
        return buildMonerisIframeStyles({}, {});
    }
    const inputStyles = getStylesFromContainer(container, INPUT_STYLE_PROPERTIES);
    const labelStyles = sanitizeLabelStyles(getLabelStyles(container));
    return buildMonerisIframeStyles(inputStyles, labelStyles);
}


/***/ },

/***/ "./packages/moneris-integration/src/index.ts"
/*!***************************************************!*\
  !*** ./packages/moneris-integration/src/index.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonerisPaymentMethod: () => (/* reexport safe */ _MonerisPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MonerisPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonerisPaymentMethod */ "./packages/moneris-integration/src/MonerisPaymentMethod.tsx");



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
//# sourceMappingURL=moneris-payment-method.js.map