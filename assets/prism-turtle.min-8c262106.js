import{g as p}from"./index-61a9391c.js";function l(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var u={},s;function m(){return s||(s=1,Prism.languages.turtle={comment:{pattern:/#.*/,greedy:!0},"multiline-string":{pattern:/"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,greedy:!0,alias:"string",inside:{comment:/#.*/}},string:{pattern:/"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,greedy:!0},url:{pattern:/<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,greedy:!0,inside:{punctuation:/[<>]/}},function:{pattern:/(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,inside:{"local-name":{pattern:/([^:]*:)[\s\S]+/,lookbehind:!0},prefix:{pattern:/[\s\S]+/,inside:{punctuation:/:/}}}},number:/[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,punctuation:/[{}.,;()[\]]|\^\^/,boolean:/\b(?:false|true)\b/,keyword:[/(?:\ba|@prefix|@base)\b|=/,/\b(?:base|graph|prefix)\b/i],tag:{pattern:/@[a-z]+(?:-[a-z\d]+)*/i,inside:{punctuation:/@/}}},Prism.languages.trig=Prism.languages.turtle),u}var o=m();const d=p(o),f=l({__proto__:null,default:d},[o]);export{f as p};
