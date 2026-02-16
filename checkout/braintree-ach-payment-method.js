(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["braintree-ach-payment-method"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@media screen and (max-width: 430px) {\n  .form-checklist-item--selected:has(#braintree-fastlane) .creditCardTypes-list {\n    margin-left: 1.2rem;\n  }\n  .form-checklist-item--selected:has(#braintree-fastlane) .paymentProviderHeader-name {\n    margin-bottom: 0.3rem;\n  }\n  .form-checklist-item--selected:has(#braintree-fastlane) .paymentProviderHeader-nameContainer {\n    margin-top: 0.2rem;\n  }\n  .form-checklist-item--selected:has(#braintree-fastlane) .paymentMethod--creditCard {\n    padding: 0 0 0.6666666667rem 0;\n  }\n  .form-checklist-item--selected:has(#braintree-fastlane) .form-label {\n    padding: 1rem 1.25rem 1rem 3.75rem;\n  }\n  .form-checklist-item--selected:has(#braintree-fastlane) .form-checklist-body {\n    margin: 0 0.75rem;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".braintree-fastlane-cc-form-container {\n  font-weight: initial;\n  padding-bottom: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.scss":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.scss ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".braintree-fastlane-instrument {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 1rem;\n}\n.braintree-fastlane-instrument-details {\n  display: flex;\n  align-items: center;\n}\n.braintree-fastlane-instrument-branding {\n  margin-top: -0.5rem;\n}\n\n@media screen and (max-width: 430px) {\n  .braintree-fastlane-instrument {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/BraintreeAchPaymentMethod.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/BraintreeAchPaymentMethod.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _components_BraintreeAchPaymentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BraintreeAchPaymentForm */ "./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchPaymentForm.tsx");






const BraintreeAchPaymentMethod = ({ method, checkoutService, checkoutState, onUnhandledError, paymentForm, }) => {
    const currentMandateTextRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)('');
    const updateMandateText = (currentMandateText) => {
        currentMandateTextRef.current = currentMandateText;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const initializePaymentOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeAchPaymentStrategy],
                    braintreeach: {
                        getMandateText: () => currentMandateTextRef.current,
                    },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void initializePaymentOrThrow();
        return () => {
            const deinitializePaymentOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                try {
                    yield checkoutService.deinitializePayment({
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
            void deinitializePaymentOrThrow();
        };
    }, [checkoutService, method.gateway, method.id, onUnhandledError]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const loadInstrumentsOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.loadInstruments();
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        const { isGuest } = checkoutState.data.getCustomer() || {};
        const shouldLoadInstruments = !isGuest && method.config.isVaultingEnabled;
        if (shouldLoadInstruments) {
            void loadInstrumentsOrThrow();
        }
    }, []);
    const isLoading = checkoutState.statuses.isLoadingInstruments() ||
        checkoutState.statuses.isLoadingPaymentMethod(method.id);
    const formContextProps = {
        isSubmitted: paymentForm.isSubmitted(),
        setSubmitted: paymentForm.setSubmitted,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: formContextProps },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_BraintreeAchPaymentForm__WEBPACK_IMPORTED_MODULE_6__["default"], { method: method, updateMandateText: updateMandateText }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(BraintreeAchPaymentMethod, [{ id: 'braintreeach' }]));


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchFormFields.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchFormFields.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicFormField.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./packages/braintree-integration/src/BraintreeAch/constants.ts");




const isBraintreeAchFormFieldName = (fieldName) => {
    return Object.values(_constants__WEBPACK_IMPORTED_MODULE_4__.BraintreeAchFieldType).includes(fieldName);
};
const getTranslatedLabelByFieldName = (fieldName, language) => {
    const braintreeAchFormLabelsMap = {
        firstName: language.translate('address.first_name_label'),
        lastName: language.translate('address.last_name_label'),
        accountNumber: language.translate('payment.account_number_label'),
        routingNumber: language.translate('payment.account_routing_label'),
        businessName: language.translate('payment.business_name_label'),
        ownershipType: language.translate('payment.ownership_type_label'),
        accountType: language.translate('payment.account_type_label'),
    };
    return isBraintreeAchFormFieldName(fieldName)
        ? braintreeAchFormLabelsMap[fieldName]
        : fieldName;
};
const BraintreeAchFormFields = () => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useLocale)();
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.usePaymentFormContext)();
    const { getFieldValue, setFieldValue } = paymentForm;
    const ownershipTypeValue = getFieldValue(_constants__WEBPACK_IMPORTED_MODULE_4__.BraintreeAchFieldType.OwnershipType);
    const fieldValues = ownershipTypeValue === _constants__WEBPACK_IMPORTED_MODULE_4__.OwnershipTypes.Business
        ? _constants__WEBPACK_IMPORTED_MODULE_4__.businessBraintreeAchFormFields
        : _constants__WEBPACK_IMPORTED_MODULE_4__.personalBraintreeAchFormFields;
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fieldId) => (value) => {
        setFieldValue(fieldId, value);
    }, [setFieldValue]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, fieldValues.map((field) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { extraClass: `dynamic-form-field--${field.id}`, field: field, key: field.id, label: getTranslatedLabelByFieldName(field.name, language), onChange: handleChange(field.id) })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreeAchFormFields);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchMandateText.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchMandateText.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./packages/braintree-integration/src/BraintreeAch/constants.ts");




