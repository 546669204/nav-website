import{g as v}from"./index-61a9391c.js";function y(t,o){for(var s=0;s<o.length;s++){const e=o[s];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var g={},m;function k(){return m||(m=1,function(t){function o(d){return RegExp(/(\()/.source+"(?:"+d+")"+/(?=[\s\)])/.source)}function s(d){return RegExp(/([\s([])/.source+"(?:"+d+")"+/(?=[\s)])/.source)}var e=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,n="&"+e,r="(\\()",f="(?=\\))",c="(?=\\s)",i=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,a={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+e+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+e),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+e),alias:"property"},splice:{pattern:RegExp(",@?"+e),alias:["symbol","variable"]},keyword:[{pattern:RegExp(r+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+c),lookbehind:!0},{pattern:RegExp(r+"(?:append|by|collect|concat|do|finally|for|in|return)"+c),lookbehind:!0}],declare:{pattern:o(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:o(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:s(/nil|t/.source),lookbehind:!0},number:{pattern:s(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(r+"def(?:const|custom|group|var)\\s+"+e),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(e)}},defun:{pattern:RegExp(r+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+e+/\s+\(/.source+i+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+e),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(r+"lambda\\s+\\(\\s*(?:&?"+e+"(?:\\s+&?"+e+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(r+e),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},p={"lisp-marker":RegExp(n),varform:{pattern:RegExp(/\(/.source+e+/\s+(?=\S)/.source+i+/\)/.source),inside:a},argument:{pattern:RegExp(/(^|[\s(])/.source+e),lookbehind:!0,alias:"variable"},rest:a},u="\\S+(?:\\s+\\S+)*",l={pattern:RegExp(r+i+f),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+u),inside:p},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+u),inside:p},keys:{pattern:RegExp("&key\\s+"+u+"(?:\\s+&allow-other-keys)?"),inside:p},argument:{pattern:RegExp(e),alias:"variable"},punctuation:/[()]/}};a.lambda.inside.arguments=l,a.defun.inside.arguments=t.util.clone(l),a.defun.inside.arguments.inside.sublist=l,t.languages.lisp=a,t.languages.elisp=a,t.languages.emacs=a,t.languages["emacs-lisp"]=a}(Prism)),g}var b=k();const x=v(b),R=y({__proto__:null,default:x},[b]);export{R as p};
