import{r as l,R as c}from"./index-fde57fe3.js";var s={},m={get exports(){return s},set exports(t){s=t}},o={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=l,_=60103;o.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;_=p("react.element"),o.Fragment=p("react.fragment")}var x=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,u){var e,n={},f=null,i=null;u!==void 0&&(f=""+u),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)y.call(r,e)&&!v.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:_,type:t,key:f,ref:i,props:n,_owner:x.current}}o.jsx=a;o.jsxs=a;(function(t){t.exports=o})(m);function E(){return c.useEffect(()=>{window.location="/docs"},[]),s.jsx("div",{})}export{E as default};
