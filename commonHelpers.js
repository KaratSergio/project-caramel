import{a as i,P as E}from"./assets/vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=m;async function L({keyword:t,category:o,page:r,limit:n,sort:e}={}){const s={keyword:t,category:o,page:r,limit:n};return e&&e.key&&e.value&&(s[e.key]=e.value),(await i.get(`${m}products`,{params:s})).data}async function $(t){return(await i.get(`${m}products/popular`,{params:{limit:t}})).data}const l=document.getElementById("modalProduct"),k=document.getElementById("closeModalProductBtn"),w=document.getElementById("addToCartBtn"),I=document.getElementById("modalProductImage"),S=document.getElementById("modalProductName"),C=document.getElementById("modalProductCategory"),B=document.getElementById("modalProductSize"),M=document.getElementById("modalProductPopularity"),x=document.getElementById("modalProductDescription"),A=document.getElementById("modalProductPrice");function O(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}I.src=t.img,S.textContent=t.name,C.textContent=`Category: ${t.category}`,B.textContent=`Size: ${t.size}`,M.textContent=`Popularity: ${t.popularity}`,x.textContent=t.description,A.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",v)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",v)}k.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function v(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});w.addEventListener("click",function(){d()});const q=document.querySelector(".list-prod"),u={keyword:"",category:"",page:1,limit:9};function z(t){localStorage.setItem("defaultParameters",JSON.stringify(u))}z();function N(t,o){t.innerHTML=o}async function h(t){try{u.page=t;const{results:o}=await L(u);console.log("Products:",o);const r=_(o);N(q,r),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),a=o.find(c=>c._id.toString()===s);a?O(a):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function _(t){return t.map(({_id:o,name:r,img:n,category:e,size:s,price:a,popularity:c})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
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
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}h();const j=9;let T=540;let p=1;const D=document.getElementById("pagination"),R=new E(D,{totalItems:T,itemsPerPage:j,visiblePages:5,centerAlign:!0});R.on("beforeMove",t=>{p=t.page,P(p)});async function P(t){h(t)}P(p);const H=document.querySelector(".popular-list");function J(t){return t.map(({_id:o,name:r,img:n,category:e,popularity:s,size:a})=>{const c=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${c}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}$(5).then(t=>{H.insertAdjacentHTML("beforeend",J(t)),[...document.querySelectorAll(".popular-item")].forEach(r=>{const n=r.children[1];n.classList.add("visually-hidden");const e=r.children[0];e.addEventListener("click",s);function s(V){alert("Product add to Order"),e.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),e.removeEventListener("click",s)}const a=r.children[2];a.addEventListener("click",c);function c(){alert("This is product cart"),a.removeEventListener("click",c)}})}).catch(t=>{console.error(t)});i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function U(){return i.get("products/discount").then(t=>t.data)}const b="product-discount";function K(){try{const t=localStorage.getItem(b);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function y(t){localStorage.setItem(b,JSON.stringify(t))}function F(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let g=[];const f=document.querySelector(".products-discount");console.log(f);async function G(){g=(await U()).slice(0,2);const o=F(g);Y(o)}G();function Y(t){f.insertAdjacentHTML("beforeend",t)}f.addEventListener("click",Q);function Q(t){if(!t.target.closest(".cart-product-btn"))return;const r=t.target.closest(".cart-product-discount").dataset.id,n=K();if(n.find(e=>r===e._id))y(n.filter(e=>r!==e._id));else{const e=g.find(s=>r===s._id);n.push(e),y(n)}}
//# sourceMappingURL=commonHelpers.js.map
