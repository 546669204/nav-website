System.register(["./index-legacy-9ff5b9ae.js"],(function(e,s){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function s(e,s){for(var r=0;r<s.length;r++){const n=s[r];if("string"!=typeof n&&!Array.isArray(n))for(const s in n)if("default"!==s&&!(s in e)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,t,a,o={},i=(n||(n=1,t=Prism,a=[/"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,/'[^']*'/.source,/\$'(?:[^'\\]|\\[\s\S])*'/.source,/<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source].join("|"),t.languages["shell-session"]={command:{pattern:RegExp(/^/.source+"(?:"+/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source+"|"+/[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source+")?"+/[$#%](?=\s)/.source+/(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g,(function(){return a})),"m"),greedy:!0,inside:{info:{pattern:/^[^#$%]+/,alias:"punctuation",inside:{user:/^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,punctuation:/:/,path:/[\s\S]+/}},bash:{pattern:/(^[$#%]\s*)\S[\s\S]*/,lookbehind:!0,alias:"language-bash",inside:t.languages.bash},"shell-symbol":{pattern:/^[$#%]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},t.languages["sh-session"]=t.languages.shellsession=t.languages["shell-session"]),o);e("p",s({__proto__:null,default:r(i)},[i]))}}}));
