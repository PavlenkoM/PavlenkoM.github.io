"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["billing"],{

/***/ "./packages/core/src/app/billing/Billing.tsx":
/*!***************************************************!*\
  !*** ./packages/core/src/app/billing/Billing.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/AddressFormSkeleton.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/mapAddressFromFormValues.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/isEqualAddress.ts");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _BillingForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BillingForm */ "./packages/core/src/app/billing/BillingForm.tsx");
/* harmony import */ var _getBillingMethodId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getBillingMethodId */ "./packages/core/src/app/billing/getBillingMethodId.ts");









const Billing = ({ navigateNextStep, onReady, onUnhandledError }) => {
    const { checkoutService, checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useThemeContext)();
    const { data: { getCheckout, getConfig, getCart, getCustomer, getBillingAddress, getBillingAddressFields, }, statuses: { isLoadingBillingCountries }, } = checkoutState;
    const config = getConfig();
    const customer = getCustomer();
    const checkout = getCheckout();
    const cart = getCart();
    if (!config || !customer || !checkout || !cart) {
        throw new Error('Unable to access checkout data');
    }
    const isInitializing = isLoadingBillingCountries();
    // Below constants are for <BillingForm />'s HOC props
    const customerMessage = checkout.customerMessage;
    const methodId = (0,_getBillingMethodId__WEBPACK_IMPORTED_MODULE_10__["default"])(checkout);
    const billingAddress = getBillingAddress();
    const getFields = getBillingAddressFields;
    const handleSubmit = (_a) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        var { orderComment } = _a, addressValues = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["orderComment"]);
        const updateAddress = checkoutService.updateBillingAddress;
        const updateCheckout = checkoutService.updateCheckout;
        const billingAddress = getBillingAddress();
        const promises = [];
        const address = (0,_address__WEBPACK_IMPORTED_MODULE_6__["default"])(addressValues);
        if (address && !(0,_address__WEBPACK_IMPORTED_MODULE_7__["default"])(address, billingAddress)) {
            promises.push(updateAddress(address));
        }
        if (customerMessage !== orderComment) {
            promises.push(updateCheckout({ customerMessage: orderComment }));
        }
        try {
            yield Promise.all(promises);
            navigateNextStep();
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.loadBillingAddressFields();
                onReady();
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void init();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { isLoading: isInitializing },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "checkout-form" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-legend-container" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_8__["default"], { testId: "billing-address-heading", themeV2: themeV2 },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "billing.billing_address_heading" }))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BillingForm__WEBPACK_IMPORTED_MODULE_9__["default"], { billingAddress: billingAddress, customerMessage: customerMessage, getFields: getFields, methodId: methodId, navigateNextStep: navigateNextStep, onSubmit: handleSubmit, onUnhandledError: onUnhandledError }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Billing);


/***/ }),

/***/ "./packages/core/src/app/billing/BillingForm.tsx":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/billing/BillingForm.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-fastlane-integration */ "./packages/paypal-fastlane-integration/src/usePayPalFastlaneAddress.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/AddressFormSkeleton.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/mapAddressToFormValues.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/AddressForm.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/AddressSelect.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/AddressType.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/isValidCustomerAddress.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/getAddressFormFieldsValidationSchema.ts");
/* harmony import */ var _formFields__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../formFields */ "./packages/core/src/app/formFields/getCustomFormFieldsValidationSchema.ts");
/* harmony import */ var _orderComments__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../orderComments */ "./packages/core/src/app/orderComments/OrderComments.tsx");
/* harmony import */ var _shipping__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shipping */ "./packages/core/src/app/shipping/getShippableItemsCount.ts");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _StaticBillingAddress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StaticBillingAddress */ "./packages/core/src/app/billing/StaticBillingAddress.tsx");















