"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cart-summary"],{

/***/ "./packages/core/src/app/cart/CartSummary.tsx"
/*!****************************************************!*\
  !*** ./packages/core/src/app/cart/CartSummary.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/hideEditCartLink.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _order_OrderSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/OrderSummary */ "./packages/core/src/app/order/OrderSummary.tsx");
/* harmony import */ var _EditLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditLink */ "./packages/core/src/app/cart/EditLink.tsx");
/* harmony import */ var _mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapToCartSummaryProps */ "./packages/core/src/app/cart/mapToCartSummaryProps.ts");
/* harmony import */ var _withRedeemable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withRedeemable */ "./packages/core/src/app/cart/withRedeemable.tsx");









const CartSummary = (_a) => {
    var { cartUrl, isMultiShippingMode, isBuyNowCart } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["cartUrl", "isMultiShippingMode", "isBuyNowCart"]);
    const { userJourney: { disableEditCart }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCapabilities)();
    const headerLink = (0,_bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_3__["default"])(isBuyNowCart, disableEditCart) ? null : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_EditLink__WEBPACK_IMPORTED_MODULE_6__["default"], { isMultiShippingMode: isMultiShippingMode, url: cartUrl }));
    return (0,_withRedeemable__WEBPACK_IMPORTED_MODULE_8__["default"])(_order_OrderSummary__WEBPACK_IMPORTED_MODULE_5__["default"])(Object.assign(Object.assign({}, props), { cartUrl,
        isBuyNowCart,
        headerLink }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_4__["default"])(_mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_7__["default"])(CartSummary));


/***/ },

/***/ "./packages/core/src/app/cart/EditLink.tsx"
/*!*************************************************!*\
  !*** ./packages/core/src/app/cart/EditLink.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ConfirmationModal.tsx");





const EditLink = ({ className, url, isMultiShippingMode, label, }) => {
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const gotoCartPage = () => {
        window.location.assign(url);
    };
    if (isMultiShippingMode) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { action: gotoCartPage, headerId: "cart.edit_cart_action", isModalOpen: isModalOpen, messageId: "cart.edit_multi_shipping_cart_message", onRequestClose: () => setIsModalOpen(false) }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className || 'cart-header-link', 'body-cta'), "data-test": "cart-edit-link", href: "#", id: "cart-edit-link", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(() => setIsModalOpen(true)) }, label || react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "cart.edit_cart_action" }))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className || 'cart-header-link', 'body-cta'), "data-test": "cart-edit-link", href: url, id: "cart-edit-link", target: "_top" }, label || react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "cart.edit_cart_action" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(EditLink));


/***/ },

/***/ "./packages/core/src/app/cart/mapToCartSummaryProps.ts"
/*!*************************************************************!*\
  !*** ./packages/core/src/app/cart/mapToCartSummaryProps.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapToCartSummaryProps)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/isBuyNowCart.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _mapToRedeemableProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapToRedeemableProps */ "./packages/core/src/app/cart/mapToRedeemableProps.ts");



function mapToCartSummaryProps(context) {
    const { checkoutState: { data: { getConfig, getCustomer, getCheckout }, }, } = context;
    const checkout = getCheckout();
    const config = getConfig();
    const customer = getCustomer();
    const redeemableProps = (0,_mapToRedeemableProps__WEBPACK_IMPORTED_MODULE_2__["default"])(context);
    if (!checkout || !config || !redeemableProps || !customer) {
        return null;
    }
    const { isStoreCreditApplied, grandTotal } = checkout;
    const { storeCredit } = customer;
    const isShippingDiscountDisplayEnabled = (0,_common_utility__WEBPACK_IMPORTED_MODULE_1__["default"])(config.checkoutSettings, 'PROJECT-6643.enable_shipping_discounts_in_orders');
    return Object.assign({ isBuyNowCart: (0,_bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_0__["default"])(checkout.cart), isShippingDiscountDisplayEnabled,
        checkout, shopperCurrency: config.shopperCurrency, cartUrl: config.links.cartLink, storeCurrency: config.currency, storeCreditAmount: isStoreCreditApplied ? Math.min(grandTotal, storeCredit) : undefined }, redeemableProps);
}


/***/ },

/***/ "./packages/core/src/app/cart/mapToOrderSummarySubtotalsProps.ts"
/*!***********************************************************************!*\
  !*** ./packages/core/src/app/cart/mapToOrderSummarySubtotalsProps.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapToOrderSummarySubtotalsProps)
/* harmony export */ });
/* harmony import */ var _shipping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shipping */ "./packages/core/src/app/shipping/hasSelectedShippingOptions.ts");

