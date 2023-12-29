import{d as Sn,t as Fe,b as A,r as Tn,h as At,i as Dr,e as Mr,p as Lr,f as Ct,u as M,w as xe,g as Yi,j as O,k as me,l as kt,n as _e,m as Xi,q as Zi,s as jt,v as Qi,_ as es,x as ts,y as _t,o as ns,c as rs,a as j,z as se,A as is,F as ss,B as as,C as os,D as ls}from"./index-GN_XxE6d.js";/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function q(t){return typeof t=="function"}function Vr(t){return t==null}const $e=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function On(t){return Number(t)>=0}function cs(t){const e=parseFloat(t);return isNaN(e)?t:e}function us(t){return typeof t=="object"&&t!==null}function ds(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function Gn(t){if(!us(t)||ds(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function at(t,e){return Object.keys(e).forEach(n=>{if(Gn(e[n])&&Gn(t[n])){t[n]||(t[n]={}),at(t[n],e[n]);return}t[n]=e[n]}),t}function rt(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if(On(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const Ur={};function An(t,e){fs(t,e),Ur[t]=e}function hs(t){return Ur[t]}function fs(t,e){if(!q(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}function Kn(t,e,n){typeof n.value=="object"&&(n.value=k(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function k(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(a){i.add(k(a))})):s==="[object Map]"?(i=new Map,t.forEach(function(a,l){i.set(k(l),k(a))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(k(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)Kn(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||Kn(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}const xt=Symbol("vee-validate-form"),ms=Symbol("vee-validate-field-instance"),Rt=Symbol("Default empty value"),ps=typeof window<"u";function hn(t){return q(t)&&!!t.__locatorRef}function pe(t){return!!t&&q(t.parse)&&t.__type==="VVTypedSchema"}function Pt(t){return!!t&&q(t.validate)}function dt(t){return t==="checkbox"||t==="radio"}function vs(t){return $e(t)||Array.isArray(t)}function gs(t){return Array.isArray(t)?t.length===0:$e(t)&&Object.keys(t).length===0}function $t(t){return/^\[.+\]$/i.test(t)}function _s(t){return Fr(t)&&t.multiple}function Fr(t){return t.tagName==="SELECT"}function ys(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function bs(t,e){return!ys(t,e)&&e.type!=="file"&&!dt(e.type)}function Br(t){return Cn(t)&&t.target&&"submit"in t.target}function Cn(t){return t?!!(typeof Event<"u"&&q(Event)&&t instanceof Event||t&&t.srcElement):!1}function Jn(t,e){return e in t&&t[e]!==Rt}function ee(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!ee(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!ee(r[1],e.get(r[0])))return!1;return!0}if(Yn(t)&&Yn(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(i=Object.keys(t),n=i.length,r=n;r--!==0;){var s=i[r];if(!ee(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Yn(t){return ps?t instanceof File:!1}function kn(t){return $t(t)?t.replace(/\[|\]/gi,""):t}function ae(t,e,n){return t?$t(e)?t[kn(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>vs(i)&&s in i?i[s]:n,t):n}function Ce(t,e,n){if($t(e)){t[kn(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||Vr(i[r[s]]))&&(i[r[s]]=On(r[s+1])?[]:{}),i=i[r[s]]}}function tn(t,e){if(Array.isArray(t)&&On(e)){t.splice(Number(e),1);return}$e(t)&&delete t[e]}function Xn(t,e){if($t(e)){delete t[kn(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){tn(r,n[s]);break}if(!(n[s]in r)||Vr(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,a)=>ae(t,n.slice(0,a).join(".")));for(let s=i.length-1;s>=0;s--)if(gs(i[s])){if(s===0){tn(t,n[0]);continue}tn(i[s-1],n[s-1])}}function he(t){return Object.keys(t)}function jr(t,e=void 0){const n=jt();return(n==null?void 0:n.provides[t])||Dr(t,e)}function Zn(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.findIndex(s=>ee(s,e));return i>=0?r.splice(i,1):r.push(e),r}return ee(t,e)?n:e}function Qn(t,e=0){let n=null,r=[];return function(...i){return n&&clearTimeout(n),n=setTimeout(()=>{const s=t(...i);r.forEach(a=>a(s)),r=[]},e),new Promise(s=>r.push(s))}}function Is(t,e){return $e(e)&&e.number?cs(t):t}function fn(t,e){let n;return async function(...i){const s=t(...i);n=s;const a=await s;return s!==n?a:(n=void 0,e(a,i))}}function mn(t){return Array.isArray(t)?t:t?[t]:[]}function yt(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function ws(t){let e=null,n=[];return function(...r){const i=_e(()=>{if(e!==i)return;const s=t(...r);n.forEach(a=>a(s)),n=[],e=null});return e=i,new Promise(s=>n.push(s))}}function Rn(t,e,n){return e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default}function nn(t){if(xr(t))return t._value}function xr(t){return"_value"in t}function Es(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function Nt(t){if(!Cn(t))return t;const e=t.target;if(dt(e.type)&&xr(e))return nn(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(_s(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(nn);if(Fr(e)){const n=Array.from(e.options).find(r=>r.selected);return n?nn(n):e.value}return Es(e)}function $r(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?$e(t)&&t._$$isNormalized?t:$e(t)?Object.keys(t).reduce((n,r)=>{const i=Ss(t[r]);return t[r]!==!1&&(n[r]=er(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=Ts(r);return i.name&&(n[i.name]=er(i.params)),n},e):e}function Ss(t){return t===!0?[]:Array.isArray(t)||$e(t)?t:[t]}function er(t){const e=n=>typeof n=="string"&&n[0]==="@"?Os(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const Ts=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function Os(t){const e=n=>ae(n,t)||n[t];return e.__locatorRef=t,e}function As(t){return Array.isArray(t)?t.filter(hn):he(t).filter(e=>hn(t[e])).map(e=>t[e])}const Cs={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let pn=Object.assign({},Cs);const Be=()=>pn,ks=t=>{pn=Object.assign(Object.assign({},pn),t)},Rs=ks;async function Hr(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},a=(await Ps(i,t)).errors;return{errors:a,valid:!a.length}}async function Ps(t,e){if(pe(t.rules)||Pt(t.rules))return Ds(e,t.rules);if(q(t.rules)||Array.isArray(t.rules)){const a={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},l=Array.isArray(t.rules)?t.rules:[t.rules],o=l.length,d=[];for(let f=0;f<o;f++){const m=l[f],g=await m(e,a);if(!(typeof g!="string"&&!Array.isArray(g)&&g)){if(Array.isArray(g))d.push(...g);else{const T=typeof g=="string"?g:Wr(a);d.push(T)}if(t.bails)return{errors:d}}}return{errors:d}}const n=Object.assign(Object.assign({},t),{rules:$r(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let a=0;a<s;a++){const l=i[a],o=await Ms(n,e,{name:l,params:n.rules[l]});if(o.error&&(r.push(o.error),t.bails))return{errors:r}}return{errors:r}}function Ns(t){return!!t&&t.name==="ValidationError"}function zr(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!Ns(i))throw i;if(!(!((r=i.inner)===null||r===void 0)&&r.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const s=i.inner.reduce((a,l)=>{const o=l.path||"";return a[o]||(a[o]={errors:[],path:o}),a[o].errors.push(...l.errors),a},{});return{errors:Object.values(s)}}}}}async function Ds(t,e){const r=await(pe(e)?e:zr(e)).parse(t),i=[];for(const s of r.errors)s.errors.length&&i.push(...s.errors);return{errors:i}}async function Ms(t,e,n){const r=hs(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=Ls(n.params,t.formData),s={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},a=await r(e,i,s);return typeof a=="string"?{error:a}:{error:a?void 0:Wr(s)}}function Wr(t){const e=Be().generateMessage;return e?e(t):"Field is invalid"}function Ls(t,e){const n=r=>hn(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function Vs(t,e){const r=await(pe(t)?t:zr(t)).parse(k(e)),i={},s={};for(const a of r.errors){const l=a.errors,o=(a.path||"").replace(/\["(\d+)"\]/g,(d,f)=>`[${f}]`);i[o]={valid:!l.length,errors:l},l.length&&(s[o]=l[0])}return{valid:!r.errors.length,results:i,errors:s,values:r.value}}async function Us(t,e,n){const i=he(t).map(async d=>{var f,m,g;const _=(f=n==null?void 0:n.names)===null||f===void 0?void 0:f[d],T=await Hr(ae(e,d),t[d],{name:(_==null?void 0:_.name)||d,label:_==null?void 0:_.label,values:e,bails:(g=(m=n==null?void 0:n.bailsMap)===null||m===void 0?void 0:m[d])!==null&&g!==void 0?g:!0});return Object.assign(Object.assign({},T),{path:d})});let s=!0;const a=await Promise.all(i),l={},o={};for(const d of a)l[d.path]={valid:d.valid,errors:d.errors},d.valid||(s=!1,o[d.path]=d.errors[0]);return{valid:s,results:l,errors:o}}let tr=0;function Fs(t,e){const{value:n,initialValue:r,setInitialValue:i}=Bs(t,e.modelValue,e.form);if(!e.form){let o=function(_){var T;"value"in _&&(n.value=_.value),"errors"in _&&f(_.errors),"touched"in _&&(g.touched=(T=_.touched)!==null&&T!==void 0?T:g.touched),"initialValue"in _&&i(_.initialValue)};const{errors:d,setErrors:f}=$s(),m=tr>=Number.MAX_SAFE_INTEGER?0:++tr,g=xs(n,r,d,e.schema);return{id:m,path:t,value:n,initialValue:r,meta:g,flags:{pendingUnmount:{[m]:!1},pendingReset:!1},errors:d,setState:o}}const s=e.form.createPathState(t,{bails:e.bails,label:e.label,type:e.type,validate:e.validate,schema:e.schema}),a=A(()=>s.errors);function l(o){var d,f,m;"value"in o&&(n.value=o.value),"errors"in o&&((d=e.form)===null||d===void 0||d.setFieldError(M(t),o.errors)),"touched"in o&&((f=e.form)===null||f===void 0||f.setFieldTouched(M(t),(m=o.touched)!==null&&m!==void 0?m:!1)),"initialValue"in o&&i(o.initialValue)}return{id:Array.isArray(s.id)?s.id[s.id.length-1]:s.id,path:t,value:n,errors:a,meta:s,initialValue:r,flags:s.__flags,setState:l}}function Bs(t,e,n){const r=me(M(e));function i(){return n?ae(n.initialValues.value,M(t),M(r)):M(r)}function s(d){if(!n){r.value=d;return}n.setFieldInitialValue(M(t),d,!0)}const a=A(i);if(!n)return{value:me(i()),initialValue:a,setInitialValue:s};const l=js(e,n,a,t);return n.stageInitialValue(M(t),l,!0),{value:A({get(){return ae(n.values,M(t))},set(d){n.setFieldValue(M(t),d,!1)}}),initialValue:a,setInitialValue:s}}function js(t,e,n,r){return Ct(t)?M(t):t!==void 0?t:ae(e.values,M(r),M(n))}function xs(t,e,n,r){var i,s;const a=(s=(i=r==null?void 0:r.describe)===null||i===void 0?void 0:i.call(r).required)!==null&&s!==void 0?s:!1,l=kt({touched:!1,pending:!1,valid:!0,required:a,validated:!!M(n).length,initialValue:A(()=>M(e)),dirty:A(()=>!ee(M(t),M(e)))});return xe(n,o=>{l.valid=!o.length},{immediate:!0,flush:"sync"}),l}function $s(){const t=me([]);return{errors:t,setErrors:e=>{t.value=mn(e)}}}function Hs(t,e,n){return dt(n==null?void 0:n.type)?Ws(t,e,n):qr(t,e,n)}function qr(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:a,checkedValue:l,label:o,validateOnValueUpdate:d,uncheckedValue:f,controlled:m,keepValueOnUnmount:g,syncVModel:_,form:T}=zs(n),G=m?jr(xt):void 0,I=T||G,z=A(()=>rt(O(t))),F=A(()=>{if(O(I==null?void 0:I.schema))return;const E=M(e);return Pt(E)||pe(E)||q(E)||Array.isArray(E)?E:$r(E)}),{id:W,value:K,initialValue:J,meta:R,setState:te,errors:V,flags:U}=Fs(z,{modelValue:r,form:I,bails:s,label:o,type:a,validate:F.value?le:void 0,schema:pe(e)?e:void 0}),B=A(()=>V.value[0]);_&&qs({value:K,prop:_,handleChange:S,shouldValidate:()=>d&&!U.pendingReset});const ve=(v,E=!1)=>{R.touched=!0,E&&oe()};async function ye(v){var E,D;if(I!=null&&I.validateSchema){const{results:P}=await I.validateSchema(v);return(E=P[O(z)])!==null&&E!==void 0?E:{valid:!0,errors:[]}}return F.value?Hr(K.value,F.value,{name:O(z),label:O(o),values:(D=I==null?void 0:I.values)!==null&&D!==void 0?D:{},bails:s}):{valid:!0,errors:[]}}const oe=fn(async()=>(R.pending=!0,R.validated=!0,ye("validated-only")),v=>(U.pendingUnmount[Z.id]||(te({errors:v.errors}),R.pending=!1,R.valid=v.valid),v)),ne=fn(async()=>ye("silent"),v=>(R.valid=v.valid,v));function le(v){return(v==null?void 0:v.mode)==="silent"?ne():oe()}function S(v,E=!0){const D=Nt(v);tt(D,E)}Mr(()=>{if(i)return oe();(!I||!I.validateSchema)&&ne()});function re(v){R.touched=v}function ue(v){var E;const D=v&&"value"in v?v.value:J.value;te({value:k(D),initialValue:k(D),touched:(E=v==null?void 0:v.touched)!==null&&E!==void 0?E:!1,errors:(v==null?void 0:v.errors)||[]}),R.pending=!1,R.validated=!1,ne()}const Oe=jt();function tt(v,E=!0){K.value=Oe&&_?Is(v,Oe.props.modelModifiers):v,(E?oe:ne)()}function gt(v){te({errors:Array.isArray(v)?v:[v]})}const $n=A({get(){return K.value},set(v){tt(v,d)}}),Z={id:W,name:z,label:o,value:$n,meta:R,errors:V,errorMessage:B,type:a,checkedValue:l,uncheckedValue:f,bails:s,keepValueOnUnmount:g,resetField:ue,handleReset:()=>ue(),validate:le,handleChange:S,handleBlur:ve,setState:te,setTouched:re,setErrors:gt,setValue:tt};if(Lr(ms,Z),Ct(e)&&typeof M(e)!="function"&&xe(e,(v,E)=>{ee(v,E)||(R.validated?oe():ne())},{deep:!0}),!I)return Z;const Gt=A(()=>{const v=F.value;return!v||q(v)||Pt(v)||pe(v)||Array.isArray(v)?{}:Object.keys(v).reduce((E,D)=>{const P=As(v[D]).map(be=>be.__locatorRef).reduce((be,ge)=>{const de=ae(I.values,ge)||I.values[ge];return de!==void 0&&(be[ge]=de),be},{});return Object.assign(E,P),E},{})});return xe(Gt,(v,E)=>{if(!Object.keys(v).length)return;!ee(v,E)&&(R.validated?oe():ne())}),Yi(()=>{var v;const E=(v=O(Z.keepValueOnUnmount))!==null&&v!==void 0?v:O(I.keepValuesOnUnmount),D=O(z);if(E||!I||U.pendingUnmount[Z.id]){I==null||I.removePathState(D,W);return}U.pendingUnmount[Z.id]=!0;const P=I.getPathState(D);if(Array.isArray(P==null?void 0:P.id)&&(P!=null&&P.multiple)?P!=null&&P.id.includes(Z.id):(P==null?void 0:P.id)===Z.id){if(P!=null&&P.multiple&&Array.isArray(P.value)){const ge=P.value.findIndex(de=>ee(de,O(Z.checkedValue)));if(ge>-1){const de=[...P.value];de.splice(ge,1),I.setFieldValue(D,de)}Array.isArray(P.id)&&P.id.splice(P.id.indexOf(Z.id),1)}else I.unsetPathValue(O(z));I.removePathState(D,W)}}),Z}function zs(t){const e=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(t!=null&&t.syncVModel),r=typeof(t==null?void 0:t.syncVModel)=="string"?t.syncVModel:(t==null?void 0:t.modelPropName)||"modelValue",i=n&&!("initialValue"in(t||{}))?vn(jt(),r):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},e()),{initialValue:i});const s="valueProp"in t?t.valueProp:t.checkedValue,a="standalone"in t?!t.standalone:t.controlled,l=(t==null?void 0:t.modelPropName)||(t==null?void 0:t.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},e()),t||{}),{initialValue:i,controlled:a??!0,checkedValue:s,syncVModel:l})}function Ws(t,e,n){const r=n!=null&&n.standalone?void 0:jr(xt),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function a(l){const o=l.handleChange,d=A(()=>{const m=O(l.value),g=O(i);return Array.isArray(m)?m.findIndex(_=>ee(_,g))>=0:ee(g,m)});function f(m,g=!0){var _,T;if(d.value===((_=m==null?void 0:m.target)===null||_===void 0?void 0:_.checked)){g&&l.validate();return}const G=O(t),I=r==null?void 0:r.getPathState(G),z=Nt(m);let F=(T=O(i))!==null&&T!==void 0?T:z;r&&(I!=null&&I.multiple)&&I.type==="checkbox"?F=Zn(ae(r.values,G)||[],F,void 0):(n==null?void 0:n.type)==="checkbox"&&(F=Zn(O(l.value),F,O(s))),o(F,g)}return Object.assign(Object.assign({},l),{checked:d,checkedValue:i,uncheckedValue:s,handleChange:f})}return a(qr(t,e,n))}function qs({prop:t,value:e,handleChange:n,shouldValidate:r}){const i=jt();if(!i||!t)return;const s=typeof t=="string"?t:"modelValue",a=`update:${s}`;s in i.props&&(xe(e,l=>{ee(l,vn(i,s))||i.emit(a,l)}),xe(()=>vn(i,s),l=>{if(l===Rt&&e.value===void 0)return;const o=l===Rt?void 0:l;ee(o,e.value)||n(o,r())}))}function vn(t,e){if(t)return t.props[e]}const Gs=Sn({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Be().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Rt},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=Fe(t,"rules"),r=Fe(t,"name"),i=Fe(t,"label"),s=Fe(t,"uncheckedValue"),a=Fe(t,"keepValue"),{errors:l,value:o,errorMessage:d,validate:f,handleChange:m,handleBlur:g,setTouched:_,resetField:T,handleReset:G,meta:I,checked:z,setErrors:F}=Hs(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:Js(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:t.validateOnModelUpdate,keepValueOnUnmount:a,syncVModel:!0}),W=function(U,B=!0){m(U,B)},K=A(()=>{const{validateOnInput:V,validateOnChange:U,validateOnBlur:B,validateOnModelUpdate:ve}=Ks(t);function ye(S){g(S,B),q(e.attrs.onBlur)&&e.attrs.onBlur(S)}function oe(S){W(S,V),q(e.attrs.onInput)&&e.attrs.onInput(S)}function ne(S){W(S,U),q(e.attrs.onChange)&&e.attrs.onChange(S)}const le={name:t.name,onBlur:ye,onInput:oe,onChange:ne};return le["onUpdate:modelValue"]=S=>W(S,ve),le}),J=A(()=>{const V=Object.assign({},K.value);dt(e.attrs.type)&&z&&(V.checked=z.value);const U=nr(t,e);return bs(U,e.attrs)&&(V.value=o.value),V}),R=A(()=>Object.assign(Object.assign({},K.value),{modelValue:o.value}));function te(){return{field:J.value,componentField:R.value,value:o.value,meta:I,errors:l.value,errorMessage:d.value,validate:f,resetField:T,handleChange:W,handleInput:V=>W(V,!1),handleReset:G,handleBlur:K.value.onBlur,setTouched:_,setErrors:F}}return e.expose({value:o,meta:I,errors:l,errorMessage:d,setErrors:F,setTouched:_,reset:T,validate:f,handleChange:m}),()=>{const V=Tn(nr(t,e)),U=Rn(V,e,te);return V?At(V,Object.assign(Object.assign({},e.attrs),J.value),U):U}}});function nr(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function Ks(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:a,validateOnBlur:l,validateOnModelUpdate:o}=Be();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:a,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:l,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:o}}function Js(t,e){return dt(e.attrs.type)?Jn(t,"modelValue")?t.modelValue:void 0:Jn(t,"modelValue")?t.modelValue:e.attrs.value}const Ys=Gs;let Xs=0;const bt=["bails","fieldsCount","id","multiple","type","validate"];function Gr(t){const e=Object.assign({},O((t==null?void 0:t.initialValues)||{})),n=M(t==null?void 0:t.validationSchema);return n&&pe(n)&&q(n.cast)?k(n.cast(e)||{}):k(e)}function Zs(t){var e;const n=Xs++;let r=0;const i=me(!1),s=me(!1),a=me(0),l=[],o=kt(Gr(t)),d=me([]),f=me({}),m=me({}),g=ws(()=>{m.value=d.value.reduce((u,c)=>(u[rt(O(c.path))]=c,u),{})});function _(u,c){const h=S(u);if(!h){typeof u=="string"&&(f.value[rt(u)]=mn(c));return}if(typeof u=="string"){const p=rt(u);f.value[p]&&delete f.value[p]}h.errors=mn(c),h.valid=!h.errors.length}function T(u){he(u).forEach(c=>{_(c,u[c])})}t!=null&&t.initialErrors&&T(t.initialErrors);const G=A(()=>{const u=d.value.reduce((c,h)=>(h.errors.length&&(c[h.path]=h.errors),c),{});return Object.assign(Object.assign({},f.value),u)}),I=A(()=>he(G.value).reduce((u,c)=>{const h=G.value[c];return h!=null&&h.length&&(u[c]=h[0]),u},{})),z=A(()=>d.value.reduce((u,c)=>(u[c.path]={name:c.path||"",label:c.label||""},u),{})),F=A(()=>d.value.reduce((u,c)=>{var h;return u[c.path]=(h=c.bails)!==null&&h!==void 0?h:!0,u},{})),W=Object.assign({},(t==null?void 0:t.initialErrors)||{}),K=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:J,originalInitialValues:R,setInitialValues:te}=ea(d,o,t),V=Qs(d,o,R,I),U=A(()=>d.value.reduce((u,c)=>{const h=ae(o,c.path);return Ce(u,c.path,h),u},{})),B=t==null?void 0:t.validationSchema;function ve(u,c){var h,p;const w=A(()=>ae(J.value,O(u))),b=m.value[O(u)],C=(c==null?void 0:c.type)==="checkbox"||(c==null?void 0:c.type)==="radio";if(b&&C){b.multiple=!0;const fe=r++;return Array.isArray(b.id)?b.id.push(fe):b.id=[b.id,fe],b.fieldsCount++,b.__flags.pendingUnmount[fe]=!1,b}const x=A(()=>ae(o,O(u))),$=O(u),Q=ue.findIndex(fe=>fe===$);Q!==-1&&ue.splice(Q,1);const L=A(()=>{var fe,nt,Zt,qn,Qt,en;return pe(B)?(Zt=(nt=(fe=B).describe)===null||nt===void 0?void 0:nt.call(fe,O(u)).required)!==null&&Zt!==void 0?Zt:!1:pe(c==null?void 0:c.schema)&&(en=(Qt=(qn=c==null?void 0:c.schema).describe)===null||Qt===void 0?void 0:Qt.call(qn).required)!==null&&en!==void 0?en:!1}),Y=r++,ie=kt({id:Y,path:u,touched:!1,pending:!1,valid:!0,validated:!!(!((h=W[$])===null||h===void 0)&&h.length),required:L,initialValue:w,errors:Qi([]),bails:(p=c==null?void 0:c.bails)!==null&&p!==void 0?p:!1,label:c==null?void 0:c.label,type:(c==null?void 0:c.type)||"default",value:x,multiple:!1,__flags:{pendingUnmount:{[Y]:!1},pendingReset:!1},fieldsCount:1,validate:c==null?void 0:c.validate,dirty:A(()=>!ee(M(x),M(w)))});return d.value.push(ie),m.value[$]=ie,g(),I.value[$]&&!W[$]&&_e(()=>{Ve($,{mode:"silent"})}),Ct(u)&&xe(u,fe=>{g();const nt=k(x.value);m.value[fe]=ie,_e(()=>{Ce(o,fe,nt)})}),ie}const ye=Qn(Wn,5),oe=Qn(Wn,5),ne=fn(async u=>await(u==="silent"?ye():oe()),(u,[c])=>{const h=he(E.errorBag.value),w=[...new Set([...he(u.results),...d.value.map(b=>b.path),...h])].sort().reduce((b,C)=>{var x;const $=C,Q=S($)||re($),L=((x=u.results[$])===null||x===void 0?void 0:x.errors)||[],Y=O(Q==null?void 0:Q.path)||$,ie=ta({errors:L,valid:!L.length},b.results[Y]);return b.results[Y]=ie,ie.valid||(b.errors[Y]=ie.errors[0]),Q&&f.value[Y]&&delete f.value[Y],Q?(Q.valid=ie.valid,c==="silent"||c==="validated-only"&&!Q.validated||_(Q,ie.errors),b):(_(Y,L),b)},{valid:u.valid,results:{},errors:{}});return u.values&&(w.values=u.values),w});function le(u){d.value.forEach(u)}function S(u){const c=typeof u=="string"?rt(u):u;return typeof c=="string"?m.value[c]:c}function re(u){return d.value.filter(h=>u.startsWith(h.path)).reduce((h,p)=>h?p.path.length>h.path.length?p:h:p,void 0)}let ue=[],Oe;function tt(u){return ue.push(u),Oe||(Oe=_e(()=>{[...ue].sort().reverse().forEach(h=>{Xn(o,h)}),ue=[],Oe=null})),Oe}function gt(u){return function(h,p){return function(b){return b instanceof Event&&(b.preventDefault(),b.stopPropagation()),le(C=>C.touched=!0),i.value=!0,a.value++,qe().then(C=>{const x=k(o);if(C.valid&&typeof h=="function"){const $=k(U.value);let Q=u?$:x;return C.values&&(Q=C.values),h(Q,{evt:b,controlledValues:$,setErrors:T,setFieldError:_,setTouched:Kt,setFieldTouched:de,setValues:be,setFieldValue:D,resetForm:Jt,resetField:Hn})}!C.valid&&typeof p=="function"&&p({values:x,evt:b,errors:C.errors,results:C.results})}).then(C=>(i.value=!1,C),C=>{throw i.value=!1,C})}}}const Z=gt(!1);Z.withControlled=gt(!0);function Gt(u,c){const h=d.value.findIndex(w=>w.path===u),p=d.value[h];if(!(h===-1||!p)){if(_e(()=>{Ve(u,{mode:"silent",warn:!1})}),p.multiple&&p.fieldsCount&&p.fieldsCount--,Array.isArray(p.id)){const w=p.id.indexOf(c);w>=0&&p.id.splice(w,1),delete p.__flags.pendingUnmount[c]}(!p.multiple||p.fieldsCount<=0)&&(d.value.splice(h,1),zn(u),g(),delete m.value[u])}}function v(u){he(m.value).forEach(c=>{c.startsWith(u)&&delete m.value[c]}),d.value=d.value.filter(c=>!c.path.startsWith(u)),_e(()=>{g()})}const E={formId:n,values:o,controlledValues:U,errorBag:G,errors:I,schema:B,submitCount:a,meta:V,isSubmitting:i,isValidating:s,fieldArrays:l,keepValuesOnUnmount:K,validateSchema:M(B)?ne:void 0,validate:qe,setFieldError:_,validateField:Ve,setFieldValue:D,setValues:be,setErrors:T,setFieldTouched:de,setTouched:Kt,resetForm:Jt,resetField:Hn,handleSubmit:Z,useFieldModel:Gi,defineInputBinds:Ki,defineComponentBinds:Ji,defineField:Xt,stageInitialValue:Wi,unsetInitialValue:zn,setFieldInitialValue:Yt,createPathState:ve,getPathState:S,unsetPathValue:tt,removePathState:Gt,initialValues:J,getAllPathStates:()=>d.value,destroyPath:v,isFieldTouched:$i,isFieldDirty:Hi,isFieldValid:zi};function D(u,c,h=!0){const p=k(c),w=typeof u=="string"?u:u.path;S(w)||ve(w),Ce(o,w,p),h&&Ve(w)}function P(u,c=!0){he(o).forEach(h=>{delete o[h]}),he(u).forEach(h=>{D(h,u[h],!1)}),c&&qe()}function be(u,c=!0){at(o,u),l.forEach(h=>h&&h.reset()),c&&qe()}function ge(u,c){const h=S(O(u))||ve(u);return A({get(){return h.value},set(p){var w;const b=O(u);D(b,p,(w=O(c))!==null&&w!==void 0?w:!1)}})}function de(u,c){const h=S(u);h&&(h.touched=c)}function $i(u){const c=S(u);return c?c.touched:d.value.filter(h=>h.path.startsWith(u)).some(h=>h.touched)}function Hi(u){const c=S(u);return c?c.dirty:d.value.filter(h=>h.path.startsWith(u)).some(h=>h.dirty)}function zi(u){const c=S(u);return c?c.valid:d.value.filter(h=>h.path.startsWith(u)).every(h=>h.valid)}function Kt(u){if(typeof u=="boolean"){le(c=>{c.touched=u});return}he(u).forEach(c=>{de(c,!!u[c])})}function Hn(u,c){var h;const p=c&&"value"in c?c.value:ae(J.value,u),w=S(u);w&&(w.__flags.pendingReset=!0),Yt(u,k(p),!0),D(u,p,!1),de(u,(h=c==null?void 0:c.touched)!==null&&h!==void 0?h:!1),_(u,(c==null?void 0:c.errors)||[]),_e(()=>{w&&(w.__flags.pendingReset=!1)})}function Jt(u,c){let h=k(u!=null&&u.values?u.values:R.value);h=c!=null&&c.force?h:at(R.value,h),h=pe(B)&&q(B.cast)?B.cast(h):h,te(h),le(p=>{var w;p.__flags.pendingReset=!0,p.validated=!1,p.touched=((w=u==null?void 0:u.touched)===null||w===void 0?void 0:w[p.path])||!1,D(p.path,ae(h,p.path),!1),_(p.path,void 0)}),c!=null&&c.force?P(h,!1):be(h,!1),T((u==null?void 0:u.errors)||{}),a.value=(u==null?void 0:u.submitCount)||0,_e(()=>{qe({mode:"silent"}),le(p=>{p.__flags.pendingReset=!1})})}async function qe(u){const c=(u==null?void 0:u.mode)||"force";if(c==="force"&&le(b=>b.validated=!0),E.validateSchema)return E.validateSchema(c);s.value=!0;const h=await Promise.all(d.value.map(b=>b.validate?b.validate(u).then(C=>({key:b.path,valid:C.valid,errors:C.errors})):Promise.resolve({key:b.path,valid:!0,errors:[]})));s.value=!1;const p={},w={};for(const b of h)p[b.key]={valid:b.valid,errors:b.errors},b.errors.length&&(w[b.key]=b.errors[0]);return{valid:h.every(b=>b.valid),results:p,errors:w}}async function Ve(u,c){var h;const p=S(u);if(p&&(c==null?void 0:c.mode)!=="silent"&&(p.validated=!0),B){const{results:w}=await ne((c==null?void 0:c.mode)||"validated-only");return w[u]||{errors:[],valid:!0}}return p!=null&&p.validate?p.validate(c):(!p&&(h=c==null?void 0:c.warn),Promise.resolve({errors:[],valid:!0}))}function zn(u){Xn(J.value,u)}function Wi(u,c,h=!1){Yt(u,c),Ce(o,u,c),h&&!(t!=null&&t.initialValues)&&Ce(R.value,u,k(c))}function Yt(u,c,h=!1){Ce(J.value,u,k(c)),h&&Ce(R.value,u,k(c))}async function Wn(){const u=M(B);if(!u)return{valid:!0,results:{},errors:{}};s.value=!0;const c=Pt(u)||pe(u)?await Vs(u,o):await Us(u,o,{names:z.value,bailsMap:F.value});return s.value=!1,c}const qi=Z((u,{evt:c})=>{Br(c)&&c.target.submit()});Mr(()=>{if(t!=null&&t.initialErrors&&T(t.initialErrors),t!=null&&t.initialTouched&&Kt(t.initialTouched),t!=null&&t.validateOnMount){qe();return}E.validateSchema&&E.validateSchema("silent")}),Ct(B)&&xe(B,()=>{var u;(u=E.validateSchema)===null||u===void 0||u.call(E,"validated-only")}),Lr(xt,E);function Xt(u,c){const h=q(c)||c==null?void 0:c.label,p=S(O(u))||ve(u,{label:h}),w=()=>q(c)?c(yt(p,bt)):c||{};function b(){var L;p.touched=!0,((L=w().validateOnBlur)!==null&&L!==void 0?L:Be().validateOnBlur)&&Ve(p.path)}function C(){var L;((L=w().validateOnInput)!==null&&L!==void 0?L:Be().validateOnInput)&&_e(()=>{Ve(p.path)})}function x(){var L;((L=w().validateOnChange)!==null&&L!==void 0?L:Be().validateOnChange)&&_e(()=>{Ve(p.path)})}const $=A(()=>{const L={onChange:x,onInput:C,onBlur:b};return q(c)?Object.assign(Object.assign({},L),c(yt(p,bt)).props||{}):c!=null&&c.props?Object.assign(Object.assign({},L),c.props(yt(p,bt))):L});return[ge(u,()=>{var L,Y,ie;return(ie=(L=w().validateOnModelUpdate)!==null&&L!==void 0?L:(Y=Be())===null||Y===void 0?void 0:Y.validateOnModelUpdate)!==null&&ie!==void 0?ie:!0}),$]}function Gi(u){return Array.isArray(u)?u.map(c=>ge(c,!0)):ge(u)}function Ki(u,c){const[h,p]=Xt(u,c);function w(x){p.value.onBlur(x)}function b(x){const $=Nt(x);D(O(u),$,!1),p.value.onInput(x)}function C(x){const $=Nt(x);D(O(u),$,!1),p.value.onChange(x)}return A(()=>Object.assign(Object.assign({},p.value),{onBlur:w,onInput:b,onChange:C,value:h.value}))}function Ji(u,c){const[h,p]=Xt(u,c),w=S(O(u));function b(C){h.value=C}return A(()=>{const C=q(c)?c(yt(w,bt)):c||{};return Object.assign({[C.model||"modelValue"]:h.value,[`onUpdate:${C.model||"modelValue"}`]:b},p.value)})}return Object.assign(Object.assign({},E),{values:Xi(o),handleReset:()=>Jt(),submitForm:qi})}function Qs(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=A(()=>!ee(e,M(n)));function a(){const o=t.value;return he(i).reduce((d,f)=>{const m=i[f];return d[f]=o[m](g=>g[f]),d},{})}const l=kt(a());return Zi(()=>{const o=a();l.touched=o.touched,l.valid=o.valid,l.pending=o.pending}),A(()=>Object.assign(Object.assign({initialValues:M(n)},l),{valid:l.valid&&!he(r.value).length,dirty:s.value}))}function ea(t,e,n){const r=Gr(n),i=me(r),s=me(k(r));function a(l,o=!1){i.value=at(k(i.value)||{},k(l)),s.value=at(k(s.value)||{},k(l)),o&&t.value.forEach(d=>{if(d.touched)return;const m=ae(i.value,d.path);Ce(e,d.path,k(m))})}return{initialValues:i,originalInitialValues:s,setInitialValues:a}}function ta(t,e){return e?{valid:t.valid&&e.valid,errors:[...t.errors,...e.errors]}:t}const na=Sn({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=Fe(t,"validationSchema"),r=Fe(t,"keepValues"),{errors:i,errorBag:s,values:a,meta:l,isSubmitting:o,isValidating:d,submitCount:f,controlledValues:m,validate:g,validateField:_,handleReset:T,resetForm:G,handleSubmit:I,setErrors:z,setFieldError:F,setFieldValue:W,setValues:K,setFieldTouched:J,setTouched:R,resetField:te}=Zs({validationSchema:n.value?n:void 0,initialValues:t.initialValues,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:r}),V=I((S,{evt:re})=>{Br(re)&&re.target.submit()},t.onInvalidSubmit),U=t.onSubmit?I(t.onSubmit,t.onInvalidSubmit):V;function B(S){Cn(S)&&S.preventDefault(),T(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function ve(S,re){return I(typeof S=="function"&&!re?S:re,t.onInvalidSubmit)(S)}function ye(){return k(a)}function oe(){return k(l.value)}function ne(){return k(i.value)}function le(){return{meta:l.value,errors:i.value,errorBag:s.value,values:a,isSubmitting:o.value,isValidating:d.value,submitCount:f.value,controlledValues:m.value,validate:g,validateField:_,handleSubmit:ve,handleReset:T,submitForm:V,setErrors:z,setFieldError:F,setFieldValue:W,setValues:K,setFieldTouched:J,setTouched:R,resetForm:G,resetField:te,getValues:ye,getMeta:oe,getErrors:ne}}return e.expose({setFieldError:F,setErrors:z,setFieldValue:W,setValues:K,setFieldTouched:J,setTouched:R,resetForm:G,validate:g,validateField:_,resetField:te,getValues:ye,getMeta:oe,getErrors:ne,values:a,meta:l,errors:i}),function(){const re=t.as==="form"?t.as:t.as?Tn(t.as):null,ue=Rn(re,e,le);return re?At(re,Object.assign(Object.assign(Object.assign({},re==="form"?{novalidate:!0}:{}),e.attrs),{onSubmit:U,onReset:B}),ue):ue}}}),ra=na,ia=Sn({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Dr(xt,void 0),r=A(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?Tn(t.as):t.as,a=Rn(s,e,i),l=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(a)||!a)&&(a!=null&&a.length)?a:(Array.isArray(a)||!a)&&!(a!=null&&a.length)?At(s||"span",l,r.value):At(s,l,a)}}}),sa=ia;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function aa(t,e){return Array.isArray(t)?t[0]:t[e]}function Kr(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const rr=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,oa=t=>Kr(t)?!0:Array.isArray(t)?t.every(e=>rr.test(String(e))):rr.test(String(t)),Jr=(t,e)=>{if(Kr(t))return!0;let n=aa(e,"regex");return typeof n=="string"&&(n=new RegExp(n)),Array.isArray(t)?t.every(r=>Jr(r,{regex:n})):n.test(String(t))};function la(t){return t==null}function ca(t){return Array.isArray(t)&&t.length===0}const ua=t=>la(t)||ca(t)||t===!1?!1:!!String(t).trim().length;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function ir(t){return typeof t=="function"}function da(t){return typeof t=="object"&&t!==null}function ha(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function sr(t){if(!da(t)||ha(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Yr(t,e){return Object.keys(e).forEach(n=>{if(sr(e[n])&&sr(t[n])){t[n]||(t[n]={}),Yr(t[n],e[n]);return}t[n]=e[n]}),t}function ar(t,e){return t.replace(/(\d:)?{([^}]+)}/g,function(n,r,i){if(!r||!e.params)return i in e?e[i]:e.params&&i in e.params?e.params[i]:`{${i}}`;if(!Array.isArray(e.params))return i in e.params?e.params[i]:`{${i}}`;const s=Number(r.replace(":",""));return s in e.params?e.params[s]:`${r}{${i}}`})}class fa{constructor(e,n){this.container={},this.locale=e,this.merge(n)}resolve(e){return this.format(this.locale,e)}getLocaleDefault(e,n){var r,i,s,a,l;return((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[n])===null||s===void 0?void 0:s._default)||((l=(a=this.container[e])===null||a===void 0?void 0:a.messages)===null||l===void 0?void 0:l._default)}resolveLabel(e,n,r){var i,s,a,l;return r?((s=(i=this.container[e])===null||i===void 0?void 0:i.names)===null||s===void 0?void 0:s[r])||r:((l=(a=this.container[e])===null||a===void 0?void 0:a.names)===null||l===void 0?void 0:l[n])||n}format(e,n){var r,i,s,a,l;let o;const{rule:d,form:f,label:m,name:g}=n,_=this.resolveLabel(e,g,m);return d?(o=((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[g])===null||s===void 0?void 0:s[d.name])||((l=(a=this.container[e])===null||a===void 0?void 0:a.messages)===null||l===void 0?void 0:l[d.name]),o||(o=this.getLocaleDefault(e,g)||`${_} is not valid`),ir(o)?o(n):ar(o,Object.assign(Object.assign({},f),{field:_,params:d.params}))):(o=this.getLocaleDefault(e,g)||`${_} is not valid`,ir(o)?o(n):ar(o,Object.assign(Object.assign({},f),{field:_})))}merge(e){Yr(this.container,e)}}const it=new fa("en",{});function ma(t,e){const n=r=>it.resolve(r);return typeof t=="string"?(it.locale=t,e&&it.merge({[t]:e}),n):(it.merge(t),n)}function pa(t){it.locale=t}const va="zh_TW",ga={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},_a={code:va,messages:ga},ya="ar",ba={alpha:"{field} يجب ان يحتوي على حروف فقط",alpha_num:"{field} قد يحتوي فقط على حروف وارقام",alpha_dash:"{field} قد يحتوي على حروف او الرموز - و _",alpha_spaces:"{field} قد يحتوي فقط على حروف ومسافات",between:"قيمة {field} يجب ان تكون ما بين 0:{min} و 1:{max}",confirmed:"{field} لا يماثل التأكيد",digits:"{field} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن 0:{length} رقم",dimensions:"{field} يجب ان تكون بمقاس 0:{width} بكسل في 1:{height} بكسل",email:"{field} يجب ان يكون بريدا اليكتروني صحيح",not_one_of:"الحقل {field} غير صحيح",ext:"نوع ملف {field} غير صحيح",image:"{field} يجب ان تكون صورة",integer:"الحقل {field} يجب ان يكون عدداً صحيحاً",length:"حقل {field} يجب الا يزيد عن 0:{length}",max_value:"قيمة الحقل {field} يجب ان تكون اصغر من 0:{min} او تساويها",max:"الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأكثر",mimes:"نوع ملف {field} غير صحيح",min_value:"قيمة الحقل {field} يجب ان تكون اكبر من 0:{min} او تساويها",min:"الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأقل",numeric:"{field} يمكن ان يحتوي فقط على ارقام",one_of:"الحقل {field} يجب ان يكون قيمة صحيحة",regex:"الحقل {field} غير صحيح",required:"{field} مطلوب",required_if:"حقل {field} مطلوب",size:"{field} يجب ان يكون اقل من 0:{size} كيلوبايت",url:"حقل {field} ليس رابطاً صحيحاً"},Ia={code:ya,messages:ba};var or={};/**
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
 */const Xr=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wa=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],o=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(o&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,o=i+2<t.length,d=o?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,_=d&63;o||(_=64,a||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wa(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new Ea;const g=s<<2|l>>4;if(r.push(g),d!==64){const _=l<<4&240|d>>2;if(r.push(_),m!==64){const T=d<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ea extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sa=function(t){const e=Xr(t);return Zr.encodeByteArray(e,!0)},Qr=function(t){return Sa(t).replace(/\./g,"")},ei=function(t){try{return Zr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oa=()=>Ta().__FIREBASE_DEFAULTS__,Aa=()=>{if(typeof process>"u"||typeof or>"u")return;const t=or.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ca=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ei(t[1]);return e&&JSON.parse(e)},Pn=()=>{try{return Oa()||Aa()||Ca()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ka=t=>{var e,n;return(n=(e=Pn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ti=()=>{var t;return(t=Pn())===null||t===void 0?void 0:t.config},ni=t=>{var e;return(e=Pn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Na(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Da(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ma(){const t=X();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function La(){try{return typeof indexedDB=="object"}catch{return!1}}function Va(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ua="FirebaseError";class Le extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ua,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ht.prototype.create)}}class ht{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Fa(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Le(i,l,r)}}function Fa(t,e){return t.replace(Ba,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ba=/\{\$([^}]+)}/g;function ja(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(lr(s)&&lr(a)){if(!Dt(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lr(t){return t!==null&&typeof t=="object"}/**
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
 */function Qe(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xa(t,e){const n=new $a(t,e);return n.subscribe.bind(n)}class $a{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ha(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rn),i.error===void 0&&(i.error=rn),i.complete===void 0&&(i.complete=rn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ha(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rn(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class Xe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class za{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ra;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qa(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wa(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wa(t){return t===Ue?void 0:t}function qa(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ga{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new za(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const Ka={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Ja=N.INFO,Ya={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Xa=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ya[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ri{constructor(e){this.name=e,this._logLevel=Ja,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ka[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Za=(t,e)=>e.some(n=>t instanceof n);let cr,ur;function Qa(){return cr||(cr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eo(){return ur||(ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ii=new WeakMap,gn=new WeakMap,si=new WeakMap,sn=new WeakMap,Nn=new WeakMap;function to(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(De(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ii.set(n,t)}).catch(()=>{}),Nn.set(e,t),e}function no(t){if(gn.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});gn.set(t,e)}let _n={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||si.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ro(t){_n=t(_n)}function io(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(an(this),e,...n);return si.set(r,e.sort?e.sort():[e]),De(r)}:eo().includes(t)?function(...e){return t.apply(an(this),e),De(ii.get(this))}:function(...e){return De(t.apply(an(this),e))}}function so(t){return typeof t=="function"?io(t):(t instanceof IDBTransaction&&no(t),Za(t,Qa())?new Proxy(t,_n):t)}function De(t){if(t instanceof IDBRequest)return to(t);if(sn.has(t))return sn.get(t);const e=so(t);return e!==t&&(sn.set(t,e),Nn.set(e,t)),e}const an=t=>Nn.get(t);function ao(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=De(a);return r&&a.addEventListener("upgradeneeded",o=>{r(De(a.result),o.oldVersion,o.newVersion,De(a.transaction),o)}),n&&a.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),l.then(o=>{s&&o.addEventListener("close",()=>s()),i&&o.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const oo=["get","getKey","getAll","getAllKeys","count"],lo=["put","add","delete","clear"],on=new Map;function dr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(on.get(e))return on.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oo.includes(n)))return;const s=async function(a,...l){const o=this.transaction(a,i?"readwrite":"readonly");let d=o.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&o.done]))[0]};return on.set(e,s),s}ro(t=>({...t,get:(e,n,r)=>dr(e,n)||t.get(e,n,r),has:(e,n)=>!!dr(e,n)||t.has(e,n)}));/**
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
 */class co{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uo(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uo(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yn="@firebase/app",hr="0.9.25";/**
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
 */const He=new ri("@firebase/app"),ho="@firebase/app-compat",fo="@firebase/analytics-compat",mo="@firebase/analytics",po="@firebase/app-check-compat",vo="@firebase/app-check",go="@firebase/auth",_o="@firebase/auth-compat",yo="@firebase/database",bo="@firebase/database-compat",Io="@firebase/functions",wo="@firebase/functions-compat",Eo="@firebase/installations",So="@firebase/installations-compat",To="@firebase/messaging",Oo="@firebase/messaging-compat",Ao="@firebase/performance",Co="@firebase/performance-compat",ko="@firebase/remote-config",Ro="@firebase/remote-config-compat",Po="@firebase/storage",No="@firebase/storage-compat",Do="@firebase/firestore",Mo="@firebase/firestore-compat",Lo="firebase",Vo="10.7.1";/**
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
 */const bn="[DEFAULT]",Uo={[yn]:"fire-core",[ho]:"fire-core-compat",[mo]:"fire-analytics",[fo]:"fire-analytics-compat",[vo]:"fire-app-check",[po]:"fire-app-check-compat",[go]:"fire-auth",[_o]:"fire-auth-compat",[yo]:"fire-rtdb",[bo]:"fire-rtdb-compat",[Io]:"fire-fn",[wo]:"fire-fn-compat",[Eo]:"fire-iid",[So]:"fire-iid-compat",[To]:"fire-fcm",[Oo]:"fire-fcm-compat",[Ao]:"fire-perf",[Co]:"fire-perf-compat",[ko]:"fire-rc",[Ro]:"fire-rc-compat",[Po]:"fire-gcs",[No]:"fire-gcs-compat",[Do]:"fire-fst",[Mo]:"fire-fst-compat","fire-js":"fire-js",[Lo]:"fire-js-all"};/**
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
 */const Mt=new Map,In=new Map;function Fo(t,e){try{t.container.addComponent(e)}catch(n){He.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ot(t){const e=t.name;if(In.has(e))return He.debug(`There were multiple attempts to register component ${e}.`),!1;In.set(e,t);for(const n of Mt.values())Fo(n,t);return!0}function ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Bo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Me=new ht("app","Firebase",Bo);/**
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
 */class jo{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
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
 */const ft=Vo;function oi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Me.create("bad-app-name",{appName:String(i)});if(n||(n=ti()),!n)throw Me.create("no-options");const s=Mt.get(i);if(s){if(Dt(n,s.options)&&Dt(r,s.config))return s;throw Me.create("duplicate-app",{appName:i})}const a=new Ga(i);for(const o of In.values())a.addComponent(o);const l=new jo(n,r,a);return Mt.set(i,l),l}function xo(t=bn){const e=Mt.get(t);if(!e&&t===bn&&ti())return oi();if(!e)throw Me.create("no-app",{appName:t});return e}function Ke(t,e,n){var r;let i=(r=Uo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),He.warn(l.join(" "));return}ot(new Xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $o="firebase-heartbeat-database",Ho=1,lt="firebase-heartbeat-store";let ln=null;function li(){return ln||(ln=ao($o,Ho,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lt)}}}).catch(t=>{throw Me.create("idb-open",{originalErrorMessage:t.message})})),ln}async function zo(t){try{return await(await li()).transaction(lt).objectStore(lt).get(ci(t))}catch(e){if(e instanceof Le)He.warn(e.message);else{const n=Me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});He.warn(n.message)}}}async function fr(t,e){try{const r=(await li()).transaction(lt,"readwrite");await r.objectStore(lt).put(e,ci(t)),await r.done}catch(n){if(n instanceof Le)He.warn(n.message);else{const r=Me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});He.warn(r.message)}}}function ci(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wo=1024,qo=30*24*60*60*1e3;class Go{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jo(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=qo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mr(),{heartbeatsToSend:r,unsentEntries:i}=Ko(this._heartbeatsCache.heartbeats),s=Qr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mr(){return new Date().toISOString().substring(0,10)}function Ko(t,e=Wo){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),pr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return La()?Va().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pr(t){return Qr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yo(t){ot(new Xe("platform-logger",e=>new co(e),"PRIVATE")),ot(new Xe("heartbeat",e=>new Go(e),"PRIVATE")),Ke(yn,hr,t),Ke(yn,hr,"esm2017"),Ke("fire-js","")}Yo("");var Xo="firebase",Zo="10.7.1";/**
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
 */Ke(Xo,Zo,"app");function Dn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ui(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qo=ui,di=new ht("auth","Firebase",ui());/**
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
 */const Lt=new ri("@firebase/auth");function el(t,...e){Lt.logLevel<=N.WARN&&Lt.warn(`Auth (${ft}): ${t}`,...e)}function Et(t,...e){Lt.logLevel<=N.ERROR&&Lt.error(`Auth (${ft}): ${t}`,...e)}/**
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
 */function Ee(t,...e){throw Mn(t,...e)}function ce(t,...e){return Mn(t,...e)}function tl(t,e,n){const r=Object.assign(Object.assign({},Qo()),{[e]:n});return new ht("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return di.create(t,...e)}function y(t,e,...n){if(!t)throw Mn(e,...n)}function Ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Et(e),new Error(e)}function Se(t,e){t||Ie(e)}/**
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
 */function wn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hi(){return vr()==="http:"||vr()==="https:"}function vr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hi()||Na()||"connection"in navigator)?navigator.onLine:!0}function rl(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Se(n>e,"Short delay should be less than long delay!"),this.isMobile=Pa()||Da()}get(){return nl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ln(t,e){Se(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fi{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const il={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sl=new mt(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function We(t,e,n,r,i={}){return mi(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Qe(Object.assign({key:t.config.apiKey},a)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),fi.fetch()(pi(t,t.config.apiHost,n,l),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},s))})}async function mi(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},il),e);try{const i=new ol(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw It(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[o,d]=l.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw It(t,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw It(t,"email-already-in-use",a);if(o==="USER_DISABLED")throw It(t,"user-disabled",a);const f=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw tl(t,f,d);Ee(t,f)}}catch(i){if(i instanceof Le)throw i;Ee(t,"network-request-failed",{message:String(i)})}}async function al(t,e,n,r,i={}){const s=await We(t,e,n,r,i);return"mfaPendingCredential"in s&&Ee(t,"multi-factor-auth-required",{_serverResponse:s}),s}function pi(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ln(t.config,i):`${t.config.apiScheme}://${i}`}class ol{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),sl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function It(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function gr(t){return t!==void 0&&t.getResponse!==void 0}/**
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
 */async function ll(t){return(await We(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */async function cl(t,e){return We(t,"POST","/v1/accounts:delete",e)}async function ul(t,e){return We(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function st(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dl(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Un(r);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:st(cn(i.auth_time)),issuedAtTime:st(cn(i.iat)),expirationTime:st(cn(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cn(t){return Number(t)*1e3}function Un(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Et("JWT malformed, contained fewer than 3 sections"),null;try{const i=ei(n);return i?JSON.parse(i):(Et("Failed to decode base64 JWT payload"),null)}catch(i){return Et("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hl(t){const e=Un(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ct(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Le&&fl(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ml{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=st(this.lastLoginAt),this.creationTime=st(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ct(t,ul(n,{idToken:r}));y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gl(s.providerUserInfo):[],l=vl(t.providerData,a),o=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=o?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function pl(t){const e=et(t);await Vt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vl(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gl(t){return t.map(e=>{var{providerId:n}=e,r=Dn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _l(t,e){const n=await mi(t,{},async()=>{const r=Qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=pi(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fi.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yl(t,e){return We(t,"POST","/v2/accounts:revokeToken",Vn(t,e))}/**
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
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _l(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ut;return r&&(y(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
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
 */function Ae(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ml(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ct(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dl(this,e)}reload(){return pl(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ct(this,cl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,o,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(a=n.photoURL)!==null&&a!==void 0?a:void 0,G=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(o=n._redirectEventId)!==null&&o!==void 0?o:void 0,z=(d=n.createdAt)!==null&&d!==void 0?d:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:W,emailVerified:K,isAnonymous:J,providerData:R,stsTokenManager:te}=n;y(W&&te,e,"internal-error");const V=ut.fromJSON(this.name,te);y(typeof W=="string",e,"internal-error"),Ae(m,e.name),Ae(g,e.name),y(typeof K=="boolean",e,"internal-error"),y(typeof J=="boolean",e,"internal-error"),Ae(_,e.name),Ae(T,e.name),Ae(G,e.name),Ae(I,e.name),Ae(z,e.name),Ae(F,e.name);const U=new je({uid:W,auth:e,email:g,emailVerified:K,displayName:m,isAnonymous:J,photoURL:T,phoneNumber:_,tenantId:G,stsTokenManager:V,createdAt:z,lastLoginAt:F});return R&&Array.isArray(R)&&(U.providerData=R.map(B=>Object.assign({},B))),I&&(U._redirectEventId=I),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new ut;i.updateFromServerResponse(n);const s=new je({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vt(s),s}}/**
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
 */const _r=new Map;function we(t){Se(t instanceof Function,"Expected a class definition");let e=_r.get(t);return e?(Se(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_r.set(t,e),e)}/**
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
 */class gi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gi.type="NONE";const yr=gi;/**
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
 */function St(t,e,n){return`firebase:${t}:${e}:${n}`}class Je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=St(this.userKey,i.apiKey,s),this.fullPersistenceKey=St("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Je(we(yr),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||we(yr);const a=St(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(a);if(f){const m=je._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const o=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!o.length?new Je(s,e,r):(s=o[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Je(s,e,r))}}/**
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
 */function br(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_i(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wi(e))return"Blackberry";if(Ei(e))return"Webos";if(Fn(e))return"Safari";if((e.includes("chrome/")||yi(e))&&!e.includes("edge/"))return"Chrome";if(Ii(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _i(t=X()){return/firefox\//i.test(t)}function Fn(t=X()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yi(t=X()){return/crios\//i.test(t)}function bi(t=X()){return/iemobile/i.test(t)}function Ii(t=X()){return/android/i.test(t)}function wi(t=X()){return/blackberry/i.test(t)}function Ei(t=X()){return/webos/i.test(t)}function Ht(t=X()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bl(t=X()){var e;return Ht(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Il(){return Ma()&&document.documentMode===10}function Si(t=X()){return Ht(t)||Ii(t)||Ei(t)||wi(t)||/windows phone/i.test(t)||bi(t)}function wl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ti(t,e=[]){let n;switch(t){case"Browser":n=br(X());break;case"Worker":n=`${br(X())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ft}/${r}`}/**
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
 */class El{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const o=e(s);a(o)}catch(o){l(o)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sl(t,e={}){return We(t,"GET","/v2/passwordPolicy",Vn(t,e))}/**
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
 */const Tl=6;class Ol{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Tl,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(n=o.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsUppercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(l=o.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),o}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Al{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ir(this),this.idTokenSubscription=new Ir(this),this.beforeStateQueue=new El(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=di,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=we(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===l)&&(o!=null&&o.user)&&(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sl(this),n=new Ol(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ht("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&we(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[we(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,r,i);return()=>{a=!0,o()}}else{const o=e.addObserver(n);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ti(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&el(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zt(t){return et(t)}class Ir{constructor(e){this.auth=e,this.observer=null,this.addObserver=xa(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Cl(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Oi(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ce("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cl().appendChild(r)})}function Ai(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kl(t,e){const n=ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dt(s,e??{}))return i;Ee(i,"already-initialized")}return n.initialize({options:e})}function Rl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(we);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pl(t,e,n){const r=zt(t);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ci(e),{host:a,port:l}=Nl(e),o=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dl()}function Ci(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nl(t){const e=Ci(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wr(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:wr(a)}}}function wr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dl(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ki{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,n){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}/**
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
 */async function Ye(t,e){return al(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
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
 */const Ml="http://localhost";class ze extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ee("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dn(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ze(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ye(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ye(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ye(e,n)}buildRequest(){const e={requestUri:Ml,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qe(n)}return e}}/**
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
 */class Ri{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pt extends Ri{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ke extends pt{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
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
 */class Re extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ze._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Re.credential(n,r)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
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
 */class Pe extends pt{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class Ne extends pt{constructor(){super("twitter.com")}static credential(e,n){return ze._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ne.credential(n,r)}catch{return null}}}Ne.TWITTER_SIGN_IN_METHOD="twitter.com";Ne.PROVIDER_ID="twitter.com";/**
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
 */class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await je._fromIdTokenResponse(e,r,i),a=Er(r);return new Ze({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Er(r);return new Ze({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Er(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ut extends Le{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ut(e,n,r,i)}}function Pi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ut._fromErrorAndOperation(t,s,e,r):s})}async function Ll(t,e,n=!1){const r=await ct(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ze._forOperation(t,"link",r)}/**
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
 */async function Vl(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ct(t,Pi(r,i,e,t),n);y(s.idToken,r,"internal-error");const a=Un(s.idToken);y(a,r,"internal-error");const{sub:l}=a;return y(t.uid===l,r,"user-mismatch"),Ze._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ee(r,"user-mismatch"),s}}/**
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
 */async function Ul(t,e,n=!1){const r="signIn",i=await Pi(t,r,e),s=await Ze._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Fl(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function Bl(t,e,n){return et(t).beforeAuthStateChanged(e,n)}const Ft="__sak";/**
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
 */class Ni{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ft,"1"),this.storage.removeItem(Ft),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jl(){const t=X();return Fn(t)||Ht(t)}const xl=1e3,$l=10;class Di extends Ni{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jl()&&wl(),this.fallbackToPolling=Si(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,o)=>{this.notifyListeners(a,o)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Il()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$l):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Di.type="LOCAL";const Hl=Di;/**
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
 */class Mi extends Ni{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mi.type="SESSION";const Li=Mi;/**
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
 */function zl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),o=await zl(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wt.receivers=[];/**
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
 */function Bn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,o)=>{const d=Bn("",20);i.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function H(){return window}function ql(t){H().location.href=t}/**
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
 */function jn(){return typeof H().WorkerGlobalScope<"u"&&typeof H().importScripts=="function"}async function Gl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kl(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jl(){return jn()?self:null}/**
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
 */const Vi="firebaseLocalStorageDb",Yl=1,Bt="firebaseLocalStorage",Ui="fbase_key";class vt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qt(t,e){return t.transaction([Bt],e?"readwrite":"readonly").objectStore(Bt)}function Xl(){const t=indexedDB.deleteDatabase(Vi);return new vt(t).toPromise()}function En(){const t=indexedDB.open(Vi,Yl);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bt,{keyPath:Ui})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bt)?e(r):(r.close(),await Xl(),e(await En()))})})}async function Sr(t,e,n){const r=qt(t,!0).put({[Ui]:e,value:n});return new vt(r).toPromise()}async function Zl(t,e){const n=qt(t,!1).get(e),r=await new vt(n).toPromise();return r===void 0?null:r.value}function Tr(t,e){const n=qt(t,!0).delete(e);return new vt(n).toPromise()}const Ql=800,ec=3;class Fi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await En(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ec)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wt._getInstance(Jl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gl(),!this.activeServiceWorker)return;this.sender=new Wl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await En();return await Sr(e,Ft,"1"),await Tr(e,Ft),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qt(i,!1).getAll();return new vt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ql)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fi.type="LOCAL";const tc=Fi;/**
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
 */const nc=500,rc=6e4,wt=1e12;class ic{constructor(e){this.auth=e,this.counter=wt,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new sc(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||wt;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||wt;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||wt;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class sc{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;y(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ac(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},rc)},nc))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ac(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const un=Ai("rcb"),oc=new mt(3e4,6e4),lc="https://www.google.com/recaptcha/api.js?";class cc{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=H().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return y(uc(n),e,"argument-error"),this.shouldResolveImmediately(n)&&gr(H().grecaptcha)?Promise.resolve(H().grecaptcha):new Promise((r,i)=>{const s=H().setTimeout(()=>{i(ce(e,"network-request-failed"))},oc.get());H()[un]=()=>{H().clearTimeout(s),delete H()[un];const l=H().grecaptcha;if(!l||!gr(l)){i(ce(e,"internal-error"));return}const o=l.render;l.render=(d,f)=>{const m=o(d,f);return this.counter++,m},this.hostLanguage=n,r(l)};const a=`${lc}?${Qe({onload:un,render:"explicit",hl:n})}`;Oi(a).catch(()=>{clearTimeout(s),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=H().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function uc(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class dc{async load(e){return new ic(e)}clearedOneInstance(){}}/**
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
 */const hc="recaptcha",fc={theme:"light",type:"image"};class mc{constructor(e,n,r=Object.assign({},fc)){this.parameters=r,this.type=hc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=zt(e),this.isInvisible=this.parameters.size==="invisible",y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;y(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dc:new cc,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=H()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(hi()&&!jn(),this.auth,"internal-error"),await pc(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ll(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function pc(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */function vc(t,e){return e?we(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xn extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ye(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gc(t){return Ul(t.auth,new xn(t),t.bypassAuthState)}function _c(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Vl(n,new xn(t),t.bypassAuthState)}async function yc(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Ll(n,new xn(t),t.bypassAuthState)}/**
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
 */class Bi{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(o))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gc;case"linkViaPopup":case"linkViaRedirect":return yc;case"reauthViaPopup":case"reauthViaRedirect":return _c;default:Ee(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bc=new mt(2e3,1e4);class Ge extends Bi{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ge.currentPopupAction&&Ge.currentPopupAction.cancel(),Ge.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=Bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ge.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bc.get())};e()}}Ge.currentPopupAction=null;/**
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
 */const Ic="pendingRedirect",Tt=new Map;class wc extends Bi{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tt.get(this.auth._key());if(!e){try{const r=await Ec(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tt.set(this.auth._key(),e)}return this.bypassAuthState||Tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ec(t,e){const n=Oc(e),r=Tc(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Sc(t,e){Tt.set(t._key(),e)}function Tc(t){return we(t._redirectPersistence)}function Oc(t){return St(Ic,t.config.apiKey,t.name)}async function Ac(t,e,n=!1){const r=zt(t),i=vc(r,e),a=await new wc(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Cc=10*60*1e3;class kc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ji(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Or(e))}saveEventToCache(e){this.cachedEventUids.add(Or(e)),this.lastProcessedEventTime=Date.now()}}function Or(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ji({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ji(t);default:return!1}}/**
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
 */async function Pc(t,e={}){return We(t,"GET","/v1/projects",e)}/**
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
 */const Nc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dc=/^https?/;async function Mc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pc(t);for(const n of e)try{if(Lc(n))return}catch{}Ee(t,"unauthorized-domain")}function Lc(t){const e=wn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Dc.test(n))return!1;if(Nc.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vc=new mt(3e4,6e4);function Ar(){const t=H().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Uc(t){return new Promise((e,n)=>{var r,i,s;function a(){Ar(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ar(),n(ce(t,"network-request-failed"))},timeout:Vc.get()})}if(!((i=(r=H().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=H().gapi)===null||s===void 0)&&s.load)a();else{const l=Ai("iframefcb");return H()[l]=()=>{gapi.load?a():n(ce(t,"network-request-failed"))},Oi(`https://apis.google.com/js/api.js?onload=${l}`).catch(o=>n(o))}}).catch(e=>{throw Ot=null,e})}let Ot=null;function Fc(t){return Ot=Ot||Uc(t),Ot}/**
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
 */const Bc=new mt(5e3,15e3),jc="__/auth/iframe",xc="emulator/auth/iframe",$c={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zc(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ln(e,xc):`https://${t.config.authDomain}/${jc}`,r={apiKey:e.apiKey,appName:t.name,v:ft},i=Hc.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qe(r).slice(1)}`}async function Wc(t){const e=await Fc(t),n=H().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:zc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$c,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ce(t,"network-request-failed"),l=H().setTimeout(()=>{s(a)},Bc.get());function o(){H().clearTimeout(l),i(r)}r.ping(o).then(o,()=>{s(a)})}))}/**
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
 */const qc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gc=500,Kc=600,Jc="_blank",Yc="http://localhost";class Cr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xc(t,e,n,r=Gc,i=Kc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const o=Object.assign(Object.assign({},qc),{width:r.toString(),height:i.toString(),top:s,left:a}),d=X().toLowerCase();n&&(l=yi(d)?Jc:n),_i(d)&&(e=e||Yc,o.scrollbars="yes");const f=Object.entries(o).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if(bl(d)&&l!=="_self")return Zc(e||"",l),new Cr(null);const m=window.open(e||"",l,f);y(m,t,"popup-blocked");try{m.focus()}catch{}return new Cr(m)}function Zc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qc="__/auth/handler",eu="emulator/auth/handler",tu=encodeURIComponent("fac");async function kr(t,e,n,r,i,s){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ft,eventId:i};if(e instanceof Ri){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ja(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))a[f]=m}if(e instanceof pt){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const o=await t._getAppCheckToken(),d=o?`#${tu}=${encodeURIComponent(o)}`:"";return`${nu(t)}?${Qe(l).slice(1)}${d}`}function nu({config:t}){return t.emulator?Ln(t,eu):`https://${t.authDomain}/${Qc}`}/**
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
 */const dn="webStorageSupport";class ru{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Li,this._completeRedirectFn=Ac,this._overrideRedirectResult=Sc}async _openPopup(e,n,r,i){var s;Se((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await kr(e,n,r,wn(),i);return Xc(e,a,Bn())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await kr(e,n,r,wn(),i);return ql(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Se(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Wc(e),r=new kc(e);return n.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dn,{type:dn},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dn];a!==void 0&&n(!!a),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Si()||Fn()||Ht()}}const iu=ru;var Rr="@firebase/auth",Pr="1.5.1";/**
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
 */class su{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function au(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ou(t){ot(new Xe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;y(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ti(t)},d=new Al(r,i,s,o);return Rl(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ot(new Xe("auth-internal",e=>{const n=zt(e.getProvider("auth").getImmediate());return(r=>new su(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(Rr,Pr,au(t)),Ke(Rr,Pr,"esm2017")}/**
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
 */const lu=5*60,cu=ni("authIdTokenMaxAge")||lu;let Nr=null;const uu=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cu)return;const i=n==null?void 0:n.token;Nr!==i&&(Nr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function du(t=xo()){const e=ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kl(t,{popupRedirectResolver:iu,persistence:[tc,Hl,Li]}),r=ni("authTokenSyncURL");if(r){const s=uu(r);Bl(n,s,()=>s(n.currentUser)),Fl(n,a=>s(a))}const i=ka("auth");return i&&Pl(n,`http://${i}`),n}ou("Browser");An("email",oa);An("required",ua);An("regex",Jr);pa("zh_TW");Rs({generateMessage:ma({zh_TW:_a,ar:Ia})});oi(as);const xi=du();xi.languageCode="it";window.recaptchaVerifier=new mc(xi,"sign-in-button",{size:"invisible",callback:t=>{console.log("prepared phone auth process",t)}});const hu={data(){return{firstName:"",lastName:"",email:"",city:"",pwd:"",agree:!1}},components:{VForm:ra,VField:Ys,ErrorMessage:sa},methods:{onSubmit(t){console.log(JSON.stringify(t,null,2))},isRequired(t){return t?!0:"This field is required"},isRegex(t){return new RegExp("^[A-Z][\\w]{7,}$").test(t)?!0:"Wrong password format, Please enter like A1234567"},isChecked(t){return t?!0:"請確認是否同意"},callback(t){const e=ts(t.credential);console.log("Handle the userData",e)}},mounted(){}},Te=t=>(os("data-v-e0be80d0"),t=t(),ls(),t),fu=Te(()=>j("div",{class:"vee-validate d-flex align-items-center"},[j("h1",null,"This is a vee-validate page")],-1)),mu={class:"container"},pu={class:"col-md-4"},vu=Te(()=>j("label",{for:"firstName",class:"form-label"},"First name",-1)),gu={class:"col-md-4"},_u=Te(()=>j("label",{for:"lastName",class:"form-label"},"Last name",-1)),yu={class:"col-md-4"},bu=Te(()=>j("label",{for:"email",class:"form-label"},"Email",-1)),Iu={class:"col-md-6"},wu=Te(()=>j("label",{for:"city",class:"form-label"},"City",-1)),Eu={class:"col-md-3"},Su=Te(()=>j("label",{for:"pwd",class:"form-label"},"Password",-1)),Tu={class:"col-12"},Ou={class:"form-check"},Au=Te(()=>j("label",{class:"form-check-label",for:"agree"}," Agree to terms and conditions ",-1)),Cu=Te(()=>j("div",{class:"col-12"},[j("button",{class:"btn btn-primary",type:"submit"},"Submit form")],-1)),ku=Te(()=>j("div",{class:"recaptcha-container"},[j("input",{class:"sign-in-button",type:"button",name:"",id:"sign-in-button",value:"phone"})],-1));function Ru(t,e,n,r,i,s){const a=_t("v-field"),l=_t("error-message"),o=_t("v-form"),d=_t("GoogleLogin");return ns(),rs(ss,null,[fu,j("div",mu,[se(o,{class:"row g-3 mb-3",onSubmit:s.onSubmit},{default:is(({errors:f})=>[j("div",pu,[vu,se(a,{name:"firstName",type:"text",class:"form-control",id:"firstName",rules:s.isRequired},null,8,["rules"]),se(l,{name:"firstName",class:"text-danger fw-bold"})]),j("div",gu,[_u,se(a,{name:"lastName",type:"text",class:"form-control",id:"lastName",rules:s.isRequired},null,8,["rules"]),se(l,{name:"lastName",class:"text-danger fw-bold"})]),j("div",yu,[bu,se(a,{name:"email",type:"text",class:"form-control",id:"email","aria-describedby":"inputGroupPrepend",rules:"required|email"}),se(l,{name:"email",class:"text-danger fw-bold"})]),j("div",Iu,[wu,se(a,{name:"required",type:"text",class:"form-control",id:"city",rules:"required"}),se(l,{name:"required",class:"text-danger fw-bold"})]),j("div",Eu,[Su,se(a,{name:"field",type:"password",class:"form-control",id:"city",rules:s.isRegex},null,8,["rules"]),se(l,{name:"field",class:"text-danger fw-bold"})]),j("div",Tu,[j("div",Ou,[se(a,{name:"agree",class:"form-check-input",type:"checkbox",value:"",id:"agree"}),Au,se(l,{name:"agree",class:"text-danger fw-bold"})])]),Cu]),_:1},8,["onSubmit"]),j("div",null,[se(d,{callback:s.callback},null,8,["callback"])]),ku])],64)}const Nu=es(hu,[["render",Ru],["__scopeId","data-v-e0be80d0"]]);export{Nu as default};
