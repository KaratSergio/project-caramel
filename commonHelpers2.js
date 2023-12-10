import{g as k,a as O,s as b,b as _}from"./assets/get-api-524f696e.js";import{P as j,l as A}from"./assets/vendor-8c378b12.js";const I="https://food-boutique.b.goit.study/api/",D=document.querySelector(".list-prod"),N=document.querySelector(".filter-form");document.querySelector("input");const m=document.querySelector(".filter-select");document.querySelector(".filter-sort");N.addEventListener("submit",z);async function z(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,c=(await J(e,o)).map(({name:r,category:n})=>(n=o==="Show all"?null:n,{name:r,category:n}));D.innerHTML=R(c)}catch(e){console.error(e)}}async function J(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${I}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function F(){const t=await fetch(`${I}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}m.addEventListener("change",H);function H(t){t.currentTarget.value,F().then(e=>{e.forEach(s=>{option.value=s,option.text=s,m.appendChild(option)});let o=document.createElement("option");o.text="Show all",m.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function R(t){return t.map(({_id:e,name:o,img:s,category:c,size:r,price:n,popularity:a})=>`
          <li class="prod-item" data-js-product-id=${e}>
            <div class="prod-pic">
              <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
                <use href="./images/icons.svg#shopping-cart"></use>
              </svg>
              <img class="prod-img" src=${s} alt=${o} loading="lazy">
            </div>
            <h3 class="title-prod">${o}</h3>
            <div class="feature">
              <p class="feature-prod">Category:<span class="feature-value">${c}</span></p>
              <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
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
        `).join("")}const u=document.getElementById("modalProduct"),G=document.getElementById("closeModalProductBtn"),K=document.getElementById("addToCartBtn"),Q=document.getElementById("modalProductImage"),Y=document.getElementById("modalProductName"),U=document.getElementById("modalProductCategory"),X=document.getElementById("modalProductSize"),V=document.getElementById("modalProductPopularity"),W=document.getElementById("modalProductDescription"),Z=document.getElementById("modalProductPrice");function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}Q.src=t.img,Y.textContent=t.name,U.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",X.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",V.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",W.textContent=`${t.desc}`,Z.textContent=`$ ${t.price}`,u.style.display="block",window.addEventListener("click",y)}function l(){document.body.style.overflow="",u.style.display="none",window.removeEventListener("click",y)}G.addEventListener("click",l);window.addEventListener("click",y);document.addEventListener("keydown",function(t){t.key==="Escape"&&l()});function y(t){t.target===u&&l()}window.addEventListener("click",function(t){t.target===u&&l()});K.addEventListener("click",function(){l()});const tt=document.querySelector(".list-prod"),f={keyword:"",category:"",page:1,limit:9};function S(t,e){localStorage.setItem(t,JSON.stringify(e))}function et(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}S("defaultParameters",f);function ot(t,e){t.innerHTML=e}async function B(t){try{f.page=t;const{results:e}=await k(f);S("firstGet",e);const o=st(e);ot(tt,o),document.querySelectorAll(".prod-item").forEach(c=>{c.addEventListener("click",()=>{const r=c.getAttribute("data-js-product-id"),n=c.querySelector(".buy-btn"),a=c.querySelector(".prod-img"),g=e.find(d=>d._id.toString()===r);console.log("Selected productId:",r),ct(r,e),a?T(g):console.error("Selected product not found:",r)})})}catch(e){console.error(e)}}function st(t){return t.map(({_id:e,name:o,img:s,category:c,size:r,price:n,popularity:a})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
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
      `).join("")}B();const P="added-item";function ct(t,e){let o=et(P);o||(o=[]);const s=e.find(c=>c._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),S(P,o),console.log(o);const c=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);c&&(c.disabled=!0)}else console.error("Selected product not found:",t)}const rt=document.querySelector("#pagination"),nt={keyword:"",category:"",page:1,limit:9};k(nt).then(({results:t,totalPages:e})=>{at(t,e)});function at(t,e){if(e>1){const o={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,usageStatistics:!1};new j(rt,o).on("afterMove",c=>{c.page,B(c.page)})}}const E=document.querySelector(".popular-list"),C="added-itemX";function it(t){localStorage.setItem(C,JSON.stringify(t))}function dt(){try{const t=localStorage.getItem(C);return t?JSON.parse(t):[]}catch(t){console.log(t)}}O(5).then(t=>{E.insertAdjacentHTML("beforeend",lt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const r=s.closest(".popular-card").getAttribute("data-js-product-id");T($(r,t))}else if(s.closest(".btn-add")){const r=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),n=$(r,t),a=dt();a.find(d=>d._id===n._id)||(a.push(n),it(a)),s.closest(".btn-add").classList.add("visually-hidden")}}E.addEventListener("click",e)}).catch(t=>{console.error(t)});function $(t,e){return e.find(s=>s._id.toString()===t)}function lt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:r,size:n,price:a,is10PercentOff:g})=>{const d=parseInt(r.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${b}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${b}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${d}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const M="product-discount";function x(){try{const t=localStorage.getItem(M);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function w(t){localStorage.setItem(M,JSON.stringify(t))}function ut(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",r=s?"is-hidden":"";return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="./images/icons.svg#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${o.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="./images/icons.svg#check"></use>
          </svg>
          <svg class="card-product-svg ${r}" width="18" height="18">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}let v=[];const q=document.querySelector(".products-discount");async function pt(){v=(await _()).slice(0,2);const e=x(),o=ft(e),s=ut(v,o);gt(s)}pt();function gt(t){q.insertAdjacentHTML("beforeend",t)}q.addEventListener("click",mt);function mt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,r=x();if(r.find(n=>c===n._id))w(r.filter(n=>c!==n._id));else{const n=v.find(a=>c===a._id);r.push(n),w(r)}s.forEach(n=>{n.classList.toggle("is-hidden")})}function ft(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),p="feedback-form-state",vt=A(()=>{const t={email:i.elements.email.value};localStorage.setItem(p,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{vt()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(p),i.reset()});const ht=()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}};ht();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const h=document.getElementById("scrollToTopBtn"),L=360;window.onscroll=function(){document.body.scrollTop>L||document.documentElement.scrollTop>L?h.classList.add("show"):h.classList.remove("show")};h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
