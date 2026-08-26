"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-ac5fa3"],{

/***/ "./packages/instrument-utils/src/guards/isAccountInstrument/isAccountInstrument.ts"
/*!*****************************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isAccountInstrument/isAccountInstrument.ts ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAccountInstrument)
/* harmony export */ });
function isAccountInstrument(instrument) {
    return instrument.type === 'account';
}


/***/ },

/***/ "./packages/instrument-utils/src/guards/isAchInstrument/isAchInstrument.ts"
/*!*********************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isAchInstrument/isAchInstrument.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAchInstrument)
/* harmony export */ });
function isAchInstrument(instrument) {
    return (instrument.type === 'bank' && (instrument.method === 'ecp' || instrument.method === 'ach'));
}


/***/ },

/***/ "./packages/instrument-utils/src/guards/isBankInstrument/isBankInstrument.ts"
/*!***********************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isBankInstrument/isBankInstrument.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assertIsBankInstrument),
/* harmony export */   isBankAccountInstrument: () => (/* binding */ isBankAccountInstrument)
/* harmony export */ });
function isBankAccountInstrument(instrument) {
    return ((instrument === null || instrument === void 0 ? void 0 : instrument.type) === 'bank' && (instrument === null || instrument === void 0 ? void 0 : instrument.method) !== 'ach' && (instrument === null || instrument === void 0 ? void 0 : instrument.method) !== 'ecp');
}
function assertIsBankInstrument(instrument) {
    if (!instrument || !isBankAccountInstrument(instrument)) {
        throw new Error('Is not a bank account instrument.');
    }
}


/***/ },

/***/ "./packages/instrument-utils/src/guards/isCardInstrument/isCardInstrument.ts"
/*!***********************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isCardInstrument/isCardInstrument.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assertIsCardInstrument),
/* harmony export */   isCardInstrument: () => (/* binding */ isCardInstrument)
/* harmony export */ });
function isCardInstrument(instrument) {
    return instrument !== undefined && instrument.type === 'card';
}
function assertIsCardInstrument(instrument) {
    if (!isCardInstrument(instrument)) {
        throw new Error('Is not a card instrument.');
    }
}


/***/ },

/***/ "./packages/instrument-utils/src/guards/isSepaInstrument/isSepaInstrument.ts"
/*!***********************************************************************************!*\
  !*** ./packages/instrument-utils/src/guards/isSepaInstrument/isSepaInstrument.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSepaInstrument: () => (/* binding */ isSepaInstrument)
/* harmony export */ });
function isSepaInstrument(instrument) {
    return ((instrument === null || instrument === void 0 ? void 0 : instrument.type) === 'bank' &&
        ((instrument === null || instrument === void 0 ? void 0 : instrument.method) === 'sepa' || (instrument === null || instrument === void 0 ? void 0 : instrument.method) === 'sepa_direct_debit'));
}


/***/ },

/***/ "./packages/instrument-utils/src/storedInstrument/InstrumentStorageField/InstrumentStorageField.tsx"
/*!**********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/InstrumentStorageField/InstrumentStorageField.tsx ***!
  \**********************************************************************************************************/
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

/***/ "./packages/instrument-utils/src/storedInstrument/InstrumentStoreAsDefaultField/InstrumentStoreAsDefaultField.tsx"
/*!************************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/InstrumentStoreAsDefaultField/InstrumentStoreAsDefaultField.tsx ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");




const InstrumentStoreAsDefaultField = ({ isAccountInstrument, disabled = false, }) => {
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.usePaymentFormContext)();
    const translationId = isAccountInstrument
        ? 'payment.account_instrument_save_as_default_payment_method_label'
        : 'payment.instrument_save_as_default_payment_method_label';
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (disabled) {
            paymentForm.setFieldValue('shouldSetAsDefaultInstrument', false);
        }
        // Ignoring paymentForm dependency as it causes sequential re-renders when included in array
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: translationId }), [translationId]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-field--setAsDefaultInstrument", disabled: disabled, labelContent: labelContent, name: "shouldSetAsDefaultInstrument" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(InstrumentStoreAsDefaultField));


/***/ },

