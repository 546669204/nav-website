System.register(["./index-legacy-58985ecb.js"],(function(t,e){"use strict";var n;return{setters:[t=>{n=t.g}],execute:function(){function e(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r,a={},o=(r||(r=1,function(t){var e={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},n={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function r(t,r){var a={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var o in r)a[o]=r[o];return a.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},a.variable=n,a.comment=e,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,(function(){return t})),"im"),alias:"section",inside:a}}var a={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:n}},i={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:n}};t.languages.robotframework={settings:r("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:r("Variables"),"test-cases":r("Test Cases",{"test-name":o,documentation:a,property:i}),keywords:r("Keywords",{"keyword-name":o,documentation:a,property:i}),tasks:r("Tasks",{"task-name":o,documentation:a,property:i}),comment:e},t.languages.robot=t.languages.robotframework}(Prism)),a);t("p",e({__proto__:null,default:n(o)},[o]))}}}));
