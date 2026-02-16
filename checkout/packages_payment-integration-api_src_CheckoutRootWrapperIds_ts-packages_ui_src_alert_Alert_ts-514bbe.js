"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe"],{

/***/ "./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts":
/*!************************************************************************!*\
  !*** ./packages/payment-integration-api/src/CheckoutRootWrapperIds.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECKOUT_ROOT_NODE_ID: () => (/* binding */ CHECKOUT_ROOT_NODE_ID),
/* harmony export */   MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID: () => (/* binding */ MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID)
/* harmony export */ });
const CHECKOUT_ROOT_NODE_ID = 'checkout-app';
const MICRO_APP_NG_CHECKOUT_ROOT_NODE_ID = 'micro-app-ng-checkout';


/***/ }),

/***/ "./packages/ui/src/alert/Alert.tsx":
/*!*****************************************!*\
  !*** ./packages/ui/src/alert/Alert.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertType: () => (/* binding */ AlertType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./packages/ui/src/icon/IconError.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./packages/ui/src/icon/IconInfo.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./packages/ui/src/icon/IconSuccess.tsx");



var AlertType;
(function (AlertType) {
    AlertType["Error"] = "error";
    AlertType["Info"] = "info";
    AlertType["Success"] = "success";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
function renderDefaultIcon(type) {
    switch (type) {
        case AlertType.Error:
        case AlertType.Warning:
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], null);
        case AlertType.Success:
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], null);
        case AlertType.Info:
        default:
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
}
const Alert = ({ additionalClassName, children, icon, testId, type, }) => {
    const describedBy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-describedby": describedBy, className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('alertBox', additionalClassName, { 'alertBox--info': type === AlertType.Info || !type }, { 'alertBox--error': type === AlertType.Error }, { 'alertBox--success': type === AlertType.Success }, { 'alertBox--warning': type === AlertType.Warning }), "data-test": testId },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "alertBox-column alertBox-icon" }, icon || renderDefaultIcon(type)),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-live": type === AlertType.Error ? 'assertive' : 'polite', className: "alertBox-column alertBox-message", id: describedBy, role: type === AlertType.Error ? 'alert' : 'status' }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ "./packages/ui/src/button/Button.tsx":
/*!*******************************************!*\
  !*** ./packages/ui/src/button/Button.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx":
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/BasicFormField/BasicFormField.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormFieldContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormFieldContainer */ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx");






const InnerFieldInput = (_a) => {
    var { field, onChange = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, component = 'input', render } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["field", "onChange", "component", "render"]);
    const prevValueRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(field.value);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const comparableValue = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isDate)(field.value) ? field.value.getTime() : field.value;
        const comparablePrevValue = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isDate)(prevValueRef.current)
            ? prevValueRef.current.getTime()
            : prevValueRef.current;
        if (comparableValue !== comparablePrevValue) {
            onChange(field.value);
        }
        prevValueRef.current = field.value;
    }, [field.value, onChange]);
    if (render) {
        return render(Object.assign({ field }, props));
    }
    if (typeof component === 'string') {
        return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(component, field);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(component, Object.assign({ field }, props));
};
const InnerField = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ additionalClassName, component, field, form, onChange, render, testId }) => {
    const input = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(InnerFieldInput, { component: component, field: field, form: form, meta: form.getFieldMeta(field.name), onChange: onChange, render: render })), [field, form, onChange, component, render]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormFieldContainer__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: additionalClassName, 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        hasError: (0,formik__WEBPACK_IMPORTED_MODULE_1__.getIn)(form.errors, field.name), testId: testId }, input));
}, (_a, _b) => {
    var { form: prevForm, field: prevField } = _a, prevProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["form", "field"]);
    var nextForm = _b.form, nextField = _b.field, nextProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["form", "field"]);
    return shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(prevProps, nextProps) &&
        shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(prevForm, nextForm) &&
        shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(prevField, nextField);
});
const BasicFormField = (_a) => {
    var { additionalClassName, className, component, render, testId, onChange } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "className", "component", "render", "testId", "onChange"]);
    const renderInnerField = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(InnerField, Object.assign({}, props, { additionalClassName: additionalClassName, className: className, component: component, onChange: onChange, render: render, testId: testId }))), [additionalClassName, className, component, render, testId, onChange]);
    return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, Object.assign({}, rest), renderInnerField);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(BasicFormField));


/***/ }),

/***/ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx":
/*!**************************************************************!*\
  !*** ./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    var { additionalClassName, label, id, themeV2 } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id", "themeV2"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', { 'floating-form-field-input': themeV2 }, additionalClassName), id: id, ref: ref, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ }),

/***/ "./packages/ui/src/form/Fieldset/Fieldset.tsx":
/*!****************************************************!*\
  !*** ./packages/ui/src/form/Fieldset/Fieldset.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Fieldset = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, children, className, legend, testId } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "children", "className", "legend", "testId"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("fieldset", Object.assign({}, rest, { className: className || classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-fieldset', additionalClassName), "data-test": testId, ref: ref }),
        legend,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-body" }, children)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fieldset);


/***/ }),

