"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["order-summary"],{

/***/ "./packages/core/src/app/order/OrderSummary.tsx"
/*!******************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummary.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-extension */ "./packages/checkout-extension/src/Extension.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coupon */ "./packages/core/src/app/coupon/NewOrderSummarySubtotals.tsx");
/* harmony import */ var _OrderSummaryHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OrderSummaryHeader */ "./packages/core/src/app/order/OrderSummaryHeader.tsx");
/* harmony import */ var _OrderSummaryItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OrderSummaryItems */ "./packages/core/src/app/order/OrderSummaryItems.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");
/* harmony import */ var _OrderSummarySection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderSummarySection */ "./packages/core/src/app/order/OrderSummarySection.tsx");
/* harmony import */ var _OrderSummarySubtotals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OrderSummarySubtotals */ "./packages/core/src/app/order/OrderSummarySubtotals.tsx");
/* harmony import */ var _OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OrderSummaryTotal */ "./packages/core/src/app/order/OrderSummaryTotal.tsx");













const OrderSummary = (_a) => {
    var _b;
    var { additionalLineItems, headerLink, isTaxIncluded, lineItems, shopperCurrency, storeCurrency, taxes, total, showHeader = true } = _a, orderSummarySubtotalsProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalLineItems", "headerLink", "isTaxIncluded", "lineItems", "shopperCurrency", "storeCurrency", "taxes", "total", "showHeader"]);
    const displayInclusiveTax = isTaxIncluded && taxes && taxes.length > 0;
    const { currency } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    // TODO: When removing the experiment, rename `NewOrderSummarySubtotals` to `OrderSummarySubtotals`.
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
    const { checkoutSettings } = (_b = checkoutState.data.getConfig()) !== null && _b !== void 0 ? _b : {};
    const checkout = checkoutState.data.getCheckout();
    const order = checkoutState.data.getOrder();
    const isMultiCouponEnabled = (0,_common_utility__WEBPACK_IMPORTED_MODULE_7__["default"])(checkoutSettings, 'CHECKOUT-9674.multi_coupon_cart_checkout', false);
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
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("article", { className: "cart optimizedCheckout-orderSummary", "data-test": "cart" },
        showHeader && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null, headerLink),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryItems__WEBPACK_IMPORTED_MODULE_10__["default"], { displayLineItemsCount: true, items: lineItems })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_2__.Extension, { region: "summary.lastItem.after" /* ExtensionRegion.SummaryLastItemAfter */ }),
        isMultiCouponEnabledForCheckout || isMultiCouponEnabledForOrder ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coupon__WEBPACK_IMPORTED_MODULE_8__["default"], { fees: orderSummarySubtotalsProps.fees, giftWrappingAmount: orderSummarySubtotalsProps.giftWrappingAmount, handlingAmount: orderSummarySubtotalsProps.handlingAmount, isOrderConfirmation: isMultiCouponEnabledForOrder, isTaxIncluded: isTaxIncluded, storeCreditAmount: orderSummarySubtotalsProps.storeCreditAmount, taxes: taxes })) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySubtotals__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ isTaxIncluded: isTaxIncluded, taxes: taxes }, orderSummarySubtotalsProps)),
            additionalLineItems)),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_14__["default"], { orderAmount: total, shopperCurrencyCode: shopperCurrency.code, storeCurrencyCode: storeCurrency.code }),
            isTotalDiscountVisible && totalDiscount && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "total-savings" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: { totalDiscount: currency.toCustomerCurrency(totalDiscount) }, id: "redeemable.total_savings_text" })))),
        displayInclusiveTax && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5", { className: "cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary body-regular", "data-test": "tax-text" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "tax.inclusive_label" })),
            (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_11__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummary);


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryHeader.tsx"
/*!************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryHeader.tsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");


const OrderSummaryHeader = ({ children }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", { className: "cart-header" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "cart-title optimizedCheckout-headingSecondary sub-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.cart_heading" })),
        children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryHeader);


/***/ }

}]);
//# sourceMappingURL=order-summary.js.map