const BillingForm = ({ methodId, getFields, billingAddress, setFieldValue, values, onUnhandledError, }) => {
    const [isResettingAddress, setIsResettingAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const addressFormRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { isPayPalFastlaneEnabled, paypalFastlaneAddresses } = (0,_bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)();
    const { checkoutService, checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useCheckout)();
    const { data: { getCustomer, getConfig, getCart }, statuses: { isUpdatingBillingAddress, isUpdatingCheckout }, } = checkoutState;
    const customer = getCustomer();
    const config = getConfig();
    const cart = getCart();
    if (!config || !customer || !cart) {
        throw new Error('checkout data is not available');
    }
    const isGuest = customer.isGuest;
    const addresses = customer.addresses;
    const shouldRenderStaticAddress = methodId === 'amazonpay';
    const allFormFields = getFields(values.countryCode);
    const customFormFields = allFormFields.filter(({ custom }) => custom);
    const hasCustomFormFields = customFormFields.length > 0;
    const editableFormFields = shouldRenderStaticAddress && hasCustomFormFields ? customFormFields : allFormFields;
    const billingAddresses = isGuest && isPayPalFastlaneEnabled ? paypalFastlaneAddresses : addresses;
    const hasAddresses = (billingAddresses === null || billingAddresses === void 0 ? void 0 : billingAddresses.length) > 0;
    const hasValidCustomerAddress = billingAddress &&
        (0,_address__WEBPACK_IMPORTED_MODULE_15__["default"])(billingAddress, billingAddresses, getFields(billingAddress.countryCode));
    const isUpdating = isUpdatingBillingAddress() || isUpdatingCheckout();
    const { enableOrderComments } = config.checkoutSettings;
    const shouldShowOrderComments = enableOrderComments && (0,_shipping__WEBPACK_IMPORTED_MODULE_19__["default"])(cart) < 1;
    const handleSelectAddress = (address) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        setIsResettingAddress(true);
        try {
            yield checkoutService.updateBillingAddress(address);
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        }
        finally {
            setIsResettingAddress(false);
        }
    });
    const handleUseNewAddress = () => {
        void handleSelectAddress({});
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_22__["default"], { autoComplete: "on" },
        shouldRenderStaticAddress && billingAddress && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-fieldset" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_StaticBillingAddress__WEBPACK_IMPORTED_MODULE_23__["default"], { address: billingAddress }))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_21__["default"], { id: "checkoutBillingAddress", ref: addressFormRef },
            hasAddresses && !shouldRenderStaticAddress && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_21__["default"], { id: "billingAddresses" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"], { isLoading: isResettingAddress },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_address__WEBPACK_IMPORTED_MODULE_13__["default"], { addresses: billingAddresses, onSelectAddress: handleSelectAddress, onUseNewAddress: handleUseNewAddress, selectedAddress: hasValidCustomerAddress ? billingAddress : undefined, type: _address__WEBPACK_IMPORTED_MODULE_14__["default"].Billing })))),
            !hasValidCustomerAddress && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { isLoading: isResettingAddress },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_address__WEBPACK_IMPORTED_MODULE_12__["default"], { countryCode: values.countryCode, formFields: editableFormFields, setFieldValue: setFieldValue, shouldShowSaveAddress: !isGuest, type: _address__WEBPACK_IMPORTED_MODULE_14__["default"].Billing })))),
        shouldShowOrderComments && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_orderComments__WEBPACK_IMPORTED_MODULE_18__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-actions" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_20__["default"], { className: themeV2 ? 'body-bold' : '', disabled: isUpdating || isResettingAddress, id: "checkout-billing-continue", isLoading: isUpdating || isResettingAddress, type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_20__.ButtonVariant.Primary },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "common.continue_action" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    handleSubmit: (values, { props: { onSubmit } }) => {
        onSubmit(values);
    },
    mapPropsToValues: ({ getFields, customerMessage, billingAddress }) => (Object.assign(Object.assign({}, (0,_address__WEBPACK_IMPORTED_MODULE_11__["default"])(getFields(billingAddress && billingAddress.countryCode), billingAddress)), { orderComment: customerMessage })),
    isInitialValid: ({ billingAddress, getFields, language }) => !!billingAddress &&
        (0,_address__WEBPACK_IMPORTED_MODULE_16__["default"])({
            language,
            formFields: getFields(billingAddress.countryCode),
        }).isValidSync(billingAddress),
    validationSchema: ({ language, getFields, methodId, }) => methodId === 'amazonpay'
        ? (0,yup__WEBPACK_IMPORTED_MODULE_3__.lazy)((values) => (0,_formFields__WEBPACK_IMPORTED_MODULE_17__["default"])({
            translate: (0,_address__WEBPACK_IMPORTED_MODULE_16__.getTranslateAddressError)(language),
            formFields: getFields(values && values.countryCode),
        }))
        : (0,yup__WEBPACK_IMPORTED_MODULE_3__.lazy)((values) => (0,_address__WEBPACK_IMPORTED_MODULE_16__["default"])({
            language,
            formFields: getFields(values && values.countryCode),
        })),
    enableReinitialize: true,
})(BillingForm)));


/***/ }),

/***/ "./packages/core/src/app/billing/getBillingMethodId.ts":
/*!*************************************************************!*\
  !*** ./packages/core/src/app/billing/getBillingMethodId.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBillingMethodId)
/* harmony export */ });
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../payment */ "./packages/core/src/app/payment/getPreselectedPayment.ts");

function getBillingMethodId(checkout) {
    const BILLING_METHOD_IDS = ['amazonpay'];
    const preselectedPayment = (0,_payment__WEBPACK_IMPORTED_MODULE_0__["default"])(checkout);
    return preselectedPayment && BILLING_METHOD_IDS.includes(preselectedPayment.providerId)
        ? preselectedPayment.providerId
        : undefined;
}


/***/ }),

/***/ "./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts":
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECKOUT_ROOT_NODE_ID: () => (/* binding */ CHECKOUT_ROOT_NODE_ID),
/* harmony export */   MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID: () => (/* binding */ MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID)
/* harmony export */ });
const CHECKOUT_ROOT_NODE_ID = 'checkout-app';
const MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID = 'micro-app-ng-checkout';


/***/ }),

/***/ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx":
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/BasicFormField/BasicFormField.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx":
/*!************************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=billing.js.map