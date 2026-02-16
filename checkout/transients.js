"use strict";
(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["transients"],{

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/client/client.js":
/*!***************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/client/client.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectAssign = _interopRequireDefault(__webpack_require__(/*! object-assign */ "../checkout-sdk-js/node_modules/object-assign/index.js"));
var _offsitePaymentInitializer = _interopRequireDefault(__webpack_require__(/*! ../payment/offsite-payment-initializer */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-initializer.js"));
var _paymentSubmitter = _interopRequireDefault(__webpack_require__(/*! ../payment/payment-submitter */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-submitter.js"));
var _clientTokenGenerator = _interopRequireDefault(__webpack_require__(/*! ../payment/client-token-generator */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/client-token-generator.js"));
var _storeRequestSender = _interopRequireDefault(__webpack_require__(/*! ../store/store-request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/store-request-sender.js"));
var _defaultConfig = _interopRequireDefault(__webpack_require__(/*! ./default-config */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/client/default-config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Client = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   * @param {PaymentSubmitter} paymentSubmitter
   * @param {OffsitePaymentInitializer} offsitePaymentInitializer
   * @param {ClientTokenGenerator} clientTokenGenerator
   * @param {StoreRequestSender} storeRequestSender
   */
  function Client(config, paymentSubmitter, offsitePaymentInitializer, clientTokenGenerator, storeRequestSender) {
    _classCallCheck(this, Client);
    /**
     * @private
     * @type {Object}
     */
    this.config = config;

    /**
     * @private
     * @type {PaymentSubmitter}
     */
    this.paymentSubmitter = paymentSubmitter;

    /**
     * @private
     * @type {OffsitePaymentInitializer}
     */
    this.offsitePaymentInitializer = offsitePaymentInitializer;

    /**
     * @private
     * @type {ClientTokenGenerator}
     */
    this.clientTokenGenerator = clientTokenGenerator;

    /**
     * @private
     * @type {StoreRequestSender}
     */
    this.storeRequestSender = storeRequestSender;
  }

  /**
   * @param {string} host
   * @returns {void}
   */
  return _createClass(Client, [{
    key: "setHost",
    value: function setHost(host) {
      this.config.host = host;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @param {string} target
     * @returns {void}
     */
  }, {
    key: "initializeOffsitePayment",
    value: function initializeOffsitePayment(data, callback, target) {
      this.offsitePaymentInitializer.initializeOffsitePayment(data, callback, target);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
  }, {
    key: "submitPayment",
    value: function submitPayment(data, callback) {
      this.paymentSubmitter.submitPayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
  }, {
    key: "generateClientToken",
    value: function generateClientToken(data, callback) {
      this.clientTokenGenerator.generateClientToken(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.customerId
     * @param {string} data.currencyCode
     * @param {Function} [callback]
     * @return {void}
     */
  }, {
    key: "loadInstruments",
    value: function loadInstruments(data, callback) {
      this.storeRequestSender.loadInstruments(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.customerId
     * @param {string} data.currencyCode
     * @param {AddressData} data.shippingAddress
     * @param {Function} [callback]
     * @return {void}
     */
  }, {
    key: "loadInstrumentsWithAddress",
    value: function loadInstrumentsWithAddress(data, callback) {
      this.storeRequestSender.loadInstrumentsWithAddress(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.customerId
     * @param {string} data.instrumentId
     * @param {string} data.currencyCode
     * @param {Function} [callback]
     * @return {void}
     */
  }, {
    key: "deleteShopperInstrument",
    value: function deleteShopperInstrument(data, callback) {
      this.storeRequestSender.deleteShopperInstrument(data, callback);
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @returns {Client}
     */
    function create(config) {
      var clientConfig = (0, _objectAssign.default)({}, _defaultConfig.default, config);
      var offsitePaymentInitializer = _offsitePaymentInitializer.default.create(clientConfig);
      var paymentSubmitter = _paymentSubmitter.default.create(clientConfig);
      var clientTokenGenerator = _clientTokenGenerator.default.create(clientConfig);
      var storeRequestSender = _storeRequestSender.default.create(clientConfig);
      return new Client(clientConfig, paymentSubmitter, offsitePaymentInitializer, clientTokenGenerator, storeRequestSender);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/client/default-config.js":
/*!***********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/client/default-config.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var DEFAULT_CONFIG = {
  host: ''
};
var _default = exports["default"] = DEFAULT_CONFIG;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/content-types.js":
/*!***********************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/content-types.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.APPLICATION_JSON = void 0;
var APPLICATION_JSON = exports.APPLICATION_JSON = 'application/json';


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/default-options.js":
/*!*************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/default-options.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _contentTypes = __webpack_require__(/*! ./content-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/content-types.js");
var _methodTypes = __webpack_require__(/*! ./method-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/method-types.js");
var DEFAULT_OPTIONS = {
  headers: {
    Accept: _contentTypes.APPLICATION_JSON,
    'Content-Type': _contentTypes.APPLICATION_JSON
  },
  method: _methodTypes.GET
};
var _default = exports["default"] = DEFAULT_OPTIONS;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/method-types.js":
/*!**********************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/method-types.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.POST = exports.GET = exports.DELETE = void 0;
var GET = exports.GET = 'GET';
var POST = exports.POST = 'POST';
var DELETE = exports.DELETE = 'DELETE';


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/payload-transformer.js":
/*!*****************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/payload-transformer.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectAssign2 = _interopRequireDefault(__webpack_require__(/*! object-assign */ "../checkout-sdk-js/node_modules/object-assign/index.js"));
var _contentTypes = __webpack_require__(/*! ./content-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/content-types.js");
var _utils = __webpack_require__(/*! ../utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PayloadTransformer = exports["default"] = /*#__PURE__*/function () {
  function PayloadTransformer() {
    _classCallCheck(this, PayloadTransformer);
  }
  return _createClass(PayloadTransformer, [{
    key: "toRequest",
    value:
    /**
     * @param {Object} data
     * @param {string} [contentType = APPLICATION_JSON]
     * @returns {Object}
     */
    function toRequest(data) {
      var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _contentTypes.APPLICATION_JSON;
      if (data && (0, _utils.includes)(contentType, _contentTypes.APPLICATION_JSON)) {
        return JSON.stringify(data);
      }
      return data;
    }

    /**
     * @param {XMLHttpRequest} xhr
     * @returns {Object}
     * @property {Object} data
     * @property {number} status
     * @property {string} statusText
     */
  }, {
    key: "fromResponse",
    value: function fromResponse(xhr) {
      var headers = this.parseResponseHeaders(xhr.getAllResponseHeaders());
      var contentType = xhr.getResponseHeader('Content-Type');
      var status = xhr.status,
        statusText = xhr.statusText;
      var data = 'response' in xhr ? xhr.response : xhr.responseText;
      if (data && (0, _utils.includes)(contentType, _contentTypes.APPLICATION_JSON)) {
        data = JSON.parse(data);
      }
      return {
        data: data,
        headers: headers,
        status: status,
        statusText: statusText
      };
    }

    /**
     * @private
     * @param {string} rawHeaders
     * @returns {Object}
     */
  }, {
    key: "parseResponseHeaders",
    value: function parseResponseHeaders(rawHeaders) {
      var lines = rawHeaders ? rawHeaders.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/) : [];
      return lines.reduce(function (headers, line) {
        var parts = line.split(':');
        var key = (parts.shift() || '').trim();
        if (!key) {
          return headers;
        }
        return (0, _objectAssign2.default)({}, headers, _defineProperty({}, key.toLowerCase(), parts.join(':').trim()));
      }, {});
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {PayloadTransformer}
     */
    function create() {
      return new PayloadTransformer();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-factory.js":
/*!*************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-factory.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RequestFactory = exports["default"] = /*#__PURE__*/function () {
  function RequestFactory() {
    _classCallCheck(this, RequestFactory);
  }
  return _createClass(RequestFactory, [{
    key: "createRequest",
    value:
    /**
     * @param {string} url
     * @param {Object} options
     * @param {Function} [callback]
     * @returns {XMLHttpRequest}
     */
    function createRequest(url, options, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onerror = function () {
        if (callback) {
          callback(new Error(xhr.statusText));
        }
      };
      xhr.onload = function () {
        if (callback) {
          callback();
        }
      };
      xhr.open(options.method, url, true);
      this.setOptions(xhr, options);
      return xhr;
    }

    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @param {Object} headers
     * @returns {void}
     */
  }, {
    key: "setHeaders",
    value: function setHeaders(xhr, headers) {
      var headerKeys = Object.keys(headers);
      headerKeys.forEach(function (key) {
        var value = headers[key];
        xhr.setRequestHeader(key, value);
      });
    }

    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @param {Object} options
     * @returns {void}
     */
  }, {
    key: "setOptions",
    value: function setOptions(xhr, options) {
      xhr.withCredentials = options.withCredentials;
      if (options.headers) {
        this.setHeaders(xhr, options.headers);
      }
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {RequestFactory}
     */
    function create() {
      return new RequestFactory();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-sender.js":
/*!************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-sender.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _deepAssign = _interopRequireDefault(__webpack_require__(/*! deep-assign */ "../checkout-sdk-js/node_modules/deep-assign/index.js"));
var _objectAssign = _interopRequireDefault(__webpack_require__(/*! object-assign */ "../checkout-sdk-js/node_modules/object-assign/index.js"));
var _methodTypes = __webpack_require__(/*! ./method-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/method-types.js");
var _defaultOptions = _interopRequireDefault(__webpack_require__(/*! ./default-options */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/default-options.js"));
var _payloadTransformer = _interopRequireDefault(__webpack_require__(/*! ./payload-transformer */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/payload-transformer.js"));
var _requestFactory = _interopRequireDefault(__webpack_require__(/*! ./request-factory */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-factory.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RequestSender = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {RequestFactory} requestFactory
   * @param {PayloadTransformer} payloadTransformer
   */
  function RequestSender(requestFactory, payloadTransformer) {
    _classCallCheck(this, RequestSender);
    /**
     * @private
     * @type {RequestFactory}
     */
    this.requestFactory = requestFactory;

    /**
     * @private
     * @type {PayloadTransformer}
     */
    this.payloadTransformer = payloadTransformer;
  }

  /**
   * @param {string} url
   * @param {Object} data
   * @param {Object} [options]
   * @param {Function} [callback]
   * @returns {void}
   */
  return _createClass(RequestSender, [{
    key: "sendRequest",
    value: function sendRequest(url, data, options, callback) {
      var _this = this;
      var mergedOptions = (0, _deepAssign.default)({}, _defaultOptions.default, options);
      var xhr = this.requestFactory.createRequest(url, mergedOptions, function (error) {
        var response = _this.payloadTransformer.fromResponse(xhr);
        if (!callback) {
          return;
        }
        if (error || !_this.isSuccessfulRequest(xhr)) {
          callback(response);
          return;
        }
        callback(null, response);
      });
      var payload = this.payloadTransformer.toRequest(data, mergedOptions.headers['Content-Type']);
      xhr.send(payload);
    }

    /**
     * @param {string} url
     * @param {Object} data
     * @param {Object} [options]
     * @param {Function} [callback]
     * @returns {void}
     */
  }, {
    key: "postRequest",
    value: function postRequest(url, data, options, callback) {
      var mergedOptions = (0, _objectAssign.default)({}, options, {
        method: _methodTypes.POST
      });
      this.sendRequest(url, data, mergedOptions, callback);
    }

    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @returns {boolean}
     */
  }, {
    key: "isSuccessfulRequest",
    value: function isSuccessfulRequest(xhr) {
      return xhr.status >= 200 && xhr.status < 300;
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {RequestSender}
     */
    function create() {
      var requestFactory = _requestFactory.default.create();
      var payloadTransformer = _payloadTransformer.default.create();
      return new RequestSender(requestFactory, payloadTransformer);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/includes.js":
/*!***********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/includes.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = includes;
/**
 * @param {array|string} items
 * @param {array|string} item
 * @returns {boolean}
 */
function includes(items, item) {
  if (!Array.isArray(items) && typeof items !== 'string') {
    return false;
  }
  return items.indexOf(item) !== -1;
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js":
/*!********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "includes", ({
  enumerable: true,
  get: function get() {
    return _includes.default;
  }
}));
Object.defineProperty(exports, "isNil", ({
  enumerable: true,
  get: function get() {
    return _isNil.default;
  }
}));
Object.defineProperty(exports, "isObject", ({
  enumerable: true,
  get: function get() {
    return _isObject.default;
  }
}));
Object.defineProperty(exports, "omitEmptyStringAndNil", ({
  enumerable: true,
  get: function get() {
    return _omitEmptystringAndNil.default;
  }
}));
Object.defineProperty(exports, "omitNil", ({
  enumerable: true,
  get: function get() {
    return _omitNil.default;
  }
}));
Object.defineProperty(exports, "omitProperty", ({
  enumerable: true,
  get: function get() {
    return _omitProperty.default;
  }
}));
Object.defineProperty(exports, "toNumber", ({
  enumerable: true,
  get: function get() {
    return _toNumber.default;
  }
}));
Object.defineProperty(exports, "toSnakeCase", ({
  enumerable: true,
  get: function get() {
    return _toSnakeCase.default;
  }
}));
Object.defineProperty(exports, "toString", ({
  enumerable: true,
  get: function get() {
    return _toString.default;
  }
}));
var _includes = _interopRequireDefault(__webpack_require__(/*! ./includes */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/includes.js"));
var _isNil = _interopRequireDefault(__webpack_require__(/*! ./is-nil */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-nil.js"));
var _isObject = _interopRequireDefault(__webpack_require__(/*! ./is-object */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-object.js"));
var _omitEmptystringAndNil = _interopRequireDefault(__webpack_require__(/*! ./omit-emptystring-and-nil */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-emptystring-and-nil.js"));
var _omitNil = _interopRequireDefault(__webpack_require__(/*! ./omit-nil */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-nil.js"));
var _omitProperty = _interopRequireDefault(__webpack_require__(/*! ./omit-property */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-property.js"));
var _toNumber = _interopRequireDefault(__webpack_require__(/*! ./to-number */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-number.js"));
var _toSnakeCase = _interopRequireDefault(__webpack_require__(/*! ./to-snake-case */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-snake-case.js"));
var _toString = _interopRequireDefault(__webpack_require__(/*! ./to-string */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-string.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-empty-string.js":
/*!******************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-empty-string.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isEmptyString;
/**
 * @param {*} value
 * @returns {boolean}
 */
function isEmptyString(value) {
  return value === '';
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-emptystring-or-nil.js":
/*!************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-emptystring-or-nil.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isEmptyStringOrNil;
var _isEmptyString = _interopRequireDefault(__webpack_require__(/*! ./is-empty-string */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-empty-string.js"));
var _isNil = _interopRequireDefault(__webpack_require__(/*! ./is-nil */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-nil.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @param {*} value
 * @returns {boolean}
 */
function isEmptyStringOrNil(value) {
  return (0, _isEmptyString.default)(value) || (0, _isNil.default)(value);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-nil.js":
/*!*********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-nil.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isNil;
/**
 * @param {*} value
 * @returns {boolean}
 */
function isNil(value) {
  if (value === null || value === undefined) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-object.js":
/*!************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-object.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isObject;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  return value !== null && _typeof(value) === 'object' && !Array.isArray(value);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-emptystring-and-nil.js":
/*!***************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-emptystring-and-nil.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omitEmptyStringAndNil;
var _isEmptystringOrNil = _interopRequireDefault(__webpack_require__(/*! ./is-emptystring-or-nil */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-emptystring-or-nil.js"));
var _omitProperty = _interopRequireDefault(__webpack_require__(/*! ./omit-property */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-property.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @param {Object} object
 * @returns {Object}
 */
function omitEmptyStringAndNil(object) {
  return (0, _omitProperty.default)(object, _isEmptystringOrNil.default);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-nil.js":
/*!***********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-nil.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omitNil;
var _isNil = _interopRequireDefault(__webpack_require__(/*! ./is-nil */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-nil.js"));
var _omitProperty = _interopRequireDefault(__webpack_require__(/*! ./omit-property */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-property.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @param {Object} object
 * @returns {Object}
 */
function omitNil(object) {
  return (0, _omitProperty.default)(object, _isNil.default);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-property.js":
/*!****************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/omit-property.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omitProperty;
var _isObject = _interopRequireDefault(__webpack_require__(/*! ./is-object */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/is-object.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @param {Object} object
 * @param {Function} predicateFn
 * @returns {Object}
 */
function omitProperty(object, predicateFn) {
  if (!(0, _isObject.default)(object)) {
    return object;
  }
  var keys = Object.keys(object);
  return keys.reduce(function (result, key) {
    var value = object[key];
    if (!predicateFn(value)) {
      result[key] = value;
    }
    return result;
  }, {});
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-number.js":
/*!************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-number.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toNumber;
/**
 * @param {*} value
 * @returns {number}
 */
function toNumber(value) {
  return parseFloat(value) || 0;
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-snake-case.js":
/*!****************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-snake-case.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toSnakeCase;
/**
 * @param {string} string
 * @returns {string}
 */
function toSnakeCase(string) {
  if (typeof string !== 'string') {
    return string;
  }
  return string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-string.js":
/*!************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/to-string.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toString;
/**
 * @param {*} value
 * @returns {string}
 */
function toString(value) {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return value.toString();
  }
  return '';
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/index.js":
/*!*******************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createClient = createClient;
var _client = _interopRequireDefault(__webpack_require__(/*! ./client/client */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/client/client.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @param {Object} [config]
 * @returns {Client}
 */
function createClient(config) {
  return _client.default.create(config);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/client-token-generator.js":
/*!********************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/client-token-generator.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _requestSender = _interopRequireDefault(__webpack_require__(/*! ../common/http-request/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-sender.js"));
var _clientTokenMapper = _interopRequireDefault(__webpack_require__(/*! ./v2/payment-mappers/client-token-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/client-token-mapper.js"));
var _urlHelper = _interopRequireDefault(__webpack_require__(/*! ./url-helper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/url-helper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ClientTokenGenerator = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {UrlHelper} urlHelper
   * @param {RequestSender} requestSender
   * @param {ClientTokenMapper} clientTokenMapper
   * @returns {void}
   */
  function ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper) {
    _classCallCheck(this, ClientTokenGenerator);
    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;

    /**
     * @private
     * @type {RequestSender}
     */
    this.requestSender = requestSender;

    /**
     * @private
     * @type {ClientTokenMapper}
     */
    this.clientTokenMapper = clientTokenMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @returns {void}
   */
  return _createClass(ClientTokenGenerator, [{
    key: "generateClientToken",
    value: function generateClientToken(data, callback) {
      var url = this.urlHelper.getGenerateClientTokenUrl();
      var payload = this.clientTokenMapper.mapToClientToken(data);
      this.requestSender.postRequest(url, payload, {}, callback);
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    function create(config) {
      var urlHelper = _urlHelper.default.create(config);
      var requestSender = _requestSender.default.create();
      var clientTokenMapper = _clientTokenMapper.default.create();
      return new ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-initializer.js":
/*!*************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-initializer.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _formPoster = __webpack_require__(/*! @bigcommerce/form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js");
var _paymentTypes = __webpack_require__(/*! ./payment-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-types.js");
var _payloadMapper = _interopRequireDefault(__webpack_require__(/*! ./offsite-payment-mappers/payload-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/payload-mapper.js"));
var _urlHelper = _interopRequireDefault(__webpack_require__(/*! ./url-helper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/url-helper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OffsitePaymentInitializer = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {UrlHelper} urlHelper
   * @param {FormPoster} formPoster
   * @param {PayloadMapper} payloadMapper
   * @returns {void}
   */
  function OffsitePaymentInitializer(urlHelper, formPoster, payloadMapper) {
    _classCallCheck(this, OffsitePaymentInitializer);
    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;

    /**
     * @private
     * @type {FormPoster}
     */
    this.formPoster = formPoster;

    /**
     * @private
     * @type {PayloadMapper}
     */
    this.payloadMapper = payloadMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @param {string} target
   * @returns {void}
   * @throws {Error}
   */
  return _createClass(OffsitePaymentInitializer, [{
    key: "initializeOffsitePayment",
    value: function initializeOffsitePayment(data, callback, target) {
      var _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === void 0 ? {} : _data$paymentMethod;
      if (paymentMethod.type !== _paymentTypes.HOSTED) {
        throw new Error("".concat(paymentMethod.type, " is not supported."));
      }
      var payload = this.payloadMapper.mapToPayload(data);
      var url = this.urlHelper.getOffsitePaymentUrl();
      this.formPoster.postForm(url, payload, callback, target);
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @returns {OffsitePaymentInitializer}
     */
    function create(config) {
      var urlHelper = _urlHelper.default.create(config);
      var formPoster = (0, _formPoster.createFormPoster)();
      var payloadMapper = _payloadMapper.default.create();
      return new OffsitePaymentInitializer(urlHelper, formPoster, payloadMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/address-mapper.js":
/*!************************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/address-mapper.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AddressMapper = exports["default"] = /*#__PURE__*/function () {
  function AddressMapper() {
    _classCallCheck(this, AddressMapper);
  }
  return _createClass(AddressMapper, [{
    key: "mapToBillingAddress",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToBillingAddress(data) {
      return this.mapToAddress(data, 'billingAddress');
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToShippingAddress",
    value: function mapToShippingAddress(data) {
      return this.mapToAddress(data, 'shippingAddress');
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @param {string} addressKey
     * @returns {Object}
     */
  }, {
    key: "mapToAddress",
    value: function mapToAddress(data, addressKey) {
      var _omitNil;
      var address = data[addressKey] || {};
      var formattedAddressKey = (0, _utils.toSnakeCase)(addressKey);
      return (0, _utils.omitNil)((_omitNil = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_omitNil, "".concat(formattedAddressKey, "_city"), address.city), "".concat(formattedAddressKey, "_company"), address.company), "".concat(formattedAddressKey, "_country_code"), address.countryCode), "".concat(formattedAddressKey, "_country"), address.country), "".concat(formattedAddressKey, "_first_name"), address.firstName), "".concat(formattedAddressKey, "_last_name"), address.lastName), "".concat(formattedAddressKey, "_phone"), address.phone), "".concat(formattedAddressKey, "_state_code"), address.provinceCode), "".concat(formattedAddressKey, "_state"), address.province), "".concat(formattedAddressKey, "_street_1"), address.addressLine1), _defineProperty(_defineProperty(_omitNil, "".concat(formattedAddressKey, "_street_2"), address.addressLine2), "".concat(formattedAddressKey, "_zip"), address.postCode)));
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {AddressMapper}
     */
    function create() {
      return new AddressMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/customer-mapper.js":
/*!*************************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/customer-mapper.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CustomerMapper = exports["default"] = /*#__PURE__*/function () {
  function CustomerMapper() {
    _classCallCheck(this, CustomerMapper);
  }
  return _createClass(CustomerMapper, [{
    key: "mapToCustomer",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToCustomer(data) {
      var _data$customer = data.customer,
        customer = _data$customer === void 0 ? {} : _data$customer,
        _data$quoteMeta = data.quoteMeta,
        quoteMeta = _data$quoteMeta === void 0 ? {} : _data$quoteMeta,
        _data$store = data.store,
        store = _data$store === void 0 ? {} : _data$store;
      return (0, _utils.omitNil)({
        customer_browser_info: navigator.userAgent,
        customer_email: customer.email,
        customer_first_name: customer.firstName,
        customer_geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
        customer_id: customer.customerId,
        customer_last_name: customer.lastName,
        customer_locale: store.storeLanguage,
        customer_name: customer.name,
        customer_phone: customer.phoneNumber,
        customer_reference: customer.email
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {CustomerMapper}
     */
    function create() {
      return new CustomerMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/meta-mapper.js":
/*!*********************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/meta-mapper.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MetaMapper = exports["default"] = /*#__PURE__*/function () {
  function MetaMapper() {
    _classCallCheck(this, MetaMapper);
  }
  return _createClass(MetaMapper, [{
    key: "mapToMeta",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToMeta(data) {
      var source = data.source;
      return (0, _utils.omitNil)({
        meta_referrer: document.referrer,
        meta_source: source,
        meta_user_agent: navigator.userAgent
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {MetaMapper}
     */
    function create() {
      return new MetaMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/payload-mapper.js":
/*!************************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/payload-mapper.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectAssign = _interopRequireDefault(__webpack_require__(/*! object-assign */ "../checkout-sdk-js/node_modules/object-assign/index.js"));
var _utils = __webpack_require__(/*! ../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
var _addressMapper = _interopRequireDefault(__webpack_require__(/*! ./address-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/address-mapper.js"));
var _customerMapper = _interopRequireDefault(__webpack_require__(/*! ./customer-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/customer-mapper.js"));
var _metaMapper = _interopRequireDefault(__webpack_require__(/*! ./meta-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/meta-mapper.js"));
var _paymentMethodIdMapper = _interopRequireDefault(__webpack_require__(/*! ../payment-method-mappers/payment-method-id-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-mappers/payment-method-id-mapper.js"));
var _storeMapper = _interopRequireDefault(__webpack_require__(/*! ./store-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/store-mapper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PayloadMapper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {AddressMapper} addressMapper
   * @param {CustomerMapper} customerMapper
   * @param {MetaMapper} metaMapper
   * @param {PaymentMethodIdMapper} paymentMethodIdMapper
   * @param {StoreMapper} storeMapper
   * @returns {Object}
   */
  function PayloadMapper(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper) {
    _classCallCheck(this, PayloadMapper);
    /**
     * @private
     * @type {AddressMapper}
     */
    this.addressMapper = addressMapper;

    /**
     * @private
     * @type {CustomerMapper}
     */
    this.customerMapper = customerMapper;

    /**
     * @private
     * @type {MetaMapper}
     */
    this.metaMapper = metaMapper;

    /**
     * @private
     * @type {PaymentMethodIdMapper}
     */
    this.paymentMethodIdMapper = paymentMethodIdMapper;

    /**
     * @private
     * @type {StoreMapper}
     */
    this.storeMapper = storeMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @returns {Object}
   */
  return _createClass(PayloadMapper, [{
    key: "mapToPayload",
    value: function mapToPayload(data) {
      var authToken = data.authToken,
        _data$order = data.order,
        order = _data$order === void 0 ? {} : _data$order,
        _data$payment = data.payment,
        payment = _data$payment === void 0 ? {} : _data$payment,
        _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === void 0 ? {} : _data$paymentMethod;
      var payload = (0, _objectAssign.default)({
        amount: order.grandTotal ? order.grandTotal.integerAmount : null,
        tax: order.taxTotal ? order.taxTotal.integerAmount : null,
        bc_auth_token: authToken,
        currency: order.currency,
        gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
        notify_url: order.callbackUrl,
        order_id: order.orderId ? (0, _utils.toString)(order.orderId) : null,
        page_title: document.title ? document.title : null,
        payment_method_id: paymentMethod.id,
        reference_id: order.orderId ? (0, _utils.toString)(order.orderId) : null,
        return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null)
      }, this.addressMapper.mapToBillingAddress(data), this.customerMapper.mapToCustomer(data), this.metaMapper.mapToMeta(data), this.addressMapper.mapToShippingAddress(data), this.storeMapper.mapToStore(data));
      var _payment$formattedPay = payment.formattedPayload,
        formattedPayload = _payment$formattedPay === void 0 ? {} : _payment$formattedPay;
      (0, _objectAssign.default)(payload, formattedPayload);
      return (0, _utils.omitNil)(payload);
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {PayloadMapper}
     */
    function create() {
      var addressMapper = _addressMapper.default.create();
      var customerMapper = _customerMapper.default.create();
      var metaMapper = _metaMapper.default.create();
      var paymentMethodIdMapper = _paymentMethodIdMapper.default.create();
      var storeMapper = _storeMapper.default.create();
      return new PayloadMapper(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/store-mapper.js":
/*!**********************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/offsite-payment-mappers/store-mapper.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StoreMapper = exports["default"] = /*#__PURE__*/function () {
  function StoreMapper() {
    _classCallCheck(this, StoreMapper);
  }
  return _createClass(StoreMapper, [{
    key: "mapToStore",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToStore(data) {
      var _data$store = data.store,
        store = _data$store === void 0 ? {} : _data$store;
      return (0, _utils.omitNil)({
        store_hash: store.storeHash,
        store_id: store.storeId ? (0, _utils.toString)(store.storeId) : null
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {StoreMapper}
     */
    function create() {
      return new StoreMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-ids.js":
/*!****************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-ids.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PAYPAL_COMMERCE_VENMO = exports.PAYPAL_COMMERCE_CREDIT_CARDS = exports.PAYPAL_COMMERCE_CREDIT = exports.PAYPAL_COMMERCE_ALTERNATIVE_METHODS = exports.PAYPAL_COMMERCE_ACCELERATED_CHECKOUT = exports.PAYPAL_COMMERCE = exports.BRAINTREE_VISACHECKOUT = exports.BRAINTREE_PAYPAL_CREDIT = exports.BRAINTREE_PAYPAL = exports.BRAINTREE_LOCAL_METHODS = exports.BRAINTREE_GOOGLEPAY = exports.BRAINTREE_ACH = exports.BRAINTREE_ACCELERATED_CHECKOUT = exports.BRAINTREE = exports.BIGCOMMERCE_PAYMENTS_VENMO = exports.BIGCOMMERCE_PAYMENTS_PAYLATER = exports.BIGCOMMERCE_PAYMENTS_FASTLANE = exports.BIGCOMMERCE_PAYMENTS_CREDIT_CARDS = exports.BIGCOMMERCE_PAYMENTS_APMS = exports.BIGCOMMERCE_PAYMENTS = void 0;
var BIGCOMMERCE_PAYMENTS = exports.BIGCOMMERCE_PAYMENTS = 'bigcommerce_payments';
var BIGCOMMERCE_PAYMENTS_PAYLATER = exports.BIGCOMMERCE_PAYMENTS_PAYLATER = 'bigcommerce_payments_paylater';
var BIGCOMMERCE_PAYMENTS_CREDIT_CARDS = exports.BIGCOMMERCE_PAYMENTS_CREDIT_CARDS = 'bigcommerce_payments_creditcards';
var BIGCOMMERCE_PAYMENTS_FASTLANE = exports.BIGCOMMERCE_PAYMENTS_FASTLANE = 'bigcommerce_payments_fastlane';
var BIGCOMMERCE_PAYMENTS_APMS = exports.BIGCOMMERCE_PAYMENTS_APMS = 'bigcommerce_payments_apms';
var BIGCOMMERCE_PAYMENTS_VENMO = exports.BIGCOMMERCE_PAYMENTS_VENMO = 'bigcommerce_payments_venmo';
var BRAINTREE = exports.BRAINTREE = 'braintree';
var BRAINTREE_PAYPAL = exports.BRAINTREE_PAYPAL = 'braintreepaypal';
var BRAINTREE_PAYPAL_CREDIT = exports.BRAINTREE_PAYPAL_CREDIT = 'braintreepaypalcredit';
var BRAINTREE_VISACHECKOUT = exports.BRAINTREE_VISACHECKOUT = 'braintreevisacheckout';
var BRAINTREE_LOCAL_METHODS = exports.BRAINTREE_LOCAL_METHODS = 'braintreelocalmethods';
var BRAINTREE_GOOGLEPAY = exports.BRAINTREE_GOOGLEPAY = 'googlepaybraintree';
var BRAINTREE_ACH = exports.BRAINTREE_ACH = 'braintreeach';
var BRAINTREE_ACCELERATED_CHECKOUT = exports.BRAINTREE_ACCELERATED_CHECKOUT = 'braintreeacceleratedcheckout';
var PAYPAL_COMMERCE = exports.PAYPAL_COMMERCE = 'paypalcommerce';
var PAYPAL_COMMERCE_ACCELERATED_CHECKOUT = exports.PAYPAL_COMMERCE_ACCELERATED_CHECKOUT = 'paypalcommerceacceleratedcheckout';
var PAYPAL_COMMERCE_ALTERNATIVE_METHODS = exports.PAYPAL_COMMERCE_ALTERNATIVE_METHODS = 'paypalcommercealternativemethods';
var PAYPAL_COMMERCE_CREDIT = exports.PAYPAL_COMMERCE_CREDIT = 'paypalcommercecredit';
var PAYPAL_COMMERCE_CREDIT_CARDS = exports.PAYPAL_COMMERCE_CREDIT_CARDS = 'paypalcommercecreditcards';
var PAYPAL_COMMERCE_VENMO = exports.PAYPAL_COMMERCE_VENMO = 'paypalcommercevenmo';


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-mappers/payment-method-id-mapper.js":
/*!*********************************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-mappers/payment-method-id-mapper.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _paymentMethodTypes = __webpack_require__(/*! ../payment-method-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-types.js");
var _paymentMethodIds = __webpack_require__(/*! ../payment-method-ids */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-ids.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @param {string} id
 * @return {Boolean}
 */
function isBraintreePaymentMethod(id) {
  switch (id) {
    case _paymentMethodIds.BRAINTREE_PAYPAL:
    case _paymentMethodIds.BRAINTREE_PAYPAL_CREDIT:
    case _paymentMethodIds.BRAINTREE_VISACHECKOUT:
    case _paymentMethodIds.BRAINTREE_GOOGLEPAY:
    case _paymentMethodIds.BRAINTREE_ACH:
    case _paymentMethodIds.BRAINTREE_LOCAL_METHODS:
    case _paymentMethodIds.BRAINTREE_ACCELERATED_CHECKOUT:
      return true;
    default:
      return false;
  }
}

/**
 * @param {string} id
 * @return {Boolean}
 */
function isPaypalCommercePaymentMethod(id) {
  switch (id) {
    case _paymentMethodIds.PAYPAL_COMMERCE_CREDIT:
    case _paymentMethodIds.PAYPAL_COMMERCE_CREDIT_CARDS:
    case _paymentMethodIds.PAYPAL_COMMERCE_ACCELERATED_CHECKOUT:
    case _paymentMethodIds.PAYPAL_COMMERCE_ALTERNATIVE_METHODS:
    case _paymentMethodIds.PAYPAL_COMMERCE_VENMO:
      return true;
    default:
      return false;
  }
}

/**
 * @param {string} id
 * @return {Boolean}
 */
function isBigCommercePaymentsPaymentMethod(id) {
  switch (id) {
    case _paymentMethodIds.BIGCOMMERCE_PAYMENTS:
    case _paymentMethodIds.BIGCOMMERCE_PAYMENTS_PAYLATER:
    case _paymentMethodIds.BIGCOMMERCE_PAYMENTS_CREDIT_CARDS:
    case _paymentMethodIds.BIGCOMMERCE_PAYMENTS_FASTLANE:
    case _paymentMethodIds.BIGCOMMERCE_PAYMENTS_APMS:
    case _paymentMethodIds.BIGCOMMERCE_PAYMENTS_VENMO:
      return true;
    default:
      return false;
  }
}
var PaymentMethodIdMapper = exports["default"] = /*#__PURE__*/function () {
  function PaymentMethodIdMapper() {
    _classCallCheck(this, PaymentMethodIdMapper);
  }
  return _createClass(PaymentMethodIdMapper, [{
    key: "mapToId",
    value:
    /**
     * @param {PaymentMethod} paymentMethod
     * @returns {string}
     */
    function mapToId(paymentMethod) {
      var id = paymentMethod.id;
      if (paymentMethod.method === _paymentMethodTypes.MULTI_OPTION) {
        id = paymentMethod.gateway;
      }
      if (isBraintreePaymentMethod(id)) {
        return _paymentMethodIds.BRAINTREE;
      }
      if (isPaypalCommercePaymentMethod(id)) {
        return _paymentMethodIds.PAYPAL_COMMERCE;
      }
      if (isBigCommercePaymentsPaymentMethod(id)) {
        return _paymentMethodIds.BIGCOMMERCE_PAYMENTS;
      }
      return id;
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {PaymentMethodIdMapper}
     */
    function create() {
      return new PaymentMethodIdMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-types.js":
/*!******************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-types.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PPSDK_CREDIT_CARD = exports.MULTI_OPTION = exports.CREDIT_CARD = void 0;
var CREDIT_CARD = exports.CREDIT_CARD = 'credit-card';
var MULTI_OPTION = exports.MULTI_OPTION = 'multi-option';
var PPSDK_CREDIT_CARD = exports.PPSDK_CREDIT_CARD = 'card';


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-submitter.js":
/*!***************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-submitter.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _requestSender = _interopRequireDefault(__webpack_require__(/*! ../common/http-request/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-sender.js"));
var _paymentTypes = __webpack_require__(/*! ./payment-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-types.js");
var _payloadMapper = _interopRequireDefault(__webpack_require__(/*! ./v1/payment-mappers/payload-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/payload-mapper.js"));
var _ppsdkPayloadMapper = _interopRequireDefault(__webpack_require__(/*! ./ppsdk/payment-mappers/ppsdk-payload-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/ppsdk/payment-mappers/ppsdk-payload-mapper.js"));
var _urlHelper = _interopRequireDefault(__webpack_require__(/*! ./url-helper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/url-helper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PaymentSubmitter = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {UrlHelper} urlHelper
   * @param {RequestSender} requestSender
   * @param {PayloadMapper} payloadMapper
   * @param {PpsdkPayloadMapper} ppsdkPayloadMapper
   * @returns {void}
   */
  function PaymentSubmitter(urlHelper, requestSender, payloadMapper, ppsdkPayloadMapper) {
    _classCallCheck(this, PaymentSubmitter);
    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;

    /**
     * @private
     * @type {RequestSender}
     */
    this.requestSender = requestSender;

    /**
     * @private
     * @type {PayloadMapper}
     */
    this.payloadMapper = payloadMapper;

    /**
    * @private
    * @type {PpsdkPayloadMapper}
    */
    this.ppsdkPayloadMapper = ppsdkPayloadMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @returns {void}
   * @throws {Error}
   */
  return _createClass(PaymentSubmitter, [{
    key: "submitPayment",
    value: function submitPayment(data, callback) {
      var _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === void 0 ? {} : _data$paymentMethod;
      if (paymentMethod.type !== _paymentTypes.API && paymentMethod.type !== _paymentTypes.SDK) {
        throw new Error("".concat(paymentMethod.type, " is not supported."));
      }
      var payload = paymentMethod.type === _paymentTypes.SDK ? this.ppsdkPayloadMapper.mapToPayload(data) : this.payloadMapper.mapToPayload(data);
      var url = paymentMethod.type === _paymentTypes.SDK ? this.urlHelper.getPpsdkPaymentUrl() : this.urlHelper.getPaymentUrl();
      var options = {
        headers: this.payloadMapper.mapToHeaders(data)
      };
      this.requestSender.postRequest(url, payload, options, callback);
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    function create(config) {
      var urlHelper = _urlHelper.default.create(config);
      var requestSender = _requestSender.default.create();
      var payloadMapper = _payloadMapper.default.create();
      var ppsdkPayloadMapper = _ppsdkPayloadMapper.default.create();
      return new PaymentSubmitter(urlHelper, requestSender, payloadMapper, ppsdkPayloadMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-types.js":
/*!***********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-types.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SDK = exports.OFFLINE = exports.HOSTED = exports.API = void 0;
var API = exports.API = 'PAYMENT_TYPE_API';
var HOSTED = exports.HOSTED = 'PAYMENT_TYPE_HOSTED';
var OFFLINE = exports.OFFLINE = 'PAYMENT_TYPE_OFFLINE';
var SDK = exports.SDK = 'PAYMENT_TYPE_SDK';


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/ppsdk/payment-mappers/ppsdk-payload-mapper.js":
/*!****************************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/ppsdk/payment-mappers/ppsdk-payload-mapper.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
var _paymentMethodTypes = __webpack_require__(/*! ../../payment-method-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-types.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PpsdkPayloadMapper = exports["default"] = /*#__PURE__*/function () {
  function PpsdkPayloadMapper() {
    _classCallCheck(this, PpsdkPayloadMapper);
  }
  return _createClass(PpsdkPayloadMapper, [{
    key: "mapToPayload",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToPayload(data) {
      var additionalAction = data.additionalAction,
        _data$payment = data.payment,
        payment = _data$payment === void 0 ? {} : _data$payment,
        paymentMethod = data.paymentMethod;
      return (0, _utils.omitNil)({
        instrument: {
          expires: {
            month: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.month) : null,
            year: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.year) : null
          },
          name: payment.ccName,
          number: payment.ccNumber,
          verification_value: payment.ccCvv,
          type: _paymentMethodTypes.PPSDK_CREDIT_CARD
        },
        form_nonce: payment.hostedFormNonce,
        payment_method_id: paymentMethod.id,
        human_verification: additionalAction ? {
          id: 'recaptcha_v2_verification',
          parameters: {
            token: additionalAction ? additionalAction.data.human_verification_token : null
          }
        } : null
      });
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToHeaders",
    value: function mapToHeaders(data) {
      var authToken = data.authToken;
      return (0, _utils.omitNil)({
        Authorization: authToken
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {PayloadMapper}
     */
    function create() {
      return new PpsdkPayloadMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/url-helper.js":
/*!********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/url-helper.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UrlHelper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   * @param {string} config.host
   * @returns {void}
   */
  function UrlHelper(config) {
    _classCallCheck(this, UrlHelper);
    /**
     * @private
     * @type {Object}
     */
    this.config = config;
  }

  /**
   * @private
   * @returns {string}
   */
  return _createClass(UrlHelper, [{
    key: "host",
    get: function get() {
      return this.config.host;
    }

    /**
     * @returns {string}
     */
  }, {
    key: "getOffsitePaymentUrl",
    value: function getOffsitePaymentUrl() {
      return "".concat(this.host, "/pay/initialize");
    }

    /**
     * @returns {string}
     */
  }, {
    key: "getPaymentUrl",
    value: function getPaymentUrl() {
      return "".concat(this.host, "/api/public/v1/orders/payments");
    }

    /**
     * @returns {string}
     */
  }, {
    key: "getPpsdkPaymentUrl",
    value: function getPpsdkPaymentUrl() {
      return "".concat(this.host, "/payments");
    }

    /**
     * @returns {string}
     */
  }, {
    key: "getGenerateClientTokenUrl",
    value: function getGenerateClientTokenUrl() {
      return "".concat(this.host, "/api/v2/public/payments/client_tokens");
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @param {string} config.host
     * @returns {CustomerMapper}
     */
    function create(config) {
      return new UrlHelper(config);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/customer-mapper.js":
/*!********************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/customer-mapper.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CustomerMapper = exports["default"] = /*#__PURE__*/function () {
  function CustomerMapper() {
    _classCallCheck(this, CustomerMapper);
  }
  return _createClass(CustomerMapper, [{
    key: "mapToCustomer",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToCustomer(data) {
      var _data$customer = data.customer,
        customer = _data$customer === void 0 ? {} : _data$customer,
        _data$quoteMeta = data.quoteMeta,
        quoteMeta = _data$quoteMeta === void 0 ? {} : _data$quoteMeta;
      return (0, _utils.omitNil)({
        customer_group: customer.customerGroupName ? {
          name: customer.customerGroupName
        } : null,
        geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
        id: customer.customerId ? (0, _utils.toString)(customer.customerId) : null,
        session_token: quoteMeta.request ? quoteMeta.request.sessionHash : null
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {CustomerMapper}
     */
    function create() {
      return new CustomerMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/order-mapper.js":
/*!*****************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/order-mapper.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OrderMapper = exports["default"] = /*#__PURE__*/function () {
  function OrderMapper() {
    _classCallCheck(this, OrderMapper);
  }
  return _createClass(OrderMapper, [{
    key: "mapToOrder",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToOrder(data) {
      var _data$order = data.order,
        order = _data$order === void 0 ? {} : _data$order;
      return (0, _utils.omitNil)({
        billing_address: this.mapToBillingAddress(data),
        coupons: this.mapToCoupons(data),
        currency: order.currency,
        id: order.orderId ? (0, _utils.toString)(order.orderId) : null,
        items: this.mapToItems(data),
        shipping: this.mapToShipping(data),
        shipping_address: this.mapToShippingAddress(data),
        token: order.token,
        totals: this.mapToOrderTotals(data)
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToBillingAddress",
    value: function mapToBillingAddress(data) {
      var _data$customer = data.customer,
        customer = _data$customer === void 0 ? {} : _data$customer;
      var address = this.mapToAddress(data, 'billingAddress');
      if (customer.email) {
        address.email = customer.email;
      }
      return address;
    }

    /**
     * @private
     * @param  {PaymentRequestData} data
     * @return {Shipping[]}
     */
  }, {
    key: "mapToShipping",
    value: function mapToShipping(data) {
      var _ref = data.shippingOption || {},
        description = _ref.description,
        transitTime = _ref.transitTime;
      if (description) {
        return [(0, _utils.omitEmptyStringAndNil)({
          method: description,
          transit_time: transitTime
        })];
      }
      return [];
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Coupon[]}
     */
  }, {
    key: "mapToCoupons",
    value: function mapToCoupons(_ref2) {
      var _ref2$order = _ref2.order,
        order = _ref2$order === void 0 ? {} : _ref2$order;
      if (order.coupon && order.coupon.coupons) {
        return order.coupon.coupons.map(function (_ref3) {
          var code = _ref3.code;
          return {
            code: code
          };
        });
      }
      return [];
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToShippingAddress",
    value: function mapToShippingAddress(data) {
      return this.mapToAddress(data, 'shippingAddress');
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @param {string} addressKey
     * @returns {Object}
     */
  }, {
    key: "mapToAddress",
    value: function mapToAddress(data, addressKey) {
      var address = data[addressKey] || {};
      return (0, _utils.omitEmptyStringAndNil)({
        city: address.city,
        company: address.company,
        country_code: address.countryCode,
        country: address.country,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        state_code: address.provinceCode,
        state: address.province,
        street_1: address.addressLine1,
        street_2: address.addressLine2,
        zip: address.postCode
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToItems",
    value: function mapToItems(data) {
      var _data$cart = data.cart,
        cart = _data$cart === void 0 ? {
          items: []
        } : _data$cart;
      return cart.items.map(function (itemData) {
        return (0, _utils.omitNil)({
          code: itemData.id,
          variant_id: itemData.variantId,
          name: itemData.name,
          price: itemData.integerAmount,
          unit_price: itemData.integerUnitPrice,
          quantity: itemData.quantity,
          sku: itemData.sku
        });
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToOrderTotals",
    value: function mapToOrderTotals(data) {
      var _data$order2 = data.order,
        order = _data$order2 === void 0 ? {} : _data$order2;
      return (0, _utils.omitNil)({
        grand_total: order.grandTotal ? order.grandTotal.integerAmount : null,
        handling: order.handling ? order.handling.integerAmount : null,
        shipping: order.shipping ? order.shipping.integerAmount : null,
        subtotal: order.subtotal ? order.subtotal.integerAmount : null,
        tax: order.taxTotal ? order.taxTotal.integerAmount : null
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {OrderMapper}
     */
    function create() {
      return new OrderMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/payload-mapper.js":
/*!*******************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/payload-mapper.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
var _customerMapper = _interopRequireDefault(__webpack_require__(/*! ./customer-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/customer-mapper.js"));
var _orderMapper = _interopRequireDefault(__webpack_require__(/*! ./order-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/order-mapper.js"));
var _paymentMapper = _interopRequireDefault(__webpack_require__(/*! ./payment-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/payment-mapper.js"));
var _storeMapper = _interopRequireDefault(__webpack_require__(/*! ./store-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/store-mapper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PayloadMapper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {CustomerMapper} customerMapper
   * @param {OrderMapper} orderMapper
   * @param {PaymentMapper} paymentMapper
   * @param {StoreMapper} storeMapper
   */
  function PayloadMapper(customerMapper, orderMapper, paymentMapper, storeMapper) {
    _classCallCheck(this, PayloadMapper);
    /**
     * @private
     * @type {CustomerMapper}
     */
    this.customerMapper = customerMapper;

    /**
     * @private
     * @type {OrderMapper}
     */
    this.orderMapper = orderMapper;

    /**
     * @private
     * @type {PaymentMapper}
     */
    this.paymentMapper = paymentMapper;

    /**
     * @private
     * @type {StoreMapper}
     */
    this.storeMapper = storeMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @returns {Object}
   */
  return _createClass(PayloadMapper, [{
    key: "mapToPayload",
    value: function mapToPayload(data) {
      var _data$order = data.order,
        order = _data$order === void 0 ? {} : _data$order,
        additionalAction = data.additionalAction;
      return (0, _utils.omitNil)({
        customer: this.customerMapper.mapToCustomer(data),
        notify_url: order.callbackUrl,
        order: this.orderMapper.mapToOrder(data),
        payment: this.paymentMapper.mapToPayment(data),
        store: this.storeMapper.mapToStore(data),
        additional_action: additionalAction
      });
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToHeaders",
    value: function mapToHeaders(data) {
      var authToken = data.authToken;
      return (0, _utils.omitNil)({
        Authorization: authToken
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {PayloadMapper}
     */
    function create() {
      var customerMapper = _customerMapper.default.create();
      var orderMapper = _orderMapper.default.create();
      var paymentMapper = _paymentMapper.default.create();
      var storeMapper = _storeMapper.default.create();
      return new PayloadMapper(customerMapper, orderMapper, paymentMapper, storeMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/payment-mapper.js":
/*!*******************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/payment-mapper.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectAssign = _interopRequireDefault(__webpack_require__(/*! object-assign */ "../checkout-sdk-js/node_modules/object-assign/index.js"));
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
var _paymentMethodIdMapper = _interopRequireDefault(__webpack_require__(/*! ../../payment-method-mappers/payment-method-id-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-mappers/payment-method-id-mapper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PaymentMapper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {PaymentMethodIdMapper} paymentMethodIdMapper
   * @returns {void}
   */
  function PaymentMapper(paymentMethodIdMapper) {
    _classCallCheck(this, PaymentMapper);
    /**
     * @private
     * @type {PaymentMethodIdMapper}
     */
    this.paymentMethodIdMapper = paymentMethodIdMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @returns {Object}
   */
  return _createClass(PaymentMapper, [{
    key: "mapToPayment",
    value: function mapToPayment(data) {
      var _data$order = data.order,
        order = _data$order === void 0 ? {} : _data$order,
        _data$orderMeta = data.orderMeta,
        orderMeta = _data$orderMeta === void 0 ? {} : _data$orderMeta,
        _data$payment = data.payment,
        payment = _data$payment === void 0 ? {} : _data$payment,
        _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === void 0 ? {} : _data$paymentMethod;
      var payload = {
        device_info: payment.deviceSessionId ? payment.deviceSessionId : null,
        device: orderMeta.deviceFingerprint ? {
          fingerprint_id: orderMeta.deviceFingerprint
        } : null,
        gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
        notify_url: order.callbackUrl,
        return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null),
        vault_payment_instrument: !payment.instrumentId ? payment.shouldSaveInstrument : null,
        set_as_default_stored_instrument: payment.instrumentId || payment.shouldSaveInstrument ? payment.shouldSetAsDefaultInstrument : null
      };
      var method = paymentMethod.method;
      if (method) {
        (0, _objectAssign.default)(payload, {
          method: method
        });
      }
      var nonce = payment.nonce || paymentMethod.nonce;
      if (payment.formattedPayload) {
        (0, _objectAssign.default)(payload, payment.formattedPayload);
      } else if (payment.instrumentId) {
        (0, _objectAssign.default)(payload, {
          bigpay_token: this.mapToBigPayToken(data)
        });
      } else if (nonce) {
        (0, _objectAssign.default)(payload, {
          credit_card_token: {
            token: nonce
          }
        });
      } else if (payment.cryptogramId) {
        (0, _objectAssign.default)(payload, {
          credit_card_cryptogram: this.mapToCryptogram(data)
        });
      } else {
        (0, _objectAssign.default)(payload, {
          credit_card: this.mapToCreditCard(data)
        });
      }
      if (payment.browser_info) {
        (0, _objectAssign.default)(payload, {
          browser_info: payment.browser_info
        });
      }
      return (0, _utils.omitNil)(payload);
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToCreditCard",
    value: function mapToCreditCard(data) {
      var _data$payment2 = data.payment,
        payment = _data$payment2 === void 0 ? {} : _data$payment2;
      return (0, _utils.omitNil)({
        account_name: payment.ccName,
        month: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.month) : null,
        number: payment.ccNumber,
        verification_value: payment.ccCvv,
        year: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.year) : null,
        customer_code: payment.ccCustomerCode,
        three_d_secure: payment.threeDSecure,
        hosted_form_nonce: payment.hostedFormNonce
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @return {Object}
     */
  }, {
    key: "mapToBigPayToken",
    value: function mapToBigPayToken(_ref) {
      var payment = _ref.payment;
      return (0, _utils.omitNil)({
        credit_card_number_confirmation: payment.ccNumber,
        token: payment.instrumentId,
        verification_value: payment.ccCvv,
        verification_nonce: payment.nonce,
        three_d_secure: payment.threeDSecure,
        hosted_form_nonce: payment.hostedFormNonce,
        token_type: payment.tokenType
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @return {Object}
     */
  }, {
    key: "mapToCryptogram",
    value: function mapToCryptogram(_ref2) {
      var payment = _ref2.payment;
      return (0, _utils.omitNil)({
        payment_cryptogram: payment.cryptogramId,
        eci: payment.eci,
        xid: payment.transactionId,
        month: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.month) : null,
        number: payment.ccNumber,
        year: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.year) : null,
        account_mask: payment.accountMask
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @returns {PaymentMapper}
     */
    function create() {
      var paymentMethodIdMapper = _paymentMethodIdMapper.default.create();
      return new PaymentMapper(paymentMethodIdMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/store-mapper.js":
/*!*****************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v1/payment-mappers/store-mapper.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StoreMapper = exports["default"] = /*#__PURE__*/function () {
  function StoreMapper() {
    _classCallCheck(this, StoreMapper);
  }
  return _createClass(StoreMapper, [{
    key: "mapToStore",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToStore(data) {
      var _data$store = data.store,
        store = _data$store === void 0 ? {} : _data$store;
      return (0, _utils.omitNil)({
        hash: store.storeHash,
        id: store.storeId ? (0, _utils.toString)(store.storeId) : null,
        name: store.storeName
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {StoreMapper}
     */
    function create() {
      return new StoreMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/cart-mapper.js":
/*!****************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/cart-mapper.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CartMapper = exports["default"] = /*#__PURE__*/function () {
  function CartMapper() {
    _classCallCheck(this, CartMapper);
  }
  return _createClass(CartMapper, [{
    key: "mapToCart",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToCart(data) {
      var _data$cart = data.cart,
        cart = _data$cart === void 0 ? {} : _data$cart;
      return (0, _utils.omitNil)({
        currency_code: cart.currency,
        items: this.mapToItems(data),
        totals: this.mapToOrderTotals(data)
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object[]}
     */
  }, {
    key: "mapToItems",
    value: function mapToItems(data) {
      var _this = this;
      var _data$cart2 = data.cart,
        cart = _data$cart2 === void 0 ? {
          items: []
        } : _data$cart2;
      return cart.items.map(function (itemData) {
        return (0, _utils.omitNil)({
          discount_amount: itemData.integerDiscount,
          name: itemData.name,
          price: itemData.integerAmount,
          unit_price: itemData.integerUnitPrice,
          quantity: itemData.quantity,
          sku: itemData.sku,
          tax_amount: itemData.integerTax,
          amount: itemData.integerAmountAfterDiscount,
          type: _this.mapToType(itemData)
        });
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToOrderTotals",
    value: function mapToOrderTotals(data) {
      var _data$cart3 = data.cart,
        cart = _data$cart3 === void 0 ? {} : _data$cart3;
      return (0, _utils.omitNil)({
        discount_total: cart.discount ? cart.discount.integerAmount : null,
        grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : null,
        shipping_total: cart.shipping ? cart.shipping.integerAmount : null,
        subtotal: cart.subtotal ? cart.subtotal.integerAmount : null,
        surcharge_total: cart.handling ? cart.handling.integerAmount : null,
        tax_total: cart.taxTotal ? cart.taxTotal.integerAmount : null
      });
    }

    /**
     * @private
     * @param {Object} itemData
     * @returns {Object}
     */
  }, {
    key: "mapToType",
    value: function mapToType(itemData) {
      var types = {
        ItemPhysicalEntity: 'physical',
        ItemDigitalEntity: 'digital',
        ItemGiftCertificateEntity: 'gift_card'
      };
      return types[itemData.type];
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {CartMapper}
     */
    function create() {
      return new CartMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/client-token-mapper.js":
/*!************************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/client-token-mapper.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
var _cartMapper = _interopRequireDefault(__webpack_require__(/*! ./cart-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/cart-mapper.js"));
var _gatewayMapper = _interopRequireDefault(__webpack_require__(/*! ./gateway-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/gateway-mapper.js"));
var _quoteMapper = _interopRequireDefault(__webpack_require__(/*! ./quote-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/quote-mapper.js"));
var _storeMapper = _interopRequireDefault(__webpack_require__(/*! ./store-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/store-mapper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ClientTokenMapper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {CartMapper} cartMapper
   * @param {GatewayMapper} gatewayMapper
   * @param {QuoteMapper} quoteMapper
   * @param {StoreMapper} storeMapper
   */
  function ClientTokenMapper(cartMapper, gatewayMapper, quoteMapper, storeMapper) {
    _classCallCheck(this, ClientTokenMapper);
    /**
     * @private
     * @type {CartMapper}
     */
    this.cartMapper = cartMapper;

    /**
     * @private
     * @type {GatewayMapper}
     */
    this.gatewayMapper = gatewayMapper;

    /**
     * @private
     * @type {QuoteMapper}
     */
    this.quoteMapper = quoteMapper;

    /**
     * @private
     * @type {StoreMapper}
     */
    this.storeMapper = storeMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @returns {Object}
   */
  return _createClass(ClientTokenMapper, [{
    key: "mapToClientToken",
    value: function mapToClientToken(data) {
      return (0, _utils.omitNil)({
        cart: this.cartMapper.mapToCart(data),
        gateway: this.gatewayMapper.mapToGateway(data),
        quote: this.quoteMapper.mapToQuote(data),
        store: this.storeMapper.mapToStore(data)
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {ClientTokenMapper}
     */
    function create() {
      var cartMapper = _cartMapper.default.create();
      var gatewayMapper = _gatewayMapper.default.create();
      var quoteMapper = _quoteMapper.default.create();
      var storeMapper = _storeMapper.default.create();
      return new ClientTokenMapper(cartMapper, gatewayMapper, quoteMapper, storeMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/gateway-mapper.js":
/*!*******************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/gateway-mapper.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
var _paymentMethodIdMapper = _interopRequireDefault(__webpack_require__(/*! ../../payment-method-mappers/payment-method-id-mapper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/payment-method-mappers/payment-method-id-mapper.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GatewayMapper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {PaymentMethodIdMapper} paymentMethodIdMapper
   * @returns {void}
   */
  function GatewayMapper(paymentMethodIdMapper) {
    _classCallCheck(this, GatewayMapper);
    /**
     * @private
     * @type {PaymentMethodIdMapper}
     */
    this.paymentMethodIdMapper = paymentMethodIdMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @returns {Object}
   */
  return _createClass(GatewayMapper, [{
    key: "mapToGateway",
    value: function mapToGateway(data) {
      var _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === void 0 ? {} : _data$paymentMethod;
      return (0, _utils.omitNil)({
        name: this.paymentMethodIdMapper.mapToId(paymentMethod)
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {GatewayMapper}
     */
    function create() {
      var paymentMethodIdMapper = _paymentMethodIdMapper.default.create();
      return new GatewayMapper(paymentMethodIdMapper);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/quote-mapper.js":
/*!*****************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/quote-mapper.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var QuoteMapper = exports["default"] = /*#__PURE__*/function () {
  function QuoteMapper() {
    _classCallCheck(this, QuoteMapper);
  }
  return _createClass(QuoteMapper, [{
    key: "mapToQuote",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToQuote(data) {
      return (0, _utils.omitNil)({
        billing_address: this.mapToAddress(data, 'billingAddress'),
        shipping_address: this.mapToAddress(data, 'shippingAddress')
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @param {string} addressKey
     * @returns {Object}
     */
  }, {
    key: "mapToAddress",
    value: function mapToAddress(data, addressKey) {
      var _data$customer = data.customer,
        customer = _data$customer === void 0 ? {} : _data$customer;
      var address = data[addressKey] || {};
      return (0, _utils.omitNil)({
        address_line_1: address.addressLine1,
        address_line_2: address.addressLine2,
        city: address.city,
        company: address.company,
        country_code: address.countryCode,
        email: customer.email,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        postal_code: address.postCode,
        state: address.province
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {QuoteMapper}
     */
    function create() {
      return new QuoteMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/store-mapper.js":
/*!*****************************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/payment/v2/payment-mappers/store-mapper.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StoreMapper = exports["default"] = /*#__PURE__*/function () {
  function StoreMapper() {
    _classCallCheck(this, StoreMapper);
  }
  return _createClass(StoreMapper, [{
    key: "mapToStore",
    value:
    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    function mapToStore(data) {
      return (0, _utils.omitNil)({
        locale: this.mapToLocale(data),
        store_identity: this.mapToIdentity(data),
        urls: this.mapToUrls(data)
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToLocale",
    value: function mapToLocale(data) {
      var _data$store = data.store,
        store = _data$store === void 0 ? {} : _data$store;
      return (0, _utils.omitNil)({
        country_code: store.countryCode,
        currency_code: store.currencyCode,
        language_code: store.storeLanguage
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToIdentity",
    value: function mapToIdentity(data) {
      var _data$store2 = data.store,
        store = _data$store2 === void 0 ? {} : _data$store2;
      return (0, _utils.omitNil)({
        id: store.storeId ? (0, _utils.toNumber)(store.storeId) : null,
        name: store.storeName
      });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
  }, {
    key: "mapToUrls",
    value: function mapToUrls(data) {
      var _data$store3 = data.store,
        store = _data$store3 === void 0 ? {} : _data$store3;
      return (0, _utils.omitNil)({
        cart: store.cartLink,
        checkout: store.checkoutLink,
        confirmation: store.orderConfirmationLink,
        home: store.shopPath
      });
    }
  }], [{
    key: "create",
    value:
    /**
     * @returns {StoreMapper}
     */
    function create() {
      return new StoreMapper();
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/store-request-sender.js":
/*!****************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/store-request-sender.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _requestSender = _interopRequireDefault(__webpack_require__(/*! ../common/http-request/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/request-sender.js"));
var _methodTypes = __webpack_require__(/*! ../common/http-request/method-types */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/http-request/method-types.js");
var _urlHelper = _interopRequireDefault(__webpack_require__(/*! ./url-helper */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/url-helper.js"));
var _mappers = __webpack_require__(/*! ./v2/mappers */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/v2/mappers/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StoreRequestSender = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {UrlHelper} urlHelper
   * @param {RequestSender} requestSender
   * @returns {void}
   */
  function StoreRequestSender(urlHelper, requestSender) {
    _classCallCheck(this, StoreRequestSender);
    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;

    /**
     * @private
     * @type {RequestSender}
     */
    this.requestSender = requestSender;
  }

  /**
   * @param {Object} data
   * @param {Function} [callback]
   * @return {void}
   */
  return _createClass(StoreRequestSender, [{
    key: "loadInstruments",
    value: function loadInstruments(data, callback) {
      var url = this.urlHelper.getInstrumentsUrl(data.storeId, data.customerId, data.currencyCode);
      var options = {
        headers: (0, _mappers.mapToHeaders)(data)
      };
      this.requestSender.sendRequest(url, null, options, callback);
    }

    /**
     * @param {Object} data
     * @param {Function} [callback]
     * @return {void}
     */
  }, {
    key: "loadInstrumentsWithAddress",
    value: function loadInstrumentsWithAddress(data, callback) {
      var url = this.urlHelper.getTrustedShippingAddressUrl(data.storeId, data.customerId, data.currencyCode);
      var payload = (0, _mappers.mapToTrustedShippingAddressPayload)(data);
      var options = {
        method: _methodTypes.POST,
        headers: (0, _mappers.mapToHeaders)(data)
      };
      this.requestSender.postRequest(url, payload, options, callback);
    }

    /**
     * @param {Object} data
     * @param {Function} [callback]
     * @return {void}
     */
  }, {
    key: "deleteShopperInstrument",
    value: function deleteShopperInstrument(data, callback) {
      var url = this.urlHelper.getInstrumentByIdUrl(data.storeId, data.customerId, data.instrumentId, data.currencyCode);
      var options = {
        method: _methodTypes.DELETE,
        headers: (0, _mappers.mapToHeaders)(data)
      };
      this.requestSender.sendRequest(url, null, options, callback);
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @returns {StoreRequestSender}
     */
    function create(config) {
      var urlHelper = _urlHelper.default.create(config);
      var requestSender = _requestSender.default.create();
      return new StoreRequestSender(urlHelper, requestSender);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/url-helper.js":
/*!******************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/url-helper.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UrlHelper = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   * @param {string} config.host
   * @returns {void}
   */
  function UrlHelper(config) {
    _classCallCheck(this, UrlHelper);
    /**
     * @private
     * @type {Object}
     */
    this.config = config;
  }

  /**
   * @private
   * @returns {string}
   * @throws {Error}
   */
  return _createClass(UrlHelper, [{
    key: "host",
    get: function get() {
      if (!this.config || !this.config.host) {
        throw new Error('Host URL unavailable or not supplied.');
      }
      return this.config.host;
    }

    /**
     * @param {number} storeId
     * @param {number} customerId
     * @param {string} currencyCode
     * @returns {string}
     */
  }, {
    key: "getInstrumentsUrl",
    value: function getInstrumentsUrl(storeId, customerId, currencyCode) {
      return "".concat(this.host, "/api/v3/stores/").concat(storeId, "/shoppers/").concat(customerId, "/instruments?currency_code=").concat(currencyCode);
    }

    /**
     * @param {number} storeId
     * @param {number} customerId
     * @param {string} currencyCode
     * @return {string}
     */
  }, {
    key: "getTrustedShippingAddressUrl",
    value: function getTrustedShippingAddressUrl(storeId, customerId, currencyCode) {
      return "".concat(this.host, "/api/v3/stores/").concat(storeId, "/shoppers/").concat(customerId, "/instruments/trusted_shipping_address?currency_code=").concat(currencyCode);
    }

    /**
     * @param {number} storeId
     * @param {number} customerId
     * @param {number} instrumentId
     * @param {string} currencyCode
     * @returns {string}
     */
  }, {
    key: "getInstrumentByIdUrl",
    value: function getInstrumentByIdUrl(storeId, customerId, instrumentId, currencyCode) {
      return "".concat(this.host, "/api/v2/stores/").concat(storeId, "/shoppers/").concat(customerId, "/instruments/").concat(instrumentId, "?currency_code=").concat(currencyCode);
    }
  }], [{
    key: "create",
    value:
    /**
     * @param {Object} config
     * @param {string} config.host
     * @returns {CustomerMapper}
     */
    function create(config) {
      return new UrlHelper(config);
    }
  }]);
}();


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/v2/mappers/index.js":
/*!************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/store/v2/mappers/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mapToHeaders = mapToHeaders;
exports.mapToInstrumentPayload = mapToInstrumentPayload;
exports.mapToTrustedShippingAddressPayload = mapToTrustedShippingAddressPayload;
var _utils = __webpack_require__(/*! ../../../common/utils */ "../checkout-sdk-js/node_modules/@bigcommerce/bigpay-client/lib/common/utils/index.js");
/**
 * @param {Object} [data={}]
 * @param {Object} data.billingAddress
 * @param {CreditCard} data.creditCard
 * @param {boolean} data.defaultInstrument
 * @param {string} data.providerName
 * @return {Object}
 */
function mapToInstrumentPayload() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var providerName = data.providerName,
    defaultInstrument = data.defaultInstrument;
  var provider = (0, _utils.omitNil)({
    name: providerName
  });
  return (0, _utils.omitNil)({
    provider: provider,
    credit_card: mapToCreditCard(data),
    billing_address: mapToAddress(data.billingAddress),
    default_instrument: defaultInstrument
  });
}

/**
 * @param {Object} [data={}]
 * @param {Object} data.shippingAddress
 * @return {Object}
 */
function mapToTrustedShippingAddressPayload() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (Array.isArray(data.shippingAddress)) {
    return (0, _utils.omitNil)({
      shipping_addresses: data.shippingAddress.map(function (address) {
        return mapToAddress(address);
      })
    });
  }
  return (0, _utils.omitNil)({
    shipping_address: mapToAddress(data.shippingAddress)
  });
}

/**
 * @param {Object} data
 * @param {string} data.authToken
 * @return {Object}
 */
function mapToHeaders() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    Authorization = _ref.authToken;
  return (0, _utils.omitNil)({
    Authorization: Authorization
  });
}

/**
 * @param {AddressData} address
 * @return {Object}
 */
function mapToAddress() {
  var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var state = mapToState(address.provinceCode, address.province);
  return (0, _utils.omitNil)({
    address_line_1: address.addressLine1,
    address_line_2: address.addressLine2,
    city: address.city,
    company: address.company,
    country_code: address.countryCode,
    email: address.email,
    first_name: address.firstName,
    last_name: address.lastName,
    phone: address.phone,
    postal_code: address.postCode,
    state: state
  });
}

/**
 * @param {string} code
 * @param {string} name
 * @return {Object}
 */
function mapToState(code, name) {
  return (0, _utils.omitNil)({
    code: code,
    name: name
  });
}

/**
 * @param {Object} data
 * @param {CreditCard} data.creditCard
 * @return {Object}
 */
function mapToCreditCard(_ref2) {
  var _ref2$creditCard = _ref2.creditCard,
    creditCard = _ref2$creditCard === void 0 ? {} : _ref2$creditCard;
  var threeDSecure = (0, _utils.omitNil)(creditCard.threeDSecure);
  return (0, _utils.omitNil)({
    cardholder_name: creditCard.cardholderName,
    number: creditCard.number,
    month: creditCard.month,
    year: creditCard.year,
    verification_code: creditCard.verificationCode,
    issue_month: creditCard.issueMonth,
    issue_year: creditCard.issueYear,
    issue_number: creditCard.issueNumber,
    track_data: creditCard.trackData,
    is_manual_entry: creditCard.isManualEntry,
    icc_data: creditCard.iccData,
    fallback_reason: creditCard.fallbackReason,
    is_contactless: creditCard.isContactless,
    encrypted_pin_cryptogram: creditCard.encryptedPinCryptogram,
    encrypted_pin_ksn: creditCard.encryptedPinKsn,
    three_d_secure: threeDSecure
  });
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/combine-reducers.js":
/*!***************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/combine-reducers.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var lodash_1 = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
var shallowEqual = __webpack_require__(/*! shallowequal */ "../checkout-sdk-js/node_modules/shallowequal/index.js");
function combineReducers(reducers, options) {
    var _a = (options || {}).equalityCheck, equalityCheck = _a === void 0 ? shallowEqual : _a;
    return function (state, action) {
        return Object.keys(reducers).reduce(function (result, key) {
            var _a;
            var reducer = reducers[key];
            var currentState = state ? state[key] : undefined;
            var newState = reducer(currentState, action);
            if (equalityCheck(currentState, newState) && result) {
                return result;
            }
            return lodash_1.assign({}, result, (_a = {}, _a[key] = newState, _a));
        }, state || {});
    };
}
exports["default"] = combineReducers;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/compose-reducers.js":
/*!***************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/compose-reducers.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/tslib/tslib.es6.mjs");
var lodash_1 = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
var shallowEqual = __webpack_require__(/*! shallowequal */ "../checkout-sdk-js/node_modules/shallowequal/index.js");
function composeReducers() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var reducers = args;
    var options = {};
    if (typeof args[args.length - 1] === 'object') {
        reducers = args.slice(0, -1);
        options = tslib_1.__assign({}, options, args[args.length - 1]);
    }
    var _a = options.equalityCheck, equalityCheck = _a === void 0 ? shallowEqual : _a;
    return function (state, action) {
        var newState = lodash_1.flowRight(reducers.map(function (reducer) { return lodash_1.curryRight(reducer, 2)(action); }))(state);
        return equalityCheck(state, newState) ? state : newState;
    };
}
exports["default"] = composeReducers;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-action.js":
/*!************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-action.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/tslib/tslib.es6.mjs");
var lodash_1 = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
function createAction(type, payload, meta) {
    if (typeof type !== 'string' || type === '') {
        throw new Error('`type` must be a string');
    }
    return tslib_1.__assign({ type: type }, lodash_1.omitBy({ payload: payload, meta: meta }, function (value) { return value === undefined; }));
}
exports["default"] = createAction;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-data-store.js":
/*!****************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-data-store.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var combine_reducers_1 = __webpack_require__(/*! ./combine-reducers */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/combine-reducers.js");
var data_store_1 = __webpack_require__(/*! ./data-store */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/data-store.js");
function createDataStore(reducer, initialState, options) {
    if (typeof reducer === 'function') {
        return new data_store_1.default(reducer, initialState, options);
    }
    return new data_store_1.default(combine_reducers_1.default(reducer, { equalityCheck: options && options.equalityCheck }), initialState, options);
}
exports["default"] = createDataStore;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-error-action.js":
/*!******************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-error-action.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/tslib/tslib.es6.mjs");
var create_action_1 = __webpack_require__(/*! ./create-action */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-action.js");
function createErrorAction(type, payload, meta) {
    return tslib_1.__assign({}, create_action_1.default(type, payload, meta), { error: true });
}
exports["default"] = createErrorAction;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/data-store.js":
/*!*********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/data-store.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/tslib/tslib.es6.mjs");
var lodash_1 = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "../checkout-sdk-js/node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../checkout-sdk-js/node_modules/rxjs/_esm5/operators/index.js");
var shallowEqual = __webpack_require__(/*! shallowequal */ "../checkout-sdk-js/node_modules/shallowequal/index.js");
var deep_freeze_1 = __webpack_require__(/*! ./deep-freeze */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/deep-freeze.js");
var is_observable_action_like_1 = __webpack_require__(/*! ./is-observable-action-like */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/is-observable-action-like.js");
var noop_action_transformer_1 = __webpack_require__(/*! ./noop-action-transformer */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/noop-action-transformer.js");
var noop_state_transformer_1 = __webpack_require__(/*! ./noop-state-transformer */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/noop-state-transformer.js");
var DataStore = (function () {
    function DataStore(reducer, initialState, options) {
        if (initialState === void 0) { initialState = {}; }
        var _this = this;
        this._reducer = reducer;
        this._options = tslib_1.__assign({ actionTransformer: noop_action_transformer_1.default, equalityCheck: shallowEqual, shouldWarnMutation: true, stateTransformer: noop_state_transformer_1.default }, options);
        this._state$ = new rxjs_1.BehaviorSubject(this._options.stateTransformer(initialState));
        this._notification$ = new rxjs_1.Subject();
        this._dispatchers = {};
        this._dispatchQueue$ = new rxjs_1.Subject();
        this._errors = {};
        this._dispatchQueue$
            .pipe(operators_1.mergeMap(function (dispatcher$) { return dispatcher$.pipe(operators_1.concatMap(function (action$) { return action$; })); }), operators_1.filter(function (action) { return !!action.type; }), operators_1.scan(function (states, action) {
            return _this._transformStates(states, action);
        }, {
            state: initialState,
            transformedState: this._state$.getValue(),
        }), operators_1.distinctUntilChanged(function (_a, _b) {
            var stateA = _a.state;
            var stateB = _b.state;
            return _this._options.equalityCheck(stateA, stateB);
        }), operators_1.map(function (_a) {
            var transformedState = _a.transformedState;
            return transformedState;
        }))
            .subscribe(this._state$);
        this.dispatch({ type: 'INIT' });
    }
    DataStore.prototype.dispatch = function (action, options) {
        if (is_observable_action_like_1.default(action)) {
            return this._dispatchObservableAction(action, options);
        }
        if (typeof action === 'function') {
            return this._dispatchThunkAction(action, options);
        }
        return this._dispatchAction(action);
    };
    DataStore.prototype.getState = function () {
        return this._state$.getValue();
    };
    DataStore.prototype.notifyState = function () {
        this._notification$.next(this.getState());
    };
    DataStore.prototype.subscribe = function (subscriber) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var options = typeof args[0] === 'object' ? args[0] : undefined;
        var filters = options ? (options.filters || []) : args;
        var state$ = this._state$;
        if (filters.length > 0) {
            state$ = state$.pipe(operators_1.distinctUntilChanged(function (stateA, stateB) {
                return filters.every(function (filterFn) {
                    return _this._options.equalityCheck(filterFn(stateA), filterFn(stateB));
                });
            }));
        }
        if (options && options.initial === false) {
            state$ = state$.pipe(operators_1.skip(1));
        }
        var subscriptions = [
            state$.subscribe(subscriber),
            this._notification$.subscribe(subscriber),
        ];
        return function () { return subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); }); };
    };
    DataStore.prototype._transformStates = function (states, action) {
        try {
            var newState = this._options.shouldWarnMutation === false ?
                this._reducer(states.state, action) :
                deep_freeze_1.default(this._reducer(states.state, action), {
                    equalityCheck: this._options.equalityCheck,
                    previousValue: states.state,
                });
            var transformedState = this._options.stateTransformer(newState);
            return { state: newState, transformedState: transformedState };
        }
        catch (error) {
            this._getDispatchError(action.meta && action.meta.queueId).next(error);
            return { state: states.state, transformedState: states.transformedState };
        }
    };
    DataStore.prototype._dispatchAction = function (action) {
        return this._dispatchObservableAction(action.error ? rxjs_1.throwError(action) : rxjs_1.of(action));
    };
    DataStore.prototype._dispatchObservableAction = function (action$, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var error$ = _this._getDispatchError(options.queueId);
            var transformedAction$ = _this._options.actionTransformer(rxjs_1.from(action$).pipe(operators_1.map(function (action) {
                return options.queueId ?
                    lodash_1.merge({}, action, { meta: { queueId: options.queueId } }) :
                    action;
            })));
            _this._getDispatcher(options.queueId).next(rxjs_1.from(transformedAction$)
                .pipe(operators_1.map(function (action, index) {
                if (index === 0) {
                    error$.pipe(operators_1.first()).subscribe(reject);
                }
                if (action.error) {
                    reject(action.payload);
                }
                return action;
            }), operators_1.catchError(function (action) {
                reject(action instanceof Error ? action : action.payload);
                return rxjs_1.of(action);
            }), operators_1.tap({
                complete: function () {
                    resolve(_this.getState());
                },
            })));
        });
    };
    DataStore.prototype._dispatchThunkAction = function (thunkAction, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._dispatchObservableAction(rxjs_1.defer(function () { return thunkAction(_this); }), options);
    };
    DataStore.prototype._getDispatcher = function (queueId) {
        if (queueId === void 0) { queueId = 'default'; }
        if (!this._dispatchers[queueId]) {
            this._dispatchers[queueId] = new rxjs_1.Subject();
            this._dispatchQueue$.next(this._dispatchers[queueId]);
        }
        return this._dispatchers[queueId];
    };
    DataStore.prototype._getDispatchError = function (queueId) {
        if (queueId === void 0) { queueId = 'default'; }
        if (!this._errors[queueId]) {
            this._errors[queueId] = new rxjs_1.Subject();
        }
        return this._errors[queueId];
    };
    return DataStore;
}());
exports["default"] = DataStore;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/deep-freeze.js":
/*!**********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/deep-freeze.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var lodash_1 = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
var shallowEqual = __webpack_require__(/*! shallowequal */ "../checkout-sdk-js/node_modules/shallowequal/index.js");
function deepFreeze(object, options) {
    try {
        var _a = options || {}, _b = _a.equalityCheck, equalityCheck_1 = _b === void 0 ? shallowEqual : _b, _c = _a.previousValue, previousValue_1 = _c === void 0 ? null : _c;
        if (equalityCheck_1(object, previousValue_1) && Object.isFrozen(previousValue_1)) {
            return previousValue_1;
        }
        if (Object.isFrozen(object) || (!Array.isArray(object) && !lodash_1.isPlainObject(object))) {
            return object;
        }
        if (Array.isArray(object)) {
            return Object.freeze(object.map(function (value, index) {
                return deepFreeze(value, {
                    equalityCheck: equalityCheck_1,
                    previousValue: Array.isArray(previousValue_1) ? previousValue_1[index] : undefined,
                });
            }));
        }
        return Object.freeze(Object.getOwnPropertyNames(object).reduce(function (result, key) {
            result[key] = deepFreeze(object[key], {
                equalityCheck: equalityCheck_1,
                previousValue: previousValue_1 && previousValue_1.hasOwnProperty(key) ?
                    previousValue_1[key] :
                    undefined,
            });
            return result;
        }, {}));
    }
    catch (error) {
        if (error instanceof TypeError) {
            return object;
        }
        throw error;
    }
}
exports["default"] = deepFreeze;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/index.js":
/*!****************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var data_store_1 = __webpack_require__(/*! ./data-store */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/data-store.js");
exports.DataStore = data_store_1.default;
var combine_reducers_1 = __webpack_require__(/*! ./combine-reducers */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/combine-reducers.js");
exports.combineReducers = combine_reducers_1.default;
var compose_reducers_1 = __webpack_require__(/*! ./compose-reducers */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/compose-reducers.js");
exports.composeReducers = compose_reducers_1.default;
var create_action_1 = __webpack_require__(/*! ./create-action */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-action.js");
exports.createAction = create_action_1.default;
var create_data_store_1 = __webpack_require__(/*! ./create-data-store */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-data-store.js");
exports.createDataStore = create_data_store_1.default;
var create_error_action_1 = __webpack_require__(/*! ./create-error-action */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/create-error-action.js");
exports.createErrorAction = create_error_action_1.default;
var deep_freeze_1 = __webpack_require__(/*! ./deep-freeze */ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/deep-freeze.js");
exports.deepFreeze = deep_freeze_1.default;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/is-observable-action-like.js":
/*!************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/is-observable-action-like.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isObservableActionLike(action) {
    return (typeof action.subscribe === 'function' ||
        typeof action.then === 'function');
}
exports["default"] = isObservableActionLike;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/noop-action-transformer.js":
/*!**********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/noop-action-transformer.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function noopActionTransformer(action) {
    return action;
}
exports["default"] = noopActionTransformer;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/noop-state-transformer.js":
/*!*********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/data-store/lib/noop-state-transformer.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function noopStateTransformer(state) {
    return state;
}
exports["default"] = noopStateTransformer;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/create-form-poster.js":
/*!******************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/create-form-poster.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var form_builder_1 = __webpack_require__(/*! ./form-builder */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-builder.js");
var form_poster_1 = __webpack_require__(/*! ./form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-poster.js");
function createFormPoster(options) {
    var formBuilder = new form_builder_1.default();
    var formPoster = new form_poster_1.default(formBuilder, options);
    return formPoster;
}
exports["default"] = createFormPoster;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-builder.js":
/*!************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-builder.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormBuilder = (function () {
    function FormBuilder() {
    }
    FormBuilder.prototype.build = function (url, data, target) {
        var _this = this;
        var form = document.createElement('form');
        form.style.display = 'none';
        form.setAttribute('action', url);
        form.setAttribute('method', 'POST');
        form.setAttribute('target', target || '_top');
        Object.keys(data)
            .forEach(function (key) {
            var value = data[key];
            form.appendChild(_this._createInput(value, key));
        });
        return form;
    };
    FormBuilder.prototype._createInput = function (value, key) {
        var input = document.createElement('input');
        input.setAttribute('name', key);
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', value);
        return input;
    };
    return FormBuilder;
}());
exports["default"] = FormBuilder;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-poster.js":
/*!***********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-poster.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var url_utils_1 = __webpack_require__(/*! ./url-utils */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/url-utils.js");
var FormPoster = (function () {
    function FormPoster(_formBuilder, _options) {
        this._formBuilder = _formBuilder;
        this._options = _options;
    }
    FormPoster.prototype.postForm = function (url, data, callback, target) {
        var form = this._formBuilder.build(this._prependHost(url), data, target);
        window.addEventListener('unload', function handleUnload() {
            window.removeEventListener('unload', handleUnload);
            if (callback) {
                callback();
            }
        });
        document.body.appendChild(form);
        form.submit();
    };
    FormPoster.prototype._prependHost = function (url) {
        if (!this._options || !this._options.host || (0, url_utils_1.isAbsoluteUrl)(url)) {
            return url;
        }
        return (0, url_utils_1.joinPaths)(this._options.host, url);
    };
    return FormPoster;
}());
exports["default"] = FormPoster;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js":
/*!*****************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormPoster = exports.createFormPoster = void 0;
var create_form_poster_1 = __webpack_require__(/*! ./create-form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/create-form-poster.js");
Object.defineProperty(exports, "createFormPoster", ({ enumerable: true, get: function () { return create_form_poster_1.default; } }));
var form_poster_1 = __webpack_require__(/*! ./form-poster */ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/form-poster.js");
Object.defineProperty(exports, "FormPoster", ({ enumerable: true, get: function () { return form_poster_1.default; } }));


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/url-utils.js":
/*!*********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/form-poster/lib/url-utils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.joinPaths = exports.isAbsoluteUrl = void 0;
function isAbsoluteUrl(url) {
    return /^https?:\/\//.test(url);
}
exports.isAbsoluteUrl = isAbsoluteUrl;
function joinPaths(pathA, pathB) {
    return "".concat(removeTrailingSlash(pathA), "/").concat(removeLeadingSlash(pathB));
}
exports.joinPaths = joinPaths;
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
function removeLeadingSlash(path) {
    return path.replace(/^\//, '');
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/cache-key-maps.js":
/*!**********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/cache-key-maps.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isTerminalCacheKeyMap(map) {
    return map.hasOwnProperty('cacheKey');
}
exports.isTerminalCacheKeyMap = isTerminalCacheKeyMap;
function isRootCacheKeyMap(map) {
    return map.hasOwnProperty('parentMap');
}
exports.isRootCacheKeyMap = isRootCacheKeyMap;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/cache-key-resolver.js":
/*!**************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/cache-key-resolver.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/node_modules/tslib/tslib.es6.js");
var lodash_1 = __webpack_require__(/*! lodash */ "../checkout-sdk-js/node_modules/lodash/lodash.js");
var shallowequal_1 = tslib_1.__importDefault(__webpack_require__(/*! shallowequal */ "../checkout-sdk-js/node_modules/shallowequal/index.js"));
var cache_key_maps_1 = __webpack_require__(/*! ./cache-key-maps */ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/cache-key-maps.js");
var CacheKeyResolver = /** @class */ (function () {
    function CacheKeyResolver(options) {
        this._lastId = 0;
        this._map = { maps: [] };
        this._usedMaps = [];
        this._options = tslib_1.__assign({ isEqual: shallowequal_1.default, maxSize: 0, onExpire: lodash_1.noop }, options);
    }
    CacheKeyResolver.prototype.getKey = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = this._resolveMap.apply(this, args);
        var index = result.index, parentMap = result.parentMap;
        var map = result.map;
        if (map && map.cacheKey) {
            map.usedCount++;
        }
        else {
            map = this._generateMap(parentMap, args.slice(index));
        }
        // Keep track of the least used map so we can remove it if the size of
        // the stack exceeds the maximum size.
        this._removeLeastUsedMap(map);
        return map.cacheKey;
    };
    CacheKeyResolver.prototype.getUsedCount = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var map = this._resolveMap.apply(this, args).map;
        return map ? map.usedCount : 0;
    };
    CacheKeyResolver.prototype._resolveMap = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var index = 0;
        var parentMap = this._map;
        // Traverse the tree to find the linked list of maps that match the
        // arguments of the call. Each intermediate or terminal map contains a
        // value that could be used to match with the arguments. The last map in
        // the list (the terminal) should contain a cache key. If it can does
        // not exist, we will return a falsy value so that the caller could
        // handle and generate a new cache key.
        while (parentMap.maps.length) {
            var isMatched = false;
            for (var mapIndex = 0; mapIndex < parentMap.maps.length; mapIndex++) {
                var map = parentMap.maps[mapIndex];
                if (!this._options.isEqual(map.value, args[index])) {
                    continue;
                }
                // Move the most recently used map to the top of the stack for
                // quicker access
                (_a = parentMap.maps).unshift.apply(_a, parentMap.maps.splice(mapIndex, 1));
                if ((args.length === 0 || index === args.length - 1) && cache_key_maps_1.isTerminalCacheKeyMap(map)) {
                    return { index: index, map: map, parentMap: parentMap };
                }
                isMatched = true;
                parentMap = map;
                index++;
                break;
            }
            if (!isMatched) {
                break;
            }
        }
        return { index: index, parentMap: parentMap };
    };
    CacheKeyResolver.prototype._generateMap = function (parent, args) {
        var index = 0;
        var parentMap = parent;
        var map;
        do {
            map = {
                maps: [],
                parentMap: parentMap,
                usedCount: 1,
                value: args[index],
            };
            // Continue to build the tree of maps so that it could be resolved
            // next time when the function is called with the same set of
            // arguments.
            parentMap.maps.unshift(map);
            parentMap = map;
            index++;
        } while (index < args.length);
        var terminalMap = map;
        terminalMap.cacheKey = "" + ++this._lastId;
        return terminalMap;
    };
    CacheKeyResolver.prototype._removeLeastUsedMap = function (recentlyUsedMap) {
        if (!this._options.maxSize) {
            return;
        }
        var index = this._usedMaps.indexOf(recentlyUsedMap);
        this._usedMaps.splice(index === -1 ? 0 : index, index === -1 ? 0 : 1, recentlyUsedMap);
        if (this._usedMaps.length <= this._options.maxSize) {
            return;
        }
        var map = this._usedMaps.pop();
        if (!map) {
            return;
        }
        this._removeMap(map);
        this._options.onExpire(map.cacheKey);
    };
    CacheKeyResolver.prototype._removeMap = function (map) {
        if (!map.parentMap) {
            return;
        }
        map.parentMap.maps.splice(map.parentMap.maps.indexOf(map), 1);
        if (cache_key_maps_1.isRootCacheKeyMap(map.parentMap)) {
            return;
        }
        this._removeMap(map.parentMap);
    };
    return CacheKeyResolver;
}());
exports["default"] = CacheKeyResolver;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/index.js":
/*!*************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var memoize_1 = __webpack_require__(/*! ./memoize */ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/memoize.js");
exports.memoize = memoize_1.default;
exports.memoizeOne = memoize_1.memoizeOne;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/memoize.js":
/*!***************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/memoize.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/node_modules/tslib/tslib.es6.js");
var lodash_memoize_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash.memoize */ "../checkout-sdk-js/node_modules/lodash.memoize/index.js")); // tslint:disable-line:match-default-export-name
var shallowequal_1 = tslib_1.__importDefault(__webpack_require__(/*! shallowequal */ "../checkout-sdk-js/node_modules/shallowequal/index.js"));
var cache_key_resolver_1 = tslib_1.__importDefault(__webpack_require__(/*! ./cache-key-resolver */ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/lib/cache-key-resolver.js"));
function memoize(fn, options) {
    var _a = tslib_1.__assign({ maxSize: 0, isEqual: shallowequal_1.default }, options), maxSize = _a.maxSize, isEqual = _a.isEqual;
    var cache = new Map();
    var resolver = new cache_key_resolver_1.default({
        isEqual: isEqual,
        maxSize: maxSize,
        onExpire: function (key) { return cache.delete(key); },
    });
    var memoized = lodash_memoize_1.default(fn, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return resolver.getKey.apply(resolver, args);
    });
    memoized.cache = cache;
    return memoized;
}
exports["default"] = memoize;
function memoizeOne(fn, options) {
    return memoize(fn, tslib_1.__assign({}, options, { maxSize: 1 }));
}
exports.memoizeOne = memoizeOne;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/memoize/node_modules/tslib/tslib.es6.js":
/*!********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/memoize/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/cache.js":
/*!********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/cache.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultCache: () => (/* binding */ DefaultCache)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js");

var DefaultCache = (function () {
    function DefaultCache() {
        this._cache = {};
    }
    DefaultCache.prototype.read = function (url, options) {
        var cacheKey = this.getKey(url, options.params);
        return this._cache[cacheKey] || null;
    };
    DefaultCache.prototype.write = function (url, options, response) {
        var cacheKey = this.getKey(url, options.params);
        this._cache[cacheKey] = response;
    };
    DefaultCache.prototype.getKey = function (url, params) {
        if (params === void 0) { params = {}; }
        if (Object.keys(params).length === 0) {
            return url;
        }
        return url + "?" + query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(params);
    };
    return DefaultCache;
}());



/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/create-request-sender.js":
/*!************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/create-request-sender.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createRequestSender)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "../checkout-sdk-js/node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _payload_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payload-transformer */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/payload-transformer.js");
/* harmony import */ var _request_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-factory */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-factory.js");
/* harmony import */ var _request_sender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-sender.js");




function createRequestSender(options) {
    return new _request_sender__WEBPACK_IMPORTED_MODULE_3__["default"](new _request_factory__WEBPACK_IMPORTED_MODULE_2__["default"](), new _payload_transformer__WEBPACK_IMPORTED_MODULE_1__["default"](), js_cookie__WEBPACK_IMPORTED_MODULE_0__, options);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/create-timeout.js":
/*!*****************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/create-timeout.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTimeout)
/* harmony export */ });
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/timeout.js");

function createTimeout(delay) {
    return new _timeout__WEBPACK_IMPORTED_MODULE_0__["default"](delay);
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/index.js":
/*!********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestSender: () => (/* reexport safe */ _request_sender__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Timeout: () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   createRequestSender: () => (/* reexport safe */ _create_request_sender__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   createTimeout: () => (/* reexport safe */ _create_timeout__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _create_request_sender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/create-request-sender.js");
/* harmony import */ var _create_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-timeout */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/create-timeout.js");
/* harmony import */ var _request_sender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-sender.js");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeout */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/timeout.js");






/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/is-promise.js":
/*!*************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/is-promise.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPromise)
/* harmony export */ });
function isPromise(promise) {
    return !!promise &&
        (typeof promise === 'object' || typeof promise === 'function') &&
        typeof promise.then === 'function';
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/payload-transformer.js":
/*!**********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/payload-transformer.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _to_form_url_encoded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-form-url-encoded */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/to-form-url-encoded.js");


var JSON_CONTENT_TYPE_REGEXP = /application\/(\w+\+)?json/;
var FORM_URLENCODED_CONTENT_TYPE_REGEXP = /application\/x-www-form-urlencoded/;
var PayloadTransformer = (function () {
    function PayloadTransformer() {
    }
    PayloadTransformer.prototype.toRequestBody = function (options) {
        var contentType = options.headers ? this._getHeader(options.headers, 'Content-Type') : '';
        if (options.body) {
            if (JSON_CONTENT_TYPE_REGEXP.test(contentType)) {
                return JSON.stringify(options.body);
            }
            if (FORM_URLENCODED_CONTENT_TYPE_REGEXP.test(contentType)) {
                return (0,_to_form_url_encoded__WEBPACK_IMPORTED_MODULE_1__["default"])(options.body);
            }
        }
        return options.body;
    };
    PayloadTransformer.prototype.toResponse = function (xhr) {
        var headers = this._parseResponseHeaders(xhr.getAllResponseHeaders());
        var body = this._parseResponseBody('response' in xhr ? xhr.response : xhr.responseText, headers);
        return {
            body: body,
            headers: headers,
            status: xhr.status,
            statusText: xhr.statusText,
        };
    };
    PayloadTransformer.prototype._parseResponseBody = function (body, headers) {
        var contentType = this._getHeader(headers, 'Content-Type');
        if (body && JSON_CONTENT_TYPE_REGEXP.test(contentType)) {
            return JSON.parse(body);
        }
        return body;
    };
    PayloadTransformer.prototype._parseResponseHeaders = function (rawHeaders) {
        var lines = rawHeaders ? rawHeaders.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/) : [];
        return lines.reduce(function (headers, line) {
            var _a;
            var parts = line.split(':');
            var key = (parts.shift() || '').trim();
            if (!key) {
                return headers;
            }
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, headers), (_a = {}, _a[key.toLowerCase()] = parts.join(':').trim(), _a));
        }, {});
    };
    PayloadTransformer.prototype._getHeader = function (headers, key) {
        if (!headers || !key) {
            return '';
        }
        return headers[key] || headers[key.toLowerCase()] || '';
    };
    return PayloadTransformer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayloadTransformer);


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-factory.js":
/*!******************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-factory.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js");

var RequestFactory = (function () {
    function RequestFactory() {
    }
    RequestFactory.prototype.createRequest = function (url, options) {
        var xhr = new XMLHttpRequest();
        this._configureRequest(xhr, url, options);
        return xhr;
    };
    RequestFactory.prototype._configureRequest = function (xhr, url, options) {
        if (options === void 0) { options = {}; }
        xhr.open(options.method || 'GET', this._formatUrl(url, options.params, options.encodeParams), true);
        if (options.headers) {
            this._configureRequestHeaders(xhr, options.headers);
        }
        if (typeof options.credentials === 'boolean') {
            xhr.withCredentials = options.credentials;
        }
        if (typeof options.timeout === 'number') {
            xhr.timeout = options.timeout;
        }
    };
    RequestFactory.prototype._configureRequestHeaders = function (xhr, headers) {
        Object.keys(headers)
            .filter(function (key) { return headers[key] !== null; })
            .forEach(function (key) {
            xhr.setRequestHeader(key, headers[key]);
        });
    };
    RequestFactory.prototype._formatUrl = function (url, params, encodeParams) {
        if (encodeParams === void 0) { encodeParams = true; }
        if (!params || Object.keys(params).length === 0) {
            return url;
        }
        return url + "?" + query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(params, { encode: encodeParams });
    };
    return RequestFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestFactory);


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-sender.js":
/*!*****************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/request-sender.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.merge */ "../checkout-sdk-js/node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/cache.js");
/* harmony import */ var _is_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-promise */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/is-promise.js");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeout */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/timeout.js");





var RequestSender = (function () {
    function RequestSender(_requestFactory, _payloadTransformer, _cookie, _options) {
        if (_options === void 0) { _options = {}; }
        this._requestFactory = _requestFactory;
        this._payloadTransformer = _payloadTransformer;
        this._cookie = _cookie;
        this._options = _options;
        this._cache = this._options.cache || new _cache__WEBPACK_IMPORTED_MODULE_2__.DefaultCache();
    }
    RequestSender.prototype.sendRequest = function (url, options) {
        var _this = this;
        var requestOptions = this._mergeDefaultOptions(url, options);
        var cachedRequest = this._getCachedRequest(url, requestOptions);
        if (cachedRequest) {
            return Promise.resolve(cachedRequest);
        }
        var request = this._requestFactory.createRequest(this._prependHost(url), requestOptions);
        return new Promise(function (resolve, reject) {
            var requestHandler = function () {
                var response = _this._payloadTransformer.toResponse(request);
                if (response.status >= 200 && response.status < 300) {
                    _this._cacheRequest(url, requestOptions, response);
                    resolve(response);
                }
                else {
                    reject(response);
                }
            };
            request.onload = requestHandler;
            request.onerror = requestHandler;
            request.onabort = requestHandler;
            request.ontimeout = requestHandler;
            if (requestOptions.timeout instanceof _timeout__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                requestOptions.timeout.onComplete(function () { return request.abort(); });
                requestOptions.timeout.start();
            }
            if ((0,_is_promise__WEBPACK_IMPORTED_MODULE_3__["default"])(requestOptions.timeout)) {
                requestOptions.timeout.then(function () { return request.abort(); });
            }
            request.send(_this._payloadTransformer.toRequestBody(requestOptions));
        });
    };
    RequestSender.prototype.get = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'GET' }));
    };
    RequestSender.prototype.post = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'POST' }));
    };
    RequestSender.prototype.put = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'PUT' }));
    };
    RequestSender.prototype.patch = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'PATCH' }));
    };
    RequestSender.prototype.delete = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'DELETE' }));
    };
    RequestSender.prototype._mergeDefaultOptions = function (url, options) {
        var defaultOptions = {
            credentials: true,
            encodeParams: true,
            headers: {
                Accept: 'application/json, text/plain, */*',
            },
            method: 'GET',
        };
        var csrfToken = this._cookie.get('XSRF-TOKEN');
        if (csrfToken && defaultOptions.headers && !this._isAssetRequest(url, options) && this._isLocalRequest(url)) {
            defaultOptions.headers['X-XSRF-TOKEN'] = csrfToken;
        }
        if (options && options.body && defaultOptions.headers) {
            defaultOptions.headers['Content-Type'] = 'application/json';
        }
        return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, defaultOptions, options);
    };
    RequestSender.prototype._prependHost = function (url) {
        if (!this._options.host || /^https?:\/\//.test(url)) {
            return url;
        }
        return this._options.host.replace(/\/$/, '') + "/" + url.replace(/^\//, '');
    };
    RequestSender.prototype._shouldCacheRequest = function (options) {
        var method = options.method || 'GET';
        return method.toUpperCase() === 'GET' && Boolean(options.cache);
    };
    RequestSender.prototype._getCachedRequest = function (url, options) {
        if (this._shouldCacheRequest(options)) {
            return this._cache.read(url, options);
        }
        return null;
    };
    RequestSender.prototype._cacheRequest = function (url, options, response) {
        if (this._shouldCacheRequest(options)) {
            this._cache.write(url, options, response);
        }
    };
    RequestSender.prototype._isAssetRequest = function (url, options) {
        if (options && options.method && options.method.toUpperCase() !== 'GET') {
            return false;
        }
        return /\.(png|gif|jpe?g|css|js|json|svg|html?)$/.test(url.split('?')[0]);
    };
    RequestSender.prototype._isLocalRequest = function (url) {
        if (url.match(new RegExp('^(https?:)?\/\/' + window.location.hostname))) {
            return true;
        }
        return !url.match(new RegExp('^(https?:)?\/\/'));
    };
    return RequestSender;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestSender);


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/timeout.js":
/*!**********************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/timeout.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Timeout = (function () {
    function Timeout(_delay) {
        var _this = this;
        this._delay = _delay;
        this._resolve = function () { };
        this._promise = new Promise(function (resolve) {
            _this._resolve = resolve;
        });
    }
    Timeout.prototype.onComplete = function (callback) {
        this._promise.then(callback);
    };
    Timeout.prototype.complete = function () {
        this._resolve();
        if (this._timeoutToken) {
            window.clearTimeout(this._timeoutToken);
        }
    };
    Timeout.prototype.start = function () {
        var _this = this;
        if (this._delay) {
            this._timeoutToken = window.setTimeout(function () { return _this.complete(); }, this._delay);
        }
    };
    return Timeout;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeout);


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/to-form-url-encoded.js":
/*!**********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/to-form-url-encoded.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toFormUrlEncoded)
/* harmony export */ });
function toFormUrlEncoded(data) {
    if (typeof data !== 'object' || data === null) {
        return data;
    }
    return Object.keys(data)
        .filter(function (key) { return data[key] !== undefined; })
        .map(function (key) {
        var value = data[key];
        if (typeof value === 'string') {
            return key + "=" + encodeURIComponent(value);
        }
        return key + "=" + encodeURIComponent(JSON.stringify(value) || '');
    })
        .join('&');
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js":
/*!******************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "../checkout-sdk-js/node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "../checkout-sdk-js/node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "../checkout-sdk-js/node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/tslib/tslib.es6.js":
/*!***************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/request-sender/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/browser-support.js":
/*!*****************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/browser-support.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var BrowserSupport = (function () {
    function BrowserSupport() {
    }
    BrowserSupport.prototype.canSupportRel = function (rel) {
        var link = document.createElement('link');
        return !!(link.relList &&
            link.relList.supports &&
            link.relList.supports(rel));
    };
    return BrowserSupport;
}());
exports["default"] = BrowserSupport;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-script-loader.js":
/*!**********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-script-loader.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var request_sender_1 = __webpack_require__(/*! @bigcommerce/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/index.js");
var browser_support_1 = __webpack_require__(/*! ./browser-support */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/browser-support.js");
var script_loader_1 = __webpack_require__(/*! ./script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/script-loader.js");
function createScriptLoader() {
    return new script_loader_1.default(new browser_support_1.default(), request_sender_1.createRequestSender());
}
exports["default"] = createScriptLoader;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js":
/*!**************************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var request_sender_1 = __webpack_require__(/*! @bigcommerce/request-sender */ "../checkout-sdk-js/node_modules/@bigcommerce/request-sender/esm/index.js");
var browser_support_1 = __webpack_require__(/*! ./browser-support */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/browser-support.js");
var stylesheet_loader_1 = __webpack_require__(/*! ./stylesheet-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js");
function createStylesheetLoader() {
    return new stylesheet_loader_1.default(new browser_support_1.default(), request_sender_1.createRequestSender());
}
exports["default"] = createStylesheetLoader;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/get-script-loader.js":
/*!*******************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/get-script-loader.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var create_script_loader_1 = __webpack_require__(/*! ./create-script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-script-loader.js");
var instance;
function getScriptLoader() {
    if (!instance) {
        instance = create_script_loader_1.default();
    }
    return instance;
}
exports["default"] = getScriptLoader;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/get-stylesheet-loader.js":
/*!***********************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/get-stylesheet-loader.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var create_stylesheet_loader_1 = __webpack_require__(/*! ./create-stylesheet-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js");
var instance;
function getStylesheetLoader() {
    if (!instance) {
        instance = create_stylesheet_loader_1.default();
    }
    return instance;
}
exports["default"] = getStylesheetLoader;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js":
/*!*******************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var script_loader_1 = __webpack_require__(/*! ./script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/script-loader.js");
exports.ScriptLoader = script_loader_1.default;
var create_script_loader_1 = __webpack_require__(/*! ./create-script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-script-loader.js");
exports.createScriptLoader = create_script_loader_1.default;
var get_script_loader_1 = __webpack_require__(/*! ./get-script-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/get-script-loader.js");
exports.getScriptLoader = get_script_loader_1.default;
var stylesheet_loader_1 = __webpack_require__(/*! ./stylesheet-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js");
exports.StylesheetLoader = stylesheet_loader_1.default;
var create_stylesheet_loader_1 = __webpack_require__(/*! ./create-stylesheet-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js");
exports.createStylesheetLoader = create_stylesheet_loader_1.default;
var get_stylesheet_loader_1 = __webpack_require__(/*! ./get-stylesheet-loader */ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/get-stylesheet-loader.js");
exports.getStylesheetLoader = get_stylesheet_loader_1.default;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/script-loader.js":
/*!***************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/script-loader.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ScriptLoader = (function () {
    function ScriptLoader(_browserSupport, _requestSender) {
        this._browserSupport = _browserSupport;
        this._requestSender = _requestSender;
        this._scripts = {};
        this._preloadedScripts = {};
    }
    ScriptLoader.prototype.loadScript = function (src, options) {
        var _this = this;
        if (!this._scripts[src]) {
            this._scripts[src] = new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                var _a = options || {}, _b = _a.async, async = _b === void 0 ? false : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
                Object.keys(attributes)
                    .forEach(function (key) {
                    script.setAttribute(key, attributes[key]);
                });
                script.onload = function () { return resolve(); };
                script.onreadystatechange = function () { return resolve(); };
                script.onerror = function (event) {
                    delete _this._scripts[src];
                    reject(event);
                };
                script.async = async;
                script.src = src;
                document.body.appendChild(script);
            });
        }
        return this._scripts[src];
    };
    ScriptLoader.prototype.loadScripts = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.loadScript(url, options); }))
            .then(function () { return undefined; });
    };
    ScriptLoader.prototype.preloadScript = function (url, options) {
        var _this = this;
        if (!this._preloadedScripts[url]) {
            this._preloadedScripts[url] = new Promise(function (resolve, reject) {
                var _a = (options || {}).prefetch, prefetch = _a === void 0 ? false : _a;
                var rel = prefetch ? 'prefetch' : 'preload';
                if (_this._browserSupport.canSupportRel(rel)) {
                    var preloadedScript = document.createElement('link');
                    preloadedScript.as = 'script';
                    preloadedScript.rel = rel;
                    preloadedScript.href = url;
                    preloadedScript.onload = function () {
                        resolve();
                    };
                    preloadedScript.onerror = function () {
                        delete _this._preloadedScripts[url];
                        reject();
                    };
                    document.head.appendChild(preloadedScript);
                }
                else {
                    _this._requestSender.get(url, {
                        credentials: false,
                        headers: { Accept: 'application/javascript' },
                    })
                        .then(function () { return resolve(); })
                        .catch(reject);
                }
            });
        }
        return this._preloadedScripts[url];
    };
    ScriptLoader.prototype.preloadScripts = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.preloadScript(url, options); }))
            .then(function () { return undefined; });
    };
    return ScriptLoader;
}());
exports["default"] = ScriptLoader;


/***/ }),

/***/ "../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js":
/*!*******************************************************************************************!*\
  !*** ../checkout-sdk-js/node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var StylesheetLoader = (function () {
    function StylesheetLoader(_browserSupport, _requestSender) {
        this._browserSupport = _browserSupport;
        this._requestSender = _requestSender;
        this._stylesheets = {};
        this._preloadedStylesheets = {};
    }
    StylesheetLoader.prototype.loadStylesheet = function (src, options) {
        var _this = this;
        if (!this._stylesheets[src]) {
            this._stylesheets[src] = new Promise(function (resolve, reject) {
                var stylesheet = document.createElement('link');
                var _a = options || {}, _b = _a.prepend, prepend = _b === void 0 ? false : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
                Object.keys(attributes)
                    .forEach(function (key) {
                    stylesheet.setAttribute(key, attributes[key]);
                });
                stylesheet.onload = function () { return resolve(); };
                stylesheet.onerror = function (event) {
                    delete _this._stylesheets[src];
                    reject(event);
                };
                stylesheet.rel = 'stylesheet';
                stylesheet.href = src;
                if (prepend && document.head.children[0]) {
                    document.head.insertBefore(stylesheet, document.head.children[0]);
                }
                else {
                    document.head.appendChild(stylesheet);
                }
            });
        }
        return this._stylesheets[src];
    };
    StylesheetLoader.prototype.loadStylesheets = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.loadStylesheet(url, options); }))
            .then(function () { return undefined; });
    };
    StylesheetLoader.prototype.preloadStylesheet = function (url, options) {
        var _this = this;
        if (!this._preloadedStylesheets[url]) {
            this._preloadedStylesheets[url] = new Promise(function (resolve, reject) {
                var _a = (options || {}).prefetch, prefetch = _a === void 0 ? false : _a;
                var rel = prefetch ? 'prefetch' : 'preload';
                if (_this._browserSupport.canSupportRel(rel)) {
                    var preloadedStylesheet = document.createElement('link');
                    preloadedStylesheet.as = 'style';
                    preloadedStylesheet.rel = prefetch ? 'prefetch' : 'preload';
                    preloadedStylesheet.href = url;
                    preloadedStylesheet.onload = function () {
                        resolve();
                    };
                    preloadedStylesheet.onerror = function (event) {
                        delete _this._preloadedStylesheets[url];
                        reject(event);
                    };
                    document.head.appendChild(preloadedStylesheet);
                }
                else {
                    _this._requestSender.get(url, {
                        credentials: false,
                        headers: { Accept: 'text/css' },
                    })
                        .then(function () { return resolve(); })
                        .catch(reject);
                }
            });
        }
        return this._preloadedStylesheets[url];
    };
    StylesheetLoader.prototype.preloadStylesheets = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.preloadStylesheet(url, options); }))
            .then(function () { return undefined; });
    };
    return StylesheetLoader;
}());
exports["default"] = StylesheetLoader;


/***/ }),

/***/ "./node_modules/@bigcommerce/memoize/lib/cache-key-maps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/memoize/lib/cache-key-maps.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTerminalCacheKeyMap = isTerminalCacheKeyMap;
exports.isRootCacheKeyMap = isRootCacheKeyMap;
function isTerminalCacheKeyMap(map) {
    return map.hasOwnProperty('cacheKey');
}
function isRootCacheKeyMap(map) {
    return map.hasOwnProperty('parentMap');
}


/***/ }),

/***/ "./node_modules/@bigcommerce/memoize/lib/cache-key-resolver.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/memoize/lib/cache-key-resolver.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var shallowequal_1 = tslib_1.__importDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));
var cache_key_maps_1 = __webpack_require__(/*! ./cache-key-maps */ "./node_modules/@bigcommerce/memoize/lib/cache-key-maps.js");
var CacheKeyResolver = /** @class */ (function () {
    function CacheKeyResolver(options) {
        this._lastId = 0;
        this._map = { maps: [] };
        this._usedMaps = [];
        this._options = tslib_1.__assign({ isEqual: shallowequal_1.default, maxSize: 0, onExpire: lodash_1.noop }, options);
    }
    CacheKeyResolver.prototype.getKey = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = this._resolveMap.apply(this, args);
        var index = result.index, parentMap = result.parentMap;
        var map = result.map;
        if (map && map.cacheKey) {
            map.usedCount++;
        }
        else {
            map = this._generateMap(parentMap, args.slice(index));
        }
        // Keep track of the least used map so we can remove it if the size of
        // the stack exceeds the maximum size.
        this._removeLeastUsedMap(map);
        return map.cacheKey;
    };
    CacheKeyResolver.prototype.getUsedCount = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var map = this._resolveMap.apply(this, args).map;
        return map ? map.usedCount : 0;
    };
    CacheKeyResolver.prototype._resolveMap = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var index = 0;
        var parentMap = this._map;
        // Traverse the tree to find the linked list of maps that match the
        // arguments of the call. Each intermediate or terminal map contains a
        // value that could be used to match with the arguments. The last map in
        // the list (the terminal) should contain a cache key. If it can does
        // not exist, we will return a falsy value so that the caller could
        // handle and generate a new cache key.
        while (parentMap.maps.length) {
            var isMatched = false;
            for (var mapIndex = 0; mapIndex < parentMap.maps.length; mapIndex++) {
                var map = parentMap.maps[mapIndex];
                if (!this._options.isEqual(map.value, args[index])) {
                    continue;
                }
                // Move the most recently used map to the top of the stack for
                // quicker access
                (_a = parentMap.maps).unshift.apply(_a, parentMap.maps.splice(mapIndex, 1));
                if ((args.length === 0 || index === args.length - 1) && (0, cache_key_maps_1.isTerminalCacheKeyMap)(map)) {
                    return { index: index, map: map, parentMap: parentMap };
                }
                isMatched = true;
                parentMap = map;
                index++;
                break;
            }
            if (!isMatched) {
                break;
            }
        }
        return { index: index, parentMap: parentMap };
    };
    CacheKeyResolver.prototype._generateMap = function (parent, args) {
        var index = 0;
        var parentMap = parent;
        var map;
        do {
            map = {
                maps: [],
                parentMap: parentMap,
                usedCount: 1,
                value: args[index],
            };
            // Continue to build the tree of maps so that it could be resolved
            // next time when the function is called with the same set of
            // arguments.
            parentMap.maps.unshift(map);
            parentMap = map;
            index++;
        } while (index < args.length);
        var terminalMap = map;
        terminalMap.cacheKey = "".concat(++this._lastId);
        return terminalMap;
    };
    CacheKeyResolver.prototype._removeLeastUsedMap = function (recentlyUsedMap) {
        if (!this._options.maxSize) {
            return;
        }
        var index = this._usedMaps.indexOf(recentlyUsedMap);
        this._usedMaps.splice(index === -1 ? 0 : index, index === -1 ? 0 : 1, recentlyUsedMap);
        if (this._usedMaps.length <= this._options.maxSize) {
            return;
        }
        var map = this._usedMaps.pop();
        if (!map) {
            return;
        }
        this._removeMap(map);
        this._options.onExpire(map.cacheKey);
    };
    CacheKeyResolver.prototype._removeMap = function (map) {
        if (!map.parentMap) {
            return;
        }
        map.parentMap.maps.splice(map.parentMap.maps.indexOf(map), 1);
        if ((0, cache_key_maps_1.isRootCacheKeyMap)(map.parentMap)) {
            return;
        }
        this._removeMap(map.parentMap);
    };
    return CacheKeyResolver;
}());
exports["default"] = CacheKeyResolver;


/***/ }),

/***/ "./node_modules/@bigcommerce/memoize/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@bigcommerce/memoize/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoizeOne = exports.memoize = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
var memoize_1 = __webpack_require__(/*! ./memoize */ "./node_modules/@bigcommerce/memoize/lib/memoize.js");
Object.defineProperty(exports, "memoize", ({ enumerable: true, get: function () { return tslib_1.__importDefault(memoize_1).default; } }));
Object.defineProperty(exports, "memoizeOne", ({ enumerable: true, get: function () { return memoize_1.memoizeOne; } }));


/***/ }),

/***/ "./node_modules/@bigcommerce/memoize/lib/memoize.js":
/*!**********************************************************!*\
  !*** ./node_modules/@bigcommerce/memoize/lib/memoize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = memoize;
exports.memoizeOne = memoizeOne;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
var lodash_memoize_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash.memoize */ "./node_modules/lodash.memoize/index.js")); // tslint:disable-line:match-default-export-name
var shallowequal_1 = tslib_1.__importDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));
var cache_key_resolver_1 = tslib_1.__importDefault(__webpack_require__(/*! ./cache-key-resolver */ "./node_modules/@bigcommerce/memoize/lib/cache-key-resolver.js"));
function memoize(fn, options) {
    var _a = tslib_1.__assign({ maxSize: 0, isEqual: shallowequal_1.default }, options), maxSize = _a.maxSize, isEqual = _a.isEqual;
    var cache = new Map();
    var resolver = new cache_key_resolver_1.default({
        isEqual: isEqual,
        maxSize: maxSize,
        onExpire: function (key) { return cache.delete(key); },
    });
    var memoized = (0, lodash_memoize_1.default)(fn, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return resolver.getKey.apply(resolver, args);
    });
    memoized.cache = cache;
    return memoized;
}
function memoizeOne(fn, options) {
    return memoize(fn, tslib_1.__assign(tslib_1.__assign({}, options), { maxSize: 1 }));
}


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/cache.js":
/*!***************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/cache.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultCache: () => (/* binding */ DefaultCache)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js");

var DefaultCache = (function () {
    function DefaultCache() {
        this._cache = {};
    }
    DefaultCache.prototype.read = function (url, options) {
        var cacheKey = this.getKey(url, options.params);
        return this._cache[cacheKey] || null;
    };
    DefaultCache.prototype.write = function (url, options, response) {
        var cacheKey = this.getKey(url, options.params);
        this._cache[cacheKey] = response;
    };
    DefaultCache.prototype.getKey = function (url, params) {
        if (params === void 0) { params = {}; }
        if (Object.keys(params).length === 0) {
            return url;
        }
        return "".concat(url, "?").concat(query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(params));
    };
    return DefaultCache;
}());



/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/create-request-sender.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/create-request-sender.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createRequestSender)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _payload_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payload-transformer */ "./node_modules/@bigcommerce/request-sender/esm/payload-transformer.js");
/* harmony import */ var _request_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-factory */ "./node_modules/@bigcommerce/request-sender/esm/request-factory.js");
/* harmony import */ var _request_sender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-sender */ "./node_modules/@bigcommerce/request-sender/esm/request-sender.js");




function createRequestSender(options) {
    return new _request_sender__WEBPACK_IMPORTED_MODULE_3__["default"](new _request_factory__WEBPACK_IMPORTED_MODULE_2__["default"](), new _payload_transformer__WEBPACK_IMPORTED_MODULE_1__["default"](), js_cookie__WEBPACK_IMPORTED_MODULE_0__, options);
}


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/create-timeout.js":
/*!************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/create-timeout.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTimeout)
/* harmony export */ });
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout */ "./node_modules/@bigcommerce/request-sender/esm/timeout.js");

function createTimeout(delay) {
    return new _timeout__WEBPACK_IMPORTED_MODULE_0__["default"](delay);
}


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestSender: () => (/* reexport safe */ _request_sender__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Timeout: () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   createRequestSender: () => (/* reexport safe */ _create_request_sender__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   createTimeout: () => (/* reexport safe */ _create_timeout__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _create_request_sender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-request-sender */ "./node_modules/@bigcommerce/request-sender/esm/create-request-sender.js");
/* harmony import */ var _create_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-timeout */ "./node_modules/@bigcommerce/request-sender/esm/create-timeout.js");
/* harmony import */ var _request_sender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-sender */ "./node_modules/@bigcommerce/request-sender/esm/request-sender.js");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeout */ "./node_modules/@bigcommerce/request-sender/esm/timeout.js");






/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/is-promise.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/is-promise.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPromise)
/* harmony export */ });
function isPromise(promise) {
    return !!promise &&
        (typeof promise === 'object' || typeof promise === 'function') &&
        typeof promise.then === 'function';
}


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/payload-transformer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/payload-transformer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _to_form_url_encoded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-form-url-encoded */ "./node_modules/@bigcommerce/request-sender/esm/to-form-url-encoded.js");


var JSON_CONTENT_TYPE_REGEXP = /application\/(\w+\+)?json/;
var FORM_URLENCODED_CONTENT_TYPE_REGEXP = /application\/x-www-form-urlencoded/;
var PayloadTransformer = (function () {
    function PayloadTransformer() {
    }
    PayloadTransformer.prototype.toRequestBody = function (options) {
        var contentType = options.headers ? this._getHeader(options.headers, 'Content-Type') : '';
        if (options.body) {
            if (JSON_CONTENT_TYPE_REGEXP.test(contentType)) {
                return JSON.stringify(options.body);
            }
            if (FORM_URLENCODED_CONTENT_TYPE_REGEXP.test(contentType)) {
                return (0,_to_form_url_encoded__WEBPACK_IMPORTED_MODULE_1__["default"])(options.body);
            }
        }
        return options.body;
    };
    PayloadTransformer.prototype.toResponse = function (xhr) {
        var headers = this._parseResponseHeaders(xhr.getAllResponseHeaders());
        var body = this._parseResponseBody('response' in xhr ? xhr.response : xhr.responseText, headers);
        return {
            body: body,
            headers: headers,
            status: xhr.status,
            statusText: xhr.statusText,
        };
    };
    PayloadTransformer.prototype._parseResponseBody = function (body, headers) {
        var contentType = this._getHeader(headers, 'Content-Type');
        if (body && JSON_CONTENT_TYPE_REGEXP.test(contentType)) {
            return JSON.parse(body);
        }
        return body;
    };
    PayloadTransformer.prototype._parseResponseHeaders = function (rawHeaders) {
        var lines = rawHeaders ? rawHeaders.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/) : [];
        return lines.reduce(function (headers, line) {
            var _a;
            var parts = line.split(':');
            var key = (parts.shift() || '').trim();
            if (!key) {
                return headers;
            }
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, headers), (_a = {}, _a[key.toLowerCase()] = parts.join(':').trim(), _a));
        }, {});
    };
    PayloadTransformer.prototype._getHeader = function (headers, key) {
        if (!headers || !key) {
            return '';
        }
        return headers[key] || headers[key.toLowerCase()] || '';
    };
    return PayloadTransformer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayloadTransformer);


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/request-factory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/request-factory.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js");

var RequestFactory = (function () {
    function RequestFactory() {
    }
    RequestFactory.prototype.createRequest = function (url, options) {
        var xhr = new XMLHttpRequest();
        this._configureRequest(xhr, url, options);
        return xhr;
    };
    RequestFactory.prototype._configureRequest = function (xhr, url, options) {
        if (options === void 0) { options = {}; }
        xhr.open(options.method || 'GET', this._formatUrl(url, options.params, options.encodeParams), true);
        if (options.headers) {
            this._configureRequestHeaders(xhr, options.headers);
        }
        if (typeof options.credentials === 'boolean') {
            xhr.withCredentials = options.credentials;
        }
        if (typeof options.timeout === 'number') {
            xhr.timeout = options.timeout;
        }
    };
    RequestFactory.prototype._configureRequestHeaders = function (xhr, headers) {
        Object.keys(headers)
            .filter(function (key) { return headers[key] !== null; })
            .forEach(function (key) {
            xhr.setRequestHeader(key, headers[key]);
        });
    };
    RequestFactory.prototype._formatUrl = function (url, params, encodeParams) {
        if (encodeParams === void 0) { encodeParams = true; }
        if (!params || Object.keys(params).length === 0) {
            return url;
        }
        return "".concat(url, "?").concat(query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(params, { encode: encodeParams }));
    };
    return RequestFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestFactory);


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/request-sender.js":
/*!************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/request-sender.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache */ "./node_modules/@bigcommerce/request-sender/esm/cache.js");
/* harmony import */ var _is_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-promise */ "./node_modules/@bigcommerce/request-sender/esm/is-promise.js");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeout */ "./node_modules/@bigcommerce/request-sender/esm/timeout.js");





var RequestSender = (function () {
    function RequestSender(_requestFactory, _payloadTransformer, _cookie, _options) {
        if (_options === void 0) { _options = {}; }
        this._requestFactory = _requestFactory;
        this._payloadTransformer = _payloadTransformer;
        this._cookie = _cookie;
        this._options = _options;
        this._cache = this._options.cache || new _cache__WEBPACK_IMPORTED_MODULE_2__.DefaultCache();
    }
    RequestSender.prototype.sendRequest = function (url, options) {
        var _this = this;
        var requestOptions = this._mergeDefaultOptions(url, options);
        var cachedRequest = this._getCachedRequest(url, requestOptions);
        if (cachedRequest) {
            return Promise.resolve(cachedRequest);
        }
        var request = this._requestFactory.createRequest(this._prependHost(url), requestOptions);
        return new Promise(function (resolve, reject) {
            var requestHandler = function () {
                var response = _this._payloadTransformer.toResponse(request);
                if (response.status >= 200 && response.status < 300) {
                    _this._cacheRequest(url, requestOptions, response);
                    resolve(response);
                }
                else {
                    reject(response);
                }
            };
            request.onload = requestHandler;
            request.onerror = requestHandler;
            request.onabort = requestHandler;
            request.ontimeout = requestHandler;
            if (requestOptions.timeout instanceof _timeout__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                requestOptions.timeout.onComplete(function () { return request.abort(); });
                requestOptions.timeout.start();
            }
            if ((0,_is_promise__WEBPACK_IMPORTED_MODULE_3__["default"])(requestOptions.timeout)) {
                requestOptions.timeout.then(function () { return request.abort(); });
            }
            request.send(_this._payloadTransformer.toRequestBody(requestOptions));
        });
    };
    RequestSender.prototype.get = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'GET' }));
    };
    RequestSender.prototype.post = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'POST' }));
    };
    RequestSender.prototype.put = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'PUT' }));
    };
    RequestSender.prototype.patch = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'PATCH' }));
    };
    RequestSender.prototype.delete = function (url, options) {
        return this.sendRequest(url, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), { method: 'DELETE' }));
    };
    RequestSender.prototype._mergeDefaultOptions = function (url, options) {
        var defaultOptions = {
            credentials: true,
            encodeParams: true,
            headers: {
                Accept: 'application/json, text/plain, */*',
            },
            method: 'GET',
        };
        var csrfToken = this._cookie.get('XSRF-TOKEN');
        if (csrfToken && defaultOptions.headers && !this._isAssetRequest(url, options) && this._isLocalRequest(url)) {
            defaultOptions.headers['X-XSRF-TOKEN'] = csrfToken;
        }
        if (options && options.body && defaultOptions.headers) {
            defaultOptions.headers['Content-Type'] = 'application/json';
        }
        return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, defaultOptions, options);
    };
    RequestSender.prototype._prependHost = function (url) {
        if (!this._options.host || /^https?:\/\//.test(url)) {
            return url;
        }
        return "".concat(this._options.host.replace(/\/$/, ''), "/").concat(url.replace(/^\//, ''));
    };
    RequestSender.prototype._shouldCacheRequest = function (options) {
        var method = options.method || 'GET';
        return method.toUpperCase() === 'GET' && Boolean(options.cache);
    };
    RequestSender.prototype._getCachedRequest = function (url, options) {
        if (this._shouldCacheRequest(options)) {
            return this._cache.read(url, options);
        }
        return null;
    };
    RequestSender.prototype._cacheRequest = function (url, options, response) {
        if (this._shouldCacheRequest(options)) {
            this._cache.write(url, options, response);
        }
    };
    RequestSender.prototype._isAssetRequest = function (url, options) {
        if (options && options.method && options.method.toUpperCase() !== 'GET') {
            return false;
        }
        return /\.(png|gif|jpe?g|css|js|json|svg|html?)$/.test(url.split('?')[0]);
    };
    RequestSender.prototype._isLocalRequest = function (url) {
        if (url.match(new RegExp('^(https?:)?\/\/' + window.location.hostname))) {
            return true;
        }
        return !url.match(new RegExp('^(https?:)?\/\/'));
    };
    return RequestSender;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestSender);


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/timeout.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/timeout.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Timeout = (function () {
    function Timeout(_delay) {
        var _this = this;
        this._delay = _delay;
        this._promise = new Promise(function (resolve) {
            _this._resolve = resolve;
        });
    }
    Timeout.prototype.onComplete = function (callback) {
        this._promise.then(callback);
    };
    Timeout.prototype.complete = function () {
        this._resolve();
        if (this._timeoutToken !== undefined) {
            clearTimeout(this._timeoutToken);
        }
    };
    Timeout.prototype.start = function () {
        var _this = this;
        if (this._delay !== undefined) {
            this._timeoutToken = setTimeout(function () { return _this.complete(); }, this._delay);
        }
    };
    return Timeout;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeout);


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/esm/to-form-url-encoded.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/esm/to-form-url-encoded.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toFormUrlEncoded)
/* harmony export */ });
function toFormUrlEncoded(data) {
    if (typeof data !== 'object' || data === null) {
        return data;
    }
    return Object.keys(data)
        .filter(function (key) { return data[key] !== undefined; })
        .map(function (key) {
        var value = data[key];
        if (typeof value === 'string') {
            return "".concat(key, "=").concat(encodeURIComponent(value));
        }
        return "".concat(key, "=").concat(encodeURIComponent(JSON.stringify(value) || ''));
    })
        .join('&');
}


/***/ }),

/***/ "./node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@bigcommerce/request-sender/node_modules/query-string/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "./node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/browser-support.js":
/*!************************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/browser-support.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var BrowserSupport = (function () {
    function BrowserSupport() {
    }
    BrowserSupport.prototype.canSupportRel = function (rel) {
        var link = document.createElement('link');
        return !!(link.relList &&
            link.relList.supports &&
            link.relList.supports(rel));
    };
    return BrowserSupport;
}());
exports["default"] = BrowserSupport;


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/create-script-loader.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/create-script-loader.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = createScriptLoader;
var request_sender_1 = __webpack_require__(/*! @bigcommerce/request-sender */ "./node_modules/@bigcommerce/request-sender/esm/index.js");
var browser_support_1 = __webpack_require__(/*! ./browser-support */ "./node_modules/@bigcommerce/script-loader/lib/browser-support.js");
var script_loader_1 = __webpack_require__(/*! ./script-loader */ "./node_modules/@bigcommerce/script-loader/lib/script-loader.js");
function createScriptLoader() {
    return new script_loader_1.default(new browser_support_1.default(), (0, request_sender_1.createRequestSender)());
}


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = createStylesheetLoader;
var request_sender_1 = __webpack_require__(/*! @bigcommerce/request-sender */ "./node_modules/@bigcommerce/request-sender/esm/index.js");
var browser_support_1 = __webpack_require__(/*! ./browser-support */ "./node_modules/@bigcommerce/script-loader/lib/browser-support.js");
var stylesheet_loader_1 = __webpack_require__(/*! ./stylesheet-loader */ "./node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js");
function createStylesheetLoader() {
    return new stylesheet_loader_1.default(new browser_support_1.default(), (0, request_sender_1.createRequestSender)());
}


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/get-script-loader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/get-script-loader.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = getScriptLoader;
var create_script_loader_1 = __webpack_require__(/*! ./create-script-loader */ "./node_modules/@bigcommerce/script-loader/lib/create-script-loader.js");
var instance;
function getScriptLoader() {
    if (!instance) {
        instance = (0, create_script_loader_1.default)();
    }
    return instance;
}


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/get-stylesheet-loader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/get-stylesheet-loader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = getStylesheetLoader;
var create_stylesheet_loader_1 = __webpack_require__(/*! ./create-stylesheet-loader */ "./node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js");
var instance;
function getStylesheetLoader() {
    if (!instance) {
        instance = (0, create_stylesheet_loader_1.default)();
    }
    return instance;
}


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStylesheetLoader = exports.createStylesheetLoader = exports.StylesheetLoader = exports.getScriptLoader = exports.createScriptLoader = exports.ScriptLoader = void 0;
var script_loader_1 = __webpack_require__(/*! ./script-loader */ "./node_modules/@bigcommerce/script-loader/lib/script-loader.js");
Object.defineProperty(exports, "ScriptLoader", ({ enumerable: true, get: function () { return script_loader_1.default; } }));
var create_script_loader_1 = __webpack_require__(/*! ./create-script-loader */ "./node_modules/@bigcommerce/script-loader/lib/create-script-loader.js");
Object.defineProperty(exports, "createScriptLoader", ({ enumerable: true, get: function () { return create_script_loader_1.default; } }));
var get_script_loader_1 = __webpack_require__(/*! ./get-script-loader */ "./node_modules/@bigcommerce/script-loader/lib/get-script-loader.js");
Object.defineProperty(exports, "getScriptLoader", ({ enumerable: true, get: function () { return get_script_loader_1.default; } }));
var stylesheet_loader_1 = __webpack_require__(/*! ./stylesheet-loader */ "./node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js");
Object.defineProperty(exports, "StylesheetLoader", ({ enumerable: true, get: function () { return stylesheet_loader_1.default; } }));
var create_stylesheet_loader_1 = __webpack_require__(/*! ./create-stylesheet-loader */ "./node_modules/@bigcommerce/script-loader/lib/create-stylesheet-loader.js");
Object.defineProperty(exports, "createStylesheetLoader", ({ enumerable: true, get: function () { return create_stylesheet_loader_1.default; } }));
var get_stylesheet_loader_1 = __webpack_require__(/*! ./get-stylesheet-loader */ "./node_modules/@bigcommerce/script-loader/lib/get-stylesheet-loader.js");
Object.defineProperty(exports, "getStylesheetLoader", ({ enumerable: true, get: function () { return get_stylesheet_loader_1.default; } }));


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/script-loader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/script-loader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ScriptLoader = (function () {
    function ScriptLoader(_browserSupport, _requestSender) {
        this._browserSupport = _browserSupport;
        this._requestSender = _requestSender;
        this._scripts = {};
        this._preloadedScripts = {};
    }
    ScriptLoader.prototype.loadScript = function (src, options) {
        var _this = this;
        if (!this._scripts[src]) {
            this._scripts[src] = new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                var _a = options || {}, _b = _a.async, async = _b === void 0 ? false : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
                Object.keys(attributes)
                    .forEach(function (key) {
                    script.setAttribute(key, attributes[key]);
                });
                script.onload = function () { return resolve(); };
                script.onreadystatechange = function () { return resolve(); };
                script.onerror = function (event) {
                    delete _this._scripts[src];
                    reject(event);
                };
                script.async = async;
                script.src = src;
                document.body.appendChild(script);
            });
        }
        return this._scripts[src];
    };
    ScriptLoader.prototype.loadScripts = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.loadScript(url, options); }))
            .then(function () { return undefined; });
    };
    ScriptLoader.prototype.preloadScript = function (url, options) {
        var _this = this;
        if (!this._preloadedScripts[url]) {
            this._preloadedScripts[url] = new Promise(function (resolve, reject) {
                var _a = (options || {}).prefetch, prefetch = _a === void 0 ? false : _a;
                var rel = prefetch ? 'prefetch' : 'preload';
                if (_this._browserSupport.canSupportRel(rel)) {
                    var preloadedScript = document.createElement('link');
                    preloadedScript.as = 'script';
                    preloadedScript.rel = rel;
                    preloadedScript.href = url;
                    preloadedScript.onload = function () {
                        resolve();
                    };
                    preloadedScript.onerror = function () {
                        delete _this._preloadedScripts[url];
                        reject();
                    };
                    document.head.appendChild(preloadedScript);
                }
                else {
                    _this._requestSender.get(url, {
                        credentials: false,
                        headers: { Accept: 'application/javascript' },
                    })
                        .then(function () { return resolve(); })
                        .catch(reject);
                }
            });
        }
        return this._preloadedScripts[url];
    };
    ScriptLoader.prototype.preloadScripts = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.preloadScript(url, options); }))
            .then(function () { return undefined; });
    };
    return ScriptLoader;
}());
exports["default"] = ScriptLoader;


/***/ }),

/***/ "./node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bigcommerce/script-loader/lib/stylesheet-loader.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var StylesheetLoader = (function () {
    function StylesheetLoader(_browserSupport, _requestSender) {
        this._browserSupport = _browserSupport;
        this._requestSender = _requestSender;
        this._stylesheets = {};
        this._preloadedStylesheets = {};
    }
    StylesheetLoader.prototype.loadStylesheet = function (src, options) {
        var _this = this;
        if (!this._stylesheets[src]) {
            this._stylesheets[src] = new Promise(function (resolve, reject) {
                var stylesheet = document.createElement('link');
                var _a = options || {}, _b = _a.prepend, prepend = _b === void 0 ? false : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
                Object.keys(attributes)
                    .forEach(function (key) {
                    stylesheet.setAttribute(key, attributes[key]);
                });
                stylesheet.onload = function () { return resolve(); };
                stylesheet.onerror = function (event) {
                    delete _this._stylesheets[src];
                    reject(event);
                };
                stylesheet.rel = 'stylesheet';
                stylesheet.href = src;
                if (prepend && document.head.children[0]) {
                    document.head.insertBefore(stylesheet, document.head.children[0]);
                }
                else {
                    document.head.appendChild(stylesheet);
                }
            });
        }
        return this._stylesheets[src];
    };
    StylesheetLoader.prototype.loadStylesheets = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.loadStylesheet(url, options); }))
            .then(function () { return undefined; });
    };
    StylesheetLoader.prototype.preloadStylesheet = function (url, options) {
        var _this = this;
        if (!this._preloadedStylesheets[url]) {
            this._preloadedStylesheets[url] = new Promise(function (resolve, reject) {
                var _a = (options || {}).prefetch, prefetch = _a === void 0 ? false : _a;
                var rel = prefetch ? 'prefetch' : 'preload';
                if (_this._browserSupport.canSupportRel(rel)) {
                    var preloadedStylesheet = document.createElement('link');
                    preloadedStylesheet.as = 'style';
                    preloadedStylesheet.rel = prefetch ? 'prefetch' : 'preload';
                    preloadedStylesheet.href = url;
                    preloadedStylesheet.onload = function () {
                        resolve();
                    };
                    preloadedStylesheet.onerror = function (event) {
                        delete _this._preloadedStylesheets[url];
                        reject(event);
                    };
                    document.head.appendChild(preloadedStylesheet);
                }
                else {
                    _this._requestSender.get(url, {
                        credentials: false,
                        headers: { Accept: 'text/css' },
                    })
                        .then(function () { return resolve(); })
                        .catch(reject);
                }
            });
        }
        return this._preloadedStylesheets[url];
    };
    StylesheetLoader.prototype.preloadStylesheets = function (urls, options) {
        var _this = this;
        return Promise.all(urls.map(function (url) { return _this.preloadStylesheet(url, options); }))
            .then(function () { return undefined; });
    };
    return StylesheetLoader;
}());
exports["default"] = StylesheetLoader;


/***/ })

}]);
//# sourceMappingURL=transients.js.map