import{a as c}from"./assets/vendor-a61d8330.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="https://food-boutique.b.goit.study/api/";c.defaults.baseURL=l;async function v({keyword:t,category:a,page:n,limit:s,sort:e}={}){const r={keyword:t,category:a,page:n,limit:s};return e&&e.key&&e.value&&(r[e.key]=e.value),(await c.get(`${l}products`,{params:r})).data}async function m(t){return(await c.get(`${l}products/popular`,{params:{limit:t}})).data}const y=document.querySelector(".list-prod"),L={keyword:"",category:"",page:1,limit:9};function b(t,a){t.innerHTML=a}async function k(){try{const{results:t}=await v(L),a=E(t);b(y,a)}catch(t){console.error("Ошибка при отображении продуктов:",t)}}function E(t){return t.map(({id:a,name:n,img:s,category:e,size:r,price:i,popularity:o})=>`
        <li class="prod-item" js-product-id=${a}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${n} loading="lazy">
          </div>
          <h3 class="title-prod">${n}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${o}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod"> &#36;${i}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}k();async function g(t,a){if(paginationContainer.innerHTML="",a>1){for(let s=Math.max(1,t-1);s<=Math.min(a,t+1);s+=1)u(s,s===t);if(a-t>5-2){const s=document.createElement("span");s.textContent=". . .",paginationContainer.appendChild(s)}for(let s=Math.max(a-5+4);s<=a;s+=1)u(s)}}function u(t,a=!1){const n=document.createElement("li"),s=document.createElement("div");s.classList.add("pagination-link");const e=document.createElement("a");e.href="javascript:void(0);",e.textContent=t,a&&s.classList.add("active"),e.addEventListener("click",()=>$(t)),s.appendChild(e),n.appendChild(s),paginationContainer.appendChild(n)}function $(t){displayCards(t),g(t,60)}const S=1;g(S,60);const C=document.querySelector(".popular-list");function M(t){return t.map(({_id:a,name:n,img:s,category:e,popularity:r,size:i})=>{const o=parseInt(r.toString()[0]);return`  <li class="popular-item">
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
        <div class="popular-card" id="${a}">
          <div class="popular-box-img">
            <img src="${s}" alt="${n}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${n}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${i}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${o}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}m(5).then(t=>{C.insertAdjacentHTML("beforeend",M(t)),[...document.querySelectorAll(".popular-item")].forEach(n=>{const s=n.children[1];s.classList.add("visually-hidden");const e=n.children[0];e.addEventListener("click",r);function r(O){alert("Product add to Order"),e.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),e.removeEventListener("click",r)}const i=n.children[2];i.addEventListener("click",o);function o(){alert("This is product cart"),i.removeEventListener("click",o)}})}).catch(t=>{console.error(t)});c.defaults.baseURL="https://food-boutique.b.goit.study/api/";function A(){return c.get("products/discount").then(t=>t.data)}const h="product-discount";function w(){try{const t=localStorage.getItem(h);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function f(t){localStorage.setItem(h,JSON.stringify(t))}function P(t=[]){return t.map(a=>` <div class="cart-product-discount" data-id="${a._id}">
    <div class="card-product-wrapper">
        <img class="cart-product-img"
            src="${a.img}"
            width="180" height="180" alt="${a.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="cart-product-title">${a.name}</h3>
        <div class="card-product-info-right">
            <p class="cart-product-price">${a.price}</p>

            <button type="button" class="cart-product-btn">
                <svg>
                    <use href="тут посилання на іконку зі спрайту"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`).join("")}let d=[];const p=document.querySelector(".products-discount");console.log(p);async function _(){d=(await A()).slice(0,2);const a=P(d);x(a)}_();function x(t){p.insertAdjacentHTML("beforeend",t)}p.addEventListener("click",I);function I(t){if(!t.target.closest(".cart-product-btn"))return;const n=t.target.closest(".cart-product-discount").dataset.id,s=w();if(s.find(e=>n===e._id))f(s.filter(e=>n!==e._id));else{const e=d.find(r=>n===r._id);s.push(e),f(s)}}
//# sourceMappingURL=commonHelpers.js.map
