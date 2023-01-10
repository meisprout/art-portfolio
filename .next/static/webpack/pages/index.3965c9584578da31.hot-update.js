"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/notion.js":
/*!***********************!*\
  !*** ./lib/notion.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAbout\": function() { return /* binding */ getAbout; },\n/* harmony export */   \"getAllWorks\": function() { return /* binding */ getAllWorks; },\n/* harmony export */   \"getLanding\": function() { return /* binding */ getLanding; },\n/* harmony export */   \"getSinglePost\": function() { return /* binding */ getSinglePost; }\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"./node_modules/@notionhq/client/build/src/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nconst { NotionToMarkdown  } = __webpack_require__(/*! notion-to-md */ \"./node_modules/notion-to-md/build/index.js\");\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\nconst n2m = new NotionToMarkdown({\n    notionClient: notion\n});\nconst getAllWorks = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_WORKS\n    });\n    const allWorks = response.results;\n    return allWorks.map((wrk)=>{\n        return getWorks(wrk);\n    });\n};\nconst getWorks = (wrk)=>{\n    return {\n        id: wrk.id,\n        title: wrk.properties.Name.title[0].plain_text,\n        slug: wrk.properties.Slug.formula.string\n    };\n};\nconst getSinglePost = async (slug)=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_WORKS,\n        filter: {\n            property: \"Slug\",\n            formula: {\n                string: {\n                    equals: slug\n                }\n            }\n        }\n    });\n    const page = response.results[0];\n    const mdblocks = await n2m.pageToMarkdown(page.id);\n    const mdString = n2m.toMarkdownString(mdblocks);\n    return {\n        markdown: mdString\n    };\n};\nconst getAbout = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_ABOUT\n    });\n    const allAbout = response.results;\n    return allAbout.map((abt)=>{\n        return getAboutData(abt);\n    });\n};\nconst getAboutData = (abt)=>{\n    return {\n        id: abt.id,\n        title: abt.properties.Name.title[0].plain_text\n    };\n};\nconst getLanding = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_HOME,\n        sorts: [\n            {\n                property: \"Position\",\n                direction: \"ascending\"\n            }\n        ]\n    });\n    const allLanding = response.results[0];\n    return getHomeData(allLanding);\n};\nconst getHomeData = (data)=>{\n    return {\n        id: data.id,\n        title: data.properties.Name.title[0].plain_text,\n        description: data.properties.Description.rich_text[0].text.content\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsQ0FBQzhCLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL25vdGlvbi5qcz9hNDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJAbm90aW9uaHEvY2xpZW50XCI7XHJcbmNvbnN0IHsgTm90aW9uVG9NYXJrZG93biB9ID0gcmVxdWlyZShcIm5vdGlvbi10by1tZFwiKTtcclxuXHJcblxyXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHtcclxuICBhdXRoOiBwcm9jZXNzLmVudi5OT1RJT05fQVBJX0tFWSxcclxufSlcclxuXHJcbmNvbnN0IG4ybSA9IG5ldyBOb3Rpb25Ub01hcmtkb3duKHsgbm90aW9uQ2xpZW50OiBub3Rpb24gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsV29ya3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xyXG4gICAgICAgIGRhdGFiYXNlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fV09SS1NcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgYWxsV29ya3MgPSByZXNwb25zZS5yZXN1bHRzO1xyXG4gIFxyXG4gICAgcmV0dXJuIGFsbFdvcmtzLm1hcCgod3JrKSA9PiB7XHJcbiAgICAgIHJldHVybiBnZXRXb3Jrcyh3cmspO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0V29ya3MgPSAod3JrKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogd3JrLmlkLFxyXG4gICAgICB0aXRsZTp3cmsucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHQsXHJcbiAgICAgIHNsdWc6d3JrLnByb3BlcnRpZXMuU2x1Zy5mb3JtdWxhLnN0cmluZyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVBvc3QgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcclxuICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9XT1JLUyxcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgcHJvcGVydHk6IFwiU2x1Z1wiLFxyXG4gICAgICAgIGZvcm11bGE6IHtcclxuICAgICAgICAgIHN0cmluZzoge1xyXG4gICAgICAgICAgICBlcXVhbHM6IHNsdWcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IHBhZ2UgPSByZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgY29uc3QgbWRibG9ja3MgPSBhd2FpdCBuMm0ucGFnZVRvTWFya2Rvd24ocGFnZS5pZCk7XHJcbiAgICBjb25zdCBtZFN0cmluZyA9IG4ybS50b01hcmtkb3duU3RyaW5nKG1kYmxvY2tzKTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1hcmtkb3duOiBtZFN0cmluZyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBYm91dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xyXG4gICAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0FCT1VUXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFsbEFib3V0ID0gcmVzcG9uc2UucmVzdWx0cztcclxuXHJcbiAgcmV0dXJuIGFsbEFib3V0Lm1hcCgoYWJ0KSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0QWJvdXREYXRhKGFidCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBYm91dERhdGEgPSAoYWJ0KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBhYnQuaWQsXHJcbiAgICB0aXRsZTphYnQucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExhbmRpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcclxuICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9IT01FLFxyXG4gICAgICBzb3J0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3BlcnR5OiAnUG9zaXRpb24nLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnYXNjZW5kaW5nJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhbGxMYW5kaW5nID0gcmVzcG9uc2UucmVzdWx0c1swXTtcclxuXHJcbiAgcmV0dXJuIGdldEhvbWVEYXRhKGFsbExhbmRpbmcpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SG9tZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIHRpdGxlOmRhdGEucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHQsXHJcbiAgICBkZXNjcmlwdGlvbjpkYXRhLnByb3BlcnRpZXMuRGVzY3JpcHRpb24ucmljaF90ZXh0WzBdLnRleHQuY29udGVudFxyXG4gIH07XHJcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiTm90aW9uVG9NYXJrZG93biIsInJlcXVpcmUiLCJub3Rpb24iLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwibjJtIiwibm90aW9uQ2xpZW50IiwiZ2V0QWxsV29ya3MiLCJyZXNwb25zZSIsImRhdGFiYXNlcyIsInF1ZXJ5IiwiZGF0YWJhc2VfaWQiLCJOT1RJT05fV09SS1MiLCJhbGxXb3JrcyIsInJlc3VsdHMiLCJtYXAiLCJ3cmsiLCJnZXRXb3JrcyIsImlkIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiTmFtZSIsInBsYWluX3RleHQiLCJzbHVnIiwiU2x1ZyIsImZvcm11bGEiLCJzdHJpbmciLCJnZXRTaW5nbGVQb3N0IiwiZmlsdGVyIiwicHJvcGVydHkiLCJlcXVhbHMiLCJwYWdlIiwibWRibG9ja3MiLCJwYWdlVG9NYXJrZG93biIsIm1kU3RyaW5nIiwidG9NYXJrZG93blN0cmluZyIsIm1hcmtkb3duIiwiZ2V0QWJvdXQiLCJOT1RJT05fQUJPVVQiLCJhbGxBYm91dCIsImFidCIsImdldEFib3V0RGF0YSIsImdldExhbmRpbmciLCJOT1RJT05fSE9NRSIsInNvcnRzIiwiZGlyZWN0aW9uIiwiYWxsTGFuZGluZyIsImdldEhvbWVEYXRhIiwiZGF0YSIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJyaWNoX3RleHQiLCJ0ZXh0IiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/notion.js\n"));

/***/ })

});