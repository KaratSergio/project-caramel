import{g as T,a as D,s as $,b as j}from"./assets/get-api-656acbb7.js";import{P as A,l as F}from"./assets/vendor-8c378b12.js";const C="https://food-boutique.b.goit.study/api/",N=document.querySelector(".list-prod"),z=document.querySelector(".filter-form");document.querySelector("input");const v=document.querySelector(".filter-select");document.querySelector(".filter-sort");z.addEventListener("submit",J);async function J(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,c=(await H(e,o)).map(({name:n,category:a})=>(a=o==="Show all"?null:a,{name:n,category:a}));N.innerHTML=K(c)}catch(e){console.error(e)}}async function H(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${C}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function R(){const t=await fetch(`${C}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}v.addEventListener("change",G);function G(t){t.currentTarget.value,R().then(e=>{e.forEach(s=>{option.value=s,option.text=s,v.appendChild(option)});let o=document.createElement("option");o.text="Show all",v.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function K(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r})=>`
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
              <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${a}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const g=document.getElementById("modalProduct"),Q=document.getElementById("closeModalProductBtn"),V=document.getElementById("addToCartBtn"),Y=document.getElementById("modalProductImage"),U=document.getElementById("modalProductName"),X=document.getElementById("modalProductCategory"),W=document.getElementById("modalProductSize"),Z=document.getElementById("modalProductPopularity"),tt=document.getElementById("modalProductDescription"),et=document.getElementById("modalProductPrice");function b(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}Y.src=t.img,U.textContent=t.name,X.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",W.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",Z.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",tt.textContent=`${t.desc}`,et.textContent=`$ ${t.price}`,g.style.display="block",window.addEventListener("click",S)}function l(){document.body.style.overflow="",g.style.display="none",window.removeEventListener("click",S)}Q.addEventListener("click",l);window.addEventListener("click",S);document.addEventListener("keydown",function(t){t.key==="Escape"&&l()});function S(t){t.target===g&&l()}window.addEventListener("click",function(t){t.target===g&&l()});V.addEventListener("click",function(){l()});const ot=document.querySelector(".list-prod"),h={keyword:"",category:"",page:1,limit:9};function E(t,e){localStorage.setItem(t,JSON.stringify(e))}function st(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}E("defaultParameters",h);function ct(t,e){t.innerHTML=e}async function M(t){try{h.page=t;const{results:e}=await T(h);E("firstGet",e);const o=nt(e);ct(ot,o),document.querySelectorAll(".prod-item").forEach(c=>{c.addEventListener("click",()=>{const n=c.getAttribute("data-js-product-id"),a=c.querySelector(".buy-btn"),r=c.querySelector(".prod-img"),f=e.find(d=>d._id.toString()===n);console.log("Selected productId:",n),at(n,e),r?b(f):console.error("Selected product not found:",n)})})}catch(e){console.error(e)}}function nt(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r})=>`
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
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}M();const w="added-item";function at(t,e){let o=st(w);o||(o=[]);const s=e.find(c=>c._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),E(w,o),console.log(o);const c=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);c&&(c.disabled=!0)}else console.error("Selected product not found:",t)}const rt=document.querySelector("#pagination"),it={keyword:"",category:"",page:1,limit:9};T(it).then(({results:t,totalPages:e})=>{dt(t,e)});function dt(t,e){if(e>1){const o={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,usageStatistics:!1};new A(rt,o).on("afterMove",c=>{c.page,M(c.page)})}}const L=document.querySelector(".popular-list"),x="added-itemX";function lt(t){localStorage.setItem(x,JSON.stringify(t))}function ut(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.log(t)}}D(5).then(t=>{L.insertAdjacentHTML("beforeend",pt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const n=s.closest(".popular-card").getAttribute("data-js-product-id");b(k(n,t))}else if(s.closest(".btn-add")){const n=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),a=k(n,t),r=ut();r.find(d=>d._id===a._id)||(r.push(a),lt(r)),s.closest(".btn-add").classList.add("visually-hidden")}}L.addEventListener("click",e)}).catch(t=>{console.error(t)});function k(t,e){return e.find(s=>s._id.toString()===t)}function pt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:r,is10PercentOff:f})=>{const d=parseInt(n.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${$}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${$}#shopping-cart"></use>
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
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${d}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const q="product-discount";function O(){try{const t=localStorage.getItem(q);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function I(t){localStorage.setItem(q,JSON.stringify(t))}function gt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"";return` <div class="card-product-discount" data-id="${o._id}">
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
`}).join("")}let p=[];const P=document.querySelector(".products-discount");async function mt(){p=(await j()).slice(0,2);const e=O(),o=yt(e),s=gt(p,o);ft(s)}mt();function ft(t){P.insertAdjacentHTML("beforeend",t)}P.addEventListener("click",vt);P.addEventListener("click",ht);function vt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=O();if(n.find(a=>c===a._id))I(n.filter(a=>c!==a._id));else{const a=p.find(r=>c===r._id);n.push(a),I(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function ht(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=p.find(n=>s===n._id);b(c)}function yt(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),u="feedback-form-state",_=document.getElementById("footer-button"),bt=F(()=>{const t={email:i.elements.email.value};localStorage.setItem(u,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{bt(),m()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(u),i.reset(),m()});_.addEventListener("click",function(){const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,m()}});const m=()=>{const t=i.elements.email.value,e=St(t),o=t.trim()!=="";_.disabled=!(e&&o)},St=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Et=()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,m()}};Et();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const y=document.getElementById("scrollToTopBtn"),B=360;window.onscroll=function(){document.body.scrollTop>B||document.documentElement.scrollTop>B?y.classList.add("show"):y.classList.remove("show")};y.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
