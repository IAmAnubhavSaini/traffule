/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signs",{

/***/ "./pages/signs.tsx":
/*!*************************!*\
  !*** ./pages/signs.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_f0c1s_Code_github_iamanubhavsaini_traffule_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _public_data_allSigns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/data/allSigns */ \"./public/data/allSigns.ts\");\n/* harmony import */ var _public_data_allSigns_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/data/allSigns_hi */ \"./public/data/allSigns_hi.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toggle */ \"./node_modules/react-toggle/dist/component/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/f0c1s/Code/github/iamanubhavsaini/traffule/pages/signs.tsx\",\n    _s = $RefreshSig$();\n\nfunction _templateObject3() {\n  var data = (0,_home_f0c1s_Code_github_iamanubhavsaini_traffule_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  margin: 3vh 0;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = (0,_home_f0c1s_Code_github_iamanubhavsaini_traffule_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  padding: 1vh 0;\\n  width: 100%;\\n  font-size: 1rem;\\n  background-color: var(--black);\\n  color: var(--white);\\n  font-weight: bold;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_home_f0c1s_Code_github_iamanubhavsaini_traffule_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));\\n  grid-gap: 1vw;\\n  text-align: center;\\n\\n  @media (max-width: 1200px) {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n  @media (max-width: 800px) {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  div.sign {\\n    text-align: center;\\n    border: thin solid var(--black);\\n    padding: .2vh .2vw;\\n    counter-increment: signs;\\n    position: relative;\\n\\n    &::before {\\n      content: counter(signs);\\n      background-color: black;\\n      color: white;\\n      width: 2vw;\\n      display: inline-block;\\n      top: -1vh;\\n      position: relative;\\n      border: thin solid black;\\n      border-radius: 0 0 50% 50%;\\n      padding: 1vh 0;\\n      z-index: 100;\\n    }\\n  }\\n\\n  img {\\n    display: block;\\n    min-height: 200px;\\n    height: 20vh;\\n    margin: 3vh 1vw;\\n    padding: 1vh 1vw;\\n  }\\n\\n  p.description {\\n    text-align: left;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar StyledSignsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject());\n_c = StyledSignsContainer;\nvar StyledCaption = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject2());\n_c2 = StyledCaption;\nvar StyledLanguageControl = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject3());\n_c3 = StyledLanguageControl;\n\nfunction getSignsByLanguage(language) {\n  switch (language) {\n    case \"EN\":\n      return _public_data_allSigns__WEBPACK_IMPORTED_MODULE_2__.default;\n\n    case \"HI\":\n      return _public_data_allSigns_hi__WEBPACK_IMPORTED_MODULE_3__.default;\n\n    default:\n      return _public_data_allSigns__WEBPACK_IMPORTED_MODULE_2__.default;\n  }\n}\n\nfunction Signs() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      useEnglish = _useState[0],\n      setUseEnglish = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledLanguageControl, {\n      className: \"language-control control\",\n      children: [\"Hindi\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {\n        defaultChecked: useEnglish,\n        onChange: function onChange() {\n          return setUseEnglish(!useEnglish);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }, this), \"English\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSignsContainer, {\n      children: getSignsByLanguage(useEnglish ? 'EN' : 'HI').signs.map(function (sign, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"sign\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"img/\".concat(index + 1, \".png\"),\n            alt: sign.signDescription,\n            title: sign.signDescription\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 33\n          }, _this), sign.signCaption.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledCaption, {\n            children: sign.signCaption\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 65\n          }, _this), sign.signDescription.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"description\",\n            children: sign.signDescription\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 33\n          }, _this)]\n        }, \"sign-\".concat(index, \"-\").concat(sign.signName), true, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 36\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Signs, \"Y6zsN2Aj/BbBB9GymMhgzlTHVBM=\");\n\n_c4 = Signs;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"StyledSignsContainer\");\n$RefreshReg$(_c2, \"StyledCaption\");\n$RefreshReg$(_c3, \"StyledLanguageControl\");\n$RefreshReg$(_c4, \"Signs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnMudHN4P2MwMzgiXSwibmFtZXMiOlsiU3R5bGVkU2lnbnNDb250YWluZXIiLCJzdHlsZWQiLCJTdHlsZWRDYXB0aW9uIiwiU3R5bGVkTGFuZ3VhZ2VDb250cm9sIiwiZ2V0U2lnbnNCeUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJhbGxTaWducyIsImFsbFNpZ25zX2hpIiwiU2lnbnMiLCJ1c2VTdGF0ZSIsInVzZUVuZ2xpc2giLCJzZXRVc2VFbmdsaXNoIiwic2lnbnMiLCJtYXAiLCJzaWduIiwiaW5kZXgiLCJzaWduRGVzY3JpcHRpb24iLCJzaWduQ2FwdGlvbiIsImxlbmd0aCIsInNpZ25OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLDBEQUFILG1CQUExQjtLQUFNRCxvQjtBQWdETixJQUFNRSxhQUFhLEdBQUdELDBEQUFILG9CQUFuQjtNQUFNQyxhO0FBU04sSUFBTUMscUJBQXFCLEdBQUdGLDBEQUFILG9CQUEzQjtNQUFNRSxxQjs7QUFJTixTQUFTQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBbUQ7QUFDL0MsVUFBUUEsUUFBUjtBQUNJLFNBQUssSUFBTDtBQUNJLGFBQU9DLDBEQUFQOztBQUNKLFNBQUssSUFBTDtBQUNJLGFBQU9DLDZEQUFQOztBQUNKO0FBQ0ksYUFBT0QsMERBQVA7QUFOUjtBQVFIOztBQUVjLFNBQVNFLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxJQUFELENBRGhCO0FBQUEsTUFDckJDLFVBRHFCO0FBQUEsTUFDVEMsYUFEUzs7QUFHNUIsc0JBQ0k7QUFBQSw0QkFJSSw4REFBQyxxQkFBRDtBQUF1QixlQUFTLEVBQUMsMEJBQWpDO0FBQUEsdUNBRUksOERBQUMsaURBQUQ7QUFBUSxzQkFBYyxFQUFFRCxVQUF4QjtBQUNRLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUMsYUFBYSxDQUFDLENBQUNELFVBQUYsQ0FBbkI7QUFBQTtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFVSSw4REFBQyxvQkFBRDtBQUFBLGdCQUdRTixrQkFBa0IsQ0FBQ00sVUFBVSxHQUFHLElBQUgsR0FBVSxJQUFyQixDQUFsQixDQUNLRSxLQURMLENBRUtDLEdBRkwsQ0FFUyxVQUFDQyxJQUFELEVBQWNDLEtBQWQsRUFBZ0M7QUFDakMsNEJBQU87QUFBSyxtQkFBUyxFQUFFLE1BQWhCO0FBQUEsa0NBQ0g7QUFDSSxlQUFHLGdCQUFTQSxLQUFLLEdBQUcsQ0FBakIsU0FEUDtBQUVJLGVBQUcsRUFBRUQsSUFBSSxDQUFDRSxlQUZkO0FBR0ksaUJBQUssRUFBRUYsSUFBSSxDQUFDRTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURHLEVBS0ZGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsTUFBakIsR0FBMEIsQ0FBMUIsaUJBQStCLDhEQUFDLGFBQUQ7QUFBQSxzQkFBZ0JKLElBQUksQ0FBQ0c7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMN0IsRUFNRkgsSUFBSSxDQUFDRSxlQUFMLENBQXFCRSxNQUFyQixHQUE4QixDQUE5QixpQkFDRDtBQUFHLHFCQUFTLEVBQUMsYUFBYjtBQUFBLHNCQUE0QkosSUFBSSxDQUFDRTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBHO0FBQUEsMEJBQXFDRCxLQUFyQyxjQUE4Q0QsSUFBSSxDQUFDSyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBU0gsT0FaTDtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBLGtCQURKO0FBaUNIOztHQXBDdUJYLEs7O01BQUFBLEsiLCJmaWxlIjoiLi9wYWdlcy9zaWducy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWxsU2lnbnMsIHtTaWduVH0gZnJvbSBcIi4uL3B1YmxpYy9kYXRhL2FsbFNpZ25zXCI7XG5pbXBvcnQgYWxsU2lnbnNfaGkgZnJvbSBcIi4uL3B1YmxpYy9kYXRhL2FsbFNpZ25zX2hpXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdyZWFjdC10b2dnbGUnO1xuXG5jb25zdCBTdHlsZWRTaWduc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTV2dywgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICBkaXYuc2lnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgcGFkZGluZzogLjJ2aCAuMnZ3O1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzaWducztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogY291bnRlcihzaWducyk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAydnc7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0b3A6IC0xdmg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcbiAgICAgIHBhZGRpbmc6IDF2aCAwO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIG1hcmdpbjogM3ZoIDF2dztcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xuICB9XG5cbiAgcC5kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDF2aCAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgU3R5bGVkTGFuZ3VhZ2VDb250cm9sID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAzdmggMDtcbmA7XG5cbmZ1bmN0aW9uIGdldFNpZ25zQnlMYW5ndWFnZShsYW5ndWFnZTogJ0VOJyB8ICdISScpIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJFTlwiOlxuICAgICAgICAgICAgcmV0dXJuIGFsbFNpZ25zO1xuICAgICAgICBjYXNlIFwiSElcIjpcbiAgICAgICAgICAgIHJldHVybiBhbGxTaWduc19oaTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhbGxTaWducztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25zKCkge1xuICAgIGNvbnN0IFt1c2VFbmdsaXNoLCBzZXRVc2VFbmdsaXNoXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPiovfVxuICAgICAgICAgICAgey8qICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoLi4uXCIgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIvPiovfVxuICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICA8U3R5bGVkTGFuZ3VhZ2VDb250cm9sIGNsYXNzTmFtZT1cImxhbmd1YWdlLWNvbnRyb2wgY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIEhpbmRpXG4gICAgICAgICAgICAgICAgPFRvZ2dsZSBkZWZhdWx0Q2hlY2tlZD17dXNlRW5nbGlzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRVc2VFbmdsaXNoKCF1c2VFbmdsaXNoKX0vPlxuICAgICAgICAgICAgICAgIEVuZ2xpc2hcbiAgICAgICAgICAgIDwvU3R5bGVkTGFuZ3VhZ2VDb250cm9sPlxuICAgICAgICAgICAgPFN0eWxlZFNpZ25zQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBnZXRTaWduc0J5TGFuZ3VhZ2UodXNlRW5nbGlzaCA/ICdFTicgOiAnSEknKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZ25zXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChzaWduOiBTaWduVCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJzaWduXCJ9IGtleT17YHNpZ24tJHtpbmRleH0tJHtzaWduLnNpZ25OYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BpbWcvJHtpbmRleCArIDF9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3NpZ24uc2lnbkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NpZ24uc2lnbkRlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaWduLnNpZ25DYXB0aW9uLmxlbmd0aCA+IDAgJiYgPFN0eWxlZENhcHRpb24+e3NpZ24uc2lnbkNhcHRpb259PC9TdHlsZWRDYXB0aW9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpZ24uc2lnbkRlc2NyaXB0aW9uLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57c2lnbi5zaWduRGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9TdHlsZWRTaWduc0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgKTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signs.tsx\n");

/***/ })

});