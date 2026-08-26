"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["packages_core_src_app_coupon_OrderSummarySubtotals_tsx-packages_core_src_app_order_OrderSumma-b181f2"],{

/***/ "./packages/core/src/app/coupon/OrderSummarySubtotals.tsx"
/*!****************************************************************!*\
  !*** ./packages/core/src/app/coupon/OrderSummarySubtotals.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order */ "./packages/core/src/app/order/isOrderFee.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order */ "./packages/core/src/app/order/OrderSummaryDiscount.tsx");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./packages/core/src/app/coupon/components/AppliedGiftCertificates.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./packages/core/src/app/coupon/components/CollapsibleCouponForm.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./packages/core/src/app/coupon/components/Discounts.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");






const OrderSummarySubtotals = ({ fees, giftWrappingAmount, handlingAmount, isTaxIncluded, storeCreditAmount, taxes, isOrderConfirmation = false, }) => {
    const { appliedGiftCertificates, uiDetails: { shipping, shippingBeforeDiscount }, } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_9__.useMultiCoupon)();
    const { userJourney: { disableCoupon, disableGiftCertificate }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCapabilities)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        !isOrderConfirmation && !(disableCoupon && disableGiftCertificate) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "cart-section optimizedCheckout-orderSummary-cartSection" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_7__.CollapsibleCouponForm, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "subtotals-with-multi-coupon cart-section optimizedCheckout-orderSummary-cartSection" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_8__.Discounts, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: shipping, amountBeforeDiscount: shippingBeforeDiscount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.shipping_text" }), testId: "cart-shipping", zeroLabel: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.free_text" }) }),
            !!giftWrappingAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: giftWrappingAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.gift_wrapping_text" }), testId: "cart-gift-wrapping" })),
            !!handlingAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: handlingAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.handling_text" }), testId: "cart-handling" })), fees === null || fees === void 0 ? void 0 :
            fees.map((fee, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: fee.cost, key: index, label: (0,_order__WEBPACK_IMPORTED_MODULE_3__["default"])(fee) ? fee.customerDisplayName : fee.displayName, testId: "cart-fees" }))),
            !isTaxIncluded &&
                (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_6__.AppliedGiftCertificates, { giftCertificates: appliedGiftCertificates }),
            !!storeCreditAmount && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order__WEBPACK_IMPORTED_MODULE_4__["default"], { amount: storeCreditAmount, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.store_credit_text" }), testId: "cart-store-credit" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummarySubtotals);


/***/ },

/***/ "./packages/core/src/app/coupon/components/AppliedGiftCertificates.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/AppliedGiftCertificates.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/core/src/app/coupon/components/Discounts.tsx"
/*!***************************************************************!*\
  !*** ./packages/core/src/app/coupon/components/Discounts.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Discounts: () => (/* binding */ Discounts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCoupon.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconDownArrow.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconUpArrow.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _useMultiCoupon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useMultiCoupon */ "./packages/core/src/app/coupon/useMultiCoupon.ts");





const DiscountItems = ({ coupons }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, coupons.map((coupon) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": coupon.testId, key: coupon.name },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-live": "polite", className: "cart-priceItem optimizedCheckout-contentPrimary" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label optimizedCheckout-contentPrimary body-regular" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null),
                coupon.name),
            coupon.showMaxLimitInfo && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "optimizedCheckout-contentPrimary sub-text cart-priceItem-label-info" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "redeemable.maximum_discount_applied_text" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value optimizedCheckout-contentPrimary body-medium", "data-test": "cart-price-value" },
            "-",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: coupon.amount }))))))));
