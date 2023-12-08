import{a as i}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const p="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=p;async function P({keyword:t,category:o,page:s,limit:a,sort:e}={}){const n={keyword:t,category:o,page:s,limit:a};return e&&e.key&&e.value&&(n[e.key]=e.value),(await i.get(`${p}products`,{params:n})).data}async function L(t){return(await i.get(`${p}products/popular`,{params:{limit:t}})).data}const l=document.getElementById("modalProduct"),k=document.getElementById("closeModalProductBtn"),b=document.getElementById("addToCartBtn"),C=document.getElementById("modalProductImage"),$=document.getElementById("modalProductName"),I=document.getElementById("modalProductCategory"),S=document.getElementById("modalProductSize"),w=document.getElementById("modalProductPopularity"),B=document.getElementById("modalProductDescription"),M=document.getElementById("modalProductPrice");function x(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}C.src=t.img,$.textContent=t.name,I.textContent=`Category: ${t.category}`,S.textContent=`Size: ${t.size}`,w.textContent=`Popularity: ${t.popularity}`,B.textContent=t.description,M.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",y)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",y)}k.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function y(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});b.addEventListener("click",function(){d()});const A=document.querySelector(".list-prod"),v={keyword:"",category:"",page:1,limit:9};function _(t){localStorage.setItem("defaultParameters",JSON.stringify(v))}_();function O(t,o){t.innerHTML=o}async function j(){try{const{results:t}=await P(v);console.log("Products:",t);const o=q(t);O(A,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-js-product-id"),n=t.find(c=>c._id.toString()===e);n?x(n):console.error("Selected product not found:",e)})})}catch(t){console.error(t)}}function q(t){return t.map(({_id:o,name:s,img:a,category:e,size:n,price:c,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}j();async function h(t,o){const s=document.getElementById("pagination");if(s.innerHTML="",o>1){for(let e=Math.max(1,t-1);e<=Math.min(o,t+1);e+=1)f(e,e===t);if(o-t>5-2){const e=document.createElement("span");e.textContent=". . .",s.appendChild(e)}for(let e=Math.max(o-5+4);e<=o;e+=1)f(e)}}function f(t,o=!1){const s=document.getElementById("pagination"),a=document.createElement("li"),e=document.createElement("div");e.classList.add("pagination-link");const n=document.createElement("a");n.href="javascript:void(0);",n.textContent=t,o&&e.classList.add("active"),n.addEventListener("click",()=>z(t)),e.appendChild(n),a.appendChild(e),s.appendChild(a)}function z(t){displayCards(t),h(t,60)}const T=1;h(T,60);const D=document.querySelector(".popular-list");function N(t){return t.map(({_id:o,name:s,img:a,category:e,popularity:n,size:c})=>{const r=parseInt(n.toString()[0]);return`  <li class="popular-item">
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
            <img src="${a}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${r}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}L(5).then(t=>{D.insertAdjacentHTML("beforeend",N(t)),[...document.querySelectorAll(".popular-item")].forEach(s=>{const a=s.children[1];a.classList.add("visually-hidden");const e=s.children[0];e.addEventListener("click",n);function n(X){alert("Product add to Order"),e.classList.add("visually-hidden"),a.classList.remove("visually-hidden"),e.removeEventListener("click",n)}const c=s.children[2];c.addEventListener("click",r);function r(){alert("This is product cart"),c.removeEventListener("click",r)}})}).catch(t=>{console.error(t)});i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function G(){return i.get("products/discount").then(t=>t.data)}const E="product-discount";function H(){try{const t=localStorage.getItem(E);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function g(t){localStorage.setItem(E,JSON.stringify(t))}function R(t=[]){return t.map(o=>` <div class="cart-product-discount" data-id="${o._id}">
    <div class="card-product-wrapper">
        <img class="cart-product-img"
            src="${o.img}"
            width="180" height="180" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="cart-product-title">${o.name}</h3>
        <div class="card-product-info-right">
            <p class="cart-product-price">${o.price}</p>

            <button type="button" class="cart-product-btn">
                <svg>
                    <use href="тут посилання на іконку зі спрайту"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`).join("")}let u=[];const m=document.querySelector(".products-discount");console.log(m);async function J(){u=(await G()).slice(0,2);const o=R(u);U(o)}J();function U(t){m.insertAdjacentHTML("beforeend",t)}m.addEventListener("click",V);function V(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,a=H();if(a.find(e=>s===e._id))g(a.filter(e=>s!==e._id));else{const e=u.find(n=>s===n._id);a.push(e),g(a)}}
//# sourceMappingURL=commonHelpers.js.map
