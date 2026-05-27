(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cheque-payment-method"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/cheque-payment-integration/src/PoNumber.scss"
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/cheque-payment-integration/src/PoNumber.scss ***!
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

/***/ "../checkout-sdk-js/dist/esm/integrations/offline.js"
/*!***********************************************************!*\
  !*** ../checkout-sdk-js/dist/esm/integrations/offline.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOfflinePaymentStrategy: () => (/* binding */ n)
/* harmony export */ });
class e extends Error{constructor(e){var t;super(e||"An unexpected error has occurred."),this.name="StandardError",this.type="standard",t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,new.target):this.stack=new Error(this.message).stack}}class t extends e{constructor(){super("The current order does not need to be finalized at this stage."),this.name="OrderFinalizationNotRequiredError",this.type="order_finalization_not_required"}}class r{constructor(e){this._paymentIntegrationService=e}execute(e,t){return r=this,n=void 0,i=function*(){return yield this._paymentIntegrationService.submitOrder(Object.assign(Object.assign({},e),{payment:e.payment?{methodId:e.payment.methodId}:void 0}),t),Promise.resolve()},new((o=void 0)||(o=Promise))(function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o(function(e){e(r)})).then(s,a)}c((i=i.apply(r,n||[])).next())});// removed by dead control flow
 var r, n, o, i; }finalize(){return Promise.reject(new t)}initialize(){return Promise.resolve()}deinitialize(){return Promise.resolve()}}const n=(o=e=>new r(e),i=[{type:"PAYMENT_TYPE_OFFLINE"}],Object.assign(o,{resolveIds:i}));var o,i;


/***/ },

/***/ "./packages/cheque-payment-integration/src/PoNumber.scss"
/*!***************************************************************!*\
  !*** ./packages/cheque-payment-integration/src/PoNumber.scss ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./PoNumber.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/cheque-payment-integration/src/PoNumber.scss");

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
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offline */ "../checkout-sdk-js/dist/esm/integrations/offline.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/toResolvableComponent.tsx");
/* harmony import */ var _PoNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PoNumber */ "./packages/cheque-payment-integration/src/PoNumber.tsx");






const ChequePaymentMethod = ({ method, checkoutService, onUnhandledError, paymentForm, language, }) => {
    const { payment: { poConfig }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCapabilities)();
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
    if (poConfig) {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PoNumber__WEBPACK_IMPORTED_MODULE_5__["default"], { isRequired: poConfig.required, label: poConfig.label, language: language, method: method, paymentForm: paymentForm }));
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
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/storage/poNumberStorage.ts");
/* harmony import */ var _getPoNumberValidationSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getPoNumberValidationSchema */ "./packages/cheque-payment-integration/src/getPoNumberValidationSchema.ts");
/* harmony import */ var _PoNumber_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PoNumber.scss */ "./packages/cheque-payment-integration/src/PoNumber.scss");
/* harmony import */ var _PoNumber_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PoNumber_scss__WEBPACK_IMPORTED_MODULE_7__);






const PO_NUMBER_FIELD_NAME = 'poNumber';
const PoNumber = ({ label, isRequired, method, language, paymentForm: { setFieldValue, setValidationSchema }, }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setFieldValue(PO_NUMBER_FIELD_NAME, (0,_bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_5__.getPoNumber)());
        setValidationSchema(method, (0,_getPoNumberValidationSchema__WEBPACK_IMPORTED_MODULE_6__["default"])(language, isRequired));
        return () => {
            setValidationSchema(method, null);
        };
    }, [isRequired, language, method, setFieldValue, setValidationSchema]);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { "aria-labelledby": `${PO_NUMBER_FIELD_NAME}-label ${PO_NUMBER_FIELD_NAME}-field-error-message`, id: PO_NUMBER_FIELD_NAME }))), []);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
        (0,_bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_5__.setPoNumber)(value.trim());
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "po-number-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { input: renderInput, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "po-number-label", htmlFor: PO_NUMBER_FIELD_NAME, id: `${PO_NUMBER_FIELD_NAME}-label` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, label),
                    !isRequired && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.po_number_optional" }))))), name: PO_NUMBER_FIELD_NAME, onChange: handleChange })));
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoize)(function getPoNumberValidationSchema(language, isRequired) {
    if (!isRequired) {
        return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({});
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
        poNumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().trim().required(language.translate('payment.po_number_required_error')),
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


/***/ },

/***/ "./packages/utility/src/storage/poNumberStorage.ts"
/*!*********************************************************!*\
  !*** ./packages/utility/src/storage/poNumberStorage.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPoNumber: () => (/* binding */ clearPoNumber),
/* harmony export */   getPoNumber: () => (/* binding */ getPoNumber),
/* harmony export */   setPoNumber: () => (/* binding */ setPoNumber)
/* harmony export */ });
const KEY = 'PoNumber';
const getPoNumber = () => { var _a; return (_a = sessionStorage.getItem(KEY)) !== null && _a !== void 0 ? _a : ''; };
const setPoNumber = (value) => {
    if (value) {
        sessionStorage.setItem(KEY, value);
    }
    else {
        sessionStorage.removeItem(KEY);
    }
};
const clearPoNumber = () => sessionStorage.removeItem(KEY);


/***/ }

}]);
//# sourceMappingURL=cheque-payment-method.js.map