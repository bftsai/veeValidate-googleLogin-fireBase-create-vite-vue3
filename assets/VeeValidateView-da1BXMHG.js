import{d as Bn,t as He,b as A,r as jn,h as Ut,i as Xr,e as Zr,p as Qr,f as Ft,u as M,w as ze,g as fs,j as O,k as ge,l as Bt,n as Ie,m as ms,q as ps,s as Xt,v as gs,_ as vs,x as _s,y as At,o as ys,c as bs,a as C,z as q,A as Is,B as Es,F as ws,C as Ct,D as mn,E as Ss,G as Ts}from"./index-fi7n6i9V.js";import"https://kit.fontawesome.com/96a7520586.js";/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function G(t){return typeof t=="function"}function ei(t){return t==null}const qe=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function xn(t){return Number(t)>=0}function Os(t){const e=parseFloat(t);return isNaN(e)?t:e}function As(t){return typeof t=="object"&&t!==null}function Cs(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function lr(t){if(!As(t)||Cs(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function mt(t,e){return Object.keys(e).forEach(n=>{if(lr(e[n])&&lr(t[n])){t[n]||(t[n]={}),mt(t[n],e[n]);return}t[n]=e[n]}),t}function at(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if(xn(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const ti={};function Hn(t,e){Rs(t,e),ti[t]=e}function ks(t){return ti[t]}function Rs(t,e){if(!G(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}function cr(t,e,n){typeof n.value=="object"&&(n.value=R(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function R(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(R(o))})):s==="[object Map]"?(i=new Map,t.forEach(function(o,l){i.set(R(l),R(o))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(R(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)cr(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||cr(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}const Zt=Symbol("vee-validate-form"),Ps=Symbol("vee-validate-field-instance"),jt=Symbol("Default empty value"),Ns=typeof window<"u";function On(t){return G(t)&&!!t.__locatorRef}function ve(t){return!!t&&G(t.parse)&&t.__type==="VVTypedSchema"}function xt(t){return!!t&&G(t.validate)}function bt(t){return t==="checkbox"||t==="radio"}function Ds(t){return qe(t)||Array.isArray(t)}function Ls(t){return Array.isArray(t)?t.length===0:qe(t)&&Object.keys(t).length===0}function Qt(t){return/^\[.+\]$/i.test(t)}function Ms(t){return ni(t)&&t.multiple}function ni(t){return t.tagName==="SELECT"}function Vs(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function Us(t,e){return!Vs(t,e)&&e.type!=="file"&&!bt(e.type)}function ri(t){return $n(t)&&t.target&&"submit"in t.target}function $n(t){return t?!!(typeof Event<"u"&&G(Event)&&t instanceof Event||t&&t.srcElement):!1}function ur(t,e){return e in t&&t[e]!==jt}function te(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!te(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!te(r[1],e.get(r[0])))return!1;return!0}if(dr(t)&&dr(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(i=Object.keys(t),n=i.length,r=n;r--!==0;){var s=i[r];if(!te(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function dr(t){return Ns?t instanceof File:!1}function Wn(t){return Qt(t)?t.replace(/\[|\]/gi,""):t}function oe(t,e,n){return t?Qt(e)?t[Wn(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>Ds(i)&&s in i?i[s]:n,t):n}function Re(t,e,n){if(Qt(e)){t[Wn(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||ei(i[r[s]]))&&(i[r[s]]=xn(r[s+1])?[]:{}),i=i[r[s]]}}function pn(t,e){if(Array.isArray(t)&&xn(e)){t.splice(Number(e),1);return}qe(t)&&delete t[e]}function hr(t,e){if(Qt(e)){delete t[Wn(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){pn(r,n[s]);break}if(!(n[s]in r)||ei(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,o)=>oe(t,n.slice(0,o).join(".")));for(let s=i.length-1;s>=0;s--)if(Ls(i[s])){if(s===0){pn(t,n[0]);continue}pn(i[s-1],n[s-1])}}function me(t){return Object.keys(t)}function ii(t,e=void 0){const n=Xt();return(n==null?void 0:n.provides[t])||Xr(t,e)}function fr(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.findIndex(s=>te(s,e));return i>=0?r.splice(i,1):r.push(e),r}return te(t,e)?n:e}function mr(t,e=0){let n=null,r=[];return function(...i){return n&&clearTimeout(n),n=setTimeout(()=>{const s=t(...i);r.forEach(o=>o(s)),r=[]},e),new Promise(s=>r.push(s))}}function Fs(t,e){return qe(e)&&e.number?Os(t):t}function An(t,e){let n;return async function(...i){const s=t(...i);n=s;const o=await s;return s!==n?o:(n=void 0,e(o,i))}}function Cn(t){return Array.isArray(t)?t:t?[t]:[]}function kt(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function Bs(t){let e=null,n=[];return function(...r){const i=Ie(()=>{if(e!==i)return;const s=t(...r);n.forEach(o=>o(s)),n=[],e=null});return e=i,new Promise(s=>n.push(s))}}function zn(t,e,n){return e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default}function gn(t){if(si(t))return t._value}function si(t){return"_value"in t}function js(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function Ht(t){if(!$n(t))return t;const e=t.target;if(bt(e.type)&&si(e))return gn(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(Ms(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(gn);if(ni(e)){const n=Array.from(e.options).find(r=>r.selected);return n?gn(n):e.value}return js(e)}function oi(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?qe(t)&&t._$$isNormalized?t:qe(t)?Object.keys(t).reduce((n,r)=>{const i=xs(t[r]);return t[r]!==!1&&(n[r]=pr(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=Hs(r);return i.name&&(n[i.name]=pr(i.params)),n},e):e}function xs(t){return t===!0?[]:Array.isArray(t)||qe(t)?t:[t]}function pr(t){const e=n=>typeof n=="string"&&n[0]==="@"?$s(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const Hs=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function $s(t){const e=n=>oe(n,t)||n[t];return e.__locatorRef=t,e}function Ws(t){return Array.isArray(t)?t.filter(On):me(t).filter(e=>On(t[e])).map(e=>t[e])}const zs={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let kn=Object.assign({},zs);const $e=()=>kn,qs=t=>{kn=Object.assign(Object.assign({},kn),t)},Gs=qs;async function ai(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},o=(await Ks(i,t)).errors;return{errors:o,valid:!o.length}}async function Ks(t,e){if(ve(t.rules)||xt(t.rules))return Ys(e,t.rules);if(G(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},l=Array.isArray(t.rules)?t.rules:[t.rules],a=l.length,d=[];for(let m=0;m<a;m++){const f=l[m],_=await f(e,o);if(!(typeof _!="string"&&!Array.isArray(_)&&_)){if(Array.isArray(_))d.push(..._);else{const T=typeof _=="string"?_:ci(o);d.push(T)}if(t.bails)return{errors:d}}}return{errors:d}}const n=Object.assign(Object.assign({},t),{rules:oi(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let o=0;o<s;o++){const l=i[o],a=await Xs(n,e,{name:l,params:n.rules[l]});if(a.error&&(r.push(a.error),t.bails))return{errors:r}}return{errors:r}}function Js(t){return!!t&&t.name==="ValidationError"}function li(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!Js(i))throw i;if(!(!((r=i.inner)===null||r===void 0)&&r.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const s=i.inner.reduce((o,l)=>{const a=l.path||"";return o[a]||(o[a]={errors:[],path:a}),o[a].errors.push(...l.errors),o},{});return{errors:Object.values(s)}}}}}async function Ys(t,e){const r=await(ve(e)?e:li(e)).parse(t),i=[];for(const s of r.errors)s.errors.length&&i.push(...s.errors);return{errors:i}}async function Xs(t,e,n){const r=ks(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=Zs(n.params,t.formData),s={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await r(e,i,s);return typeof o=="string"?{error:o}:{error:o?void 0:ci(s)}}function ci(t){const e=$e().generateMessage;return e?e(t):"Field is invalid"}function Zs(t,e){const n=r=>On(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function Qs(t,e){const r=await(ve(t)?t:li(t)).parse(R(e)),i={},s={};for(const o of r.errors){const l=o.errors,a=(o.path||"").replace(/\["(\d+)"\]/g,(d,m)=>`[${m}]`);i[a]={valid:!l.length,errors:l},l.length&&(s[a]=l[0])}return{valid:!r.errors.length,results:i,errors:s,values:r.value}}async function eo(t,e,n){const i=me(t).map(async d=>{var m,f,_;const y=(m=n==null?void 0:n.names)===null||m===void 0?void 0:m[d],T=await ai(oe(e,d),t[d],{name:(y==null?void 0:y.name)||d,label:y==null?void 0:y.label,values:e,bails:(_=(f=n==null?void 0:n.bailsMap)===null||f===void 0?void 0:f[d])!==null&&_!==void 0?_:!0});return Object.assign(Object.assign({},T),{path:d})});let s=!0;const o=await Promise.all(i),l={},a={};for(const d of o)l[d.path]={valid:d.valid,errors:d.errors},d.valid||(s=!1,a[d.path]=d.errors[0]);return{valid:s,results:l,errors:a}}let gr=0;function to(t,e){const{value:n,initialValue:r,setInitialValue:i}=no(t,e.modelValue,e.form);if(!e.form){let a=function(y){var T;"value"in y&&(n.value=y.value),"errors"in y&&m(y.errors),"touched"in y&&(_.touched=(T=y.touched)!==null&&T!==void 0?T:_.touched),"initialValue"in y&&i(y.initialValue)};const{errors:d,setErrors:m}=so(),f=gr>=Number.MAX_SAFE_INTEGER?0:++gr,_=io(n,r,d,e.schema);return{id:f,path:t,value:n,initialValue:r,meta:_,flags:{pendingUnmount:{[f]:!1},pendingReset:!1},errors:d,setState:a}}const s=e.form.createPathState(t,{bails:e.bails,label:e.label,type:e.type,validate:e.validate,schema:e.schema}),o=A(()=>s.errors);function l(a){var d,m,f;"value"in a&&(n.value=a.value),"errors"in a&&((d=e.form)===null||d===void 0||d.setFieldError(M(t),a.errors)),"touched"in a&&((m=e.form)===null||m===void 0||m.setFieldTouched(M(t),(f=a.touched)!==null&&f!==void 0?f:!1)),"initialValue"in a&&i(a.initialValue)}return{id:Array.isArray(s.id)?s.id[s.id.length-1]:s.id,path:t,value:n,errors:o,meta:s,initialValue:r,flags:s.__flags,setState:l}}function no(t,e,n){const r=ge(M(e));function i(){return n?oe(n.initialValues.value,M(t),M(r)):M(r)}function s(d){if(!n){r.value=d;return}n.setFieldInitialValue(M(t),d,!0)}const o=A(i);if(!n)return{value:ge(i()),initialValue:o,setInitialValue:s};const l=ro(e,n,o,t);return n.stageInitialValue(M(t),l,!0),{value:A({get(){return oe(n.values,M(t))},set(d){n.setFieldValue(M(t),d,!1)}}),initialValue:o,setInitialValue:s}}function ro(t,e,n,r){return Ft(t)?M(t):t!==void 0?t:oe(e.values,M(r),M(n))}function io(t,e,n,r){var i,s;const o=(s=(i=r==null?void 0:r.describe)===null||i===void 0?void 0:i.call(r).required)!==null&&s!==void 0?s:!1,l=Bt({touched:!1,pending:!1,valid:!0,required:o,validated:!!M(n).length,initialValue:A(()=>M(e)),dirty:A(()=>!te(M(t),M(e)))});return ze(n,a=>{l.valid=!a.length},{immediate:!0,flush:"sync"}),l}function so(){const t=ge([]);return{errors:t,setErrors:e=>{t.value=Cn(e)}}}function oo(t,e,n){return bt(n==null?void 0:n.type)?lo(t,e,n):ui(t,e,n)}function ui(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:o,checkedValue:l,label:a,validateOnValueUpdate:d,uncheckedValue:m,controlled:f,keepValueOnUnmount:_,syncVModel:y,form:T}=ao(n),K=f?ii(Zt):void 0,I=T||K,W=A(()=>at(O(t))),B=A(()=>{if(O(I==null?void 0:I.schema))return;const w=M(e);return xt(w)||ve(w)||G(w)||Array.isArray(w)?w:oi(w)}),{id:z,value:J,initialValue:Y,meta:P,setState:ne,errors:U,flags:F}=to(W,{modelValue:r,form:I,bails:s,label:a,type:o,validate:B.value?ce:void 0,schema:ve(e)?e:void 0}),j=A(()=>U.value[0]);y&&co({value:J,prop:y,handleChange:S,shouldValidate:()=>d&&!F.pendingReset});const ye=(v,w=!1)=>{P.touched=!0,w&&le()};async function we(v){var w,L;if(I!=null&&I.validateSchema){const{results:N}=await I.validateSchema(v);return(w=N[O(W)])!==null&&w!==void 0?w:{valid:!0,errors:[]}}return B.value?ai(J.value,B.value,{name:O(W),label:O(a),values:(L=I==null?void 0:I.values)!==null&&L!==void 0?L:{},bails:s}):{valid:!0,errors:[]}}const le=An(async()=>(P.pending=!0,P.validated=!0,we("validated-only")),v=>(F.pendingUnmount[Q.id]||(ne({errors:v.errors}),P.pending=!1,P.valid=v.valid),v)),re=An(async()=>we("silent"),v=>(P.valid=v.valid,v));function ce(v){return(v==null?void 0:v.mode)==="silent"?re():le()}function S(v,w=!0){const L=Ht(v);st(L,w)}Zr(()=>{if(i)return le();(!I||!I.validateSchema)&&re()});function ie(v){P.touched=v}function he(v){var w;const L=v&&"value"in v?v.value:Y.value;ne({value:R(L),initialValue:R(L),touched:(w=v==null?void 0:v.touched)!==null&&w!==void 0?w:!1,errors:(v==null?void 0:v.errors)||[]}),P.pending=!1,P.validated=!1,re()}const Ce=Xt();function st(v,w=!0){J.value=Ce&&y?Fs(v,Ce.props.modelModifiers):v,(w?le:re)()}function Ot(v){ne({errors:Array.isArray(v)?v:[v]})}const rr=A({get(){return J.value},set(v){st(v,d)}}),Q={id:z,name:W,label:a,value:rr,meta:P,errors:U,errorMessage:j,type:o,checkedValue:l,uncheckedValue:m,bails:s,keepValueOnUnmount:_,resetField:he,handleReset:()=>he(),validate:ce,handleChange:S,handleBlur:ye,setState:ne,setTouched:ie,setErrors:Ot,setValue:st};if(Qr(Ps,Q),Ft(e)&&typeof M(e)!="function"&&ze(e,(v,w)=>{te(v,w)||(P.validated?le():re())},{deep:!0}),!I)return Q;const on=A(()=>{const v=B.value;return!v||G(v)||xt(v)||ve(v)||Array.isArray(v)?{}:Object.keys(v).reduce((w,L)=>{const N=Ws(v[L]).map(Se=>Se.__locatorRef).reduce((Se,be)=>{const fe=oe(I.values,be)||I.values[be];return fe!==void 0&&(Se[be]=fe),Se},{});return Object.assign(w,N),w},{})});return ze(on,(v,w)=>{if(!Object.keys(v).length)return;!te(v,w)&&(P.validated?le():re())}),fs(()=>{var v;const w=(v=O(Q.keepValueOnUnmount))!==null&&v!==void 0?v:O(I.keepValuesOnUnmount),L=O(W);if(w||!I||F.pendingUnmount[Q.id]){I==null||I.removePathState(L,z);return}F.pendingUnmount[Q.id]=!0;const N=I.getPathState(L);if(Array.isArray(N==null?void 0:N.id)&&(N!=null&&N.multiple)?N!=null&&N.id.includes(Q.id):(N==null?void 0:N.id)===Q.id){if(N!=null&&N.multiple&&Array.isArray(N.value)){const be=N.value.findIndex(fe=>te(fe,O(Q.checkedValue)));if(be>-1){const fe=[...N.value];fe.splice(be,1),I.setFieldValue(L,fe)}Array.isArray(N.id)&&N.id.splice(N.id.indexOf(Q.id),1)}else I.unsetPathValue(O(W));I.removePathState(L,z)}}),Q}function ao(t){const e=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(t!=null&&t.syncVModel),r=typeof(t==null?void 0:t.syncVModel)=="string"?t.syncVModel:(t==null?void 0:t.modelPropName)||"modelValue",i=n&&!("initialValue"in(t||{}))?Rn(Xt(),r):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},e()),{initialValue:i});const s="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled,l=(t==null?void 0:t.modelPropName)||(t==null?void 0:t.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},e()),t||{}),{initialValue:i,controlled:o??!0,checkedValue:s,syncVModel:l})}function lo(t,e,n){const r=n!=null&&n.standalone?void 0:ii(Zt),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(l){const a=l.handleChange,d=A(()=>{const f=O(l.value),_=O(i);return Array.isArray(f)?f.findIndex(y=>te(y,_))>=0:te(_,f)});function m(f,_=!0){var y,T;if(d.value===((y=f==null?void 0:f.target)===null||y===void 0?void 0:y.checked)){_&&l.validate();return}const K=O(t),I=r==null?void 0:r.getPathState(K),W=Ht(f);let B=(T=O(i))!==null&&T!==void 0?T:W;r&&(I!=null&&I.multiple)&&I.type==="checkbox"?B=fr(oe(r.values,K)||[],B,void 0):(n==null?void 0:n.type)==="checkbox"&&(B=fr(O(l.value),B,O(s))),a(B,_)}return Object.assign(Object.assign({},l),{checked:d,checkedValue:i,uncheckedValue:s,handleChange:m})}return o(ui(t,e,n))}function co({prop:t,value:e,handleChange:n,shouldValidate:r}){const i=Xt();if(!i||!t)return;const s=typeof t=="string"?t:"modelValue",o=`update:${s}`;s in i.props&&(ze(e,l=>{te(l,Rn(i,s))||i.emit(o,l)}),ze(()=>Rn(i,s),l=>{if(l===jt&&e.value===void 0)return;const a=l===jt?void 0:l;te(a,e.value)||n(a,r())}))}function Rn(t,e){if(t)return t.props[e]}const uo=Bn({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>$e().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:jt},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=He(t,"rules"),r=He(t,"name"),i=He(t,"label"),s=He(t,"uncheckedValue"),o=He(t,"keepValue"),{errors:l,value:a,errorMessage:d,validate:m,handleChange:f,handleBlur:_,setTouched:y,resetField:T,handleReset:K,meta:I,checked:W,setErrors:B}=oo(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:fo(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:t.validateOnModelUpdate,keepValueOnUnmount:o,syncVModel:!0}),z=function(F,j=!0){f(F,j)},J=A(()=>{const{validateOnInput:U,validateOnChange:F,validateOnBlur:j,validateOnModelUpdate:ye}=ho(t);function we(S){_(S,j),G(e.attrs.onBlur)&&e.attrs.onBlur(S)}function le(S){z(S,U),G(e.attrs.onInput)&&e.attrs.onInput(S)}function re(S){z(S,F),G(e.attrs.onChange)&&e.attrs.onChange(S)}const ce={name:t.name,onBlur:we,onInput:le,onChange:re};return ce["onUpdate:modelValue"]=S=>z(S,ye),ce}),Y=A(()=>{const U=Object.assign({},J.value);bt(e.attrs.type)&&W&&(U.checked=W.value);const F=vr(t,e);return Us(F,e.attrs)&&(U.value=a.value),U}),P=A(()=>Object.assign(Object.assign({},J.value),{modelValue:a.value}));function ne(){return{field:Y.value,componentField:P.value,value:a.value,meta:I,errors:l.value,errorMessage:d.value,validate:m,resetField:T,handleChange:z,handleInput:U=>z(U,!1),handleReset:K,handleBlur:J.value.onBlur,setTouched:y,setErrors:B}}return e.expose({value:a,meta:I,errors:l,errorMessage:d,setErrors:B,setTouched:y,reset:T,validate:m,handleChange:f}),()=>{const U=jn(vr(t,e)),F=zn(U,e,ne);return U?Ut(U,Object.assign(Object.assign({},e.attrs),Y.value),F):F}}});function vr(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function ho(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:o,validateOnBlur:l,validateOnModelUpdate:a}=$e();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:l,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:a}}function fo(t,e){return bt(e.attrs.type)?ur(t,"modelValue")?t.modelValue:void 0:ur(t,"modelValue")?t.modelValue:e.attrs.value}const mo=uo;let po=0;const Rt=["bails","fieldsCount","id","multiple","type","validate"];function di(t){const e=Object.assign({},O((t==null?void 0:t.initialValues)||{})),n=M(t==null?void 0:t.validationSchema);return n&&ve(n)&&G(n.cast)?R(n.cast(e)||{}):R(e)}function go(t){var e;const n=po++;let r=0;const i=ge(!1),s=ge(!1),o=ge(0),l=[],a=Bt(di(t)),d=ge([]),m=ge({}),f=ge({}),_=Bs(()=>{f.value=d.value.reduce((u,c)=>(u[at(O(c.path))]=c,u),{})});function y(u,c){const h=S(u);if(!h){typeof u=="string"&&(m.value[at(u)]=Cn(c));return}if(typeof u=="string"){const p=at(u);m.value[p]&&delete m.value[p]}h.errors=Cn(c),h.valid=!h.errors.length}function T(u){me(u).forEach(c=>{y(c,u[c])})}t!=null&&t.initialErrors&&T(t.initialErrors);const K=A(()=>{const u=d.value.reduce((c,h)=>(h.errors.length&&(c[h.path]=h.errors),c),{});return Object.assign(Object.assign({},m.value),u)}),I=A(()=>me(K.value).reduce((u,c)=>{const h=K.value[c];return h!=null&&h.length&&(u[c]=h[0]),u},{})),W=A(()=>d.value.reduce((u,c)=>(u[c.path]={name:c.path||"",label:c.label||""},u),{})),B=A(()=>d.value.reduce((u,c)=>{var h;return u[c.path]=(h=c.bails)!==null&&h!==void 0?h:!0,u},{})),z=Object.assign({},(t==null?void 0:t.initialErrors)||{}),J=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:Y,originalInitialValues:P,setInitialValues:ne}=_o(d,a,t),U=vo(d,a,P,I),F=A(()=>d.value.reduce((u,c)=>{const h=oe(a,c.path);return Re(u,c.path,h),u},{})),j=t==null?void 0:t.validationSchema;function ye(u,c){var h,p;const E=A(()=>oe(Y.value,O(u))),b=f.value[O(u)],k=(c==null?void 0:c.type)==="checkbox"||(c==null?void 0:c.type)==="radio";if(b&&k){b.multiple=!0;const pe=r++;return Array.isArray(b.id)?b.id.push(pe):b.id=[b.id,pe],b.fieldsCount++,b.__flags.pendingUnmount[pe]=!1,b}const x=A(()=>oe(a,O(u))),H=O(u),ee=he.findIndex(pe=>pe===H);ee!==-1&&he.splice(ee,1);const V=A(()=>{var pe,ot,dn,ar,hn,fn;return ve(j)?(dn=(ot=(pe=j).describe)===null||ot===void 0?void 0:ot.call(pe,O(u)).required)!==null&&dn!==void 0?dn:!1:ve(c==null?void 0:c.schema)&&(fn=(hn=(ar=c==null?void 0:c.schema).describe)===null||hn===void 0?void 0:hn.call(ar).required)!==null&&fn!==void 0?fn:!1}),X=r++,se=Bt({id:X,path:u,touched:!1,pending:!1,valid:!0,validated:!!(!((h=z[H])===null||h===void 0)&&h.length),required:V,initialValue:E,errors:gs([]),bails:(p=c==null?void 0:c.bails)!==null&&p!==void 0?p:!1,label:c==null?void 0:c.label,type:(c==null?void 0:c.type)||"default",value:x,multiple:!1,__flags:{pendingUnmount:{[X]:!1},pendingReset:!1},fieldsCount:1,validate:c==null?void 0:c.validate,dirty:A(()=>!te(M(x),M(E)))});return d.value.push(se),f.value[H]=se,_(),I.value[H]&&!z[H]&&Ie(()=>{je(H,{mode:"silent"})}),Ft(u)&&ze(u,pe=>{_();const ot=R(x.value);f.value[pe]=se,Ie(()=>{Re(a,pe,ot)})}),se}const we=mr(or,5),le=mr(or,5),re=An(async u=>await(u==="silent"?we():le()),(u,[c])=>{const h=me(w.errorBag.value),E=[...new Set([...me(u.results),...d.value.map(b=>b.path),...h])].sort().reduce((b,k)=>{var x;const H=k,ee=S(H)||ie(H),V=((x=u.results[H])===null||x===void 0?void 0:x.errors)||[],X=O(ee==null?void 0:ee.path)||H,se=yo({errors:V,valid:!V.length},b.results[X]);return b.results[X]=se,se.valid||(b.errors[X]=se.errors[0]),ee&&m.value[X]&&delete m.value[X],ee?(ee.valid=se.valid,c==="silent"||c==="validated-only"&&!ee.validated||y(ee,se.errors),b):(y(X,V),b)},{valid:u.valid,results:{},errors:{}});return u.values&&(E.values=u.values),E});function ce(u){d.value.forEach(u)}function S(u){const c=typeof u=="string"?at(u):u;return typeof c=="string"?f.value[c]:c}function ie(u){return d.value.filter(h=>u.startsWith(h.path)).reduce((h,p)=>h?p.path.length>h.path.length?p:h:p,void 0)}let he=[],Ce;function st(u){return he.push(u),Ce||(Ce=Ie(()=>{[...he].sort().reverse().forEach(h=>{hr(a,h)}),he=[],Ce=null})),Ce}function Ot(u){return function(h,p){return function(b){return b instanceof Event&&(b.preventDefault(),b.stopPropagation()),ce(k=>k.touched=!0),i.value=!0,o.value++,Ye().then(k=>{const x=R(a);if(k.valid&&typeof h=="function"){const H=R(F.value);let ee=u?H:x;return k.values&&(ee=k.values),h(ee,{evt:b,controlledValues:H,setErrors:T,setFieldError:y,setTouched:an,setFieldTouched:fe,setValues:Se,setFieldValue:L,resetForm:ln,resetField:ir})}!k.valid&&typeof p=="function"&&p({values:x,evt:b,errors:k.errors,results:k.results})}).then(k=>(i.value=!1,k),k=>{throw i.value=!1,k})}}}const Q=Ot(!1);Q.withControlled=Ot(!0);function on(u,c){const h=d.value.findIndex(E=>E.path===u),p=d.value[h];if(!(h===-1||!p)){if(Ie(()=>{je(u,{mode:"silent",warn:!1})}),p.multiple&&p.fieldsCount&&p.fieldsCount--,Array.isArray(p.id)){const E=p.id.indexOf(c);E>=0&&p.id.splice(E,1),delete p.__flags.pendingUnmount[c]}(!p.multiple||p.fieldsCount<=0)&&(d.value.splice(h,1),sr(u),_(),delete f.value[u])}}function v(u){me(f.value).forEach(c=>{c.startsWith(u)&&delete f.value[c]}),d.value=d.value.filter(c=>!c.path.startsWith(u)),Ie(()=>{_()})}const w={formId:n,values:a,controlledValues:F,errorBag:K,errors:I,schema:j,submitCount:o,meta:U,isSubmitting:i,isValidating:s,fieldArrays:l,keepValuesOnUnmount:J,validateSchema:M(j)?re:void 0,validate:Ye,setFieldError:y,validateField:je,setFieldValue:L,setValues:Se,setErrors:T,setFieldTouched:fe,setTouched:an,resetForm:ln,resetField:ir,handleSubmit:Q,useFieldModel:us,defineInputBinds:ds,defineComponentBinds:hs,defineField:un,stageInitialValue:ls,unsetInitialValue:sr,setFieldInitialValue:cn,createPathState:ye,getPathState:S,unsetPathValue:st,removePathState:on,initialValues:Y,getAllPathStates:()=>d.value,destroyPath:v,isFieldTouched:ss,isFieldDirty:os,isFieldValid:as};function L(u,c,h=!0){const p=R(c),E=typeof u=="string"?u:u.path;S(E)||ye(E),Re(a,E,p),h&&je(E)}function N(u,c=!0){me(a).forEach(h=>{delete a[h]}),me(u).forEach(h=>{L(h,u[h],!1)}),c&&Ye()}function Se(u,c=!0){mt(a,u),l.forEach(h=>h&&h.reset()),c&&Ye()}function be(u,c){const h=S(O(u))||ye(u);return A({get(){return h.value},set(p){var E;const b=O(u);L(b,p,(E=O(c))!==null&&E!==void 0?E:!1)}})}function fe(u,c){const h=S(u);h&&(h.touched=c)}function ss(u){const c=S(u);return c?c.touched:d.value.filter(h=>h.path.startsWith(u)).some(h=>h.touched)}function os(u){const c=S(u);return c?c.dirty:d.value.filter(h=>h.path.startsWith(u)).some(h=>h.dirty)}function as(u){const c=S(u);return c?c.valid:d.value.filter(h=>h.path.startsWith(u)).every(h=>h.valid)}function an(u){if(typeof u=="boolean"){ce(c=>{c.touched=u});return}me(u).forEach(c=>{fe(c,!!u[c])})}function ir(u,c){var h;const p=c&&"value"in c?c.value:oe(Y.value,u),E=S(u);E&&(E.__flags.pendingReset=!0),cn(u,R(p),!0),L(u,p,!1),fe(u,(h=c==null?void 0:c.touched)!==null&&h!==void 0?h:!1),y(u,(c==null?void 0:c.errors)||[]),Ie(()=>{E&&(E.__flags.pendingReset=!1)})}function ln(u,c){let h=R(u!=null&&u.values?u.values:P.value);h=c!=null&&c.force?h:mt(P.value,h),h=ve(j)&&G(j.cast)?j.cast(h):h,ne(h),ce(p=>{var E;p.__flags.pendingReset=!0,p.validated=!1,p.touched=((E=u==null?void 0:u.touched)===null||E===void 0?void 0:E[p.path])||!1,L(p.path,oe(h,p.path),!1),y(p.path,void 0)}),c!=null&&c.force?N(h,!1):Se(h,!1),T((u==null?void 0:u.errors)||{}),o.value=(u==null?void 0:u.submitCount)||0,Ie(()=>{Ye({mode:"silent"}),ce(p=>{p.__flags.pendingReset=!1})})}async function Ye(u){const c=(u==null?void 0:u.mode)||"force";if(c==="force"&&ce(b=>b.validated=!0),w.validateSchema)return w.validateSchema(c);s.value=!0;const h=await Promise.all(d.value.map(b=>b.validate?b.validate(u).then(k=>({key:b.path,valid:k.valid,errors:k.errors})):Promise.resolve({key:b.path,valid:!0,errors:[]})));s.value=!1;const p={},E={};for(const b of h)p[b.key]={valid:b.valid,errors:b.errors},b.errors.length&&(E[b.key]=b.errors[0]);return{valid:h.every(b=>b.valid),results:p,errors:E}}async function je(u,c){var h;const p=S(u);if(p&&(c==null?void 0:c.mode)!=="silent"&&(p.validated=!0),j){const{results:E}=await re((c==null?void 0:c.mode)||"validated-only");return E[u]||{errors:[],valid:!0}}return p!=null&&p.validate?p.validate(c):(!p&&(h=c==null?void 0:c.warn),Promise.resolve({errors:[],valid:!0}))}function sr(u){hr(Y.value,u)}function ls(u,c,h=!1){cn(u,c),Re(a,u,c),h&&!(t!=null&&t.initialValues)&&Re(P.value,u,R(c))}function cn(u,c,h=!1){Re(Y.value,u,R(c)),h&&Re(P.value,u,R(c))}async function or(){const u=M(j);if(!u)return{valid:!0,results:{},errors:{}};s.value=!0;const c=xt(u)||ve(u)?await Qs(u,a):await eo(u,a,{names:W.value,bailsMap:B.value});return s.value=!1,c}const cs=Q((u,{evt:c})=>{ri(c)&&c.target.submit()});Zr(()=>{if(t!=null&&t.initialErrors&&T(t.initialErrors),t!=null&&t.initialTouched&&an(t.initialTouched),t!=null&&t.validateOnMount){Ye();return}w.validateSchema&&w.validateSchema("silent")}),Ft(j)&&ze(j,()=>{var u;(u=w.validateSchema)===null||u===void 0||u.call(w,"validated-only")}),Qr(Zt,w);function un(u,c){const h=G(c)||c==null?void 0:c.label,p=S(O(u))||ye(u,{label:h}),E=()=>G(c)?c(kt(p,Rt)):c||{};function b(){var V;p.touched=!0,((V=E().validateOnBlur)!==null&&V!==void 0?V:$e().validateOnBlur)&&je(p.path)}function k(){var V;((V=E().validateOnInput)!==null&&V!==void 0?V:$e().validateOnInput)&&Ie(()=>{je(p.path)})}function x(){var V;((V=E().validateOnChange)!==null&&V!==void 0?V:$e().validateOnChange)&&Ie(()=>{je(p.path)})}const H=A(()=>{const V={onChange:x,onInput:k,onBlur:b};return G(c)?Object.assign(Object.assign({},V),c(kt(p,Rt)).props||{}):c!=null&&c.props?Object.assign(Object.assign({},V),c.props(kt(p,Rt))):V});return[be(u,()=>{var V,X,se;return(se=(V=E().validateOnModelUpdate)!==null&&V!==void 0?V:(X=$e())===null||X===void 0?void 0:X.validateOnModelUpdate)!==null&&se!==void 0?se:!0}),H]}function us(u){return Array.isArray(u)?u.map(c=>be(c,!0)):be(u)}function ds(u,c){const[h,p]=un(u,c);function E(x){p.value.onBlur(x)}function b(x){const H=Ht(x);L(O(u),H,!1),p.value.onInput(x)}function k(x){const H=Ht(x);L(O(u),H,!1),p.value.onChange(x)}return A(()=>Object.assign(Object.assign({},p.value),{onBlur:E,onInput:b,onChange:k,value:h.value}))}function hs(u,c){const[h,p]=un(u,c),E=S(O(u));function b(k){h.value=k}return A(()=>{const k=G(c)?c(kt(E,Rt)):c||{};return Object.assign({[k.model||"modelValue"]:h.value,[`onUpdate:${k.model||"modelValue"}`]:b},p.value)})}return Object.assign(Object.assign({},w),{values:ms(a),handleReset:()=>ln(),submitForm:cs})}function vo(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=A(()=>!te(e,M(n)));function o(){const a=t.value;return me(i).reduce((d,m)=>{const f=i[m];return d[m]=a[f](_=>_[m]),d},{})}const l=Bt(o());return ps(()=>{const a=o();l.touched=a.touched,l.valid=a.valid,l.pending=a.pending}),A(()=>Object.assign(Object.assign({initialValues:M(n)},l),{valid:l.valid&&!me(r.value).length,dirty:s.value}))}function _o(t,e,n){const r=di(n),i=ge(r),s=ge(R(r));function o(l,a=!1){i.value=mt(R(i.value)||{},R(l)),s.value=mt(R(s.value)||{},R(l)),a&&t.value.forEach(d=>{if(d.touched)return;const f=oe(i.value,d.path);Re(e,d.path,R(f))})}return{initialValues:i,originalInitialValues:s,setInitialValues:o}}function yo(t,e){return e?{valid:t.valid&&e.valid,errors:[...t.errors,...e.errors]}:t}const bo=Bn({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=He(t,"validationSchema"),r=He(t,"keepValues"),{errors:i,errorBag:s,values:o,meta:l,isSubmitting:a,isValidating:d,submitCount:m,controlledValues:f,validate:_,validateField:y,handleReset:T,resetForm:K,handleSubmit:I,setErrors:W,setFieldError:B,setFieldValue:z,setValues:J,setFieldTouched:Y,setTouched:P,resetField:ne}=go({validationSchema:n.value?n:void 0,initialValues:t.initialValues,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:r}),U=I((S,{evt:ie})=>{ri(ie)&&ie.target.submit()},t.onInvalidSubmit),F=t.onSubmit?I(t.onSubmit,t.onInvalidSubmit):U;function j(S){$n(S)&&S.preventDefault(),T(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function ye(S,ie){return I(typeof S=="function"&&!ie?S:ie,t.onInvalidSubmit)(S)}function we(){return R(o)}function le(){return R(l.value)}function re(){return R(i.value)}function ce(){return{meta:l.value,errors:i.value,errorBag:s.value,values:o,isSubmitting:a.value,isValidating:d.value,submitCount:m.value,controlledValues:f.value,validate:_,validateField:y,handleSubmit:ye,handleReset:T,submitForm:U,setErrors:W,setFieldError:B,setFieldValue:z,setValues:J,setFieldTouched:Y,setTouched:P,resetForm:K,resetField:ne,getValues:we,getMeta:le,getErrors:re}}return e.expose({setFieldError:B,setErrors:W,setFieldValue:z,setValues:J,setFieldTouched:Y,setTouched:P,resetForm:K,validate:_,validateField:y,resetField:ne,getValues:we,getMeta:le,getErrors:re,values:o,meta:l,errors:i}),function(){const ie=t.as==="form"?t.as:t.as?jn(t.as):null,he=zn(ie,e,ce);return ie?Ut(ie,Object.assign(Object.assign(Object.assign({},ie==="form"?{novalidate:!0}:{}),e.attrs),{onSubmit:F,onReset:j}),he):he}}}),Io=bo,Eo=Bn({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Xr(Zt,void 0),r=A(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?jn(t.as):t.as,o=zn(s,e,i),l=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o!=null&&o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Ut(s||"span",l,r.value):Ut(s,l,o)}}}),wo=Eo;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function So(t,e){return Array.isArray(t)?t[0]:t[e]}function hi(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const _r=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Pn=t=>hi(t)?!0:Array.isArray(t)?t.every(e=>_r.test(String(e))):_r.test(String(t)),fi=(t,e)=>{if(hi(t))return!0;let n=So(e,"regex");return typeof n=="string"&&(n=new RegExp(n)),Array.isArray(t)?t.every(r=>fi(r,{regex:n})):n.test(String(t))};function To(t){return t==null}function Oo(t){return Array.isArray(t)&&t.length===0}const Ao=t=>To(t)||Oo(t)||t===!1?!1:!!String(t).trim().length;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function yr(t){return typeof t=="function"}function Co(t){return typeof t=="object"&&t!==null}function ko(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function br(t){if(!Co(t)||ko(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function mi(t,e){return Object.keys(e).forEach(n=>{if(br(e[n])&&br(t[n])){t[n]||(t[n]={}),mi(t[n],e[n]);return}t[n]=e[n]}),t}function Ir(t,e){return t.replace(/(\d:)?{([^}]+)}/g,function(n,r,i){if(!r||!e.params)return i in e?e[i]:e.params&&i in e.params?e.params[i]:`{${i}}`;if(!Array.isArray(e.params))return i in e.params?e.params[i]:`{${i}}`;const s=Number(r.replace(":",""));return s in e.params?e.params[s]:`${r}{${i}}`})}class Ro{constructor(e,n){this.container={},this.locale=e,this.merge(n)}resolve(e){return this.format(this.locale,e)}getLocaleDefault(e,n){var r,i,s,o,l;return((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[n])===null||s===void 0?void 0:s._default)||((l=(o=this.container[e])===null||o===void 0?void 0:o.messages)===null||l===void 0?void 0:l._default)}resolveLabel(e,n,r){var i,s,o,l;return r?((s=(i=this.container[e])===null||i===void 0?void 0:i.names)===null||s===void 0?void 0:s[r])||r:((l=(o=this.container[e])===null||o===void 0?void 0:o.names)===null||l===void 0?void 0:l[n])||n}format(e,n){var r,i,s,o,l;let a;const{rule:d,form:m,label:f,name:_}=n,y=this.resolveLabel(e,_,f);return d?(a=((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[_])===null||s===void 0?void 0:s[d.name])||((l=(o=this.container[e])===null||o===void 0?void 0:o.messages)===null||l===void 0?void 0:l[d.name]),a||(a=this.getLocaleDefault(e,_)||`${y} is not valid`),yr(a)?a(n):Ir(a,Object.assign(Object.assign({},m),{field:y,params:d.params}))):(a=this.getLocaleDefault(e,_)||`${y} is not valid`,yr(a)?a(n):Ir(a,Object.assign(Object.assign({},m),{field:y})))}merge(e){mi(this.container,e)}}const lt=new Ro("en",{});function Po(t,e){const n=r=>lt.resolve(r);return typeof t=="string"?(lt.locale=t,e&&lt.merge({[t]:e}),n):(lt.merge(t),n)}function No(t){lt.locale=t}const Do="zh_TW",Lo={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},Mo={code:Do,messages:Lo},Vo="ar",Uo={alpha:"{field} يجب ان يحتوي على حروف فقط",alpha_num:"{field} قد يحتوي فقط على حروف وارقام",alpha_dash:"{field} قد يحتوي على حروف او الرموز - و _",alpha_spaces:"{field} قد يحتوي فقط على حروف ومسافات",between:"قيمة {field} يجب ان تكون ما بين 0:{min} و 1:{max}",confirmed:"{field} لا يماثل التأكيد",digits:"{field} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن 0:{length} رقم",dimensions:"{field} يجب ان تكون بمقاس 0:{width} بكسل في 1:{height} بكسل",email:"{field} يجب ان يكون بريدا اليكتروني صحيح",not_one_of:"الحقل {field} غير صحيح",ext:"نوع ملف {field} غير صحيح",image:"{field} يجب ان تكون صورة",integer:"الحقل {field} يجب ان يكون عدداً صحيحاً",length:"حقل {field} يجب الا يزيد عن 0:{length}",max_value:"قيمة الحقل {field} يجب ان تكون اصغر من 0:{min} او تساويها",max:"الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأكثر",mimes:"نوع ملف {field} غير صحيح",min_value:"قيمة الحقل {field} يجب ان تكون اكبر من 0:{min} او تساويها",min:"الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأقل",numeric:"{field} يمكن ان يحتوي فقط على ارقام",one_of:"الحقل {field} يجب ان يكون قيمة صحيحة",regex:"الحقل {field} غير صحيح",required:"{field} مطلوب",required_if:"حقل {field} مطلوب",size:"{field} يجب ان يكون اقل من 0:{size} كيلوبايت",url:"حقل {field} ليس رابطاً صحيحاً"},Fo={code:Vo,messages:Uo};var Er={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bo=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,d=a?t[i+2]:0,m=s>>2,f=(s&3)<<4|l>>4;let _=(l&15)<<2|d>>6,y=d&63;a||(y=64,o||(_=64)),r.push(n[m],n[f],n[_],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||f==null)throw new jo;const _=s<<2|l>>4;if(r.push(_),d!==64){const y=l<<4&240|d>>2;if(r.push(y),f!==64){const T=d<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xo=function(t){const e=pi(t);return gi.encodeByteArray(e,!0)},vi=function(t){return xo(t).replace(/\./g,"")},_i=function(t){try{return gi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=()=>Ho().__FIREBASE_DEFAULTS__,Wo=()=>{if(typeof process>"u"||typeof Er>"u")return;const t=Er.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_i(t[1]);return e&&JSON.parse(e)},qn=()=>{try{return $o()||Wo()||zo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qo=t=>{var e,n;return(n=(e=qn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yi=()=>{var t;return(t=qn())===null||t===void 0?void 0:t.config},bi=t=>{var e;return(e=qn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ko(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Jo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xo(){const t=Z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Qo(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="FirebaseError";class Ue extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ea,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,It.prototype.create)}}class It{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ta(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,l,r)}}function ta(t,e){return t.replace(na,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const na=/\{\$([^}]+)}/g;function ra(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $t(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wr(s)&&wr(o)){if(!$t(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ct(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ut(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ia(t,e){const n=new sa(t,e);return n.subscribe.bind(n)}class sa{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oa(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vn),i.error===void 0&&(i.error=vn),i.complete===void 0&&(i.complete=vn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oa(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Go;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ca(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:la(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function la(t){return t===xe?void 0:t}function ca(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));const da={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},ha=D.INFO,fa={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},ma=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fa[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ii{constructor(e){this.name=e,this._logLevel=ha,this._logHandler=ma,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const pa=(t,e)=>e.some(n=>t instanceof n);let Sr,Tr;function ga(){return Sr||(Sr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function va(){return Tr||(Tr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ei=new WeakMap,Nn=new WeakMap,wi=new WeakMap,_n=new WeakMap,Gn=new WeakMap;function _a(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Me(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ei.set(n,t)}).catch(()=>{}),Gn.set(e,t),e}function ya(t){if(Nn.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nn.set(t,e)}let Dn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ba(t){Dn=t(Dn)}function Ia(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yn(this),e,...n);return wi.set(r,e.sort?e.sort():[e]),Me(r)}:va().includes(t)?function(...e){return t.apply(yn(this),e),Me(Ei.get(this))}:function(...e){return Me(t.apply(yn(this),e))}}function Ea(t){return typeof t=="function"?Ia(t):(t instanceof IDBTransaction&&ya(t),pa(t,ga())?new Proxy(t,Dn):t)}function Me(t){if(t instanceof IDBRequest)return _a(t);if(_n.has(t))return _n.get(t);const e=Ea(t);return e!==t&&(_n.set(t,e),Gn.set(e,t)),e}const yn=t=>Gn.get(t);function wa(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Me(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Me(o.result),a.oldVersion,a.newVersion,Me(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Sa=["get","getKey","getAll","getAllKeys","count"],Ta=["put","add","delete","clear"],bn=new Map;function Or(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bn.get(e))return bn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ta.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sa.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let d=a.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&a.done]))[0]};return bn.set(e,s),s}ba(t=>({...t,get:(e,n,r)=>Or(e,n)||t.get(e,n,r),has:(e,n)=>!!Or(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Aa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Aa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ln="@firebase/app",Ar="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Ii("@firebase/app"),Ca="@firebase/app-compat",ka="@firebase/analytics-compat",Ra="@firebase/analytics",Pa="@firebase/app-check-compat",Na="@firebase/app-check",Da="@firebase/auth",La="@firebase/auth-compat",Ma="@firebase/database",Va="@firebase/database-compat",Ua="@firebase/functions",Fa="@firebase/functions-compat",Ba="@firebase/installations",ja="@firebase/installations-compat",xa="@firebase/messaging",Ha="@firebase/messaging-compat",$a="@firebase/performance",Wa="@firebase/performance-compat",za="@firebase/remote-config",qa="@firebase/remote-config-compat",Ga="@firebase/storage",Ka="@firebase/storage-compat",Ja="@firebase/firestore",Ya="@firebase/firestore-compat",Xa="firebase",Za="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]",Qa={[Ln]:"fire-core",[Ca]:"fire-core-compat",[Ra]:"fire-analytics",[ka]:"fire-analytics-compat",[Na]:"fire-app-check",[Pa]:"fire-app-check-compat",[Da]:"fire-auth",[La]:"fire-auth-compat",[Ma]:"fire-rtdb",[Va]:"fire-rtdb-compat",[Ua]:"fire-fn",[Fa]:"fire-fn-compat",[Ba]:"fire-iid",[ja]:"fire-iid-compat",[xa]:"fire-fcm",[Ha]:"fire-fcm-compat",[$a]:"fire-perf",[Wa]:"fire-perf-compat",[za]:"fire-rc",[qa]:"fire-rc-compat",[Ga]:"fire-gcs",[Ka]:"fire-gcs-compat",[Ja]:"fire-fst",[Ya]:"fire-fst-compat","fire-js":"fire-js",[Xa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Map,Vn=new Map;function el(t,e){try{t.container.addComponent(e)}catch(n){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pt(t){const e=t.name;if(Vn.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;Vn.set(e,t);for(const n of Wt.values())el(n,t);return!0}function Si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new It("app","Firebase",tl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=Za;function Nt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ve.create("bad-app-name",{appName:String(i)});if(n||(n=yi()),!n)throw Ve.create("no-options");const s=Wt.get(i);if(s){if($t(n,s.options)&&$t(r,s.config))return s;throw Ve.create("duplicate-app",{appName:i})}const o=new ua(i);for(const a of Vn.values())o.addComponent(a);const l=new nl(n,r,o);return Wt.set(i,l),l}function rl(t=Mn){const e=Wt.get(t);if(!e&&t===Mn&&yi())return Nt();if(!e)throw Ve.create("no-app",{appName:t});return e}function Ze(t,e,n){var r;let i=(r=Qa[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(l.join(" "));return}pt(new tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="firebase-heartbeat-database",sl=1,gt="firebase-heartbeat-store";let In=null;function Ti(){return In||(In=wa(il,sl,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gt)}}}).catch(t=>{throw Ve.create("idb-open",{originalErrorMessage:t.message})})),In}async function ol(t){try{return await(await Ti()).transaction(gt).objectStore(gt).get(Oi(t))}catch(e){if(e instanceof Ue)Ge.warn(e.message);else{const n=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ge.warn(n.message)}}}async function Cr(t,e){try{const r=(await Ti()).transaction(gt,"readwrite");await r.objectStore(gt).put(e,Oi(t)),await r.done}catch(n){if(n instanceof Ue)Ge.warn(n.message);else{const r=Ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ge.warn(r.message)}}}function Oi(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=1024,ll=30*24*60*60*1e3;class cl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ll}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kr(),{heartbeatsToSend:r,unsentEntries:i}=ul(this._heartbeatsCache.heartbeats),s=vi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kr(){return new Date().toISOString().substring(0,10)}function ul(t,e=al){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zo()?Qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ol(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rr(t){return vi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){pt(new tt("platform-logger",e=>new Oa(e),"PRIVATE")),pt(new tt("heartbeat",e=>new cl(e),"PRIVATE")),Ze(Ln,Ar,t),Ze(Ln,Ar,"esm2017"),Ze("fire-js","")}hl("");var fl="firebase",ml="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(fl,ml,"app");function Kn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ai(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pl=Ai,Ci=new It("auth","Firebase",Ai());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Ii("@firebase/auth");function gl(t,...e){zt.logLevel<=D.WARN&&zt.warn(`Auth (${Et}): ${t}`,...e)}function Dt(t,...e){zt.logLevel<=D.ERROR&&zt.error(`Auth (${Et}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,...e){throw Jn(t,...e)}function ue(t,...e){return Jn(t,...e)}function vl(t,e,n){const r=Object.assign(Object.assign({},pl()),{[e]:n});return new It("auth","Firebase",r).create(e,{appName:t.name})}function Jn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ci.create(t,...e)}function g(t,e,...n){if(!t)throw Jn(e,...n)}function Te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dt(e),new Error(e)}function Ae(t,e){t||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ki(){return Pr()==="http:"||Pr()==="https:"}function Pr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ki()||Jo()||"connection"in navigator)?navigator.onLine:!0}function yl(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ae(n>e,"Short delay should be less than long delay!"),this.isMobile=Ko()||Yo()}get(){return _l()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new wt(3e4,6e4);function ae(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function de(t,e,n,r,i={}){return Pi(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=rt(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ri.fetch()(Ni(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Pi(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bl),e);try{const i=new wl(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,d]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw dt(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw dt(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw dt(t,"user-disabled",o);const m=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw vl(t,m,d);_e(t,m)}}catch(i){if(i instanceof Ue)throw i;_e(t,"network-request-failed",{message:String(i)})}}async function Je(t,e,n,r,i={}){const s=await de(t,e,n,r,i);return"mfaPendingCredential"in s&&_e(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ni(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yn(t.config,i):`${t.config.apiScheme}://${i}`}function El(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ue(this.auth,"network-request-failed")),Il.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ue(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){return t!==void 0&&t.getResponse!==void 0}function Dr(t){return t!==void 0&&t.enterprise!==void 0}class Sl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return El(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t){return(await de(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ol(t,e){return de(t,"GET","/v2/recaptchaConfig",ae(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e){return de(t,"POST","/v1/accounts:delete",e)}async function Cl(t,e){return de(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kl(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Xn(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ht(En(i.auth_time)),issuedAtTime:ht(En(i.iat)),expirationTime:ht(En(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function En(t){return Number(t)*1e3}function Xn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dt("JWT malformed, contained fewer than 3 sections"),null;try{const i=_i(n);return i?JSON.parse(i):(Dt("Failed to decode base64 JWT payload"),null)}catch(i){return Dt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rl(t){const e=Xn(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ue&&Pl(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Pl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ht(this.lastLoginAt),this.creationTime=ht(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vt(t,Cl(n,{idToken:r}));g(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ml(s.providerUserInfo):[],l=Ll(t.providerData,o),a=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),m=a?d:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Di(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,f)}async function Dl(t){const e=Fe(t);await Gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ll(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ml(t){return t.map(e=>{var{providerId:n}=e,r=Kn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t,e){const n=await Pi(t,{},async()=>{const r=rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ni(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ri.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ul(t,e){return de(t,"POST","/v2/accounts:revokeToken",ae(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Vl(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _t;return r&&(g(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(g(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(g(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _t,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class We{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Kn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Di(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vt(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kl(this,e)}reload(){return Dl(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new We(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vt(this,Al(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,d,m;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,K=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,W=(d=n.createdAt)!==null&&d!==void 0?d:void 0,B=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:z,emailVerified:J,isAnonymous:Y,providerData:P,stsTokenManager:ne}=n;g(z&&ne,e,"internal-error");const U=_t.fromJSON(this.name,ne);g(typeof z=="string",e,"internal-error"),ke(f,e.name),ke(_,e.name),g(typeof J=="boolean",e,"internal-error"),g(typeof Y=="boolean",e,"internal-error"),ke(y,e.name),ke(T,e.name),ke(K,e.name),ke(I,e.name),ke(W,e.name),ke(B,e.name);const F=new We({uid:z,auth:e,email:_,emailVerified:J,displayName:f,isAnonymous:Y,photoURL:T,phoneNumber:y,tenantId:K,stsTokenManager:U,createdAt:W,lastLoginAt:B});return P&&Array.isArray(P)&&(F.providerData=P.map(j=>Object.assign({},j))),I&&(F._redirectEventId=I),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new _t;i.updateFromServerResponse(n);const s=new We({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gt(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map;function Oe(t){Ae(t instanceof Function,"Expected a class definition");let e=Lr.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Li.type="NONE";const Mr=Li;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e,n){return`firebase:${t}:${e}:${n}`}class Qe{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Lt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Lt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?We._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qe(Oe(Mr),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Oe(Mr);const o=Lt(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(o);if(m){const f=We._fromJSON(e,m);d!==s&&(l=f),s=d;break}}catch{}const a=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Qe(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Qe(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ui(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bi(e))return"Blackberry";if(ji(e))return"Webos";if(Zn(e))return"Safari";if((e.includes("chrome/")||Vi(e))&&!e.includes("edge/"))return"Chrome";if(Fi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mi(t=Z()){return/firefox\//i.test(t)}function Zn(t=Z()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vi(t=Z()){return/crios\//i.test(t)}function Ui(t=Z()){return/iemobile/i.test(t)}function Fi(t=Z()){return/android/i.test(t)}function Bi(t=Z()){return/blackberry/i.test(t)}function ji(t=Z()){return/webos/i.test(t)}function en(t=Z()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fl(t=Z()){var e;return en(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bl(){return Xo()&&document.documentMode===10}function xi(t=Z()){return en(t)||Fi(t)||ji(t)||Bi(t)||/windows phone/i.test(t)||Ui(t)}function jl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e=[]){let n;switch(t){case"Browser":n=Vr(Z());break;case"Worker":n=`${Vr(Z())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Et}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t,e={}){return de(t,"GET","/v2/passwordPolicy",ae(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=6;class Wl{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$l,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ur(this),this.idTokenSubscription=new Ur(this),this.beforeStateQueue=new xl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ci,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Oe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hl(this),n=new Wl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new It("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ul(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Oe(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await Qe.create(this,[Oe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gl(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Be(t){return Fe(t)}class Ur{constructor(e){this.auth=e,this.observer=null,this.addObserver=ia(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qn(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ue("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ql().appendChild(r)})}function $i(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Gl="https://www.google.com/recaptcha/enterprise.js?render=",Kl="recaptcha-enterprise",Jl="NO_RECAPTCHA";class Yl{constructor(e){this.type=Kl,this.auth=Be(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ol(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Sl(a);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Dr(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Jl)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Dr(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Qn(Gl+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Fr(t,e,n,r=!1){const i=new Yl(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Un(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Fr(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fr(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){const n=Si(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($t(s,e??{}))return i;_e(i,"already-initialized")}return n.initialize({options:e})}function Zl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Oe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ql(t,e,n){const r=Be(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Wi(e),{host:o,port:l}=ec(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tc()}function Wi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ec(t){const e=Wi(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Br(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Br(o)}}}function Br(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,n){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}async function nc(t,e){return de(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t,e){return Je(t,"POST","/v1/accounts:signInWithPassword",ae(t,e))}async function ic(t,e){return de(t,"POST","/v1/accounts:sendOobCode",ae(t,e))}async function sc(t,e){return ic(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(t,e){return Je(t,"POST","/v1/accounts:signInWithEmailLink",ae(t,e))}async function ac(t,e){return Je(t,"POST","/v1/accounts:signInWithEmailLink",ae(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends tn{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,n,"signInWithPassword",rc);case"emailLink":return oc(e,{email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,r,"signUpPassword",nc);case"emailLink":return ac(e,{idToken:n,email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e){return Je(t,"POST","/v1/accounts:signInWithIdp",ae(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="http://localhost";class Ke extends tn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Kn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ke(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return et(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,et(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,et(e,n)}buildRequest(){const e={requestUri:lc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(t,e){return de(t,"POST","/v1/accounts:sendVerificationCode",ae(t,e))}async function uc(t,e){return Je(t,"POST","/v1/accounts:signInWithPhoneNumber",ae(t,e))}async function dc(t,e){const n=await Je(t,"POST","/v1/accounts:signInWithPhoneNumber",ae(t,e));if(n.temporaryProof)throw dt(t,"account-exists-with-different-credential",n);return n}const hc={USER_NOT_FOUND:"user-not-found"};async function fc(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Je(t,"POST","/v1/accounts:signInWithPhoneNumber",ae(t,n),hc)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends tn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ft({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ft({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return uc(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return dc(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return fc(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ft({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pc(t){const e=ct(ut(t)).link,n=e?ct(ut(e)).deep_link_id:null,r=ct(ut(t)).deep_link_id;return(r?ct(ut(r)).link:null)||r||n||e||t}class nn{constructor(e){var n,r,i,s,o,l;const a=ct(ut(e)),d=(n=a.apiKey)!==null&&n!==void 0?n:null,m=(r=a.oobCode)!==null&&r!==void 0?r:null,f=mc((i=a.mode)!==null&&i!==void 0?i:null);g(d&&m&&f,"argument-error"),this.apiKey=d,this.operation=f,this.code=m,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=pc(e);try{return new nn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.providerId=it.PROVIDER_ID}static credential(e,n){return yt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nn.parseLink(n);return g(r,"argument-error"),yt._fromEmailAndCode(e,r.code,r.tenantId)}}it.PROVIDER_ID="password";it.EMAIL_PASSWORD_SIGN_IN_METHOD="password";it.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends St{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ke._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ne.credential(n,r)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends St{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends St{constructor(){super("twitter.com")}static credential(e,n){return Ke._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Le.credential(n,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await We._fromIdTokenResponse(e,r,i),o=jr(r);return new nt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jr(r);return new nt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ue{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kt(e,n,r,i)}}function qi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kt._fromErrorAndOperation(t,s,e,r):s})}async function gc(t,e,n=!1){const r=await vt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await vt(t,qi(r,i,e,t),n);g(s.idToken,r,"internal-error");const o=Xn(s.idToken);g(o,r,"internal-error");const{sub:l}=o;return g(t.uid===l,r,"user-mismatch"),nt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_e(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e,n=!1){const r="signIn",i=await qi(t,r,e),s=await nt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ki(t,e){return Gi(Be(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e,n){var r;g(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),g(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t,e,n){const r=Be(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){g(l.handleCodeInApp,r,"argument-error"),l&&_c(r,o,l)}s(i,n),await Un(r,i,"getOobCode",sc)}function xr(t,e){const n=nn.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function bc(t,e,n){const r=Fe(t),i=it.credentialWithLink(e,n||qt());return g(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ki(r,i)}function Ic(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function Ec(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:start",ae(t,e))}const Jt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jt,"1"),this.storage.removeItem(Jt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){const t=Z();return Zn(t)||en(t)}const Tc=1e3,Oc=10;class Yi extends Ji{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sc()&&jl(),this.fallbackToPolling=xi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Bl()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Oc):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Tc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yi.type="LOCAL";const Ac=Yi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ji{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xi.type="SESSION";const Zi=Xi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),a=await Cc(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const d=er("",20);i.port1.start();const m=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const _=f;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(m),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return window}function Rc(t){$().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return typeof $().WorkerGlobalScope<"u"&&typeof $().importScripts=="function"}async function Pc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dc(){return tr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="firebaseLocalStorageDb",Lc=1,Yt="firebaseLocalStorage",es="fbase_key";class Tt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sn(t,e){return t.transaction([Yt],e?"readwrite":"readonly").objectStore(Yt)}function Mc(){const t=indexedDB.deleteDatabase(Qi);return new Tt(t).toPromise()}function Fn(){const t=indexedDB.open(Qi,Lc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yt,{keyPath:es})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yt)?e(r):(r.close(),await Mc(),e(await Fn()))})})}async function Hr(t,e,n){const r=sn(t,!0).put({[es]:e,value:n});return new Tt(r).toPromise()}async function Vc(t,e){const n=sn(t,!1).get(e),r=await new Tt(n).toPromise();return r===void 0?null:r.value}function $r(t,e){const n=sn(t,!0).delete(e);return new Tt(n).toPromise()}const Uc=800,Fc=3;class ts{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rn._getInstance(Dc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pc(),!this.activeServiceWorker)return;this.sender=new kc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fn();return await Hr(e,Jt,"1"),await $r(e,Jt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vc(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$r(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sn(i,!1).getAll();return new Tt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ts.type="LOCAL";const Bc=ts;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e){return de(t,"POST","/v2/accounts/mfaSignIn:start",ae(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=500,Hc=6e4,Pt=1e12;class $c{constructor(e){this.auth=e,this.counter=Pt,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Wc(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Pt;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Pt;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Pt;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Wc{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;g(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=zc(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Hc)},xc))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function zc(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=$i("rcb"),qc=new wt(3e4,6e4),Gc="https://www.google.com/recaptcha/api.js?";class Kc{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return g(Jc(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Nr($().grecaptcha)?Promise.resolve($().grecaptcha):new Promise((r,i)=>{const s=$().setTimeout(()=>{i(ue(e,"network-request-failed"))},qc.get());$()[wn]=()=>{$().clearTimeout(s),delete $()[wn];const l=$().grecaptcha;if(!l||!Nr(l)){i(ue(e,"internal-error"));return}const a=l.render;l.render=(d,m)=>{const f=a(d,m);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${Gc}?${rt({onload:wn,render:"explicit",hl:n})}`;Qn(o).catch(()=>{clearTimeout(s),i(ue(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Jc(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Yc{async load(e){return new $c(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="recaptcha",Xc={theme:"light",type:"image"};class Zc{constructor(e,n,r=Object.assign({},Xc)){this.parameters=r,this.type=ns,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Be(e),this.isInvisible=this.parameters.size==="invisible",g(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;g(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Yc:new Kc,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){g(!this.parameters.sitekey,this.auth,"argument-error"),g(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),g(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){g(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){g(ki()&&!tr(),this.auth,"internal-error"),await Qc(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Tl(this.auth);g(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return g(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Qc(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ft._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function tu(t,e,n){const r=Be(t),i=await nu(r,e,Fe(n));return new eu(i,s=>Ki(r,s))}async function nu(t,e,n){var r;const i=await n.verify();try{g(typeof i=="string",t,"argument-error"),g(n.type===ns,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return g(o.type==="enroll",t,"internal-error"),(await wc(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{g(o.type==="signin",t,"internal-error");const l=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return g(l,t,"missing-multi-factor-info"),(await jc(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await cc(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){return e?Oe(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends tn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return et(e,this._buildIdpRequest())}_linkToIdToken(e,n){return et(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return et(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iu(t){return Gi(t.auth,new nr(t),t.bypassAuthState)}function su(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),vc(n,new nr(t),t.bypassAuthState)}async function ou(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),gc(n,new nr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iu;case"linkViaPopup":case"linkViaRedirect":return ou;case"reauthViaPopup":case"reauthViaRedirect":return su;default:_e(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new wt(2e3,1e4);class Xe extends rs{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,au.get())};e()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="pendingRedirect",Mt=new Map;class cu extends rs{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mt.get(this.auth._key());if(!e){try{const r=await uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mt.set(this.auth._key(),e)}return this.bypassAuthState||Mt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uu(t,e){const n=fu(e),r=hu(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function du(t,e){Mt.set(t._key(),e)}function hu(t){return Oe(t._redirectPersistence)}function fu(t){return Lt(lu,t.config.apiKey,t.name)}async function mu(t,e,n=!1){const r=Be(t),i=ru(r,e),o=await new cu(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=10*60*1e3;class gu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!is(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ue(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wr(e))}saveEventToCache(e){this.cachedEventUids.add(Wr(e)),this.lastProcessedEventTime=Date.now()}}function Wr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function is({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return is(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t,e={}){return de(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bu=/^https?/;async function Iu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _u(t);for(const n of e)try{if(Eu(n))return}catch{}_e(t,"unauthorized-domain")}function Eu(t){const e=qt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bu.test(n))return!1;if(yu.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new wt(3e4,6e4);function zr(){const t=$().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Su(t){return new Promise((e,n)=>{var r,i,s;function o(){zr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zr(),n(ue(t,"network-request-failed"))},timeout:wu.get()})}if(!((i=(r=$().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$().gapi)===null||s===void 0)&&s.load)o();else{const l=$i("iframefcb");return $()[l]=()=>{gapi.load?o():n(ue(t,"network-request-failed"))},Qn(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Vt=null,e})}let Vt=null;function Tu(t){return Vt=Vt||Su(t),Vt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new wt(5e3,15e3),Au="__/auth/iframe",Cu="emulator/auth/iframe",ku={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ru=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pu(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yn(e,Cu):`https://${t.config.authDomain}/${Au}`,r={apiKey:e.apiKey,appName:t.name,v:Et},i=Ru.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rt(r).slice(1)}`}async function Nu(t){const e=await Tu(t),n=$().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Pu(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ku,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ue(t,"network-request-failed"),l=$().setTimeout(()=>{s(o)},Ou.get());function a(){$().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lu=500,Mu=600,Vu="_blank",Uu="http://localhost";class qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fu(t,e,n,r=Lu,i=Mu){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Du),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Z().toLowerCase();n&&(l=Vi(d)?Vu:n),Mi(d)&&(e=e||Uu,a.scrollbars="yes");const m=Object.entries(a).reduce((_,[y,T])=>`${_}${y}=${T},`,"");if(Fl(d)&&l!=="_self")return Bu(e||"",l),new qr(null);const f=window.open(e||"",l,m);g(f,t,"popup-blocked");try{f.focus()}catch{}return new qr(f)}function Bu(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="__/auth/handler",xu="emulator/auth/handler",Hu=encodeURIComponent("fac");async function Gr(t,e,n,r,i,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Et,eventId:i};if(e instanceof zi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ra(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,f]of Object.entries(s||{}))o[m]=f}if(e instanceof St){const m=e.getScopes().filter(f=>f!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const a=await t._getAppCheckToken(),d=a?`#${Hu}=${encodeURIComponent(a)}`:"";return`${$u(t)}?${rt(l).slice(1)}${d}`}function $u({config:t}){return t.emulator?Yn(t,xu):`https://${t.authDomain}/${ju}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="webStorageSupport";class Wu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zi,this._completeRedirectFn=mu,this._overrideRedirectResult=du}async _openPopup(e,n,r,i){var s;Ae((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gr(e,n,r,qt(),i);return Fu(e,o,er())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gr(e,n,r,qt(),i);return Rc(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ae(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Nu(e),r=new gu(e);return n.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sn,{type:Sn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sn];o!==void 0&&n(!!o),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Iu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xi()||Zn()||en()}}const zu=Wu;var Kr="@firebase/auth",Jr="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ku(t){pt(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hi(t)},d=new zl(r,i,s,a);return Zl(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pt(new tt("auth-internal",e=>{const n=Be(e.getProvider("auth").getImmediate());return(r=>new qu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Kr,Jr,Gu(t)),Ze(Kr,Jr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=5*60,Yu=bi("authIdTokenMaxAge")||Ju;let Yr=null;const Xu=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yu)return;const i=n==null?void 0:n.token;Yr!==i&&(Yr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tn(t=rl()){const e=Si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xl(t,{popupRedirectResolver:zu,persistence:[Bc,Ac,Zi]}),r=bi("authTokenSyncURL");if(r){const s=Xu(r);Ec(n,s,()=>s(n.currentUser)),Ic(n,o=>s(o))}const i=qo("auth");return i&&Ql(n,`http://${i}`),n}Ku("Browser");Hn("email",Pn);Hn("required",Ao);Hn("regex",fi);No("zh_TW");Gs({generateMessage:Po({zh_TW:Mo,ar:Fo})});const Zu={data(){return{firstName:"",lastName:"",email:"tsai19911026@gmail.com",city:"",pwd:"",phoneNum:"+8869",phoneNumValidate:!1,validateNum:"",agree:!1,auth:{}}},components:{VForm:Io,VField:mo,ErrorMessage:wo},methods:{onSubmit(t){console.log(JSON.stringify(t,null,2))},isRequired(t){return t?!0:"This field is required"},isPwd(t){return new RegExp("^[A-Z][\\w]{7,}$").test(t)?!0:"密碼首字需為大寫英文，英數混合8碼，例：A1234567"},checkEmail(){return!!new RegExp("^[\\w]+@[\\w]+\\.[\\w]+(\\.[\\w]+)?$").test(this.email)},isPhoneNum(t){return new RegExp("^[+]8869[0-9]{8}$").test(t)?!0:"手機號碼格式為：+886912345678"},checkPhoneNum(){return!!new RegExp("^[+]8869[0-9]{8}$").test(this.phoneNum)},isValidateNum(){return!!new RegExp("^[0-9]{6}$").test(this.validateNum)},isChecked(t){return t?!0:"請確認是否同意"},callback(t){console.log(t);const e=_s(t.credential);console.log("Handle the userData",e)},checkCB(t){this.agree=t.target.checked},firebaseSignInWithPhoneNumber(){const t=Nt(mn),e=Tn(t);e.languageCode="zh-TW",window.recaptchaVerifier=new Zc(e,"sign-in-button",{size:"invisible",callback:i=>{console.log(i),onSignInSubmit()}});const n=this.phoneNum,r=window.recaptchaVerifier;tu(e,n,r).then(i=>{window.confirmationResult=i}).catch(i=>{console.log(i)})},firebaseConfirmationResult(){const t=this.validateNum;confirmationResult.confirm(t).then(e=>{const n=e.user;console.log(n),this.phoneNumValidate=!0;const r=document.querySelector(".launchCode-phone");r.outerHTML='<i class="fa-regular fa-circle-check fa-beat position-absolute launchCode launchCode-phone" style="color: #669c35;right: 15px;top: calc(50% - 7.5px);"></i>'}).catch(e=>{console.log(e)})},firebaseSendSignInLinkToEmail(){const t={url:`http://localhost:5173/veeValidate-googleLogin-fireBase-create-vite-vue3/vee-validate/?email=${this.email}`,handleCodeInApp:!0};console.log("click"),Nt(mn);const e=Tn();yc(e,this.email,t).then(()=>{console.log(Pn),window.localStorage.setItem("emailForSignIn",Pn)}).catch(n=>{const r=n.code,i=n.message;console.log(r,"/",i)})},firebaseIsSignInWithEmailLink(){console.log("click");const t=Nt(mn),e=Tn(t);if(console.log(window.location.href),console.log(xr(e,window.location.href)),xr(e,window.location.href)){let n=this.email;console.log(n),n||(n=window.prompt("Please provide your email for confirmation")),bc(e,n,window.location.href).then(r=>{console.log(r),window.localStorage.removeItem("emailForSignIn")}).catch(r=>{console.log(r)})}console.log("fuc finished")}},created(){},mounted(){}},Ee=t=>(Ss("data-v-6694bfe6"),t=t(),Ts(),t),Qu=Ee(()=>C("div",{class:"vee-validate d-flex align-items-center"},[C("h1",null,"This is a vee-validate page")],-1)),ed={class:"container"},td={class:"form-floating col-md-4"},nd=Ee(()=>C("label",{for:"firstName",class:"form-label"},"First name",-1)),rd={class:"form-floating col-md-4"},id=Ee(()=>C("label",{for:"lastName",class:"form-label"},"Last name",-1)),sd={class:"form-floating col-md-4 position-relative"},od=Ee(()=>C("label",{for:"email",class:"form-label"},"Email",-1)),ad={class:"form-floating col-md-3"},ld=Ee(()=>C("label",{for:"city",class:"form-label"},"City",-1)),cd={class:"form-floating col-md-3"},ud=Ee(()=>C("label",{for:"pwd",class:"form-label"},"Password",-1)),dd={class:"form-floating col-md-3 position-relative"},hd=Ee(()=>C("label",{for:"phoneNum",class:"form-label"},"手機號碼",-1)),fd={class:"form-floating col-md-3 position-relative"},md=Ee(()=>C("label",{for:"validateNum",class:"form-label"},"驗證碼",-1)),pd={class:"col-12"},gd={class:"form-check"},vd=Ee(()=>C("label",{class:"form-check-label",for:"agree"}," Agree to terms and conditions ",-1)),_d={class:"col-12"},yd=Ee(()=>C("i",{class:"fa-brands fa-line"},null,-1));function bd(t,e,n,r,i,s){const o=At("v-field"),l=At("error-message"),a=At("v-form"),d=At("GoogleLogin");return ys(),bs(ws,null,[Qu,C("div",ed,[q(a,{class:"row g-3 mb-3",onSubmit:s.onSubmit},{default:Is(({errors:m})=>[C("div",td,[q(o,{name:"firstName",type:"text",class:"form-control",id:"firstName",rules:s.isRequired},null,8,["rules"]),nd,q(l,{name:"firstName",class:"text-danger fw-bold"})]),C("div",rd,[q(o,{name:"lastName",type:"text",class:"form-control",id:"lastName",rules:s.isRequired},null,8,["rules"]),id,q(l,{name:"lastName",class:"text-danger fw-bold"})]),C("div",sd,[C("button",{type:"button",id:"sign-in-button",class:Ct(["btn btn-outline-primary position-absolute launchCode",{disabled:s.checkEmail()===!1}]),onClick:e[0]||(e[0]=(...f)=>s.firebaseSendSignInLinkToEmail&&s.firebaseSendSignInLinkToEmail(...f))},"發送確認連結",2),q(o,{name:"email",type:"text",class:"form-control",id:"email","aria-describedby":"inputGroupPrepend",rules:"required|email",modelValue:i.email,"onUpdate:modelValue":e[1]||(e[1]=f=>i.email=f)},null,8,["modelValue"]),od,q(l,{name:"email",class:"text-danger fw-bold"})]),C("div",ad,[q(o,{name:"required",type:"text",class:"form-control",id:"city",rules:"required"}),ld,q(l,{name:"required",class:"text-danger fw-bold"})]),C("div",cd,[q(o,{name:"pwd",type:"password",class:"form-control",id:"pwd",rules:s.isPwd},null,8,["rules"]),ud,q(l,{name:"pwd",class:"text-danger fw-bold"})]),C("div",dd,[C("button",{type:"button",id:"sign-in-button",class:Ct(["btn btn-outline-primary position-absolute launchCode",{disabled:s.checkPhoneNum()===!1}]),onClick:e[2]||(e[2]=(...f)=>s.firebaseSignInWithPhoneNumber&&s.firebaseSignInWithPhoneNumber(...f))},"發送驗證碼",2),q(o,{name:"phoneNum",type:"tel",class:"form-control",id:"phoneNum",value:i.phoneNum,rules:s.isPhoneNum,modelValue:i.phoneNum,"onUpdate:modelValue":e[3]||(e[3]=f=>i.phoneNum=f)},null,8,["value","rules","modelValue"]),hd,q(l,{name:"phoneNum",class:"text-danger fw-bold"})]),C("div",fd,[C("button",{type:"button",class:Ct(["btn btn-outline-primary position-absolute launchCode launchCode-phone",{disabled:s.isValidateNum()===!1}]),onClick:e[4]||(e[4]=(...f)=>s.firebaseConfirmationResult&&s.firebaseConfirmationResult(...f))},"驗證",2),q(o,{name:"validateNum",type:"tel",class:"form-control",id:"validateNum",modelValue:i.validateNum,"onUpdate:modelValue":e[5]||(e[5]=f=>i.validateNum=f)},null,8,["modelValue"]),md,q(l,{name:"validateNum",class:"text-danger fw-bold"})]),C("div",pd,[C("div",gd,[q(o,{name:"agree",class:"form-check-input",type:"checkbox",id:"agree",modelValue:i.agree,"onUpdate:modelValue":e[6]||(e[6]=f=>i.agree=f),onClick:e[7]||(e[7]=f=>s.checkCB(f))},null,8,["modelValue"]),vd,q(l,{name:"agree",class:"text-danger fw-bold"})])]),C("div",_d,[C("button",{class:Ct(["btn btn-primary",{disabled:i.phoneNumValidate===!1||i.agree===!1}]),type:"submit"},"Submit Form",2)])]),_:1},8,["onSubmit"]),C("div",null,[q(d,{callback:s.callback},null,8,["callback"])]),C("div",null,[C("button",{class:"medium_button btn_p08_user_loginType",id:"lineLoginBtn",onClick:e[8]||(e[8]=(...m)=>t.openLineLogin&&t.openLineLogin(...m))},[yd,Es(" LINE ")])])])],64)}const wd=vs(Zu,[["render",bd],["__scopeId","data-v-6694bfe6"]]);export{wd as default};
