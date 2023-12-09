import{g as j,a as D,b as z}from"./assets/get-api-500edbd6.js";import{P as q,a as L}from"./assets/vendor-b592f4c5.js";const A=document.getElementById("countProducts");let H=0;document.getElementById("cartLink").addEventListener("click",()=>{A.innerHTML=`cart (${++H})`});const p="Java Script";console.log(p.length-1);console.log(p[p.length]);const S="https://food-boutique.b.goit.study/api/";function O(){return fetch(`${S}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(t,e,s,a,o){const c=new URLSearchParams({keyword:t,category:e,page:s,limit:a});return o&&o.key&&o.value&&(c[o.key]=o.value),fetch(`${S}products`,{params:c}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const m=document.querySelector(".list-prod"),_=document.querySelector(".filter-form");document.querySelector("input");const u=document.querySelector(".filter-select");document.querySelector(".filter-sort");function w(t){return Array.isArray(t)?t.map(({_id:e,name:s,img:a,category:o,size:c,price:r,popularity:n})=>`
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
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${n}</span></p>
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
      `).join(""):(console.error("Invalid results:",t),"")}async function N(){try{const t=await O();let e=document.createElement("option");e.innerHTML="Show all",u.appendChild(e),t.forEach(o=>{const c=document.createElement("option");c.value=o,c.text=o,u.appendChild(c)}),u.addEventListener("change",async function(){I({...d(),category:this.value==="Show all"?null:this.value,page:1});const o=d(),c=await g(o);console.log(c),m.innerHTML=w(c)});const s=d(),a=await g(s);m.innerHTML=w(a)}catch(t){console.error("Initialization error:",t)}}_.addEventListener("submit",async function(t){t.preventDefault();const e=this.elements.searchQuery.value.trim().toLowerCase().split(" "),s=this.elements.categories.value;this.elements.searchQuery.value=e||"",I({keyword:e,category:s==="Show all"?null:s,page:1,limit:6});const a=d(),o=await g(a);m.innerHTML=createCardMarkup(o),this.elements.searchQuery.value=""});function I(t){localStorage.setItem("filterData",JSON.stringify(t))}function d(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}N();const l=document.getElementById("modalProduct"),J=document.getElementById("closeModalProductBtn"),Q=document.getElementById("addToCartBtn"),R=document.getElementById("modalProductImage"),U=document.getElementById("modalProductName"),F=document.getElementById("modalProductCategory"),G=document.getElementById("modalProductSize"),K=document.getElementById("modalProductPopularity"),W=document.getElementById("modalProductDescription"),Y=document.getElementById("modalProductPrice");function B(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}R.src=t.img,U.textContent=t.name,F.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",G.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",K.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",W.textContent=`${t.desc}`,Y.textContent=`$ ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",v)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",v)}J.addEventListener("click",i);window.addEventListener("click",v);document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function v(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});Q.addEventListener("click",function(){i()});const V=document.querySelector(".list-prod"),b={keyword:"",category:"",page:1,limit:9};function X(t,e){t.innerHTML=e}async function T(t){try{b.page=t;const{results:e}=await j(b);console.log("Products:",e);const s=Z(e);X(V,s),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-js-product-id");try{const r=await D(c);r?B(r):console.error("Selected product not found:",c)}catch(r){console.error("Error fetching product by ID:",r)}})})}catch(e){console.error(e)}}function Z(t){return t.map(({_id:e,name:s,img:a,category:o,size:c,price:r,popularity:n})=>`
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
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${n}</span></p>
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
      `).join("")}T();const tt=9;let et=540;let y=1;const ot=document.getElementById("pagination"),st=new q(ot,{totalItems:et,itemsPerPage:tt,visiblePages:5,centerAlign:!0});st.on("beforeMove",t=>{y=t.page,C(y)});async function C(t){T(t)}C(y);const E=document.querySelector(".popular-list");z(5).then(t=>{E.insertAdjacentHTML("beforeend",at(t));function e(s){let a=s.target;if(a.closest(".popular-card")){const c=a.closest(".popular-card").getAttribute("data-js-product-id"),r=t.find(n=>n._id.toString()===c);B(r)}else a.closest(".btn-add")&&(a.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}E.addEventListener("click",e)}).catch(t=>{console.error(t)});function at(t){return t.map(({_id:e,name:s,img:a,category:o,popularity:c,size:r,price:n})=>{const x=parseInt(c.toString()[0]);return`  <li class="popular-item">
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
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${x}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}L.defaults.baseURL="https://food-boutique.b.goit.study/api/";function ct(){return L.get("products/discount").then(t=>t.data)}const M="product-discount";function rt(){try{const t=localStorage.getItem(M);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function $(t){localStorage.setItem(M,JSON.stringify(t))}function nt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
`).join("")}let f=[];const P=document.querySelector(".products-discount");console.log(P);async function it(){f=(await ct()).slice(0,2);const e=nt(f);dt(e)}it();function dt(t){P.insertAdjacentHTML("beforeend",t)}P.addEventListener("click",lt);function lt(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,a=rt();if(a.find(o=>s===o._id))$(a.filter(o=>s!==o._id));else{const o=f.find(c=>s===c._id);a.push(o),$(a)}}const h=document.getElementById("scrollToTopBtn"),k=360;window.onscroll=function(){document.body.scrollTop>k||document.documentElement.scrollTop>k?h.classList.add("show"):h.classList.remove("show")};h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
