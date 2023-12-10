import{g as T,a as _,s as P,b as O}from"./assets/get-api-75a19277.js";import{P as j,l as A}from"./assets/vendor-8c378b12.js";const B="https://food-boutique.b.goit.study/api/",D=document.querySelector(".list-prod"),N=document.querySelector(".filter-form");document.querySelector("input");const f=document.querySelector(".filter-select");document.querySelector(".filter-sort");N.addEventListener("submit",z);async function z(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,c=(await J(e,o)).map(({name:n,category:r})=>(r=o==="Show all"?null:r,{name:n,category:r}));D.innerHTML=R(c)}catch(e){console.error(e)}}async function J(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${B}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function F(){const t=await fetch(`${B}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}f.addEventListener("change",H);function H(t){t.currentTarget.value,F().then(e=>{e.forEach(s=>{option.value=s,option.text=s,f.appendChild(option)});let o=document.createElement("option");o.text="Show all",f.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function R(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:r,popularity:a})=>`
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
              <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${r}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const p=document.getElementById("modalProduct"),G=document.getElementById("closeModalProductBtn"),K=document.getElementById("addToCartBtn"),Q=document.getElementById("modalProductImage"),Y=document.getElementById("modalProductName"),U=document.getElementById("modalProductCategory"),X=document.getElementById("modalProductSize"),V=document.getElementById("modalProductPopularity"),W=document.getElementById("modalProductDescription"),Z=document.getElementById("modalProductPrice");function y(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}Q.src=t.img,Y.textContent=t.name,U.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",X.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",V.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",W.textContent=`${t.desc}`,Z.textContent=`$ ${t.price}`,p.style.display="block",window.addEventListener("click",b)}function l(){document.body.style.overflow="",p.style.display="none",window.removeEventListener("click",b)}G.addEventListener("click",l);window.addEventListener("click",b);document.addEventListener("keydown",function(t){t.key==="Escape"&&l()});function b(t){t.target===p&&l()}window.addEventListener("click",function(t){t.target===p&&l()});K.addEventListener("click",function(){l()});const tt=document.querySelector(".list-prod"),v={keyword:"",category:"",page:1,limit:9};function S(t,e){localStorage.setItem(t,JSON.stringify(e))}function et(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}S("defaultParameters",v);function ot(t,e){t.innerHTML=e}async function C(t){try{v.page=t;const{results:e}=await T(v);S("firstGet",e);const o=st(e);ot(tt,o),document.querySelectorAll(".prod-item").forEach(c=>{c.addEventListener("click",()=>{const n=c.getAttribute("data-js-product-id"),r=c.querySelector(".buy-btn"),a=c.querySelector(".prod-img"),m=e.find(i=>i._id.toString()===n);console.log("Selected productId:",n),ct(n,e),a?y(m):console.error("Selected product not found:",n)})})}catch(e){console.error(e)}}function st(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:r,popularity:a})=>`
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
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${r}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}C();const $="added-item";function ct(t,e){let o=et($);o||(o=[]);const s=e.find(c=>c._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),S($,o),console.log(o);const c=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);c&&(c.disabled=!0)}else console.error("Selected product not found:",t)}const nt=document.querySelector("#pagination"),rt={keyword:"",category:"",page:1,limit:9};T(rt).then(({results:t,totalPages:e})=>{at(t,e)});function at(t,e){if(e>1){const o={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,usageStatistics:!1};new j(nt,o).on("afterMove",c=>{c.page,C(c.page)})}}const w=document.querySelector(".popular-list"),M="added-itemX";function dt(t){localStorage.setItem(M,JSON.stringify(t))}function it(){try{const t=localStorage.getItem(M);return t?JSON.parse(t):[]}catch(t){console.log(t)}}_(5).then(t=>{w.insertAdjacentHTML("beforeend",lt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const n=s.closest(".popular-card").getAttribute("data-js-product-id");y(L(n,t))}else if(s.closest(".btn-add")){const n=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),r=L(n,t),a=it();a.find(i=>i._id===r._id)||(a.push(r),dt(a)),s.closest(".btn-add").classList.add("visually-hidden")}}w.addEventListener("click",e)}).catch(t=>{console.error(t)});function L(t,e){return e.find(s=>s._id.toString()===t)}function lt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:r,price:a,is10PercentOff:m})=>{const i=parseInt(n.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${P}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${P}#shopping-cart"></use>
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
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const x="product-discount";function q(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function k(t){localStorage.setItem(x,JSON.stringify(t))}function ut(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"";return` <div class="card-product-discount" data-id="${o._id}">
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
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}let u=[];const E=document.querySelector(".products-discount");async function pt(){u=(await O()).slice(0,2);const e=q(),o=vt(e),s=ut(u,o);gt(s)}pt();function gt(t){E.insertAdjacentHTML("beforeend",t)}E.addEventListener("click",mt);E.addEventListener("click",ft);function mt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=q();if(n.find(r=>c===r._id))k(n.filter(r=>c!==r._id));else{const r=u.find(a=>c===a._id);n.push(r),k(n)}s.forEach(r=>{r.classList.toggle("is-hidden")})}function ft(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=u.find(n=>s===n._id);y(c)}function vt(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form"),g="feedback-form-state",ht=A(()=>{const t={email:d.elements.email.value};localStorage.setItem(g,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(g);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{ht()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(g),d.reset()});const yt=()=>{const t=localStorage.getItem(g);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}};yt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const h=document.getElementById("scrollToTopBtn"),I=360;window.onscroll=function(){document.body.scrollTop>I||document.documentElement.scrollTop>I?h.classList.add("show"):h.classList.remove("show")};h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
