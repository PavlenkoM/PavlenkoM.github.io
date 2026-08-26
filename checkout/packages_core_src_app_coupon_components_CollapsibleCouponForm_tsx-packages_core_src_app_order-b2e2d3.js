"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_coupon_components_CollapsibleCouponForm_tsx-packages_core_src_app_order-b2e2d3"],{

/***/ "./packages/core/src/app/coupon/components/CollapsibleCouponForm.tsx"
/*!***************************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/CollapsibleCouponForm.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleCouponForm: () => (/* binding */ CollapsibleCouponForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./packages/core/src/app/coupon/utils/getRedeemableLabelId.ts");
/* harmony import */ var _CouponForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CouponForm */ "./packages/core/src/app/coupon/components/CouponForm.tsx");








const CollapsibleCouponForm = ({ formInstanceId = '', }) => {
    const { isCouponFormCollapsed } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_5__.useMultiCoupon)();
    const { userJourney: { disableCoupon, disableGiftCertificate }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCapabilities)();
    const [isCouponFormVisible, setIsCouponFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isCouponFormCollapsed);
    const couponFormRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const toggleCouponForm = () => {
        setIsCouponFormVisible((prevState) => !prevState);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "aria-controls": `${formInstanceId}coupon-form-collapsable`, "aria-expanded": isCouponFormVisible, className: "redeemable-label body-cta", "data-test": "redeemable-label", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(toggleCouponForm) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getRedeemableLabelId)(disableGiftCertificate, disableCoupon) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.CollapseCSSTransition, { isVisible: isCouponFormVisible, nodeRef: couponFormRef },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "coupon-form-wrapper", ref: couponFormRef },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CouponForm__WEBPACK_IMPORTED_MODULE_7__.CouponForm, { formInstanceId: formInstanceId })))));
};


/***/ },

/***/ "./packages/core/src/app/coupon/components/CouponForm.tsx"
/*!****************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/CouponForm.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CouponForm: () => (/* binding */ CouponForm)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/alert/Alert.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconRemoveCoupon.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");
/* harmony import */ var _ManageCouponsAndGiftCertificates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ManageCouponsAndGiftCertificates */ "./packages/core/src/app/coupon/components/ManageCouponsAndGiftCertificates.tsx");







const CouponForm = ({ formInstanceId = '' }) => {
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { enhancedThemeV1 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useThemeContext)();
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    const { applyCouponOrGiftCertificate, couponError, setCouponError, isApplyingCouponOrGiftCertificate, isCouponFormDisabled, } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_9__.useMultiCoupon)();
    const handleTextInputChange = (event) => {
        setCode(event.currentTarget.value.trim());
    };
    const clearErrorOnClick = () => {
        if (couponError) {
            setCouponError(null);
        }
    };
    const submitForm = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        if (!code) {
            setCouponError(language.translate('redeemable.code_required_error'));
            return;
        }
        try {
            yield applyCouponOrGiftCertificate(code);
            setCode('');
        }
        catch (error) {
            if (error instanceof Error) {
                setCouponError(error.message);
            }
        }
    });
    // This input can render inside the payment <form>; Enter must not submit it.
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            void submitForm();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "coupon-form", "data-test": "redeemable-collapsable", id: `${formInstanceId}coupon-form-collapsable` },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "is-srOnly", htmlFor: `${formInstanceId}redeemableCode` },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.toggle_action" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "form-input optimizedCheckout-form-input coupon-input", "aria-label": language.translate('redeemable.code_label'), disabled: isCouponFormDisabled, id: `${formInstanceId}redeemableCode`, name: "redeemableCode", onChange: handleTextInputChange, onClick: clearErrorOnClick, onKeyDown: handleKeyDown, placeholder: language.translate('redeemable.coupon_placeholder'), testId: "redeemableEntry-input", value: code }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "coupon-button optimizedCheckout-contentPrimary body-bold", disabled: isCouponFormDisabled, id: `${formInstanceId}applyRedeemableButton`, isLoading: isApplyingCouponOrGiftCertificate, onClick: submitForm, testId: "redeemableEntry-submit", variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__.ButtonVariant.Secondary },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.apply_action" }))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "applied-coupons-list" },
            Boolean(couponError) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { additionalClassName: enhancedThemeV1 ? '' : 'no-padding', type: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__.AlertType.Error },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "applied-coupon-error-message" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, couponError),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { onClick: () => setCouponError(null) },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], null)))))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ManageCouponsAndGiftCertificates__WEBPACK_IMPORTED_MODULE_10__.ManageCouponsAndGiftCertificates, null))));
};


