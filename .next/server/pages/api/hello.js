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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n//export default function handler(req, res) {\n// res.status(200).json({ name: 'John Doe' })\n//}\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_CONTACT\n    });\n    const allHome = response.results;\n    /*return allHome.map((ctc)=>{\n    res.status(200).json(getContactData(ctc));\n  })*/ res.status(200).json(allHome[1]);\n});\nconst getContactData = (data)=>{\n    return {\n        id: data.id,\n        name: data.properties.Name.title[0].plain_text,\n        link: data.properties.Link.rich_text[0].text.content\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRTdFLDZDQUE2QztBQUM1Qyw2Q0FBNkM7QUFDOUMsR0FBRztBQUN1QztBQUUxQyxNQUFNQyxTQUFTLElBQUlELG9EQUFNQSxDQUFDO0lBQ3hCRSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDbEM7QUFFQSxpRUFBZSxPQUFPQyxLQUFJQyxNQUFNO0lBQzlCLE1BQU1DLFdBQVcsTUFBTVAsT0FBT1EsU0FBUyxDQUFDQyxLQUFLLENBQUM7UUFDNUNDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ1EsY0FBYztJQUMzQztJQUNFLE1BQU1DLFVBQVVMLFNBQVNNLE9BQU87SUFFaEM7O0lBRUUsR0FDRlAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLEVBQUU7QUFFakMsR0FBQztBQUVELE1BQU1JLGlCQUFpQixDQUFDQyxPQUFTO0lBQ2pDLE9BQU87UUFDTEMsSUFBSUQsS0FBS0MsRUFBRTtRQUNYQyxNQUFLRixLQUFLRyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtRQUM3Q0MsTUFBS1AsS0FBS0csVUFBVSxDQUFDSyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsT0FBTztJQUNyRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LXBvcnRmb2xpby8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbi8vZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxuLy99XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5vdGlvbmhxL2NsaWVudFwiO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHtcbiAgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcyk9PntcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0NPTlRBQ1QsXG59KTtcbiAgY29uc3QgYWxsSG9tZSA9IHJlc3BvbnNlLnJlc3VsdHM7XG4gIFxuICAvKnJldHVybiBhbGxIb21lLm1hcCgoY3RjKT0+e1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGdldENvbnRhY3REYXRhKGN0YykpO1xuICB9KSovXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbEhvbWVbMV0pO1xuIFxufVxuXG5jb25zdCBnZXRDb250YWN0RGF0YSA9IChkYXRhKSA9PiB7XG5yZXR1cm4ge1xuICBpZDogZGF0YS5pZCxcbiAgbmFtZTpkYXRhLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LFxuICBsaW5rOmRhdGEucHJvcGVydGllcy5MaW5rLnJpY2hfdGV4dFswXS50ZXh0LmNvbnRlbnQsXG59O1xufSJdLCJuYW1lcyI6WyJDbGllbnQiLCJub3Rpb24iLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJkYXRhYmFzZXMiLCJxdWVyeSIsImRhdGFiYXNlX2lkIiwiTk9USU9OX0NPTlRBQ1QiLCJhbGxIb21lIiwicmVzdWx0cyIsInN0YXR1cyIsImpzb24iLCJnZXRDb250YWN0RGF0YSIsImRhdGEiLCJpZCIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiTmFtZSIsInRpdGxlIiwicGxhaW5fdGV4dCIsImxpbmsiLCJMaW5rIiwicmljaF90ZXh0IiwidGV4dCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

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