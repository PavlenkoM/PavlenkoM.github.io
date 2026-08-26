"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_payment-integration-api_src_errors_CustomError_ts-packages_wallet-button-integration-2fef70"],{

/***/ "./packages/instrument-utils/src/storedInstrument/SignOutLink/SignOutLink.tsx"
/*!************************************************************************************!*\
  !*** ./packages/instrument-utils/src/storedInstrument/SignOutLink/SignOutLink.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/getPaymentMethodName.ts");





const SignOutLink = ({ method, onSignOut }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "signout-link" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "remote.sign_out_before_action" }),
        ' ',
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(onSignOut) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { data: { providerName: (0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(language)(method) }, id: "remote.sign_out_action" })),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "remote.sign_out_after_action" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignOutLink);


/***/ },

/***/ "./packages/payment-integration-api/src/PaymentMethodType.ts"
/*!*******************************************************************!*\
  !*** ./packages/payment-integration-api/src/PaymentMethodType.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["ApplePay"] = "applepay";
    PaymentMethodType["CreditCard"] = "credit-card";
    PaymentMethodType["GooglePay"] = "googlepay";
    PaymentMethodType["PayWithGoogle"] = "paywithgoogle";
    PaymentMethodType["MultiOption"] = "multi-option";
    PaymentMethodType["Paypal"] = "paypal";
    PaymentMethodType["PaypalCredit"] = "paypal-credit";
    PaymentMethodType["PaypalVenmo"] = "paypal-venmo";
    PaymentMethodType["VisaCheckout"] = "visa-checkout";
})(PaymentMethodType || (PaymentMethodType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethodType);


/***/ },

/***/ "./packages/payment-integration-api/src/errors/CustomError.ts"
/*!********************************************************************!*\
  !*** ./packages/payment-integration-api/src/errors/CustomError.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomError)
/* harmony export */ });
class CustomError extends Error {
    constructor({ data = {}, message = '', title = '', name = '', }) {
        super();
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CustomError);
        }
        else {
            this.stack = new Error().stack;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.data = data;
        this.message = message;
        this.name = name;
        this.title = title;
        this.type = 'custom';
    }
}


/***/ },

/***/ "./packages/payment-integration-api/src/getPaymentMethodName.ts"
/*!**********************************************************************!*\
  !*** ./packages/payment-integration-api/src/getPaymentMethodName.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentMethodName),
/* harmony export */   getTranslatedPaymentMethodName: () => (/* binding */ getTranslatedPaymentMethodName)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/payment-integration-api/src/PaymentMethodId.ts");
/* harmony import */ var _PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentMethodType */ "./packages/payment-integration-api/src/PaymentMethodType.ts");



/**
 * Always return the translated name of a payment method unless it is a
 * multi-option payment method or it doesn't have any translation. It's possible
 * to translate the gateway name of multi-option methods, i.e.: AfterPay.
 * However, because the options provided by the gateway can vary a lot, i.e.:
 * "Pay by Installment", therefore it's not feasible to do the translation on
 * the UI level.
 */
function getPaymentMethodName(language) {
    return (method) => {
        let name = getTranslatedPaymentMethodName(language)(method);
        if (!name || method.method === _PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].MultiOption) {
            name = method.config.displayName;
        }
        if (!name) {
            name = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(method, 'initializationData.paymentData.cardData.digital_wallet_type') ||
                method.method ||
                method.id);
        }
        return name;
    };
}
function getTranslatedPaymentMethodName(language) {
    return (method) => {
        const translations = {
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Affirm]: language.translate('payment.affirm_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Afterpay]: language.translate('payment.afterpay_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].AmazonPay]: language.translate('payment.amazon_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Bolt]: language.translate('payment.bolt_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Clearpay]: language.translate('payment.clearpay_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].GooglePay]: language.translate('payment.google_pay_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Klarna]: language.translate('payment.klarna_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].Paypal]: language.translate('payment.paypal_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].PaypalCredit]: language.translate('payment.paypal_credit_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].VisaCheckout]: language.translate('payment.vco_name_text'),
        };
        return translations[method.id] || translations[method.method];
    };
}


/***/ },

/***/ "./packages/wallet-button-integration/src/PaymentView.tsx"
/*!****************************************************************!*\
  !*** ./packages/wallet-button-integration/src/PaymentView.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/instrument-utils */ "./packages/instrument-utils/src/storedInstrument/SignOutLink/SignOutLink.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");




const PaymentView = ({ accountMask, cardName, cardType, expiryMonth, expiryYear, shouldShowEditButton, editButtonClassName, editButtonLabel, buttonId, method, onSignOut, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        !!cardName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { "data-test": "payment-method-wallet-card-name" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_name_label" }),
                ":"),
            ' ',
            cardName)),
        !!accountMask && !!cardType && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { "data-test": "payment-method-wallet-card-type" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, `${cardType}:`),
            " ",
            accountMask)),
        !!expiryMonth && !!expiryYear && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { "data-test": "payment-method-wallet-card-expiry" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.credit_card_expiration_date_label" }),
                ":"),
            ' ',
            `${expiryMonth}/${expiryYear}`)),
        !!shouldShowEditButton && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, 
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: editButtonClassName, href: "#", id: buttonId, onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])() }, editButtonLabel || (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "remote.select_different_card_action" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_instrument_utils__WEBPACK_IMPORTED_MODULE_2__["default"], { method: method, onSignOut: onSignOut })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentView);


/***/ },

/***/ "./packages/wallet-button-integration/src/SignInView.tsx"
/*!***************************************************************!*\
  !*** ./packages/wallet-button-integration/src/SignInView.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/getPaymentMethodName.ts");





const SignInView = ({ buttonId, method, signInButtonClassName, signInButtonLabel, }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
    return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: signInButtonClassName, href: "#", id: buttonId, onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"])() }, signInButtonLabel || (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { data: { providerName: (0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(language)(method) }, id: "remote.sign_in_action" }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInView);


/***/ },

