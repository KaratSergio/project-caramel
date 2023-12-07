import{a as c}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const b="https://food-boutique.b.goit.study/api/";c.defaults.baseURL=b;async function L(){try{return(await c.get("https://food-boutique.b.goit.study/api/products/")).data.results}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const E=document.querySelector(".list-prod");function $(t,e){t.innerHTML=e}async function C(){try{const t=await L(),e=S(t);$(E,e)}catch(t){console.error("Ошибка при отображении продуктов:",t)}}function S(t){return t.map(({id:e,name:a,img:s,category:r,size:o,price:n,popularity:v})=>`
        <li class="prod-item" js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href=""></use>
            </svg>
            <img class="prod-img" src=${s} alt=${a} loading="lazy">
          </div>
          <h3 class="title-prod">${a}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${r}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${o}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${v}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">${n}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href=""></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}C();async function A(t){return(await(await fetch(`https://food-boutique.b.goit.study/api/products?page=${t}&limit=9`)).json()).results}const p=document.getElementById("cards-container"),d=document.getElementById("pagination");async function m(t){const e=await A(t);p.innerHTML="",e.forEach(a=>{const s=k(a);p.appendChild(s)})}function k(t){const e=document.createElement("div");e.className="card";const a=document.createElement("img");a.src=t.img,a.alt=t.name;const s=document.createElement("p");s.textContent=t.name;const r=document.createElement("p");return r.textContent=`Price: $${t.price}`,e.appendChild(a),e.appendChild(s),e.appendChild(r),e}async function h(t,e){if(d.innerHTML="",e>1){for(let s=Math.max(1,t-1);s<=Math.min(e,t+1);s+=1)l(s,s===t);if(e-t>5-2){const s=document.createElement("span");s.textContent=". . .",d.appendChild(s)}for(let s=Math.max(e-5+4);s<=e;s+=1)l(s)}}function l(t,e=!1){const a=document.createElement("li"),s=document.createElement("div");s.classList.add("pagination-link");const r=document.createElement("a");r.href="javascript:void(0);",r.textContent=t,e&&s.classList.add("active"),r.addEventListener("click",()=>M(t)),s.appendChild(r),a.appendChild(s),d.appendChild(a)}function M(t){m(t),h(t,60)}const g=1;m(g);h(g,60);const x=document.querySelector(".popular-list");async function w(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await c.get(`${t}`)).data}function P(t){return t.map(({_id:e,name:a,img:s,category:r,popularity:o,size:n})=>`  <li class="popular-item">
        <button class="btn-add" type="submit">svg</button>
        <span class="product-added" >OK</span>
        <div class="popular-card" id="${e}">
          <div class="popular-box-img">
            <img src="${s}" alt="${a}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${a}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${r.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${o}</span></p>
            </div>
          </div>
        </div>
      </li>`).join("")}w().then(t=>{x.insertAdjacentHTML("beforeend",P(t));const e={btnAdd:document.querySelector(".btn-add"),productAdded:document.querySelector(".product-added"),popularCard:document.querySelector(".popular-card")};e.btnAdd.addEventListener("click",a),e.popularCard.addEventListener("click",_),e.productAdded.classList.remove("product-added"),e.productAdded.classList.add("is-hidden");function a(){e.btnAdd.classList.add("is-hidden"),e.productAdded.classList.add("product-added"),e.productAdded.classList.remove("is-hidden"),alert("Product add to Order")}}).catch(t=>{console.error(t)});function _(){alert("Thi is product cart")}c.defaults.baseURL="https://food-boutique.b.goit.study/api/";function q(){return c.get("products/discount").then(t=>t.data)}const y="product-discount";function I(){try{const t=localStorage.getItem(y);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function f(t){localStorage.setItem(y,JSON.stringify(t))}function O(t=[]){return t.map(e=>` <div class="cart-product-discount" data-id="${e._id}">
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
`).join("")}let i=[];const u=document.querySelector(".products-discount");console.log(u);async function j(){i=(await q()).slice(0,2);const e=O(i);T(e)}j();function T(t){u.insertAdjacentHTML("beforeend",t)}u.addEventListener("click",B);function B(t){if(!t.target.closest(".cart-product-btn"))return;const a=t.target.closest(".cart-product-discount").dataset.id,s=I();if(s.find(r=>a===r._id))f(s.filter(r=>a!==r._id));else{const r=i.find(o=>a===o._id);s.push(r),f(s)}}
//# sourceMappingURL=commonHelpers.js.map