const BraintreeAchMandateText = ({ isInstrumentFeatureAvailable, updateMandateText, }) => {
    var _a, _b, _c;
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)();
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    const { businessName, accountType, accountNumber, routingNumber, ownershipType, firstName, lastName, } = paymentForm.getFormValues();
    const fullName = `${String(firstName)} ${String(lastName)}`;
    const depositoryName = ownershipType === _constants__WEBPACK_IMPORTED_MODULE_5__.OwnershipTypes.Business ? businessName : fullName;
    const outstandingBalance = (_a = checkoutState.data.getCheckout()) === null || _a === void 0 ? void 0 : _a.outstandingBalance;
    const storeName = (_b = checkoutState.data.getConfig()) === null || _b === void 0 ? void 0 : _b.storeProfile.storeName;
    const symbol = (_c = checkoutState.data.getCart()) === null || _c === void 0 ? void 0 : _c.currency.symbol;
    const mandateTextTranslationKey = isInstrumentFeatureAvailable
        ? 'payment.braintreeach_vaulting_mandate_text'
        : 'payment.braintreeach_mandate_text';
    const currentDate = new Date(Date.now()).toJSON().slice(0, 10); // yyyy-mm-dd
    const formattedDate = currentDate.split('-').reverse().join('.'); // dd.mm.yyyy
    const mandateTextTranslationProps = {
        accountType: String(accountType).toLowerCase(),
        accountNumber: String(accountNumber),
        currentDate: formattedDate,
        depositoryName: String(depositoryName),
        routingNumber: String(routingNumber),
        outstandingBalance: `${symbol || ''}${outstandingBalance || ''}`,
        storeName: String(storeName),
    };
    const mandateText = language.translate(mandateTextTranslationKey, mandateTextTranslationProps);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        updateMandateText(mandateText);
    }, [mandateText, updateMandateText]);
    const handleChange = (value) => {
        paymentForm.setFieldValue('orderConsent', value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mandate-text", "data-test": "mandate-text" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { labelContent: mandateText, name: "orderConsent", onChange: handleChange })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreeAchMandateText);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchPaymentForm.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchPaymentForm.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/AccountInstrumentFieldset/AccountInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./packages/braintree-integration/src/BraintreeAch/constants.ts");
/* harmony import */ var _hooks_useBraintreeAchInstruments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useBraintreeAchInstruments */ "./packages/braintree-integration/src/BraintreeAch/hooks/useBraintreeAchInstruments.ts");
/* harmony import */ var _hooks_useBraintreeAchValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useBraintreeAchValidation */ "./packages/braintree-integration/src/BraintreeAch/hooks/useBraintreeAchValidation.ts");
/* harmony import */ var _BraintreeAchFormFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BraintreeAchFormFields */ "./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchFormFields.tsx");
/* harmony import */ var _BraintreeAchMandateText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BraintreeAchMandateText */ "./packages/braintree-integration/src/BraintreeAch/components/BraintreeAchMandateText.tsx");










const BraintreeAchPaymentForm = ({ method, updateMandateText, }) => {
    const [isValidForm, setIsValidForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.usePaymentFormContext)();
    const { disableSubmit, getFieldValue, getFormValues, setFieldValue } = paymentForm;
    const { accountInstruments, currentInstrument, handleSelectInstrument, handleUseNewInstrument, isInstrumentFeatureAvailable, shouldShowInstrumentFieldset, shouldCreateNewInstrument, shouldConfirmInstrument, } = (0,_hooks_useBraintreeAchInstruments__WEBPACK_IMPORTED_MODULE_8__["default"])(method);
    const { validateBraintreeAchForm, resetFormValidation } = (0,_hooks_useBraintreeAchValidation__WEBPACK_IMPORTED_MODULE_9__["default"])(method);
    const resetFormValues = () => {
        const { firstName, lastName } = checkoutState.data.getBillingAddress() || {};
        const defaultFormValues = {
            ownershipType: _constants__WEBPACK_IMPORTED_MODULE_7__.OwnershipTypes.Personal,
            accountType: _constants__WEBPACK_IMPORTED_MODULE_7__.AccountTypes.Savings,
            accountNumber: '',
            routingNumber: '',
            businessName: '',
            firstName: firstName || '',
            lastName: lastName || '',
            shouldSaveInstrument: false,
            shouldSetAsDefaultInstrument: false,
            instrumentId: (currentInstrument === null || currentInstrument === void 0 ? void 0 : currentInstrument.bigpayToken) || '',
            orderConsent: false,
        };
        for (const [key, value] of Object.entries(defaultFormValues)) {
            setFieldValue(key, value);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        resetFormValues();
    }, [currentInstrument === null || currentInstrument === void 0 ? void 0 : currentInstrument.bigpayToken]);
    const shouldShowForm = !shouldShowInstrumentFieldset || shouldCreateNewInstrument || shouldConfirmInstrument;
    const shouldShowMandateTextCheckbox = shouldShowForm && isValidForm && !shouldConfirmInstrument;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (shouldShowForm) {
            const validate = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                const braintreeAchFormValues = getFormValues();
                const isValid = yield validateBraintreeAchForm(braintreeAchFormValues);
                if (!isValid && getFieldValue('orderConsent')) {
                    setFieldValue('orderConsent', false);
                }
                setIsValidForm(isValid);
            });
            void validate();
        }
        else {
            resetFormValidation();
        }
    }, [
        getFormValues,
        setFieldValue,
        setIsValidForm,
        shouldShowForm,
        validateBraintreeAchForm,
        resetFormValidation,
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const mandateTextConfirmationCheckboxValue = getFieldValue('orderConsent');
        const inValidForInstrumentConfirmation = shouldConfirmInstrument && !isValidForm;
        const inValidForDefaultTransactions = shouldShowMandateTextCheckbox && !mandateTextConfirmationCheckboxValue;
        const shouldDisableSubmit = shouldShowForm
            ? inValidForInstrumentConfirmation || inValidForDefaultTransactions
            : false;
        disableSubmit(method, shouldDisableSubmit);
    }, [disableSubmit, getFieldValue, isValidForm, method, shouldShowMandateTextCheckbox]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "checkout-ach-form", "data-test": "checkout-ach-form" },
        shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "checkout-ach-form__instrument" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"], { instruments: accountInstruments, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewInstrument, selectedInstrument: currentInstrument }))),
        shouldConfirmInstrument && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "payment.bank_account_instrument_trusted_shipping_address_title_text" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "payment.bank_account_instrument_trusted_shipping_address_text" }))),
        shouldShowForm && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BraintreeAchFormFields__WEBPACK_IMPORTED_MODULE_10__["default"], null),
        isInstrumentFeatureAvailable && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"], { instrumentId: currentInstrument === null || currentInstrument === void 0 ? void 0 : currentInstrument.bigpayToken, instruments: accountInstruments, isAccountInstrument: true })),
        shouldShowMandateTextCheckbox && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BraintreeAchMandateText__WEBPACK_IMPORTED_MODULE_11__["default"], { isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, updateMandateText: updateMandateText }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreeAchPaymentForm);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/constants.ts":
