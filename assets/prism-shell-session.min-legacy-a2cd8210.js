System.register(["./index-legacy-73c7a40a.js"],(function(e,n){"use strict";var s;return{setters:[e=>{s=e.g}],execute:function(){function n(e,n){for(var s=0;s<n.length;s++){const t=n[s];if("string"!=typeof t&&!Array.isArray(t))for(const n in t)if("default"!==n&&!(n in e)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t,r,a,i={},o=(t||(t=1,r=Prism,a=['"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"',"'[^']*'","\\$'(?:[^'\\\\]|\\\\[^])*'","<<-?\\s*([\"']?)(\\w+)\\1\\s[^]*?[\r\n]\\2"].join("|"),r.languages["shell-session"]={command:{pattern:RegExp('^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)'+"(?:[^\\\\\r\n \t'\"<$]|[ \t](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r\n?)|\\$(?!')|<(?!<)|<<str>>)+".replace(/<<str>>/g,(function(){return a})),"m"),greedy:!0,inside:{info:{pattern:/^[^#$%]+/,alias:"punctuation",inside:{user:/^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,punctuation:/:/,path:/[\s\S]+/}},bash:{pattern:/(^[$#%]\s*)\S[\s\S]*/,lookbehind:!0,alias:"language-bash",inside:r.languages.bash},"shell-symbol":{pattern:/^[$#%]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},r.languages["sh-session"]=r.languages.shellsession=r.languages["shell-session"]),i);e("p",n({__proto__:null,default:s(o)},[o]))}}}));