/***/ },

/***/ "./packages/core/src/app/coupon/components/ManageCouponsAndGiftCertificates.tsx"
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/ManageCouponsAndGiftCertificates.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageCouponsAndGiftCertificates: () => (/* binding */ ManageCouponsAndGiftCertificates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconGiftCertificateNew.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconRemoveCoupon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCoupon.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");




const AnimatedCouponTag = ({ children, in: inProp, onExited, }) => {
    const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.CollapseCSSTransition, { classNames: "coupon-tag", in: inProp, isSlideAnimation: true, nodeRef: nodeRef, onExited: onExited },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "coupon-tag-wrapper", ref: nodeRef }, children)));
};
const AppliedCouponsPills = ({ coupons, removeCoupon }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["default"], { component: null }, coupons.map(({ code, displayName }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimatedCouponTag, { key: code },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                displayName ? `${displayName} (${code})` : code,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: () => removeCoupon(code) }))))))));
};
const ManageCouponsAndGiftCertificates = () => {
    const { appliedCoupons, appliedGiftCertificates, removeCoupon, removeGiftCertificate } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_6__.useMultiCoupon)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppliedCouponsPills, { coupons: appliedCoupons, removeCoupon: removeCoupon }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["default"], { component: null }, appliedGiftCertificates.map(({ code }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimatedCouponTag, { key: code },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null),
                    code,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: () => removeGiftCertificate(code) })))))))));
};


/***/ },

/***/ "./packages/core/src/app/coupon/useMultiCoupon.ts"
/*!********************************************************!*\
  !*** ./packages/core/src/app/coupon/useMultiCoupon.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMultiCoupon: () => (/* binding */ useMultiCoupon)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/emptyData.ts");
/* harmony import */ var _giftCertificate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../giftCertificate */ "./packages/core/src/app/giftCertificate/mapFromPayments.ts");
/* harmony import */ var _shipping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shipping */ "./packages/core/src/app/shipping/hasSelectedShippingOptions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./packages/core/src/app/coupon/utils/getDiscountItems.ts");







const useMultiCoupon = () => {
    var _a, _b;
    const [couponError, setCouponError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { selectedState: { config, checkout, order, coupons, giftCertificates, isSubmittingOrder, isPending, isApplyingCoupon, isApplyingGiftCertificate, }, checkoutService, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)(({ data, statuses }) => ({
        config: data.getConfig(),
        checkout: data.getCheckout(),
        order: data.getOrder(),
        coupons: data.getCoupons(),
        giftCertificates: data.getGiftCertificates(),
        isSubmittingOrder: statuses.isSubmittingOrder(),
        isPending: statuses.isPending(),
        isApplyingCoupon: statuses.isApplyingCoupon(),
        isApplyingGiftCertificate: statuses.isApplyingGiftCertificate(),
    }));
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
    const { userJourney: { disableCoupon, disableGiftCertificate }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCapabilities)();
    const { checkoutSettings } = config !== null && config !== void 0 ? config : {};
    if (!checkoutSettings || !(checkout || order)) {
        throw new Error('Checkout or order is not available');
    }
    const shouldDisableCouponForm = isSubmittingOrder || isPending;
    const appliedCoupons = coupons !== null && coupons !== void 0 ? coupons : _common_utility__WEBPACK_IMPORTED_MODULE_5__.EMPTY_ARRAY;
    const giftCertificatesFromCheckoutOrOrder = checkout
        ? giftCertificates
        : (0,_giftCertificate__WEBPACK_IMPORTED_MODULE_6__["default"])((_a = order === null || order === void 0 ? void 0 : order.payments) !== null && _a !== void 0 ? _a : []);
    const appliedGiftCertificates = (_b = giftCertificatesFromCheckoutOrOrder === null || giftCertificatesFromCheckoutOrOrder === void 0 ? void 0 : giftCertificatesFromCheckoutOrOrder.map(({ code, used }) => ({
        code,
        amount: used,
    }))) !== null && _b !== void 0 ? _b : _common_utility__WEBPACK_IMPORTED_MODULE_5__.EMPTY_ARRAY;
    const applyCouponOrGiftCertificate = (code) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { applyCoupon, applyGiftCertificate, clearError } = checkoutService;
        if (!disableGiftCertificate) {
            try {
                yield applyGiftCertificate(code);
                return;
            }
            catch (error) {
                if (disableCoupon) {
                    throw error;
                }
                if (error instanceof Error) {
                    yield clearError(error);
                }
            }
        }
        yield applyCoupon(code);
    });
    const removeCoupon = (code) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield checkoutService.removeCoupon(code);
    });
    const removeGiftCertificate = (code) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield checkoutService.removeGiftCertificate(code);
    });
    let uiDetails = {};
    if (checkout) {
        const allConsignmentsHaveSelectedShippingOption = (0,_shipping__WEBPACK_IMPORTED_MODULE_7__["default"])(checkout.consignments);
        uiDetails = {
            subtotal: checkout.subtotal,
            discounts: checkout.displayDiscountTotal,
            discountItems: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getDiscountItems)(checkout, language),
            shippingBeforeDiscount: allConsignmentsHaveSelectedShippingOption
                ? checkout.shippingCostBeforeDiscount
                : undefined,
            shipping: allConsignmentsHaveSelectedShippingOption
                ? checkout.comparisonShippingCost
                : undefined,
        };
    }
    if (order) {
        uiDetails = {
            subtotal: order.productAutoDiscountedSubtotal,
            discounts: order.displayDiscountTotal,
            discountItems: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getDiscountItems)(order, language),
            shippingBeforeDiscount: order.shippingCostBeforeDiscount,
            shipping: order.comparisonShippingCost,
        };
    }
    return {
        appliedCoupons,
        appliedGiftCertificates,
        couponError,
        isApplyingCouponOrGiftCertificate: isApplyingCoupon || isApplyingGiftCertificate,
        isCouponFormCollapsed: checkoutSettings.isCouponCodeCollapsed,
        isCouponFormDisabled: shouldDisableCouponForm,
        uiDetails,
        applyCouponOrGiftCertificate,
        removeCoupon,
        removeGiftCertificate,
        setCouponError,
    };
};


