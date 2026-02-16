"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cart-summary-drawer-v2"],{

/***/ "./packages/core/src/app/cart/CartSummaryDrawerV2.tsx":
/*!************************************************************!*\
  !*** ./packages/core/src/app/cart/CartSummaryDrawerV2.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconChevronUp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconChevronDown.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconArrowLeft.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _order_OrderSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order/OrderSummary */ "./packages/core/src/app/order/OrderSummary.tsx");
/* harmony import */ var _EditLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditLink */ "./packages/core/src/app/cart/EditLink.tsx");
/* harmony import */ var _mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mapToCartSummaryProps */ "./packages/core/src/app/cart/mapToCartSummaryProps.ts");
/* harmony import */ var _withRedeemable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withRedeemable */ "./packages/core/src/app/cart/withRedeemable.tsx");









const CartSummaryDrawerV2 = ({ isMultiShippingMode }) => {
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const checkoutContext = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCheckout)();
    const props = (0,_mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_9__["default"])(checkoutContext);
    if (!props) {
        return null;
    }
    const { cartUrl, isBuyNowCart, checkout } = props;
    const headerLink = isBuyNowCart ? null : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EditLink__WEBPACK_IMPORTED_MODULE_8__["default"], { isMultiShippingMode: isMultiShippingMode, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.go_to_cart_action" }), url: cartUrl }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cart-summary-drawer" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'cart-summary-header' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null),
            headerLink),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { "aria-expanded": isExpanded, className: "cart-summary-toggle", onClick: () => setIsExpanded(!isExpanded) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: 'body-regular' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: isExpanded ? 'cart.hide_order_summary_action' : 'cart.show_order_summary_action' }),
                isExpanded ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "sub-header" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: checkout.outstandingBalance }))),
        isExpanded && ((0,_withRedeemable__WEBPACK_IMPORTED_MODULE_10__["default"])(_order_OrderSummary__WEBPACK_IMPORTED_MODULE_7__["default"])(Object.assign(Object.assign({}, props), { headerLink: null, showHeader: false })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartSummaryDrawerV2);


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummary.tsx":
/*!******************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummary.tsx ***!
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
/* harmony import */ var _bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-extension */ "./packages/checkout-extension/src/Extension.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../coupon */ "./packages/core/src/app/coupon/NewOrderSummarySubtotals.tsx");
/* harmony import */ var _OrderSummaryHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OrderSummaryHeader */ "./packages/core/src/app/order/OrderSummaryHeader.tsx");
/* harmony import */ var _OrderSummaryItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderSummaryItems */ "./packages/core/src/app/order/OrderSummaryItems.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");
/* harmony import */ var _OrderSummarySection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OrderSummarySection */ "./packages/core/src/app/order/OrderSummarySection.tsx");
/* harmony import */ var _OrderSummarySubtotals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OrderSummarySubtotals */ "./packages/core/src/app/order/OrderSummarySubtotals.tsx");
/* harmony import */ var _OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OrderSummaryTotal */ "./packages/core/src/app/order/OrderSummaryTotal.tsx");