const DiscountsCollapsible = ({ discounts, discountItems }) => {
    const [isCouponDiscountsVisible, setIsCouponDiscountsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const discountsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-controls": "applied-coupon-discounts-collapsable", "aria-expanded": isCouponDiscountsVisible, "aria-live": "polite", className: "coupon-discount-toggle cart-priceItem optimizedCheckout-contentPrimary", onClick: () => setIsCouponDiscountsVisible(!isCouponDiscountsVisible), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsCouponDiscountsVisible(!isCouponDiscountsVisible);
                }
            }, role: "button", tabIndex: 0 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label optimizedCheckout-contentPrimary body-regular" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "toggle-button" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "redeemable.discounts_text" }),
                    isCouponDiscountsVisible ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value optimizedCheckout-contentPrimary body-medium" },
                "-",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: discounts }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__.CollapseCSSTransition, { isVisible: isCouponDiscountsVisible, nodeRef: discountsRef },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "applied-discounts-list", id: "applied-coupon-discounts-collapsable", ref: discountsRef },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DiscountItems, { coupons: discountItems })))));
};
const Discounts = () => {
    const { uiDetails: { subtotal, discounts, discountItems }, } = (0,_useMultiCoupon__WEBPACK_IMPORTED_MODULE_7__.useMultiCoupon)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": "cart-subtotal" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "aria-live": "polite", className: "cart-priceItem optimizedCheckout-contentPrimary" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-label optimizedCheckout-contentPrimary body-regular" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.subtotal_text" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-priceItem-value optimizedCheckout-contentPrimary body-medium", "data-test": "cart-price-value" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: subtotal }))),
        (discounts > 0 || discountItems.length > 0) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DiscountsCollapsible, { discountItems: discountItems, discounts: discounts }))));
};


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryDiscount.tsx"
/*!**************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryDiscount.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");





const OrderSummaryDiscount = (_a) => {
    var { code, remaining, amount, onRemoved } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["code", "remaining", "amount", "onRemoved"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, (onRemoved && {
        onActionTriggered: () => code && onRemoved(code),
        actionLabel: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "redeemable.remove_action" }),
    }), { amount: -1 * (amount || 0) }),
        !!remaining && remaining > 0 && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-postFix optimizedCheckout-contentSecondary", "data-test": "cart-price-remaining" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.remaining_text" }),
            ': ',
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: remaining }))),
        code && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-postFix optimizedCheckout-contentSecondary sub-text-medium", "data-test": "cart-price-code" }, code))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(OrderSummaryDiscount));


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryItem.tsx"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryItem.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");







const OrderSummaryItemBackorderDetails = ({ isExpanded, quantityBackordered, quantityOnHand, backorderMessage, }) => {
    const backorderDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { selectedState: config } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)(({ data }) => data.getConfig());
    const inventorySettings = config === null || config === void 0 ? void 0 : config.inventorySettings;
    const showQuantityOnBackorder = !!(inventorySettings === null || inventorySettings === void 0 ? void 0 : inventorySettings.showQuantityOnBackorder);
    const showBackorderMessage = !!(inventorySettings === null || inventorySettings === void 0 ? void 0 : inventorySettings.showBackorderMessage);
    const shouldDisplayBackorderMessagesOnStorefront = !!(inventorySettings === null || inventorySettings === void 0 ? void 0 : inventorySettings.shouldDisplayBackorderMessagesOnStorefront);
    if (!shouldDisplayBackorderMessagesOnStorefront ||
        (!showQuantityOnBackorder && !showBackorderMessage)) {
        return null;
    }
    const shouldDisplayQuantityOnHand = showQuantityOnBackorder && !!quantityOnHand;
    const shouldDisplayQuantityOnBackorder = showQuantityOnBackorder && !!quantityBackordered;
    const shouldDisplayBackorderMessage = showBackorderMessage && !!backorderMessage && !!quantityBackordered;
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.CollapseCSSTransition, { isVisible: isExpanded, nodeRef: backorderDetailsRef },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-backorder-details-container optimizedCheckout-contentSecondary sub-text-medium", ref: backorderDetailsRef },
            shouldDisplayQuantityOnHand && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-backorder-status product-backorder-status--onhand", "data-test": "cart-item-onhand-qty" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { count: quantityOnHand }, id: "cart.ready_to_ship_count_text" }))),
            shouldDisplayQuantityOnBackorder && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-backorder-status product-backorder-status--backorder", "data-test": "cart-item-backorder-qty" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { count: quantityBackordered }, id: "cart.backorder_count_text" }))),
            shouldDisplayBackorderMessage && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-backorder-message", "data-test": "cart-item-backorder-message" }, backorderMessage)))));
};
const OrderSummaryItem = ({ orderItem, shouldExpandBackorderDetails, }) => {
    const { amount, amountAfterDiscount, image, name, productOptions, quantity, description, quantityBackordered, quantityOnHand, backorderMessage, } = orderItem;
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product", "data-test": "cart-item" },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("figure", { className: "product-column product-figure" }, image),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-column product-body" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h4", { className: "product-title optimizedCheckout-contentPrimary body-medium", "data-test": "cart-item-product-title" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "optimizedCheckout-contentPrimary body-bold" }, `${quantity} x `),
                name),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OrderSummaryItemBackorderDetails, { backorderMessage: backorderMessage, isExpanded: shouldExpandBackorderDetails, quantityBackordered: quantityBackordered, quantityOnHand: quantityOnHand }),
            productOptions && productOptions.length > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: "product-options optimizedCheckout-contentSecondary sub-text-medium", "data-test": "cart-item-product-options" }, productOptions.map((option, index) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", { className: "product-option", "data-test": option.testId, key: index },
                option.name ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: option.isMainBundledItem ? 'body-bold' : '' }, option.name),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, option.value))) : (option.content),
                option.stockPosition && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OrderSummaryItemBackorderDetails, { backorderMessage: option.stockPosition.backorderMessage, isExpanded: shouldExpandBackorderDetails, quantityBackordered: option.stockPosition.quantityBackordered, quantityOnHand: option.stockPosition.quantityOnHand }))))))),
            description && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-description optimizedCheckout-contentSecondary", "data-test": "cart-item-product-description" }, description))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-column product-actions" },
            (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount !== amount && (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "product-price optimizedCheckout-contentPrimary body-medium", "data-test": "cart-item-product-price--afterDiscount" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: amountAfterDiscount }))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('product-price', 'optimizedCheckout-contentPrimary', {
                    'product-price--beforeDiscount': (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount !== amount,
                    'body-medium': (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount === amount,
                    'body-regular': (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(amountAfterDiscount) && amountAfterDiscount !== amount,
                }), "data-test": "cart-item-product-price" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: amount })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(OrderSummaryItem));


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryItems.tsx"
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryItems.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setBackorderDetailsExpanded: () => (/* binding */ setBackorderDetailsExpanded)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/animation/collapse/CollapseCSSTransition.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/switch/Switch.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/responsive/isSmallScreen.ts");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconChevronUp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconChevronDown.tsx");
/* harmony import */ var _getBackorderCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getBackorderCount */ "./packages/core/src/app/order/getBackorderCount.ts");
/* harmony import */ var _getItemsCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getItemsCount */ "./packages/core/src/app/order/getItemsCount.ts");
/* harmony import */ var _mapFromCustom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapFromCustom */ "./packages/core/src/app/order/mapFromCustom.tsx");
/* harmony import */ var _mapFromDigital__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mapFromDigital */ "./packages/core/src/app/order/mapFromDigital.tsx");
/* harmony import */ var _mapFromGiftCertificate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mapFromGiftCertificate */ "./packages/core/src/app/order/mapFromGiftCertificate.tsx");
/* harmony import */ var _mapFromPhysical__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mapFromPhysical */ "./packages/core/src/app/order/mapFromPhysical.tsx");
/* harmony import */ var _OrderSummaryItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OrderSummaryItem */ "./packages/core/src/app/order/OrderSummaryItem.tsx");
/* harmony import */ var _removeBundledItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./removeBundledItems */ "./packages/core/src/app/order/removeBundledItems.ts");














