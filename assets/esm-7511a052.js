import{R as i}from"./index-61a9391c.js";function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(r){d(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function b(e,t){if(e==null)return{};var n=s(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=function(t){return typeof t=="function"},v=i.createContext({}),y=function(t){var n=i.useContext(v),r=n;return t&&(r=g(t)?t(n):u(u({},n),t)),r},h=function(t){var n=y(t.components);return i.createElement(v.Provider,{value:n},t.children)},P="mdxType",j={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},O=i.forwardRef(function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,f=b(e,["components","mdxType","originalType","parentName"]),l=y(n),c=r,p=l["".concat(o,".").concat(c)]||l[c]||j[c]||a;return n?i.createElement(p,u(u({ref:t},f),{},{components:n})):i.createElement(p,u({ref:t},f))});O.displayName="MDXCreateElement";function w(e,t){var n=arguments,r=t&&t.mdxType;if(typeof e=="string"||r){var a=n.length,o=new Array(a);o[0]=O;var f={};for(var l in t)hasOwnProperty.call(t,l)&&(f[l]=t[l]);f.originalType=e,f[P]=typeof e=="string"?e:r,o[1]=f;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}export{h as M,w as c};
