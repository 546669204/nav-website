import{g as c}from"./index-2ced4dec.js";function l(e,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},u;function m(){return u||(u=1,function(e){e.languages.agda={comment:/\{-[\s\S]*?(?:-\}|$)|--.*/,string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},punctuation:/[(){}⦃⦄.;@]/,"class-name":{pattern:/((?:data|record) +)\S+/,lookbehind:!0},function:{pattern:/(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,lookbehind:!0},operator:{pattern:/(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,lookbehind:!0},keyword:/\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/}}(Prism)),o}var s=m();const p=c(s),f=l({__proto__:null,default:p},[s]);export{f as p};
