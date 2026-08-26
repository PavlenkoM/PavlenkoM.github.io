(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["adyen-v2-payment-method"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss"
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss ***!
  \**************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "[id*=facilypay_][id$=-component-field] .adyen-checkout-form-instruction {\n  display: none;\n}\n\n.optimizedCheckout-form-select + [id*=facilypay_][id$=-component-field] {\n  margin-top: 1.5rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss"
/*!*****************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./AdyenV3Oney.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss");

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

/***/ },

/***/ "./packages/adyen-integration/src/adyenv2/AdyenV2CardValidation.tsx"
/*!**************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv2/AdyenV2CardValidation.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AdyenCardFields;
(function (AdyenCardFields) {
    AdyenCardFields["CardNumber"] = "encryptedCardNumber";
    AdyenCardFields["SecurityCode"] = "encryptedSecurityCode";
    AdyenCardFields["ExpiryDate"] = "encryptedExpiryDate";
})(AdyenCardFields || (AdyenCardFields = {}));
const getInitialValidationState = ({ shouldShowNumberField, method, }) => {
    const validationState = {};
    if (shouldShowNumberField) {
        validationState[AdyenCardFields.CardNumber] = { valid: false };
    }
    if (method === 'scheme') {
        validationState[AdyenCardFields.SecurityCode] = { valid: false };
    }
    if (method === 'bcmc') {
        validationState[AdyenCardFields.ExpiryDate] = { valid: false };
    }
    return validationState;
};
const isFieldInvalid = (fieldKey, fieldsValidation) => !!fieldsValidation[fieldKey] && !fieldsValidation[fieldKey].valid;
const AdyenV2CardValidation = ({ verificationFieldsContainerId, shouldShowNumberField, selectedInstrument, paymentMethod, cardValidationState, language, }) => {
    const [fieldsValidation, setFieldsValidation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a;
        if (!cardValidationState) {
            return;
        }
        if (cardValidationState.fieldType &&
            (!fieldsValidation[cardValidationState.fieldType] ||
                ((_a = fieldsValidation[cardValidationState.fieldType]) === null || _a === void 0 ? void 0 : _a.valid) !==
                    cardValidationState.valid)) {
            if (cardValidationState.fieldType === AdyenCardFields.CardNumber) {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [AdyenCardFields.CardNumber]: cardValidationState.endDigits !== (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4)
                        ? Object.assign(Object.assign({}, cardValidationState), { valid: false }) : Object.assign({}, cardValidationState) }));
            }
            else {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [cardValidationState.fieldType]: cardValidationState }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardValidationState, setFieldsValidation, selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken) {
            setFieldsValidation(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
        }
    }, [selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken, paymentMethod.method, shouldShowNumberField]);
    const showValidationIcon = (key) => isFieldInvalid(key, fieldsValidation) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--invalid", style: { transform: 'none', right: '20px' } },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { alt: "adyen-checkout-icon", className: "adyen-checkout__icon", src: "https://checkoutshopper-test.adyen.com/checkoutshopper/images/components/field_error.svg" })));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, language === null || language === void 0 ? void 0 : language.translate('payment.instrument_trusted_shipping_address_title_text')),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), language === null || language === void 0 ? void 0 :
            language.translate('payment.instrument_trusted_shipping_address_text'))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields", id: verificationFieldsContainerId },
            shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'form-field--ccNumber', {
                    'form-field--ccNumber--hasExpiryDate': paymentMethod.method === 'bcmc',
                }, 
                // This div is hiding by CSS because there is an Adyen library in
                // checkout-sdk which mounts verification fields and if is removed with JS this mounting event will be thrown an error
                { 'form-field-ccNumber--hide': !shouldShowNumberField }) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.CardNumber }, language === null || language === void 0 ? void 0 : language.translate('payment.credit_card_number_label')),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.CardNumber, fieldsValidation),
                    }), "data-cse": AdyenCardFields.CardNumber, id: AdyenCardFields.CardNumber }),
                showValidationIcon(AdyenCardFields.CardNumber))),
            paymentMethod.method === 'scheme' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-ccFields-field--ccCvv" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.SecurityCode }, language === null || language === void 0 ? void 0 : language.translate('payment.credit_card_cvv_label')),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.SecurityCode, fieldsValidation),
                    }), "data-cse": AdyenCardFields.SecurityCode, id: AdyenCardFields.SecurityCode }),
                showValidationIcon(AdyenCardFields.SecurityCode))),
            paymentMethod.method === 'bcmc' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-field--ccExpiry" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.ExpiryDate }, language === null || language === void 0 ? void 0 : language.translate('payment.credit_card_expiration_label')),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.ExpiryDate, fieldsValidation),
                    }), "data-cse": AdyenCardFields.ExpiryDate, id: AdyenCardFields.ExpiryDate }),
                showValidationIcon(AdyenCardFields.ExpiryDate))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV2CardValidation);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv2/AdyenV2Form.tsx"
/*!****************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv2/AdyenV2Form.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");






const AdyenV2Form = (_a) => {
    var { method, containerId, initializePayment, isAccountInstrument, shouldHideInstrumentExpiryDate, validateInstrument, language, showAdditionalActionContent, cancelAdditionalActionModalFlow, additionalActionContainerId, onUnhandledError, checkoutService, checkoutState, paymentForm } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["method", "containerId", "initializePayment", "isAccountInstrument", "shouldHideInstrumentExpiryDate", "validateInstrument", "language", "showAdditionalActionContent", "cancelAdditionalActionModalFlow", "additionalActionContainerId", "onUnhandledError", "checkoutService", "checkoutState", "paymentForm"]);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    const customer = checkoutState.data.getCustomer();
    const { isLoadingInstruments } = checkoutState.statuses;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const { checkoutState: { data: { isPaymentDataRequired }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const isSignedIn = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isSignedIn && Boolean(method.config.isVaultingEnabled);
    const isInstrumentCardCodeRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(checkoutState);
    const isInstrumentCardNumberRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializePayment, instruments: instruments, isAccountInstrument: isAccountInstrument, isInstrumentCardCodeRequired: isInstrumentCardCodeRequired, isInstrumentCardNumberRequired: isInstrumentCardNumberRequired, isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: !isSignedIn, loadInstruments: checkoutService.loadInstruments, method: method, onUnhandledError: onUnhandledError, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer, validateInstrument: validateInstrument })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: language.translate('common.close_action'), isOpen: showAdditionalActionContent, onRequestClose: cancelAdditionalActionModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId, style: { width: '100%' } })),
        !showAdditionalActionContent && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId, style: { display: 'none' } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV2Form);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv2/AdyenV2PaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv2/AdyenV2PaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV2PaymentMethodType: () => (/* binding */ AdyenV2PaymentMethodType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/adyen */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/adyen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _AdyenV2CardValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdyenV2CardValidation */ "./packages/adyen-integration/src/adyenv2/AdyenV2CardValidation.tsx");
