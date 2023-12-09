import{a as d,P as x}from"./vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const P="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=P;async function A({keyword:t,category:o,page:r,limit:n,sort:e}={}){const s={keyword:t,category:o,page:r,limit:n};return e&&e.key&&e.value&&(s[e.key]=e.value),(await d.get(`${P}products`,{params:s})).data}async function z(t){return(await d.get(`${P}products/popular`,{params:{limit:t}})).data}document.querySelector(".js-item-count");document.querySelector(".js-empty-basket");document.querySelector(".js-filled-basket");document.querySelector(".js-items-container");document.querySelector(".total-count-text");document.querySelector(".checkout-form");const D=document.getElementById("countProducts");let O=0;document.getElementById("cartLink").addEventListener("click",()=>{D.innerHTML=`cart (${++O})`});const g="Java Script";console.log(g.length-1);console.log(g[g.length]);const $="https://food-boutique.b.goit.study/api/";function _(){return fetch(`${$}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(t,o,r,n,e){const s=new URLSearchParams({keyword:t,category:o,page:r,limit:n});return e&&e.key&&e.value&&(s[e.key]=e.value),fetch(`${$}products`,{params:s}).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const f=document.querySelector(".list-prod"),N=document.querySelector(".filter-form");document.querySelector("input");const p=document.querySelector(".filter-select");document.querySelector(".filter-sort");function w(t){return Array.isArray(t)?t.map(({_id:o,name:r,img:n,category:e,size:s,price:a,popularity:c})=>`
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
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join(""):(console.error("Invalid results:",t),"")}async function H(){try{const t=await _();let o=document.createElement("option");o.innerHTML="Show all",p.appendChild(o),t.forEach(e=>{const s=document.createElement("option");s.value=e,s.text=e,p.appendChild(s)}),p.addEventListener("change",async function(){C({...u(),category:this.value==="Show all"?null:this.value,page:1});const e=u(),s=await m(e);console.log(s),f.innerHTML=w(s)});const r=u(),n=await m(r);f.innerHTML=w(n)}catch(t){console.error("Initialization error:",t)}}N.addEventListener("submit",async function(t){t.preventDefault();const o=this.elements.searchQuery.value.trim().toLowerCase().split(" "),r=this.elements.categories.value;this.elements.searchQuery.value=o||"",C({keyword:o,category:r==="Show all"?null:r,page:1,limit:6});const n=u(),e=await m(n);f.innerHTML=createCardMarkup(e),this.elements.searchQuery.value=""});function C(t){localStorage.setItem("filterData",JSON.stringify(t))}function u(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}H();const l=document.getElementById("modalProduct"),R=document.getElementById("closeModalProductBtn"),J=document.getElementById("addToCartBtn"),U=document.getElementById("modalProductImage"),Q=document.getElementById("modalProductName"),F=document.getElementById("modalProductCategory"),K=document.getElementById("modalProductSize"),G=document.getElementById("modalProductPopularity"),W=document.getElementById("modalProductDescription"),Y=document.getElementById("modalProductPrice");function I(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}U.src=t.img,Q.textContent=t.name,F.textContent=`Category: ${t.category}`,K.textContent=`Size: ${t.size}`,G.textContent=`Popularity: ${t.popularity}`,W.textContent=t.description,Y.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",B)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",B)}R.addEventListener("click",i);window.addEventListener("click",function(t){t.target===l&&i()});document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function B(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});J.addEventListener("click",function(){i()});const V=document.querySelector(".list-prod"),S={keyword:"",category:"",page:1,limit:9};function X(t,o){t.innerHTML=o}async function M(t){try{S.page=t;const{results:o}=await A(S);console.log("Products:",o);const r=Z(o);X(V,r),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),a=o.find(c=>c._id.toString()===s);a?I(a):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function Z(t){return t.map(({_id:o,name:r,img:n,category:e,size:s,price:a,popularity:c})=>`
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
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}M();const tt=9;let et=540;let y=1;const ot=document.getElementById("pagination"),st=new x(ot,{totalItems:et,itemsPerPage:tt,visiblePages:5,centerAlign:!0});st.on("beforeMove",t=>{y=t.page,q(y)});async function q(t){M(t)}q(y);const E=document.querySelector(".popular-list");z(5).then(t=>{E.insertAdjacentHTML("beforeend",rt(t));function o(r){let n=r.target;if(n.closest(".popular-card")){const s=n.closest(".popular-card").getAttribute("data-js-product-id"),a=t.find(c=>c._id.toString()===s);I(a)}else n.closest(".btn-add")&&(n.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}E.addEventListener("click",o)}).catch(t=>{console.error(t)});function rt(t){return t.map(({_id:o,name:r,img:n,category:e,popularity:s,size:a,price:c})=>{const j=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
            <img src="${n}" alt="${r}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${r}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${j}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function nt(){return d.get("products/discount").then(t=>t.data)}const T="product-discount";function at(){try{const t=localStorage.getItem(T);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function L(t){localStorage.setItem(T,JSON.stringify(t))}function ct(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let h=[];const b=document.querySelector(".products-discount");console.log(b);async function it(){h=(await nt()).slice(0,2);const o=ct(h);dt(o)}it();function dt(t){b.insertAdjacentHTML("beforeend",t)}b.addEventListener("click",lt);function lt(t){if(!t.target.closest(".cart-product-btn"))return;const r=t.target.closest(".cart-product-discount").dataset.id,n=at();if(n.find(e=>r===e._id))L(n.filter(e=>r!==e._id));else{const e=h.find(s=>r===s._id);n.push(e),L(n)}}const v=document.getElementById("scrollToTopBtn"),k=360;window.onscroll=function(){document.body.scrollTop>k||document.documentElement.scrollTop>k?v.classList.add("show"):v.classList.remove("show")};v.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=scroll-114142a7.js.map
