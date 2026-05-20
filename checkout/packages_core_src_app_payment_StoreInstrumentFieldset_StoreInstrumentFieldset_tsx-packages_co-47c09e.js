"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-47c09e"],{

/***/ "./packages/core/src/app/payment/StoreInstrumentFieldset/InstrumentStorageField.tsx"
/*!******************************************************************************************!*\
  !*** ./packages/core/src/app/payment/StoreInstrumentFieldset/InstrumentStorageField.tsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");



const InstrumentStorageField = ({ isAccountInstrument, }) => {
    const translationId = isAccountInstrument
        ? 'payment.account_instrument_save_payment_method_label'
        : 'payment.instrument_save_payment_method_label';
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: translationId }), [translationId]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "form-field--saveInstrument", labelContent: labelContent, name: "shouldSaveInstrument" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(InstrumentStorageField));


/***/ },

/***/ "./packages/core/src/app/payment/StoreInstrumentFieldset/InstrumentStoreAsDefaultField.tsx"
/*!*************************************************************************************************!*\
  !*** ./packages/core/src/app/payment/StoreInstrumentFieldset/InstrumentStoreAsDefaultField.tsx ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");



const InstrumentStoreAsDefaultField = ({ isAccountInstrument, disabled = false, }) => {
    const translationId = isAccountInstrument
        ? 'payment.account_instrument_save_as_default_payment_method_label'
        : 'payment.instrument_save_as_default_payment_method_label';
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: translationId }), [translationId]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: "form-field--setAsDefaultInstrument", disabled: disabled, labelContent: labelContent, name: "shouldSetAsDefaultInstrument" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(InstrumentStoreAsDefaultField));


/***/ },

/***/ "./packages/core/src/app/payment/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx"
/*!*******************************************************************************************!*\
  !*** ./packages/core/src/app/payment/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _InstrumentStorageField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InstrumentStorageField */ "./packages/core/src/app/payment/StoreInstrumentFieldset/InstrumentStorageField.tsx");
/* harmony import */ var _InstrumentStoreAsDefaultField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InstrumentStoreAsDefaultField */ "./packages/core/src/app/payment/StoreInstrumentFieldset/InstrumentStoreAsDefaultField.tsx");







const StoreInstrumentFieldset = ({ showSave, showSetAsDefault, isAccountInstrument = false, setAsDefaultEnabled }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { hidden: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_storage_options_text" })) },
    showSave && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InstrumentStorageField__WEBPACK_IMPORTED_MODULE_6__["default"], { isAccountInstrument: isAccountInstrument }),
    showSetAsDefault && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InstrumentStoreAsDefaultField__WEBPACK_IMPORTED_MODULE_7__["default"], { disabled: !setAsDefaultEnabled, isAccountInstrument: isAccountInstrument }))));
const mapToProps = (context, props) => {
    const { checkoutState: { data: { getInstruments }, }, } = context;
    const allInstruments = getInstruments();
    const { formik: { values: { shouldSaveInstrument: saveIsChecked }, }, instrumentId, } = props;
    const addingNewInstrument = !instrumentId;
    const hasAnyOtherInstruments = !!allInstruments && allInstruments.length > 0;
    const instrument = allInstruments && allInstruments.find(({ bigpayToken }) => bigpayToken === instrumentId);
    return Object.assign(Object.assign({}, props), { showSave: addingNewInstrument, showSetAsDefault: (addingNewInstrument && hasAnyOtherInstruments) ||
            Boolean(instrument && !instrument.defaultInstrument), setAsDefaultEnabled: !addingNewInstrument || saveIsChecked });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_4__["default"])(mapToProps)(StoreInstrumentFieldset)));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/ManageAccountInstrumentsTable.tsx"
/*!******************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/ManageAccountInstrumentsTable.tsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconPaypal.tsx");
/* harmony import */ var _isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBankAccountInstrument */ "./packages/core/src/app/payment/storedInstrument/isBankAccountInstrument.ts");




const ManageInstrumentsTable = ({ instruments, isDeletingInstrument, onDeleteInstrument, }) => {
    if (instruments.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_modal_empty_text" })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { isLoading: isDeletingInstrument },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "table" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", { className: "table-thead" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_payment_method_text" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: "table-tbody" }, instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ManageInstrumentsRow, { instrument: instrument, key: instrument.bigpayToken, onDeleteInstrument: onDeleteInstrument })))))));
};
const ManageInstrumentsRow = ({ instrument, onDeleteInstrument, }) => {
    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        onDeleteInstrument(instrument.bigpayToken);
    }, [instrument, onDeleteInstrument]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { "data-test": "manage-instrument-accountExternalId" }, (0,_isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_5__["default"])(instrument) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "instrumentModal-instrumentAccountNumber" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_ending_in_text" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ` ${instrument.accountNumber}`))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "accountIcon-icon", size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__.IconSize.Medium }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "instrumentModal-instrumentAccountExternalId" }, instrument.externalId)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "button button--tiny table-actionButton optimizedCheckout-buttonSecondary", "data-test": "manage-instrument-delete-button", onClick: handleDelete, type: "button" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.delete_action" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ManageInstrumentsTable));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/ManageCardInstrumentsTable.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/ManageCardInstrumentsTable.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! credit-card-type */ "./node_modules/credit-card-type/index.js");
