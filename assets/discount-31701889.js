import{a as d}from"./vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const g="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=g;async function C({keyword:t,category:o,page:n,limit:a,sort:e}={}){const s={keyword:t,category:o,page:n,limit:a};return e&&e.key&&e.value&&(s[e.key]=e.value),(await d.get(`${g}products`,{params:s})).data}async function I(t){return(await d.get(`${g}products/popular`,{params:{limit:t}})).data}const k="added-item";let r=[];const B=document.querySelector(".js-item-count"),h=document.querySelector(".js-empty-basket"),v=document.querySelector(".js-filled-basket"),w=document.querySelector(".js-items-container"),_=document.querySelector(".total-count-text"),M=document.querySelector(".checkout-form");M.addEventListener("submit",j);x();function x(){r=[{_id:"640c2dd963a319ea671e37d4",name:"Banana",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png",category:"Fresh_Produce",price:.69,size:"1 piece",is10PercentOff:!0,popularity:108},{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3864",name:"Black Beans",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",category:"Pantry_Items",price:1.99,size:"16oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e37ad",name:"Black Olives",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",category:"Fresh_Produce",price:3.99,size:"1 jar (16 oz)",is10PercentOff:!1,popularity:0}],localStorage.setItem(k,JSON.stringify(r))}A();function A(){try{const t=localStorage.getItem(k);if(!t)return;r=JSON.parse(t);const o=r.length;B.textContent=o,O(o),w.innerHTML=z(r),_.textContent=`$${q(r)}`}catch(t){console.log(t.message)}}function O(t){if(t===0){h.classList.remove("hide"),v.classList.add("hide");return}else h.classList.add("hide"),v.classList.remove("hide")}function z(t){return console.log(t),t.map(({_id:o,name:n,img:a,category:e,size:s,is10PercentOff:i,price:c})=>`<li class="item-container" data-id="${o}">
          <a class="item-img-link" href="">
            <img class="item-img" src="${a}" alt="${n}" loading="lazy"/>
          </a>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${n}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="./images/icons1.svg#delete-icon"></use>
                  <!-- <use href="./images/icons.svg#delete-icon"></use> -->
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${e}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${s}</li>
            </ul>
            <p class="item-price">$${c}</p>
          </div>
        </li>`).join("")}function q(t){let o=0,n=1;return t.forEach(({price:a})=>{o+=a*n}),o}async function j(t){try{t.preventDefault();const o=t.target.elements.email.value;let n=[];r.forEach(({_id:e,amount:s=1})=>{n.push({productId:e,amount:s})});const a=await N(o,n);console.log(a)}catch(o){console.log(o.message)}}const L="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=L;async function N(t,o){return await d.post(`${L}orders`,{email:t,products:o}).then(n=>n.data)}const u=document.getElementById("modalProduct"),T=document.getElementById("closeModalProductBtn"),D=document.getElementById("addToCartBtn"),R=document.getElementById("modalProductImage"),F=document.getElementById("modalProductName"),G=document.getElementById("modalProductCategory"),H=document.getElementById("modalProductSize"),J=document.getElementById("modalProductPopularity"),U=document.getElementById("modalProductDescription"),K=document.getElementById("modalProductPrice");function V(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}R.src=t.img,F.textContent=t.name,G.textContent=`Category: ${t.category}`,H.textContent=`Size: ${t.size}`,J.textContent=`Popularity: ${t.popularity}`,U.textContent=t.description,K.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",u.style.display="block",window.addEventListener("click",b)}function l(){document.body.style.overflow="",u.style.display="none",window.removeEventListener("click",b)}T.addEventListener("click",l);window.addEventListener("click",function(t){t.target===u&&l()});document.addEventListener("keydown",function(t){t.key==="Escape"&&l()});function b(t){t.target===u&&l()}window.addEventListener("click",function(t){t.target===u&&l()});D.addEventListener("click",function(){l()});const X=document.querySelector(".list-prod"),p={keyword:"",category:"",page:1,limit:9};function Y(t){localStorage.setItem("defaultParameters",JSON.stringify(p))}Y();function W(t,o){t.innerHTML=o}async function f(){try{const{results:t}=await C(p);console.log("Products:",t),p.page+=1;const o=Q(t);W(X,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-js-product-id"),s=t.find(i=>i._id.toString()===e);s?V(s):console.error("Selected product not found:",e)})})}catch(t){console.error(t)}}function Q(t){return t.map(({_id:o,name:n,img:a,category:e,size:s,price:i,popularity:c})=>`
        <li class="prod-item" data-js-product-id=${o}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${n} loading="lazy">
          </div>
          <h3 class="title-prod">${n}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${e}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${s}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${i}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}f();document.getElementById("pagination");async function S(t,o){const n=document.getElementById("pagination");if(n.innerHTML="",o>1){for(let e=Math.max(1,t-1);e<=Math.min(o,t+1);e+=1)E(e,e===t);if(o-t>5-2){const e=document.createElement("span");e.textContent=". . .",n.appendChild(e)}for(let e=Math.max(o-5+4);e<=o;e+=1)E(e)}}function E(t,o=!1){const n=document.getElementById("pagination"),a=document.createElement("li"),e=document.createElement("div");e.classList.add("pagination-link");const s=document.createElement("a");s.href="javascript:void(0);",s.textContent=t,o&&e.classList.add("active"),s.addEventListener("click",()=>Z(t)),e.appendChild(s),a.appendChild(e),n.appendChild(a)}function Z(t){f();S(t,60)}const tt=1;f();S(tt,60);const et=document.querySelector(".popular-list");function ot(t){return t.map(({_id:o,name:n,img:a,category:e,popularity:s,size:i})=>{const c=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
            <img src="${a}" alt="${n}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${n}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${e.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${i}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${c}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}I(5).then(t=>{et.insertAdjacentHTML("beforeend",ot(t)),[...document.querySelectorAll(".popular-item")].forEach(n=>{const a=n.children[1];a.classList.add("visually-hidden");const e=n.children[0];e.addEventListener("click",s);function s(dt){alert("Product add to Order"),e.classList.add("visually-hidden"),a.classList.remove("visually-hidden"),e.removeEventListener("click",s)}const i=n.children[2];i.addEventListener("click",c);function c(){alert("This is product cart"),i.removeEventListener("click",c)}})}).catch(t=>{console.error(t)});d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function st(){return d.get("products/discount").then(t=>t.data)}const $="product-discount";function nt(){try{const t=localStorage.getItem($);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function P(t){localStorage.setItem($,JSON.stringify(t))}function at(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let m=[];const y=document.querySelector(".products-discount");console.log(y);async function it(){m=(await st()).slice(0,2);const o=at(m);ct(o)}it();function ct(t){y.insertAdjacentHTML("beforeend",t)}y.addEventListener("click",rt);function rt(t){if(!t.target.closest(".cart-product-btn"))return;const n=t.target.closest(".cart-product-discount").dataset.id,a=nt();if(a.find(e=>n===e._id))P(a.filter(e=>n!==e._id));else{const e=m.find(s=>n===s._id);a.push(e),P(a)}}
//# sourceMappingURL=discount-31701889.js.map
