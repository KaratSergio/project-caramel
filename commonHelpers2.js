import{g as G,s as u,a as M,b as Q,d as K,e as V}from"./assets/get-api-2670d13e.js";import{a as U,P as W,l as Y}from"./assets/vendor-4daa000e.js";class X{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return U.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Z{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}function B(t){const{_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r}=t;return`
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
      `}const b=document.querySelector(".list-prod"),tt=document.querySelector(".filter-form"),f=document.querySelector(".filter-select"),p=new X,E=new Z;G().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,f.appendChild(s)});const e=et();f.appendChild(e)});function et(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}tt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,p.searchQuery=e,console.log("foodApi.searchQuery:",p.searchQuery),p.getFoodList().then(function(s){E.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")),n=c.length;console.log(n),F(c)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});f.addEventListener("change",function(){const t=f.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),E.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,p.category=t,p.getFoodList().then(function(o){E.updateLsWithList(o,e);const s=JSON.parse(localStorage.getItem("products")),c=s.length;F(s)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});function F(t){let e=1;const o=1,s=90,c=JSON.parse(localStorage.getItem("products"));b.innerHTML="";let n,a;isNaN((o-1)*s)?n=0:n=(o-1)*s,a=+e*+s,console.log(n),console.log(a);try{if(c&&t>=1){let r=(t-1)*8;const l=c.slice(n+r,a+r);for(let i=0;i<l.length;i+=1){const S=B(l[i]);b.insertAdjacentHTML("beforeend",S)}}else if(c&&c.length>0){const r=c.slice(n,a);for(let l=0;l<r.length;l+=1){const i=B(r[l]);b.insertAdjacentHTML("beforeend",i)}}}catch(r){console.log(r)}}const y=document.getElementById("modalProduct"),ot=document.getElementById("closeModalProductBtn"),st=document.getElementById("addToCartBtn"),ct=document.getElementById("modalProductImage"),nt=document.getElementById("modalProductName"),at=document.getElementById("modalProductCategory"),rt=document.getElementById("modalProductSize"),it=document.getElementById("modalProductPopularity"),lt=document.getElementById("modalProductDescription"),dt=document.getElementById("modalProductPrice");function L(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}ct.src=t.img,nt.textContent=t.name,at.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",rt.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",it.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",lt.textContent=`${t.desc}`,dt.textContent=`$ ${t.price}`,y.style.display="block",window.addEventListener("click",k)}function g(){document.body.style.overflow="",y.style.display="none",window.removeEventListener("click",k)}ot.addEventListener("click",g);window.addEventListener("click",k);document.addEventListener("keydown",function(t){t.key==="Escape"&&g()});function k(t){t.target===y&&g()}window.addEventListener("click",function(t){t.target===y&&g()});st.addEventListener("click",function(){g()});const I=document.querySelector(".list-prod"),C="added-item",D="firstGet";function $(t,e){localStorage.setItem(t,JSON.stringify(e))}function J(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function ut(t,e){t.innerHTML=e}async function T(t){const e=ft(t);ut(I,e)}const O=J(D);console.log(O);const j=mt(O);console.log(j);const w=j.includes(O._id);console.log(w);I.addEventListener("click",pt);I.addEventListener("click",gt);function pt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item");console.log(o);const s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const n=J(D);if(console.log(n),n.find(a=>c===a._id)){const a=n.filter(r=>c!==r._id);$(C,a)}else{const a=products.find(r=>c===r._id);n.push(a),$(C,n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function gt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id"),c=products.find(n=>s===n._id);L(c)}function mt(t=[]){return t.map(e=>e._id)}function ft(t){const e=w?"":"is-hidden",o=w?"is-hidden":"";return t.map(({_id:s,name:c,img:n,category:a,size:r,price:l,popularity:i})=>`
        <li class="prod-item" data-js-product-id=${s}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="${u}#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${n} alt=${c} loading="lazy">
          </div>
          <h3 class="title-prod">${c}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${i}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${l}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${e}" width="18" height="18">
            <use href="${u}#check"></use>
             </svg>
             <svg class="card-product-svg ${o}" width="18" height="18">
             <use href="${u}#shopping-cart"></use>
             </svg>
            </button>
          </div>
        </li>
      `).join("")}const ht=document.querySelector("#pagination"),yt={keyword:"",category:"",page:1,limit:9};vt(yt);async function vt(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await M(s);if($("firstGet",c),T(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new W(ht,a).on("afterMove",async l=>{s.page=l.page;const{results:i}=await M(s);T(i)})}}const x=document.querySelector(".popular-list"),q="added-itemX";function St(t){localStorage.setItem(q,JSON.stringify(t))}function bt(){try{const t=localStorage.getItem(q);return t?JSON.parse(t):[]}catch(t){console.log(t)}}Q(5).then(t=>{x.insertAdjacentHTML("beforeend",wt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const n=s.closest(".popular-card").getAttribute("data-js-product-id");K(n).then(a=>{L(a)}).catch(a=>{console.error(a)})}else if(s.closest(".btn-add")){const n=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),a=Et(n,t),r=bt();r.find(i=>i._id===a._id)||(r.push(a),St(r)),s.closest(".btn-add").classList.add("visually-hidden")}}x.addEventListener("click",e)}).catch(t=>{console.error(t)});function Et(t,e){return e.find(s=>s._id.toString()===t)}function $t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function wt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:r,is10PercentOff:l})=>{const i=parseInt(n.toString()[0]),S=$t(o,14);return`  <li class="popular-item">
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
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${S}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const z="product-discount";function H(){try{const t=localStorage.getItem(z);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function N(t){localStorage.setItem(z,JSON.stringify(t))}function Pt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=Lt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${u}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${a}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Lt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let h=[];const A=document.querySelector(".products-discount");async function kt(){h=(await V()).slice(0,2);const e=H(),o=Mt(e),s=Pt(h,o);It(s)}kt();function It(t){A.insertAdjacentHTML("beforeend",t)}A.addEventListener("click",Ot);A.addEventListener("click",At);function Ot(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=H();if(n.find(a=>c===a._id))N(n.filter(a=>c!==a._id));else{const a=h.find(r=>c===r._id);n.push(a),N(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function At(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=h.find(n=>s===n._id);L(c)}function Mt(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form"),m="feedback-form-state",R=document.getElementById("footer-button"),Bt=Y(()=>{const t={email:d.elements.email.value};localStorage.setItem(m,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{Bt(),v()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(m),d.reset(),v()});R.addEventListener("click",function(){const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}});const v=()=>{const t=d.elements.email.value,e=Ct(t),o=t.trim()!=="";R.disabled=!(e&&o)},Ct=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Tt=()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}};Tt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow="hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow="auto"}})();const P=document.getElementById("scrollToTopBtn"),_=360;window.onscroll=function(){document.body.scrollTop>_||document.documentElement.scrollTop>_?P.classList.add("show"):P.classList.remove("show")};P.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