/***/ },

/***/ "./packages/core/src/app/coupon/utils/getDiscountItems.ts"
/*!****************************************************************!*\
  !*** ./packages/core/src/app/coupon/utils/getDiscountItems.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDiscountItems: () => (/* binding */ getDiscountItems)
/* harmony export */ });
const getDiscountItems = (checkout, language) => {
    var _a;
    const discounts = [];
    const autoPromotionAmount = checkout.orderBasedAutoDiscountTotal;
    const manualDiscountAmount = checkout.manualDiscountTotal;
    let hasOrderLevelMaxLimitReached = false;
    if ('hasOrderLevelAutoDiscountMaxLimitReached' in checkout) {
        hasOrderLevelMaxLimitReached = (_a = checkout.hasOrderLevelAutoDiscountMaxLimitReached) !== null && _a !== void 0 ? _a : false;
    }
    if (autoPromotionAmount > 0) {
        discounts.push({
            name: language.translate('redeemable.auto_promotion'),
            amount: autoPromotionAmount,
            testId: 'cart-discount',
            showMaxLimitInfo: hasOrderLevelMaxLimitReached,
        });
    }
    if (manualDiscountAmount > 0) {
        discounts.push({
            name: language.translate('redeemable.manual_discount'),
            amount: manualDiscountAmount,
            testId: 'cart-manual-discount',
        });
    }
    checkout.coupons.forEach((coupon) => {
        const couponName = coupon.displayName
            ? `${coupon.displayName} (${coupon.code})`
            : coupon.code;
        discounts.push({
            name: couponName,
            amount: coupon.discountedAmount,
            testId: 'cart-coupon',
            showMaxLimitInfo: coupon.hasMaxLimitReached,
        });
    });
    return discounts;
};


/***/ },

/***/ "./packages/core/src/app/coupon/utils/getRedeemableLabelId.ts"
/*!********************************************************************!*\
  !*** ./packages/core/src/app/coupon/utils/getRedeemableLabelId.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRedeemableLabelId: () => (/* binding */ getRedeemableLabelId)
/* harmony export */ });
const getRedeemableLabelId = (disableGiftCertificate, disableCoupon) => {
    if (disableGiftCertificate) {
        return 'redeemable.coupon_text';
    }
    if (disableCoupon) {
        return 'redeemable.gift_certificate_text';
    }
    return 'redeemable.toggle_action';
};


/***/ },

/***/ "./packages/core/src/app/giftCertificate/mapFromPayments.ts"
/*!******************************************************************!*\
  !*** ./packages/core/src/app/giftCertificate/mapFromPayments.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapFromPayments)
/* harmony export */ });
/* harmony import */ var _isGiftCertificatePayment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isGiftCertificatePayment */ "./packages/core/src/app/giftCertificate/isGiftCertificatePayment.ts");

