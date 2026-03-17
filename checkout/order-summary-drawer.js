"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["order-summary-drawer"],{

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


/***/ }

}]);
//# sourceMappingURL=order-summary-drawer.js.map