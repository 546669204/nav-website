System.register(["./index-legacy-9ff5b9ae.js"],(function(e,s){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function s(e,s){for(var t=0;t<s.length;t++){const r=s[t];if("string"!=typeof r&&!Array.isArray(r))for(const s in r)if("default"!==s&&!(s in e)){const t=Object.getOwnPropertyDescriptor(r,s);t&&Object.defineProperty(e,s,t.get?t:{enumerable:!0,get:()=>r[s]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a={},n=(r||(r=1,function(e){function s(e,s){for(var t=0;t<s;t++)e=e.replace(/<self>/g,(function(){return"(?:"+e+")"}));return e.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,'(?:@(?!")|"(?:[^\r\n\\\\"]|\\\\.)*"|@"(?:[^\\\\"]|""|\\\\[^])*"(?!")|\'(?:(?:[^\r\n\'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})\'|(?=[^\\\\](?!\'))))').replace(/<comment>/g,"(?:/(?![/*])|//.*[\r\n]|/\\*[^*]*(?:\\*(?!/)[^*]*)*\\*/)")}var t=s("\\((?:[^()'\"@/]|<str>|<comment>|<self>)*\\)",2),r=s("\\[(?:[^\\[\\]'\"@/]|<str>|<comment>|<self>)*\\]",1),a=s("\\{(?:[^{}'\"@/]|<str>|<comment>|<self>)*\\}",2),n="@(?:await\\b\\s*)?(?:(?!await\\b)\\w+\\b|"+t+")(?:[?!]?\\.\\w+\\b|(?:"+s("<(?:[^<>'\"@/]|<comment>|<self>)*>",1)+")?"+t+"|"+r+")*(?![?!\\.(\\[]|<(?!/))",l="(?:\"[^\"@]*\"|'[^'@]*'|[^\\s'\"@>=]+(?=[\\s>])|[\"'][^\"'@]*(?:(?:@(?![\\w()])|"+n+")[^\"'@]*)+[\"'])",i="(?:\\s(?:\\s*[^\\s>/=]+(?:\\s*=\\s*<tagAttrValue>|(?=[\\s/>])))+)?".replace(/<tagAttrValue>/,l),g="(?!\\d)[^\\s>/=$<%]+"+i+"\\s*/?>",o="\\B@?(?:<([a-zA-Z][\\w:]*)"+i+"\\s*>(?:[^<]|</?(?!\\1\\b)"+g+"|"+s("<\\1"+i+"\\s*>(?:[^<]|</?(?!\\1\\b)"+g+"|<self>)*</\\1\\s*>",2)+")*</\\1\\s*>|<"+g+")";e.languages.cshtml=e.languages.extend("markup",{});var c={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(o),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})})},p={pattern:RegExp("(^|[^@])"+n),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:c}};e.languages.cshtml.tag.pattern=RegExp("</?"+g),e.languages.cshtml.tag.inside["attr-value"].pattern=RegExp("=\\s*"+l),e.languages.insertBefore("inside","punctuation",{value:p},e.languages.cshtml.tag.inside["attr-value"]),e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp("(^|[^@])@(?:"+[a,"(?:code|functions)\\s*"+a,"(?:for|foreach|lock|switch|using|while)\\s*"+t+"\\s*"+a,"do\\s*"+a+"\\s*while\\s*"+t+"(?:\\s*;)?","try\\s*"+a+"\\s*catch\\s*"+t+"\\s*"+a+"\\s*finally\\s*"+a,"if\\s*"+t+"\\s*"+a+"(?:\\s*else(?:\\s+if\\s*"+t+")?\\s*"+a+")*","helper\\s+\\w+\\s*"+t+"\\s*"+a].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:c}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:c}},value:p,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(Prism)),a);e("p",s({__proto__:null,default:t(n)},[n]))}}}));
