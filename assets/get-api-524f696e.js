import{a as n}from"./vendor-8c378b12.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="/project-caramel/assets/icons-89cc0206.svg",i="https://food-boutique.b.goit.study/api/";n.defaults.baseURL=i;function l(){return n.get("products/discount").then(r=>r.data)}async function f({keyword:r,category:o,page:s,limit:a,sort:e}={}){const t={keyword:r,category:o,page:s,limit:a};return e&&e.key&&e.value&&(t[e.key]=e.value),(await n.get(`${i}products`,{params:t})).data}async function p(r){return(await n.get(`${i}products/popular`,{params:{limit:r}})).data}async function m(r,o){return await n.post(`${i}orders`,{email:r,products:o}).then(s=>s.data)}export{p as a,l as b,m as c,f as g,d as s};
//# sourceMappingURL=get-api-524f696e.js.map
