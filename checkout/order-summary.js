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
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coupon */ "./packages/core/src/app/coupon/OrderSummarySubtotals.tsx");
/* harmony import */ var _getItemsCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getItemsCount */ "./packages/core/src/app/order/getItemsCount.ts");
/* harmony import */ var _OrderSummaryHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OrderSummaryHeader */ "./packages/core/src/app/order/OrderSummaryHeader.tsx");
/* harmony import */ var _OrderSummaryItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OrderSummaryItems */ "./packages/core/src/app/order/OrderSummaryItems.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");
/* harmony import */ var _OrderSummarySection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OrderSummarySection */ "./packages/core/src/app/order/OrderSummarySection.tsx");
/* harmony import */ var _OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OrderSummaryTotal */ "./packages/core/src/app/order/OrderSummaryTotal.tsx");
/* harmony import */ var _removeBundledItems__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./removeBundledItems */ "./packages/core/src/app/order/removeBundledItems.ts");













const OrderSummary = (_a) => {
    var { headerLink, isTaxIncluded, lineItems, shopperCurrency, storeCurrency, taxes, total, showHeader = true } = _a, orderSummarySubtotalsProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["headerLink", "isTaxIncluded", "lineItems", "shopperCurrency", "storeCurrency", "taxes", "total", "showHeader"]);
    const displayInclusiveTax = isTaxIncluded && taxes && taxes.length > 0;
    const { currency } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
    const { enhancedThemeV1 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useThemeContext)();
    const { selectedState: { checkout, order }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useCheckout)(({ data }) => ({
        checkout: data.getCheckout(),
        order: data.getOrder(),
    }));
    const isOrderConfirmation = !checkout && !!order;
    const totalDiscount = checkout ? checkout.totalDiscount : order === null || order === void 0 ? void 0 : order.totalDiscount;
    if (!currency) {
        return null;
    }
    const isTotalDiscountVisible = Boolean(totalDiscount && totalDiscount > 0);
    // Must match the de-bundling in OrderSummaryItems so the header count equals the item list.
    const { nonBundledItems } = (0,_removeBundledItems__WEBPACK_IMPORTED_MODULE_15__.getNonBundledItems)(lineItems, order === null || order === void 0 ? void 0 : order.bundledItems);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("article", { className: "cart optimizedCheckout-orderSummary", "data-test": "cart" },
        showHeader && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryHeader__WEBPACK_IMPORTED_MODULE_10__["default"], { itemsCount: enhancedThemeV1 ? (0,_getItemsCount__WEBPACK_IMPORTED_MODULE_9__["default"])(nonBundledItems) : undefined }, headerLink)),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryItems__WEBPACK_IMPORTED_MODULE_11__["default"], { displayLineItemsCount: !enhancedThemeV1, items: lineItems })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_2__.Extension, { region: "summary.lastItem.after" /* ExtensionRegion.SummaryLastItemAfter */ }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coupon__WEBPACK_IMPORTED_MODULE_8__["default"], { fees: orderSummarySubtotalsProps.fees, giftWrappingAmount: orderSummarySubtotalsProps.giftWrappingAmount, handlingAmount: orderSummarySubtotalsProps.handlingAmount, isOrderConfirmation: isOrderConfirmation, isTaxIncluded: isTaxIncluded, storeCreditAmount: orderSummarySubtotalsProps.storeCreditAmount, taxes: taxes }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_14__["default"], { orderAmount: total, shopperCurrencyCode: shopperCurrency.code, storeCurrencyCode: storeCurrency.code }),
            isTotalDiscountVisible && totalDiscount && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "total-savings optimizedCheckout-contentSecondary" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { data: { totalDiscount: currency.toCustomerCurrency(totalDiscount) }, id: "redeemable.total_savings_text" }))),
            displayInclusiveTax && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5", { className: "cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary body-regular", "data-test": "tax-text" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"], { id: "tax.inclusive_label" })),
                (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_12__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" }))))))));
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


const OrderSummaryHeader = ({ children, itemsCount, }) => {
    const showItemsCount = itemsCount !== undefined;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", { className: "cart-header" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "cart-title optimizedCheckout-headingSecondary sub-header", "data-test": showItemsCount ? 'cart-count-total' : undefined }, showItemsCount ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { count: itemsCount }, id: "cart.item_count_text" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "cart.cart_heading" }))),
        children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryHeader);


/***/ }

}]);
//# sourceMappingURL=order-summary.js.map