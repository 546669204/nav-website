import{g as l}from"./index-27e991c2.js";function g(e,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},s;function b(){return s||(s=1,function(e){e.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:e.languages.ruby}},e.hooks.add("before-tokenize",function(r){var t=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;e.languages["markup-templating"].buildPlaceholders(r,"erb",t)}),e.hooks.add("after-tokenize",function(r){e.languages["markup-templating"].tokenizePlaceholders(r,"erb")})}(Prism)),i}var u=b();const p=l(u),c=g({__proto__:null,default:p},[u]);export{c as p};
