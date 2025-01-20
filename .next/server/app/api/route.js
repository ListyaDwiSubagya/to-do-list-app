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
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PAA_NextJS_to_do_list_app_clone_to_do_list_app_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.js */ \"(rsc)/./app/api/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"C:\\\\PAA\\\\NextJS\\\\to-do-list app clone\\\\to-do-list-app\\\\app\\\\api\\\\route.js\",\n    nextConfigOutput,\n    userland: C_PAA_NextJS_to_do_list_app_clone_to_do_list_app_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDUEFBJTVDTmV4dEpTJTVDdG8tZG8tbGlzdCUyMGFwcCUyMGNsb25lJTVDdG8tZG8tbGlzdC1hcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNQQUElNUNOZXh0SlMlNUN0by1kby1saXN0JTIwYXBwJTIwY2xvbmUlNUN0by1kby1saXN0LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFBBQVxcXFxOZXh0SlNcXFxcdG8tZG8tbGlzdCBhcHAgY2xvbmVcXFxcdG8tZG8tbGlzdC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxQQUFcXFxcTmV4dEpTXFxcXHRvLWRvLWxpc3QgYXBwIGNsb25lXFxcXHRvLWRvLWxpc3QtYXBwXFxcXGFwcFxcXFxhcGlcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/route.js":
/*!**************************!*\
  !*** ./app/api/route.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/TodoModel */ \"(rsc)/./lib/models/TodoModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst LoadDB = async ()=>{\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n};\nLoadDB();\nasync function GET(request) {\n    const todos = await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        todos: todos\n    });\n}\nasync function POST(request) {\n    const { title, description } = await request.json();\n    await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        title,\n        description\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        msg: \"Todo Created\"\n    });\n}\nasync function DELETE(request) {\n    const mongoId = await request.nextUrl.searchParams.get('mongoId');\n    await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(mongoId);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        msg: \"Todo Deleted\"\n    });\n}\nasync function PUT(request) {\n    const mongoId = await request.nextUrl.searchParams.get('mongoId');\n    await _lib_models_TodoModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(mongoId, {\n        $set: {\n            isCompleted: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        msg: \"Todo Completed\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDRztBQUNKO0FBRTNDLE1BQU1HLFNBQVM7SUFDWCxNQUFNSCx5REFBU0E7QUFDbkI7QUFFQUc7QUFFTyxlQUFlQyxJQUFJQyxPQUFPO0lBQzVCLE1BQU1DLFFBQVEsTUFBTUwsNkRBQVNBLENBQUNNLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0YsT0FBTUE7SUFBSztBQUMxQztBQUVPLGVBQWVHLEtBQUtKLE9BQU87SUFFN0IsTUFBTSxFQUFDSyxLQUFLLEVBQUVDLFdBQVcsRUFBQyxHQUFHLE1BQU1OLFFBQVFHLElBQUk7SUFFL0MsTUFBTVAsNkRBQVNBLENBQUNXLE1BQU0sQ0FBQztRQUNsQkY7UUFBTUM7SUFDWDtJQUVBLE9BQU9ULHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0ssS0FBSTtJQUFjO0FBQ2pEO0FBRU8sZUFBZUMsT0FBT1QsT0FBTztJQUUvQixNQUFNVSxVQUFVLE1BQU1WLFFBQVFXLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFFdkQsTUFBTWpCLDZEQUFTQSxDQUFDa0IsaUJBQWlCLENBQUNKO0lBRWxDLE9BQU9iLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0ssS0FBSTtJQUFjO0FBQ2pEO0FBRU8sZUFBZU8sSUFBSWYsT0FBTztJQUU1QixNQUFNVSxVQUFVLE1BQU1WLFFBQVFXLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFFdkQsTUFBTWpCLDZEQUFTQSxDQUFDb0IsaUJBQWlCLENBQUNOLFNBQVM7UUFDdENPLE1BQUs7WUFDQUMsYUFBWTtRQUNqQjtJQUNMO0lBRUEsT0FBT3JCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBQ0ssS0FBSTtJQUFnQjtBQUNuRCIsInNvdXJjZXMiOlsiQzpcXFBBQVxcTmV4dEpTXFx0by1kby1saXN0IGFwcCBjbG9uZVxcdG8tZG8tbGlzdC1hcHBcXGFwcFxcYXBpXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0REIgfSBmcm9tIFwiQC9saWIvY29uZmlnL2RiXCI7XHJcbmltcG9ydCBUb2RvTW9kZWwgZnJvbSBcIkAvbGliL21vZGVscy9Ub2RvTW9kZWxcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5jb25zdCBMb2FkREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBDb25uZWN0REIoKTtcclxufVxyXG5cclxuTG9hZERCKCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICAgICBjb25zdCB0b2RvcyA9IGF3YWl0IFRvZG9Nb2RlbC5maW5kKHt9KTtcclxuICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe3RvZG9zOnRvZG9zfSlcclxufSBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuXHJcbiAgICAgY29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbn0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgYXdhaXQgVG9kb01vZGVsLmNyZWF0ZSh7XHJcbiAgICAgICAgICB0aXRsZSxkZXNjcmlwdGlvblxyXG4gICAgIH0pXHJcblxyXG4gICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bXNnOlwiVG9kbyBDcmVhdGVkXCJ9KVxyXG59IFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0KSB7XHJcblxyXG4gICAgIGNvbnN0IG1vbmdvSWQgPSBhd2FpdCByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldCgnbW9uZ29JZCcpO1xyXG5cclxuICAgICBhd2FpdCBUb2RvTW9kZWwuZmluZEJ5SWRBbmREZWxldGUobW9uZ29JZCk7XHJcblxyXG4gICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bXNnOlwiVG9kbyBEZWxldGVkXCJ9KVxyXG59IFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0KSB7XHJcblxyXG4gICAgIGNvbnN0IG1vbmdvSWQgPSBhd2FpdCByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldCgnbW9uZ29JZCcpO1xyXG5cclxuICAgICBhd2FpdCBUb2RvTW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUobW9uZ29JZCwge1xyXG4gICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOnRydWVcclxuICAgICAgICAgIH1cclxuICAgICB9KTtcclxuXHJcbiAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttc2c6XCJUb2RvIENvbXBsZXRlZFwifSlcclxufSBcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVG9kb01vZGVsIiwiTmV4dFJlc3BvbnNlIiwiTG9hZERCIiwiR0VUIiwicmVxdWVzdCIsInRvZG9zIiwiZmluZCIsImpzb24iLCJQT1NUIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZSIsIm1zZyIsIkRFTEVURSIsIm1vbmdvSWQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmluZEJ5SWRBbmREZWxldGUiLCJQVVQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRzZXQiLCJpc0NvbXBsZXRlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ConnectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect('mongodb+srv://listyodwi062:ud1tF26H9gaLqdZB@cluster0.in6ot.mongodb.net/todo-app');\n    console.log('DB Connected');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxZQUFZO0lBQ3JCLE1BQU1ELHVEQUFnQixDQUFDO0lBQ3ZCRyxRQUFRQyxHQUFHLENBQUM7QUFFaEIsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFBBQVxcTmV4dEpTXFx0by1kby1saXN0IGFwcCBjbG9uZVxcdG8tZG8tbGlzdC1hcHBcXGxpYlxcY29uZmlnXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiK3NydjovL2xpc3R5b2R3aTA2Mjp1ZDF0RjI2SDlnYUxxZFpCQGNsdXN0ZXIwLmluNm90Lm1vbmdvZGIubmV0L3RvZG8tYXBwJyk7XHJcbiAgICBjb25zb2xlLmxvZygnREIgQ29ubmVjdGVkJyk7XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNvbm5lY3REQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/TodoModel.js":
