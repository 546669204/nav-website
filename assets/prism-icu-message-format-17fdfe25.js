import{g as d}from"./index-fde57fe3.js";function p(e,s){for(var n=0;n<s.length;n++){const t=s[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var l={},c;function m(){return c||(c=1,function(e){function s(i,u){return u<=0?/[]/.source:i.replace(/<SELF>/g,function(){return s(i,u-1)})}var n=/'[{}:=,](?:[^']|'')*'(?!')/,t={pattern:/''/,greedy:!0,alias:"operator"},r={pattern:n,greedy:!0,inside:{escape:t}},a=s(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g,function(){return n.source}),8),o={pattern:RegExp(a),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};e.languages["icu-message-format"]={argument:{pattern:RegExp(a),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":o,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:few|many|one|other|two|zero)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":o,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:date|duration|number|ordinal|spellout|time)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp(/(^\s*,\s*(?=\S))/.source+s(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source,8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:t,string:r},o.inside.message.inside=e.languages["icu-message-format"],e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=e.languages["icu-message-format"]}(Prism)),l}var g=m();const f=d(g),b=p({__proto__:null,default:f},[g]);export{b as p};
