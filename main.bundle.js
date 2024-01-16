"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/brightsun.otf */ "./src/fonts/brightsun.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/colouring_rainbow.otf */ "./src/fonts/colouring_rainbow.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/fruits_days.otf */ "./src/fonts/fruits_days.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/sandwich.otf */ "./src/fonts/sandwich.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Brightsun";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("opentype");
}

@font-face {
    font-family: "ColoringRainbow";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("opentype");
}

@font-face {
    font-family: "FruitsDays";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("opentype");
}

@font-face {
    font-family: "Sandwich";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("opentype");
}

:root {
    --bg-color: #ecf2cf;
    --bg-color-side: #c2c33a;
    --active-button-color: #cdd76d;
}

body {
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr;
    height: 100vh;
    margin: 0;
    background-color: var(--bg-color);
}

#side-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color-side);
    width: min(90vw, 1500px);
    justify-self: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

#side-bar button {
    background-color: inherit;
    border: none;
    font-family: "Brightsun";
    font-size: 4rem;
    height: 100%;
    width: 20%;
}

#side-bar button:hover, #side-bar button.active:hover {
    filter: brightness(0.75);
}

#side-bar button.active {
    background-color: var(--active-button-color);
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 30px;
    background-color: var(--bg-color);
}

#content img {
    border-radius: 15px;
}

#landing-text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(80vw, 1000px);
}

.welcome {
    white-space: pre-wrap;
    font-family: "FruitsDays";
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
}

.welcome:first-child {
    font-size: 4rem;
    align-self: center;
    font-weight: 550;
    letter-spacing: 0.25rem;
    text-decoration: black wavy underline;
    margin-bottom: 20px;
}

.menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: var(--bg-color);
}

.menu-items-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: fit-content;
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 512px;
    height: 100%;
}

.menu-item :first-child {
    font-size: 4rem;
    font-family: "Sandwich";
    font-weight: 600;
    letter-spacing: 0.2rem;
}

.menu-item :last-child {
    font-family: "FruitsDays";
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
}

.menu-section-header {
    font-size: 6rem;
    font-family: "Brightsun";
    margin: 20px;
}

.drinks-wrapper {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,+DAAkD;AACtD;;AAEA;IACI,8BAA8B;IAC9B,+DAA0D;AAC9D;;AAEA;IACI,yBAAyB;IACzB,+DAAoD;AACxD;;AAEA;IACI,uBAAuB;IACvB,+DAAiD;AACrD;;AAEA;IACI,mBAAmB;IACnB,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,0BAA0B;IAC1B,aAAa;IACb,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;IACtC,wBAAwB;IACxB,oBAAoB;IACpB,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,SAAS;AACb","sourcesContent":["@font-face {\n    font-family: \"Brightsun\";\n    src: url(./fonts/brightsun.otf) format(\"opentype\");\n}\n\n@font-face {\n    font-family: \"ColoringRainbow\";\n    src: url(./fonts/colouring_rainbow.otf) format(\"opentype\");\n}\n\n@font-face {\n    font-family: \"FruitsDays\";\n    src: url(./fonts/fruits_days.otf) format(\"opentype\");\n}\n\n@font-face {\n    font-family: \"Sandwich\";\n    src: url(./fonts/sandwich.otf) format(\"opentype\");\n}\n\n:root {\n    --bg-color: #ecf2cf;\n    --bg-color-side: #c2c33a;\n    --active-button-color: #cdd76d;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 100px 1fr;\n    grid-template-columns: 1fr;\n    height: 100vh;\n    margin: 0;\n    background-color: var(--bg-color);\n}\n\n#side-bar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--bg-color-side);\n    width: min(90vw, 1500px);\n    justify-self: center;\n    border-bottom-left-radius: 25px;\n    border-bottom-right-radius: 25px;\n}\n\n#side-bar button {\n    background-color: inherit;\n    border: none;\n    font-family: \"Brightsun\";\n    font-size: 4rem;\n    height: 100%;\n    width: 20%;\n}\n\n#side-bar button:hover, #side-bar button.active:hover {\n    filter: brightness(0.75);\n}\n\n#side-bar button.active {\n    background-color: var(--active-button-color);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px;\n    gap: 30px;\n    background-color: var(--bg-color);\n}\n\n#content img {\n    border-radius: 15px;\n}\n\n#landing-text-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: min(80vw, 1000px);\n}\n\n.welcome {\n    white-space: pre-wrap;\n    font-family: \"FruitsDays\";\n    font-size: 2.5rem;\n    font-weight: 500;\n    letter-spacing: 0.15rem;\n}\n\n.welcome:first-child {\n    font-size: 4rem;\n    align-self: center;\n    font-weight: 550;\n    letter-spacing: 0.25rem;\n    text-decoration: black wavy underline;\n    margin-bottom: 20px;\n}\n\n.menu-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    background-color: var(--bg-color);\n}\n\n.menu-items-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    width: fit-content;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    width: 512px;\n    height: 100%;\n}\n\n.menu-item :first-child {\n    font-size: 4rem;\n    font-family: \"Sandwich\";\n    font-weight: 600;\n    letter-spacing: 0.2rem;\n}\n\n.menu-item :last-child {\n    font-family: \"FruitsDays\";\n    font-size: 2.5rem;\n    letter-spacing: 0.1rem;\n}\n\n.menu-section-header {\n    font-size: 6rem;\n    font-family: \"Brightsun\";\n    margin: 20px;\n}\n\n.drinks-wrapper {\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    gap: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/drinksPage.js":
/*!***************************!*\
  !*** ./src/drinksPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drinksPage: () => (/* binding */ drinksPage)
/* harmony export */ });
/* harmony import */ var _img_autumn_roar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/autumn_roar.png */ "./src/img/autumn_roar.png");
/* harmony import */ var _img_salty_bull_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/salty_bull.png */ "./src/img/salty_bull.png");
/* harmony import */ var _img_surprised_six_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/surprised_six.png */ "./src/img/surprised_six.png");
/* harmony import */ var _img_demonic_twister_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/demonic_twister.png */ "./src/img/demonic_twister.png");
/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuItem */ "./src/menuItem.js");






