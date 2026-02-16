"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_coupon_NewOrderSummarySubtotals_tsx-packages_core_src_app_order_OrderSu-a229c8"],{

/***/ "./packages/core/src/app/coupon/NewOrderSummarySubtotals.tsx":
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/coupon/NewOrderSummarySubtotals.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order */ "./packages/core/src/app/order/isOrderFee.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order */ "./packages/core/src/app/order/OrderSummaryDiscount.tsx");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./packages/core/src/app/coupon/components/AppliedGiftCertificates.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./packages/core/src/app/coupon/components/CouponForm.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./packages/core/src/app/coupon/components/Discounts.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");






const NewOrderSummarySubtotals = ({ fees, giftWrappingAmount, handlingAmount, isTaxIncluded, storeCreditAmount, taxes, isOrderConfirmation = false, }) => {
    const { appliedGiftCertificates, isCouponFormCollapsed, uiDetails: { shipping, shippingBeforeDiscount, } } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_9__.useMultiCoupon)();
    const [isCouponFormVisible, setIsCouponFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isCouponFormCollapsed);
    const toggleCouponForm = () => {
        setIsCouponFormVisible((prevState) => !prevState);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        !isOrderConfirmation && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "cart-section optimizedCheckout-orderSummary-cartSection" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "aria-controls": "coupon-form-collapsable", "aria-expanded": isCouponFormVisible, className: "redeemable-label", "data-test": "redeemable-label", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(toggleCouponForm) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "redeemable.toggle_action" })),
            isCouponFormVisible && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_7__.CouponForm, null)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "subtotals-with-multi-coupon cart-section optimizedCheckout-orderSummary-cartSection" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_8__.Discounts, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: shipping, amountBeforeDiscount: shippingBeforeDiscount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.shipping_text" }), testId: "cart-shipping", zeroLabel: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.free_text" }) }),
            !!giftWrappingAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: giftWrappingAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.gift_wrapping_text" }), testId: "cart-gift-wrapping" })),
            !!handlingAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: handlingAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.handling_text" }), testId: "cart-handling" })), fees === null || fees === void 0 ? void 0 :
            fees.map((fee, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: fee.cost, key: index, label: (0,_order__WEBPACK_IMPORTED_MODULE_3__["default"])(fee) ? fee.customerDisplayName : fee.displayName, testId: "cart-fees" }))),
            !isTaxIncluded && (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_6__.AppliedGiftCertificates, { giftCertificates: appliedGiftCertificates }),
            !!storeCreditAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: storeCreditAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.store_credit_text" }), testId: "cart-store-credit" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewOrderSummarySubtotals);


/***/ }),

/***/ "./packages/core/src/app/coupon/components/AppliedGiftCertificates.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/AppliedGiftCertificates.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppliedGiftCertificates: () => (/* binding */ AppliedGiftCertificates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");



const AppliedGiftCertificates = ({ giftCertificates }) => {
    return giftCertificates.map((giftCertificate) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": "cart-gift-certificate", key: giftCertificate.code },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-live": "polite", className: "cart-priceItem optimizedCheckout-contentPrimary" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "redeemable.gift_certificate_text" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "gift-certificate-code" },
                    " (",
                    giftCertificate.code,
                    ")")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value", "data-test": "cart-price-value" },
                "-",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_2__["default"], { amount: giftCertificate.amount }))))));
};


/***/ }),

/***/ "./packages/core/src/app/coupon/components/CouponForm.tsx":
/*!****************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/CouponForm.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CouponForm: () => (/* binding */ CouponForm)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/alert/Alert.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconRemoveCoupon.tsx");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/button */ "./packages/core/src/app/ui/button/Button.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");
/* harmony import */ var _ManageCouponsAndGiftCertificates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ManageCouponsAndGiftCertificates */ "./packages/core/src/app/coupon/components/ManageCouponsAndGiftCertificates.tsx");









