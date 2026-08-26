"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["hosted-payment-method"],{

/***/ "./packages/core/src/app/payment/paymentMethod/HostedPaymentMethod.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/HostedPaymentMethod.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_humm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/humm */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/humm.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offsite */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/offsite.js");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isInstrumentFeatureAvailable.ts");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentFieldset.tsx");
/* harmony import */ var _storedInstrument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../storedInstrument */ "./packages/core/src/app/payment/storedInstrument/isAccountInstrument.ts");
/* harmony import */ var _StoreInstrumentFieldset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../StoreInstrumentFieldset */ "./packages/core/src/app/payment/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx");
/* harmony import */ var _withPayment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../withPayment */ "./packages/core/src/app/payment/withPayment.tsx");













class HostedPaymentMethod extends react__WEBPACK_IMPORTED_MODULE_5__.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isAddingNewInstrument: false,
        };
        this.handleUseNewInstrument = () => {
            this.setState({
                isAddingNewInstrument: true,
                selectedInstrument: undefined,
            });
        };
        this.handleSelectInstrument = (id) => {
            const { instruments } = this.props;
            this.setState({
                isAddingNewInstrument: false,
                selectedInstrument: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.find)(instruments, { bigpayToken: id }),
            });
        };
    }
    componentDidMount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { initializePayment, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, loadInstruments, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_4__.noop, } = this.props;
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_humm__WEBPACK_IMPORTED_MODULE_1__.createHummPaymentStrategy, _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_2__.createOffsitePaymentStrategy],
                });
                if (isInstrumentFeatureAvailableProp) {
                    yield loadInstruments();
                }
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
    }
    componentWillUnmount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { deinitializePayment, method, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_4__.noop } = this.props;
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
    }
    render() {
        const { description, isInitializing = false, isLoadingInstruments, instruments, isNewAddress, isInstrumentFeatureAvailable: isInstrumentFeatureAvailableProp, } = this.props;
        const { selectedInstrument = this.getDefaultInstrument() } = this.state;
        const isLoading = isInitializing || isLoadingInstruments;
        const shouldShowInstrumentFieldset = isInstrumentFeatureAvailableProp && (instruments.length > 0 || isNewAddress);
        if (!description && !isInstrumentFeatureAvailableProp) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { hideContentWhenLoading: true, isLoading: isLoading },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", { className: "paymentMethod paymentMethod--hosted" },
                description,
                shouldShowInstrumentFieldset && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_storedInstrument__WEBPACK_IMPORTED_MODULE_11__["default"], { instruments: instruments, onSelectInstrument: this.handleSelectInstrument, onUseNewInstrument: this.handleUseNewInstrument, selectedInstrument: selectedInstrument })),
                isInstrumentFeatureAvailableProp && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_StoreInstrumentFieldset__WEBPACK_IMPORTED_MODULE_13__["default"], { instrumentId: selectedInstrument && selectedInstrument.bigpayToken, isAccountInstrument: true })))));
    }
    getDefaultInstrument() {
        const { isAddingNewInstrument } = this.state;
        const { instruments } = this.props;
        if (isAddingNewInstrument || !instruments.length) {
            return;
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.find)(instruments, { defaultInstrument: true }) || instruments[0];
    }
}
const mapFromCheckoutProps = () => {
    const filterAccountInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_3__.memoizeOne)((instruments = []) => instruments.filter(_storedInstrument__WEBPACK_IMPORTED_MODULE_12__["default"]));
    const filterTrustedInstruments = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_3__.memoizeOne)((instruments = []) => instruments.filter(({ trustedShippingAddress }) => trustedShippingAddress));
    return (context, props) => {
        const { method } = props;
        const { checkoutService, checkoutState } = context;
        const { data: { getCart, getConfig, getCustomer, getInstruments, isPaymentDataRequired, isPaymentDataSubmitted, }, statuses: { isLoadingInstruments }, } = checkoutState;
        const cart = getCart();
        const config = getConfig();
        const customer = getCustomer();
        if (!config || !cart || !customer || !method) {
            return null;
        }
        const currentMethodInstruments = filterAccountInstruments(getInstruments(method));
        const trustedInstruments = filterTrustedInstruments(currentMethodInstruments);
        return {
            instruments: trustedInstruments,
            isNewAddress: trustedInstruments.length === 0 && currentMethodInstruments.length > 0,
            isInstrumentFeatureAvailable: !isPaymentDataSubmitted(method.id, method.gateway) &&
                (0,_storedInstrument__WEBPACK_IMPORTED_MODULE_10__["default"])({
                    config,
                    customer,
                    paymentMethod: method,
                }),
            isLoadingInstruments: isLoadingInstruments(),
            isPaymentDataRequired: isPaymentDataRequired(),
            loadInstruments: checkoutService.loadInstruments,
        };
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_withPayment__WEBPACK_IMPORTED_MODULE_14__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_8__["default"])(mapFromCheckoutProps)(HostedPaymentMethod)))));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentFieldset.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/AccountInstrumentFieldset.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalTrigger.tsx");
/* harmony import */ var _AccountInstrumentSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccountInstrumentSelect */ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentSelect.tsx");
/* harmony import */ var _ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ManageInstrumentsModal */ "./packages/core/src/app/payment/storedInstrument/ManageInstrumentsModal.tsx");





