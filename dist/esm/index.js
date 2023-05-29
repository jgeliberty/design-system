import e from"react";function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r,o={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/r=o,function(){var e={}.hasOwnProperty;function t(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var n=typeof i;if("string"===n||"number"===n)r.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&r.push(a)}}else if("object"===n){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var l in i)e.call(i,l)&&i[l]&&r.push(l)}}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}();var i=t(o.exports),n={PRIMARY:"primary",SECONDARY:"secondary",WHITE:"white",DISABLED:"disabled"},a=function(t){var r=t.name,o=t.size,n=void 0===o?24:o,a=t.disabled,l=void 0!==a&&a,s=t.color,c=t.className,p=t.onClick;return e.createElement("div",{className:i("gimliIcon",c,r,l&&"disabled",p&&"pointer",s&&"gimliIcon-".concat(s)),onClick:p,style:{fontSize:n}})};export{a as GimliIcon,n as IconColor};
//# sourceMappingURL=index.js.map
