import{g as l}from"./index-27e991c2.js";function p(i,o){for(var t=0;t<o.length;t++){const e=o[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in i)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(i,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s={},c;function b(){return c||(c=1,function(i){var o=/\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,t=/(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g,function(){return o}),e=i.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g,function(){return t}),"i"),lookbehind:!0,inside:null},{pattern:RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g,function(){return t}),"i"),inside:null},{pattern:RegExp(/(:\s*)<type>/.source.replace(/<type>/g,function(){return t})),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:False|True)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\b\w+(?=\s*\()/,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},n=["comment","keyword","builtin","operator","punctuation"].reduce(function(r,a){return r[a]=e[a],r},{});e["class-name"].forEach(function(r){r.inside=n})}(Prism)),s}var u=b();const f=l(u),d=p({__proto__:null,default:f},[u]);export{d as p};
