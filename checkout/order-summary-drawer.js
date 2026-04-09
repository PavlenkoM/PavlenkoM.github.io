"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["order-summary-drawer"],{

/***/ "./packages/core/src/app/order/OrderModalSummarySubheader.tsx"
/*!********************************************************************!*\
  !*** ./packages/core/src/app/order/OrderModalSummarySubheader.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _getItemsCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getItemsCount */ "./packages/core/src/app/order/getItemsCount.ts");



const OrderModalSummarySubheader = ({ items, shopperCurrencyCode, storeCurrencyCode, amountWithCurrency, }) => {
    const itemsCount = (0,_getItemsCount__WEBPACK_IMPORTED_MODULE_2__["default"])(items);
    const hasDifferentCurrency = shopperCurrencyCode !== storeCurrencyCode;
    const itemsText = itemsCount === 1 ? 'cart.item' : 'cart.items';
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        itemsCount,
        " ",
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: itemsText }),
        " | ",
        amountWithCurrency,
        " ",
        hasDifferentCurrency && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
            "(",
            shopperCurrencyCode,
            ")"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(OrderModalSummarySubheader));


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryDrawer.tsx"
/*!************************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryDrawer.tsx ***!
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
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon */ "./packages/core/src/app/ui/icon/IconGiftCertificate.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/ModalTrigger.tsx");
/* harmony import */ var _getItemsCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getItemsCount */ "./packages/core/src/app/order/getItemsCount.ts");
/* harmony import */ var _getLineItemsCount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getLineItemsCount */ "./packages/core/src/app/order/getLineItemsCount.ts");
/* harmony import */ var _OrderSummaryModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OrderSummaryModal */ "./packages/core/src/app/order/OrderSummaryModal.tsx");
/* harmony import */ var _removeBundledItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./removeBundledItems */ "./packages/core/src/app/order/removeBundledItems.ts");










const OrderSummaryDrawer = ({ additionalLineItems, coupons, discountAmount, giftCertificates, handlingAmount, headerLink, isTaxIncluded, lineItems, onRemovedCoupon, onRemovedGiftCertificate, shippingAmount, shippingAmountBeforeDiscount, shopperCurrency, storeCreditAmount, giftWrappingAmount, storeCurrency, subtotalAmount, taxes, total, fees, }) => {
    const nonBundledLineItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_removeBundledItems__WEBPACK_IMPORTED_MODULE_9__["default"])(lineItems), [lineItems]);
    const renderModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_OrderSummaryModal__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, { additionalLineItems: additionalLineItems, coupons: coupons, discountAmount: discountAmount, fees: fees, giftCertificates: giftCertificates, giftWrappingAmount: giftWrappingAmount, handlingAmount: handlingAmount, headerLink: headerLink, isTaxIncluded: isTaxIncluded, items: nonBundledLineItems, onRemovedCoupon: onRemovedCoupon, onRemovedGiftCertificate: onRemovedGiftCertificate, shippingAmount: shippingAmount, shippingAmountBeforeDiscount: shippingAmountBeforeDiscount, shopperCurrency: shopperCurrency, storeCreditAmount: storeCreditAmount, storeCurrency: storeCurrency, subtotalAmount: subtotalAmount, taxes: taxes, total: total }))), [
        additionalLineItems,
        coupons,
        discountAmount,
        giftCertificates,
        handlingAmount,
        headerLink,
        isTaxIncluded,
        nonBundledLineItems,
        onRemovedCoupon,
        onRemovedGiftCertificate,
        giftWrappingAmount,
        shippingAmount,
        shippingAmountBeforeDiscount,
        shopperCurrency,
        storeCreditAmount,
        storeCurrency,
        subtotalAmount,
        taxes,
        total,
        fees,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_5__["default"], { modal: renderModal }, ({ onClick, onKeyPress }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cartDrawer optimizedCheckout-orderSummary", onClick: onClick, onKeyPress: onKeyPress, tabIndex: 0 },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("figure", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cartDrawer-figure', {
                'cartDrawer-figure--stack': (0,_getLineItemsCount__WEBPACK_IMPORTED_MODULE_7__["default"])(nonBundledLineItems) > 1,
            }) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cartDrawer-imageWrapper" }, getImage(nonBundledLineItems))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cartDrawer-body" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: "cartDrawer-items optimizedCheckout-headingPrimary" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { count: (0,_getItemsCount__WEBPACK_IMPORTED_MODULE_6__["default"])(nonBundledLineItems) }, id: "cart.item_count_text" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "cart.show_details_action" }))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cartDrawer-actions" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: "cartDrawer-total optimizedCheckout-headingPrimary" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_3__["default"], { amount: total })))))));
};
function getImage(lineItems) {
    const productWithImage = lineItems.physicalItems[0] || lineItems.digitalItems[0];
    if (productWithImage && productWithImage.imageUrl) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { alt: productWithImage.name, "data-test": "cart-item-image", src: productWithImage.imageUrl }));
    }
    if (lineItems.giftCertificates.length) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(OrderSummaryDrawer));


