(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cheque-payment-method"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/cheque-payment-integration/src/PoNumber.scss"
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/cheque-payment-integration/src/PoNumber.scss ***!
  \************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".po-number-container {\n  box-sizing: border-box;\n  padding-bottom: 1rem;\n}\n.po-number-container .po-number-label {\n  display: block;\n  font-size: 1rem;\n  font-weight: normal;\n  margin-bottom: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/cheque-payment-integration/src/PoNumber.scss"
/*!***************************************************************!*\
  !*** ./packages/cheque-payment-integration/src/PoNumber.scss ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./PoNumber.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/cheque-payment-integration/src/PoNumber.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/cheque-payment-integration/src/ChequePaymentMethod.tsx"
/*!*************************************************************************!*\
  !*** ./packages/cheque-payment-integration/src/ChequePaymentMethod.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offline */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/offline.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _PoNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PoNumber */ "./packages/cheque-payment-integration/src/PoNumber.tsx");






const ChequePaymentMethod = ({ method, checkoutService, checkoutState, onUnhandledError, paymentForm, language, }) => {
    var _a;
    const { payment: { poConfig }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCapabilities)();
    const isFloatingLabelEnabled = Boolean((_a = checkoutState.data.getConfig()) === null || _a === void 0 ? void 0 : _a.checkoutSettings.checkoutUserExperienceSettings.floatingLabelEnabled);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const initializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            try {
                yield checkoutService.initializePayment({
                    gatewayId: method.gateway,
                    methodId: method.id,
                    integrations: [_bigcommerce_checkout_sdk_integrations_offline__WEBPACK_IMPORTED_MODULE_1__.createOfflinePaymentStrategy],
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError(error);
                }
            }
        });
        void initializePayment();
        return () => {
            const deinitializePayment = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                try {
                    yield checkoutService.deinitializePayment({
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
            void deinitializePayment();
        };
    }, [checkoutService, method.gateway, method.id, onUnhandledError]);
    if (poConfig === null || poConfig === void 0 ? void 0 : poConfig.field) {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PoNumber__WEBPACK_IMPORTED_MODULE_5__["default"], { isFloatingLabelEnabled: isFloatingLabelEnabled, isRequired: poConfig.field.required, label: poConfig.field.label, language: language, method: method, paymentForm: paymentForm }));
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__["default"])(ChequePaymentMethod, [
    {
        id: 'cheque',
        type: 'PAYMENT_TYPE_OFFLINE',
    },
]));


/***/ },

/***/ "./packages/cheque-payment-integration/src/PoNumber.tsx"
/*!**************************************************************!*\
  !*** ./packages/cheque-payment-integration/src/PoNumber.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PO_NUMBER_FIELD_NAME: () => (/* binding */ PO_NUMBER_FIELD_NAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/storage/B2BSessionStorage.ts");
/* harmony import */ var _getPoNumberValidationSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getPoNumberValidationSchema */ "./packages/cheque-payment-integration/src/getPoNumberValidationSchema.ts");
/* harmony import */ var _PoNumber_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PoNumber.scss */ "./packages/cheque-payment-integration/src/PoNumber.scss");
/* harmony import */ var _PoNumber_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PoNumber_scss__WEBPACK_IMPORTED_MODULE_7__);






const PO_NUMBER_FIELD_NAME = 'poNumber';
const PoNumber = ({ label, isRequired, isFloatingLabelEnabled, method, language, paymentForm: { setFieldValue, setValidationSchema }, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a, _b;
        setFieldValue(PO_NUMBER_FIELD_NAME, (_b = (_a = _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_5__.B2BSessionStorage.getPaymentValues()) === null || _a === void 0 ? void 0 : _a.poNumber) !== null && _b !== void 0 ? _b : '');
        setValidationSchema(method, (0,_getPoNumberValidationSchema__WEBPACK_IMPORTED_MODULE_6__["default"])(language, isRequired, label));
        return () => {
            setValidationSchema(method, null);
        };
    }, [isRequired, label, language, method, setFieldValue, setValidationSchema]);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { "aria-labelledby": `${PO_NUMBER_FIELD_NAME}-label ${PO_NUMBER_FIELD_NAME}-field-error-message`, id: PO_NUMBER_FIELD_NAME, isFloatingLabelEnabled: isFloatingLabelEnabled }))), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "po-number-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { input: renderInput, isFloatingLabelEnabled: isFloatingLabelEnabled, label: isFloatingLabelEnabled ? undefined : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "po-number-label", htmlFor: PO_NUMBER_FIELD_NAME, id: `${PO_NUMBER_FIELD_NAME}-label` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, label),
                    !isRequired && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.optional_text" })))))), labelContent: isFloatingLabelEnabled ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                label,
                !isRequired && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.optional_text" })))))) : undefined, name: PO_NUMBER_FIELD_NAME })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoNumber);


/***/ },

/***/ "./packages/cheque-payment-integration/src/getPoNumberValidationSchema.ts"
/*!********************************************************************************!*\
  !*** ./packages/cheque-payment-integration/src/getPoNumberValidationSchema.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getPoNumberValidationSchema(language, isRequired, label) {
    if (!isRequired) {
        return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({});
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
        poNumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)()
            .trim()
            .required(language.translate('payment.errors.field_required_error', { label })),
    });
}));


/***/ },

/***/ "./packages/cheque-payment-integration/src/index.ts"
/*!**********************************************************!*\
  !*** ./packages/cheque-payment-integration/src/index.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChequePaymentMethod: () => (/* reexport safe */ _ChequePaymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ChequePaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChequePaymentMethod */ "./packages/cheque-payment-integration/src/ChequePaymentMethod.tsx");



/***/ },

/***/ "./packages/payment-integration-api/src/toResolvableComponent.tsx"
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/toResolvableComponent.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/***/ }

}]);
//# sourceMappingURL=cheque-payment-method.js.map