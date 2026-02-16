"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"],{

/***/ "./packages/credit-card-integration/src/CreditCardPaymentMethodComponent.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/credit-card-integration/src/CreditCardPaymentMethodComponent.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardPaymentMethodComponent: () => (/* binding */ CreditCardPaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isCardInstrument/isCardInstrument.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/getInstrumentValidationSchema/getInstrumentValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/getCreditCardValidationSchema/getCreditCardValidationSchema.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/configureCardValidator.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/CardInstrumentFieldset/CardInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardValidation/CreditCardValidation.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/creditCard/CreditCardFieldset/CreditCardFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardCodeRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentCardNumberRequiredSelector.ts");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/CaptureMessageComponent.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");







const CreditCardPaymentMethodComponent = (props) => {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        isAddingNewCard: false,
    });
    const filterInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((instruments = []) => instruments.filter(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__.isCardInstrument));
    const getCreditCardPaymentMethodDerivedProps = () => {
        const { checkoutState, isUsingMultiShipping = false, method } = props;
        const { data: { getConfig, getCustomer, getInstruments, isPaymentDataRequired }, statuses: { isLoadingInstruments: isLoadingInstrumentsProp }, } = checkoutState;
        const config = getConfig();
        const customer = getCustomer();
        if (!config || !customer || !method) {
            throw new Error('Unable to get checkout');
        }
        const instruments = filterInstruments(getInstruments(method));
        const isInstrumentFeatureAvailableFlag = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"])({
            config,
            customer,
            isUsingMultiShipping,
            paymentMethod: method,
        });
        return {
            instruments,
            isCardCodeRequired: method.config.cardCode || method.config.cardCode === null,
            isCustomerCodeRequired: !!method.config.requireCustomerCode,
            isInstrumentCardCodeRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_13__["default"])(checkoutState),
            isInstrumentCardNumberRequired: (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_14__["default"])(checkoutState),
            isInstrumentFeatureAvailable: isInstrumentFeatureAvailableFlag,
            isLoadingInstruments: isLoadingInstrumentsProp(),
            isPaymentDataRequired: isPaymentDataRequired(),
            shouldShowInstrumentFieldset: isInstrumentFeatureAvailableFlag && instruments.length > 0,
        };
    };
    const getDefaultInstrumentId = () => {
        const { isAddingNewCard } = state;
        if (isAddingNewCard) {
            return;
        }
        const { instruments } = getCreditCardPaymentMethodDerivedProps();
        const defaultInstrument = instruments.find((instrument) => instrument.defaultInstrument) || instruments[0];
        return defaultInstrument && defaultInstrument.bigpayToken;
    };
    const getSelectedInstrument = () => {
        const { instruments } = getCreditCardPaymentMethodDerivedProps();
        const { selectedInstrumentId = getDefaultInstrumentId() } = state;
        return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { bigpayToken: selectedInstrumentId });
    };
    const getValidationSchema = () => {
        const { cardValidationSchema, language, method, storedCardValidationSchema } = props;
        const { isInstrumentCardCodeRequired: innerIsInstrumentCardCodeRequiredProp, isInstrumentCardNumberRequired: innerIsInstrumentCardNumberRequiredProp, isInstrumentFeatureAvailable: innerIsInstrumentFeatureAvailableProp, isPaymentDataRequired, } = getCreditCardPaymentMethodDerivedProps();
        if (!isPaymentDataRequired) {
            return null;
        }
        const innerSelectedInstrument = getSelectedInstrument();
        if (innerIsInstrumentFeatureAvailableProp && innerSelectedInstrument) {
            return (storedCardValidationSchema ||
                (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"])({
                    instrumentBrand: innerSelectedInstrument.brand,
                    instrumentLast4: innerSelectedInstrument.last4,
                    isCardCodeRequired: innerIsInstrumentCardCodeRequiredProp(innerSelectedInstrument, method),
                    isCardNumberRequired: innerIsInstrumentCardNumberRequiredProp(innerSelectedInstrument, method),
                    language,
                }));
        }
        return (cardValidationSchema ||
            (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"])({
                isCardCodeRequired: method.config.cardCode === true,
                language,
            }));
    };
    const handleUseNewCard = () => {
        setState(Object.assign(Object.assign({}, state), { isAddingNewCard: true, selectedInstrumentId: undefined }));
    };
    const handleSelectInstrument = (id) => {
        setState(Object.assign(Object.assign({}, state), { isAddingNewCard: false, selectedInstrumentId: id }));
    };
    const handleDeleteInstrument = (id) => {
        const { paymentForm: { setFieldValue }, } = props;
        const { instruments } = getCreditCardPaymentMethodDerivedProps();
        const { selectedInstrumentId } = state;
        if (instruments.length === 0) {
            setState(Object.assign(Object.assign({}, state), { isAddingNewCard: true, selectedInstrumentId: undefined }));
            setFieldValue('instrumentId', '');
        }
        else if (selectedInstrumentId === id) {
            setState(Object.assign(Object.assign({}, state), { selectedInstrumentId: getDefaultInstrumentId() }));
            setFieldValue('instrumentId', getDefaultInstrumentId());
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            const { initializePayment, method, onUnhandledError, paymentForm: { setValidationSchema }, } = props;
            setValidationSchema(method, getValidationSchema());
            (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_8__["default"])();
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                }, getSelectedInstrument());
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void init();
        return () => {
            const deinit = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                const { deinitializePayment, method, onUnhandledError, paymentForm: { setValidationSchema }, } = props;
                setValidationSchema(method, null);
                try {
                    yield deinitializePayment({
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
            void deinit();
        };
    }, []);
    const componentDidMount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (!componentDidMount.current) {
            componentDidMount.current = true;
            return;
        }
        const reInit = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            const { deinitializePayment, initializePayment, method, onUnhandledError, paymentForm: { setValidationSchema }, } = props;
            setValidationSchema(method, getValidationSchema());
            try {
                yield deinitializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                }, getSelectedInstrument());
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void reInit();
    }, [state.selectedInstrumentId, state.isAddingNewCard]);
    const { checkoutState: { data: { getConfig: getStoreConfig }, }, cardFieldset, getStoredCardValidationFieldset, isInitializing, method: methodProp, } = props;
    const { instruments: outerInstruments, isInstrumentCardCodeRequired: isInstrumentCardCodeRequiredProp, isInstrumentCardNumberRequired: isInstrumentCardNumberRequiredProp, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, isLoadingInstruments, shouldShowInstrumentFieldset, } = getCreditCardPaymentMethodDerivedProps();
    const { isAddingNewCard: isAddingNewCardState } = state;
    const selectedInstrument = getSelectedInstrument();
    const shouldShowCreditCardFieldset = !shouldShowInstrumentFieldset || isAddingNewCardState;
    const isLoading = isInitializing || isLoadingInstruments;
    const shouldShowNumberField = selectedInstrument
        ? isInstrumentCardNumberRequiredProp(selectedInstrument, methodProp)
        : false;
    const shouldShowCardCodeField = selectedInstrument
        ? isInstrumentCardCodeRequiredProp(selectedInstrument, methodProp)
        : false;
    const storeConfig = getStoreConfig();
    const SentryMessage = methodProp ? `DataCreditCardFieldset ${JSON.stringify(methodProp)}` : '';
    if (!storeConfig) {
        throw Error('Unable to get config or customer');
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_16__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentMethod paymentMethod--creditCard", "data-test": "credit-cart-payment-method" },
            shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_9__["default"], { instruments: outerInstruments, onDeleteInstrument: handleDeleteInstrument, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewCard, selectedInstrumentId: selectedInstrument && selectedInstrument.bigpayToken, validateInstrument: getStoredCardValidationFieldset ? (getStoredCardValidationFieldset(selectedInstrument)) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_10__["default"], { shouldShowCardCodeField: shouldShowCardCodeField, shouldShowNumberField: shouldShowNumberField })) })),
            shouldShowCreditCardFieldset && !cardFieldset && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_15__.CaptureMessageComponent, { message: SentryMessage }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_11__["default"], { shouldShowCardCodeField: methodProp.config.cardCode || methodProp.config.cardCode === null, shouldShowCustomerCodeField: methodProp.config.requireCustomerCode }))),
            shouldShowCreditCardFieldset && cardFieldset,
            isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_12__["default"], { instrumentId: selectedInstrument && selectedInstrument.bigpayToken, instruments: outerInstruments })))));
};


