import{a as d,P as L}from"./assets/vendor-99d50140.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=m;async function f({keyword:t,category:o,page:a,limit:n,sort:e}={}){const s={keyword:t,category:o,page:a,limit:n};return e&&e.key&&e.value&&(s[e.key]=e.value),(await d.get(`${m}products`,{params:s})).data}async function $(t){return(await d.get(`${m}products/popular`,{params:{limit:t}})).data}const l=document.getElementById("modalProduct"),k=document.getElementById("closeModalProductBtn"),w=document.getElementById("addToCartBtn"),S=document.getElementById("modalProductImage"),C=document.getElementById("modalProductName"),I=document.getElementById("modalProductCategory"),B=document.getElementById("modalProductSize"),M=document.getElementById("modalProductPopularity"),x=document.getElementById("modalProductDescription"),A=document.getElementById("modalProductPrice");function q(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}S.src=t.img,C.textContent=t.name,I.textContent=`Category: ${t.category}`,B.textContent=`Size: ${t.size}`,M.textContent=`Popularity: ${t.popularity}`,x.textContent=t.description,A.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",h)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",h)}k.addEventListener("click",i);window.addEventListener("click",function(t){t.target===l&&i()});document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function h(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});w.addEventListener("click",function(){i()});const N=document.querySelector(".list-prod"),p={keyword:"",category:"",page:1,limit:9};function O(t){localStorage.setItem("defaultParameters",JSON.stringify(p))}O();function P(t,o){t.innerHTML=o}async function z(){try{const{results:t}=await f(p);console.log("Products:",t),p.page+=1;const o=b(t);P(N,o),document.querySelectorAll(".prod-item").forEach(n=>{n.addEventListener("click",()=>{const e=n.getAttribute("data-js-product-id"),s=t.find(r=>r._id.toString()===e);s?q(s):console.error("Selected product not found:",e)})})}catch(t){console.error(t)}}function b(t){return t.map(({_id:o,name:a,img:n,category:e,size:s,price:r,popularity:c})=>`
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
      `).join("")}z();const _=document.querySelector("#tui-pagination-container"),j=document.querySelector(".list-prod"),u={keyword:"",category:"",page:1,limit:9};f(u).then(({results:t,totalPages:o})=>{o>1&&T(t,o)});function T(t,o){const a={totalItems:t.length*o,itemsPerPage:9,visiblePages:3,page:u.page,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new L(_,a).on("afterMove",e=>{u.page=e.page,f(u).then(({results:s})=>{const r=b(s);P(j,r)})})}const D=document.querySelector(".popular-list");function R(t){return t.map(({_id:o,name:a,img:n,category:e,popularity:s,size:r})=>{const c=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
      </li>`}).join("")}$(5).then(t=>{D.insertAdjacentHTML("beforeend",R(t)),[...document.querySelectorAll(".popular-item")].forEach(a=>{const n=a.children[1];n.classList.add("visually-hidden");const e=a.children[0];e.addEventListener("click",s);function s(Y){alert("Product add to Order"),e.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),e.removeEventListener("click",s)}const r=a.children[2];r.addEventListener("click",c);function c(){alert("This is product cart"),r.removeEventListener("click",c)}})}).catch(t=>{console.error(t)});d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function H(){return d.get("products/discount").then(t=>t.data)}const E="product-discount";function J(){try{const t=localStorage.getItem(E);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function v(t){localStorage.setItem(E,JSON.stringify(t))}function U(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let g=[];const y=document.querySelector(".products-discount");console.log(y);async function K(){g=(await H()).slice(0,2);const o=U(g);F(o)}K();function F(t){y.insertAdjacentHTML("beforeend",t)}y.addEventListener("click",G);function G(t){if(!t.target.closest(".cart-product-btn"))return;const a=t.target.closest(".cart-product-discount").dataset.id,n=J();if(n.find(e=>a===e._id))v(n.filter(e=>a!==e._id));else{const e=g.find(s=>a===s._id);n.push(e),v(n)}}
//# sourceMappingURL=commonHelpers.js.map