// Module-scoped to survive the responsive remount. Safe as MobileView mounts only one instance at a time.
let backorderDetailsExpanded = false;
const getBackorderDetailsExpanded = () => backorderDetailsExpanded;
const setBackorderDetailsExpanded = (value) => {
    backorderDetailsExpanded = value;
};
const AnimatedProductItem = ({ children, in: inProp, onExited, }) => {
    const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__.CollapseCSSTransition, { classNames: "product-item", in: inProp, isSlideAnimation: true, nodeRef: nodeRef, onExited: onExited },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: "productList-item is-visible", ref: nodeRef }, children)));
};
const COLLAPSED_ITEMS_LIMIT = 4;
const COLLAPSED_ITEMS_LIMIT_SMALL_SCREEN = 3;
const SummaryHeading = ({ displayLineItemsCount, nonBundledItems, showBackorderDetails, showBackorderSwitch, toggleBackorderDetails, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-section-heading-container', {
        'cart-section-heading-container--switch-only': !displayLineItemsCount,
    }) },
    displayLineItemsCount && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: "cart-section-heading optimizedCheckout-contentPrimary body-medium", "data-test": "cart-count-total" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: { count: (0,_getItemsCount__WEBPACK_IMPORTED_MODULE_11__["default"])(nonBundledItems) }, id: "cart.item_count_text" }))),
    showBackorderSwitch && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__.Switch, { checked: showBackorderDetails, label: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cart.backorder_details" }), onChange: toggleBackorderDetails, testId: "cart-backorder-link" }))));
const ProductList = ({ items, isExpanded, collapsedLimit, showBackorderDetails, bundleItemsMap, }) => {
    const summaryItems = [
        ...items.physicalItems
            .slice()
            .sort((item) => item.variantId)
            .map((item) => (0,_mapFromPhysical__WEBPACK_IMPORTED_MODULE_15__["default"])(item, bundleItemsMap)),
        ...items.giftCertificates.slice().map(_mapFromGiftCertificate__WEBPACK_IMPORTED_MODULE_14__["default"]),
        ...items.digitalItems
            .slice()
            .sort((item) => item.variantId)
            .map((item) => (0,_mapFromDigital__WEBPACK_IMPORTED_MODULE_13__["default"])(item, bundleItemsMap)),
        ...(items.customItems || []).map(_mapFromCustom__WEBPACK_IMPORTED_MODULE_12__["default"]),
    ].slice(0, isExpanded ? undefined : collapsedLimit);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], { "aria-live": "polite", className: "productList", component: "ul" }, summaryItems.map((summaryItemProps) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AnimatedProductItem, { key: summaryItemProps.id },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryItem__WEBPACK_IMPORTED_MODULE_16__["default"], { orderItem: summaryItemProps, shouldExpandBackorderDetails: showBackorderDetails }))))));
};
const CartActions = ({ isExpanded, onSwitch, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-actions" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: "button button--tertiary button--tiny optimizedCheckout-buttonSecondary optimizedCheckout-contentSecondary sub-text-medium", onClick: onSwitch, type: "button" }, isExpanded ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cart.see_less_action" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], null))) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cart.see_all_action" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], null))))));
const OrderSummaryItems = ({ displayLineItemsCount = true, items, }) => {
    var _a, _b, _c;
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showBackorderDetails, setShowBackorderDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getBackorderDetailsExpanded);
    const { selectedState: { config, order }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)(({ data }) => ({
        config: data.getConfig(),
        order: data.getOrder(),
    }));
    const toggleBackorderDetails = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setShowBackorderDetails((prev) => {
            const next = !prev;
            setBackorderDetailsExpanded(next);
            return next;
        });
    }, []);
    const backorderCount = (0,_getBackorderCount__WEBPACK_IMPORTED_MODULE_10__["default"])(items);
    const shouldDisplayBackorderDetails = !!((_a = config === null || config === void 0 ? void 0 : config.inventorySettings) === null || _a === void 0 ? void 0 : _a.shouldDisplayBackorderMessagesOnStorefront) &&
        (!!((_b = config === null || config === void 0 ? void 0 : config.inventorySettings) === null || _b === void 0 ? void 0 : _b.showQuantityOnBackorder) ||
            !!((_c = config === null || config === void 0 ? void 0 : config.inventorySettings) === null || _c === void 0 ? void 0 : _c.showBackorderMessage));
    const showBackorderSwitch = shouldDisplayBackorderDetails && backorderCount > 0;
    const expandBackorderDetails = showBackorderSwitch && showBackorderDetails;
    const { nonBundledItems, bundleItemsMap } = (0,_removeBundledItems__WEBPACK_IMPORTED_MODULE_17__.getNonBundledItems)(items, order === null || order === void 0 ? void 0 : order.bundledItems);
    const collapsedLimit = (0,_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__.isSmallScreen)()
        ? COLLAPSED_ITEMS_LIMIT_SMALL_SCREEN
        : COLLAPSED_ITEMS_LIMIT;
    const getLineItemCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => (nonBundledItems.customItems || []).length +
        nonBundledItems.physicalItems.length +
        nonBundledItems.digitalItems.length +
        nonBundledItems.giftCertificates.length, [nonBundledItems]);
    const shouldShowActions = getLineItemCount() > collapsedLimit;
    const handleSwitch = () => setIsExpanded(!isExpanded);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        (displayLineItemsCount || showBackorderSwitch) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SummaryHeading, { displayLineItemsCount: displayLineItemsCount, nonBundledItems: nonBundledItems, showBackorderDetails: showBackorderDetails, showBackorderSwitch: showBackorderSwitch, toggleBackorderDetails: toggleBackorderDetails })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ProductList, { bundleItemsMap: bundleItemsMap, collapsedLimit: collapsedLimit, isExpanded: isExpanded, items: nonBundledItems, showBackorderDetails: expandBackorderDetails }),
        shouldShowActions && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CartActions, { isExpanded: isExpanded, onSwitch: handleSwitch })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryItems);


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryPrice.tsx"
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryPrice.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");






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
    const { selectedState: isActionDisabled } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)(({ statuses }) => statuses.isSubmittingOrder());
    const displayValue = getDisplayValue(amount, zeroLabel);
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
                        'body-regular optimizedCheckout-contentPrimary': !isOrderTotal,
                        'sub-header optimizedCheckout-headingSecondary': isOrderTotal,
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { "data-test": "cart-price-label" },
                        label,
                        '  '),
                    currencyCode && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-currencyCode" }, `(${currencyCode}) `)),
                    onActionTriggered && actionLabel && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-link" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                                'link--disabled': isActionDisabled,
                                'body-cta': !isOrderTotal,
                            }), "data-test": "cart-price-callback", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(handleActionTrigger) }, actionLabel)))),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-priceItem-value', {
                        'body-medium optimizedCheckout-contentPrimary': !isOrderTotal,
                        'header optimizedCheckout-headingPrimary': isOrderTotal,
                    }) },
                    isNumberValue(amountBeforeDiscount) && amountBeforeDiscount !== amount && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-priceItem-before-value" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: amountBeforeDiscount }))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { "data-test": "cart-price-value" }, isNumberValue(displayValue) ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: displayValue })) : (displayValue)),
                    superscript && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("sup", { "data-test": "cart-price-value-superscript" }, superscript))),
                children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryPrice);