/***/ }),

/***/ "./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/credit-card-integration/src/CreditCardPaymentMethodContainer.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardPaymentMethodComponentContainer: () => (/* binding */ CreditCardPaymentMethodComponentContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _CreditCardPaymentMethodComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreditCardPaymentMethodComponent */ "./packages/credit-card-integration/src/CreditCardPaymentMethodComponent.tsx");




const CreditCardPaymentMethodComponentContainer = (props) => {
    const [componentDidMount, setComponentDidMount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            const { checkoutService, checkoutState, isUsingMultiShipping = false, method } = props;
            const { data: { getConfig, getCustomer }, } = checkoutState;
            const config = getConfig();
            const customer = getCustomer();
            if (!config || !customer || !method) {
                throw new Error('Unable to get checkout');
            }
            const isInstrumentFeatureAvailableFlag = (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__["default"])({
                config,
                customer,
                isUsingMultiShipping,
                paymentMethod: method,
            });
            if (isInstrumentFeatureAvailableFlag) {
                yield checkoutService.loadInstruments();
            }
            setComponentDidMount(true);
        });
        void init();
    }, []);
    if (!componentDidMount) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CreditCardPaymentMethodComponent__WEBPACK_IMPORTED_MODULE_3__.CreditCardPaymentMethodComponent, Object.assign({}, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCardPaymentMethodComponentContainer);


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardCodeField.tsx":
/*!**************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardCodeField.tsx ***!
  \**************************************************************************/
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
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconHelp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");
/* harmony import */ var _CreditCardCodeTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreditCardCodeTooltip */ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx");




