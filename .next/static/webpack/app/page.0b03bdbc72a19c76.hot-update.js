"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/elements/AddClassBody.js":
/*!*********************************************!*\
  !*** ./components/elements/AddClassBody.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddClassBody; }\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nfunction AddClassBody() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const bodyElement = document.querySelector(\"body\");\n        if (bodyElement) {\n            // Remove all header classes\n            bodyElement.classList.remove(\"header-1\", \"header-2\", \"header-3\");\n            // Mapping of pathnames to classes\n            const classMapping = {\n                \"/\": \"header-2\",\n                \"/author-details\": \"header-1\",\n                \"/video-playlist-1\": \"header-1\",\n                \"/video-playlist-2\": \"header-1\",\n                \"/video-playlist-3\": \"header-1\",\n                \"/blog-default\": \"header-1\",\n                \"/blog-layout-1\": \"header-1\",\n                \"/blog-layout-2\": \"header-1\",\n                \"/blog-layout-3\": \"header-1\",\n                \"/blog-layout-4\": \"header-1\",\n                \"/single-post-1\": \"header-1\",\n                \"/single-post-2\": \"header-1\",\n                \"/single-post-3\": \"header-1\",\n                \"/about\": \"header-1\",\n                \"/team\": \"header-1\",\n                \"/team-single\": \"header-1\",\n                \"/error-page\": \"header-1\",\n                \"/contact\": \"header-1\"\n            };\n            // Add class based on pathname if exists in mapping\n            const headerClass = classMapping[pathname];\n            if (headerClass) {\n                bodyElement.classList.add(headerClass);\n            }\n        }\n    }, [\n        pathname\n    ]);\n    return null;\n}\n_s(AddClassBody, \"V/ldUoOTYUs0Cb2F6bbxKSn7KxI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname\n    ];\n});\n_c = AddClassBody;\nvar _c;\n$RefreshReg$(_c, \"AddClassBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZWxlbWVudHMvQWRkQ2xhc3NCb2R5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzZDO0FBQ1o7QUFFbEIsU0FBU0U7O0lBQ3ZCLE1BQU1DLFdBQVdILDREQUFXQTtJQUU1QkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNRyxjQUFjQyxTQUFTQyxhQUFhLENBQUM7UUFFM0MsSUFBSUYsYUFBYTtZQUNoQiw0QkFBNEI7WUFDNUJBLFlBQVlHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksWUFBWTtZQUVyRCxrQ0FBa0M7WUFDbEMsTUFBTUMsZUFBZTtnQkFDcEIsS0FBSztnQkFDTCxtQkFBbUI7Z0JBQ25CLHFCQUFxQjtnQkFDckIscUJBQXFCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLGlCQUFpQjtnQkFDakIsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixVQUFVO2dCQUNWLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFlBQVk7WUFDYjtZQUVBLG1EQUFtRDtZQUNuRCxNQUFNQyxjQUFjRCxZQUFZLENBQUNOLFNBQVM7WUFDMUMsSUFBSU8sYUFBYTtnQkFDaEJOLFlBQVlHLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDRDtZQUMzQjtRQUNEO0lBQ0QsR0FBRztRQUFDUDtLQUFTO0lBRWIsT0FBTztBQUNSO0dBekN3QkQ7O1FBQ05GLHdEQUFXQTs7O0tBRExFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZWxlbWVudHMvQWRkQ2xhc3NCb2R5LmpzP2NjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZENsYXNzQm9keSgpIHtcclxuXHRjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcblxyXG5cdFx0aWYgKGJvZHlFbGVtZW50KSB7XHJcblx0XHRcdC8vIFJlbW92ZSBhbGwgaGVhZGVyIGNsYXNzZXNcclxuXHRcdFx0Ym9keUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLTEnLCAnaGVhZGVyLTInLCAnaGVhZGVyLTMnKVxyXG5cclxuXHRcdFx0Ly8gTWFwcGluZyBvZiBwYXRobmFtZXMgdG8gY2xhc3Nlc1xyXG5cdFx0XHRjb25zdCBjbGFzc01hcHBpbmcgPSB7XHJcblx0XHRcdFx0Jy8nOiAnaGVhZGVyLTInLFxyXG5cdFx0XHRcdCcvYXV0aG9yLWRldGFpbHMnOiAnaGVhZGVyLTEnLFxyXG5cdFx0XHRcdCcvdmlkZW8tcGxheWxpc3QtMSc6ICdoZWFkZXItMScsXHJcblx0XHRcdFx0Jy92aWRlby1wbGF5bGlzdC0yJzogJ2hlYWRlci0xJyxcclxuXHRcdFx0XHQnL3ZpZGVvLXBsYXlsaXN0LTMnOiAnaGVhZGVyLTEnLFxyXG5cdFx0XHRcdCcvYmxvZy1kZWZhdWx0JzogJ2hlYWRlci0xJyxcclxuXHRcdFx0XHQnL2Jsb2ctbGF5b3V0LTEnOiAnaGVhZGVyLTEnLFxyXG5cdFx0XHRcdCcvYmxvZy1sYXlvdXQtMic6ICdoZWFkZXItMScsXHJcblx0XHRcdFx0Jy9ibG9nLWxheW91dC0zJzogJ2hlYWRlci0xJyxcclxuXHRcdFx0XHQnL2Jsb2ctbGF5b3V0LTQnOiAnaGVhZGVyLTEnLFxyXG5cdFx0XHRcdCcvc2luZ2xlLXBvc3QtMSc6ICdoZWFkZXItMScsXHJcblx0XHRcdFx0Jy9zaW5nbGUtcG9zdC0yJzogJ2hlYWRlci0xJyxcclxuXHRcdFx0XHQnL3NpbmdsZS1wb3N0LTMnOiAnaGVhZGVyLTEnLFxyXG5cdFx0XHRcdCcvYWJvdXQnOiAnaGVhZGVyLTEnLFxyXG5cdFx0XHRcdCcvdGVhbSc6ICdoZWFkZXItMScsXHJcblx0XHRcdFx0Jy90ZWFtLXNpbmdsZSc6ICdoZWFkZXItMScsXHJcblx0XHRcdFx0Jy9lcnJvci1wYWdlJzogJ2hlYWRlci0xJyxcclxuXHRcdFx0XHQnL2NvbnRhY3QnOiAnaGVhZGVyLTEnXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCBjbGFzcyBiYXNlZCBvbiBwYXRobmFtZSBpZiBleGlzdHMgaW4gbWFwcGluZ1xyXG5cdFx0XHRjb25zdCBoZWFkZXJDbGFzcyA9IGNsYXNzTWFwcGluZ1twYXRobmFtZV1cclxuXHRcdFx0aWYgKGhlYWRlckNsYXNzKSB7XHJcblx0XHRcdFx0Ym9keUVsZW1lbnQuY2xhc3NMaXN0LmFkZChoZWFkZXJDbGFzcylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtwYXRobmFtZV0pXHJcblxyXG5cdHJldHVybiBudWxsXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwiQWRkQ2xhc3NCb2R5IiwicGF0aG5hbWUiLCJib2R5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsYXNzTWFwcGluZyIsImhlYWRlckNsYXNzIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/elements/AddClassBody.js\n"));

/***/ })

});