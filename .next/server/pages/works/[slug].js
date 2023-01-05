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
exports.id = "pages/works/[slug]";
exports.ids = ["pages/works/[slug]"];
exports.modules = {

/***/ "./styles/Works.module.css":
/*!*********************************!*\
  !*** ./styles/Works.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"works\": \"Works_works__QAMs6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvV29ya3MubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1wb3J0Zm9saW8vLi9zdHlsZXMvV29ya3MubW9kdWxlLmNzcz81YWExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndvcmtzXCI6IFwiV29ya3Nfd29ya3NfX1FBTXM2XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Works.module.css\n");

/***/ }),

/***/ "./lib/notion.js":
/*!***********************!*\
  !*** ./lib/notion.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllWorks\": () => (/* binding */ getAllWorks),\n/* harmony export */   \"getSinglePost\": () => (/* binding */ getSinglePost)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { NotionToMarkdown  } = __webpack_require__(/*! notion-to-md */ \"notion-to-md\");\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\nconst n2m = new NotionToMarkdown({\n    notionClient: notion\n});\nconst getAllWorks = async ()=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_WORKS\n    });\n    const allWorks = response.results;\n    return allWorks.map((wrk)=>{\n        return getWorks(wrk);\n    });\n};\nconst getWorks = (wrk)=>{\n    return {\n        id: wrk.id,\n        title: wrk.properties.Name.title[0].plain_text,\n        slug: wrk.properties.Slug.formula.string\n    };\n};\nconst getSinglePost = async (slug)=>{\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_WORKS,\n        filter: {\n            property: \"Slug\",\n            formula: {\n                string: {\n                    equals: slug\n                }\n            }\n        }\n    });\n    const page = response.results[0];\n    const mdblocks = await n2m.pageToMarkdown(page.id);\n    const mdString = n2m.toMarkdownString(mdblocks);\n    return {\n        markdown: mdString\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDMUMsTUFBTSxFQUFFQyxpQkFBZ0IsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxrQ0FBYztBQUduRCxNQUFNQyxTQUFTLElBQUlILG9EQUFNQSxDQUFDO0lBQ3hCSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDbEM7QUFFQSxNQUFNQyxNQUFNLElBQUlQLGlCQUFpQjtJQUFFUSxjQUFjTjtBQUFPO0FBRWpELE1BQU1PLGNBQWMsVUFBWTtJQUNuQyxNQUFNQyxXQUFXLE1BQU1SLE9BQU9TLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDO1FBQzFDQyxhQUFhVCxRQUFRQyxHQUFHLENBQUNTLFlBQVk7SUFDekM7SUFFQSxNQUFNQyxXQUFXTCxTQUFTTSxPQUFPO0lBRWpDLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO1FBQzNCLE9BQU9DLFNBQVNEO0lBQ2xCO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFdBQVcsQ0FBQ0QsTUFBUTtJQUN4QixPQUFPO1FBQ0xFLElBQUlGLElBQUlFLEVBQUU7UUFDVkMsT0FBTUgsSUFBSUksVUFBVSxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQyxFQUFFLENBQUNHLFVBQVU7UUFDN0NDLE1BQUtQLElBQUlJLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUNDLE1BQU07SUFDekM7QUFDRjtBQUVLLE1BQU1DLGdCQUFnQixPQUFPSixPQUFTO0lBQ3pDLE1BQU1mLFdBQVcsTUFBTVIsT0FBT1MsU0FBUyxDQUFDQyxLQUFLLENBQUM7UUFDNUNDLGFBQWFULFFBQVFDLEdBQUcsQ0FBQ1MsWUFBWTtRQUNyQ2dCLFFBQVE7WUFDTkMsVUFBVTtZQUNWSixTQUFTO2dCQUNQQyxRQUFRO29CQUNOSSxRQUFRUDtnQkFDVjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE1BQU1RLE9BQU92QixTQUFTTSxPQUFPLENBQUMsRUFBRTtJQUNoQyxNQUFNa0IsV0FBVyxNQUFNM0IsSUFBSTRCLGNBQWMsQ0FBQ0YsS0FBS2IsRUFBRTtJQUNqRCxNQUFNZ0IsV0FBVzdCLElBQUk4QixnQkFBZ0IsQ0FBQ0g7SUFFdEMsT0FBTztRQUNMSSxVQUFVRjtJQUNaO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1wb3J0Zm9saW8vLi9saWIvbm90aW9uLmpzP2E0MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIkBub3Rpb25ocS9jbGllbnRcIjtcclxuY29uc3QgeyBOb3Rpb25Ub01hcmtkb3duIH0gPSByZXF1aXJlKFwibm90aW9uLXRvLW1kXCIpO1xyXG5cclxuXHJcbmNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoe1xyXG4gIGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9BUElfS0VZLFxyXG59KVxyXG5cclxuY29uc3QgbjJtID0gbmV3IE5vdGlvblRvTWFya2Rvd24oeyBub3Rpb25DbGllbnQ6IG5vdGlvbiB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxXb3JrcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XHJcbiAgICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9XT1JLU1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBhbGxXb3JrcyA9IHJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgXHJcbiAgICByZXR1cm4gYWxsV29ya3MubWFwKCh3cmspID0+IHtcclxuICAgICAgcmV0dXJuIGdldFdvcmtzKHdyayk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRXb3JrcyA9ICh3cmspID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB3cmsuaWQsXHJcbiAgICAgIHRpdGxlOndyay5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dCxcclxuICAgICAgc2x1Zzp3cmsucHJvcGVydGllcy5TbHVnLmZvcm11bGEuc3RyaW5nLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUG9zdCA9IGFzeW5jIChzbHVnKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xyXG4gICAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX1dPUktTLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICBwcm9wZXJ0eTogXCJTbHVnXCIsXHJcbiAgICAgICAgZm9ybXVsYToge1xyXG4gICAgICAgICAgc3RyaW5nOiB7XHJcbiAgICAgICAgICAgIGVxdWFsczogc2x1ZyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgcGFnZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF07XHJcbiAgICBjb25zdCBtZGJsb2NrcyA9IGF3YWl0IG4ybS5wYWdlVG9NYXJrZG93bihwYWdlLmlkKTtcclxuICAgIGNvbnN0IG1kU3RyaW5nID0gbjJtLnRvTWFya2Rvd25TdHJpbmcobWRibG9ja3MpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWFya2Rvd246IG1kU3RyaW5nLFxyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiTm90aW9uVG9NYXJrZG93biIsInJlcXVpcmUiLCJub3Rpb24iLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwibjJtIiwibm90aW9uQ2xpZW50IiwiZ2V0QWxsV29ya3MiLCJyZXNwb25zZSIsImRhdGFiYXNlcyIsInF1ZXJ5IiwiZGF0YWJhc2VfaWQiLCJOT1RJT05fV09SS1MiLCJhbGxXb3JrcyIsInJlc3VsdHMiLCJtYXAiLCJ3cmsiLCJnZXRXb3JrcyIsImlkIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiTmFtZSIsInBsYWluX3RleHQiLCJzbHVnIiwiU2x1ZyIsImZvcm11bGEiLCJzdHJpbmciLCJnZXRTaW5nbGVQb3N0IiwiZmlsdGVyIiwicHJvcGVydHkiLCJlcXVhbHMiLCJwYWdlIiwibWRibG9ja3MiLCJwYWdlVG9NYXJrZG93biIsIm1kU3RyaW5nIiwidG9NYXJrZG93blN0cmluZyIsIm1hcmtkb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/notion.js\n");

