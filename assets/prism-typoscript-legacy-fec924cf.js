System.register(["./index-legacy-de591ef4.js"],(function(t,e){"use strict";var n;return{setters:[t=>{n=t.g}],execute:function(){function e(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r,E,o,i={},T=(r||(r=1,E=Prism,o=/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/,E.languages.typoscript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^"'])#.*/,lookbehind:!0,greedy:!0}],function:[{pattern:/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,inside:{string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,inside:{keyword:o}},keyword:{pattern:/INCLUDE_TYPOSCRIPT/}}},{pattern:/@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,inside:{string:/"[^"\r\n]*"|'[^'\r\n]*'/}}],string:{pattern:/^([^=]*=[< ]?)(?:(?!\]\n).)*/,lookbehind:!0,inside:{function:/\{\$.*\}/,keyword:o,number:/^\d+$/,punctuation:/[,|:]/}},keyword:o,number:{pattern:/\b\d+\s*[.{=]/,inside:{operator:/[.{=]/}},tag:{pattern:/\.?[-\w\\]+\.?/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:|]/,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/},E.languages.tsconfig=E.languages.typoscript),i);t("p",e({__proto__:null,default:n(T)},[T]))}}}));
