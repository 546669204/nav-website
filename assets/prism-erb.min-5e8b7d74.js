import{g as l}from"./index-61a9391c.js";function g(r,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(n,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function m(){return s||(s=1,function(r){r.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:r.languages.ruby}},r.hooks.add("before-tokenize",function(e){r.languages["markup-templating"].buildPlaceholders(e,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g)}),r.hooks.add("after-tokenize",function(e){r.languages["markup-templating"].tokenizePlaceholders(e,"erb")})}(Prism)),o}var u=m();const b=l(u),f=g({__proto__:null,default:b},[u]);export{f as p};