const CouponForm = () => {
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useThemeContext)();
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
    const { applyCouponOrGiftCertificate, couponError, setCouponError, isApplyingCouponOrGiftCertificate, isCouponFormDisabled, } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_10__.useMultiCoupon)();
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
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "coupon-form", "data-test": "redeemable-collapsable", id: "coupon-form-collapsable" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", { className: "is-srOnly", htmlFor: "redeemableCode" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "redeemable.toggle_action" })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalClassName: "form-input optimizedCheckout-form-input coupon-input", "aria-label": language.translate('redeemable.code_label'), disabled: isCouponFormDisabled, id: "redeemableCode", name: "redeemableCode", onChange: handleTextInputChange, onClick: clearErrorOnClick, placeholder: language.translate('redeemable.coupon_placeholder'), testId: "redeemableEntry-input", themeV2: themeV2, value: code }),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_9__["default"], { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('coupon-button', {
                    'body-bold': themeV2,
                }), disabled: isCouponFormDisabled, id: "applyRedeemableButton", isLoading: isApplyingCouponOrGiftCertificate, onClick: submitForm, testId: "redeemableEntry-submit", variant: _ui_button__WEBPACK_IMPORTED_MODULE_9__.ButtonVariant.Secondary },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "redeemable.apply_action" }))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "applied-coupons-list" },
            Boolean(couponError) &&
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { additionalClassName: "no-padding", type: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__.AlertType.Error },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: "applied-coupon-error-message" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, couponError),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { onClick: () => setCouponError(null) },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], null)))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ManageCouponsAndGiftCertificates__WEBPACK_IMPORTED_MODULE_11__.ManageCouponsAndGiftCertificates, null))));
};


/***/ }),

/***/ "./packages/core/src/app/coupon/components/Discounts.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/Discounts.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Discounts: () => (/* binding */ Discounts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCoupon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconDownArrow.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconUpArrow.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");






const DiscountItems = ({ coupons }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], { component: null }, coupons.map((coupon) => {
        const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["default"], { classNames: "changeHighlight", key: coupon.name, nodeRef: nodeRef, timeout: {} },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": coupon.testId },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-live": "polite", className: "cart-priceItem optimizedCheckout-contentPrimary", ref: nodeRef },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                        coupon.name),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value", "data-test": "cart-price-value" },
                        "-",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_7__["default"], { amount: coupon.amount }))))));
    })));
};
const DiscountsCollapsible = ({ discounts, discountItems }) => {
    const [isCouponDiscountsVisible, setIsCouponDiscountsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-controls": "applied-coupon-discounts-collapsable", "aria-expanded": isCouponDiscountsVisible, "aria-live": "polite", className: "coupon-discount-toggle cart-priceItem optimizedCheckout-contentPrimary", onClick: () => setIsCouponDiscountsVisible(!isCouponDiscountsVisible) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "toggle-button" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "redeemable.discounts_text" }),
                    isCouponDiscountsVisible ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value" },
                "-",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_7__["default"], { amount: discounts }))),
        isCouponDiscountsVisible && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "applied-discounts-list", id: "applied-coupon-discounts-collapsable" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DiscountItems, { coupons: discountItems })))));
};
const Discounts = () => {
    const { uiDetails: { subtotal, discounts, discountItems, }, } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_8__.useMultiCoupon)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": "cart-subtotal" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-live": "polite", className: "cart-priceItem optimizedCheckout-contentPrimary" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "cart.subtotal_text" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value", "data-test": "cart-price-value" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_7__["default"], { amount: subtotal }))),
        (discounts > 0 || discountItems.length > 0) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DiscountsCollapsible, { discountItems: discountItems, discounts: discounts }))));
};


/***/ }),

/***/ "./packages/core/src/app/coupon/components/ManageCouponsAndGiftCertificates.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/ManageCouponsAndGiftCertificates.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageCouponsAndGiftCertificates: () => (/* binding */ ManageCouponsAndGiftCertificates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconGiftCertificateNew.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconRemoveCoupon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCoupon.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");




const AppliedCouponsPills = ({ coupons, removeCoupon }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], { component: null }, coupons.map(({ code, displayName }) => {
        const nodeRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["default"], { classNames: "changeHighlight", key: code, nodeRef: nodeRef, timeout: {} },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { ref: nodeRef },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                displayName ? `${displayName} (${code})` : code,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: () => removeCoupon(code) }))));
    })));
};
const ManageCouponsAndGiftCertificates = () => {
    const { appliedCoupons, appliedGiftCertificates, removeCoupon, removeGiftCertificate, } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_6__.useMultiCoupon)();
    const isCouponApplied = appliedCoupons.length > 0;
    const isGiftCertificateApplied = appliedGiftCertificates.length > 0;
    if (!isCouponApplied && !isGiftCertificateApplied) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        isCouponApplied &&
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppliedCouponsPills, { coupons: appliedCoupons, removeCoupon: removeCoupon }),
        isGiftCertificateApplied &&
            appliedGiftCertificates.map(({ code }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { key: code },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null),
                code,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: () => removeGiftCertificate(code) }))))));
};


/***/ }),