/*!**********************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/constants.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountTypes: () => (/* binding */ AccountTypes),
/* harmony export */   BraintreeAchFieldType: () => (/* binding */ BraintreeAchFieldType),
/* harmony export */   OwnershipTypes: () => (/* binding */ OwnershipTypes),
/* harmony export */   businessBraintreeAchFormFields: () => (/* binding */ businessBraintreeAchFormFields),
/* harmony export */   defaultBraintreeAchFormFields: () => (/* binding */ defaultBraintreeAchFormFields),
/* harmony export */   ownershipTypeOptions: () => (/* binding */ ownershipTypeOptions),
/* harmony export */   personalBraintreeAchFormFields: () => (/* binding */ personalBraintreeAchFormFields)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");

var BraintreeAchFieldType;
(function (BraintreeAchFieldType) {
    BraintreeAchFieldType["BusinessName"] = "businessName";
    BraintreeAchFieldType["AccountType"] = "accountType";
    BraintreeAchFieldType["AccountNumber"] = "accountNumber";
    BraintreeAchFieldType["RoutingNumber"] = "routingNumber";
    BraintreeAchFieldType["OwnershipType"] = "ownershipType";
    BraintreeAchFieldType["FirstName"] = "firstName";
    BraintreeAchFieldType["LastName"] = "lastName";
})(BraintreeAchFieldType || (BraintreeAchFieldType = {}));
var OwnershipTypes;
(function (OwnershipTypes) {
    OwnershipTypes["Personal"] = "Personal";
    OwnershipTypes["Business"] = "Business";
})(OwnershipTypes || (OwnershipTypes = {}));
var AccountTypes;
(function (AccountTypes) {
    AccountTypes["Savings"] = "Savings";
    AccountTypes["Checking"] = "Checking";
})(AccountTypes || (AccountTypes = {}));
const accountTypeOptions = [
    {
        value: AccountTypes.Savings,
        label: AccountTypes.Savings,
    },
    {
        value: AccountTypes.Checking,
        label: AccountTypes.Checking,
    },
];
const ownershipTypeOptions = [
    {
        value: OwnershipTypes.Personal,
        label: OwnershipTypes.Personal,
    },
    {
        value: OwnershipTypes.Business,
        label: OwnershipTypes.Business,
    },
];
const defaultBraintreeAchFormFields = [
    {
        name: BraintreeAchFieldType.AccountType,
        custom: false,
        id: BraintreeAchFieldType.AccountType,
        label: 'Account Type',
        required: true,
        fieldType: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_0__["default"].DROPDOWM,
        options: {
            items: accountTypeOptions,
        },
    },
    {
        name: BraintreeAchFieldType.AccountNumber,
        custom: false,
        id: BraintreeAchFieldType.AccountNumber,
        label: 'Account Number',
        required: true,
        max: 9,
        min: 8,
    },
    {
        name: BraintreeAchFieldType.RoutingNumber,
        custom: false,
        id: BraintreeAchFieldType.RoutingNumber,
        label: 'Routing Number',
        required: true,
    },
    {
        name: BraintreeAchFieldType.OwnershipType,
        custom: false,
        id: BraintreeAchFieldType.OwnershipType,
        label: 'Ownership Type',
        required: true,
        fieldType: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_0__["default"].DROPDOWM,
        options: {
            items: ownershipTypeOptions,
        },
    },
];
const personalBraintreeAchFormFields = [
    ...defaultBraintreeAchFormFields,
    {
        name: BraintreeAchFieldType.FirstName,
        custom: false,
        id: BraintreeAchFieldType.FirstName,
        label: 'First Name',
        required: true,
    },
    {
        name: BraintreeAchFieldType.LastName,
        custom: false,
        id: BraintreeAchFieldType.LastName,
        label: 'Last Name',
        required: true,
    },
];
const businessBraintreeAchFormFields = [
    ...defaultBraintreeAchFormFields,
    {
        name: BraintreeAchFieldType.BusinessName,
        custom: false,
        id: BraintreeAchFieldType.BusinessName,
        label: 'Business Name',
        required: true,
    },
];


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/hooks/useBraintreeAchInstruments.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/hooks/useBraintreeAchInstruments.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isAchInstrument/isAchInstrument.ts");




