"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["big-commerce-payments-button"],{

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

/***/ "./packages/ui/src/form/TextArea/TextArea.tsx"
/*!****************************************************!*\
  !*** ./packages/ui/src/form/TextArea/TextArea.tsx ***!
  \****************************************************/
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



const TextArea = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, testId, className, isFloatingLabelEnabled } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "testId", "className", "isFloatingLabelEnabled"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", Object.assign({}, rest, { className: className ||
            classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-textarea': isFloatingLabelEnabled }, 'form-input', 'optimizedCheckout-form-input', additionalClassName, 'body-regular'), "data-test": testId, ref: ref })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


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


/***/ },

/***/ "./packages/ui/src/tooltip/TooltipTrigger.tsx"
/*!****************************************************!*\
  !*** ./packages/ui/src/tooltip/TooltipTrigger.tsx ***!
  \****************************************************/
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


const TooltipTrigger = ({ children, placement = 'bottom', tooltip, }) => {
    const [shouldShow, setShouldShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleShow = () => {
        setShouldShow(true);
    };
    const handleHide = () => {
        setShouldShow(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_2__.Manager, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__.Reference, null, ({ ref }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { onBlur: handleHide, onFocus: handleShow, onMouseEnter: handleShow, onMouseLeave: handleHide, ref: ref }, children))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_popper__WEBPACK_IMPORTED_MODULE_1__.Popper, { modifiers: [
                { name: 'hide', enabled: false },
                { name: 'flip', enabled: false },
                { name: 'preventOverflow', enabled: false },
            ], placement: placement }, ({ ref, style }) => shouldShow && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: ref, style: style }, tooltip)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipTrigger);


/***/ }

}]);
//# sourceMappingURL=big-commerce-payments-button.js.map