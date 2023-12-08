import{a as i}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const p="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=p;async function E({keyword:t,category:o,page:s,limit:c,sort:e}={}){const n={keyword:t,category:o,page:s,limit:c};return e&&e.key&&e.value&&(n[e.key]=e.value),(await i.get(`${p}products`,{params:n})).data}async function P(t){return(await i.get(`${p}products/popular`,{params:{limit:t}})).data}const l=document.getElementById("modalProduct"),L=document.getElementById("closeModalProductBtn"),k=document.getElementById("addToCartBtn"),b=document.getElementById("modalProductImage"),C=document.getElementById("modalProductName"),$=document.getElementById("modalProductCategory"),I=document.getElementById("modalProductSize"),S=document.getElementById("modalProductPopularity"),w=document.getElementById("modalProductDescription"),B=document.getElementById("modalProductPrice");function M(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}b.src=t.img,C.textContent=t.name,$.textContent=`Category: ${t.category}`,I.textContent=`Size: ${t.size}`,S.textContent=`Popularity: ${t.popularity}`,w.textContent=t.description,B.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",y)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",y)}L.addEventListener("click",d);window.addEventListener("click",function(t){t.target===l&&d()});document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function y(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});k.addEventListener("click",function(){d()});const x=document.querySelector(".list-prod"),A={keyword:"",category:"",page:1,limit:9};function _(t,o){t.innerHTML=o}async function O(){try{const{results:t}=await E(A);console.log("Products:",t);const o=j(t);_(x,o),document.querySelectorAll(".prod-item").forEach(c=>{c.addEventListener("click",()=>{const e=c.getAttribute("data-js-product-id"),n=t.find(a=>a._id.toString()===e);n?M(n):console.error("Selected product not found:",e)})})}catch(t){console.error("Ошибка при отображении продуктов:",t)}}function j(t){return t.map(({_id:o,name:s,img:c,category:e,size:n,price:a,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod"> &#36;${a}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}O();async function v(t,o){const s=document.getElementById("pagination");if(s.innerHTML="",o>1){for(let e=Math.max(1,t-1);e<=Math.min(o,t+1);e+=1)f(e,e===t);if(o-t>5-2){const e=document.createElement("span");e.textContent=". . .",s.appendChild(e)}for(let e=Math.max(o-5+4);e<=o;e+=1)f(e)}}function f(t,o=!1){const s=document.getElementById("pagination"),c=document.createElement("li"),e=document.createElement("div");e.classList.add("pagination-link");const n=document.createElement("a");n.href="javascript:void(0);",n.textContent=t,o&&e.classList.add("active"),n.addEventListener("click",()=>q(t)),e.appendChild(n),c.appendChild(e),s.appendChild(c)}function q(t){displayCards(t),v(t,60)}const z=1;v(z,60);const T=document.querySelector(".popular-list");function D(t){return t.map(({_id:o,name:s,img:c,category:e,popularity:n,size:a})=>{const r=parseInt(n.toString()[0]);return`  <li class="popular-item">
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
            <img src="${c}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${r}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}P(5).then(t=>{T.insertAdjacentHTML("beforeend",D(t)),[...document.querySelectorAll(".popular-item")].forEach(s=>{const c=s.children[1];c.classList.add("visually-hidden");const e=s.children[0];e.addEventListener("click",n);function n(X){alert("Product add to Order"),e.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),e.removeEventListener("click",n)}const a=s.children[2];a.addEventListener("click",r);function r(){alert("This is product cart"),a.removeEventListener("click",r)}})}).catch(t=>{console.error(t)});i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function N(){return i.get("products/discount").then(t=>t.data)}const h="product-discount";function G(){try{const t=localStorage.getItem(h);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function g(t){localStorage.setItem(h,JSON.stringify(t))}function H(t=[]){return t.map(o=>` <div class="cart-product-discount" data-id="${o._id}">
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
`).join("")}let u=[];const m=document.querySelector(".products-discount");console.log(m);async function R(){u=(await N()).slice(0,2);const o=H(u);U(o)}R();function U(t){m.insertAdjacentHTML("beforeend",t)}m.addEventListener("click",V);function V(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,c=G();if(c.find(e=>s===e._id))g(c.filter(e=>s!==e._id));else{const e=u.find(n=>s===n._id);c.push(e),g(c)}}
//# sourceMappingURL=commonHelpers.js.map