/***/ },

/***/ "./packages/core/src/app/order/OrderSummaryModal.tsx"
/*!***********************************************************!*\
  !*** ./packages/core/src/app/order/OrderSummaryModal.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/CheckoutContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconCloseWithBorder.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../coupon */ "./packages/core/src/app/coupon/NewOrderSummarySubtotals.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../currency */ "./packages/core/src/app/currency/ShopperCurrency.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/Modal.tsx");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/modal */ "./packages/core/src/app/ui/modal/ModalHeader.tsx");
/* harmony import */ var _ui_responsive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui/responsive */ "./packages/core/src/app/ui/responsive/isMobileView.ts");
/* harmony import */ var _OrderModalSummarySubheader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./OrderModalSummarySubheader */ "./packages/core/src/app/order/OrderModalSummarySubheader.tsx");
/* harmony import */ var _OrderSummaryItems__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./OrderSummaryItems */ "./packages/core/src/app/order/OrderSummaryItems.tsx");
/* harmony import */ var _OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./OrderSummaryPrice */ "./packages/core/src/app/order/OrderSummaryPrice.tsx");
/* harmony import */ var _OrderSummarySection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./OrderSummarySection */ "./packages/core/src/app/order/OrderSummarySection.tsx");
/* harmony import */ var _OrderSummarySubtotals__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./OrderSummarySubtotals */ "./packages/core/src/app/order/OrderSummarySubtotals.tsx");
/* harmony import */ var _OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./OrderSummaryTotal */ "./packages/core/src/app/order/OrderSummaryTotal.tsx");


















