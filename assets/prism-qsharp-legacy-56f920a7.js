System.register(["./index-legacy-06140357.js"],(function(e,n){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function n(e,n){for(var r=0;r<n.length;r++){const t=n[r];if("string"!=typeof t&&!Array.isArray(t))for(const n in t)if("default"!==n&&!(n in e)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t,i={},a=(t||(t=1,function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+n[+r]+")"}))}function r(e,r,t){return RegExp(n(e,r),t||"")}var t=RegExp("\\b(?:"+"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within".trim().replace(/ /g,"|")+")\\b"),i=n(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[/\b[A-Za-z_]\w*\b/.source]),a={keyword:t,punctuation:/[<>()?,.:[\]]/},o=/"(?:\\.|[^\\"])*"/.source;e.languages.qsharp=e.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[o]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[i]),lookbehind:!0,inside:a},{pattern:r(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[i]),lookbehind:!0,inside:a}],keyword:t,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),e.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var s=function(e,n){for(var r=0;r<n;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}(n(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[o]),2);e.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:r(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[s]),greedy:!0,inside:{interpolation:{pattern:r(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[s]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:e.languages.qsharp}}},string:/[\s\S]+/}}})}(Prism),Prism.languages.qs=Prism.languages.qsharp),i);e("p",n({__proto__:null,default:r(a)},[a]))}}}));
