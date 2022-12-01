// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@esm/index.mjs";function d(r,t){return i(t)?o(t,"sep")&&(r.sep=t.sep,!s(r.sep))?new TypeError(e("01L2i","sep",r.sep)):null:new TypeError(e("01L2h",t))}var m={sep:"."};function l(r,s){var t,e=s.length;if(0===e)return!1;for(t=0;t<e;t++){if(!p(r,s[t]))return!1;r=r[s[t]]}return!0}function h(r,i,o){var p,h,j;if(!(p=s(i))&&!t(i))throw new TypeError(e("01L3M",i));if(h=n(m),arguments.length>2&&(j=d(h,o)))throw j;return null!=r&&l(r,p?i.split(h.sep):i)}function j(r,i){var o,p,h,j;if(!(o=s(r))&&!t(r))throw new TypeError(e("01L3M",r));if(h=n(m),arguments.length>1&&(j=d(h,i)))throw j;return p=o?r.split(h.sep):r,f;function f(r){return null!=r&&l(r,p)}}r(h,"factory",j);export{h as default,j as factory};
//# sourceMappingURL=index.mjs.map