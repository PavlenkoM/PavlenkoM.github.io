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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   canVaultGooglePayInstrument: () => (/* binding */ canVaultGooglePayInstrument),\n/* harmony export */   isWalletAutoVaultingEnabled: () => (/* binding */ isWalletAutoVaultingEnabled)\n/* harmony export */ });\n\nconst canVaultGooglePayInstrument = ({\n  customer,\n  method\n}) => Boolean(method.config.vaultingWalletEnabled) && Boolean(customer && !customer.isGuest);\nconst isWalletAutoVaultingEnabled = (method) => Boolean(method.config.vaultInstrumentForAllWalletPayments);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9nb29nbGUtcGF5LWludGVncmF0aW9uL3NyYy9jYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT08sTUFBTSw4QkFBOEIsQ0FBQztBQUFBLEVBQ3hDO0FBQUEsRUFDQTtBQUNKLE1BQ0ksUUFBUSxPQUFPLE9BQU8scUJBQXFCLEtBQUssUUFBUSxZQUFZLENBQUMsU0FBUyxPQUFPO0FBRWxGLE1BQU0sOEJBQThCLENBQUMsV0FDeEMsUUFBUSxPQUFPLE9BQU8sbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlY2tvdXQvLi9wYWNrYWdlcy9nb29nbGUtcGF5LWludGVncmF0aW9uL3NyYy9jYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnQudHM/NjAxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEN1c3RvbWVyLCB0eXBlIFBheW1lbnRNZXRob2QgfSBmcm9tICdAYmlnY29tbWVyY2UvY2hlY2tvdXQtc2RrJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnRTdGF0ZSB7XG4gICAgY3VzdG9tZXI/OiBDdXN0b21lcjtcbiAgICBtZXRob2Q6IFBheW1lbnRNZXRob2Q7XG59XG5cbmV4cG9ydCBjb25zdCBjYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnQgPSAoe1xuICAgIGN1c3RvbWVyLFxuICAgIG1ldGhvZCxcbn06IENhblZhdWx0R29vZ2xlUGF5SW5zdHJ1bWVudFN0YXRlKTogYm9vbGVhbiA9PlxuICAgIEJvb2xlYW4obWV0aG9kLmNvbmZpZy52YXVsdGluZ1dhbGxldEVuYWJsZWQpICYmIEJvb2xlYW4oY3VzdG9tZXIgJiYgIWN1c3RvbWVyLmlzR3Vlc3QpO1xuXG5leHBvcnQgY29uc3QgaXNXYWxsZXRBdXRvVmF1bHRpbmdFbmFibGVkID0gKG1ldGhvZDogUGF5bWVudE1ldGhvZCk6IGJvb2xlYW4gPT5cbiAgICBCb29sZWFuKG1ldGhvZC5jb25maWcudmF1bHRJbnN0cnVtZW50Rm9yQWxsV2FsbGV0UGF5bWVudHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/google-pay-integration/src/canVaultGooglePayInstrument.ts\n\n}");

/***/ }

});