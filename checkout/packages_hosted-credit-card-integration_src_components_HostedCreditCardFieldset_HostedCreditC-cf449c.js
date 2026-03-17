"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"],{

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

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx"
/*!**********************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNumberField/HostedCreditCardNumberField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardCodeField/HostedCreditCardCodeField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardExpiryField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNameField.tsx");





const HostedCreditCardFieldset = ({ additionalFields, cardCodeId, cardExpiryId, cardNameId, cardNumberId, focusedFieldType, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { hidden: true },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_text" })) },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-ccFields', {
            'form-ccFields--without-card-name': !cardNameId,
            'form-ccFields--without-card-code': !cardCodeId,
        }) },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_5__["default"], { appearFocused: focusedFieldType === 'cardNumber', id: cardNumberId, name: "hostedForm.errors.cardNumber" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_7__["default"], { appearFocused: focusedFieldType === 'cardExpiry', id: cardExpiryId, name: "hostedForm.errors.cardExpiry" }),
        Boolean(cardNameId) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_8__["default"], { appearFocused: focusedFieldType === 'cardName', id: cardNameId, name: "hostedForm.errors.cardName" })),
        Boolean(cardCodeId) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_6__["default"], { appearFocused: focusedFieldType === 'cardCode', id: cardCodeId, name: "hostedForm.errors.cardCode" })),
        additionalFields)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardFieldset);


/***/ },

/***/ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardNameField.tsx"
/*!**********************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/HostedCreditCardNameField.tsx ***!
  \**********************************************************************************************/
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



const HostedCreditCardNameField = ({ appearFocused, id, name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { appearFocused: appearFocused, id: id }), [id, appearFocused]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccName", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_name_label" }), name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedCreditCardNameField);


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

/***/ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts"
/*!*******************************************************************************************************************************************!*\
  !*** ./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts ***!
  \*******************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getHostedCreditCardValidationSchema({ language, }) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)().shape({
        hostedForm: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
            .required()
            .shape({
            errors: (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)()
                .required()
                .shape({
                cardCode: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_cvv_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_cvv_invalid_error'),
                    test: (value) => value !== 'invalid_card_code',
                }),
                cardExpiry: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_expiration_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_expiration_invalid_error'),
                    test: (value) => value !== 'invalid_card_expiry',
                }),
                cardName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().test({
                    message: language.translate('payment.credit_card_name_required_error'),
                    test: (value) => value !== 'required',
                }),
                cardNumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
                    .test({
                    message: language.translate('payment.credit_card_number_required_error'),
                    test: (value) => value !== 'required',
                })
                    .test({
                    message: language.translate('payment.credit_card_number_invalid_error'),
                    test: (value) => value !== 'invalid_card_number',
                }),
            }),
        }),
    });
}));


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
//# sourceMappingURL=packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c.js.map