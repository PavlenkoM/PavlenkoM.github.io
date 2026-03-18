"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["stripe-link-v2-button"],{

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

/***/ "./packages/ui/src/accordion/AccordionContext.tsx"
/*!********************************************************!*\
  !*** ./packages/ui/src/accordion/AccordionContext.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({ onToggle: lodash__WEBPACK_IMPORTED_MODULE_0__.noop });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionContext);


/***/ },

/***/ "./packages/ui/src/button/Button.tsx"
/*!*******************************************!*\
  !*** ./packages/ui/src/button/Button.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonSize: () => (/* binding */ ButtonSize),
/* harmony export */   ButtonVariant: () => (/* binding */ ButtonVariant),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["Primary"] = "primary";
    ButtonVariant["Secondary"] = "secondary";
    ButtonVariant["Action"] = "action";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Small"] = "small";
    ButtonSize["Tiny"] = "tiny";
    ButtonSize["Large"] = "large";
})(ButtonSize || (ButtonSize = {}));
function getClassName(props) {
    const { className, isFullWidth, isLoading, size, variant } = props;
    return classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', className, { 'button--primary': variant === ButtonVariant.Primary }, { 'button--tertiary': variant === ButtonVariant.Secondary }, { 'button--action': variant === ButtonVariant.Action }, { 'button--small': size === ButtonSize.Small }, { 'button--tiny': size === ButtonSize.Tiny }, { 'button--large': size === ButtonSize.Large }, { 'button--slab': isFullWidth }, {
        'optimizedCheckout-buttonPrimary': variant === ButtonVariant.Primary || variant === ButtonVariant.Action,
    }, { 'optimizedCheckout-buttonSecondary': variant === ButtonVariant.Secondary }, { 'is-loading': isLoading });
}
const Button = (_a) => {
    var { children, className, disabled, isFullWidth, isLoading, size, testId, type, variant } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["children", "className", "disabled", "isFullWidth", "isLoading", "size", "testId", "type", "variant"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", Object.assign({}, rest, { className: getClassName({ className, isFullWidth, isLoading, size, variant }), "data-test": testId, disabled: disabled || isLoading, type: type || 'button' }), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


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


/***/ }

}]);
//# sourceMappingURL=stripe-link-v2-button.js.map