/***/ "./packages/core/src/app/coupon/useMultiCoupon.ts":
/*!********************************************************!*\
  !*** ./packages/core/src/app/coupon/useMultiCoupon.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMultiCoupon: () => (/* binding */ useMultiCoupon)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/emptyData.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./packages/core/src/app/coupon/utils/getDiscountItems.ts");
/* harmony import */ var _shipping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shipping */ "./packages/core/src/app/shipping/hasSelectedShippingOptions.ts");






const useMultiCoupon = () => {
    var _a, _b, _c, _d;
    const [couponError, setCouponError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { checkoutState, checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    const { data: { getConfig, getCheckout, getOrder }, statuses: { isSubmittingOrder, isPending, isApplyingCoupon, isApplyingGiftCertificate } } = checkoutState;
    const { checkoutSettings } = (_a = getConfig()) !== null && _a !== void 0 ? _a : {};
    const checkout = getCheckout();
    const order = getOrder();
    if (!checkoutSettings || !(checkout || order)) {
        throw new Error('Checkout or order is not available');
    }
    const shouldDisableCouponForm = isSubmittingOrder() || isPending();
    const appliedCoupons = (_b = checkoutState.data.getCoupons()) !== null && _b !== void 0 ? _b : _common_utility__WEBPACK_IMPORTED_MODULE_4__.EMPTY_ARRAY;
    const appliedGiftCertificates = (_d = (_c = checkoutState.data.getGiftCertificates()) === null || _c === void 0 ? void 0 : _c.map(({ code, used }) => ({
        code,
        amount: used,
    }))) !== null && _d !== void 0 ? _d : _common_utility__WEBPACK_IMPORTED_MODULE_4__.EMPTY_ARRAY;
    const applyCouponOrGiftCertificate = (code) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { applyCoupon, applyGiftCertificate, clearError, } = checkoutService;
        try {
            yield applyGiftCertificate(code);
        }
        catch (error) {
            if (error instanceof Error) {
                yield clearError(error);
            }
            yield applyCoupon(code);
        }
    });
    const removeCoupon = (code) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield checkoutService.removeCoupon(code);
    });
    const removeGiftCertificate = (code) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        yield checkoutService.removeGiftCertificate(code);
    });
    let uiDetails = {};
    if (checkout) {
        const allConsignmentsHaveSelectedShippingOption = (0,_shipping__WEBPACK_IMPORTED_MODULE_6__["default"])(checkout.consignments);
        uiDetails = {
            subtotal: checkout.subtotal,
            discounts: checkout.displayDiscountTotal,
            discountItems: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getDiscountItems)(checkout, language),
            shippingBeforeDiscount: allConsignmentsHaveSelectedShippingOption ? checkout.shippingCostBeforeDiscount : undefined,
            shipping: allConsignmentsHaveSelectedShippingOption ? checkout.comparisonShippingCost : undefined,
        };
    }
    if (order) {
        uiDetails = {
            subtotal: order.baseAmount,
            discounts: order.displayDiscountTotal,
            discountItems: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getDiscountItems)(order, language),
            shippingBeforeDiscount: order.shippingCostBeforeDiscount,
            shipping: order.comparisonShippingCost,
        };
    }
    return {
        appliedCoupons,
        appliedGiftCertificates,
        couponError,
        isApplyingCouponOrGiftCertificate: isApplyingCoupon() || isApplyingGiftCertificate(),
        isCouponFormCollapsed: checkoutSettings.isCouponCodeCollapsed,
        isCouponFormDisabled: shouldDisableCouponForm,
        uiDetails,
        applyCouponOrGiftCertificate,
        removeCoupon,
        removeGiftCertificate,
        setCouponError,
    };
};


/***/ }),

/***/ "./packages/core/src/app/coupon/utils/getDiscountItems.ts":
/*!****************************************************************!*\
  !*** ./packages/core/src/app/coupon/utils/getDiscountItems.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDiscountItems: () => (/* binding */ getDiscountItems)