/***/ },

/***/ "./packages/core/src/app/order/OrderSummarySection.tsx"
/*!*************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummarySection.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const OrderSummarySection = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "cart-section optimizedCheckout-orderSummary-cartSection" }, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummarySection);


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryTotal.tsx"
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryTotal.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/core/src/app/order/getBackorderCount.ts"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/order/getBackorderCount.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBackorderCount)
/* harmony export */ });
function getBackorderCount({ physicalItems, digitalItems }) {
    return [...physicalItems, ...digitalItems].reduce((total, item) => {
        var _a, _b, _c;
        return total +
            Number((_c = (_b = (_a = item.stockPosition) === null || _a === void 0 ? void 0 : _a.quantityBackordered) !== null && _b !== void 0 ? _b : item.quantityBackordered) !== null && _c !== void 0 ? _c : 0);
    }, 0);
}


/***/ },

/***/ "./packages/core/src/app/order/getItemsCount.ts"
/*!******************************************************!*\
  !*** ./packages/core/src/app/order/getItemsCount.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getItemsCount)
/* harmony export */ });
function getItemsCount({ physicalItems, digitalItems, giftCertificates, customItems, }) {
    const totalItemsCount = [...physicalItems, ...digitalItems, ...(customItems || [])].reduce((total, item) => (total += item.quantity), 0);
    return totalItemsCount + giftCertificates.length;
}