/* harmony import */ var _AdyenV2Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdyenV2Form */ "./packages/adyen-integration/src/adyenv2/AdyenV2Form.tsx");







var AdyenV2PaymentMethodType;
(function (AdyenV2PaymentMethodType) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV2PaymentMethodType["scheme"] = "scheme";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV2PaymentMethodType["bcmc"] = "bcmc";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV2PaymentMethodType["ideal"] = "ideal";
})(AdyenV2PaymentMethodType || (AdyenV2PaymentMethodType = {}));
const AdyenV2PaymentMethod = (_a) => {
    var { checkoutService, checkoutState, paymentForm, method, language } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "language"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        shouldShowModal: true,
    });
    const [showAdditionalActionContent, setShowAdditionalActionContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [cardValidationState, setCardValidationState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerId = `adyen-${method.id}-component-field`;
    const additionalActionContainerId = `adyen-${method.id}-additional-action-component-field`;
    const cardVerificationContainerId = `adyen-${method.id}-tsv-component-field`;
    const threeDS2ContainerId = `adyen-${method.id}-additional-action-component-field`;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const component = method.id;
    const shouldHideInstrumentExpiryDate = component === AdyenV2PaymentMethodType.bcmc;
    const onBeforeLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shopperInteraction) => {
        ref.current.shouldShowModal = shopperInteraction;
        setShowAdditionalActionContent(ref.current.shouldShowModal);
    }, []);
    const onComplete = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setShowAdditionalActionContent(false);
        ref.current.cancelAdditionalAction = undefined;
    }, []);
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((cancel) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ref.current.cancelAdditionalAction = cancel;
    }, []);
    const cancelAdditionalActionModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setShowAdditionalActionContent(false);
        if (ref.current.cancelAdditionalAction) {
            ref.current.cancelAdditionalAction();
            ref.current.cancelAdditionalAction = undefined;
        }
    }, []);
    const initializeAdyenPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        const selectedInstrumentId = selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken;
        const adyenOptions = {
            [AdyenV2PaymentMethodType.scheme]: {
                hasHolderName: true,
                holderNameRequired: true,
            },
            [AdyenV2PaymentMethodType.bcmc]: {
                hasHolderName: false,
            },
            [AdyenV2PaymentMethodType.ideal]: {
                showImage: true,
            },
        };
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [_bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__.createAdyenV2PaymentStrategy], adyenv2: {
                cardVerificationContainerId: selectedInstrumentId && cardVerificationContainerId,
                containerId,
                hasVaultedInstruments: !!selectedInstrumentId,
                options: adyenOptions[component],
                threeDS2ContainerId,
                additionalActionOptions: {
                    widgetSize: '05',
                    containerId: additionalActionContainerId,
                    onBeforeLoad,
                    onComplete,
                    onLoad,
                },
                shouldShowNumberField: ref.current.shouldShowNumberField,
                validateCardFields: (state) => {
                    setCardValidationState(state);
                },
            } }));
    }), [
        component,
        cardVerificationContainerId,
        containerId,
        additionalActionContainerId,
        threeDS2ContainerId,
        onBeforeLoad,
        onComplete,
        onLoad,
        checkoutService,
    ]);
    const validateInstrument = (shouldShowNumberField, selectedInstrument) => {
        ref.current.shouldShowNumberField = shouldShowNumberField;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV2CardValidation__WEBPACK_IMPORTED_MODULE_6__["default"], { cardValidationState: cardValidationState, language: language, paymentMethod: method, selectedInstrument: selectedInstrument, shouldShowNumberField: shouldShowNumberField, verificationFieldsContainerId: cardVerificationContainerId }));
    };
    const isAccountInstrument = () => {
        switch (method.method) {
            case 'directEbanking':
            case 'giropay':
            case 'ideal':
            case 'sepadirectdebit':
                return true;
            default:
                return false;
        }
    };
    const isLoading = checkoutState.statuses.isLoadingInstruments() ||
        checkoutState.statuses.isLoadingPaymentMethod(method.id);
    const formContextProps = {
        isSubmitted: paymentForm.isSubmitted(),
        setSubmitted: paymentForm.setSubmitted,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: formContextProps },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV2Form__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, { additionalActionContainerId: additionalActionContainerId, cancelAdditionalActionModalFlow: cancelAdditionalActionModalFlow, checkoutService: checkoutService, checkoutState: checkoutState, containerId: containerId, initializePayment: initializeAdyenPayment, isAccountInstrument: isAccountInstrument(), language: language, method: method, paymentForm: paymentForm, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, showAdditionalActionContent: showAdditionalActionContent, validateInstrument: validateInstrument })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(AdyenV2PaymentMethod, [{ gateway: 'adyenv2' }]));


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3CardValidation.tsx"
/*!**************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3CardValidation.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");



var AdyenCardFields;
(function (AdyenCardFields) {
    AdyenCardFields["CardNumber"] = "encryptedCardNumber";
    AdyenCardFields["SecurityCode"] = "encryptedSecurityCode";
    AdyenCardFields["ExpiryDate"] = "encryptedExpiryDate";
})(AdyenCardFields || (AdyenCardFields = {}));
const getInitialValidationState = ({ shouldShowNumberField, method, }) => {
    const validationState = {};
    if (shouldShowNumberField) {
        validationState[AdyenCardFields.CardNumber] = { valid: false };
    }
    if (method === 'scheme') {
        validationState[AdyenCardFields.SecurityCode] = { valid: false };
    }
    if (method === 'bcmc') {
        validationState[AdyenCardFields.ExpiryDate] = { valid: false };
    }
    return validationState;
};
const isFieldInvalid = (fieldKey, fieldsValidation) => !!fieldsValidation[fieldKey] && !fieldsValidation[fieldKey].valid;
const AdyenV3CardValidation = ({ verificationFieldsContainerId, shouldShowNumberField, selectedInstrument, paymentMethod, cardValidationState, }) => {
    const [fieldsValidation, setFieldsValidation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a;
        if (!cardValidationState) {
            return;
        }
        if (cardValidationState.fieldType &&
            (!fieldsValidation[cardValidationState.fieldType] ||
                ((_a = fieldsValidation[cardValidationState.fieldType]) === null || _a === void 0 ? void 0 : _a.valid) !==
                    cardValidationState.valid)) {
            if (cardValidationState.fieldType === AdyenCardFields.CardNumber) {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [AdyenCardFields.CardNumber]: cardValidationState.endDigits !== (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4)
                        ? Object.assign(Object.assign({}, cardValidationState), { valid: false }) : Object.assign({}, cardValidationState) }));
            }
            else {
                setFieldsValidation(Object.assign(Object.assign({}, fieldsValidation), { [cardValidationState.fieldType]: cardValidationState }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardValidationState, setFieldsValidation, selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.last4]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken) {
            setFieldsValidation(getInitialValidationState({ shouldShowNumberField, method: paymentMethod.method }));
        }
    }, [selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken, paymentMethod.method, shouldShowNumberField]);
    const showValidationIcon = (key) => isFieldInvalid(key, fieldsValidation) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--invalid", style: { transform: 'none', right: '20px' } },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { alt: "adyen-checkout-icon", className: "adyen-checkout__icon", src: "https://checkoutshopper-test.adyen.com/checkoutshopper/images/components/field_error.svg" })));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-ccFields", id: verificationFieldsContainerId },
            shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', 'form-field--ccNumber', {
                    'form-field--ccNumber--hasExpiryDate': paymentMethod.method === 'bcmc',
                }, 
                // This div is hiding by CSS because there is an Adyen library in
                // checkout-sdk which mounts verification fields and if is removed with JS this mounting event will be thrown an error
                { 'form-field-ccNumber--hide': !shouldShowNumberField }) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.CardNumber },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_number_label" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.CardNumber, fieldsValidation),
                    }), "data-cse": AdyenCardFields.CardNumber, id: AdyenCardFields.CardNumber }),
                showValidationIcon(AdyenCardFields.CardNumber))),
            paymentMethod.method === 'scheme' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-ccFields-field--ccCvv" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.SecurityCode },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_cvv_label" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.SecurityCode, fieldsValidation),
                    }), "data-cse": AdyenCardFields.SecurityCode, id: AdyenCardFields.SecurityCode }),
                showValidationIcon(AdyenCardFields.SecurityCode))),
            paymentMethod.method === 'bcmc' && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-field form-field--ccExpiry" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: AdyenCardFields.ExpiryDate },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.credit_card_expiration_label" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-input', 'optimizedCheckout-form-input', 'has-icon', 'adyen-checkout__input-wrapper', {
                        'adyen-checkout__input--error': isFieldInvalid(AdyenCardFields.ExpiryDate, fieldsValidation),
                    }), "data-cse": AdyenCardFields.ExpiryDate, id: AdyenCardFields.ExpiryDate }),
                showValidationIcon(AdyenCardFields.ExpiryDate))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV3CardValidation);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3Form.tsx"
/*!****************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3Form.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntrustedShippingCardVerificationType: () => (/* binding */ UntrustedShippingCardVerificationType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/hosted-widget-integration */ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");