/* harmony export */ });
const getDiscountItems = (checkout, language) => {
    const discounts = [];
    const autoPromotionAmount = checkout.orderBasedAutoDiscountTotal;
    const manualDiscountAmount = checkout.manualDiscountTotal;
    if (autoPromotionAmount > 0) {
        discounts.push({
            name: language.translate('redeemable.auto_promotion'),
            amount: autoPromotionAmount,
            testId: 'cart-discount',
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
        const couponName = coupon.displayName ? `${coupon.displayName} (${coupon.code})` : coupon.code;
        discounts.push({
            name: couponName,
            amount: coupon.discountedAmount,
            testId: 'cart-coupon',
        });
    });
    return discounts;
};


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummaryDiscount.tsx":
/*!**************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryDiscount.tsx ***!
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
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");







const OrderSummaryDiscount = (_a) => {
    var { code, remaining, amount, onRemoved } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["code", "remaining", "amount", "onRemoved"]);
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useThemeContext)();
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, rest, (onRemoved && {
        onActionTriggered: () => code && onRemoved(code),
        actionLabel: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.remove_action" }),
    }), { amount: -1 * (amount || 0) }),
        !!remaining && remaining > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "cart-priceItem-postFix optimizedCheckout-contentSecondary", "data-test": "cart-price-remaining" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cart.remaining_text" }),
            ': ',
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: remaining }))),
        code && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('cart-priceItem-postFix optimizedCheckout-contentSecondary', { 'sub-text-medium': themeV2 }), "data-test": "cart-price-code" }, code))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(OrderSummaryDiscount));


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummaryItem.tsx":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryItem.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");





const OrderSummaryItem = ({ amount, amountAfterDiscount, image, name, productOptions, quantity, description, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useThemeContext)();
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product", "data-test": "cart-item" },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("figure", { className: "product-column product-figure" }, image),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-column product-body" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h4", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('product-title optimizedCheckout-contentPrimary', { 'body-medium': themeV2 }), "data-test": "cart-item-product-title" },
                themeV2
                    ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "body-bold" }, `${quantity} x `))
                    : (`${quantity} x `),
                name),
            productOptions && productOptions.length > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('product-options optimizedCheckout-contentSecondary', {
                    'sub-text-medium': themeV2,
                }), "data-test": "cart-item-product-options" }, productOptions.map((option, index) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", { className: "product-option", "data-test": option.testId, key: index }, option.content))))),
            description && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-description optimizedCheckout-contentSecondary", "data-test": "cart-item-product-description" }, description))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-column product-actions" },
            (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount !== amount && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('product-price', {
                    'body-medium': themeV2,
                }), "data-test": "cart-item-product-price--afterDiscount" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: amountAfterDiscount }))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('product-price', 'optimizedCheckout-contentPrimary', {
                    'product-price--beforeDiscount': (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount !== amount,
                    'body-medium': themeV2 && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount === amount,
                    'body-regular': themeV2 && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount !== amount,
                }), "data-test": "cart-item-product-price" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: amount })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(OrderSummaryItem));


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummaryItems.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryItems.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconChevronUp.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconChevronDown.tsx");
/* harmony import */ var _ui_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/responsive */ "./packages/core/src/app/ui/responsive/isSmallScreen.ts");
/* harmony import */ var _getBackorderCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBackorderCount */ "./packages/core/src/app/order/getBackorderCount.ts");
/* harmony import */ var _getItemsCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getItemsCount */ "./packages/core/src/app/order/getItemsCount.ts");
/* harmony import */ var _mapFromCustom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapFromCustom */ "./packages/core/src/app/order/mapFromCustom.tsx");
/* harmony import */ var _mapFromDigital__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapFromDigital */ "./packages/core/src/app/order/mapFromDigital.tsx");
/* harmony import */ var _mapFromGiftCertificate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapFromGiftCertificate */ "./packages/core/src/app/order/mapFromGiftCertificate.tsx");
/* harmony import */ var _mapFromPhysical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mapFromPhysical */ "./packages/core/src/app/order/mapFromPhysical.tsx");
/* harmony import */ var _OrderSummaryItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OrderSummaryItem */ "./packages/core/src/app/order/OrderSummaryItem.tsx");
/* harmony import */ var _removeBundledItems__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./removeBundledItems */ "./packages/core/src/app/order/removeBundledItems.ts");















