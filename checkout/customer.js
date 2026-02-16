(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["customer"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/customer/CreateAccountForm.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/customer/CreateAccountForm.scss ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".create-account-form {\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.create-account-form .dynamic-form-field {\n  display: block;\n  flex: 1;\n  flex-basis: 100%;\n  margin-bottom: 0.75rem;\n  max-width: 100%;\n  padding: 0 0.75rem;\n}\n.create-account-form .dynamic-form-field:last-child {\n  margin-bottom: 0;\n}\n@media (min-width: 769px) {\n  .create-account-form .dynamic-form-field--firstName,\n  .create-account-form .dynamic-form-field--lastName {\n    flex-basis: 50%;\n  }\n}\n.create-account-form .dynamic-form-field.floating-form-field {\n  padding: 0 4px;\n}\n\n.create-account-form:has(.floating-form-field) {\n  margin-left: -4px;\n  margin-right: -4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.scss ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".paypalFastlaneWatermark-container {\n  display: flex;\n  justify-content: end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./packages/core/src/app/common/utility/isFloatingLabelEnabled.ts":
/*!************************************************************************!*\
  !*** ./packages/core/src/app/common/utility/isFloatingLabelEnabled.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFloatingLabelEnabled)
/* harmony export */ });
function isFloatingLabelEnabled(checkoutSettings) {
    return Boolean(checkoutSettings.checkoutUserExperienceSettings.floatingLabelEnabled);
}


/***/ }),

/***/ "./packages/core/src/app/customer/CheckoutButtonList.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/customer/CheckoutButtonList.tsx ***!
  \***************************************************************/
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
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LazyContainer.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _getSupportedMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSupportedMethods */ "./packages/core/src/app/customer/getSupportedMethods.ts");
/* harmony import */ var _resolveCheckoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolveCheckoutButton */ "./packages/core/src/app/customer/resolveCheckoutButton.ts");








const CheckoutButtonV1Resolver = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() | wallet-button-v1-resolver */[__webpack_require__.e("checkout-sdk-js_dist_esm_integrations_paypal-commerce_js"), __webpack_require__.e("checkout-sdk-js_dist_esm_integrations_bigcommerce-payments_js"), __webpack_require__.e("checkout-sdk-js_dist_esm_integrations_stripe_js"), __webpack_require__.e("checkout-sdk-js_dist_esm_integrations_braintree_js"), __webpack_require__.e("wallet-button-v1-resolver")]).then(__webpack_require__.bind(__webpack_require__, /*! ./WalletButtonV1Resolver */ "./packages/core/src/app/customer/WalletButtonV1Resolver.tsx")));
const CheckoutButtonList = ({ checkoutService, checkoutState, hideText = false, isInitializing = false, methodIds = [], checkEmbeddedSupport, deinitialize, initialize, onClick = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onError, }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useLocale)();
    const supportedMethodIds = (0,_getSupportedMethods__WEBPACK_IMPORTED_MODULE_6__.getSupportedMethodIds)(methodIds);
    if (supportedMethodIds.length === 0) {
        return null;
    }
    if (checkEmbeddedSupport) {
        try {
            checkEmbeddedSupport(supportedMethodIds);
        }
        catch (error) {
            if (error instanceof Error && onError) {
                onError(error);
            }
            else {
                throw error;
            }
            return null;
        }
    }
    const renderButtons = () => {
        return supportedMethodIds.map((methodId) => {
            const ResolvedCheckoutButton = (0,_resolveCheckoutButton__WEBPACK_IMPORTED_MODULE_7__["default"])({ id: methodId });
            if (!ResolvedCheckoutButton) {
                return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { key: methodId },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CheckoutButtonV1Resolver, { deinitialize: deinitialize, initialize: initialize, isShowingWalletButtonsOnTop: false, key: methodId, methodId: methodId, onClick: onClick, onError: onClick }));
            }
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { key: methodId },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ResolvedCheckoutButton, { checkoutService: checkoutService, checkoutState: checkoutState, containerId: `${methodId}CheckoutButton`, language: language, methodId: methodId, onUnhandledError: onClick, onWalletButtonClick: onClick }));
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        !isInitializing && !hideText && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "remote.continue_with_text" }))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "checkoutRemote" }, renderButtons())));
};
function mapToCheckoutButtonListProps({ checkoutState, checkoutService, }) {
    return {
        checkoutService,
        checkoutState,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((0,_checkout__WEBPACK_IMPORTED_MODULE_5__["default"])(mapToCheckoutButtonListProps)(CheckoutButtonList)));


/***/ }),

/***/ "./packages/core/src/app/customer/CreateAccountForm.scss":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/customer/CreateAccountForm.scss ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./CreateAccountForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/customer/CreateAccountForm.scss");

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

/***/ "./packages/core/src/app/customer/CreateAccountForm.tsx":
/*!**************************************************************!*\
  !*** ./packages/core/src/app/customer/CreateAccountForm.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicFormField.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isRequestError.ts");
/* harmony import */ var _ui_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/alert */ "./packages/core/src/app/ui/alert/Alert.tsx");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _getCreateCustomerValidationSchema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getCreateCustomerValidationSchema */ "./packages/core/src/app/customer/getCreateCustomerValidationSchema.ts");
/* harmony import */ var _getPasswordRequirements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./getPasswordRequirements */ "./packages/core/src/app/customer/getPasswordRequirements.ts");
/* harmony import */ var _CreateAccountForm_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CreateAccountForm.scss */ "./packages/core/src/app/customer/CreateAccountForm.scss");
/* harmony import */ var _CreateAccountForm_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_CreateAccountForm_scss__WEBPACK_IMPORTED_MODULE_16__);
/* istanbul ignore file */















function getAcceptsMarketingEmailsDefault(defaultShouldSubscribe, requiresMarketingConsent) {
    if (defaultShouldSubscribe) {
        return ['1'];
    }
    return requiresMarketingConsent ? [] : ['0'];
}
function transformFormFieldsData(formFields, defaultShouldSubscribe) {
    return formFields.map(field => {
        if (field.name === 'acceptsMarketingEmails') {
            const { options } = field;
            const items = (options === null || options === void 0 ? void 0 : options.items) || [];
            const updatedItems = items.map(item => {
                return {
                    value: defaultShouldSubscribe ? '1' : item.value,
                    label: item.label,
                };
            });
            return Object.assign(Object.assign({}, field), { options: {
                    items: updatedItems,
                } });
        }
        return field;
    });
}
const CreateAccountForm = ({ formFields, createAccountError, isCreatingAccount, isExecutingPaymentMethodCheckout, onCancel, isFloatingLabelEnabled, defaultShouldSubscribe }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)();
    const createAccountErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (!createAccountError) {
            return;
        }
        if ((0,_common_error__WEBPACK_IMPORTED_MODULE_9__["default"])(createAccountError) && createAccountError.status === 409) {
            const splitMessage = createAccountError.message.split(':');
            if (splitMessage.length > 1) {
                return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { data: { email: splitMessage[1].trim() }, id: "customer.email_in_use_text" }));
            }
            return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.unknown_email_in_use_text" });
        }
        return createAccountError.message;
    }, [createAccountError]);
    const fields = transformFormFieldsData(formFields, defaultShouldSubscribe);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["default"], { className: "checkout-form", id: "checkout-customer-returning", testId: "checkout-customer-returning" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            createAccountErrorMessage && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_10__["default"], { type: _ui_alert__WEBPACK_IMPORTED_MODULE_10__.AlertType.Error }, createAccountErrorMessage)),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "create-account-form" }, fields.map((field) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { autocomplete: field.name, extraClass: `dynamic-form-field--${field.name}`, field: field, isFloatingLabelEnabled: isFloatingLabelEnabled, key: field.id, parentFieldName: field.custom ? 'customFields' : undefined, themeV2: themeV2 }))))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-actions" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_11__["default"], { className: themeV2 ? 'body-bold' : '', disabled: isCreatingAccount || isExecutingPaymentMethodCheckout, id: "checkout-customer-create", isLoading: isCreatingAccount || isExecutingPaymentMethodCheckout, testId: "customer-continue-create", type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_11__.ButtonVariant.Primary },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.create_account_action" })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('button optimizedCheckout-buttonSecondary', { 'body-bold': themeV2 }), "data-test": "customer-cancel-button", href: "#", id: "checkout-customer-cancel", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(onCancel) },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "common.cancel_action" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    handleSubmit: (values, { props: { onSubmit = lodash__WEBPACK_IMPORTED_MODULE_2__.noop } }) => {
        onSubmit(values);
    },
    mapPropsToValues: ({ defaultShouldSubscribe, requiresMarketingConsent }) => ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        customFields: {},
        acceptsMarketingEmails: getAcceptsMarketingEmailsDefault(defaultShouldSubscribe, requiresMarketingConsent),
    }),
    validationSchema: ({ language, formFields, }) => {
        var _a;
        const passwordRequirements = (_a = formFields.find(({ requirements }) => requirements)) === null || _a === void 0 ? void 0 : _a.requirements;
        if (!passwordRequirements) {
            throw new Error('Password requirements missing');
        }
        const schema = (0,_getCreateCustomerValidationSchema__WEBPACK_IMPORTED_MODULE_14__["default"])({
            language,
            formFields,
            passwordRequirements: (0,_getPasswordRequirements__WEBPACK_IMPORTED_MODULE_15__["default"])(passwordRequirements),
        });
        return schema;
    },
})(CreateAccountForm)));


/***/ }),

/***/ "./packages/core/src/app/customer/Customer.tsx":
/*!*****************************************************!*\
  !*** ./packages/core/src/app/customer/Customer.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bigcommerce-payments */ "../checkout-sdk-js/dist/esm/integrations/bigcommerce-payments.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bolt */ "../checkout-sdk-js/dist/esm/integrations/bolt.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "../checkout-sdk-js/dist/esm/integrations/braintree.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-commerce */ "../checkout-sdk-js/dist/esm/integrations/paypal-commerce.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "../checkout-sdk-js/dist/esm/integrations/stripe.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/analytics/useAnalytics.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isErrorWithType.ts");
