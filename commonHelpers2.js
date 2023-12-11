import{g as Y,a as R,s as u,b as N,d as X,e as Z}from"./assets/get-api-412c3cbb.js";import{a as tt,P as et,l as ot}from"./assets/vendor-8c378b12.js";class st{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return tt.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class ct{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}function D(t){const{_id:e,name:o,img:s,category:c,size:a,price:n,popularity:r}=t;return`
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
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
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
      `}const P=document.querySelector(".list-prod"),nt=document.querySelector(".filter-form"),y=document.querySelector(".filter-select"),g=new st,$=new ct;Y().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,y.appendChild(s)});const e=at();y.appendChild(e)});function at(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}nt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,g.searchQuery=e,console.log("foodApi.searchQuery:",g.searchQuery),g.getFoodList().then(function(s){$.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")),a=c.length;console.log(a),Q(c)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});y.addEventListener("change",function(){const t=y.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),$.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,g.category=t,g.getFoodList().then(function(o){$.updateLsWithList(o,e);const s=JSON.parse(localStorage.getItem("products")),c=s.length;Q(s)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});function Q(t){let e=1;const o=1,s=90,c=JSON.parse(localStorage.getItem("products"));P.innerHTML="";let a,n;isNaN((o-1)*s)?a=0:a=(o-1)*s,n=+e*+s,console.log(a),console.log(n);try{if(c&&t>=1){let r=(t-1)*8;const d=c.slice(a+r,n+r);for(let i=0;i<d.length;i+=1){const L=D(d[i]);P.insertAdjacentHTML("beforeend",L)}}else if(c&&c.length>0){const r=c.slice(a,n);for(let d=0;d<r.length;d+=1){const i=D(r[d]);P.insertAdjacentHTML("beforeend",i)}}}catch(r){console.log(r)}}const G="added-item";function m(t){localStorage.setItem(G,JSON.stringify(t))}function p(){try{const t=localStorage.getItem(G);return t?JSON.parse(t):[]}catch(t){console.log(t)}}const q=document.getElementById("addToCartIcon"),w=document.getElementById("removeFromIcon");w.classList.add("visually-hidden");const v=document.getElementById("modalProduct"),rt=document.getElementById("closeModalProductBtn"),I=document.getElementById("addToCartBtn"),k=document.getElementById("removeFrom"),dt=document.getElementById("modalProductImage"),it=document.getElementById("modalProductName"),lt=document.getElementById("modalProductCategory"),ut=document.getElementById("modalProductSize"),pt=document.getElementById("modalProductPopularity"),mt=document.getElementById("modalProductDescription"),gt=document.getElementById("modalProductPrice");let f=!1;function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}v.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",A),I.addEventListener("click",()=>{const e=p();e.find(s=>s._id===t._id)||(e.push(t),m(e),C(!0),f=!0)}),k.addEventListener("click",()=>{ft(t,!0),C(!1),f=!1}),dt.src=t.img,it.textContent=t.name,lt.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",ut.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",pt.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",mt.textContent=`${t.desc}`,gt.textContent=`$ ${t.price}`,v.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",A)}function ft(t,e=!1){const o=p(),s=o.find(c=>c._id===t._id);e?s&&m(o.filter(c=>c._id!==t._id)):s||(o.push(t),m(o))}function _(){document.body.style.overflow="",v.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",A),f=!1}rt.addEventListener("click",_);document.addEventListener("keydown",function(t){t.key==="Escape"&&_()});function A(t){t.target===v&&_()}function C(t){const e=p();t?(q.classList.add("added-to-cart"),w.classList.remove("added-to-cart")):(q.classList.remove("added-to-cart"),w.classList.add("added-to-cart")),e.length>0?(k.classList.remove("visually-hidden"),I.classList.add("visually-hidden")):(k.classList.add("visually-hidden"),I.classList.remove("visually-hidden"))}document.addEventListener("DOMContentLoaded",()=>{p().find(o=>o._id===product._id)&&(f=!0),C(f)});const x=document.querySelector(".list-prod"),j="added-item",V="firstGet";function B(t,e){localStorage.setItem(t,JSON.stringify(e))}function K(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function ht(t,e){t.innerHTML=e}async function J(t){const e=St(t);ht(x,e)}const S=K(V);console.log(S);const U=bt(S);console.log(U);const M=U.includes(S._id);console.log(M);x.addEventListener("click",yt);x.addEventListener("click",vt);function yt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const a=K(V);if(console.log(a),a.find(n=>c===n._id)){const n=a.filter(r=>c!==r._id);B(j,n)}else{const n=products.find(r=>c===r._id);a.push(n),B(j,a)}s.forEach(n=>{n.classList.toggle("is-hidden")})}function vt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");S.find(c=>s===c._id),R(s).then(c=>{T(c)}).catch(c=>{console.error(c)})}function bt(t=[]){return t.map(e=>e._id)}function St(t){const e=M?"":"is-hidden",o=M?"is-hidden":"";return t.map(({_id:s,name:c,img:a,category:n,size:r,price:d,popularity:i})=>`
        <li class="prod-item" data-js-product-id=${s}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="${u}#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${c} loading="lazy">
          </div>
          <h3 class="title-prod">${c}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${n}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${i}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${d}</p>
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
      `).join("")}const Et=document.querySelector("#pagination");Lt();async function Lt(t,e){const o={keyword:t||"",category:e||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?o.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(o.limit=8);const{results:s,totalPages:c}=await N(o);if(B("firstGet",s),J(s),c>1){const a={totalItems:s.length*c,itemsPerPage:o.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new et(Et,a).on("afterMove",async r=>{o.page=r.page;const{results:d}=await N(o);J(d)})}}const z=document.querySelector(".popular-list");X(5).then(t=>{z.insertAdjacentHTML("beforeend",wt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const a=s.closest(".popular-card").getAttribute("data-js-product-id");R(a).then(n=>{T(n)}).catch(n=>{console.error(n)})}else if(s.closest(".btn-add")){const a=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),n=Pt(a,t),r=p();r.find(i=>i._id===n._id)||(r.push(n),m(r)),s.closest(".btn-add").classList.add("visually-hidden")}}z.addEventListener("click",e)}).catch(t=>{console.error(t)});function Pt(t,e){return e.find(s=>s._id.toString()===t)}function $t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function wt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:a,size:n,price:r,is10PercentOff:d})=>{const i=parseInt(a.toString()[0]),L=$t(o,14);return`  <li class="popular-item">
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
            <h3 class="popular-card-title">${L}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function It(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",a=s?"is-hidden":"",n=kt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
        <h3 class="card-product-title">${n}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${a}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function kt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let b=[];const F=document.querySelector(".products-discount");async function At(){b=(await Z()).slice(0,2);const e=p(),o=Ot(e),s=It(b,o);Ct(s)}At();function Ct(t){F.insertAdjacentHTML("beforeend",t)}F.addEventListener("click",Bt);F.addEventListener("click",Mt);function Bt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,a=p();if(a.find(n=>c===n._id))m(a.filter(n=>c!==n._id));else{const n=b.find(r=>c===r._id);a.push(n),m(a)}s.forEach(n=>{n.classList.toggle("is-hidden")})}function Mt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=b.find(a=>s===a._id);T(c)}function Ot(t=[]){return t.map(e=>e._id)}const l=document.querySelector(".feedback-form"),h="feedback-form-state",W=document.getElementById("footer-button"),Tt=ot(()=>{const t={email:l.elements.email.value};localStorage.setItem(h,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e}});l.addEventListener("input",()=>{Tt(),E()});l.addEventListener("submit",t=>{t.preventDefault();const e={email:l.elements.email.value};console.log(e),localStorage.removeItem(h),l.reset(),E()});W.addEventListener("click",function(){const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,E()}});const E=()=>{const t=l.elements.email.value,e=_t(t),o=t.trim()!=="";W.disabled=!(e&&o)},_t=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),xt=()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,E()}};xt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const O=document.getElementById("scrollToTopBtn"),H=360;window.onscroll=function(){document.body.scrollTop>H||document.documentElement.scrollTop>H?O.classList.add("show"):O.classList.remove("show")};O.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