const COLLAPSED_ITEMS_LIMIT = 4;
const COLLAPSED_ITEMS_LIMIT_SMALL_SCREEN = 3;
const ItemCount = ({ items, nonBundledItems, themeV2 }) => {
    var _a;
    const backorderCount = (0,_getBackorderCount__WEBPACK_IMPORTED_MODULE_8__["default"])(items);
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const config = checkoutState.data.getConfig();
    const shouldDisplayBackorderMessages = (_a = config === null || config === void 0 ? void 0 : config.inventorySettings) === null || _a === void 0 ? void 0 : _a.shouldDisplayBackorderMessagesOnStorefront;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-section-heading optimizedCheckout-contentPrimary', { 'body-medium': themeV2 }), "data-test": "cart-count-total" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { count: (0,_getItemsCount__WEBPACK_IMPORTED_MODULE_9__["default"])(nonBundledItems) }, id: "cart.item_count_text" }),
        shouldDisplayBackorderMessages && backorderCount > 0 && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: "cart-backorder-link", "data-test": "cart-backorder-total", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])() },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { count: backorderCount }, id: "cart.backorder_count_text" })))));
};
const ProductList = ({ items, isExpanded, collapsedLimit }) => {
    const summaryItems = [
        ...items.physicalItems.slice().sort((item) => item.variantId).map(_mapFromPhysical__WEBPACK_IMPORTED_MODULE_13__["default"]),
        ...items.giftCertificates.slice().map(_mapFromGiftCertificate__WEBPACK_IMPORTED_MODULE_12__["default"]),
        ...items.digitalItems.slice().sort((item) => item.variantId).map(_mapFromDigital__WEBPACK_IMPORTED_MODULE_11__["default"]),
        ...(items.customItems || []).map(_mapFromCustom__WEBPACK_IMPORTED_MODULE_10__["default"]),
    ].slice(0, isExpanded ? undefined : collapsedLimit);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { "aria-live": "polite", className: "productList" }, summaryItems.map(summaryItemProps => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: "productList-item is-visible", key: summaryItemProps.id },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryItem__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, summaryItemProps)))))));
};
const CartActions = ({ isExpanded, onToggle, themeV2 }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-actions" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('button button--tertiary button--tiny optimizedCheckout-buttonSecondary', { 'sub-text-medium': themeV2 }), onClick: onToggle, type: "button" }, isExpanded ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cart.see_less_action" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null))) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cart.see_all_action" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_6__["default"], null))))));
const OrderSummaryItems = ({ displayLineItemsCount = true, items, themeV2 = false, }) => {
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const nonBundledItems = (0,_removeBundledItems__WEBPACK_IMPORTED_MODULE_15__["default"])(items);
    const collapsedLimit = (0,_ui_responsive__WEBPACK_IMPORTED_MODULE_7__["default"])() ? COLLAPSED_ITEMS_LIMIT_SMALL_SCREEN : COLLAPSED_ITEMS_LIMIT;
    const getLineItemCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => ((nonBundledItems.customItems || []).length +
        nonBundledItems.physicalItems.length +
        nonBundledItems.digitalItems.length +
        nonBundledItems.giftCertificates.length), [nonBundledItems]);
    const shouldShowActions = getLineItemCount() > collapsedLimit;
    const handleToggle = () => setIsExpanded(!isExpanded);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        displayLineItemsCount && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ItemCount, { items: items, nonBundledItems: nonBundledItems, themeV2: themeV2 }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ProductList, { collapsedLimit: collapsedLimit, isExpanded: isExpanded, items: nonBundledItems }),
        shouldShowActions && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CartActions, { isExpanded: isExpanded, onToggle: handleToggle, themeV2: themeV2 })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryItems);


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummaryPrice.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryPrice.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");






function getDisplayValue(amount, zeroLabel) {
    const notYetSetSymbol = '--';
    if (typeof amount === 'undefined' || amount === null) {
        return notYetSetSymbol;
    }
    if (zeroLabel && amount === 0) {
        return zeroLabel;
    }
    return amount;
}
function isNumberValue(displayValue) {
    return typeof displayValue === 'number';
}
const OrderSummaryPrice = ({ amount, amountBeforeDiscount, actionLabel, onActionTriggered, children, className, currencyCode, label, superscript, testId, zeroLabel, isOrderTotal = false, }) => {
    const [highlight, setHighlight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [previousAmount, setPreviousAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(amount);
    const { checkoutState: { statuses: { isSubmittingOrder } } } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)();
    const displayValue = getDisplayValue(amount, zeroLabel);
    const isActionDisabled = isSubmittingOrder();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setHighlight(amount !== previousAmount);
        setPreviousAmount(amount);
    }, [amount]);
    const handleTransitionEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node, done) => {
        node.addEventListener('animationend', ({ target }) => {
            if (target === node) {
                setHighlight(false);
                done();
            }
        });
    }, [setHighlight]);
    const handleActionTrigger = () => {
        if (isActionDisabled || !onActionTriggered) {
            return;
        }
        onActionTriggered();
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": testId },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], { addEndListener: handleTransitionEnd, classNames: "changeHighlight", in: highlight, timeout: {} },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-live": "polite", className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-priceItem', 'optimizedCheckout-contentPrimary', className) },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-priceItem-label', {
                        'body-regular': themeV2 && !isOrderTotal,
                        'sub-header': themeV2 && isOrderTotal
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { "data-test": "cart-price-label" },
                        label,
                        '  '),
                    currencyCode && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-currencyCode" }, `(${currencyCode}) `)),
                    onActionTriggered && actionLabel && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-link" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                                'link--disabled': isActionDisabled,
                                'body-cta': themeV2 && !isOrderTotal
                            }), "data-test": "cart-price-callback", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(handleActionTrigger) }, actionLabel)))),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-priceItem-value', {
                        'body-medium': themeV2 && !isOrderTotal,
                        'header': themeV2 && isOrderTotal
                    }) },
                    isNumberValue(amountBeforeDiscount) && amountBeforeDiscount !== amount && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-before-value" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: amountBeforeDiscount }))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { "data-test": "cart-price-value" }, isNumberValue(displayValue) ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: displayValue })) : (displayValue)),
                    superscript && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("sup", { "data-test": "cart-price-value-superscript" }, superscript))),
                children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryPrice);


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummarySection.tsx":
/*!*************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummarySection.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const OrderSummarySection = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "cart-section optimizedCheckout-orderSummary-cartSection" }, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummarySection);


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummarySubtotals.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummarySubtotals.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _isOrderFee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isOrderFee */ "./packages/core/src/app/order/isOrderFee.ts");
/* harmony import */ var _OrderSummaryDiscount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderSummaryDiscount */ "./packages/core/src/app/order/OrderSummaryDiscount.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");