/*!*********************************!*\
  !*** ./lib/models/TodoModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    isCompleted: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timeStamp: true\n});\nconst TodoModel = mongoose.models.todo || mongoose.model('todo', Schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1RvZG9Nb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxTQUFTQyxRQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFFaEQsTUFBTUMsU0FBUyxJQUFJRixTQUFTRSxNQUFNLENBQUM7SUFDL0JDLE9BQU07UUFDRkMsTUFBS0M7UUFDTEMsVUFBUztJQUNiO0lBQ0FDLGFBQVk7UUFDUkgsTUFBS0M7UUFDTEMsVUFBUztJQUNiO0lBQ0FFLGFBQVk7UUFDUkosTUFBS0s7UUFDTFYsU0FBUTtJQUNaO0FBQ0osR0FBRTtJQUNFVyxXQUFVO0FBQ2Q7QUFFQSxNQUFNQyxZQUFZWCxTQUFTWSxNQUFNLENBQUNDLElBQUksSUFBSWIsU0FBU2MsS0FBSyxDQUFDLFFBQVFaO0FBRWpFLGlFQUFlUyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUEFBXFxOZXh0SlNcXHRvLWRvLWxpc3QgYXBwIGNsb25lXFx0by1kby1saXN0LWFwcFxcbGliXFxtb2RlbHNcXFRvZG9Nb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jb25zdCBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICB0eXBlOlN0cmluZywgXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgaXNDb21wbGV0ZWQ6e1xyXG4gICAgICAgIHR5cGU6Qm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICB9XHJcbn0se1xyXG4gICAgdGltZVN0YW1wOnRydWVcclxufSlcclxuXHJcbmNvbnN0IFRvZG9Nb2RlbCA9IG1vbmdvb3NlLm1vZGVscy50b2RvIHx8IG1vbmdvb3NlLm1vZGVsKCd0b2RvJywgU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Nb2RlbDsiXSwibmFtZXMiOlsiZGVmYXVsdCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJpc0NvbXBsZXRlZCIsIkJvb2xlYW4iLCJ0aW1lU3RhbXAiLCJUb2RvTW9kZWwiLCJtb2RlbHMiLCJ0b2RvIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/TodoModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPAA%5CNextJS%5Cto-do-list%20app%20clone%5Cto-do-list-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();