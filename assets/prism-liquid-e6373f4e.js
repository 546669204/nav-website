import{g as u}from"./index-579abb6c.js";function c(r,a){for(var e=0;e<a.length;e++){const i=a[e];if(typeof i!="string"&&!Array.isArray(i)){for(const t in i)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(i,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>i[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function d(){return s||(s=1,Prism.languages.liquid={comment:{pattern:/(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,lookbehind:!0},delimiter:{pattern:/^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,alias:"punctuation"},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},keyword:/\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,object:/\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,function:[{pattern:/(\|\s*)\w+/,lookbehind:!0,alias:"filter"},{pattern:/(\.\s*)(?:first|last|size)/,lookbehind:!0}],boolean:/\b(?:false|nil|true)\b/,range:{pattern:/\.\./,alias:"operator"},number:/\b\d+(?:\.\d+)?\b/,operator:/[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,punctuation:/[.,\[\]()]/,empty:{pattern:/\bempty\b/,alias:"keyword"}},Prism.hooks.add("before-tokenize",function(r){var a=/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,e=!1;Prism.languages["markup-templating"].buildPlaceholders(r,"liquid",a,function(i){var t=/^\{%-?\s*(\w+)/.exec(i);if(t){var n=t[1];if(n==="raw"&&!e)return e=!0,!0;if(n==="endraw")return e=!1,!0}return!e})}),Prism.hooks.add("after-tokenize",function(r){Prism.languages["markup-templating"].tokenizePlaceholders(r,"liquid")})),o}var l=d();const p=u(l),f=c({__proto__:null,default:p},[l]);export{f as p};
