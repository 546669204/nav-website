System.register(["./index-legacy-0c1d1c49.js"],(function(e,a){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function a(e,a){for(var n=0;n<a.length;n++){const t=a[n];if("string"!=typeof t&&!Array.isArray(t))for(const a in t)if("default"!==a&&!(a in e)){const n=Object.getOwnPropertyDescriptor(t,a);n&&Object.defineProperty(e,a,n.get?n:{enumerable:!0,get:()=>t[a]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t,s,i,r,o,l={},u=(t||(t=1,s=Prism,i=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,r=/#\s*\w+(?:\s*\([^()]*\))?/.source,o=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,(function(){return r})),s.languages.javadoc=s.languages.extend("javadoclike",{}),s.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+o+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:s.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:i,lookbehind:!0,inside:s.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:i,lookbehind:!0,inside:{tag:s.languages.markup.tag,entity:s.languages.markup.entity,code:{pattern:/.+/,inside:s.languages.java,alias:"language-java"}}}}}],tag:s.languages.markup.tag,entity:s.languages.markup.entity}),s.languages.javadoclike.addSupport("java",s.languages.javadoc)),l);e("p",a({__proto__:null,default:n(u)},[u]))}}}));
