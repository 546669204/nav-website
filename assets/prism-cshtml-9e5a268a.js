import{g as C}from"./index-fde57fe3.js";function A(e,u){for(var a=0;a<u.length;a++){const s=u[a];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var f={},h;function j(){return h||(h=1,function(e){var u=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,a=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function s(n,x){for(var m=0;m<x;m++)n=n.replace(/<self>/g,function(){return"(?:"+n+")"});return n.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+a+")").replace(/<comment>/g,"(?:"+u+")")}var r=s(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),o=s(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,1),t=s(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),b=s(/<(?:[^<>'"@/]|<comment>|<self>)*>/.source,1),g=/@/.source+/(?:await\b\s*)?/.source+"(?:"+/(?!await\b)\w+\b/.source+"|"+r+")(?:"+/[?!]?\.\w+\b/.source+"|(?:"+b+")?"+r+"|"+o+")*"+/(?![?!\.(\[]|<(?!\/))/.source,y=/@(?![\w()])/.source+"|"+g,p="(?:"+/"[^"@]*"|'[^'@]*'|[^\s'"@>=]+(?=[\s>])/.source+`|["'][^"'@]*(?:(?:`+y+`)[^"'@]*)+["'])`,l=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*<tagAttrValue>|(?=[\s/>])))+)?/.source.replace(/<tagAttrValue>/,p),c=/(?!\d)[^\s>\/=$<%]+/.source+l+/\s*\/?>/.source,w=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+l+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+c+"|"+s(/<\1/.source+l+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+c+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+c+")";e.languages.cshtml=e.languages.extend("markup",{});var k=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(w),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),i={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:k},d={pattern:RegExp(/(^|[^@])/.source+g),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:i}};e.languages.cshtml.tag.pattern=RegExp(/<\/?/.source+c),e.languages.cshtml.tag.inside["attr-value"].pattern=RegExp(/=\s*/.source+p),e.languages.insertBefore("inside","punctuation",{value:d},e.languages.cshtml.tag.inside["attr-value"]),e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[t,/(?:code|functions)\s*/.source+t,/(?:for|foreach|lock|switch|using|while)\s*/.source+r+/\s*/.source+t,/do\s*/.source+t+/\s*while\s*/.source+r+/(?:\s*;)?/.source,/try\s*/.source+t+/\s*catch\s*/.source+r+/\s*/.source+t+/\s*finally\s*/.source+t,/if\s*/.source+r+/\s*/.source+t+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+r+")?"+/\s*/.source+t+")*",/helper\s+\w+\s*/.source+r+/\s*/.source+t].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:i}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:i}},value:d,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(Prism)),f}var v=j();const E=C(v),S=A({__proto__:null,default:E},[v]);export{S as p};
