import{g as k,a as x,s as l}from"./assets/get-api-8b43e65f.js";import{P as q,a as I,l as O}from"./assets/vendor-8c378b12.js";const T="https://food-boutique.b.goit.study/api/",j=document.querySelector(".list-prod"),_=document.querySelector(".filter-form");document.querySelector("input");const m=document.querySelector(".filter-select");document.querySelector(".filter-sort");_.addEventListener("submit",D);async function D(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,a=(await A(e,o)).map(({name:r,category:n})=>(n=o==="Show all"?null:n,{name:r,category:n}));j.innerHTML=F(a)}catch(e){console.error(e)}}async function A(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${T}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function z(){const t=await fetch(`${T}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}m.addEventListener("change",N);function N(t){t.currentTarget.value,z().then(e=>{e.forEach(s=>{option.value=s,option.text=s,m.appendChild(option)});let o=document.createElement("option");o.text="Show all",m.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function F(t){return t.map(({_id:e,name:o,img:s,category:a,size:r,price:n,popularity:c})=>`
          <li class="prod-item" data-js-product-id=${e}>
            <div class="prod-pic">
              <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
                <use href="./images/icons.svg#shopping-cart"></use>
              </svg>
              <img class="prod-img" src=${s} alt=${o} loading="lazy">
            </div>
            <h3 class="title-prod">${o}</h3>
            <div class="feature">
              <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
              <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${n}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const u=document.getElementById("modalProduct"),J=document.getElementById("closeModalProductBtn"),H=document.getElementById("addToCartBtn"),R=document.getElementById("modalProductImage"),G=document.getElementById("modalProductName"),K=document.getElementById("modalProductCategory"),Q=document.getElementById("modalProductSize"),U=document.getElementById("modalProductPopularity"),Y=document.getElementById("modalProductDescription"),V=document.getElementById("modalProductPrice");function B(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}R.src=t.img,G.textContent=t.name,K.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",Q.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",U.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",Y.textContent=`${t.desc}`,V.textContent=`$ ${t.price}`,u.style.display="block",window.addEventListener("click",h)}function i(){document.body.style.overflow="",u.style.display="none",window.removeEventListener("click",h)}J.addEventListener("click",i);window.addEventListener("click",h);document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function h(t){t.target===u&&i()}window.addEventListener("click",function(t){t.target===u&&i()});H.addEventListener("click",function(){i()});const W=document.querySelector(".list-prod"),f={keyword:"",category:"",page:1,limit:9};function b(t,e){localStorage.setItem(t,JSON.stringify(e))}function X(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}b("defaultParameters",f);function Z(t,e){t.innerHTML=e}async function C(t){try{f.page=t;const{results:e}=await k(f);b("firstGet",e);const o=tt(e);Z(W,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-js-product-id"),n=a.querySelector(".buy-btn"),c=a.querySelector(".prod-img"),E=e.find(g=>g._id.toString()===r);console.log("Selected productId:",r),et(r,e),c?B(E):console.error("Selected product not found:",r)})})}catch(e){console.error(e)}}function tt(t){return t.map(({_id:e,name:o,img:s,category:a,size:r,price:n,popularity:c})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${n}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}C();const P="added-item";function et(t,e){let o=X(P);o||(o=[]);const s=e.find(a=>a._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),b(P,o),console.log(o);const a=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);a&&(a.disabled=!0)}else console.error("Selected product not found:",t)}const ot=document.querySelector("#pagination"),st={keyword:"",category:"",page:1,limit:9};k(st).then(({results:t,totalPages:e})=>{at(t,e)});function at(t,e){if(e>1){const o={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,usageStatistics:!1};new q(ot,o).on("afterMove",a=>{a.page,C(a.page)})}}const $=document.querySelector(".popular-list"),rt="added-item";let nt=JSON.parse(localStorage.getItem(rt));console.log(nt);x(5).then(t=>{$.insertAdjacentHTML("beforeend",ct(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const r=s.closest(".popular-card").getAttribute("data-js-product-id"),n=t.find(c=>c._id.toString()===r);B(n)}else if(s.closest(".btn-add")){const r=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id");t.find(n=>n._id.toString()===r),alert("Product add to Order"),s.closest(".btn-add").classList.add("visually-hidden")}}$.addEventListener("click",e)}).catch(t=>{console.error(t)});function ct(t){return t.map(({_id:e,name:o,img:s,category:a,popularity:r,size:n,price:c,is10PercentOff:E})=>{const g=parseInt(r.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${l}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${l}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${a.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${g}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}I.defaults.baseURL="https://food-boutique.b.goit.study/api/";function dt(){return I.get("products/discount").then(t=>t.data)}const M="product-discount";function it(){try{const t=localStorage.getItem(M);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function w(t){localStorage.setItem(M,JSON.stringify(t))}function lt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${e.img}"
            width="105" height="105" alt="${e.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${e.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${e.price}</p>

            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg" width="18" height="18">
            <use href="${l}#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="${l}#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`).join("")}let v=[];const S=document.querySelector(".products-discount");console.log(S);async function ut(){v=(await dt()).slice(0,2);const e=lt(v);pt(e)}ut();function pt(t){S.insertAdjacentHTML("beforeend",t)}S.addEventListener("click",gt);function gt(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,s=it();if(s.find(a=>o===a._id))w(s.filter(a=>o!==a._id));else{const a=v.find(r=>o===r._id);s.push(a),w(s)}}const d=document.querySelector(".feedback-form"),p="feedback-form-state",mt=O(()=>{const t={email:d.elements.email.value};localStorage.setItem(p,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{mt()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(p),d.reset()});const ft=()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}};ft();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(a=>{a.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const y=document.getElementById("scrollToTopBtn"),L=360;window.onscroll=function(){document.body.scrollTop>L||document.documentElement.scrollTop>L?y.classList.add("show"):y.classList.remove("show")};y.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
