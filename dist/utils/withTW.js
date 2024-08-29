(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils/withTW.[file].js"] = factory();
	else
		root["utils/withTW.[file].js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utilities/withTW.js":
/*!*********************************!*\
  !*** ./src/utilities/withTW.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var deepmerge = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
var libraryConfig = __webpack_require__(/*! ../../tailwind.config.js */ "./tailwind.config.js");
var withTW = function withTW(tailwindConfig) {
  return deepmerge(libraryConfig, _objectSpread({}, tailwindConfig));
};
module.exports = withTW;

/***/ }),

/***/ "./tailwind.config.js":
/*!****************************!*\
  !*** ./tailwind.config.js ***!
  \****************************/
/***/ (function(module) {

module.exports = {
  content: ['node_modules/@bsf/force-ui/dist/force-ui.js'],
  theme: {
    extend: {
      colors: {
        // brand
        'brand-background-50': '#EFF6FF',
        'brand-background-hover-100': '#DBEAFE',
        'brand-200': '#BFDBFE',
        'brand-border-300': '#93C5FD',
        'brand-400': '#60A5FA',
        'brand-500': '#3B82F6',
        'brand-primary-600': '#2563EB',
        'brand-hover-700': '#1D4ED8',
        'brand-800': '#1E40AF',
        'brand-900': '#1E3A8A',
        'brand-text-950': '#172554',
        // background
        'background-primary': '#FFFFFF',
        'background-secondary': '#F3F4F6',
        'background-inverse': '#111827',
        'background-brand': '#2563EB',
        // field
        'field-primary-background': '#F9FAFB',
        'field-secondary-background': '#FFFFFF',
        'field-primary-hover': '#F3F4F6',
        'field-secondary-hover': '#F3F4F6',
        'field-dropzone-background': '#FFFFFF',
        'field-border': '#E5E7EB',
        'field-dropzone-background-hover': '#F9FAFB',
        'field-dropzone-color': '#2563EB',
        'field-label': '#111827',
        'field-input': '#111827',
        'field-helper': '#9CA3AF',
        'field-background-disabled': '#F9FAFB',
        'field-color-disabled': '#D1D5DB',
        'field-placeholder': '#6B7280',
        'field-border-disabled': '#F3F4F6',
        'field-color-error': '#DC2626',
        'field-border-error': '#FECACA',
        'field-background-error': '#FEF2F2',
        'field-required': '#DC2626',
        // border
        'border-interactive': '#2563EB',
        'border-subtle': '#E5E7EB',
        'border-strong': '#6B7280',
        'border-inverse': '#374151',
        'border-disabled': '#E5E7EB',
        'border-muted': '#E5E7EB',
        'border-error': '#DC2626',
        'border-transparent-subtle': '#37415114',
        'border-white': '#FFFFFF',
        // text
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
        'text-tertiary': '#9CA3AF',
        'text-on-color': '#FFFFFF',
        'text-error': '#DC2626',
        'text-error-inverse': '#F87171',
        'text-inverse': '#FFFFFF',
        'text-disabled': '#D1D5DB',
        'text-on-button-disabled': '#9CA3AF',
        // link
        'link-primary': '#2563EB',
        'link-primary-hover': '#1D4ED8',
        'link-inverse': '#38BDF8',
        'link-visited': '#7C3AED',
        'link-visited-inverse': '#A78BFA',
        'link-inverse-hover': '#7DD3FC',
        // icon
        'icon-primary': '#111827',
        'icon-secondary': '#4B5563',
        'icon-on-color': '#FFFFFF',
        'icon-inverse': '#FFFFFF',
        'icon-interactive': '#2563EB',
        'icon-on-color-disabled': '#9CA3AF',
        'icon-disabled': '#D1D5DB',
        // support
        'support-error': '#DC2626',
        'support-success': '#16A34A',
        'support-warning': '#EAB308',
        'support-info': '#0284C7',
        'support-error-inverse': '#F87171',
        'support-success-inverse': '#4ADE80',
        'support-warning-inverse': '#FDE047',
        'support-info-inverse': '#38BDF8',
        // button
        'button-primary': '#2563EB',
        'button-primary-hover': '#1D4ED8',
        'button-secondary': '#1F2937',
        'button-secondary-hover': '#374151',
        'button-tertiary': '#FFFFFF',
        'button-tertiary-hover': '#F9FAFB',
        'button-danger': '#DC2626',
        'button-danger-secondary': '#DC2626',
        'button-danger-hover': '#B91C1C',
        'button-disabled': '#F3F4F6',
        'button-tertiary-border': '#E5E7EB',
        'button-tertiary-color': '#111827',
        // focus
        focus: '#2563EB',
        'focus-inset': '#FFFFFF',
        'focus-inverse': '#38BDF8',
        'focus-inverse-inset': '#111827',
        'focus-error': '#DC2626',
        'focus-border': '#BFDBFE',
        'focus-error-border': '#FECACA',
        // misc
        'misc-highlight': '#BFDBFE',
        'misc-overlay': '#11182780',
        'misc-skeleton-background': '#F3F4F6',
        'misc-skeleton-element': '#D1D5DB',
        'misc-popup-button-hover': '#1118270D',
        'misc-tab-item-hover': '#E5E7EB',
        'misc-dropdown-hover': '#F3F4F6',
        'misc-loader-base': '#1118270D',
        'misc-loader-color': '#2563EB',
        'misc-progress-background': '#E5E7EB',
        // badge
        'badge-background-gray': '#F9FAFB',
        'badge-color-gray': '#1F2937',
        'badge-hover-gray': '#F3F4F6',
        'badge-border-gray': '#E5E7EB',
        'badge-background-red': '#FEF2F2',
        'badge-color-red': '#B91C1C',
        'badge-hover-red': '#FEE2E2',
        'badge-border-red': '#FECACA',
        'badge-background-yellow': '#FEFCE8',
        'badge-color-yellow': '#A16207',
        'badge-hover-yellow': '#FEF9C3',
        'badge-border-yellow': '#FEF08A',
        'badge-hover-green': '#DCFCE7',
        'badge-border-green': '#BBF7D0',
        'badge-background-green': '#F0FDF4',
        'badge-color-green': '#15803D',
        'badge-background-sky': '#F0F9FF',
        'badge-color-sky': '#0369A1',
        'badge-hover-sky': '#E0F2FE',
        'badge-border-sky': '#BAE6FD',
        'badge-background-disabled': '#F3F4F6',
        'badge-color-disabled': '#D1D5DB',
        'badge-hover-disabled': '#F3F4F6',
        'badge-border-disabled': '#E5E7EB',
        // alert
        'alert-background-neutral': '#FFFFFF',
        'alert-border-neutral': '#E5E7EB',
        'alert-background-danger': '#FEF2F2',
        'alert-border-danger': '#FECACA',
        'alert-background-warning': '#FEFCE8',
        'alert-border-warning': '#FEF08A',
        'alert-background-green': '#F0FDF4',
        'alert-border-green': '#BBF7D0',
        'alert-background-info': '#F0F9FF',
        'alert-border-info': '#BAE6FD',
        // tab
        'tab-background': '#F3F4F6',
        'tab-border': '#E5E7EB',
        // tooltip
        'tooltip-background-light': '#FFFFFF',
        'tooltip-background-dark': '#111827',
        // toggle
        'toggle-off': '#E5E7EB',
        'toggle-on': '#2563EB',
        'toggle-dial-background': '#FFFFFF',
        'toggle-off-hover': '#D1D5DB',
        'toggle-off-border': '#D1D5DB',
        'toggle-on-hover': '#3B82F6',
        'toggle-on-border': '#60A5FA',
        'toggle-off-disabled': '#F3F4F6'
      },
      width: {
        '1/7': '14.2857143%',
        '1/8': '12.5%',
        '1/9': '11.1111111%',
        '1/10': '10%',
        '1/11': '9.0909091%',
        '1/12': '8.3333333%'
      },
      boxShadow: {
        'soft-shadow-sm': '0px 6px 32px -12px rgba(149, 160, 178, 0.12)',
        'soft-shadow': '0px 8px 32px -12px rgba(149, 160, 178, 0.16)',
        'soft-shadow-md': '0px 10px 32px -12px rgba(149, 160, 178, 0.2)',
        'soft-shadow-lg': '0px 12px 32px -12px rgba(149, 160, 178, 0.24)',
        'soft-shadow-xl': '0px 16px 32px -12px rgba(149, 160, 178, 0.32)',
        'soft-shadow-2xl': '0px 24px 64px -12px rgba(149, 160, 178, 0.32)'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ (function(module) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utilities/withTW.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=withTW.js.map