function mapFromPayments(payments) {
    return payments.filter(_isGiftCertificatePayment__WEBPACK_IMPORTED_MODULE_0__["default"]).map(({ amount, detail }) => ({
        code: detail.code,
        remaining: detail.remaining,
        used: amount,
        balance: amount + detail.remaining,
        purchaseDate: '',
    }));
}


/***/ },

/***/ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx"
/*!******************************************************************!*\
  !*** ./packages/core/src/app/order/getOrderSummaryItemImage.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOrderSummaryItemImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getOrderSummaryItemImage(item) {
    if (!item.imageUrl) {
        return;
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: "", "data-test": "cart-item-image", src: item.imageUrl });
}


/***/ },

/***/ "./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx"
/*!**********************************************************************!*\
  !*** ./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseCSSTransition: () => (/* binding */ CollapseCSSTransition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./packages/ui/src/animation/constants.ts");
/* harmony import */ var _createCollapseAnimationHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCollapseAnimationHandlers */ "./packages/ui/src/animation/collapse/createCollapseAnimationHandlers.ts");
/* harmony import */ var _createSlideCollapseAnimationHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createSlideCollapseAnimationHandlers */ "./packages/ui/src/animation/collapse/createSlideCollapseAnimationHandlers.ts");





/**
 * Wraps content in a CSSTransition with collapse animation.
 * When isSlideAnimation is true, adds a vertical slide (translateY) to the collapse.
 * The single child element should receive the same ref as nodeRef.
 */
const CollapseCSSTransition = ({ appear = false, children, classNames, in: inProp, isSlideAnimation = false, isVisible, nodeRef, onExited, unmountOnExit = true, }) => {
    const handlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => isSlideAnimation
        ? (0,_createSlideCollapseAnimationHandlers__WEBPACK_IMPORTED_MODULE_4__.createSlideCollapseAnimationHandlers)(nodeRef)
        : (0,_createCollapseAnimationHandlers__WEBPACK_IMPORTED_MODULE_3__.createCollapseAnimationHandlers)(nodeRef), [isSlideAnimation, nodeRef]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["default"], { appear: appear, classNames: classNames, in: inProp !== null && inProp !== void 0 ? inProp : isVisible, nodeRef: nodeRef, onEnter: handlers.handleEnter, onEntered: handlers.handleEntered, onEntering: handlers.handleEntering, onExit: handlers.handleExit, onExited: onExited, onExiting: handlers.handleExiting, timeout: _constants__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_DURATION, unmountOnExit: unmountOnExit }, children));
};


/***/ },

/***/ "./packages/ui/src/animation/collapse/createCollapseAnimationHandlers.ts"
/*!*******************************************************************************!*\
  !*** ./packages/ui/src/animation/collapse/createCollapseAnimationHandlers.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollapseAnimationHandlers: () => (/* binding */ createCollapseAnimationHandlers)
/* harmony export */ });
/* harmony import */ var _prefersReducedMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefersReducedMotion */ "./packages/ui/src/animation/prefersReducedMotion.ts");

/**
 * Returns CSSTransition handlers for a height + opacity collapse (no vertical slide).
 * Use for coupon form and discounts collapsibles.
 */
const createCollapseAnimationHandlers = (nodeRef) => ({
    handleEnter: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion)())
            return;
        node.style.height = '0px';
        node.style.opacity = '0';
    },
    handleEntering: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion)())
            return;
        void node.offsetHeight;
        node.style.height = `${node.scrollHeight}px`;
        node.style.opacity = '1';
    },
    handleEntered: () => {
        const node = nodeRef.current;
        if (!node)
            return;
        node.style.height = 'auto';
        node.style.opacity = '';
    },
    handleExit: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion)())
            return;
        node.style.height = `${node.offsetHeight}px`;
        node.style.opacity = '1';
    },
    handleExiting: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion)())
            return;
        void node.offsetHeight;
        node.style.height = '0px';
        node.style.opacity = '0';
    },
});


/***/ },

/***/ "./packages/ui/src/animation/collapse/createSlideCollapseAnimationHandlers.ts"
/*!************************************************************************************!*\
  !*** ./packages/ui/src/animation/collapse/createSlideCollapseAnimationHandlers.ts ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSlideCollapseAnimationHandlers: () => (/* binding */ createSlideCollapseAnimationHandlers)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./packages/ui/src/animation/constants.ts");