/* harmony import */ var _payment_paymentMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../payment/paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _CreateAccountForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateAccountForm */ "./packages/core/src/app/customer/CreateAccountForm.tsx");
/* harmony import */ var _CustomerViewType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CustomerViewType */ "./packages/core/src/app/customer/CustomerViewType.ts");
/* harmony import */ var _EmailLoginForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EmailLoginForm */ "./packages/core/src/app/customer/EmailLoginForm.tsx");
/* harmony import */ var _GuestFormContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GuestFormContainer */ "./packages/core/src/app/customer/GuestFormContainer.tsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LoginForm */ "./packages/core/src/app/customer/LoginForm.tsx");
/* harmony import */ var _mapCreateAccountFromFormValues__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mapCreateAccountFromFormValues */ "./packages/core/src/app/customer/mapCreateAccountFromFormValues.ts");
/* harmony import */ var _SubscribeSessionStorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SubscribeSessionStorage */ "./packages/core/src/app/customer/SubscribeSessionStorage.ts");
/* harmony import */ var _useCustomer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useCustomer */ "./packages/core/src/app/customer/useCustomer.ts");



















const Customer = ({ viewType, step, isEmbedded, isSubscribed, isWalletButtonsOnTop, onChangeViewType = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onAccountCreated = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onContinueAsGuest = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onContinueAsGuestError = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onReady = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onSubscribeToNewsletter, onSignIn = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onSignInError = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, onWalletButtonClick = lodash__WEBPACK_IMPORTED_MODULE_6__.noop, }) => {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        isEmailLoginFormOpen: false,
        isReady: false,
        hasRequestedLoginEmail: false,
        draftEmail: undefined,
    });
    const { analyticsTracker } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const customerData = (0,_useCustomer__WEBPACK_IMPORTED_MODULE_18__.useCustomer)();
    // Initialize draftEmail on mount
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
        setState(prevState => (Object.assign(Object.assign({}, prevState), { draftEmail: customerData.data.email })));
    }, [customerData.data.email]);
    // componentDidMount equivalent
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
        const initializeCustomer = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                if (customerData.data.providerWithCustomCheckout &&
                    customerData.data.providerWithCustomCheckout !== _payment_paymentMethod__WEBPACK_IMPORTED_MODULE_10__["default"].StripeUPE) {
                    // TODO: Split out into separate chunks so they can be lazy loaded
                    yield customerData.actions.initializeCustomer({
                        methodId: customerData.data.providerWithCustomCheckout,
                        integrations: [
                            _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_1__.createBigCommercePaymentsFastlaneCustomerStrategy,
                            _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_3__.createBraintreeFastlaneCustomerStrategy,
                            _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_4__.createPayPalCommerceFastlaneCustomerStrategy,
                            _bigcommerce_checkout_sdk_integrations_bolt__WEBPACK_IMPORTED_MODULE_2__.createBoltCustomerStrategy,
                            _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_5__.createStripeUPECustomerStrategy,
                            _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_5__.createStripeLinkV2CustomerStrategy,
                        ],
                    });
                }
            }
            catch (error) {
                onUnhandledError(error);
            }
            setState(prevState => (Object.assign(Object.assign({}, prevState), { isReady: true })));
            onReady();
        });
        initializeCustomer();
    }, []);
    // componentWillUnmount equivalent
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
        return () => {
            const cleanup = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                try {
                    yield customerData.actions.deinitializeCustomer({
                        methodId: customerData.data.providerWithCustomCheckout
                    });
                }
                catch (error) {
                    onUnhandledError(error);
                }
            });
            void cleanup();
        };
    }, [customerData.actions.deinitializeCustomer, customerData.data.providerWithCustomCheckout, onUnhandledError]);
    // Event handlers converted to useCallback
    const handleChangeEmail = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((email) => {
        setState(prevState => (Object.assign(Object.assign({}, prevState), { draftEmail: email })));
        analyticsTracker.customerEmailEntry(email);
    }, [analyticsTracker]);
    const handleSignIn = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((credentials) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield customerData.actions.signIn(credentials);
            onSignIn();
            setState(prevState => (Object.assign(Object.assign({}, prevState), { draftEmail: undefined })));
        }
        catch (error) {
            onSignInError(error);
        }
    }), [customerData.actions.signIn, onSignIn, onSignInError]);
    const handleContinueAsGuest = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((formValues) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const email = formValues.email.trim();
        const updateSubscriptionWhenUnchecked = customerData.data.hasBillingId || customerData.data.defaultShouldSubscribe ? false : undefined;
        try {
            const { data } = yield customerData.actions.continueAsGuest({
                email,
                acceptsMarketingNewsletter: customerData.data.canSubscribe && formValues.shouldSubscribe
                    ? true
                    : updateSubscriptionWhenUnchecked,
                acceptsAbandonedCartEmails: formValues.shouldSubscribe
                    ? true
                    : updateSubscriptionWhenUnchecked,
            });
            onSubscribeToNewsletter(formValues.shouldSubscribe);
            _SubscribeSessionStorage__WEBPACK_IMPORTED_MODULE_17__.SubscribeSessionStorage.setSubscribeStatus(formValues.shouldSubscribe);
            const customer = data.getCustomer();
            const paymentProviderCustomer = data.getPaymentProviderCustomer();
            if (customer && customer.shouldEncourageSignIn && customer.isGuest && !(paymentProviderCustomer === null || paymentProviderCustomer === void 0 ? void 0 : paymentProviderCustomer.stripeLinkAuthenticationState)) {
                return onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].SuggestedLogin);
            }
            yield executePaymentMethodCheckoutOrContinue();
            setState(prevState => (Object.assign(Object.assign({}, prevState), { draftEmail: undefined })));
        }
        catch (error) {
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_9__["default"])(error) &&
                (error.type === 'update_subscriptions' ||
                    error.type === 'payment_method_client_invalid')) {
                setState(prevState => (Object.assign(Object.assign({}, prevState), { draftEmail: undefined })));
                onContinueAsGuest();
            }
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_9__["default"])(error) && error.type === 'empty_cart') {
                return onContinueAsGuestError(error);
            }
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_9__["default"])(error) && error.status === 429) {
                return onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].EnforcedLogin);
            }
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_9__["default"])(error) && error.status === 403) {
                return onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].CancellableEnforcedLogin);
            }
            onContinueAsGuestError(error);
        }
    }), [customerData, onSubscribeToNewsletter, onChangeViewType, onContinueAsGuest, onContinueAsGuestError]);
    const executePaymentMethodCheckoutOrContinue = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        if (customerData.data.providerWithCustomCheckout &&
            customerData.data.providerWithCustomCheckout !== _payment_paymentMethod__WEBPACK_IMPORTED_MODULE_10__["default"].StripeUPE) {
            yield customerData.actions.executePaymentMethodCheckout({
                methodId: customerData.data.providerWithCustomCheckout,
                continueWithCheckoutCallback: onContinueAsGuest,
                checkoutPaymentMethodExecuted: (payload) => {
                    analyticsTracker.customerPaymentMethodExecuted(payload);
                }
            });
        }
        else {
            onContinueAsGuest();
        }
    }), [customerData.actions.executePaymentMethodCheckout, customerData.data.providerWithCustomCheckout, onContinueAsGuest, analyticsTracker]);
    // Additional event handlers
    const handleShowLogin = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
        onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].Login);
    }, [onChangeViewType]);
    const handleCreateAccount = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield customerData.actions.createAccount((0,_mapCreateAccountFromFormValues__WEBPACK_IMPORTED_MODULE_16__["default"])(values));
        onAccountCreated();
    }), [customerData.actions.createAccount, onAccountCreated]);
    const handleCancelCreateAccount = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
        if (customerData.data.createAccountError) {
            customerData.actions.clearError(customerData.data.createAccountError);
        }
        onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].Login);
    }, [customerData.actions.clearError, customerData.data.createAccountError, onChangeViewType]);
    const handleCancelSignIn = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
        if (customerData.data.signInError) {
            customerData.actions.clearError(customerData.data.signInError);
        }
        onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].Guest);
    }, [customerData.actions.clearError, customerData.data.signInError, onChangeViewType]);
    const showCreateAccount = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
        onChangeViewType(_CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].CreateAccount);
    }, [onChangeViewType]);
    const handleSendLoginEmail = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield customerData.actions.sendLoginEmail(values);
        }
        catch (_a) {
            // Need to write catch block since one test covers the case when `sendLoginEmail` fails
        }
        finally {
            setState(prevState => (Object.assign(Object.assign({}, prevState), { hasRequestedLoginEmail: true })));
        }
    }), [customerData.actions.sendLoginEmail]);
    const handleEmailLoginClicked = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            if (viewType !== _CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].Login && state.draftEmail) {
                yield handleSendLoginEmail({ email: state.draftEmail });
            }
        }
        finally {
            setState(prevState => (Object.assign(Object.assign({}, prevState), { isEmailLoginFormOpen: true })));
        }
    }), [viewType, state.draftEmail, handleSendLoginEmail]);
    const closeEmailLoginFormForm = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
        setState(prevState => (Object.assign(Object.assign({}, prevState), { isEmailLoginFormOpen: false, hasRequestedLoginEmail: false })));
    }, []);
    // Main render logic
    const shouldRenderGuestForm = viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].Guest;
    const shouldRenderCreateAccountForm = viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_12__["default"].CreateAccount;
    const shouldRenderLoginForm = !shouldRenderGuestForm && !shouldRenderCreateAccountForm;
    if (!state.isReady) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null,
        state.isEmailLoginFormOpen && (react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_EmailLoginForm__WEBPACK_IMPORTED_MODULE_13__["default"], { email: state.draftEmail, emailHasBeenRequested: state.hasRequestedLoginEmail, isFloatingLabelEnabled: customerData.data.isFloatingLabelEnabled, isOpen: state.isEmailLoginFormOpen, isSendingEmail: customerData.data.isSendingSignInEmail, onRequestClose: closeEmailLoginFormForm, onSendLoginEmail: handleSendLoginEmail, sentEmail: customerData.data.signInEmail, sentEmailError: customerData.data.signInEmailError })),
        shouldRenderLoginForm && (react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_15__["default"], { continueAsGuestButtonLabelId: "customer.continue_as_guest_action", email: state.draftEmail || customerData.data.email, isEmbedded: isEmbedded, isFloatingLabelEnabled: customerData.data.isFloatingLabelEnabled, onCancel: handleCancelSignIn, onChangeEmail: handleChangeEmail, onContinueAsGuest: executePaymentMethodCheckoutOrContinue, onCreateAccount: showCreateAccount, onSendLoginEmail: handleEmailLoginClicked, onSignIn: handleSignIn, signInError: customerData.data.signInError, viewType: viewType })),
        shouldRenderGuestForm && (react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_GuestFormContainer__WEBPACK_IMPORTED_MODULE_14__.GuestFormContainer, { email: state.draftEmail || customerData.data.email, handleChangeEmail: handleChangeEmail, handleContinueAsGuest: handleContinueAsGuest, handleShowLogin: handleShowLogin, isFloatingLabelEnabled: customerData.data.isFloatingLabelEnabled, isSubscribed: isSubscribed, isWalletButtonsOnTop: isWalletButtonsOnTop, onUnhandledError: onUnhandledError, onWalletButtonClick: onWalletButtonClick, step: step })),
        shouldRenderCreateAccountForm && (react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_CreateAccountForm__WEBPACK_IMPORTED_MODULE_11__["default"], { createAccountError: customerData.data.createAccountError, defaultShouldSubscribe: customerData.data.defaultShouldSubscribe, formFields: customerData.data.customerAccountFields, isCreatingAccount: customerData.data.isCreatingAccount, isExecutingPaymentMethodCheckout: customerData.data.isExecutingPaymentMethodCheckout, isFloatingLabelEnabled: customerData.data.isFloatingLabelEnabled, onCancel: handleCancelCreateAccount, onSubmit: handleCreateAccount, requiresMarketingConsent: customerData.data.requiresMarketingConsent }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);


