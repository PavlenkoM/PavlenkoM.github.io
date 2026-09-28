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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   canVaultGooglePayInstrument: () => (/* binding */ canVaultGooglePayInstrument)\n/* harmony export */ });\n\nconst canVaultGooglePayInstrument = ({\n  customer,\n  method\n}) => {\n  const { vaultingWalletEnabled, vaultInstrumentForAllWalletPayments } = method.config;\n  if (!vaultingWalletEnabled || !customer) {\n    return false;\n  }\n  return !customer.isGuest || Boolean(vaultInstrumentForAllWalletPayments);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9nb29nbGUtcGF5LWludGVncmF0aW9uL3NyYy9jYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPTyxNQUFNLDhCQUE4QixDQUFDO0FBQUEsRUFDeEM7QUFBQSxFQUNBO0FBQ0osTUFBaUQ7QUFDN0MsUUFBTSxFQUFFLHVCQUF1QixvQ0FBb0MsSUFBSSxPQUFPO0FBRTlFLE1BQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVO0FBQ3JDLFdBQU87QUFBQSxFQUNYO0FBRUEsU0FBTyxDQUFDLFNBQVMsV0FBVyxRQUFRLG1DQUFtQztBQUMzRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWNrb3V0Ly4vcGFja2FnZXMvZ29vZ2xlLXBheS1pbnRlZ3JhdGlvbi9zcmMvY2FuVmF1bHRHb29nbGVQYXlJbnN0cnVtZW50LnRzPzYwMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBDdXN0b21lciwgdHlwZSBQYXltZW50TWV0aG9kIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL2NoZWNrb3V0LXNkayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuVmF1bHRHb29nbGVQYXlJbnN0cnVtZW50U3RhdGUge1xuICAgIGN1c3RvbWVyPzogQ3VzdG9tZXI7XG4gICAgbWV0aG9kOiBQYXltZW50TWV0aG9kO1xufVxuXG5leHBvcnQgY29uc3QgY2FuVmF1bHRHb29nbGVQYXlJbnN0cnVtZW50ID0gKHtcbiAgICBjdXN0b21lcixcbiAgICBtZXRob2QsXG59OiBDYW5WYXVsdEdvb2dsZVBheUluc3RydW1lbnRTdGF0ZSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHsgdmF1bHRpbmdXYWxsZXRFbmFibGVkLCB2YXVsdEluc3RydW1lbnRGb3JBbGxXYWxsZXRQYXltZW50cyB9ID0gbWV0aG9kLmNvbmZpZztcblxuICAgIGlmICghdmF1bHRpbmdXYWxsZXRFbmFibGVkIHx8ICFjdXN0b21lcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICFjdXN0b21lci5pc0d1ZXN0IHx8IEJvb2xlYW4odmF1bHRJbnN0cnVtZW50Rm9yQWxsV2FsbGV0UGF5bWVudHMpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/google-pay-integration/src/canVaultGooglePayInstrument.ts\n\n}");

/***/ }

});