const drinksPage = (function() {
    const contents = document.getElementById("content");

    const autumnDrink = new _menuItem__WEBPACK_IMPORTED_MODULE_4__["default"](_img_autumn_roar_png__WEBPACK_IMPORTED_MODULE_0__, "Autumn Roar", "A medley of warm spices, including cinnamon, nutmeg, and a touch of clove, is gently infused into the elixir. This spiced ember infusion adds depth and warmth, creating a comforting undertone that resonates with the crackle of autumn leaves beneath your feet.");
    const bullDrink = new _menuItem__WEBPACK_IMPORTED_MODULE_4__["default"](_img_salty_bull_png__WEBPACK_IMPORTED_MODULE_1__, "Salty Bull", "The rim of your goblet is adorned with a touch of sea salt, creating a salty crown that enhances each sip. The saline kiss complements the libation's marine symphony, offering a sensation reminiscent of sea spray meeting your skin under the sun's caress.");
    const sixDrink = new _menuItem__WEBPACK_IMPORTED_MODULE_4__["default"](_img_surprised_six_png__WEBPACK_IMPORTED_MODULE_2__, "Surprised Six", "To add a touch of whimsy, the Surprised Six Elixir is adorned with a sprinkle of rainbow-colored sugar crystals. These vibrant crystals create a visual spectacle, transforming each goblet into a canvas of color and surprise, reminiscent of the excitement found in medieval festivities.");
    const demonDrink = new _menuItem__WEBPACK_IMPORTED_MODULE_4__["default"](_img_demonic_twister_png__WEBPACK_IMPORTED_MODULE_3__, "Demonic Twister", "A surge of hellfire spices, featuring a daring mix of chili peppers, cinnamon, and a touch of smoky paprika, infuses the Demonic Twister with a devilish heat. Brace yourself for a spice surge that adds a bold and intense kick, reminiscent of the flames that swirl in the abyss.");

    const render = function() {
        const contents = document.getElementById("content");

        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        
        const header = document.createElement("div");
        header.classList.add("menu-section-header");
        header.textContent = "Drinks";

        const itemsWrapper = document.createElement("div");
        itemsWrapper.classList.add("drinks-wrapper");
        itemsWrapper.appendChild(autumnDrink.element);
        itemsWrapper.appendChild(bullDrink.element);
        itemsWrapper.appendChild(sixDrink.element);
        itemsWrapper.appendChild(demonDrink.element);
    
        menuWrapper.appendChild(header);
        menuWrapper.appendChild(itemsWrapper);

        contents.innerHTML = "";
        contents.appendChild(menuWrapper);
    }

    return {render}
})();



/***/ }),

/***/ "./src/foodPage.js":
/*!*************************!*\
  !*** ./src/foodPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   foodPage: () => (/* binding */ foodPage)
/* harmony export */ });
/* harmony import */ var _img_cured_shrimps_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/cured_shrimps.png */ "./src/img/cured_shrimps.png");
/* harmony import */ var _img_deep_fried_lamb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/deep_fried_lamb.png */ "./src/img/deep_fried_lamb.png");
/* harmony import */ var _img_marinated_frog_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/marinated_frog.png */ "./src/img/marinated_frog.png");
/* harmony import */ var _img_poached_bisque_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/poached_bisque.png */ "./src/img/poached_bisque.png");
/* harmony import */ var _img_sauteed_mushroom_and_garlic_buns_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/sauteed_mushroom_and_garlic_buns.png */ "./src/img/sauteed_mushroom_and_garlic_buns.png");
/* harmony import */ var _img_shallow_fried_mushroom_salad_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/shallow_fried_mushroom_salad.png */ "./src/img/shallow_fried_mushroom_salad.png");
/* harmony import */ var _img_walnut_whip_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/walnut_whip.png */ "./src/img/walnut_whip.png");
/* harmony import */ var _img_grape_and_lemon_molten_cake_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/grape_and_lemon_molten_cake.png */ "./src/img/grape_and_lemon_molten_cake.png");
/* harmony import */ var _menuItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menuItem.js */ "./src/menuItem.js");










const foodPage = (function() {
    const shrimpItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_cured_shrimps_png__WEBPACK_IMPORTED_MODULE_0__, "Cured Shrimp", "Our skilled alchemists employ ancient methods to infuse these plump shrimp with flavors reminiscent of the briny depths. A symphony of sea salt, rare herbs, and a touch of arcane essence culminate in a medley that captures the essence of a Siren's captivating song.");
    const lambItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_deep_fried_lamb_png__WEBPACK_IMPORTED_MODULE_1__, "Deep-fried Lamb", "Served on a regal platter adorned with heraldic symbols, the Golden Ember Lamb Bites are accompanied by a dipping sauce crafted from honeyed mead and a dash of herb-infused vinegar. It's a union of sweet and savory, transporting you to the heart of a medieval feast.");
    const frogItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_marinated_frog_png__WEBPACK_IMPORTED_MODULE_2__, "Marinated Frog", "Experience a burst of freshness as you bite into the succulent frog. The citrusy notes from the marination process add a delightful zest that dances on your palate, creating a perfect balance with the natural flavors of the tender amphibian meat.");
    const bisqueItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_poached_bisque_png__WEBPACK_IMPORTED_MODULE_3__, "Poached Bisque", "Join us on a journey into the depths of flavor with the Mystical Sea Bisque. Perfect for those seeking a taste of oceanic opulence, this dish beckons you to savor the ephemeral elegance that defines the medieval dining experience at The Magnificent Tortoise Pub.");
    const bunsItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_sauteed_mushroom_and_garlic_buns_png__WEBPACK_IMPORTED_MODULE_4__, "Mushroom and Garlic Buns", "Embark on a gastronomic journey with our Mystic Forest Buns, a spellbinding union of earthy mushrooms, aromatic garlic, and pillowy buns that transport you to the heart of an enchanted woodland. Crafted with care, these sautéed delights promise a symphony of flavors that dance on your palate.");
    const saladItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_shallow_fried_mushroom_salad_png__WEBPACK_IMPORTED_MODULE_5__, "Woodland Elegance Salad", "Handpicked from the heart of the enchanted woods, an array of mushrooms takes center stage in our Woodland Elegance Salad. Shallow-fried to a golden crisp, these woodland treasures provide a satisfying crunch that harmonizes with the earthy richness of the forest floor.");
    const whipItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_walnut_whip_png__WEBPACK_IMPORTED_MODULE_6__, "Walnut Whip", "Savor the symphony of textures and flavors with the Whimsical Walnut Whip, a sweet creation designed for those seeking a magical treat. Join us at The Magnificent Tortoise Pub and indulge in the artistry of medieval dining, where each bite is a moment of enchantment and nutty delight.");
    const cakeItem = new _menuItem_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_grape_and_lemon_molten_cake_png__WEBPACK_IMPORTED_MODULE_7__, "Grape and Lemon Molten Cake", "At the heart of this culinary symphony lies a grape-infused molten center, crafted from the finest vineyard treasures. Plump, juicy grapes are transformed into a luscious filling that bursts forth like a grape elixir, creating a sweet surprise within the velvety confines of the molten cake.");

    const render = function() {
        const contents = document.getElementById("content");

        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        
        const header = document.createElement("div");
        header.classList.add("menu-header");
        header.textContent = "Food";

        const starterHeader = document.createElement("div");
        starterHeader.classList.add("menu-section-header");
        starterHeader.textContent = "Starters"

        const mainDishHeader = document.createElement("div");
        mainDishHeader.classList.add("menu-section-header");
        mainDishHeader.textContent = "Main Dishes";

        const desertHeader = document.createElement("div");
        desertHeader.classList.add("menu-section-header");
        desertHeader.textContent = "Deserts";

        const starterItemsWrapper = document.createElement("div");
        starterItemsWrapper.classList.add("menu-items-wrapper");
        starterItemsWrapper.appendChild(frogItem.element);
        starterItemsWrapper.appendChild(bisqueItem.element);
        starterItemsWrapper.appendChild(bunsItem.element);
        
        const mainItemsWrapper = document.createElement("div");
        mainItemsWrapper.classList.add("menu-items-wrapper");
        mainItemsWrapper.appendChild(shrimpItem.element);
        mainItemsWrapper.appendChild(lambItem.element);
        mainItemsWrapper.appendChild(saladItem.element);

        const desertItemsWrapper = document.createElement("div");
        desertItemsWrapper.classList.add("menu-items-wrapper");
        desertItemsWrapper.appendChild(cakeItem.element);
        desertItemsWrapper.appendChild(whipItem.element);

        menuWrapper.appendChild(starterHeader);
        menuWrapper.appendChild(starterItemsWrapper);
        menuWrapper.appendChild(mainDishHeader);
        menuWrapper.appendChild(mainItemsWrapper);
        menuWrapper.appendChild(desertHeader);
        menuWrapper.appendChild(desertItemsWrapper);


        contents.innerHTML = "";
        contents.appendChild(menuWrapper);
    }

    return {render}
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingPage.js */ "./src/landingPage.js");
/* harmony import */ var _foodPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodPage.js */ "./src/foodPage.js");
/* harmony import */ var _drinksPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinksPage.js */ "./src/drinksPage.js");