/***/ }),

/***/ "./packages/core/src/app/customer/EmailField.tsx":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/customer/EmailField.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/FormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/TextInput.tsx");




const EmailField = ({ onChange, isFloatingLabelEnabled }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useThemeContext)();
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props.field, { autoComplete: props.field.name, id: props.field.name, isFloatingLabelEnabled: isFloatingLabelEnabled, themeV2: themeV2, type: "email" }))), [isFloatingLabelEnabled]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "customer.email_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_3__["default"], { input: renderInput, isFloatingLabelEnabled: isFloatingLabelEnabled, labelContent: labelContent, name: "email", onChange: onChange, themeV2: themeV2 }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(EmailField));


/***/ }),

/***/ "./packages/core/src/app/customer/EmailLoginForm.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/customer/EmailLoginForm.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedLink.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingSpinner.tsx");
/* harmony import */ var _ui_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/alert */ "./packages/core/src/app/ui/alert/Alert.tsx");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/Modal.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/ModalHeader.tsx");
/* harmony import */ var _EmailField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EmailField */ "./packages/core/src/app/customer/EmailField.tsx");
/* harmony import */ var _getEmailValidationSchema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getEmailValidationSchema */ "./packages/core/src/app/customer/getEmailValidationSchema.ts");











const EmailLoginForm = ({ email, isOpen, isSendingEmail = false, emailHasBeenRequested, onRequestClose = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, sentEmailError, sentEmail, submitForm, isFloatingLabelEnabled, values: { email: formEmail }, }) => {
    const modalHeaderStringId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (emailHasBeenRequested) {
            if (sentEmailError) {
                return 'common.error_heading';
            }
            return 'login_email.sent_header';
        }
        if (email) {
            return 'login_email.header_with_email';
        }
        return 'login_email.header';
    }, [emailHasBeenRequested, sentEmailError, email]);
    const okButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "modal-footer" },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: onRequestClose },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "common.ok_action" })))), [onRequestClose]);
    const footer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (sentEmailError && sentEmailError.status === 429) {
            return okButton;
        }
        if (emailHasBeenRequested && !sentEmailError) {
            if (isSendingEmail) {
                return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { isLoading: true });
            }
            if (sentEmail && sentEmail.sent_email === 'reset_password') {
                return okButton;
            }
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "login_email.resend_link", onClick: submitForm }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "login_email.use_password_link", onClick: onRequestClose })));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "modal-footer" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "optimizedCheckout-buttonSecondary", onClick: onRequestClose, type: "button" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "common.cancel_action" })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_9__["default"], { isLoading: isSendingEmail, type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_9__.ButtonVariant.Primary },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "login_email.send" }))));
    }, [
        sentEmailError,
        emailHasBeenRequested,
        okButton,
        submitForm,
        isSendingEmail,
        onRequestClose,
        sentEmail,
    ]);
    const error = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (!sentEmailError) {
            return null;
        }
        const { status } = sentEmailError;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_8__["default"], { type: _ui_alert__WEBPACK_IMPORTED_MODULE_8__.AlertType.Error }, status === 429 ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "login_email.error_temporary_disabled" })) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: status === 404
                ? 'login_email.error_not_found'
                : 'login_email.error_server' }))));
    }, [sentEmailError]);
    const form = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (sentEmailError && sentEmailError.status === 429) {
            return null;
        }
        if (emailHasBeenRequested && sentEmail && !sentEmailError) {
            const { expiry, sent_email } = sentEmail;
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { data: {
                        minutes: Math.round(expiry / 60),
                    }, id: sent_email === 'sign_in'
                        ? 'login_email.sent_text'
                        : 'customer.reset_password_before_login_error' })));
        }
        if (emailHasBeenRequested && !sentEmail) {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_EmailField__WEBPACK_IMPORTED_MODULE_13__["default"], { isFloatingLabelEnabled: isFloatingLabelEnabled });
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "login_email.text" })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_EmailField__WEBPACK_IMPORTED_MODULE_13__["default"], { isFloatingLabelEnabled: isFloatingLabelEnabled })));
    }, [sentEmailError, emailHasBeenRequested, sentEmail, formEmail]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_11__["default"], { additionalBodyClassName: "modal--withText", additionalModalClassName: "modal--medium", header: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: modalHeaderStringId })), isOpen: isOpen, onRequestClose: onRequestClose, shouldShowCloseButton: true },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { isLoading: isSendingEmail && !email }),
            error,
            form,
            footer)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_0__.withFormik)({
    mapPropsToValues: ({ email = '' }) => ({
        email,
    }),
    handleSubmit: (values, { props: { onSendLoginEmail = lodash__WEBPACK_IMPORTED_MODULE_1__.noop } }) => {
        onSendLoginEmail(values);
    },
    validationSchema: ({ language }) => (0,_getEmailValidationSchema__WEBPACK_IMPORTED_MODULE_14__["default"])({ language }),
})((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(EmailLoginForm))));


/***/ }),

/***/ "./packages/core/src/app/customer/GuestForm.tsx":
/*!******************************************************!*\
  !*** ./packages/core/src/app/customer/GuestForm.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-fastlane-integration */ "./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.tsx");
/* harmony import */ var _privacyPolicy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privacyPolicy */ "./packages/core/src/app/privacyPolicy/PrivacyPolicyField.tsx");
/* harmony import */ var _privacyPolicy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../privacyPolicy */ "./packages/core/src/app/privacyPolicy/getPrivacyPolicyValidationSchema.ts");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _EmailField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EmailField */ "./packages/core/src/app/customer/EmailField.tsx");
/* harmony import */ var _SubscribeField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SubscribeField */ "./packages/core/src/app/customer/SubscribeField.tsx");
/* harmony import */ var _SubscribeSessionStorage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SubscribeSessionStorage */ "./packages/core/src/app/customer/SubscribeSessionStorage.ts");













