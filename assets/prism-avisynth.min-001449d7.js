import{g as d}from"./index-fa1c11f5.js";function f(e,a){for(var n=0;n<a.length;n++){const r=a[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},s;function b(){return s||(s=1,function(e){function a(t,i,u){return RegExp(function(c,m){return c.replace(/<<(\d+)>>/g,function(v,p){return m[+p]})}(t,i),u||"")}var n="bool|clip|float|int|string|val",r=[["is(?:bool|clip|float|int|string)|defined|(?:(?:internal)?function|var)?exists?","apply|assert|default|eval|import|nop|select|undefined","opt_(?:allowfloataudio|avipadscanlines|dwchannelmask|enable_(?:b64a|planartopackedrgb|v210|y3_10_10|y3_10_16)|usewaveextensible|vdubplanarhack)|set(?:cachemode|maxcpu|memorymax|planarlegacyalignment|workingdir)","hex(?:value)?|value","abs|ceil|continued(?:denominator|numerator)?|exp|floor|fmod|frac|log(?:10)?|max|min|muldiv|pi|pow|rand|round|sign|spline|sqrt","a?sinh?|a?cosh?|a?tan[2h]?","(?:bit(?:and|not|x?or|[lr]?shift[aslu]?|sh[lr]|sa[lr]|[lr]rotatel?|ro[rl]|te?st|set(?:count)?|cl(?:ea)?r|ch(?:an)?ge?))","average(?:[bgr]|chroma[uv]|luma)|(?:[rgb]|chroma[uv]|luma|rgb|[yuv](?=difference(?:fromprevious|tonext)))difference(?:fromprevious|tonext)?|[yuvrgb]plane(?:median|min|max|minmaxdifference)","getprocessinfo|logmsg|script(?:dir(?:utf8)?|file(?:utf8)?|name(?:utf8)?)|setlogparams","chr|(?:fill|find|left|mid|replace|rev|right)str|format|[lu]case|ord|str(?:cmpi?|fromutf8|len|toutf8)|time|trim(?:all|left|right)","isversionorgreater|version(?:number|string)","buildpixeltype|colorspacenametopixeltype","addautoloaddir|on(?:cpu|cuda)|prefetch|setfiltermtmode"].join("|"),["has(?:audio|video)","height|width","frame(?:count|rate)|framerate(?:denominator|numerator)","getparity|is(?:field|frame)based","bitspercomponent|componentsize|hasalpha|is(?:planar(?:rgba?)?|interleaved|rgb(?:24|32|48|64)?|y(?:8|u(?:va?|y2))?|yv(?:12|16|24|411)|420|422|444|packedrgb)|numcomponents|pixeltype","audio(?:bits|channels|duration|length(?:[fs]|hi|lo)?|rate)|isaudio(?:float|int)"].join("|"),["avi(?:file)?source|directshowsource|image(?:reader|source|sourceanim)|opendmlsource|segmented(?:avisource|directshowsource)|wavsource","coloryuv|convertbacktoyuy2|convertto(?:RGB(?:24|32|48|64)|(?:planar)?RGBA?|Y8?|YV(?:12|16|24|411)|YUVA?(?:411|420|422|444)|YUY2)|fixluminance|gr[ae]yscale|invert|levels|limiter|mergea?rgb|merge(?:chroma|luma)|rgbadjust|show(?:alpha|blue|green|red)|swapuv|tweak|[uv]toy8?|ytouv","(?:colorkey|reset)mask|layer|mask(?:hs)?|merge|overlay|subtract","addborders|(?:bicubic|bilinear|blackman|gauss|lanczos4|lanczos|point|sinc|spline(?:16|36|64))resize|crop(?:bottom)?|flip(?:horizontal|vertical)|(?:horizontal|vertical)?reduceby2|letterbox|skewrows|turn(?:180|left|right)","blur|fixbrokenchromaupsampling|generalconvolution|(?:spatial|temporal)soften|sharpen","trim|(?:un)?alignedsplice|(?:assume|assumescaled|change|convert)FPS|(?:delete|duplicate)frame|dissolve|fade(?:in|io|out)[02]?|freezeframe|interleave|loop|reverse|select(?:even|odd|(?:range)?every)","assume[bt]ff|assume(?:field|frame)based|bob|complementparity|doubleweave|peculiarblend|pulldown|separate(?:columns|fields|rows)|swapfields|weave(?:columns|rows)?","amplify(?:db)?|assumesamplerate|audiodub(?:ex)?|audiotrim|convertaudioto(?:(?:8|16|24|32)bit|float)|converttomono|delayaudio|ensurevbrmp3sync|get(?:left|right)?channel|kill(?:audio|video)|mergechannels|mixaudio|monotostereo|normalize|resampleaudio|ssrc|supereq|timestretch","animate|applyrange|conditional(?:filter|reader|select)|frameevaluate|scriptclip|tcp(?:server|source)|writefile(?:end|if|start)?","imagewriter","blackness|blankclip|colorbars(?:hd)?|compare|dumpfiltergraph|echo|histogram|info|messageclip|preroll|setgraphanalysis|show(?:framenumber|smpte|time)|showfiveversions|stack(?:horizontal|vertical)|subtitle|tone|version"].join("|")].join("|");e.languages.avisynth={comment:[{pattern:/(^|[^\\])\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|\[\*(?:[^\[*]|\[(?!\*)|\*(?!\]))*\*\])*\*\]/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],argument:{pattern:a('\\b(?:<<0>>)\\s+("?)\\w+\\1',[n],"i"),inside:{keyword:/^\w+/}},"argument-label":{pattern:/([,(][\s\\]*)\w+\s*=(?!=)/,lookbehind:!0,inside:{"argument-name":{pattern:/^\w+/,alias:"punctuation"},punctuation:/=$/}},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0,inside:{constant:{pattern:/\b(?:DEFAULT_MT_MODE|(?:MAINSCRIPT|PROGRAM|SCRIPT)DIR|(?:MACHINE|USER)_(?:CLASSIC|PLUS)_PLUGINS)\b/}}}],variable:/\b(?:last)\b/i,boolean:/\b(?:false|no|true|yes)\b/i,keyword:/\b(?:catch|else|for|function|global|if|return|try|while|__END__)\b/i,constant:/\bMT_(?:MULTI_INSTANCE|NICE_FILTER|SERIALIZED|SPECIAL_MT)\b/,"builtin-function":{pattern:a("\\b(?:<<0>>)\\b",[r],"i"),alias:"function"},"type-cast":{pattern:a("\\b(?:<<0>>)(?=\\s*\\()",[n],"i"),alias:"keyword"},function:{pattern:/\b[a-z_]\w*(?=\s*\()|(\.)[a-z_]\w*\b/i,lookbehind:!0},"line-continuation":{pattern:/(^[ \t]*)\\|\\(?=[ \t]*$)/m,lookbehind:!0,alias:"punctuation"},number:/\B\$(?:[\da-f]{6}|[\da-f]{8})\b|(?:(?:\b|\B-)\d+(?:\.\d*)?\b|\B\.\d+\b)/i,operator:/\+\+?|[!=<>]=?|&&|\|\||[?:*/%-]/,punctuation:/[{}\[\]();,.]/},e.languages.avs=e.languages.avisynth}(Prism)),o}var l=b();const g=d(l),y=f({__proto__:null,default:g},[l]);export{y as p};