const OrderSummary = (_a) => {
    var _b;
    var { additionalLineItems, headerLink, isTaxIncluded, lineItems, shopperCurrency, storeCurrency, taxes, total, showHeader = true } = _a, orderSummarySubtotalsProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalLineItems", "headerLink", "isTaxIncluded", "lineItems", "shopperCurrency", "storeCurrency", "taxes", "total", "showHeader"]);
    const displayInclusiveTax = isTaxIncluded && taxes && taxes.length > 0;
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)();
    const { currency } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_6__.useLocale)();
    // TODO: When removing the experiment, rename `NewOrderSummarySubtotals` to `OrderSummarySubtotals`.
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useCheckout)();
    const { checkoutSettings } = (_b = checkoutState.data.getConfig()) !== null && _b !== void 0 ? _b : {};
    const checkout = checkoutState.data.getCheckout();
    const order = checkoutState.data.getOrder();
    const isMultiCouponEnabled = (0,_common_utility__WEBPACK_IMPORTED_MODULE_9__["default"])(checkoutSettings, 'CHECKOUT-9674.multi_coupon_cart_checkout', false);
    const isMultiCouponEnabledForCheckout = isMultiCouponEnabled && !!checkout;
    const isMultiCouponEnabledForOrder = isMultiCouponEnabled && !checkout && !!order;
    let totalDiscount;
    if (isMultiCouponEnabledForCheckout) {
        totalDiscount = checkout.totalDiscount;
    }
    if (isMultiCouponEnabledForOrder) {
        totalDiscount = order.totalDiscount;
    }
    if (!currency) {
        return null;
    }
    const isTotalDiscountVisible = Boolean(totalDiscount && totalDiscount > 0);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("article", { className: "cart optimizedCheckout-orderSummary", "data-test": "cart" },
        showHeader && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryHeader__WEBPACK_IMPORTED_MODULE_11__["default"], null, headerLink),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_14__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryItems__WEBPACK_IMPORTED_MODULE_12__["default"], { displayLineItemsCount: true, items: lineItems, themeV2: themeV2 })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_3__.Extension, { region: "summary.lastItem.after" /* ExtensionRegion.SummaryLastItemAfter */ }),
        isMultiCouponEnabledForCheckout || isMultiCouponEnabledForOrder
            ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_coupon__WEBPACK_IMPORTED_MODULE_10__["default"], { fees: orderSummarySubtotalsProps.fees, giftWrappingAmount: orderSummarySubtotalsProps.giftWrappingAmount, handlingAmount: orderSummarySubtotalsProps.handlingAmount, isOrderConfirmation: isMultiCouponEnabledForOrder, isTaxIncluded: isTaxIncluded, storeCreditAmount: orderSummarySubtotalsProps.storeCreditAmount, taxes: taxes })
            : react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySubtotals__WEBPACK_IMPORTED_MODULE_15__["default"], Object.assign({ isTaxIncluded: isTaxIncluded, taxes: taxes }, orderSummarySubtotalsProps)),
                additionalLineItems),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_14__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_16__["default"], { orderAmount: total, shopperCurrencyCode: shopperCurrency.code, storeCurrencyCode: storeCurrency.code }),
            (isTotalDiscountVisible && totalDiscount) &&
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "total-savings" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"], { data: { totalDiscount: currency.toCustomerCurrency(totalDiscount) }, id: "redeemable.total_savings_text" }))),
        displayInclusiveTax && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_14__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary', { 'body-regular': themeV2 }), "data-test": "tax-text" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "tax.inclusive_label" })),
            (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_13__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummary);


/***/ }),

/***/ "./packages/core/src/app/order/OrderSummaryHeader.tsx":
/*!************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryHeader.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");




const OrderSummaryHeader = ({ children }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useThemeContext)();
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("header", { className: "cart-header" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-title', 'optimizedCheckout-headingSecondary', { 'sub-header': themeV2 }) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "cart.cart_heading" })),
        children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryHeader);


/***/ }),

/***/ "./packages/ui/src/icon/IconArrowLeft.tsx":
/*!************************************************!*\
  !*** ./packages/ui/src/icon/IconArrowLeft.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconArrowLeft = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L7.41421 12L12.7071 17.2929C13.0976 17.6834 13.0976 18.3166 12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M20 12C20 12.5523 19.5523 13 19 13L6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L19 11C19.5523 11 20 11.4477 20 12Z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconArrowLeft));


/***/ }),

/***/ "./packages/ui/src/icon/IconChevronDown.tsx":
/*!**************************************************!*\
  !*** ./packages/ui/src/icon/IconChevronDown.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconChevronDown = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconChevronDown));


/***/ }),

/***/ "./packages/ui/src/icon/IconChevronUp.tsx":
/*!************************************************!*\
  !*** ./packages/ui/src/icon/IconChevronUp.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withIconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withIconContainer */ "./packages/ui/src/icon/withIconContainer.tsx");


const IconChevronUp = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withIconContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(IconChevronUp));


/***/ })

}]);
//# sourceMappingURL=cart-summary-drawer-v2.js.map