function toggleActiveButton(event) {
    event.target.classList.add("active");

    let buttons = Array.from(sideBar.getElementsByTagName("button"));
    buttons.forEach(button => {
        if (event.target != button) {
            button.classList.remove("active");
        }
    });
}

const sideBar = document.getElementById("side-bar");

const homeButton = document.createElement("button");
homeButton.id = "home-button";
homeButton.classList.add("active");
homeButton.textContent = "Home";
homeButton.addEventListener("click", _landingPage_js__WEBPACK_IMPORTED_MODULE_1__.landingPage.render);
homeButton.addEventListener("click", toggleActiveButton);

const foodButton = document.createElement("button");
foodButton.id = "food-button";
foodButton.textContent = "Food";
foodButton.addEventListener("click", _foodPage_js__WEBPACK_IMPORTED_MODULE_2__.foodPage.render);
foodButton.addEventListener("click", toggleActiveButton);

const drinksButton = document.createElement("button");
drinksButton.id = "drinks-button";
drinksButton.textContent = "Drinks";
drinksButton.addEventListener("click", _drinksPage_js__WEBPACK_IMPORTED_MODULE_3__.drinksPage.render);
drinksButton.addEventListener("click", toggleActiveButton);


sideBar.appendChild(homeButton);
sideBar.appendChild(foodButton);
sideBar.appendChild(drinksButton);

_landingPage_js__WEBPACK_IMPORTED_MODULE_1__.landingPage.render();

/***/ }),

/***/ "./src/landingPage.js":
/*!****************************!*\
  !*** ./src/landingPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   landingPage: () => (/* binding */ landingPage)
/* harmony export */ });
/* harmony import */ var _img_interior_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/interior.png */ "./src/img/interior.png");
 

const landingPage = (function() {
    const greeting = "🍻 Welcome to The Magnificent Tortoise Pub! 🍻";
    const welcome1 = "Step through the mystical archway and journey into a realm where medieval marvels and fantastical feasts await you. Nestled in the heart of our enchanted kingdom, The Magnificent Tortoise Pub beckons you to a realm of revelry, where hearty laughter and clinking tankards echo through the stone walls.";
    const welcome2 = "🏰 Immerse yourself in the ambience of a bygone era, where knights and wizards once roamed the land. As you cross the threshold, prepare to be enchanted by the flickering glow of candlelit tables, ornate tapestries, and the distant melodies of minstrels weaving tales of yore."
    const welcome3 = "🍽️ Our culinary wizards have conjured a menu that will transport your taste buds to a realm of epicurean delights. Feast upon sumptuous medieval fare, from succulent roasted meats to savory stews, all served in earthenware vessels fit for royalty. Quench your thirst with a selection of ales, meads, and potions crafted to perfection."
    const welcome4 = "🎭 Join us for evenings filled with merriment and entertainment, as jesters, minstrels, and troubadours regale you with performances that transcend time. Let the spirit of the medieval era captivate your senses, and revel in the camaraderie of fellow patrons who share your love for the extraordinary.";
    const welcome5 = "🛡️ Whether you're a noble lord, a daring adventurer, or a mystical sorcerer, The Magnificent Tortoise Pub welcomes one and all to embark on a culinary quest like no other. Unleash your imagination, savor the magic, and let the medieval enchantment begin!"
    const welcome6 = "Hail, fellow reveler! May your time in our realm be filled with feasts, friendship, and fantastic tales."
    const signage =  "Cheers," + "\n" + "The Magnificent Tortoise Pub 🐢🏰"
    const textBlocks = [greeting, welcome1, welcome2, welcome3, welcome4, welcome5, welcome6, signage];


    const render = function() {
        const contents = document.getElementById("content");
        contents.innerHTML = "";

        const myBanner = new Image();
        myBanner.src = _img_interior_png__WEBPACK_IMPORTED_MODULE_0__;

        contents.appendChild(myBanner);

        const textContainer = document.createElement("div");
        textContainer.id = "landing-text-container";

        textBlocks.forEach(block => {
            const text = document.createElement("div");
            text.classList.add("welcome");
            text.textContent = block;
            textContainer.appendChild(text);
        });

        contents.appendChild(textContainer);
    }
    return {render};
})();



/***/ }),

/***/ "./src/menuItem.js":
/*!*************************!*\
  !*** ./src/menuItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
class MenuItem {
    #element;
    constructor(image, title, description) {
        this.#element = (function() {
            const element = document.createElement("div");
            element.classList.add("menu-item");

            const titleElement = document.createElement("div");
            titleElement.textContent = title;
            titleElement.classList.add("item-title");

            const imageElement = new Image();
            imageElement.src = image;
            imageElement.classList.add("item-image");

            const descriptionElement = document.createElement("div");
            descriptionElement.textContent = description;
            descriptionElement.classList.add("item-description");

            element.appendChild(titleElement);
            element.appendChild(imageElement);
            element.appendChild(descriptionElement);

            return element;
        })()
    }

    get element() {
        return this.#element;
    }
}


/***/ }),

/***/ "./src/fonts/brightsun.otf":
/*!*********************************!*\
  !*** ./src/fonts/brightsun.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3ad483376aa310155bc.otf";

/***/ }),

/***/ "./src/fonts/colouring_rainbow.otf":
/*!*****************************************!*\
  !*** ./src/fonts/colouring_rainbow.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "505131f564edf06d9849.otf";

/***/ }),

/***/ "./src/fonts/fruits_days.otf":
/*!***********************************!*\
  !*** ./src/fonts/fruits_days.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b6dbe79b94d29ee5d8a.otf";

/***/ }),

