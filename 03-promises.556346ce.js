!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire935b;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequire935b=r);var u=r("6JpON"),i=document.querySelector(".form"),a=i.querySelector("input[name='delay']"),l=i.querySelector("input[name='step']"),c=i.querySelector("input[name='amount']");function f(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault();for(var t=0;t<c.value;t++){f(t+1,Number(a.value)+Number(l.value)*t).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)}))}}))}();
//# sourceMappingURL=03-promises.556346ce.js.map