/***/ "./packages/instrument-utils/src/storedInstrument/ManageAccountInstrumentsTable/ManageAccountInstrumentsTable.tsx"
/*!************************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/ManageAccountInstrumentsTable/ManageAccountInstrumentsTable.tsx ***!
  \************************************************************************************************************************/
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
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isBankInstrument/isBankInstrument.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isAchInstrument/isAchInstrument.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isSepaInstrument/isSepaInstrument.ts");




const ManageInstrumentsRow = ({ instrument, onDeleteInstrument, }) => {
    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        onDeleteInstrument(instrument.bigpayToken);
    }, [instrument, onDeleteInstrument]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { "data-test": "manage-instrument-accountExternalId" }, (0,_guards__WEBPACK_IMPORTED_MODULE_5__.isBankAccountInstrument)(instrument) || (0,_guards__WEBPACK_IMPORTED_MODULE_6__["default"])(instrument) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "instrumentModal-instrumentAccountNumber" },
            (0,_guards__WEBPACK_IMPORTED_MODULE_7__.isSepaInstrument)(instrument) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.sepa_account_number" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_ending_in_text" })),
            ` ${instrument.accountNumber}`)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "accountIcon-icon", size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__.IconSize.Medium }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "instrumentModal-instrumentAccountExternalId" }, instrument.externalId)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "button button--tiny table-actionButton optimizedCheckout-buttonSecondary", "data-test": "manage-instrument-delete-button", onClick: handleDelete, type: "button" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.delete_action" })))));
};
const ManageInstrumentsTable = ({ instruments, isDeletingInstrument, onDeleteInstrument, }) => {
    if (instruments.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_modal_empty_text" })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { isLoading: isDeletingInstrument },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "table", "data-test": "manage-instruments-table" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", { className: "table-thead" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_payment_method_text" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: "table-tbody" }, instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ManageInstrumentsRow, { instrument: instrument, key: instrument.bigpayToken, onDeleteInstrument: onDeleteInstrument })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ManageInstrumentsTable));


/***/ },

/***/ "./packages/instrument-utils/src/storedInstrument/ManageAchInstrumentsTable/ManageAchInstrumentsTable.tsx"
/*!****************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/ManageAchInstrumentsTable/ManageAchInstrumentsTable.tsx ***!
  \****************************************************************************************************************/
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
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconAch.tsx");



const ManageInstrumentsRow = ({ instrument, onDeleteInstrument, }) => {
    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        onDeleteInstrument(instrument.bigpayToken);
    }, [instrument, onDeleteInstrument]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { "data-test": "manage-instrument-bankType" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__.IconSize.Medium })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { "data-test": "manage-instrument-accountNumber" }, instrument.accountNumber),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { "data-test": "manage-instrument-issuer" }, instrument.issuer),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "button button--tiny table-actionButton optimizedCheckout-buttonSecondary", "data-test": "manage-instrument-delete-button", onClick: handleDelete, type: "button" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.delete_action" })))));
};
const ManageAchInstrumentsTable = ({ instruments, isDeletingInstrument, onDeleteInstrument, }) => {
    if (instruments.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_modal_empty_text" })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { isLoading: isDeletingInstrument },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "table", "data-test": "manage-ach-instruments-table" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", { className: "table-thead" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_payment_method_text" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_ending_in_text" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.instrument_manage_table_header_routing_number_text" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: "table-tbody" }, instruments.map((instrument) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ManageInstrumentsRow, { instrument: instrument, key: instrument.bigpayToken, onDeleteInstrument: onDeleteInstrument })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageAchInstrumentsTable);


/***/ },

/***/ "./packages/instrument-utils/src/storedInstrument/ManageCardInstrumentsTable/ManageCardInstrumentsTable.tsx"
/*!******************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/ManageCardInstrumentsTable/ManageCardInstrumentsTable.tsx ***!
  \******************************************************************************************************************/
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






function mapFromInstrumentCardType(type) {
    switch (type) {
        case 'amex':
        case 'american_express':
            return 'american-express';
        case 'diners':
            return 'diners-club';
        default:
            return type;
    }
}
const ManageInstrumentsRow = ({ instrument, onDeleteInstrument, }) => {
    const cardType = mapFromInstrumentCardType(instrument.brand);
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
const ManageCardInstrumentsTable = ({ instruments, isDeletingInstrument, onDeleteInstrument, }) => {
    if (instruments.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_modal_empty_text" })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: isDeletingInstrument },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", { className: "table", "data-test": "manage-card-instruments-table" },
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(ManageCardInstrumentsTable));


/***/ },

/***/ "./packages/instrument-utils/src/storedInstrument/ManageInstrumentsAlert/ManageInstrumentsAlert.tsx"
/*!**********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/ManageInstrumentsAlert/ManageInstrumentsAlert.tsx ***!
  \**********************************************************************************************************/
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

/***/ "./packages/instrument-utils/src/storedInstrument/ManageInstrumentsModal/ManageInstrumentsModal.tsx"
/*!**********************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/ManageInstrumentsModal/ManageInstrumentsModal.tsx ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalHeader.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isCardInstrument/isCardInstrument.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isBankInstrument/isBankInstrument.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isAccountInstrument/isAccountInstrument.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../guards */ "./packages/instrument-utils/src/guards/isAchInstrument/isAchInstrument.ts");
/* harmony import */ var _ManageAccountInstrumentsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ManageAccountInstrumentsTable */ "./packages/instrument-utils/src/storedInstrument/ManageAccountInstrumentsTable/ManageAccountInstrumentsTable.tsx");
/* harmony import */ var _ManageAchInstrumentsTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ManageAchInstrumentsTable */ "./packages/instrument-utils/src/storedInstrument/ManageAchInstrumentsTable/ManageAchInstrumentsTable.tsx");
/* harmony import */ var _ManageCardInstrumentsTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ManageCardInstrumentsTable */ "./packages/instrument-utils/src/storedInstrument/ManageCardInstrumentsTable/ManageCardInstrumentsTable.tsx");
/* harmony import */ var _ManageInstrumentsAlert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ManageInstrumentsAlert */ "./packages/instrument-utils/src/storedInstrument/ManageInstrumentsAlert/ManageInstrumentsAlert.tsx");











