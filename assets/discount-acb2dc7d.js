import{a as i,P as S}from"./vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const g="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=g;async function w({keyword:t,category:o,page:c,limit:r,sort:e}={}){const s={keyword:t,category:o,page:c,limit:r};return e&&e.key&&e.value&&(s[e.key]=e.value),(await i.get(`${g}products`,{params:s})).data}async function L(t){return(await i.get(`${g}products/popular`,{params:{limit:t}})).data}document.querySelector(".js-item-count");document.querySelector(".js-empty-basket");document.querySelector(".js-filled-basket");document.querySelector(".js-items-container");document.querySelector(".total-count-text");document.querySelector(".checkout-form");const l=document.getElementById("modalProduct"),C=document.getElementById("closeModalProductBtn"),I=document.getElementById("addToCartBtn"),B=document.getElementById("modalProductImage"),x=document.getElementById("modalProductName"),M=document.getElementById("modalProductCategory"),j=document.getElementById("modalProductSize"),q=document.getElementById("modalProductPopularity"),A=document.getElementById("modalProductDescription"),_=document.getElementById("modalProductPrice");function h(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}B.src=t.img,x.textContent=t.name,M.textContent=`Category: ${t.category}`,j.textContent=`Size: ${t.size}`,q.textContent=`Popularity: ${t.popularity}`,A.textContent=t.description,_.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",P)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",P)}C.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function P(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});I.addEventListener("click",function(){d()});const z=document.querySelector(".list-prod"),f={keyword:"",category:"",page:1,limit:9};function O(t,o){t.innerHTML=o}async function b(t){try{f.page=t;const{results:o}=await w(f);console.log("Products:",o);const c=N(o);O(z,c),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),n=o.find(a=>a._id.toString()===s);n?h(n):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function N(t){return t.map(({_id:o,name:c,img:r,category:e,size:s,price:n,popularity:a})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${r} alt=${c} loading="lazy">
          </div>
          <h3 class="title-prod">${c}</h3>
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
      `).join("")}b();const T=9;let D=540;let u=1;const R=document.getElementById("pagination"),H=new S(R,{totalItems:D,itemsPerPage:T,visiblePages:5,centerAlign:!0});H.on("beforeMove",t=>{u=t.page,E(u)});async function E(t){b(t)}E(u);const y=document.querySelector(".popular-list");L(5).then(t=>{y.insertAdjacentHTML("beforeend",U(t));function o(c){let r=c.target;if(r.closest(".popular-card")){const s=r.closest(".popular-card").getAttribute("data-js-product-id"),n=t.find(a=>a._id.toString()===s);h(n)}else r.closest(".btn-add")&&(r.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}y.addEventListener("click",o)}).catch(t=>{console.error(t)});function U(t){return t.map(({_id:o,name:c,img:r,category:e,popularity:s,size:n,price:a})=>{const $=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
            <img src="${r}" alt="${c}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${c}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${$}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function J(){return i.get("products/discount").then(t=>t.data)}const k="product-discount";function K(){try{const t=localStorage.getItem(k);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function v(t){localStorage.setItem(k,JSON.stringify(t))}function F(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let p=[];const m=document.querySelector(".products-discount");console.log(m);async function G(){p=(await J()).slice(0,2);const o=F(p);Y(o)}G();function Y(t){m.insertAdjacentHTML("beforeend",t)}m.addEventListener("click",Q);function Q(t){if(!t.target.closest(".cart-product-btn"))return;const c=t.target.closest(".cart-product-discount").dataset.id,r=K();if(r.find(e=>c===e._id))v(r.filter(e=>c!==e._id));else{const e=p.find(s=>c===s._id);r.push(e),v(r)}}
//# sourceMappingURL=discount-acb2dc7d.js.map