const CreditCardCodeField = ({ name }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { additionalClassName: "has-icon", autoComplete: "cc-csc", id: field.name, type: "tel" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_cvv_label" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreditCardCodeTooltip__WEBPACK_IMPORTED_MODULE_7__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "has-tip" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null))))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-ccFields-field--ccCvv", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardCodeField));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx ***!
  \**********************************************************************************/
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



const CreditCardCustomerCodeField = ({ name, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { id: field.name })), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_customer_code_label" }),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "optimizedCheckout-contentSecondary" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.optional_text" })))), []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { input: renderInput, labelContent: labelContent, name: name });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardCustomerCodeField));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardExpiryField.tsx":
/*!****************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardExpiryField.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./packages/instrument-utils/src/creditCard/formatCreditCardExpiryDate/formatCreditCardExpiryDate.ts");






const CreditCardExpiryField = ({ name }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useLocale)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoizeOne)((field, form) => {
        return (event) => {
            void form.setFieldValue(field.name, (0,___WEBPACK_IMPORTED_MODULE_6__["default"])(event.target.value));
        };
    }), []);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field, form }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, field, { autoComplete: "cc-exp", id: field.name, onChange: handleChange(field, form), placeholder: language.translate('payment.credit_card_expiration_placeholder_text'), type: "tel" }))), [handleChange, language]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_expiration_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "form-field--ccExpiry", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CreditCardExpiryField));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardFieldset/CreditCardFieldset.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardFieldset/CreditCardFieldset.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./packages/instrument-utils/src/creditCard/CreditCardNumberField/CreditCardNumberField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./packages/instrument-utils/src/creditCard/CreditCardCodeField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ */ "./packages/instrument-utils/src/creditCard/CreditCardCustomerCodeField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./packages/instrument-utils/src/creditCard/CreditCardExpiryField.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ */ "./packages/instrument-utils/src/creditCard/CreditCardNameField.tsx");