function getShouldSubscribeValue(requiresMarketingConsent, defaultShouldSubscribe) {
    if (_SubscribeSessionStorage__WEBPACK_IMPORTED_MODULE_18__.SubscribeSessionStorage.getSubscribeStatus()) {
        return true;
    }
    return requiresMarketingConsent ? false : defaultShouldSubscribe;
}
const GuestForm = ({ canSubscribe, checkoutButtons, continueAsGuestButtonLabelId, defaultShouldSubscribe, isLoading, onChangeEmail, onShowLogin, privacyPolicyUrl, requiresMarketingConsent, isExpressPrivacyPolicy, isFloatingLabelEnabled, shouldShowEmailWatermark, setFieldValue, }) => {
    const { checkoutState: { data: { getConfig } } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useThemeContext)();
    const config = getConfig();
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((fieldProps) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SubscribeField__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({}, fieldProps, { requiresMarketingConsent: requiresMarketingConsent }))), [requiresMarketingConsent]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void setFieldValue('shouldSubscribe', getShouldSubscribeValue(requiresMarketingConsent, defaultShouldSubscribe));
    }, [requiresMarketingConsent, defaultShouldSubscribe]);
    if (!config) {
        return null;
    }
    const { checkoutSettings: { shouldRedirectToStorefrontForAuth, }, links: { checkoutLink, loginLink, } } = config;
    const handleLogin = () => {
        if (shouldRedirectToStorefrontForAuth) {
            window.location.assign(`${loginLink}?redirectTo=${checkoutLink}`);
            return;
        }
        return onShowLogin();
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["default"], { className: "checkout-form", id: "checkout-customer-guest", testId: "checkout-customer-guest" },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_12__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_15__["default"], { hidden: true },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.guest_customer_text" })) },
            (themeV2 && !isLoading) && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('customer-login-link', { 'body-regular': themeV2 }) },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.login_text" }),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { "data-test": "customer-continue-button", id: "checkout-customer-login", onClick: handleLogin, role: "button", tabIndex: 0 },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.login_action" })))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "customerEmail-container" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "customerEmail-body" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_EmailField__WEBPACK_IMPORTED_MODULE_16__["default"], { isFloatingLabelEnabled: isFloatingLabelEnabled, onChange: onChangeEmail }),
                    shouldShowEmailWatermark && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                    (canSubscribe || requiresMarketingConsent) && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_14__["default"], { name: "shouldSubscribe", render: renderField }))),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-actions customerEmail-action', {
                        'customerEmail-floating--enabled': isFloatingLabelEnabled,
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_11__["default"], { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('customerEmail-button', {
                            'body-bold': themeV2,
                        }), id: "checkout-customer-continue", isLoading: isLoading, testId: "customer-continue-as-guest-button", type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_11__.ButtonVariant.Primary },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: continueAsGuestButtonLabelId })))),
            privacyPolicyUrl && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_privacyPolicy__WEBPACK_IMPORTED_MODULE_9__["default"], { isExpressPrivacyPolicy: isExpressPrivacyPolicy, url: privacyPolicyUrl })),
            (!themeV2 && !isLoading) && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('customer-login-link', { 'body-regular': themeV2 }) },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.login_text" }),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { "data-test": "customer-continue-button", id: "checkout-customer-login", onClick: handleLogin, role: "button", tabIndex: 0 },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "customer.login_action" })))),
            checkoutButtons)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    mapPropsToValues: ({ email = '', defaultShouldSubscribe = false, requiresMarketingConsent, }) => ({
        email,
        shouldSubscribe: getShouldSubscribeValue(requiresMarketingConsent, defaultShouldSubscribe),
        privacyPolicy: false,
    }),
    handleSubmit: (values, { props: { onContinueAsGuest } }) => {
        onContinueAsGuest(values);
    },
    validationSchema: ({ language, privacyPolicyUrl, isExpressPrivacyPolicy }) => {
        const email = (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)()
            .email(language.translate('customer.email_invalid_error'))
            .max(256)
            .required(language.translate('customer.email_required_error'));
        const baseSchema = (0,yup__WEBPACK_IMPORTED_MODULE_3__.object)({ email });
        if (privacyPolicyUrl && !isExpressPrivacyPolicy) {
            return baseSchema.concat((0,_privacyPolicy__WEBPACK_IMPORTED_MODULE_10__["default"])({
                isRequired: !!privacyPolicyUrl,
                language,
            }));
        }
        return baseSchema;
    },
})((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(GuestForm))));


/***/ }),

/***/ "./packages/core/src/app/customer/GuestFormContainer.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/customer/GuestFormContainer.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestFormContainer: () => (/* binding */ GuestFormContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/shouldUseStripeLinkByMinimumAmount.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/PaymentMethodId.ts");
/* harmony import */ var _bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-fastlane-integration */ "./packages/paypal-fastlane-integration/src/is-paypal-fastlane-method.ts");
/* harmony import */ var _payment_getProviderWithCustomCheckout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment/getProviderWithCustomCheckout */ "./packages/core/src/app/payment/getProviderWithCustomCheckout.ts");
/* harmony import */ var _CheckoutButtonList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckoutButtonList */ "./packages/core/src/app/customer/CheckoutButtonList.tsx");
/* harmony import */ var _GuestForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GuestForm */ "./packages/core/src/app/customer/GuestForm.tsx");
/* harmony import */ var _StripeGuestForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StripeGuestForm */ "./packages/core/src/app/customer/StripeGuestForm.tsx");









function shouldRenderStripeForm(cart, providerWithCustomCheckout) {
    return providerWithCustomCheckout === _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"].StripeUPE
        && (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(cart);
}
const GuestFormContainer = ({ email, isFloatingLabelEnabled, isWalletButtonsOnTop, isSubscribed, step, checkEmbeddedSupport, handleChangeEmail, handleContinueAsGuest, handleShowLogin, onWalletButtonClick, onUnhandledError, }) => {
    const { checkoutState, checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)();
    const { data: { isPaymentDataRequired, getConfig, getCart, }, statuses: { isInitializingCustomer, isContinuingAsGuest, isExecutingPaymentMethodCheckout }, } = checkoutState;
    const { deinitializeCustomer, initializeCustomer, } = checkoutService;
    const config = getConfig();
    const cart = getCart();
    const isLoadingGuestForm = isContinuingAsGuest() || isExecutingPaymentMethodCheckout();
    if (!config || !cart) {
        return null;
    }
    const { checkoutSettings: { privacyPolicyUrl, requiresMarketingConsent, remoteCheckoutProviders: checkoutButtonIds, providerWithCustomCheckout, isExpressPrivacyPolicy, }, shopperConfig: { showNewsletterSignup: canSubscribe, }, } = config;
    const customCheckoutProvider = (0,_payment_getProviderWithCustomCheckout__WEBPACK_IMPORTED_MODULE_5__["default"])(providerWithCustomCheckout);
    const checkoutButtons = isWalletButtonsOnTop || !isPaymentDataRequired()
        ? null
        : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CheckoutButtonList__WEBPACK_IMPORTED_MODULE_6__["default"], { checkEmbeddedSupport: checkEmbeddedSupport, deinitialize: deinitializeCustomer, initialize: initializeCustomer, isInitializing: isInitializingCustomer(), methodIds: checkoutButtonIds, onClick: onWalletButtonClick, onError: onUnhandledError });
    if (shouldRenderStripeForm(cart, customCheckoutProvider)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StripeGuestForm__WEBPACK_IMPORTED_MODULE_8__["default"], { canSubscribe: canSubscribe, checkoutButtons: checkoutButtons, continueAsGuestButtonLabelId: "customer.continue", defaultShouldSubscribe: isSubscribed, deinitialize: deinitializeCustomer, email: email, initialize: initializeCustomer, isExpressPrivacyPolicy: isExpressPrivacyPolicy, isLoading: isContinuingAsGuest() || isInitializingCustomer() || isExecutingPaymentMethodCheckout(), onChangeEmail: handleChangeEmail, onContinueAsGuest: handleContinueAsGuest, onShowLogin: handleShowLogin, privacyPolicyUrl: privacyPolicyUrl, requiresMarketingConsent: requiresMarketingConsent, step: step });
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GuestForm__WEBPACK_IMPORTED_MODULE_7__["default"], { canSubscribe: canSubscribe, checkoutButtons: checkoutButtons, continueAsGuestButtonLabelId: "customer.continue", defaultShouldSubscribe: isSubscribed, email: email, isExpressPrivacyPolicy: isExpressPrivacyPolicy, isFloatingLabelEnabled: isFloatingLabelEnabled, isLoading: isLoadingGuestForm, onChangeEmail: handleChangeEmail, onContinueAsGuest: handleContinueAsGuest, onShowLogin: handleShowLogin, privacyPolicyUrl: privacyPolicyUrl, requiresMarketingConsent: requiresMarketingConsent, shouldShowEmailWatermark: (0,_bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_4__["default"])(customCheckoutProvider) });
};


/***/ }),

/***/ "./packages/core/src/app/customer/LoginForm.tsx":
/*!******************************************************!*\
  !*** ./packages/core/src/app/customer/LoginForm.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedLink.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _ui_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/alert */ "./packages/core/src/app/ui/alert/Alert.tsx");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CustomerViewType */ "./packages/core/src/app/customer/CustomerViewType.ts");
/* harmony import */ var _EmailField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EmailField */ "./packages/core/src/app/customer/EmailField.tsx");
/* harmony import */ var _getEmailValidationSchema__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./getEmailValidationSchema */ "./packages/core/src/app/customer/getEmailValidationSchema.ts");
/* harmony import */ var _mapErrorMessage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mapErrorMessage */ "./packages/core/src/app/customer/mapErrorMessage.ts");
/* harmony import */ var _PasswordField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PasswordField */ "./packages/core/src/app/customer/PasswordField.tsx");
/* harmony import */ var _RedirectToStorefrontLogin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RedirectToStorefrontLogin */ "./packages/core/src/app/customer/RedirectToStorefrontLogin.tsx");

