const useBraintreeAchInstruments = (method) => {
    const [currentInstrument, setCurrentInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const customer = checkoutState.data.getCustomer();
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.usePaymentFormContext)();
    const { setFieldValue } = paymentForm;
    const accountInstruments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => instruments.filter(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"]), [instruments]);
    const isInstrumentFeatureAvailable = !(customer === null || customer === void 0 ? void 0 : customer.isGuest) && Boolean(method.config.isVaultingEnabled);
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailable && accountInstruments.length > 0;
    const shouldCreateNewInstrument = shouldShowInstrumentFieldset && !currentInstrument;
    const shouldConfirmInstrument = shouldShowInstrumentFieldset &&
        !!currentInstrument &&
        !currentInstrument.trustedShippingAddress;
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
        shouldConfirmInstrument,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBraintreeAchInstruments);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeAch/hooks/useBraintreeAchValidation.ts":
/*!********************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeAch/hooks/useBraintreeAchValidation.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./packages/braintree-integration/src/BraintreeAch/constants.ts");





const useBraintreeAchValidation = (method) => {
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.usePaymentFormContext)();
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
    const getValidationSchema = () => {
        const ownershipType = paymentForm.getFieldValue('ownershipType');
        const formFields = ownershipType === _constants__WEBPACK_IMPORTED_MODULE_5__.OwnershipTypes.Business
            ? _constants__WEBPACK_IMPORTED_MODULE_5__.businessBraintreeAchFormFields
            : _constants__WEBPACK_IMPORTED_MODULE_5__.personalBraintreeAchFormFields;
        const requiredFieldErrorTranslationIds = {
            [_constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.FirstName]: 'address.first_name',
            [_constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.LastName]: 'address.last_name',
            [_constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.AccountNumber]: 'payment.errors.account_number',
            [_constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.RoutingNumber]: 'payment.errors.routing_number',
            [_constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.BusinessName]: 'payment.errors.business_name',
        };
        return (0,yup__WEBPACK_IMPORTED_MODULE_2__.object)(formFields.reduce((schema, { id, required }) => {
            if (required) {
                if (requiredFieldErrorTranslationIds[id]) {
                    schema[id] = (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)().required(language.translate(`${requiredFieldErrorTranslationIds[id]}_required_error`));
                    if (id === _constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.AccountNumber) {
                        schema[id] = schema[id].matches(/^\d+$/, language.translate('payment.errors.only_numbers_error', {
                            label: language.translate('payment.account_number_label'),
                        }));
                    }
                    if (id === _constants__WEBPACK_IMPORTED_MODULE_5__.BraintreeAchFieldType.RoutingNumber) {
                        schema[id] = schema[id]
                            .matches(/^\d+$/, language.translate('payment.errors.only_numbers_error', {
                            label: language.translate('payment.account_routing_label'),
                        }))
                            .min(8, language.translate('customer.min_error', {
                            label: language.translate('payment.account_routing_label'),
                            min: 8,
                        }))
                            .max(9, language.translate('customer.max_error', {
                            label: language.translate('payment.account_routing_label'),
                            max: 9,
                        }));
                    }
                }
            }
            return schema;
        }, 
        // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
        {}));
    };
    const validateBraintreeAchForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((braintreeAchFormValues) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const { accountNumber, businessName, routingNumber, ownershipType, firstName, lastName, } = braintreeAchFormValues;
        const validationSchema = getValidationSchema();
        paymentForm.setValidationSchema(method, validationSchema);
        const [isValidAccountNumber, isValidRoutingNumber, isValidFirstName, isValidLastName, isValidBusinessName,] = yield Promise.all([
            yield ((_a = validationSchema.fields.accountNumber) === null || _a === void 0 ? void 0 : _a.isValid(accountNumber)),
            yield ((_b = validationSchema.fields.routingNumber) === null || _b === void 0 ? void 0 : _b.isValid(routingNumber)),
            yield ((_c = validationSchema.fields.firstName) === null || _c === void 0 ? void 0 : _c.isValid(firstName)),
            yield ((_d = validationSchema.fields.lastName) === null || _d === void 0 ? void 0 : _d.isValid(lastName)),
            yield ((_e = validationSchema.fields.businessName) === null || _e === void 0 ? void 0 : _e.isValid(businessName)),
        ]);
        const isValidDepositoryName = ownershipType === _constants__WEBPACK_IMPORTED_MODULE_5__.OwnershipTypes.Business
            ? isValidBusinessName
            : isValidFirstName && isValidLastName;
        return isValidRoutingNumber && isValidAccountNumber && isValidDepositoryName;
    }), [getValidationSchema]);
    const resetFormValidation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        paymentForm.setValidationSchema(method, null);
    }, [paymentForm, method]);
    return {
        validateBraintreeAchForm,
        resetFormValidation,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBraintreeAchValidation);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeCreditCardsPaymentMethod.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeCreditCardsPaymentMethod.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/credit-card-integration */ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardValidation/HostedCreditCardValidation.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/HostedCreditCardFieldset/HostedCreditCardFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedCreditCardValidationSchema/getHostedCreditCardValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/components/getHostedInstrumentValidationSchema/getHostedInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardInputStyles/getCreditCardInputStyles.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");










const BraintreeCreditCardsPaymentMethod = (props) => {
    const { checkoutService, checkoutState, paymentForm, language, method, onUnhandledError } = props;
    const { isHostedFormEnabled } = method.config;
    const [threeDSecureContent, setThreeDSecureContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [focusedFieldType, setFocusedFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({
        threeDSecureContentRef: (0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)(),
    });
    const { cardCode, showCardHolderName, requireCustomerCode } = method.config;
    const { setFieldTouched, setFieldValue, setSubmitted, submitForm } = paymentForm;
    const isInstrumentCardCodeRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutState);
    const isInstrumentCardNumberRequiredProp = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(checkoutState);
    const isCardCodeRequired = cardCode || cardCode === null;
    const isCardHolderNameRequired = showCardHolderName !== null && showCardHolderName !== void 0 ? showCardHolderName : true;
    const getHostedFieldId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((name) => {
        return `${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([method.gateway, method.id]).join('-')}-${name}`;
    }, [method]);
    const getHostedFormOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const styleProps = ['color', 'fontFamily', 'fontSize', 'fontWeight'];
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        // Info: to generate valid nonce for vaulted instrument with untrusted shipping address, all hosted fields must be rendered
        const shouldRenderHostedFields = isInstrumentCardNumberRequired || isInstrumentCardCodeRequired;
        let styleContainerId;
        if (selectedInstrument && shouldRenderHostedFields) {
            styleContainerId = getHostedFieldId('ccCvv');
        }
        if (!selectedInstrument) {
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
                (0,lodash__WEBPACK_IMPORTED_MODULE_2__.forIn)(errors, (fieldErrors, fieldType) => {
                    const errorKey = `hostedForm.errors.${fieldType}`;
                    setFieldValue(errorKey, fieldErrors && fieldErrors[0].type ? fieldErrors[0].type : '');
                    if (fieldErrors && fieldErrors[0]) {
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
    const getHostedStoredCardValidationFieldset = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((selectedInstrument) => {
        const isInstrumentCardNumberRequired = selectedInstrument
            ? isInstrumentCardNumberRequiredProp(selectedInstrument, method)
            : false;
        const isInstrumentCardCodeRequired = selectedInstrument
            ? isInstrumentCardCodeRequiredProp(selectedInstrument, method)
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_5__["default"], { cardCodeId: isInstrumentCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardNumberId: isInstrumentCardNumberRequired ? getHostedFieldId('ccNumber') : undefined, focusedFieldType: focusedFieldType }));
    }, [
        focusedFieldType,
        getHostedFieldId,
        isInstrumentCardCodeRequiredProp,
        isInstrumentCardNumberRequiredProp,
        method,
    ]);
    const initializePayment = checkoutService.initializePayment;
    const initializeBraintreePayment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeCreditCardPaymentStrategy], braintree: {
                threeDSecure: {
                    addFrame(error, content, cancel) {
                        if (error) {
                            return onUnhandledError(error);
                        }
                        setThreeDSecureContent(content);
                        ref.current.cancelThreeDSecureVerification = cancel;
                    },
                    removeFrame() {
                        setThreeDSecureContent(undefined);
                        ref.current.cancelThreeDSecureVerification = undefined;
                    },
                },
                onPaymentError(error) {
                    if (error.message === 'THREEDS_VERIFICATION_FAILED') {
                        onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(new Error(language.translate('payment.errors.three_d_secure_payment_failed')));
                    }
                    else {
                        onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
                    }
                },
                form: isHostedFormEnabled
                    ? yield getHostedFormOptions(selectedInstrument)
                    : undefined,
            } }));
    }), [getHostedFormOptions, initializePayment, onUnhandledError]);
    const appendThreeDSecureContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        if (ref.current.threeDSecureContentRef.current && threeDSecureContent) {
            ref.current.threeDSecureContentRef.current.appendChild(threeDSecureContent);
        }
    }, [threeDSecureContent]);
    const cancelThreeDSecureModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        setThreeDSecureContent(undefined);
        if (ref.current.cancelThreeDSecureVerification) {
            ref.current.cancelThreeDSecureVerification();
            ref.current.cancelThreeDSecureVerification = undefined;
        }
    }, []);
    if (!method.config.isHostedFormEnabled) {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeBraintreePayment })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_credit_card_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { cardFieldset: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalFields: requireCustomerCode && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"], { name: "ccCustomerCode" })), cardCodeId: isCardCodeRequired ? getHostedFieldId('ccCvv') : undefined, cardExpiryId: getHostedFieldId('ccExpiry'), cardNameId: getHostedFieldId('ccName'), cardNumberId: getHostedFieldId('ccNumber'), focusedFieldType: focusedFieldType }), cardValidationSchema: (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_7__["default"])({ language }), deinitializePayment: checkoutService.deinitializePayment, getHostedFormOptions: getHostedFormOptions, getStoredCardValidationFieldset: getHostedStoredCardValidationFieldset, initializePayment: initializeBraintreePayment, storedCardValidationSchema: (0,_bigcommerce_checkout_hosted_credit_card_integration__WEBPACK_IMPORTED_MODULE_8__["default"])({
                language,
                isCardExpiryRequired: true,
            }) })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_15__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_13__["default"], { id: "common.close_action" }), isOpen: !!threeDSecureContent, onAfterOpen: appendThreeDSecureContent, onRequestClose: cancelThreeDSecureModalFlow },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { ref: ref.current.threeDSecureContentRef }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_14__["default"])(BraintreeCreditCardsPaymentMethod, [{ id: 'braintree' }]));


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.scss":
/*!**************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.scss ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./BraintreeFastlanePaymentMethod.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _components_BraintreeFastlaneForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BraintreeFastlaneForm */ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneForm.tsx");
/* harmony import */ var _BraintreeFastlanePaymentMethod_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BraintreeFastlanePaymentMethod.scss */ "./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.scss");
/* harmony import */ var _BraintreeFastlanePaymentMethod_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BraintreeFastlanePaymentMethod_scss__WEBPACK_IMPORTED_MODULE_7__);







