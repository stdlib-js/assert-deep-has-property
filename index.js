// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).deepHasProp=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,a,o,p,l,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=_(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function I(e){var r,t,i;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var O,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,W=C.__lookupGetter__,L=C.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var G=O;function U(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"string"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return N&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&z.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,q="function"==typeof H?H.toStringTag:"";var J=X()?function(e){var r,t,i;if(null==e)return M.call(e);t=e[q],r=D(e,q);try{e[q]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[q]=t:delete e[q],i}:function(e){return M.call(e)},K=String.prototype.valueOf;var Q=X();function Y(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function ee(e){return B(e)||Y(e)}U(ee,"isPrimitive",B),U(ee,"isObject",Y);var re=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function te(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}var ie=/./;function ne(e){return"boolean"==typeof e}var ae=Boolean,oe=Boolean.prototype.toString;var ce=X();function se(e){return"object"==typeof e&&(e instanceof ae||(ce?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function pe(e){return ne(e)||se(e)}function le(e){return"number"==typeof e}function ue(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function fe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ue(n):ue(n)+e,i&&(e="-"+e)),e}U(pe,"isPrimitive",ne),U(pe,"isObject",se);var ge=String.prototype.toLowerCase,de=String.prototype.toUpperCase;function he(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!le(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=fe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=fe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===de.call(e.specifier)?de.call(t):ge.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function we(e){return"string"==typeof e}var be=Math.abs,ye=String.prototype.toLowerCase,ve=String.prototype.toUpperCase,me=String.prototype.replace,Ee=/e\+(\d)$/,xe=/e-(\d)$/,ke=/^(\d+)$/,Se=/^(\d+)e/,je=/\.0$/,_e=/\.0*e/,Te=/(\..*[^0])0*e/;function Ve(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!le(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":be(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=me.call(t,Te,"$1e"),t=me.call(t,_e,"e"),t=me.call(t,je,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=me.call(t,Ee,"e+0$1"),t=me.call(t,xe,"e-0$1"),e.alternate&&(t=me.call(t,ke,"$1."),t=me.call(t,Se,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ve.call(e.specifier)?ve.call(t):ye.call(t)}function $e(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ae(e,r,t){var i=r-e.length;return i<0?e:e=t?e+$e(i):$e(i)+e}var Fe=String.fromCharCode,Ie=isNaN,Oe=Array.isArray;function Ce(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Re(e){var r,t,i,n,a,o,c,s,p;if(!Oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(we(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ce(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ie(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ie(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=he(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ie(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ie(a)?String(i.arg):Fe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ve(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=fe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ae(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function We(e){var r,t,i,n;for(t=[],n=0,i=Pe.exec(e);i;)(r=e.slice(n,Pe.lastIndex-i[0].length)).length&&t.push(r),t.push(Ze(i)),n=Pe.lastIndex,i=Pe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Le(e){return"string"==typeof e}function Ge(e){var r,t,i;if(!Le(e))throw new TypeError(Ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=We(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Re.apply(null,t)}function Ue(){return new Function("return this;")()}var Be="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Xe="object"==typeof global?global:null,Me="object"==typeof globalThis?globalThis:null;var ze=function(e){if(arguments.length){if(!ne(e))throw new TypeError(Ge("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ue()}if(Me)return Me;if(Be)return Be;if(Ne)return Ne;if(Xe)return Xe;throw new Error("unexpected error. Unable to resolve global object.")}(),De=ze.document&&ze.document.childNodes,He=Int8Array;function qe(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Ke(e){return"number"==typeof e}function Qe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ye(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Qe(n):Qe(n)+e,i&&(e="-"+e)),e}U(qe,"REGEXP",Je);var er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase;function tr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ke(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ye(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ye(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===rr.call(e.specifier)?rr.call(t):er.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ir(e){return"string"==typeof e}var nr=Math.abs,ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase,cr=String.prototype.replace,sr=/e\+(\d)$/,pr=/e-(\d)$/,lr=/^(\d+)$/,ur=/^(\d+)e/,fr=/\.0$/,gr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ke(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":nr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=cr.call(t,dr,"$1e"),t=cr.call(t,gr,"e"),t=cr.call(t,fr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=cr.call(t,sr,"e+0$1"),t=cr.call(t,pr,"e-0$1"),e.alternate&&(t=cr.call(t,lr,"$1."),t=cr.call(t,ur,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===or.call(e.specifier)?or.call(t):ar.call(t)}function wr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function br(e,r,t){var i=r-e.length;return i<0?e:e=t?e+wr(i):wr(i)+e}var yr=String.fromCharCode,vr=isNaN,mr=Array.isArray;function Er(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function xr(e){var r,t,i,n,a,o,c,s,p;if(!mr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ir(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Er(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,vr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,vr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=tr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!vr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=vr(a)?String(i.arg):yr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=hr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ye(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=br(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function jr(e){var r,t,i,n;for(t=[],n=0,i=kr.exec(e);i;)(r=e.slice(n,kr.lastIndex-i[0].length)).length&&t.push(r),t.push(Sr(i)),n=kr.lastIndex,i=kr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function _r(e){return"string"==typeof e}function Tr(e){var r,t,i;if(!_r(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=jr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return xr.apply(null,t)}function Vr(e){return null!==e&&"object"==typeof e}function $r(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Je.exec(i.toString()))return r[1]}return Vr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(Vr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Tr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!re(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Vr));var Ar="function"==typeof ie||"object"==typeof He||"function"==typeof De?function(e){return $r(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?$r(e).toLowerCase():r};function Fr(e){return"function"===Ar(e)}var Ir,Or=Object,Cr=Object.getPrototypeOf;Ir=Fr(Object.getPrototypeOf)?Cr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Rr=Ir;var Pr=Object.prototype;function Zr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!re(e)}(e)&&(r=function(e){return null==e?null:(e=Or(e),Rr(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&Fr(r.constructor)&&"[object Function]"===J(r.constructor)&&D(r,"isPrototypeOf")&&Fr(r.isPrototypeOf)&&(r===Pr||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function Wr(e,r){return Zr(r)?D(r,"sep")&&(e.sep=r.sep,!B(e.sep))?new TypeError(te("02h2W,Gh","sep",e.sep)):null:new TypeError(te("02h2V,FD",r))}function Lr(e,r){var t,i,n,a=r.length;if(0===a)return!1;for(t=0;t<a;t++){if(i=e,n=r[t],null==i||!("symbol"==typeof n?n in Object(i):String(n)in Object(i)))return!1;e=e[r[t]]}return!0}function Gr(e,r,t){var i,n,a;if(!(i=B(r))&&!re(r))throw new TypeError(te("02h3A,It",r));if(n={sep:"."},arguments.length>2&&(a=Wr(n,t)))throw a;return null!=e&&Lr(e,i?r.split(n.sep):r)}return U(Gr,"factory",(function(e,r){var t,i,n,a;if(!(t=B(e))&&!re(e))throw new TypeError(te("02h3A,It",e));if(n={sep:"."},arguments.length>1&&(a=Wr(n,r)))throw a;return i=t?e.split(n.sep):e,o;function o(e){return null!=e&&Lr(e,i)}})),Gr}));
//# sourceMappingURL=index.js.map