const ManageInstrumentsModal = ({ isOpen, instruments, onAfterOpen, onDeleteInstrument = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onDeleteInstrumentError = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onRequestClose, }) => {
    const [isConfirmingDelete, setIsConfirmingDelete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selectedInstrumentId, setSelectedInstrumentId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { checkoutState: { errors: { getDeleteInstrumentError }, statuses: { isDeletingInstrument, isLoadingInstruments }, }, checkoutService: { deleteInstrument, clearError }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const deleteInstrumentError = getDeleteInstrumentError();
    const handleAfterOpen = () => {
        setIsConfirmingDelete(false);
        onAfterOpen === null || onAfterOpen === void 0 ? void 0 : onAfterOpen();
    };
    const handleCancel = () => {
        const existingError = getDeleteInstrumentError();
        if (existingError) {
            void clearError(existingError);
        }
        setIsConfirmingDelete(false);
    };
    const handleConfirmDelete = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        if (!selectedInstrumentId) {
            return;
        }
        try {
            yield deleteInstrument(selectedInstrumentId);
            onDeleteInstrument(selectedInstrumentId);
            onRequestClose === null || onRequestClose === void 0 ? void 0 : onRequestClose();
        }
        catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            onDeleteInstrumentError(err);
        }
    });
    const handleDeleteInstrument = (id) => {
        setIsConfirmingDelete(true);
        setSelectedInstrumentId(id);
    };
    const ModalContent = () => {
        if (isConfirmingDelete) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_modal_confirmation_label" })));
        }
        const cardInstruments = instruments.filter(_guards__WEBPACK_IMPORTED_MODULE_8__.isCardInstrument);
        const bankInstruments = instruments.filter(_guards__WEBPACK_IMPORTED_MODULE_9__.isBankAccountInstrument);
        const accountInstruments = instruments.filter(_guards__WEBPACK_IMPORTED_MODULE_10__["default"]);
        const achInstrument = instruments.filter(_guards__WEBPACK_IMPORTED_MODULE_11__["default"]);
        if (achInstrument.length) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageAchInstrumentsTable__WEBPACK_IMPORTED_MODULE_13__["default"], { instruments: achInstrument, isDeletingInstrument: isDeletingInstrument(), onDeleteInstrument: handleDeleteInstrument }));
        }
        const bankAndAccountInstruments = [...bankInstruments, ...accountInstruments];
        if (bankAndAccountInstruments.length) {
            return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageAccountInstrumentsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { instruments: bankAndAccountInstruments, isDeletingInstrument: isDeletingInstrument(), onDeleteInstrument: handleDeleteInstrument }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageCardInstrumentsTable__WEBPACK_IMPORTED_MODULE_14__["default"], { instruments: cardInstruments, isDeletingInstrument: isDeletingInstrument(), onDeleteInstrument: handleDeleteInstrument }));
    };
    const ConfirmDelete = () => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: handleCancel, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.ButtonSize.Small, testId: "manage-instrument-cancel-button" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "common.cancel_action" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { disabled: isDeletingInstrument() || isLoadingInstruments(), onClick: handleConfirmDelete, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.ButtonSize.Small, testId: "manage-instrument-confirm-button", variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.ButtonVariant.Primary },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_modal_confirmation_action" }))));
    const CloseButton = () => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: onRequestClose, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.ButtonSize.Small, testId: "manage-instrument-close-button" },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "common.close_action" })));
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { closeButtonLabel: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "common.close_action" }), footer: isConfirmingDelete ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ConfirmDelete, null) : react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CloseButton, null), header: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "payment.instrument_manage_modal_title_text" })), isOpen: isOpen, onAfterOpen: handleAfterOpen, onRequestClose: onRequestClose },
        deleteInstrumentError && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageInstrumentsAlert__WEBPACK_IMPORTED_MODULE_15__["default"], { error: deleteInstrumentError }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ModalContent, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageInstrumentsModal);