const OrderSummaryModal = (_a) => {
    var _b;
    var { additionalLineItems, isTaxIncluded, taxes, onRequestClose, onAfterOpen, storeCurrency, shopperCurrency, isOpen, headerLink, items, total } = _a, orderSummarySubtotalsProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["additionalLineItems", "isTaxIncluded", "taxes", "onRequestClose", "onAfterOpen", "storeCurrency", "shopperCurrency", "isOpen", "headerLink", "items", "total"]);
    const { currency } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useLocale)();
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)();
    const { checkoutSettings } = (_b = checkoutState.data.getConfig()) !== null && _b !== void 0 ? _b : {};
    const checkout = checkoutState.data.getCheckout();
    const order = checkoutState.data.getOrder();
    const isMultiCouponEnabled = (0,_common_utility__WEBPACK_IMPORTED_MODULE_11__["default"])(checkoutSettings, 'CHECKOUT-9674.multi_coupon_cart_checkout', false);
    const isMultiCouponEnabledForCheckout = isMultiCouponEnabled && !!checkout;
    const isMultiCouponEnabledForOrder = isMultiCouponEnabled && !checkout && !!order;
    if (!currency) {
        return null;
    }
    let totalDiscount;
    if (isMultiCouponEnabledForCheckout) {
        totalDiscount = checkout.totalDiscount;
    }
    if (isMultiCouponEnabledForOrder) {
        totalDiscount = order.totalDiscount;
    }
    const displayInclusiveTax = isTaxIncluded && taxes && taxes.length > 0;
    const isTotalDiscountVisible = Boolean(totalDiscount && totalDiscount > 0);
    const subHeaderText = react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderModalSummarySubheader__WEBPACK_IMPORTED_MODULE_17__["default"], { amountWithCurrency: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_currency__WEBPACK_IMPORTED_MODULE_13__["default"], { amount: total }), items: items, shopperCurrencyCode: shopperCurrency.code, storeCurrencyCode: storeCurrency.code });
    const continueButton = (0,_ui_responsive__WEBPACK_IMPORTED_MODULE_16__["default"])() && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { className: 'cart-modal-continue', "data-test": "manage-instrument-cancel-button", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(onRequestClose) },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "cart.return_to_checkout" }));
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_14__["default"], { additionalBodyClassName: "cart-modal-body optimizedCheckout-orderSummary", additionalHeaderClassName: "cart-modal-header optimizedCheckout-orderSummary with-continue-button", additionalModalClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()("optimizedCheckout-cart-modal", { "themeV2": themeV2 }), footer: continueButton, header: renderHeader({
            headerLink,
            subHeaderText,
            onRequestClose,
        }), isOpen: isOpen, onAfterOpen: onAfterOpen, onRequestClose: onRequestClose },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_20__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryItems__WEBPACK_IMPORTED_MODULE_18__["default"], { displayLineItemsCount: false, items: items })),
        isMultiCouponEnabledForCheckout || isMultiCouponEnabledForOrder
            ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_coupon__WEBPACK_IMPORTED_MODULE_12__["default"], { fees: orderSummarySubtotalsProps.fees, giftWrappingAmount: orderSummarySubtotalsProps.giftWrappingAmount, handlingAmount: orderSummarySubtotalsProps.handlingAmount, isOrderConfirmation: !!isMultiCouponEnabledForOrder, isTaxIncluded: isTaxIncluded, storeCreditAmount: orderSummarySubtotalsProps.storeCreditAmount, taxes: taxes })
            : react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_20__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySubtotals__WEBPACK_IMPORTED_MODULE_21__["default"], Object.assign({ isTaxIncluded: isTaxIncluded, taxes: taxes }, orderSummarySubtotalsProps)),
                additionalLineItems),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_20__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryTotal__WEBPACK_IMPORTED_MODULE_22__["default"], { orderAmount: total, shopperCurrencyCode: shopperCurrency.code, storeCurrencyCode: storeCurrency.code }),
            (isTotalDiscountVisible && totalDiscount) &&
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "total-savings" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"], { data: { totalDiscount: currency.toCustomerCurrency(totalDiscount) }, id: "redeemable.total_savings_text" }))),
        displayInclusiveTax && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummarySection__WEBPACK_IMPORTED_MODULE_20__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", { className: "cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary", "data-test": "tax-text" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "tax.inclusive_label" })),
            (taxes || []).map((tax, index) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_OrderSummaryPrice__WEBPACK_IMPORTED_MODULE_19__["default"], { amount: tax.amount, key: index, label: tax.name, testId: "cart-taxes" })))));
};
const renderHeader = ({ onRequestClose, headerLink, subHeaderText }) => {
    let newHeaderLink;
    if ((0,react__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(headerLink)) {
        newHeaderLink = (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(headerLink, { className: 'modal-header-link cart-modal-link test' });
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, newHeaderLink !== null && newHeaderLink !== void 0 ? newHeaderLink : headerLink,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_modal__WEBPACK_IMPORTED_MODULE_15__["default"], { additionalClassName: "cart-modal-title" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "cart.cart_heading" }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: 'cart-heading-subheader' }, subHeaderText))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { className: "cart-modal-close", href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(onRequestClose) },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "is-srOnly" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "common.close_action" })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryModal);


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

/***/ "./packages/core/src/app/ui/modal/ModalTrigger.tsx"
/*!*********************************************************!*\
  !*** ./packages/core/src/app/ui/modal/ModalTrigger.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalTrigger = ({ children, modal }) => {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const canHandleEventRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        canHandleEventRef.current = true;
        return () => {
            canHandleEventRef.current = false;
        };
    }, []);
    const handleOpen = () => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(true);
    };
    const handleClose = () => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(false);
    };
    const handleKeyOpen = (keyboardEvent) => {
        if (keyboardEvent.key === 'Enter') {
            handleOpen();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        children({
            onClick: handleOpen,
            onKeyPress: handleKeyOpen,
        }),
        modal({
            isOpen,
            onRequestClose: handleClose,
        })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);


/***/ },

/***/ "./packages/ui/src/icon/IconCloseWithBorder.tsx"
/*!******************************************************!*\
  !*** ./packages/ui/src/icon/IconCloseWithBorder.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");


const IconCloseWithBorderSvg = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { fill: "none", height: "37", viewBox: "0 0 38 37", width: "38", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M38 18.5C38 28.7173 29.7173 37 19.5 37C9.28273 37 1 28.7173 1 18.5C1 8.28273 9.28273 0 19.5 0C29.7173 0 38 8.28273 38 18.5Z", fill: "#F3F3F3" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M24.6671 24.6674L12.9998 13.0002L14.4141 11.5859L26.0813 23.2532L24.6671 24.6674Z", fill: "black", fillRule: "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { clipRule: "evenodd", d: "M25.6674 13.0004L14.0002 24.6676L12.5859 23.2534L24.2532 11.5862L25.6674 13.0004Z", fill: "black", fillRule: "evenodd" })));
const IconCloseWithBorder = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconContainer__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconCloseWithBorderSvg, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(IconCloseWithBorder));


/***/ }

}]);
//# sourceMappingURL=order-summary-drawer.js.map