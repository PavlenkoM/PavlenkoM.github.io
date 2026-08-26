"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["amazon-pay-v2-button"],{

/***/ "./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx"
/*!**********************************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/amazon-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/amazon-pay.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-button-integration */ "./packages/checkout-button-integration/src/CheckoutButton.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");





const beautifyAmazonButton = () => {
    var _a;
    if (!document.querySelector('.checkout-button-container')) {
        return;
    }
    const container = document.querySelector('#amazonpayCheckoutButton > div');
    if (container) {
        const amazonButton = (_a = container.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.amazonpay-button-view1');
        if ((0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(amazonButton)) {
            amazonButton.style.height = '36px';
            return;
        }
    }
    setTimeout(beautifyAmazonButton, 10);
};
const AmazonPayV2Button = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        beautifyAmazonButton();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "AmazonPayContainer" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_button_integration__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ integrations: [_bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_0__.createAmazonPayV2CustomerStrategy] }, props))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(AmazonPayV2Button, [{ id: 'amazonpay' }]));


/***/ },

/***/ "./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/amazon-pay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/amazon-pay.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");







const AmazonPayV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, paymentForm, method, method: { initializationData: { paymentDescriptor, paymentToken }, } } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "method"]);
    const initializeAmazonPayV2Payment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options) => checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_amazon_pay__WEBPACK_IMPORTED_MODULE_1__.createAmazonPayV2PaymentStrategy], amazonpay: {
            editButtonId: 'editButtonId',
        } })), [checkoutService]);
    const reload = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => window.location.reload(), []);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const { data: { getCheckout, isPaymentDataRequired }, statuses: { isLoadingInstruments }, } = checkoutState;
    const checkout = getCheckout();
    const customer = checkoutState.data.getCustomer();
    const isGuestCustomer = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isGuestCustomer && Boolean(method.config.isVaultingEnabled);
    const instruments = checkoutState.data.getInstruments(method) || [];
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { buttonId: "editButtonId", containerId: "paymentWidget", deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hidePaymentSubmitButton: hidePaymentSubmitButton, hideWidget: true, initializePayment: initializeAmazonPayV2Payment, instruments: instruments, isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState), isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(checkoutState), isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignInRequired: false, isSignedIn: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(checkout === null || checkout === void 0 ? void 0 : checkout.payments, { providerId: method.id }), loadInstruments: checkoutService.loadInstruments, method: method, onSignOut: reload, paymentDescriptor: paymentDescriptor, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldShow: !!paymentToken, shouldShowDescriptor: !!paymentToken, shouldShowEditButton: !!paymentToken, signOut: checkoutService.signOutCustomer })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_7__["default"])(AmazonPayV2PaymentMethod, [{ id: 'amazonpay' }]));


/***/ },

/***/ "./packages/amazon-pay-v2-integration/src/index.ts"
/*!*********************************************************!*\
  !*** ./packages/amazon-pay-v2-integration/src/index.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmazonPayV2Button: () => (/* reexport safe */ _AmazonPayV2Button__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   AmazonPayV2PaymentMethod: () => (/* reexport safe */ _AmazonPayV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AmazonPayV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmazonPayV2PaymentMethod */ "./packages/amazon-pay-v2-integration/src/AmazonPayV2PaymentMethod.tsx");
/* harmony import */ var _AmazonPayV2Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmazonPayV2Button */ "./packages/amazon-pay-v2-integration/src/AmazonPayV2Button.tsx");




/***/ },

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

/***/ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx"
/*!******************************************************************!*\
  !*** ./packages/contexts/src/paymentForm/PaymentFormContext.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentFormContext: () => (/* binding */ PaymentFormContext),
/* harmony export */   usePaymentFormContext: () => (/* binding */ usePaymentFormContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PaymentFormContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
function usePaymentFormContext() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaymentFormContext);
    if (!context) {
        throw new Error('usePaymentFormContext must be used within a PaymentFormContextProvider');
    }
    return context;
}


/***/ },

/***/ "./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts"
/*!*****************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isHTMLElement/isHTMLElement.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isHTMLElement)
/* harmony export */ });
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}


/***/ },

/***/ "./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts"
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECKOUT_ROOT_NODE_ID: () => (/* binding */ CHECKOUT_ROOT_NODE_ID),
/* harmony export */   MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID: () => (/* binding */ MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID)
/* harmony export */ });
const CHECKOUT_ROOT_NODE_ID = 'checkout-app';
const MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID = 'micro-app-ng-checkout';


/***/ },

/***/ "./packages/ui/src/dropdown/DropdownTrigger.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/dropdown/DropdownTrigger.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts");



