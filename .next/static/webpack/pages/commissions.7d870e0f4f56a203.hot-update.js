"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/commissions",{

/***/ "./lib/notion.js":
/*!***********************!*\
  !*** ./lib/notion.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAbout\": function() { return /* binding */ getAbout; },\n/* harmony export */   \"getAboutPage\": function() { return /* binding */ getAboutPage; },\n/* harmony export */   \"getAddtlFees\": function() { return /* binding */ getAddtlFees; },\n/* harmony export */   \"getAllContact\": function() { return /* binding */ getAllContact; },\n/* harmony export */   \"getAllWorks\": function() { return /* binding */ getAllWorks; },\n/* harmony export */   \"getLanding\": function() { return /* binding */ getLanding; },\n/* harmony export */   \"getPayInfo\": function() { return /* binding */ getPayInfo; },\n/* harmony export */   \"getRates\": function() { return /* binding */ getRates; },\n/* harmony export */   \"getSection\": function() { return /* binding */ getSection; }\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"./node_modules/@notionhq/client/build/src/index.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/request-meta */ \"./node_modules/next/dist/server/request-meta.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\nconst { NotionToMarkdown  } = __webpack_require__(/*! notion-to-md */ \"./node_modules/notion-to-md/build/index.js\");\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\nconst n2m = new NotionToMarkdown({\n    notionClient: notion\n});\nconst getAllWorks = async ()=>{\n    const response = await notion.pages.retrieve({\n        page_id: process.env.NOTION_WORKS\n    });\n    const page = response;\n    const mdblocks = await n2m.pageToMarkdown(page.id);\n    const mdString = n2m.toMarkdownString(mdblocks);\n    return {\n        markdown: mdString\n    };\n};\nconst getAboutPage = async ()=>{\n    const response = await notion.pages.retrieve({\n        page_id: process.env.NOTION_ABOUT\n    });\n    const page = response;\n    const mdblocks = await n2m.pageToMarkdown(page.id);\n    const mdString = n2m.toMarkdownString(mdblocks);\n    return {\n        markdown: mdString\n    };\n};\nconst getAbout = async ()=>{\n    const response = await notion.pages.retrieve({\n        page_id: process.env.NOTION_ABOUT\n    });\n    const page = response;\n    return page;\n};\nconst getAllContact = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_CONTACT,\n        \"sorts\": [\n            {\n                \"property\": \"Name\",\n                \"direction\": \"ascending\"\n            }\n        ]\n    });\n    const allContacts = response.results;\n    return allContacts.map((ctc)=>{\n        return getContacts(ctc);\n    });\n};\nconst getContacts = (ctc)=>{\n    return {\n        id: ctc.id,\n        account: ctc.properties.Name.title[0].plain_text,\n        link: ctc.properties.Link.rich_text[0].text.content\n    };\n};\nconst getLanding = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_HOME,\n        sorts: [\n            {\n                property: \"Section\",\n                direction: \"ascending\"\n            }\n        ]\n    });\n    const allLanding = response.results[0];\n    return getHomeData(allLanding);\n};\nconst getSection = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_HOME,\n        sorts: [\n            {\n                property: \"Section\",\n                direction: \"ascending\"\n            }\n        ]\n    });\n    const allSection = response.results[1];\n    return getHomeData(allSection);\n};\nconst getHomeData = (data)=>{\n    return {\n        id: data.id,\n        title: data.properties.Name.title[0].plain_text,\n        description: data.properties.Description.rich_text[0].text.content,\n        cover: data.properties.Image.files[0].file.url\n    };\n};\nconst getRates = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_COM_RATES,\n        sorts: [\n            {\n                property: \"Price (PHP)\",\n                direction: \"ascending\"\n            }\n        ]\n    });\n    const allRates = response.results;\n    return allRates.map((rts)=>{\n        return getRatesData(rts);\n    });\n};\nconst getRatesData = (data)=>{\n    return {\n        id: data.id,\n        name: data.properties.Name.title[0].plain_text,\n        sample: data.properties.Sample.files[0].file.url,\n        pesos: data.properties[\"Price (PHP)\"].number\n    };\n};\nconst getAddtlFees = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_COM_ADDTLFEES,\n        sorts: [\n            {\n                property: \"Name\",\n                direction: \"ascending\"\n            }\n        ]\n    });\n    const allRates = response.results;\n    return allRates.map((rts)=>{\n        return getAddtlFeesData(rts);\n    });\n};\nconst getAddtlFeesData = (data)=>{\n    return {\n        id: data.id,\n        name: data.properties.Name.title[0].plain_text,\n        pesos: data.properties[\"Price (PHP)\"].rich_text[0].text.content,\n        notes: data.properties.Notes.rich_text[0].text.content\n    };\n};\nconst getPayInfo = async ()=>{\n    const response = await notion.pages.retrieve({\n        page_id: process.env.NOTION_COM_PAYINFO\n    });\n    const page = response;\n    const mdblocks = await n2m.pageToMarkdown(page.id);\n    const mdString = n2m.toMarkdownString(mdblocks);\n    return {\n        markdown: mdString\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO1FBQ0xLLFVBQVVGO0lBQ1o7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9ub3Rpb24uanM/YTQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5vdGlvbmhxL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBnZXRSZXF1ZXN0TWV0YSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JlcXVlc3QtbWV0YVwiO1xyXG5jb25zdCB7IE5vdGlvblRvTWFya2Rvd24gfSA9IHJlcXVpcmUoXCJub3Rpb24tdG8tbWRcIik7XHJcblxyXG5cclxuY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7XHJcbiAgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVksXHJcbn0pXHJcblxyXG5jb25zdCBuMm0gPSBuZXcgTm90aW9uVG9NYXJrZG93bih7IG5vdGlvbkNsaWVudDogbm90aW9uIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFdvcmtzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLnBhZ2VzLnJldHJpZXZlKHsgXHJcbiAgICBwYWdlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fV09SS1MsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhZ2UgPSByZXNwb25zZTtcclxuICBjb25zdCBtZGJsb2NrcyA9IGF3YWl0IG4ybS5wYWdlVG9NYXJrZG93bihwYWdlLmlkKTtcclxuICBjb25zdCBtZFN0cmluZyA9IG4ybS50b01hcmtkb3duU3RyaW5nKG1kYmxvY2tzKTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgbWFya2Rvd246IG1kU3RyaW5nLFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWJvdXRQYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLnBhZ2VzLnJldHJpZXZlKHsgXHJcbiAgICBwYWdlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fQUJPVVQsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhZ2UgPSByZXNwb25zZTtcclxuICBjb25zdCBtZGJsb2NrcyA9IGF3YWl0IG4ybS5wYWdlVG9NYXJrZG93bihwYWdlLmlkKTtcclxuICBjb25zdCBtZFN0cmluZyA9IG4ybS50b01hcmtkb3duU3RyaW5nKG1kYmxvY2tzKTtcclxuICBcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgbWFya2Rvd246IG1kU3RyaW5nLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBYm91dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5wYWdlcy5yZXRyaWV2ZSh7IFxyXG4gICAgcGFnZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0FCT1VULFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYWdlID0gcmVzcG9uc2U7XHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxDb250YWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XHJcbiAgICAgIGRhdGFiYXNlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fQ09OVEFDVCxcclxuICAgICAgXCJzb3J0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcImFzY2VuZGluZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhbGxDb250YWN0cyA9IHJlc3BvbnNlLnJlc3VsdHM7XHJcblxyXG4gIHJldHVybiBhbGxDb250YWN0cy5tYXAoKGN0YykgPT4ge1xyXG4gICAgcmV0dXJuIGdldENvbnRhY3RzKGN0Yyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb250YWN0cyA9IChjdGMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGN0Yy5pZCxcclxuICAgIGFjY291bnQ6Y3RjLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LFxyXG4gICAgbGluazpjdGMucHJvcGVydGllcy5MaW5rLnJpY2hfdGV4dFswXS50ZXh0LmNvbnRlbnQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExhbmRpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcclxuICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9IT01FLFxyXG4gICAgICBzb3J0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3BlcnR5OiAnU2VjdGlvbicsXHJcbiAgICAgICAgICBkaXJlY3Rpb246ICdhc2NlbmRpbmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFsbExhbmRpbmcgPSByZXNwb25zZS5yZXN1bHRzWzBdO1xyXG5cclxuICByZXR1cm4gZ2V0SG9tZURhdGEoYWxsTGFuZGluZyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xyXG4gICAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0hPTUUsXHJcbiAgICAgIHNvcnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvcGVydHk6ICdTZWN0aW9uJyxcclxuICAgICAgICAgIGRpcmVjdGlvbjogJ2FzY2VuZGluZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWxsU2VjdGlvbiA9IHJlc3BvbnNlLnJlc3VsdHNbMV07XHJcblxyXG4gIHJldHVybiBnZXRIb21lRGF0YShhbGxTZWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGdldEhvbWVEYXRhID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICB0aXRsZTpkYXRhLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LFxyXG4gICAgZGVzY3JpcHRpb246ZGF0YS5wcm9wZXJ0aWVzLkRlc2NyaXB0aW9uLnJpY2hfdGV4dFswXS50ZXh0LmNvbnRlbnQsXHJcbiAgICBjb3ZlcjpkYXRhLnByb3BlcnRpZXMuSW1hZ2UuZmlsZXNbMF0uZmlsZS51cmxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmF0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcclxuICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9DT01fUkFURVMsXHJcbiAgICAgIHNvcnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvcGVydHk6ICdQcmljZSAoUEhQKScsXHJcbiAgICAgICAgICBkaXJlY3Rpb246ICdhc2NlbmRpbmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFsbFJhdGVzID0gcmVzcG9uc2UucmVzdWx0cztcclxuXHJcbiAgcmV0dXJuIGFsbFJhdGVzLm1hcCgocnRzKSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0UmF0ZXNEYXRhKHJ0cyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYXRlc0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIG5hbWU6ZGF0YS5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dCxcclxuICAgIHNhbXBsZTpkYXRhLnByb3BlcnRpZXMuU2FtcGxlLmZpbGVzWzBdLmZpbGUudXJsLFxyXG4gICAgcGVzb3M6ZGF0YS5wcm9wZXJ0aWVzWydQcmljZSAoUEhQKSddLm51bWJlcixcclxuICB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGdldEFkZHRsRmVlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XHJcbiAgICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9DT01fQUREVExGRUVTLFxyXG4gICAgICAgIHNvcnRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5OiAnTmFtZScsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FzY2VuZGluZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGFsbFJhdGVzID0gcmVzcG9uc2UucmVzdWx0cztcclxuICBcclxuICAgIHJldHVybiBhbGxSYXRlcy5tYXAoKHJ0cykgPT4ge1xyXG4gICAgICByZXR1cm4gZ2V0QWRkdGxGZWVzRGF0YShydHMpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBnZXRBZGR0bEZlZXNEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICBuYW1lOmRhdGEucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHQsXHJcbiAgICAgIHBlc29zOmRhdGEucHJvcGVydGllc1snUHJpY2UgKFBIUCknXS5yaWNoX3RleHRbMF0udGV4dC5jb250ZW50LFxyXG4gICAgICBub3RlczpkYXRhLnByb3BlcnRpZXMuTm90ZXMucmljaF90ZXh0WzBdLnRleHQuY29udGVudCxcclxuICAgIH07XHJcbiAgICB9XHJcbmV4cG9ydCBjb25zdCBnZXRQYXlJbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLnBhZ2VzLnJldHJpZXZlKHsgXHJcbiAgICBwYWdlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fQ09NX1BBWUlORk8sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhZ2UgPSByZXNwb25zZTtcclxuICBjb25zdCBtZGJsb2NrcyA9IGF3YWl0IG4ybS5wYWdlVG9NYXJrZG93bihwYWdlLmlkKTtcclxuICBjb25zdCBtZFN0cmluZyA9IG4ybS50b01hcmtkb3duU3RyaW5nKG1kYmxvY2tzKTtcclxuICBcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgbWFya2Rvd246IG1kU3RyaW5nLFxyXG4gIH07XHJcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiZ2V0UmVxdWVzdE1ldGEiLCJOb3Rpb25Ub01hcmtkb3duIiwicmVxdWlyZSIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX0FQSV9LRVkiLCJuMm0iLCJub3Rpb25DbGllbnQiLCJnZXRBbGxXb3JrcyIsInJlc3BvbnNlIiwicGFnZXMiLCJyZXRyaWV2ZSIsInBhZ2VfaWQiLCJOT1RJT05fV09SS1MiLCJwYWdlIiwibWRibG9ja3MiLCJwYWdlVG9NYXJrZG93biIsImlkIiwibWRTdHJpbmciLCJ0b01hcmtkb3duU3RyaW5nIiwibWFya2Rvd24iLCJnZXRBYm91dFBhZ2UiLCJOT1RJT05fQUJPVVQiLCJnZXRBYm91dCIsImdldEFsbENvbnRhY3QiLCJkYXRhYmFzZXMiLCJxdWVyeSIsImRhdGFiYXNlX2lkIiwiTk9USU9OX0NPTlRBQ1QiLCJhbGxDb250YWN0cyIsInJlc3VsdHMiLCJtYXAiLCJjdGMiLCJnZXRDb250YWN0cyIsImFjY291bnQiLCJwcm9wZXJ0aWVzIiwiTmFtZSIsInRpdGxlIiwicGxhaW5fdGV4dCIsImxpbmsiLCJMaW5rIiwicmljaF90ZXh0IiwidGV4dCIsImNvbnRlbnQiLCJnZXRMYW5kaW5nIiwiTk9USU9OX0hPTUUiLCJzb3J0cyIsInByb3BlcnR5IiwiZGlyZWN0aW9uIiwiYWxsTGFuZGluZyIsImdldEhvbWVEYXRhIiwiZ2V0U2VjdGlvbiIsImFsbFNlY3Rpb24iLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJEZXNjcmlwdGlvbiIsImNvdmVyIiwiSW1hZ2UiLCJmaWxlcyIsImZpbGUiLCJ1cmwiLCJnZXRSYXRlcyIsIk5PVElPTl9DT01fUkFURVMiLCJhbGxSYXRlcyIsInJ0cyIsImdldFJhdGVzRGF0YSIsIm5hbWUiLCJzYW1wbGUiLCJTYW1wbGUiLCJwZXNvcyIsIm51bWJlciIsImdldEFkZHRsRmVlcyIsIk5PVElPTl9DT01fQUREVExGRUVTIiwiZ2V0QWRkdGxGZWVzRGF0YSIsIm5vdGVzIiwiTm90ZXMiLCJnZXRQYXlJbmZvIiwiTk9USU9OX0NPTV9QQVlJTkZPIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/notion.js\n"));

/***/ })

});