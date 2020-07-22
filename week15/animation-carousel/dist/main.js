!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="./main.js")}({"./createElement.js":
/*!**************************!*\
  !*** ./createElement.js ***!
  \**************************/
/*! exports provided: createElement, Text, Wrapper */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction createElement(Cls, attributes) {\n  var o;\n\n  if (typeof Cls === "string") {\n    o = new Wrapper(Cls);\n  } else {\n    o = new Cls({\n      timer: {}\n    });\n  }\n\n  for (var name in attributes) {\n    o.setAttribute(name, attributes[name]);\n  }\n\n  var visit = function visit(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (_typeof(child) === "object" && child instanceof Array) {\n          visit(child);\n          continue;\n        }\n\n        if (typeof child === "string") {\n          child = new Text(child);\n        }\n\n        o.appendChild(child);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  visit(children);\n  return o;\n}\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.root = document.createTextNode(text); // console.log(config);\n  }\n\n  _createClass(Text, [{\n    key: "mountTo",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Text;\n}();\nvar Wrapper = /*#__PURE__*/function () {\n  function Wrapper(type) {\n    _classCallCheck(this, Wrapper);\n\n    this.children = [];\n    this.root = document.createElement(type); // console.log(config);\n  }\n\n  _createClass(Wrapper, [{\n    key: "setAttribute",\n    value: function setAttribute(name, value) {\n      // console.log(name, value)\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: "addEventListener",\n    value: function addEventListener(type, handler, config) {\n      var _this$root;\n\n      (_this$root = this.root).addEventListener.apply(_this$root, arguments);\n    }\n  }, {\n    key: "mountTo",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator2 = _createForOfIteratorHelper(this.children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n          child.mountTo(this.root);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: "appendChild",\n    value: function appendChild(child) {\n      this.children.push(child); // console.log(child);\n      // child.mountTo(this.root);\n    }\n  }]);\n\n  return Wrapper;\n}();\n\n//# sourceURL=webpack:///./createElement.js?')},"./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./createElement.js");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Div = /*#__PURE__*/function () {\n  function Div(config) {\n    _classCallCheck(this, Div);\n\n    this.children = [];\n    this.root = document.createElement("div");\n  }\n\n  _createClass(Div, [{\n    key: "setAttribute",\n    value: function setAttribute(name, value) {\n      // console.log(name, value)\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: "mountTo",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator = _createForOfIteratorHelper(this.children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n          child.mountTo(this.root);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: "appendChild",\n    value: function appendChild(child) {\n      this.children.push(child); // console.log(child);\n      // child.mountTo(this.root);\n    }\n  }]);\n\n  return Div;\n}();\n\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.root = document.createTextNode(text); // console.log(config);\n  }\n\n  _createClass(Text, [{\n    key: "mountTo",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Text;\n}();\n\nvar Wrapper = /*#__PURE__*/function () {\n  function Wrapper(type) {\n    _classCallCheck(this, Wrapper);\n\n    this.children = [];\n    this.root = document.createElement(type); // console.log(config);\n  }\n\n  _createClass(Wrapper, [{\n    key: "setAttribute",\n    value: function setAttribute(name, value) {\n      // console.log(name, value)\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: "addEventListener",\n    value: function addEventListener(type, handler, config) {\n      var _this$root;\n\n      (_this$root = this.root).addEventListener.apply(_this$root, arguments);\n    }\n  }, {\n    key: "mountTo",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator2 = _createForOfIteratorHelper(this.children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n          child.mountTo(this.root);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: "appendChild",\n    value: function appendChild(child) {\n      this.children.push(child); // console.log(child);\n      // child.mountTo(this.root);\n    }\n  }]);\n\n  return Wrapper;\n}();\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel() {\n    _classCallCheck(this, Carousel);\n\n    this.children = [];\n    this.attributes = new Map();\n    this.properties = new Map();\n  }\n\n  _createClass(Carousel, [{\n    key: "setAttribute",\n    value: function setAttribute(name, value) {\n      this[name] = value;\n    }\n  }, {\n    key: "appendChild",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this = this;\n\n      var children = this.data.map(function (url) {\n        var element = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {\n          src: url\n        });\n        element.addEventListener("dragstart", function (event) {\n          return event.preventDefault();\n        });\n        return element;\n      });\n      var root = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {\n        "class": "carousel"\n      }, children);\n      var position = 0;\n\n      var nextPic = function nextPic() {\n        var nextPosition = (position + 1) % _this.data.length;\n        var current = root.children[position].root;\n        var next = root.children[nextPosition].root;\n        current.style.transition = "ease 0s";\n        next.style.transition = "ease 0s";\n        current.style.transform = "translateX(-".concat(100 * position, "%)");\n        next.style.transform = "translateX(".concat(100 - 100 * nextPosition, "%)");\n        setTimeout(function () {\n          // current.style.transition = "ease 0.5s";\n          // next.style.transition = "ease 0.5s";\n          current.style.transition = ""; // use css rule\n\n          next.style.transition = "";\n          current.style.transform = "translateX(-".concat(100 + 100 * position, "%)");\n          next.style.transform = "translateX(-".concat(100 * nextPosition, "%)");\n          position = nextPosition;\n        }, 16);\n        setTimeout(nextPic, 3000);\n      }; // setTimeout(nextPic, 3000);\n\n\n      root.addEventListener("mousedown", function (event) {\n        var startX = event.clientX;\n        var nextPosition = (position + 1) % _this.data.length;\n        var lastPosition = (position - 1 + _this.data.length) % _this.data.length;\n        var current = root.children[position].root;\n        var last = root.children[lastPosition].root;\n        var next = root.children[nextPosition].root;\n        current.style.transform = "translateX(".concat(event.clientX - 500 * position, "px)");\n        current.style.transition = "ease 0s";\n        last.style.transition = "ease 0s";\n        next.style.transition = "ease 0s";\n        current.style.transform = "translateX(-".concat(500 * position, "px)");\n        next.style.transform = "translateX(".concat(500 - 500 * nextPosition, "px)");\n        last.style.transform = "translateX(-".concat(500 + 500 * lastPosition, "px)");\n\n        var move = function move(event) {\n          current.style.transform = "translateX(".concat(event.clientX - startX - 500 * position, "px)");\n          last.style.transform = "translateX(".concat(event.clientX - startX - 500 - 500 * lastPosition, "px)");\n          next.style.transform = "translateX(".concat(event.clientX - startX + 500 - 500 * nextPosition, "px)");\n        };\n\n        var up = function up(event) {\n          var offset = 0;\n\n          if (event.clientX - startX > 250) {\n            offset = 1;\n          } else if (event.clientX - startX < -250) {\n            offset = -1;\n          }\n\n          current.style.transition = "";\n          last.style.transition = "";\n          next.style.transition = "";\n          current.style.transform = "translateX(".concat(offset * 500 - 500 * position, "px)");\n          last.style.transform = "translateX(".concat(offset * 500 - 500 - 500 * lastPosition, "px)");\n          next.style.transform = "translateX(".concat(offset * 500 + 500 - 500 * nextPosition, "px)");\n          position = (position - offset + _this.data.length) % _this.data.length;\n          console.log(position, offset);\n          document.removeEventListener(\'mousemove\', move);\n          document.removeEventListener(\'mouseup\', up);\n        };\n\n        document.addEventListener("mousemove", move);\n        document.addEventListener("mouseup", up);\n      });\n      return root;\n    }\n  }, {\n    key: "mountTo",\n    value: function mountTo(parent) {\n      this.render().mountTo(parent);\n    }\n  }, {\n    key: "style",\n    get: function get() {\n      return this.root.style;\n    }\n  }]);\n\n  return Carousel;\n}(); // component.mountTo(document.body);\n\n\nvar component = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Carousel, {\n  data: ["https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg", "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg", "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg", "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"]\n});\ncomponent.mountTo(document.body); // console.log(component)\n\n//# sourceURL=webpack:///./main.js?')}});