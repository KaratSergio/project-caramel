import{a as i}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const m="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=m;async function L({keyword:t,category:o,page:s,limit:a,sort:e}={}){const n={keyword:t,category:o,page:s,limit:a};return e&&e.key&&e.value&&(n[e.key]=e.value),(await i.get(`${m}products`,{params:n})).data}async function k(t){return(await i.get(`${m}products/popular`,{params:{limit:t}})).data}const l=document.getElementById("modalProduct"),b=document.getElementById("closeModalProductBtn"),I=document.getElementById("addToCartBtn"),C=document.getElementById("modalProductImage"),$=document.getElementById("modalProductName"),S=document.getElementById("modalProductCategory"),w=document.getElementById("modalProductSize"),B=document.getElementById("modalProductPopularity"),M=document.getElementById("modalProductDescription"),x=document.getElementById("modalProductPrice");function A(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}C.src=t.img,$.textContent=t.name,S.textContent=`Category: ${t.category}`,w.textContent=`Size: ${t.size}`,B.textContent=`Popularity: ${t.popularity}`,M.textContent=t.description,x.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",h)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",h)}b.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function h(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});I.addEventListener("click",function(){d()});const _=document.querySelector(".list-prod"),u={keyword:"",category:"",page:1,limit:9};function O(t){localStorage.setItem("defaultParameters",JSON.stringify(u))}O();function j(t,o){t.innerHTML=o}async function g(){try{const{results:t}=await L(u);console.log("Products:",t),u.page+=1;const o=q(t);j(_,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-js-product-id"),n=t.find(c=>c._id.toString()===e);n?A(n):console.error("Selected product not found:",e)})})}catch(t){console.error(t)}}function q(t){return t.map(({_id:o,name:s,img:a,category:e,size:n,price:c,popularity:r})=>`
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
      `).join("")}g();document.getElementById("cards-container");document.getElementById("pagination");async function E(t,o){const s=document.getElementById("pagination");if(s.innerHTML="",o>1){for(let e=Math.max(1,t-1);e<=Math.min(o,t+1);e+=1)y(e,e===t);if(o-t>5-2){const e=document.createElement("span");e.textContent=". . .",s.appendChild(e)}for(let e=Math.max(o-5+4);e<=o;e+=1)y(e)}}function y(t,o=!1){const s=document.getElementById("pagination"),a=document.createElement("li"),e=document.createElement("div");e.classList.add("pagination-link");const n=document.createElement("a");n.href="javascript:void(0);",n.textContent=t,o&&e.classList.add("active"),n.addEventListener("click",()=>z(t)),e.appendChild(n),a.appendChild(e),s.appendChild(a)}function z(t){g();E(t,60)}const T=1;g();E(T,60);const N=document.querySelector(".popular-list");function D(t){return t.map(({_id:o,name:s,img:a,category:e,popularity:n,size:c})=>{const r=parseInt(n.toString()[0]);return`  <li class="popular-item">
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
      </li>`}).join("")}k(5).then(t=>{N.insertAdjacentHTML("beforeend",D(t)),[...document.querySelectorAll(".popular-item")].forEach(s=>{const a=s.children[1];a.classList.add("visually-hidden");const e=s.children[0];e.addEventListener("click",n);function n(X){alert("Product add to Order"),e.classList.add("visually-hidden"),a.classList.remove("visually-hidden"),e.removeEventListener("click",n)}const c=s.children[2];c.addEventListener("click",r);function r(){alert("This is product cart"),c.removeEventListener("click",r)}})}).catch(t=>{console.error(t)});i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function G(){return i.get("products/discount").then(t=>t.data)}const P="product-discount";function H(){try{const t=localStorage.getItem(P);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function v(t){localStorage.setItem(P,JSON.stringify(t))}function R(t=[]){return t.map(o=>` <div class="cart-product-discount" data-id="${o._id}">
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
`).join("")}let p=[];const f=document.querySelector(".products-discount");console.log(f);async function J(){p=(await G()).slice(0,2);const o=R(p);U(o)}J();function U(t){f.insertAdjacentHTML("beforeend",t)}f.addEventListener("click",V);function V(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,a=H();if(a.find(e=>s===e._id))v(a.filter(e=>s!==e._id));else{const e=p.find(n=>s===n._id);a.push(e),v(a)}}
//# sourceMappingURL=commonHelpers.js.map
