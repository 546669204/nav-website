import{r as l,R as c}from"./index-2ced4dec.js";var f={},m={get exports(){return f},set exports(t){f=t}},o={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=l,a=60103;o.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;a=p("react.element"),o.Fragment=p("react.fragment")}var v=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,u){var r,n={},s=null,i=null;u!==void 0&&(s=""+u),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)x.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:a,type:t,key:s,ref:i,props:n,_owner:v.current}}o.jsx=_;o.jsxs=_;(function(t){t.exports=o})(m);function E(){return c.useEffect(()=>{window.location="/nav-website/docs"},[]),f.jsx("div",{})}export{E as default};
