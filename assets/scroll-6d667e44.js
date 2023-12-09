import{a as i,P as I}from"./vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const f="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=f;async function B({keyword:t,category:o,page:n,limit:c,sort:e}={}){const s={keyword:t,category:o,page:n,limit:c};return e&&e.key&&e.value&&(s[e.key]=e.value),(await i.get(`${f}products`,{params:s})).data}async function C(t){return(await i.get(`${f}products/popular`,{params:{limit:t}})).data}document.querySelector(".js-item-count");document.querySelector(".js-empty-basket");document.querySelector(".js-filled-basket");document.querySelector(".js-items-container");document.querySelector(".total-count-text");document.querySelector(".checkout-form");const M=document.getElementById("countProducts");let x=0;document.getElementById("cartLink").addEventListener("click",()=>{M.innerHTML=`cart (${++x})`});const u="Java Script";console.log(u.length-1);console.log(u[u.length]);const l=document.getElementById("modalProduct"),T=document.getElementById("closeModalProductBtn"),j=document.getElementById("addToCartBtn"),q=document.getElementById("modalProductImage"),A=document.getElementById("modalProductName"),O=document.getElementById("modalProductCategory"),_=document.getElementById("modalProductSize"),z=document.getElementById("modalProductPopularity"),N=document.getElementById("modalProductDescription"),D=document.getElementById("modalProductPrice");function E(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}q.src=t.img,A.textContent=t.name,O.textContent=`Category: ${t.category}`,_.textContent=`Size: ${t.size}`,z.textContent=`Popularity: ${t.popularity}`,N.textContent=t.description,D.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",w)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",w)}T.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function w(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});j.addEventListener("click",function(){d()});const H=document.querySelector(".list-prod"),v={keyword:"",category:"",page:1,limit:9};function R(t,o){t.innerHTML=o}async function k(t){try{v.page=t;const{results:o}=await B(v);console.log("Products:",o);const n=J(o);R(H,n),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),r=o.find(a=>a._id.toString()===s);r?E(r):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function J(t){return t.map(({_id:o,name:n,img:c,category:e,size:s,price:r,popularity:a})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${n} loading="lazy">
          </div>
          <h3 class="title-prod">${n}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${s}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${r}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}k();const U=9;let K=540;let p=1;const F=document.getElementById("pagination"),G=new I(F,{totalItems:K,itemsPerPage:U,visiblePages:5,centerAlign:!0});G.on("beforeMove",t=>{p=t.page,L(p)});async function L(t){k(t)}L(p);const h=document.querySelector(".popular-list");C(5).then(t=>{h.insertAdjacentHTML("beforeend",W(t));function o(n){let c=n.target;if(c.closest(".popular-card")){const s=c.closest(".popular-card").getAttribute("data-js-product-id"),r=t.find(a=>a._id.toString()===s);E(r)}else c.closest(".btn-add")&&(c.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}h.addEventListener("click",o)}).catch(t=>{console.error(t)});function W(t){return t.map(({_id:o,name:n,img:c,category:e,popularity:s,size:r,price:a})=>{const S=parseInt(s.toString()[0]);return`  <li class="popular-item">
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
      </button>
      <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="./images/icons.svg#check"></use>
        </svg>
      </span>
        <div class="popular-card" data-js-product-id=${o}>
          <div class="popular-box-img">
            <img src="${c}" alt="${n}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${n}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${S}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function Y(){return i.get("products/discount").then(t=>t.data)}const $="product-discount";function Q(){try{const t=localStorage.getItem($);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function P(t){localStorage.setItem($,JSON.stringify(t))}function V(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${o.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${o.price}</p>

            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg" width="18" height="18">
            <use href="./images/icons.svg#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="./images/icons.svg#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`).join("")}let g=[];const y=document.querySelector(".products-discount");console.log(y);async function X(){g=(await Y()).slice(0,2);const o=V(g);Z(o)}X();function Z(t){y.insertAdjacentHTML("beforeend",t)}y.addEventListener("click",tt);function tt(t){if(!t.target.closest(".cart-product-btn"))return;const n=t.target.closest(".cart-product-discount").dataset.id,c=Q();if(c.find(e=>n===e._id))P(c.filter(e=>n!==e._id));else{const e=g.find(s=>n===s._id);c.push(e),P(c)}}const m=document.getElementById("scrollToTopBtn"),b=360;window.onscroll=function(){document.body.scrollTop>b||document.documentElement.scrollTop>b?m.classList.add("show"):m.classList.remove("show")};m.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=scroll-6d667e44.js.map
