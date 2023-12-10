import{g as q,a as L,b as j,s as u,d as z}from"./assets/get-api-5319586d.js";import{a as H,P as R,l as Q}from"./assets/vendor-8c378b12.js";class K{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([s,o])=>`${encodeURIComponent(s)}=${encodeURIComponent(o)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},s=this.paramsFromApi(e);return H.get(`${this.URL}/products?${s}`).then(o=>o.data)}}class V{updateLsWithList(e,s){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(s))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}function I(t){const{_id:e,name:s,img:o,category:a,size:c,price:n,popularity:r}=t;return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${o} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
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
      `}const S=document.querySelector(".list-prod"),G=document.querySelector(".filter-form"),f=document.querySelector(".filter-select"),p=new K,b=new V;q().then(t=>{t.forEach(s=>{const o=document.createElement("option");o.value=s,o.textContent=s,f.appendChild(o)});const e=U();f.appendChild(e)});function U(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}G.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let s=JSON.parse(localStorage.getItem("options"))||{};s.keyword=e,p.searchQuery=e,console.log("foodApi.searchQuery:",p.searchQuery),p.getFoodList().then(function(o){b.updateLsWithList(o,s);const a=JSON.parse(localStorage.getItem("products")),c=a.length;console.log(c),T(a)}).catch(function(o){console.error("Error fetching food list:",o.message)})}catch(s){console.error("Error:",s.message)}});f.addEventListener("change",function(){const t=f.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),b.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,p.category=t,p.getFoodList().then(function(s){b.updateLsWithList(s,e);const o=JSON.parse(localStorage.getItem("products")),a=o.length;T(o)}).catch(function(s){console.error("Error fetching list:",s.message)}))}catch(e){console.error("Error:",e.message)}});function T(t){let e=1;const s=1,o=90,a=JSON.parse(localStorage.getItem("products"));S.innerHTML="";let c,n;isNaN((s-1)*o)?c=0:c=(s-1)*o,n=+e*+o,console.log(c),console.log(n);try{if(a&&t>=1){let r=(t-1)*8;const l=a.slice(c+r,n+r);for(let i=0;i<l.length;i+=1){const _=I(l[i]);S.insertAdjacentHTML("beforeend",_)}}else if(a&&a.length>0){const r=a.slice(c,n);for(let l=0;l<r.length;l+=1){const i=I(r[l]);S.insertAdjacentHTML("beforeend",i)}}}catch(r){console.log(r)}}const y=document.getElementById("modalProduct"),W=document.getElementById("closeModalProductBtn"),Y=document.getElementById("addToCartBtn"),X=document.getElementById("modalProductImage"),Z=document.getElementById("modalProductName"),tt=document.getElementById("modalProductCategory"),et=document.getElementById("modalProductSize"),ot=document.getElementById("modalProductPopularity"),st=document.getElementById("modalProductDescription"),at=document.getElementById("modalProductPrice");function P(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}X.src=t.img,Z.textContent=t.name,tt.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",et.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ot.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",st.textContent=`${t.desc}`,at.textContent=`$ ${t.price}`,y.style.display="block",window.addEventListener("click",$)}function g(){document.body.style.overflow="",y.style.display="none",window.removeEventListener("click",$)}W.addEventListener("click",g);window.addEventListener("click",$);document.addEventListener("keydown",function(t){t.key==="Escape"&&g()});function $(t){t.target===y&&g()}window.addEventListener("click",function(t){t.target===y&&g()});Y.addEventListener("click",function(){g()});const ct=document.querySelector(".list-prod");function x(t,e){localStorage.setItem(t,JSON.stringify(e))}function nt(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}function rt(t,e){t.innerHTML=e}async function k(t){const e=it(t);rt(ct,e),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-js-product-id");o.querySelector(".buy-btn");const c=o.querySelector(".prod-img"),n=t.find(r=>r._id.toString()===a);console.log("Selected productId:",a),lt(a,t),c?P(n):console.error("Selected product not found:",a)})})}function it(t){return t.map(({_id:e,name:s,img:o,category:a,size:c,price:n,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${o} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
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
      `).join("")}const O="added-item";function lt(t,e){let s=nt(O);s||(s=[]);const o=e.find(a=>a._id.toString()===t);if(console.log(`tut ${o}`),o){s.push(o),x(O,s),console.log(s);const a=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);a&&(a.disabled=!0)}else console.error("Selected product not found:",t)}const dt=document.querySelector("#pagination"),ut={keyword:"",category:"",page:1,limit:9};pt(ut);async function pt(t){const{keyword:e,category:s}=t,o={keyword:e||"",category:s||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?o.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(o.limit=8);const{results:a,totalPages:c}=await L(o);if(x("firstGet",a),k(a),c>1){const n={totalItems:a.length*c,itemsPerPage:o.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new R(dt,n).on("afterMove",async l=>{o.page=l.page;const{results:i}=await L(o);k(i)})}}const A=document.querySelector(".popular-list"),N="added-itemX";function gt(t){localStorage.setItem(N,JSON.stringify(t))}function mt(){try{const t=localStorage.getItem(N);return t?JSON.parse(t):[]}catch(t){console.log(t)}}j(5).then(t=>{A.insertAdjacentHTML("beforeend",ft(t));function e(s){let o=s.target;if(o.closest(".popular-card")){const c=o.closest(".popular-card").getAttribute("data-js-product-id");P(C(c,t))}else if(o.closest(".btn-add")){const c=o.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),n=C(c,t),r=mt();r.find(i=>i._id===n._id)||(r.push(n),gt(r)),o.closest(".btn-add").classList.add("visually-hidden")}}A.addEventListener("click",e)}).catch(t=>{console.error(t)});function C(t,e){return e.find(o=>o._id.toString()===t)}function ft(t){return t.map(({_id:e,name:s,img:o,category:a,popularity:c,size:n,price:r,is10PercentOff:l})=>{const i=parseInt(c.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${o}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${a.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const F="product-discount";function D(){try{const t=localStorage.getItem(F);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function M(t){localStorage.setItem(F,JSON.stringify(t))}function ht(t=[],e=[]){return t.map(s=>{const o=e.includes(s._id),a=o?"":"is-hidden",c=o?"is-hidden":"";return` <div class="card-product-discount" data-id="${s._id}">
      ${s.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${u}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${s.img}"
            width="105" height="105" alt="${s.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${s.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${s.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${a}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${c}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}let h=[];const w=document.querySelector(".products-discount");async function yt(){h=(await z()).slice(0,2);const e=D(),s=Et(e),o=ht(h,s);vt(o)}yt();function vt(t){w.insertAdjacentHTML("beforeend",t)}w.addEventListener("click",St);w.addEventListener("click",bt);function St(t){const e=t.target.closest(".card-product-btn");if(!e)return;const s=t.target.closest(".card-product-discount"),o=e.querySelectorAll("svg"),a=s.dataset.id,c=D();if(c.find(n=>a===n._id))M(c.filter(n=>a!==n._id));else{const n=h.find(r=>a===r._id);c.push(n),M(c)}o.forEach(n=>{n.classList.toggle("is-hidden")})}function bt(t){const e=t.target.closest(".card-product-discount"),s=t.target.closest(".card-product-btn");if(!e||s)return;const o=e.dataset.id,a=h.find(c=>o===c._id);P(a)}function Et(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form"),m="feedback-form-state",J=document.getElementById("footer-button"),Pt=Q(()=>{const t={email:d.elements.email.value};localStorage.setItem(m,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{Pt(),v()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(m),d.reset(),v()});J.addEventListener("click",function(){const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}});const v=()=>{const t=d.elements.email.value,e=$t(t),s=t.trim()!=="";J.disabled=!(e&&s)},$t=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),wt=()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}};wt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(a=>{a.addEventListener("click",o)});function o(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const E=document.getElementById("scrollToTopBtn"),B=360;window.onscroll=function(){document.body.scrollTop>B||document.documentElement.scrollTop>B?E.classList.add("show"):E.classList.remove("show")};E.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