const BraintreeFastlanePaymentMethod = ({ method, checkoutService, checkoutState, onUnhandledError, paymentForm, }) => {
    var _a, _b;
    const paypalFastlaneComponentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
    const { isLoadingPaymentMethod, isInitializingPayment } = checkoutState.statuses;
    const initializePaymentOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield checkoutService.initializePayment({
                methodId: method.id,
                integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeFastlanePaymentStrategy],
                braintreefastlane: {
                    onInit: (renderPayPalCardComponent) => {
                        paypalFastlaneComponentRef.current.renderPayPalCardComponent =
                            renderPayPalCardComponent;
                    },
                    onChange: (showPayPalCardSelector) => {
                        paypalFastlaneComponentRef.current.showPayPalCardSelector =
                            showPayPalCardSelector;
                    },
                    onError: (error) => {
                        onUnhandledError(error);
                    },
                },
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        }
    });
    const deinitializePaymentOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield checkoutService.deinitializePayment({
                methodId: method.id,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void initializePaymentOrThrow();
        return () => {
            void deinitializePaymentOrThrow();
        };
    }, []);
    const isLoading = isInitializingPayment() || isLoadingPaymentMethod(method.id);
    const formContextProps = {
        isSubmitted: paymentForm.isSubmitted(),
        setSubmitted: paymentForm.setSubmitted,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: formContextProps },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_BraintreeFastlaneForm__WEBPACK_IMPORTED_MODULE_6__["default"], { renderPayPalCardComponent: (_a = paypalFastlaneComponentRef === null || paypalFastlaneComponentRef === void 0 ? void 0 : paypalFastlaneComponentRef.current) === null || _a === void 0 ? void 0 : _a.renderPayPalCardComponent, showPayPalCardSelector: (_b = paypalFastlaneComponentRef.current) === null || _b === void 0 ? void 0 : _b.showPayPalCardSelector }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(BraintreeFastlanePaymentMethod, [{ id: 'braintreeacceleratedcheckout' }]));


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.scss":
/*!**************************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./BraintreeFastlaneCreditCardForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.tsx":
/*!*************************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.tsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BraintreeFastlaneCreditCardForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BraintreeFastlaneCreditCardForm.scss */ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.scss");
/* harmony import */ var _BraintreeFastlaneCreditCardForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BraintreeFastlaneCreditCardForm_scss__WEBPACK_IMPORTED_MODULE_1__);


