import{g as c}from"./index-579abb6c.js";function p(r,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in r)){const n=Object.getOwnPropertyDescriptor(o,s);n&&Object.defineProperty(r,s,n.get?n:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},i;function l(){return i||(i=1,function(r){function e(t){return RegExp(/([ \t])/.source+"(?:"+t+")"+/(?=[\s;]|$)/.source,"i")}r.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:e(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:e(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:e(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:e(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:e(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:e(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:e(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}}(Prism)),a}var u=l();const f=c(u),m=p({__proto__:null,default:f},[u]);export{m as p};
