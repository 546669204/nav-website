System.register(["./index-legacy-bb604a6f.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const a=t[n];if("string"!=typeof a&&!Array.isArray(a))for(const t in a)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(a,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,r={},s=(a||(a=1,function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t("Content-Security-Policy"),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t("Public-Key-Pins(?:-Report-Only)?"),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t("Strict-Transport-Security"),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t("[^:]+"),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var n,a,r,s=e.languages,i={"application/javascript":s.javascript,"application/json":s.json||s.javascript,"application/xml":s.xml,"text/xml":s.xml,"text/html":s.html,"text/css":s.css,"text/plain":s.plain},p={"application/json":!0,"application/xml":!0};for(var o in i)if(i[o]){n=n||{};var l=p[o]?(r=void 0,r=(a=o).replace(/^[a-z]+\//,""),"(?:"+a+"|\\w+/(?:[\\w.-]+\\+)+"+r+"(?![+\\w.-]))"):o;n[o.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+l+"(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*","i"),lookbehind:!0,inside:i[o]}}n&&e.languages.insertBefore("http","header",n)}(Prism)),r);e("p",t({__proto__:null,default:n(s)},[s]))}}}));
