(()=>{"use strict";var e={994:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(933),a=r.n(n),o=r(476),i=r.n(o)()(a());i.push([e.id,"*{margin:0;padding:0;box-sizing:border-box;font:1em sans-serif}.hamburger{top:15px;margin:15px auto 0 auto;width:50px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}.hamburger span{border-radius:5px;height:4px;background-color:#000;margin-top:5px;transition:0.7s all}.hamburger-active{cursor:pointer}.hamburger-active span:first-child{transform:translateY(5px) rotate(45deg)}.hamburger-active span:nth-child(2){display:none}.hamburger-active span:last-child{transform:translateY(-5px) rotate(-45deg)}.menu{display:none}.menu__item{padding:5px 10px;display:flex;align-items:center}.menu__item_img{margin-right:10px;width:18px}.menu__item_text{width:100px;margin-right:10px}.menu__item span{display:block;height:1px;width:8px;background-color:rgba(49,44,44,0.74)}.menu__item span:first-of-type{transform:translateX(2px) rotate(35deg)}.menu__item span:last-child{transform:rotate(-35deg)}.menu-active{display:flex;flex-direction:column;margin:20px auto 0 auto;width:fit-content}.menu-active__item{display:flex;cursor:pointer}\n",""]);const s=i},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);n&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],p=o[u]||0,l="".concat(u," ").concat(p);o[u]=p+1;var d=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=a(f,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,t){var r=t.domAPI(t);r.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=n(e,a),u=0;u<o.length;u++){var p=r(o[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=c}}},311:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(892),t=r.n(e),n=r(760),a=r.n(n),o=r(311),i=r.n(o),s=r(192),c=r.n(s),u=r(60),p=r.n(u),l=r(865),d=r.n(l),f=r(994),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p();t()(f.Z,m);f.Z&&f.Z.locals&&f.Z.locals;var v=document.querySelector(".hamburger"),h=document.querySelector(".menu");v.addEventListener("click",(function(){v.classList.toggle("hamburger-active"),h.classList.toggle("menu-active")}))})()})();