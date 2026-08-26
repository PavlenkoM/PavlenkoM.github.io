"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["mollie-payment-method"],{

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

/***/ "./packages/mollie-integration/src/MollieAPMCustomForm.tsx"
/*!*****************************************************************!*\
  !*** ./packages/mollie-integration/src/MollieAPMCustomForm.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiddenInput: () => (/* binding */ HiddenInput),
/* harmony export */   IssuerSelectButton: () => (/* binding */ IssuerSelectButton),
/* harmony export */   OptionButton: () => (/* binding */ OptionButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/dropdown/DropdownTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");






const MollieAPMCustomForm = ({ method, language, }) => {
    var _a;
    const issuers = (_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.paymentMethodsResponse;
    const [selectedIssuer, setSelectedIssuer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: language.translate('payment.select_your_bank'),
        id: '',
        image: { size1x: '' },
    });
    const render = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((props) => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(HiddenInput, Object.assign({}, props, { selectedIssuer: selectedIssuer })), [selectedIssuer]);
    if (!issuers || issuers.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null);
    }
    const handleClick = ({ currentTarget }) => {
        const _selectedIssuer = issuers.find(({ id }) => id === currentTarget.dataset.id);
        if (!_selectedIssuer) {
            return;
        }
        setSelectedIssuer(_selectedIssuer);
    };
    const issuersList = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: "dropdown-menu instrumentSelect-dropdownMenu mollie-instrument-card", id: "issuersDropdown" }, issuers.map((issuer) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", { className: "dropdown-menu-item dropdown-menu-item--select", key: issuer.id },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OptionButton, { issuer: issuer, onClick: handleClick }))))));
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { dropdown: issuersList },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(IssuerSelectButton, { selectedIssuer: selectedIssuer })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { input: render, name: "issuer" })));
};
const HiddenInput = (_a) => {
    var _b = _a.field, { value } = _b, restField = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["value"]), { selectedIssuer } = _a;
    const [field, _, helpers] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(restField.name);
    const Input = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", Object.assign({}, field, { type: "hidden" })), [field]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (value === selectedIssuer) {
            return;
        }
        void helpers.setValue(selectedIssuer === null || selectedIssuer === void 0 ? void 0 : selectedIssuer.id);
    }, [value, selectedIssuer, helpers]);
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Input, null);
};
const IssuerSelectButton = ({ selectedIssuer }) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { className: "instrumentSelect instrumentSelect-card button dropdown-button dropdown-toogle--select", href: "#", id: "issuerToggle", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])() }, selectedIssuer.name));
const OptionButton = (_a) => {
    var { issuer } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["issuer"]);
    const { name, image, id } = issuer;
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", Object.assign({ className: "instrumentSelect-details mollie-instrument-list" }, props, { "data-id": id }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", { className: "mollie-instrument-left" }, name),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { alt: name, "data-test": "cart-item-image", src: image.size1x })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"])(MollieAPMCustomForm));


/***/ },

/***/ "./packages/mollie-integration/src/MollieCustomCardForm.tsx"
/*!******************************************************************!*\
  !*** ./packages/mollie-integration/src/MollieCustomCardForm.tsx ***!
  \******************************************************************/
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
/* harmony import */ var _MollieAPMCustomForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MollieAPMCustomForm */ "./packages/mollie-integration/src/MollieAPMCustomForm.tsx");






const MollieCustomCardForm = ({ options, isCreditCard, method, }) => !isCreditCard ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MollieAPMCustomForm__WEBPACK_IMPORTED_MODULE_6__["default"], { method: method })) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-full') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardNumberElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_number_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon'), "data-cse": "CardNumber", id: options.cardNumberElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-full') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardHolderElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_name_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input'), "data-cse": "CardHolder", id: options.cardHolderElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-aside', 'mollie-paddingRight') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardCvcElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_cvv_label" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "has-tip" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null)))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input'), "data-cse": "SecurityCode", id: options.cardCvcElementOptions.containerId })),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'mollie-aside') },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-label optimizedCheckout-form-label", htmlFor: options.cardExpiryElementOptions.containerId },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_expiration_label" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input'), "data-cse": "ExpiryDate", id: options.cardExpiryElementOptions.containerId }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MollieCustomCardForm);


/***/ },

/***/ "./packages/mollie-integration/src/MolliePaymentMethod.tsx"
/*!*****************************************************************!*\
  !*** ./packages/mollie-integration/src/MolliePaymentMethod.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MolliePaymentMethodType: () => (/* binding */ MolliePaymentMethodType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_mollie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/mollie */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/mollie.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/LocaleContext.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _MollieCustomCardForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MollieCustomCardForm */ "./packages/mollie-integration/src/MollieCustomCardForm.tsx");










