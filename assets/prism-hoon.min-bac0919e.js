import{g as u}from"./index-2ced4dec.js";function p(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},s;function c(){return s||(s=1,Prism.languages.hoon={comment:{pattern:/::.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,greedy:!0},constant:/%(?:\.[ny]|[\w-]+)/,"class-name":/@(?:[a-z0-9-]*[a-z0-9])?|\*/i,function:/(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,keyword:/\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/}),a}var m=c();const f=u(m),g=p({__proto__:null,default:f},[m]);export{g as p};
