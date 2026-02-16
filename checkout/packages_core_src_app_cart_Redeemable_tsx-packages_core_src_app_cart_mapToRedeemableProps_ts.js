(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_cart_Redeemable_tsx-packages_core_src_app_cart_mapToRedeemableProps_ts"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/cart/AppliedRedeemable.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/cart/AppliedRedeemable.scss ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".form-checklist-checkbox ~ .form-label-redeemable:hover {\n  cursor: default;\n}\n.form-checklist-checkbox ~ .form-label-redeemable::before, .form-checklist-checkbox ~ .form-label-redeemable::after {\n  content: none;\n}\n\n.redeemable {\n  display: table;\n  padding: 1.5rem;\n  padding: 0;\n  width: 100%;\n}\n\n.redeemable-column {\n  display: table-cell;\n}\n\n.redeemable-actions {\n  vertical-align: middle;\n}\n\n.redeemable-action,\n.redeemable-info {\n  line-height: 1.5;\n}\n\n.redeemable-entry {\n  margin-top: 0.75rem;\n}\n\n.redeemable-info-header {\n  display: block;\n  margin-bottom: 0.25rem;\n}\n\n.redeemable-info-header--highlight {\n  font-weight: 600;\n}\n\n.redeemable-info-subHeader {\n  color: #798289;\n  font-size: 0.875rem;\n  line-height: 1;\n}\n\n.redeemable-info-subHeader--remaining {\n  display: block;\n}\n\n.redeemable-remove-action {\n  height: 1.375rem;\n  width: 1.375rem;\n}\n.redeemable-remove-action:hover svg {\n  fill: #00abc9;\n}\n\n.redeemable-label {\n  margin-top: 1rem;\n}\n\n@media (min-width: 1281px) {\n  .redeemable-payments {\n    display: none;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./packages/core/src/app/cart/AppliedRedeemable.scss":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/cart/AppliedRedeemable.scss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./AppliedRedeemable.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./packages/core/src/app/cart/AppliedRedeemable.scss");

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

/***/ }),

/***/ "./packages/core/src/app/cart/AppliedRedeemable.tsx":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/cart/AppliedRedeemable.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconRemove.tsx");
/* harmony import */ var _AppliedRedeemable_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppliedRedeemable.scss */ "./packages/core/src/app/cart/AppliedRedeemable.scss");
/* harmony import */ var _AppliedRedeemable_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AppliedRedeemable_scss__WEBPACK_IMPORTED_MODULE_4__);





const AppliedRedeemable = ({ children, isRemoving, onRemove, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-checklist-header" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-checklist-checkbox optimizedCheckout-form-checklist-checkbox" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "is-srOnly" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "redeemable.applied_text" }))),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-label form-label-redeemable" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "redeemable" },
            children,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "redeemable-column redeemable-actions" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('redeemable-remove', { 'is-loading': isRemoving }), "data-test": "redeemable-remove", disabled: isRemoving, onClick: onRemove, type: "button" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_3__["default"], null)))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppliedRedeemable);


/***/ }),

/***/ "./packages/core/src/app/cart/AppliedRedeemables.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/cart/AppliedRedeemables.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coupon */ "./packages/core/src/app/coupon/components/AppliedCoupon.tsx");
/* harmony import */ var _giftCertificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../giftCertificate */ "./packages/core/src/app/giftCertificate/AppliedGiftCertificate.tsx");
/* harmony import */ var _AppliedRedeemable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppliedRedeemable */ "./packages/core/src/app/cart/AppliedRedeemable.tsx");




const AppliedCouponChecklistItem = ({ coupon, onRemoved, isRemoving = false, }) => {
    const handleRemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        onRemoved(coupon.code);
    }, [coupon, onRemoved]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "form-checklist-item optimizedCheckout-form-checklist-item" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppliedRedeemable__WEBPACK_IMPORTED_MODULE_3__["default"], { isRemoving: isRemoving, onRemove: handleRemove },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coupon__WEBPACK_IMPORTED_MODULE_1__["default"], { coupon: coupon }))));
};
const AppliedGiftCertificateChecklistItem = ({ giftCertificate, onRemoved, isRemoving = false, }) => {
    const handleRemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        onRemoved(giftCertificate.code);
    }, [giftCertificate, onRemoved]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "form-checklist-item optimizedCheckout-form-checklist-item" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppliedRedeemable__WEBPACK_IMPORTED_MODULE_3__["default"], { isRemoving: isRemoving, onRemove: handleRemove },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_giftCertificate__WEBPACK_IMPORTED_MODULE_2__["default"], { giftCertificate: giftCertificate }))));
};
const AppliedRedeemables = ({ coupons = [], giftCertificates = [], isRemovingCoupon = false, isRemovingGiftCertificate = false, onRemovedCoupon, onRemovedGiftCertificate, }) => {
    if (!coupons.length && !giftCertificates.length) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "form-checklist optimizedCheckout-form-checklist", "data-test": "redeemables-list" },
        coupons.map((coupon) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppliedCouponChecklistItem, { coupon: coupon, isRemoving: isRemovingCoupon, key: coupon.code, onRemoved: onRemovedCoupon }))),
        giftCertificates.map((giftCertificate) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppliedGiftCertificateChecklistItem, { giftCertificate: giftCertificate, isRemoving: isRemovingGiftCertificate, key: giftCertificate.code, onRemoved: onRemovedGiftCertificate })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(AppliedRedeemables));