/***/ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx":
/*!************************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./packages/ui/src/form/contexts/FormContext.tsx");



const FormFieldContainer = ({ additionalClassName, children, className, hasError, testId, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, null, ({ isSubmitted }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className ||
        classnames__WEBPACK_IMPORTED_MODULE_0___default()('form-field', additionalClassName, {
            'form-field--error': hasError && isSubmitted,
        }), "data-test": testId }, children))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormFieldContainer));


/***/ }),

/***/ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx":
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldError/FormFieldError.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./packages/ui/src/form/contexts/FormContext.tsx");



const FormFieldError = ({ name, testId, errorId }) => {
    const renderMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "form-field-errors", "data-test": testId },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: "form-field-error" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: name, id: errorId, role: "alert" }, message)))), [errorId, name, testId]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, null, ({ isSubmitted }) => isSubmitted && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, { name: name, render: renderMessage })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormFieldError));


/***/ }),

/***/ "./packages/ui/src/form/Input/Input.tsx":
/*!**********************************************!*\
  !*** ./packages/ui/src/form/Input/Input.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




const Input = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((_a, ref) => {
    var { className, testId, placeholder, name, isFloatingLabelEnabled } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["className", "testId", "placeholder", "name", "isFloatingLabelEnabled"]);
    const floatingLabelDisabledFieldNames = ['orderComment', 'redeemableCode'];
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
            'floating-input': isFloatingLabelEnabled &&
                !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.includes)(floatingLabelDisabledFieldNames, name),
        }),
        name, "data-test": testId, placeholder: isFloatingLabelEnabled ? ' ' : placeholder, ref: ref })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./packages/ui/src/form/Label/Label.tsx":
/*!**********************************************!*\
  !*** ./packages/ui/src/form/Label/Label.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Label = (_a) => {
    var { children, className, hidden, testId, isFloatingLabelEnabled, additionalClassName } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["children", "className", "hidden", "testId", "isFloatingLabelEnabled", "additionalClassName"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-label': isFloatingLabelEnabled }, className || 'form-label', { 'is-srOnly': hidden }, 'optimizedCheckout-form-label', additionalClassName), "data-test": testId }), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ }),

/***/ "./packages/ui/src/icon/IconClose.tsx":
/*!********************************************!*\
  !*** ./packages/ui/src/icon/IconClose.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconClose = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconClose));


/***/ }),

/***/ "./packages/ui/src/icon/IconError.tsx":
/*!********************************************!*\
  !*** ./packages/ui/src/icon/IconError.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconError = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "icon-error", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconError));


/***/ }),

/***/ "./packages/ui/src/icon/IconInfo.tsx":
/*!*******************************************!*\
  !*** ./packages/ui/src/icon/IconInfo.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconInfo = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconInfo));


/***/ }),

/***/ "./packages/ui/src/icon/IconSuccess.tsx":
/*!**********************************************!*\
  !*** ./packages/ui/src/icon/IconSuccess.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconSuccess = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconSuccess));


/***/ }),

/***/ "./packages/ui/src/modal/Modal.tsx":
/*!*****************************************!*\
  !*** ./packages/ui/src/modal/Modal.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./packages/ui/src/icon/IconClose.tsx");







const Modal = (_a) => {
    var { children, closeButtonLabel = 'Close', footer, header, additionalHeaderClassName, additionalBodyClassName, additionalModalClassName, onRequestClose = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, shouldShowCloseButton = false } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["children", "closeButtonLabel", "footer", "header", "additionalHeaderClassName", "additionalBodyClassName", "additionalModalClassName", "onRequestClose", "shouldShowCloseButton"]);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event) => {
        onRequestClose(event);
    }, [onRequestClose]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), Object.assign({}, rest, { ariaHideApp: "development" !== 'test', bodyOpenClassName: "has-activeModal", className: {
            base: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal optimizedCheckout-contentPrimary', additionalModalClassName),
            afterOpen: 'modal--afterOpen',
            beforeClose: 'modal--beforeClose',
        }, closeTimeoutMS: 200, onRequestClose: onRequestClose, overlayClassName: {
            base: 'modalOverlay',
            afterOpen: 'modalOverlay--afterOpen',
            beforeClose: 'modalOverlay--beforeClose',
        }, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: false }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal-header', additionalHeaderClassName) },
            header,
            shouldShowCloseButton && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { className: "modal-close", "data-test": "modal-close-button", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(handleClose) },
                Boolean(closeButtonLabel) && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", { className: "is-srOnly" }, closeButtonLabel)),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], null)))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal-body', additionalBodyClassName), "data-test": "modal-body" }, children),
        Boolean(footer) && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "modal-footer", "data-test": "modal-footer" }, footer))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./packages/ui/src/modal/ModalHeader.tsx":
/*!***********************************************!*\
  !*** ./packages/ui/src/modal/ModalHeader.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ModalHeader = ({ children, additionalClassName }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('modal-header-title optimizedCheckout-headingSecondary', additionalClassName), "data-test": "modal-heading" }, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);


/***/ })

}]);
//# sourceMappingURL=packages_payment-integration-api_src_CheckoutRootWrapperIds_ts-packages_ui_src_alert_Alert_ts-514bbe.js.map