parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/",e=document.body,t=function(n){return fetch("".concat(n,"phones.json")).then(function(n){return n.json()}).then(function(n){return n.map(function(n){return n.id})})},c=function(n,t){Promise.race(t.map(function(e){return fetch("".concat(n,"phones/").concat(e,".json"))})).then(function(n){return n.json()}).then(function(n){e.insertAdjacentHTML("beforeend",'\n        <div class="first-received">\n          <h3>First Received</h3>\n          <ul class="first"><li>'.concat(n.name,"</li></ul>\n        </div>\n      "))})},r=function(n,t){Promise.all(t.map(function(e){return fetch("".concat(n,"phones/").concat(e,".json"))})).then(function(n){return Promise.all(n.map(function(n){return n.json()}))}).then(function(n){e.insertAdjacentHTML("beforeend",'\n        <div class="all-successful">\n          <h3>All Successful</h3>\n          <ul class="all"></ul>\n        </div>\n      ');var t=document.querySelector(".all");n.map(function(n){t.insertAdjacentHTML("beforeend","\n          <li>".concat(n.name,"</li>\n        "))})})},o=function(n,t){Promise.all(t.map(function(e){return fetch("".concat(n,"phones/").concat(e,".json"))})).then(function(n){return Promise.all(n.map(function(n){return n.json()}))}).then(function(n){e.insertAdjacentHTML("beforeend",'\n        <div class="three-fastest">\n          <h3>Three Successful</h3>\n          <ul class="three"></ul>\n        </div>\n      ');var t=document.querySelector(".three");n.filter(function(n,e){return e<3}).map(function(n){t.insertAdjacentHTML("beforeend","\n          <li>".concat(n.name,"</li>\n        "))})})};t(n).then(function(e){return c(n,e)}).catch(function(n){return new Error(n)}),t(n).then(function(e){return r(n,e)}).catch(function(n){return new Error(n)}),t(n).then(function(e){return o(n,e)}).catch(function(n){return new Error(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.da33df23.js.map