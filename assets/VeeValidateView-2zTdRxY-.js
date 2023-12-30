import{d as Rn,t as xe,b as A,r as kn,h as Pt,i as $r,e as Wr,p as zr,f as Nt,u as L,w as We,g as ss,j as O,k as pe,l as Dt,n as be,m as as,q as os,s as Wt,v as ls,_ as cs,x as us,y as Et,o as ds,c as hs,a as M,z as q,A as fs,F as ms,B as wt,C as Qn,D as ps,E as vs}from"./index-_EJ-WFHZ.js";import"https://kit.fontawesome.com/96a7520586.js";/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function G(t){return typeof t=="function"}function qr(t){return t==null}const ze=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function Pn(t){return Number(t)>=0}function gs(t){const e=parseFloat(t);return isNaN(e)?t:e}function _s(t){return typeof t=="object"&&t!==null}function ys(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function er(t){if(!_s(t)||ys(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ut(t,e){return Object.keys(e).forEach(n=>{if(er(e[n])&&er(t[n])){t[n]||(t[n]={}),ut(t[n],e[n]);return}t[n]=e[n]}),t}function st(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if(Pn(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const Gr={};function Nn(t,e){Is(t,e),Gr[t]=e}function bs(t){return Gr[t]}function Is(t,e){if(!G(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}function tr(t,e,n){typeof n.value=="object"&&(n.value=R(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function R(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(a){i.add(R(a))})):s==="[object Map]"?(i=new Map,t.forEach(function(a,o){i.set(R(o),R(a))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(R(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)tr(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||tr(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}const zt=Symbol("vee-validate-form"),Es=Symbol("vee-validate-field-instance"),Mt=Symbol("Default empty value"),ws=typeof window<"u";function vn(t){return G(t)&&!!t.__locatorRef}function ve(t){return!!t&&G(t.parse)&&t.__type==="VVTypedSchema"}function Lt(t){return!!t&&G(t.validate)}function pt(t){return t==="checkbox"||t==="radio"}function Ts(t){return ze(t)||Array.isArray(t)}function Ss(t){return Array.isArray(t)?t.length===0:ze(t)&&Object.keys(t).length===0}function qt(t){return/^\[.+\]$/i.test(t)}function Os(t){return Kr(t)&&t.multiple}function Kr(t){return t.tagName==="SELECT"}function As(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function Cs(t,e){return!As(t,e)&&e.type!=="file"&&!pt(e.type)}function Jr(t){return Dn(t)&&t.target&&"submit"in t.target}function Dn(t){return t?!!(typeof Event<"u"&&G(Event)&&t instanceof Event||t&&t.srcElement):!1}function nr(t,e){return e in t&&t[e]!==Mt}function te(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!te(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!te(r[1],e.get(r[0])))return!1;return!0}if(rr(t)&&rr(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(i=Object.keys(t),n=i.length,r=n;r--!==0;){var s=i[r];if(!te(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function rr(t){return ws?t instanceof File:!1}function Mn(t){return qt(t)?t.replace(/\[|\]/gi,""):t}function ae(t,e,n){return t?qt(e)?t[Mn(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>Ts(i)&&s in i?i[s]:n,t):n}function ke(t,e,n){if(qt(e)){t[Mn(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||qr(i[r[s]]))&&(i[r[s]]=Pn(r[s+1])?[]:{}),i=i[r[s]]}}function an(t,e){if(Array.isArray(t)&&Pn(e)){t.splice(Number(e),1);return}ze(t)&&delete t[e]}function ir(t,e){if(qt(e)){delete t[Mn(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){an(r,n[s]);break}if(!(n[s]in r)||qr(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,a)=>ae(t,n.slice(0,a).join(".")));for(let s=i.length-1;s>=0;s--)if(Ss(i[s])){if(s===0){an(t,n[0]);continue}an(i[s-1],n[s-1])}}function he(t){return Object.keys(t)}function Yr(t,e=void 0){const n=Wt();return(n==null?void 0:n.provides[t])||$r(t,e)}function sr(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.findIndex(s=>te(s,e));return i>=0?r.splice(i,1):r.push(e),r}return te(t,e)?n:e}function ar(t,e=0){let n=null,r=[];return function(...i){return n&&clearTimeout(n),n=setTimeout(()=>{const s=t(...i);r.forEach(a=>a(s)),r=[]},e),new Promise(s=>r.push(s))}}function Rs(t,e){return ze(e)&&e.number?gs(t):t}function gn(t,e){let n;return async function(...i){const s=t(...i);n=s;const a=await s;return s!==n?a:(n=void 0,e(a,i))}}function _n(t){return Array.isArray(t)?t:t?[t]:[]}function Tt(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function ks(t){let e=null,n=[];return function(...r){const i=be(()=>{if(e!==i)return;const s=t(...r);n.forEach(a=>a(s)),n=[],e=null});return e=i,new Promise(s=>n.push(s))}}function Ln(t,e,n){return e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default}function on(t){if(Xr(t))return t._value}function Xr(t){return"_value"in t}function Ps(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function Vt(t){if(!Dn(t))return t;const e=t.target;if(pt(e.type)&&Xr(e))return on(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(Os(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(on);if(Kr(e)){const n=Array.from(e.options).find(r=>r.selected);return n?on(n):e.value}return Ps(e)}function Zr(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?ze(t)&&t._$$isNormalized?t:ze(t)?Object.keys(t).reduce((n,r)=>{const i=Ns(t[r]);return t[r]!==!1&&(n[r]=or(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=Ds(r);return i.name&&(n[i.name]=or(i.params)),n},e):e}function Ns(t){return t===!0?[]:Array.isArray(t)||ze(t)?t:[t]}function or(t){const e=n=>typeof n=="string"&&n[0]==="@"?Ms(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const Ds=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function Ms(t){const e=n=>ae(n,t)||n[t];return e.__locatorRef=t,e}function Ls(t){return Array.isArray(t)?t.filter(vn):he(t).filter(e=>vn(t[e])).map(e=>t[e])}const Vs={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let yn=Object.assign({},Vs);const He=()=>yn,Us=t=>{yn=Object.assign(Object.assign({},yn),t)},Fs=Us;async function Qr(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},a=(await Bs(i,t)).errors;return{errors:a,valid:!a.length}}async function Bs(t,e){if(ve(t.rules)||Lt(t.rules))return xs(e,t.rules);if(G(t.rules)||Array.isArray(t.rules)){const a={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},o=Array.isArray(t.rules)?t.rules:[t.rules],l=o.length,d=[];for(let m=0;m<l;m++){const f=o[m],_=await f(e,a);if(!(typeof _!="string"&&!Array.isArray(_)&&_)){if(Array.isArray(_))d.push(..._);else{const S=typeof _=="string"?_:ti(a);d.push(S)}if(t.bails)return{errors:d}}}return{errors:d}}const n=Object.assign(Object.assign({},t),{rules:Zr(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let a=0;a<s;a++){const o=i[a],l=await Hs(n,e,{name:o,params:n.rules[o]});if(l.error&&(r.push(l.error),t.bails))return{errors:r}}return{errors:r}}function js(t){return!!t&&t.name==="ValidationError"}function ei(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!js(i))throw i;if(!(!((r=i.inner)===null||r===void 0)&&r.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const s=i.inner.reduce((a,o)=>{const l=o.path||"";return a[l]||(a[l]={errors:[],path:l}),a[l].errors.push(...o.errors),a},{});return{errors:Object.values(s)}}}}}async function xs(t,e){const r=await(ve(e)?e:ei(e)).parse(t),i=[];for(const s of r.errors)s.errors.length&&i.push(...s.errors);return{errors:i}}async function Hs(t,e,n){const r=bs(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=$s(n.params,t.formData),s={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},a=await r(e,i,s);return typeof a=="string"?{error:a}:{error:a?void 0:ti(s)}}function ti(t){const e=He().generateMessage;return e?e(t):"Field is invalid"}function $s(t,e){const n=r=>vn(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function Ws(t,e){const r=await(ve(t)?t:ei(t)).parse(R(e)),i={},s={};for(const a of r.errors){const o=a.errors,l=(a.path||"").replace(/\["(\d+)"\]/g,(d,m)=>`[${m}]`);i[l]={valid:!o.length,errors:o},o.length&&(s[l]=o[0])}return{valid:!r.errors.length,results:i,errors:s,values:r.value}}async function zs(t,e,n){const i=he(t).map(async d=>{var m,f,_;const y=(m=n==null?void 0:n.names)===null||m===void 0?void 0:m[d],S=await Qr(ae(e,d),t[d],{name:(y==null?void 0:y.name)||d,label:y==null?void 0:y.label,values:e,bails:(_=(f=n==null?void 0:n.bailsMap)===null||f===void 0?void 0:f[d])!==null&&_!==void 0?_:!0});return Object.assign(Object.assign({},S),{path:d})});let s=!0;const a=await Promise.all(i),o={},l={};for(const d of a)o[d.path]={valid:d.valid,errors:d.errors},d.valid||(s=!1,l[d.path]=d.errors[0]);return{valid:s,results:o,errors:l}}let lr=0;function qs(t,e){const{value:n,initialValue:r,setInitialValue:i}=Gs(t,e.modelValue,e.form);if(!e.form){let l=function(y){var S;"value"in y&&(n.value=y.value),"errors"in y&&m(y.errors),"touched"in y&&(_.touched=(S=y.touched)!==null&&S!==void 0?S:_.touched),"initialValue"in y&&i(y.initialValue)};const{errors:d,setErrors:m}=Ys(),f=lr>=Number.MAX_SAFE_INTEGER?0:++lr,_=Js(n,r,d,e.schema);return{id:f,path:t,value:n,initialValue:r,meta:_,flags:{pendingUnmount:{[f]:!1},pendingReset:!1},errors:d,setState:l}}const s=e.form.createPathState(t,{bails:e.bails,label:e.label,type:e.type,validate:e.validate,schema:e.schema}),a=A(()=>s.errors);function o(l){var d,m,f;"value"in l&&(n.value=l.value),"errors"in l&&((d=e.form)===null||d===void 0||d.setFieldError(L(t),l.errors)),"touched"in l&&((m=e.form)===null||m===void 0||m.setFieldTouched(L(t),(f=l.touched)!==null&&f!==void 0?f:!1)),"initialValue"in l&&i(l.initialValue)}return{id:Array.isArray(s.id)?s.id[s.id.length-1]:s.id,path:t,value:n,errors:a,meta:s,initialValue:r,flags:s.__flags,setState:o}}function Gs(t,e,n){const r=pe(L(e));function i(){return n?ae(n.initialValues.value,L(t),L(r)):L(r)}function s(d){if(!n){r.value=d;return}n.setFieldInitialValue(L(t),d,!0)}const a=A(i);if(!n)return{value:pe(i()),initialValue:a,setInitialValue:s};const o=Ks(e,n,a,t);return n.stageInitialValue(L(t),o,!0),{value:A({get(){return ae(n.values,L(t))},set(d){n.setFieldValue(L(t),d,!1)}}),initialValue:a,setInitialValue:s}}function Ks(t,e,n,r){return Nt(t)?L(t):t!==void 0?t:ae(e.values,L(r),L(n))}function Js(t,e,n,r){var i,s;const a=(s=(i=r==null?void 0:r.describe)===null||i===void 0?void 0:i.call(r).required)!==null&&s!==void 0?s:!1,o=Dt({touched:!1,pending:!1,valid:!0,required:a,validated:!!L(n).length,initialValue:A(()=>L(e)),dirty:A(()=>!te(L(t),L(e)))});return We(n,l=>{o.valid=!l.length},{immediate:!0,flush:"sync"}),o}function Ys(){const t=pe([]);return{errors:t,setErrors:e=>{t.value=_n(e)}}}function Xs(t,e,n){return pt(n==null?void 0:n.type)?Qs(t,e,n):ni(t,e,n)}function ni(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:a,checkedValue:o,label:l,validateOnValueUpdate:d,uncheckedValue:m,controlled:f,keepValueOnUnmount:_,syncVModel:y,form:S}=Zs(n),K=f?Yr(zt):void 0,I=S||K,W=A(()=>st(O(t))),B=A(()=>{if(O(I==null?void 0:I.schema))return;const w=L(e);return Lt(w)||ve(w)||G(w)||Array.isArray(w)?w:Zr(w)}),{id:z,value:J,initialValue:Y,meta:k,setState:ne,errors:U,flags:F}=qs(W,{modelValue:r,form:I,bails:s,label:l,type:a,validate:B.value?le:void 0,schema:ve(e)?e:void 0}),j=A(()=>U.value[0]);y&&ea({value:J,prop:y,handleChange:T,shouldValidate:()=>d&&!F.pendingReset});const _e=(g,w=!1)=>{k.touched=!0,w&&oe()};async function Ie(g){var w,D;if(I!=null&&I.validateSchema){const{results:P}=await I.validateSchema(g);return(w=P[O(W)])!==null&&w!==void 0?w:{valid:!0,errors:[]}}return B.value?Qr(J.value,B.value,{name:O(W),label:O(l),values:(D=I==null?void 0:I.values)!==null&&D!==void 0?D:{},bails:s}):{valid:!0,errors:[]}}const oe=gn(async()=>(k.pending=!0,k.validated=!0,Ie("validated-only")),g=>(F.pendingUnmount[Q.id]||(ne({errors:g.errors}),k.pending=!1,k.valid=g.valid),g)),re=gn(async()=>Ie("silent"),g=>(k.valid=g.valid,g));function le(g){return(g==null?void 0:g.mode)==="silent"?re():oe()}function T(g,w=!0){const D=Vt(g);rt(D,w)}Wr(()=>{if(i)return oe();(!I||!I.validateSchema)&&re()});function ie(g){k.touched=g}function ue(g){var w;const D=g&&"value"in g?g.value:Y.value;ne({value:R(D),initialValue:R(D),touched:(w=g==null?void 0:g.touched)!==null&&w!==void 0?w:!1,errors:(g==null?void 0:g.errors)||[]}),k.pending=!1,k.validated=!1,re()}const Ce=Wt();function rt(g,w=!0){J.value=Ce&&y?Rs(g,Ce.props.modelModifiers):g,(w?oe:re)()}function It(g){ne({errors:Array.isArray(g)?g:[g]})}const Kn=A({get(){return J.value},set(g){rt(g,d)}}),Q={id:z,name:W,label:l,value:Kn,meta:k,errors:U,errorMessage:j,type:a,checkedValue:o,uncheckedValue:m,bails:s,keepValueOnUnmount:_,resetField:ue,handleReset:()=>ue(),validate:le,handleChange:T,handleBlur:_e,setState:ne,setTouched:ie,setErrors:It,setValue:rt};if(zr(Es,Q),Nt(e)&&typeof L(e)!="function"&&We(e,(g,w)=>{te(g,w)||(k.validated?oe():re())},{deep:!0}),!I)return Q;const Xt=A(()=>{const g=B.value;return!g||G(g)||Lt(g)||ve(g)||Array.isArray(g)?{}:Object.keys(g).reduce((w,D)=>{const P=Ls(g[D]).map(Ee=>Ee.__locatorRef).reduce((Ee,ye)=>{const de=ae(I.values,ye)||I.values[ye];return de!==void 0&&(Ee[ye]=de),Ee},{});return Object.assign(w,P),w},{})});return We(Xt,(g,w)=>{if(!Object.keys(g).length)return;!te(g,w)&&(k.validated?oe():re())}),ss(()=>{var g;const w=(g=O(Q.keepValueOnUnmount))!==null&&g!==void 0?g:O(I.keepValuesOnUnmount),D=O(W);if(w||!I||F.pendingUnmount[Q.id]){I==null||I.removePathState(D,z);return}F.pendingUnmount[Q.id]=!0;const P=I.getPathState(D);if(Array.isArray(P==null?void 0:P.id)&&(P!=null&&P.multiple)?P!=null&&P.id.includes(Q.id):(P==null?void 0:P.id)===Q.id){if(P!=null&&P.multiple&&Array.isArray(P.value)){const ye=P.value.findIndex(de=>te(de,O(Q.checkedValue)));if(ye>-1){const de=[...P.value];de.splice(ye,1),I.setFieldValue(D,de)}Array.isArray(P.id)&&P.id.splice(P.id.indexOf(Q.id),1)}else I.unsetPathValue(O(W));I.removePathState(D,z)}}),Q}function Zs(t){const e=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(t!=null&&t.syncVModel),r=typeof(t==null?void 0:t.syncVModel)=="string"?t.syncVModel:(t==null?void 0:t.modelPropName)||"modelValue",i=n&&!("initialValue"in(t||{}))?bn(Wt(),r):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},e()),{initialValue:i});const s="valueProp"in t?t.valueProp:t.checkedValue,a="standalone"in t?!t.standalone:t.controlled,o=(t==null?void 0:t.modelPropName)||(t==null?void 0:t.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},e()),t||{}),{initialValue:i,controlled:a??!0,checkedValue:s,syncVModel:o})}function Qs(t,e,n){const r=n!=null&&n.standalone?void 0:Yr(zt),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function a(o){const l=o.handleChange,d=A(()=>{const f=O(o.value),_=O(i);return Array.isArray(f)?f.findIndex(y=>te(y,_))>=0:te(_,f)});function m(f,_=!0){var y,S;if(d.value===((y=f==null?void 0:f.target)===null||y===void 0?void 0:y.checked)){_&&o.validate();return}const K=O(t),I=r==null?void 0:r.getPathState(K),W=Vt(f);let B=(S=O(i))!==null&&S!==void 0?S:W;r&&(I!=null&&I.multiple)&&I.type==="checkbox"?B=sr(ae(r.values,K)||[],B,void 0):(n==null?void 0:n.type)==="checkbox"&&(B=sr(O(o.value),B,O(s))),l(B,_)}return Object.assign(Object.assign({},o),{checked:d,checkedValue:i,uncheckedValue:s,handleChange:m})}return a(ni(t,e,n))}function ea({prop:t,value:e,handleChange:n,shouldValidate:r}){const i=Wt();if(!i||!t)return;const s=typeof t=="string"?t:"modelValue",a=`update:${s}`;s in i.props&&(We(e,o=>{te(o,bn(i,s))||i.emit(a,o)}),We(()=>bn(i,s),o=>{if(o===Mt&&e.value===void 0)return;const l=o===Mt?void 0:o;te(l,e.value)||n(l,r())}))}function bn(t,e){if(t)return t.props[e]}const ta=Rn({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>He().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Mt},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=xe(t,"rules"),r=xe(t,"name"),i=xe(t,"label"),s=xe(t,"uncheckedValue"),a=xe(t,"keepValue"),{errors:o,value:l,errorMessage:d,validate:m,handleChange:f,handleBlur:_,setTouched:y,resetField:S,handleReset:K,meta:I,checked:W,setErrors:B}=Xs(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:ra(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:t.validateOnModelUpdate,keepValueOnUnmount:a,syncVModel:!0}),z=function(F,j=!0){f(F,j)},J=A(()=>{const{validateOnInput:U,validateOnChange:F,validateOnBlur:j,validateOnModelUpdate:_e}=na(t);function Ie(T){_(T,j),G(e.attrs.onBlur)&&e.attrs.onBlur(T)}function oe(T){z(T,U),G(e.attrs.onInput)&&e.attrs.onInput(T)}function re(T){z(T,F),G(e.attrs.onChange)&&e.attrs.onChange(T)}const le={name:t.name,onBlur:Ie,onInput:oe,onChange:re};return le["onUpdate:modelValue"]=T=>z(T,_e),le}),Y=A(()=>{const U=Object.assign({},J.value);pt(e.attrs.type)&&W&&(U.checked=W.value);const F=cr(t,e);return Cs(F,e.attrs)&&(U.value=l.value),U}),k=A(()=>Object.assign(Object.assign({},J.value),{modelValue:l.value}));function ne(){return{field:Y.value,componentField:k.value,value:l.value,meta:I,errors:o.value,errorMessage:d.value,validate:m,resetField:S,handleChange:z,handleInput:U=>z(U,!1),handleReset:K,handleBlur:J.value.onBlur,setTouched:y,setErrors:B}}return e.expose({value:l,meta:I,errors:o,errorMessage:d,setErrors:B,setTouched:y,reset:S,validate:m,handleChange:f}),()=>{const U=kn(cr(t,e)),F=Ln(U,e,ne);return U?Pt(U,Object.assign(Object.assign({},e.attrs),Y.value),F):F}}});function cr(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function na(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:a,validateOnBlur:o,validateOnModelUpdate:l}=He();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:a,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:o,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:l}}function ra(t,e){return pt(e.attrs.type)?nr(t,"modelValue")?t.modelValue:void 0:nr(t,"modelValue")?t.modelValue:e.attrs.value}const ia=ta;let sa=0;const St=["bails","fieldsCount","id","multiple","type","validate"];function ri(t){const e=Object.assign({},O((t==null?void 0:t.initialValues)||{})),n=L(t==null?void 0:t.validationSchema);return n&&ve(n)&&G(n.cast)?R(n.cast(e)||{}):R(e)}function aa(t){var e;const n=sa++;let r=0;const i=pe(!1),s=pe(!1),a=pe(0),o=[],l=Dt(ri(t)),d=pe([]),m=pe({}),f=pe({}),_=ks(()=>{f.value=d.value.reduce((u,c)=>(u[st(O(c.path))]=c,u),{})});function y(u,c){const h=T(u);if(!h){typeof u=="string"&&(m.value[st(u)]=_n(c));return}if(typeof u=="string"){const p=st(u);m.value[p]&&delete m.value[p]}h.errors=_n(c),h.valid=!h.errors.length}function S(u){he(u).forEach(c=>{y(c,u[c])})}t!=null&&t.initialErrors&&S(t.initialErrors);const K=A(()=>{const u=d.value.reduce((c,h)=>(h.errors.length&&(c[h.path]=h.errors),c),{});return Object.assign(Object.assign({},m.value),u)}),I=A(()=>he(K.value).reduce((u,c)=>{const h=K.value[c];return h!=null&&h.length&&(u[c]=h[0]),u},{})),W=A(()=>d.value.reduce((u,c)=>(u[c.path]={name:c.path||"",label:c.label||""},u),{})),B=A(()=>d.value.reduce((u,c)=>{var h;return u[c.path]=(h=c.bails)!==null&&h!==void 0?h:!0,u},{})),z=Object.assign({},(t==null?void 0:t.initialErrors)||{}),J=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:Y,originalInitialValues:k,setInitialValues:ne}=la(d,l,t),U=oa(d,l,k,I),F=A(()=>d.value.reduce((u,c)=>{const h=ae(l,c.path);return ke(u,c.path,h),u},{})),j=t==null?void 0:t.validationSchema;function _e(u,c){var h,p;const E=A(()=>ae(Y.value,O(u))),b=f.value[O(u)],C=(c==null?void 0:c.type)==="checkbox"||(c==null?void 0:c.type)==="radio";if(b&&C){b.multiple=!0;const me=r++;return Array.isArray(b.id)?b.id.push(me):b.id=[b.id,me],b.fieldsCount++,b.__flags.pendingUnmount[me]=!1,b}const x=A(()=>ae(l,O(u))),H=O(u),ee=ue.findIndex(me=>me===H);ee!==-1&&ue.splice(ee,1);const V=A(()=>{var me,it,nn,Zn,rn,sn;return ve(j)?(nn=(it=(me=j).describe)===null||it===void 0?void 0:it.call(me,O(u)).required)!==null&&nn!==void 0?nn:!1:ve(c==null?void 0:c.schema)&&(sn=(rn=(Zn=c==null?void 0:c.schema).describe)===null||rn===void 0?void 0:rn.call(Zn).required)!==null&&sn!==void 0?sn:!1}),X=r++,se=Dt({id:X,path:u,touched:!1,pending:!1,valid:!0,validated:!!(!((h=z[H])===null||h===void 0)&&h.length),required:V,initialValue:E,errors:ls([]),bails:(p=c==null?void 0:c.bails)!==null&&p!==void 0?p:!1,label:c==null?void 0:c.label,type:(c==null?void 0:c.type)||"default",value:x,multiple:!1,__flags:{pendingUnmount:{[X]:!1},pendingReset:!1},fieldsCount:1,validate:c==null?void 0:c.validate,dirty:A(()=>!te(L(x),L(E)))});return d.value.push(se),f.value[H]=se,_(),I.value[H]&&!z[H]&&be(()=>{Be(H,{mode:"silent"})}),Nt(u)&&We(u,me=>{_();const it=R(x.value);f.value[me]=se,be(()=>{ke(l,me,it)})}),se}const Ie=ar(Xn,5),oe=ar(Xn,5),re=gn(async u=>await(u==="silent"?Ie():oe()),(u,[c])=>{const h=he(w.errorBag.value),E=[...new Set([...he(u.results),...d.value.map(b=>b.path),...h])].sort().reduce((b,C)=>{var x;const H=C,ee=T(H)||ie(H),V=((x=u.results[H])===null||x===void 0?void 0:x.errors)||[],X=O(ee==null?void 0:ee.path)||H,se=ca({errors:V,valid:!V.length},b.results[X]);return b.results[X]=se,se.valid||(b.errors[X]=se.errors[0]),ee&&m.value[X]&&delete m.value[X],ee?(ee.valid=se.valid,c==="silent"||c==="validated-only"&&!ee.validated||y(ee,se.errors),b):(y(X,V),b)},{valid:u.valid,results:{},errors:{}});return u.values&&(E.values=u.values),E});function le(u){d.value.forEach(u)}function T(u){const c=typeof u=="string"?st(u):u;return typeof c=="string"?f.value[c]:c}function ie(u){return d.value.filter(h=>u.startsWith(h.path)).reduce((h,p)=>h?p.path.length>h.path.length?p:h:p,void 0)}let ue=[],Ce;function rt(u){return ue.push(u),Ce||(Ce=be(()=>{[...ue].sort().reverse().forEach(h=>{ir(l,h)}),ue=[],Ce=null})),Ce}function It(u){return function(h,p){return function(b){return b instanceof Event&&(b.preventDefault(),b.stopPropagation()),le(C=>C.touched=!0),i.value=!0,a.value++,Je().then(C=>{const x=R(l);if(C.valid&&typeof h=="function"){const H=R(F.value);let ee=u?H:x;return C.values&&(ee=C.values),h(ee,{evt:b,controlledValues:H,setErrors:S,setFieldError:y,setTouched:Zt,setFieldTouched:de,setValues:Ee,setFieldValue:D,resetForm:Qt,resetField:Jn})}!C.valid&&typeof p=="function"&&p({values:x,evt:b,errors:C.errors,results:C.results})}).then(C=>(i.value=!1,C),C=>{throw i.value=!1,C})}}}const Q=It(!1);Q.withControlled=It(!0);function Xt(u,c){const h=d.value.findIndex(E=>E.path===u),p=d.value[h];if(!(h===-1||!p)){if(be(()=>{Be(u,{mode:"silent",warn:!1})}),p.multiple&&p.fieldsCount&&p.fieldsCount--,Array.isArray(p.id)){const E=p.id.indexOf(c);E>=0&&p.id.splice(E,1),delete p.__flags.pendingUnmount[c]}(!p.multiple||p.fieldsCount<=0)&&(d.value.splice(h,1),Yn(u),_(),delete f.value[u])}}function g(u){he(f.value).forEach(c=>{c.startsWith(u)&&delete f.value[c]}),d.value=d.value.filter(c=>!c.path.startsWith(u)),be(()=>{_()})}const w={formId:n,values:l,controlledValues:F,errorBag:K,errors:I,schema:j,submitCount:a,meta:U,isSubmitting:i,isValidating:s,fieldArrays:o,keepValuesOnUnmount:J,validateSchema:L(j)?re:void 0,validate:Je,setFieldError:y,validateField:Be,setFieldValue:D,setValues:Ee,setErrors:S,setFieldTouched:de,setTouched:Zt,resetForm:Qt,resetField:Jn,handleSubmit:Q,useFieldModel:ns,defineInputBinds:rs,defineComponentBinds:is,defineField:tn,stageInitialValue:es,unsetInitialValue:Yn,setFieldInitialValue:en,createPathState:_e,getPathState:T,unsetPathValue:rt,removePathState:Xt,initialValues:Y,getAllPathStates:()=>d.value,destroyPath:g,isFieldTouched:Xi,isFieldDirty:Zi,isFieldValid:Qi};function D(u,c,h=!0){const p=R(c),E=typeof u=="string"?u:u.path;T(E)||_e(E),ke(l,E,p),h&&Be(E)}function P(u,c=!0){he(l).forEach(h=>{delete l[h]}),he(u).forEach(h=>{D(h,u[h],!1)}),c&&Je()}function Ee(u,c=!0){ut(l,u),o.forEach(h=>h&&h.reset()),c&&Je()}function ye(u,c){const h=T(O(u))||_e(u);return A({get(){return h.value},set(p){var E;const b=O(u);D(b,p,(E=O(c))!==null&&E!==void 0?E:!1)}})}function de(u,c){const h=T(u);h&&(h.touched=c)}function Xi(u){const c=T(u);return c?c.touched:d.value.filter(h=>h.path.startsWith(u)).some(h=>h.touched)}function Zi(u){const c=T(u);return c?c.dirty:d.value.filter(h=>h.path.startsWith(u)).some(h=>h.dirty)}function Qi(u){const c=T(u);return c?c.valid:d.value.filter(h=>h.path.startsWith(u)).every(h=>h.valid)}function Zt(u){if(typeof u=="boolean"){le(c=>{c.touched=u});return}he(u).forEach(c=>{de(c,!!u[c])})}function Jn(u,c){var h;const p=c&&"value"in c?c.value:ae(Y.value,u),E=T(u);E&&(E.__flags.pendingReset=!0),en(u,R(p),!0),D(u,p,!1),de(u,(h=c==null?void 0:c.touched)!==null&&h!==void 0?h:!1),y(u,(c==null?void 0:c.errors)||[]),be(()=>{E&&(E.__flags.pendingReset=!1)})}function Qt(u,c){let h=R(u!=null&&u.values?u.values:k.value);h=c!=null&&c.force?h:ut(k.value,h),h=ve(j)&&G(j.cast)?j.cast(h):h,ne(h),le(p=>{var E;p.__flags.pendingReset=!0,p.validated=!1,p.touched=((E=u==null?void 0:u.touched)===null||E===void 0?void 0:E[p.path])||!1,D(p.path,ae(h,p.path),!1),y(p.path,void 0)}),c!=null&&c.force?P(h,!1):Ee(h,!1),S((u==null?void 0:u.errors)||{}),a.value=(u==null?void 0:u.submitCount)||0,be(()=>{Je({mode:"silent"}),le(p=>{p.__flags.pendingReset=!1})})}async function Je(u){const c=(u==null?void 0:u.mode)||"force";if(c==="force"&&le(b=>b.validated=!0),w.validateSchema)return w.validateSchema(c);s.value=!0;const h=await Promise.all(d.value.map(b=>b.validate?b.validate(u).then(C=>({key:b.path,valid:C.valid,errors:C.errors})):Promise.resolve({key:b.path,valid:!0,errors:[]})));s.value=!1;const p={},E={};for(const b of h)p[b.key]={valid:b.valid,errors:b.errors},b.errors.length&&(E[b.key]=b.errors[0]);return{valid:h.every(b=>b.valid),results:p,errors:E}}async function Be(u,c){var h;const p=T(u);if(p&&(c==null?void 0:c.mode)!=="silent"&&(p.validated=!0),j){const{results:E}=await re((c==null?void 0:c.mode)||"validated-only");return E[u]||{errors:[],valid:!0}}return p!=null&&p.validate?p.validate(c):(!p&&(h=c==null?void 0:c.warn),Promise.resolve({errors:[],valid:!0}))}function Yn(u){ir(Y.value,u)}function es(u,c,h=!1){en(u,c),ke(l,u,c),h&&!(t!=null&&t.initialValues)&&ke(k.value,u,R(c))}function en(u,c,h=!1){ke(Y.value,u,R(c)),h&&ke(k.value,u,R(c))}async function Xn(){const u=L(j);if(!u)return{valid:!0,results:{},errors:{}};s.value=!0;const c=Lt(u)||ve(u)?await Ws(u,l):await zs(u,l,{names:W.value,bailsMap:B.value});return s.value=!1,c}const ts=Q((u,{evt:c})=>{Jr(c)&&c.target.submit()});Wr(()=>{if(t!=null&&t.initialErrors&&S(t.initialErrors),t!=null&&t.initialTouched&&Zt(t.initialTouched),t!=null&&t.validateOnMount){Je();return}w.validateSchema&&w.validateSchema("silent")}),Nt(j)&&We(j,()=>{var u;(u=w.validateSchema)===null||u===void 0||u.call(w,"validated-only")}),zr(zt,w);function tn(u,c){const h=G(c)||c==null?void 0:c.label,p=T(O(u))||_e(u,{label:h}),E=()=>G(c)?c(Tt(p,St)):c||{};function b(){var V;p.touched=!0,((V=E().validateOnBlur)!==null&&V!==void 0?V:He().validateOnBlur)&&Be(p.path)}function C(){var V;((V=E().validateOnInput)!==null&&V!==void 0?V:He().validateOnInput)&&be(()=>{Be(p.path)})}function x(){var V;((V=E().validateOnChange)!==null&&V!==void 0?V:He().validateOnChange)&&be(()=>{Be(p.path)})}const H=A(()=>{const V={onChange:x,onInput:C,onBlur:b};return G(c)?Object.assign(Object.assign({},V),c(Tt(p,St)).props||{}):c!=null&&c.props?Object.assign(Object.assign({},V),c.props(Tt(p,St))):V});return[ye(u,()=>{var V,X,se;return(se=(V=E().validateOnModelUpdate)!==null&&V!==void 0?V:(X=He())===null||X===void 0?void 0:X.validateOnModelUpdate)!==null&&se!==void 0?se:!0}),H]}function ns(u){return Array.isArray(u)?u.map(c=>ye(c,!0)):ye(u)}function rs(u,c){const[h,p]=tn(u,c);function E(x){p.value.onBlur(x)}function b(x){const H=Vt(x);D(O(u),H,!1),p.value.onInput(x)}function C(x){const H=Vt(x);D(O(u),H,!1),p.value.onChange(x)}return A(()=>Object.assign(Object.assign({},p.value),{onBlur:E,onInput:b,onChange:C,value:h.value}))}function is(u,c){const[h,p]=tn(u,c),E=T(O(u));function b(C){h.value=C}return A(()=>{const C=G(c)?c(Tt(E,St)):c||{};return Object.assign({[C.model||"modelValue"]:h.value,[`onUpdate:${C.model||"modelValue"}`]:b},p.value)})}return Object.assign(Object.assign({},w),{values:as(l),handleReset:()=>Qt(),submitForm:ts})}function oa(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=A(()=>!te(e,L(n)));function a(){const l=t.value;return he(i).reduce((d,m)=>{const f=i[m];return d[m]=l[f](_=>_[m]),d},{})}const o=Dt(a());return os(()=>{const l=a();o.touched=l.touched,o.valid=l.valid,o.pending=l.pending}),A(()=>Object.assign(Object.assign({initialValues:L(n)},o),{valid:o.valid&&!he(r.value).length,dirty:s.value}))}function la(t,e,n){const r=ri(n),i=pe(r),s=pe(R(r));function a(o,l=!1){i.value=ut(R(i.value)||{},R(o)),s.value=ut(R(s.value)||{},R(o)),l&&t.value.forEach(d=>{if(d.touched)return;const f=ae(i.value,d.path);ke(e,d.path,R(f))})}return{initialValues:i,originalInitialValues:s,setInitialValues:a}}function ca(t,e){return e?{valid:t.valid&&e.valid,errors:[...t.errors,...e.errors]}:t}const ua=Rn({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=xe(t,"validationSchema"),r=xe(t,"keepValues"),{errors:i,errorBag:s,values:a,meta:o,isSubmitting:l,isValidating:d,submitCount:m,controlledValues:f,validate:_,validateField:y,handleReset:S,resetForm:K,handleSubmit:I,setErrors:W,setFieldError:B,setFieldValue:z,setValues:J,setFieldTouched:Y,setTouched:k,resetField:ne}=aa({validationSchema:n.value?n:void 0,initialValues:t.initialValues,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:r}),U=I((T,{evt:ie})=>{Jr(ie)&&ie.target.submit()},t.onInvalidSubmit),F=t.onSubmit?I(t.onSubmit,t.onInvalidSubmit):U;function j(T){Dn(T)&&T.preventDefault(),S(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function _e(T,ie){return I(typeof T=="function"&&!ie?T:ie,t.onInvalidSubmit)(T)}function Ie(){return R(a)}function oe(){return R(o.value)}function re(){return R(i.value)}function le(){return{meta:o.value,errors:i.value,errorBag:s.value,values:a,isSubmitting:l.value,isValidating:d.value,submitCount:m.value,controlledValues:f.value,validate:_,validateField:y,handleSubmit:_e,handleReset:S,submitForm:U,setErrors:W,setFieldError:B,setFieldValue:z,setValues:J,setFieldTouched:Y,setTouched:k,resetForm:K,resetField:ne,getValues:Ie,getMeta:oe,getErrors:re}}return e.expose({setFieldError:B,setErrors:W,setFieldValue:z,setValues:J,setFieldTouched:Y,setTouched:k,resetForm:K,validate:_,validateField:y,resetField:ne,getValues:Ie,getMeta:oe,getErrors:re,values:a,meta:o,errors:i}),function(){const ie=t.as==="form"?t.as:t.as?kn(t.as):null,ue=Ln(ie,e,le);return ie?Pt(ie,Object.assign(Object.assign(Object.assign({},ie==="form"?{novalidate:!0}:{}),e.attrs),{onSubmit:F,onReset:j}),ue):ue}}}),da=ua,ha=Rn({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=$r(zt,void 0),r=A(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?kn(t.as):t.as,a=Ln(s,e,i),o=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(a)||!a)&&(a!=null&&a.length)?a:(Array.isArray(a)||!a)&&!(a!=null&&a.length)?Pt(s||"span",o,r.value):Pt(s,o,a)}}}),fa=ha;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function ma(t,e){return Array.isArray(t)?t[0]:t[e]}function ii(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const ur=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,si=t=>ii(t)?!0:Array.isArray(t)?t.every(e=>ur.test(String(e))):ur.test(String(t)),ai=(t,e)=>{if(ii(t))return!0;let n=ma(e,"regex");return typeof n=="string"&&(n=new RegExp(n)),Array.isArray(t)?t.every(r=>ai(r,{regex:n})):n.test(String(t))};function pa(t){return t==null}function va(t){return Array.isArray(t)&&t.length===0}const ga=t=>pa(t)||va(t)||t===!1?!1:!!String(t).trim().length;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function dr(t){return typeof t=="function"}function _a(t){return typeof t=="object"&&t!==null}function ya(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function hr(t){if(!_a(t)||ya(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function oi(t,e){return Object.keys(e).forEach(n=>{if(hr(e[n])&&hr(t[n])){t[n]||(t[n]={}),oi(t[n],e[n]);return}t[n]=e[n]}),t}function fr(t,e){return t.replace(/(\d:)?{([^}]+)}/g,function(n,r,i){if(!r||!e.params)return i in e?e[i]:e.params&&i in e.params?e.params[i]:`{${i}}`;if(!Array.isArray(e.params))return i in e.params?e.params[i]:`{${i}}`;const s=Number(r.replace(":",""));return s in e.params?e.params[s]:`${r}{${i}}`})}class ba{constructor(e,n){this.container={},this.locale=e,this.merge(n)}resolve(e){return this.format(this.locale,e)}getLocaleDefault(e,n){var r,i,s,a,o;return((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[n])===null||s===void 0?void 0:s._default)||((o=(a=this.container[e])===null||a===void 0?void 0:a.messages)===null||o===void 0?void 0:o._default)}resolveLabel(e,n,r){var i,s,a,o;return r?((s=(i=this.container[e])===null||i===void 0?void 0:i.names)===null||s===void 0?void 0:s[r])||r:((o=(a=this.container[e])===null||a===void 0?void 0:a.names)===null||o===void 0?void 0:o[n])||n}format(e,n){var r,i,s,a,o;let l;const{rule:d,form:m,label:f,name:_}=n,y=this.resolveLabel(e,_,f);return d?(l=((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[_])===null||s===void 0?void 0:s[d.name])||((o=(a=this.container[e])===null||a===void 0?void 0:a.messages)===null||o===void 0?void 0:o[d.name]),l||(l=this.getLocaleDefault(e,_)||`${y} is not valid`),dr(l)?l(n):fr(l,Object.assign(Object.assign({},m),{field:y,params:d.params}))):(l=this.getLocaleDefault(e,_)||`${y} is not valid`,dr(l)?l(n):fr(l,Object.assign(Object.assign({},m),{field:y})))}merge(e){oi(this.container,e)}}const at=new ba("en",{});function Ia(t,e){const n=r=>at.resolve(r);return typeof t=="string"?(at.locale=t,e&&at.merge({[t]:e}),n):(at.merge(t),n)}function Ea(t){at.locale=t}const wa="zh_TW",Ta={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},Sa={code:wa,messages:Ta},Oa="ar",Aa={alpha:"{field} يجب ان يحتوي على حروف فقط",alpha_num:"{field} قد يحتوي فقط على حروف وارقام",alpha_dash:"{field} قد يحتوي على حروف او الرموز - و _",alpha_spaces:"{field} قد يحتوي فقط على حروف ومسافات",between:"قيمة {field} يجب ان تكون ما بين 0:{min} و 1:{max}",confirmed:"{field} لا يماثل التأكيد",digits:"{field} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن 0:{length} رقم",dimensions:"{field} يجب ان تكون بمقاس 0:{width} بكسل في 1:{height} بكسل",email:"{field} يجب ان يكون بريدا اليكتروني صحيح",not_one_of:"الحقل {field} غير صحيح",ext:"نوع ملف {field} غير صحيح",image:"{field} يجب ان تكون صورة",integer:"الحقل {field} يجب ان يكون عدداً صحيحاً",length:"حقل {field} يجب الا يزيد عن 0:{length}",max_value:"قيمة الحقل {field} يجب ان تكون اصغر من 0:{min} او تساويها",max:"الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأكثر",mimes:"نوع ملف {field} غير صحيح",min_value:"قيمة الحقل {field} يجب ان تكون اكبر من 0:{min} او تساويها",min:"الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأقل",numeric:"{field} يمكن ان يحتوي فقط على ارقام",one_of:"الحقل {field} يجب ان يكون قيمة صحيحة",regex:"الحقل {field} غير صحيح",required:"{field} مطلوب",required_if:"حقل {field} مطلوب",size:"{field} يجب ان يكون اقل من 0:{size} كيلوبايت",url:"حقل {field} ليس رابطاً صحيحاً"},Ca={code:Oa,messages:Aa};var mr={};/**
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
 */const li=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ra=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ci={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,m=s>>2,f=(s&3)<<4|o>>4;let _=(o&15)<<2|d>>6,y=d&63;l||(y=64,a||(_=64)),r.push(n[m],n[f],n[_],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(li(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ra(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||d==null||f==null)throw new ka;const _=s<<2|o>>4;if(r.push(_),d!==64){const y=o<<4&240|d>>2;if(r.push(y),f!==64){const S=d<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ka extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pa=function(t){const e=li(t);return ci.encodeByteArray(e,!0)},ui=function(t){return Pa(t).replace(/\./g,"")},di=function(t){try{return ci.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Na(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Da=()=>Na().__FIREBASE_DEFAULTS__,Ma=()=>{if(typeof process>"u"||typeof mr>"u")return;const t=mr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},La=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&di(t[1]);return e&&JSON.parse(e)},Vn=()=>{try{return Da()||Ma()||La()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Va=t=>{var e,n;return(n=(e=Vn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hi=()=>{var t;return(t=Vn())===null||t===void 0?void 0:t.config},fi=t=>{var e;return(e=Vn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Ba(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ja(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xa(){const t=Z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ha(){try{return typeof indexedDB=="object"}catch{return!1}}function $a(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Wa="FirebaseError";class Ue extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wa,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?za(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Ue(i,o,r)}}function za(t,e){return t.replace(qa,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qa=/\{\$([^}]+)}/g;function Ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ut(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(pr(s)&&pr(a)){if(!Ut(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pr(t){return t!==null&&typeof t=="object"}/**
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
 */function nt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ka(t,e){const n=new Ja(t,e);return n.subscribe.bind(n)}class Ja{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ya(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ln),i.error===void 0&&(i.error=ln),i.complete===void 0&&(i.complete=ln);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ya(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ln(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class Xa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ua;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qa(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Za(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Za(t){return t===je?void 0:t}function Qa(t){return t.instantiationMode==="EAGER"}/**
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
 */class eo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const to={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},no=N.INFO,ro={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},io=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ro[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mi{constructor(e){this.name=e,this._logLevel=no,this._logHandler=io,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?to[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const so=(t,e)=>e.some(n=>t instanceof n);let vr,gr;function ao(){return vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oo(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pi=new WeakMap,In=new WeakMap,vi=new WeakMap,cn=new WeakMap,Un=new WeakMap;function lo(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Le(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&pi.set(n,t)}).catch(()=>{}),Un.set(e,t),e}function co(t){if(In.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});In.set(t,e)}let En={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return In.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uo(t){En=t(En)}function ho(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(un(this),e,...n);return vi.set(r,e.sort?e.sort():[e]),Le(r)}:oo().includes(t)?function(...e){return t.apply(un(this),e),Le(pi.get(this))}:function(...e){return Le(t.apply(un(this),e))}}function fo(t){return typeof t=="function"?ho(t):(t instanceof IDBTransaction&&co(t),so(t,ao())?new Proxy(t,En):t)}function Le(t){if(t instanceof IDBRequest)return lo(t);if(cn.has(t))return cn.get(t);const e=fo(t);return e!==t&&(cn.set(t,e),Un.set(e,t)),e}const un=t=>Un.get(t);function mo(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=Le(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Le(a.result),l.oldVersion,l.newVersion,Le(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),o}const po=["get","getKey","getAll","getAllKeys","count"],vo=["put","add","delete","clear"],dn=new Map;function _r(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dn.get(e))return dn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||po.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(o.shift())),(await Promise.all([d[n](...o),i&&l.done]))[0]};return dn.set(e,s),s}uo(t=>({...t,get:(e,n,r)=>_r(e,n)||t.get(e,n,r),has:(e,n)=>!!_r(e,n)||t.has(e,n)}));/**
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
 */class go{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_o(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _o(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wn="@firebase/app",yr="0.9.25";/**
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
 */const qe=new mi("@firebase/app"),yo="@firebase/app-compat",bo="@firebase/analytics-compat",Io="@firebase/analytics",Eo="@firebase/app-check-compat",wo="@firebase/app-check",To="@firebase/auth",So="@firebase/auth-compat",Oo="@firebase/database",Ao="@firebase/database-compat",Co="@firebase/functions",Ro="@firebase/functions-compat",ko="@firebase/installations",Po="@firebase/installations-compat",No="@firebase/messaging",Do="@firebase/messaging-compat",Mo="@firebase/performance",Lo="@firebase/performance-compat",Vo="@firebase/remote-config",Uo="@firebase/remote-config-compat",Fo="@firebase/storage",Bo="@firebase/storage-compat",jo="@firebase/firestore",xo="@firebase/firestore-compat",Ho="firebase",$o="10.7.1";/**
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
 */const Tn="[DEFAULT]",Wo={[wn]:"fire-core",[yo]:"fire-core-compat",[Io]:"fire-analytics",[bo]:"fire-analytics-compat",[wo]:"fire-app-check",[Eo]:"fire-app-check-compat",[To]:"fire-auth",[So]:"fire-auth-compat",[Oo]:"fire-rtdb",[Ao]:"fire-rtdb-compat",[Co]:"fire-fn",[Ro]:"fire-fn-compat",[ko]:"fire-iid",[Po]:"fire-iid-compat",[No]:"fire-fcm",[Do]:"fire-fcm-compat",[Mo]:"fire-perf",[Lo]:"fire-perf-compat",[Vo]:"fire-rc",[Uo]:"fire-rc-compat",[Fo]:"fire-gcs",[Bo]:"fire-gcs-compat",[jo]:"fire-fst",[xo]:"fire-fst-compat","fire-js":"fire-js",[Ho]:"fire-js-all"};/**
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
 */const Ft=new Map,Sn=new Map;function zo(t,e){try{t.container.addComponent(e)}catch(n){qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(Sn.has(e))return qe.debug(`There were multiple attempts to register component ${e}.`),!1;Sn.set(e,t);for(const n of Ft.values())zo(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const qo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new vt("app","Firebase",qo);/**
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
 */class Go{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const gt=$o;function On(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ve.create("bad-app-name",{appName:String(i)});if(n||(n=hi()),!n)throw Ve.create("no-options");const s=Ft.get(i);if(s){if(Ut(n,s.options)&&Ut(r,s.config))return s;throw Ve.create("duplicate-app",{appName:i})}const a=new eo(i);for(const l of Sn.values())a.addComponent(l);const o=new Go(n,r,a);return Ft.set(i,o),o}function Ko(t=Tn){const e=Ft.get(t);if(!e&&t===Tn&&hi())return On();if(!e)throw Ve.create("no-app",{appName:t});return e}function Xe(t,e,n){var r;let i=(r=Wo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qe.warn(o.join(" "));return}dt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jo="firebase-heartbeat-database",Yo=1,ht="firebase-heartbeat-store";let hn=null;function _i(){return hn||(hn=mo(Jo,Yo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ht)}}}).catch(t=>{throw Ve.create("idb-open",{originalErrorMessage:t.message})})),hn}async function Xo(t){try{return await(await _i()).transaction(ht).objectStore(ht).get(yi(t))}catch(e){if(e instanceof Ue)qe.warn(e.message);else{const n=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qe.warn(n.message)}}}async function br(t,e){try{const r=(await _i()).transaction(ht,"readwrite");await r.objectStore(ht).put(e,yi(t)),await r.done}catch(n){if(n instanceof Ue)qe.warn(n.message);else{const r=Ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qe.warn(r.message)}}}function yi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zo=1024,Qo=30*24*60*60*1e3;class el{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ir();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=Qo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ir(),{heartbeatsToSend:r,unsentEntries:i}=tl(this._heartbeatsCache.heartbeats),s=ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ir(){return new Date().toISOString().substring(0,10)}function tl(t,e=Zo){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Er(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Er(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ha()?$a().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Er(t){return ui(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rl(t){dt(new et("platform-logger",e=>new go(e),"PRIVATE")),dt(new et("heartbeat",e=>new el(e),"PRIVATE")),Xe(wn,yr,t),Xe(wn,yr,"esm2017"),Xe("fire-js","")}rl("");var il="firebase",sl="10.7.1";/**
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
 */Xe(il,sl,"app");function Fn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const al=bi,Ii=new vt("auth","Firebase",bi());/**
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
 */const Bt=new mi("@firebase/auth");function ol(t,...e){Bt.logLevel<=N.WARN&&Bt.warn(`Auth (${gt}): ${t}`,...e)}function At(t,...e){Bt.logLevel<=N.ERROR&&Bt.error(`Auth (${gt}): ${t}`,...e)}/**
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
 */function Se(t,...e){throw Bn(t,...e)}function ce(t,...e){return Bn(t,...e)}function ll(t,e,n){const r=Object.assign(Object.assign({},al()),{[e]:n});return new vt("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ii.create(t,...e)}function v(t,e,...n){if(!t)throw Bn(e,...n)}function we(t){const e="INTERNAL ASSERTION FAILED: "+t;throw At(e),new Error(e)}function Oe(t,e){t||we(e)}/**
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
 */function An(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ei(){return wr()==="http:"||wr()==="https:"}function wr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ei()||Ba()||"connection"in navigator)?navigator.onLine:!0}function ul(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _t{constructor(e,n){this.shortDelay=e,this.longDelay=n,Oe(n>e,"Short delay should be less than long delay!"),this.isMobile=Fa()||ja()}get(){return cl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jn(t,e){Oe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wi{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hl=new _t(3e4,6e4);function ge(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fe(t,e,n,r,i={}){return Ti(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=nt(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wi.fetch()(Si(t,t.config.apiHost,n,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ti(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dl),e);try{const i=new ml(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ot(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,d]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ot(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ot(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw ot(t,"user-disabled",a);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ll(t,m,d);Se(t,m)}}catch(i){if(i instanceof Ue)throw i;Se(t,"network-request-failed",{message:String(i)})}}async function Gt(t,e,n,r,i={}){const s=await fe(t,e,n,r,i);return"mfaPendingCredential"in s&&Se(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Si(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jn(t.config,i):`${t.config.apiScheme}://${i}`}function fl(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ml{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),hl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ot(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Tr(t){return t!==void 0&&t.getResponse!==void 0}function Sr(t){return t!==void 0&&t.enterprise!==void 0}class pl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fl(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function vl(t){return(await fe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function gl(t,e){return fe(t,"GET","/v2/recaptchaConfig",ge(t,e))}/**
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
 */async function _l(t,e){return fe(t,"POST","/v1/accounts:delete",e)}async function yl(t,e){return fe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bl(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=xn(r);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lt(fn(i.auth_time)),issuedAtTime:lt(fn(i.iat)),expirationTime:lt(fn(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fn(t){return Number(t)*1e3}function xn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return At("JWT malformed, contained fewer than 3 sections"),null;try{const i=di(n);return i?JSON.parse(i):(At("Failed to decode base64 JWT payload"),null)}catch(i){return At("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Il(t){const e=xn(t);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ft(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ue&&El(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function El({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lt(this.lastLoginAt),this.creationTime=lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ft(t,yl(n,{idToken:r}));v(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ol(s.providerUserInfo):[],o=Sl(t.providerData,a),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),m=l?d:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Oi(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,f)}async function Tl(t){const e=Ke(t);await jt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sl(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ol(t){return t.map(e=>{var{providerId:n}=e,r=Fn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Al(t,e){const n=await Ti(t,{},async()=>{const r=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Si(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",wi.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cl(t,e){return fe(t,"POST","/v2/accounts:revokeToken",ge(t,e))}/**
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
 */class mt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Al(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new mt;return r&&(v(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(v(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(v(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mt,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
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
 */function Re(t,e){v(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $e{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Oi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ft(this,this.stsTokenManager.getToken(this.auth,e));return v(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bl(this,e)}reload(){return Tl(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ft(this,_l(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,l,d,m;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=n.photoURL)!==null&&a!==void 0?a:void 0,K=(o=n.tenantId)!==null&&o!==void 0?o:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,W=(d=n.createdAt)!==null&&d!==void 0?d:void 0,B=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:z,emailVerified:J,isAnonymous:Y,providerData:k,stsTokenManager:ne}=n;v(z&&ne,e,"internal-error");const U=mt.fromJSON(this.name,ne);v(typeof z=="string",e,"internal-error"),Re(f,e.name),Re(_,e.name),v(typeof J=="boolean",e,"internal-error"),v(typeof Y=="boolean",e,"internal-error"),Re(y,e.name),Re(S,e.name),Re(K,e.name),Re(I,e.name),Re(W,e.name),Re(B,e.name);const F=new $e({uid:z,auth:e,email:_,emailVerified:J,displayName:f,isAnonymous:Y,photoURL:S,phoneNumber:y,tenantId:K,stsTokenManager:U,createdAt:W,lastLoginAt:B});return k&&Array.isArray(k)&&(F.providerData=k.map(j=>Object.assign({},j))),I&&(F._redirectEventId=I),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new mt;i.updateFromServerResponse(n);const s=new $e({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jt(s),s}}/**
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
 */const Or=new Map;function Te(t){Oe(t instanceof Function,"Expected a class definition");let e=Or.get(t);return e?(Oe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Or.set(t,e),e)}/**
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
 */class Ai{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ai.type="NONE";const Ar=Ai;/**
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
 */function Ct(t,e,n){return`firebase:${t}:${e}:${n}`}class Ze{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ct(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ct("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$e._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ze(Te(Ar),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Te(Ar);const a=Ct(r,e.config.apiKey,e.name);let o=null;for(const d of n)try{const m=await d._get(a);if(m){const f=$e._fromJSON(e,m);d!==s&&(o=f),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ze(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Ze(s,e,r))}}/**
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
 */function Cr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ki(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ci(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ni(e))return"Blackberry";if(Di(e))return"Webos";if(Hn(e))return"Safari";if((e.includes("chrome/")||Ri(e))&&!e.includes("edge/"))return"Chrome";if(Pi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ci(t=Z()){return/firefox\//i.test(t)}function Hn(t=Z()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ri(t=Z()){return/crios\//i.test(t)}function ki(t=Z()){return/iemobile/i.test(t)}function Pi(t=Z()){return/android/i.test(t)}function Ni(t=Z()){return/blackberry/i.test(t)}function Di(t=Z()){return/webos/i.test(t)}function Kt(t=Z()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rl(t=Z()){var e;return Kt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kl(){return xa()&&document.documentMode===10}function Mi(t=Z()){return Kt(t)||Pi(t)||Di(t)||Ni(t)||/windows phone/i.test(t)||ki(t)}function Pl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Li(t,e=[]){let n;switch(t){case"Browser":n=Cr(Z());break;case"Worker":n=`${Cr(Z())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gt}/${r}`}/**
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
 */class Nl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Dl(t,e={}){return fe(t,"GET","/v2/passwordPolicy",ge(t,e))}/**
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
 */const Ml=6;class Ll{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Ml,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Vl{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new Nl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ii,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Te(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ze.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ul()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&v(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dl(this),n=new Ll(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Te(e)||this._popupRedirectResolver;v(n,this,"argument-error"),this.redirectPersistenceManager=await Ze.create(this,[Te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Li(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ol(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fe(t){return Ke(t)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ka(n=>this.observer=n)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Ul(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $n(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ce("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ul().appendChild(r)})}function Vi(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Fl="https://www.google.com/recaptcha/enterprise.js?render=",Bl="recaptcha-enterprise",jl="NO_RECAPTCHA";class xl{constructor(e){this.type=Bl,this.auth=Fe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{gl(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const d=new pl(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;Sr(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(jl)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Sr(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}$n(Fl+o).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function kr(t,e,n,r=!1){const i=new xl(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kr(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await kr(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
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
 */function $l(t,e){const n=gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ut(s,e??{}))return i;Se(i,"already-initialized")}return n.initialize({options:e})}function Wl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zl(t,e,n){const r=Fe(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ui(e),{host:a,port:o}=ql(e),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Gl()}function Ui(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ql(t){const e=Ui(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pr(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Pr(a)}}}function Pr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gl(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,n){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}async function Kl(t,e){return fe(t,"POST","/v1/accounts:sendOobCode",ge(t,e))}async function Jl(t,e){return Kl(t,e)}/**
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
 */async function Qe(t,e){return Gt(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}/**
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
 */const Yl="http://localhost";class Ge extends Wn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fn(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ge(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Qe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qe(e,n)}buildRequest(){const e={requestUri:Yl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nt(n)}return e}}/**
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
 */async function Xl(t,e){return fe(t,"POST","/v1/accounts:sendVerificationCode",ge(t,e))}async function Zl(t,e){return Gt(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e))}async function Ql(t,e){const n=await Gt(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e));if(n.temporaryProof)throw ot(t,"account-exists-with-different-credential",n);return n}const ec={USER_NOT_FOUND:"user-not-found"};async function tc(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Gt(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,n),ec)}/**
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
 */class ct extends Wn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ct({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ct({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Zl(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Ql(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tc(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ct({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class Fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yt extends Fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pe extends yt{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pe.PROVIDER_ID="facebook.com";/**
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
 */class Ne extends yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ge._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ne.credential(n,r)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
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
 */class De extends yt{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
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
 */class Me extends yt{constructor(){super("twitter.com")}static credential(e,n){return Ge._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Me.credential(n,r)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
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
 */class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $e._fromIdTokenResponse(e,r,i),a=Nr(r);return new tt({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nr(r);return new tt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xt extends Ue{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xt(e,n,r,i)}}function Bi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xt._fromErrorAndOperation(t,s,e,r):s})}async function nc(t,e,n=!1){const r=await ft(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tt._forOperation(t,"link",r)}/**
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
 */async function rc(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ft(t,Bi(r,i,e,t),n);v(s.idToken,r,"internal-error");const a=xn(s.idToken);v(a,r,"internal-error");const{sub:o}=a;return v(t.uid===o,r,"user-mismatch"),tt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Se(r,"user-mismatch"),s}}/**
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
 */async function ji(t,e,n=!1){const r="signIn",i=await Bi(t,r,e),s=await tt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ic(t,e){return ji(Fe(t),e)}/**
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
 */function sc(t,e,n){var r;v(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),v(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ac(t,e,n){const r=Fe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,o){v(o.handleCodeInApp,r,"argument-error"),o&&sc(r,a,o)}s(i,n),await Hl(r,i,"getOobCode",Jl)}function oc(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function lc(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}/**
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
 */function cc(t,e){return fe(t,"POST","/v2/accounts/mfaEnrollment:start",ge(t,e))}const Ht="__sak";/**
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
 */class xi{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uc(){const t=Z();return Hn(t)||Kt(t)}const dc=1e3,hc=10;class Hi extends xi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uc()&&Pl(),this.fallbackToPolling=Mi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);kl()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hc):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hi.type="LOCAL";const fc=Hi;/**
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
 */class $i extends xi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$i.type="SESSION";const Wi=$i;/**
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
 */function mc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async d=>d(n.origin,s)),l=await mc(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jt.receivers=[];/**
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
 */function zn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const d=zn("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const _=f;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(_.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function $(){return window}function vc(t){$().location.href=t}/**
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
 */function qn(){return typeof $().WorkerGlobalScope<"u"&&typeof $().importScripts=="function"}async function gc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _c(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yc(){return qn()?self:null}/**
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
 */const zi="firebaseLocalStorageDb",bc=1,$t="firebaseLocalStorage",qi="fbase_key";class bt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yt(t,e){return t.transaction([$t],e?"readwrite":"readonly").objectStore($t)}function Ic(){const t=indexedDB.deleteDatabase(zi);return new bt(t).toPromise()}function Cn(){const t=indexedDB.open(zi,bc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($t,{keyPath:qi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($t)?e(r):(r.close(),await Ic(),e(await Cn()))})})}async function Dr(t,e,n){const r=Yt(t,!0).put({[qi]:e,value:n});return new bt(r).toPromise()}async function Ec(t,e){const n=Yt(t,!1).get(e),r=await new bt(n).toPromise();return r===void 0?null:r.value}function Mr(t,e){const n=Yt(t,!0).delete(e);return new bt(n).toPromise()}const wc=800,Tc=3;class Gi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Tc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(yc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gc(),!this.activeServiceWorker)return;this.sender=new pc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_c()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cn();return await Dr(e,Ht,"1"),await Mr(e,Ht),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ec(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yt(i,!1).getAll();return new bt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gi.type="LOCAL";const Sc=Gi;/**
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
 */function Oc(t,e){return fe(t,"POST","/v2/accounts/mfaSignIn:start",ge(t,e))}/**
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
 */const Ac=500,Cc=6e4,Ot=1e12;class Rc{constructor(e){this.auth=e,this.counter=Ot,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new kc(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ot;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ot;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ot;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class kc{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;v(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Pc(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Cc)},Ac))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Pc(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const mn=Vi("rcb"),Nc=new _t(3e4,6e4),Dc="https://www.google.com/recaptcha/api.js?";class Mc{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return v(Lc(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Tr($().grecaptcha)?Promise.resolve($().grecaptcha):new Promise((r,i)=>{const s=$().setTimeout(()=>{i(ce(e,"network-request-failed"))},Nc.get());$()[mn]=()=>{$().clearTimeout(s),delete $()[mn];const o=$().grecaptcha;if(!o||!Tr(o)){i(ce(e,"internal-error"));return}const l=o.render;o.render=(d,m)=>{const f=l(d,m);return this.counter++,f},this.hostLanguage=n,r(o)};const a=`${Dc}?${nt({onload:mn,render:"explicit",hl:n})}`;$n(a).catch(()=>{clearTimeout(s),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Lc(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Vc{async load(e){return new Rc(e)}clearedOneInstance(){}}/**
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
 */const Ki="recaptcha",Uc={theme:"light",type:"image"};class Fc{constructor(e,n,r=Object.assign({},Uc)){this.parameters=r,this.type=Ki,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;v(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vc:new Mc,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){v(!this.parameters.sitekey,this.auth,"argument-error"),v(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){v(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){v(Ei()&&!qn(),this.auth,"internal-error"),await Bc(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vl(this.auth);v(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return v(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Bc(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class jc{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ct._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function xc(t,e,n){const r=Fe(t),i=await Hc(r,e,Ke(n));return new jc(i,s=>ic(r,s))}async function Hc(t,e,n){var r;const i=await n.verify();try{v(typeof i=="string",t,"argument-error"),v(n.type===Ki,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return v(a.type==="enroll",t,"internal-error"),(await cc(t,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{v(a.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return v(o,t,"missing-multi-factor-info"),(await Oc(t,{mfaPendingCredential:a.credential,mfaEnrollmentId:o,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await Xl(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{n._reset()}}/**
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
 */function $c(t,e){return e?Te(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gn extends Wn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wc(t){return ji(t.auth,new Gn(t),t.bypassAuthState)}function zc(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),rc(n,new Gn(t),t.bypassAuthState)}async function qc(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),nc(n,new Gn(t),t.bypassAuthState)}/**
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
 */class Ji{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wc;case"linkViaPopup":case"linkViaRedirect":return qc;case"reauthViaPopup":case"reauthViaRedirect":return zc;default:Se(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gc=new _t(2e3,1e4);class Ye extends Ji{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ye.currentPopupAction&&Ye.currentPopupAction.cancel(),Ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gc.get())};e()}}Ye.currentPopupAction=null;/**
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
 */const Kc="pendingRedirect",Rt=new Map;class Jc extends Ji{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rt.get(this.auth._key());if(!e){try{const r=await Yc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rt.set(this.auth._key(),e)}return this.bypassAuthState||Rt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yc(t,e){const n=Qc(e),r=Zc(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Xc(t,e){Rt.set(t._key(),e)}function Zc(t){return Te(t._redirectPersistence)}function Qc(t){return Ct(Kc,t.config.apiKey,t.name)}async function eu(t,e,n=!1){const r=Fe(t),i=$c(r,e),a=await new Jc(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const tu=10*60*1e3;class nu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ru(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yi(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lr(e))}saveEventToCache(e){this.cachedEventUids.add(Lr(e)),this.lastProcessedEventTime=Date.now()}}function Lr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ru(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yi(t);default:return!1}}/**
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
 */async function iu(t,e={}){return fe(t,"GET","/v1/projects",e)}/**
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
 */const su=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,au=/^https?/;async function ou(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iu(t);for(const n of e)try{if(lu(n))return}catch{}Se(t,"unauthorized-domain")}function lu(t){const e=An(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!au.test(n))return!1;if(su.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cu=new _t(3e4,6e4);function Vr(){const t=$().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uu(t){return new Promise((e,n)=>{var r,i,s;function a(){Vr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vr(),n(ce(t,"network-request-failed"))},timeout:cu.get()})}if(!((i=(r=$().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$().gapi)===null||s===void 0)&&s.load)a();else{const o=Vi("iframefcb");return $()[o]=()=>{gapi.load?a():n(ce(t,"network-request-failed"))},$n(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw kt=null,e})}let kt=null;function du(t){return kt=kt||uu(t),kt}/**
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
 */const hu=new _t(5e3,15e3),fu="__/auth/iframe",mu="emulator/auth/iframe",pu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gu(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jn(e,mu):`https://${t.config.authDomain}/${fu}`,r={apiKey:e.apiKey,appName:t.name,v:gt},i=vu.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${nt(r).slice(1)}`}async function _u(t){const e=await du(t),n=$().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:gu(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pu,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ce(t,"network-request-failed"),o=$().setTimeout(()=>{s(a)},hu.get());function l(){$().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const yu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bu=500,Iu=600,Eu="_blank",wu="http://localhost";class Ur{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tu(t,e,n,r=bu,i=Iu){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},yu),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Z().toLowerCase();n&&(o=Ri(d)?Eu:n),Ci(d)&&(e=e||wu,l.scrollbars="yes");const m=Object.entries(l).reduce((_,[y,S])=>`${_}${y}=${S},`,"");if(Rl(d)&&o!=="_self")return Su(e||"",o),new Ur(null);const f=window.open(e||"",o,m);v(f,t,"popup-blocked");try{f.focus()}catch{}return new Ur(f)}function Su(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ou="__/auth/handler",Au="emulator/auth/handler",Cu=encodeURIComponent("fac");async function Fr(t,e,n,r,i,s){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gt,eventId:i};if(e instanceof Fi){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ga(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,f]of Object.entries(s||{}))a[m]=f}if(e instanceof yt){const m=e.getScopes().filter(f=>f!=="");m.length>0&&(a.scopes=m.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const m of Object.keys(o))o[m]===void 0&&delete o[m];const l=await t._getAppCheckToken(),d=l?`#${Cu}=${encodeURIComponent(l)}`:"";return`${Ru(t)}?${nt(o).slice(1)}${d}`}function Ru({config:t}){return t.emulator?jn(t,Au):`https://${t.authDomain}/${Ou}`}/**
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
 */const pn="webStorageSupport";class ku{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wi,this._completeRedirectFn=eu,this._overrideRedirectResult=Xc}async _openPopup(e,n,r,i){var s;Oe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Fr(e,n,r,An(),i);return Tu(e,a,zn())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Fr(e,n,r,An(),i);return vc(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Oe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _u(e),r=new nu(e);return n.register("authEvent",i=>(v(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pn,{type:pn},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pn];a!==void 0&&n(!!a),Se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ou(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mi()||Hn()||Kt()}}const Pu=ku;var Br="@firebase/auth",jr="1.5.1";/**
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
 */class Nu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Du(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mu(t){dt(new et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;v(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Li(t)},d=new Vl(r,i,s,l);return Wl(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dt(new et("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(r=>new Nu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Br,jr,Du(t)),Xe(Br,jr,"esm2017")}/**
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
 */const Lu=5*60,Vu=fi("authIdTokenMaxAge")||Lu;let xr=null;const Uu=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vu)return;const i=n==null?void 0:n.token;xr!==i&&(xr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hr(t=Ko()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$l(t,{popupRedirectResolver:Pu,persistence:[Sc,fc,Wi]}),r=fi("authTokenSyncURL");if(r){const s=Uu(r);lc(n,s,()=>s(n.currentUser)),oc(n,a=>s(a))}const i=Va("auth");return i&&zl(n,`http://${i}`),n}Mu("Browser");Nn("email",si);Nn("required",ga);Nn("regex",ai);Ea("zh_TW");Fs({generateMessage:Ia({zh_TW:Sa,ar:Ca})});const Fu={data(){return{firstName:"",lastName:"",email:"tsai19911026@gmail.com",city:"",pwd:"",phoneNum:"+8869",phoneNumValidate:!1,validateNum:"",agree:!1}},components:{VForm:da,VField:ia,ErrorMessage:fa},methods:{onSubmit(t){console.log(JSON.stringify(t,null,2))},isRequired(t){return t?!0:"This field is required"},isPwd(t){return new RegExp("^[A-Z][\\w]{7,}$").test(t)?!0:"密碼首字需為大寫英文，英數混合8碼，例：A1234567"},checkEmail(){return!!new RegExp("^[\\w]+@[\\w]+\\.[\\w]+(\\.[\\w]+)?$").test(this.email)},isPhoneNum(t){return new RegExp("^[+]8869[0-9]{8}$").test(t)?!0:"密碼首字需為大寫英文，英數混合8碼，例：A1234567"},checkPhoneNum(){return!!new RegExp("^[+]8869[0-9]{8}$").test(this.phoneNum)},isValidateNum(){return!!new RegExp("^[0-9]{6}$").test(this.validateNum)},isChecked(t){return t?!0:"請確認是否同意"},callback(t){const e=us(t.credential);console.log("Handle the userData",e)},checkCB(t){this.agree=t.target.checked},firebaseSignInWithPhoneNumber(){const t=On(Qn),e=Hr(t);e.languageCode="zh-TW",window.recaptchaVerifier=new Fc(e,"sign-in-button",{size:"invisible",callback:i=>{console.log(i),onSignInSubmit()}});const n=this.phoneNum,r=window.recaptchaVerifier;xc(e,n,r).then(i=>{window.confirmationResult=i}).catch(i=>{console.log(i)})},firebaseConfirmationResult(){const t=this.validateNum;confirmationResult.confirm(t).then(e=>{const n=e.user;console.log(n),this.phoneNumValidate=!0;const r=document.querySelector(".launchCode");r.outerHTML='<i class="fa-regular fa-circle-check fa-beat" style="color: #669c35;"></i>'}).catch(e=>{console.log(e)})},firebaseSendSignInLinkToEmail(){const t={url:`http://localhost:5173/veeValidate-googleLogin-fireBase-create-vite-vue3/vee-validate/?email=${this.email}`,handleCodeInApp:!0};console.log("click"),On(Qn);const e=Hr();ac(e,this.email,t).then(()=>{window.localStorage.setItem("emailForSignIn",si)}).catch(n=>{const r=n.code,i=n.message;console.log(r,"/",i)})}},created(){},mounted(){}},Ae=t=>(ps("data-v-7b1da927"),t=t(),vs(),t),Bu=Ae(()=>M("div",{class:"vee-validate d-flex align-items-center"},[M("h1",null,"This is a vee-validate page")],-1)),ju={class:"container"},xu={class:"form-floating col-md-4"},Hu=Ae(()=>M("label",{for:"firstName",class:"form-label"},"First name",-1)),$u={class:"form-floating col-md-4"},Wu=Ae(()=>M("label",{for:"lastName",class:"form-label"},"Last name",-1)),zu={class:"form-floating col-md-4 position-relative"},qu=Ae(()=>M("label",{for:"email",class:"form-label"},"Email",-1)),Gu={class:"form-floating col-md-3"},Ku=Ae(()=>M("label",{for:"city",class:"form-label"},"City",-1)),Ju={class:"form-floating col-md-3"},Yu=Ae(()=>M("label",{for:"pwd",class:"form-label"},"Password",-1)),Xu={class:"form-floating col-md-3 position-relative"},Zu=Ae(()=>M("label",{for:"phoneNum",class:"form-label"},"手機號碼",-1)),Qu={class:"form-floating col-md-3 position-relative"},ed=Ae(()=>M("label",{for:"validateNum",class:"form-label"},"驗證碼",-1)),td={class:"col-12"},nd={class:"form-check"},rd=Ae(()=>M("label",{class:"form-check-label",for:"agree"}," Agree to terms and conditions ",-1)),id={class:"col-12"};function sd(t,e,n,r,i,s){const a=Et("v-field"),o=Et("error-message"),l=Et("v-form"),d=Et("GoogleLogin");return ds(),hs(ms,null,[Bu,M("div",ju,[q(l,{class:"row g-3 mb-3",onSubmit:s.onSubmit},{default:fs(({errors:m})=>[M("div",xu,[q(a,{name:"firstName",type:"text",class:"form-control",id:"firstName",rules:s.isRequired},null,8,["rules"]),Hu,q(o,{name:"firstName",class:"text-danger fw-bold"})]),M("div",$u,[q(a,{name:"lastName",type:"text",class:"form-control",id:"lastName",rules:s.isRequired},null,8,["rules"]),Wu,q(o,{name:"lastName",class:"text-danger fw-bold"})]),M("div",zu,[M("button",{type:"button",id:"sign-in-button",class:wt(["btn btn-outline-primary position-absolute launchCode",{disabled:s.checkEmail()===!1}]),onClick:e[0]||(e[0]=(...f)=>s.firebaseSendSignInLinkToEmail&&s.firebaseSendSignInLinkToEmail(...f))},"發送確認連結",2),q(a,{name:"email",type:"text",class:"form-control",id:"email","aria-describedby":"inputGroupPrepend",rules:"required|email",modelValue:i.email,"onUpdate:modelValue":e[1]||(e[1]=f=>i.email=f)},null,8,["modelValue"]),qu,q(o,{name:"email",class:"text-danger fw-bold"})]),M("div",Gu,[q(a,{name:"required",type:"text",class:"form-control",id:"city",rules:"required"}),Ku,q(o,{name:"required",class:"text-danger fw-bold"})]),M("div",Ju,[q(a,{name:"pwd",type:"password",class:"form-control",id:"pwd",rules:s.isPwd},null,8,["rules"]),Yu,q(o,{name:"pwd",class:"text-danger fw-bold"})]),M("div",Xu,[M("button",{type:"button",id:"sign-in-button",class:wt(["btn btn-outline-primary position-absolute launchCode",{disabled:s.checkPhoneNum()===!1}]),onClick:e[2]||(e[2]=(...f)=>s.firebaseSignInWithPhoneNumber&&s.firebaseSignInWithPhoneNumber(...f))},"發送驗證碼",2),q(a,{name:"phoneNum",type:"tel",class:"form-control",id:"phoneNum",value:i.phoneNum,rules:s.isPhoneNum,modelValue:i.phoneNum,"onUpdate:modelValue":e[3]||(e[3]=f=>i.phoneNum=f)},null,8,["value","rules","modelValue"]),Zu,q(o,{name:"phoneNum",class:"text-danger fw-bold"})]),M("div",Qu,[M("button",{type:"button",class:wt(["btn btn-outline-primary position-absolute launchCode",{disabled:s.isValidateNum()===!1}]),onClick:e[4]||(e[4]=(...f)=>s.firebaseConfirmationResult&&s.firebaseConfirmationResult(...f))},"驗證",2),q(a,{name:"validateNum",type:"tel",class:"form-control",id:"validateNum",modelValue:i.validateNum,"onUpdate:modelValue":e[5]||(e[5]=f=>i.validateNum=f)},null,8,["modelValue"]),ed,q(o,{name:"validateNum",class:"text-danger fw-bold"})]),M("div",td,[M("div",nd,[q(a,{name:"agree",class:"form-check-input",type:"checkbox",id:"agree",modelValue:i.agree,"onUpdate:modelValue":e[6]||(e[6]=f=>i.agree=f),onClick:e[7]||(e[7]=f=>s.checkCB(f))},null,8,["modelValue"]),rd,q(o,{name:"agree",class:"text-danger fw-bold"})])]),M("div",id,[M("button",{class:wt(["btn btn-primary",{disabled:i.phoneNumValidate===!1||i.agree===!1}]),type:"submit"},"Submit Form",2)])]),_:1},8,["onSubmit"]),M("div",null,[q(d,{callback:s.callback},null,8,["callback"])])])],64)}const ld=cs(Fu,[["render",sd],["__scopeId","data-v-7b1da927"]]);export{ld as default};
