(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.scss"
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.scss ***!
  \**************************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".dropdown-menu--card-code {\n  display: block;\n  left: 0;\n  position: relative;\n  visibility: visible;\n  width: 200px;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.scss"
/*!*****************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.scss ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./CreditCardCodeTooltip.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx"
/*!****************************************************************************!*\
  !*** ./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconContainer.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCardCodeAmex.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCardCodeVisa.tsx");
/* harmony import */ var _CreditCardCodeTooltip_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreditCardCodeTooltip.scss */ "./packages/instrument-utils/src/creditCard/CreditCardCodeTooltip.scss");
/* harmony import */ var _CreditCardCodeTooltip_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CreditCardCodeTooltip_scss__WEBPACK_IMPORTED_MODULE_5__);




const CreditCardCodeTooltip = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dropdown-menu dropdown-menu--content dropdown-menu--card-code" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields-cvvExample" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields-cvvExampleDescription" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.credit_card_cvv_help_text" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "form-ccFields-cvvExampleFigures" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.IconSize.Large })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.IconSize.Large }))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCardCodeTooltip);


/***/ },

/***/ "./packages/ui/src/form/FormField/FormField.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/form/FormField/FormField.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasicFormField */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormFieldError */ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Label */ "./packages/ui/src/form/Label/Label.tsx");





