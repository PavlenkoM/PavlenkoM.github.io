"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"],{

/***/ "./packages/hosted-widget-integration/src/EditButton.tsx":
/*!***************************************************************!*\
  !*** ./packages/hosted-widget-integration/src/EditButton.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditButton: () => (/* binding */ EditButton)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");




const EditButton = ({ buttonId, shouldShowEditButton }) => {
    if (shouldShowEditButton) {
        const translatedString = react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "remote.select_different_card_action" });
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('stepHeader', 'widget-link-amazonpay'), id: buttonId, onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(), type: "button" }, translatedString)));
    }
    return null;
};


/***/ }),

/***/ "./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/hosted-widget-integration/src/HostedWidgetPaymentComponent.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isBankInstrument/isBankInstrument.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/guards/isCardInstrument/isCardInstrument.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/AccountInstrumentFieldset/AccountInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/CardInstrumentFieldset/CardInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _EditButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditButton */ "./packages/hosted-widget-integration/src/EditButton.tsx");
/* harmony import */ var _PaymentDescriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PaymentDescriptor */ "./packages/hosted-widget-integration/src/PaymentDescriptor.tsx");
/* harmony import */ var _PaymentWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PaymentWidget */ "./packages/hosted-widget-integration/src/PaymentWidget.tsx");