const CreditCardFieldset = ({ shouldShowCardCodeField, shouldShowCustomerCodeField, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "creditCardFieldset", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { hidden: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_text" })) },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_4__["default"], { name: "ccNumber" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_7__["default"], { name: "ccExpiry" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_8__["default"], { name: "ccName" }),
        shouldShowCardCodeField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_5__["default"], { name: "ccCvv" }),
        shouldShowCustomerCodeField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_6__["default"], { name: "ccCustomerCode" }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardFieldset));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardNameField.tsx":
/*!**************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardNameField.tsx ***!
  \**************************************************************************/
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



const CreditCardNameField = ({ name }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { autoComplete: "cc-name", id: field.name })), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_name_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--ccName", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardNameField));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardNumberField/CreditCardNumberField.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardNumberField/CreditCardNumberField.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! credit-card-type */ "./node_modules/credit-card-type/index.js");
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(credit_card_type__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconLock.tsx");
/* harmony import */ var _formatCreditCardNumber_formatCreditCardNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formatCreditCardNumber/formatCreditCardNumber */ "./packages/instrument-utils/src/creditCard/formatCreditCardNumber/formatCreditCardNumber.ts");






const CreditCardNumberInput = ({ field, form, }) => {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const nextSelectionEndRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (inputRef.current && inputRef.current.selectionEnd !== nextSelectionEndRef.current) {
            inputRef.current.setSelectionRange(nextSelectionEndRef.current, nextSelectionEndRef.current);
        }
    });
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event) => {
        const separator = ' ';
        const { value = '' } = event.target;
        const { name, value: previousValue = '' } = field;
        const selectionEnd = inputRef.current && inputRef.current.selectionEnd;
        // Only allow digits and spaces
        if (new RegExp(`[^\\d${separator}]`).test(value)) {
            void form.setFieldValue(name, previousValue);
            return;
        }
        const maxLength = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.max)(credit_card_type__WEBPACK_IMPORTED_MODULE_0___default()(value).map((info) => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.max)(info.lengths)));
        const formattedValue = (0,_formatCreditCardNumber_formatCreditCardNumber__WEBPACK_IMPORTED_MODULE_7__["default"])(value.replace(new RegExp(separator, 'g'), '').slice(0, maxLength), separator);
        if (selectionEnd === value.length && value.length < formattedValue.length) {
            nextSelectionEndRef.current = formattedValue.length;
        }
        else {
            nextSelectionEndRef.current = selectionEnd || 0;
        }
        void form.setFieldValue(name, formattedValue);
    }, [field, form]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, field, { additionalClassName: "has-icon", autoComplete: "cc-number", id: field.name, onChange: handleChange, ref: inputRef, type: "tel" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};
const CreditCardNumberField = ({ name }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(({ field, form }) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CreditCardNumberInput, { field: field, form: form })), []);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_number_label" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "form-field--ccNumber", input: renderInput, labelContent: labelContent, name: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(CreditCardNumberField));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/CreditCardValidation/CreditCardValidation.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardValidation/CreditCardValidation.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/instrument-utils/src/creditCard/CreditCardNumberField/CreditCardNumberField.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./packages/instrument-utils/src/creditCard/CreditCardCodeField.tsx");



