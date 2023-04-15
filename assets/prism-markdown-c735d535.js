import{g as x}from"./index-fa1c11f5.js";function $(e,f){for(var s=0;s<f.length;s++){const l=f[s];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in e)){const p=Object.getOwnPropertyDescriptor(l,a);p&&Object.defineProperty(e,a,p.get?p:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var h={},k;function S(){return k||(k=1,function(e){var f=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function s(t){return t=t.replace(/<inner>/g,function(){return f}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+t+")")}var l=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,a=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return l}),p=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+a+p+"(?:"+a+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+a+p+")(?:"+a+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(l),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+a+")"+p+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+a+"$"),inside:{"table-header":{pattern:RegExp(l),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:s(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:s(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:s(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:s(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(t){["url","bold","italic","strike","code-snippet"].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add("after-tokenize",function(t){if(t.language!=="markdown"&&t.language!=="md")return;function n(o){if(!(!o||typeof o=="string"))for(var r=0,d=o.length;r<d;r++){var u=o[r];if(u.type!=="code"){n(u.content);continue}var g=u.content[1],i=u.content[3];if(g&&i&&g.type==="code-language"&&i.type==="code-block"&&typeof g.content=="string"){var c=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");c=(/[a-z][\w-]*/i.exec(c)||[""])[0].toLowerCase();var b="language-"+c;i.alias?typeof i.alias=="string"?i.alias=[i.alias,b]:i.alias.push(b):i.alias=[b]}}}n(t.tokens)}),e.hooks.add("wrap",function(t){if(t.type==="code-block"){for(var n="",o=0,r=t.classes.length;o<r;o++){var d=t.classes[o],u=/language-(.+)/.exec(d);if(u){n=u[1];break}}var g=e.languages[n];if(g)t.content=e.highlight(v(t.content),g,n);else if(n&&n!=="none"&&e.plugins.autoloader){var i="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);t.attributes.id=i,e.plugins.autoloader.loadLanguages(n,function(){var c=document.getElementById(i);c&&(c.innerHTML=e.highlight(c.textContent,e.languages[n],n))})}}});var _=RegExp(e.languages.markup.tag.pattern.source,"gi"),y={amp:"&",lt:"<",gt:">",quot:'"'},w=String.fromCodePoint||String.fromCharCode;function v(t){var n=t.replace(_,"");return n=n.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(o,r){if(r=r.toLowerCase(),r[0]==="#"){var d;return r[1]==="x"?d=parseInt(r.slice(2),16):d=Number(r.slice(1)),w(d)}else{var u=y[r];return u||o}}),n}e.languages.md=e.languages.markdown}(Prism)),h}var m=S();const E=x(m),C=$({__proto__:null,default:E},[m]);export{C as p};
