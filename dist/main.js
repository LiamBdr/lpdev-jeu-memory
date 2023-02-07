/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Lily+Script+One);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background: #1E2749;\\n  font-family: \\\"Lily Script One\\\", \\\"helvetica\\\", Arial, sans-serif;\\n  font-size: 10px;\\n}\\n\\n.header {\\n  color: #E4D9FF;\\n  text-align: center;\\n}\\n\\n.header h1 {\\n  margin-top: 3rem;\\n  font-size: 3rem;\\n}\\n\\n.controls {\\n  margin: 3rem auto 1rem;\\n  max-width: 600px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 1.15rem;\\n  font-family: \\\"helvetica\\\", Arial, sans-serif;\\n  transition: all 0.3s;\\n}\\n\\n.refresh {\\n  transition: all 0.3s;\\n}\\n\\n.refresh:hover {\\n  color: #273469;\\n}\\n\\n.moves-container {\\n  margin-left: 1rem;\\n}\\n\\n.game-start-btn {\\n  width: 150px;\\n  border: 1px solid #E4D9FF;\\n  border-radius: 50px;\\n  padding: 0.5rem;\\n  transition: all 0.3s;\\n}\\n\\n.game-start-btn:hover {\\n  background: #E4D9FF;\\n  color: #1E2749;\\n  cursor: pointer;\\n}\\n\\n.hide-start-btn {\\n  display: none;\\n}\\n\\n.deck {\\n  margin: 3vh auto 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  max-width: 660px;\\n  min-height: 600px;\\n}\\n\\n.card {\\n  list-style: none;\\n  width: 130px;\\n  height: 130px;\\n  color: #E4D9FF;\\n  background: #1E2744;\\n  margin: 0.5em;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 10px;\\n  perspective: 500px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\\n  transform-origin: center;\\n  transition: all 0.5s;\\n}\\n\\n.card-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 10px;\\n  position: relative;\\n  transition: all 0.5s;\\n  transform-style: preserve-3d;\\n}\\n\\n.card-face {\\n  position: absolute;\\n  border-radius: 10px;\\n  height: 100%;\\n  width: 100%;\\n  backface-visibility: hidden;\\n}\\n\\n.front {\\n  background: #273469;\\n}\\n\\n.back {\\n  background: #273469;\\n  transform: rotateY(180deg);\\n}\\n\\n.fab {\\n  font-size: 5rem;\\n  line-height: 1.9;\\n  text-align: center;\\n}\\n\\n.card-container.flipped {\\n  transform: rotateY(180deg);\\n}\\n\\n.cant-click-this {\\n  pointer-events: none;\\n}\\n\\n.wrong {\\n  animation: wrong 0.25s ease-in-out;\\n}\\n\\n@keyframes wrong {\\n  0% {\\n    transform: rotate(0);\\n  }\\n  25% {\\n    transform: rotate(-15deg);\\n  }\\n  50% {\\n    transform: rotate(0);\\n  }\\n  75% {\\n    transform: rotate(15deg);\\n  }\\n  100% {\\n    transform: rotate(0);\\n  }\\n}\\n.correct {\\n  animation: correct 0.3s ease-in-out;\\n}\\n\\n@keyframes correct {\\n  0% {\\n    transform: scaleX(1) scaleY(1);\\n  }\\n  50% {\\n    transform: scaleX(1.15) scaleY(1.1);\\n  }\\n  100% {\\n    transform: scaleX(1) scaleY(1);\\n  }\\n}\\n.win {\\n  display: none;\\n  opacity: 0;\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: #FAFAFF;\\n  text-align: center;\\n  transition: all 0.3s;\\n}\\n\\n.win h1 {\\n  color: #273469;\\n  font-size: 3.5rem;\\n  margin-top: 16rem;\\n}\\n\\n.win h3 {\\n  margin-top: 1rem;\\n  font-family: \\\"helvetica\\\", Arial, sans-serif;\\n  color: #273469;\\n  font-size: 1.5rem;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n\\n.win p {\\n  margin-top: 1rem;\\n  font-family: \\\"helvetica\\\", Arial, sans-serif;\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n  font-weight: 200;\\n  color: #aaa;\\n}\\n\\n.replay {\\n  margin-top: 2rem;\\n  width: 150px;\\n  padding: 1rem;\\n  border-radius: 50px;\\n  background: rgb(126, 149, 230);\\n  border: none;\\n  color: #FAFAFF;\\n  text-transform: uppercase;\\n  font-size: 0.8rem;\\n  letter-spacing: 0.1rem;\\n  transition: all 0.25s;\\n  outline: none;\\n}\\n\\n.replay:hover {\\n  background: #273469;\\n}\\n\\n.replay:active {\\n  background: rgb(22, 29, 53);\\n}\\n\\n.win-screen {\\n  display: block;\\n  opacity: 1;\\n}\\n\\n.star, .moves, .seconds {\\n  font-weight: bold;\\n}\\n\\n@media screen and (max-width: 650px) {\\n  .card {\\n    width: 120px;\\n    height: 120px;\\n  }\\n  .controls {\\n    width: 500px;\\n  }\\n}\\n@media screen and (max-width: 525px) {\\n  .card {\\n    width: 100px;\\n    height: 100px;\\n  }\\n  .controls {\\n    width: 500px;\\n  }\\n}\\n@media screen and (max-width: 450px) {\\n  .card {\\n    width: 90px;\\n    height: 90px;\\n  }\\n  .controls {\\n    width: 400px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lpdev-memory/./src/scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lpdev-memory/./src/scss/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lpdev-memory/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n\n\n\n//# sourceURL=webpack://lpdev-memory/./src/app.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\n\nlet cardsCollected = [];\nlet DeckOfCards = [];\nlet cardOneElement, cardTwoElement, startTime;\nlet seconds = 0;\nlet currentTurn = 0;\nlet moves = 0;\nlet stars = 3;\nlet gameWon = false;\n\nconst deck = document.querySelector('.deck');\nconst winContainer = document.querySelector('.win');\nconst btnReplay = document.querySelector('.replay');\nconst moveHolder = document.querySelector('.moves');\nconst starHolder = document.querySelector('.star');\nconst resetButton = document.querySelector('.refresh');\nconst movesContainer = document.querySelector('.moves-selector');\nconst starsList = document.querySelectorAll('.stars');\nconst startBtn = document.querySelector('.game-start-btn');\nconst timerContainer = document.querySelector('.timer');\nconst secondsContainer = document.querySelector('.seconds');\n\nconst classList = ['fa-html5', 'fa-html5', 'fa-css3-alt', 'fa-css3-alt', 'fa-js-square', 'fa-js-square', 'fa-npm', 'fa-npm', 'fa-react', 'fa-react', 'fa-node-js', 'fa-node-js', 'fa-gulp', 'fa-gulp', 'fa-github', 'fa-github'];\nconst filteredList = ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-npm', 'fa-react', 'fa-node-js', 'fa-gulp', 'fa-github'];\nconst halfStar = \"fas fa-star-half-alt\";\nconst emptyStar = \"far fa-star\";\nconst fullSar = \"fas fa-star stars\";\n\n// ------------------------\n//      The Game\n// ------------------------\n\n// start game when clicked\nstartBtn.addEventListener('click', function(){\n    // 1. hide the btn\n    this.classList.add('hide-start-btn');\n    // 2. start the game\n    game();\n});\n\n// Part 3: When game completes add option to play again\nbtnReplay.addEventListener('click', replayTheGame);\nresetButton.addEventListener('click', replayTheGame);\n\n\n// ------------------------\n//      Functions\n// ------------------------\n\n// game function\nfunction game() {\n    // Part 1. Shuffle the cards\n    letsShuffleThis();\n\n    // Part 2: set the timer: timer function taken from sltackoverflow: https://stackoverflow.com/a/29972322\n    startTime = Date.now();\n    setInterval(function () {\n        const delta = Date.now() - startTime; // milliseconds elapsed since start\n        seconds = (Math.floor(delta / 1000)); // in seconds\n        timerContainer.textContent = seconds;\n    }, 1000); // update about every second\n\n    // Part 3: add the flipping functionality to the deck of cards\n    //  make use of the bubbling of events and attach the listener to the parent\n    deck.addEventListener('click', cardClickHandler)\n}\n\n// Function to shuffle a list of class names and then attaches them to a card\nfunction letsShuffleThis() {\n    // 1. shuffle the list to randomize position\n    DeckOfCards = shuffle([...classList]);\n    // 2. get a refrence of the icon element to add class font awesome to.\n    const icons = document.querySelectorAll('.back');\n    // 3. remove any pre-defined classes in them\n    icons.forEach(function (el) {\n        for (let x = 0; x < filteredList.length; x++) {\n            if (el.classList.contains(filteredList[x])) {\n                el.classList.remove(filteredList[x]);\n            }\n        }\n    });\n    // 4. add the class to the list of classes in the icon element\n    for (let i = 0; i < icons.length; i++) {\n        icons[i].classList.add(DeckOfCards[i]);\n    }\n}\n\n// Shuffle function from http://stackoverflow.com/a/2450976\nfunction shuffle(array) {\n    var currentIndex = array.length, temporaryValue, randomIndex;\n\n    while (currentIndex !== 0) {\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n}\n\n// function to replay the game\nfunction replayTheGame() {\n    // hide message again\n    hideWin();\n    // remove any disabled elements\n    document.querySelectorAll('.cant-click-this').forEach(function(el) {\n        el.classList.remove('cant-click-this');\n    });\n    // remove any flipped classes\n    document.querySelectorAll('.card-container').forEach(function (el) {\n        flipDown(el);\n    });\n    // reset the variables\n    resetGame();\n\n    // reset UI\n    resetUI();\n\n    // play again\n    game();\n}\n\n// function reset start game\nfunction resetGame() {\n    // reset the global variables\n    cardsCollected = [];\n    DeckOfCards = [];\n    cardOneElement = null;\n    cardTwoElement = null;\n    startTime = null;\n    currentTurn = 0;\n    gameWon = false;\n    seconds = 0;\n    moves = 0;\n    stars = 3;\n}\n\n// function that handles the card click event\nfunction cardClickHandler(e) {\n    console.log('card clicked')\n    const cardIsNotAlreadyChosen = e.target.parentNode != cardOneElement;\n    if (!gameWon && e.target.classList.contains('card-face') && cardIsNotAlreadyChosen) {\n        checkStats(e.target.parentNode);\n        flipUp(e.target.parentNode);\n    }\n}\n\n// functions to assigning values and check stats\nfunction checkStats(el) {\n    // console.log('CARD_1', cardOneElement)\n    // console.log('CARD_2', cardTwoElement)\n    // assign pointers to elements based on the turn number\n    switch (currentTurn) {\n        case 0:\n            cardOneElement = el;\n            currentTurn += 1;\n            break;\n        case 1:\n            cardTwoElement = el;\n            break;\n    }\n\n    if (cardOneElement && cardTwoElement) {\n        disableClick(deck);\n        // disable the deck\n        setTimeout(function(){\n            // re-enable it in a while\n            areTheyEqual()\n        }, 1000);\n    }\n\n}\n\n// function to check their euality and handels the result\nfunction areTheyEqual() {\n\n    // check class list -> to get the value of teh faced down card\n    const cardOneValue = cardOneElement.innerHTML.trim();\n    const cardTwoValue = cardTwoElement.innerHTML.trim();\n\n    // check if both classes are equal and that the item isn't in the list to begin with\n    if (!cardsCollected.includes(cardOneValue) && (cardOneValue === cardTwoValue)) { // if they are equal\n        equal(cardOneValue, cardTwoValue);\n    } else {\n        notEqual();\n    }\n    // increase move count\n    moves += 1;\n    starSetter();\n    updateUI();\n\n    // reset the round back to zero\n    currentTurn = 0;\n\n    // check if all cards flipped open\n    if (cardsCollected.length === 16) {\n        gameWon = true;\n        setTimeout(winMessage, 300);\n    }\n}\n\n// function to handel what happenes when cards match\nfunction equal(itemOne, itemTwo) {\n    // 1. add them to the array of flipped classes\n    cardsCollected.push(itemOne, itemTwo);\n    // 2. TO DO: add animation UI for correct result\n    correct(cardOneElement);\n    correct(cardTwoElement);\n    // remove class from element\n    setTimeout(function () {\n        removeCorrect(cardOneElement)\n    }, 350);\n    setTimeout(function () {\n        removeCorrect(cardTwoElement)\n    }, 350);\n    // 3. disable the element from being clicked\n    disableClick(cardOneElement);\n    disableClick(cardTwoElement);\n    // 4. reset element pointers\n    setTimeout(resetElementPointer, 300);\n}\n\n// function to handel cards not matching\nfunction notEqual() {\n    // 1. TO DO: add animation UI for wrong match\n    wrong(cardOneElement);\n    wrong(cardTwoElement);\n    // 2. flip the card back down\n    setTimeout(function () {\n        removeWrong(cardOneElement);\n        flipDown(cardOneElement);\n     }, 250);\n    setTimeout(function () {\n        removeWrong(cardTwoElement);\n        flipDown(cardTwoElement);\n    }, 250);\n    // 3. reset element pointers\n    setTimeout(resetElementPointer, 300);\n}\n\n// function to set stars\nfunction starSetter() {\n    // moves less than or equal 9 -> 3 stars\n    // moves between 10 and 15 -> 2.5 stars\n    if (moves >= 10 && moves <= 15) {\n        starsList[2].className = halfStar;\n        stars = 2.5;\n    }\n    // moves between 16 and 20 -> 2 stars\n    else if (moves >= 16 && moves <= 20) {\n        starsList[2].className = emptyStar;\n        stars = 2;\n    }\n    // moves between 21 and 24 -> 1.5 stars\n    else if (moves >= 21 && moves <= 24) {\n        starsList[1].className = halfStar;\n        stars = 1.5;\n    }\n    // moves between 25 and 28 -> 1 star\n    else if (moves >= 25 && moves <= 28) {\n        starsList[1].className = emptyStar;\n        stars = 1;\n    }\n    // moves between 29 and more -> 0.5 stars\n    else if (moves >= 29) {\n        starsList[0].className = halfStar;\n        stars = 0.5;\n    }\n}\n\n// function display win message\nfunction winMessage() {\n    // updating the UI for the end screen to display the correct values\n    moveHolder.textContent = moves;\n    starHolder.textContent = stars;\n    secondsContainer.textContent = seconds;\n\n    // add the class that will view the wining screen\n    winContainer.classList.add('win-screen');\n\n    // remove event listener\n    deck.removeEventListener('click', cardClickHandler);\n}\n\n// function hide win message\nfunction hideWin() {\n    winContainer.classList.remove('win-screen');\n}\n\n// function to flip the card up\nfunction flipUp(element) {\n    element.classList.add('flipped');\n}\n\n// function to flip the card down\nfunction flipDown(element) {\n    element.classList.remove('flipped');\n}\n\n// function to add correct animation\nfunction correct(el) {\n    el.classList.add('correct');\n}\n\nfunction removeCorrect(el) {\n    el.classList.remove('correct');\n}\n\n// function to add wrong animation\nfunction wrong(el) {\n    el.classList.add('wrong');\n}\n\nfunction removeWrong(el) {\n    el.classList.remove('wrong');\n}\n\n//  function to disable element from being clicked\nfunction disableClick(el) {\n    el.classList.add('cant-click-this');\n}\n\n// function to re-enable elements to be clicked\nfunction enableClick(el) {\n    console.log('clicks enabled')\n    el.classList.remove('cant-click-this');\n}\n\n// function update UI\nfunction updateUI() {\n    movesContainer.textContent = moves;\n}\n\nfunction resetUI() {\n    movesContainer.textContent = moves;\n    starsList.forEach(function(el) {\n        el.className = fullSar;\n    });\n    timerContainer.textContent = \"\";\n}\n\n// function to reset the variables that holds a pointer to a DOM element\nfunction resetElementPointer() {\n    cardOneElement = null;\n    cardTwoElement = null;\n    // enable clicks on the deck of cards\n    enableClick(deck)\n}\n\n//# sourceURL=webpack://lpdev-memory/./src/js/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;