/***/ },

/***/ "./packages/core/src/app/order/isOrderFee.ts"
/*!***************************************************!*\
  !*** ./packages/core/src/app/order/isOrderFee.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isOrderFee)
/* harmony export */ });
function isOrderFee(fee) {
    return Object.hasOwn(fee, 'customerDisplayName');
}


/***/ },

/***/ "./packages/core/src/app/order/mapBackorderDetails.ts"
/*!************************************************************!*\
  !*** ./packages/core/src/app/order/mapBackorderDetails.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapBackorderDetails: () => (/* binding */ mapBackorderDetails)
/* harmony export */ });
const mapBackorderDetails = (item) => {
    var _a, _b, _c, _d, _e;
    const quantityBackordered = (_b = (_a = item.stockPosition) === null || _a === void 0 ? void 0 : _a.quantityBackordered) !== null && _b !== void 0 ? _b : item.quantityBackordered;
    const quantityOnHand = (_d = (_c = item.stockPosition) === null || _c === void 0 ? void 0 : _c.quantityOnHand) !== null && _d !== void 0 ? _d : (quantityBackordered != null ? item.quantity - quantityBackordered : undefined);
    const backorderMessage = ((_e = item.stockPosition) === null || _e === void 0 ? void 0 : _e.backorderMessage) || item.backorderMessage || undefined;
    return {
        quantityBackordered,
        quantityOnHand,
        backorderMessage,
    };
};


