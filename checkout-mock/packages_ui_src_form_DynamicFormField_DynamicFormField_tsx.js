(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_ui_src_form_DynamicFormField_DynamicFormField_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.scss"
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.scss ***!
  \**********************************************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".multiCheckbox--controls {\n  list-style: none;\n  margin: 0 0 0.75rem;\n  padding: 0;\n}\n\n.multiCheckbox--control {\n  display: inline-block;\n  margin-right: 0.375rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.scss"
/*!*************************************************************************!*\
  !*** ./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.scss ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./MultiCheckboxControl.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/locale/src/withDate.tsx"
/*!******************************************!*\
  !*** ./packages/locale/src/withDate.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/LocaleContext.ts");
/* harmony import */ var _bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/legacy-hoc */ "./packages/legacy-hoc/src/createInjectHoc.tsx");


const withDate = (0,_bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_1__["default"])(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_0__.LocaleContext, {
    displayNamePrefix: 'withDate',
    pickProps: (value, key) => key === 'date' && !!value,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDate);


/***/ },

/***/ "./packages/ui/src/form/DynamicFormField/CheckboxGroupFormField.tsx"
/*!**************************************************************************!*\
  !*** ./packages/ui/src/form/DynamicFormField/CheckboxGroupFormField.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormFieldContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormFieldContainer */ "./packages/ui/src/form/FormFieldContainer/FormFieldContainer.tsx");
/* harmony import */ var _FormFieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormFieldError */ "./packages/ui/src/form/FormFieldError/FormFieldError.tsx");
/* harmony import */ var _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DynamicFormFieldType */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");
/* harmony import */ var _DynamicInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DynamicInput */ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx");
/* harmony import */ var _MultiCheckboxControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiCheckboxControl */ "./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.tsx");








const MultiCheckboxFormField = ({ form: { values, errors }, id, label, name, onChange = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, options, push, remove, }) => {
    const handleSelectAll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const checkedValues = (0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name) || [];
        (0,lodash__WEBPACK_IMPORTED_MODULE_1__.difference)(options.map(({ value }) => value), checkedValues).forEach((val) => push(val));
        onChange((0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name));
    }, [name, onChange, options, push, values]);
    const handleSelectNone = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const checkedValues = (0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name) || [];
        checkedValues.forEach(() => remove(0));
        onChange((0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name));
    }, [name, onChange, remove, values]);
    const handleInputChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const checkedValues = (0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name) || [];
        const { value, checked } = event.target;
        if (checked) {
            push(value);
        }
        else {
            remove(checkedValues.indexOf(value));
        }
        onChange((0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name));
    }, [name, onChange, push, remove, values]);
    return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FormFieldContainer__WEBPACK_IMPORTED_MODULE_3__["default"], { hasError: (0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(errors, name) && (0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(errors, name).length },
        label,
        options.length > 1 && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MultiCheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], { onSelectedAll: handleSelectAll, onSelectedNone: handleSelectNone, testId: id })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_DynamicInput__WEBPACK_IMPORTED_MODULE_6__["default"], { fieldType: _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_5__["default"].CHECKBOX, id: id, name: name, onChange: handleInputChange, options: options, 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value: (0,formik__WEBPACK_IMPORTED_MODULE_0__.getIn)(values, name) || [] }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FormFieldError__WEBPACK_IMPORTED_MODULE_4__["default"]
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        , { 
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            errorId: `${id !== null && id !== void 0 ? id : name}-field-error-message`, name: name, testId: `${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(name)}-field-error-message` })));
};
const CheckboxGroupFormField = ({ id, label, name, onChange, options, }) => {
    const renderField = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((renderProps) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(MultiCheckboxFormField, Object.assign({ id: id, label: label, name: name, onChange: onChange, options: options }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(renderProps, ['form', 'pop', 'push', 'remove'])))), [id, label, name, onChange, options]);
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.FieldArray, { name: name, render: renderField });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(CheckboxGroupFormField));


/***/ },

/***/ "./packages/ui/src/form/DynamicFormField/DynamicFormField.tsx"
/*!********************************************************************!*\
  !*** ./packages/ui/src/form/DynamicFormField/DynamicFormField.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormField */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Label */ "./packages/ui/src/form/Label/Label.tsx");
/* harmony import */ var _CheckboxGroupFormField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckboxGroupFormField */ "./packages/ui/src/form/DynamicFormField/CheckboxGroupFormField.tsx");
/* harmony import */ var _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DynamicFormFieldType */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");
/* harmony import */ var _DynamicInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DynamicInput */ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx");