const LoginForm = ({ continueAsGuestButtonLabelId, email, isEmbedded, language, signInError, onCancel = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, onChangeEmail, onContinueAsGuest, onCreateAccount = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, onSendLoginEmail = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, isFloatingLabelEnabled, viewType = _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].Login, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useThemeContext)();
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_6__.useCheckout)();
    const { data: { getCart, getConfig }, statuses: { isExecutingPaymentMethodCheckout, isSigningIn }, } = checkoutState;
    const cart = getCart();
    const config = getConfig();
    if (!cart || !config) {
        throw new Error('cart is not available');
    }
    const { checkoutSettings: { isAccountCreationEnabled: shouldShowCreateAccountLink, isSignInEmailEnabled, guestCheckoutEnabled: canCancel, shouldRedirectToStorefrontForAuth, }, links: { forgotPasswordLink: forgotPasswordUrl } } = config;
    const isBuyNowCart = cart.source === 'BUY_NOW';
    const changeEmailLink = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        if (!email) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", { className: "optimizedCheckout-contentSecondary" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__["default"], { data: { email }, id: "customer.guest_could_login_change_email", onClick: onCancel, testId: "change-email" })));
    }, [email, onCancel]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_15__["default"], { className: "checkout-form", id: "checkout-customer-returning", testId: "checkout-customer-returning" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_14__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_16__["default"], { hidden: true },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "customer.returning_customer_text" })) },
            signInError && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_12__["default"], { testId: "customer-login-error-message", type: _ui_alert__WEBPACK_IMPORTED_MODULE_12__.AlertType.Error }, (0,_mapErrorMessage__WEBPACK_IMPORTED_MODULE_20__["default"])(signInError, (key) => language.translate(key)))),
            viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].SuggestedLogin && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_12__["default"], { type: _ui_alert__WEBPACK_IMPORTED_MODULE_12__.AlertType.Info },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { data: { email }, id: "customer.guest_could_login" }))),
            viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].CancellableEnforcedLogin && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_12__["default"], { type: _ui_alert__WEBPACK_IMPORTED_MODULE_12__.AlertType.Info },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { data: { email }, id: "customer.guest_must_login" }))),
            viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].EnforcedLogin && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_12__["default"], { type: _ui_alert__WEBPACK_IMPORTED_MODULE_12__.AlertType.Error },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "customer.guest_temporary_disabled", onClick: onCreateAccount }))),
            (viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].Login ||
                viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].EnforcedLogin) && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_EmailField__WEBPACK_IMPORTED_MODULE_18__["default"], { isFloatingLabelEnabled: isFloatingLabelEnabled, onChange: onChangeEmail })),
            !shouldRedirectToStorefrontForAuth && react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PasswordField__WEBPACK_IMPORTED_MODULE_21__["default"], { isFloatingLabelEnabled: isFloatingLabelEnabled }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-legend-container', { 'body-cta': themeV2 }) },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null,
                    isSignInEmailEnabled && !isEmbedded && !isBuyNowCart &&
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "login_email.link", onClick: onSendLoginEmail, testId: "customer-signin-link" }),
                    !isSignInEmailEnabled && !isEmbedded && !shouldRedirectToStorefrontForAuth &&
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { "data-test": "forgot-password-link", href: forgotPasswordUrl, rel: "noopener noreferrer", target: "_blank" },
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "customer.forgot_password_action" }))),
                viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].Login && shouldShowCreateAccountLink &&
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "customer.create_account_to_continue_text", onClick: onCreateAccount }))),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-actions" },
                shouldRedirectToStorefrontForAuth ?
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_RedirectToStorefrontLogin__WEBPACK_IMPORTED_MODULE_22__.RedirectToStorefrontLogin, { isDisabled: Boolean(isSigningIn() || isExecutingPaymentMethodCheckout()), isLoading: Boolean(isSigningIn() || isExecutingPaymentMethodCheckout()) })
                    :
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_13__["default"], { className: themeV2 ? 'body-bold' : '', disabled: isSigningIn() || isExecutingPaymentMethodCheckout(), id: "checkout-customer-continue", isLoading: isSigningIn() || isExecutingPaymentMethodCheckout(), testId: "customer-continue-button", type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_13__.ButtonVariant.Primary },
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "customer.sign_in_action" })),
                viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].SuggestedLogin && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('button optimizedCheckout-buttonSecondary', { 'body-bold': themeV2 }), "data-test": "customer-guest-continue", href: "#", id: "checkout-guest-continue", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(onContinueAsGuest) },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: continueAsGuestButtonLabelId }))),
                canCancel &&
                    viewType !== _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].EnforcedLogin &&
                    viewType !== _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].SuggestedLogin && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('button optimizedCheckout-buttonSecondary', { 'body-bold': themeV2 }), "data-test": "customer-cancel-button", href: "#", id: "checkout-customer-cancel", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(onCancel) },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].CancellableEnforcedLogin
                            ? 'login_email.use_another_email'
                            : 'common.cancel_action' })))),
            viewType === _CustomerViewType__WEBPACK_IMPORTED_MODULE_17__["default"].SuggestedLogin && changeEmailLink())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_11__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    mapPropsToValues: ({ email = '' }) => ({
        email,
        password: '',
    }),
    handleSubmit: (values, { props: { onSignIn } }) => {
        onSignIn(values);
    },
    validationSchema: ({ language }) => (0,_getEmailValidationSchema__WEBPACK_IMPORTED_MODULE_19__["default"])({ language }).concat((0,yup__WEBPACK_IMPORTED_MODULE_4__.object)({
        password: (0,yup__WEBPACK_IMPORTED_MODULE_4__.string)().required(language.translate('customer.password_required_error')),
    })),
})((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(LoginForm))));


/***/ }),

/***/ "./packages/core/src/app/customer/PasswordField.tsx":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/customer/PasswordField.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/FormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/TextInput.tsx");
/* harmony import */ var _ui_form_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/form/Label */ "./packages/core/src/app/ui/form/Label.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconEye.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconEyeSlash.tsx");
/* harmony import */ var _ui_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/toggle */ "./packages/core/src/app/ui/toggle/Toggle.tsx");







const PasswordField = ({ isFloatingLabelEnabled = false }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useThemeContext)();
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_toggle__WEBPACK_IMPORTED_MODULE_8__["default"], { openByDefault: false }, ({ isOpen, toggle }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-field-password" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props.field, { additionalClassName: "form-input--withIcon", id: props.field.name, isFloatingLabelEnabled: isFloatingLabelEnabled, themeV2: themeV2, type: isOpen ? 'text' : 'password' })),
        isFloatingLabelEnabled && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: themeV2 ? 'floating-form-field-label' : '', htmlFor: props.field.name, id: `${props.field.name}-label`, isFloatingLabelEnabled: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "customer.password_label" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "form-toggle-password form-input-icon", href: "#", onClick: toggle }, isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_6__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), [isFloatingLabelEnabled]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "customer.password_label" }), []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_3__["default"], { input: renderInput, isFloatingLabelEnabled: isFloatingLabelEnabled, labelContent: isFloatingLabelEnabled ? null : labelContent, name: "password" });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PasswordField));


/***/ }),

/***/ "./packages/core/src/app/customer/RedirectToStorefrontLogin.tsx":
/*!**********************************************************************!*\
  !*** ./packages/core/src/app/customer/RedirectToStorefrontLogin.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RedirectToStorefrontLogin: () => (/* binding */ RedirectToStorefrontLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");




const RedirectToStorefrontLogin = ({ isDisabled, isLoading, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useThemeContext)();
    const { checkoutState: { data: { getConfig } } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const config = getConfig();
    if (!config) {
        return null;
    }
    const { checkoutLink, loginLink } = config.links;
    const handleRedirect = () => {
        return window.location.assign(`${loginLink}?redirectTo=${checkoutLink}`);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { className: themeV2 ? 'body-bold' : '', disabled: isDisabled, id: "checkout-customer-continue", isLoading: isLoading, onClick: handleRedirect, testId: "customer-continue-button", variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonVariant.Primary },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "customer.sign_in_action" })));
};


/***/ }),

/***/ "./packages/core/src/app/customer/StripeGuestForm.tsx":
/*!************************************************************!*\
  !*** ./packages/core/src/app/customer/StripeGuestForm.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/stripe */ "../checkout-sdk-js/dist/esm/integrations/stripe.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/getAppliedStyles.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _privacyPolicy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privacyPolicy */ "./packages/core/src/app/privacyPolicy/PrivacyPolicyField.tsx");
/* harmony import */ var _privacyPolicy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privacyPolicy */ "./packages/core/src/app/privacyPolicy/getPrivacyPolicyValidationSchema.ts");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _SubscribeField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SubscribeField */ "./packages/core/src/app/customer/SubscribeField.tsx");










const StripeGuestForm = ({ continueAsGuestButtonLabelId, isLoading, initialize, isExpressPrivacyPolicy, deinitialize, onChangeEmail, onShowLogin, onContinueAsGuest, canSubscribe, checkoutButtons, defaultShouldSubscribe, requiresMarketingConsent, privacyPolicyUrl, step, status, setFieldValue, }) => {
    const [continueAsAGuestButton, setContinueAsAGuestButton] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [emailValue, setEmailValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [authentication, setAuthentication] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isStripeLoading, setIsStripeLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [isNewAuth, setIsNewAuth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleOnClickSubmitButton = () => {
        onContinueAsGuest({
            email: emailValue,
            shouldSubscribe: !!(status === null || status === void 0 ? void 0 : status.shouldSubscribe),
        });
    };
    const setEmailCallback = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((authenticated, email) => {
        setFieldValue('email', email);
        onChangeEmail(email);
        setEmailValue(email);
        setContinueAsAGuestButton(!email);
        setAuthentication(authenticated);
        if (!authenticated) {
            setIsNewAuth(true);
        }
    }, [setContinueAsAGuestButton, onChangeEmail]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if ((!step.isComplete || isNewAuth) && emailValue && authentication) {
            handleOnClickSubmitButton();
        }
    }, [emailValue, authentication, isNewAuth]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (status === null || status === void 0 ? void 0 : status.valSuccess) {
            handleOnClickSubmitButton();
        }
    }, [status === null || status === void 0 ? void 0 : status.valSuccess]);
    const handleLoading = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((mounted) => {
        setIsStripeLoading(mounted);
    }, []);
    const stripeDeinitialize = () => {
        deinitialize({
            methodId: 'stripeupe',
        });
    };
    const stripeInitialize = () => {
        initialize({
            methodId: 'stripeupe',
            integrations: [_bigcommerce_checkout_sdk_integrations_stripe__WEBPACK_IMPORTED_MODULE_0__.createStripeUPECustomerStrategy],
            stripeupe: {
                container: 'stripeupeLink',
                onEmailChange: setEmailCallback,
                isLoading: handleLoading,
                getStyles: getStripeStyles,
                gatewayId: 'stripeupe',
                methodId: 'card',
            },
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        stripeInitialize();
        return () => stripeDeinitialize();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        void setFieldValue('shouldSubscribe', requiresMarketingConsent ? false : defaultShouldSubscribe);
    }, [requiresMarketingConsent, defaultShouldSubscribe]);
    const getStylesFromElement = (id, properties) => {
        const parentContainer = document.getElementById(id);
        if (parentContainer) {
            return (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(parentContainer, properties);
        }
        return undefined;
    };
    const containerId = 'stripe-card-component-field';
    const getStripeStyles = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        const formInput = getStylesFromElement(`${containerId}--input`, ['color', 'background-color', 'border-color', 'box-shadow']);
        const formLabel = getStylesFromElement(`${containerId}--label`, ['color']);
        const formError = getStylesFromElement(`${containerId}--error`, ['color']);
        return formLabel && formInput && formError ? {
            labelText: formLabel.color,
            fieldText: formInput.color,
            fieldPlaceholderText: formInput.color,
            fieldErrorText: formError.color,
            fieldBackground: formInput['background-color'],
            fieldInnerShadow: formInput['box-shadow'],
            fieldBorder: formInput['border-color'],
        } : undefined;
    }, []);
    const renderCheckoutThemeStylesForStripeUPE = () => {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "optimizedCheckout-form-input", id: `${containerId}--input` },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-field--error" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "optimizedCheckout-form-label", id: `${containerId}--error` })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "optimizedCheckout-form-label", id: `${containerId}--label` })));
    };
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((fieldProps) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SubscribeField__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, fieldProps, { requiresMarketingConsent: requiresMarketingConsent }))), [
        requiresMarketingConsent,
    ]);
    const buttonText = authentication && !isNewAuth ? 'customer.continue_as_stripe_customer_action' : continueAsGuestButtonLabelId;
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_11__["default"], { className: "checkout-form", id: "checkout-customer-guest", testId: "checkout-customer-guest" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "checkout-form", style: { display: isStripeLoading ? 'none' : undefined } },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_10__["default"], { legend: !authentication &&
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["default"], { hidden: true },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "customer.guest_customer_text" })) },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "customerEmail-container" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "customerEmail-body" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "stripeupeLink" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null),
                            (canSubscribe || requiresMarketingConsent) && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_12__["default"], { name: "shouldSubscribe", render: renderField })),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-actions customerEmail-action" }, (!authentication || (authentication && !isNewAuth)) && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "stripeCustomerEmail-button", disabled: continueAsAGuestButton, id: "stripe-checkout-customer-continue", isLoading: isLoading, testId: "stripe-customer-continue-as-guest-button", type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_9__.ButtonVariant.Primary },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: buttonText })))),
                    privacyPolicyUrl && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_privacyPolicy__WEBPACK_IMPORTED_MODULE_7__["default"], { isExpressPrivacyPolicy: isExpressPrivacyPolicy, url: privacyPolicyUrl })),
                    !isLoading && react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "customer.login_text" }),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { "data-test": "customer-continue-button", id: "checkout-customer-login", onClick: onShowLogin, role: "button", tabIndex: 0 },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "customer.login_action" }))),
                    !authentication && checkoutButtons)),
            renderCheckoutThemeStylesForStripeUPE())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    mapPropsToValues: ({ email = '', defaultShouldSubscribe = false, requiresMarketingConsent, }) => ({
        email,
        shouldSubscribe: requiresMarketingConsent ? false : defaultShouldSubscribe,
        privacyPolicy: false,
    }),
    handleSubmit: (values, { setStatus }) => {
        setStatus({
            valSuccess: true,
            shouldSubscribe: values.shouldSubscribe,
        });
    },
    validationSchema: ({ language, privacyPolicyUrl, isExpressPrivacyPolicy }) => {
        if (privacyPolicyUrl && !isExpressPrivacyPolicy) {
            return (0,_privacyPolicy__WEBPACK_IMPORTED_MODULE_8__["default"])({
                isRequired: !!privacyPolicyUrl,
                language,
            });
        }
        return (0,yup__WEBPACK_IMPORTED_MODULE_3__.object)({});
    },
})((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(StripeGuestForm))));