/***/ },

/***/ "./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx"
/*!************************************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/StoreInstrumentFieldset/StoreInstrumentFieldset.tsx ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _InstrumentStorageField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InstrumentStorageField */ "./packages/instrument-utils/src/storedInstrument/InstrumentStorageField/InstrumentStorageField.tsx");
/* harmony import */ var _InstrumentStoreAsDefaultField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InstrumentStoreAsDefaultField */ "./packages/instrument-utils/src/storedInstrument/InstrumentStoreAsDefaultField/InstrumentStoreAsDefaultField.tsx");






const useProps = (props, paymentForm) => {
    const saveIsChecked = Boolean(paymentForm.getFieldValue('shouldSaveInstrument'));
    const { instrumentId, instruments } = props;
    const addingNewInstrument = !instrumentId;
    const hasAnyOtherInstruments = !!instruments && instruments.length > 0;
    const instrument = instruments && instruments.find(({ bigpayToken }) => bigpayToken === instrumentId);
    return Object.assign(Object.assign({}, props), { showSave: addingNewInstrument, showSetAsDefault: (addingNewInstrument && hasAnyOtherInstruments) ||
            Boolean(instrument && !instrument.defaultInstrument), setAsDefaultEnabled: !addingNewInstrument || saveIsChecked });
};
const StoreInstrumentFieldset = (_a) => {
    var { isAccountInstrument = false } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["isAccountInstrument"]);
    const { paymentForm } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.usePaymentFormContext)();
    const { showSave, showSetAsDefault, setAsDefaultEnabled } = useProps(props, paymentForm);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { additionalClassName: "form-fieldset--storedInstrument" },
        showSave && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_InstrumentStorageField__WEBPACK_IMPORTED_MODULE_4__["default"], { isAccountInstrument: isAccountInstrument }),
        showSetAsDefault && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_InstrumentStoreAsDefaultField__WEBPACK_IMPORTED_MODULE_5__["default"], { disabled: !setAsDefaultEnabled, isAccountInstrument: isAccountInstrument }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreInstrumentFieldset);


