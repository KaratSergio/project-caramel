import{a as d}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const f="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=f;async function m({keyword:t,category:e,page:o,limit:a,sort:s}={}){const r={keyword:t,category:e,page:o,limit:a};return s&&s.key&&s.value&&(r[s.key]=s.value),(await d.get(`${f}products`,{params:r})).data}const v=document.querySelector(".list-prod"),y={keyword:"",category:"",page:1,limit:9};function b(t,e){t.innerHTML=e}async function L(){try{const{results:t}=await m(y),e=$(t);b(v,e)}catch(t){console.error("Ошибка при отображении продуктов:",t)}}function $(t){return t.map(({id:e,name:o,img:a,category:s,size:r,price:n,popularity:c})=>`
        <li class="prod-item" js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${s}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod"> &#36;${n}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}L();async function g(t,e){if(paginationContainer.innerHTML="",e>1){for(let a=Math.max(1,t-1);a<=Math.min(e,t+1);a+=1)u(a,a===t);if(e-t>5-2){const a=document.createElement("span");a.textContent=". . .",paginationContainer.appendChild(a)}for(let a=Math.max(e-5+4);a<=e;a+=1)u(a)}}function u(t,e=!1){const o=document.createElement("li"),a=document.createElement("div");a.classList.add("pagination-link");const s=document.createElement("a");s.href="javascript:void(0);",s.textContent=t,e&&a.classList.add("active"),s.addEventListener("click",()=>S(t)),a.appendChild(s),o.appendChild(a),paginationContainer.appendChild(o)}function S(t){displayCards(t),g(t,60)}const k=1;g(k,60);const E=document.querySelector(".popular-list");async function A(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await d.get(`${t}`)).data}function C(t){return t.map(({_id:e,name:o,img:a,category:s,popularity:r,size:n})=>{const c=parseInt(r.toString()[0]);return`  <li class="popular-item">
        <button class="btn-add" type="submit">svg</button>
        <span class="product-added" >OK</span>
        <div class="popular-card" id="${e}">
          <div class="popular-box-img">
            <img src="${a}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${s.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${c}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}A().then(t=>{E.insertAdjacentHTML("beforeend",C(t));const e={btnAdd:document.querySelector(".btn-add"),productAdded:document.querySelector(".product-added"),popularCard:document.querySelector(".popular-card")};e.btnAdd.addEventListener("click",o),e.popularCard.addEventListener("click",M),e.productAdded.classList.remove("product-added"),e.productAdded.classList.add("is-hidden");function o(){e.btnAdd.classList.add("is-hidden"),e.productAdded.classList.add("product-added"),e.productAdded.classList.remove("is-hidden"),alert("Product add to Order")}}).catch(t=>{console.error(t)});function M(){alert("Thi is product cart")}d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function P(){return d.get("products/discount").then(t=>t.data)}const h="product-discount";function _(){try{const t=localStorage.getItem(h);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function l(t){localStorage.setItem(h,JSON.stringify(t))}function x(t=[]){return t.map(e=>` <div class="cart-product-discount" data-id="${e._id}">
    <div class="card-product-wrapper">
        <img class="cart-product-img"
            src="${e.img}"
            width="180" height="180" alt="${e.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="cart-product-title">${e.name}</h3>
        <div class="card-product-info-right">
            <p class="cart-product-price">${e.price}</p>

            <button type="button" class="cart-product-btn">
                <svg>
                    <use href="тут посилання на іконку зі спрайту"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`).join("")}let i=[];const p=document.querySelector(".products-discount");console.log(p);async function w(){i=(await P()).slice(0,2);const e=x(i);q(e)}w();function q(t){p.insertAdjacentHTML("beforeend",t)}p.addEventListener("click",I);function I(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,a=_();if(a.find(s=>o===s._id))l(a.filter(s=>o!==s._id));else{const s=i.find(r=>o===r._id);a.push(s),l(a)}}
//# sourceMappingURL=commonHelpers.js.map