/***/ }),

/***/ "./packages/core/src/app/customer/SubscribeField.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/customer/SubscribeField.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Input.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Label.tsx");




const SubscribeField = ({ field, requiresMarketingConsent, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useThemeContext)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { checked: field.value, className: "form-checkbox", id: field.name, testId: "should-subscribe-checkbox", type: "checkbox", value: String(field.value) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: themeV2 ? 'body-regular' : '', htmlFor: field.name },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: requiresMarketingConsent
                    ? 'customer.guest_marketing_consent'
                    : 'customer.guest_subscribe_to_newsletter_text' }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SubscribeField));


/***/ }),

/***/ "./packages/core/src/app/customer/getCreateCustomerValidationSchema.ts":
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/customer/getCreateCustomerValidationSchema.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _formFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formFields */ "./packages/core/src/app/formFields/getCustomFormFieldsValidationSchema.ts");
/* harmony import */ var _getEmailValidationSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEmailValidationSchema */ "./packages/core/src/app/customer/getEmailValidationSchema.ts");




/* istanbul ignore next */ // Currently no limitation on new customer's name
function getTranslateCreateCustomerError(language) {
    return (type, { label, min, max }) => {
        if (!language) {
            return;
        }
        if (type === 'required') {
            return language.translate('customer.required_error', { label });
        }
        if (type === 'max' && max) {
            return language.translate('customer.max_error', { label, max });
        }
        if (type === 'min' && min) {
            return language.translate('customer.min_error', { label, min });
        }
        if (type === 'invalid') {
            return language.translate('customer.invalid_characters_error', { label });
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getCreateCustomerValidationSchema({ formFields, language, passwordRequirements: { description, numeric, alpha, minLength }, }) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
        firstName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('address.first_name_required_error')),
        lastName: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required(language.translate('address.last_name_required_error')),
        password: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .required(language.translate('customer.password_required_error') || description)
            .matches(numeric, language.translate('customer.password_number_required_error') || description)
            .matches(alpha, language.translate('customer.password_letter_required_error') || description)
            .min(minLength, language.translate('customer.password_under_minimum_length_error') || description)
            .max(100, language.translate('customer.password_over_maximum_length_error')),
    })
        .concat((0,_getEmailValidationSchema__WEBPACK_IMPORTED_MODULE_3__["default"])({ language }))
        .concat((0,_formFields__WEBPACK_IMPORTED_MODULE_2__["default"])({
        formFields,
        translate: getTranslateCreateCustomerError(language),
    }));
}));


/***/ }),

/***/ "./packages/core/src/app/customer/getEmailValidationSchema.ts":
/*!********************************************************************!*\
  !*** ./packages/core/src/app/customer/getEmailValidationSchema.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getEmailValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _validationPatterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationPatterns */ "./packages/core/src/app/customer/validationPatterns.ts");


function getEmailValidationSchema({ language, }) {
    return (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
        email: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)()
            .max(256)
            .matches(_validationPatterns__WEBPACK_IMPORTED_MODULE_1__.EMAIL_REGEXP, language.translate('customer.email_invalid_error'))
            .required(language.translate('customer.email_required_error')),
    });
}


/***/ }),

/***/ "./packages/core/src/app/customer/mapCreateAccountFromFormValues.ts":
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/customer/mapCreateAccountFromFormValues.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapCreateAccountFromFormValues)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _formFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formFields */ "./packages/core/src/app/formFields/mapCustomFormFieldsFromFormValues.ts");


function mapCreateAccountFromFormValues(_a) {
    var { acceptsMarketingEmails, customFields } = _a, values = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["acceptsMarketingEmails", "customFields"]);
    return Object.assign(Object.assign({}, values), { acceptsMarketingEmails: acceptsMarketingEmails && acceptsMarketingEmails.length > 0, customFields: (0,_formFields__WEBPACK_IMPORTED_MODULE_1__["default"])(customFields) });
}


/***/ }),

/***/ "./packages/core/src/app/customer/mapErrorMessage.ts":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/customer/mapErrorMessage.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapErrorMessage)
/* harmony export */ });
function mapErrorMessage(error, // TODO: Export `RequestError`
translate) {
    const type = error.body && error.body.type;
    switch (type) {
        case 'throttled_login':
            return translate('customer.sign_in_throttled_error');
        case 'reset_password_before_login':
            return translate('customer.reset_password_before_login_error');
        case 'empty_cart':
            return translate('cart.empty_cart_error_message');
        default:
            return translate('customer.sign_in_error');
    }
}


/***/ }),

/***/ "./packages/core/src/app/customer/useCustomer.ts":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/customer/useCustomer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCustomer: () => (/* binding */ useCustomer)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/shouldUseStripeLinkByMinimumAmount.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isFloatingLabelEnabled.ts");
/* harmony import */ var _payment_getProviderWithCustomCheckout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/getProviderWithCustomCheckout */ "./packages/core/src/app/payment/getProviderWithCustomCheckout.ts");
/* harmony import */ var _payment_paymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payment/paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");





const useCustomer = () => {
    const { checkoutState, checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_0__.useCheckout)();
    const { data: { getBillingAddress, getCustomerAccountFields, getCheckout, getCustomer, getCart, getSignInEmail, getConfig, isPaymentDataRequired, }, errors: { getSignInError, getSignInEmailError, getCreateCustomerAccountError }, statuses: { isContinuingAsGuest, isExecutingPaymentMethodCheckout, isInitializingCustomer, isSigningIn, isSendingSignInEmail, isCreatingCustomerAccount, }, } = checkoutState;
    const billingAddress = getBillingAddress();
    const checkout = getCheckout();
    const customer = getCustomer();
    const cart = getCart();
    const signInEmail = getSignInEmail();
    const config = getConfig();
    // Return null-like data if essential data is missing
    if (!checkout || !config || !cart) {
        return {
            data: {},
            actions: {},
        };
    }
    const { checkoutSettings: { privacyPolicyUrl, requiresMarketingConsent, isSignInEmailEnabled, isAccountCreationEnabled, isExpressPrivacyPolicy, shouldRedirectToStorefrontForAuth, remoteCheckoutProviders: checkoutButtonIds, providerWithCustomCheckout, }, shopperConfig: { showNewsletterSignup: canSubscribe, defaultNewsletterSignup: defaultShouldSubscribe, }, links: { forgotPasswordLink: forgotPasswordUrl, }, } = config;
    const customCheckoutProvider = (0,_payment_getProviderWithCustomCheckout__WEBPACK_IMPORTED_MODULE_3__["default"])(providerWithCustomCheckout);
    // Customer data
    const data = {
        // Basic customer data
        email: (billingAddress === null || billingAddress === void 0 ? void 0 : billingAddress.email) || (customer === null || customer === void 0 ? void 0 : customer.email),
        firstName: customer === null || customer === void 0 ? void 0 : customer.firstName,
        hasBillingId: !!(billingAddress === null || billingAddress === void 0 ? void 0 : billingAddress.id),
        isBuyNowCart: cart.source === 'BUY_NOW',
        // Form data
        customerAccountFields: getCustomerAccountFields(),
        canSubscribe,
        defaultShouldSubscribe,
        requiresMarketingConsent,
        isFloatingLabelEnabled: (0,_common_utility__WEBPACK_IMPORTED_MODULE_2__["default"])(config.checkoutSettings),
        // Configuration
        forgotPasswordUrl,
        privacyPolicyUrl,
        isSignInEmailEnabled,
        isAccountCreationEnabled,
        isGuestEnabled: config.checkoutSettings.guestCheckoutEnabled,
        isExpressPrivacyPolicy,
        shouldRedirectToStorefrontForAuth,
        // Status flags
        isContinuingAsGuest: isContinuingAsGuest(),
        isExecutingPaymentMethodCheckout: isExecutingPaymentMethodCheckout(),
        isInitializing: isInitializingCustomer(),
        isSigningIn: isSigningIn(),
        isSendingSignInEmail: isSendingSignInEmail(),
        isCreatingAccount: isCreatingCustomerAccount(),
        // Errors
        signInError: getSignInError(),
        signInEmailError: getSignInEmailError(),
        createAccountError: getCreateCustomerAccountError(),
        // Other data
        signInEmail,
        checkoutButtonIds,
        providerWithCustomCheckout: customCheckoutProvider,
        isPaymentDataRequired: isPaymentDataRequired(),
        shouldRenderStripeForm: customCheckoutProvider === _payment_paymentMethod__WEBPACK_IMPORTED_MODULE_4__["default"].StripeUPE && (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(cart),
    };
    // Customer actions
    const actions = {
        clearError: checkoutService.clearError,
        createAccount: checkoutService.createCustomerAccount,
        continueAsGuest: checkoutService.continueAsGuest,
        sendLoginEmail: checkoutService.sendSignInEmail,
        deinitializeCustomer: checkoutService.deinitializeCustomer,
        executePaymentMethodCheckout: checkoutService.executePaymentMethodCheckout,
        initializeCustomer: checkoutService.initializeCustomer,
        signIn: checkoutService.signInCustomer,
    };
    return {
        data,
        actions,
    };
};


/***/ }),

