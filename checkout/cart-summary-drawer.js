"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["cart-summary-drawer"],{

/***/ "./packages/core/src/app/cart/CartSummaryDrawer.tsx":
/*!**********************************************************!*\
  !*** ./packages/core/src/app/cart/CartSummaryDrawer.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _order_OrderSummaryDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order/OrderSummaryDrawer */ "./packages/core/src/app/order/OrderSummaryDrawer.tsx");
/* harmony import */ var _EditLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditLink */ "./packages/core/src/app/cart/EditLink.tsx");
/* harmony import */ var _mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapToCartSummaryProps */ "./packages/core/src/app/cart/mapToCartSummaryProps.ts");
/* harmony import */ var _withRedeemable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withRedeemable */ "./packages/core/src/app/cart/withRedeemable.tsx");







const CartSummaryDrawer = (_a) => {
    var { cartUrl, isMultiShippingMode, isBuyNowCart } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["cartUrl", "isMultiShippingMode", "isBuyNowCart"]);
    return (0,_withRedeemable__WEBPACK_IMPORTED_MODULE_6__["default"])(_order_OrderSummaryDrawer__WEBPACK_IMPORTED_MODULE_3__["default"])(Object.assign(Object.assign({}, props), { isBuyNowCart,
        cartUrl, headerLink: isBuyNowCart ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_EditLink__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "modal-header-link cart-modal-link", isMultiShippingMode: isMultiShippingMode, url: cartUrl })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_2__["default"])(_mapToCartSummaryProps__WEBPACK_IMPORTED_MODULE_5__["default"])((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CartSummaryDrawer)));


/***/ })

}]);
//# sourceMappingURL=cart-summary-drawer.js.map