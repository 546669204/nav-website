import{g as c}from"./index-fde57fe3.js";function b(r,s){for(var i=0;i<s.length;i++){const e=s[i];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(e,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var d={},g;function f(){return g||(g=1,function(r){function s(u){return RegExp("(\\()(?:"+u+")(?=[\\s\\)])")}function i(u){return RegExp("([\\s([])(?:"+u+")(?=[\\s)])")}var e="(?!\\d)[-+*/~!@$%^=<>{}\\w]+",n="(\\()",a="(?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\))*",t={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+e+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+e),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+e),alias:"property"},splice:{pattern:RegExp(",@?"+e),alias:["symbol","variable"]},keyword:[{pattern:RegExp("(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"),lookbehind:!0},{pattern:RegExp("(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"),lookbehind:!0}],declare:{pattern:s("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:s("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:i("nil|t"),lookbehind:!0},number:{pattern:i("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp("(\\()def(?:const|custom|group|var)\\s+"+e),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(e)}},defun:{pattern:RegExp("(\\()(?:cl-)?(?:defmacro|defun\\*?)\\s+"+e+"\\s+\\("+a+"\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+e),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp("(\\()lambda\\s+\\(\\s*(?:&?"+e+"(?:\\s+&?"+e+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(n+e),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},o={"lisp-marker":RegExp("&(?!\\d)[-+*/~!@$%^=<>{}\\w]+"),varform:{pattern:RegExp("\\("+e+"\\s+(?=\\S)"+a+"\\)"),inside:t},argument:{pattern:RegExp("(^|[\\s(])"+e),lookbehind:!0,alias:"variable"},rest:t},p="\\S+(?:\\s+\\S+)*",l={pattern:RegExp(n+a+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+p),inside:o},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+p),inside:o},keys:{pattern:RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:o},argument:{pattern:RegExp(e),alias:"variable"},punctuation:/[()]/}};t.lambda.inside.arguments=l,t.defun.inside.arguments=r.util.clone(l),t.defun.inside.arguments.inside.sublist=l,r.languages.lisp=t,r.languages.elisp=t,r.languages.emacs=t,r.languages["emacs-lisp"]=t}(Prism)),d}var m=f();const y=c(m),x=b({__proto__:null,default:y},[m]);export{x as p};
