import{g as P}from"./index-f29f4019.js";function v(a,c){for(var e=0;e<c.length;e++){const n=c[e];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in a)){const o=Object.getOwnPropertyDescriptor(n,t);o&&Object.defineProperty(a,t,o.get?o:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var y={},b;function T(){return b||(b=1,function(a){function c(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(a.languages["markup-templating"]={},{buildPlaceholders:{value:function(e,n,t,o){if(e.language===n){var s=e.tokenStack=[];e.code=e.code.replace(t,function(i){if(typeof o=="function"&&!o(i))return i;for(var p,r=s.length;e.code.indexOf(p=c(n,r))!==-1;)++r;return s[r]=i,p}),e.grammar=a.languages.markup}}},tokenizePlaceholders:{value:function(e,n){if(e.language===n&&e.tokenStack){e.grammar=a.languages[n];var t=0,o=Object.keys(e.tokenStack);(function s(i){for(var p=0;p<i.length&&!(t>=o.length);p++){var r=i[p];if(typeof r=="string"||r.content&&typeof r.content=="string"){var g=o[t],m=e.tokenStack[g],l=typeof r=="string"?r:r.content,k=c(n,g),f=l.indexOf(k);if(f>-1){++t;var _=l.substring(0,f),O=new a.Token(n,a.tokenize(m,e.grammar),"language-"+n,m),d=l.substring(f+k.length),u=[];_&&u.push.apply(u,s([_])),u.push(O),d&&u.push.apply(u,s([d])),typeof r=="string"?i.splice.apply(i,[p,1].concat(u)):r.content=u}}else r.content&&s(r.content)}return i})(e.tokens)}}}})}(Prism)),y}var h=T();const j=P(h),S=v({__proto__:null,default:j},[h]);export{S as p};
