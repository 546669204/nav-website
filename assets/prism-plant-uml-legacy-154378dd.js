System.register(["./index-legacy-9ff5b9ae.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.g}],execute:function(){function t(e,t){for(var a=0;a<t.length;a++){const r=t[a];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(r,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,n,o,i,s,l,c,d,u={},p=(r||(r=1,n=Prism,o=/\$\w+|%[a-z]+%/,d=/[[?]?[ox]?/.source+"(?:"+(l="(?:-+"+(s=/(?:[drlu]|do|down|le|left|ri|right|up)/.source)+"-+|\\.+"+s+"\\.+|-+(?:"+(i=/\[[^[\]]*\]/.source)+"-*)?|"+i+"-+|\\.+(?:"+i+"\\.*)?|"+i+"\\.+)")+(c=/(?:>{1,2}|\/{1,2}|\\{1,2}|\|>|[#*^+{xo])/.source)+"|"+/(?:<{1,2}|\/{1,2}|\\{1,2}|<\||[#*^+}xo])/.source+l+"(?:"+c+")?)"+/[ox]?[\]?]?/.source,n.languages["plant-uml"]={comment:{pattern:/(^[ \t]*)(?:'.*|\/'[\s\S]*?'\/)/m,lookbehind:!0,greedy:!0},preprocessor:{pattern:/(^[ \t]*)!.*/m,lookbehind:!0,greedy:!0,alias:"property",inside:{variable:o}},delimiter:{pattern:/(^[ \t]*)@(?:end|start)uml\b/m,lookbehind:!0,greedy:!0,alias:"punctuation"},arrow:{pattern:RegExp(/(^|[^-.<>?|\\[\]ox])/.source+d+/(?![-.<>?|\\\]ox])/.source),lookbehind:!0,greedy:!0,alias:"operator",inside:{expression:{pattern:/(\[)[^[\]]+(?=\])/,lookbehind:!0,inside:null},punctuation:/\[(?=$|\])|^\]/}},string:{pattern:/"[^"]*"/,greedy:!0},text:{pattern:/(\[[ \t]*[\r\n]+(?![\r\n]))[^\]]*(?=\])/,lookbehind:!0,greedy:!0,alias:"string"},keyword:[{pattern:/^([ \t]*)(?:abstract\s+class|end\s+(?:box|fork|group|merge|note|ref|split|title)|(?:fork|split)(?:\s+again)?|activate|actor|agent|alt|annotation|artifact|autoactivate|autonumber|backward|binary|boundary|box|break|caption|card|case|circle|class|clock|cloud|collections|component|concise|control|create|critical|database|deactivate|destroy|detach|diamond|else|elseif|end|end[hr]note|endif|endswitch|endwhile|entity|enum|file|folder|footer|frame|group|[hr]?note|header|hexagon|hide|if|interface|label|legend|loop|map|namespace|network|newpage|node|nwdiag|object|opt|package|page|par|participant|person|queue|rectangle|ref|remove|repeat|restore|return|robust|scale|set|show|skinparam|stack|start|state|stop|storage|switch|title|together|usecase|usecase\/|while)(?=\s|$)/m,lookbehind:!0,greedy:!0},/\b(?:elseif|equals|not|while)(?=\s*\()/,/\b(?:as|is|then)\b/],divider:{pattern:/^==.+==$/m,greedy:!0,alias:"important"},time:{pattern:/@(?:\d+(?:[:/]\d+){2}|[+-]?\d+|:[a-z]\w*(?:[+-]\d+)?)\b/i,greedy:!0,alias:"number"},color:{pattern:/#(?:[a-z_]+|[a-fA-F0-9]+)\b/,alias:"symbol"},variable:o,punctuation:/[:,;()[\]{}]|\.{3}/},n.languages["plant-uml"].arrow.inside.expression.inside=n.languages["plant-uml"],n.languages.plantuml=n.languages["plant-uml"]),u);e("p",t({__proto__:null,default:a(p)},[p]))}}}));
