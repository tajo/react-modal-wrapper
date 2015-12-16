(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-portal"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-portal"], factory);
	else if(typeof exports === 'object')
		exports["react-modal-wrapper"] = factory(require("react"), require("react-dom"), require("react-portal"));
	else
		root["react-modal-wrapper"] = factory(root["react"], root["react-dom"], root["react-portal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _FlexModalWrapper = __webpack_require__(1);
	
	var _FlexModalWrapper2 = _interopRequireDefault(_FlexModalWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _FlexModalWrapper2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWrapper = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactPortal = __webpack_require__(4);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	var _FlexModalWrapper = __webpack_require__(5);
	
	var _FlexModalWrapper2 = _interopRequireDefault(_FlexModalWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var scrollEvents = ['scroll', 'touchmove', 'wheel'];
	
	var ModalWrapper = exports.ModalWrapper = (function (_React$Component) {
	  _inherits(ModalWrapper, _React$Component);
	
	  function ModalWrapper() {
	    _classCallCheck(this, ModalWrapper);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalWrapper).call(this));
	
	    _this.handleMouseClickOutside = _this.handleMouseClickOutside.bind(_this);
	    _this.handleScrollOutside = _this.handleScrollOutside.bind(_this);
	    return _this;
	  }
	
	  _createClass(ModalWrapper, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      if (this.props.closeOnOutsideClick) {
	        document && document.addEventListener('mousedown', this.handleMouseClickOutside);
	      }
	      if (this.props.preventScrolling) {
	        scrollEvents.forEach(function (eventType) {
	          return document && document.addEventListener(eventType, _this2.handleScrollOutside);
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _this3 = this;
	
	      document && document.removeEventListener('mousedown', this.handleMouseClickOutside);
	      scrollEvents.forEach(function (eventType) {
	        return document && document.removeEventListener(eventType, _this3.handleScrollOutside);
	      });
	    }
	  }, {
	    key: 'handleMouseClickOutside',
	    value: function handleMouseClickOutside(e) {
	      if ((0, _reactPortal.isNodeInRoot)(e.target, (0, _reactDom.findDOMNode)(this.refs.content))) {
	        return;
	      }
	      e.stopPropagation();
	      this.props.closePortal();
	    }
	  }, {
	    key: 'handleScrollOutside',
	    value: function handleScrollOutside(e) {
	      if ((0, _reactPortal.isNodeInRoot)(e.target, (0, _reactDom.findDOMNode)(this.refs.content))) {
	        return;
	      }
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var useOverlay = _props.useOverlay;
	      var overlayClassName = _props.overlayClassName;
	      var overlayStyle = _props.overlayStyle;
	      var closeModal = _props.closePortal;
	
	      var modalwrapper = _react2.default.createElement(
	        'div',
	        { className: className ? _FlexModalWrapper2.default.flexModalWrapper + ' ' + className : _FlexModalWrapper2.default.flexModalWrapper, ref: 'content' },
	        _react2.default.Children.map(this.props.children, function (c) {
	          return _react2.default.cloneElement(c, { closeModal: closeModal });
	        })
	      );
	      var overlay = undefined;
	      if (useOverlay) {
	        if (overlayStyle) {
	          overlay = _react2.default.createElement(
	            'div',
	            { className: _FlexModalWrapper2.default.flexModalOverlay, style: overlayStyle },
	            modalwrapper
	          );
	        } else {
	          overlay = _react2.default.createElement(
	            'div',
	            { className: _FlexModalWrapper2.default.flexModalOverlay + ' ' + (overlayClassName || _FlexModalWrapper2.default.overlayStyle) },
	            modalwrapper
	          );
	        }
	      } else {
	        overlay = _react2.default.createElement(
	          'div',
	          { className: _FlexModalWrapper2.default.flexModalOverlay },
	          modalwrapper
	        );
	      }
	      return overlay;
	    }
	  }]);
	
	  return ModalWrapper;
	})(_react2.default.Component);
	
	ModalWrapper.propTypes = {
	  children: _react2.default.PropTypes.node.isRequired,
	  className: _react2.default.PropTypes.string,
	  useOverlay: _react2.default.PropTypes.bool,
	  overlayStyle: _react2.default.PropTypes.object,
	  overlayClassName: _react2.default.PropTypes.string,
	  closeOnOutsideClick: _react2.default.PropTypes.bool,
	  preventScrolling: _react2.default.PropTypes.bool,
	  // passed by Portal
	  closePortal: _react2.default.PropTypes.func
	};
	ModalWrapper.defaultProps = {
	  useOverlay: true,
	  preventScrolling: true
	};
	
	var FlexModalWrapper = (function (_React$Component2) {
	  _inherits(FlexModalWrapper, _React$Component2);
	
	  function FlexModalWrapper() {
	    _classCallCheck(this, FlexModalWrapper);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlexModalWrapper).apply(this, arguments));
	  }
	
	  _createClass(FlexModalWrapper, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	
	      var other = _objectWithoutProperties(_props2, ['children']);
	
	      var _other = other;
	      var closeOnOutsideClick = _other.closeOnOutsideClick;
	      var className = _other.className;
	      var useOverlay = _other.useOverlay;
	      var overlayStyle = _other.overlayStyle;
	      var overlayClassName = _other.overlayClassName;
	      var preventScrolling = _other.preventScrolling;
	
	      var portalOptions = _objectWithoutProperties(_other, ['closeOnOutsideClick', 'className', 'useOverlay', 'overlayStyle', 'overlayClassName', 'preventScrolling']);
	
	      return _react2.default.createElement(
	        _reactPortal2.default,
	        portalOptions,
	        _react2.default.createElement(
	          ModalWrapper,
	          { closeOnOutsideClick: closeOnOutsideClick, className: className, useOverlay: useOverlay, overlayStyle: overlayStyle, overlayClassName: overlayClassName, preventScrolling: preventScrolling },
	          children
	        )
	      );
	    }
	  }]);
	
	  return FlexModalWrapper;
	})(_react2.default.Component);
	
	exports.default = FlexModalWrapper;
	
	FlexModalWrapper.propTypes = {
	  children: _react2.default.PropTypes.node.isRequired,
	  className: _react2.default.PropTypes.string,
	  useOverlay: _react2.default.PropTypes.bool,
	  overlayStyle: _react2.default.PropTypes.object,
	  overlayClassName: _react2.default.PropTypes.string,
	  // Portal props
	  isOpened: _react2.default.PropTypes.bool,
	  openByClickOn: _react2.default.PropTypes.element,
	  closeOnEsc: _react2.default.PropTypes.bool,
	  closeOnOutsideClick: _react2.default.PropTypes.bool,
	  preventScrolling: _react2.default.PropTypes.bool,
	  onClose: _react2.default.PropTypes.func
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./FlexModalWrapper.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./FlexModalWrapper.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".GQhOsIKVvqRfRUzxnhZUS {\n    -webkit-box-flex: 0;\n    -webkit-flex-grow: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: auto;\n        -ms-flex-preferred-size: auto;\n            flex-basis: auto;\n    max-width: 100%;\n    max-height: 100%;\n    overflow-y: auto;\n}\n\n._72E20jckRALQKBlvsVKA9 {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    box-align: center;\n    box-pack: center;\n    z-index: 9900;\n}\n\n.aqiN6IkLVWWgQwOHMvCEz {\n    background: rgba(0,0,0,0.2);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"flexModalWrapper": "GQhOsIKVvqRfRUzxnhZUS",
		"flexModalOverlay": "_72E20jckRALQKBlvsVKA9",
		"overlayStyle": "aqiN6IkLVWWgQwOHMvCEz"
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map