const OrderSummarySubtotals = ({ discountAmount, isTaxIncluded, giftCertificates, taxes, fees, giftWrappingAmount, shippingAmount, shippingAmountBeforeDiscount, subtotalAmount, handlingAmount, storeCreditAmount, coupons, onRemovedGiftCertificate, onRemovedCoupon, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: subtotalAmount, className: "cart-priceItem--subtotal", label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.subtotal_text" }), testId: "cart-subtotal" }),
        (coupons || []).map((coupon, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryDiscount__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: coupon.discountedAmount, code: coupon.code, key: index, label: coupon.displayName, onRemoved: onRemovedCoupon, testId: "cart-coupon" }))),
        !!discountAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryDiscount__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: discountAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.discount_text" }), testId: "cart-discount" })),
        (giftCertificates || []).map((giftCertificate, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryDiscount__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: giftCertificate.used, code: giftCertificate.code, key: index, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.gift_certificate_text" }), onRemoved: onRemovedGiftCertificate, remaining: giftCertificate.remaining, testId: "cart-gift-certificate" }))),
        !!giftWrappingAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: giftWrappingAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.gift_wrapping_text" }), testId: "cart-gift-wrapping" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: shippingAmount, amountBeforeDiscount: shippingAmountBeforeDiscount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.shipping_text" }), testId: "cart-shipping", zeroLabel: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.free_text" }) }),
        !!handlingAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: handlingAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.handling_text" }), testId: "cart-handling" })), fees === null || fees === void 0 ? void 0 :
        fees.map((fee, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: fee.cost, key: index, label: (0,_isOrderFee__WEBPACK_IMPORTED_MODULE_2__["default"])(fee) ? fee.customerDisplayName : fee.displayName, testId: "cart-fees" }))),
        !isTaxIncluded && (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" }))),
        !!storeCreditAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryDiscount__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: storeCreditAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.store_credit_text" }), testId: "cart-store-credit" }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(OrderSummarySubtotals));


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummaryTotal.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryTotal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withCurrency.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");



const OrderSummaryTotal = ({ shopperCurrencyCode, storeCurrencyCode, orderAmount, currency, }) => {
    const hasDifferentCurrency = shopperCurrencyCode !== storeCurrencyCode;
    const label = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        hasDifferentCurrency ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.estimated_total_text" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.total_text" })),
        ` (${shopperCurrencyCode})`));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: orderAmount, className: "cart-priceItem--total", isOrderTotal: true, label: label, superscript: hasDifferentCurrency ? '*' : undefined, testId: "cart-total" }),
        hasDifferentCurrency && currency && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "cart-priceItem--totalNote", "data-test": "cart-price-item-total-note" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: {
                    total: currency.toStoreCurrency(orderAmount),
                    code: storeCurrencyCode,
                }, id: "cart.billed_amount_text" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"])(OrderSummaryTotal));


/***/ }),

