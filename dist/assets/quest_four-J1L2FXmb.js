import{d as U,r as h,c,b as e,t as d,f as t,g as f,w as y,e as q,v as E,u as x,o as m}from"./index-A4DQTXc_.js";import{q as u,c as s}from"./index-UuAh6o02.js";const k={class:"home-container"},w=e("div",{class:"top-quest-four-container"},null,-1),A={class:"middle-quest-head-container"},O=e("div",{class:"middle-quest-title"},null,-1),I={class:"middle-quest-four-container-content"},C={class:"middle-quest-two-span"},V={key:0},B={class:"middle-quest-container-form"},N=["onchange"],$=e("div",{class:"middle-quest-button"},[e("button",{class:"button-submit",type:"submit"})],-1),D={class:"middle-quest-two-span"},L={key:0},M={class:"middle-quest-container-form"},Q=["onchange"],z=e("div",{class:"middle-quest-button"},[e("button",{class:"button-submit",type:"submit"})],-1),l="mylovezai",j=U({__name:"quest_four",setup(J){const p=x(),r=h(["",""]),n=h([0,0]);let v=localStorage.getItem("state");v?v!=="quest_four"&&p.push(`/${v}`):p.push("/home");let b=localStorage.getItem("q4");if(b){const i=b.split(",").map(Number);n.value=[...i]}function g(i){_(i,!1)}function _(i,o=!0){const a=u.bestOf2.findIndex(S=>s.AES.decrypt(S,l).toString(s.enc.Utf8).toLowerCase()===r.value[i].trim().toLowerCase());o&&(r.value[i]=""),a>-1&&(n.value[a]=1,localStorage.setItem("q4",n.value.toString())),n.value.every(S=>S===1)&&(localStorage.setItem("state","quest_five"),p.push("/quest_five"))}return(i,o)=>(m(),c("div",k,[w,e("div",A,[O,e("div",I,[e("div",C,[e("span",null,"1. "+d(t(s.AES).decrypt(t(u).bestOf4[0],l).toString(t(s.enc).Utf8))+" + "+d(t(s.AES).decrypt(t(u).bestOf4[1],l).toString(t(s.enc).Utf8))+" =",1),n.value[0]?(m(),c("span",V,d(t(s.AES).decrypt(t(u).bestOf2[0],l).toString(t(s.enc).Utf8)),1)):f("",!0)]),n.value[0]?f("",!0):(m(),c("form",{key:0,onSubmit:o[1]||(o[1]=y(a=>_(0),["prevent"]))},[e("div",B,[q(e("input",{class:"input-name","onUpdate:modelValue":o[0]||(o[0]=a=>r.value[0]=a),type:"text",onchange:g(0)},null,8,N),[[E,r.value[0]]]),$])],32)),e("div",D,[e("span",null,"2. "+d(t(s.AES).decrypt(t(u).bestOf4[2],l).toString(t(s.enc).Utf8))+" + "+d(t(s.AES).decrypt(t(u).bestOf4[3],l).toString(t(s.enc).Utf8))+" =",1),n.value[1]?(m(),c("span",L,d(t(s.AES).decrypt(t(u).bestOf2[1],l).toString(t(s.enc).Utf8)),1)):f("",!0)]),n.value[1]?f("",!0):(m(),c("form",{key:1,onSubmit:o[3]||(o[3]=y(a=>_(1),["prevent"]))},[e("div",M,[q(e("input",{class:"input-name","onUpdate:modelValue":o[2]||(o[2]=a=>r.value[1]=a),type:"text",onchange:g(1)},null,8,Q),[[E,r.value[1]]]),z])],32))])])]))}});export{j as default};
