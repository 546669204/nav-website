import{g}from"./index-195b12f7.js";function d(e,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},s;function l(){return s||(s=1,Prism.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},Prism.hooks.add("before-tokenize",function(e){if(e.language==="twig"){var i=/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;Prism.languages["markup-templating"].buildPlaceholders(e,"twig",i)}}),Prism.hooks.add("after-tokenize",function(e){Prism.languages["markup-templating"].tokenizePlaceholders(e,"twig")})),o}var u=l();const p=g(u),f=d({__proto__:null,default:p},[u]);export{f as p};
