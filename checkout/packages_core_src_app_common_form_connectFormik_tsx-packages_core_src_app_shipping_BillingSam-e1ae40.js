(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_common_form_connectFormik_tsx-packages_core_src_app_shipping_BillingSam-e1ae40"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/ui/src/tooltip/Tooltip.scss"
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/ui/src/tooltip/Tooltip.scss ***!
  \*******************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".tooltip--basic {\n  display: block;\n  left: auto;\n  position: relative;\n  visibility: inherit;\n  width: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/ui/src/tooltip/Tooltip.scss"
/*!**********************************************!*\
  !*** ./packages/ui/src/tooltip/Tooltip.scss ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./Tooltip.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/ui/src/tooltip/Tooltip.scss");

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

/***/ "./packages/core/src/app/common/form/connectFormik.tsx"
/*!*************************************************************!*\
  !*** ./packages/core/src/app/common/form/connectFormik.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectFormik)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);




function connectFormik(OriginalComponent) {
    const InnerComponent = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OriginalComponent, Object.assign({}, props)), (_a, _b) => {
        var { formik: prevFormik } = _a, prevProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["formik"]);
        var nextFormik = _b.formik, nextProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["formik"]);
        return shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(prevFormik, nextFormik) && shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(prevProps, nextProps);
    });
    const DecoratedComponent = (0,formik__WEBPACK_IMPORTED_MODULE_1__.connect)(InnerComponent);
    DecoratedComponent.displayName = `ConnectFormik(${OriginalComponent.displayName || OriginalComponent.name})`;
    return DecoratedComponent;
}


/***/ },

/***/ "./packages/core/src/app/shipping/BillingSameAsShippingField.tsx"
/*!***********************************************************************!*\
  !*** ./packages/core/src/app/shipping/BillingSameAsShippingField.tsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");



const BillingSameAsShippingField = ({ disabled, labelStringId = 'billing.use_shipping_address_label', onChange, }) => {
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: labelStringId }), [labelStringId]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { disabled: disabled, id: "sameAsBilling", labelContent: labelContent, name: "billingSameAsShipping", onChange: onChange, testId: "billingSameAsShipping" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BillingSameAsShippingField));


/***/ },

/***/ "./packages/ui/src/accordion/Accordion.tsx"
/*!*************************************************!*\
  !*** ./packages/ui/src/accordion/Accordion.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccordionContext */ "./packages/ui/src/accordion/AccordionContext.tsx");




const Accordion = ({ children, className = 'accordion', defaultSelectedItemId, isDisabled, onSelect = lodash__WEBPACK_IMPORTED_MODULE_1__.noop, }) => {
    const [selectedItemId, setSelectedItemId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultSelectedItemId);
    const handleToggleItem = (id) => {
        if (isDisabled) {
            return;
        }
        setSelectedItemId(id);
        onSelect(id);
    };
    const getContextValue = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_0__.memoizeOne)((newSelectedItemId) => {
        return {
            onToggle: handleToggleItem,
            selectedItemId: newSelectedItemId,
        };
    });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, { value: getContextValue(selectedItemId) },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: className }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ },

/***/ "./packages/ui/src/accordion/AccordionContext.tsx"
/*!********************************************************!*\
  !*** ./packages/ui/src/accordion/AccordionContext.tsx ***!
  \********************************************************/
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


const AccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({ onToggle: lodash__WEBPACK_IMPORTED_MODULE_0__.noop });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionContext);


/***/ },

/***/ "./packages/ui/src/accordion/AccordionItem.tsx"
/*!*****************************************************!*\
  !*** ./packages/ui/src/accordion/AccordionItem.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccordionContext */ "./packages/ui/src/accordion/AccordionContext.tsx");




const AccordionItem = ({ bodyClassName = 'accordion-item-body', children, className = 'accordion-item', classNameSelected = 'accordion-item--selected', headerClassName = 'accordion-item-header', headerClassNameSelected = 'accordion-item-header--selected', headerContent, itemId, }) => {
    const { onToggle, selectedItemId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AccordionContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const isSelected = selectedItemId === itemId;
    const transitionEndListener = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node, done) => {
        node.addEventListener('transitionend', ({ target }) => {
            if (target === node) {
                done();
            }
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, { [classNameSelected]: isSelected }) },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(headerClassName, { [headerClassNameSelected]: isSelected }) }, headerContent({ isSelected, onToggle })),
        children ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], { addEndListener: transitionEndListener, classNames: bodyClassName, in: isSelected, mountOnEnter: true, timeout: {}, unmountOnExit: true },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-live": "polite", className: bodyClassName }, children))) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AccordionItem));


