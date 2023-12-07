import{a as n}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const g="https://food-boutique.b.goit.study/api/";n.defaults.baseURL=g;async function v(){try{return(await n.get("https://food-boutique.b.goit.study/api/products/")).data.results}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const y=document.querySelector(".list-prod");function m(t,e){t.innerHTML=e}async function b(){try{const t=await v(),e=L(t);m(y,e)}catch(t){console.error("Ошибка при отображении продуктов:",t)}}function L(t){return t.map(({id:e,name:o,img:r,category:s,size:a,price:d,popularity:c})=>`
        <li class="prod-item" js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href=""></use>
            </svg>
            <img class="prod-img" src=${r} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${s}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">${d}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href=""></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}b();async function f(t,e){if(paginationContainer.innerHTML="",e>1){for(let r=Math.max(1,t-1);r<=Math.min(e,t+1);r+=1)p(r,r===t);if(e-t>5-2){const r=document.createElement("span");r.textContent=". . .",paginationContainer.appendChild(r)}for(let r=Math.max(e-5+4);r<=e;r+=1)p(r)}}function p(t,e=!1){const o=document.createElement("li"),r=document.createElement("div");r.classList.add("pagination-link");const s=document.createElement("a");s.href="javascript:void(0);",s.textContent=t,e&&r.classList.add("active"),s.addEventListener("click",()=>$(t)),r.appendChild(s),o.appendChild(r),paginationContainer.appendChild(o)}function $(t){displayCards(t),f(t,60)}const S=1;f(S,60);const E=document.querySelector(".popular-list");async function A(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await n.get(`${t}`)).data}function k(t){return t.map(({_id:e,name:o,img:r,category:s,popularity:a,size:d})=>{const c=parseInt(a.toString()[0]);return`  <li class="popular-item">
        <button class="btn-add" type="submit">svg</button>
        <span class="product-added" >OK</span>
        <div class="popular-card" id="${e}">
          <div class="popular-box-img">
            <img src="${r}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${s.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${d}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${c}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}A().then(t=>{E.insertAdjacentHTML("beforeend",k(t));const e={btnAdd:document.querySelector(".btn-add"),productAdded:document.querySelector(".product-added"),popularCard:document.querySelector(".popular-card")};e.btnAdd.addEventListener("click",o),e.popularCard.addEventListener("click",C),e.productAdded.classList.remove("product-added"),e.productAdded.classList.add("is-hidden");function o(){e.btnAdd.classList.add("is-hidden"),e.productAdded.classList.add("product-added"),e.productAdded.classList.remove("is-hidden"),alert("Product add to Order")}}).catch(t=>{console.error(t)});function C(){alert("Thi is product cart")}n.defaults.baseURL="https://food-boutique.b.goit.study/api/";function M(){return n.get("products/discount").then(t=>t.data)}const h="product-discount";function _(){try{const t=localStorage.getItem(h);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function l(t){localStorage.setItem(h,JSON.stringify(t))}function x(t=[]){return t.map(e=>` <div class="cart-product-discount" data-id="${e._id}">
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
`).join("")}let i=[];const u=document.querySelector(".products-discount");console.log(u);async function q(){i=(await M()).slice(0,2);const e=x(i);P(e)}q();function P(t){u.insertAdjacentHTML("beforeend",t)}u.addEventListener("click",w);function w(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,r=_();if(r.find(s=>o===s._id))l(r.filter(s=>o!==s._id));else{const s=i.find(a=>o===a._id);r.push(s),l(r)}}
//# sourceMappingURL=commonHelpers.js.map
