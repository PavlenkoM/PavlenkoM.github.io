"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_common_utility_isFloatingLabelEnabled_ts-packages_core_src_app_formFiel-b6b174"],{

/***/ "./packages/core/src/app/common/utility/isFloatingLabelEnabled.ts"
/*!************************************************************************!*\
  !*** ./packages/core/src/app/common/utility/isFloatingLabelEnabled.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFloatingLabelEnabled)
/* harmony export */ });
function isFloatingLabelEnabled(checkoutSettings) {
    return Boolean(checkoutSettings.checkoutUserExperienceSettings.floatingLabelEnabled);
}


/***/ },

/***/ "./packages/core/src/app/formFields/mapCustomFormFieldsFromFormValues.ts"
/*!*******************************************************************************!*\
  !*** ./packages/core/src/app/formFields/mapCustomFormFieldsFromFormValues.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapCustomFormFieldsFromFormValues)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapCustomFormFieldsFromFormValues(customFieldsObject) {
    const customFields = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forIn)(customFieldsObject, (value, key) => {
        let fieldValue;
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isDate)(value)) {
            const padMonth = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)((value.getMonth() + 1).toString(), 2, '0');
            const padDay = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)(value.getDate().toString(), 2, '0');
            fieldValue = `${value.getFullYear()}-${padMonth}-${padDay}`;
        }
        else {
            fieldValue = value;
        }
        customFields.push({
            fieldId: key,
            fieldValue,
        });
    });
    return customFields;
}


/***/ },

/***/ "./packages/core/src/app/ui/form/CheckboxFormField.tsx"
/*!*************************************************************!*\
  !*** ./packages/core/src/app/ui/form/CheckboxFormField.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicFormField */ "./packages/core/src/app/ui/form/BasicFormField.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxInput */ "./packages/core/src/app/ui/form/CheckboxInput.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormFieldError */ "./packages/core/src/app/ui/form/FormFieldError.tsx");





const CheckboxFormField = ({ additionalClassName, disabled = false, labelContent, onChange, name, id, testId, }) => {
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, field, { checked: !!field.value, disabled: disabled, id: id || field.name, label: labelContent, testId: testId })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_4__["default"], { errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name)}-field-error-message` }))), [disabled, id, labelContent, name]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_2__["default"], { additionalClassName: additionalClassName, name: name, onChange: onChange, render: renderField }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CheckboxFormField));


/***/ },

/***/ "./packages/core/src/app/ui/form/CheckboxInput.tsx"
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/form/CheckboxInput.tsx ***!
  \*********************************************************/
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./packages/core/src/app/ui/form/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./packages/core/src/app/ui/form/Label.tsx");





const CheckboxInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, id, testId } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id", "testId"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', additionalClassName), id: id, ref: ref, testId: testId, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "body-regular", htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ },

/***/ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx"
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/BasicFormField/BasicFormField.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    var { additionalClassName, label, id } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "id"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-checkbox', 'optimizedCheckout-form-checkbox', additionalClassName, 'floating-form-field-input'), id: id, ref: ref, type: "checkbox" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ },

/***/ "./packages/ui/src/form/FormField/FormField.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/form/FormField/FormField.tsx ***!
  \******************************************************/
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

/***/ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx"
/*!************************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx"
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/FormFieldError/FormFieldError.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/ui/src/form/Input/Input.tsx"
/*!**********************************************!*\
  !*** ./packages/ui/src/form/Input/Input.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/ui/src/form/Label/Label.tsx"
/*!**********************************************!*\
  !*** ./packages/ui/src/form/Label/Label.tsx ***!
  \**********************************************/
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



const Label = (_a) => {
    var { children, className, hidden, testId, isFloatingLabelEnabled, additionalClassName } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["children", "className", "hidden", "testId", "isFloatingLabelEnabled", "additionalClassName"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-label floating-form-field-label': isFloatingLabelEnabled }, className || 'form-label', { 'is-srOnly': hidden }, 'optimizedCheckout-form-label', additionalClassName), "data-test": testId }), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ },

/***/ "./packages/ui/src/form/TextInput/TextInput.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/form/TextInput/TextInput.tsx ***!
  \******************************************************/
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




const TextInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, isFloatingLabelEnabled, appearFocused, type = 'text' } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "isFloatingLabelEnabled", "appearFocused", "type"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input', 'optimizedCheckout-form-input', { 'form-input--focus': appearFocused }, { 'optimizedCheckout-form-input--focus': appearFocused }, additionalClassName, { 'floating-form-field-input': isFloatingLabelEnabled }, { 'body-regular': !isFloatingLabelEnabled }), isFloatingLabelEnabled: isFloatingLabelEnabled, ref: ref, type: type })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ }

}]);
//# sourceMappingURL=packages_core_src_app_common_utility_isFloatingLabelEnabled_ts-packages_core_src_app_formFiel-b6b174.js.map