/***/ "./packages/core/src/app/customer/validationPatterns.ts":
/*!**************************************************************!*\
  !*** ./packages/core/src/app/customer/validationPatterns.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAIL_REGEXP: () => (/* binding */ EMAIL_REGEXP)
/* harmony export */ });
// NOTE: This is a legacy regex used to create accounts, more flexible than the current used one
// we need to keep this regex for login validation as accounts might have been created using this regex
const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;


/***/ }),

/***/ "./packages/core/src/app/formFields/mapCustomFormFieldsFromFormValues.ts":
/*!*******************************************************************************!*\
  !*** ./packages/core/src/app/formFields/mapCustomFormFieldsFromFormValues.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapCustomFormFieldsFromFormValues)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapCustomFormFieldsFromFormValues(customFieldsObject) {
    const customFields = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forIn)(customFieldsObject, (value, key) => {
        let fieldValue;
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isDate)(value)) {
            const padMonth = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)((value.getMonth() + 1).toString(), 2, '0');
            const padDay = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)(value.getDate().toString(), 2, '0');
            fieldValue = `${value.getFullYear()}-${padMonth}-${padDay}`;
        }
        else {
            fieldValue = value;
        }
        customFields.push({
            fieldId: key,
            fieldValue,
        });
    });
    return customFields;
}


/***/ }),

/***/ "./packages/core/src/app/payment/getProviderWithCustomCheckout.ts":
/*!************************************************************************!*\
  !*** ./packages/core/src/app/payment/getProviderWithCustomCheckout.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProviderWithCustomCheckout)
/* harmony export */ });
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");

function getProviderWithCustomCheckout(methodId) {
    if (!methodId) {
        return undefined;
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].PaypalCommerce || methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].PaypalCommerceCreditCards) {
        return _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].PayPalCommerceAcceleratedCheckout;
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].Braintree) {
        return _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].BraintreeAcceleratedCheckout;
    }
    return methodId;
}


/***/ }),

/***/ "./packages/core/src/app/privacyPolicy/PrivacyPolicyField.tsx":
/*!********************************************************************!*\
  !*** ./packages/core/src/app/privacyPolicy/PrivacyPolicyField.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/CheckboxFormField.tsx");




const PrivacyPolicyCheckboxFieldLink = ({ url, themeV2 }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_4__["default"], { labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { url }, id: "privacy_policy.label" }), name: "privacyPolicy", testId: "privacy-policy-checkbox", themeV2: themeV2 }));
const PrivacyPolicyFieldset = ({ url, themeV2 }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "checkout-privacy-policy" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivacyPolicyCheckboxFieldLink, { themeV2: themeV2, url: url })));
const PrivacyPolicyAutoConsent = ({ url, themeV2 }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: themeV2 ? 'body-regular' : '' },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { url }, id: "privacy_policy_auto_consent.label" })));
const PrivacyPolicyField = ({ url, isExpressPrivacyPolicy, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useThemeContext)();
    if (isExpressPrivacyPolicy) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivacyPolicyAutoConsent, { themeV2: themeV2, url: url });
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivacyPolicyFieldset, { themeV2: themeV2, url: url });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PrivacyPolicyField));


/***/ }),

/***/ "./packages/core/src/app/privacyPolicy/getPrivacyPolicyValidationSchema.ts":
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/privacyPolicy/getPrivacyPolicyValidationSchema.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPrivacyPolicyValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

function getPrivacyPolicyValidationSchema({ isRequired, language, }) {
    const schemaFields = {};
    if (isRequired) {
        schemaFields.privacyPolicy = (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().oneOf([true], language.translate('privacy_policy.required_error'));
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)(schemaFields);
}


/***/ }),

/***/ "./packages/core/src/app/ui/form/CheckboxFormField.tsx":
/*!*************************************************************!*\
  !*** ./packages/core/src/app/ui/form/CheckboxFormField.tsx ***!
  \*************************************************************/
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
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicFormField */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxInput */ "./packages/core/src/app/ui/form/CheckboxInput.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormFieldError */ "./packages/core/src/app/ui/form/FormFieldError.tsx");





