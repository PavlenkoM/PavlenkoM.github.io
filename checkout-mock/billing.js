"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["billing"],{

/***/ "./packages/core/src/app/billing/Billing.tsx"
/*!***************************************************!*\
  !*** ./packages/core/src/app/billing/Billing.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/AddressFormSkeleton.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/mapAddressFromFormValues.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/isEqualAddress.ts");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Legend.tsx");
/* harmony import */ var _BillingForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BillingForm */ "./packages/core/src/app/billing/BillingForm.tsx");
/* harmony import */ var _getBillingMethodId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getBillingMethodId */ "./packages/core/src/app/billing/getBillingMethodId.ts");









const Billing = ({ navigateNextStep, onReady, onUnhandledError }) => {
    const { checkoutService, checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
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
    const methodId = (0,_getBillingMethodId__WEBPACK_IMPORTED_MODULE_9__["default"])(checkout);
    const billingAddress = getBillingAddress();
    const getFields = getBillingAddressFields;
    const handleSubmit = (_a) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        var { orderComment } = _a, addressValues = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["orderComment"]);
        const updateAddress = checkoutService.updateBillingAddress;
        const updateCheckout = checkoutService.updateCheckout;
        const billingAddress = getBillingAddress();
        const promises = [];
        const address = (0,_address__WEBPACK_IMPORTED_MODULE_5__["default"])(addressValues);
        if (address && !(0,_address__WEBPACK_IMPORTED_MODULE_6__["default"])(address, billingAddress)) {
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
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { isLoading: isInitializing },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "checkout-form" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-legend-container" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_7__["default"], { testId: "billing-address-heading" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "billing.billing_address_heading" }))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BillingForm__WEBPACK_IMPORTED_MODULE_8__["default"], { billingAddress: billingAddress, customerMessage: customerMessage, getFields: getFields, methodId: methodId, navigateNextStep: navigateNextStep, onSubmit: handleSubmit, onUnhandledError: onUnhandledError }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Billing);


/***/ },

/***/ "./packages/core/src/app/billing/BillingForm.tsx"
/*!*******************************************************!*\
  !*** ./packages/core/src/app/billing/BillingForm.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-fastlane-integration */ "./packages/paypal-fastlane-integration/src/usePayPalFastlaneAddress.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/AddressFormSkeleton.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/mapAddressToFormValues.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/AddressForm.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/AddressSelect.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/AddressType.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/isValidCustomerAddress.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/getAddressFormFieldsValidationSchema.ts");
/* harmony import */ var _formFields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../formFields */ "./packages/core/src/app/formFields/getCustomFormFieldsValidationSchema.ts");
/* harmony import */ var _orderComments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../orderComments */ "./packages/core/src/app/orderComments/OrderComments.tsx");
/* harmony import */ var _shipping__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shipping */ "./packages/core/src/app/shipping/getShippableItemsCount.ts");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Fieldset.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Form.tsx");
/* harmony import */ var _StaticBillingAddress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./StaticBillingAddress */ "./packages/core/src/app/billing/StaticBillingAddress.tsx");















const BillingForm = ({ methodId, getFields, billingAddress, setFieldValue, values, onUnhandledError, }) => {
    const [isResettingAddress, setIsResettingAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const addressFormRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { isPayPalFastlaneEnabled, paypalFastlaneAddresses } = (0,_bigcommerce_checkout_paypal_fastlane_integration__WEBPACK_IMPORTED_MODULE_7__["default"])();
    const { checkoutService, checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
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
        (0,_address__WEBPACK_IMPORTED_MODULE_14__["default"])(billingAddress, billingAddresses, getFields(billingAddress.countryCode));
    const isUpdating = isUpdatingBillingAddress() || isUpdatingCheckout();
    const { enableOrderComments } = config.checkoutSettings;
    const shouldShowOrderComments = enableOrderComments && (0,_shipping__WEBPACK_IMPORTED_MODULE_18__["default"])(cart) < 1;
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
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_21__["default"], { autoComplete: "on" },
        shouldRenderStaticAddress && billingAddress && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-fieldset" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_StaticBillingAddress__WEBPACK_IMPORTED_MODULE_22__["default"], { address: billingAddress }))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_20__["default"], { id: "checkoutBillingAddress", ref: addressFormRef },
            hasAddresses && !shouldRenderStaticAddress && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_20__["default"], { id: "billingAddresses" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { isLoading: isResettingAddress },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_address__WEBPACK_IMPORTED_MODULE_12__["default"], { addresses: billingAddresses, onSelectAddress: handleSelectAddress, onUseNewAddress: handleUseNewAddress, selectedAddress: hasValidCustomerAddress ? billingAddress : undefined, type: _address__WEBPACK_IMPORTED_MODULE_13__["default"].Billing })))),
            !hasValidCustomerAddress && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { isLoading: isResettingAddress },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_address__WEBPACK_IMPORTED_MODULE_11__["default"], { countryCode: values.countryCode, formFields: editableFormFields, setFieldValue: setFieldValue, shouldShowSaveAddress: !isGuest, type: _address__WEBPACK_IMPORTED_MODULE_13__["default"].Billing })))),
        shouldShowOrderComments && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_orderComments__WEBPACK_IMPORTED_MODULE_17__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-actions" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_19__["default"], { className: "body-bold", disabled: isUpdating || isResettingAddress, id: "checkout-billing-continue", isLoading: isUpdating || isResettingAddress, type: "submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_19__.ButtonVariant.Primary },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "common.continue_action" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)({
    handleSubmit: (values, { props: { onSubmit } }) => {
        onSubmit(values);
    },
    mapPropsToValues: ({ getFields, customerMessage, billingAddress }) => (Object.assign(Object.assign({}, (0,_address__WEBPACK_IMPORTED_MODULE_10__["default"])(getFields(billingAddress && billingAddress.countryCode), billingAddress)), { orderComment: customerMessage })),
    isInitialValid: ({ billingAddress, getFields, language }) => !!billingAddress &&
        (0,_address__WEBPACK_IMPORTED_MODULE_15__["default"])({
            language,
            formFields: getFields(billingAddress.countryCode),
        }).isValidSync(billingAddress),
    validationSchema: ({ language, getFields, methodId, }) => methodId === 'amazonpay'
        ? (0,yup__WEBPACK_IMPORTED_MODULE_3__.lazy)((values) => (0,_formFields__WEBPACK_IMPORTED_MODULE_16__["default"])({
            translate: (0,_address__WEBPACK_IMPORTED_MODULE_15__.getTranslateAddressError)(getFields(values && values.countryCode), language),
            formFields: getFields(values && values.countryCode),
        }))
        : (0,yup__WEBPACK_IMPORTED_MODULE_3__.lazy)((values) => (0,_address__WEBPACK_IMPORTED_MODULE_15__["default"])({
            language,
            formFields: getFields(values && values.countryCode),
        })),
    enableReinitialize: true,
})(BillingForm)));


/***/ },

/***/ "./packages/core/src/app/billing/getBillingMethodId.ts"
/*!*************************************************************!*\
  !*** ./packages/core/src/app/billing/getBillingMethodId.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }

}]);
//# sourceMappingURL=billing.js.map