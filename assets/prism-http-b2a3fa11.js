import{g as f}from"./index-61a9391c.js";function m(e,a){for(var t=0;t<a.length;t++){const r=a[t];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u={},l;function v(){return l||(l=1,function(e){function a(o){return RegExp("(^(?:"+o+"):[ 	]*(?![ 	]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:a(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:a(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:a(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:a(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var t=e.languages,r={"application/javascript":t.javascript,"application/json":t.json||t.javascript,"application/xml":t.xml,"text/xml":t.xml,"text/html":t.html,"text/css":t.css,"text/plain":t.plain},s={"application/json":!0,"application/xml":!0};function i(o){var d=o.replace(/^[a-z]+\//,""),h="\\w+/(?:[\\w.-]+\\+)+"+d+"(?![+\\w.-])";return"(?:"+o+"|"+h+")"}var p;for(var n in r)if(r[n]){p=p||{};var g=s[n]?i(n):n;p[n.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+g+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:r[n]}}p&&e.languages.insertBefore("http","header",p)}(Prism)),u}var c=v();const b=f(c),k=m({__proto__:null,default:b},[c]);export{k as p};