var UntrustedShippingCardVerificationType;
(function (UntrustedShippingCardVerificationType) {
    UntrustedShippingCardVerificationType["CVV"] = "cvv";
    UntrustedShippingCardVerificationType["PAN"] = "pan";
})(UntrustedShippingCardVerificationType || (UntrustedShippingCardVerificationType = {}));
const AdyenV3Form = (_a) => {
    var { method, containerId, initializePayment, isAccountInstrument, shouldHideInstrumentExpiryDate, validateInstrument, language, shouldRenderAdditionalActionContentModal, isModalVisible, cancelAdditionalActionModalFlow, additionalActionContainerId, checkoutState, checkoutService, onUnhandledError } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["method", "containerId", "initializePayment", "isAccountInstrument", "shouldHideInstrumentExpiryDate", "validateInstrument", "language", "shouldRenderAdditionalActionContentModal", "isModalVisible", "cancelAdditionalActionModalFlow", "additionalActionContainerId", "checkoutState", "checkoutService", "onUnhandledError"]);
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const customer = checkoutState.data.getCustomer();
    const { isLoadingInstruments } = checkoutState.statuses;
    const { isPaymentDataRequired } = checkoutState.data;
    const instruments = checkoutState.data.getInstruments(method) || [];
    const isSignedIn = customer === null || customer === void 0 ? void 0 : customer.isGuest;
    const isInstrumentFeatureAvailable = !isSignedIn && Boolean(method.config.isVaultingEnabled);
    const isInstrumentCardCodeRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(checkoutState);
    const isInstrumentCardNumberRequired = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(checkoutState);
    const { hidePaymentSubmitButton, disableSubmit, setFieldValue, setSubmit, setValidationSchema, } = paymentForm;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_hosted_widget_integration__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { containerId: containerId, deinitializePayment: checkoutService.deinitializePayment, disableSubmit: disableSubmit, hideContentWhenSignedOut: true, hidePaymentSubmitButton: hidePaymentSubmitButton, initializePayment: initializePayment, instruments: instruments, isAccountInstrument: isAccountInstrument, isInstrumentCardCodeRequired: isInstrumentCardCodeRequired, isInstrumentCardNumberRequired: isInstrumentCardNumberRequired, isInstrumentFeatureAvailable: isInstrumentFeatureAvailable, isLoadingInstruments: isLoadingInstruments(), isPaymentDataRequired: isPaymentDataRequired(), isSignedIn: !isSignedIn, loadInstruments: checkoutService.loadInstruments, method: method, onUnhandledError: onUnhandledError, setFieldValue: setFieldValue, setSubmit: setSubmit, setValidationSchema: setValidationSchema, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, shouldRenderCustomInstrument: true, signOut: checkoutService.signOutCustomer, validateInstrument: validateInstrument })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: language.translate('common.close_action'), isOpen: shouldRenderAdditionalActionContentModal, onRequestClose: cancelAdditionalActionModalFlow, shouldShowCloseButton: true, style: !isModalVisible && method.id === 'scheme'
                ? {
                    overlay: {
                        display: 'none',
                    },
                }
                : {} },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId, style: { width: '100%' } })),
        !shouldRenderAdditionalActionContentModal && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: additionalActionContainerId })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdyenV3Form);