function mapToOrderSummarySubtotalsProps({ subtotal, cart: { discountAmount, isTaxIncluded }, giftCertificates, consignments, handlingCostTotal, shippingCostBeforeDiscount, giftWrappingCostTotal, coupons, taxes, fees, comparisonShippingCost, }, isShippingDiscountDisplayEnabled) {
    const allConsignmentsHaveSelectedShippingOption = (0,_shipping__WEBPACK_IMPORTED_MODULE_0__["default"])(consignments);
    const shippingAmount = allConsignmentsHaveSelectedShippingOption
        ? isShippingDiscountDisplayEnabled
            ? comparisonShippingCost
            : shippingCostBeforeDiscount
        : undefined;
    return {
        subtotalAmount: subtotal,
        discountAmount,
        giftCertificates,
        giftWrappingAmount: giftWrappingCostTotal,
        shippingAmount,
        shippingAmountBeforeDiscount: isShippingDiscountDisplayEnabled && allConsignmentsHaveSelectedShippingOption
            ? shippingCostBeforeDiscount
            : undefined,
        handlingAmount: handlingCostTotal,
        coupons,
        taxes,
        fees,
        isTaxIncluded,
    };
}


/***/ },

/***/ "./packages/core/src/app/cart/withRedeemable.tsx"
/*!*******************************************************!*\
  !*** ./packages/core/src/app/cart/withRedeemable.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withRedeemable)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapToOrderSummarySubtotalsProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapToOrderSummarySubtotalsProps */ "./packages/core/src/app/cart/mapToOrderSummarySubtotalsProps.ts");
/* harmony import */ var _Redeemable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Redeemable */ "./packages/core/src/app/cart/Redeemable.tsx");




function withRedeemable(OriginalComponent) {
    return (props) => {
        const { checkout, storeCurrency, shopperCurrency, headerLink, showHeader, onRemovedCoupon, onRemovedGiftCertificate, storeCreditAmount, isShippingDiscountDisplayEnabled } = props, redeemableProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(props, ["checkout", "storeCurrency", "shopperCurrency", "headerLink", "showHeader", "onRemovedCoupon", "onRemovedGiftCertificate", "storeCreditAmount", "isShippingDiscountDisplayEnabled"]);
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(OriginalComponent, Object.assign({}, (0,_mapToOrderSummarySubtotalsProps__WEBPACK_IMPORTED_MODULE_2__["default"])(checkout, isShippingDiscountDisplayEnabled), { additionalLineItems: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Redeemable__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, redeemableProps, { onRemovedCoupon,
                onRemovedGiftCertificate })), headerLink: headerLink, lineItems: checkout.cart.lineItems, onRemovedCoupon: onRemovedCoupon, onRemovedGiftCertificate: onRemovedGiftCertificate, shopperCurrency: shopperCurrency, showHeader: showHeader, storeCreditAmount: storeCreditAmount, storeCurrency: storeCurrency, total: checkout.outstandingBalance })));
    };
}


/***/ },

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


/***/ },

/***/ "./packages/ui/src/modal/ConfirmationModal.tsx"
/*!*****************************************************!*\
  !*** ./packages/ui/src/modal/ConfirmationModal.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalHeader */ "./packages/ui/src/modal/ModalHeader.tsx");






const ConfirmationModal = ({ headerId, messageId, isModalOpen, action, actionButtonLabel, onRequestClose = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, shouldShowCloseButton = true, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalModalClassName: "modal--confirm", footer: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: action, size: _button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.Small, variant: _button__WEBPACK_IMPORTED_MODULE_3__.ButtonVariant.Primary }, actionButtonLabel !== null && actionButtonLabel !== void 0 ? actionButtonLabel : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "common.confirm_action" })), header: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ModalHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { "aria-live": "assertive", role: "alert" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: headerId }))), isOpen: isModalOpen, onRequestClose: onRequestClose, shouldShowCloseButton: shouldShowCloseButton },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { "aria-live": "assertive", role: "alert" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: messageId }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);


/***/ },

/***/ "./packages/utility/src/hideEditCartLink.ts"
/*!**************************************************!*\
  !*** ./packages/utility/src/hideEditCartLink.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hideEditCartLink)
/* harmony export */ });
function hideEditCartLink(isBuyNowCart, disableEditCart) {
    return isBuyNowCart || disableEditCart;
}


/***/ }

}]);
//# sourceMappingURL=cart-summary.js.map