const BraintreeFastlaneCreditCardForm = ({ renderPayPalCardComponent, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (typeof renderPayPalCardComponent === 'function') {
            renderPayPalCardComponent('#braintree-fastlane-cc-form-container');
        }
    }, [renderPayPalCardComponent]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "braintree-fastlane-cc-form-container", "data-test": "braintree-fastlane-cc-form-container", id: "braintree-fastlane-cc-form-container" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreeFastlaneCreditCardForm);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneForm.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneForm.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBraintreeFastlaneInstruments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBraintreeFastlaneInstruments */ "./packages/braintree-integration/src/BraintreeFastlane/hooks/useBraintreeFastlaneInstruments.ts");
/* harmony import */ var _BraintreeFastlaneCreditCardForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BraintreeFastlaneCreditCardForm */ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneCreditCardForm.tsx");
/* harmony import */ var _BraintreeFastlaneInstrumentsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BraintreeFastlaneInstrumentsForm */ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.tsx");




const BraintreeFastlaneForm = ({ renderPayPalCardComponent, showPayPalCardSelector, }) => {
    const { instruments, handleSelectInstrument, selectedInstrument } = (0,_hooks_useBraintreeFastlaneInstruments__WEBPACK_IMPORTED_MODULE_1__.useBraintreeFastlaneInstruments)();
    const shouldShowInstrumentsForm = instruments.length > 0;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!selectedInstrument && instruments.length > 0) {
            handleSelectInstrument(instruments[0]);
        }
    }, [instruments, selectedInstrument]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "paymentMethod paymentMethod--creditCard", id: "braintree-fastlane" },
        shouldShowInstrumentsForm && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BraintreeFastlaneInstrumentsForm__WEBPACK_IMPORTED_MODULE_3__["default"], { handleSelectInstrument: handleSelectInstrument, onChange: showPayPalCardSelector, selectedInstrument: selectedInstrument || instruments[0] })),
        !shouldShowInstrumentsForm && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BraintreeFastlaneCreditCardForm__WEBPACK_IMPORTED_MODULE_2__["default"], { renderPayPalCardComponent: renderPayPalCardComponent }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreeFastlaneForm);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.scss":
