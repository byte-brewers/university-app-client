import{E as lt,_ as _o}from"./ElButton-D9P61w6i.js";import{B as j,i as jr,j as we,k as Lr,m as w,l as ln,p as ae,s as Vr,q as Ur,v as wo,x as Fe,y as Wr,z as cn,o as S,A as U,C as L,D as oe,F as Hr,G as un,a as We,c as J,w as M,b as P,t as Y,H as He,I as qe,J as Ge,K as Nt,T as Pn,L as Dt,r as $e,d as Vt,e as F,u as D,f as Se,n as ye,g as ve,_ as bt,M as So,N as Ut,O as ar,P as $o,Q as or,R as ko,S as Kt,U as sr,V as ir,W as Co,X as xo,Y as Po,Z as Ao,$ as Oo,a0 as qr,a1 as dn,a2 as Io,a3 as Gr}from"./index-BjSYDYWd.js";import{I as Eo,E as Jr,Q as To}from"./banner-items-BdiQ8_yi.js";import{c as Ro,a as Pe,u as Bo,E as Ae,F as No}from"./index.esm-C1QJa4cB.js";var $t={};function An(n="pui_id_"){return $t.hasOwnProperty(n)||($t[n]=0),$t[n]++,`${n}${$t[n]}`}function Je(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return An(n)}var Ce={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(t){return this._loadedStyleNames.has(t)},setLoadedStyleName:function(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName:function(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},lr=j.extend({name:"common"});function ct(n){"@babel/helpers - typeof";return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(n)}function Do(n){return Kr(n)||Mo(n)||Xr(n)||zr()}function Mo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ye(n,t){return Kr(n)||Fo(n,t)||Xr(n,t)||zr()}function zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xr(n,t){if(n){if(typeof n=="string")return cr(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?cr(n,t):void 0}}function cr(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function Fo(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var r,a,o,s,i=[],l=!0,c=!1;try{if(o=(e=e.call(n)).next,t===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=o.call(e)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(d){c=!0,a=d}finally{try{if(!l&&e.return!=null&&(s=e.return(),Object(s)!==s))return}finally{if(c)throw a}}return i}}function Kr(n){if(Array.isArray(n))return n}function ur(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,r)}return e}function C(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ur(Object(e),!0).forEach(function(r){Ze(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ur(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function Ze(n,t,e){return(t=jo(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function jo(n){var t=Lo(n,"string");return ct(t)=="symbol"?t:t+""}function Lo(n,t){if(ct(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(ct(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var se={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){t||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(t){var e=this;t?(this._loadScopedThemeStyles(t),this._themeChangeListener(function(){return e._loadScopedThemeStyles(t)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var t,e,r,a,o,s,i,l,c,d,u,p=(t=this.pt)===null||t===void 0?void 0:t._usept,f=p?(e=this.pt)===null||e===void 0||(e=e.originalValue)===null||e===void 0?void 0:e[this.$.type.name]:void 0,m=p?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(a=m||f)===null||a===void 0||(a=a.hooks)===null||a===void 0||(o=a.onBeforeCreate)===null||o===void 0||o.call(a);var g=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,v=g?(i=this.$primevue)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.pt)===null||i===void 0?void 0:i.originalValue:void 0,R=g?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(d=R||v)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(u=d.onBeforeCreate)===null||u===void 0||u.call(d),this.$attrSelector=An("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=jr(this.$el,'[data-pc-name="'.concat(we(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=C({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var e=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));e==null||e(),r==null||r()}},_mergeProps:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return Lr(t)?t.apply(void 0,r):w.apply(void 0,r)},_loadStyles:function(){var t=this,e=function(){Ce.isStyleNameLoaded("base")||(j.loadCSS(t.$styleOptions),t._loadGlobalStyles(),Ce.setLoadedStyleName("base")),t._loadThemeStyles()};e(),this._themeChangeListener(e)},_loadCoreStyles:function(){var t,e;!Ce.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(e=this.$style)!==null&&e!==void 0&&e.name&&(lr.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Ce.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);ln(t)&&j.load(t,C({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var t,e;if(!(this.isUnstyled||this.$theme==="none")){if(!ae.isStyleNameLoaded("common")){var r,a,o=((r=this.$style)===null||r===void 0||(a=r.getCommonTheme)===null||a===void 0?void 0:a.call(r))||{},s=o.primitive,i=o.semantic,l=o.global,c=o.style;j.load(s==null?void 0:s.css,C({name:"primitive-variables"},this.$styleOptions)),j.load(i==null?void 0:i.css,C({name:"semantic-variables"},this.$styleOptions)),j.load(l==null?void 0:l.css,C({name:"global-variables"},this.$styleOptions)),j.loadTheme(C({name:"global-style"},this.$styleOptions),c),ae.setLoadedStyleName("common")}if(!ae.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(e=this.$style)!==null&&e!==void 0&&e.name){var d,u,p,f,m=((d=this.$style)===null||d===void 0||(u=d.getComponentTheme)===null||u===void 0?void 0:u.call(d))||{},g=m.css,v=m.style;(p=this.$style)===null||p===void 0||p.load(g,C({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(f=this.$style)===null||f===void 0||f.loadTheme(C({name:"".concat(this.$style.name,"-style")},this.$styleOptions),v),ae.setLoadedStyleName(this.$style.name)}if(!ae.isStyleNameLoaded("layer-order")){var R,b,h=(R=this.$style)===null||R===void 0||(b=R.getLayerOrderThemeCSS)===null||b===void 0?void 0:b.call(R);j.load(h,C({name:"layer-order",first:!0},this.$styleOptions)),ae.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(t){var e,r,a,o=((e=this.$style)===null||e===void 0||(r=e.getPresetTheme)===null||r===void 0?void 0:r.call(e,t,"[".concat(this.$attrSelector,"]")))||{},s=o.css,i=(a=this.$style)===null||a===void 0?void 0:a.load(s,C({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=i.el},_unloadScopedThemeStyles:function(){var t;(t=this.scopedStyleEl)===null||t===void 0||(t=t.value)===null||t===void 0||t.remove()},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ce.clearLoadedStyleNames(),Vr.on("theme:change",t)},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getPropValue:function(t){var e;return this[t]||((e=this._getHostInstance(this))===null||e===void 0?void 0:e[t])},_getOptionValue:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ur(t,e,r)},_getPTValue:function(){var t,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!a[r.split(".")[0]],i=this._getPropValue("ptOptions")||((t=this.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},l=i.mergeSections,c=l===void 0?!0:l,d=i.mergeProps,u=d===void 0?!1:d,p=o?s?this._useGlobalPT(this._getPTClassValue,r,a):this._useDefaultPT(this._getPTClassValue,r,a):void 0,f=s?void 0:this._getPTSelf(e,this._getPTClassValue,r,C(C({},a),{},{global:p||{}})),m=this._getPTDatasets(r);return c||!c&&f?u?this._mergeProps(u,p,f,m):C(C(C({},p),f),m):C(C({},f),m)},_getPTSelf:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return w(this._usePT.apply(this,[this._getPT(t,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var t,e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a="data-pc-",o=r==="root"&&ln((t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]);return r!=="transition"&&C(C({},r==="root"&&C(C(Ze({},"".concat(a,"name"),we(o?(e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]:this.$.type.name)),o&&Ze({},"".concat(a,"extend"),we(this.$.type.name))),wo()&&Ze({},"".concat(this.$attrSelector),""))),{},Ze({},"".concat(a,"section"),we(r)))},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return Fe(t)||Wr(t)?{class:t}:t},_getPT:function(t){var e=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,o=function(i){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=a?a(i):i,u=we(r),p=we(e.$name);return(l=c?u!==p?d==null?void 0:d[u]:void 0:d==null?void 0:d[u])!==null&&l!==void 0?l:d};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:o(t.originalValue),value:o(t.value)}:o(t,!0)},_usePT:function(t,e,r,a){var o=function(g){return e(g,r,a)};if(t!=null&&t.hasOwnProperty("_usept")){var s,i=t._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=i.mergeSections,c=l===void 0?!0:l,d=i.mergeProps,u=d===void 0?!1:d,p=o(t.originalValue),f=o(t.value);return p===void 0&&f===void 0?void 0:Fe(f)?f:Fe(p)?p:c||!c&&f?u?this._mergeProps(u,p,f):C(C({},p),f):f}return o(t)},_useGlobalPT:function(t,e,r){return this._usePT(this.globalPT,t,e,r)},_useDefaultPT:function(t,e,r){return this._usePT(this.defaultPT,t,e,r)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,C(C({},this.$params),e))},ptmi:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return w(this.$_attrsWithoutPT,this.ptm(t,e))},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,e,C({instance:this},r),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,t,C(C({},this.$params),e))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(e){var a=this._getOptionValue(this.$style.inlineStyles,t,C(C({},this.$params),r)),o=this._getOptionValue(lr.inlineStyles,t,C(C({},this.$params),r));return[o,a]}}},computed:{globalPT:function(){var t,e=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(r){return cn(r,{instance:e})})},defaultPT:function(){var t,e=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(r){return e._getOptionValue(r,e.$name,C({},e.$params))||cn(r,C({},e.$params))})},isUnstyled:function(){var t;return this.unstyled!==void 0?this.unstyled:(t=this.$primevueConfig)===null||t===void 0?void 0:t.unstyled},$inProps:function(){var t,e=Object.keys(((t=this.$.vnode)===null||t===void 0?void 0:t.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var a=Ye(r,1),o=a[0];return e==null?void 0:e.includes(o)}))},$theme:function(){var t;return(t=this.$primevueConfig)===null||t===void 0?void 0:t.theme},$style:function(){return C(C({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var t;return{nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}},$primevueConfig:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var t=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:t,props:t==null?void 0:t.$props,state:t==null?void 0:t.$data,attrs:t==null?void 0:t.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var e=Ye(t,1),r=e[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(t,e){var r=Ye(e,2),a=r[0],o=r[1],s=a.split(":"),i=Do(s),l=i.slice(1);return l==null||l.reduce(function(c,d,u,p){return!c[d]&&(c[d]=u===p.length-1?o:{}),c[d]},t),t},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var e=Ye(t,1),r=e[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(t,e){var r=Ye(e,2),a=r[0],o=r[1];return t[a]=o,t},{})}}},Vo=function(t){var e=t.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(e("stepper.step.gap"),`;
    padding: `).concat(e("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(e("stepper.transition.duration"),", color ").concat(e("stepper.transition.duration"),", border-color ").concat(e("stepper.transition.duration"),", outline-color ").concat(e("stepper.transition.duration"),", box-shadow ").concat(e("stepper.transition.duration"),`;
    border-radius: `).concat(e("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(e("stepper.step.header.padding"),`;
    gap: `).concat(e("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(e("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(e("stepper.step.header.focus.ring.width")," ").concat(e("stepper.step.header.focus.ring.style")," ").concat(e("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(e("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(e("stepper.step.title.color"),`;
    font-weight: `).concat(e("stepper.step.title.font.weight"),`;
    transition: background `).concat(e("stepper.transition.duration"),", color ").concat(e("stepper.transition.duration"),", border-color ").concat(e("stepper.transition.duration"),", box-shadow ").concat(e("stepper.transition.duration"),", outline-color ").concat(e("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(e("stepper.step.number.color"),`;
    border: 2px solid `).concat(e("stepper.step.number.border.color"),`;
    background: `).concat(e("stepper.step.number.background"),`;
    min-width: `).concat(e("stepper.step.number.size"),`;
    height: `).concat(e("stepper.step.number.size"),`;
    line-height: `).concat(e("stepper.step.number.size"),`;
    font-size: `).concat(e("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(e("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(e("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(e("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(e("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(e("stepper.step.number.active.background"),`;
    border-color: `).concat(e("stepper.step.number.active.border.color"),`;
    color: `).concat(e("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(e("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(e("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(e("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(e("stepper.separator.size"),`;
    transition: background `).concat(e("stepper.transition.duration"),", color ").concat(e("stepper.transition.duration"),", border-color ").concat(e("stepper.transition.duration"),", box-shadow ").concat(e("stepper.transition.duration"),", outline-color ").concat(e("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(e("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(e("stepper.steppanel.background"),`;
    color: `).concat(e("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(e("stepper.steppanel.padding"),`;
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(e("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(e("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(e("stepper.separator.size"),`);
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * `).concat(e("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(e("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(e("stepper.step.number.size"),`;
}
`)},Uo={root:function(t){var e=t.props;return["p-stepper p-component",{"p-readonly":e.linear}]},separator:"p-stepper-separator"},Wo=j.extend({name:"stepper",theme:Vo,classes:Uo}),Ho={name:"BaseStepper",extends:se,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Wo,provide:function(){return{$pcStepper:this,$parentInstance:this}}},Qr={name:"Stepper",extends:Ho,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||Je()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||Je()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function qo(n,t,e,r,a,o){return S(),U("div",w({class:n.cx("root"),role:"tablist"},n.ptmi("root")),[n.$slots.start?L(n.$slots,"start",{key:0}):oe("",!0),L(n.$slots,"default"),n.$slots.end?L(n.$slots,"end",{key:1}):oe("",!0)],16)}Qr.render=qo;var Go={root:"p-steplist"},Jo=j.extend({name:"steplist",classes:Go}),zo={name:"BaseStepList",extends:se,style:Jo,provide:function(){return{$pcStepList:this,$parentInstance:this}}},Yr={name:"StepList",extends:zo,inheritAttrs:!1};function Xo(n,t,e,r,a,o){return S(),U("div",w({class:n.cx("root")},n.ptmi("root")),[L(n.$slots,"default")],16)}Yr.render=Xo;var Ko={root:"p-steppanels"},Qo=j.extend({name:"steppanels",classes:Ko}),Yo={name:"BaseStepPanels",extends:se,style:Qo,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},Zr={name:"StepPanels",extends:Yo,inheritAttrs:!1};function Zo(n,t,e,r,a,o){return S(),U("div",w({class:n.cx("root")},n.ptmi("root")),[L(n.$slots,"default")],16)}Zr.render=Zo;var es={root:function(t){var e=t.instance;return["p-step",{"p-step-active":e.active,"p-disabled":e.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},ts=j.extend({name:"step",classes:es}),ea={name:"StepperSeparator",hostName:"Stepper",extends:se};function ns(n,t,e,r,a,o){return S(),U("span",w({class:n.cx("separator")},n.ptm("separator")),null,16)}ea.render=ns;var rs={name:"BaseStep",extends:se,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:ts,provide:function(){return{$pcStep:this,$parentInstance:this}}},ta={name:"Step",extends:rs,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=Hr(this.$el,un(this.$pcStepper.$el,'[data-pc-name="step"]')),e=un(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==e-1}},methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:ea}},as=["id","tabindex","aria-controls","disabled"];function os(n,t,e,r,a,o){var s=We("StepperSeparator");return n.asChild?L(n.$slots,"default",{key:1,class:qe(n.cx("root")),active:o.active,value:n.value,a11yAttrs:o.a11yAttrs,activateCallback:o.onStepClick}):(S(),J(He(n.as),w({key:0,class:n.cx("root"),"aria-current":o.active?"step":void 0,role:"presentation","data-p-active":o.active,"data-p-disabled":o.isStepDisabled},o.getPTOptions("root")),{default:M(function(){return[P("button",w({id:o.id,class:n.cx("header"),role:"tab",type:"button",tabindex:o.isStepDisabled?-1:void 0,"aria-controls":o.ariaControls,disabled:o.isStepDisabled,onClick:t[0]||(t[0]=function(){return o.onStepClick&&o.onStepClick.apply(o,arguments)})},o.getPTOptions("header")),[P("span",w({class:n.cx("number")},o.getPTOptions("number")),Y(o.activeValue),17),P("span",w({class:n.cx("title")},o.getPTOptions("title")),[L(n.$slots,"default")],16)],16,as),a.isSeparatorVisible?(S(),J(s,{key:0})):oe("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}ta.render=os;var ss={root:function(t){var e=t.instance;return["p-steppanel",{"p-steppanel-active":e.isVertical&&e.active}]},content:"p-steppanel-content"},is=j.extend({name:"steppanel",classes:ss}),na={name:"StepperSeparator",hostName:"Stepper",extends:se};function ls(n,t,e,r,a,o){return S(),U("span",w({class:n.cx("separator")},n.ptm("separator")),null,16)}na.render=ls;var cs={name:"BaseStepPanel",extends:se,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:is,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},Wt={name:"StepPanel",extends:cs,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var t,e,r=un(this.$pcStepper.$el,'[data-pc-name="step"]'),a=jr(this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.$el:(e=this.$pcStepList)===null||e===void 0?void 0:e.$el,'[data-pc-name="step"]'),o=Hr(a,r);this.isSeparatorVisible=this.isVertical&&o!==r.length-1}},methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{active:this.active}})},updateValue:function(t){this.$pcStepper.updateValue(t)}},computed:{active:function(){var t,e,r=this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value;return r===((e=this.$pcStepper)===null||e===void 0?void 0:e.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var t;return this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:na}};function us(n,t,e,r,a,o){var s=We("StepperSeparator");return o.isVertical?(S(),U(Dt,{key:0},[n.asChild?L(n.$slots,"default",{key:1,active:o.active,a11yAttrs:o.a11yAttrs,activateCallback:function(l){return o.updateValue(l)}}):(S(),J(Pn,w({key:0,name:"p-toggleable-content"},n.ptm("transition")),{default:M(function(){return[Ge((S(),J(He(n.as),w({id:o.id,class:n.cx("root"),role:"tabpanel","aria-controls":o.ariaControls},o.getPTOptions("root")),{default:M(function(){return[a.isSeparatorVisible?(S(),J(s,{key:0})):oe("",!0),P("div",w({class:n.cx("content")},o.getPTOptions("content")),[L(n.$slots,"default",{active:o.active,activateCallback:function(l){return o.updateValue(l)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[Nt,o.active]])]}),_:3},16))],64)):(S(),U(Dt,{key:1},[n.asChild?n.asChild&&o.active?L(n.$slots,"default",{key:1,active:o.active,a11yAttrs:o.a11yAttrs,activateCallback:function(l){return o.updateValue(l)}}):oe("",!0):Ge((S(),J(He(n.as),w({key:0,id:o.id,class:n.cx("root"),role:"tabpanel","aria-controls":o.ariaControls},o.getPTOptions("root")),{default:M(function(){return[L(n.$slots,"default",{active:o.active,activateCallback:function(l){return o.updateValue(l)}})]}),_:3},16,["id","class","aria-controls"])),[[Nt,o.active]])],64))}Wt.render=us;function Ht(){const n=Ro().shape({productOrService:Pe().required("Product or service is required"),targetAudience:Pe().required("Target audience is required"),regionOrCity:Pe().required("Region or city is required"),startUpCapital:Pe().required("Start-up capital is required"),salesChannels:Pe().required("Sales channels are required"),keyCosts:Pe().required("Key costs are required"),mainGoals:Pe().required("Main goals are required")}),t={productOrService:{label:"What product or service do you plan to offer?",name:"productOrService",type:"text"},targetAudience:{label:"Who is your target audience?",name:"targetAudience",type:"text"},regionOrCity:{label:"What region or city do you plan to work in?",name:"regionOrCity",type:"text"},startUpCapital:{label:"What kind of start-up capital do you plan to invest?",name:"startUpCapital",type:"text"},salesChannels:{label:"What sales channels do you plan to utilize?",name:"salesChannels",type:"text"},keyCosts:{label:"What are the key costs you are planning for?",name:"keyCosts",type:"text"},mainGoals:{label:"What are your main goals for your first year?",name:"mainGoals",type:"textarea"}},e=$e([{id:1,value:"1",label:"Introduction"},{id:2,value:"2",label:"Quiz"},{id:3,value:"3",label:"Result"}]),r=$e({productOrService:"",targetAudience:"",regionOrCity:"",startUpCapital:"",salesChannels:"",keyCosts:"",mainGoals:""}),a=i=>{sessionStorage.setItem("steps",i)};return{setStorageStepValue:a,getStorageStepValue:()=>sessionStorage.getItem("steps")||"1",setStepValueHandler:async({activateCallback:i,value:l})=>{await a(l),i(l)},stepList:e,formData:r,schema:n,fields:t}}const ds={class:"stepper"},ps={class:"stepper__content"},fs=Vt({__name:"ElInitial",setup(n){const{setStepValueHandler:t}=Ht(),e=$e("GET STARTED QUIZ");return(r,a)=>(S(),J(D(Wt),{value:"1"},{default:M(({activateCallback:o})=>[P("div",ds,[P("div",ps,[F(Jr,ye(ve(D(Eo))),{button:M(()=>[F(lt,{"button-action":()=>D(t)({activateCallback:o,value:"2"}),variant:"default"},{default:M(()=>[Se(Y(e.value),1)]),_:2},1032,["button-action"])]),_:2},1040)])])]),_:1}))}}),hs=bt(fs,[["__scopeId","data-v-93c0bb6b"]]);function ms(){return{generatePrompt:t=>(console.log("data",t),`
      I am an entrepreneur, you are my assistant. I have come to you to help me with my business plan.
      I want a detailed answer. I will answer a few questions to make it easier for you to write it.
      Create a step-by-step guide for me based on your answers. Your answer should be formatted as follows.
      The answer should be big and understandable to a person.

      1. QuestionWhat product or service do you plan to offer? My answer is: ${t.productOrService}.
      2. Who is your target audience? My answer is: ${t.targetAudience}.
      3. What region or city do you plan to work in? My answer is: ${t.regionOrCity}.
      4. What kind of start-up capital do you plan to invest? My answer is: ${t.startUpCapital}.
      5. What sales channels do you plan to utilize? My answer is: ${t.salesChannels}.
      6. What are the key costs you are planning for? My answer is: ${t.keyCosts}.
      7. What are your main goals for your first year? My answer is: ${t.mainGoals}.


      Your answer should be formatted as follows. The answer should be big and understandable to a person.

      business_plan: [
        {
          "step": 1, // Question number.
          "title": "", // Question title.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 2, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 3, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 4, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 5, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 6, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 7, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
      ],
      others: { // Additional information will be available here.
        sustainability: { // How can I ensure my business is sustainable? Gime me short answer!
          title: "",
          text: ""
        }
        calculations: { // Do I have enough money to start a business? I have ${t.startUpCapital}$. Gime me short answer!
          title: "",
          text: "" 
        }
        technology: { // What technology do I need? Gime me short answer!
          title: "",
          text: "" 
        }
        marketing: { // What marketing strategies should I use? Reach a monthly profit of $1000
          title: "",
          text: ""
        }
        financing: { // What financing options are available? Gime me short answer!
          title: "",
          text: "" 
        }
        community: { // How can I engage with the community? Gime me short answer!
          title: "",
          text: ""
        }
        logistics: { // How should I manage logistics? Gime me short answer!
          title: "",
          text: "" 
        }
        training: { // What training do I need? Gime me short answer!
          title: "",
          text: ""
        }
        branding: { // What should my branding strategy be? Gime me short answer!
          title: "",
          text: "" 
        }
        channels: { // What sales channels should I use? Gime me short answer!
          title: "",
          text: ""
        }
        growth: { // How can I grow my business? Gime me short answer!
          title: "",
          text: "" 
        }
        plans: { // Give me a plan for the next 5 years. Gime me short answer!
          title: "",
          text: ""
        }
        scale: { // How can I scale my business? Gime me short answer!
          title: "",
          text: "" 
        }
        risks: { // What are the risks? Gime me short answer!
          title: "",
          text: ""
        }
        backs: { // When will the business pay off? Gime me short answer!
          title: "",
          text: "" 
        }
        hr: { // What are my human resources needs? Gime me short answer!
          title: "",
          text: ""
        }
      }
    `)}}const gs="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",pn="RFC3986",fn={RFC1738:n=>String(n).replace(/%20/g,"+"),RFC3986:n=>String(n)},bs="RFC1738",ys=Array.isArray,pe=(()=>{const n=[];for(let t=0;t<256;++t)n.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return n})(),Qt=1024,vs=(n,t,e,r,a)=>{if(n.length===0)return n;let o=n;if(typeof n=="symbol"?o=Symbol.prototype.toString.call(n):typeof n!="string"&&(o=String(n)),e==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(i){return"%26%23"+parseInt(i.slice(2),16)+"%3B"});let s="";for(let i=0;i<o.length;i+=Qt){const l=o.length>=Qt?o.slice(i,i+Qt):o,c=[];for(let d=0;d<l.length;++d){let u=l.charCodeAt(d);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===bs&&(u===40||u===41)){c[c.length]=l.charAt(d);continue}if(u<128){c[c.length]=pe[u];continue}if(u<2048){c[c.length]=pe[192|u>>6]+pe[128|u&63];continue}if(u<55296||u>=57344){c[c.length]=pe[224|u>>12]+pe[128|u>>6&63]+pe[128|u&63];continue}d+=1,u=65536+((u&1023)<<10|l.charCodeAt(d)&1023),c[c.length]=pe[240|u>>18]+pe[128|u>>12&63]+pe[128|u>>6&63]+pe[128|u&63]}s+=c.join("")}return s};function _s(n){return!n||typeof n!="object"?!1:!!(n.constructor&&n.constructor.isBuffer&&n.constructor.isBuffer(n))}function dr(n,t){if(ys(n)){const e=[];for(let r=0;r<n.length;r+=1)e.push(t(n[r]));return e}return t(n)}const ws=Object.prototype.hasOwnProperty,ra={brackets(n){return String(n)+"[]"},comma:"comma",indices(n,t){return String(n)+"["+t+"]"},repeat(n){return String(n)}},he=Array.isArray,Ss=Array.prototype.push,aa=function(n,t){Ss.apply(n,he(t)?t:[t])},$s=Date.prototype.toISOString,G={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:vs,encodeValuesOnly:!1,format:pn,formatter:fn[pn],indices:!1,serializeDate(n){return $s.call(n)},skipNulls:!1,strictNullHandling:!1};function ks(n){return typeof n=="string"||typeof n=="number"||typeof n=="boolean"||typeof n=="symbol"||typeof n=="bigint"}const Yt={};function oa(n,t,e,r,a,o,s,i,l,c,d,u,p,f,m,g,v,R){let b=n,h=R,y=0,E=!1;for(;(h=h.get(Yt))!==void 0&&!E;){const W=h.get(n);if(y+=1,typeof W<"u"){if(W===y)throw new RangeError("Cyclic object value");E=!0}typeof h.get(Yt)>"u"&&(y=0)}if(typeof c=="function"?b=c(t,b):b instanceof Date?b=p==null?void 0:p(b):e==="comma"&&he(b)&&(b=dr(b,function(W){return W instanceof Date?p==null?void 0:p(W):W})),b===null){if(o)return l&&!g?l(t,G.encoder,v,"key",f):t;b=""}if(ks(b)||_s(b)){if(l){const W=g?t:l(t,G.encoder,v,"key",f);return[(m==null?void 0:m(W))+"="+(m==null?void 0:m(l(b,G.encoder,v,"value",f)))]}return[(m==null?void 0:m(t))+"="+(m==null?void 0:m(String(b)))]}const k=[];if(typeof b>"u")return k;let A;if(e==="comma"&&he(b))g&&l&&(b=dr(b,l)),A=[{value:b.length>0?b.join(",")||null:void 0}];else if(he(c))A=c;else{const W=Object.keys(b);A=d?W.sort(d):W}const re=i?String(t).replace(/\./g,"%2E"):String(t),H=r&&he(b)&&b.length===1?re+"[]":re;if(a&&he(b)&&b.length===0)return H+"[]";for(let W=0;W<A.length;++W){const N=A[W],Te=typeof N=="object"&&typeof N.value<"u"?N.value:b[N];if(s&&Te===null)continue;const Xt=u&&i?N.replace(/\./g,"%2E"):N,vo=he(b)?typeof e=="function"?e(H,Xt):H:H+(u?"."+Xt:"["+Xt+"]");R.set(n,y);const rr=new WeakMap;rr.set(Yt,R),aa(k,oa(Te,vo,e,r,a,o,s,i,e==="comma"&&g&&he(b)?null:l,c,d,u,p,f,m,g,v,rr))}return k}function Cs(n=G){if(typeof n.allowEmptyArrays<"u"&&typeof n.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof n.encodeDotInKeys<"u"&&typeof n.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(n.encoder!==null&&typeof n.encoder<"u"&&typeof n.encoder!="function")throw new TypeError("Encoder has to be a function.");const t=n.charset||G.charset;if(typeof n.charset<"u"&&n.charset!=="utf-8"&&n.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");let e=pn;if(typeof n.format<"u"){if(!ws.call(fn,n.format))throw new TypeError("Unknown format option provided.");e=n.format}const r=fn[e];let a=G.filter;(typeof n.filter=="function"||he(n.filter))&&(a=n.filter);let o;if(n.arrayFormat&&n.arrayFormat in ra?o=n.arrayFormat:"indices"in n?o=n.indices?"indices":"repeat":o=G.arrayFormat,"commaRoundTrip"in n&&typeof n.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");const s=typeof n.allowDots>"u"?n.encodeDotInKeys?!0:G.allowDots:!!n.allowDots;return{addQueryPrefix:typeof n.addQueryPrefix=="boolean"?n.addQueryPrefix:G.addQueryPrefix,allowDots:s,allowEmptyArrays:typeof n.allowEmptyArrays=="boolean"?!!n.allowEmptyArrays:G.allowEmptyArrays,arrayFormat:o,charset:t,charsetSentinel:typeof n.charsetSentinel=="boolean"?n.charsetSentinel:G.charsetSentinel,commaRoundTrip:!!n.commaRoundTrip,delimiter:typeof n.delimiter>"u"?G.delimiter:n.delimiter,encode:typeof n.encode=="boolean"?n.encode:G.encode,encodeDotInKeys:typeof n.encodeDotInKeys=="boolean"?n.encodeDotInKeys:G.encodeDotInKeys,encoder:typeof n.encoder=="function"?n.encoder:G.encoder,encodeValuesOnly:typeof n.encodeValuesOnly=="boolean"?n.encodeValuesOnly:G.encodeValuesOnly,filter:a,format:e,formatter:r,serializeDate:typeof n.serializeDate=="function"?n.serializeDate:G.serializeDate,skipNulls:typeof n.skipNulls=="boolean"?n.skipNulls:G.skipNulls,sort:typeof n.sort=="function"?n.sort:null,strictNullHandling:typeof n.strictNullHandling=="boolean"?n.strictNullHandling:G.strictNullHandling}}function xs(n,t={}){let e=n;const r=Cs(t);let a,o;typeof r.filter=="function"?(o=r.filter,e=o("",e)):he(r.filter)&&(o=r.filter,a=o);const s=[];if(typeof e!="object"||e===null)return"";const i=ra[r.arrayFormat],l=i==="comma"&&r.commaRoundTrip;a||(a=Object.keys(e)),r.sort&&a.sort(r.sort);const c=new WeakMap;for(let p=0;p<a.length;++p){const f=a[p];r.skipNulls&&e[f]===null||aa(s,oa(e[f],f,i,l,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,c))}const d=s.join(r.delimiter);let u=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?u+="utf8=%26%2310003%3B&":u+="utf8=%E2%9C%93&"),d.length>0?u+d:""}const Ne="4.80.0";let pr=!1,st,sa,ia,hn,la,ca,ua,da,pa;function Ps(n,t={auto:!1}){if(pr)throw new Error(`you must \`import 'openai/shims/${n.kind}'\` before importing anything else from openai`);if(st)throw new Error(`can't \`import 'openai/shims/${n.kind}'\` after \`import 'openai/shims/${st}'\``);pr=t.auto,st=n.kind,sa=n.fetch,ia=n.FormData,hn=n.File,la=n.ReadableStream,ca=n.getMultipartRequestOptions,ua=n.getDefaultAgent,da=n.fileFromPath,pa=n.isFsReadStream}class As{constructor(t){this.body=t}get[Symbol.toStringTag](){return"MultipartBody"}}function Os({manuallyImported:n}={}){const t=n?"You may need to use polyfills":"Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";let e,r,a,o;try{e=fetch,r=Request,a=Response,o=Headers}catch(s){throw new Error(`this environment is missing the following Web Fetch API type: ${s.message}. ${t}`)}return{kind:"web",fetch:e,Request:r,Response:a,Headers:o,FormData:typeof FormData<"u"?FormData:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${t}`)}},Blob:typeof Blob<"u"?Blob:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${t}`)}},File:typeof File<"u"?File:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${t}`)}},ReadableStream:typeof ReadableStream<"u"?ReadableStream:class{constructor(){throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${t}`)}},getMultipartRequestOptions:async(s,i)=>({...i,body:new As(s)}),getDefaultAgent:s=>{},fileFromPath:()=>{throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads")},isFsReadStream:s=>!1}}st||Ps(Os(),{auto:!0});class x extends Error{}class K extends x{constructor(t,e,r,a){super(`${K.makeMessage(t,e,r)}`),this.status=t,this.headers=a,this.request_id=a==null?void 0:a["x-request-id"],this.error=e;const o=e;this.code=o==null?void 0:o.code,this.param=o==null?void 0:o.param,this.type=o==null?void 0:o.type}static makeMessage(t,e,r){const a=e!=null&&e.message?typeof e.message=="string"?e.message:JSON.stringify(e.message):e?JSON.stringify(e):r;return t&&a?`${t} ${a}`:t?`${t} status code (no body)`:a||"(no status code or body)"}static generate(t,e,r,a){if(!t||!a)return new qt({message:r,cause:gn(e)});const o=e==null?void 0:e.error;return t===400?new fa(t,o,r,a):t===401?new ha(t,o,r,a):t===403?new ma(t,o,r,a):t===404?new ga(t,o,r,a):t===409?new ba(t,o,r,a):t===422?new ya(t,o,r,a):t===429?new va(t,o,r,a):t>=500?new _a(t,o,r,a):new K(t,o,r,a)}}class ce extends K{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class qt extends K{constructor({message:t,cause:e}){super(void 0,void 0,t||"Connection error.",void 0),e&&(this.cause=e)}}class On extends qt{constructor({message:t}={}){super({message:t??"Request timed out."})}}class fa extends K{}class ha extends K{}class ma extends K{}class ga extends K{}class ba extends K{}class ya extends K{}class va extends K{}class _a extends K{}class wa extends x{constructor(){super("Could not parse response content as the length limit was reached")}}class Sa extends x{constructor(){super("Could not parse response content as the request was rejected by the content filter")}}class Ee{constructor(){this.buffer=[],this.trailingCR=!1}decode(t){let e=this.decodeText(t);if(this.trailingCR&&(e="\r"+e,this.trailingCR=!1),e.endsWith("\r")&&(this.trailingCR=!0,e=e.slice(0,-1)),!e)return[];const r=Ee.NEWLINE_CHARS.has(e[e.length-1]||"");let a=e.split(Ee.NEWLINE_REGEXP);return r&&a.pop(),a.length===1&&!r?(this.buffer.push(a[0]),[]):(this.buffer.length>0&&(a=[this.buffer.join("")+a[0],...a.slice(1)],this.buffer=[]),r||(this.buffer=[a.pop()||""]),a)}decodeText(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof Buffer<"u"){if(t instanceof Buffer)return t.toString();if(t instanceof Uint8Array)return Buffer.from(t).toString();throw new x(`Unexpected: received non-Uint8Array (${t.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)}if(typeof TextDecoder<"u"){if(t instanceof Uint8Array||t instanceof ArrayBuffer)return this.textDecoder??(this.textDecoder=new TextDecoder("utf8")),this.textDecoder.decode(t);throw new x(`Unexpected: received non-Uint8Array/ArrayBuffer (${t.constructor.name}) in a web platform. Please report this error.`)}throw new x("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")}flush(){if(!this.buffer.length&&!this.trailingCR)return[];const t=[this.buffer.join("")];return this.buffer=[],this.trailingCR=!1,t}}Ee.NEWLINE_CHARS=new Set([`
`,"\r"]);Ee.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function $a(n){if(n[Symbol.asyncIterator])return n;const t=n.getReader();return{async next(){try{const e=await t.read();return e!=null&&e.done&&t.releaseLock(),e}catch(e){throw t.releaseLock(),e}},async return(){const e=t.cancel();return t.releaseLock(),await e,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}class ge{constructor(t,e){this.iterator=t,this.controller=e}static fromSSEResponse(t,e){let r=!1;async function*a(){if(r)throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let o=!1;try{for await(const s of Is(t,e))if(!o){if(s.data.startsWith("[DONE]")){o=!0;continue}if(s.event===null){let i;try{i=JSON.parse(s.data)}catch(l){throw console.error("Could not parse message into JSON:",s.data),console.error("From chunk:",s.raw),l}if(i&&i.error)throw new K(void 0,i.error,void 0,void 0);yield i}else{let i;try{i=JSON.parse(s.data)}catch(l){throw console.error("Could not parse message into JSON:",s.data),console.error("From chunk:",s.raw),l}if(s.event=="error")throw new K(void 0,i.error,i.message,void 0);yield{event:s.event,data:i}}}o=!0}catch(s){if(s instanceof Error&&s.name==="AbortError")return;throw s}finally{o||e.abort()}}return new ge(a,e)}static fromReadableStream(t,e){let r=!1;async function*a(){const s=new Ee,i=$a(t);for await(const l of i)for(const c of s.decode(l))yield c;for(const l of s.flush())yield l}async function*o(){if(r)throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let s=!1;try{for await(const i of a())s||i&&(yield JSON.parse(i));s=!0}catch(i){if(i instanceof Error&&i.name==="AbortError")return;throw i}finally{s||e.abort()}}return new ge(o,e)}[Symbol.asyncIterator](){return this.iterator()}tee(){const t=[],e=[],r=this.iterator(),a=o=>({next:()=>{if(o.length===0){const s=r.next();t.push(s),e.push(s)}return o.shift()}});return[new ge(()=>a(t),this.controller),new ge(()=>a(e),this.controller)]}toReadableStream(){const t=this;let e;const r=new TextEncoder;return new la({async start(){e=t[Symbol.asyncIterator]()},async pull(a){try{const{value:o,done:s}=await e.next();if(s)return a.close();const i=r.encode(JSON.stringify(o)+`
`);a.enqueue(i)}catch(o){a.error(o)}},async cancel(){var a;await((a=e.return)==null?void 0:a.call(e))}})}}async function*Is(n,t){if(!n.body)throw t.abort(),new x("Attempted to iterate over a response with no body");const e=new Rs,r=new Ee,a=$a(n.body);for await(const o of Es(a))for(const s of r.decode(o)){const i=e.decode(s);i&&(yield i)}for(const o of r.flush()){const s=e.decode(o);s&&(yield s)}}async function*Es(n){let t=new Uint8Array;for await(const e of n){if(e==null)continue;const r=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?new TextEncoder().encode(e):e;let a=new Uint8Array(t.length+r.length);a.set(t),a.set(r,t.length),t=a;let o;for(;(o=Ts(t))!==-1;)yield t.slice(0,o),t=t.slice(o)}t.length>0&&(yield t)}function Ts(n){for(let r=0;r<n.length-2;r++){if(n[r]===10&&n[r+1]===10||n[r]===13&&n[r+1]===13)return r+2;if(n[r]===13&&n[r+1]===10&&r+3<n.length&&n[r+2]===13&&n[r+3]===10)return r+4}return-1}class Rs{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(t),t.startsWith(":"))return null;let[e,r,a]=Bs(t,":");return a.startsWith(" ")&&(a=a.substring(1)),e==="event"?this.event=a:e==="data"&&this.data.push(a),null}}function Bs(n,t){const e=n.indexOf(t);return e!==-1?[n.substring(0,e),t,n.substring(e+t.length)]:[n,"",""]}const ka=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function",Ca=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&Gt(n),Gt=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",Ns=n=>Ca(n)||ka(n)||pa(n);async function xa(n,t,e){var a;if(n=await n,Ca(n))return n;if(ka(n)){const o=await n.blob();t||(t=new URL(n.url).pathname.split(/[\\/]/).pop()??"unknown_file");const s=Gt(o)?[await o.arrayBuffer()]:[o];return new hn(s,t,e)}const r=await Ds(n);if(t||(t=Fs(n)??"unknown_file"),!(e!=null&&e.type)){const o=(a=r[0])==null?void 0:a.type;typeof o=="string"&&(e={...e,type:o})}return new hn(r,t,e)}async function Ds(n){var e;let t=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)t.push(n);else if(Gt(n))t.push(await n.arrayBuffer());else if(js(n))for await(const r of n)t.push(r);else throw new Error(`Unexpected data type: ${typeof n}; constructor: ${(e=n==null?void 0:n.constructor)==null?void 0:e.name}; props: ${Ms(n)}`);return t}function Ms(n){return`[${Object.getOwnPropertyNames(n).map(e=>`"${e}"`).join(", ")}]`}function Fs(n){var t;return Zt(n.name)||Zt(n.filename)||((t=Zt(n.path))==null?void 0:t.split(/[\\/]/).pop())}const Zt=n=>{if(typeof n=="string")return n;if(typeof Buffer<"u"&&n instanceof Buffer)return String(n)},js=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function",fr=n=>n&&typeof n=="object"&&n.body&&n[Symbol.toStringTag]==="MultipartBody",ze=async n=>{const t=await Ls(n.body);return ca(t,n)},Ls=async n=>{const t=new ia;return await Promise.all(Object.entries(n||{}).map(([e,r])=>mn(t,e,r))),t},mn=async(n,t,e)=>{if(e!==void 0){if(e==null)throw new TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")n.append(t,String(e));else if(Ns(e)){const r=await xa(e);n.append(t,r)}else if(Array.isArray(e))await Promise.all(e.map(r=>mn(n,t+"[]",r)));else if(typeof e=="object")await Promise.all(Object.entries(e).map(([r,a])=>mn(n,`${t}[${r}]`,a)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${e} instead`)}};var je={},Vs=function(n,t,e,r,a){if(typeof t=="function"?n!==t||!a:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(n,e),e},Us=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},kt;async function Pa(n){const{response:t}=n;if(n.options.stream)return Le("response",t.status,t.url,t.headers,t.body),n.options.__streamClass?n.options.__streamClass.fromSSEResponse(t,n.controller):ge.fromSSEResponse(t,n.controller);if(t.status===204)return null;if(n.options.__binaryResponse)return t;const e=t.headers.get("content-type");if((e==null?void 0:e.includes("application/json"))||(e==null?void 0:e.includes("application/vnd.api+json"))){const o=await t.json();return Le("response",t.status,t.url,t.headers,o),Aa(o,t)}const a=await t.text();return Le("response",t.status,t.url,t.headers,a),a}function Aa(n,t){return!n||typeof n!="object"||Array.isArray(n)?n:Object.defineProperty(n,"_request_id",{value:t.headers.get("x-request-id"),enumerable:!1})}class Jt extends Promise{constructor(t,e=Pa){super(r=>{r(null)}),this.responsePromise=t,this.parseResponse=e}_thenUnwrap(t){return new Jt(this.responsePromise,async e=>Aa(t(await this.parseResponse(e),e),e.response))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,e]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:e,request_id:e.headers.get("x-request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(this.parseResponse)),this.parsedPromise}then(t,e){return this.parse().then(t,e)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}class Ws{constructor({baseURL:t,maxRetries:e=2,timeout:r=6e5,httpAgent:a,fetch:o}){this.baseURL=t,this.maxRetries=en("maxRetries",e),this.timeout=en("timeout",r),this.httpAgent=a,this.fetch=o??sa}authHeaders(t){return{}}defaultHeaders(t){return{Accept:"application/json","Content-Type":"application/json","User-Agent":this.getUserAgent(),...Xs(),...this.authHeaders(t)}}validateHeaders(t,e){}defaultIdempotencyKey(){return`stainless-node-retry-${Zs()}`}get(t,e){return this.methodRequest("get",t,e)}post(t,e){return this.methodRequest("post",t,e)}patch(t,e){return this.methodRequest("patch",t,e)}put(t,e){return this.methodRequest("put",t,e)}delete(t,e){return this.methodRequest("delete",t,e)}methodRequest(t,e,r){return this.request(Promise.resolve(r).then(async a=>{const o=a&&Gt(a==null?void 0:a.body)?new DataView(await a.body.arrayBuffer()):(a==null?void 0:a.body)instanceof DataView?a.body:(a==null?void 0:a.body)instanceof ArrayBuffer?new DataView(a.body):a&&ArrayBuffer.isView(a==null?void 0:a.body)?new DataView(a.body.buffer):a==null?void 0:a.body;return{method:t,path:e,...a,body:o}}))}getAPIList(t,e,r){return this.requestAPIList(e,{method:"get",path:t,...r})}calculateContentLength(t){if(typeof t=="string"){if(typeof Buffer<"u")return Buffer.byteLength(t,"utf8").toString();if(typeof TextEncoder<"u")return new TextEncoder().encode(t).length.toString()}else if(ArrayBuffer.isView(t))return t.byteLength.toString();return null}buildRequest(t,{retryCount:e=0}={}){var g;const{method:r,path:a,query:o,headers:s={}}=t,i=ArrayBuffer.isView(t.body)||t.__binaryRequest&&typeof t.body=="string"?t.body:fr(t.body)?t.body.body:t.body?JSON.stringify(t.body,null,2):null,l=this.calculateContentLength(i),c=this.buildURL(a,o);"timeout"in t&&en("timeout",t.timeout);const d=t.timeout??this.timeout,u=t.httpAgent??this.httpAgent??ua(c),p=d+1e3;typeof((g=u==null?void 0:u.options)==null?void 0:g.timeout)=="number"&&p>(u.options.timeout??0)&&(u.options.timeout=p),this.idempotencyHeader&&r!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),s[this.idempotencyHeader]=t.idempotencyKey);const f=this.buildHeaders({options:t,headers:s,contentLength:l,retryCount:e});return{req:{method:r,...i&&{body:i},headers:f,...u&&{agent:u},signal:t.signal??null},url:c,timeout:d}}buildHeaders({options:t,headers:e,contentLength:r,retryCount:a}){const o={};r&&(o["content-length"]=r);const s=this.defaultHeaders(t);return br(o,s),br(o,e),fr(t.body)&&st!=="node"&&delete o["content-type"],vr(s,"x-stainless-retry-count")===void 0&&vr(e,"x-stainless-retry-count")===void 0&&(o["x-stainless-retry-count"]=String(a)),this.validateHeaders(o,e),o}async prepareOptions(t){}async prepareRequest(t,{url:e,options:r}){}parseHeaders(t){return t?Symbol.iterator in t?Object.fromEntries(Array.from(t).map(e=>[...e])):{...t}:{}}makeStatusError(t,e,r,a){return K.generate(t,e,r,a)}request(t,e=null){return new Jt(this.makeRequest(t,e))}async makeRequest(t,e){var u,p;const r=await t,a=r.maxRetries??this.maxRetries;e==null&&(e=a),await this.prepareOptions(r);const{req:o,url:s,timeout:i}=this.buildRequest(r,{retryCount:a-e});if(await this.prepareRequest(o,{url:s,options:r}),Le("request",s,r,o.headers),(u=r.signal)!=null&&u.aborted)throw new ce;const l=new AbortController,c=await this.fetchWithTimeout(s,o,i,l).catch(gn);if(c instanceof Error){if((p=r.signal)!=null&&p.aborted)throw new ce;if(e)return this.retryRequest(r,e);throw c.name==="AbortError"?new On:new qt({cause:c})}const d=qs(c.headers);if(!c.ok){if(e&&this.shouldRetry(c)){const b=`retrying, ${e} attempts remaining`;return Le(`response (error; ${b})`,c.status,s,d),this.retryRequest(r,e,d)}const f=await c.text().catch(b=>gn(b).message),m=Ks(f),g=m?void 0:f;throw Le(`response (error; ${e?"(error; no more retries left)":"(error; not retryable)"})`,c.status,s,d,g),this.makeStatusError(c.status,m,g,d)}return{response:c,options:r,controller:l}}requestAPIList(t,e){const r=this.makeRequest(e,null);return new Hs(this,r,t)}buildURL(t,e){const r=Ys(t)?new URL(t):new URL(this.baseURL+(this.baseURL.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),a=this.defaultQuery();return Ia(a)||(e={...a,...e}),typeof e=="object"&&e&&!Array.isArray(e)&&(r.search=this.stringifyQuery(e)),r.toString()}stringifyQuery(t){return Object.entries(t).filter(([e,r])=>typeof r<"u").map(([e,r])=>{if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")return`${encodeURIComponent(e)}=${encodeURIComponent(r)}`;if(r===null)return`${encodeURIComponent(e)}=`;throw new x(`Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}async fetchWithTimeout(t,e,r,a){const{signal:o,...s}=e||{};o&&o.addEventListener("abort",()=>a.abort());const i=setTimeout(()=>a.abort(),r),l={signal:a.signal,...s};return l.method&&(l.method=l.method.toUpperCase()),this.fetch.call(void 0,t,l).finally(()=>{clearTimeout(i)})}shouldRetry(t){const e=t.headers.get("x-should-retry");return e==="true"?!0:e==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,e,r){let a;const o=r==null?void 0:r["retry-after-ms"];if(o){const i=parseFloat(o);Number.isNaN(i)||(a=i)}const s=r==null?void 0:r["retry-after"];if(s&&!a){const i=parseFloat(s);Number.isNaN(i)?a=Date.parse(s)-Date.now():a=i*1e3}if(!(a&&0<=a&&a<60*1e3)){const i=t.maxRetries??this.maxRetries;a=this.calculateDefaultRetryTimeoutMillis(e,i)}return await yt(a),this.makeRequest(t,e-1)}calculateDefaultRetryTimeoutMillis(t,e){const o=e-t,s=Math.min(.5*Math.pow(2,o),8),i=1-Math.random()*.25;return s*i*1e3}getUserAgent(){return`${this.constructor.name}/JS ${Ne}`}}class Oa{constructor(t,e,r,a){kt.set(this,void 0),Vs(this,kt,t),this.options=a,this.response=e,this.body=r}hasNextPage(){return this.getPaginatedItems().length?this.nextPageInfo()!=null:!1}async getNextPage(){const t=this.nextPageInfo();if(!t)throw new x("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");const e={...this.options};if("params"in t&&typeof e.query=="object")e.query={...e.query,...t.params};else if("url"in t){const r=[...Object.entries(e.query||{}),...t.url.searchParams.entries()];for(const[a,o]of r)t.url.searchParams.set(a,o);e.query=void 0,e.path=t.url.toString()}return await Us(this,kt,"f").requestAPIList(this.constructor,e)}async*iterPages(){let t=this;for(yield t;t.hasNextPage();)t=await t.getNextPage(),yield t}async*[(kt=new WeakMap,Symbol.asyncIterator)](){for await(const t of this.iterPages())for(const e of t.getPaginatedItems())yield e}}class Hs extends Jt{constructor(t,e,r){super(e,async a=>new r(t,a.response,await Pa(a),a.options))}async*[Symbol.asyncIterator](){const t=await this;for await(const e of t)yield e}}const qs=n=>new Proxy(Object.fromEntries(n.entries()),{get(t,e){const r=e.toString();return t[r.toLowerCase()]||t[r]}}),Gs={method:!0,path:!0,query:!0,body:!0,headers:!0,maxRetries:!0,stream:!0,timeout:!0,httpAgent:!0,signal:!0,idempotencyKey:!0,__binaryRequest:!0,__binaryResponse:!0,__streamClass:!0},ee=n=>typeof n=="object"&&n!==null&&!Ia(n)&&Object.keys(n).every(t=>Ea(Gs,t)),Js=()=>{var t;if(typeof Deno<"u"&&Deno.build!=null)return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Ne,"X-Stainless-OS":mr(Deno.build.os),"X-Stainless-Arch":hr(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:((t=Deno.version)==null?void 0:t.deno)??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Ne,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":process.version};if(Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Ne,"X-Stainless-OS":mr(process.platform),"X-Stainless-Arch":hr(process.arch),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":process.version};const n=zs();return n?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Ne,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${n.browser}`,"X-Stainless-Runtime-Version":n.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Ne,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function zs(){if(typeof navigator>"u"||!navigator)return null;const n=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:t,pattern:e}of n){const r=e.exec(navigator.userAgent);if(r){const a=r[1]||0,o=r[2]||0,s=r[3]||0;return{browser:t,version:`${a}.${o}.${s}`}}}return null}const hr=n=>n==="x32"?"x32":n==="x86_64"||n==="x64"?"x64":n==="arm"?"arm":n==="aarch64"||n==="arm64"?"arm64":n?`other:${n}`:"unknown",mr=n=>(n=n.toLowerCase(),n.includes("ios")?"iOS":n==="android"?"Android":n==="darwin"?"MacOS":n==="win32"?"Windows":n==="freebsd"?"FreeBSD":n==="openbsd"?"OpenBSD":n==="linux"?"Linux":n?`Other:${n}`:"Unknown");let gr;const Xs=()=>gr??(gr=Js()),Ks=n=>{try{return JSON.parse(n)}catch{return}},Qs=/^[a-z][a-z0-9+.-]*:/i,Ys=n=>Qs.test(n),yt=n=>new Promise(t=>setTimeout(t,n)),en=(n,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new x(`${n} must be an integer`);if(t<0)throw new x(`${n} must be a positive integer`);return t},gn=n=>{if(n instanceof Error)return n;if(typeof n=="object"&&n!==null)try{return new Error(JSON.stringify(n))}catch{}return new Error(n)},Ct=n=>{var t,e,r,a;if(typeof process<"u")return((t=je==null?void 0:je[n])==null?void 0:t.trim())??void 0;if(typeof Deno<"u")return(a=(r=(e=Deno.env)==null?void 0:e.get)==null?void 0:r.call(e,n))==null?void 0:a.trim()};function Ia(n){if(!n)return!0;for(const t in n)return!1;return!0}function Ea(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function br(n,t){for(const e in t){if(!Ea(t,e))continue;const r=e.toLowerCase();if(!r)continue;const a=t[e];a===null?delete n[r]:a!==void 0&&(n[r]=a)}}const yr=new Set(["authorization","api-key"]);function Le(n,...t){if(typeof process<"u"&&(je==null?void 0:je.DEBUG)==="true"){const e=t.map(r=>{if(!r)return r;if(r.headers){const o={...r,headers:{...r.headers}};for(const s in r.headers)yr.has(s.toLowerCase())&&(o.headers[s]="REDACTED");return o}let a=null;for(const o in r)yr.has(o.toLowerCase())&&(a??(a={...r}),a[o]="REDACTED");return a??r});console.log(`OpenAI:DEBUG:${n}`,...e)}}const Zs=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const t=Math.random()*16|0;return(n==="x"?t:t&3|8).toString(16)}),ei=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u",ti=n=>typeof(n==null?void 0:n.get)=="function",vr=(n,t)=>{var r;const e=t.toLowerCase();if(ti(n)){const a=((r=t[0])==null?void 0:r.toUpperCase())+t.substring(1).replace(/([^\w])(\w)/g,(o,s,i)=>s+i.toUpperCase());for(const o of[t,e,t.toUpperCase(),a]){const s=n.get(o);if(s)return s}}for(const[a,o]of Object.entries(n))if(a.toLowerCase()===e)return Array.isArray(o)?(o.length<=1||console.warn(`Received ${o.length} entries for the ${t} header, using the first entry.`),o[0]):o};function tn(n){return n!=null&&typeof n=="object"&&!Array.isArray(n)}class ni extends Oa{constructor(t,e,r,a){super(t,e,r,a),this.data=r.data||[],this.object=r.object}getPaginatedItems(){return this.data??[]}nextPageParams(){return null}nextPageInfo(){return null}}class de extends Oa{constructor(t,e,r,a){super(t,e,r,a),this.data=r.data||[]}getPaginatedItems(){return this.data??[]}nextPageParams(){const t=this.nextPageInfo();if(!t)return null;if("params"in t)return t.params;const e=Object.fromEntries(t.url.searchParams);return Object.keys(e).length?e:null}nextPageInfo(){var r;const t=this.getPaginatedItems();if(!t.length)return null;const e=(r=t[t.length-1])==null?void 0:r.id;return e?{params:{after:e}}:null}}class T{constructor(t){this._client=t}}let Ta=class extends T{create(t,e){return this._client.post("/chat/completions",{body:t,...e,stream:t.stream??!1})}},In=class extends T{constructor(){super(...arguments),this.completions=new Ta(this._client)}};In.Completions=Ta;class Ra extends T{create(t,e){return this._client.post("/audio/speech",{body:t,...e,headers:{Accept:"application/octet-stream",...e==null?void 0:e.headers},__binaryResponse:!0})}}class Ba extends T{create(t,e){return this._client.post("/audio/transcriptions",ze({body:t,...e}))}}class Na extends T{create(t,e){return this._client.post("/audio/translations",ze({body:t,...e}))}}class vt extends T{constructor(){super(...arguments),this.transcriptions=new Ba(this._client),this.translations=new Na(this._client),this.speech=new Ra(this._client)}}vt.Transcriptions=Ba;vt.Translations=Na;vt.Speech=Ra;class En extends T{create(t,e){return this._client.post("/batches",{body:t,...e})}retrieve(t,e){return this._client.get(`/batches/${t}`,e)}list(t={},e){return ee(t)?this.list({},t):this._client.getAPIList("/batches",Tn,{query:t,...e})}cancel(t,e){return this._client.post(`/batches/${t}/cancel`,e)}}class Tn extends de{}En.BatchesPage=Tn;class Rn extends T{create(t,e){return this._client.post("/assistants",{body:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}retrieve(t,e){return this._client.get(`/assistants/${t}`,{...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}update(t,e,r){return this._client.post(`/assistants/${t}`,{body:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}list(t={},e){return ee(t)?this.list({},t):this._client.getAPIList("/assistants",Bn,{query:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}del(t,e){return this._client.delete(`/assistants/${t}`,{...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}}class Bn extends de{}Rn.AssistantsPage=Bn;function _r(n){return typeof n.parse=="function"}const Ve=n=>(n==null?void 0:n.role)==="assistant",Da=n=>(n==null?void 0:n.role)==="function",Ma=n=>(n==null?void 0:n.role)==="tool";var ie=function(n,t,e,r,a){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!a:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?a.call(n,e):a?a.value=e:t.set(n,e),e},V=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},bn,Ot,It,et,tt,Et,nt,_e,rt,Mt,Ft,De,Fa;class ja{constructor(){bn.add(this),this.controller=new AbortController,Ot.set(this,void 0),It.set(this,()=>{}),et.set(this,()=>{}),tt.set(this,void 0),Et.set(this,()=>{}),nt.set(this,()=>{}),_e.set(this,{}),rt.set(this,!1),Mt.set(this,!1),Ft.set(this,!1),De.set(this,!1),ie(this,Ot,new Promise((t,e)=>{ie(this,It,t,"f"),ie(this,et,e,"f")}),"f"),ie(this,tt,new Promise((t,e)=>{ie(this,Et,t,"f"),ie(this,nt,e,"f")}),"f"),V(this,Ot,"f").catch(()=>{}),V(this,tt,"f").catch(()=>{})}_run(t){setTimeout(()=>{t().then(()=>{this._emitFinal(),this._emit("end")},V(this,bn,"m",Fa).bind(this))},0)}_connected(){this.ended||(V(this,It,"f").call(this),this._emit("connect"))}get ended(){return V(this,rt,"f")}get errored(){return V(this,Mt,"f")}get aborted(){return V(this,Ft,"f")}abort(){this.controller.abort()}on(t,e){return(V(this,_e,"f")[t]||(V(this,_e,"f")[t]=[])).push({listener:e}),this}off(t,e){const r=V(this,_e,"f")[t];if(!r)return this;const a=r.findIndex(o=>o.listener===e);return a>=0&&r.splice(a,1),this}once(t,e){return(V(this,_e,"f")[t]||(V(this,_e,"f")[t]=[])).push({listener:e,once:!0}),this}emitted(t){return new Promise((e,r)=>{ie(this,De,!0,"f"),t!=="error"&&this.once("error",r),this.once(t,e)})}async done(){ie(this,De,!0,"f"),await V(this,tt,"f")}_emit(t,...e){if(V(this,rt,"f"))return;t==="end"&&(ie(this,rt,!0,"f"),V(this,Et,"f").call(this));const r=V(this,_e,"f")[t];if(r&&(V(this,_e,"f")[t]=r.filter(a=>!a.once),r.forEach(({listener:a})=>a(...e))),t==="abort"){const a=e[0];!V(this,De,"f")&&!(r!=null&&r.length)&&Promise.reject(a),V(this,et,"f").call(this,a),V(this,nt,"f").call(this,a),this._emit("end");return}if(t==="error"){const a=e[0];!V(this,De,"f")&&!(r!=null&&r.length)&&Promise.reject(a),V(this,et,"f").call(this,a),V(this,nt,"f").call(this,a),this._emit("end")}}_emitFinal(){}}Ot=new WeakMap,It=new WeakMap,et=new WeakMap,tt=new WeakMap,Et=new WeakMap,nt=new WeakMap,_e=new WeakMap,rt=new WeakMap,Mt=new WeakMap,Ft=new WeakMap,De=new WeakMap,bn=new WeakSet,Fa=function(t){if(ie(this,Mt,!0,"f"),t instanceof Error&&t.name==="AbortError"&&(t=new ce),t instanceof ce)return ie(this,Ft,!0,"f"),this._emit("abort",t);if(t instanceof x)return this._emit("error",t);if(t instanceof Error){const e=new x(t.message);return e.cause=t,this._emit("error",e)}return this._emit("error",new x(String(t)))};function La(n){return(n==null?void 0:n.$brand)==="auto-parseable-response-format"}function _t(n){return(n==null?void 0:n.$brand)==="auto-parseable-tool"}function ri(n,t){return!t||!Va(t)?{...n,choices:n.choices.map(e=>({...e,message:{...e.message,parsed:null,tool_calls:e.message.tool_calls??[]}}))}:Nn(n,t)}function Nn(n,t){const e=n.choices.map(r=>{var a;if(r.finish_reason==="length")throw new wa;if(r.finish_reason==="content_filter")throw new Sa;return{...r,message:{...r.message,tool_calls:((a=r.message.tool_calls)==null?void 0:a.map(o=>oi(t,o)))??[],parsed:r.message.content&&!r.message.refusal?ai(t,r.message.content):null}}});return{...n,choices:e}}function ai(n,t){var e,r;return((e=n.response_format)==null?void 0:e.type)!=="json_schema"?null:((r=n.response_format)==null?void 0:r.type)==="json_schema"?"$parseRaw"in n.response_format?n.response_format.$parseRaw(t):JSON.parse(t):null}function oi(n,t){var r;const e=(r=n.tools)==null?void 0:r.find(a=>{var o;return((o=a.function)==null?void 0:o.name)===t.function.name});return{...t,function:{...t.function,parsed_arguments:_t(e)?e.$parseRaw(t.function.arguments):e!=null&&e.function.strict?JSON.parse(t.function.arguments):null}}}function si(n,t){var r;if(!n)return!1;const e=(r=n.tools)==null?void 0:r.find(a=>{var o;return((o=a.function)==null?void 0:o.name)===t.function.name});return _t(e)||(e==null?void 0:e.function.strict)||!1}function Va(n){var t;return La(n.response_format)?!0:((t=n.tools)==null?void 0:t.some(e=>_t(e)||e.type==="function"&&e.function.strict===!0))??!1}function ii(n){for(const t of n??[]){if(t.type!=="function")throw new x(`Currently only \`function\` tool types support auto-parsing; Received \`${t.type}\``);if(t.function.strict!==!0)throw new x(`The \`${t.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`)}}var Z=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},Q,yn,jt,vn,_n,wn,Ua,Sn;const wr=10;class Wa extends ja{constructor(){super(...arguments),Q.add(this),this._chatCompletions=[],this.messages=[]}_addChatCompletion(t){var r;this._chatCompletions.push(t),this._emit("chatCompletion",t);const e=(r=t.choices[0])==null?void 0:r.message;return e&&this._addMessage(e),t}_addMessage(t,e=!0){if("content"in t||(t.content=null),this.messages.push(t),e){if(this._emit("message",t),(Da(t)||Ma(t))&&t.content)this._emit("functionCallResult",t.content);else if(Ve(t)&&t.function_call)this._emit("functionCall",t.function_call);else if(Ve(t)&&t.tool_calls)for(const r of t.tool_calls)r.type==="function"&&this._emit("functionCall",r.function)}}async finalChatCompletion(){await this.done();const t=this._chatCompletions[this._chatCompletions.length-1];if(!t)throw new x("stream ended without producing a ChatCompletion");return t}async finalContent(){return await this.done(),Z(this,Q,"m",yn).call(this)}async finalMessage(){return await this.done(),Z(this,Q,"m",jt).call(this)}async finalFunctionCall(){return await this.done(),Z(this,Q,"m",vn).call(this)}async finalFunctionCallResult(){return await this.done(),Z(this,Q,"m",_n).call(this)}async totalUsage(){return await this.done(),Z(this,Q,"m",wn).call(this)}allChatCompletions(){return[...this._chatCompletions]}_emitFinal(){const t=this._chatCompletions[this._chatCompletions.length-1];t&&this._emit("finalChatCompletion",t);const e=Z(this,Q,"m",jt).call(this);e&&this._emit("finalMessage",e);const r=Z(this,Q,"m",yn).call(this);r&&this._emit("finalContent",r);const a=Z(this,Q,"m",vn).call(this);a&&this._emit("finalFunctionCall",a);const o=Z(this,Q,"m",_n).call(this);o!=null&&this._emit("finalFunctionCallResult",o),this._chatCompletions.some(s=>s.usage)&&this._emit("totalUsage",Z(this,Q,"m",wn).call(this))}async _createChatCompletion(t,e,r){const a=r==null?void 0:r.signal;a&&(a.aborted&&this.controller.abort(),a.addEventListener("abort",()=>this.controller.abort())),Z(this,Q,"m",Ua).call(this,e);const o=await t.chat.completions.create({...e,stream:!1},{...r,signal:this.controller.signal});return this._connected(),this._addChatCompletion(Nn(o,e))}async _runChatCompletion(t,e,r){for(const a of e.messages)this._addMessage(a,!1);return await this._createChatCompletion(t,e,r)}async _runFunctions(t,e,r){var p;const a="function",{function_call:o="auto",stream:s,...i}=e,l=typeof o!="string"&&(o==null?void 0:o.name),{maxChatCompletions:c=wr}=r||{},d={};for(const f of e.functions)d[f.name||f.function.name]=f;const u=e.functions.map(f=>({name:f.name||f.function.name,parameters:f.parameters,description:f.description}));for(const f of e.messages)this._addMessage(f,!1);for(let f=0;f<c;++f){const g=(p=(await this._createChatCompletion(t,{...i,function_call:o,functions:u,messages:[...this.messages]},r)).choices[0])==null?void 0:p.message;if(!g)throw new x("missing message in ChatCompletion response");if(!g.function_call)return;const{name:v,arguments:R}=g.function_call,b=d[v];if(b){if(l&&l!==v){const k=`Invalid function_call: ${JSON.stringify(v)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:a,name:v,content:k});continue}}else{const k=`Invalid function_call: ${JSON.stringify(v)}. Available options are: ${u.map(A=>JSON.stringify(A.name)).join(", ")}. Please try again`;this._addMessage({role:a,name:v,content:k});continue}let h;try{h=_r(b)?await b.parse(R):R}catch(k){this._addMessage({role:a,name:v,content:k instanceof Error?k.message:String(k)});continue}const y=await b.function(h,this),E=Z(this,Q,"m",Sn).call(this,y);if(this._addMessage({role:a,name:v,content:E}),l)return}}async _runTools(t,e,r){var f,m,g;const a="tool",{tool_choice:o="auto",stream:s,...i}=e,l=typeof o!="string"&&((f=o==null?void 0:o.function)==null?void 0:f.name),{maxChatCompletions:c=wr}=r||{},d=e.tools.map(v=>{if(_t(v)){if(!v.$callback)throw new x("Tool given to `.runTools()` that does not have an associated function");return{type:"function",function:{function:v.$callback,name:v.function.name,description:v.function.description||"",parameters:v.function.parameters,parse:v.$parseRaw,strict:!0}}}return v}),u={};for(const v of d)v.type==="function"&&(u[v.function.name||v.function.function.name]=v.function);const p="tools"in e?d.map(v=>v.type==="function"?{type:"function",function:{name:v.function.name||v.function.function.name,parameters:v.function.parameters,description:v.function.description,strict:v.function.strict}}:v):void 0;for(const v of e.messages)this._addMessage(v,!1);for(let v=0;v<c;++v){const b=(m=(await this._createChatCompletion(t,{...i,tool_choice:o,tools:p,messages:[...this.messages]},r)).choices[0])==null?void 0:m.message;if(!b)throw new x("missing message in ChatCompletion response");if(!((g=b.tool_calls)!=null&&g.length))return;for(const h of b.tool_calls){if(h.type!=="function")continue;const y=h.id,{name:E,arguments:k}=h.function,A=u[E];if(A){if(l&&l!==E){const N=`Invalid tool_call: ${JSON.stringify(E)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:a,tool_call_id:y,content:N});continue}}else{const N=`Invalid tool_call: ${JSON.stringify(E)}. Available options are: ${Object.keys(u).map(Te=>JSON.stringify(Te)).join(", ")}. Please try again`;this._addMessage({role:a,tool_call_id:y,content:N});continue}let re;try{re=_r(A)?await A.parse(k):k}catch(N){const Te=N instanceof Error?N.message:String(N);this._addMessage({role:a,tool_call_id:y,content:Te});continue}const H=await A.function(re,this),W=Z(this,Q,"m",Sn).call(this,H);if(this._addMessage({role:a,tool_call_id:y,content:W}),l)return}}}}Q=new WeakSet,yn=function(){return Z(this,Q,"m",jt).call(this).content??null},jt=function(){let t=this.messages.length;for(;t-- >0;){const e=this.messages[t];if(Ve(e)){const{function_call:r,...a}=e,o={...a,content:e.content??null,refusal:e.refusal??null};return r&&(o.function_call=r),o}}throw new x("stream ended without producing a ChatCompletionMessage with role=assistant")},vn=function(){var t,e;for(let r=this.messages.length-1;r>=0;r--){const a=this.messages[r];if(Ve(a)&&(a!=null&&a.function_call))return a.function_call;if(Ve(a)&&((t=a==null?void 0:a.tool_calls)!=null&&t.length))return(e=a.tool_calls.at(-1))==null?void 0:e.function}},_n=function(){for(let t=this.messages.length-1;t>=0;t--){const e=this.messages[t];if(Da(e)&&e.content!=null||Ma(e)&&e.content!=null&&typeof e.content=="string"&&this.messages.some(r=>{var a;return r.role==="assistant"&&((a=r.tool_calls)==null?void 0:a.some(o=>o.type==="function"&&o.id===e.tool_call_id))}))return e.content}},wn=function(){const t={completion_tokens:0,prompt_tokens:0,total_tokens:0};for(const{usage:e}of this._chatCompletions)e&&(t.completion_tokens+=e.completion_tokens,t.prompt_tokens+=e.prompt_tokens,t.total_tokens+=e.total_tokens);return t},Ua=function(t){if(t.n!=null&&t.n>1)throw new x("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")},Sn=function(t){return typeof t=="string"?t:t===void 0?"undefined":JSON.stringify(t)};class ut extends Wa{static runFunctions(t,e,r){const a=new ut,o={...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"runFunctions"}};return a._run(()=>a._runFunctions(t,e,o)),a}static runTools(t,e,r){const a=new ut,o={...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"runTools"}};return a._run(()=>a._runTools(t,e,o)),a}_addMessage(t,e=!0){super._addMessage(t,e),Ve(t)&&t.content&&this._emit("content",t.content)}}const Ha=1,qa=2,Ga=4,Ja=8,za=16,Xa=32,Ka=64,Qa=128,Ya=256,Za=Qa|Ya,eo=za|Xa|Za|Ka,to=Ha|qa|eo,no=Ga|Ja,li=to|no,z={STR:Ha,NUM:qa,ARR:Ga,OBJ:Ja,NULL:za,BOOL:Xa,NAN:Ka,INFINITY:Qa,MINUS_INFINITY:Ya,INF:Za,SPECIAL:eo,ATOM:to,COLLECTION:no,ALL:li};class ci extends Error{}class ui extends Error{}function di(n,t=z.ALL){if(typeof n!="string")throw new TypeError(`expecting str, got ${typeof n}`);if(!n.trim())throw new Error(`${n} is empty`);return pi(n.trim(),t)}const pi=(n,t)=>{const e=n.length;let r=0;const a=p=>{throw new ci(`${p} at position ${r}`)},o=p=>{throw new ui(`${p} at position ${r}`)},s=()=>(u(),r>=e&&a("Unexpected end of input"),n[r]==='"'?i():n[r]==="{"?l():n[r]==="["?c():n.substring(r,r+4)==="null"||z.NULL&t&&e-r<4&&"null".startsWith(n.substring(r))?(r+=4,null):n.substring(r,r+4)==="true"||z.BOOL&t&&e-r<4&&"true".startsWith(n.substring(r))?(r+=4,!0):n.substring(r,r+5)==="false"||z.BOOL&t&&e-r<5&&"false".startsWith(n.substring(r))?(r+=5,!1):n.substring(r,r+8)==="Infinity"||z.INFINITY&t&&e-r<8&&"Infinity".startsWith(n.substring(r))?(r+=8,1/0):n.substring(r,r+9)==="-Infinity"||z.MINUS_INFINITY&t&&1<e-r&&e-r<9&&"-Infinity".startsWith(n.substring(r))?(r+=9,-1/0):n.substring(r,r+3)==="NaN"||z.NAN&t&&e-r<3&&"NaN".startsWith(n.substring(r))?(r+=3,NaN):d()),i=()=>{const p=r;let f=!1;for(r++;r<e&&(n[r]!=='"'||f&&n[r-1]==="\\");)f=n[r]==="\\"?!f:!1,r++;if(n.charAt(r)=='"')try{return JSON.parse(n.substring(p,++r-Number(f)))}catch(m){o(String(m))}else if(z.STR&t)try{return JSON.parse(n.substring(p,r-Number(f))+'"')}catch{return JSON.parse(n.substring(p,n.lastIndexOf("\\"))+'"')}a("Unterminated string literal")},l=()=>{r++,u();const p={};try{for(;n[r]!=="}";){if(u(),r>=e&&z.OBJ&t)return p;const f=i();u(),r++;try{const m=s();Object.defineProperty(p,f,{value:m,writable:!0,enumerable:!0,configurable:!0})}catch(m){if(z.OBJ&t)return p;throw m}u(),n[r]===","&&r++}}catch{if(z.OBJ&t)return p;a("Expected '}' at end of object")}return r++,p},c=()=>{r++;const p=[];try{for(;n[r]!=="]";)p.push(s()),u(),n[r]===","&&r++}catch{if(z.ARR&t)return p;a("Expected ']' at end of array")}return r++,p},d=()=>{if(r===0){n==="-"&&z.NUM&t&&a("Not sure what '-' is");try{return JSON.parse(n)}catch(f){if(z.NUM&t)try{return n[n.length-1]==="."?JSON.parse(n.substring(0,n.lastIndexOf("."))):JSON.parse(n.substring(0,n.lastIndexOf("e")))}catch{}o(String(f))}}const p=r;for(n[r]==="-"&&r++;n[r]&&!",]}".includes(n[r]);)r++;r==e&&!(z.NUM&t)&&a("Unterminated number literal");try{return JSON.parse(n.substring(p,r))}catch{n.substring(p,r)==="-"&&z.NUM&t&&a("Not sure what '-' is");try{return JSON.parse(n.substring(p,n.lastIndexOf("e")))}catch(m){o(String(m))}}},u=()=>{for(;r<e&&` 
\r	`.includes(n[r]);)r++};return s()},Sr=n=>di(n,z.ALL^z.NUM);var Re=function(n,t,e,r,a){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!a:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?a.call(n,e):a?a.value=e:t.set(n,e),e},B=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},q,be,Be,ke,nn,xt,rn,an,on,Pt,sn,$r;class dt extends Wa{constructor(t){super(),q.add(this),be.set(this,void 0),Be.set(this,void 0),ke.set(this,void 0),Re(this,be,t,"f"),Re(this,Be,[],"f")}get currentChatCompletionSnapshot(){return B(this,ke,"f")}static fromReadableStream(t){const e=new dt(null);return e._run(()=>e._fromReadableStream(t)),e}static createChatCompletion(t,e,r){const a=new dt(e);return a._run(()=>a._runChatCompletion(t,{...e,stream:!0},{...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"stream"}})),a}async _createChatCompletion(t,e,r){var s;super._createChatCompletion;const a=r==null?void 0:r.signal;a&&(a.aborted&&this.controller.abort(),a.addEventListener("abort",()=>this.controller.abort())),B(this,q,"m",nn).call(this);const o=await t.chat.completions.create({...e,stream:!0},{...r,signal:this.controller.signal});this._connected();for await(const i of o)B(this,q,"m",rn).call(this,i);if((s=o.controller.signal)!=null&&s.aborted)throw new ce;return this._addChatCompletion(B(this,q,"m",Pt).call(this))}async _fromReadableStream(t,e){var s;const r=e==null?void 0:e.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort())),B(this,q,"m",nn).call(this),this._connected();const a=ge.fromReadableStream(t,this.controller);let o;for await(const i of a)o&&o!==i.id&&this._addChatCompletion(B(this,q,"m",Pt).call(this)),B(this,q,"m",rn).call(this,i),o=i.id;if((s=a.controller.signal)!=null&&s.aborted)throw new ce;return this._addChatCompletion(B(this,q,"m",Pt).call(this))}[(be=new WeakMap,Be=new WeakMap,ke=new WeakMap,q=new WeakSet,nn=function(){this.ended||Re(this,ke,void 0,"f")},xt=function(e){let r=B(this,Be,"f")[e.index];return r||(r={content_done:!1,refusal_done:!1,logprobs_content_done:!1,logprobs_refusal_done:!1,done_tool_calls:new Set,current_tool_call_index:null},B(this,Be,"f")[e.index]=r,r)},rn=function(e){var a,o,s,i,l,c,d,u,p,f,m,g,v,R,b;if(this.ended)return;const r=B(this,q,"m",$r).call(this,e);this._emit("chunk",e,r);for(const h of e.choices){const y=r.choices[h.index];h.delta.content!=null&&((a=y.message)==null?void 0:a.role)==="assistant"&&((o=y.message)!=null&&o.content)&&(this._emit("content",h.delta.content,y.message.content),this._emit("content.delta",{delta:h.delta.content,snapshot:y.message.content,parsed:y.message.parsed})),h.delta.refusal!=null&&((s=y.message)==null?void 0:s.role)==="assistant"&&((i=y.message)!=null&&i.refusal)&&this._emit("refusal.delta",{delta:h.delta.refusal,snapshot:y.message.refusal}),((l=h.logprobs)==null?void 0:l.content)!=null&&((c=y.message)==null?void 0:c.role)==="assistant"&&this._emit("logprobs.content.delta",{content:(d=h.logprobs)==null?void 0:d.content,snapshot:((u=y.logprobs)==null?void 0:u.content)??[]}),((p=h.logprobs)==null?void 0:p.refusal)!=null&&((f=y.message)==null?void 0:f.role)==="assistant"&&this._emit("logprobs.refusal.delta",{refusal:(m=h.logprobs)==null?void 0:m.refusal,snapshot:((g=y.logprobs)==null?void 0:g.refusal)??[]});const E=B(this,q,"m",xt).call(this,y);y.finish_reason&&(B(this,q,"m",on).call(this,y),E.current_tool_call_index!=null&&B(this,q,"m",an).call(this,y,E.current_tool_call_index));for(const k of h.delta.tool_calls??[])E.current_tool_call_index!==k.index&&(B(this,q,"m",on).call(this,y),E.current_tool_call_index!=null&&B(this,q,"m",an).call(this,y,E.current_tool_call_index)),E.current_tool_call_index=k.index;for(const k of h.delta.tool_calls??[]){const A=(v=y.message.tool_calls)==null?void 0:v[k.index];A!=null&&A.type&&((A==null?void 0:A.type)==="function"?this._emit("tool_calls.function.arguments.delta",{name:(R=A.function)==null?void 0:R.name,index:k.index,arguments:A.function.arguments,parsed_arguments:A.function.parsed_arguments,arguments_delta:((b=k.function)==null?void 0:b.arguments)??""}):(A==null||A.type,void 0))}}},an=function(e,r){var s,i,l;if(B(this,q,"m",xt).call(this,e).done_tool_calls.has(r))return;const o=(s=e.message.tool_calls)==null?void 0:s[r];if(!o)throw new Error("no tool call snapshot");if(!o.type)throw new Error("tool call snapshot missing `type`");if(o.type==="function"){const c=(l=(i=B(this,be,"f"))==null?void 0:i.tools)==null?void 0:l.find(d=>d.type==="function"&&d.function.name===o.function.name);this._emit("tool_calls.function.arguments.done",{name:o.function.name,index:r,arguments:o.function.arguments,parsed_arguments:_t(c)?c.$parseRaw(o.function.arguments):c!=null&&c.function.strict?JSON.parse(o.function.arguments):null})}else o.type},on=function(e){var a,o;const r=B(this,q,"m",xt).call(this,e);if(e.message.content&&!r.content_done){r.content_done=!0;const s=B(this,q,"m",sn).call(this);this._emit("content.done",{content:e.message.content,parsed:s?s.$parseRaw(e.message.content):null})}e.message.refusal&&!r.refusal_done&&(r.refusal_done=!0,this._emit("refusal.done",{refusal:e.message.refusal})),(a=e.logprobs)!=null&&a.content&&!r.logprobs_content_done&&(r.logprobs_content_done=!0,this._emit("logprobs.content.done",{content:e.logprobs.content})),(o=e.logprobs)!=null&&o.refusal&&!r.logprobs_refusal_done&&(r.logprobs_refusal_done=!0,this._emit("logprobs.refusal.done",{refusal:e.logprobs.refusal}))},Pt=function(){if(this.ended)throw new x("stream has ended, this shouldn't happen");const e=B(this,ke,"f");if(!e)throw new x("request ended without sending any chunks");return Re(this,ke,void 0,"f"),Re(this,Be,[],"f"),fi(e,B(this,be,"f"))},sn=function(){var r;const e=(r=B(this,be,"f"))==null?void 0:r.response_format;return La(e)?e:null},$r=function(e){var r,a,o,s;let i=B(this,ke,"f");const{choices:l,...c}=e;i?Object.assign(i,c):i=Re(this,ke,{...c,choices:[]},"f");for(const{delta:d,finish_reason:u,index:p,logprobs:f=null,...m}of e.choices){let g=i.choices[p];if(g||(g=i.choices[p]={finish_reason:u,index:p,message:{},logprobs:f,...m}),f)if(!g.logprobs)g.logprobs=Object.assign({},f);else{const{content:k,refusal:A,...re}=f;Object.assign(g.logprobs,re),k&&((r=g.logprobs).content??(r.content=[]),g.logprobs.content.push(...k)),A&&((a=g.logprobs).refusal??(a.refusal=[]),g.logprobs.refusal.push(...A))}if(u&&(g.finish_reason=u,B(this,be,"f")&&Va(B(this,be,"f")))){if(u==="length")throw new wa;if(u==="content_filter")throw new Sa}if(Object.assign(g,m),!d)continue;const{content:v,refusal:R,function_call:b,role:h,tool_calls:y,...E}=d;if(Object.assign(g.message,E),R&&(g.message.refusal=(g.message.refusal||"")+R),h&&(g.message.role=h),b&&(g.message.function_call?(b.name&&(g.message.function_call.name=b.name),b.arguments&&((o=g.message.function_call).arguments??(o.arguments=""),g.message.function_call.arguments+=b.arguments)):g.message.function_call=b),v&&(g.message.content=(g.message.content||"")+v,!g.message.refusal&&B(this,q,"m",sn).call(this)&&(g.message.parsed=Sr(g.message.content))),y){g.message.tool_calls||(g.message.tool_calls=[]);for(const{index:k,id:A,type:re,function:H,...W}of y){const N=(s=g.message.tool_calls)[k]??(s[k]={});Object.assign(N,W),A&&(N.id=A),re&&(N.type=re),H&&(N.function??(N.function={name:H.name??"",arguments:""})),H!=null&&H.name&&(N.function.name=H.name),H!=null&&H.arguments&&(N.function.arguments+=H.arguments,si(B(this,be,"f"),N)&&(N.function.parsed_arguments=Sr(N.function.arguments)))}}}return i},Symbol.asyncIterator)](){const t=[],e=[];let r=!1;return this.on("chunk",a=>{const o=e.shift();o?o.resolve(a):t.push(a)}),this.on("end",()=>{r=!0;for(const a of e)a.resolve(void 0);e.length=0}),this.on("abort",a=>{r=!0;for(const o of e)o.reject(a);e.length=0}),this.on("error",a=>{r=!0;for(const o of e)o.reject(a);e.length=0}),{next:async()=>t.length?{value:t.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,s)=>e.push({resolve:o,reject:s})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new ge(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}function fi(n,t){const{id:e,choices:r,created:a,model:o,system_fingerprint:s,...i}=n,l={...i,id:e,choices:r.map(({message:c,finish_reason:d,index:u,logprobs:p,...f})=>{if(!d)throw new x(`missing finish_reason for choice ${u}`);const{content:m=null,function_call:g,tool_calls:v,...R}=c,b=c.role;if(!b)throw new x(`missing role for choice ${u}`);if(g){const{arguments:h,name:y}=g;if(h==null)throw new x(`missing function_call.arguments for choice ${u}`);if(!y)throw new x(`missing function_call.name for choice ${u}`);return{...f,message:{content:m,function_call:{arguments:h,name:y},role:b,refusal:c.refusal??null},finish_reason:d,index:u,logprobs:p}}return v?{...f,index:u,finish_reason:d,logprobs:p,message:{...R,role:b,content:m,refusal:c.refusal??null,tool_calls:v.map((h,y)=>{const{function:E,type:k,id:A,...re}=h,{arguments:H,name:W,...N}=E||{};if(A==null)throw new x(`missing choices[${u}].tool_calls[${y}].id
${At(n)}`);if(k==null)throw new x(`missing choices[${u}].tool_calls[${y}].type
${At(n)}`);if(W==null)throw new x(`missing choices[${u}].tool_calls[${y}].function.name
${At(n)}`);if(H==null)throw new x(`missing choices[${u}].tool_calls[${y}].function.arguments
${At(n)}`);return{...re,id:A,type:k,function:{...N,name:W,arguments:H}}})}}:{...f,message:{...R,content:m,role:b,refusal:c.refusal??null},finish_reason:d,index:u,logprobs:p}}),created:a,model:o,object:"chat.completion",...s?{system_fingerprint:s}:{}};return ri(l,t)}function At(n){return JSON.stringify(n)}class Ue extends dt{static fromReadableStream(t){const e=new Ue(null);return e._run(()=>e._fromReadableStream(t)),e}static runFunctions(t,e,r){const a=new Ue(null),o={...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"runFunctions"}};return a._run(()=>a._runFunctions(t,e,o)),a}static runTools(t,e,r){const a=new Ue(e),o={...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"runTools"}};return a._run(()=>a._runTools(t,e,o)),a}}let ro=class extends T{parse(t,e){return ii(t.tools),this._client.chat.completions.create(t,{...e,headers:{...e==null?void 0:e.headers,"X-Stainless-Helper-Method":"beta.chat.completions.parse"}})._thenUnwrap(r=>Nn(r,t))}runFunctions(t,e){return t.stream?Ue.runFunctions(this._client,t,e):ut.runFunctions(this._client,t,e)}runTools(t,e){return t.stream?Ue.runTools(this._client,t,e):ut.runTools(this._client,t,e)}stream(t,e){return dt.createChatCompletion(this._client,t,e)}};class $n extends T{constructor(){super(...arguments),this.completions=new ro(this._client)}}(function(n){n.Completions=ro})($n||($n={}));class ao extends T{create(t,e){return this._client.post("/realtime/sessions",{body:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}}class Dn extends T{constructor(){super(...arguments),this.sessions=new ao(this._client)}}Dn.Sessions=ao;var _=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},te=function(n,t,e,r,a){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!a:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?a.call(n,e):a?a.value=e:t.set(n,e),e},X,kn,me,Tt,le,Ie,Me,Oe,Lt,ne,Rt,Bt,it,at,ot,kr,Cr,xr,Pr,Ar,Or,Ir;class ue extends ja{constructor(){super(...arguments),X.add(this),kn.set(this,[]),me.set(this,{}),Tt.set(this,{}),le.set(this,void 0),Ie.set(this,void 0),Me.set(this,void 0),Oe.set(this,void 0),Lt.set(this,void 0),ne.set(this,void 0),Rt.set(this,void 0),Bt.set(this,void 0),it.set(this,void 0)}[(kn=new WeakMap,me=new WeakMap,Tt=new WeakMap,le=new WeakMap,Ie=new WeakMap,Me=new WeakMap,Oe=new WeakMap,Lt=new WeakMap,ne=new WeakMap,Rt=new WeakMap,Bt=new WeakMap,it=new WeakMap,X=new WeakSet,Symbol.asyncIterator)](){const t=[],e=[];let r=!1;return this.on("event",a=>{const o=e.shift();o?o.resolve(a):t.push(a)}),this.on("end",()=>{r=!0;for(const a of e)a.resolve(void 0);e.length=0}),this.on("abort",a=>{r=!0;for(const o of e)o.reject(a);e.length=0}),this.on("error",a=>{r=!0;for(const o of e)o.reject(a);e.length=0}),{next:async()=>t.length?{value:t.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,s)=>e.push({resolve:o,reject:s})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}static fromReadableStream(t){const e=new ue;return e._run(()=>e._fromReadableStream(t)),e}async _fromReadableStream(t,e){var o;const r=e==null?void 0:e.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort())),this._connected();const a=ge.fromReadableStream(t,this.controller);for await(const s of a)_(this,X,"m",at).call(this,s);if((o=a.controller.signal)!=null&&o.aborted)throw new ce;return this._addRun(_(this,X,"m",ot).call(this))}toReadableStream(){return new ge(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}static createToolAssistantStream(t,e,r,a,o){const s=new ue;return s._run(()=>s._runToolAssistantStream(t,e,r,a,{...o,headers:{...o==null?void 0:o.headers,"X-Stainless-Helper-Method":"stream"}})),s}async _createToolAssistantStream(t,e,r,a,o){var c;const s=o==null?void 0:o.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort()));const i={...a,stream:!0},l=await t.submitToolOutputs(e,r,i,{...o,signal:this.controller.signal});this._connected();for await(const d of l)_(this,X,"m",at).call(this,d);if((c=l.controller.signal)!=null&&c.aborted)throw new ce;return this._addRun(_(this,X,"m",ot).call(this))}static createThreadAssistantStream(t,e,r){const a=new ue;return a._run(()=>a._threadAssistantStream(t,e,{...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"stream"}})),a}static createAssistantStream(t,e,r,a){const o=new ue;return o._run(()=>o._runAssistantStream(t,e,r,{...a,headers:{...a==null?void 0:a.headers,"X-Stainless-Helper-Method":"stream"}})),o}currentEvent(){return _(this,Rt,"f")}currentRun(){return _(this,Bt,"f")}currentMessageSnapshot(){return _(this,le,"f")}currentRunStepSnapshot(){return _(this,it,"f")}async finalRunSteps(){return await this.done(),Object.values(_(this,me,"f"))}async finalMessages(){return await this.done(),Object.values(_(this,Tt,"f"))}async finalRun(){if(await this.done(),!_(this,Ie,"f"))throw Error("Final run was not received.");return _(this,Ie,"f")}async _createThreadAssistantStream(t,e,r){var i;const a=r==null?void 0:r.signal;a&&(a.aborted&&this.controller.abort(),a.addEventListener("abort",()=>this.controller.abort()));const o={...e,stream:!0},s=await t.createAndRun(o,{...r,signal:this.controller.signal});this._connected();for await(const l of s)_(this,X,"m",at).call(this,l);if((i=s.controller.signal)!=null&&i.aborted)throw new ce;return this._addRun(_(this,X,"m",ot).call(this))}async _createAssistantStream(t,e,r,a){var l;const o=a==null?void 0:a.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));const s={...r,stream:!0},i=await t.create(e,s,{...a,signal:this.controller.signal});this._connected();for await(const c of i)_(this,X,"m",at).call(this,c);if((l=i.controller.signal)!=null&&l.aborted)throw new ce;return this._addRun(_(this,X,"m",ot).call(this))}static accumulateDelta(t,e){for(const[r,a]of Object.entries(e)){if(!t.hasOwnProperty(r)){t[r]=a;continue}let o=t[r];if(o==null){t[r]=a;continue}if(r==="index"||r==="type"){t[r]=a;continue}if(typeof o=="string"&&typeof a=="string")o+=a;else if(typeof o=="number"&&typeof a=="number")o+=a;else if(tn(o)&&tn(a))o=this.accumulateDelta(o,a);else if(Array.isArray(o)&&Array.isArray(a)){if(o.every(s=>typeof s=="string"||typeof s=="number")){o.push(...a);continue}for(const s of a){if(!tn(s))throw new Error(`Expected array delta entry to be an object but got: ${s}`);const i=s.index;if(i==null)throw console.error(s),new Error("Expected array delta entry to have an `index` property");if(typeof i!="number")throw new Error(`Expected array delta entry \`index\` property to be a number but got ${i}`);const l=o[i];l==null?o.push(s):o[i]=this.accumulateDelta(l,s)}continue}else throw Error(`Unhandled record type: ${r}, deltaValue: ${a}, accValue: ${o}`);t[r]=o}return t}_addRun(t){return t}async _threadAssistantStream(t,e,r){return await this._createThreadAssistantStream(e,t,r)}async _runAssistantStream(t,e,r,a){return await this._createAssistantStream(e,t,r,a)}async _runToolAssistantStream(t,e,r,a,o){return await this._createToolAssistantStream(r,t,e,a,o)}}at=function(t){if(!this.ended)switch(te(this,Rt,t,"f"),_(this,X,"m",xr).call(this,t),t.event){case"thread.created":break;case"thread.run.created":case"thread.run.queued":case"thread.run.in_progress":case"thread.run.requires_action":case"thread.run.completed":case"thread.run.failed":case"thread.run.cancelling":case"thread.run.cancelled":case"thread.run.expired":_(this,X,"m",Ir).call(this,t);break;case"thread.run.step.created":case"thread.run.step.in_progress":case"thread.run.step.delta":case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":_(this,X,"m",Cr).call(this,t);break;case"thread.message.created":case"thread.message.in_progress":case"thread.message.delta":case"thread.message.completed":case"thread.message.incomplete":_(this,X,"m",kr).call(this,t);break;case"error":throw new Error("Encountered an error event in event processing - errors should be processed earlier")}},ot=function(){if(this.ended)throw new x("stream has ended, this shouldn't happen");if(!_(this,Ie,"f"))throw Error("Final run has not been received");return _(this,Ie,"f")},kr=function(t){const[e,r]=_(this,X,"m",Ar).call(this,t,_(this,le,"f"));te(this,le,e,"f"),_(this,Tt,"f")[e.id]=e;for(const a of r){const o=e.content[a.index];(o==null?void 0:o.type)=="text"&&this._emit("textCreated",o.text)}switch(t.event){case"thread.message.created":this._emit("messageCreated",t.data);break;case"thread.message.in_progress":break;case"thread.message.delta":if(this._emit("messageDelta",t.data.delta,e),t.data.delta.content)for(const a of t.data.delta.content){if(a.type=="text"&&a.text){let o=a.text,s=e.content[a.index];if(s&&s.type=="text")this._emit("textDelta",o,s.text);else throw Error("The snapshot associated with this text delta is not text or missing")}if(a.index!=_(this,Me,"f")){if(_(this,Oe,"f"))switch(_(this,Oe,"f").type){case"text":this._emit("textDone",_(this,Oe,"f").text,_(this,le,"f"));break;case"image_file":this._emit("imageFileDone",_(this,Oe,"f").image_file,_(this,le,"f"));break}te(this,Me,a.index,"f")}te(this,Oe,e.content[a.index],"f")}break;case"thread.message.completed":case"thread.message.incomplete":if(_(this,Me,"f")!==void 0){const a=t.data.content[_(this,Me,"f")];if(a)switch(a.type){case"image_file":this._emit("imageFileDone",a.image_file,_(this,le,"f"));break;case"text":this._emit("textDone",a.text,_(this,le,"f"));break}}_(this,le,"f")&&this._emit("messageDone",t.data),te(this,le,void 0,"f")}},Cr=function(t){const e=_(this,X,"m",Pr).call(this,t);switch(te(this,it,e,"f"),t.event){case"thread.run.step.created":this._emit("runStepCreated",t.data);break;case"thread.run.step.delta":const r=t.data.delta;if(r.step_details&&r.step_details.type=="tool_calls"&&r.step_details.tool_calls&&e.step_details.type=="tool_calls")for(const o of r.step_details.tool_calls)o.index==_(this,Lt,"f")?this._emit("toolCallDelta",o,e.step_details.tool_calls[o.index]):(_(this,ne,"f")&&this._emit("toolCallDone",_(this,ne,"f")),te(this,Lt,o.index,"f"),te(this,ne,e.step_details.tool_calls[o.index],"f"),_(this,ne,"f")&&this._emit("toolCallCreated",_(this,ne,"f")));this._emit("runStepDelta",t.data.delta,e);break;case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":te(this,it,void 0,"f"),t.data.step_details.type=="tool_calls"&&_(this,ne,"f")&&(this._emit("toolCallDone",_(this,ne,"f")),te(this,ne,void 0,"f")),this._emit("runStepDone",t.data,e);break}},xr=function(t){_(this,kn,"f").push(t),this._emit("event",t)},Pr=function(t){switch(t.event){case"thread.run.step.created":return _(this,me,"f")[t.data.id]=t.data,t.data;case"thread.run.step.delta":let e=_(this,me,"f")[t.data.id];if(!e)throw Error("Received a RunStepDelta before creation of a snapshot");let r=t.data;if(r.delta){const a=ue.accumulateDelta(e,r.delta);_(this,me,"f")[t.data.id]=a}return _(this,me,"f")[t.data.id];case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":case"thread.run.step.in_progress":_(this,me,"f")[t.data.id]=t.data;break}if(_(this,me,"f")[t.data.id])return _(this,me,"f")[t.data.id];throw new Error("No snapshot available")},Ar=function(t,e){let r=[];switch(t.event){case"thread.message.created":return[t.data,r];case"thread.message.delta":if(!e)throw Error("Received a delta with no existing snapshot (there should be one from message creation)");let a=t.data;if(a.delta.content)for(const o of a.delta.content)if(o.index in e.content){let s=e.content[o.index];e.content[o.index]=_(this,X,"m",Or).call(this,o,s)}else e.content[o.index]=o,r.push(o);return[e,r];case"thread.message.in_progress":case"thread.message.completed":case"thread.message.incomplete":if(e)return[e,r];throw Error("Received thread message event with no existing snapshot")}throw Error("Tried to accumulate a non-message event")},Or=function(t,e){return ue.accumulateDelta(e,t)},Ir=function(t){switch(te(this,Bt,t.data,"f"),t.event){case"thread.run.created":break;case"thread.run.queued":break;case"thread.run.in_progress":break;case"thread.run.requires_action":case"thread.run.cancelled":case"thread.run.failed":case"thread.run.completed":case"thread.run.expired":te(this,Ie,t.data,"f"),_(this,ne,"f")&&(this._emit("toolCallDone",_(this,ne,"f")),te(this,ne,void 0,"f"));break}};class Mn extends T{create(t,e,r){return this._client.post(`/threads/${t}/messages`,{body:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}retrieve(t,e,r){return this._client.get(`/threads/${t}/messages/${e}`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}update(t,e,r,a){return this._client.post(`/threads/${t}/messages/${e}`,{body:r,...a,headers:{"OpenAI-Beta":"assistants=v2",...a==null?void 0:a.headers}})}list(t,e={},r){return ee(e)?this.list(t,{},e):this._client.getAPIList(`/threads/${t}/messages`,Fn,{query:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}del(t,e,r){return this._client.delete(`/threads/${t}/messages/${e}`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}}class Fn extends de{}Mn.MessagesPage=Fn;class jn extends T{retrieve(t,e,r,a={},o){return ee(a)?this.retrieve(t,e,r,{},a):this._client.get(`/threads/${t}/runs/${e}/steps/${r}`,{query:a,...o,headers:{"OpenAI-Beta":"assistants=v2",...o==null?void 0:o.headers}})}list(t,e,r={},a){return ee(r)?this.list(t,e,{},r):this._client.getAPIList(`/threads/${t}/runs/${e}/steps`,Ln,{query:r,...a,headers:{"OpenAI-Beta":"assistants=v2",...a==null?void 0:a.headers}})}}class Ln extends de{}jn.RunStepsPage=Ln;class wt extends T{constructor(){super(...arguments),this.steps=new jn(this._client)}create(t,e,r){const{include:a,...o}=e;return this._client.post(`/threads/${t}/runs`,{query:{include:a},body:o,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers},stream:e.stream??!1})}retrieve(t,e,r){return this._client.get(`/threads/${t}/runs/${e}`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}update(t,e,r,a){return this._client.post(`/threads/${t}/runs/${e}`,{body:r,...a,headers:{"OpenAI-Beta":"assistants=v2",...a==null?void 0:a.headers}})}list(t,e={},r){return ee(e)?this.list(t,{},e):this._client.getAPIList(`/threads/${t}/runs`,Vn,{query:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}cancel(t,e,r){return this._client.post(`/threads/${t}/runs/${e}/cancel`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}async createAndPoll(t,e,r){const a=await this.create(t,e,r);return await this.poll(t,a.id,r)}createAndStream(t,e,r){return ue.createAssistantStream(t,this._client.beta.threads.runs,e,r)}async poll(t,e,r){const a={...r==null?void 0:r.headers,"X-Stainless-Poll-Helper":"true"};for(r!=null&&r.pollIntervalMs&&(a["X-Stainless-Custom-Poll-Interval"]=r.pollIntervalMs.toString());;){const{data:o,response:s}=await this.retrieve(t,e,{...r,headers:{...r==null?void 0:r.headers,...a}}).withResponse();switch(o.status){case"queued":case"in_progress":case"cancelling":let i=5e3;if(r!=null&&r.pollIntervalMs)i=r.pollIntervalMs;else{const l=s.headers.get("openai-poll-after-ms");if(l){const c=parseInt(l);isNaN(c)||(i=c)}}await yt(i);break;case"requires_action":case"incomplete":case"cancelled":case"completed":case"failed":case"expired":return o}}}stream(t,e,r){return ue.createAssistantStream(t,this._client.beta.threads.runs,e,r)}submitToolOutputs(t,e,r,a){return this._client.post(`/threads/${t}/runs/${e}/submit_tool_outputs`,{body:r,...a,headers:{"OpenAI-Beta":"assistants=v2",...a==null?void 0:a.headers},stream:r.stream??!1})}async submitToolOutputsAndPoll(t,e,r,a){const o=await this.submitToolOutputs(t,e,r,a);return await this.poll(t,o.id,a)}submitToolOutputsStream(t,e,r,a){return ue.createToolAssistantStream(t,e,this._client.beta.threads.runs,r,a)}}class Vn extends de{}wt.RunsPage=Vn;wt.Steps=jn;wt.RunStepsPage=Ln;class Xe extends T{constructor(){super(...arguments),this.runs=new wt(this._client),this.messages=new Mn(this._client)}create(t={},e){return ee(t)?this.create({},t):this._client.post("/threads",{body:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}retrieve(t,e){return this._client.get(`/threads/${t}`,{...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}update(t,e,r){return this._client.post(`/threads/${t}`,{body:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}del(t,e){return this._client.delete(`/threads/${t}`,{...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}createAndRun(t,e){return this._client.post("/threads/runs",{body:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers},stream:t.stream??!1})}async createAndRunPoll(t,e){const r=await this.createAndRun(t,e);return await this.runs.poll(r.thread_id,r.id,e)}createAndRunStream(t,e){return ue.createThreadAssistantStream(t,this._client.beta.threads,e)}}Xe.Runs=wt;Xe.RunsPage=Vn;Xe.Messages=Mn;Xe.MessagesPage=Fn;const hi=async n=>{const t=await Promise.allSettled(n),e=t.filter(a=>a.status==="rejected");if(e.length){for(const a of e)console.error(a.reason);throw new Error(`${e.length} promise(s) failed - see the above errors`)}const r=[];for(const a of t)a.status==="fulfilled"&&r.push(a.value);return r};let Un=class extends T{create(t,e,r){return this._client.post(`/vector_stores/${t}/files`,{body:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}retrieve(t,e,r){return this._client.get(`/vector_stores/${t}/files/${e}`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}list(t,e={},r){return ee(e)?this.list(t,{},e):this._client.getAPIList(`/vector_stores/${t}/files`,zt,{query:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}del(t,e,r){return this._client.delete(`/vector_stores/${t}/files/${e}`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}async createAndPoll(t,e,r){const a=await this.create(t,e,r);return await this.poll(t,a.id,r)}async poll(t,e,r){const a={...r==null?void 0:r.headers,"X-Stainless-Poll-Helper":"true"};for(r!=null&&r.pollIntervalMs&&(a["X-Stainless-Custom-Poll-Interval"]=r.pollIntervalMs.toString());;){const o=await this.retrieve(t,e,{...r,headers:a}).withResponse(),s=o.data;switch(s.status){case"in_progress":let i=5e3;if(r!=null&&r.pollIntervalMs)i=r.pollIntervalMs;else{const l=o.response.headers.get("openai-poll-after-ms");if(l){const c=parseInt(l);isNaN(c)||(i=c)}}await yt(i);break;case"failed":case"completed":return s}}}async upload(t,e,r){const a=await this._client.files.create({file:e,purpose:"assistants"},r);return this.create(t,{file_id:a.id},r)}async uploadAndPoll(t,e,r){const a=await this.upload(t,e,r);return await this.poll(t,a.id,r)}};class zt extends de{}Un.VectorStoreFilesPage=zt;class oo extends T{create(t,e,r){return this._client.post(`/vector_stores/${t}/file_batches`,{body:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}retrieve(t,e,r){return this._client.get(`/vector_stores/${t}/file_batches/${e}`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}cancel(t,e,r){return this._client.post(`/vector_stores/${t}/file_batches/${e}/cancel`,{...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}async createAndPoll(t,e,r){const a=await this.create(t,e);return await this.poll(t,a.id,r)}listFiles(t,e,r={},a){return ee(r)?this.listFiles(t,e,{},r):this._client.getAPIList(`/vector_stores/${t}/file_batches/${e}/files`,zt,{query:r,...a,headers:{"OpenAI-Beta":"assistants=v2",...a==null?void 0:a.headers}})}async poll(t,e,r){const a={...r==null?void 0:r.headers,"X-Stainless-Poll-Helper":"true"};for(r!=null&&r.pollIntervalMs&&(a["X-Stainless-Custom-Poll-Interval"]=r.pollIntervalMs.toString());;){const{data:o,response:s}=await this.retrieve(t,e,{...r,headers:a}).withResponse();switch(o.status){case"in_progress":let i=5e3;if(r!=null&&r.pollIntervalMs)i=r.pollIntervalMs;else{const l=s.headers.get("openai-poll-after-ms");if(l){const c=parseInt(l);isNaN(c)||(i=c)}}await yt(i);break;case"failed":case"cancelled":case"completed":return o}}}async uploadAndPoll(t,{files:e,fileIds:r=[]},a){if(e==null||e.length==0)throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");const o=(a==null?void 0:a.maxConcurrency)??5,s=Math.min(o,e.length),i=this._client,l=e.values(),c=[...r];async function d(p){for(let f of p){const m=await i.files.create({file:f,purpose:"assistants"},a);c.push(m.id)}}const u=Array(s).fill(l).map(d);return await hi(u),await this.createAndPoll(t,{file_ids:c})}}class Ke extends T{constructor(){super(...arguments),this.files=new Un(this._client),this.fileBatches=new oo(this._client)}create(t,e){return this._client.post("/vector_stores",{body:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}retrieve(t,e){return this._client.get(`/vector_stores/${t}`,{...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}update(t,e,r){return this._client.post(`/vector_stores/${t}`,{body:e,...r,headers:{"OpenAI-Beta":"assistants=v2",...r==null?void 0:r.headers}})}list(t={},e){return ee(t)?this.list({},t):this._client.getAPIList("/vector_stores",Wn,{query:t,...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}del(t,e){return this._client.delete(`/vector_stores/${t}`,{...e,headers:{"OpenAI-Beta":"assistants=v2",...e==null?void 0:e.headers}})}}class Wn extends de{}Ke.VectorStoresPage=Wn;Ke.Files=Un;Ke.VectorStoreFilesPage=zt;Ke.FileBatches=oo;class xe extends T{constructor(){super(...arguments),this.realtime=new Dn(this._client),this.vectorStores=new Ke(this._client),this.chat=new $n(this._client),this.assistants=new Rn(this._client),this.threads=new Xe(this._client)}}xe.Realtime=Dn;xe.VectorStores=Ke;xe.VectorStoresPage=Wn;xe.Assistants=Rn;xe.AssistantsPage=Bn;xe.Threads=Xe;class so extends T{create(t,e){return this._client.post("/completions",{body:t,...e,stream:t.stream??!1})}}class io extends T{create(t,e){return this._client.post("/embeddings",{body:t,...e})}}class Hn extends T{create(t,e){return this._client.post("/files",ze({body:t,...e}))}retrieve(t,e){return this._client.get(`/files/${t}`,e)}list(t={},e){return ee(t)?this.list({},t):this._client.getAPIList("/files",qn,{query:t,...e})}del(t,e){return this._client.delete(`/files/${t}`,e)}content(t,e){return this._client.get(`/files/${t}/content`,{...e,headers:{Accept:"application/binary",...e==null?void 0:e.headers},__binaryResponse:!0})}retrieveContent(t,e){return this._client.get(`/files/${t}/content`,e)}async waitForProcessing(t,{pollInterval:e=5e3,maxWait:r=30*60*1e3}={}){const a=new Set(["processed","error","deleted"]),o=Date.now();let s=await this.retrieve(t);for(;!s.status||!a.has(s.status);)if(await yt(e),s=await this.retrieve(t),Date.now()-o>r)throw new On({message:`Giving up on waiting for file ${t} to finish processing after ${r} milliseconds.`});return s}}class qn extends de{}Hn.FileObjectsPage=qn;class Gn extends T{list(t,e={},r){return ee(e)?this.list(t,{},e):this._client.getAPIList(`/fine_tuning/jobs/${t}/checkpoints`,Jn,{query:e,...r})}}class Jn extends de{}Gn.FineTuningJobCheckpointsPage=Jn;class Qe extends T{constructor(){super(...arguments),this.checkpoints=new Gn(this._client)}create(t,e){return this._client.post("/fine_tuning/jobs",{body:t,...e})}retrieve(t,e){return this._client.get(`/fine_tuning/jobs/${t}`,e)}list(t={},e){return ee(t)?this.list({},t):this._client.getAPIList("/fine_tuning/jobs",zn,{query:t,...e})}cancel(t,e){return this._client.post(`/fine_tuning/jobs/${t}/cancel`,e)}listEvents(t,e={},r){return ee(e)?this.listEvents(t,{},e):this._client.getAPIList(`/fine_tuning/jobs/${t}/events`,Xn,{query:e,...r})}}class zn extends de{}class Xn extends de{}Qe.FineTuningJobsPage=zn;Qe.FineTuningJobEventsPage=Xn;Qe.Checkpoints=Gn;Qe.FineTuningJobCheckpointsPage=Jn;class St extends T{constructor(){super(...arguments),this.jobs=new Qe(this._client)}}St.Jobs=Qe;St.FineTuningJobsPage=zn;St.FineTuningJobEventsPage=Xn;class lo extends T{createVariation(t,e){return this._client.post("/images/variations",ze({body:t,...e}))}edit(t,e){return this._client.post("/images/edits",ze({body:t,...e}))}generate(t,e){return this._client.post("/images/generations",{body:t,...e})}}class Kn extends T{retrieve(t,e){return this._client.get(`/models/${t}`,e)}list(t){return this._client.getAPIList("/models",Qn,t)}del(t,e){return this._client.delete(`/models/${t}`,e)}}class Qn extends ni{}Kn.ModelsPage=Qn;class co extends T{create(t,e){return this._client.post("/moderations",{body:t,...e})}}class uo extends T{create(t,e,r){return this._client.post(`/uploads/${t}/parts`,ze({body:e,...r}))}}class Yn extends T{constructor(){super(...arguments),this.parts=new uo(this._client)}create(t,e){return this._client.post("/uploads",{body:t,...e})}cancel(t,e){return this._client.post(`/uploads/${t}/cancel`,e)}complete(t,e,r){return this._client.post(`/uploads/${t}/complete`,{body:e,...r})}}Yn.Parts=uo;var po;class O extends Ws{constructor({baseURL:t=Ct("OPENAI_BASE_URL"),apiKey:e=Ct("OPENAI_API_KEY"),organization:r=Ct("OPENAI_ORG_ID")??null,project:a=Ct("OPENAI_PROJECT_ID")??null,...o}={}){if(e===void 0)throw new x("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");const s={apiKey:e,organization:r,project:a,...o,baseURL:t||"https://api.openai.com/v1"};if(!s.dangerouslyAllowBrowser&&ei())throw new x(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);super({baseURL:s.baseURL,timeout:s.timeout??6e5,httpAgent:s.httpAgent,maxRetries:s.maxRetries,fetch:s.fetch}),this.completions=new so(this),this.chat=new In(this),this.embeddings=new io(this),this.files=new Hn(this),this.images=new lo(this),this.audio=new vt(this),this.moderations=new co(this),this.models=new Kn(this),this.fineTuning=new St(this),this.beta=new xe(this),this.batches=new En(this),this.uploads=new Yn(this),this._options=s,this.apiKey=e,this.organization=r,this.project=a}defaultQuery(){return this._options.defaultQuery}defaultHeaders(t){return{...super.defaultHeaders(t),"OpenAI-Organization":this.organization,"OpenAI-Project":this.project,...this._options.defaultHeaders}}authHeaders(t){return{Authorization:`Bearer ${this.apiKey}`}}stringifyQuery(t){return xs(t,{arrayFormat:"brackets"})}}po=O;O.OpenAI=po;O.DEFAULT_TIMEOUT=6e5;O.OpenAIError=x;O.APIError=K;O.APIConnectionError=qt;O.APIConnectionTimeoutError=On;O.APIUserAbortError=ce;O.NotFoundError=ga;O.ConflictError=ba;O.RateLimitError=va;O.BadRequestError=fa;O.AuthenticationError=ha;O.InternalServerError=_a;O.PermissionDeniedError=ma;O.UnprocessableEntityError=ya;O.toFile=xa;O.fileFromPath=da;O.Completions=so;O.Chat=In;O.Embeddings=io;O.Files=Hn;O.FileObjectsPage=qn;O.Images=lo;O.Audio=vt;O.Moderations=co;O.Models=Kn;O.ModelsPage=Qn;O.FineTuning=St;O.Beta=xe;O.Batches=En;O.BatchesPage=Tn;O.Uploads=Yn;const fo=So("businessStore",()=>{const{generatePrompt:n}=ms(),t=$e(),e=$e(!1);return{resetOpenAiData:()=>{t.value=void 0},fetchOpenAi:async o=>{const s="You are a helpful assistant designed to output JSON.",i=n(o),l=new O({organization:"org-gMMLBDt8GYoH6XvDrRNR9dDS",project:"proj_13bhHRRlUbgQnmsrdOEaVlAH",apiKey:gs,dangerouslyAllowBrowser:!0});t.value=void 0,e.value=!0;const c=await l.chat.completions.create({response_format:{type:"json_object"},model:"gpt-4-turbo",store:!0,messages:[{content:s,role:"system"},{content:i,role:"user"}]});e.value=!1;const d=c.choices[0].message.content;d&&(t.value=JSON.parse(d),console.log(JSON.parse(d)))},openAiData:t,isLoaded:e}},{persist:{storage:sessionStorage,pick:["openAiData"]}}),mi={class:"stepper"},gi={class:"stepper__content"},bi={class:"stepper__content-col-2"},yi={class:"stepper__content-col-1"},vi={class:"stepper__actions stepper__actions-between"},_i=Vt({__name:"ElQuizai",setup(n){const{formData:t,fields:e,schema:r,setStepValueHandler:a}=Ht(),o=fo(),{validate:s}=Bo(),i=$e("Next"),l=$e("Back"),c=async({activateCallback:d,value:u})=>{await s()&&(o.fetchOpenAi(u),a({activateCallback:d,value:"3"}))};return(d,u)=>(S(),J(D(Wt),{value:"2"},{default:M(({activateCallback:p})=>[F(D(No),{ref:"form","validation-schema":D(r),"initial-values":D(t),onSubmit:f=>c({activateCallback:p,value:f})},{default:M(()=>[P("div",mi,[P("div",gi,[F(Jr,ye(ve(D(To))),null,16),P("section",bi,[F(Ae,ye(ve(D(e).productOrService)),null,16),F(Ae,ye(ve(D(e).targetAudience)),null,16),F(Ae,ye(ve(D(e).regionOrCity)),null,16),F(Ae,ye(ve(D(e).startUpCapital)),null,16),F(Ae,ye(ve(D(e).salesChannels)),null,16),F(Ae,ye(ve(D(e).keyCosts)),null,16)]),P("section",yi,[F(Ae,ye(ve(D(e).mainGoals)),null,16)])])]),P("div",vi,[F(lt,{"button-action":()=>D(a)({activateCallback:p,value:"1"}),variant:"default"},{default:M(()=>[Se(Y(l.value),1)]),_:2},1032,["button-action"]),F(lt,{variant:"primary",type:"submit"},{default:M(()=>[Se(Y(i.value),1)]),_:1})])]),_:2},1032,["validation-schema","initial-values","onSubmit"])]),_:1}))}}),wi=bt(_i,[["__scopeId","data-v-bd60b18d"]]),Si={},$i={class:"flex flex-col items-center justify-center w-full h-full gap-4"};function ki(n,t){return S(),U("div",$i,t[0]||(t[0]=[P("i",{class:"text-gray-400 w-fit h-fit pi pi-spin pi-slack",style:{"font-size":"5rem"}},null,-1),P("span",{class:"text-lg text-gray-600"},"Loading...",-1)]))}const Ci=bt(Si,[["render",ki]]);var xi=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Pi=j.extend({name:"baseicon",css:xi});function pt(n){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(n)}function Er(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,r)}return e}function Tr(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Er(Object(e),!0).forEach(function(r){Ai(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Er(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function Ai(n,t,e){return(t=Oi(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Oi(n){var t=Ii(n,"string");return pt(t)=="symbol"?t:t+""}function Ii(n,t){if(pt(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(pt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var Zn={name:"BaseIcon",extends:se,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Pi,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var t=Ut(this.label);return Tr(Tr({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},er={name:"MinusIcon",extends:Zn};function Ei(n,t,e,r,a,o){return S(),U("svg",w({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),t[0]||(t[0]=[P("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}er.render=Ei;var tr={name:"PlusIcon",extends:Zn};function Ti(n,t,e,r,a,o){return S(),U("svg",w({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),t[0]||(t[0]=[P("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}tr.render=Ti;function ft(n){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(n)}function Rr(n,t){return Di(n)||Ni(n,t)||Bi(n,t)||Ri()}function Ri(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bi(n,t){if(n){if(typeof n=="string")return Br(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Br(n,t):void 0}}function Br(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function Ni(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var r,a,o,s,i=[],l=!0,c=!1;try{if(o=(e=e.call(n)).next,t!==0)for(;!(l=(r=o.call(e)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(d){c=!0,a=d}finally{try{if(!l&&e.return!=null&&(s=e.return(),Object(s)!==s))return}finally{if(c)throw a}}return i}}function Di(n){if(Array.isArray(n))return n}function Nr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,r)}return e}function I(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Nr(Object(e),!0).forEach(function(r){Cn(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Nr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function Cn(n,t,e){return(t=Mi(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Mi(n){var t=Fi(n,"string");return ft(t)=="symbol"?t:t+""}function Fi(n,t){if(ft(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(ft(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var $={_getMeta:function(){return[ar(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],cn(ar(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(t,e){var r,a,o;return(r=(t==null||(a=t.instance)===null||a===void 0?void 0:a.$primevue)||(e==null||(o=e.ctx)===null||o===void 0||(o=o.appContext)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0?void 0:o.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Ur,_getPTValue:function(){var t,e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var b=$._getOptionValue.apply($,arguments);return Fe(b)||Wr(b)?{class:b}:b},c=((t=r.binding)===null||t===void 0||(t=t.value)===null||t===void 0?void 0:t.ptOptions)||((e=r.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},d=c.mergeSections,u=d===void 0?!0:d,p=c.mergeProps,f=p===void 0?!1:p,m=i?$._useDefaultPT(r,r.defaultPT(),l,o,s):void 0,g=$._usePT(r,$._getPT(a,r.$name),l,o,I(I({},s),{},{global:m||{}})),v=$._getPTDatasets(r,o);return u||!u&&g?f?$._mergeProps(r,f,m,g,v):I(I(I({},m),g),v):I(I({},g),v)},_getPTDatasets:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return I(I({},e==="root"&&Cn({},"".concat(r,"name"),we(t.$name))),{},Cn({},"".concat(r,"section"),we(e)))},_getPT:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=function(s){var i,l=r?r(s):s,c=we(e);return(i=l==null?void 0:l[c])!==null&&i!==void 0?i:l};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:a(t.originalValue),value:a(t.value)}:a(t)},_usePT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=function(v){return r(v,a,o)};if(e!=null&&e.hasOwnProperty("_usept")){var i,l=e._usept||((i=t.$primevueConfig)===null||i===void 0?void 0:i.ptOptions)||{},c=l.mergeSections,d=c===void 0?!0:c,u=l.mergeProps,p=u===void 0?!1:u,f=s(e.originalValue),m=s(e.value);return f===void 0&&m===void 0?void 0:Fe(m)?m:Fe(f)?f:d||!d&&m?p?$._mergeProps(t,p,f,m):I(I({},f),m):m}return s(e)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return $._usePT(t,e,r,a,o)},_loadStyles:function(t,e,r){var a,o=$._getConfig(e,r),s={nonce:o==null||(a=o.csp)===null||a===void 0?void 0:a.nonce};$._loadCoreStyles(t.$instance,s),$._loadThemeStyles(t.$instance,s),$._loadScopedThemeStyles(t.$instance,s),$._themeChangeListener(function(){return $._loadThemeStyles(t.$instance,s)})},_loadCoreStyles:function(){var t,e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(!Ce.isStyleNameLoaded((t=r.$style)===null||t===void 0?void 0:t.name)&&(e=r.$style)!==null&&e!==void 0&&e.name){var o;j.loadCSS(a),(o=r.$style)===null||o===void 0||o.loadCSS(a),Ce.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var t,e,r,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(a!=null&&a.isUnstyled()||(a==null||(t=a.theme)===null||t===void 0?void 0:t.call(a))==="none")){if(!ae.isStyleNameLoaded("common")){var s,i,l=((s=a.$style)===null||s===void 0||(i=s.getCommonTheme)===null||i===void 0?void 0:i.call(s))||{},c=l.primitive,d=l.semantic,u=l.global,p=l.style;j.load(c==null?void 0:c.css,I({name:"primitive-variables"},o)),j.load(d==null?void 0:d.css,I({name:"semantic-variables"},o)),j.load(u==null?void 0:u.css,I({name:"global-variables"},o)),j.loadTheme(I({name:"global-style"},o),p),ae.setLoadedStyleName("common")}if(!ae.isStyleNameLoaded((e=a.$style)===null||e===void 0?void 0:e.name)&&(r=a.$style)!==null&&r!==void 0&&r.name){var f,m,g,v,R=((f=a.$style)===null||f===void 0||(m=f.getDirectiveTheme)===null||m===void 0?void 0:m.call(f))||{},b=R.css,h=R.style;(g=a.$style)===null||g===void 0||g.load(b,I({name:"".concat(a.$style.name,"-variables")},o)),(v=a.$style)===null||v===void 0||v.loadTheme(I({name:"".concat(a.$style.name,"-style")},o),h),ae.setLoadedStyleName(a.$style.name)}if(!ae.isStyleNameLoaded("layer-order")){var y,E,k=(y=a.$style)===null||y===void 0||(E=y.getLayerOrderThemeCSS)===null||E===void 0?void 0:E.call(y);j.load(k,I({name:"layer-order",first:!0},o)),ae.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=t.preset();if(r&&t.$attrSelector){var a,o,s,i=((a=t.$style)===null||a===void 0||(o=a.getPresetTheme)===null||o===void 0?void 0:o.call(a,r,"[".concat(t.$attrSelector,"]")))||{},l=i.css,c=(s=t.$style)===null||s===void 0?void 0:s.load(l,I({name:"".concat(t.$attrSelector,"-").concat(t.$style.name)},e));t.scopedStyleEl=c.el}},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ce.clearLoadedStyleNames(),Vr.on("theme:change",t)},_hook:function(t,e,r,a,o,s){var i,l,c="on".concat($o(e)),d=$._getConfig(a,o),u=r==null?void 0:r.$instance,p=$._usePT(u,$._getPT(a==null||(i=a.value)===null||i===void 0?void 0:i.pt,t),$._getOptionValue,"hooks.".concat(c)),f=$._useDefaultPT(u,d==null||(l=d.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[t],$._getOptionValue,"hooks.".concat(c)),m={el:r,binding:a,vnode:o,prevVnode:s};p==null||p(u,m),f==null||f(u,m)},_mergeProps:function(){for(var t=arguments.length>1?arguments[1]:void 0,e=arguments.length,r=new Array(e>2?e-2:0),a=2;a<e;a++)r[a-2]=arguments[a];return Lr(t)?t.apply(void 0,r):w.apply(void 0,r)},_extend:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,i,l,c,d){var u,p,f,m;i._$instances=i._$instances||{};var g=$._getConfig(l,c),v=i._$instances[t]||{},R=Ut(v)?I(I({},e),e==null?void 0:e.methods):{};i._$instances[t]=I(I({},v),{},{$name:t,$host:i,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:v.$el||i||void 0,$style:I({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},e==null?void 0:e.style),$primevueConfig:g,$attrSelector:(u=i.$pd)===null||u===void 0||(u=u[t])===null||u===void 0?void 0:u.attrSelector,defaultPT:function(){return $._getPT(g==null?void 0:g.pt,void 0,function(h){var y;return h==null||(y=h.directives)===null||y===void 0?void 0:y[t]})},isUnstyled:function(){var h,y;return((h=i.$instance)===null||h===void 0||(h=h.$binding)===null||h===void 0||(h=h.value)===null||h===void 0?void 0:h.unstyled)!==void 0?(y=i.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.unstyled:g==null?void 0:g.unstyled},theme:function(){var h;return(h=i.$instance)===null||h===void 0||(h=h.$primevueConfig)===null||h===void 0?void 0:h.theme},preset:function(){var h;return(h=i.$instance)===null||h===void 0||(h=h.$binding)===null||h===void 0||(h=h.value)===null||h===void 0?void 0:h.dt},ptm:function(){var h,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return $._getPTValue(i.$instance,(h=i.$instance)===null||h===void 0||(h=h.$binding)===null||h===void 0||(h=h.value)===null||h===void 0?void 0:h.pt,y,I({},E))},ptmo:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return $._getPTValue(i.$instance,h,y,E,!1)},cx:function(){var h,y,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(h=i.$instance)!==null&&h!==void 0&&h.isUnstyled()?void 0:$._getOptionValue((y=i.$instance)===null||y===void 0||(y=y.$style)===null||y===void 0?void 0:y.classes,E,I({},k))},sx:function(){var h,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E?$._getOptionValue((h=i.$instance)===null||h===void 0||(h=h.$style)===null||h===void 0?void 0:h.inlineStyles,y,I({},k)):void 0}},R),i.$instance=i._$instances[t],(p=(f=i.$instance)[s])===null||p===void 0||p.call(f,i,l,c,d),i["$".concat(t)]=i.$instance,$._hook(t,s,i,l,c,d),i.$pd||(i.$pd={}),i.$pd[t]=I(I({},(m=i.$pd)===null||m===void 0?void 0:m[t]),{},{name:t,instance:i.$instance})},a=function(s){var i,l,c,d,u,p=(i=s.$instance)===null||i===void 0?void 0:i.watch;p==null||(l=p.config)===null||l===void 0||l.call(s.$instance,(c=s.$instance)===null||c===void 0?void 0:c.$primevueConfig),or.on("config:change",function(f){var m,g=f.newValue,v=f.oldValue;return p==null||(m=p.config)===null||m===void 0?void 0:m.call(s.$instance,g,v)}),p==null||(d=p["config.ripple"])===null||d===void 0||d.call(s.$instance,(u=s.$instance)===null||u===void 0||(u=u.$primevueConfig)===null||u===void 0?void 0:u.ripple),or.on("config:ripple:change",function(f){var m,g=f.newValue,v=f.oldValue;return p==null||(m=p["config.ripple"])===null||m===void 0?void 0:m.call(s.$instance,g,v)})};return{created:function(s,i,l,c){s.$pd||(s.$pd={}),s.$pd[t]={name:t,attrSelector:An("pd")},r("created",s,i,l,c)},beforeMount:function(s,i,l,c){$._loadStyles(s,i,l),r("beforeMount",s,i,l,c),a(s)},mounted:function(s,i,l,c){$._loadStyles(s,i,l),r("mounted",s,i,l,c)},beforeUpdate:function(s,i,l,c){r("beforeUpdate",s,i,l,c)},updated:function(s,i,l,c){$._loadStyles(s,i,l),r("updated",s,i,l,c)},beforeUnmount:function(s,i,l,c){r("beforeUnmount",s,i,l,c)},unmounted:function(s,i,l,c){var d;(d=s.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),r("unmounted",s,i,l,c)}}},extend:function(){var t=$._getMeta.apply($,arguments),e=Rr(t,2),r=e[0],a=e[1];return I({extend:function(){var s=$._getMeta.apply($,arguments),i=Rr(s,2),l=i[0],c=i[1];return $.extend(l,I(I(I({},a),a==null?void 0:a.methods),c))}},$._extend(r,a))}},ji=function(t){var e=t.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(e("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},Li={root:"p-ink"},Vi=j.extend({name:"ripple-directive",theme:ji,classes:Li}),Ui=$.extend({style:Vi});function ht(n){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(n)}function Wi(n){return Ji(n)||Gi(n)||qi(n)||Hi()}function Hi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qi(n,t){if(n){if(typeof n=="string")return xn(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?xn(n,t):void 0}}function Gi(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ji(n){if(Array.isArray(n))return xn(n)}function xn(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function Dr(n,t,e){return(t=zi(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function zi(n){var t=Xi(n,"string");return ht(t)=="symbol"?t:t+""}function Xi(n,t){if(ht(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(ht(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var nr=Ui.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var e=ko("span",Dr(Dr({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));t.appendChild(e),this.$el=e},remove:function(t){var e=this.getInk(t);e&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),e.removeEventListener("animationend",this.onAnimationEnd),e.remove())},onMouseDown:function(t){var e=this,r=t.currentTarget,a=this.getInk(r);if(!(!a||getComputedStyle(a,null).display==="none")){if(!this.isUnstyled()&&Kt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"),!sr(a)&&!ir(a)){var o=Math.max(Co(r),xo(r));a.style.height=o+"px",a.style.width=o+"px"}var s=Po(r),i=t.pageX-s.left+document.body.scrollTop-ir(a)/2,l=t.pageY-s.top+document.body.scrollLeft-sr(a)/2;a.style.top=l+"px",a.style.left=i+"px",!this.isUnstyled()&&Ao(a,"p-ink-active"),a.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){a&&(!e.isUnstyled()&&Kt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Kt(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?Wi(t.children).find(function(e){return Oo(e,"data-pc-name")==="ripple"}):void 0}}}),Ki=function(t){var e=t.dt;return`
.p-fieldset {
    background: `.concat(e("fieldset.background"),`;
    border: 1px solid `).concat(e("fieldset.border.color"),`;
    border-radius: `).concat(e("fieldset.border.radius"),`;
    color: `).concat(e("fieldset.color"),`;
    padding: `).concat(e("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(e("fieldset.legend.background"),`;
    border-radius: `).concat(e("fieldset.legend.border.radius"),`;
    border-width: `).concat(e("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("fieldset.legend.border.color"),`;
    padding: `).concat(e("fieldset.legend.padding"),`;
    transition: background `).concat(e("fieldset.transition.duration"),", color ").concat(e("fieldset.transition.duration"),", outline-color ").concat(e("fieldset.transition.duration"),", box-shadow ").concat(e("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: `).concat(e("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(e("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(e("fieldset.legend.border.radius"),`;
    transition: background `).concat(e("fieldset.transition.duration"),", color ").concat(e("fieldset.transition.duration"),", outline-color ").concat(e("fieldset.transition.duration"),", box-shadow ").concat(e("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(e("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(e("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(e("fieldset.legend.focus.ring.width")," ").concat(e("fieldset.legend.focus.ring.style")," ").concat(e("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(e("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(e("fieldset.legend.hover.color"),`;
    background: `).concat(e("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(e("fieldset.toggle.icon.color"),`;
    transition: color `).concat(e("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(e("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(e("fieldset.content.padding"),`;
}
`)},Qi={root:function(t){var e=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":e.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},Yi=j.extend({name:"fieldset",theme:Ki,classes:Qi}),Zi={name:"BaseFieldset",extends:se,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Yi,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},ho={name:"Fieldset",extends:Zi,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||Je()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||Je()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:nr},components:{PlusIcon:tr,MinusIcon:er}};function mt(n){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mt(n)}function Mr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,r)}return e}function Fr(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Mr(Object(e),!0).forEach(function(r){el(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Mr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function el(n,t,e){return(t=tl(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function tl(n){var t=nl(n,"string");return mt(t)=="symbol"?t:t+""}function nl(n,t){if(mt(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(mt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var rl=["id"],al=["id","aria-controls","aria-expanded","aria-label"],ol=["id","aria-labelledby"];function sl(n,t,e,r,a,o){var s=qr("ripple");return S(),U("fieldset",w({class:n.cx("root")},n.ptmi("root")),[P("legend",w({class:n.cx("legend")},n.ptm("legend")),[L(n.$slots,"legend",{toggleCallback:o.toggle},function(){return[n.toggleable?oe("",!0):(S(),U("span",w({key:0,id:a.id+"_header",class:n.cx("legendLabel")},n.ptm("legendLabel")),Y(n.legend),17,rl)),n.toggleable?Ge((S(),U("button",w({key:1,id:a.id+"_header",type:"button","aria-controls":a.id+"_content","aria-expanded":!a.d_collapsed,"aria-label":o.buttonAriaLabel,class:n.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)}),onKeydown:t[1]||(t[1]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},Fr(Fr({},n.toggleButtonProps),n.ptm("toggleButton"))),[L(n.$slots,n.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed,class:qe(n.cx("toggleIcon"))},function(){return[(S(),J(He(a.d_collapsed?"PlusIcon":"MinusIcon"),w({class:n.cx("toggleIcon")},n.ptm("toggleIcon")),null,16,["class"]))]}),P("span",w({class:n.cx("legendLabel")},n.ptm("legendLabel")),Y(n.legend),17)],16,al)),[[s]]):oe("",!0)]})],16),F(Pn,w({name:"p-toggleable-content"},n.ptm("transition")),{default:M(function(){return[Ge(P("div",w({id:a.id+"_content",class:n.cx("contentContainer"),role:"region","aria-labelledby":a.id+"_header"},n.ptm("contentContainer")),[P("div",w({class:n.cx("content")},n.ptm("content")),[L(n.$slots,"default")],16)],16,ol),[[Nt,!a.d_collapsed]])]}),_:3},16)],16)}ho.render=sl;var mo={name:"SpinnerIcon",extends:Zn};function il(n,t,e,r,a,o){return S(),U("svg",w({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),t[0]||(t[0]=[P("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}mo.render=il;var ll=function(t){var e=t.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(e("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(e("badge.padding"),`;
    background: `).concat(e("badge.primary.background"),`;
    color: `).concat(e("badge.primary.color"),`;
    font-size: `).concat(e("badge.font.size"),`;
    font-weight: `).concat(e("badge.font.weight"),`;
    min-width: `).concat(e("badge.min.width"),`;
    height: `).concat(e("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(e("badge.dot.size"),`;
    min-width: `).concat(e("badge.dot.size"),`;
    height: `).concat(e("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(e("badge.secondary.background"),`;
    color: `).concat(e("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(e("badge.success.background"),`;
    color: `).concat(e("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(e("badge.info.background"),`;
    color: `).concat(e("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(e("badge.warn.background"),`;
    color: `).concat(e("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(e("badge.danger.background"),`;
    color: `).concat(e("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(e("badge.contrast.background"),`;
    color: `).concat(e("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(e("badge.sm.font.size"),`;
    min-width: `).concat(e("badge.sm.min.width"),`;
    height: `).concat(e("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(e("badge.lg.font.size"),`;
    min-width: `).concat(e("badge.lg.min.width"),`;
    height: `).concat(e("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(e("badge.xl.font.size"),`;
    min-width: `).concat(e("badge.xl.min.width"),`;
    height: `).concat(e("badge.xl.height"),`;
}
`)},cl={root:function(t){var e=t.props,r=t.instance;return["p-badge p-component",{"p-badge-circle":ln(e.value)&&String(e.value).length===1,"p-badge-dot":Ut(e.value)&&!r.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},ul=j.extend({name:"badge",theme:ll,classes:cl}),dl={name:"BaseBadge",extends:se,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:ul,provide:function(){return{$pcBadge:this,$parentInstance:this}}},go={name:"Badge",extends:dl,inheritAttrs:!1};function pl(n,t,e,r,a,o){return S(),U("span",w({class:n.cx("root")},n.ptmi("root")),[L(n.$slots,"default",{},function(){return[Se(Y(n.value),1)]})],16)}go.render=pl;function gt(n){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(n)}function fe(n,t,e){return(t=fl(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function fl(n){var t=hl(n,"string");return gt(t)=="symbol"?t:t+""}function hl(n,t){if(gt(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(gt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var ml=function(t){var e=t.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(e("button.primary.color"),`;
    background: `).concat(e("button.primary.background"),`;
    border: 1px solid `).concat(e("button.primary.border.color"),`;
    padding: `).concat(e("button.padding.y")," ").concat(e("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(e("button.transition.duration"),", color ").concat(e("button.transition.duration"),", border-color ").concat(e("button.transition.duration"),`,
            outline-color `).concat(e("button.transition.duration"),", box-shadow ").concat(e("button.transition.duration"),`;
    border-radius: `).concat(e("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(e("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(e("button.icon.only.width"),`;
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(e("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(e("button.sm.font.size"),`;
    padding: `).concat(e("button.sm.padding.y")," ").concat(e("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(e("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(e("button.lg.font.size"),`;
    padding: `).concat(e("button.lg.padding.y")," ").concat(e("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(e("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(e("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(e("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(e("button.primary.hover.background"),`;
    border: 1px solid `).concat(e("button.primary.hover.border.color"),`;
    color: `).concat(e("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(e("button.primary.active.background"),`;
    border: 1px solid `).concat(e("button.primary.active.border.color"),`;
    color: `).concat(e("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(e("button.primary.focus.ring.shadow"),`;
    outline: `).concat(e("button.focus.ring.width")," ").concat(e("button.focus.ring.style")," ").concat(e("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(e("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(e("button.badge.size"),`;
    height: `).concat(e("button.badge.size"),`;
    line-height: `).concat(e("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(e("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(e("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(e("button.secondary.background"),`;
    border: 1px solid `).concat(e("button.secondary.border.color"),`;
    color: `).concat(e("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.secondary.hover.background"),`;
    border: 1px solid `).concat(e("button.secondary.hover.border.color"),`;
    color: `).concat(e("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.secondary.active.background"),`;
    border: 1px solid `).concat(e("button.secondary.active.border.color"),`;
    color: `).concat(e("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(e("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(e("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(e("button.success.background"),`;
    border: 1px solid `).concat(e("button.success.border.color"),`;
    color: `).concat(e("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.success.hover.background"),`;
    border: 1px solid `).concat(e("button.success.hover.border.color"),`;
    color: `).concat(e("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(e("button.success.active.background"),`;
    border: 1px solid `).concat(e("button.success.active.border.color"),`;
    color: `).concat(e("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(e("button.success.focus.ring.color"),`;
    box-shadow: `).concat(e("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(e("button.info.background"),`;
    border: 1px solid `).concat(e("button.info.border.color"),`;
    color: `).concat(e("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.info.hover.background"),`;
    border: 1px solid `).concat(e("button.info.hover.border.color"),`;
    color: `).concat(e("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(e("button.info.active.background"),`;
    border: 1px solid `).concat(e("button.info.active.border.color"),`;
    color: `).concat(e("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(e("button.info.focus.ring.color"),`;
    box-shadow: `).concat(e("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(e("button.warn.background"),`;
    border: 1px solid `).concat(e("button.warn.border.color"),`;
    color: `).concat(e("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(e("button.warn.hover.background"),`;
    border: 1px solid `).concat(e("button.warn.hover.border.color"),`;
    color: `).concat(e("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(e("button.warn.active.background"),`;
    border: 1px solid `).concat(e("button.warn.active.border.color"),`;
    color: `).concat(e("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(e("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(e("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(e("button.help.background"),`;
    border: 1px solid `).concat(e("button.help.border.color"),`;
    color: `).concat(e("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.help.hover.background"),`;
    border: 1px solid `).concat(e("button.help.hover.border.color"),`;
    color: `).concat(e("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(e("button.help.active.background"),`;
    border: 1px solid `).concat(e("button.help.active.border.color"),`;
    color: `).concat(e("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(e("button.help.focus.ring.color"),`;
    box-shadow: `).concat(e("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(e("button.danger.background"),`;
    border: 1px solid `).concat(e("button.danger.border.color"),`;
    color: `).concat(e("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.danger.hover.background"),`;
    border: 1px solid `).concat(e("button.danger.hover.border.color"),`;
    color: `).concat(e("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.danger.active.background"),`;
    border: 1px solid `).concat(e("button.danger.active.border.color"),`;
    color: `).concat(e("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(e("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(e("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(e("button.contrast.background"),`;
    border: 1px solid `).concat(e("button.contrast.border.color"),`;
    color: `).concat(e("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.contrast.hover.background"),`;
    border: 1px solid `).concat(e("button.contrast.hover.border.color"),`;
    color: `).concat(e("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.contrast.active.background"),`;
    border: 1px solid `).concat(e("button.contrast.active.border.color"),`;
    color: `).concat(e("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(e("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(e("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(e("button.outlined.primary.border.color"),`;
    color: `).concat(e("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(e("button.outlined.primary.hover.background"),`;
    border-color: `).concat(e("button.outlined.primary.border.color"),`;
    color: `).concat(e("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(e("button.outlined.primary.active.background"),`;
    border-color: `).concat(e("button.outlined.primary.border.color"),`;
    color: `).concat(e("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(e("button.outlined.secondary.border.color"),`;
    color: `).concat(e("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(e("button.outlined.secondary.border.color"),`;
    color: `).concat(e("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.outlined.secondary.active.background"),`;
    border-color: `).concat(e("button.outlined.secondary.border.color"),`;
    color: `).concat(e("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(e("button.outlined.success.border.color"),`;
    color: `).concat(e("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.outlined.success.hover.background"),`;
    border-color: `).concat(e("button.outlined.success.border.color"),`;
    color: `).concat(e("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(e("button.outlined.success.active.background"),`;
    border-color: `).concat(e("button.outlined.success.border.color"),`;
    color: `).concat(e("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(e("button.outlined.info.border.color"),`;
    color: `).concat(e("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.outlined.info.hover.background"),`;
    border-color: `).concat(e("button.outlined.info.border.color"),`;
    color: `).concat(e("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(e("button.outlined.info.active.background"),`;
    border-color: `).concat(e("button.outlined.info.border.color"),`;
    color: `).concat(e("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(e("button.outlined.warn.border.color"),`;
    color: `).concat(e("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(e("button.outlined.warn.hover.background"),`;
    border-color: `).concat(e("button.outlined.warn.border.color"),`;
    color: `).concat(e("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(e("button.outlined.warn.active.background"),`;
    border-color: `).concat(e("button.outlined.warn.border.color"),`;
    color: `).concat(e("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(e("button.outlined.help.border.color"),`;
    color: `).concat(e("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.outlined.help.hover.background"),`;
    border-color: `).concat(e("button.outlined.help.border.color"),`;
    color: `).concat(e("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(e("button.outlined.help.active.background"),`;
    border-color: `).concat(e("button.outlined.help.border.color"),`;
    color: `).concat(e("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(e("button.outlined.danger.border.color"),`;
    color: `).concat(e("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.outlined.danger.hover.background"),`;
    border-color: `).concat(e("button.outlined.danger.border.color"),`;
    color: `).concat(e("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.outlined.danger.active.background"),`;
    border-color: `).concat(e("button.outlined.danger.border.color"),`;
    color: `).concat(e("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(e("button.outlined.contrast.border.color"),`;
    color: `).concat(e("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(e("button.outlined.contrast.border.color"),`;
    color: `).concat(e("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.outlined.contrast.active.background"),`;
    border-color: `).concat(e("button.outlined.contrast.border.color"),`;
    color: `).concat(e("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(e("button.outlined.plain.border.color"),`;
    color: `).concat(e("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(e("button.outlined.plain.hover.background"),`;
    border-color: `).concat(e("button.outlined.plain.border.color"),`;
    color: `).concat(e("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(e("button.outlined.plain.active.background"),`;
    border-color: `).concat(e("button.outlined.plain.border.color"),`;
    color: `).concat(e("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(e("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(e("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(e("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(e("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(e("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(e("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(e("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"),`;
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.text.contrast.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.text.contrast.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.contrast.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(e("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(e("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.active.color"),`;
}
`)},gl={root:function(t){var e=t.instance,r=t.props;return["p-button p-component",fe(fe(fe(fe(fe(fe(fe(fe(fe({"p-button-icon-only":e.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",e.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var e=t.props;return["p-button-icon",fe({},"p-button-icon-".concat(e.iconPos),e.label)]},label:"p-button-label"},bl=j.extend({name:"button",theme:ml,classes:gl}),yl={name:"BaseButton",extends:se,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:bl,provide:function(){return{$pcButton:this,$parentInstance:this}}},bo={name:"Button",extends:yl,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return w(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Ut(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:mo,Badge:go},directives:{ripple:nr}};function vl(n,t,e,r,a,o){var s=We("SpinnerIcon"),i=We("Badge"),l=qr("ripple");return n.asChild?L(n.$slots,"default",{key:1,class:qe(n.cx("root")),a11yAttrs:o.a11yAttrs}):Ge((S(),J(He(n.as),w({key:0,class:n.cx("root")},o.attrs),{default:M(function(){return[L(n.$slots,"default",{},function(){return[n.loading?L(n.$slots,"loadingicon",w({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(S(),U("span",w({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(S(),J(s,w({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):L(n.$slots,"icon",w({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(S(),U("span",w({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):oe("",!0)]}),P("span",w({class:n.cx("label")},n.ptm("label")),Y(n.label||" "),17),n.badge?(S(),J(i,{key:2,value:n.badge,class:qe(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):oe("",!0)]})]}),_:3},16,["class"])),[[l]])}bo.render=vl;var _l=function(t){var e=t.dt;return`
.p-panel {
    border: 1px solid `.concat(e("panel.border.color"),`;
    border-radius: `).concat(e("panel.border.radius"),`;
    background: `).concat(e("panel.background"),`;
    color: `).concat(e("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(e("panel.header.padding"),`;
    background: `).concat(e("panel.header.background"),`;
    color: `).concat(e("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(e("panel.header.border.width"),`;
    border-color: `).concat(e("panel.header.border.color"),`;
    border-radius: `).concat(e("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(e("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(e("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(e("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(e("panel.footer.padding"),`;
}
`)},wl={root:function(t){var e=t.props;return["p-panel p-component",{"p-panel-toggleable":e.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Sl=j.extend({name:"panel",theme:_l,classes:wl}),$l={name:"BasePanel",extends:se,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Sl,provide:function(){return{$pcPanel:this,$parentInstance:this}}},yo={name:"Panel",extends:$l,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||Je()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||Je()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:tr,MinusIcon:er,Button:bo},directives:{ripple:nr}},kl=["id"],Cl=["id","aria-labelledby"];function xl(n,t,e,r,a,o){var s=We("Button");return S(),U("div",w({class:n.cx("root")},n.ptmi("root")),[P("div",w({class:n.cx("header")},n.ptm("header")),[L(n.$slots,"header",{id:a.id+"_header",class:qe(n.cx("title"))},function(){return[n.header?(S(),U("span",w({key:0,id:a.id+"_header",class:n.cx("title")},n.ptm("title")),Y(n.header),17,kl)):oe("",!0)]}),P("div",w({class:n.cx("headerActions")},n.ptm("headerActions")),[L(n.$slots,"icons"),n.toggleable?(S(),J(s,w({key:0,id:a.id+"_header",class:n.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":a.id+"_content","aria-expanded":!a.d_collapsed,unstyled:n.unstyled,onClick:o.toggle,onKeydown:o.onKeyDown},n.toggleButtonProps,{pt:n.ptm("pcToggleButton")}),{icon:M(function(i){return[L(n.$slots,n.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed},function(){return[(S(),J(He(a.d_collapsed?"PlusIcon":"MinusIcon"),w({class:i.class},n.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):oe("",!0)],16)],16),F(Pn,w({name:"p-toggleable-content"},n.ptm("transition")),{default:M(function(){return[Ge(P("div",w({id:a.id+"_content",class:n.cx("contentContainer"),role:"region","aria-labelledby":a.id+"_header"},n.ptm("contentContainer")),[P("div",w({class:n.cx("content")},n.ptm("content")),[L(n.$slots,"default")],16),n.$slots.footer?(S(),U("div",w({key:0,class:n.cx("footer")},n.ptm("footer")),[L(n.$slots,"footer")],16)):oe("",!0)],16,Cl),[[Nt,!a.d_collapsed]])]}),_:3},16)],16)}yo.render=xl;const Pl={class:"stepper__wrapper"},Al={class:"stepper__content"},Ol={key:1,class:"grid gap-4"},Il={class:"stepper__answers"},El={class:"stepper__answers-content"},Tl={class:"stepper__others"},Rl={class:"stepper__actions stepper__actions-between"},Bl=Vt({__name:"ElResult",setup(n){const{setStepValueHandler:t}=Ht(),e=fo(),r=$e("DOWNLOAD"),a=$e("BACK"),o=dn(()=>{var i,l;return(i=e.openAiData)!=null&&i.others?Object.keys((l=e.openAiData)==null?void 0:l.others).map(c=>{var d,u;return{title:(d=e.openAiData)==null?void 0:d.others[c].title,text:(u=e.openAiData)==null?void 0:u.others[c].text}}):[]}),s=dn(()=>{var i;return((i=e.openAiData)==null?void 0:i.business_plan)||[]});return Io(()=>{e.resetOpenAiData()}),(i,l)=>{const c=We("masonry-wall");return S(),J(D(Wt),{value:"3"},{default:M(({activateCallback:d})=>[P("div",Pl,[P("div",Al,[D(e).isLoaded?(S(),J(Ci,{key:0})):(S(),U("div",Ol,[P("div",Il,[(S(!0),U(Dt,null,Gr(s.value,(u,p)=>(S(),J(D(ho),{key:u.step,legend:`Step ${u.step}. ${u.title}`,class:qe(p===s.value.length-1?"stepper__answers-single":"stepper__answers-double")},{default:M(()=>[P("div",El,[l[0]||(l[0]=P("b",null,"1:",-1)),Se(" "+Y(u.what_i_have_to_do)+" ",1),l[1]||(l[1]=P("b",null,"2:",-1)),Se(" "+Y(u.where_to_start),1)])]),_:2},1032,["legend","class"]))),128))]),P("div",Tl,[F(c,{items:o.value,"column-width":250,"ssr-columns":1,gap:16},{default:M(({item:u})=>[F(D(yo),{header:u.title},{default:M(()=>[P("div",null,Y(u.text),1)]),_:2},1032,["header"])]),_:1},8,["items"])])]))])]),P("div",Rl,[F(lt,{"button-action":()=>D(t)({activateCallback:d,value:"2"}),variant:"default"},{default:M(()=>[Se(Y(a.value),1)]),_:2},1032,["button-action"]),F(lt,{"button-action":()=>console.log("download"),variant:"primary"},{default:M(()=>[Se(Y(r.value),1)]),_:1},8,["button-action"])])]),_:1})}}}),Nl=bt(Bl,[["__scopeId","data-v-16036bd6"]]),Dl={class:"business"},Ml=Vt({__name:"BusinessView",setup(n){const{stepList:t,getStorageStepValue:e}=Ht(),r=dn(()=>e());return(a,o)=>(S(),J(_o,null,{content:M(()=>[P("section",Dl,[F(D(Qr),{value:r.value,class:"business__content"},{default:M(()=>[F(D(Yr),null,{default:M(()=>[(S(!0),U(Dt,null,Gr(D(t),s=>(S(),J(D(ta),{key:s.id,value:s.value,class:"business__header"},{default:M(()=>[Se(Y(s.label),1)]),_:2},1032,["value"]))),128))]),_:1}),F(D(Zr),null,{default:M(()=>[F(hs),F(wi),F(Nl)]),_:1})]),_:1},8,["value"])])]),_:1}))}}),Kl=bt(Ml,[["__scopeId","data-v-65912d42"]]);export{Kl as default};
