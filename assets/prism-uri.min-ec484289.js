import{g as m}from"./index-f29f4019.js";function o(i,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in i)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(i,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var a={},p;function u(){return p||(p=1,Prism.languages.uri={scheme:{pattern:/^[a-z][a-z0-9+.-]*:/im,greedy:!0,inside:{"scheme-delimiter":/:$/}},fragment:{pattern:/#[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"fragment-delimiter":/^#/}},query:{pattern:/\?[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"query-delimiter":{pattern:/^\?/,greedy:!0},"pair-delimiter":/[&;]/,pair:{pattern:/^[^=][\s\S]*/,inside:{key:/^[^=]+/,value:{pattern:/(^=)[\s\S]+/,lookbehind:!0}}}}},authority:{pattern:RegExp("^//(?:[\\w\\-.~!$&'()*+,;=%:]*@)?(?:\\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\\.[\\w\\-.~!$&'()*+,;=]+)\\]|[\\w\\-.~!$&'()*+,;=%]*)(?::\\d*)?","m"),inside:{"authority-delimiter":/^\/\//,"user-info-segment":{pattern:/^[\w\-.~!$&'()*+,;=%:]*@/,inside:{"user-info-delimiter":/@$/,"user-info":/^[\w\-.~!$&'()*+,;=%:]+/}},"port-segment":{pattern:/:\d*$/,inside:{"port-delimiter":/^:/,port:/^\d+/}},host:{pattern:/[\s\S]+/,inside:{"ip-literal":{pattern:/^\[[\s\S]+\]$/,inside:{"ip-literal-delimiter":/^\[|\]$/,"ipv-future":/^v[\s\S]+/,"ipv6-address":/^[\s\S]+/}},"ipv4-address":/^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/}}}},path:{pattern:/^[\w\-.~!$&'()*+,;=%:@/]+/m,inside:{"path-separator":/\//}}},Prism.languages.url=Prism.languages.uri),a}var d=u();const l=m(d),g=o({__proto__:null,default:l},[d]);export{g as p};
