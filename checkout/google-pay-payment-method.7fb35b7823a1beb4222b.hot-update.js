"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecheckout"]("google-pay-payment-method",{

/***/ "./packages/google-pay-integration/src/canVaultGooglePayInstrument.ts"
/*!****************************************************************************!*\
  !*** ./packages/google-pay-integration/src/canVaultGooglePayInstrument.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   canVaultGooglePayInstrument: () => (/* binding */ canVaultGooglePayInstrument),\n/* harmony export */   isWalletAutoVaultingEnabled: () => (/* binding */ isWalletAutoVaultingEnabled)\n/* harmony export */ });\n\nconst canVaultGooglePayInstrument = ({\n  customer,\n  method\n}) => Boolean(method.config.vaultingWalletEnabled) && Boolean(customer && !customer.isGuest);\nconst isWalletAutoVaultingEnabled = (method) => Boolean(method.config.vaultingWalletEnabled) && Boolean(method.config.vaultInstrumentForAllWalletPayments);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9nb29nbGUtcGF5LWludGVncmF0aW9uL3NyYy9jYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT08sTUFBTSw4QkFBOEIsQ0FBQztBQUFBLEVBQ3hDO0FBQUEsRUFDQTtBQUNKLE1BQ0ksUUFBUSxPQUFPLE9BQU8scUJBQXFCLEtBQUssUUFBUSxZQUFZLENBQUMsU0FBUyxPQUFPO0FBRWxGLE1BQU0sOEJBQThCLENBQUMsV0FDeEMsUUFBUSxPQUFPLE9BQU8scUJBQXFCLEtBQzNDLFFBQVEsT0FBTyxPQUFPLG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWNrb3V0Ly4vcGFja2FnZXMvZ29vZ2xlLXBheS1pbnRlZ3JhdGlvbi9zcmMvY2FuVmF1bHRHb29nbGVQYXlJbnN0cnVtZW50LnRzPzYwMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBDdXN0b21lciwgdHlwZSBQYXltZW50TWV0aG9kIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL2NoZWNrb3V0LXNkayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuVmF1bHRHb29nbGVQYXlJbnN0cnVtZW50U3RhdGUge1xuICAgIGN1c3RvbWVyPzogQ3VzdG9tZXI7XG4gICAgbWV0aG9kOiBQYXltZW50TWV0aG9kO1xufVxuXG5leHBvcnQgY29uc3QgY2FuVmF1bHRHb29nbGVQYXlJbnN0cnVtZW50ID0gKHtcbiAgICBjdXN0b21lcixcbiAgICBtZXRob2QsXG59OiBDYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnRTdGF0ZSk6IGJvb2xlYW4gPT5cbiAgICBCb29sZWFuKG1ldGhvZC5jb25maWcudmF1bHRpbmdXYWxsZXRFbmFibGVkKSAmJiBCb29sZWFuKGN1c3RvbWVyICYmICFjdXN0b21lci5pc0d1ZXN0KTtcblxuZXhwb3J0IGNvbnN0IGlzV2FsbGV0QXV0b1ZhdWx0aW5nRW5hYmxlZCA9IChtZXRob2Q6IFBheW1lbnRNZXRob2QpOiBib29sZWFuID0+XG4gICAgQm9vbGVhbihtZXRob2QuY29uZmlnLnZhdWx0aW5nV2FsbGV0RW5hYmxlZCkgJiZcbiAgICBCb29sZWFuKG1ldGhvZC5jb25maWcudmF1bHRJbnN0cnVtZW50Rm9yQWxsV2FsbGV0UGF5bWVudHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/google-pay-integration/src/canVaultGooglePayInstrument.ts\n\n}");

/***/ }

});