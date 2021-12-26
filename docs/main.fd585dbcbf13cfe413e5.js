(()=>{"use strict";var t={994:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(933),o=r.n(n),i=r(476),a=r.n(i)()(o());a.push([t.id,"*{margin:0;padding:0;box-sizing:border-box;font:1.2rem sans-serif;background-color:#5a5353}.hamburger{top:15px;margin:15px auto 0 auto;width:50px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}.hamburger span{border-radius:5px;height:4px;background-color:#000;margin-top:5px;transition:0.7s all}.hamburger-active{cursor:pointer}.hamburger-active span:first-child{transform:translateY(5px) rotate(45deg)}.hamburger-active span:nth-child(2){display:none}.hamburger-active span:last-child{transform:translateY(-5px) rotate(-45deg)}.accordion{display:flex;flex-direction:column;width:fit-content;max-height:0px;overflow:hidden;user-select:none;transition:max-height 0.3s ease-in;margin:20px auto 0 auto}.accordion__title{position:relative;display:flex;align-items:center;cursor:pointer;padding:10px 5px}.accordion__title_wrapper{display:flex;align-items:center;transition:all 0.3s ease-in}.accordion__title_wrapper span{display:block;height:2px;width:12px;background-color:black}.accordion__title_wrapper span:first-of-type{transform:translateX(4px) rotate(40deg)}.accordion__title_wrapper span:last-child{transform:rotate(-40deg)}.accordion__title_img{margin-right:10px;width:26px}.accordion__title_text{display:block;text-align:left}.accordion__title_text-info{color:#da2020;font-weight:700;width:160px;margin-right:10px}.accordion__title_text-details{color:blue;font-weight:700;width:160px;margin-right:10px}.accordion__title_text-stats{color:green;font-weight:700;width:160px;margin-right:10px}.accordion__title_text-keywords{color:blueviolet;font-weight:700;width:160px;margin-right:10px}.accordion__title_text-properties{color:orangered;font-weight:700;width:160px;margin-right:10px}.accordion__title:before{content:'';position:absolute;top:0;left:0;width:0;height:45px;background:rgba(128,124,123,0.3);transition:all 0.6s ease}.accordion__title:hover:before{width:84%}.accordion__body{margin:10px auto;max-height:0px;width:235px;overflow:hidden;transition:all 0.3s ease-in}.body-active{overflow:visible}.accordion-active{height:auto;overflow:visible}.title-active{transform:translate(4px) rotate(180deg)}\n",""]);const c=a},476:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=n.base?s[0]+n.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,n);n.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(t,e){var r=e.domAPI(e);r.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=n(t,o),l=0;l<i.length;l++){var d=r(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},311:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},192:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},760:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},865:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=r(892),e=r.n(t),n=r(760),o=r.n(n),i=r(311),a=r.n(i),c=r(192),s=r.n(c),l=r(60),d=r.n(l),p=r(865),u=r.n(p),f=r(994),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d();e()(f.Z,g);f.Z&&f.Z.locals&&f.Z.locals;const h=function(t){var e=t.trigger,r=t.event,n=t.condition,o=t.delegate;e.addEventListener(r,(function(t){var r=t.target;n(r)&&o(e)}))};const v=function(t){document.querySelectorAll(t).forEach((function(t){h({trigger:t,event:"click",condition:function(t){return"accordion__title"===t.className},delegate:function(t){t.lastElementChild.classList.toggle("title-active"),t.nextElementSibling.classList.toggle("body-active"),t.lastElementChild.classList.contains("title-active")?t.nextElementSibling.style.maxHeight="".concat(t.nextElementSibling.scrollHeight,"px"):t.nextElementSibling.style.maxHeight="0px"}})}))};function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x,b,_,y,w,C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this.init()}var e,r,n;return e=t,(r=[{key:"init",value:function(){var t=this,e=document.querySelector(this._config.trigger.selector),r=document.querySelector(this._config.content.selector);if(!e||!r)throw new Error("Trigger or content is null, please provide valid selector");e.addEventListener("click",(function(){e.classList.toggle(t._config.trigger.activeClass),r.classList.toggle(t._config.content.activeClass)}))}}])&&m(e.prototype,r),n&&m(e,n),t}();b=(x={selectorHamburger:".hamburger",selectorContent:".accordion",hamburgerActiveClass:"hamburger-active",contentActiveClass:"accordion-active"}).selectorHamburger,_=x.selectorContent,y=x.hamburgerActiveClass,w=x.contentActiveClass,new C({trigger:{selector:b,activeClass:y},content:{selector:_,activeClass:w}}),v(".accordion__title")})()})();