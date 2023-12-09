import{g as B,a as q}from"./assets/get-api-a2237a0a.js";import{P as O,a as M,l as j}from"./assets/vendor-8c378b12.js";const z=document.getElementById("countProducts");let A=0;document.getElementById("cartLink").addEventListener("click",()=>{z.innerHTML=`cart (${++A})`});const f="Java Script";console.log(f.length-1);console.log(f[f.length]);const T="https://food-boutique.b.goit.study/api/";function _(){return fetch(`${T}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(t,e,s,a,o){const n=new URLSearchParams({keyword:t,category:e,page:s,limit:a});return o&&o.key&&o.value&&(n[o.key]=o.value),fetch(`${T}products`,{params:n}).then(c=>{if(!c.ok)throw new Error(c.status);return c.json()})}const v=document.querySelector(".list-prod"),H=document.querySelector(".filter-form");document.querySelector("input");const m=document.querySelector(".filter-select");document.querySelector(".filter-sort");function w(t){return Array.isArray(t)?t.map(({_id:e,name:s,img:a,category:o,size:n,price:c,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join(""):(console.error("Invalid results:",t),"")}async function N(){try{const t=await _();let e=document.createElement("option");e.innerHTML="Show all",m.appendChild(e),t.forEach(o=>{const n=document.createElement("option");n.value=o,n.text=o,m.appendChild(n)}),m.addEventListener("change",async function(){C({...l(),category:this.value==="Show all"?null:this.value,page:1});const o=l(),n=await y(o);console.log(n),v.innerHTML=w(n)});const s=l(),a=await y(s);v.innerHTML=w(a)}catch(t){console.error("Initialization error:",t)}}H.addEventListener("submit",async function(t){t.preventDefault();const e=this.elements.searchQuery.value.trim().toLowerCase().split(" "),s=this.elements.categories.value;this.elements.searchQuery.value=e||"",C({keyword:e,category:s==="Show all"?null:s,page:1,limit:6});const a=l(),o=await y(a);v.innerHTML=createCardMarkup(o),this.elements.searchQuery.value=""});function C(t){localStorage.setItem("filterData",JSON.stringify(t))}function l(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}N();const u=document.getElementById("modalProduct"),J=document.getElementById("closeModalProductBtn"),F=document.getElementById("addToCartBtn"),R=document.getElementById("modalProductImage"),Q=document.getElementById("modalProductName"),K=document.getElementById("modalProductCategory"),U=document.getElementById("modalProductSize"),G=document.getElementById("modalProductPopularity"),Y=document.getElementById("modalProductDescription"),W=document.getElementById("modalProductPrice");function V(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}R.src=t.img,Q.textContent=t.name,K.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",U.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",G.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",Y.textContent=`${t.desc}`,W.textContent=`$ ${t.price}`,u.style.display="block",window.addEventListener("click",P)}function d(){document.body.style.overflow="",u.style.display="none",window.removeEventListener("click",P)}J.addEventListener("click",d);window.addEventListener("click",P);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function P(t){t.target===u&&d()}window.addEventListener("click",function(t){t.target===u&&d()});F.addEventListener("click",function(){d()});const X=document.querySelector(".list-prod"),h={keyword:"",category:"",page:1,limit:9};function D(t,e){localStorage.setItem(t,JSON.stringify(e))}function Z(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}D("defaultParameters",h);function tt(t,e){t.innerHTML=e}async function et(t){try{h.page=t;const{results:e}=await B(h);console.log("Products:",e);const s=ot(e);tt(X,s),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("data-js-product-id"),c=o.querySelector(".buy-btn"),r=e.find(g=>g._id.toString()===n);console.log("Selected productId:",n),st(n,e)})})}catch(e){console.error(e)}}function ot(t){return t.map(({_id:e,name:s,img:a,category:o,size:n,price:c,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}const L="added-item";function st(t,e){let s=Z(L);s.products||(s.products=[]);const a=e.find(o=>o._id.toString()===t);a?(s.products.push(a),D(L,s),console.log(s)):console.error("Selected product not found:",t)}const at=document.querySelector("#pagination"),nt={keyword:"",category:"",page:1,limit:9};B(nt).then(({results:t,totalPages:e})=>{ct(t,e)});function ct(t,e){if(e>1){let s=1;const a={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,page:s};new O(at,a).on("afterMove",n=>{s=n.page,et(n.page)})}}const k=document.querySelector(".popular-list");q(5).then(t=>{k.insertAdjacentHTML("beforeend",rt(t));function e(s){let a=s.target;if(a.closest(".popular-card")){const n=a.closest(".popular-card").getAttribute("data-js-product-id"),c=t.find(r=>r._id.toString()===n);V(c)}else a.closest(".btn-add")&&(a.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}k.addEventListener("click",e)}).catch(t=>{console.error(t)});function rt(t){return t.map(({_id:e,name:s,img:a,category:o,popularity:n,size:c,price:r})=>{const g=parseInt(n.toString()[0]);return`  <li class="popular-item">
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
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${a}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${o.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${g}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}M.defaults.baseURL="https://food-boutique.b.goit.study/api/";function it(){return M.get("products/discount").then(t=>t.data)}const x="product-discount";function dt(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function $(t){localStorage.setItem(x,JSON.stringify(t))}function lt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
            <use href="./images/icons.svg#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="./images/icons.svg#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`).join("")}let S=[];const E=document.querySelector(".products-discount");console.log(E);async function ut(){S=(await it()).slice(0,2);const e=lt(S);pt(e)}ut();function pt(t){E.insertAdjacentHTML("beforeend",t)}E.addEventListener("click",gt);function gt(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,a=dt();if(a.find(o=>s===o._id))$(a.filter(o=>s!==o._id));else{const o=S.find(n=>s===n._id);a.push(o),$(a)}}const i=document.querySelector(".feedback-form"),p="feedback-form-state",mt=j(()=>{const t={email:i.elements.email.value};localStorage.setItem(p,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{mt()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(p),i.reset()});const ft=()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}};ft();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(o=>{o.addEventListener("click",a)});function a(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const b=document.getElementById("scrollToTopBtn"),I=360;window.onscroll=function(){document.body.scrollTop>I||document.documentElement.scrollTop>I?b.classList.add("show"):b.classList.remove("show")};b.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
