System.register(["./index-legacy-095e3488.js"],(function(e,t){"use strict";var s;return{setters:[e=>{s=e.g}],execute:function(){function t(e,t){for(var s=0;s<t.length;s++){const a=t[s];if("string"!=typeof a&&!Array.isArray(a))for(const t in a)if("default"!==t&&!(t in e)){const s=Object.getOwnPropertyDescriptor(a,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>a[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,r={},i=(a||(a=1,Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:Prism.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,Prism.languages.insertBefore("inside","punctuation",{directive:Prism.languages.aspnet.directive},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:Prism.languages.csharp||{}}})),r);e("p",t({__proto__:null,default:s(i)},[i]))}}}));
