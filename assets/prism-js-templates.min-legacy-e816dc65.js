System.register(["./index-legacy-862727e1.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a={},i=(r||(r=1,function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,a=r.inside["interpolation-punctuation"],i=r.pattern.source;function o(t,r){if(e.languages[t])return{pattern:RegExp("((?:"+r+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function s(e,t){return"___"+t.toUpperCase()+"_"+e+"___"}function l(t,n,r){var a={code:t,grammar:n,language:r};return e.hooks.run("before-tokenize",a),a.tokens=e.tokenize(a.code,a.grammar),e.hooks.run("after-tokenize",a),a.tokens}function p(t){var n={};n["interpolation-punctuation"]=a;var i=e.tokenize(t,n);if(3===i.length){var o=[1,1];o.push.apply(o,l(i[1],e.languages.javascript,"javascript")),i.splice.apply(i,o)}return new e.Token("interpolation",i,r.alias,t)}function g(t,n,r){var a=e.tokenize(t,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),o=0,g={},u=l(a.map((function(e){if("string"==typeof e)return e;for(var n,a=e.content;-1!==t.indexOf(n=s(o++,r)););return g[n]=a,n})).join(""),n,r),c=Object.keys(g);return o=0,function e(t){for(var n=0;n<t.length;n++){if(o>=c.length)return;var r=t[n];if("string"==typeof r||"string"==typeof r.content){var a=c[o],i="string"==typeof r?r:r.content,s=i.indexOf(a);if(-1!==s){++o;var l=i.substring(0,s),u=p(g[a]),f=i.substring(s+a.length),y=[];if(l&&y.push(l),y.push(u),f){var v=[f];e(v),y.push.apply(y,v)}"string"==typeof r?(t.splice.apply(t,[n,1].concat(y)),n+=y.length-1):r.content=y}}else{var d=r.content;Array.isArray(d)?e(d):e([d])}}}(u),new e.Token(r,u,"language-"+r,t)}e.languages.javascript["template-string"]=[o("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),o("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),o("svg","\\bsvg"),o("markdown","\\b(?:markdown|md)"),o("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),o("sql","\\bsql"),t].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function c(e){return"string"==typeof e?e:Array.isArray(e)?e.map(c).join(""):c(e.content)}e.hooks.add("after-tokenize",(function(t){t.language in u&&function t(n){for(var r=0,a=n.length;r<a;r++){var i=n[r];if("string"!=typeof i){var o=i.content;if(Array.isArray(o))if("template-string"===i.type){var s=o[1];if(3===o.length&&"string"!=typeof s&&"embedded-code"===s.type){var l=c(s),p=s.alias,u=Array.isArray(p)?p[0]:p,f=e.languages[u];if(!f)continue;o[1]=g(l,f,u)}}else t(o);else"string"!=typeof o&&t([o])}}}(t.tokens)}))}(Prism)),a);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
