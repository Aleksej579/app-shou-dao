webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ResourceList */ \"./pages/components/ResourceList.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/alexey/test-app-shou-dao/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\nvar url_ = \"https://shopyfyliquid.myshopify.com/admin/api/2021-07/script_tags.json\";\nvar response = fetch(url_, {\n  method: 'post',\n  body: JSON.stringify({\n    \"script_tag\": {\n      \"event\": \"onload\",\n      \"src\": \"https://unpkg.com/vue@next\"\n    }\n  })\n});\nconsole.log(response.json());\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSelection\", function (resources) {\n      var idsFromResources = resources.selection.map(function (product) {\n        return product.id;\n      });\n\n      _this.setState({\n        open: false\n      });\n\n      store_js__WEBPACK_IMPORTED_MODULE_12___default.a.set('ids', idsFromResources);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // A constant that defines your app's empty state\n      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_12___default.a.get('ids');\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__[\"Page\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 7\n        }\n      }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__[\"TitleBar\"], {\n        primaryAction: {\n          content: 'Select products',\n          onAction: function onAction() {\n            return _this2.setState({\n              open: true\n            });\n          }\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }\n      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__[\"ResourcePicker\"], {\n        resourceType: \"Product\",\n        showVariants: false,\n        open: this.state.open,\n        onSelection: function onSelection(resources) {\n          return _this2.handleSelection(resources);\n        },\n        onCancel: function onCancel() {\n          return _this2.setState({\n            open: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }), emptyState ? // Controls the layout of your app's empty state\n      __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__[\"Layout\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }\n      }, __jsx(\"p\", {\n        id: \"tag_script\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }\n      }, \"test\"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__[\"EmptyState\"], {\n        heading: \"Discount your products temporarily\",\n        action: {\n          content: 'Select products',\n          onAction: function onAction() {\n            return _this2.setState({\n              open: true\n            });\n          }\n        },\n        image: img,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 15\n        }\n      }, \"Select products to change their price temporarily.\"))) : // Uses the new resource list that retrieves products by IDs\n      __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJ1cmxfIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImpzb24iLCJJbmRleCIsIm9wZW4iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUmVzb3VyY2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkIiwic2V0U3RhdGUiLCJzdG9yZSIsInNldCIsImVtcHR5U3RhdGUiLCJnZXQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJzdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjtBQUlBLElBQU1DLElBQUksMkVBQVY7QUFDQSxJQUFJQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0YsSUFBRCxFQUFPO0FBQ3pCRyxRQUFNLEVBQUUsTUFEaUI7QUFFekJDLE1BQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkIsa0JBQWM7QUFDWixlQUFTLFFBREc7QUFFWixhQUFPO0FBRks7QUFESyxHQUFmO0FBRm1CLENBQVAsQ0FBcEI7QUFTQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFaOztJQUlNQyxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQUVDLFVBQUksRUFBRTtBQUFSLEs7OzBOQTBDVSxVQUFDQyxTQUFELEVBQWU7QUFDL0IsVUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsRUFBckI7QUFBQSxPQUF4QixDQUF6Qjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFBRVAsWUFBSSxFQUFFO0FBQVIsT0FBZDs7QUFDQVEsc0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBaUJQLGdCQUFqQjtBQUNELEs7Ozs7Ozs7NkJBN0NRO0FBQUE7O0FBQ1A7QUFDQSxVQUFNUSxVQUFVLEdBQUcsQ0FBQ0YsZ0RBQUssQ0FBQ0csR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFDQSxhQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbUVBQUQ7QUFDRSxxQkFBYSxFQUFFO0FBQ2JDLGlCQUFPLEVBQUUsaUJBREk7QUFFYkMsa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUVQLGtCQUFJLEVBQUU7QUFBUixhQUFkLENBQU47QUFBQTtBQUZHLFNBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU9FLE1BQUMseUVBQUQ7QUFDRSxvQkFBWSxFQUFDLFNBRGY7QUFFRSxvQkFBWSxFQUFFLEtBRmhCO0FBR0UsWUFBSSxFQUFFLEtBQUtjLEtBQUwsQ0FBV2QsSUFIbkI7QUFJRSxtQkFBVyxFQUFFLHFCQUFDQyxTQUFEO0FBQUEsaUJBQWUsTUFBSSxDQUFDYyxlQUFMLENBQXFCZCxTQUFyQixDQUFmO0FBQUEsU0FKZjtBQUtFLGdCQUFRLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNNLFFBQUwsQ0FBYztBQUFFUCxnQkFBSSxFQUFFO0FBQVIsV0FBZCxDQUFOO0FBQUEsU0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEYsRUFjR1UsVUFBVSxHQUFLO0FBQ2QsWUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBRyxVQUFFLEVBQUMsWUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBSUUsTUFBQyw0REFBRDtBQUNFLGVBQU8sRUFBQyxvQ0FEVjtBQUVFLGNBQU0sRUFBRTtBQUNORSxpQkFBTyxFQUFFLGlCQURIO0FBRU5DLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFFUCxrQkFBSSxFQUFFO0FBQVIsYUFBZCxDQUFOO0FBQUE7QUFGSixTQUZWO0FBTUUsYUFBSyxFQUFFWixHQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQVJGLENBSkYsQ0FEUyxHQWlCVDtBQUNBLFlBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhDSixDQURGO0FBcUNEOzs7O0VBMUNpQjRCLDRDQUFLLENBQUNDLFM7O0FBa0RYbEIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IFBhZ2UsIExheW91dCwgRW1wdHlTdGF0ZSwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdCc7XG5cbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XG5cblxuXG5jb25zdCB1cmxfID0gYGh0dHBzOi8vc2hvcHlmeWxpcXVpZC5teXNob3BpZnkuY29tL2FkbWluL2FwaS8yMDIxLTA3L3NjcmlwdF90YWdzLmpzb25gO1xubGV0IHJlc3BvbnNlID0gZmV0Y2godXJsXywge1xuICBtZXRob2Q6ICdwb3N0JyxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIFwic2NyaXB0X3RhZ1wiOiB7XG4gICAgICBcImV2ZW50XCI6IFwib25sb2FkXCIsXG4gICAgICBcInNyY1wiOiBcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZUBuZXh0XCJcbiAgICB9XG4gIH0pXG59KTtcbmNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSlcblxuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XG4gIHJlbmRlcigpIHtcbiAgICAvLyBBIGNvbnN0YW50IHRoYXQgZGVmaW5lcyB5b3VyIGFwcCdzIGVtcHR5IHN0YXRlXG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXG4gICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgLz5cbiAgICAgICAge2VtcHR5U3RhdGUgPyAoIC8vIENvbnRyb2xzIHRoZSBsYXlvdXQgb2YgeW91ciBhcHAncyBlbXB0eSBzdGF0ZVxuICAgICAgICAgIDxMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxwIGlkPSd0YWdfc2NyaXB0Jz50ZXN0PC9wPlxuXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICBoZWFkaW5nPVwiRGlzY291bnQgeW91ciBwcm9kdWN0cyB0ZW1wb3JhcmlseVwiXG4gICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLy8gVXNlcyB0aGUgbmV3IHJlc291cmNlIGxpc3QgdGhhdCByZXRyaWV2ZXMgcHJvZHVjdHMgYnkgSURzXG4gICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxuICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})