const AccountInstrumentFieldset = ({ instruments, onSelectInstrument, onUseNewInstrument, selectedInstrument, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AccountInstrumentSelect__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, field, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrument && selectedInstrument.bigpayToken }))), [instruments, onSelectInstrument, onUseNewInstrument, selectedInstrument]);
    const renderModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ManageInstrumentsModal__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ instruments: instruments }, props))), [instruments]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "instrumentFieldset", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { hidden: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.account_instrument_text" })) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { modal: renderModal }, ({ onClick }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "instrumentModal-trigger", onClick: onClick, type: "button" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "payment.instrument_manage_button" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { name: "instrumentId", render: renderInput }),
        instruments.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "instrumentSelect-note" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.account_instrument_new_shipping_address" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(AccountInstrumentFieldset));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/AccountInstrumentSelect.tsx"
/*!************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/AccountInstrumentSelect.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/dropdown/DropdownTrigger.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconPaypal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconNewAccount.tsx");
/* harmony import */ var _isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isBankAccountInstrument */ "./packages/core/src/app/payment/storedInstrument/isBankAccountInstrument.ts");







class AccountInstrumentSelect extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
    componentDidMount() {
        const { selectedInstrumentId } = this.props;
        // FIXME: Used setTimeout here because setFieldValue call doesnot set value if called before formik is properly mounted.
        //        This ensures that update Field value is called after formik has mounted.
        // See GitHub issue: https://github.com/jaredpalmer/formik/issues/930
        setTimeout(() => this.updateFieldValue(selectedInstrumentId));
    }
    componentDidUpdate(prevProps) {
        const { selectedInstrumentId: prevSelectedInstrumentId } = prevProps;
        const { selectedInstrumentId } = this.props;
        if (prevSelectedInstrumentId !== selectedInstrumentId) {
            this.updateFieldValue(selectedInstrumentId);
        }
    }
    componentWillUnmount() {
        const { selectedInstrumentId, field } = this.props;
        if (field.value === '' && selectedInstrumentId !== undefined) {
            this.updateFieldValue();
        }
    }
    render() {
        const { field, instruments, onSelectInstrument, onUseNewInstrument, selectedInstrumentId } = this.props;
        const selectedInstrument = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(instruments, { bigpayToken: selectedInstrumentId });
        const { value } = field, otherFieldProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(field, ["value"]);
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { dropdown: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentMenu, { instruments: instruments, onSelectInstrument: onSelectInstrument, onUseNewInstrument: onUseNewInstrument, selectedInstrumentId: selectedInstrumentId }) },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentSelectButton, { instrument: selectedInstrument, testId: "instrument-select" }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", Object.assign({ type: "hidden", value: value || '' }, otherFieldProps)))));
    }
    updateFieldValue(instrumentId = '') {
        const { form, field } = this.props;
        form.setFieldValue(field.name, instrumentId);
    }
}
const AccountInstrumentMenu = ({ instruments, selectedInstrumentId, onSelectInstrument, onUseNewInstrument, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", { className: "instrumentSelect-dropdownMenu instrumentSelect-dropdownMenuNext dropdown-menu", "data-test": "instrument-select-menu" },
        instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('instrumentSelect-option dropdown-menu-item', {
                'instrumentSelect-option--selected': instrument.bigpayToken === selectedInstrumentId,
            }), key: instrument.bigpayToken },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentOption, { instrument: instrument, onClick: onSelectInstrument, testId: "instrument-select-option" })))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", { className: "instrumentSelect-option instrumentSelect-option--addNew dropdown-menu-item" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentUseNewButton, { onClick: onUseNewInstrument, testId: "instrument-select-option-use-new" }))));
};
const AccountInstrumentSelectButton = ({ instrument, testId, onClick, }) => {
    if (!instrument) {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentUseNewButton, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", testId: testId }));
    }
    return !(0,_isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__["default"])(instrument) ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentMenuItem, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", instrument: instrument, onClick: onClick, testId: testId })) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(BankInstrumentMenuItem, { className: "instrumentSelect-button optimizedCheckout-form-select dropdown-button form-input", instrument: instrument, onClick: onClick, testId: testId }));
};
const AccountInstrumentOption = ({ instrument, onClick = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, }) => {
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        onClick(instrument.bigpayToken);
    }, [onClick, instrument]);
    return !(0,_isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__["default"])(instrument) ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AccountInstrumentMenuItem, { instrument: instrument, onClick: handleClick, testId: "instrument-select-option" })) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(BankInstrumentMenuItem, { instrument: instrument, onClick: handleClick, testId: "instrument-select-option" }));
};
const AccountInstrumentMenuItem = ({ className, instrument: { externalId }, testId, onClick, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-details" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { additionalClassName: "accountIcon-icon", size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__.IconSize.Medium }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-account", "data-test": `${testId}-externalId` }, externalId))));
};
const BankInstrumentMenuItem = ({ className, instrument, testId, onClick, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-details" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-card" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { accountNumber: instrument.accountNumber }, id: "payment.instrument_account_number_ending" })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-issuer" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_issuer" }),
                ": ",
                instrument.issuer))));
};
const AccountInstrumentUseNewButton = ({ className, testId, onClick = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: className, "data-test": testId, onClick: onClick, type: "button" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-details instrumentSelect-details--addNew" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { additionalClassName: "accountIcon-icon", size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__.IconSize.Medium }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "instrumentSelect-account" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.account_instrument_add_action" })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountInstrumentSelect);