/***/ }),

/***/ "./packages/core/src/app/cart/Redeemable.tsx":
/*!***************************************************!*\
  !*** ./packages/core/src/app/cart/Redeemable.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _ui_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/alert */ "./packages/core/src/app/ui/alert/Alert.tsx");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/FormField.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/TextInput.tsx");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ui/form */ "./packages/core/src/app/ui/form/Label.tsx");
/* harmony import */ var _ui_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ui/toggle */ "./packages/core/src/app/ui/toggle/Toggle.tsx");
/* harmony import */ var _AppliedRedeemables__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AppliedRedeemables */ "./packages/core/src/app/cart/AppliedRedeemables.tsx");
















const Redeemable = (_a) => {
    var { shouldCollapseCouponCode, showAppliedRedeemables } = _a, formProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["shouldCollapseCouponCode", "showAppliedRedeemables"]);
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_7__.useThemeContext)();
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ui_toggle__WEBPACK_IMPORTED_MODULE_18__["default"], { openByDefault: !shouldCollapseCouponCode }, ({ toggle, isOpen }) => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        shouldCollapseCouponCode && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", { "aria-controls": "redeemable-collapsable", "aria-expanded": isOpen, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('redeemable-label', { 'body-cta': themeV2 }), "data-test": "redeemable-label", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(toggle) },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.toggle_action" }))),
        !shouldCollapseCouponCode && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('redeemable-label', { 'body-cta': themeV2 }) },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.toggle_action" }))),
        (isOpen || !shouldCollapseCouponCode) && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", { "data-test": "redeemable-collapsable", id: "redeemable-collapsable" },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(RedeemableForm, Object.assign({}, formProps)),
            showAppliedRedeemables && react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_AppliedRedeemables__WEBPACK_IMPORTED_MODULE_19__["default"], Object.assign({}, formProps))))))));
};
const RedeemableForm = ({ appliedRedeemableError, isApplyingRedeemable, clearError = lodash__WEBPACK_IMPORTED_MODULE_4__.noop, submitForm, language }) => {
    const { checkoutState: { statuses: { isSubmittingOrder } } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_8__.useCheckout)();
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_7__.useThemeContext)();
    const handleSubmitForm = (setSubmitted) => {
        if (isSubmittingOrder()) {
            return;
        }
        setSubmitted(true);
        submitForm();
    };
    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((setSubmitted) => (event) => {
        if (appliedRedeemableError) {
            clearError(appliedRedeemableError);
        }
        // note: to prevent submitting main form, we manually intercept
        // the enter key event and submit the "subform".
        if (event.keyCode === 13 || event.key === 'Enter') {
            handleSubmitForm(setSubmitted);
            event.preventDefault();
        }
    }), [appliedRedeemableError, clearError, submitForm]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)((setSubmitted) => () => {
        handleSubmitForm(setSubmitted);
    }), []);
    const renderLabel = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((name) => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_17__["default"], { hidden: true, htmlFor: name },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.code_label" }))), []);
    const renderErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((errorCode, errorMessage) => {
        switch (errorCode) {
            case 'min_purchase':
                return react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.coupon_min_order_total" });
            case 'not_applicable':
                return react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.coupon_location_error" });
            default:
                return errorMessage || react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.code_invalid_error" });
        }
    }, []);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((setSubmitted) => ({ field }) => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
        appliedRedeemableError &&
            appliedRedeemableError.errors &&
            appliedRedeemableError.errors[0] && (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ui_alert__WEBPACK_IMPORTED_MODULE_13__["default"], { type: _ui_alert__WEBPACK_IMPORTED_MODULE_13__.AlertType.Error }, renderErrorMessage(appliedRedeemableError.errors[0].code, appliedRedeemableError.errors[0].message))),
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", { className: "form-prefixPostfix" },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({}, field, { "aria-label": language.translate('redeemable.code_label'), className: "form-input optimizedCheckout-form-input", onKeyDown: handleKeyDown(setSubmitted), testId: "redeemableEntry-input", themeV2: themeV2 })),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_14__["default"], { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('form-prefixPostfix-button--postfix', {
                    'body-bold': themeV2,
                }), disabled: isSubmittingOrder(), id: "applyRedeemableButton", isLoading: isApplyingRedeemable, onClick: handleSubmit(setSubmitted), testId: "redeemableEntry-submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_14__.ButtonVariant.Secondary },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "redeemable.apply_action" }))))), [
        appliedRedeemableError,
        handleKeyDown,
        handleSubmit,
        isApplyingRedeemable,
        language,
        isSubmittingOrder,
        renderErrorMessage,
    ]);
    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_1__.memoizeOne)(({ setSubmitted }) => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ui_form__WEBPACK_IMPORTED_MODULE_15__["default"], { input: renderInput(setSubmitted), label: renderLabel, name: "redeemableCode" }))), [renderLabel, renderInput]);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("fieldset", { className: "form-fieldset redeemable-entry" },
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_12__.FormProvider, null, renderContent)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_11__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_3__.withFormik)({
    mapPropsToValues() {
        return {
            redeemableCode: '',
        };
    },
    handleSubmit(_a, _b) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, arguments, void 0, function* ({ redeemableCode }, { props: { applyCoupon, applyGiftCertificate, clearError } }) {
            const code = redeemableCode.trim();
            try {
                yield applyGiftCertificate(code);
            }
            catch (error) {
                if (error instanceof Error) {
                    clearError(error);
                }
                applyCoupon(code);
            }
        });
    },
    validationSchema({ language }) {
        return (0,yup__WEBPACK_IMPORTED_MODULE_6__.object)({
            redeemableCode: (0,yup__WEBPACK_IMPORTED_MODULE_6__.string)().required(language.translate('redeemable.code_required_error')),
        });
    },
})((0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(Redeemable))));


