import{g as c}from"./index-3c48d087.js";function d(a,o){for(var s=0;s<o.length;s++){const e=o[s];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in a)){const t=Object.getOwnPropertyDescriptor(e,n);t&&Object.defineProperty(a,n,t.get?t:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var p={},g;function y(){return g||(g=1,function(a){a.languages.xquery=a.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),a.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,a.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,a.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,a.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:a.languages.xquery,alias:"language-xquery"};var o=function(e){return typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(o).join("")},s=function(e){for(var n=[],t=0;t<e.length;t++){var r=e[t],u=!1;if(typeof r!="string"&&(r.type==="tag"&&r.content[0]&&r.content[0].type==="tag"?r.content[0].content[0].content==="</"?n.length>0&&n[n.length-1].tagName===o(r.content[0].content[1])&&n.pop():r.content[r.content.length-1].content==="/>"||n.push({tagName:o(r.content[0].content[1]),openedBraces:0}):!(n.length>0&&r.type==="punctuation"&&r.content==="{")||e[t+1]&&e[t+1].type==="punctuation"&&e[t+1].content==="{"||e[t-1]&&e[t-1].type==="plain-text"&&e[t-1].content==="{"?n.length>0&&n[n.length-1].openedBraces>0&&r.type==="punctuation"&&r.content==="}"?n[n.length-1].openedBraces--:r.type!=="comment"&&(u=!0):n[n.length-1].openedBraces++),(u||typeof r=="string")&&n.length>0&&n[n.length-1].openedBraces===0){var i=o(r);t<e.length-1&&(typeof e[t+1]=="string"||e[t+1].type==="plain-text")&&(i+=o(e[t+1]),e.splice(t+1,1)),t>0&&(typeof e[t-1]=="string"||e[t-1].type==="plain-text")&&(i=o(e[t-1])+i,e.splice(t-1,1),t--),/^\s+$/.test(i)?e[t]=i:e[t]=new a.Token("plain-text",i,null,i)}r.content&&typeof r.content!="string"&&s(r.content)}};a.hooks.add("after-tokenize",function(e){e.language==="xquery"&&s(e.tokens)})}(Prism)),p}var l=y();const m=c(l),b=d({__proto__:null,default:m},[l]);export{b as p};