/***/ "./packages/core/src/app/order/getBackorderCount.ts":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/order/getBackorderCount.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBackorderCount)
/* harmony export */ });
function getBackorderCount({ physicalItems, digitalItems, }) {
    return [...physicalItems, ...digitalItems].reduce((total, item) => { var _a, _b; return total + ((_b = (_a = item.stockPosition) === null || _a === void 0 ? void 0 : _a.quantityBackordered) !== null && _b !== void 0 ? _b : 0); }, 0);
}


/***/ }),

/***/ "./packages/core/src/app/order/getItemsCount.ts":
/*!******************************************************!*\
  !*** ./packages/core/src/app/order/getItemsCount.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getItemsCount)
/* harmony export */ });
function getItemsCount({ physicalItems, digitalItems, giftCertificates, customItems, }) {
    const totalItemsCount = [...physicalItems, ...digitalItems, ...(customItems || [])].reduce((total, item) => (total += item.quantity), 0);
    return totalItemsCount + giftCertificates.length;
}


/***/ }),

/***/ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx":
/*!******************************************************************!*\
  !*** ./packages/core/src/app/order/getOrderSummaryItemImage.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/core/src/app/order/isOrderFee.ts":
/*!***************************************************!*\
  !*** ./packages/core/src/app/order/isOrderFee.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isOrderFee)
/* harmony export */ });
function isOrderFee(fee) {
    return Object.hasOwn(fee, 'customerDisplayName');
}


/***/ }),

/***/ "./packages/core/src/app/order/mapFromCustom.tsx":
/*!*******************************************************!*\
  !*** ./packages/core/src/app/order/mapFromCustom.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mapFromCustom(item) {
    return {
        id: item.id,
        quantity: item.quantity,
        amount: item.extendedListPrice,
        name: item.name,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapFromCustom);


/***/ }),

/***/ "./packages/core/src/app/order/mapFromDigital.tsx":
/*!********************************************************!*\
  !*** ./packages/core/src/app/order/mapFromDigital.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOrderSummaryItemImage */ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx");



function mapFromDigital(item) {
    return {
        id: item.id,
        quantity: item.quantity,
        amount: item.extendedComparisonPrice,
        amountAfterDiscount: item.extendedSalePrice,
        name: item.name,
        image: (0,_getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_2__["default"])(item),
        productOptions: [
            ...(item.options || []).map((option) => ({
                testId: 'cart-item-product-option',
                content: `${option.name} ${option.value}`,
            })),
            getDigitalItemDescription(item),
        ],
    };
}
function getDigitalItemDescription(item) {
    if (!item.downloadPageUrl) {
        return {
            testId: 'cart-item-digital-product',
            content: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.digital_item_text" }),
        };
    }
    return {
        testId: 'cart-item-digital-product-download',
        content: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: item.downloadPageUrl, rel: "noopener noreferrer", target: "_blank" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.downloads_action" }))),
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapFromDigital);


/***/ }),

/***/ "./packages/core/src/app/order/mapFromGiftCertificate.tsx":
/*!****************************************************************!*\
  !*** ./packages/core/src/app/order/mapFromGiftCertificate.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconGiftCertificate.tsx");


function mapFromGiftCertificate(item) {
    return {
        id: item.id,
        quantity: 1,
        amount: item.amount,
        name: item.name,
        image: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "productImage-giftCertificate", "data-test": "cart-item-gift-certificate" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_1__["default"], null))),
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapFromGiftCertificate);


/***/ }),

/***/ "./packages/core/src/app/order/mapFromPhysical.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/order/mapFromPhysical.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrderSummaryItemImage */ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx");

function mapFromPhysical(item) {
    return {
        id: item.id,
        quantity: item.quantity,
        amount: item.extendedComparisonPrice,
        amountAfterDiscount: item.extendedSalePrice,
        name: item.name,
        image: (0,_getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_0__["default"])(item),
        description: item.giftWrapping ? item.giftWrapping.name : undefined,
        productOptions: (item.options || []).map((option) => ({
            testId: 'cart-item-product-option',
            content: `${option.name} ${option.value}`,
        })),
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapFromPhysical);


/***/ }),

/***/ "./packages/core/src/app/order/removeBundledItems.ts":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/removeBundledItems.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeBundledItems)
/* harmony export */ });
function removeBundledItems(lineItems) {
    return Object.assign(Object.assign({}, lineItems), { physicalItems: lineItems.physicalItems.filter((item) => typeof item.parentId !== 'string'), digitalItems: lineItems.digitalItems.filter((item) => typeof item.parentId !== 'string') });
}


/***/ }),

