import"./assets/styles-76586679.js";import{a as i,P as D}from"./assets/vendor-b592f4c5.js";const u="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=u;async function q({keyword:t,category:e,page:s,limit:c,sort:o}={}){const a={keyword:t,category:e,page:s,limit:c};return o&&o.key&&o.value&&(a[o.key]=o.value),(await i.get(`${u}products`,{params:a})).data}async function z(t){return(await i.get(`${u}products/${t}`)).data}async function A(t){return(await i.get(`${u}products/popular`,{params:{limit:t}})).data}const H=document.getElementById("countProducts");let _=0;document.getElementById("cartLink").addEventListener("click",()=>{H.innerHTML=`cart (${++_})`});const m="Java Script";console.log(m.length-1);console.log(m[m.length]);const I="https://food-boutique.b.goit.study/api/";function O(){return fetch(`${I}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(t,e,s,c,o){const a=new URLSearchParams({keyword:t,category:e,page:s,limit:c});return o&&o.key&&o.value&&(a[o.key]=o.value),fetch(`${I}products`,{params:a}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const f=document.querySelector(".list-prod"),N=document.querySelector(".filter-form");document.querySelector("input");const g=document.querySelector(".filter-select");document.querySelector(".filter-sort");function E(t){return Array.isArray(t)?t.map(({_id:e,name:s,img:c,category:o,size:a,price:r,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
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
      `).join(""):(console.error("Invalid results:",t),"")}async function R(){try{const t=await O();let e=document.createElement("option");e.innerHTML="Show all",g.appendChild(e),t.forEach(o=>{const a=document.createElement("option");a.value=o,a.text=o,g.appendChild(a)}),g.addEventListener("change",async function(){B({...l(),category:this.value==="Show all"?null:this.value,page:1});const o=l(),a=await y(o);console.log(a),f.innerHTML=E(a)});const s=l(),c=await y(s);f.innerHTML=E(c)}catch(t){console.error("Initialization error:",t)}}N.addEventListener("submit",async function(t){t.preventDefault();const e=this.elements.searchQuery.value.trim().toLowerCase().split(" "),s=this.elements.categories.value;this.elements.searchQuery.value=e||"",B({keyword:e,category:s==="Show all"?null:s,page:1,limit:6});const c=l(),o=await y(c);f.innerHTML=createCardMarkup(o),this.elements.searchQuery.value=""});function B(t){localStorage.setItem("filterData",JSON.stringify(t))}function l(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}R();const p=document.getElementById("modalProduct"),J=document.getElementById("closeModalProductBtn"),U=document.getElementById("addToCartBtn"),Q=document.getElementById("modalProductImage"),F=document.getElementById("modalProductName"),G=document.getElementById("modalProductCategory"),K=document.getElementById("modalProductSize"),W=document.getElementById("modalProductPopularity"),Y=document.getElementById("modalProductDescription"),V=document.getElementById("modalProductPrice");function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}Q.src=t.img,F.textContent=t.name,G.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",K.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",W.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",Y.textContent=`${t.desc}`,V.textContent=`$ ${t.price}`,document.body.style.overflow="hidden",p.style.display="block",window.addEventListener("click",b)}function d(){document.body.style.overflow="",p.style.display="none",window.removeEventListener("click",b)}J.addEventListener("click",d);window.addEventListener("click",b);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function b(t){t.target===p&&d()}window.addEventListener("click",function(t){t.target===p&&d()});U.addEventListener("click",function(){d()});const X=document.querySelector(".list-prod"),$={keyword:"",category:"",page:1,limit:9};function Z(t,e){t.innerHTML=e}async function C(t){try{$.page=t;const{results:e}=await q($);console.log("Products:",e);const s=tt(e);Z(X,s),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",async()=>{const a=o.getAttribute("data-js-product-id");try{const r=await z(a);r?T(r):console.error("Selected product not found:",a)}catch(r){console.error("Error fetching product by ID:",r)}})})}catch(e){console.error(e)}}function tt(t){return t.map(({_id:e,name:s,img:c,category:o,size:a,price:r,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
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
      `).join("")}C();const et=9;let ot=540;let h=1;const st=document.getElementById("pagination"),at=new D(st,{totalItems:ot,itemsPerPage:et,visiblePages:5,centerAlign:!0});at.on("beforeMove",t=>{h=t.page,M(h)});async function M(t){C(t)}M(h);const k=document.querySelector(".popular-list");A(5).then(t=>{k.insertAdjacentHTML("beforeend",ct(t));function e(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id"),r=t.find(n=>n._id.toString()===a);T(r)}else c.closest(".btn-add")&&(c.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}k.addEventListener("click",e)}).catch(t=>{console.error(t)});function ct(t){return t.map(({_id:e,name:s,img:c,category:o,popularity:a,size:r,price:n})=>{const j=parseInt(a.toString()[0]);return`  <li class="popular-item">
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
            <img src="${c}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${o.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${j}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function rt(){return i.get("products/discount").then(t=>t.data)}const x="product-discount";function nt(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function L(t){localStorage.setItem(x,JSON.stringify(t))}function it(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
`).join("")}let v=[];const P=document.querySelector(".products-discount");console.log(P);async function dt(){v=(await rt()).slice(0,2);const e=it(v);lt(e)}dt();function lt(t){P.insertAdjacentHTML("beforeend",t)}P.addEventListener("click",ut);function ut(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,c=nt();if(c.find(o=>s===o._id))L(c.filter(o=>s!==o._id));else{const o=v.find(a=>s===a._id);c.push(o),L(c)}}const w=document.getElementById("scrollToTopBtn"),S=360;window.onscroll=function(){document.body.scrollTop>S||document.documentElement.scrollTop>S?w.classList.add("show"):w.classList.remove("show")};w.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
