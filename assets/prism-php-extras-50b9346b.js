import{g as f}from"./index-fde57fe3.js";function u(t,o){for(var s=0;s<o.length;s++){const r=o[s];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const a=Object.getOwnPropertyDescriptor(r,e);a&&Object.defineProperty(t,e,a.get?a:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var p={},i;function c(){return i||(i=1,Prism.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}})),p}var n=c();const E=f(n),l=u({__proto__:null,default:E},[n]);export{l as p};
