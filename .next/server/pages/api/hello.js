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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n//export default function handler(req, res) {\n// res.status(200).json({ name: 'John Doe' })\n//}\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_HOME\n    });\n    const allHome = response.results;\n    res.status(200).json(allHome[0].properties.Image.files[0].file.url);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRTdFLDZDQUE2QztBQUM1Qyw2Q0FBNkM7QUFDOUMsR0FBRztBQUN1QztBQUUxQyxNQUFNQyxTQUFTLElBQUlELG9EQUFNQSxDQUFDO0lBQ3hCRSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDbEM7QUFDQSxpRUFBZSxPQUFPQyxLQUFJQyxNQUFNO0lBQzlCLE1BQU1DLFdBQVcsTUFBTVAsT0FBT1EsU0FBUyxDQUFDQyxLQUFLLENBQUM7UUFDNUNDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ1EsV0FBVztJQUN0QztJQUNBLE1BQU1DLFVBQVVMLFNBQVNNLE9BQU87SUFDaENQLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNILE9BQU8sQ0FBQyxFQUFFLENBQUNJLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLEdBQUc7QUFDcEUsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvaGVsbG8uanM/MWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG4vL2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6ICdKb2huIERvZScgfSlcbi8vfVxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIkBub3Rpb25ocS9jbGllbnRcIjtcblxuY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7XG4gIGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9BUElfS0VZLFxufSlcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKT0+e1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoeyBcbiAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0hPTUUsXG4gIH0pO1xuICBjb25zdCBhbGxIb21lID0gcmVzcG9uc2UucmVzdWx0cztcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsSG9tZVswXS5wcm9wZXJ0aWVzLkltYWdlLmZpbGVzWzBdLmZpbGUudXJsKTtcbn0iXSwibmFtZXMiOlsiQ2xpZW50Iiwibm90aW9uIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fQVBJX0tFWSIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZGF0YWJhc2VzIiwicXVlcnkiLCJkYXRhYmFzZV9pZCIsIk5PVElPTl9IT01FIiwiYWxsSG9tZSIsInJlc3VsdHMiLCJzdGF0dXMiLCJqc29uIiwicHJvcGVydGllcyIsIkltYWdlIiwiZmlsZXMiLCJmaWxlIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

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