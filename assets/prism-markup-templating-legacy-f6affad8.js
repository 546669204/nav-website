System.register(["./index-legacy-58985ecb.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,o={},a=(r||(r=1,function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,r,o,a){if(n.language===r){var i=n.tokenStack=[];n.code=n.code.replace(o,(function(e){if("function"==typeof a&&!a(e))return e;for(var o,c=i.length;-1!==n.code.indexOf(o=t(r,c));)++c;return i[c]=e,o})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,r){if(n.language===r&&n.tokenStack){n.grammar=e.languages[r];var o=0,a=Object.keys(n.tokenStack);!function i(c){for(var u=0;u<c.length&&!(o>=a.length);u++){var g=c[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var s=a[o],f=n.tokenStack[s],l="string"==typeof g?g:g.content,p=t(r,s),y=l.indexOf(p);if(y>-1){++o;var d=l.substring(0,y),k=new e.Token(r,e.tokenize(f,n.grammar),"language-"+r,f),m=l.substring(y+p.length),v=[];d&&v.push.apply(v,i([d])),v.push(k),m&&v.push.apply(v,i([m])),"string"==typeof g?c.splice.apply(c,[u,1].concat(v)):g.content=v}}else g.content&&i(g.content)}return c}(n.tokens)}}}})}(Prism)),o);e("p",t({__proto__:null,default:n(a)},[a]))}}}));
