import{a as d,P as w}from"./assets/vendor-99d50140.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=m;async function v({keyword:t,category:o,page:a,limit:n,sort:e}={}){const s={keyword:t,category:o,page:a,limit:n};return e&&e.key&&e.value&&(s[e.key]=e.value),(await d.get(`${m}products`,{params:s})).data}async function S(t){return(await d.get(`${m}products/popular`,{params:{limit:t}})).data}const l=document.getElementById("modalProduct"),C=document.getElementById("closeModalProductBtn"),I=document.getElementById("addToCartBtn"),B=document.getElementById("modalProductImage"),M=document.getElementById("modalProductName"),x=document.getElementById("modalProductCategory"),A=document.getElementById("modalProductSize"),q=document.getElementById("modalProductPopularity"),N=document.getElementById("modalProductDescription"),O=document.getElementById("modalProductPrice");function _(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}B.src=t.img,M.textContent=t.name,x.textContent=`Category: ${t.category}`,A.textContent=`Size: ${t.size}`,q.textContent=`Popularity: ${t.popularity}`,N.textContent=t.description,O.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",h)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",h)}C.addEventListener("click",i);window.addEventListener("click",function(t){t.target===l&&i()});document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function h(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});I.addEventListener("click",function(){i()});const z=document.querySelector(".list-prod"),p={keyword:"",category:"",page:1,limit:9};function D(t){localStorage.setItem("defaultParameters",JSON.stringify(p))}D();function T(t,o){t.innerHTML=o}async function j(){try{const{results:t}=await v(p);console.log("Products:",t),p.page+=1;const o=P(t);T(z,o),document.querySelectorAll(".prod-item").forEach(n=>{n.addEventListener("click",()=>{const e=n.getAttribute("data-js-product-id"),s=t.find(r=>r._id.toString()===e);s?_(s):console.error("Selected product not found:",e)})})}catch(t){console.error(t)}}function P(t){return t.map(({_id:o,name:a,img:n,category:e,size:s,price:r,popularity:c})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${n} alt=${a} loading="lazy">
          </div>
          <h3 class="title-prod">${a}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${s}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${r}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}j();const R=document.querySelector("#tui-pagination-container");let H=1;async function U(t){try{let s=function(c,u){c.innerHTML=u},r=function(c,u){const E={totalItems:c.length*u,itemsPerPage:9,visiblePages:3,page:t,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new w(R,E).on("afterMove",async L=>{t=L.page;const{results:k}=await getProducts(t),$=P(k);s(e,$)})};const{totalPages:o,results:a}=await v(t),n="https://food-boutique.b.goit.study/api/",e=document.querySelector(".list-prod");r(a,o)}catch(o){console.error("Error fetching data:",o)}}U(H);const J=document.querySelector(".popular-list");function K(t){return t.map(({_id:o,name:a,img:n,category:e,popularity:s,size:r})=>{const c=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
            <img src="${n}" alt="${a}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${a}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${c}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}S(5).then(t=>{J.insertAdjacentHTML("beforeend",K(t)),[...document.querySelectorAll(".popular-item")].forEach(a=>{const n=a.children[1];n.classList.add("visually-hidden");const e=a.children[0];e.addEventListener("click",s);function s(u){alert("Product add to Order"),e.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),e.removeEventListener("click",s)}const r=a.children[2];r.addEventListener("click",c);function c(){alert("This is product cart"),r.removeEventListener("click",c)}})}).catch(t=>{console.error(t)});d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function F(){return d.get("products/discount").then(t=>t.data)}const b="product-discount";function G(){try{const t=localStorage.getItem(b);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function y(t){localStorage.setItem(b,JSON.stringify(t))}function Y(t=[]){return t.map(o=>` <div class="cart-product-discount" data-id="${o._id}">
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
`).join("")}let g=[];const f=document.querySelector(".products-discount");console.log(f);async function Q(){g=(await F()).slice(0,2);const o=Y(g);V(o)}Q();function V(t){f.insertAdjacentHTML("beforeend",t)}f.addEventListener("click",W);function W(t){if(!t.target.closest(".cart-product-btn"))return;const a=t.target.closest(".cart-product-discount").dataset.id,n=G();if(n.find(e=>a===e._id))y(n.filter(e=>a!==e._id));else{const e=g.find(s=>a===s._id);n.push(e),y(n)}}
//# sourceMappingURL=commonHelpers.js.map
