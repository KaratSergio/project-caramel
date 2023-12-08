import{a as i,P as E}from"./vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=g;async function k({keyword:t,category:o,page:r,limit:n,sort:e}={}){const s={keyword:t,category:o,page:r,limit:n};return e&&e.key&&e.value&&(s[e.key]=e.value),(await i.get(`${g}products`,{params:s})).data}async function L(t){return(await i.get(`${g}products/popular`,{params:{limit:t}})).data}document.querySelector(".js-item-count");document.querySelector(".js-empty-basket");document.querySelector(".js-filled-basket");document.querySelector(".js-items-container");document.querySelector(".total-count-text");document.querySelector(".checkout-form");const l=document.getElementById("modalProduct"),$=document.getElementById("closeModalProductBtn"),S=document.getElementById("addToCartBtn"),w=document.getElementById("modalProductImage"),C=document.getElementById("modalProductName"),I=document.getElementById("modalProductCategory"),B=document.getElementById("modalProductSize"),x=document.getElementById("modalProductPopularity"),M=document.getElementById("modalProductDescription"),q=document.getElementById("modalProductPrice");function j(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}w.src=t.img,C.textContent=t.name,I.textContent=`Category: ${t.category}`,B.textContent=`Size: ${t.size}`,x.textContent=`Popularity: ${t.popularity}`,M.textContent=t.description,q.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",v)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",v)}$.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function v(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});S.addEventListener("click",function(){d()});const A=document.querySelector(".list-prod"),f={keyword:"",category:"",page:1,limit:9};function O(t,o){t.innerHTML=o}async function h(t){try{f.page=t;const{results:o}=await k(f);console.log("Products:",o);const r=z(o);O(A,r),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),c=o.find(a=>a._id.toString()===s);c?j(c):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function z(t){return t.map(({_id:o,name:r,img:n,category:e,size:s,price:c,popularity:a})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${n} alt=${r} loading="lazy">
          </div>
          <h3 class="title-prod">${r}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${s}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}h();const _=9;let N=540;let u=1;const T=document.getElementById("pagination"),D=new E(T,{totalItems:N,itemsPerPage:_,visiblePages:5,centerAlign:!0});D.on("beforeMove",t=>{u=t.page,P(u)});async function P(t){h(t)}P(u);const R=document.querySelector(".popular-list");function H(t){return t.map(({_id:o,name:r,img:n,category:e,popularity:s,size:c})=>{const a=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
        <div class="popular-card" id="${o}">
          <div class="popular-box-img">
            <img src="${n}" alt="${r}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${r}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${a}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}L(5).then(t=>{R.insertAdjacentHTML("beforeend",H(t)),[...document.querySelectorAll(".popular-item")].forEach(r=>{const n=r.children[1];n.classList.add("visually-hidden");const e=r.children[0];e.addEventListener("click",s);function s(Q){alert("Product add to Order"),e.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),e.removeEventListener("click",s)}const c=r.children[2];c.addEventListener("click",a);function a(){alert("This is product cart"),c.removeEventListener("click",a)}})}).catch(t=>{console.error(t)});i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function U(){return i.get("products/discount").then(t=>t.data)}const b="product-discount";function J(){try{const t=localStorage.getItem(b);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function y(t){localStorage.setItem(b,JSON.stringify(t))}function K(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="180" height="180" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${o.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${o.price}</p>

            <button type="button" class="card-product-btn">
                <svg>
                    <use href="тут посилання на іконку зі спрайту"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`).join("")}let p=[];const m=document.querySelector(".products-discount");console.log(m);async function F(){p=(await U()).slice(0,2);const o=K(p);G(o)}F();function G(t){m.insertAdjacentHTML("beforeend",t)}m.addEventListener("click",Y);function Y(t){if(!t.target.closest(".cart-product-btn"))return;const r=t.target.closest(".cart-product-discount").dataset.id,n=J();if(n.find(e=>r===e._id))y(n.filter(e=>r!==e._id));else{const e=p.find(s=>r===s._id);n.push(e),y(n)}}
//# sourceMappingURL=discount-ff9ae098.js.map