/***/ },

/***/ "./packages/ui/src/form/Checklist/Checklist.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/form/Checklist/Checklist.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checklist: () => (/* binding */ Checklist),
/* harmony export */   ChecklistContext: () => (/* binding */ ChecklistContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../accordion */ "./packages/ui/src/accordion/Accordion.tsx");





const ChecklistContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(undefined);
const Checklist = (_a) => {
    var { defaultSelectedItemId, name, onSelect = lodash__WEBPACK_IMPORTED_MODULE_2__.noop } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["defaultSelectedItemId", "name", "onSelect"]);
    const { setFieldValue } = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormikContext)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (defaultSelectedItemId) {
            void setFieldValue(name, defaultSelectedItemId);
        }
        return () => {
            void setFieldValue(name, '');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((value) => {
        void setFieldValue(name, value);
        onSelect(value);
    }, [name, onSelect, setFieldValue]);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => ({ name }), [name]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ChecklistContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { className: "form-checklist optimizedCheckout-form-checklist", defaultSelectedItemId: defaultSelectedItemId, onSelect: handleSelect }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(Checklist));


/***/ },

/***/ "./packages/ui/src/form/ChecklistItem/ChecklistItem.tsx"
/*!**************************************************************!*\
  !*** ./packages/ui/src/form/ChecklistItem/ChecklistItem.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../accordion */ "./packages/ui/src/accordion/AccordionItem.tsx");
/* harmony import */ var _BasicFormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BasicFormField */ "./packages/ui/src/form/BasicFormField/BasicFormField.tsx");
/* harmony import */ var _Checklist_Checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Checklist/Checklist */ "./packages/ui/src/form/Checklist/Checklist.tsx");
/* harmony import */ var _ChecklistItemInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ChecklistItemInput */ "./packages/ui/src/form/ChecklistItemInput/ChecklistItemInput.tsx");








const ChecklistItem = (_a) => {
    var { isDisabled, isReadOnly, value, content, htmlId = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(value), label } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["isDisabled", "isReadOnly", "value", "content", "htmlId", "label"]);
    const { name = '' } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Checklist_Checklist__WEBPACK_IMPORTED_MODULE_6__.ChecklistContext) || {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((isSelected) => ({ field }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ChecklistItemInput__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, field, { "aria-disabled": isReadOnly || undefined, disabled: isDisabled, id: htmlId, isSelected: field.value === value, onChange: isReadOnly ? lodash__WEBPACK_IMPORTED_MODULE_2__.noop : field.onChange, value: value }), label instanceof Function ? label(isSelected) : label))), [htmlId, isDisabled, isReadOnly, label, value]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((onToggle) => (selectedValue) => {
        if (value === selectedValue) {
            onToggle(value);
        }
    }), []);
    const renderHeaderContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({ isSelected, onToggle }) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_BasicFormField__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "form-checklist-option", name: name, onChange: handleChange(onToggle), render: renderInput(isSelected) })), [handleChange, name, renderInput]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, { bodyClassName: "form-checklist-body", className: "form-checklist-item optimizedCheckout-form-checklist-item", classNameSelected: "form-checklist-item--selected optimizedCheckout-form-checklist-item--selected", headerClassName: "form-checklist-header", headerClassNameSelected: "form-checklist-header--selected", headerContent: renderHeaderContent, itemId: value }), content));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(ChecklistItem));


/***/ },

/***/ "./packages/ui/src/form/ChecklistItemInput/ChecklistItemInput.tsx"
/*!************************************************************************!*\
  !*** ./packages/ui/src/form/ChecklistItemInput/ChecklistItemInput.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input */ "./packages/ui/src/form/Input/Input.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Label */ "./packages/ui/src/form/Label/Label.tsx");




const ChecklistItemInput = (_a) => {
    var { id, isSelected, children } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["id", "isSelected", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, { checked: isSelected, className: "form-checklist-checkbox optimizedCheckout-form-checklist-checkbox", id: id, type: "radio" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], { htmlFor: id }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChecklistItemInput);


/***/ },

/***/ "./packages/ui/src/tooltip/Tooltip.tsx"
/*!*********************************************!*\
  !*** ./packages/ui/src/tooltip/Tooltip.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.scss */ "./packages/ui/src/tooltip/Tooltip.scss");
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_scss__WEBPACK_IMPORTED_MODULE_1__);


const Tooltip = ({ children, testId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip tooltip--basic", "data-test": testId }, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


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
//# sourceMappingURL=packages_core_src_app_common_form_connectFormik_tsx-packages_core_src_app_shipping_BillingSam-e1ae40.js.map