/***/ }),

/***/ "./pages/works/[slug].js":
/*!*******************************!*\
  !*** ./pages/works/[slug].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/notion */ \"./lib/notion.js\");\n/* harmony import */ var _styles_Works_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Works.module.css */ \"./styles/Works.module.css\");\n/* harmony import */ var _styles_Works_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Works_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);\nreact_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst getStaticPaths = async ()=>{\n    const posts = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_3__.getAllWorks)();\n    const paths = posts.map(({ slug  })=>({\n            params: {\n                slug\n            }\n        }));\n    return {\n        paths,\n        fallback: \"blocking\"\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const works = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_3__.getSinglePost)(params.slug);\n    return {\n        props: {\n            works\n        },\n        revalidate: 60\n    };\n};\nconst Works = ({ works  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\art-portfolio-site\\\\art-portfolio\\\\pages\\\\works\\\\[slug].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Works_module_css__WEBPACK_IMPORTED_MODULE_4___default().works),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: works.markdown\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\art-portfolio-site\\\\art-portfolio\\\\pages\\\\works\\\\[slug].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\art-portfolio-site\\\\art-portfolio\\\\pages\\\\works\\\\[slug].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUNtQjtBQUNYO0FBRTNDLE1BQU1LLGlCQUFpQixVQUFZO0lBQ3RDLE1BQU1DLFFBQVEsTUFBTUosd0RBQVdBO0lBQy9CLE1BQU1LLFFBQVFELE1BQU1FLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEtBQUksRUFBRSxHQUFNO1lBQUVDLFFBQVE7Z0JBQUVEO1lBQUs7UUFBRTtJQUUxRCxPQUFPO1FBQ0xGO1FBQ0FJLFVBQVU7SUFDWjtBQUNGLEVBQUU7QUFFRyxNQUFNQyxpQkFBaUIsT0FBTyxFQUFFRixPQUFNLEVBQUUsR0FBSztJQUNoRCxNQUFNRyxRQUFRLE1BQU1WLDBEQUFhQSxDQUFDTyxPQUFPRCxJQUFJO0lBRTlDLE9BQU87UUFDSkssT0FBTztZQUNMRDtRQUNGO1FBQ0FFLFlBQVk7SUFDZDtBQUNKLEVBQUU7QUFFRixNQUFNQyxRQUFRLENBQUMsRUFBQ0gsTUFBSyxFQUFDLEdBQUs7SUFDeEIscUJBQ0M7OzBCQUNFLDhEQUFDSTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsV0FBV2YsdUVBQVk7MEJBQzNCLDRFQUFDSCxzREFBYUE7OEJBQUVZLE1BQU1PLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFJdEM7QUFFQSxpRUFBZUosS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1wb3J0Zm9saW8vLi9wYWdlcy93b3Jrcy9bc2x1Z10uanM/Y2E4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuaW1wb3J0IHsgZ2V0QWxsV29ya3MsIGdldFNpbmdsZVBvc3QgfSBmcm9tIFwiLi4vLi4vbGliL25vdGlvblwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1dvcmtzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFdvcmtzKCk7XHJcbiAgICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgoeyBzbHVnIH0pID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGF0aHMsXHJcbiAgICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gICAgY29uc3Qgd29ya3MgPSBhd2FpdCBnZXRTaW5nbGVQb3N0KHBhcmFtcy5zbHVnKVxyXG4gICBcclxuICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB3b3JrcyxcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogNjBcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBXb3JrcyA9ICh7d29ya3N9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+UG9zdDwvaDE+XHJcbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLndvcmtzfT5cclxuICAgICAgICA8UmVhY3RNYXJrZG93bj57d29ya3MubWFya2Rvd259PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3M7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RNYXJrZG93biIsImdldEFsbFdvcmtzIiwiZ2V0U2luZ2xlUG9zdCIsInN0eWxlcyIsImdldFN0YXRpY1BhdGhzIiwicG9zdHMiLCJwYXRocyIsIm1hcCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwid29ya3MiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJXb3JrcyIsImgxIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFya2Rvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/works/[slug].js\n");

/***/ }),

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@notionhq/client");

/***/ }),

/***/ "notion-to-md":
/*!*******************************!*\
  !*** external "notion-to-md" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("notion-to-md");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/works/[slug].js"));
module.exports = __webpack_exports__;

})();