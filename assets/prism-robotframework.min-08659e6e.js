import{g as f}from"./index-fa1c11f5.js";function b(r,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(r,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var p={},l;function g(){return l||(l=1,function(r){var a={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},n={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function t(d,m){var i={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var u in m)i[u]=m[u];return i.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},i.variable=n,i.comment=a,{pattern:RegExp(`^ ?\\*{3}[ 	]*<name>[ 	]*\\*{3}(?:.|[\r
](?!\\*{3}))*`.replace(/<name>/g,function(){return d}),"im"),alias:"section",inside:i}}var e={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:n}},s={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:n}};r.languages.robotframework={settings:t("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:t("Variables"),"test-cases":t("Test Cases",{"test-name":o,documentation:e,property:s}),keywords:t("Keywords",{"keyword-name":o,documentation:e,property:s}),tasks:t("Tasks",{"task-name":o,documentation:e,property:s}),comment:a},r.languages.robot=r.languages.robotframework}(Prism)),p}var c=g();const k=f(c),w=b({__proto__:null,default:k},[c]);export{w as p};