const HostedWidgetPaymentComponent = ({ instruments, hideWidget = false, isInitializing = false, isAccountInstrument, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, isLoadingInstruments, shouldHideInstrumentExpiryDate = false, shouldShow = true, hideVerificationFields, method, storedCardValidationSchema, isPaymentDataRequired, setValidationSchema, loadInstruments, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, deinitializeCustomer, deinitializePayment, setSubmit, initializeCustomer, initializePayment, signInCustomer, isSignedIn, isSignInRequired, isInstrumentCardNumberRequired, validateInstrument, containerId, hideContentWhenSignedOut = false, renderCustomPaymentForm, additionalContainerClassName, shouldRenderCustomInstrument = false, paymentDescriptor, shouldShowDescriptor, shouldShowEditButton, buttonId, setFieldValue, }) => {
    const [isAddingNewCard, setIsAddingNewCard] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selectedInstrumentId, setSelectedInstrumentId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
    const instrumentsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(instruments);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        instrumentsRef.current = instruments;
    }, [instruments]);
    const getDefaultInstrumentId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        if (isAddingNewCard) {
            return undefined;
        }
        const defaultInstrument = instrumentsRef.current.find((instrument) => instrument.defaultInstrument) ||
            instrumentsRef.current[0];
        return defaultInstrument ? defaultInstrument.bigpayToken : undefined;
    }, [isAddingNewCard]);
    const getSelectedInstrument = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        const currentSelectedId = selectedInstrumentId || getDefaultInstrumentId();
        return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(instrumentsRef.current, { bigpayToken: currentSelectedId });
    }, [selectedInstrumentId, getDefaultInstrumentId]);
    const getValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        if (!isPaymentDataRequired) {
            return null;
        }
        const currentSelectedInstrument = getSelectedInstrument();
        if (isInstrumentFeatureAvailableProp && currentSelectedInstrument) {
            return storedCardValidationSchema || null;
        }
        return null;
    }, [
        getSelectedInstrument,
        isInstrumentFeatureAvailableProp,
        isPaymentDataRequired,
        storedCardValidationSchema,
    ]);
    const getSelectedBankAccountInstrument = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((addingNew, currentSelectedInstrument) => {
        return !addingNew && (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__.isBankAccountInstrument)(currentSelectedInstrument)
            ? currentSelectedInstrument
            : undefined;
    }, []);
    const handleDeleteInstrument = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((id) => {
        if (instruments.length === 0) {
            setIsAddingNewCard(true);
            setSelectedInstrumentId(undefined);
            setFieldValue('instrumentId', '');
            return;
        }
        if (selectedInstrumentId === id) {
            const nextId = getDefaultInstrumentId();
            setSelectedInstrumentId(nextId);
            setFieldValue('instrumentId', nextId);
        }
    }, [instruments, selectedInstrumentId, getDefaultInstrumentId]);
    const handleUseNewCard = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        setIsAddingNewCard(true);
        setSelectedInstrumentId(undefined);
        if (deinitializePayment) {
            yield deinitializePayment({
                gatewayId: method.gateway,
                methodId: method.id,
            });
        }
        if (initializePayment) {
            yield initializePayment({
                gatewayId: method.gateway,
                methodId: method.id,
            });
        }
    }), [method, deinitializePayment, initializePayment]);
    const handleSelectInstrument = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((id) => {
        setIsAddingNewCard(false);
        setSelectedInstrumentId(id);
    }, []);
    const getValidateInstrument = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        const currentSelectedId = selectedInstrumentId || getDefaultInstrumentId();
        const currentSelectedInstrument = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(instruments, { bigpayToken: currentSelectedId });
        if (currentSelectedInstrument) {
            (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(currentSelectedInstrument);
            const shouldShowNumberField = isInstrumentCardNumberRequired(currentSelectedInstrument, method);
            if (hideVerificationFields) {
                return undefined;
            }
            if (validateInstrument) {
                return validateInstrument(shouldShowNumberField, currentSelectedInstrument);
            }
        }
        return undefined;
    }, [
        selectedInstrumentId,
        getDefaultInstrumentId,
        instruments,
        method,
        hideVerificationFields,
        validateInstrument,
    ]);
    const initializeMethod = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const currentInstruments = instrumentsRef.current;
        if (!isPaymentDataRequired) {
            setSubmit(method, null);
            return;
        }
        if (isSignInRequired && !isSignedIn) {
            setSubmit(method, signInCustomer || null);
            if (initializeCustomer) {
                return initializeCustomer({ methodId: method.id });
            }
            return;
        }
        setSubmit(method, null);
        let selectedCardInstrument;
        if (!isAddingNewCard) {
            const currentSelectedInstrumentId = selectedInstrumentId || getDefaultInstrumentId();
            const maybeInstrument = currentInstruments.find((instrument) => instrument.bigpayToken === currentSelectedInstrumentId) || currentInstruments[0];
            if (maybeInstrument && (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_4__.isCardInstrument)(maybeInstrument)) {
                selectedCardInstrument = maybeInstrument;
            }
        }
        if (initializePayment) {
            return initializePayment({ gatewayId: method.gateway, methodId: method.id }, selectedCardInstrument);
        }
    });
    // Below values are for lower level components
    const effectiveSelectedInstrumentId = selectedInstrumentId || getDefaultInstrumentId();
    const selectedInstrument = effectiveSelectedInstrumentId
        ? instruments.find((i) => i.bigpayToken === effectiveSelectedInstrumentId) || instruments[0]
        : instruments[0];
    const cardInstruments = instruments.filter((i) => !(0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__.isBankAccountInstrument)(i));
    const accountInstruments = instruments.filter((i) => (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__.isBankAccountInstrument)(i));
    const shouldShowInstrumentFieldset = isInstrumentFeatureAvailableProp && instruments.length > 0;
    const shouldShowCreditCardFieldset = !shouldShowInstrumentFieldset || isAddingNewCard;
    const isLoading = (isInitializing || isLoadingInstruments) && !hideWidget;
    const selectedAccountInstrument = selectedInstrument
        ? getSelectedBankAccountInstrument(isAddingNewCard, selectedInstrument)
        : undefined;
    const shouldShowAccountInstrument = instruments[0] && (0,_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_3__.isBankAccountInstrument)(instruments[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            setValidationSchema(method, getValidationSchema());
            try {
                if (isInstrumentFeatureAvailableProp) {
                    yield (loadInstruments === null || loadInstruments === void 0 ? void 0 : loadInstruments());
                }
                yield initializeMethod();
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void init();
        return () => {
            const deInit = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                setValidationSchema(method, null);
                setSubmit(method, null);
                try {
                    if (deinitializePayment) {
                        yield deinitializePayment({
                            gatewayId: method.gateway,
                            methodId: method.id,
                        });
                    }
                    if (deinitializeCustomer) {
                        yield deinitializeCustomer({ methodId: method.id });
                    }
                }
                catch (error) {
                    if (error instanceof Error) {
                        onUnhandledError(error);
                    }
                }
            });
            void deInit();
        };
    }, []);
    const isInitialRenderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);
    const instrumentsLength = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(instruments.length);
    const isPaymentDataRequiredRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isPaymentDataRequired);
    const selectedInstrumentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(selectedInstrumentId);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (isInitialRenderRef.current) {
            isInitialRenderRef.current = false;
            return;
        }
        setValidationSchema(method, getValidationSchema());
        const reInit = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                if (deinitializePayment) {
                    yield deinitializePayment({
                        gatewayId: method.gateway,
                        methodId: method.id,
                    });
                }
                yield initializeMethod();
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        if (selectedInstrumentIdRef.current !== selectedInstrumentId ||
            (Number(instrumentsLength.current) > 0 && instruments.length === 0) ||
            isPaymentDataRequiredRef.current !== isPaymentDataRequired) {
            selectedInstrumentIdRef.current = selectedInstrumentId;
            instrumentsLength.current = instruments.length;
            isPaymentDataRequiredRef.current = isPaymentDataRequired;
            void reInit();
        }
    }, [selectedInstrumentId, instruments, isPaymentDataRequired]);
    if (!shouldShow) {
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { style: { display: 'none' } });
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "paymentMethod--hosted" },
            shouldShowAccountInstrument && shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_5__["default"], { instruments: accountInstruments, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewCard, selectedInstrument: selectedAccountInstrument })),
            !shouldShowAccountInstrument && shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_6__["default"], { instruments: cardInstruments, onDeleteInstrument: handleDeleteInstrument, onSelectInstrument: handleSelectInstrument, onUseNewInstrument: handleUseNewCard, selectedInstrumentId: effectiveSelectedInstrumentId, shouldHideExpiryDate: shouldHideInstrumentExpiryDate, validateInstrument: getValidateInstrument() })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PaymentDescriptor__WEBPACK_IMPORTED_MODULE_10__.PaymentDescriptor, { paymentDescriptor: paymentDescriptor, shouldShowDescriptor: shouldShowDescriptor }),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PaymentWidget__WEBPACK_IMPORTED_MODULE_11__.PaymentWidget, { additionalContainerClassName: additionalContainerClassName, containerId: containerId, hideContentWhenSignedOut: hideContentWhenSignedOut, hideWidget: hideWidget, isSignInRequired: isSignInRequired, isSignedIn: isSignedIn, method: method, renderCustomPaymentForm: renderCustomPaymentForm, shouldRenderCustomInstrument: shouldRenderCustomInstrument, shouldShowCreditCardFieldset: shouldShowCreditCardFieldset }),
            isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_7__["default"], { instrumentId: effectiveSelectedInstrumentId, instruments: instruments, isAccountInstrument: Boolean(isAccountInstrument || shouldShowAccountInstrument) })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_EditButton__WEBPACK_IMPORTED_MODULE_9__.EditButton, { buttonId: buttonId, shouldShowEditButton: shouldShowEditButton }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostedWidgetPaymentComponent);


