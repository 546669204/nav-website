import{g as p}from"./index-195b12f7.js";function c(t,a){for(var o=0;o<a.length;o++){const e=a[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},i;function f(){return i||(i=1,Prism.languages.hoon={comment:{pattern:/::.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,greedy:!0},constant:/%(?:\.[ny]|[\w-]+)/,"class-name":/@(?:[a-z0-9-]*[a-z0-9])?|\*/i,function:/(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,keyword:/\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/}),s}var u=f();const m=p(u),l=c({__proto__:null,default:m},[u]);export{l as p};