/***/ },

/***/ "./packages/hosted-payment-integration/src/HostedPaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/hosted-payment-integration/src/HostedPaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/afterpay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/afterpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/clearpay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/clearpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_sezzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/sezzle */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/sezzle.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_zip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/zip */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/zip.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");








const HostedPaymentMethod = ({ checkoutService, checkoutState, method, onUnhandledError, language, paymentForm, }) => {
    const initializeHostedPaymentMethod = (options) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        return checkoutService.initializePayment(Object.assign(Object.assign({}, options), { integrations: [
                _bigcommerce_checkout_sdk_integrations_zip__WEBPACK_IMPORTED_MODULE_4__.createZipPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__.createAfterpayPaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_sezzle__WEBPACK_IMPORTED_MODULE_3__.createSezzlePaymentStrategy,
                _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_2__.createClearpayPaymentStrategy,
            ] }));
    });
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components__WEBPACK_IMPORTED_MODULE_7__["default"], { checkoutService: checkoutService, checkoutState: checkoutState, deinitializePayment: checkoutService.deinitializePayment, initializePayment: initializeHostedPaymentMethod, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_6__["default"])(HostedPaymentMethod, [
    { gateway: 'afterpay' },
    { id: 'afterpay' },
    { gateway: 'clearpay' },
    { id: 'clearpay' },
    { id: 'quadpay' },
    { id: 'sezzle' },
    { id: 'zip' },
]));


/***/ },

/***/ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/hosted-payment-integration/src/index.ts"
/*!**********************************************************!*\
  !*** ./packages/hosted-payment-integration/src/index.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HostedPaymentComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   HostedPaymentMethod: () => (/* reexport safe */ _HostedPaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _HostedPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HostedPaymentMethod */ "./packages/hosted-payment-integration/src/HostedPaymentMethod.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./packages/hosted-payment-integration/src/components/HostedPaymentComponent.tsx");




/***/ },

/***/ "./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts"
/*!***********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isInstrumentFeatureAvailable/isInstrumentFeatureAvailable.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }

}]);
//# sourceMappingURL=hosted-payment-method.js.map