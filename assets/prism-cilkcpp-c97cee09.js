import{g as n}from"./index-3c48d087.js";function o(i,s){for(var p=0;p<s.length;p++){const r=s[p];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in i)){const t=Object.getOwnPropertyDescriptor(r,e);t&&Object.defineProperty(i,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var a={},c;function u(){return c||(c=1,Prism.languages.cilkcpp=Prism.languages.insertBefore("cpp","function",{"parallel-keyword":{pattern:/\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,alias:"keyword"}}),Prism.languages["cilk-cpp"]=Prism.languages.cilkcpp,Prism.languages.cilk=Prism.languages.cilkcpp),a}var l=u();const g=n(l),m=o({__proto__:null,default:g},[l]);export{m as p};