const DropdownTrigger = ({ placement = 'bottom-start', dropdown, children, }) => {
    const [shouldShow, setShouldShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const getRootElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        return (document.getElementById(_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__.CHECKOUT_ROOT_NODE_ID) ||
            document.getElementById(_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__.MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID));
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event) => {
        if (!shouldShow) {
            return;
        }
        // if clicked element is a text field inside the dropdown menu, keep it open
        const target = event === null || event === void 0 ? void 0 : event.target;
        if (target instanceof HTMLInputElement && target.closest('.dropdownMenu')) {
            return;
        }
        setShouldShow(false);
    }, [shouldShow]);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (shouldShow) {
            return;
        }
        setShouldShow(true);
    }, [shouldShow]);
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (shouldShow) {
            handleClose();
        }
        else {
            handleOpen();
        }
    }, [shouldShow, handleClose, handleOpen]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const rootElement = getRootElement();
        if (shouldShow) {
            rootElement === null || rootElement === void 0 ? void 0 : rootElement.addEventListener('click', handleClose);
        }
        else {
            rootElement === null || rootElement === void 0 ? void 0 : rootElement.removeEventListener('click', handleClose);
        }
        return () => {
            rootElement === null || rootElement === void 0 ? void 0 : rootElement.removeEventListener('click', handleClose);
        };
    }, [shouldShow, handleClose, getRootElement]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_2__.Manager, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__.Reference, null, ({ ref }) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dropdownTrigger", onClick: handleClick, ref: ref }, children))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_1__.Popper, { modifiers: [
                { name: 'hide', enabled: false },
                { name: 'flip', enabled: false },
                { name: 'preventOverflow', enabled: false },
            ], placement: placement }, ({ ref, style }) => !shouldShow ? null : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dropdownMenu", ref: ref, style: Object.assign(Object.assign({}, style), { width: '100%', zIndex: 2 }) }, dropdown)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownTrigger);


/***/ },

/***/ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx"
/*!**********************************************************************!*\
  !*** ./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasicFormField */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CheckboxInput */ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormFieldError */ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx");





