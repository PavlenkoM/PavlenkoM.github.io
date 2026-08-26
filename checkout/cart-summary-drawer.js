"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cart-summary-drawer"],{

/***/ "./packages/core/src/app/cart/CartHeaderLink.tsx"
/*!*******************************************************!*\
  !*** ./packages/core/src/app/cart/CartHeaderLink.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartHeaderLink: () => (/* binding */ CartHeaderLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/utility */ "./packages/utility/src/hideEditCartLink.ts");
/* harmony import */ var _EditLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditLink */ "./packages/core/src/app/cart/EditLink.tsx");




const CartHeaderLink = ({ cartUrl, className, isBuyNowCart, isMultiShippingMode, label, }) => {
    const { userJourney: { disableEditCart }, orderConfirmation: { invoiceRedirect }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCapabilities)();
    if (invoiceRedirect) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EditLink__WEBPACK_IMPORTED_MODULE_3__["default"], { className: className, isInvoiceRedirectEnabled: true });
    }
    if ((0,_bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_2__["default"])(isBuyNowCart, disableEditCart)) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EditLink__WEBPACK_IMPORTED_MODULE_3__["default"], { className: className, isMultiShippingMode: isMultiShippingMode, label: label, url: cartUrl }));
};


/***/ },

/***/ "./packages/core/src/app/cart/CartSummaryDrawer.tsx"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/cart/CartSummaryDrawer.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _order_OrderSummaryDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order/OrderSummaryDrawer */ "./packages/core/src/app/order/OrderSummaryDrawer.tsx");
/* harmony import */ var _CartHeaderLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartHeaderLink */ "./packages/core/src/app/cart/CartHeaderLink.tsx");
/* harmony import */ var _mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapToCartSummaryProps */ "./packages/core/src/app/cart/mapToCartSummaryProps.ts");
/* harmony import */ var _withRedeemable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withRedeemable */ "./packages/core/src/app/cart/withRedeemable.tsx");







const CartSummaryDrawer = (_a) => {
    var { cartUrl, isMultiShippingMode, isBuyNowCart } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["cartUrl", "isMultiShippingMode", "isBuyNowCart"]);
    return (0,_withRedeemable__WEBPACK_IMPORTED_MODULE_6__["default"])(_order_OrderSummaryDrawer__WEBPACK_IMPORTED_MODULE_3__["default"])(Object.assign(Object.assign({}, props), { isBuyNowCart,
        cartUrl, headerLink: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CartHeaderLink__WEBPACK_IMPORTED_MODULE_4__.CartHeaderLink, { cartUrl: cartUrl, className: "modal-header-link cart-modal-link", isBuyNowCart: isBuyNowCart, isMultiShippingMode: isMultiShippingMode })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_2__["default"])(_mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_5__["default"])((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CartSummaryDrawer)));


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





const EditLink = ({ className, url = '', isMultiShippingMode = false, isInvoiceRedirectEnabled = false, label, }) => {
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const gotoCartPage = () => {
        window.location.assign(url);
    };
    if (isInvoiceRedirectEnabled) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className || 'cart-header-link', 'body-cta'), "data-test": "cart-edit-link", href: "/account.php?action=order_status/#/invoice", id: "cart-edit-link", target: "_top" }, label || react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "cart.back_to_invoices" })));
    }
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

function mapToCartSummaryProps(context) {
    const { checkoutState: { data: { getConfig, getCustomer, getCheckout }, }, } = context;
    const checkout = getCheckout();
    const config = getConfig();
    const customer = getCustomer();
    if (!checkout || !config || !customer) {
        return null;
    }
    const { isStoreCreditApplied, grandTotal } = checkout;
    const { storeCredit } = customer;
    return {
        isBuyNowCart: (0,_bigcommerce_checkout_utility__WEBPACK_IMPORTED_MODULE_0__["default"])(checkout.cart),
        checkout,
        shopperCurrency: config.shopperCurrency,
        cartUrl: config.links.cartLink,
        storeCurrency: config.currency,
        storeCreditAmount: isStoreCreditApplied ? Math.min(grandTotal, storeCredit) : undefined,
    };
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
function mapToOrderSummarySubtotalsProps({ cart: { isTaxIncluded }, handlingCostTotal, giftWrappingCostTotal, taxes, fees, }) {
    return {
        giftWrappingAmount: giftWrappingCostTotal,
        handlingAmount: handlingCostTotal,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapToOrderSummarySubtotalsProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapToOrderSummarySubtotalsProps */ "./packages/core/src/app/cart/mapToOrderSummarySubtotalsProps.ts");


function withRedeemable(OriginalComponent) {
    return (props) => {
        const { checkout, storeCurrency, shopperCurrency, headerLink, showHeader, storeCreditAmount, } = props;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OriginalComponent, Object.assign({}, (0,_mapToOrderSummarySubtotalsProps__WEBPACK_IMPORTED_MODULE_1__["default"])(checkout), { headerLink: headerLink, lineItems: checkout.cart.lineItems, shopperCurrency: shopperCurrency, showHeader: showHeader, storeCreditAmount: storeCreditAmount, storeCurrency: storeCurrency, total: checkout.outstandingBalance })));
    };
}


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
//# sourceMappingURL=cart-summary-drawer.js.map