/***/ },

/***/ "./packages/adyen-integration/src/adyenv3/AdyenV3PaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/adyen-integration/src/adyenv3/AdyenV3PaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV3PaymentMethodType: () => (/* binding */ AdyenV3PaymentMethodType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/adyen */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/adyen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _AdyenV3CardValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdyenV3CardValidation */ "./packages/adyen-integration/src/adyenv3/AdyenV3CardValidation.tsx");
/* harmony import */ var _AdyenV3Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdyenV3Form */ "./packages/adyen-integration/src/adyenv3/AdyenV3Form.tsx");
/* harmony import */ var _AdyenV3Oney_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdyenV3Oney.scss */ "./packages/adyen-integration/src/adyenv3/AdyenV3Oney.scss");
/* harmony import */ var _AdyenV3Oney_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AdyenV3Oney_scss__WEBPACK_IMPORTED_MODULE_9__);








var AdyenV3PaymentMethodType;
(function (AdyenV3PaymentMethodType) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV3PaymentMethodType["scheme"] = "scheme";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AdyenV3PaymentMethodType["bcmc"] = "bcmc";
})(AdyenV3PaymentMethodType || (AdyenV3PaymentMethodType = {}));
const AdyenV3PaymentMethod = (_a) => {
    var _b;
    var { checkoutService, checkoutState, paymentForm, method, language, onUnhandledError } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["checkoutService", "checkoutState", "paymentForm", "method", "language", "onUnhandledError"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        shouldShowModal: true,
    });
    const groupedMethods = // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     (_b = method.initializationData) === null || _b === void 0 ? void 0 : _b.groupedMethods;
    const isGrouped = Boolean(groupedMethods === null || groupedMethods === void 0 ? void 0 : groupedMethods.length);
    const [selectedVariantMethod, setSelectedVariantMethod] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(method);
    const [shouldRenderAdditionalActionContentModal, setShouldRenderAdditionalActionContentModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isAdditionalActionContentModalVisible, setIsAdditionalActionContentModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [cardValidationState, setCardValidationState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const setFieldValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(paymentForm.setFieldValue);
    const containerId = `adyen-${selectedVariantMethod.id}-component-field`;
    const additionalActionContainerId = `adyen-${selectedVariantMethod.id}-additional-action-component-field`;
    const cardVerificationContainerId = `adyen-${selectedVariantMethod.id}-tsv-component-field`;
    const component = selectedVariantMethod.id;
    const shouldHideInstrumentExpiryDate = component === AdyenV3PaymentMethodType.bcmc;
    const handleVariantChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((variantId) => {
        const variant = groupedMethods === null || groupedMethods === void 0 ? void 0 : groupedMethods.find((m) => m.id === variantId);
        if (variant && variant.id !== selectedVariantMethod.id) {
            setSelectedVariantMethod(variant);
            paymentForm.setFieldValue('methodIdOverride', variant.id);
        }
    }, [groupedMethods, paymentForm, selectedVariantMethod.id]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        setFieldValueRef.current = paymentForm.setFieldValue;
    }, [paymentForm]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!isGrouped) {
            return;
        }
        return () => {
            setFieldValueRef.current('methodIdOverride', undefined);
        };
    }, [isGrouped]);
    const onBeforeLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((shopperInteraction) => {
        ref.current.shouldShowModal = shopperInteraction;
        setShouldRenderAdditionalActionContentModal(ref.current.shouldShowModal);
    }, []);
    const onComplete = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setIsAdditionalActionContentModalVisible(false);
        setShouldRenderAdditionalActionContentModal(false);
        ref.current.cancelAdditionalAction = undefined;
    }, []);
    const onActionHandled = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setIsAdditionalActionContentModalVisible(true);
    }, []);
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((cancel) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ref.current.cancelAdditionalAction = cancel;
    }, []);
    const cancelAdditionalActionModalFlow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        setIsAdditionalActionContentModalVisible(false);
        setShouldRenderAdditionalActionContentModal(false);
        if (ref.current.cancelAdditionalAction) {
            ref.current.cancelAdditionalAction();
            ref.current.cancelAdditionalAction = undefined;
        }
    }, []);
    const initializeAdyenPayment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const adyenOptions = {
            [AdyenV3PaymentMethodType.scheme]: {
                hasHolderName: true,
                holderNameRequired: true,
            },
        };
        const selectedInstrumentId = selectedInstrument === null || selectedInstrument === void 0 ? void 0 : selectedInstrument.bigpayToken;
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { methodId: component, integrations: [_bigcommerce_checkout_sdk_integrations_adyen__WEBPACK_IMPORTED_MODULE_1__.createAdyenV3PaymentStrategy], adyenv3: {
                cardVerificationContainerId: selectedInstrumentId && cardVerificationContainerId,
                containerId,
                hasVaultedInstruments: !!selectedInstrumentId,
                options: adyenOptions[component],
                additionalActionOptions: {
                    widgetSize: '05',
                    containerId: additionalActionContainerId,
                    onBeforeLoad,
                    onComplete,
                    onLoad,
                    onActionHandled,
                },
                shouldShowNumberField: ref.current.shouldShowNumberField,
                validateCardFields: (state) => {
                    setCardValidationState(state);
                },
            } }));
    }), [
        component,
        cardVerificationContainerId,
        containerId,
        additionalActionContainerId,
        onBeforeLoad,
        onComplete,
        onLoad,
        onActionHandled,
        checkoutService,
    ]);
    // HostedWidgetPaymentComponent calls `initializePayment` from a few places (mount, switching
    // instruments, adding a new card) that can race each other, so this token makes sure only
    // the most recent attempt's outcome ends up touching disableSubmit.
    const activeInitAttemptRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const initializeAdyenPaymentWithSubmitGuard = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((options, selectedInstrument) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const token = {};
        activeInitAttemptRef.current = token;
        try {
            const result = yield initializeAdyenPayment(options, selectedInstrument);
            if (activeInitAttemptRef.current === token) {
                paymentForm.disableSubmit(method, false);
            }
            return result;
        }
        catch (error) {
            if (activeInitAttemptRef.current === token) {
                paymentForm.disableSubmit(method, true);
            }
            throw error;
        }
    }), [initializeAdyenPayment, method, paymentForm]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!isGrouped) {
            return;
        }
        let isCurrent = true;
        paymentForm.setValidationSchema(method, null);
        paymentForm.setSubmit(method, null);
        paymentForm.disableSubmit(method, false);
        void initializeAdyenPayment({
            methodId: component,
            gatewayId: method.gateway,
        }).catch((error) => {
            if (!isCurrent) {
                return;
            }
            paymentForm.disableSubmit(method, true);
            if (error instanceof Error) {
                onUnhandledError(error);
            }
        });
        return () => {
            isCurrent = false;
            paymentForm.setValidationSchema(method, null);
            paymentForm.setSubmit(method, null);
            void checkoutService.deinitializePayment({
                gatewayId: method.gateway,
                methodId: component,
            });
        };
        // Re-run only when `initializeAdyenPayment` changes (it already lists `component`, container ids, and `checkoutService`).
        // Adding `method`, `paymentForm`, or `checkoutService` causes an infinite loop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initializeAdyenPayment]);
    const validateInstrument = (shouldShowNumberField, selectedInstrument) => {
        ref.current.shouldShowNumberField = shouldShowNumberField;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV3CardValidation__WEBPACK_IMPORTED_MODULE_7__["default"], { cardValidationState: cardValidationState, paymentMethod: method, selectedInstrument: selectedInstrument, shouldShowNumberField: shouldShowNumberField, verificationFieldsContainerId: cardVerificationContainerId }));
    };
    const isAccountInstrument = () => {
        switch (method.method) {
            case 'directEbanking':
            case 'giropay':
            case 'ideal':
            case 'sepadirectdebit':
                return true;
            default:
                return false;
        }
    };
    const isLoading = checkoutState.statuses.isLoadingInstruments() ||
        checkoutState.statuses.isLoadingPaymentMethod(method.id);
    const formContextProps = {
        isSubmitted: paymentForm.isSubmitted(),
        setSubmitted: paymentForm.setSubmitted,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, { value: formContextProps }, isGrouped ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", { className: "form-select optimizedCheckout-form-select", onChange: (e) => handleVariantChange(e.target.value), value: selectedVariantMethod.id }, groupedMethods.map((m) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", { key: m.id, value: m.id }, m.config.displayName)))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: containerId }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalBodyClassName: "modal-body--center", closeButtonLabel: language.translate('common.close_action'), isOpen: shouldRenderAdditionalActionContentModal, onRequestClose: cancelAdditionalActionModalFlow, shouldShowCloseButton: true },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: additionalActionContainerId, style: { width: '100%' } })),
        !shouldRenderAdditionalActionContentModal && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: additionalActionContainerId })))) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AdyenV3Form__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, rest, { additionalActionContainerId: additionalActionContainerId, cancelAdditionalActionModalFlow: cancelAdditionalActionModalFlow, checkoutService: checkoutService, checkoutState: checkoutState, containerId: containerId, hideContentWhenSignedOut: true, initializePayment: initializeAdyenPaymentWithSubmitGuard, isAccountInstrument: isAccountInstrument(), isModalVisible: isAdditionalActionContentModalVisible, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm, shouldHideInstrumentExpiryDate: shouldHideInstrumentExpiryDate, shouldRenderAdditionalActionContentModal: shouldRenderAdditionalActionContentModal, validateInstrument: validateInstrument }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_3__["default"])(AdyenV3PaymentMethod, [{ gateway: 'adyenv3' }]));


/***/ },

/***/ "./packages/adyen-integration/src/index.ts"
/*!*************************************************!*\
  !*** ./packages/adyen-integration/src/index.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV2PaymentMethod: () => (/* reexport safe */ _adyenv2_AdyenV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   AdyenV3PaymentMethod: () => (/* reexport safe */ _adyenv3_AdyenV3PaymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _adyenv2_AdyenV2PaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adyenv2/AdyenV2PaymentMethod */ "./packages/adyen-integration/src/adyenv2/AdyenV2PaymentMethod.tsx");
/* harmony import */ var _adyenv3_AdyenV3PaymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adyenv3/AdyenV3PaymentMethod */ "./packages/adyen-integration/src/adyenv3/AdyenV3PaymentMethod.tsx");




/***/ }

}]);
//# sourceMappingURL=adyen-v2-payment-method.js.map