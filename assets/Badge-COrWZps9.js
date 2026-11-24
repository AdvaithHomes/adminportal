import{c as n,b3 as y,j as c,p as u,ag as s,x as g,aq as f,M as m}from"./index-Dz3gmaBr.js";import{S as x}from"./shield-check-BbHHItTf.js";import{S as v}from"./shield-alert-BmEJFrfX.js";import{M as C}from"./mail-open-BtCd84Ni.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=n("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=n("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=n("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n("FilePen",[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=n("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=n("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),$=i=>{const r=String(i||"").trim(),e=r.toLowerCase();if(e==="enabled"||e==="login enabled")return x;if(e==="disabled"||e==="login disabled")return v;if(e==="active"||e==="approved"||e==="accepted"||e==="completed"||e==="booked"||e==="published"||e==="visible"||e==="done")return u;if(e==="awaiting upload"||e==="upload"||e==="uploaded")return A;if(e==="pending review")return s;if(e.includes("hold"))return S;if(e.includes("pend")||e.includes("wait"))return s;if(e.includes("progress")||e.includes("process")||e.includes("shortlist"))return p;if(e.includes("action")||e.includes("correct")||e.includes("urgent")||e.includes("high"))return g;if(e.includes("reject")||e.includes("overdue")||e.includes("cancel")||e.includes("decline")||e.includes("fail")||e.includes("critical"))return f;if(e.includes("inact")||e.includes("disab")||e.includes("hidden"))return w;if(e.includes("no doc")||e==="no documents")return q;if(e==="read")return C;if(e==="unread")return m;if(e==="draft")return j;const a=y(r);return a==="ok"?u:a==="warn"?s:a==="bad"?f:a==="info"?p:M},H=i=>{if(!i)return null;const r=String(i).toLowerCase();return r==="success"||r==="ok"?"ok":r==="danger"||r==="error"||r==="bad"?"bad":r==="warning"||r==="warn"?"warn":r==="info"?"info":r==="muted"||r==="neutral"?"muted":r};function P({value:i,status:r,tone:e,symbolOnly:a=!1,noTooltip:h=!1,className:l="",title:d}){const t=i??r,o=H(e)||y(t);if(a){const k=$(t),b=h?void 0:d||t;return c.jsx("span",{className:`badge badge-symbol ${o}${l?` ${l}`:""}`,"data-title":b,"aria-label":d||t,role:"img",children:c.jsx(k,{size:14,"aria-hidden":"true"})})}return c.jsx("span",{className:`badge ${o}${l?` ${l}`:""}`,children:t})}export{p as A,w as B,S as C,P as S,A as U};
