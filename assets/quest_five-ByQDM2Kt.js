import{d as S,r as h,c as m,b as e,t as p,f as t,g as y,w as q,e as w,v as b,u as x,o as v}from"./index-N5t6RM_O.js";import{q as c,c as s}from"./index-NEGvRgOQ.js";const E={class:"home-container"},k=e("div",{class:"top-quest-five-container"},null,-1),U={class:"middle-quest-head-container"},A=e("div",{class:"middle-quest-title"},null,-1),C={class:"middle-quest-five-container-content"},B={class:"middle-quest-two-span"},I={key:0},V={class:"middle-quest-container-form"},D=["onchange"],L=e("div",{class:"middle-quest-button"},[e("button",{class:"button-submit",type:"submit"})],-1),l="mylovezai",$=S({__name:"quest_five",setup(M){const u=x(),a=h([""]),r=h([0]);let d=localStorage.getItem("state");d?d!=="quest_five"&&u.push(`/${d}`):u.push("/home");function g(o){_(o,!1)}function _(o,n=!0){const i=c.winner.findIndex(f=>s.AES.decrypt(f,l).toString(s.enc.Utf8).toLowerCase()===a.value[o].trim().toLowerCase());n&&(a.value[o]=""),i>-1&&(r.value[i]=1),r.value.every(f=>f===1)&&(localStorage.setItem("state","winner"),u.push("/winner"))}return(o,n)=>(v(),m("div",E,[k,e("div",U,[A,e("div",C,[e("div",B,[e("span",null,"1. "+p(t(s.AES).decrypt(t(c).bestOf2[0],l).toString(t(s.enc).Utf8))+" + "+p(t(s.AES).decrypt(t(c).bestOf2[1],l).toString(t(s.enc).Utf8))+" =",1),r.value[0]?(v(),m("span",I,p(t(s.AES).decrypt(t(c).winner[0],l).toString(t(s.enc).Utf8)),1)):y("",!0)]),r.value[0]?y("",!0):(v(),m("form",{key:0,onSubmit:n[1]||(n[1]=q(i=>_(0),["prevent"]))},[e("div",V,[w(e("input",{class:"input-name","onUpdate:modelValue":n[0]||(n[0]=i=>a.value[0]=i),type:"text",onchange:g(0)},null,8,D),[[b,a.value[0]]]),L])],32))])])]))}});export{$ as default};