const DynamicFormField = ({ field: { fieldType, type, secret, name, label: fieldLabel, required, options, max, min, maxLength, }, parentFieldName, onChange, placeholder, inputId, autocomplete, label, extraClass, isFloatingLabelEnabled, }) => {
    const fieldInputId = inputId || name;
    const fieldName = parentFieldName ? `${parentFieldName}.${name}` : name;
    const isFloatingLabelSupportedFieldType = Boolean(isFloatingLabelEnabled &&
        ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(['text', 'password', 'dropdown', 'date', 'multiline'], fieldType) ||
            !fieldType));
    const labelComponent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        let labelClassName = 'body-medium';
        if (isFloatingLabelSupportedFieldType) {
            labelClassName = 'floating-form-field-label';
        }
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: labelClassName, htmlFor: fieldInputId, id: `${fieldInputId}-label`, isFloatingLabelEnabled: isFloatingLabelSupportedFieldType },
            label || fieldLabel,
            !required && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                ' ',
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("small", { className: "optimizedCheckout-contentSecondary" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "common.optional_text" }))))));
    }, [fieldInputId, isFloatingLabelSupportedFieldType, label, fieldLabel, required]);
    const dynamicFormFieldType = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (fieldType === 'text') {
            if (type === 'integer') {
                return _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_7__["default"].NUMBER;
            }
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(name, 'phone') || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(name, 'tel')) {
                return _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_7__["default"].TELEPHONE;
            }
            return secret ? _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_7__["default"].PASSWORD : _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_7__["default"].TEXT;
        }
        return fieldType;
    }, [fieldType, type, secret, name]);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_DynamicInput__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, field, { "aria-labelledby": `${fieldInputId}-label ${fieldInputId}-field-error-message`, autoComplete: autocomplete, fieldType: dynamicFormFieldType, id: fieldInputId, isFloatingLabelEnabled: isFloatingLabelSupportedFieldType, max: max, maxLength: maxLength || undefined, min: min, options: options && options.items, placeholder: placeholder || (options && options.helperLabel), rows: options === null || options === void 0 ? void 0 : options.rows }))), [
        fieldInputId,
        autocomplete,
        dynamicFormFieldType,
        isFloatingLabelSupportedFieldType,
        max,
        maxLength,
        min,
        options,
        placeholder,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('dynamic-form-field', { 'floating-form-field': isFloatingLabelSupportedFieldType }, extraClass) }, fieldType === _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_7__["default"].CHECKBOX ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CheckboxGroupFormField__WEBPACK_IMPORTED_MODULE_6__["default"], { id: fieldInputId, label: labelComponent, name: fieldName, onChange: onChange, options: (options && options.items) || [] })) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], { id: fieldInputId, input: renderInput, isFloatingLabelEnabled: isFloatingLabelSupportedFieldType, label: labelComponent, name: fieldName, onChange: onChange }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(DynamicFormField));


/***/ },

/***/ "./packages/ui/src/form/DynamicFormField/DynamicInput.tsx"
/*!****************************************************************!*\
  !*** ./packages/ui/src/form/DynamicFormField/DynamicInput.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withDate.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon */ "./packages/ui/src/icon/IconChevronDown.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CheckboxInput */ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx");
/* harmony import */ var _RadioInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RadioInput */ "./packages/ui/src/form/RadioInput/RadioInput.tsx");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TextArea */ "./packages/ui/src/form/TextArea/TextArea.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TextInput */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DynamicFormFieldType */ "./packages/ui/src/form/DynamicFormField/DynamicFormFieldType.ts");