/***/ }),

/***/ "./packages/core/src/app/cart/mapToRedeemableProps.ts":
/*!************************************************************!*\
  !*** ./packages/core/src/app/cart/mapToRedeemableProps.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapToRedeemableProps)
/* harmony export */ });
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/emptyData.ts");

function mapToRedeemableProps(context) {
    const { checkoutService, checkoutState: { data: { getConfig, getCoupons, getGiftCertificates }, statuses: { isApplyingCoupon, isApplyingGiftCertificate, isRemovingCoupon, isRemovingGiftCertificate, }, errors: { getApplyCouponError, getApplyGiftCertificateError, getRemoveCouponError, getRemoveGiftCertificateError, }, }, } = context;
    const config = getConfig();
    if (!config) {
        return null;
    }
    return {
        appliedRedeemableError: getApplyCouponError() || getApplyGiftCertificateError(),
        applyCoupon: checkoutService.applyCoupon,
        applyGiftCertificate: checkoutService.applyGiftCertificate,
        clearError: checkoutService.clearError,
        coupons: getCoupons() || _common_utility__WEBPACK_IMPORTED_MODULE_0__.EMPTY_ARRAY,
        giftCertificates: getGiftCertificates() || _common_utility__WEBPACK_IMPORTED_MODULE_0__.EMPTY_ARRAY,
        isApplyingRedeemable: isApplyingCoupon() || isApplyingGiftCertificate(),
        isRemovingCoupon: isRemovingCoupon(),
        isRemovingGiftCertificate: isRemovingGiftCertificate(),
        onRemovedCoupon: checkoutService.removeCoupon,
        onRemovedGiftCertificate: checkoutService.removeGiftCertificate,
        removedRedeemableError: getRemoveCouponError() || getRemoveGiftCertificateError(),
        shouldCollapseCouponCode: config.checkoutSettings.isCouponCodeCollapsed,
    };
}


/***/ }),

/***/ "./packages/core/src/app/coupon/components/AppliedCoupon.tsx":
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/AppliedCoupon.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");


const AppliedCoupon = ({ coupon }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": "cart-coupon" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "redeemable-column redeemable-info", "data-test": "redeemable-item--coupon" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-header--highlight", "data-test": "cart-price-label" }, coupon.displayName),
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "redeemable.coupon_text" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-subHeader", "data-test": "cart-price-code" }, coupon.code))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(AppliedCoupon));


/***/ }),

/***/ "./packages/core/src/app/giftCertificate/AppliedGiftCertificate.tsx":
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/giftCertificate/AppliedGiftCertificate.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");



const AppliedGiftCertificate = ({ giftCertificate, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "redeemable-column redeemable-info", "data-test": "redeemable-item--giftCertificate" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-header" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-header--highlight", "data-test": "giftCertificate-amount" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_2__["default"], { amount: giftCertificate.used })),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "redeemable.gift_certificate_text" })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-subHeader" },
        giftCertificate.remaining > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "redeemable-info-subHeader--remaining" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "redeemable.gift_certificate_remaining_text" }),
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "data-test": "giftCertificate-remaining" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_2__["default"], { amount: giftCertificate.remaining })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "data-test": "giftCertificate-code" }, giftCertificate.code))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(AppliedGiftCertificate));


/***/ }),

/***/ "./packages/core/src/app/ui/icon/IconRemove.tsx":
/*!******************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconRemove.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/core/src/app/ui/icon/withIconContainer.tsx");


const IconRemove = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconRemove));


/***/ })

}]);
//# sourceMappingURL=packages_core_src_app_cart_Redeemable_tsx-packages_core_src_app_cart_mapToRedeemableProps_ts.js.map