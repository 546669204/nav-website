import{g as p}from"./index-195b12f7.js";function c(r,e){for(var a=0;a<e.length;a++){const t=e[a];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function l(){return s||(s=1,function(r){var e=r.languages.parser=r.languages.extend("markup",{keyword:{pattern:/(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,lookbehind:!0},variable:{pattern:/(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{punctuation:/\.|:+/}},function:{pattern:/(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{keyword:{pattern:/(^@)(?:GET_|SET_)/,lookbehind:!0},punctuation:/\.|:+/}},escape:{pattern:/\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,alias:"builtin"},punctuation:/[\[\](){};]/});e=r.languages.insertBefore("parser","keyword",{"parser-comment":{pattern:/(\s)#.*/,lookbehind:!0,alias:"comment"},expression:{pattern:/(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,greedy:!0,lookbehind:!0,inside:{string:{pattern:/(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,lookbehind:!0},keyword:e.keyword,variable:e.variable,function:e.function,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,escape:e.escape,operator:/[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,punctuation:e.punctuation}}}),r.languages.insertBefore("inside","punctuation",{expression:e.expression,keyword:e.keyword,variable:e.variable,function:e.function,escape:e.escape,"parser-punctuation":{pattern:e.punctuation,alias:"punctuation"}},e.tag.inside["attr-value"])}(Prism)),o}var u=l();const d=p(u),b=c({__proto__:null,default:d},[u]);export{b as p};
