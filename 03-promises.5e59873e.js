function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");function l(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector(".form");n.addEventListener("submit",(function(t){t.preventDefault();const o=parseInt(n.elements.delay.value,10),i=parseInt(n.elements.step.value,10),s=parseInt(n.elements.amount.value,10);for(let n=0;n<s;n++){l(n+1,o+n*i).then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}}))}));
//# sourceMappingURL=03-promises.5e59873e.js.map
