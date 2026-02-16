"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["checkoutcom-custom-payment-method"],{

/***/ "./packages/checkoutcom-integration/src/CheckoutcomCustomFormFields.tsx":
/*!******************************************************************************!*\
  !*** ./packages/checkoutcom-integration/src/CheckoutcomCustomFormFields.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ccDocumentField: () => (/* binding */ ccDocumentField),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");
/* harmony import */ var _checkoutcomFieldsets_TextFieldForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkoutcomFieldsets/TextFieldForm */ "./packages/checkoutcom-integration/src/checkoutcomFieldsets/TextFieldForm.tsx");





const Sepa = ({ method, debtor }) => {
    const paymentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.PaymentFormContext);
    const creditor = method.initializationData.sepaCreditor;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        paymentContext === null || paymentContext === void 0 ? void 0 : paymentContext.paymentForm.disableSubmit(method, true);
        return () => paymentContext === null || paymentContext === void 0 ? void 0 : paymentContext.paymentForm.disableSubmit(method, false);
    }, [paymentContext, method]);
    function toggleSubmitButton(isChecked) {
        paymentContext === null || paymentContext === void 0 ? void 0 : paymentContext.paymentForm.disableSubmit(method, !isChecked);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "checkoutcom-sepa-column-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "checkoutcom-sepa-column-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "checkoutcom-sepa-title" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.checkoutcom_sepa_creditor_title" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { className: "checkoutcom-sepa-title" }, creditor.sepaCreditorCompanyName),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" }, creditor.sepaCreditorAddress),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" }, `${creditor.sepaCreditorPostalCode} ${creditor.sepaCreditorCity}`),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" }, creditor.sepaCreditorCountry),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { creditorId: creditor.sepaCreditorIdentifier }, id: "payment.checkoutcom_sepa_creditor_id" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "checkoutcom-sepa-column-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "checkoutcom-sepa-title" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.checkoutcom_sepa_debtor_title" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", { className: "checkoutcom-sepa-title" }, `${debtor.firstName} ${debtor.lastName}`),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" }, debtor.address1),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" }, `${debtor.postalCode} ${debtor.city}, ${debtor.stateOrProvinceCode}`),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" }, debtor.countryCode))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "checkoutcom-sepa-line" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.checkoutcom_sepa_payment_type" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_checkoutcomFieldsets_TextFieldForm__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-field--iban", autoComplete: "iban", labelId: "payment.sepa_account_number", name: "iban" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { creditorName: creditor.sepaCreditorCompanyName }, id: "payment.checkoutcom_sepa_mandate_disclaimer" }), name: "sepaMandate", 
            // eslint-disable-next-line react/jsx-no-bind
            onChange: toggleSubmitButton })));
};
const Fawry = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_checkoutcomFieldsets_TextFieldForm__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-field--customerMobile", autoComplete: "tel", labelId: "payment.checkoutcom_fawry_customer_mobile_label", name: "customerMobile" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_checkoutcomFieldsets_TextFieldForm__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-field--customerEmail", autoComplete: "email", labelId: "payment.checkoutcom_fawry_customer_email_label", name: "customerEmail" })));
};
const checkoutcomCustomFormFields = {
    fawry: Fawry,
    sepa: Sepa,
};
const ccDocumentField = ({ method }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_checkoutcomFieldsets_TextFieldForm__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "form-field--ccDocument", autoComplete: "cc-document", labelId: `payment.checkoutcom_document_label_${method.id}`, name: "ccDocument" }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkoutcomCustomFormFields);


/***/ }),

/***/ "./packages/checkoutcom-integration/src/CheckoutcomCustomPaymentMethod.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/checkoutcom-integration/src/CheckoutcomCustomPaymentMethod.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/checkoutcom-custom */ "../checkout-sdk-js/dist/esm/integrations/checkoutcom-custom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/credit-card-integration */ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _CheckoutcomCustomFormFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutcomCustomFormFields */ "./packages/checkoutcom-integration/src/CheckoutcomCustomFormFields.tsx");
/* harmony import */ var _checkoutcomFieldsets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkoutcomFieldsets/getCheckoutcomFieldsetValidationSchemas */ "./packages/checkoutcom-integration/src/checkoutcomFieldsets/getCheckoutcomFieldsetValidationSchemas.tsx");