/* harmony import */ var credit_card_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(credit_card_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/CreditCardIcon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapFromInstrumentCardType */ "./packages/core/src/app/payment/storedInstrument/mapFromInstrumentCardType.ts");







const ManageCardInstrumentsTable = ({ instruments, isDeletingInstrument, onDeleteInstrument, }) => {
    if (instruments.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_modal_empty_text" })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: isDeletingInstrument },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", { className: "table" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", { className: "table-thead" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_table_header_payment_method_text" })),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_table_header_ending_in_text" })),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_table_header_expiry_date_text" })),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null))),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", { className: "table-tbody" }, instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ManageInstrumentsRow, { instrument: instrument, key: instrument.bigpayToken, onDeleteInstrument: onDeleteInstrument })))))));
};
const ManageInstrumentsRow = ({ instrument, onDeleteInstrument, }) => {
    const cardType = (0,_mapFromInstrumentCardType__WEBPACK_IMPORTED_MODULE_7__["default"])(instrument.brand);
    const cardInfo = credit_card_type__WEBPACK_IMPORTED_MODULE_2___default().getTypeInfo(cardType);
    const isExpired = !(0,card_validator__WEBPACK_IMPORTED_MODULE_0__.expirationDate)({
        month: instrument.expiryMonth,
        year: instrument.expiryYear,
    }).isValid;
    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
        onDeleteInstrument(instrument.bigpayToken);
    }, [instrument, onDeleteInstrument]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", { "data-test": "manage-instrument-cardType" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { cardType: cardType }),
            cardInfo && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", { className: "instrumentModal-instrumentCardType" }, cardInfo.niceType))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", { "data-test": "manage-instrument-last4" }, instrument.last4),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'instrumentModal-instrumentExpiry--expired': isExpired }), "data-test": "manage-instrument-expiry" }, `${instrument.expiryMonth}/${instrument.expiryYear}`),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", { className: "button button--tiny table-actionButton optimizedCheckout-buttonSecondary", "data-test": "manage-instrument-delete-button", onClick: handleDelete, type: "button" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "common.delete_action" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(ManageCardInstrumentsTable));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/ManageInstrumentsAlert.tsx"
/*!***********************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/ManageInstrumentsAlert.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/alert/Alert.tsx");



const ManageInstrumentsAlert = ({ error }) => {
    const { status } = error;
    if (status === 401) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { type: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.AlertType.Error },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_delete_auth_error" })));
    }
    if (status >= 400 && status < 500) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { type: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.AlertType.Error },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_delete_client_error" })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { type: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.AlertType.Error },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_delete_server_error" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ManageInstrumentsAlert));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/ManageInstrumentsModal.tsx"
/*!***********************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/ManageInstrumentsModal.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapFromCheckoutProps: () => (/* binding */ mapFromCheckoutProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalHeader.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _isAccountInstrument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isAccountInstrument */ "./packages/core/src/app/payment/storedInstrument/isAccountInstrument.ts");
/* harmony import */ var _isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isBankAccountInstrument */ "./packages/core/src/app/payment/storedInstrument/isBankAccountInstrument.ts");
/* harmony import */ var _isCardInstrument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isCardInstrument */ "./packages/core/src/app/payment/storedInstrument/isCardInstrument.ts");
/* harmony import */ var _ManageAccountInstrumentsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ManageAccountInstrumentsTable */ "./packages/core/src/app/payment/storedInstrument/ManageAccountInstrumentsTable.tsx");
/* harmony import */ var _ManageCardInstrumentsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ManageCardInstrumentsTable */ "./packages/core/src/app/payment/storedInstrument/ManageCardInstrumentsTable.tsx");
/* harmony import */ var _ManageInstrumentsAlert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ManageInstrumentsAlert */ "./packages/core/src/app/payment/storedInstrument/ManageInstrumentsAlert.tsx");












