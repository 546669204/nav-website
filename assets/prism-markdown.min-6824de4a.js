import{g as v}from"./index-fde57fe3.js";function $(e,s){for(var d=0;d<s.length;d++){const r=s[d];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(e,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var f={},h;function x(){return h||(h=1,function(e){function s(n){return n=n.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\
\r]|(?:
|\r
?)(?![\r
]))`}),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+n+")")}var d="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",r=`\\|?__(?:\\|__)+\\|?(?:(?:
|\r
?)|(?![^]))`.replace(/__/g,function(){return d}),o=`\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|\r
?)`;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+o+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+o+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(d),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(d),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:s("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:s("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:s("(~~?)(?:(?!~)<inner>)+\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:s('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(n){["url","bold","italic","strike","code-snippet"].forEach(function(t){n!==t&&(e.languages.markdown[n].inside.content.inside[t]=e.languages.markdown[t])})}),e.hooks.add("after-tokenize",function(n){n.language!=="markdown"&&n.language!=="md"||function t(u){if(u&&typeof u!="string")for(var m=0,k=u.length;m<k;m++){var p=u[m];if(p.type==="code"){var g=p.content[1],a=p.content[3];if(g&&a&&g.type==="code-language"&&a.type==="code-block"&&typeof g.content=="string"){var l=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),i="language-"+(l=(/[a-z][\w-]*/i.exec(l)||[""])[0].toLowerCase());a.alias?typeof a.alias=="string"?a.alias=[a.alias,i]:a.alias.push(i):a.alias=[i]}}else t(p.content)}}(n.tokens)}),e.hooks.add("wrap",function(n){if(n.type==="code-block"){for(var t="",u=0,m=n.classes.length;u<m;u++){var k=n.classes[u],p=/language-(.+)/.exec(k);if(p){t=p[1];break}}var g=e.languages[t];if(g)n.content=e.highlight(n.content.replace(c,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(l,i){var b;return(i=i.toLowerCase())[0]==="#"?(b=i[1]==="x"?parseInt(i.slice(2),16):Number(i.slice(1)),w(b)):y[i]||l}),g,t);else if(t&&t!=="none"&&e.plugins.autoloader){var a="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());n.attributes.id=a,e.plugins.autoloader.loadLanguages(t,function(){var l=document.getElementById(a);l&&(l.innerHTML=e.highlight(l.textContent,e.languages[t],t))})}}});var c=RegExp(e.languages.markup.tag.pattern.source,"gi"),y={amp:"&",lt:"<",gt:">",quot:'"'},w=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(Prism)),f}var _=x();const S=v(_),M=$({__proto__:null,default:S},[_]);export{M as p};
