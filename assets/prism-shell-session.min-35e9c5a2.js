import{g as u}from"./index-3c48d087.js";function p(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={},o;function g(){return o||(o=1,function(e){var n=['"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"',"'[^']*'","\\$'(?:[^'\\\\]|\\\\[^])*'",`<<-?\\s*(["']?)(\\w+)\\1\\s[^]*?[\r
]\\2`].join("|");e.languages["shell-session"]={command:{pattern:RegExp(`^(?:[^\\s@:$#%*!/\\\\]+@[^\r
@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)`+`(?:[^\\\\\r
 	'"<$]|[ 	](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r
?)|\\$(?!')|<(?!<)|<<str>>)+`.replace(/<<str>>/g,function(){return n}),"m"),greedy:!0,inside:{info:{pattern:/^[^#$%]+/,alias:"punctuation",inside:{user:/^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,punctuation:/:/,path:/[\s\S]+/}},bash:{pattern:/(^[$#%]\s*)\S[\s\S]*/,lookbehind:!0,alias:"language-bash",inside:e.languages.bash},"shell-symbol":{pattern:/^[$#%]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},e.languages["sh-session"]=e.languages.shellsession=e.languages["shell-session"]}(Prism)),a}var l=g();const m=u(l),c=p({__proto__:null,default:m},[l]);export{c as p};
