import{a as n}from"./vendor-8c378b12.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const p="/project-caramel/assets/icons-89cc0206.svg",c="https://food-boutique.b.goit.study/api/";n.defaults.baseURL=c;function g(){return n.get("products/discount").then(t=>t.data)}async function m(){return(await n.get(`${c}products/categories`)).data}async function y({keyword:t,category:e,page:r,limit:a,sort:s}={}){const o={keyword:t,category:e,page:r,limit:a};return s&&s.key&&s.value&&(o[s.key]=s.value),(await n.get(`${c}products`,{params:o})).data}async function h(t){return(await n.get(`${c}products/${t}`)).data}async function v(t){return(await n.get(`${c}products/popular`,{params:{limit:t}})).data}async function L(t,e){return await n.post(`${c}orders`,{email:t,products:e}).then(r=>r.data)}const u="added-item";l();function P(t,e){localStorage.setItem(t,JSON.stringify(e))}function d(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function l(){const t=document.querySelector("#countProducts"),e=d(u);t.textContent=`Cart (${e.length})`}function S(t,e){return t.findIndex(({_id:a})=>a===e._id)}function O(t,e,r){t!==-1?(r.classList.remove("visually-hidden"),e.classList.add("visually-hidden")):(e.classList.remove("visually-hidden"),r.classList.add("visually-hidden"))}export{u as S,p as a,S as b,L as c,l as d,h as e,y as f,d as g,m as h,v as i,g as j,O as m,P as s};
//# sourceMappingURL=STORAGE-c1684945.js.map