/* harmony import */ var _prefersReducedMotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefersReducedMotion */ "./packages/ui/src/animation/prefersReducedMotion.ts");


/**
 * Returns CSSTransition handlers for a height + opacity + vertical slide collapse.
 * Use for order summary product list items and coupon tags.
 */
const createSlideCollapseAnimationHandlers = (nodeRef) => ({
    handleEnter: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_1__.prefersReducedMotion)())
            return;
        node.style.height = '0px';
        node.style.opacity = '0';
        node.style.transform = `translateY(-${_constants__WEBPACK_IMPORTED_MODULE_0__.SLIDE_DISTANCE}px)`;
        node.style.overflow = 'hidden';
    },
    handleEntering: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_1__.prefersReducedMotion)())
            return;
        void node.offsetHeight;
        node.style.height = `${node.scrollHeight}px`;
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
    },
    handleEntered: () => {
        const node = nodeRef.current;
        if (!node)
            return;
        node.style.height = '';
        node.style.opacity = '';
        node.style.transform = '';
        node.style.overflow = '';
    },
    handleExit: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_1__.prefersReducedMotion)())
            return;
        node.style.height = `${node.offsetHeight}px`;
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        node.style.overflow = 'hidden';
    },
    handleExiting: () => {
        const node = nodeRef.current;
        if (!node || (0,_prefersReducedMotion__WEBPACK_IMPORTED_MODULE_1__.prefersReducedMotion)())
            return;
        void node.offsetHeight;
        node.style.height = '0px';
        node.style.opacity = '0';
        node.style.transform = `translateY(-${_constants__WEBPACK_IMPORTED_MODULE_0__.SLIDE_DISTANCE}px)`;
    },
});


/***/ },

/***/ "./packages/ui/src/animation/constants.ts"
/*!************************************************!*\
  !*** ./packages/ui/src/animation/constants.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_DURATION: () => (/* binding */ ANIMATION_DURATION),
/* harmony export */   SLIDE_DISTANCE: () => (/* binding */ SLIDE_DISTANCE)
/* harmony export */ });
/**
 * Shared constants for CSS transition animations.
 */
const ANIMATION_DURATION = 600;
const SLIDE_DISTANCE = 12;


/***/ },

/***/ "./packages/ui/src/animation/prefersReducedMotion.ts"
/*!***********************************************************!*\
  !*** ./packages/ui/src/animation/prefersReducedMotion.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
/**
 * Returns true when the user has requested reduced motion (accessibility).
 */
const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/***/ },

/***/ "./packages/ui/src/icon/IconCoupon.tsx"
/*!*********************************************!*\
  !*** ./packages/ui/src/icon/IconCoupon.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconCoupon = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "coupon-icon", fill: "none", height: "16", viewBox: "0 0 16 16", width: "16", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mask", { height: "16", id: "mask0_4221_16176", maskUnits: "userSpaceOnUse", style: { maskType: 'alpha' }, width: "16", x: "0", y: "0" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { fill: "#D9D9D9", height: "16", width: "16" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { mask: "url(#mask0_4221_16176)" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "icon-path", d: "M7.40595 14.6654L1.3252 8.5782L8.24186 1.66797H14.3226V7.74872L7.40595 14.6654ZM11.8379 4.87692C12.0397 4.87692 12.2128 4.80335 12.3572 4.6562C12.5017 4.50906 12.5739 4.33673 12.5739 4.13922C12.5739 3.93957 12.5019 3.76753 12.358 3.62309C12.214 3.47865 12.0412 3.40644 11.8394 3.40644C11.6376 3.40644 11.4645 3.4784 11.32 3.62234C11.1756 3.76628 11.1034 3.93807 11.1034 4.13772C11.1034 4.33736 11.1754 4.51047 11.3193 4.65705C11.4632 4.80363 11.6361 4.87692 11.8379 4.87692ZM7.39855 13.5782L13.5662 7.40874V2.42437H8.57401L2.41236 8.59487L7.39855 13.5782Z", fill: "#979797" }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCoupon);


/***/ },