var MolliePaymentMethodType;
(function (MolliePaymentMethodType) {
    MolliePaymentMethodType["creditcard"] = "credit_card";
})(MolliePaymentMethodType || (MolliePaymentMethodType = {}));
const MolliePaymentMethod = (_a) => {
    var { method, checkoutState, checkoutService, language, paymentForm } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["method", "checkoutState", "checkoutService", "language", "paymentForm"]);
    const paymentContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.PaymentFormContext);
    const localeContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.LocaleContext);
    const containerId = `mollie-${method.method}`;
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm, setSubmit, hidePaymentSubmitButton, disableSubmit, setValidationSchema, } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState);
    const { config: { cardCode }, } = method;
    const isCardCodeRequired = cardCode || cardCode === null;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
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
        setFieldTouched,
        setFieldValue,
        setSubmitted,
        submitForm,
    ]);
    const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((selectedInstrument) => {
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired
                ? getHostedFieldId('ccNumber')
                : undefined, focusedFieldType: focusedFieldType }));
    }, [
        focusedFieldType,
        getHostedFieldId,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        method,
    ]);
    const initializeMolliePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const mollieElements = getMolliesElementOptions();
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_mollie__WEBPACK_IMPORTED_MODULE_1__.createMolliePaymentStrategy], mollie: Object.assign({ containerId, cardNumberId: mollieElements.cardNumberElementOptions.containerId, cardCvcId: mollieElements.cardCvcElementOptions.containerId, cardHolderId: mollieElements.cardHolderElementOptions.containerId, cardExpiryId: mollieElements.cardExpiryElementOptions.containerId, styles: {
                    base: {
                        color: '#333333',
                        '::placeholder': {
                            color: '#999999',
                        },
                    },
                    valid: {
                        color: '#090',
                    },
                    invalid: {
                        color: '#D14343',
                    },
                }, unsupportedMethodMessage: localeContext === null || localeContext === void 0 ? void 0 : localeContext.language.translate('payment.mollie_unsupported_method_error'), disableButton: (disabled) => {
                    if (paymentContext) {
                        disableSubmit(method, disabled);
                    }
                } }, (selectedInstrument && {
                form: yield getHostedFormOptions(selectedInstrument),
            })) }));
    }), [
        checkoutService,
        containerId,
        disableSubmit,
        localeContext === null || localeContext === void 0 ? void 0 : localeContext.language,
        getHostedFormOptions,
        paymentContext,
        method,
    ]);
    const getMolliesElementOptions = () => {
        return {
            cardNumberElementOptions: {
                containerId: 'mollie-card-number-component-field',
            },
            cardExpiryElementOptions: {
                containerId: 'mollie-card-expiry-component-field',
            },
            cardCvcElementOptions: {
                containerId: 'mollie-card-cvc-component-field',
            },
            cardHolderElementOptions: {
                containerId: 'mollie-card-holder-component-field',
            },
        };
    };
    function renderCustomPaymentForm() {
        const options = getMolliesElementOptions();
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_MollieCustomCardForm__WEBPACK_IMPORTED_MODULE_13__["default"], { isCreditCard: isCreditCard(), method: method, options: options }));
    }
    function isCreditCard() {
        return method.method === MolliePaymentMethodType.creditcard;
    }
    function validateInstrument(_shouldShowNumber, selectedInstrument) {
        return getHostedStoredCardValidationFieldset(selectedInstrument);
    }
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { data: { getCheckout, isPaymentDataRequired, getCustomer }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializeMolliePayment, instruments: instruments, isAccountInstrument: !isCreditCard(), isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, renderCustomPaymentForm: renderCustomPaymentForm, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer, storedCardValidationSchema: (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"])({ language }), validateInstrument: validateInstrument })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_12__["default"])(MolliePaymentMethod, [{ gateway: 'mollie' }, { gateway: 'mollie', id: 'applepay' }]));


/***/ },

/***/ "./packages/mollie-integration/src/index.ts"
/*!**************************************************!*\
  !*** ./packages/mollie-integration/src/index.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MolliePaymentMethod: () => (/* reexport safe */ _MolliePaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MolliePaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MolliePaymentMethod */ "./packages/mollie-integration/src/MolliePaymentMethod.tsx");



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
//# sourceMappingURL=mollie-payment-method.js.map