/***/ "./packages/core/src/app/ui/icon/IconChevronDown.tsx":
/*!***********************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconChevronDown.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/core/src/app/ui/icon/withIconContainer.tsx");


const IconChevronDown = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconChevronDown));


/***/ }),

/***/ "./packages/core/src/app/ui/icon/IconChevronUp.tsx":
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconChevronUp.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/core/src/app/ui/icon/withIconContainer.tsx");


const IconChevronUp = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconChevronUp));


/***/ }),

/***/ "./packages/core/src/app/ui/icon/IconGiftCertificate.tsx":
/*!***************************************************************!*\
  !*** ./packages/core/src/app/ui/icon/IconGiftCertificate.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconGiftCertificate = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGiftCertificate);


/***/ }),

/***/ "./packages/core/src/app/ui/responsive/isSmallScreen.ts":
/*!**************************************************************!*\
  !*** ./packages/core/src/app/ui/responsive/isSmallScreen.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSmallScreen)
/* harmony export */ });
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ "./packages/core/src/app/ui/responsive/breakpoints.ts");

let query;
function isSmallScreen() {
    query = window.matchMedia(`(max-width: ${_breakpoints__WEBPACK_IMPORTED_MODULE_0__.SMALL_SCREEN_MAX_WIDTH}px)`);
    return query.matches;
}


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

/***/ "./packages/ui/src/form/TextInput/TextInput.tsx":
/*!******************************************************!*\
  !*** ./packages/ui/src/form/TextInput/TextInput.tsx ***!
  \******************************************************/
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




const TextInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_a, ref) => {
    var { additionalClassName, isFloatingLabelEnabled, appearFocused, type = 'text', themeV2 = false } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalClassName", "isFloatingLabelEnabled", "appearFocused", "type", "themeV2"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, rest, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-input', 'optimizedCheckout-form-input', { 'form-input--focus': appearFocused }, { 'optimizedCheckout-form-input--focus': appearFocused }, additionalClassName, { 'floating-form-field-input': themeV2 && isFloatingLabelEnabled }, { 'body-regular': themeV2 && !isFloatingLabelEnabled }), isFloatingLabelEnabled: isFloatingLabelEnabled, ref: ref, type: type })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ }),

/***/ "./packages/ui/src/icon/IconCoupon.tsx":
/*!*********************************************!*\
  !*** ./packages/ui/src/icon/IconCoupon.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./packages/ui/src/icon/IconDownArrow.tsx":
/*!************************************************!*\
  !*** ./packages/ui/src/icon/IconDownArrow.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconDownArrow = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "arrow", fill: "none", height: "20", viewBox: "0 0 20 20", width: "20", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "icon-path", d: "M6.77083 7.50156L10.0042 10.7349L13.2375 7.50156C13.5625 7.17656 14.0875 7.17656 14.4125 7.50156C14.7375 7.82656 14.7375 8.35156 14.4125 8.67656L10.5875 12.5016C10.2625 12.8266 9.7375 12.8266 9.4125 12.5016L5.5875 8.67656C5.2625 8.35156 5.2625 7.82656 5.5875 7.50156C5.9125 7.1849 6.44583 7.17656 6.77083 7.50156Z", fill: "#979797" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconDownArrow);


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

/***/ "./packages/ui/src/icon/IconGiftCertificateNew.tsx":
/*!*********************************************************!*\
  !*** ./packages/ui/src/icon/IconGiftCertificateNew.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/ui/src/icon/IconRemoveCoupon.tsx":
/*!***************************************************!*\
  !*** ./packages/ui/src/icon/IconRemoveCoupon.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/ui/src/icon/IconUpArrow.tsx":
/*!**********************************************!*\
  !*** ./packages/ui/src/icon/IconUpArrow.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconUpArrow = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "arrow", fill: "none", height: "20", viewBox: "0 0 20 20", width: "20", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "icon-path", d: "M6.77083 12.4984L10.0042 9.26506L13.2375 12.4984C13.5625 12.8234 14.0875 12.8234 14.4125 12.4984C14.7375 12.1734 14.7375 11.6484 14.4125 11.3234L10.5875 7.4984C10.2625 7.1734 9.7375 7.1734 9.4125 7.4984L5.5875 11.3234C5.2625 11.6484 5.2625 12.1734 5.5875 12.4984C5.9125 12.8151 6.44583 12.8234 6.77083 12.4984Z", fill: "#979797" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconUpArrow);


/***/ })

}]);
//# sourceMappingURL=packages_core_src_app_coupon_NewOrderSummarySubtotals_tsx-packages_core_src_app_order_OrderSu-a229c8.js.map