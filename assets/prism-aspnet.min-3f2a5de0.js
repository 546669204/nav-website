import{g as m}from"./index-3c48d087.js";function o(t,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(e,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n={},p;function u(){return p||(p=1,Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:Prism.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,Prism.languages.insertBefore("inside","punctuation",{directive:Prism.languages.aspnet.directive},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:Prism.languages.csharp||{}}})),n}var g=u();const c=m(g),d=o({__proto__:null,default:c},[g]);export{d as p};
