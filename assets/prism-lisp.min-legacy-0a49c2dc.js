System.register(["./index-legacy-bb604a6f.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a={},i=(r||(r=1,function(e){function t(e){return RegExp("(\\()(?:"+e+")(?=[\\s\\)])")}function n(e){return RegExp("([\\s([])(?:"+e+")(?=[\\s)])")}var r="(?!\\d)[-+*/~!@$%^=<>{}\\w]+",a="(\\()",i="(?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\))*",s={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+r+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+r),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+r),alias:"property"},splice:{pattern:RegExp(",@?"+r),alias:["symbol","variable"]},keyword:[{pattern:RegExp("(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"),lookbehind:!0},{pattern:RegExp("(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"),lookbehind:!0}],declare:{pattern:t("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:t("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:n("nil|t"),lookbehind:!0},number:{pattern:n("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp("(\\()def(?:const|custom|group|var)\\s+"+r),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(r)}},defun:{pattern:RegExp("(\\()(?:cl-)?(?:defmacro|defun\\*?)\\s+"+r+"\\s+\\("+i+"\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+r),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp("(\\()lambda\\s+\\(\\s*(?:&?"+r+"(?:\\s+&?"+r+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(a+r),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},o={"lisp-marker":RegExp("&(?!\\d)[-+*/~!@$%^=<>{}\\w]+"),varform:{pattern:RegExp("\\("+r+"\\s+(?=\\S)"+i+"\\)"),inside:s},argument:{pattern:RegExp("(^|[\\s(])"+r),lookbehind:!0,alias:"variable"},rest:s},l="\\S+(?:\\s+\\S+)*",p={pattern:RegExp(a+i+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+l),inside:o},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+l),inside:o},keys:{pattern:RegExp("&key\\s+"+l+"(?:\\s+&allow-other-keys)?"),inside:o},argument:{pattern:RegExp(r),alias:"variable"},punctuation:/[()]/}};s.lambda.inside.arguments=p,s.defun.inside.arguments=e.util.clone(p),s.defun.inside.arguments.inside.sublist=p,e.languages.lisp=s,e.languages.elisp=s,e.languages.emacs=s,e.languages["emacs-lisp"]=s}(Prism)),a);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
