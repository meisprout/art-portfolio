"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n//export default function handler(req, res) {\n// res.status(200).json({ name: 'John Doe' })\n//}\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const response = await notion.pages.retrieve({\n        page_id: process.env.NOTION_ABOUT\n    });\n    const allHome = response;\n    res.status(200).json(allHome);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRTdFLDZDQUE2QztBQUM1Qyw2Q0FBNkM7QUFDOUMsR0FBRztBQUN1QztBQUUxQyxNQUFNQyxTQUFTLElBQUlELG9EQUFNQSxDQUFDO0lBQ3hCRSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDbEM7QUFFQSxpRUFBZSxPQUFPQyxLQUFJQyxNQUFNO0lBQzlCLE1BQU1DLFdBQVcsTUFBTVAsT0FBT1EsS0FBSyxDQUFDQyxRQUFRLENBQUM7UUFDM0NDLFNBQVNSLFFBQVFDLEdBQUcsQ0FBQ1EsWUFBWTtJQUNuQztJQUNBLE1BQU1DLFVBQVVMO0lBQ2hCRCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtBQUN2QixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LXBvcnRmb2xpby8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbi8vZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxuLy99XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5vdGlvbmhxL2NsaWVudFwiO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHtcbiAgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcyk9PntcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24ucGFnZXMucmV0cmlldmUoeyBcbiAgICBwYWdlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fQUJPVVQsXG4gIH0pO1xuICBjb25zdCBhbGxIb21lID0gcmVzcG9uc2U7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbEhvbWUpO1xufVxuIl0sIm5hbWVzIjpbIkNsaWVudCIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX0FQSV9LRVkiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsInBhZ2VzIiwicmV0cmlldmUiLCJwYWdlX2lkIiwiTk9USU9OX0FCT1VUIiwiYWxsSG9tZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();