const CheckboxFormField = ({ additionalClassName, disabled = false, labelContent, onChange, name, id, testId, }) => {
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { checked: !!field.value, disabled: disabled, id: id || field.name, label: labelContent, testId: testId })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_4__["default"], { errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name)}-field-error-message` }))), [disabled, id, labelContent, name, testId]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: additionalClassName, name: name, onChange: onChange, render: renderField }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CheckboxFormField));


/***/ },

/***/ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx"
/*!**************************************************************!*\
  !*** ./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx ***!
  \**************************************************************/
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ "./packages/ui/src/form/Input/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Label */ "./packages/ui/src/form/Label/Label.tsx");





const CheckboxInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, id, testId } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id", "testId"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', additionalClassName, 'floating-form-field-input'), id: id, ref: ref, testId: testId, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "body-regular", htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ },

/***/ "./packages/ui/src/icon/CreditCardIcon.tsx"
/*!*************************************************!*\
  !*** ./packages/ui/src/icon/CreditCardIcon.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapFromPaymentMethodCardType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapFromPaymentMethodCardType */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");



const CreditCardIcon = ({ cardType }) => {
    const iconProps = {
        additionalClassName: 'cardIcon-icon',
        size: _IconContainer__WEBPACK_IMPORTED_MODULE_2__.IconSize.Medium,
        testId: `credit-card-icon-${cardType || 'default'}`,
    };
    const IconComponent = (0,_mapFromPaymentMethodCardType__WEBPACK_IMPORTED_MODULE_1__.getPaymentMethodIconComponent)(cardType);
    return IconComponent ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, Object.assign({}, iconProps)))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cardIcon-icon cardIcon-icon--default icon icon--medium" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardIcon));


/***/ },

/***/ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts"
/*!**************************************************************!*\
  !*** ./packages/ui/src/icon/mapFromPaymentMethodCardType.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapFromPaymentMethodCardType),
/* harmony export */   filterInstrumentTypes: () => (/* binding */ filterInstrumentTypes),
/* harmony export */   getPaymentMethodIconComponent: () => (/* binding */ getPaymentMethodIconComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const instrumentTypeMap = {
    AMEX: {
        instrument: 'american-express',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-amex */ "icon-card-amex").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardAmex */ "./packages/ui/src/icon/IconCardAmex.tsx"))),
    },
    BITCOIN: {
        instrument: 'bitcoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-bitcoin */ "icon-bitcoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconBitCoin */ "./packages/ui/src/icon/IconBitCoin.tsx"))),
    },
    BITCOIN_CASH: {
        instrument: 'bitcoin-cash',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-bitcoin-cash */ "icon-bitcoin-cash").then(__webpack_require__.bind(__webpack_require__, /*! ./IconBitCoinCash */ "./packages/ui/src/icon/IconBitCoinCash.tsx"))),
    },
    BANCONTACT: {
        instrument: 'bancontact',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-bancontact */ "icon-card-bancontact").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardBancontact */ "./packages/ui/src/icon/IconCardBancontact.tsx"))),
    },
    CARNET: {
        instrument: 'carnet',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-carnet */ "icon-card-carnet").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardCarnet */ "./packages/ui/src/icon/IconCardCarnet.tsx"))),
    },
    CB: {
        instrument: 'cb',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-cb */ "icon-card-cb").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardCB */ "./packages/ui/src/icon/IconCardCB.tsx"))),
    },
    DINERS: {
        instrument: 'diners-club',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-diners-club */ "icon-card-diners-club").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDinersClub */ "./packages/ui/src/icon/IconCardDinersClub.tsx"))),
    },
    DANKORT: {
        instrument: 'dankort',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-dankort */ "icon-card-dankort").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDankort */ "./packages/ui/src/icon/IconCardDankort.tsx"))),
    },
    DISCOVER: {
        instrument: 'discover',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-discover */ "icon-card-discover").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDiscover */ "./packages/ui/src/icon/IconCardDiscover.tsx"))),
    },
    DOGECOIN: {
        instrument: 'dogecoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-dogecoin */ "icon-dogecoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconDogeCoin */ "./packages/ui/src/icon/IconDogeCoin.tsx"))),
    },
    ELECTRON: {
        instrument: 'electron',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-electron */ "icon-card-electron").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardElectron */ "./packages/ui/src/icon/IconCardElectron.tsx"))),
    },
    ELO: {
        instrument: 'elo',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-elo */ "icon-card-elo").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardElo */ "./packages/ui/src/icon/IconCardElo.tsx"))),
    },
    ETHEREUM: {
        instrument: 'ethereum',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-ethereum */ "icon-ethereum").then(__webpack_require__.bind(__webpack_require__, /*! ./IconEthereum */ "./packages/ui/src/icon/IconEthereum.tsx"))),
    },
    HIPER: {
        instrument: 'hiper',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-hipercard */ "icon-card-hipercard").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardHipercard */ "./packages/ui/src/icon/IconCardHipercard.tsx"))),
    },
    JCB: {
        instrument: 'jcb',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-jcb */ "icon-card-jcb").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardJCB */ "./packages/ui/src/icon/IconCardJCB.tsx"))),
    },
    LITECOIN: {
        instrument: 'litecoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-litecoin */ "icon-litecoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconLiteCoin */ "./packages/ui/src/icon/IconLiteCoin.tsx"))),
    },
    MADA: {
        instrument: 'mada',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-mada */ "icon-card-mada").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMada */ "./packages/ui/src/icon/IconCardMada.tsx"))),
    },
    MAESTRO: {
        instrument: 'maestro',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-maestro */ "icon-card-maestro").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMaestro */ "./packages/ui/src/icon/IconCardMaestro.tsx"))),
    },
    MC: {
        instrument: 'mastercard',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-mastercard */ "icon-card-mastercard").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMastercard */ "./packages/ui/src/icon/IconCardMastercard.tsx"))),
    },
    SHIBA_INU: {
        instrument: 'shiba-inu',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-shiba-inu */ "icon-shiba-inu").then(__webpack_require__.bind(__webpack_require__, /*! ./IconShibaInu */ "./packages/ui/src/icon/IconShibaInu.tsx"))),
    },
    TROY: {
        instrument: 'troy',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-troy */ "icon-card-troy").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardTroy */ "./packages/ui/src/icon/IconCardTroy.tsx"))),
    },
    CUP: {
        instrument: 'unionpay',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-unionpay */ "icon-card-unionpay").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardUnionPay */ "./packages/ui/src/icon/IconCardUnionPay.tsx"))),
    },
    USD_COIN: {
        instrument: 'usd-coin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-usd-coin */ "icon-usd-coin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconUsdCoin */ "./packages/ui/src/icon/IconUsdCoin.tsx"))),
    },
    VISA: {
        instrument: 'visa',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-visa */ "icon-card-visa").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardVisa */ "./packages/ui/src/icon/IconCardVisa.tsx"))),
    },
};
function mapFromPaymentMethodCardType(type) {
    var _a;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return ((_a = instrumentTypeMap[type]) === null || _a === void 0 ? void 0 : _a.instrument) || undefined;
}
function getPaymentMethodIconComponent(type) {
    if (!type) {
        return undefined;
    }
    const instrumentType = Object.values(instrumentTypeMap).find((record) => record.instrument === type);
    return instrumentType ? instrumentType.component : undefined;
}
function getSupportedInstrumentTypes() {
    return Object.values(instrumentTypeMap).map((record) => record.instrument);
}
function filterInstrumentTypes(instrumentTypes) {
    const supportedInstrumentTypes = getSupportedInstrumentTypes();
    return instrumentTypes.filter((type) => supportedInstrumentTypes.includes(type));
}


/***/ },

/***/ "./packages/ui/src/modal/ModalTrigger.tsx"
/*!************************************************!*\
  !*** ./packages/ui/src/modal/ModalTrigger.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalTrigger = ({ children, modal }) => {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const canHandleEventRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        canHandleEventRef.current = true;
        return () => {
            canHandleEventRef.current = false;
        };
    }, []);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(false);
    }, []);
    const handleKeyOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((keyboardEvent) => {
        if (keyboardEvent.key === 'Enter') {
            handleOpen();
        }
    }, [handleOpen]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        children({
            onClick: handleOpen,
            onKeyPress: handleKeyOpen,
        }),
        modal({
            isOpen,
            onRequestClose: handleClose,
        })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);


/***/ }

}]);
//# sourceMappingURL=amazon-pay-v2-button.js.map