/***/ },

/***/ "./packages/core/src/app/order/mapFromCustom.tsx"
/*!*******************************************************!*\
  !*** ./packages/core/src/app/order/mapFromCustom.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/core/src/app/order/mapFromDigital.tsx"
/*!********************************************************!*\
  !*** ./packages/core/src/app/order/mapFromDigital.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOrderSummaryItemImage */ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx");
/* harmony import */ var _mapBackorderDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapBackorderDetails */ "./packages/core/src/app/order/mapBackorderDetails.ts");




function mapFromDigital(item, bundleItemsMap) {
    var _a;
    const bundledItems = bundleItemsMap === null || bundleItemsMap === void 0 ? void 0 : bundleItemsMap.get(String(item.id));
    const bundledItemsAddedByAttributeIds = bundledItems === null || bundledItems === void 0 ? void 0 : bundledItems.flatMap(({ addedByAttributeId }) => addedByAttributeId ? [addedByAttributeId] : []);
    const mappedOptions = (_a = item.options) === null || _a === void 0 ? void 0 : _a.map((option) => {
        if (option.attributeId && (bundledItemsAddedByAttributeIds === null || bundledItemsAddedByAttributeIds === void 0 ? void 0 : bundledItemsAddedByAttributeIds.includes(option.attributeId))) {
            const bundledItem = bundledItems === null || bundledItems === void 0 ? void 0 : bundledItems.find(({ addedByAttributeId }) => addedByAttributeId === option.attributeId);
            return {
                testId: 'cart-item-product-option',
                content: `${option.name}: ${option.value}`,
                name: `${option.name}:`,
                value: option.value,
                isMainBundledItem: true,
                stockPosition: bundledItem ? (0,_mapBackorderDetails__WEBPACK_IMPORTED_MODULE_3__.mapBackorderDetails)(bundledItem) : undefined,
            };
        }
        return {
            testId: 'cart-item-product-option',
            content: `${option.name}: ${option.value}`,
            name: `${option.name}:`,
            value: option.value,
            isMainBundledItem: false,
        };
    });
    return Object.assign({ id: item.id, quantity: item.quantity, amount: item.extendedComparisonPrice, amountAfterDiscount: item.extendedSalePrice, name: item.name, image: (0,_getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_2__["default"])(item), productOptions: [...(mappedOptions || []), getDigitalItemDescription(item)] }, (0,_mapBackorderDetails__WEBPACK_IMPORTED_MODULE_3__.mapBackorderDetails)(item));
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


/***/ },

