// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):u.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,p,u,l,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",u=1,l=0;l<e.length;l++)if(s(i=e[l]))p+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",u+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function _(e){return"string"==typeof e}function O(e){var r,t;if(!_(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var A,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,L=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var B=A;function G(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"string"==typeof e}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=U(),M=U(),z=Object.prototype.toString,K=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&K.call(e,r)}var q,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",Q=M&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return z.call(e);t=e[J],r=H(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[J]=t:delete e[J],i}:function(e){return z.call(e)},Y=String.prototype.valueOf,ee=X&&"symbol"==typeof Symbol.toStringTag;function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object String]"===Q(e)))}function te(e){return N(e)||re(e)}G(te,"isPrimitive",N),G(te,"isObject",re),q=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};var ie=q;function ne(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function oe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(n):ae(n)+e,i&&(e="-"+e)),e}var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function pe(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=oe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=oe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ue(e){return"string"==typeof e}var le=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ye=/^(\d+)e/,ve=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=de.call(t,Ee,"$1e"),t=de.call(t,me,"e"),t=de.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=de.call(t,he,"e+0$1"),t=de.call(t,we,"e-0$1"),e.alternate&&(t=de.call(t,be,"$1."),t=de.call(t,ye,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ge.call(e.specifier)?ge.call(t):fe.call(t)}function ke(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Se(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ke(i):ke(i)+e}var je=String.fromCharCode,Te=isNaN,Ve=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fe(e){var r,t,i,n,a,o,c,s,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ue(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=$e(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Te(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Te(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=pe(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Te(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Te(a)?String(i.arg):je(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=oe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Se(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Oe(e){var r,t,i,n;for(t=[],n=0,i=Ie.exec(e);i;)(r=e.slice(n,Ie.lastIndex-i[0].length)).length&&t.push(r),t.push(_e(i)),n=Ie.lastIndex,i=Ie.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ae(e){return"string"==typeof e}function Ce(e){var r,t,i;if(!Ae(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Oe(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Fe.apply(null,t)}var Re=/./;function Ze(e){return"boolean"==typeof e}var Pe=U(),Le=Boolean,We=Boolean.prototype.toString,Be=Pe&&"symbol"==typeof Symbol.toStringTag;function Ge(e){return"object"==typeof e&&(e instanceof Le||(Be?function(e){try{return We.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function Ne(e){return Ze(e)||Ge(e)}function Ue(e){return"number"==typeof e}function Xe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Me(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Xe(n):Xe(n)+e,i&&(e="-"+e)),e}G(Ne,"isPrimitive",Ze),G(Ne,"isObject",Ge);var ze=String.prototype.toLowerCase,Ke=String.prototype.toUpperCase;function He(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ue(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Me(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Me(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ke.call(e.specifier)?Ke.call(t):ze.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function qe(e){return"string"==typeof e}var De=Math.abs,Je=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase,Ye=String.prototype.replace,er=/e\+(\d)$/,rr=/e-(\d)$/,tr=/^(\d+)$/,ir=/^(\d+)e/,nr=/\.0$/,ar=/\.0*e/,or=/(\..*[^0])0*e/;function cr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":De(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ye.call(t,or,"$1e"),t=Ye.call(t,ar,"e"),t=Ye.call(t,nr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ye.call(t,er,"e+0$1"),t=Ye.call(t,rr,"e-0$1"),e.alternate&&(t=Ye.call(t,tr,"$1."),t=Ye.call(t,ir,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Qe.call(e.specifier)?Qe.call(t):Je.call(t)}function sr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function pr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+sr(i):sr(i)+e}var ur=String.fromCharCode,lr=isNaN,fr=Array.isArray;function gr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function dr(e){var r,t,i,n,a,o,c,s,p;if(!fr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(qe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=gr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,lr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,lr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=He(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!lr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=lr(a)?String(i.arg):ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=cr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Me(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=pr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function br(e){var r,t,i,n;for(t=[],n=0,i=hr.exec(e);i;)(r=e.slice(n,hr.lastIndex-i[0].length)).length&&t.push(r),t.push(wr(i)),n=hr.lastIndex,i=hr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function yr(e){return"string"==typeof e}function vr(e){var r,t;if(!yr(e))throw new TypeError(vr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[br(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return dr.apply(null,r)}function mr(){return new Function("return this;")()}var Er="object"==typeof self?self:null,xr="object"==typeof window?window:null,kr="object"==typeof globalThis?globalThis:null,Sr=function(e){if(arguments.length){if(!Ze(e))throw new TypeError(vr("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return mr()}if(kr)return kr;if(Er)return Er;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),jr=Sr.document&&Sr.document.childNodes,Tr=Int8Array;function Vr(){return/^\s*function\s*([^(]*)/i}var $r=/^\s*function\s*([^(]*)/i;function Fr(e){return null!==e&&"object"==typeof e}G(Vr,"REGEXP",$r);var Ir=function(e){if("function"!=typeof e)throw new TypeError(vr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ie(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Fr);function _r(e){var r,t,i,n;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=$r.exec(i.toString()))return r[1]}return Fr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Fr,"isObjectLikeArray",Ir);var Or="function"==typeof Re||"object"==typeof Tr||"function"==typeof jr?function(e){return _r(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?_r(e).toLowerCase():r};function Ar(e){return"function"===Or(e)}var Cr=Object,Rr=/./;function Zr(e){return"boolean"==typeof e}var Pr=U(),Lr=Boolean,Wr=Boolean.prototype.toString,Br=Pr&&"symbol"==typeof Symbol.toStringTag;function Gr(e){return"object"==typeof e&&(e instanceof Lr||(Br?function(e){try{return Wr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function Nr(e){return Zr(e)||Gr(e)}function Ur(e){return"number"==typeof e}function Xr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Mr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Xr(n):Xr(n)+e,i&&(e="-"+e)),e}G(Nr,"isPrimitive",Zr),G(Nr,"isObject",Gr);var zr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase;function Hr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ur(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Mr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Mr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Kr.call(e.specifier)?Kr.call(t):zr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function qr(e){return"string"==typeof e}var Dr=Math.abs,Jr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase,Yr=String.prototype.replace,et=/e\+(\d)$/,rt=/e-(\d)$/,tt=/^(\d+)$/,it=/^(\d+)e/,nt=/\.0$/,at=/\.0*e/,ot=/(\..*[^0])0*e/;function ct(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ur(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Dr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Yr.call(t,ot,"$1e"),t=Yr.call(t,at,"e"),t=Yr.call(t,nt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Yr.call(t,et,"e+0$1"),t=Yr.call(t,rt,"e-0$1"),e.alternate&&(t=Yr.call(t,tt,"$1."),t=Yr.call(t,it,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Qr.call(e.specifier)?Qr.call(t):Jr.call(t)}function st(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function pt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+st(i):st(i)+e}var ut=String.fromCharCode,lt=isNaN,ft=Array.isArray;function gt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function dt(e){var r,t,i,n,a,o,c,s,p;if(!ft(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(qr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=gt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,lt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,lt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Hr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!lt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=lt(a)?String(i.arg):ut(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ct(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Mr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=pt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ht=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function bt(e){var r,t,i,n;for(t=[],n=0,i=ht.exec(e);i;)(r=e.slice(n,ht.lastIndex-i[0].length)).length&&t.push(r),t.push(wt(i)),n=ht.lastIndex,i=ht.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function yt(e){return"string"==typeof e}function vt(e){var r,t;if(!yt(e))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[bt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return dt.apply(null,r)}function mt(){return new Function("return this;")()}var Et="object"==typeof self?self:null,xt="object"==typeof window?window:null,kt="object"==typeof globalThis?globalThis:null,St=function(e){if(arguments.length){if(!Zr(e))throw new TypeError(vt("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return mt()}if(kt)return kt;if(Et)return Et;if(xt)return xt;throw new Error("unexpected error. Unable to resolve global object.")}(),jt=St.document&&St.document.childNodes,Tt=Int8Array;function Vt(){return/^\s*function\s*([^(]*)/i}var $t=/^\s*function\s*([^(]*)/i;function Ft(e){return null!==e&&"object"==typeof e}G(Vt,"REGEXP",$t);var It=function(e){if("function"!=typeof e)throw new TypeError(vt("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ie(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Ft);function _t(e){var r,t,i,n;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=$t.exec(i.toString()))return r[1]}return Ft(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Ft,"isObjectLikeArray",It);var Ot,At,Ct="function"==typeof Rr||"object"==typeof Tt||"function"==typeof jt?function(e){return _t(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?_t(e).toLowerCase():r},Rt=Object.getPrototypeOf;At=Object.getPrototypeOf,Ot="function"===Ct(At)?Rt:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Zt=Ot,Pt=Object.prototype;function Lt(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ie(e)}(e)&&(r=function(e){return null==e?null:(e=Cr(e),Zt(e))}(e),!r||!H(e,"constructor")&&H(r,"constructor")&&Ar(r.constructor)&&"[object Function]"===Q(r.constructor)&&H(r,"isPrototypeOf")&&Ar(r.isPrototypeOf)&&(r===Pt||function(e){var r;for(r in e)if(!H(e,r))return!1;return!0}(e)))}function Wt(e,r){return Lt(r)?H(r,"sep")&&(e.sep=r.sep,!N(e.sep))?new TypeError(Ce("invalid option. `%s` option must be a string. Option: `%s`.","sep",e.sep)):null:new TypeError(Ce("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Bt(e,r){return null!=e&&("symbol"==typeof r?r in Object(e):String(r)in Object(e))}function Gt(e,r){var t,i=r.length;if(0===i)return!1;for(t=0;t<i;t++){if(!Bt(e,r[t]))return!1;e=e[r[t]]}return!0}function Nt(e,r,t){var i,n,a;if(!(i=N(r))&&!ie(r))throw new TypeError(Ce("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(n={sep:"."},arguments.length>2&&(a=Wt(n,t)))throw a;return null!=e&&Gt(e,i?r.split(n.sep):r)}return G(Nt,"factory",(function(e,r){var t,i,n,a;if(!(t=N(e))&&!ie(e))throw new TypeError(Ce("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(n={sep:"."},arguments.length>1&&(a=Wt(n,r)))throw a;return i=t?e.split(n.sep):e,o;function o(e){return null!=e&&Gt(e,i)}})),Nt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).deepHasProp=r();
//# sourceMappingURL=browser.js.map
