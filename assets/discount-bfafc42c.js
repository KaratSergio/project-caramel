import{a as d,P as S}from"./vendor-b592f4c5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const f="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=f;async function C({keyword:t,category:o,page:a,limit:n,sort:e}={}){const s={keyword:t,category:o,page:a,limit:n};return e&&e.key&&e.value&&(s[e.key]=e.value),(await d.get(`${f}products`,{params:s})).data}async function I(t){return(await d.get(`${f}products/popular`,{params:{limit:t}})).data}const b="added-item";let i=[];const w=document.querySelector(".js-item-count"),h=document.querySelector(".js-empty-basket"),v=document.querySelector(".js-filled-basket"),B=document.querySelector(".js-items-container"),O=document.querySelector(".total-count-text");document.querySelector(".checkout-form");_();function _(){i=[{_id:"640c2dd963a319ea671e37d4",name:"Banana",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png",category:"Fresh_Produce",price:.69,size:"1 piece",is10PercentOff:!0,popularity:108},{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3864",name:"Black Beans",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",category:"Pantry_Items",price:1.99,size:"16oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e37ad",name:"Black Olives",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",category:"Fresh_Produce",price:3.99,size:"1 jar (16 oz)",is10PercentOff:!1,popularity:0}],localStorage.setItem(b,JSON.stringify(i))}x();function x(){try{const t=localStorage.getItem(b);if(!t)return;i=JSON.parse(t);const o=i.length;w.textContent=o,z(o),B.innerHTML=M(i),O.textContent=`$${q(i)}`}catch(t){console.log(t.message)}}function z(t){if(t===0){h.classList.remove("hide"),v.classList.add("hide");return}else h.classList.add("hide"),v.classList.remove("hide")}function M(t){return console.log(t),t.map(({_id:o,name:a,img:n,category:e,size:s,is10PercentOff:c,price:r})=>`<li class="item-container" data-id="${o}">
          <a class="item-img-link" href="">
            <img class="item-img" src="${n}" alt="${a}" loading="lazy"/>
          </a>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${a}</h4>
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
            <p class="item-price">$${r}</p>
          </div>
        </li>`).join("")}function q(t){let o=0,a=1;return t.forEach(({price:n})=>{o+=n*a}),o}const A="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=A;const u=document.getElementById("modalProduct"),j=document.getElementById("closeModalProductBtn"),N=document.getElementById("addToCartBtn"),T=document.getElementById("modalProductImage"),D=document.getElementById("modalProductName"),R=document.getElementById("modalProductCategory"),F=document.getElementById("modalProductSize"),J=document.getElementById("modalProductPopularity"),U=document.getElementById("modalProductDescription"),H=document.getElementById("modalProductPrice");function K(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}T.src=t.img,D.textContent=t.name,R.textContent=`Category: ${t.category}`,F.textContent=`Size: ${t.size}`,J.textContent=`Popularity: ${t.popularity}`,U.textContent=t.description,H.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",u.style.display="block",window.addEventListener("click",$)}function l(){document.body.style.overflow="",u.style.display="none",window.removeEventListener("click",$)}j.addEventListener("click",l);window.addEventListener("click",function(t){t.target===u&&l()});document.addEventListener("keydown",function(t){t.key==="Escape"&&l()});function $(t){t.target===u&&l()}window.addEventListener("click",function(t){t.target===u&&l()});N.addEventListener("click",function(){l()});const G=document.querySelector(".list-prod"),p={keyword:"",category:"",page:1,limit:9};function Y(t){localStorage.setItem("defaultParameters",JSON.stringify(p))}Y();function Q(t,o){t.innerHTML=o}async function k(t){try{p.page=t;const{results:o}=await C(p);console.log("Products:",o);const a=V(o);Q(G,a),document.querySelectorAll(".prod-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-js-product-id"),c=o.find(r=>r._id.toString()===s);c?K(c):console.error("Selected product not found:",s)})})}catch(o){console.error(o)}}function V(t){return t.map(({_id:o,name:a,img:n,category:e,size:s,price:c,popularity:r})=>`
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
      `).join("")}k();const W=9;let X=540;let m=1;const Z=document.getElementById("pagination"),tt=new S(Z,{totalItems:X,itemsPerPage:W,visiblePages:5,centerAlign:!0});tt.on("beforeMove",t=>{m=t.page,E(m)});async function E(t){k(t)}E(m);const et=document.querySelector(".popular-list");function ot(t){return t.map(({_id:o,name:a,img:n,category:e,popularity:s,size:c})=>{const r=parseInt(s.toString()[0]);return`  <li class="popular-item">
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
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${r}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}I(5).then(t=>{et.insertAdjacentHTML("beforeend",ot(t)),[...document.querySelectorAll(".popular-item")].forEach(a=>{const n=a.children[1];n.classList.add("visually-hidden");const e=a.children[0];e.addEventListener("click",s);function s(dt){alert("Product add to Order"),e.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),e.removeEventListener("click",s)}const c=a.children[2];c.addEventListener("click",r);function r(){alert("This is product cart"),c.removeEventListener("click",r)}})}).catch(t=>{console.error(t)});d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function st(){return d.get("products/discount").then(t=>t.data)}const L="product-discount";function at(){try{const t=localStorage.getItem(L);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function P(t){localStorage.setItem(L,JSON.stringify(t))}function nt(t=[]){return t.map(o=>` <div class="card-product-discount" data-id="${o._id}">
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
`).join("")}let g=[];const y=document.querySelector(".products-discount");console.log(y);async function ct(){g=(await st()).slice(0,2);const o=nt(g);rt(o)}ct();function rt(t){y.insertAdjacentHTML("beforeend",t)}y.addEventListener("click",it);function it(t){if(!t.target.closest(".cart-product-btn"))return;const a=t.target.closest(".cart-product-discount").dataset.id,n=at();if(n.find(e=>a===e._id))P(n.filter(e=>a!==e._id));else{const e=g.find(s=>a===s._id);n.push(e),P(n)}}
//# sourceMappingURL=discount-bfafc42c.js.map