/***/ "./src/fonts/sandwich.otf":
/*!********************************!*\
  !*** ./src/fonts/sandwich.otf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "199af3a947a6dd6f093c.otf";

/***/ }),

/***/ "./src/img/autumn_roar.png":
/*!*********************************!*\
  !*** ./src/img/autumn_roar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56f87db81837a805b885.png";

/***/ }),

/***/ "./src/img/cured_shrimps.png":
/*!***********************************!*\
  !*** ./src/img/cured_shrimps.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22423f605d88749d3258.png";

/***/ }),

/***/ "./src/img/deep_fried_lamb.png":
/*!*************************************!*\
  !*** ./src/img/deep_fried_lamb.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3397e74081fe3bc7467.png";

/***/ }),

/***/ "./src/img/demonic_twister.png":
/*!*************************************!*\
  !*** ./src/img/demonic_twister.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53b3d7896c7a880dcf7d.png";

/***/ }),

/***/ "./src/img/grape_and_lemon_molten_cake.png":
/*!*************************************************!*\
  !*** ./src/img/grape_and_lemon_molten_cake.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "763bcb5b973ccc9b4168.png";

/***/ }),

/***/ "./src/img/interior.png":
/*!******************************!*\
  !*** ./src/img/interior.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "390d5927ecc466880bd5.png";

/***/ }),

/***/ "./src/img/marinated_frog.png":
/*!************************************!*\
  !*** ./src/img/marinated_frog.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "762ae65f3a70aaecd112.png";

/***/ }),

/***/ "./src/img/poached_bisque.png":
/*!************************************!*\
  !*** ./src/img/poached_bisque.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15c0636ee589a506e0be.png";

/***/ }),

/***/ "./src/img/salty_bull.png":
/*!********************************!*\
  !*** ./src/img/salty_bull.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daad764ad15baa75e8b9.png";

/***/ }),

/***/ "./src/img/sauteed_mushroom_and_garlic_buns.png":
/*!******************************************************!*\
  !*** ./src/img/sauteed_mushroom_and_garlic_buns.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68d7ea8ca7180f5171c7.png";

/***/ }),

/***/ "./src/img/shallow_fried_mushroom_salad.png":
/*!**************************************************!*\
  !*** ./src/img/shallow_fried_mushroom_salad.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c777a4737e0ae997bd7d.png";

/***/ }),

/***/ "./src/img/surprised_six.png":
/*!***********************************!*\
  !*** ./src/img/surprised_six.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bda05b8b325b1f3e3c77.png";

/***/ }),