/***/ "./packages/wallet-button-integration/src/WalletButtonPaymentMethodComponent.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/wallet-button-integration/src/WalletButtonPaymentMethodComponent.tsx ***!
  \***************************************************************************************/
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
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _normalizeWalletPaymentData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalizeWalletPaymentData */ "./packages/wallet-button-integration/src/normalizeWalletPaymentData.ts");
/* harmony import */ var _PaymentView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaymentView */ "./packages/wallet-button-integration/src/PaymentView.tsx");
/* harmony import */ var _SignInView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignInView */ "./packages/wallet-button-integration/src/SignInView.tsx");








const WalletButtonPaymentMethodComponent = ({ paymentForm, buttonId, editButtonClassName, editButtonLabel, isInitializing = false, method, shouldShowEditButton, signInButtonClassName, signInButtonLabel, signOutCustomer, deinitializePayment, initializePayment, onSignOut = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onSignOutError = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, }) => {
    const { checkoutState: { data: { getBillingAddress, getCheckout, isPaymentDataRequired }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const billingAddress = getBillingAddress();
    const checkout = getCheckout();
    if (!billingAddress || !checkout) {
        throw new Error('Unable to get checkout');
    }
    const walletPaymentData = (0,_normalizeWalletPaymentData__WEBPACK_IMPORTED_MODULE_5__["default"])(method.initializationData);
    const isPaymentSelected = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(checkout.payments, { providerId: method.id });
    // FIXME: I'm not sure how this would work for non-English names.
    const cardName = walletPaymentData && [billingAddress.firstName, billingAddress.lastName].join(' ');
    const toggleSubmit = () => {
        const { disableSubmit } = paymentForm;
        const currentIsPaymentDataRequired = isPaymentDataRequired();
        if ((0,_normalizeWalletPaymentData__WEBPACK_IMPORTED_MODULE_5__["default"])(method.initializationData) ||
            !currentIsPaymentDataRequired) {
            disableSubmit(method, false);
        }
        else {
            disableSubmit(method, true);
        }
    };
    const handleSignOut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield signOutCustomer({ methodId: method.id });
            onSignOut();
            window.location.reload();
        }
        catch (error) {
            onSignOutError(error);
        }
    }), [signOutCustomer, method.id, onSignOut, onSignOutError]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const initializePaymentAsync = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            toggleSubmit();
            try {
                yield initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                });
            }
            catch (error) {
                onUnhandledError(error);
            }
        });
        void initializePaymentAsync();
        return () => {
            const deinitializePaymentAsync = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                const { disableSubmit } = paymentForm;
                disableSubmit(method, false);
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        toggleSubmit();
    });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { hideContentWhenLoading: true, isLoading: isInitializing },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "paymentMethod paymentMethod--walletButton" }, isPaymentSelected ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PaymentView__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, walletPaymentData, { buttonId: buttonId, cardName: cardName, editButtonClassName: editButtonClassName, editButtonLabel: editButtonLabel, method: method, onSignOut: handleSignOut, shouldShowEditButton: shouldShowEditButton }))) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SignInView__WEBPACK_IMPORTED_MODULE_7__["default"], { buttonId: buttonId, method: method, signInButtonClassName: signInButtonClassName, signInButtonLabel: signInButtonLabel })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletButtonPaymentMethodComponent);


/***/ },

/***/ "./packages/wallet-button-integration/src/normalizeWalletPaymentData.ts"
/*!******************************************************************************!*\
  !*** ./packages/wallet-button-integration/src/normalizeWalletPaymentData.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);

const formatAccountMask = (accountMask = '', padding = '****') => accountMask.includes('*') ? accountMask : `${padding} ${accountMask}`;
const isWalletButtonInitializationData = (object) => {
    if (typeof object === 'object' && object !== null) {
        if ('card_information' in object &&
            typeof object.card_information === 'object' &&
            object.card_information !== null &&
            'number' in object.card_information &&
            'type' in object.card_information) {
            return true;
        }
        if ('cardData' in object &&
            typeof object.cardData === 'object' &&
            object.cardData !== null &&
            'accountMask' in object.cardData &&
            'cardType' in object.cardData &&
            'expMonth' in object.cardData &&
            'expYear' in object.cardData) {
            return true;
        }
        if ('accountNum' in object && 'accountMask' in object && 'expDate' in object) {
            return true;
        }
    }
    return false;
};
// For some odd reason, `initializationData` is a schema-less object. So in
// order to use it safely, we have to normalize it first.
const normalizeWalletPaymentData = (data) => {
    if (isWalletButtonInitializationData(data)) {
        if (data.card_information) {
            return {
                accountMask: formatAccountMask(data.card_information.number),
                cardType: data.card_information.type,
            };
        }
        if (data.cardData) {
            return {
                accountMask: formatAccountMask(data.cardData.accountMask),
                cardType: data.cardData.cardType,
                expiryMonth: data.cardData.expMonth,
                expiryYear: data.cardData.expYear,
            };
        }
        if (data.accountNum) {
            const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(data.accountNum);
            return {
                accountMask: formatAccountMask(data.accountMask),
                expiryMonth: data.expDate && data.expDate.substr(0, 2),
                expiryYear: data.expDate && data.expDate.substr(2, 2),
                cardType: card ? card.niceType : '',
            };
        }
    }
    return undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizeWalletPaymentData);


/***/ }

}]);
//# sourceMappingURL=packages_payment-integration-api_src_errors_CustomError_ts-packages_wallet-button-integration-2fef70.js.map