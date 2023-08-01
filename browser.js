// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).deepHasProp=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"string"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(t){var r,e,n;if(null==t)return b.call(t);e=t[j],r=d(t,j);try{t[j]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[j]=e:delete t[j],n}:function(t){return b.call(t)},w=String.prototype.valueOf;var _=y();function h(t){return"object"==typeof t&&(t instanceof String||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function m(t){return p(t)||h(t)}a(m,"isPrimitive",p),a(m,"isObject",h);var O=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function S(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var E=/./;function P(t){return"boolean"==typeof t}var T=Boolean.prototype.toString;var A=y();function B(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function L(t){return P(t)||B(t)}function x(){return new Function("return this;")()}a(L,"isPrimitive",P),a(L,"isObject",B);var C="object"==typeof self?self:null,F="object"==typeof window?window:null,M="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},V="object"==typeof M?M:null;var k=function(t){if(arguments.length){if(!P(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return x()}if(C)return C;if(F)return F;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),G=k.document&&k.document.childNodes,I=Int8Array;function R(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;function H(t){return null!==t&&"object"==typeof t}function N(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return H(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(R,"REGEXP",U),a(H,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!O(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(H));var X="function"==typeof E||"object"==typeof I||"function"==typeof G?function(t){return N(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?N(t).toLowerCase():r};function q(t){return"function"===X(t)}var z,D=Object.getPrototypeOf;z=q(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!O(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&q(r.constructor)&&"[object Function]"===g(r.constructor)&&d(r,"isPrototypeOf")&&q(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?d(r,"sep")&&(t.sep=r.sep,!p(t.sep))?new TypeError(S("01L2i","sep",t.sep)):null:new TypeError(S("01L2h",r))}function Y(t,r){var e,n,o,u=r.length;if(0===u)return!1;for(e=0;e<u;e++){if(n=t,o=r[e],null==n||!("symbol"==typeof o?o in Object(n):String(o)in Object(n)))return!1;t=t[r[e]]}return!0}function Z(t,r,e){var n,o,u;if(!(n=p(r))&&!O(r))throw new TypeError(S("01L3M",r));if(o={sep:"."},arguments.length>2&&(u=W(o,e)))throw u;return null!=t&&Y(t,n?r.split(o.sep):r)}return a(Z,"factory",(function(t,r){var e,n,o,u;if(!(e=p(t))&&!O(t))throw new TypeError(S("01L3M",t));if(o={sep:"."},arguments.length>1&&(u=W(o,r)))throw u;return n=e?t.split(o.sep):t,i;function i(t){return null!=t&&Y(t,n)}})),Z}));
//# sourceMappingURL=browser.js.map
