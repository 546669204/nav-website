System.register(["./index-legacy-73c7a40a.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.g}],execute:function(){function t(e,t){for(var a=0;a<t.length;a++){const n=t[a];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(n,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,r,s,o,i,u={},p=(n||(n=1,r=Prism,s=r.languages.javascript,i="(@(?:arg|argument|param|property)\\s+(?:"+(o=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source)+"\\s+)?)",r.languages.jsdoc=r.languages.extend("javadoclike",{parameter:{pattern:RegExp(i+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),r.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(i+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:s,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,(function(){return o}))),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+o),lookbehind:!0,inside:{string:s.string,number:s.number,boolean:s.boolean,keyword:r.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:s,alias:"language-javascript"}}}}),r.languages.javadoclike.addSupport("javascript",r.languages.jsdoc)),u);e("p",t({__proto__:null,default:a(p)},[p]))}}}));