/***/ "./src/img/walnut_whip.png":
/*!*********************************!*\
  !*** ./src/img/walnut_whip.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79099dcdac5718928f3.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RyaW5rc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb2RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGFuZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2JyaWdodHN1bi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2NvbG91cmluZ19yYWluYm93Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvZnJ1aXRzX2RheXMub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9zYW5kd2ljaC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkJyaWdodHN1blwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDb2xvcmluZ1JhaW5ib3dcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRnJ1aXRzRGF5c1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTYW5kd2ljaFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG46cm9vdCB7XG4gICAgLS1iZy1jb2xvcjogI2VjZjJjZjtcbiAgICAtLWJnLWNvbG9yLXNpZGU6ICNjMmMzM2E7XG4gICAgLS1hY3RpdmUtYnV0dG9uLWNvbG9yOiAjY2RkNzZkO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbn1cblxuI3NpZGUtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itc2lkZSk7XG4gICAgd2lkdGg6IG1pbig5MHZ3LCAxNTAwcHgpO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG5cbiNzaWRlLWJhciBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJyaWdodHN1blwiO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuI3NpZGUtYmFyIGJ1dHRvbjpob3ZlciwgI3NpZGUtYmFyIGJ1dHRvbi5hY3RpdmU6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjc1KTtcbn1cblxuI3NpZGUtYmFyIGJ1dHRvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1idXR0b24tY29sb3IpO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBnYXA6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xufVxuXG4jY29udGVudCBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNsYW5kaW5nLXRleHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHdpZHRoOiBtaW4oODB2dywgMTAwMHB4KTtcbn1cblxuLndlbGNvbWUge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBmb250LWZhbWlseTogXCJGcnVpdHNEYXlzXCI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbn1cblxuLndlbGNvbWU6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGJsYWNrIHdhdnkgdW5kZXJsaW5lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG5cbi5tZW51LWl0ZW1zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDUxMnB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUtaXRlbSA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LWZhbWlseTogXCJTYW5kd2ljaFwiO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbn1cblxuLm1lbnUtaXRlbSA6bGFzdC1jaGlsZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRnJ1aXRzRGF5c1wiO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG59XG5cbi5tZW51LXNlY3Rpb24taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQnJpZ2h0c3VuXCI7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZHJpbmtzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XG4gICAgZ2FwOiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0RBQTBEO0FBQzlEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwrREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQnJpZ2h0c3VuXFxcIjtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9icmlnaHRzdW4ub3RmKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvbG9yaW5nUmFpbmJvd1xcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvY29sb3VyaW5nX3JhaW5ib3cub3RmKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZydWl0c0RheXNcXFwiO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL2ZydWl0c19kYXlzLm90ZikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYW5kd2ljaFxcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvc2FuZHdpY2gub3RmKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iZy1jb2xvcjogI2VjZjJjZjtcXG4gICAgLS1iZy1jb2xvci1zaWRlOiAjYzJjMzNhO1xcbiAgICAtLWFjdGl2ZS1idXR0b24tY29sb3I6ICNjZGQ3NmQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4jc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itc2lkZSk7XFxuICAgIHdpZHRoOiBtaW4oOTB2dywgMTUwMHB4KTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jc2lkZS1iYXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIkJyaWdodHN1blxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4jc2lkZS1iYXIgYnV0dG9uOmhvdmVyLCAjc2lkZS1iYXIgYnV0dG9uLmFjdGl2ZTpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjc1KTtcXG59XFxuXFxuI3NpZGUtYmFyIGJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuI2NvbnRlbnQgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI2xhbmRpbmctdGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiBtaW4oODB2dywgMTAwMHB4KTtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRnJ1aXRzRGF5c1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcXG59XFxuXFxuLndlbGNvbWU6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogYmxhY2sgd2F2eSB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tZW51LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuLm1lbnUtaXRlbXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDUxMnB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tZW51LWl0ZW0gOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNhbmR3aWNoXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSA6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRnJ1aXRzRGF5c1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCcmlnaHRzdW5cXFwiO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5kcmlua3Mtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEF1dHVtbiBmcm9tIFwiLi9pbWcvYXV0dW1uX3JvYXIucG5nXCI7XG5pbXBvcnQgQnVsbCBmcm9tIFwiLi9pbWcvc2FsdHlfYnVsbC5wbmdcIjtcbmltcG9ydCBTaXggZnJvbSBcIi4vaW1nL3N1cnByaXNlZF9zaXgucG5nXCI7XG5pbXBvcnQgRGVtb24gZnJvbSBcIi4vaW1nL2RlbW9uaWNfdHdpc3Rlci5wbmdcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9tZW51SXRlbVwiO1xuXG5jb25zdCBkcmlua3NQYWdlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgYXV0dW1uRHJpbmsgPSBuZXcgTWVudUl0ZW0oQXV0dW1uLCBcIkF1dHVtbiBSb2FyXCIsIFwiQSBtZWRsZXkgb2Ygd2FybSBzcGljZXMsIGluY2x1ZGluZyBjaW5uYW1vbiwgbnV0bWVnLCBhbmQgYSB0b3VjaCBvZiBjbG92ZSwgaXMgZ2VudGx5IGluZnVzZWQgaW50byB0aGUgZWxpeGlyLiBUaGlzIHNwaWNlZCBlbWJlciBpbmZ1c2lvbiBhZGRzIGRlcHRoIGFuZCB3YXJtdGgsIGNyZWF0aW5nIGEgY29tZm9ydGluZyB1bmRlcnRvbmUgdGhhdCByZXNvbmF0ZXMgd2l0aCB0aGUgY3JhY2tsZSBvZiBhdXR1bW4gbGVhdmVzIGJlbmVhdGggeW91ciBmZWV0LlwiKTtcbiAgICBjb25zdCBidWxsRHJpbmsgPSBuZXcgTWVudUl0ZW0oQnVsbCwgXCJTYWx0eSBCdWxsXCIsIFwiVGhlIHJpbSBvZiB5b3VyIGdvYmxldCBpcyBhZG9ybmVkIHdpdGggYSB0b3VjaCBvZiBzZWEgc2FsdCwgY3JlYXRpbmcgYSBzYWx0eSBjcm93biB0aGF0IGVuaGFuY2VzIGVhY2ggc2lwLiBUaGUgc2FsaW5lIGtpc3MgY29tcGxlbWVudHMgdGhlIGxpYmF0aW9uJ3MgbWFyaW5lIHN5bXBob255LCBvZmZlcmluZyBhIHNlbnNhdGlvbiByZW1pbmlzY2VudCBvZiBzZWEgc3ByYXkgbWVldGluZyB5b3VyIHNraW4gdW5kZXIgdGhlIHN1bidzIGNhcmVzcy5cIik7XG4gICAgY29uc3Qgc2l4RHJpbmsgPSBuZXcgTWVudUl0ZW0oU2l4LCBcIlN1cnByaXNlZCBTaXhcIiwgXCJUbyBhZGQgYSB0b3VjaCBvZiB3aGltc3ksIHRoZSBTdXJwcmlzZWQgU2l4IEVsaXhpciBpcyBhZG9ybmVkIHdpdGggYSBzcHJpbmtsZSBvZiByYWluYm93LWNvbG9yZWQgc3VnYXIgY3J5c3RhbHMuIFRoZXNlIHZpYnJhbnQgY3J5c3RhbHMgY3JlYXRlIGEgdmlzdWFsIHNwZWN0YWNsZSwgdHJhbnNmb3JtaW5nIGVhY2ggZ29ibGV0IGludG8gYSBjYW52YXMgb2YgY29sb3IgYW5kIHN1cnByaXNlLCByZW1pbmlzY2VudCBvZiB0aGUgZXhjaXRlbWVudCBmb3VuZCBpbiBtZWRpZXZhbCBmZXN0aXZpdGllcy5cIik7XG4gICAgY29uc3QgZGVtb25EcmluayA9IG5ldyBNZW51SXRlbShEZW1vbiwgXCJEZW1vbmljIFR3aXN0ZXJcIiwgXCJBIHN1cmdlIG9mIGhlbGxmaXJlIHNwaWNlcywgZmVhdHVyaW5nIGEgZGFyaW5nIG1peCBvZiBjaGlsaSBwZXBwZXJzLCBjaW5uYW1vbiwgYW5kIGEgdG91Y2ggb2Ygc21va3kgcGFwcmlrYSwgaW5mdXNlcyB0aGUgRGVtb25pYyBUd2lzdGVyIHdpdGggYSBkZXZpbGlzaCBoZWF0LiBCcmFjZSB5b3Vyc2VsZiBmb3IgYSBzcGljZSBzdXJnZSB0aGF0IGFkZHMgYSBib2xkIGFuZCBpbnRlbnNlIGtpY2ssIHJlbWluaXNjZW50IG9mIHRoZSBmbGFtZXMgdGhhdCBzd2lybCBpbiB0aGUgYWJ5c3MuXCIpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtd3JhcHBlclwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uLWhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcblxuICAgICAgICBjb25zdCBpdGVtc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImRyaW5rcy13cmFwcGVyXCIpO1xuICAgICAgICBpdGVtc1dyYXBwZXIuYXBwZW5kQ2hpbGQoYXV0dW1uRHJpbmsuZWxlbWVudCk7XG4gICAgICAgIGl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChidWxsRHJpbmsuZWxlbWVudCk7XG4gICAgICAgIGl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChzaXhEcmluay5lbGVtZW50KTtcbiAgICAgICAgaXRlbXNXcmFwcGVyLmFwcGVuZENoaWxkKGRlbW9uRHJpbmsuZWxlbWVudCk7XG4gICAgXG4gICAgICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1zV3JhcHBlcik7XG5cbiAgICAgICAgY29udGVudHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQobWVudVdyYXBwZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyfVxufSkoKTtcblxuZXhwb3J0IHtkcmlua3NQYWdlfTsiLCJpbXBvcnQgU2hyaW1wIGZyb20gXCIuL2ltZy9jdXJlZF9zaHJpbXBzLnBuZ1wiO1xuaW1wb3J0IExhbWIgZnJvbSBcIi4vaW1nL2RlZXBfZnJpZWRfbGFtYi5wbmdcIjtcbmltcG9ydCBGcm9nIGZyb20gXCIuL2ltZy9tYXJpbmF0ZWRfZnJvZy5wbmdcIjtcbmltcG9ydCBCaXNxdWUgZnJvbSBcIi4vaW1nL3BvYWNoZWRfYmlzcXVlLnBuZ1wiO1xuaW1wb3J0IEJ1bnMgZnJvbSBcIi4vaW1nL3NhdXRlZWRfbXVzaHJvb21fYW5kX2dhcmxpY19idW5zLnBuZ1wiO1xuaW1wb3J0IFNhbGFkIGZyb20gXCIuL2ltZy9zaGFsbG93X2ZyaWVkX211c2hyb29tX3NhbGFkLnBuZ1wiO1xuaW1wb3J0IFdoaXAgZnJvbSBcIi4vaW1nL3dhbG51dF93aGlwLnBuZ1wiO1xuaW1wb3J0IENha2UgZnJvbSBcIi4vaW1nL2dyYXBlX2FuZF9sZW1vbl9tb2x0ZW5fY2FrZS5wbmdcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9tZW51SXRlbS5qc1wiO1xuXG5jb25zdCBmb29kUGFnZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaHJpbXBJdGVtID0gbmV3IE1lbnVJdGVtKFNocmltcCwgXCJDdXJlZCBTaHJpbXBcIiwgXCJPdXIgc2tpbGxlZCBhbGNoZW1pc3RzIGVtcGxveSBhbmNpZW50IG1ldGhvZHMgdG8gaW5mdXNlIHRoZXNlIHBsdW1wIHNocmltcCB3aXRoIGZsYXZvcnMgcmVtaW5pc2NlbnQgb2YgdGhlIGJyaW55IGRlcHRocy4gQSBzeW1waG9ueSBvZiBzZWEgc2FsdCwgcmFyZSBoZXJicywgYW5kIGEgdG91Y2ggb2YgYXJjYW5lIGVzc2VuY2UgY3VsbWluYXRlIGluIGEgbWVkbGV5IHRoYXQgY2FwdHVyZXMgdGhlIGVzc2VuY2Ugb2YgYSBTaXJlbidzIGNhcHRpdmF0aW5nIHNvbmcuXCIpO1xuICAgIGNvbnN0IGxhbWJJdGVtID0gbmV3IE1lbnVJdGVtKExhbWIsIFwiRGVlcC1mcmllZCBMYW1iXCIsIFwiU2VydmVkIG9uIGEgcmVnYWwgcGxhdHRlciBhZG9ybmVkIHdpdGggaGVyYWxkaWMgc3ltYm9scywgdGhlIEdvbGRlbiBFbWJlciBMYW1iIEJpdGVzIGFyZSBhY2NvbXBhbmllZCBieSBhIGRpcHBpbmcgc2F1Y2UgY3JhZnRlZCBmcm9tIGhvbmV5ZWQgbWVhZCBhbmQgYSBkYXNoIG9mIGhlcmItaW5mdXNlZCB2aW5lZ2FyLiBJdCdzIGEgdW5pb24gb2Ygc3dlZXQgYW5kIHNhdm9yeSwgdHJhbnNwb3J0aW5nIHlvdSB0byB0aGUgaGVhcnQgb2YgYSBtZWRpZXZhbCBmZWFzdC5cIik7XG4gICAgY29uc3QgZnJvZ0l0ZW0gPSBuZXcgTWVudUl0ZW0oRnJvZywgXCJNYXJpbmF0ZWQgRnJvZ1wiLCBcIkV4cGVyaWVuY2UgYSBidXJzdCBvZiBmcmVzaG5lc3MgYXMgeW91IGJpdGUgaW50byB0aGUgc3VjY3VsZW50IGZyb2cuIFRoZSBjaXRydXN5IG5vdGVzIGZyb20gdGhlIG1hcmluYXRpb24gcHJvY2VzcyBhZGQgYSBkZWxpZ2h0ZnVsIHplc3QgdGhhdCBkYW5jZXMgb24geW91ciBwYWxhdGUsIGNyZWF0aW5nIGEgcGVyZmVjdCBiYWxhbmNlIHdpdGggdGhlIG5hdHVyYWwgZmxhdm9ycyBvZiB0aGUgdGVuZGVyIGFtcGhpYmlhbiBtZWF0LlwiKTtcbiAgICBjb25zdCBiaXNxdWVJdGVtID0gbmV3IE1lbnVJdGVtKEJpc3F1ZSwgXCJQb2FjaGVkIEJpc3F1ZVwiLCBcIkpvaW4gdXMgb24gYSBqb3VybmV5IGludG8gdGhlIGRlcHRocyBvZiBmbGF2b3Igd2l0aCB0aGUgTXlzdGljYWwgU2VhIEJpc3F1ZS4gUGVyZmVjdCBmb3IgdGhvc2Ugc2Vla2luZyBhIHRhc3RlIG9mIG9jZWFuaWMgb3B1bGVuY2UsIHRoaXMgZGlzaCBiZWNrb25zIHlvdSB0byBzYXZvciB0aGUgZXBoZW1lcmFsIGVsZWdhbmNlIHRoYXQgZGVmaW5lcyB0aGUgbWVkaWV2YWwgZGluaW5nIGV4cGVyaWVuY2UgYXQgVGhlIE1hZ25pZmljZW50IFRvcnRvaXNlIFB1Yi5cIik7XG4gICAgY29uc3QgYnVuc0l0ZW0gPSBuZXcgTWVudUl0ZW0oQnVucywgXCJNdXNocm9vbSBhbmQgR2FybGljIEJ1bnNcIiwgXCJFbWJhcmsgb24gYSBnYXN0cm9ub21pYyBqb3VybmV5IHdpdGggb3VyIE15c3RpYyBGb3Jlc3QgQnVucywgYSBzcGVsbGJpbmRpbmcgdW5pb24gb2YgZWFydGh5IG11c2hyb29tcywgYXJvbWF0aWMgZ2FybGljLCBhbmQgcGlsbG93eSBidW5zIHRoYXQgdHJhbnNwb3J0IHlvdSB0byB0aGUgaGVhcnQgb2YgYW4gZW5jaGFudGVkIHdvb2RsYW5kLiBDcmFmdGVkIHdpdGggY2FyZSwgdGhlc2Ugc2F1dMOpZWQgZGVsaWdodHMgcHJvbWlzZSBhIHN5bXBob255IG9mIGZsYXZvcnMgdGhhdCBkYW5jZSBvbiB5b3VyIHBhbGF0ZS5cIik7XG4gICAgY29uc3Qgc2FsYWRJdGVtID0gbmV3IE1lbnVJdGVtKFNhbGFkLCBcIldvb2RsYW5kIEVsZWdhbmNlIFNhbGFkXCIsIFwiSGFuZHBpY2tlZCBmcm9tIHRoZSBoZWFydCBvZiB0aGUgZW5jaGFudGVkIHdvb2RzLCBhbiBhcnJheSBvZiBtdXNocm9vbXMgdGFrZXMgY2VudGVyIHN0YWdlIGluIG91ciBXb29kbGFuZCBFbGVnYW5jZSBTYWxhZC4gU2hhbGxvdy1mcmllZCB0byBhIGdvbGRlbiBjcmlzcCwgdGhlc2Ugd29vZGxhbmQgdHJlYXN1cmVzIHByb3ZpZGUgYSBzYXRpc2Z5aW5nIGNydW5jaCB0aGF0IGhhcm1vbml6ZXMgd2l0aCB0aGUgZWFydGh5IHJpY2huZXNzIG9mIHRoZSBmb3Jlc3QgZmxvb3IuXCIpO1xuICAgIGNvbnN0IHdoaXBJdGVtID0gbmV3IE1lbnVJdGVtKFdoaXAsIFwiV2FsbnV0IFdoaXBcIiwgXCJTYXZvciB0aGUgc3ltcGhvbnkgb2YgdGV4dHVyZXMgYW5kIGZsYXZvcnMgd2l0aCB0aGUgV2hpbXNpY2FsIFdhbG51dCBXaGlwLCBhIHN3ZWV0IGNyZWF0aW9uIGRlc2lnbmVkIGZvciB0aG9zZSBzZWVraW5nIGEgbWFnaWNhbCB0cmVhdC4gSm9pbiB1cyBhdCBUaGUgTWFnbmlmaWNlbnQgVG9ydG9pc2UgUHViIGFuZCBpbmR1bGdlIGluIHRoZSBhcnRpc3RyeSBvZiBtZWRpZXZhbCBkaW5pbmcsIHdoZXJlIGVhY2ggYml0ZSBpcyBhIG1vbWVudCBvZiBlbmNoYW50bWVudCBhbmQgbnV0dHkgZGVsaWdodC5cIik7XG4gICAgY29uc3QgY2FrZUl0ZW0gPSBuZXcgTWVudUl0ZW0oQ2FrZSwgXCJHcmFwZSBhbmQgTGVtb24gTW9sdGVuIENha2VcIiwgXCJBdCB0aGUgaGVhcnQgb2YgdGhpcyBjdWxpbmFyeSBzeW1waG9ueSBsaWVzIGEgZ3JhcGUtaW5mdXNlZCBtb2x0ZW4gY2VudGVyLCBjcmFmdGVkIGZyb20gdGhlIGZpbmVzdCB2aW5leWFyZCB0cmVhc3VyZXMuIFBsdW1wLCBqdWljeSBncmFwZXMgYXJlIHRyYW5zZm9ybWVkIGludG8gYSBsdXNjaW91cyBmaWxsaW5nIHRoYXQgYnVyc3RzIGZvcnRoIGxpa2UgYSBncmFwZSBlbGl4aXIsIGNyZWF0aW5nIGEgc3dlZXQgc3VycHJpc2Ugd2l0aGluIHRoZSB2ZWx2ZXR5IGNvbmZpbmVzIG9mIHRoZSBtb2x0ZW4gY2FrZS5cIik7XG5cbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWVudS13cmFwcGVyXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0YXJ0ZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvbi1oZWFkZXJcIik7XG4gICAgICAgIHN0YXJ0ZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN0YXJ0ZXJzXCJcblxuICAgICAgICBjb25zdCBtYWluRGlzaEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5EaXNoSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb24taGVhZGVyXCIpO1xuICAgICAgICBtYWluRGlzaEhlYWRlci50ZXh0Q29udGVudCA9IFwiTWFpbiBEaXNoZXNcIjtcblxuICAgICAgICBjb25zdCBkZXNlcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNlcnRIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvbi1oZWFkZXJcIik7XG4gICAgICAgIGRlc2VydEhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVzZXJ0c1wiO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJJdGVtc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdGFydGVySXRlbXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLXdyYXBwZXJcIik7XG4gICAgICAgIHN0YXJ0ZXJJdGVtc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZnJvZ0l0ZW0uZWxlbWVudCk7XG4gICAgICAgIHN0YXJ0ZXJJdGVtc1dyYXBwZXIuYXBwZW5kQ2hpbGQoYmlzcXVlSXRlbS5lbGVtZW50KTtcbiAgICAgICAgc3RhcnRlckl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChidW5zSXRlbS5lbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1haW5JdGVtc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluSXRlbXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLXdyYXBwZXJcIik7XG4gICAgICAgIG1haW5JdGVtc1dyYXBwZXIuYXBwZW5kQ2hpbGQoc2hyaW1wSXRlbS5lbGVtZW50KTtcbiAgICAgICAgbWFpbkl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChsYW1iSXRlbS5lbGVtZW50KTtcbiAgICAgICAgbWFpbkl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChzYWxhZEl0ZW0uZWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgZGVzZXJ0SXRlbXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzZXJ0SXRlbXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLXdyYXBwZXJcIik7XG4gICAgICAgIGRlc2VydEl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChjYWtlSXRlbS5lbGVtZW50KTtcbiAgICAgICAgZGVzZXJ0SXRlbXNXcmFwcGVyLmFwcGVuZENoaWxkKHdoaXBJdGVtLmVsZW1lbnQpO1xuXG4gICAgICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHN0YXJ0ZXJIZWFkZXIpO1xuICAgICAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChzdGFydGVySXRlbXNXcmFwcGVyKTtcbiAgICAgICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbkRpc2hIZWFkZXIpO1xuICAgICAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChtYWluSXRlbXNXcmFwcGVyKTtcbiAgICAgICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzZXJ0SGVhZGVyKTtcbiAgICAgICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzZXJ0SXRlbXNXcmFwcGVyKTtcblxuXG4gICAgICAgIGNvbnRlbnRzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVXcmFwcGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3JlbmRlcn1cbn0pKCk7XG5cbmV4cG9ydCB7Zm9vZFBhZ2V9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBsYW5kaW5nUGFnZSB9IGZyb20gXCIuL2xhbmRpbmdQYWdlLmpzXCI7XG5pbXBvcnQgeyBmb29kUGFnZSB9IGZyb20gXCIuL2Zvb2RQYWdlLmpzXCI7XG5pbXBvcnQgeyBkcmlua3NQYWdlIH0gZnJvbSBcIi4vZHJpbmtzUGFnZS5qc1wiO1xuXG5mdW5jdGlvbiB0b2dnbGVBY3RpdmVCdXR0b24oZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgIGxldCBidXR0b25zID0gQXJyYXkuZnJvbShzaWRlQmFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtYmFyXCIpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmhvbWVCdXR0b24uaWQgPSBcImhvbWUtYnV0dG9uXCI7XG5ob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYW5kaW5nUGFnZS5yZW5kZXIpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQWN0aXZlQnV0dG9uKTtcblxuY29uc3QgZm9vZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5mb29kQnV0dG9uLmlkID0gXCJmb29kLWJ1dHRvblwiO1xuZm9vZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuZm9vZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9vZFBhZ2UucmVuZGVyKTtcbmZvb2RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFjdGl2ZUJ1dHRvbik7XG5cbmNvbnN0IGRyaW5rc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kcmlua3NCdXR0b24uaWQgPSBcImRyaW5rcy1idXR0b25cIjtcbmRyaW5rc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG5kcmlua3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyaW5rc1BhZ2UucmVuZGVyKTtcbmRyaW5rc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQWN0aXZlQnV0dG9uKTtcblxuXG5zaWRlQmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuc2lkZUJhci5hcHBlbmRDaGlsZChmb29kQnV0dG9uKTtcbnNpZGVCYXIuYXBwZW5kQ2hpbGQoZHJpbmtzQnV0dG9uKTtcblxubGFuZGluZ1BhZ2UucmVuZGVyKCk7IiwiaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9pbWcvaW50ZXJpb3IucG5nXCI7IFxuXG5jb25zdCBsYW5kaW5nUGFnZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBncmVldGluZyA9IFwi8J+NuyBXZWxjb21lIHRvIFRoZSBNYWduaWZpY2VudCBUb3J0b2lzZSBQdWIhIPCfjbtcIjtcbiAgICBjb25zdCB3ZWxjb21lMSA9IFwiU3RlcCB0aHJvdWdoIHRoZSBteXN0aWNhbCBhcmNod2F5IGFuZCBqb3VybmV5IGludG8gYSByZWFsbSB3aGVyZSBtZWRpZXZhbCBtYXJ2ZWxzIGFuZCBmYW50YXN0aWNhbCBmZWFzdHMgYXdhaXQgeW91LiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBvdXIgZW5jaGFudGVkIGtpbmdkb20sIFRoZSBNYWduaWZpY2VudCBUb3J0b2lzZSBQdWIgYmVja29ucyB5b3UgdG8gYSByZWFsbSBvZiByZXZlbHJ5LCB3aGVyZSBoZWFydHkgbGF1Z2h0ZXIgYW5kIGNsaW5raW5nIHRhbmthcmRzIGVjaG8gdGhyb3VnaCB0aGUgc3RvbmUgd2FsbHMuXCI7XG4gICAgY29uc3Qgd2VsY29tZTIgPSBcIvCfj7AgSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgYW1iaWVuY2Ugb2YgYSBieWdvbmUgZXJhLCB3aGVyZSBrbmlnaHRzIGFuZCB3aXphcmRzIG9uY2Ugcm9hbWVkIHRoZSBsYW5kLiBBcyB5b3UgY3Jvc3MgdGhlIHRocmVzaG9sZCwgcHJlcGFyZSB0byBiZSBlbmNoYW50ZWQgYnkgdGhlIGZsaWNrZXJpbmcgZ2xvdyBvZiBjYW5kbGVsaXQgdGFibGVzLCBvcm5hdGUgdGFwZXN0cmllcywgYW5kIHRoZSBkaXN0YW50IG1lbG9kaWVzIG9mIG1pbnN0cmVscyB3ZWF2aW5nIHRhbGVzIG9mIHlvcmUuXCJcbiAgICBjb25zdCB3ZWxjb21lMyA9IFwi8J+Nve+4jyBPdXIgY3VsaW5hcnkgd2l6YXJkcyBoYXZlIGNvbmp1cmVkIGEgbWVudSB0aGF0IHdpbGwgdHJhbnNwb3J0IHlvdXIgdGFzdGUgYnVkcyB0byBhIHJlYWxtIG9mIGVwaWN1cmVhbiBkZWxpZ2h0cy4gRmVhc3QgdXBvbiBzdW1wdHVvdXMgbWVkaWV2YWwgZmFyZSwgZnJvbSBzdWNjdWxlbnQgcm9hc3RlZCBtZWF0cyB0byBzYXZvcnkgc3Rld3MsIGFsbCBzZXJ2ZWQgaW4gZWFydGhlbndhcmUgdmVzc2VscyBmaXQgZm9yIHJveWFsdHkuIFF1ZW5jaCB5b3VyIHRoaXJzdCB3aXRoIGEgc2VsZWN0aW9uIG9mIGFsZXMsIG1lYWRzLCBhbmQgcG90aW9ucyBjcmFmdGVkIHRvIHBlcmZlY3Rpb24uXCJcbiAgICBjb25zdCB3ZWxjb21lNCA9IFwi8J+OrSBKb2luIHVzIGZvciBldmVuaW5ncyBmaWxsZWQgd2l0aCBtZXJyaW1lbnQgYW5kIGVudGVydGFpbm1lbnQsIGFzIGplc3RlcnMsIG1pbnN0cmVscywgYW5kIHRyb3ViYWRvdXJzIHJlZ2FsZSB5b3Ugd2l0aCBwZXJmb3JtYW5jZXMgdGhhdCB0cmFuc2NlbmQgdGltZS4gTGV0IHRoZSBzcGlyaXQgb2YgdGhlIG1lZGlldmFsIGVyYSBjYXB0aXZhdGUgeW91ciBzZW5zZXMsIGFuZCByZXZlbCBpbiB0aGUgY2FtYXJhZGVyaWUgb2YgZmVsbG93IHBhdHJvbnMgd2hvIHNoYXJlIHlvdXIgbG92ZSBmb3IgdGhlIGV4dHJhb3JkaW5hcnkuXCI7XG4gICAgY29uc3Qgd2VsY29tZTUgPSBcIvCfm6HvuI8gV2hldGhlciB5b3UncmUgYSBub2JsZSBsb3JkLCBhIGRhcmluZyBhZHZlbnR1cmVyLCBvciBhIG15c3RpY2FsIHNvcmNlcmVyLCBUaGUgTWFnbmlmaWNlbnQgVG9ydG9pc2UgUHViIHdlbGNvbWVzIG9uZSBhbmQgYWxsIHRvIGVtYmFyayBvbiBhIGN1bGluYXJ5IHF1ZXN0IGxpa2Ugbm8gb3RoZXIuIFVubGVhc2ggeW91ciBpbWFnaW5hdGlvbiwgc2F2b3IgdGhlIG1hZ2ljLCBhbmQgbGV0IHRoZSBtZWRpZXZhbCBlbmNoYW50bWVudCBiZWdpbiFcIlxuICAgIGNvbnN0IHdlbGNvbWU2ID0gXCJIYWlsLCBmZWxsb3cgcmV2ZWxlciEgTWF5IHlvdXIgdGltZSBpbiBvdXIgcmVhbG0gYmUgZmlsbGVkIHdpdGggZmVhc3RzLCBmcmllbmRzaGlwLCBhbmQgZmFudGFzdGljIHRhbGVzLlwiXG4gICAgY29uc3Qgc2lnbmFnZSA9ICBcIkNoZWVycyxcIiArIFwiXFxuXCIgKyBcIlRoZSBNYWduaWZpY2VudCBUb3J0b2lzZSBQdWIg8J+QovCfj7BcIlxuICAgIGNvbnN0IHRleHRCbG9ja3MgPSBbZ3JlZXRpbmcsIHdlbGNvbWUxLCB3ZWxjb21lMiwgd2VsY29tZTMsIHdlbGNvbWU0LCB3ZWxjb21lNSwgd2VsY29tZTYsIHNpZ25hZ2VdO1xuXG5cbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnRzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgbXlCYW5uZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbXlCYW5uZXIuc3JjID0gQmFubmVyO1xuXG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG15QmFubmVyKTtcblxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5pZCA9IFwibGFuZGluZy10ZXh0LWNvbnRhaW5lclwiO1xuXG4gICAgICAgIHRleHRCbG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcIndlbGNvbWVcIik7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYmxvY2s7XG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHtyZW5kZXJ9O1xufSkoKTtcblxuZXhwb3J0IHtsYW5kaW5nUGFnZX07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUl0ZW0ge1xuICAgICNlbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy4jZWxlbWVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIml0ZW0tdGl0bGVcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlO1xuICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWltYWdlXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0pKClcbiAgICB9XG5cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9