/*!***************************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./BraintreeFastlaneInstrumentsForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.tsx":
/*!**************************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.tsx ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-fastlane-integration */ "./packages/paypal-fastlane-integration/src/PoweredByPayPalFastlaneLabel.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/CreditCardIcon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _BraintreeFastlaneInstrumentsForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BraintreeFastlaneInstrumentsForm.scss */ "./packages/braintree-integration/src/BraintreeFastlane/components/BraintreeFastlaneInstrumentsForm.scss");
/* harmony import */ var _BraintreeFastlaneInstrumentsForm_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_BraintreeFastlaneInstrumentsForm_scss__WEBPACK_IMPORTED_MODULE_6__);






function mapFromInstrumentCardType(type) {
    switch (type.toLowerCase()) {
        case 'amex':
        case 'american_express':
            return 'american-express';
        case 'diners':
            return 'diners-club';
        case 'master_card':
            return 'mastercard';
        default:
            return type;
    }
}
const BraintreeFastlaneInstrumentsForm = ({ onChange, handleSelectInstrument, selectedInstrument }) => {
    const cardType = mapFromInstrumentCardType(selectedInstrument.brand).toLowerCase();
    const handleChange = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        if (typeof onChange === 'function') {
            const result = yield onChange();
            if (result) {
                handleSelectInstrument(result);
            }
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "braintree-fastlane-instrument", "data-test": "braintree-fastlane-instrument-form" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "braintree-fastlane-instrument-details" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { cardType: cardType }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "instrumentSelect-card", "data-test": "braintree-fastlane-instrument-last4" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null,
                        "\u25CF\u25CF\u25CF\u25CF ",
                        selectedInstrument.last4))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "braintree-fastlane-instrument-branding" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_3__["default"], null))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "braintree-fastlane-instrument-change-action" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: handleChange, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.ButtonSize.Tiny, testId: "braintree-fastlane-instrument-change", variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.ButtonVariant.Secondary },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "common.change_action" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreeFastlaneInstrumentsForm);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/hooks/useBraintreeFastlaneInstruments.ts":
/*!*******************************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/hooks/useBraintreeFastlaneInstruments.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBraintreeFastlaneInstruments: () => (/* binding */ useBraintreeFastlaneInstruments)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-fastlane-integration */ "./packages/paypal-fastlane-integration/src/is-paypal-fastlane-customer.ts");



const useBraintreeFastlaneInstruments = () => {
    const [selectedInstrument, setSelectedInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { getPaymentProviderCustomer } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)().checkoutState.data;
    const paymentProviderCustomer = getPaymentProviderCustomer();
    const paypalFastlaneCustomer = (0,_bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_3__["default"])(paymentProviderCustomer)
        ? paymentProviderCustomer
        : {};
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const handleSelectInstrument = (instrument) => {
        setSelectedInstrument(instrument);
        paymentForm.setFieldValue('instrumentId', instrument.bigpayToken);
    };
    return {
        instruments: paypalFastlaneCustomer.instruments || [],
        handleSelectInstrument,
        selectedInstrument,
    };
};


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeFastlane/index.ts":
/*!***********************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeFastlane/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BraintreeFastlanePaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BraintreeFastlanePaymentMethod */ "./packages/braintree-integration/src/BraintreeFastlane/BraintreeFastlanePaymentMethod.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BraintreeFastlanePaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeLocalPaymentMethod.tsx":
/*!****************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeLocalPaymentMethod.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");




const BraintreeLocalPaymentMethod = ({ method, checkoutService, paymentForm, language, onUnhandledError, }) => {
    const methodId = method.id;
    const initializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield checkoutService.initializePayment({
                gatewayId: method.gateway,
                methodId: method.id,
                integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeLocalMethodsPaymentStrategy],
                braintreelocalmethods: {
                    container: '#checkout-payment-continue',
                    buttonText: language.translate('payment.continue_with_brand', {
                        brandName: methodId,
                    }),
                    onRenderButton: () => {
                        paymentForm.hidePaymentSubmitButton(method, true);
                    },
                    submitForm: () => {
                        paymentForm.setSubmitted(true);
                        paymentForm.submitForm();
                    },
                    onError: (error) => {
                        paymentForm.disableSubmit(method, true);
                        onUnhandledError(error);
                    },
                },
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        }
    });
    const deinitializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield checkoutService.deinitializePayment({
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void initializePayment();
        return () => {
            void deinitializePayment();
        };
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(BraintreeLocalPaymentMethod, [{ gateway: 'braintreelocalmethods' }]));


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreePaypalPaymentMethod.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreePaypalPaymentMethod.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const BraintreePaypalPaymentMethod = (_a) => {
    var { checkoutService } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService"]);
    const initializeBraintreePaypalPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((defaultOptions) => {
        const { onUnhandledError, language, method, paymentForm } = rest;
        return checkoutService.initializePayment(Object.assign(Object.assign({}, defaultOptions), { integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreePaypalPaymentStrategy], braintree: {
                containerId: '#checkout-payment-continue',
                submitForm: () => {
                    paymentForm.setSubmitted(true);
                    paymentForm.submitForm();
                },
                onError: (error) => {
                    if (error.message === 'INSTRUMENT_DECLINED') {
                        onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(new Error(language.translate('payment.errors.instrument_declined')));
                    }
                    else {
                        onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
                    }
                },
                onRenderButton: () => {
                    paymentForm.hidePaymentSubmitButton(method, true);
                },
            } }));
    }, [rest, checkoutService]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checkoutService: checkoutService, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeBraintreePaypalPaymentMethod })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(BraintreePaypalPaymentMethod, [{ id: 'braintreepaypal' }, { id: 'braintreepaypalcredit' }]));


/***/ }),

