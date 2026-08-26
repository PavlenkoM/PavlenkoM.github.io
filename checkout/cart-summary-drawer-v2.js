"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cart-summary-drawer-v2"],{

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

/***/ "./packages/core/src/app/cart/CartSummaryDrawerV2.tsx"
/*!************************************************************!*\
  !*** ./packages/core/src/app/cart/CartSummaryDrawerV2.tsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconChevronUp.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconChevronDown.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _order_getItemsCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../order/getItemsCount */ "./packages/core/src/app/order/getItemsCount.ts");
/* harmony import */ var _order_getLineItemsCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../order/getLineItemsCount */ "./packages/core/src/app/order/getLineItemsCount.ts");
/* harmony import */ var _order_OrderSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../order/OrderSummary */ "./packages/core/src/app/order/OrderSummary.tsx");
/* harmony import */ var _order_removeBundledItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../order/removeBundledItems */ "./packages/core/src/app/order/removeBundledItems.ts");
/* harmony import */ var _CartHeaderLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CartHeaderLink */ "./packages/core/src/app/cart/CartHeaderLink.tsx");
/* harmony import */ var _CartSummaryItemImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CartSummaryItemImage */ "./packages/core/src/app/cart/CartSummaryItemImage.tsx");
/* harmony import */ var _mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mapToCartSummaryProps */ "./packages/core/src/app/cart/mapToCartSummaryProps.ts");
/* harmony import */ var _withRedeemable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./withRedeemable */ "./packages/core/src/app/cart/withRedeemable.tsx");















// Must match $animation-collapse-transitionSpeed in scss settings
const SHEET_TRANSITION_DURATION = 600;
const CartSummaryDrawerV2 = ({ isMultiShippingMode, }) => {
    const [rootElement, setRootElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    const checkoutContext = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
    const props = (0,_mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_15__["default"])(checkoutContext);
    if (!props) {
        return null;
    }
    const { cartUrl, isBuyNowCart, checkout, shopperCurrency } = props;
    const nonBundledLineItems = (0,_order_removeBundledItems__WEBPACK_IMPORTED_MODULE_12__.removeBundledItems)(checkout.cart.lineItems);
    const cartHeading = language.translate('cart.cart_heading');
    const toggleSheet = () => {
        setIsExpanded((currentState) => !currentState);
    };
    const closeSheet = () => {
        setIsExpanded(false);
    };
    const handleBarKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSheet();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-summary-drawer enhancedThemeV1", ref: setRootElement },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-controls": "cart-summary-sheet", "aria-expanded": isExpanded, className: "cart-summary-collapsed-bar optimizedCheckout-orderSummary", "data-test": "cart-summary-collapsed-bar", onClick: toggleSheet, onKeyDown: handleBarKeyDown, role: "button", tabIndex: 0 },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("figure", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-summary-figure', {
                    'cart-summary-figure--stack': (0,_order_getLineItemsCount__WEBPACK_IMPORTED_MODULE_10__["default"])(nonBundledLineItems) > 1,
                }), "data-test": "cart-summary-figure" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-summary-image-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CartSummaryItemImage__WEBPACK_IMPORTED_MODULE_14__.CartSummaryItemImage, { lineItems: nonBundledLineItems }))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-summary-bar-body" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "body-regular", "data-test": "cart-item-count" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { data: { count: (0,_order_getItemsCount__WEBPACK_IMPORTED_MODULE_9__["default"])(nonBundledLineItems) }, id: "cart.item_count_text" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "sub-header", "data-test": "cart-outstanding-balance" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: checkout.outstandingBalance }),
                    " (",
                    shopperCurrency.code,
                    ")")),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cart-summary-bar-toggle-label body-regular optimizedCheckout-orderSummary-toggle" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"], { id: isExpanded ? 'cart.hide_details_action' : 'cart.show_details_action' }),
                isExpanded ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], null) : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], null))),
        rootElement && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), { ariaHideApp: false, bodyOpenClassName: "has-activeCartSummarySheet", className: {
                base: 'cart-summary-sheet optimizedCheckout-orderSummary',
                afterOpen: 'cart-summary-sheet--afterOpen',
                beforeClose: 'cart-summary-sheet--beforeClose',
            }, closeTimeoutMS: SHEET_TRANSITION_DURATION, contentElement: (contentProps, children) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({}, contentProps, { "data-test": "cart-summary-sheet" }), children)), contentLabel: cartHeading, id: "cart-summary-sheet", isOpen: isExpanded, onRequestClose: closeSheet, overlayClassName: {
                base: 'cart-summary-backdrop',
                afterOpen: 'cart-summary-backdrop--afterOpen',
                beforeClose: 'cart-summary-backdrop--beforeClose',
            }, overlayElement: (overlayProps, contentElement) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({}, overlayProps, { "data-test": "cart-summary-backdrop" }), contentElement)), parentSelector: () => rootElement },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-summary-sheet-handle" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cart-summary-sheet-content" }, (0,_withRedeemable__WEBPACK_IMPORTED_MODULE_16__["default"])(_order_OrderSummary__WEBPACK_IMPORTED_MODULE_11__["default"])(Object.assign(Object.assign({}, props), { headerLink: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CartHeaderLink__WEBPACK_IMPORTED_MODULE_13__.CartHeaderLink, { cartUrl: cartUrl, isBuyNowCart: isBuyNowCart, isMultiShippingMode: isMultiShippingMode })) })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartSummaryDrawerV2);


/***/ },

/***/ "./packages/core/src/app/cart/CartSummaryItemImage.tsx"
/*!*************************************************************!*\
  !*** ./packages/core/src/app/cart/CartSummaryItemImage.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartSummaryItemImage: () => (/* binding */ CartSummaryItemImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconGiftCertificate.tsx");


const CartSummaryItemImage = ({ lineItems, }) => {
    const productWithImage = [...lineItems.physicalItems, ...lineItems.digitalItems].find((item) => item.imageUrl);
    if (productWithImage) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: productWithImage.name, "data-test": "cart-item-image", src: productWithImage.imageUrl }));
    }
    if (lineItems.giftCertificates.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__["default"], null);
    }
    return null;
};


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


/***/ },

/***/ "./packages/core/src/app/order/getLineItemsCount.ts"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/order/getLineItemsCount.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLineItemsCount)
/* harmony export */ });
function getLineItemsCount({ physicalItems, digitalItems, giftCertificates, customItems, }) {
    return (physicalItems.length +
        digitalItems.length +
        giftCertificates.length +
        (customItems || []).length);
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
//# sourceMappingURL=cart-summary-drawer-v2.js.map