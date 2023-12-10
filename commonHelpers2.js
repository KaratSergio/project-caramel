import{g as _,a as w,b as j,s as u,d as z}from"./assets/get-api-5319586d.js";import{a as H,P as R,l as Q}from"./assets/vendor-8c378b12.js";class K{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return H.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class V{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}function I(t){const{_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r}=t;return`
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
      `}const S=document.querySelector(".list-prod"),G=document.querySelector(".filter-form"),f=document.querySelector(".filter-select"),p=new K,b=new V;_().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,f.appendChild(s)});const e=U();f.appendChild(e)});function U(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}G.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,p.searchQuery=e,console.log("foodApi.searchQuery:",p.searchQuery),p.getFoodList().then(function(s){b.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")),n=c.length;console.log(n),M(c)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});f.addEventListener("change",function(){const t=f.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),b.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,p.category=t,p.getFoodList().then(function(o){b.updateLsWithList(o,e);const s=JSON.parse(localStorage.getItem("products")),c=s.length;M(s)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});function M(t){let e=1;const o=1,s=90,c=JSON.parse(localStorage.getItem("products"));S.innerHTML="";let n,a;isNaN((o-1)*s)?n=0:n=(o-1)*s,a=+e*+s,console.log(n),console.log(a);try{if(c&&t>=1){let r=(t-1)*8;const l=c.slice(n+r,a+r);for(let i=0;i<l.length;i+=1){const J=I(l[i]);S.insertAdjacentHTML("beforeend",J)}}else if(c&&c.length>0){const r=c.slice(n,a);for(let l=0;l<r.length;l+=1){const i=I(r[l]);S.insertAdjacentHTML("beforeend",i)}}}catch(r){console.log(r)}}const y=document.getElementById("modalProduct"),W=document.getElementById("closeModalProductBtn"),Y=document.getElementById("addToCartBtn"),X=document.getElementById("modalProductImage"),Z=document.getElementById("modalProductName"),tt=document.getElementById("modalProductCategory"),et=document.getElementById("modalProductSize"),ot=document.getElementById("modalProductPopularity"),st=document.getElementById("modalProductDescription"),ct=document.getElementById("modalProductPrice");function P(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}X.src=t.img,Z.textContent=t.name,tt.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",et.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ot.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",st.textContent=`${t.desc}`,ct.textContent=`$ ${t.price}`,y.style.display="block",window.addEventListener("click",$)}function g(){document.body.style.overflow="",y.style.display="none",window.removeEventListener("click",$)}W.addEventListener("click",g);window.addEventListener("click",$);document.addEventListener("keydown",function(t){t.key==="Escape"&&g()});function $(t){t.target===y&&g()}window.addEventListener("click",function(t){t.target===y&&g()});Y.addEventListener("click",function(){g()});const nt=document.querySelector(".list-prod");function N(t,e){localStorage.setItem(t,JSON.stringify(e))}function at(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}function rt(t,e){t.innerHTML=e}async function k(t){const e=it(t);rt(nt,e),document.querySelectorAll(".prod-item").forEach(s=>{s.addEventListener("click",()=>{const c=s.getAttribute("data-js-product-id");s.querySelector(".buy-btn");const n=s.querySelector(".prod-img"),a=t.find(r=>r._id.toString()===c);console.log("Selected productId:",c),lt(c,t),n?P(a):console.error("Selected product not found:",c)})})}function it(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r})=>`
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
      `).join("")}const O="added-item";function lt(t,e){let o=at(O);o||(o=[]);const s=e.find(c=>c._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),N(O,o),console.log(o);const c=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);c&&(c.disabled=!0)}else console.error("Selected product not found:",t)}const dt=document.querySelector("#pagination");document.querySelector(".list-prod");const ut={keyword:"",category:"",page:1,limit:9};pt(ut);async function pt(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9},{results:c,totalPages:n}=await w(s);if(N("firstGet",c),k(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new R(dt,a).on("afterMove",async l=>{s.page=l.page;const{results:i}=await w(s);k(i)})}}const A=document.querySelector(".popular-list"),x="added-itemX";function gt(t){localStorage.setItem(x,JSON.stringify(t))}function mt(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.log(t)}}j(5).then(t=>{A.insertAdjacentHTML("beforeend",ft(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const n=s.closest(".popular-card").getAttribute("data-js-product-id");P(C(n,t))}else if(s.closest(".btn-add")){const n=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),a=C(n,t),r=mt();r.find(i=>i._id===a._id)||(r.push(a),gt(r)),s.closest(".btn-add").classList.add("visually-hidden")}}A.addEventListener("click",e)}).catch(t=>{console.error(t)});function C(t,e){return e.find(s=>s._id.toString()===t)}function ft(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:r,is10PercentOff:l})=>{const i=parseInt(n.toString()[0]);return`  <li class="popular-item">
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
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const F="product-discount";function D(){try{const t=localStorage.getItem(F);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function B(t){localStorage.setItem(F,JSON.stringify(t))}function ht(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"";return` <div class="card-product-discount" data-id="${o._id}">
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
        <h3 class="card-product-title">${o.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${o.price}</p>
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
`}).join("")}let h=[];const L=document.querySelector(".products-discount");async function yt(){h=(await z()).slice(0,2);const e=D(),o=Et(e),s=ht(h,o);vt(s)}yt();function vt(t){L.insertAdjacentHTML("beforeend",t)}L.addEventListener("click",St);L.addEventListener("click",bt);function St(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=D();if(n.find(a=>c===a._id))B(n.filter(a=>c!==a._id));else{const a=h.find(r=>c===r._id);n.push(a),B(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function bt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=h.find(n=>s===n._id);P(c)}function Et(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form"),m="feedback-form-state",q=document.getElementById("footer-button"),Pt=Q(()=>{const t={email:d.elements.email.value};localStorage.setItem(m,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{Pt(),v()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(m),d.reset(),v()});q.addEventListener("click",function(){const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}});const v=()=>{const t=d.elements.email.value,e=$t(t),o=t.trim()!=="";q.disabled=!(e&&o)},$t=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Lt=()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}};Lt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const E=document.getElementById("scrollToTopBtn"),T=360;window.onscroll=function(){document.body.scrollTop>T||document.documentElement.scrollTop>T?E.classList.add("show"):E.classList.remove("show")};E.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
