webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ResourceList */ \"./pages/components/ResourceList.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/alexey/test-app-shou-dao/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'; // const productImageAdminAPI = `https://05ce07551a14094626d7611a5aa64254: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@shopyfyliquid.myshopify.com/admin/api/2021-07/script_tags.json`;\n\nvar productImageAdminAPI = \"https://shopyfyliquid.myshopify.com/admin/api/2021-07/script_tags.json\"; // let promise = fetch(productImageAdminAPI, {\n//   method: 'post',\n//   body: {\n//     \"script_tag\": {\n//       \"event\": \"onload\",\n//       \"src\": \"https://unpkg.com/vue@next\"\n//     }\n//   }\n// }).then((res) => res.json());\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSelection\", function (resources) {\n      var idsFromResources = resources.selection.map(function (product) {\n        return product.id;\n      });\n\n      _this.setState({\n        open: false\n      });\n\n      store_js__WEBPACK_IMPORTED_MODULE_12___default.a.set('ids', idsFromResources);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // A constant that defines your app's empty state\n      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_12___default.a.get('ids');\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__[\"Page\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }\n      }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__[\"TitleBar\"], {\n        primaryAction: {\n          content: 'Select products',\n          onAction: function onAction() {\n            return _this2.setState({\n              open: true\n            });\n          }\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__[\"ResourcePicker\"], {\n        resourceType: \"Product\",\n        showVariants: false,\n        open: this.state.open,\n        onSelection: function onSelection(resources) {\n          return _this2.handleSelection(resources);\n        },\n        onCancel: function onCancel() {\n          return _this2.setState({\n            open: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }\n      }), emptyState ? // Controls the layout of your app's empty state\n      __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__[\"Layout\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }, __jsx(\"p\", {\n        id: \"tag_script\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }\n      }, \"test \", productImageAdminAPI), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__[\"EmptyState\"], {\n        heading: \"Discount your products temporarily\",\n        action: {\n          content: 'Select products',\n          onAction: function onAction() {\n            return _this2.setState({\n              open: true\n            });\n          }\n        },\n        image: img,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }\n      }, \"Select products to change their price temporarily.\"))) : // Uses the new resource list that retrieves products by IDs\n      __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJwcm9kdWN0SW1hZ2VBZG1pbkFQSSIsIkluZGV4Iiwib3BlbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXRTdGF0ZSIsInN0b3JlIiwic2V0IiwiZW1wdHlTdGF0ZSIsImdldCIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLG1FQUFaLEMsQ0FJQTs7QUFDQSxJQUFNQyxvQkFBb0IsMkVBQTFCLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBS01DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFBRUMsVUFBSSxFQUFFO0FBQVIsSzs7ME5BMENVLFVBQUNDLFNBQUQsRUFBZTtBQUMvQixVQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLE9BQXhCLENBQXpCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkOztBQUNBUSxzREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlAsZ0JBQWpCO0FBQ0QsSzs7Ozs7Ozs2QkE3Q1E7QUFBQTs7QUFDUDtBQUNBLFVBQU1RLFVBQVUsR0FBRyxDQUFDRixnREFBSyxDQUFDRyxHQUFOLENBQVUsS0FBVixDQUFwQjtBQUNBLGFBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtRUFBRDtBQUNFLHFCQUFhLEVBQUU7QUFDYkMsaUJBQU8sRUFBRSxpQkFESTtBQUViQyxrQkFBUSxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBRVAsa0JBQUksRUFBRTtBQUFSLGFBQWQsQ0FBTjtBQUFBO0FBRkcsU0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBT0UsTUFBQyx5RUFBRDtBQUNFLG9CQUFZLEVBQUMsU0FEZjtBQUVFLG9CQUFZLEVBQUUsS0FGaEI7QUFHRSxZQUFJLEVBQUUsS0FBS2MsS0FBTCxDQUFXZCxJQUhuQjtBQUlFLG1CQUFXLEVBQUUscUJBQUNDLFNBQUQ7QUFBQSxpQkFBZSxNQUFJLENBQUNjLGVBQUwsQ0FBcUJkLFNBQXJCLENBQWY7QUFBQSxTQUpmO0FBS0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ00sUUFBTCxDQUFjO0FBQUVQLGdCQUFJLEVBQUU7QUFBUixXQUFkLENBQU47QUFBQSxTQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixFQWNHVSxVQUFVLEdBQUs7QUFDZCxZQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRTtBQUFHLFVBQUUsRUFBQyxZQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXlCWixvQkFBekIsQ0FGRixFQUlFLE1BQUMsNERBQUQ7QUFDRSxlQUFPLEVBQUMsb0NBRFY7QUFFRSxjQUFNLEVBQUU7QUFDTmMsaUJBQU8sRUFBRSxpQkFESDtBQUVOQyxrQkFBUSxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBRVAsa0JBQUksRUFBRTtBQUFSLGFBQWQsQ0FBTjtBQUFBO0FBRkosU0FGVjtBQU1FLGFBQUssRUFBRUgsR0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFSRixDQUpGLENBRFMsR0FpQlQ7QUFDQSxZQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoQ0osQ0FERjtBQXFDRDs7OztFQTFDaUJtQiw0Q0FBSyxDQUFDQyxTOztBQWtEWGxCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBQYWdlLCBMYXlvdXQsIEVtcHR5U3RhdGUsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QnO1xuXG5jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xuXG5cblxuLy8gY29uc3QgcHJvZHVjdEltYWdlQWRtaW5BUEkgPSBgaHR0cHM6Ly8wNWNlMDc1NTFhMTQwOTQ2MjZkNzYxMWE1YWE2NDI1NDpzaHBwYV83NjE4MjBmNmFlZWI4YjkyOTQ3NDNmNjYzOWQ0N2IwYkBzaG9weWZ5bGlxdWlkLm15c2hvcGlmeS5jb20vYWRtaW4vYXBpLzIwMjEtMDcvc2NyaXB0X3RhZ3MuanNvbmA7XG5jb25zdCBwcm9kdWN0SW1hZ2VBZG1pbkFQSSA9IGBodHRwczovL3Nob3B5ZnlsaXF1aWQubXlzaG9waWZ5LmNvbS9hZG1pbi9hcGkvMjAyMS0wNy9zY3JpcHRfdGFncy5qc29uYDtcbi8vIGxldCBwcm9taXNlID0gZmV0Y2gocHJvZHVjdEltYWdlQWRtaW5BUEksIHtcbi8vICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgIGJvZHk6IHtcbi8vICAgICBcInNjcmlwdF90YWdcIjoge1xuLy8gICAgICAgXCJldmVudFwiOiBcIm9ubG9hZFwiLFxuLy8gICAgICAgXCJzcmNcIjogXCJodHRwczovL3VucGtnLmNvbS92dWVAbmV4dFwiXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5cblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICByZW5kZXIoKSB7XG4gICAgLy8gQSBjb25zdGFudCB0aGF0IGRlZmluZXMgeW91ciBhcHAncyBlbXB0eSBzdGF0ZVxuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxUaXRsZUJhclxuICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIHtlbXB0eVN0YXRlID8gKCAvLyBDb250cm9scyB0aGUgbGF5b3V0IG9mIHlvdXIgYXBwJ3MgZW1wdHkgc3RhdGVcbiAgICAgICAgICA8TGF5b3V0PlxuXG4gICAgICAgICAgICA8cCBpZD0ndGFnX3NjcmlwdCc+dGVzdCB7cHJvZHVjdEltYWdlQWRtaW5BUEl9PC9wPlxuXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICBoZWFkaW5nPVwiRGlzY291bnQgeW91ciBwcm9kdWN0cyB0ZW1wb3JhcmlseVwiXG4gICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLy8gVXNlcyB0aGUgbmV3IHJlc291cmNlIGxpc3QgdGhhdCByZXRyaWV2ZXMgcHJvZHVjdHMgYnkgSURzXG4gICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxuICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})