import{g as D}from"./index-fde57fe3.js";function M(t,y){for(var b=0;b<y.length;b++){const l=y[b];if(typeof l!="string"&&!Array.isArray(l)){for(const g in l)if(g!=="default"&&!(g in t)){const h=Object.getOwnPropertyDescriptor(l,g);h&&Object.defineProperty(t,g,h.get?h:{enumerable:!0,get:()=>l[g]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var w={},J;function B(){return J||(J=1,function(t){var y=t.languages.javascript["template-string"],b=y.pattern.source,l=y.inside.interpolation,g=l.inside["interpolation-punctuation"],h=l.pattern.source;function d(e,a){if(t.languages[e])return{pattern:RegExp("((?:"+a+")\\s*)"+b),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function E(e,a){return"___"+a.toUpperCase()+"_"+e+"___"}function T(e,a,n){var r={code:e,grammar:a,language:n};return t.hooks.run("before-tokenize",r),r.tokens=t.tokenize(r.code,r.grammar),t.hooks.run("after-tokenize",r),r.tokens}function S(e){var a={};a["interpolation-punctuation"]=g;var n=t.tokenize(e,a);if(n.length===3){var r=[1,1];r.push.apply(r,T(n[1],t.languages.javascript,"javascript")),n.splice.apply(n,r)}return new t.Token("interpolation",n,l.alias,e)}function R(e,a,n){var r=t.tokenize(e,{interpolation:{pattern:RegExp(h),lookbehind:!0}}),c=0,f={},o=T(r.map(function(u){if(typeof u=="string")return u;for(var i,p=u.content;e.indexOf(i=E(c++,n))!==-1;);return f[i]=p,i}).join(""),a,n),m=Object.keys(f);return c=0,function u(i){for(var p=0;p<i.length;p++){if(c>=m.length)return;var s=i[p];if(typeof s=="string"||typeof s.content=="string"){var _=m[c],j=typeof s=="string"?s:s.content,x=j.indexOf(_);if(x!==-1){++c;var O=j.substring(0,x),C=S(f[_]),q=j.substring(x+_.length),v=[];if(O&&v.push(O),v.push(C),q){var z=[q];u(z),v.push.apply(v,z)}typeof s=="string"?(i.splice.apply(i,[p,1].concat(v)),p+=v.length-1):s.content=v}}else{var A=s.content;Array.isArray(A)?u(A):u([A])}}}(o),new t.Token(n,o,"language-"+n,e)}t.languages.javascript["template-string"]=[d("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),d("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),d("svg","\\bsvg"),d("markdown","\\b(?:markdown|md)"),d("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),d("sql","\\bsql"),y].filter(Boolean);var $={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function k(e){return typeof e=="string"?e:Array.isArray(e)?e.map(k).join(""):k(e.content)}t.hooks.add("after-tokenize",function(e){e.language in $&&function a(n){for(var r=0,c=n.length;r<c;r++){var f=n[r];if(typeof f!="string"){var o=f.content;if(Array.isArray(o))if(f.type==="template-string"){var m=o[1];if(o.length===3&&typeof m!="string"&&m.type==="embedded-code"){var u=k(m),i=m.alias,p=Array.isArray(i)?i[0]:i,s=t.languages[p];if(!s)continue;o[1]=R(u,s,p)}}else a(o);else typeof o!="string"&&a([o])}}}(e.tokens)})}(Prism)),w}var P=B();const F=D(P),H=M({__proto__:null,default:F},[P]);export{H as p};
