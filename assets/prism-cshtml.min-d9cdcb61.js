import{g as y}from"./index-195b12f7.js";function w(e,s){for(var t=0;t<s.length;t++){const a=s[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(a,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var m={},d;function v(){return d||(d=1,function(e){function s(l,b){for(var u=0;u<b;u++)l=l.replace(/<self>/g,function(){return"(?:"+l+")"});return l.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,`(?:@(?!")|"(?:[^\r
\\\\"]|\\\\.)*"|@"(?:[^\\\\"]|""|\\\\[^])*"(?!")|'(?:(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'|(?=[^\\\\](?!'))))`).replace(/<comment>/g,`(?:/(?![/*])|//.*[\r
]|/\\*[^*]*(?:\\*(?!/)[^*]*)*\\*/)`)}var t=s(`\\((?:[^()'"@/]|<str>|<comment>|<self>)*\\)`,2),a=s(`\\[(?:[^\\[\\]'"@/]|<str>|<comment>|<self>)*\\]`,1),r=s(`\\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\\}`,2),n="@(?:await\\b\\s*)?(?:(?!await\\b)\\w+\\b|"+t+")(?:[?!]?\\.\\w+\\b|(?:"+s(`<(?:[^<>'"@/]|<comment>|<self>)*>`,1)+")?"+t+"|"+a+")*(?![?!\\.(\\[]|<(?!/))",c=`(?:"[^"@]*"|'[^'@]*'|[^\\s'"@>=]+(?=[\\s>])|["'][^"'@]*(?:(?:@(?![\\w()])|`+n+`)[^"'@]*)+["'])`,o="(?:\\s(?:\\s*[^\\s>/=]+(?:\\s*=\\s*<tagAttrValue>|(?=[\\s/>])))+)?".replace(/<tagAttrValue>/,c),i="(?!\\d)[^\\s>/=$<%]+"+o+"\\s*/?>",h="\\B@?(?:<([a-zA-Z][\\w:]*)"+o+"\\s*>(?:[^<]|</?(?!\\1\\b)"+i+"|"+s("<\\1"+o+"\\s*>(?:[^<]|</?(?!\\1\\b)"+i+"|<self>)*</\\1\\s*>",2)+")*</\\1\\s*>|<"+i+")";e.languages.cshtml=e.languages.extend("markup",{});var g={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(h),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})})},p={pattern:RegExp("(^|[^@])"+n),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:g}};e.languages.cshtml.tag.pattern=RegExp("</?"+i),e.languages.cshtml.tag.inside["attr-value"].pattern=RegExp("=\\s*"+c),e.languages.insertBefore("inside","punctuation",{value:p},e.languages.cshtml.tag.inside["attr-value"]),e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp("(^|[^@])@(?:"+[r,"(?:code|functions)\\s*"+r,"(?:for|foreach|lock|switch|using|while)\\s*"+t+"\\s*"+r,"do\\s*"+r+"\\s*while\\s*"+t+"(?:\\s*;)?","try\\s*"+r+"\\s*catch\\s*"+t+"\\s*"+r+"\\s*finally\\s*"+r,"if\\s*"+t+"\\s*"+r+"(?:\\s*else(?:\\s+if\\s*"+t+")?\\s*"+r+")*","helper\\s+\\w+\\s*"+t+"\\s*"+r].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:g}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:g}},value:p,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(Prism)),m}var f=v();const x=y(f),_=w({__proto__:null,default:x},[f]);export{_ as p};
