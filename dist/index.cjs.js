"use strict";var n=require("react");function e(n){var e=Object.create(null);return n&&Object.keys(n).forEach((function(o){if("default"!==o){var t=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:function(){return n[o]}})}})),e.default=n,Object.freeze(e)}var o=e(n);function t(n,e){void 0===e&&(e={});var o=e.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}t(".disabled {\n  cursor: not-allowed !important;\n  border-color: #EEEEEE !important;\n  fill: #EEEEEE !important;\n  color: #EEEEEE !important;\n}\n\n.Counter {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}");t(".disabled {\n  cursor: not-allowed !important;\n  border-color: #EEEEEE !important;\n  fill: #EEEEEE !important;\n  color: #EEEEEE !important;\n}\n\n.Counter {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}");function r(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var a,l={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=l,function(){var n={}.hasOwnProperty;function e(){for(var o=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)o.push(r);else if(Array.isArray(r)){if(r.length){var l=e.apply(null,r);l&&o.push(l)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){o.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&o.push(i)}}}return o.join(" ")}a.exports?(e.default=e,a.exports=e):window.classNames=e}();var i=r(l.exports),c={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function d(n){var e=function(n){if("number"==typeof n)return{value:n,unit:"px"};var e,o=(n.match(/^[0-9.]*/)||"").toString();e=o.includes(".")?parseFloat(o):parseInt(o,10);var t=(n.match(/[^0-9]*$/)||"").toString();return c[t]?{value:e,unit:t}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}(n);return"".concat(e.value).concat(e.unit)}var s=function(n,e,o){var t="react-spinners-".concat(n,"-").concat(o);if("undefined"==typeof window||!window.document)return t;var r=document.createElement("style");document.head.appendChild(r);var a=r.sheet,l="\n    @keyframes ".concat(t," {\n      ").concat(e,"\n    }\n  ");return a&&a.insertRule(l,0),t},u=function(){return u=Object.assign||function(n){for(var e,o=1,t=arguments.length;o<t;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},u.apply(this,arguments)},p=function(n,e){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(o[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(n);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(o[t[r]]=n[t[r]])}return o},b=s("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function f(n){var e=n.loading,t=void 0===e||e,r=n.color,a=void 0===r?"#000000":r,l=n.speedMultiplier,i=void 0===l?1:l,c=n.cssOverride,s=void 0===c?{}:c,f=n.size,m=void 0===f?15:f,E=n.margin,v=void 0===E?2:E,y=p(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=u({display:"inherit"},s),h=function(n){return{display:"inline-block",backgroundColor:a,width:d(m),height:d(m),margin:d(v),borderRadius:"100%",animation:"".concat(b," ").concat(.7/i,"s ").concat(n%2?"0s":"".concat(.35/i,"s")," infinite linear"),animationFillMode:"both"}};return t?o.createElement("span",u({style:g},y),o.createElement("span",{style:h(1)}),o.createElement("span",{style:h(2)}),o.createElement("span",{style:h(3)})):null}var m=function(){return m=Object.assign||function(n){for(var e,o=1,t=arguments.length;o<t;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},m.apply(this,arguments)},E=function(n,e){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(o[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(n);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(o[t[r]]=n[t[r]])}return o},v=s("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function y(n){var e=n.loading,t=void 0===e||e,r=n.color,a=void 0===r?"#000000":r,l=n.speedMultiplier,i=void 0===l?1:l,c=n.cssOverride,s=void 0===c?{}:c,u=n.size,p=void 0===u?35:u,b=E(n,["loading","color","speedMultiplier","cssOverride","size"]),f=m({background:"transparent !important",width:d(p),height:d(p),borderRadius:"100%",border:"2px solid",borderTopColor:a,borderBottomColor:"transparent",borderLeftColor:a,borderRightColor:a,display:"inline-block",animation:"".concat(v," ").concat(.75/i,"s 0s infinite linear"),animationFillMode:"both"},s);return t?o.createElement("span",m({style:f},b)):null}t(".disabled {\n  cursor: not-allowed !important;\n  border-color: #EEEEEE !important;\n  fill: #EEEEEE !important;\n  color: #EEEEEE !important;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 900;\n  padding: 10px 16px;\n  height: 48px;\n}\n.button-textLoader span {\n  display: flex;\n}\n.button .gimliIcon, .button-loader {\n  display: flex;\n  margin-right: 8px;\n}\n.button-filled-primary {\n  color: white;\n  border: none;\n  background-color: var(--main-color, #e82f4f);\n}\n.button-filled-secondary {\n  color: white;\n  border: none;\n  background-color: var(--salefunnelv2_gl_utilitary_color, #112846);\n}\n.button-filled-black {\n  color: white;\n  border: none;\n  background-color: black;\n}\n.button-outlined-primary {\n  color: var(--main-color, #e82f4f);\n  border: 1px solid var(--main-color, #e82f4f);\n  background-color: white;\n}\n.button-outlined-primary .button-textLoader span span {\n  background-color: var(--main-color, #e82f4f);\n}\n.button-outlined-primary .button-loader span {\n  border-color: var(--main-color, #e82f4f);\n  border-bottom-color: transparent;\n}\n.button-outlined-secondary {\n  color: var(--salefunnelv2_gl_utilitary_color, #112846);\n  border: 1px solid var(--salefunnelv2_gl_utilitary_color, #112846);\n  background-color: white;\n}\n.button-outlined-secondary .button-textLoader span span {\n  background-color: var(--salefunnelv2_gl_utilitary_color, #112846);\n}\n.button-outlined-secondary .button-loader span {\n  border-color: var(--salefunnelv2_gl_utilitary_color, #112846);\n  border-bottom-color: transparent;\n}\n.button-outlined-black {\n  color: black;\n  border: 1px solid black;\n  background-color: white;\n}\n.button-outlined-black .button-textLoader span span {\n  background-color: black;\n}\n.button-outlined-black .button-loader span {\n  border-color: black;\n  border-bottom-color: transparent;\n}\n.button-filled-disabled {\n  cursor: not-allowed !important;\n  border: 1px solid #EEEEEE;\n  background-color: #EEEEEE;\n  color: #9A9A9A;\n}\n.button-outlined-disabled {\n  cursor: not-allowed !important;\n  color: #9A9A9A;\n  border: 1px solid #9A9A9A;\n}\n.button-outlined-disabled .button-textLoader span span {\n  background-color: #9A9A9A;\n}\n.button-outlined-disabled .button-loader span {\n  border-color: #9A9A9A;\n  border-bottom-color: transparent;\n}");var g={PRIMARY:"primary",SECONDARY:"secondary",BLACK:"black"},h={FILLED:"filled",OUTLINED:"outlined"};t(".disabled {\n  cursor: not-allowed !important;\n  border-color: #EEEEEE !important;\n  fill: #EEEEEE !important;\n  color: #EEEEEE !important;\n}\n\n.gimliIcon.pointer {\n  cursor: pointer;\n}\n.gimliIcon-primary {\n  color: var(--main-color, #e82f4f);\n}\n.gimliIcon-secondary {\n  color: var(--salefunnelv2_gl_utilitary_color, #112846);\n}\n.gimliIcon-white {\n  color: white;\n}\n.gimliIcon-disabled {\n  color: #9A9A9A;\n}");var x={PRIMARY:"primary",SECONDARY:"secondary",WHITE:"white",DISABLED:"disabled"},O=function(e){var o=e.name,t=e.size,r=void 0===t?24:t,a=e.disabled,l=void 0!==a&&a,c=e.color,d=e.className,s=e.onClick;return n.createElement("div",{className:i("gimliIcon",d,o,l&&"disabled",s&&"pointer",c&&"gimliIcon-".concat(c)),onClick:s,style:{fontSize:r}})};exports.Button=function(e){var o=e.color,t=void 0===o?g.PRIMARY:o,r=e.format,a=void 0===r?h.FILLED:r,l=e.icon,c=void 0===l?"":l,d=e.iconSize,s=void 0===d?16:d,u=e.className,p=void 0===u?"":u,b=e.disabled,m=void 0!==b&&b,E=e.isLoading,v=void 0!==E&&E,w=e.onClick,A=void 0===w?function(){}:w,k=e.children,C=void 0===k?n.createElement(n.Fragment,null,"Button"):k,I=function(){if(console.debug("color",t),m)return x.DISABLED;if(a===h.FILLED)return x.WHITE;switch(t){case g.PRIMARY:return x.PRIMARY;case g.SECONDARY:return x.SECONDARY;default:return x.PRIMARY}};return n.createElement("button",{type:"button",className:i(p,"button",function(){var n="button";switch(a){case h.FILLED:n+="-filled";break;case h.OUTLINED:n+="-outlined"}if(m)n+="-disabled";else switch(t){case g.PRIMARY:n+="-primary";break;case g.SECONDARY:n+="-secondary";break;case g.BLACK:n+="-black"}return n}()),disabled:m,onClick:A},c&&(v?n.createElement("div",{className:"button-loader"},n.createElement(y,{color:"#fff",size:16})):n.createElement(O,{name:c,color:I(),size:s})),v&&!c?n.createElement("div",{className:"button-textLoader"},n.createElement(f,{color:"#fff",size:12})):C)},exports.ButtonColor=g,exports.ButtonFormat=h,exports.Counter=function(e){var o=e.value,t=void 0===o?0:o,r=n.useState(t),a=r[0];return r[1],n.createElement("div",{className:"Counter"},n.createElement("div",null,"- ",a," +"))},exports.CounterDisplay=function(){return n.createElement("div",{className:"CounterDisplay"},0)},exports.GimliIcon=O,exports.IconColor=x;
//# sourceMappingURL=index.cjs.js.map