/***/ "./packages/ui/src/icon/IconGiftCertificateNew.tsx"
/*!*********************************************************!*\
  !*** ./packages/ui/src/icon/IconGiftCertificateNew.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconGiftCertificateNew = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "gift-certificate-icon", fill: "none", height: "16", viewBox: "0 0 16 16", width: "16", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mask", { height: "16", id: "mask0_4448_15735", maskUnits: "userSpaceOnUse", style: { maskType: 'alpha' }, width: "16", x: "0", y: "0" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { fill: "#D9D9D9", height: "16", width: "16" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { mask: "url(#mask0_4448_15735)" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "icon-path", d: "M2.8205 14.0004V6.82087H2V3.87221H5.42817C5.29572 3.7551 5.20406 3.61615 5.15317 3.45537C5.10239 3.29471 5.077 3.12593 5.077 2.94904C5.077 2.50749 5.23156 2.13215 5.54067 1.82304C5.84978 1.51393 6.22511 1.35938 6.66667 1.35938C6.92222 1.35938 7.15683 1.41943 7.3705 1.53954C7.58417 1.65954 7.76833 1.81571 7.923 2.00804C8.07778 1.81315 8.262 1.65632 8.47567 1.53754C8.68933 1.41876 8.92395 1.35938 9.1795 1.35938C9.62106 1.35938 9.99639 1.51393 10.3055 1.82304C10.6146 2.13215 10.7692 2.50749 10.7692 2.94904C10.7692 3.1226 10.7431 3.28993 10.691 3.45104C10.6389 3.61215 10.5479 3.75254 10.418 3.87221H14V6.82087H13.1795V14.0004H2.8205ZM9.1795 2.02604C8.91795 2.02604 8.69872 2.11449 8.52183 2.29138C8.34483 2.46826 8.25633 2.68749 8.25633 2.94904C8.25633 3.2106 8.34483 3.42982 8.52183 3.60671C8.69872 3.78371 8.91795 3.87221 9.1795 3.87221C9.44106 3.87221 9.66028 3.78371 9.83717 3.60671C10.0141 3.42982 10.1025 3.2106 10.1025 2.94904C10.1025 2.68749 10.0141 2.46826 9.83717 2.29138C9.66028 2.11449 9.44106 2.02604 9.1795 2.02604ZM5.74367 2.94904C5.74367 3.2106 5.83211 3.42982 6.009 3.60671C6.18589 3.78371 6.40511 3.87221 6.66667 3.87221C6.92822 3.87221 7.14744 3.78371 7.32433 3.60671C7.50122 3.42982 7.58967 3.2106 7.58967 2.94904C7.58967 2.68749 7.50122 2.46826 7.32433 2.29138C7.14744 2.11449 6.92822 2.02604 6.66667 2.02604C6.40511 2.02604 6.18589 2.11449 6.009 2.29138C5.83211 2.46826 5.74367 2.68749 5.74367 2.94904ZM2.66667 4.53888V6.15421H7.66667V4.53888H2.66667ZM7.66667 13.3337V6.82087H3.48717V13.3337H7.66667ZM8.33333 13.3337H12.5128V6.82087H8.33333V13.3337ZM13.3333 6.15421V4.53888H8.33333V6.15421H13.3333Z", fill: "#979797" }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGiftCertificateNew);


/***/ },

/***/ "./packages/ui/src/icon/IconRemoveCoupon.tsx"
/*!***************************************************!*\
  !*** ./packages/ui/src/icon/IconRemoveCoupon.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconRemoveCoupon = ({ onClick }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "remove-coupon-icon", fill: "none", height: "20", onClick: onClick, viewBox: "0 0 20 20", width: "20", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { clipPath: "url(#clip0_4221_14238)" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "icon-path", d: "M15.2496 4.7599C14.9246 4.4349 14.3996 4.4349 14.0746 4.7599L9.99961 8.82656L5.92461 4.75156C5.59961 4.42656 5.07461 4.42656 4.74961 4.75156C4.42461 5.07656 4.42461 5.60156 4.74961 5.92656L8.82461 10.0016L4.74961 14.0766C4.42461 14.4016 4.42461 14.9266 4.74961 15.2516C5.07461 15.5766 5.59961 15.5766 5.92461 15.2516L9.99961 11.1766L14.0746 15.2516C14.3996 15.5766 14.9246 15.5766 15.2496 15.2516C15.5746 14.9266 15.5746 14.4016 15.2496 14.0766L11.1746 10.0016L15.2496 5.92656C15.5663 5.6099 15.5663 5.07656 15.2496 4.7599Z", fill: "#999999" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", { id: "clip0_4221_14238" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { fill: "white", height: "20", width: "20" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconRemoveCoupon);


/***/ }

}]);
//# sourceMappingURL=packages_core_src_app_coupon_components_CollapsibleCouponForm_tsx-packages_core_src_app_order-b2e2d3.js.map