class ManageInstrumentsModal extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isConfirmingDelete: false,
        };
        this.handleAfterOpen = () => {
            const { onAfterOpen } = this.props;
            this.setState({
                isConfirmingDelete: false,
            }, onAfterOpen);
        };
        this.handleCancel = () => {
            const { clearError, deleteInstrumentError } = this.props;
            if (deleteInstrumentError) {
                clearError(deleteInstrumentError);
            }
            this.setState({
                isConfirmingDelete: false,
            });
        };
        this.handleConfirmDelete = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { deleteInstrument, onDeleteInstrument = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onDeleteInstrumentError = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onRequestClose = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, } = this.props;
            const { selectedInstrumentId } = this.state;
            if (!selectedInstrumentId) {
                return;
            }
            try {
                yield deleteInstrument(selectedInstrumentId);
                onDeleteInstrument(selectedInstrumentId);
                onRequestClose();
            }
            catch (error) {
                onDeleteInstrumentError(error);
            }
        });
        this.handleDeleteInstrument = (id) => {
            this.setState({
                isConfirmingDelete: true,
                selectedInstrumentId: id,
            });
        };
    }
    render() {
        const { deleteInstrumentError, isOpen, onRequestClose } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { closeButtonLabel: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "common.close_action" }), footer: this.renderFooter(), header: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.instrument_manage_modal_title_text" })), isOpen: isOpen, onAfterOpen: this.handleAfterOpen, onRequestClose: onRequestClose },
            deleteInstrumentError && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageInstrumentsAlert__WEBPACK_IMPORTED_MODULE_13__["default"], { error: deleteInstrumentError }),
            this.renderContent()));
    }
    renderContent() {
        const { instruments, isDeletingInstrument } = this.props;
        const { isConfirmingDelete } = this.state;
        if (isConfirmingDelete) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { "data-test": "manage-instrument-confirmation-view" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.instrument_manage_modal_confirmation_label" }))));
        }
        const cardInstruments = instruments.filter(_isCardInstrument__WEBPACK_IMPORTED_MODULE_10__["default"]);
        const bankInstruments = instruments.filter(_isBankAccountInstrument__WEBPACK_IMPORTED_MODULE_9__["default"]);
        const accountInstruments = instruments.filter(_isAccountInstrument__WEBPACK_IMPORTED_MODULE_8__["default"]);
        const bankAndAccountInstruments = [...bankInstruments, ...accountInstruments];
        if (bankAndAccountInstruments.length) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageAccountInstrumentsTable__WEBPACK_IMPORTED_MODULE_11__["default"], { instruments: bankAndAccountInstruments, isDeletingInstrument: isDeletingInstrument, onDeleteInstrument: this.handleDeleteInstrument }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageCardInstrumentsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { instruments: cardInstruments, isDeletingInstrument: isDeletingInstrument, onDeleteInstrument: this.handleDeleteInstrument }));
    }
    renderFooter() {
        const { isDeletingInstrument, isLoadingInstruments, onRequestClose } = this.props;
        const { isConfirmingDelete } = this.state;
        if (isConfirmingDelete) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: this.handleCancel, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonSize.Small, testId: "manage-instrument-cancel-button" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "common.cancel_action" })),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { disabled: isDeletingInstrument || isLoadingInstruments, onClick: this.handleConfirmDelete, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonSize.Small, testId: "manage-instrument-confirm-button", variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonVariant.Primary },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.instrument_manage_modal_confirmation_action" }))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: onRequestClose, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonSize.Small, testId: "manage-instrument-close-button" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "common.close_action" })));
    }
}
function mapFromCheckoutProps({ checkoutService, checkoutState, }) {
    const { errors: { getDeleteInstrumentError }, statuses: { isDeletingInstrument, isLoadingInstruments }, } = checkoutState;
    return {
        clearError: checkoutService.clearError,
        deleteInstrument: checkoutService.deleteInstrument,
        deleteInstrumentError: getDeleteInstrumentError(),
        isDeletingInstrument: isDeletingInstrument(),
        isLoadingInstruments: isLoadingInstruments(),
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_7__["default"])(mapFromCheckoutProps)(ManageInstrumentsModal));


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isAccountInstrument.ts"
/*!*******************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isAccountInstrument.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAccountInstrument)
/* harmony export */ });
function isAccountInstrument(instrument) {
    return instrument.type === 'account';
}


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isBankAccountInstrument.ts"
/*!***********************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isBankAccountInstrument.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBankAccountInstrument)
/* harmony export */ });
function isBankAccountInstrument(instrument) {
    return instrument.type === 'bank';
}


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isCardInstrument.ts"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isCardInstrument.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCardInstrument)
/* harmony export */ });
function isCardInstrument(instrument) {
    return instrument.type === 'card';
}


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/isInstrumentFeatureAvailable.ts"
/*!****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/isInstrumentFeatureAvailable.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInstrumentFeatureAvailable)
/* harmony export */ });
function isInstrumentFeatureAvailable({ config, customer, paymentMethod, shouldSavingCardsBeEnabled = true, }) {
    const { checkoutSettings } = config;
    if (isVaultingNotEnabled(checkoutSettings, paymentMethod.config) ||
        customer.isGuest ||
        !shouldSavingCardsBeEnabled) {
        return false;
    }
    return true;
}
function isVaultingNotEnabled(checkoutSettings, paymentMethodConfig) {
    return !checkoutSettings.isCardVaultingEnabled || !paymentMethodConfig.isVaultingEnabled;
}


/***/ },

/***/ "./packages/core/src/app/payment/storedInstrument/mapFromInstrumentCardType.ts"
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/payment/storedInstrument/mapFromInstrumentCardType.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapFromInstrumentCardType)
/* harmony export */ });
function mapFromInstrumentCardType(type) {
    switch (type) {
        case 'amex':
        case 'american_express':
            return 'american-express';
        case 'diners':
        case 'diners_club':
            return 'diners-club';
        default:
            return type;
    }
}


/***/ }

}]);
//# sourceMappingURL=packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-47c09e.js.map