const CreditCardValidation = ({ shouldShowNumberField, shouldShowCardCodeField, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    shouldShowNumberField && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_title_text" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_trusted_shipping_address_text" }))),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields" },
        shouldShowNumberField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "ccNumber" }),
        shouldShowCardCodeField && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "ccCvv" }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCardValidation);


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/configureCardValidator.ts":
/*!****************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/configureCardValidator.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ configureCardValidator)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);

function configureCardValidator() {
    const discoverInfo = card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.getTypeInfo('discover');
    const visaInfo = card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.getTypeInfo('visa');
    // Need to support 13 digit PAN because some gateways only provide test credit card numbers in this format.
    card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.updateCard('visa', {
        lengths: [13, ...(visaInfo.lengths || [])],
    });
    // Add support for 8-BIN Discover Cards.
    card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.updateCard('discover', {
        patterns: [...(discoverInfo.patterns || []), [810, 817]],
    });
    // Add support for Mada-BIN Cards.
    card_validator__WEBPACK_IMPORTED_MODULE_0__.creditCardType.addCard({
        niceType: 'Mada',
        type: 'mada',
        patterns: [
            400861, 401757, 407197, 407395, 409201, 410685, 412565, 417633, 419593, 422817, 422818,
            422819, 428331, 428671, 428672, 428673, 431361, 432328, 434107, 439954, 440533, 440647,
            440795, 445564, 446393, 446404, 446672, 455036, 455708, 457865, 458456, 462220, 468540,
            468541, 468542, 468543, 483010, 483011, 483012, 484783, 486094, 486095, 486096, 489317,
            489318, 489319, 493428, 504300, 506968, 508160, 513213, 520058, 521076, 524130, 524514,
            529415, 529741, 530060, 530906, 531095, 531196, 532013, 535825, 535989, 536023, 537767,
            539931, 543085, 543357, 549760, 554180, 557606, 558848, 585265, 588845, 588846, 588847,
            588848, 588849, 588850, 588851, 588982, 588983, 589005, 589206, 604906, 605141, 636120,
            968201, 968202, 968203, 968204, 968205, 968206, 968207, 968208, 968209, 968210, 968211,
        ],
        gaps: [4, 8, 12],
        lengths: [16, 18, 19],
        code: {
            name: 'CVV',
            size: 3,
        },
    });
}


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/formatCreditCardExpiryDate/formatCreditCardExpiryDate.ts":
/*!***********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/formatCreditCardExpiryDate/formatCreditCardExpiryDate.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatCreditCardExpiryDate)
/* harmony export */ });
function formatCreditCardExpiryDate(value) {
    const separator = '/';
    const [month = '', year = ''] = value.split(new RegExp(`\\s*${separator}\\s*`));
    const trimmedMonth = month.slice(0, 2);
    const trimmedYear = year.length === 4 ? year.slice(-2) : year ? year.slice(0, 2) : month.slice(2);
    // i.e.: '1'
    if (value.length < 2) {
        return month;
    }
    // ie.: '10 /' (without trailing space)
    if (value.length > 3 && !trimmedYear) {
        return trimmedMonth;
    }
    return `${trimmedMonth} / ${trimmedYear}`;
}


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/formatCreditCardNumber/formatCreditCardNumber.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/formatCreditCardNumber/formatCreditCardNumber.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatCreditCardNumber)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unformatCreditCardNumber_unformatCreditCardNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unformatCreditCardNumber/unformatCreditCardNumber */ "./packages/instrument-utils/src/creditCard/unformatCreditCardNumber/unformatCreditCardNumber.ts");


function formatCreditCardNumber(value, separator = ' ') {
    const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(value);
    if (!card) {
        return value;
    }
    const unformattedValue = (0,_unformatCreditCardNumber_unformatCreditCardNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(value, separator);
    return card.gaps
        .filter((gapIndex) => unformattedValue.length > gapIndex)
        .reduce((output, gapIndex, index) => [output.slice(0, gapIndex + index), output.slice(gapIndex + index)].join(separator), unformattedValue);
}


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/getCreditCardValidationSchema/getCreditCardValidationSchema.ts":
/*!*****************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/getCreditCardValidationSchema/getCreditCardValidationSchema.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getCreditCardValidationSchema({ isCardCodeRequired, language, }) {
    const schema = {
        ccCustomerCode: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)(),
        ccCvv: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)(),
        ccExpiry: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .required(language.translate('payment.credit_card_expiration_required_error'))
            .test({
            message: language.translate('payment.credit_card_expiration_invalid_error'),
            test: (value) => (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.expirationDate)(value).isValid,
        }),
        ccName: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .max(200)
            .required(language.translate('payment.credit_card_name_required_error')),
        ccNumber: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .required(language.translate('payment.credit_card_number_required_error'))
            .test({
            message: language.translate('payment.credit_card_number_invalid_error'),
            test: (value) => (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.number)(value).isValid,
        }),
    };
    if (isCardCodeRequired) {
        schema.ccCvv = (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)()
            .required(language.translate('payment.credit_card_cvv_required_error'))
            .test({
            message: language.translate('payment.credit_card_cvv_invalid_error'),
            test(value) {
                const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.number)(this.parent.ccNumber);
                return (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.cvv)(value, card && card.code ? card.code.size : undefined).isValid;
            },
        });
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_2__.object)(schema);
}));


/***/ }),

