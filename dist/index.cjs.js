"use strict";var e=require("react");function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t,o={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/t=o,function(){var e={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var n=typeof i;if("string"===n||"number"===n)t.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&t.push(a)}}else if("object"===n){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&t.push(s)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}();var i=r(o.exports);exports.GimliIcon=function(r){var t=r.name,o=r.size,n=void 0===o?24:o,a=r.disabled,s=void 0!==a&&a,l=r.color,c=r.className,p=r.onClick;return e.createElement("div",{className:i("gimliIcon",c,t,s&&"disabled",p&&"pointer",l&&"gimliIcon-".concat(l)),onClick:p,style:{fontSize:n}})},exports.IconColor={PRIMARY:"primary",SECONDARY:"secondary",WHITE:"white",DISABLED:"disabled"};
//# sourceMappingURL=index.cjs.js.map