const isCheckoutcomPaymentMethod = (methodId) => {
    return Object.values(_checkoutcomFieldsets__WEBPACK_IMPORTED_MODULE_6__.checkoutcomPaymentMethodsArray).includes(methodId);
};
const CheckoutcomCustomPaymentMethod = (_a) => {
    var { language, method, checkoutService, checkoutState } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["language", "method", "checkoutService", "checkoutState"]);
    const checkoutCustomMethod = method.id;
    const CheckoutcomCustomFieldset = checkoutCustomMethod in _CheckoutcomCustomFormFields__WEBPACK_IMPORTED_MODULE_5__["default"]
        ? _CheckoutcomCustomFormFields__WEBPACK_IMPORTED_MODULE_5__["default"][checkoutCustomMethod]
        : _CheckoutcomCustomFormFields__WEBPACK_IMPORTED_MODULE_5__.ccDocumentField;
    const billingAddress = checkoutState.data.getBillingAddress();
    const initializeCheckoutcomCustomPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options) => {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_1__.createCheckoutComAPMPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_1__.createCheckoutComCreditCardPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_1__.createCheckoutComFawryPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_1__.createCheckoutComIdealPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_1__.createCheckoutComSepaPaymentStrategy,
            ] }));
    }, [checkoutService]);
    if (!isCheckoutcomPaymentMethod(checkoutCustomMethod)) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeCheckoutcomCustomPayment, language: language, method: method }, rest, { 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        cardFieldset: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CheckoutcomCustomFieldset, { debtor: billingAddress, method: method }), cardValidationSchema: (0,_checkoutcomFieldsets__WEBPACK_IMPORTED_MODULE_6__["default"])({
            paymentMethod: checkoutCustomMethod,
            language,
        }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(CheckoutcomCustomPaymentMethod, [{ gateway: 'checkoutcom' }]));


/***/ }),

/***/ "./packages/checkoutcom-integration/src/checkoutcomFieldsets/TextFieldForm.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/checkoutcom-integration/src/checkoutcomFieldsets/TextFieldForm.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");



const TextField = (props) => {
    const { additionalClassName, autoComplete, labelId, name } = props;
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { autoComplete: autoComplete, id: field.name }))), [autoComplete]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: labelId }), [labelId]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: additionalClassName, input: renderInput, labelContent: labelContent, name: name }));
};
const TextFieldForm = ({ additionalClassName, autoComplete, labelId, name, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextField, { additionalClassName: additionalClassName, autoComplete: autoComplete, labelId: labelId, name: name }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TextFieldForm));


/***/ }),

/***/ "./packages/checkoutcom-integration/src/checkoutcomFieldsets/getCheckoutcomFieldsetValidationSchemas.tsx":
/*!***************************************************************************************************************!*\
  !*** ./packages/checkoutcom-integration/src/checkoutcomFieldsets/getCheckoutcomFieldsetValidationSchemas.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkoutcomPaymentMethodsArray: () => (/* binding */ checkoutcomPaymentMethodsArray),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


const checkoutcomPaymentMethodsArray = ['fawry', 'sepa', 'oxxo', 'qpay', 'boleto'];
const checkoutComShemas = {
    oxxo: (language) => ({
        ccDocument: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .required(language.translate('payment.checkoutcom_document_invalid_error_oxxo'))
            .length(18, language.translate('payment.checkoutcom_document_invalid_error_oxxo')),
    }),
    qpay: (language) => ({
        ccDocument: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .notRequired()
            .max(32, language.translate('payment.checkoutcom_document_invalid_error_qpay')),
    }),
    boleto: (language) => ({
        ccDocument: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .required(language.translate('payment.checkoutcom_document_invalid_error_boleto'))
            .min(11, language.translate('payment.checkoutcom_document_invalid_error_boleto'))
            .max(14, language.translate('payment.checkoutcom_document_invalid_error_boleto')),
    }),
    sepa: (language) => ({
        iban: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('payment.sepa_account_number_required')),
        sepaMandate: (0,yup__WEBPACK_IMPORTED_MODULE_1__.boolean)().required(language.translate('payment.sepa_mandate_required')),
    }),
    fawry: (language) => ({
        customerMobile: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .required(language.translate('payment.checkoutcom_fawry_customer_mobile_invalid_error'))
            .matches(new RegExp(`^\\d{11}$`), language.translate('payment.checkoutcom_fawry_customer_mobile_invalid_error')),
        customerEmail: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .required(language.translate('payment.checkoutcom_fawry_customer_email_invalid_error'))
            .email(language.translate('payment.checkoutcom_fawry_customer_email_invalid_error')),
    }),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getCheckoutcomValidationSchemas({ paymentMethod, language, }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)(checkoutComShemas[paymentMethod](language));
}));


/***/ }),

/***/ "./packages/checkoutcom-integration/src/index.ts":
/*!*******************************************************!*\
  !*** ./packages/checkoutcom-integration/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutcomCustomPaymentMethod: () => (/* reexport safe */ _CheckoutcomCustomPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   getCheckoutcomValidationSchemas: () => (/* reexport safe */ _checkoutcomFieldsets_getCheckoutcomFieldsetValidationSchemas__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _CheckoutcomCustomPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutcomCustomPaymentMethod */ "./packages/checkoutcom-integration/src/CheckoutcomCustomPaymentMethod.tsx");
/* harmony import */ var _checkoutcomFieldsets_getCheckoutcomFieldsetValidationSchemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkoutcomFieldsets/getCheckoutcomFieldsetValidationSchemas */ "./packages/checkoutcom-integration/src/checkoutcomFieldsets/getCheckoutcomFieldsetValidationSchemas.tsx");





/***/ })

}]);
//# sourceMappingURL=checkoutcom-custom-payment-method.js.map