/***/ "./packages/instrument-utils/src/creditCard/unformatCreditCardNumber/unformatCreditCardNumber.ts":
/*!*******************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/unformatCreditCardNumber/unformatCreditCardNumber.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unformatCreditCardNumber)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);

function unformatCreditCardNumber(value, separator = ' ') {
    const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(value);
    if (!card) {
        return value;
    }
    return value.replace(new RegExp(separator, 'g'), '');
}


/***/ }),

/***/ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts":
/*!***********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInstrumentFeatureAvailable)
/* harmony export */ });
function isInstrumentFeatureAvailable({ config, customer, isUsingMultiShipping, paymentMethod, }) {
    if (!config.checkoutSettings.isCardVaultingEnabled ||
        !paymentMethod.config.isVaultingEnabled ||
        customer.isGuest ||
        isUsingMultiShipping) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./packages/instrument-utils/src/storedInstrument/getInstrumentValidationSchema/getInstrumentValidationSchema.ts":
/*!***********************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/getInstrumentValidationSchema/getInstrumentValidationSchema.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! credit-card-type */ "./node_modules/credit-card-type/index.js");
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(credit_card_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./packages/instrument-utils/src/storedInstrument/mapFromInstrumentCardType/mapFromInstrumentCardType.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getInstrumentValidationSchema({ instrumentBrand, instrumentLast4, isCardCodeRequired, isCardNumberRequired, language, }) {
    const schema = {
        instrumentId: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required(),
    };
    if (isCardCodeRequired) {
        schema.ccCvv = (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)()
            .required(language.translate('payment.credit_card_cvv_required_error'))
            .test({
            message: language.translate('payment.credit_card_cvv_invalid_error'),
            test(value = '') {
                const cardType = (0,___WEBPACK_IMPORTED_MODULE_4__["default"])(instrumentBrand);
                const cardInfo = credit_card_type__WEBPACK_IMPORTED_MODULE_2___default().getTypeInfo(cardType);
                return (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.cvv)(value, cardInfo && cardInfo.code ? cardInfo.code.size : undefined)
                    .isValid;
            },
        });
    }
    if (isCardNumberRequired) {
        schema.ccNumber = (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)()
            .required(language.translate('payment.credit_card_number_required_error'))
            .test({
            message: language.translate('payment.credit_card_number_invalid_error'),
            test: (value = '') => (0,card_validator__WEBPACK_IMPORTED_MODULE_1__.number)(value).isValid,
        })
            .test({
            message: language.translate('payment.credit_card_number_mismatch_error'),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            test: (value = '') => value.slice(-instrumentLast4.length) === instrumentLast4,
        });
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_3__.object)(schema);
}));


/***/ }),

/***/ "./packages/payment-integration-api/src/CaptureMessageComponent.tsx":
/*!**************************************************************************!*\
  !*** ./packages/payment-integration-api/src/CaptureMessageComponent.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureMessageComponent: () => (/* binding */ CaptureMessageComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");


const CaptureMessageComponent = ({ message }) => {
    const { errorLogger } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!message || !errorLogger) {
            return;
        }
        if (errorLogger.logMessage) {
            errorLogger.logMessage(message);
        }
        else {
            // eslint-disable-next-line no-console
            console.log(`checkout-js attempted to log the following message: "${message}", but no Sentry logger is configured.`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);
    return null;
};


/***/ })

}]);
//# sourceMappingURL=packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx.js.map