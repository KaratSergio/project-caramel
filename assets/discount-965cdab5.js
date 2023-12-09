import{a as i,P as L}from"./vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=m;async function S({keyword:t,category:o,page:r,limit:c,sort:e}={}){const s={keyword:t,category:o,page:r,limit:c};return e&&e.key&&e.value&&(s[e.key]=e.value),(await i.get(`${m}products`,{params:s})).data}async function C(t){return(await i.get(`${m}products/popular`,{params:{limit:t}})).data}document.querySelector(".js-item-count");document.querySelector(".js-empty-basket");document.querySelector(".js-filled-basket");document.querySelector(".js-items-container");document.querySelector(".total-count-text");document.querySelector(".checkout-form");const I=document.getElementById("countProducts");let B=0;document.getElementById("cartLink").addEventListener("click",()=>{I.innerHTML=`cart (${++B})`});const u="Java Script";console.log(u.length-1);console.log(u[u.length]);const l=document.getElementById("modalProduct"),M=document.getElementById("closeModalProductBtn"),x=document.getElementById("addToCartBtn"),j=document.getElementById("modalProductImage"),q=document.getElementById("modalProductName"),A=document.getElementById("modalProductCategory"),_=document.getElementById("modalProductSize"),z=document.getElementById("modalProductPopularity"),O=document.getElementById("modalProductDescription"),N=document.getElementById("modalProductPrice");function P(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}j.src=t.img,q.textContent=t.name,A.textContent=`Category: ${t.category}`,_.textContent=`Size: ${t.size}`,z.textContent=`Popularity: ${t.popularity}`,O.textContent=t.description,N.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",b)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",b)}M.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function b(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});x.addEventListener("click",function(){d()});const T=document.querySelector(".list-prod"),y={keyword:"",category:"",page:1,limit:9};function D(t,o){t.innerHTML=o}async function E(t){try{y.page=t;const{results:o}=await S(y);console.log("Products:",o);const r=H(o);D(T,r),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),n=o.find(a=>a._id.toString()===s);n?P(n):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function H(t){return t.map(({_id:o,name:r,img:c,category:e,size:s,price:n,popularity:a})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${r} loading="lazy">
          </div>
          <h3 class="title-prod">${r}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${s}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${n}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}E();const R=9;let J=540;let p=1;const U=document.getElementById("pagination"),K=new L(U,{totalItems:J,itemsPerPage:R,visiblePages:5,centerAlign:!0});K.on("beforeMove",t=>{p=t.page,k(p)});async function k(t){E(t)}k(p);const v=document.querySelector(".popular-list");C(5).then(t=>{v.insertAdjacentHTML("beforeend",F(t));function o(r){let c=r.target;if(c.closest(".popular-card")){const s=c.closest(".popular-card").getAttribute("data-js-product-id"),n=t.find(a=>a._id.toString()===s);P(n)}else c.closest(".btn-add")&&(c.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}v.addEventListener("click",o)}).catch(t=>{console.error(t)});function F(t){return t.map(({_id:o,name:r,img:c,category:e,popularity:s,size:n,price:a})=>{const w=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
            <img src="${c}" alt="${r}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${r}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${w}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function G(){return i.get("products/discount").then(t=>t.data)}const $="product-discount";function W(){try{const t=localStorage.getItem($);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function h(t){localStorage.setItem($,JSON.stringify(t))}function Y(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let g=[];const f=document.querySelector(".products-discount");console.log(f);async function Q(){g=(await G()).slice(0,2);const o=Y(g);V(o)}Q();function V(t){f.insertAdjacentHTML("beforeend",t)}f.addEventListener("click",X);function X(t){if(!t.target.closest(".cart-product-btn"))return;const r=t.target.closest(".cart-product-discount").dataset.id,c=W();if(c.find(e=>r===e._id))h(c.filter(e=>r!==e._id));else{const e=g.find(s=>r===s._id);c.push(e),h(c)}}
//# sourceMappingURL=discount-965cdab5.js.map