const ReactDatePicker = (0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(() => __webpack_require__.e(/*! import() | react-datepicker */ "react-datepicker").then(__webpack_require__.t.bind(__webpack_require__, /*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js", 23)));
const DynamicInput = (_a) => {
    var { fieldType, id, name, onChange = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, options, placeholder, value, isFloatingLabelEnabled, date, inputDateFormat } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["fieldType", "id", "name", "onChange", "options", "placeholder", "value", "isFloatingLabelEnabled", "date", "inputDateFormat"]);
    const inputFormat = inputDateFormat || date.inputFormat || '';
    const handleDateChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((dateValue, event) => onChange(Object.assign(Object.assign({}, event), { target: {
            name,
            value: dateValue,
        } })), [onChange, name]);
    switch (fieldType) {
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].DROPDOWM:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'dropdown-chevron': !isFloatingLabelEnabled }, { 'floating-select-chevron': isFloatingLabelEnabled }) },
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null)),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("select", Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-select': isFloatingLabelEnabled }, 'form-select optimizedCheckout-form-select', { 'floating-form-field-input': isFloatingLabelEnabled }), "data-test": `${id}-select`, id: id, name: name, onChange: onChange, value: value !== null && value !== void 0 ? value : '' }),
                    !!placeholder && react__WEBPACK_IMPORTED_MODULE_3___default().createElement("option", { value: "" }, placeholder),
                    options &&
                        options.map(({ label, value: optionValue }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("option", { key: optionValue, value: optionValue }, label))))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].RADIO:
            if (!options || !options.length) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, options.map(({ label, value: optionValue }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_RadioInput__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, { checked: optionValue === value, id: `${id}-${optionValue}`, key: optionValue, label: label, name: name, onChange: onChange, testId: `${id}-${optionValue}-radio`, value: optionValue }))))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].CHECKBOX:
            if (!options || !options.length) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, options.map(({ label, value: optionValue }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, rest, { checked: Array.isArray(value) ? value.includes(optionValue) : false, id: `${id}-${optionValue}`, key: optionValue, label: label, name: name, onChange: onChange, testId: `${id}-${optionValue}-checkbox`, value: optionValue }))))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].DATE:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ReactDatePicker
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                , Object.assign({}, rest, { autoComplete: "off", 
                    // FIXME: we can avoid this by simply using onChangeRaw, but it's not being triggered properly
                    // https://github.com/Hacker0x01/react-datepicker/issues/1357
                    // onChangeRaw={ rest.onChange }
                    calendarClassName: "optimizedCheckout-contentPrimary", className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input optimizedCheckout-form-input', {
                        'floating-input floating-form-field-input': isFloatingLabelEnabled,
                    }), dateFormat: inputFormat, maxDate: rest.max ? new Date(`${rest.max}T00:00:00Z`) : undefined, minDate: rest.min ? new Date(`${rest.min}T00:00:00Z`) : undefined, name: name, onChange: handleDateChange, placeholderText: inputFormat.toUpperCase(), popperClassName: "optimizedCheckout-contentPrimary", selected: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isDate)(value) ? value : undefined }))));
        case _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].MULTILINE:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TextArea__WEBPACK_IMPORTED_MODULE_8__["default"]
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            , Object.assign({}, rest, { id: id, isFloatingLabelEnabled: isFloatingLabelEnabled, name: name, onChange: onChange, testId: `${id}-text`, type: fieldType, value: value })));
        default:
            return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, rest, { id: id, isFloatingLabelEnabled: isFloatingLabelEnabled, name: name, onChange: onChange, placeholder: placeholder, testId: `${id}-${fieldType === _DynamicFormFieldType__WEBPACK_IMPORTED_MODULE_10__["default"].PASSWORD ? 'password' : 'text'}`, type: fieldType, value: value })));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"])(DynamicInput)));


/***/ },

/***/ "./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.tsx"
/*!************************************************************************!*\
  !*** ./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _MultiCheckboxControl_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiCheckboxControl.scss */ "./packages/ui/src/form/DynamicFormField/MultiCheckboxControl.scss");
/* harmony import */ var _MultiCheckboxControl_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MultiCheckboxControl_scss__WEBPACK_IMPORTED_MODULE_2__);
/* istanbul ignore file */



const MultiCheckboxControl = ({ testId, onSelectedAll, onSelectedNone, }) => {
    const handleSelectAllClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event) => {
        event.preventDefault();
        onSelectedAll();
    }, [onSelectedAll]);
    const handleSelectNoneClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event) => {
        event.preventDefault();
        onSelectedNone();
    }, [onSelectedNone]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "multiCheckbox--controls body-regular" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "multiCheckbox--control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "address.select" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "multiCheckbox--control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "data-test": `${testId}Checkbox-all-button`, href: "#", onClick: handleSelectAllClick },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "address.select_all" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "multiCheckbox--control" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "data-test": `${testId}Checkbox-none-button`, href: "#", onClick: handleSelectNoneClick },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "address.select_none" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(MultiCheckboxControl));


/***/ },

/***/ "./packages/ui/src/form/RadioInput/RadioInput.tsx"
/*!********************************************************!*\
  !*** ./packages/ui/src/form/RadioInput/RadioInput.tsx ***!
  \********************************************************/
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
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input/Input */ "./packages/ui/src/form/Input/Input.tsx");
/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Label/Label */ "./packages/ui/src/form/Label/Label.tsx");





const RadioInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, label, value, checked, id } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "label", "value", "checked", "id"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { checked: checked, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-radio', 'optimizedCheckout-form-radio', additionalClassName), id: id, ref: ref, type: "radio", value: value })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "body-regular", htmlFor: id }, label)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioInput);


/***/ },

/***/ "./packages/ui/src/form/TextArea/TextArea.tsx"
/*!****************************************************!*\
  !*** ./packages/ui/src/form/TextArea/TextArea.tsx ***!
  \****************************************************/
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



const TextArea = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, testId, className, isFloatingLabelEnabled } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "testId", "className", "isFloatingLabelEnabled"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", Object.assign({}, rest, { className: className ||
            classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'floating-textarea': isFloatingLabelEnabled }, 'form-input', 'optimizedCheckout-form-input', additionalClassName, 'body-regular'), "data-test": testId, ref: ref })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ },

/***/ "./packages/ui/src/icon/IconChevronDown.tsx"
/*!**************************************************!*\
  !*** ./packages/ui/src/icon/IconChevronDown.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconChevronDownSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })));
const IconChevronDown = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconChevronDownSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconChevronDown));


/***/ }

}]);
//# sourceMappingURL=packages_ui_src_form_DynamicFormField_DynamicFormField_tsx.js.map