const FormField = ({ additionalClassName, labelContent, label, onChange, footer, input, name, id, isFloatingLabelEnabled, }) => {
    let labelClassName = 'body-medium';
    if (isFloatingLabelEnabled) {
        labelClassName = 'floating-form-field-label';
    }
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        isFloatingLabelEnabled && input(props),
        label !== undefined && (typeof label === 'function' ? label(name) : label),
        labelContent !== undefined && !label && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: labelClassName, htmlFor: name, id: `${id !== null && id !== void 0 ? id : name}-label`, isFloatingLabelEnabled: isFloatingLabelEnabled }, labelContent)),
        !isFloatingLabelEnabled && input(props),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_3__["default"], { errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name)}-field-error-message` }),
        footer)), [isFloatingLabelEnabled, input, label, name, labelContent, labelClassName, id, footer]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: additionalClassName, name: name, onChange: onChange, render: renderField }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormField));


/***/ },

/***/ "./packages/ui/src/form/TextInput/TextInput.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/form/TextInput/TextInput.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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




const TextInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, isFloatingLabelEnabled, appearFocused, type = 'text' } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "isFloatingLabelEnabled", "appearFocused", "type"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input', 'optimizedCheckout-form-input', { 'form-input--focus': appearFocused }, { 'optimizedCheckout-form-input--focus': appearFocused }, additionalClassName, { 'floating-form-field-input': isFloatingLabelEnabled }, { 'body-regular': !isFloatingLabelEnabled }), isFloatingLabelEnabled: isFloatingLabelEnabled, ref: ref, type: type })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ },

/***/ "./packages/ui/src/icon/IconCardCodeAmex.tsx"
/*!***************************************************!*\
  !*** ./packages/ui/src/icon/IconCardCodeAmex.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconCardCodeAmexSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "54", viewBox: "0 0 88 54", width: "88", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "CVV amex"),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { fill: "none", fillRule: "evenodd" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { fill: "#DEDEDE", height: "54", rx: "3", width: "88" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", { fill: "#979BA1", fontFamily: "Avenir Next", fontSize: "6", fontWeight: "420", letterSpacing: ".2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tspan", { x: "11", y: "35" }, "3712 567890 374"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tspan", { x: "70.21", y: "35" }, "5")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M69.182 26.767h-.55v-3.35l-.762.635-.324-.38 1.142-.926h.494v4.02zm4.19 0H70.75v-.528l1.6-1.59c.122-.126.226-.257.313-.393s.13-.29.13-.46c0-.106-.018-.202-.056-.287-.038-.085-.09-.158-.153-.22-.065-.06-.14-.106-.228-.138-.087-.032-.18-.048-.278-.048-.204 0-.373.065-.505.196-.133.13-.216.298-.25.503l-.54-.09c.023-.153.07-.294.145-.424.074-.132.168-.246.28-.342.115-.097.246-.17.396-.224.15-.053.31-.08.48-.08.166 0 .326.025.48.074.153.05.288.12.406.216.117.094.21.214.28.357.07.145.106.31.106.496 0 .128-.017.248-.05.357-.035.11-.082.214-.14.313-.06.098-.128.192-.208.28-.08.09-.162.178-.25.265l-1.306 1.273h1.97v.494zm1.625-2.328h.176c.114 0 .225-.012.333-.033.107-.02.203-.056.286-.107.084-.052.15-.12.202-.208.05-.087.077-.195.077-.323 0-.104-.018-.196-.056-.277-.038-.08-.09-.15-.156-.207-.067-.057-.142-.102-.227-.134-.085-.032-.175-.048-.27-.048-.17 0-.314.044-.434.13-.12.088-.21.21-.27.364l-.5-.176c.1-.242.257-.433.475-.57.22-.14.47-.208.753-.208.167 0 .325.024.475.07.15.048.28.117.394.208.114.09.204.205.27.34.066.137.1.294.1.472 0 .114-.018.22-.054.318-.036.1-.086.188-.148.267-.063.08-.137.147-.224.204-.087.057-.182.098-.284.125v.01c.117.023.226.063.326.12.1.056.187.127.26.212.07.086.127.183.17.293.04.11.06.23.06.358 0 .2-.036.377-.112.53-.076.154-.176.282-.3.384-.126.102-.27.18-.433.233-.163.053-.33.08-.5.08-.318 0-.598-.073-.84-.216-.242-.144-.418-.368-.528-.67l.51-.17c.06.173.165.315.31.425.146.11.325.164.537.164.102 0 .202-.016.298-.05.097-.03.183-.08.26-.143.074-.064.135-.143.18-.238.046-.095.07-.206.07-.335 0-.14-.032-.257-.092-.352-.06-.095-.14-.17-.236-.23-.097-.06-.205-.1-.327-.125-.12-.025-.24-.037-.357-.037h-.17v-.454zm4.73.953h.58v.47h-.58v.904h-.533v-.903h-1.85v-.5l1.708-2.618h.676v2.647zm-.533-2.016h-.01l-1.273 2.016h1.284v-2.016z", fill: "#636363", opacity: ".9" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { height: "18", rx: "40", stroke: "#ED6A6A", strokeWidth: "2", width: "18", x: "65", y: "16" }))));
const IconCardCodeAmex = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconCardCodeAmexSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconCardCodeAmex));


/***/ },

/***/ "./packages/ui/src/icon/IconCardCodeVisa.tsx"
/*!***************************************************!*\
  !*** ./packages/ui/src/icon/IconCardCodeVisa.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconCardCodeVisaSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "54", viewBox: "0 0 88 54", width: "88", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "CVV visa, mc, disc"),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { fill: "none", fillRule: "evenodd" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { fill: "#DEDEDE", height: "54", rx: "3", width: "88" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 5h88v12H0z", fill: "#838383" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3 23h82v10H3z", fill: "#FFF" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M69.81 29.053c.015.297.13.502.343.616.11.058.233.088.37.088.258 0 .477-.107.66-.32.18-.215.31-.65.384-1.306-.12.19-.267.322-.444.4-.176.076-.366.114-.57.114-.412 0-.74-.13-.98-.386-.24-.257-.36-.588-.36-.993 0-.388.12-.73.357-1.025.237-.295.587-.443 1.05-.443.623 0 1.054.28 1.29.842.133.31.2.696.2 1.16 0 .525-.08.99-.238 1.394-.26.674-.703 1.01-1.327 1.01-.42 0-.737-.11-.954-.328-.217-.22-.325-.494-.325-.825h.544zm1.4-1.09c.176-.14.265-.387.265-.737 0-.315-.08-.55-.238-.705-.16-.153-.36-.23-.606-.23-.262 0-.47.088-.625.264-.155.177-.232.412-.232.707 0 .28.068.502.203.667.136.164.352.246.65.246.213 0 .408-.07.584-.21zm3.414-.563c.133-.132.2-.29.2-.474 0-.16-.064-.306-.19-.44-.13-.133-.323-.2-.585-.2-.26 0-.447.067-.563.2-.115.134-.173.29-.173.47 0 .202.075.36.224.473.15.112.326.17.53.17.237 0 .422-.067.556-.2zm.097 2.118c.165-.135.247-.336.247-.603 0-.277-.084-.487-.254-.63-.17-.144-.386-.216-.652-.216-.256 0-.466.072-.628.22-.163.145-.244.348-.244.607 0 .223.074.416.223.58.15.16.38.243.69.243.25 0 .456-.068.62-.202zm-1.735-1.937c-.158-.158-.236-.365-.236-.62 0-.32.114-.594.345-.823.232-.23.56-.344.984-.344.41 0 .732.108.965.325.233.216.35.47.35.758 0 .267-.068.483-.203.65-.076.092-.194.184-.353.274.176.08.316.175.418.28.19.2.284.46.284.778 0 .377-.127.697-.38.96-.253.26-.61.392-1.074.392-.416 0-.77-.113-1.057-.34-.287-.226-.43-.554-.43-.985 0-.253.06-.472.184-.656.124-.186.307-.327.55-.424-.15-.064-.265-.14-.35-.225zm5.614-1.42c.188.248.282.503.282.766h-.532c-.032-.17-.083-.302-.153-.397-.13-.18-.326-.27-.59-.27-.3 0-.54.14-.717.417-.177.278-.276.676-.296 1.194.124-.18.28-.316.467-.405.172-.08.364-.12.575-.12.36 0 .672.115.94.344.266.228.4.57.4 1.025 0 .388-.127.733-.38 1.033-.253.3-.614.45-1.083.45-.4 0-.746-.152-1.037-.456-.29-.304-.437-.816-.437-1.536 0-.532.065-.983.194-1.354.25-.71.705-1.065 1.367-1.065.478 0 .81.124 1 .372zm-.404 3.274c.14-.19.21-.415.21-.674 0-.22-.062-.43-.188-.627-.126-.198-.354-.297-.685-.297-.23 0-.434.076-.608.23-.175.153-.262.385-.262.694 0 .27.08.498.238.683.16.184.38.277.66.277.283 0 .495-.096.636-.286z", fill: "#636363" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { height: "18", rx: "40", stroke: "#ED6A6A", strokeWidth: "2", width: "18", x: "65", y: "19" }))));
const IconCardCodeVisa = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconCardCodeVisaSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconCardCodeVisa));


/***/ },

/***/ "./packages/ui/src/icon/IconHelp.tsx"
/*!*******************************************!*\
  !*** ./packages/ui/src/icon/IconHelp.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconHelpSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })));
const IconHelp = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconHelpSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconHelp));


/***/ },

/***/ "./packages/ui/src/icon/IconLock.tsx"
/*!*******************************************!*\
  !*** ./packages/ui/src/icon/IconLock.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconLockSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })));
const IconLock = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconLockSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconLock));


/***/ },

/***/ "./packages/ui/src/tooltip/TooltipTrigger.tsx"
/*!****************************************************!*\
  !*** ./packages/ui/src/tooltip/TooltipTrigger.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//# sourceMappingURL=packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_form_FormF-efc464.js.map