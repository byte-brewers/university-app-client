import{E as I}from"./ElHorizontalLine-mbyf0QHT.js";import{_ as N,E as P}from"./ElButton-D18KzBgg.js";import{c as V,a as l,u as b,E as c,F as q}from"./index.esm-DqGx8GKW.js";import{r as d,d as A,c as B,w as i,a as O,o as k,b as o,e as t,t as g,n as u,g as p,u as a,f as m,E as z,_ as C}from"./index-BnLGQH3i.js";function S(){const _=d({email:"",pass1:"",pass2:""}),n={email:{label:"Your email address",name:"email",type:"text"},pass1:{label:"Create password",name:"pass1",type:"text"},pass2:{label:"Repeat Password",name:"pass2",type:"text"}},e=V().shape({email:l().required("Email is required"),pass1:l().required("Pass is required"),pass2:l().required("Pass is required")});return{formData:_,fields:n,schema:e,fetchOpenAi:r=>{console.log("Registration:",r)}}}const D={class:"registration"},F={class:"registration__container"},H={class:"registration__caption"},L={class:"registration__form"},T={class:"registration__footer"},U=A({__name:"RegistrationView",setup(_){const{formData:n,fields:e,schema:f,fetchOpenAi:r}=S(),{validate:v}=b(),x=d("SIGN UP"),R=d("SIGN UP"),w=async h=>{await v()&&r(h)};return(h,s)=>{const E=O("RouterLink");return k(),B(N,{"parent-class-list":"h-full w-full","child-class-list":"h-full w-full"},{content:i(()=>[o("section",D,[t(a(q),{ref:"form","validation-schema":a(f),"initial-values":a(n),onSubmit:s[0]||(s[0]=y=>w(y))},{default:i(()=>[o("section",F,[o("h1",H,g(x.value),1),o("section",L,[t(c,u(p(a(e).email)),null,16),t(c,u(p(a(e).pass1)),null,16),t(c,u(p(a(e).pass2)),null,16),t(P,{variant:"primary",type:"submit"},{default:i(()=>[m(g(R.value),1)]),_:1})]),o("h3",T,[s[2]||(s[2]=m(" If you do not have an account, please ")),t(E,{to:{name:a(z).AUTHORIZATION},class:"registration__footer-action"},{default:i(()=>s[1]||(s[1]=[m("autorize")])),_:1},8,["to"])]),t(I)])]),_:1},8,["validation-schema","initial-values"])])]),_:1})}}}),j=C(U,[["__scopeId","data-v-6a68591c"]]);export{j as default};
