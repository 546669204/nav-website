import{g as p}from"./index-27e991c2.js";function d(e,o){for(var a=0;a<o.length;a++){const t=o[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u={},i;function b(){return i||(i=1,function(e){e.languages.dataweave={url:/\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,property:{pattern:/(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,greedy:!0},string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},"mime-type":/\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,date:{pattern:/\|[\w:+-]+\|/,greedy:!0},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],regex:{pattern:/\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,greedy:!0},keyword:/\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,function:/\b[A-Z_]\w*(?=\s*\()/i,number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\];(),.:@]/,operator:/<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,boolean:/\b(?:false|true)\b/}}(Prism)),u}var s=b();const g=p(s),f=d({__proto__:null,default:g},[s]);export{f as p};