const CheckboxFormField = ({ additionalClassName, disabled = false, labelContent, onChange, name, id, testId, themeV2 = false, }) => {
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { checked: !!field.value, disabled: disabled, id: id || field.name, label: labelContent, testId: testId, themeV2: themeV2 })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_4__["default"], { errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name)}-field-error-message` }))), [disabled, id, labelContent, name]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: additionalClassName, name: name, onChange: onChange, render: renderField }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CheckboxFormField));


/***/ }),

/***/ "./packages/core/src/app/ui/form/CheckboxInput.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/form/CheckboxInput.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./packages/core/src/app/ui/form/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./packages/core/src/app/ui/form/Label.tsx");





const CheckboxInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, id, testId, themeV2 = false } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id", "testId", "themeV2"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', additionalClassName), id: id, ref: ref, testId: testId, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: themeV2 ? 'body-regular' : '', htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ }),

/***/ "./packages/core/src/app/ui/icon/IconEye.tsx":
/*!***************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconEye.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/core/src/app/ui/icon/withIconContainer.tsx");


const IconEye = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 576 512", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconEye));


/***/ }),

/***/ "./packages/core/src/app/ui/icon/IconEyeSlash.tsx":
/*!********************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconEyeSlash.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/core/src/app/ui/icon/withIconContainer.tsx");


const IconEyeSlash = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 640 512", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconEyeSlash));


/***/ }),

/***/ "./packages/dom-utils/src/getAppliedStyles.ts":
/*!****************************************************!*\
  !*** ./packages/dom-utils/src/getAppliedStyles.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./packages/dom-utils/src/parseAnchor.ts":
/*!***********************************************!*\
  !*** ./packages/dom-utils/src/parseAnchor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseAnchor)
/* harmony export */ });
function parseAnchor(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    const anchor = div.querySelector('a');
    if (!anchor) {
        return [];
    }
    const anchorSiblings = div.innerHTML.split(anchor.outerHTML);
    return [anchorSiblings[0], anchor.text, anchorSiblings[1]];
}


/***/ }),

/***/ "./packages/locale/src/TranslatedLink.tsx":
/*!************************************************!*\
  !*** ./packages/locale/src/TranslatedLink.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/parseAnchor.ts");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");



const TranslatedLink = ({ data, id, onClick, testId }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
    const translatedString = language.translate(id, data);
    const parsedString = (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(translatedString);
    return parsedString.length ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        parsedString[0],
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "data-test": testId, href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(onClick) }, parsedString[1]),
        parsedString[2])) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, translatedString));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslatedLink);


/***/ }),

/***/ "./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.scss":
/*!*******************************************************************************!*\
  !*** ./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.scss ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./PayPalFastlaneWatermark.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.tsx":
/*!******************************************************************************!*\
  !*** ./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _is_braintree_fastlane_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-braintree-fastlane-method */ "./packages/paypal-fastlane-integration/src/is-braintree-fastlane-method.ts");
/* harmony import */ var _is_fastlane_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-fastlane-window */ "./packages/paypal-fastlane-integration/src/is-fastlane-window.ts");
/* harmony import */ var _is_paypal_fastlane_method__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-paypal-fastlane-method */ "./packages/paypal-fastlane-integration/src/is-paypal-fastlane-method.ts");
/* harmony import */ var _PayPalFastlaneWatermark_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PayPalFastlaneWatermark.scss */ "./packages/paypal-fastlane-integration/src/PayPalFastlaneWatermark.scss");
/* harmony import */ var _PayPalFastlaneWatermark_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PayPalFastlaneWatermark_scss__WEBPACK_IMPORTED_MODULE_5__);






const PayPalFastlaneWatermark = () => {
    var _a, _b;
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)();
    const { getPaymentMethod, getConfig } = checkoutState.data;
    const providerWithCustomCheckout = ((_a = getConfig()) === null || _a === void 0 ? void 0 : _a.checkoutSettings.providerWithCustomCheckout) || '';
    const paymentMethod = !!providerWithCustomCheckout &&
        (0,_is_paypal_fastlane_method__WEBPACK_IMPORTED_MODULE_4__["default"])(providerWithCustomCheckout) &&
        getPaymentMethod(providerWithCustomCheckout);
    const shouldRenderFastlaneWatermark = (0,_is_fastlane_window__WEBPACK_IMPORTED_MODULE_3__["default"])(window) &&
        !!paymentMethod &&
        !!((_b = paymentMethod.initializationData) === null || _b === void 0 ? void 0 : _b.isFastlanePrivacySettingEnabled);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (shouldRenderFastlaneWatermark && (0,_is_fastlane_window__WEBPACK_IMPORTED_MODULE_3__["default"])(window)) {
            const fastlane = (0,_is_braintree_fastlane_method__WEBPACK_IMPORTED_MODULE_2__["default"])(providerWithCustomCheckout)
                ? window.braintreeFastlane
                : window.paypalFastlane;
            void fastlane
                .FastlaneWatermarkComponent({
                includeAdditionalInfo: true,
            })
                .then((result) => {
                result.render('#paypalFastlaneWatermark');
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (shouldRenderFastlaneWatermark) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "paypalFastlaneWatermark-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": "paypalFastlaneWatermark", id: "paypalFastlaneWatermark" })));
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayPalFastlaneWatermark);


/***/ }),

/***/ "./packages/paypal-fastlane-integration/src/is-fastlane-window.ts":
/*!************************************************************************!*\
  !*** ./packages/paypal-fastlane-integration/src/is-fastlane-window.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFastlaneHostWindow)
/* harmony export */ });
function isFastlaneHostWindow(window) {
    /* eslint-disable no-prototype-builtins */
    return window.hasOwnProperty('paypalFastlane') || window.hasOwnProperty('braintreeFastlane');
}


/***/ }),

/***/ "./packages/ui/src/button/Button.tsx":
/*!*******************************************!*\
  !*** ./packages/ui/src/button/Button.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonSize: () => (/* binding */ ButtonSize),
/* harmony export */   ButtonVariant: () => (/* binding */ ButtonVariant),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["Primary"] = "primary";
    ButtonVariant["Secondary"] = "secondary";
    ButtonVariant["Action"] = "action";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Small"] = "small";
    ButtonSize["Tiny"] = "tiny";
    ButtonSize["Large"] = "large";
})(ButtonSize || (ButtonSize = {}));
function getClassName(props) {
    const { className, isFullWidth, isLoading, size, variant } = props;
    return classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', className, { 'button--primary': variant === ButtonVariant.Primary }, { 'button--tertiary': variant === ButtonVariant.Secondary }, { 'button--action': variant === ButtonVariant.Action }, { 'button--small': size === ButtonSize.Small }, { 'button--tiny': size === ButtonSize.Tiny }, { 'button--large': size === ButtonSize.Large }, { 'button--slab': isFullWidth }, {
        'optimizedCheckout-buttonPrimary': variant === ButtonVariant.Primary || variant === ButtonVariant.Action,
    }, { 'optimizedCheckout-buttonSecondary': variant === ButtonVariant.Secondary }, { 'is-loading': isLoading });
}
const Button = (_a) => {
    var { children, className, disabled, isFullWidth, isLoading, size, testId, type, variant } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["children", "className", "disabled", "isFullWidth", "isLoading", "size", "testId", "type", "variant"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", Object.assign({}, rest, { className: getClassName({ className, isFullWidth, isLoading, size, variant }), "data-test": testId, disabled: disabled || isLoading, type: type || 'button' }), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx":
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/BasicFormField/BasicFormField.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormFieldContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormFieldContainer */ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx");






const InnerFieldInput = (_a) => {
    var { field, onChange = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, component = 'input', render } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["field", "onChange", "component", "render"]);
    const prevValueRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(field.value);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const comparableValue = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isDate)(field.value) ? field.value.getTime() : field.value;
        const comparablePrevValue = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isDate)(prevValueRef.current)
            ? prevValueRef.current.getTime()
            : prevValueRef.current;
        if (comparableValue !== comparablePrevValue) {
            onChange(field.value);
        }
        prevValueRef.current = field.value;
    }, [field.value, onChange]);
    if (render) {
        return render(Object.assign({ field }, props));
    }
    if (typeof component === 'string') {
        return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(component, field);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(component, Object.assign({ field }, props));
};
const InnerField = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ additionalClassName, component, field, form, onChange, render, testId }) => {
    const input = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(InnerFieldInput, { component: component, field: field, form: form, meta: form.getFieldMeta(field.name), onChange: onChange, render: render })), [field, form, onChange, component, render]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormFieldContainer__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: additionalClassName, 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        hasError: (0,formik__WEBPACK_IMPORTED_MODULE_1__.getIn)(form.errors, field.name), testId: testId }, input));
}, (_a, _b) => {
    var { form: prevForm, field: prevField } = _a, prevProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["form", "field"]);
    var nextForm = _b.form, nextField = _b.field, nextProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["form", "field"]);
    return shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(prevProps, nextProps) &&
        shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(prevForm, nextForm) &&
        shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(prevField, nextField);
});
const BasicFormField = (_a) => {
    var { additionalClassName, className, component, render, testId, onChange } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "className", "component", "render", "testId", "onChange"]);
    const renderInnerField = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(InnerField, Object.assign({}, props, { additionalClassName: additionalClassName, className: className, component: component, onChange: onChange, render: render, testId: testId }))), [additionalClassName, className, component, render, testId, onChange]);
    return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, Object.assign({}, rest), renderInnerField);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(BasicFormField));


/***/ }),

/***/ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx":
/*!**************************************************************!*\
  !*** ./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ "./packages/ui/src/form/Input/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Label */ "./packages/ui/src/form/Label/Label.tsx");





const CheckboxInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, id, themeV2 } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id", "themeV2"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', { 'floating-form-field-input': themeV2 }, additionalClassName), id: id, ref: ref, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ }),

/***/ "./packages/ui/src/form/FormField/FormField.tsx":
/*!******************************************************!*\
  !*** ./packages/ui/src/form/FormField/FormField.tsx ***!
  \******************************************************/
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
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasicFormField */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormFieldError */ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Label */ "./packages/ui/src/form/Label/Label.tsx");





const FormField = ({ additionalClassName, labelContent, label, onChange, footer, input, name, id, isFloatingLabelEnabled, themeV2 = false, }) => {
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        isFloatingLabelEnabled && input(props),
        label !== undefined && (typeof label === 'function' ? label(name) : label),
        labelContent !== undefined && !label && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: themeV2 ? 'floating-form-field-label' : '', htmlFor: name, id: `${id !== null && id !== void 0 ? id : name}-label`, isFloatingLabelEnabled: isFloatingLabelEnabled }, labelContent)),
        !isFloatingLabelEnabled && input(props),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_3__["default"], { errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name)}-field-error-message` }),
        footer)), [isFloatingLabelEnabled, input, label, name, labelContent, themeV2, id, footer]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: additionalClassName, name: name, onChange: onChange, render: renderField }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormField));


/***/ }),

/***/ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx":
/*!************************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./packages/ui/src/form/contexts/FormContext.tsx");



const FormFieldContainer = ({ additionalClassName, children, className, hasError, testId, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, null, ({ isSubmitted }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className ||
        classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', additionalClassName, {
            'form-field--error': hasError && isSubmitted,
        }), "data-test": testId }, children))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormFieldContainer));


/***/ }),

/***/ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx":
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldError/FormFieldError.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./packages/ui/src/form/contexts/FormContext.tsx");



const FormFieldError = ({ name, testId, errorId }) => {
    const renderMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "form-field-errors", "data-test": testId },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: "form-field-error" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: name, id: errorId, role: "alert" }, message)))), [errorId, name, testId]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, null, ({ isSubmitted }) => isSubmitted && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, { name: name, render: renderMessage })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormFieldError));


/***/ }),

/***/ "./packages/ui/src/form/Input/Input.tsx":
/*!**********************************************!*\
  !*** ./packages/ui/src/form/Input/Input.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




const Input = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((_a, ref) => {
    var { className, testId, placeholder, name, isFloatingLabelEnabled } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["className", "testId", "placeholder", "name", "isFloatingLabelEnabled"]);
    const floatingLabelDisabledFieldNames = ['orderComment', 'redeemableCode'];
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
            'floating-input': isFloatingLabelEnabled &&
                !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.includes)(floatingLabelDisabledFieldNames, name),
        }),
        name, "data-test": testId, placeholder: isFloatingLabelEnabled ? ' ' : placeholder, ref: ref })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./packages/ui/src/form/Label/Label.tsx":
/*!**********************************************!*\
  !*** ./packages/ui/src/form/Label/Label.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Label = (_a) => {
    var { children, className, hidden, testId, isFloatingLabelEnabled, additionalClassName } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["children", "className", "hidden", "testId", "isFloatingLabelEnabled", "additionalClassName"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-label': isFloatingLabelEnabled }, className || 'form-label', { 'is-srOnly': hidden }, 'optimizedCheckout-form-label', additionalClassName), "data-test": testId }), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ }),

/***/ "./packages/ui/src/form/TextInput/TextInput.tsx":
/*!******************************************************!*\
  !*** ./packages/ui/src/form/TextInput/TextInput.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ "./packages/ui/src/form/Input/Input.tsx");




const TextInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, isFloatingLabelEnabled, appearFocused, type = 'text', themeV2 = false } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "isFloatingLabelEnabled", "appearFocused", "type", "themeV2"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input', 'optimizedCheckout-form-input', { 'form-input--focus': appearFocused }, { 'optimizedCheckout-form-input--focus': appearFocused }, additionalClassName, { 'floating-form-field-input': themeV2 && isFloatingLabelEnabled }, { 'body-regular': themeV2 && !isFloatingLabelEnabled }), isFloatingLabelEnabled: isFloatingLabelEnabled, ref: ref, type: type })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ })

}]);
//# sourceMappingURL=customer.js.map