/***/ "./packages/braintree-integration/src/BraintreeVenmo/BraintreeVenmoPaymentMethod.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/braintree-integration/src/BraintreeVenmo/BraintreeVenmoPaymentMethod.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const BraintreeVenmoPaymentMethod = ({ checkoutService, checkoutState, language, method, paymentForm, }) => {
    const initializeBraintreeVenmoPayment = (options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeVenmoPaymentStrategy] }));
    });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_hosted_payment_integration__WEBPACK_IMPORTED_MODULE_3__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeBraintreeVenmoPayment, language: language, method: method, paymentForm: paymentForm }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(BraintreeVenmoPaymentMethod, [{ id: 'braintreevenmo' }]));


/***/ }),

/***/ "./packages/braintree-integration/src/VisaCheckout/VisaCheckoutPaymentMethod.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/braintree-integration/src/VisaCheckout/VisaCheckoutPaymentMethod.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/PaymentMethodId.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_wallet_button_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/wallet-button-integration */ "./packages/wallet-button-integration/src/WalletButtonPaymentMethodComponent.tsx");





const VisaCheckoutPaymentMethod = (_a) => {
    var { checkoutService, method, onUnhandledError } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "method", "onUnhandledError"]);
    const initializeVisaCheckoutPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((defaultOptions) => {
        const reinitializePayment = (options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.deinitializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
                yield checkoutService.initializePayment(Object.assign(Object.assign({}, options), { gatewayId: method.gateway, methodId: method.id, integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeVisaCheckoutPaymentStrategy] }));
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        const mergedOptions = Object.assign(Object.assign({}, defaultOptions), { integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_1__.createBraintreeVisaCheckoutPaymentStrategy], braintreevisacheckout: {
                onError: onUnhandledError,
                onPaymentSelect: () => reinitializePayment(mergedOptions),
            } });
        return checkoutService.initializePayment(mergedOptions);
    }, [checkoutService, method, onUnhandledError]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_wallet_button_integration__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, rest, { buttonId: "visaCheckoutWalletButton", deinitializePayment: checkoutService.deinitializePayment, editButtonClassName: "v-button", initializePayment: initializeVisaCheckoutPayment, method: method, shouldShowEditButton: true, signInButtonClassName: "v-button", signOutCustomer: checkoutService.signOutCustomer })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(VisaCheckoutPaymentMethod, [{ id: _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"].BraintreeVisaCheckout }]));


/***/ }),

/***/ "./packages/braintree-integration/src/index.ts":
/*!*****************************************************!*\
  !*** ./packages/braintree-integration/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BraintreeAchPaymentMethod: () => (/* reexport safe */ _BraintreeAch_BraintreeAchPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BraintreeCreditCardsPaymentMethod: () => (/* reexport safe */ _BraintreeCreditCardsPaymentMethod__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   BraintreeFastlanePaymentMethod: () => (/* reexport safe */ _BraintreeFastlane__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   BraintreeLocalPaymentMethod: () => (/* reexport safe */ _BraintreeLocalPaymentMethod__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   BraintreePaypalPaymentMethod: () => (/* reexport safe */ _BraintreePaypalPaymentMethod__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   BraintreeVenmoPaymentMethod: () => (/* reexport safe */ _BraintreeVenmo_BraintreeVenmoPaymentMethod__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   VisaCheckoutPaymentMethod: () => (/* reexport safe */ _VisaCheckout_VisaCheckoutPaymentMethod__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _BraintreeAch_BraintreeAchPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BraintreeAch/BraintreeAchPaymentMethod */ "./packages/braintree-integration/src/BraintreeAch/BraintreeAchPaymentMethod.tsx");
/* harmony import */ var _BraintreeFastlane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BraintreeFastlane */ "./packages/braintree-integration/src/BraintreeFastlane/index.ts");
/* harmony import */ var _BraintreeCreditCardsPaymentMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BraintreeCreditCardsPaymentMethod */ "./packages/braintree-integration/src/BraintreeCreditCardsPaymentMethod.tsx");
/* harmony import */ var _BraintreeLocalPaymentMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BraintreeLocalPaymentMethod */ "./packages/braintree-integration/src/BraintreeLocalPaymentMethod.tsx");
/* harmony import */ var _BraintreePaypalPaymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BraintreePaypalPaymentMethod */ "./packages/braintree-integration/src/BraintreePaypalPaymentMethod.tsx");
/* harmony import */ var _VisaCheckout_VisaCheckoutPaymentMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VisaCheckout/VisaCheckoutPaymentMethod */ "./packages/braintree-integration/src/VisaCheckout/VisaCheckoutPaymentMethod.tsx");
/* harmony import */ var _BraintreeVenmo_BraintreeVenmoPaymentMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BraintreeVenmo/BraintreeVenmoPaymentMethod */ "./packages/braintree-integration/src/BraintreeVenmo/BraintreeVenmoPaymentMethod.tsx");









/***/ }),

/***/ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

}]);
//# sourceMappingURL=braintree-ach-payment-method.js.map