/***/ },

/***/ "./packages/payment-integration-api/src/toResolvableComponent.tsx"
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/toResolvableComponent.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toResolvableComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function toResolvableComponent(
// eslint-disable-next-line @typescript-eslint/naming-convention
Component, resolveIds) {
    return Object.assign((props) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, Object.assign({}, props)), { resolveIds });
}


/***/ },

/***/ "./packages/ui/src/icon/IconAch.tsx"
/*!******************************************!*\
  !*** ./packages/ui/src/icon/IconAch.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconAchSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "25 0 50 48", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", { id: "iconAchTitle" }, "ACH"),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M30 9.5h40c1.9 0 3.5 1.6 3.5 3.5v22c0 1.9-1.6 3.5-3.5 3.5H30c-1.9 0-3.5-1.6-3.5-3.5V13c0-1.9 1.6-3.5 3.5-3.5z", fill: "#1524d9" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "m45.2 27.5-.6-1.4h-2.7l-.5 1.4h-1.8l3-7.1h1.7l2.8 7.1h-1.9zm-1.9-5.1-.9 2.4h1.8l-.9-2.4zm9.1 5c-.5.2-1 .3-1.6.3-.5 0-1-.1-1.5-.3-.9-.3-1.6-1-2-1.9-.4-1-.4-2 0-3 .2-.4.5-.8.8-1.2.4-.3.8-.6 1.2-.7 1-.4 2-.4 3 0 .4.2.9.4 1.2.8l-1.2 1.2c-.2-.2-.4-.4-.6-.5-.3-.1-.5-.2-.8-.2-.3 0-.6 0-.8.2-.2.1-.5.3-.6.5-.2.2-.3.4-.4.7-.1.3-.2.6-.1.9 0 .3 0 .6.1.9.1.3.2.5.4.7.2.2.4.3.6.4.3.1.5.2.8.2.3 0 .6-.1.9-.2.2-.1.5-.3.6-.5l1.2 1.1c-.3.1-.7.4-1.2.6zm6.4.1v-2.9H56v2.9h-1.7v-7.1H56v2.7h2.8v-2.7h1.7v7l-1.7.1z", fill: "#fff" })));
const IconAch = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconAchSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconAch));


/***/ },

/***/ "./packages/ui/src/icon/IconPaypal.tsx"
/*!*********************************************!*\
  !*** ./packages/ui/src/icon/IconPaypal.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconPaypalSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "300", viewBox: "0 0 255 300", width: "255", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M228.03 77.2c3.6-23.02-.03-38.7-12.48-52.89C201.83 8.7 177.07 2 145.4 2H53.4c-6.47 0-11.99 4.7-12.99 11.11L2.1 256.03a7.9 7.9 0 0 0 7.8 9.14h56.78c79.33-53.38 148.45-81.4 161.35-187.97z", fill: "#253B80" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M228.02 77.2C124 73 95 98 80.5 177.52l-13.82 87.65-3.91 24.85a6.9 6.9 0 0 0 6.82 7.98h47.86c5.67 0 10.48-4.12 11.37-9.71l.48-2.43 9-57.2.59-3.15c.88-5.6 5.7-9.73 11.37-9.73h7.16c46.38 0 82.68-18.83 93.29-73.33 4.43-22.76 2.14-41.77-9.6-55.14a45.77 45.77 0 0 0-13.1-10.1z", fill: "#179BD7" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M215.33 72.14c-3.88-1.12-7.82-2-11.8-2.62a149.83 149.83 0 0 0-23.79-1.73h-72.1a11.49 11.49 0 0 0-11.36 9.73l-15.34 97.16-.44 2.84a13.1 13.1 0 0 1 12.95-11.1h27c53 0 94.5-21.53 106.62-83.82.37-1.85.67-3.64.95-5.4a64.66 64.66 0 0 0-9.98-4.2c-.9-.3-1.8-.59-2.71-.86z", fill: "#222D65" })));
const IconPaypal = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconPaypalSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconPaypal));


/***/ }

}]);
//# sourceMappingURL=packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-ac5fa3.js.map