/***/ "./packages/core/src/app/order/mapFromGiftCertificate.tsx"
/*!****************************************************************!*\
  !*** ./packages/core/src/app/order/mapFromGiftCertificate.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconGiftCertificate.tsx");


function mapFromGiftCertificate(item) {
    return {
        id: item.id,
        quantity: 1,
        amount: item.amount,
        name: item.name,
        image: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "productImage-giftCertificate", "data-test": "cart-item-gift-certificate" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__["default"], null))),
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapFromGiftCertificate);


/***/ },

/***/ "./packages/core/src/app/order/mapFromPhysical.tsx"
/*!*********************************************************!*\
  !*** ./packages/core/src/app/order/mapFromPhysical.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrderSummaryItemImage */ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx");
/* harmony import */ var _mapBackorderDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapBackorderDetails */ "./packages/core/src/app/order/mapBackorderDetails.ts");


function mapFromPhysical(item, bundleItemsMap) {
    var _a;
    const bundledItems = bundleItemsMap === null || bundleItemsMap === void 0 ? void 0 : bundleItemsMap.get(String(item.id));
    const bundledItemsAddedByAttributeIds = bundledItems === null || bundledItems === void 0 ? void 0 : bundledItems.flatMap(({ addedByAttributeId }) => addedByAttributeId ? [addedByAttributeId] : []);
    const options = (_a = item.options) === null || _a === void 0 ? void 0 : _a.map((option) => {
        if (option.attributeId && (bundledItemsAddedByAttributeIds === null || bundledItemsAddedByAttributeIds === void 0 ? void 0 : bundledItemsAddedByAttributeIds.includes(option.attributeId))) {
            const bundledItem = bundledItems === null || bundledItems === void 0 ? void 0 : bundledItems.find(({ addedByAttributeId }) => addedByAttributeId === option.attributeId);
            return {
                testId: 'cart-item-product-option',
                content: `${option.name}: ${option.value}`,
                name: `${option.name}:`,
                value: option.value,
                isMainBundledItem: true,
                stockPosition: bundledItem ? (0,_mapBackorderDetails__WEBPACK_IMPORTED_MODULE_1__.mapBackorderDetails)(bundledItem) : undefined,
            };
        }
        return {
            testId: 'cart-item-product-option',
            content: `${option.name}: ${option.value}`,
            name: `${option.name}:`,
            value: option.value,
            isMainBundledItem: false,
        };
    });
    return Object.assign({ id: item.id, quantity: item.quantity, amount: item.extendedComparisonPrice, amountAfterDiscount: item.extendedSalePrice, name: item.name, image: (0,_getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_0__["default"])(item), description: item.giftWrapping ? item.giftWrapping.name : undefined, productOptions: options }, (0,_mapBackorderDetails__WEBPACK_IMPORTED_MODULE_1__.mapBackorderDetails)(item));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapFromPhysical);


/***/ },