/***/ }),

/***/ "./packages/hosted-widget-integration/src/PaymentDescriptor.tsx":
/*!**********************************************************************!*\
  !*** ./packages/hosted-widget-integration/src/PaymentDescriptor.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentDescriptor: () => (/* binding */ PaymentDescriptor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PaymentDescriptor = ({ shouldShowDescriptor, paymentDescriptor, }) => {
    if (shouldShowDescriptor && paymentDescriptor) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "payment-descriptor" }, paymentDescriptor);
    }
    return null;
};


/***/ }),

/***/ "./packages/hosted-widget-integration/src/PaymentWidget.tsx":
/*!******************************************************************!*\
  !*** ./packages/hosted-widget-integration/src/PaymentWidget.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentWidget: () => (/* binding */ PaymentWidget)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PaymentWidget = ({ additionalContainerClassName, containerId, hideContentWhenSignedOut, hideWidget, isSignInRequired, isSignedIn, method, renderCustomPaymentForm, shouldRenderCustomInstrument, shouldShowCreditCardFieldset, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('widget', `widget--${method.id}`, 'payment-widget', shouldRenderCustomInstrument ? '' : additionalContainerClassName), id: containerId, style: {
        display: (hideContentWhenSignedOut && isSignInRequired && !isSignedIn) ||
            !shouldShowCreditCardFieldset ||
            hideWidget
            ? 'none'
            : undefined,
    }, tabIndex: -1 }, shouldRenderCustomInstrument && renderCustomPaymentForm && renderCustomPaymentForm()));


/***/ })

}]);
//# sourceMappingURL=packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx.js.map