/***/ "./packages/core/src/app/order/removeBundledItems.ts"
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/removeBundledItems.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBundleItemsMapFromOrder: () => (/* binding */ buildBundleItemsMapFromOrder),
/* harmony export */   getNonBundledItems: () => (/* binding */ getNonBundledItems),
/* harmony export */   removeAndBundleItemsTogether: () => (/* binding */ removeAndBundleItemsTogether),
/* harmony export */   removeBundledItems: () => (/* binding */ removeBundledItems)
/* harmony export */ });
function buildBundleItemsMapFromOrder(lineItems, orderBundledItems) {
    const attributeItemMap = new Map();
    const bundledItemIds = new Set();
    [...orderBundledItems.physicalItems, ...orderBundledItems.digitalItems].forEach((item) => {
        if (item.addedByAttributeId) {
            attributeItemMap.set(item.addedByAttributeId, item);
        }
        bundledItemIds.add(String(item.id));
    });
    const bundleItemsMap = new Map();
    [...lineItems.physicalItems, ...lineItems.digitalItems].forEach((item) => {
        var _a;
        if (item.options && item.options.length === 0) {
            return [];
        }
        const children = ((_a = item.options) !== null && _a !== void 0 ? _a : []).flatMap((option) => {
            if (!option.attributeId) {
                return [];
            }
            const bundledItem = attributeItemMap.get(option.attributeId);
            return bundledItem ? [bundledItem] : [];
        });
        if (children.length > 0) {
            bundleItemsMap.set(String(item.id), children);
        }
    });
    return {
        nonBundledItems: Object.assign(Object.assign({}, lineItems), { physicalItems: lineItems.physicalItems.filter((item) => !bundledItemIds.has(String(item.id))), digitalItems: lineItems.digitalItems.filter((item) => !bundledItemIds.has(String(item.id))) }),
        bundleItemsMap,
    };
}
function removeBundledItems(lineItems) {
    return Object.assign(Object.assign({}, lineItems), { physicalItems: lineItems.physicalItems.filter((item) => typeof item.parentId !== 'string'), digitalItems: lineItems.digitalItems.filter((item) => typeof item.parentId !== 'string') });
}
function getNonBundledItems(items, orderBundledItems) {
    return orderBundledItems
        ? buildBundleItemsMapFromOrder(items, orderBundledItems)
        : removeAndBundleItemsTogether(items);
}
function removeAndBundleItemsTogether(items) {
    const bundleItemsMap = new Map();
    const nonBundledItems = Object.assign(Object.assign({}, items), { physicalItems: items.physicalItems.filter((item) => {
            if (typeof item.parentId === 'string') {
                const key = String(item.parentId);
                const existing = bundleItemsMap.get(key);
                bundleItemsMap.set(key, existing ? [...existing, item] : [item]);
                return false;
            }
            return true;
        }), digitalItems: items.digitalItems.filter((item) => {
            if (typeof item.parentId === 'string') {
                const key = String(item.parentId);
                const existing = bundleItemsMap.get(key);
                bundleItemsMap.set(key, existing ? [...existing, item] : [item]);
                return false;
            }
            return true;
        }) });
    return {
        nonBundledItems,
        bundleItemsMap,
    };
}


/***/ },

/***/ "./packages/ui/src/icon/IconChevronDown.tsx"
/*!**************************************************!*\
  !*** ./packages/ui/src/icon/IconChevronDown.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/ui/src/icon/IconChevronUp.tsx"
/*!************************************************!*\
  !*** ./packages/ui/src/icon/IconChevronUp.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconChevronUpSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })));
const IconChevronUp = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconChevronUpSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconChevronUp));


/***/ },

/***/ "./packages/ui/src/icon/IconDownArrow.tsx"
/*!************************************************!*\
  !*** ./packages/ui/src/icon/IconDownArrow.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/ui/src/icon/IconGiftCertificate.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/icon/IconGiftCertificate.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconGiftCertificate = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGiftCertificate);


/***/ },

/***/ "./packages/ui/src/icon/IconUpArrow.tsx"
/*!**********************************************!*\
  !*** ./packages/ui/src/icon/IconUpArrow.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./packages/ui/src/responsive/isSmallScreen.ts"
/*!*****************************************************!*\
  !*** ./packages/ui/src/responsive/isSmallScreen.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSmallScreen: () => (/* binding */ isSmallScreen)
/* harmony export */ });
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ "./packages/ui/src/responsive/breakpoints.ts");

let query;
function isSmallScreen() {
    query = window.matchMedia(`(max-width: ${_breakpoints__WEBPACK_IMPORTED_MODULE_0__.SMALL_SCREEN_MAX_WIDTH}px)`);
    return query.matches;
}


/***/ },

/***/ "./packages/ui/src/switch/Switch.tsx"
/*!*******************************************!*\
  !*** ./packages/ui/src/switch/Switch.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Switch = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ checked, onChange, label, id, name, testId }) => {
    const autoId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
    const inputId = id !== null && id !== void 0 ? id : autoId;
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.checked, event);
    }, [onChange]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "switch", "data-test": testId, htmlFor: inputId },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "switch__label" }, label),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { checked: checked, className: "switch__input", id: inputId, name: name, onChange: handleChange, role: "switch", type: "checkbox" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { "aria-hidden": "true", className: "switch__track" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "switch__thumb" }))));
});


/***/ }

}]);
//# sourceMappingURL=packages_core_src_app_coupon_OrderSummarySubtotals_tsx-packages_core_src_app_order_OrderSumma-b181f2.js.map