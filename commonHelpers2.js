import{g as m,S as d,b as N,m as j,s as h,d as f,e as V,a as u,f as D,h as Z,i as tt,j as et}from"./assets/STORAGE-faa10d26.js";import{P as ot,a as st,l as ct}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const nt=document.getElementById("removeFromIcon");nt.classList.add("visually-hidden");const k=document.getElementById("modalProduct"),at=document.getElementById("closeModalProductBtn"),w=document.getElementById("addToCartBtn"),P=document.getElementById("removeFrom"),rt=document.getElementById("modalProductImage"),dt=document.getElementById("modalProductName"),it=document.getElementById("modalProductCategory"),lt=document.getElementById("modalProductSize"),ut=document.getElementById("modalProductPopularity"),pt=document.getElementById("modalProductDescription"),mt=document.getElementById("modalProductPrice"),gt=document.querySelector(".modal-overlay");const G=document.getElementById("scrollToTopBtn");function T(t){try{let s=function(){e.push(t),n(e)},c=function(){e.splice(o,1),n(e)},n=function(a){h(d,e),f(),a=N(e,t),j(a,w,P)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}k.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",B),w.addEventListener("click",s),P.addEventListener("click",c);const e=m(d);let o=N(e,t);j(o,w,P),G.style.display="none";rt.src=t.img,dt.textContent=t.name,it.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",lt.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ut.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",pt.textContent=`${t.desc}`,mt.textContent=`$ ${t.price}`,k.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",B)}catch{console.log("no proructs")}}function O(){document.body.style.overflow="",k.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",B),G.style.display="block";}at.addEventListener("click",O);document.addEventListener("keydown",function(t){t.key==="Escape"&&O()});function B(t){t.target===gt&&O()}const _=document.querySelector(".list-prod"),J="added-item",U="firstGet";function A(t,e){localStorage.setItem(t,JSON.stringify(e))}function K(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function ht(t,e){t.innerHTML=e}async function z(t){const e=bt(t);ht(_,e)}const S=K(U);console.log(S);const W=vt(S);console.log(W);const x=W.includes(S._id);console.log(x);_.addEventListener("click",ft);_.addEventListener("click",yt);function ft(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const n=K(U);if(console.log(n),n.find(a=>c===a._id)){const a=n.filter(r=>c!==r._id);A(J,a)}else{const a=products.find(r=>c===r._id);n.push(a),A(J,n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function yt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");S.find(c=>s===c._id),V(s).then(c=>{T(c)}).catch(c=>{console.error(c)})}function vt(t=[]){return t.map(e=>e._id)}function bt(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r,is10PercentOff:i})=>{const p=x?"":"is-hidden",L=x?"is-hidden":"",X=St(i);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: ${X};">
              <use href="${u}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${p}" width="18" height="18">
            <use href="${u}#check"></use>
            </svg>
            <svg class="card-product-svg ${L}" width="18" height="18">
            <use href="${u}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function St(t){return console.log(t),t===!1?"visible":"hidden"}const R=document.querySelector("#pagination"),Et=document.querySelector(".list-prod-container"),Lt=document.querySelector(".filter-nomatches-container");F("first");async function F(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await D(s);if(n===0&&(Et.classList.add("visually-hidden"),Lt.classList.remove("visually-hidden"),R.classList.add("visually-hidden")),A("firstGet",c),z(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new ot(R,a).on("afterMove",async i=>{s.page=i.page;const{results:p}=await D(s);z(p)})}}class wt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return st.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Pt{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const $t=document.querySelector(".filter-form"),v=document.querySelector(".filter-select"),g=new wt,M=new Pt;Z().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,v.appendChild(s)});const e=It();v.appendChild(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}$t.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,g.searchQuery=e,console.log("foodApi.searchQuery:",g.searchQuery),g.getFoodList().then(function(s){M.updateLsWithList(s,o);const n=JSON.parse(localStorage.getItem("products")).length;console.log(n),F(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});v.addEventListener("change",function(){const t=v.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),M.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,g.category=t,g.getFoodList().then(function(o){M.updateLsWithList(o,e);const c=JSON.parse(localStorage.getItem("products")).length;console.log(e),F(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const H=document.querySelector(".popular-product-list");tt(5).then(t=>{H.insertAdjacentHTML("beforeend",At(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const c=s.getAttribute("data-js-button"),n=$(c,t);I(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id");kt(a)}else if(c.closest(".button-add-product")){const n=c.closest(".button-add-product").previousElementSibling,a=n.getAttribute("data-js-button"),r=$(a,t),i=m(d);I(r._id)||(i.push(r),h(d,i),f()),c.closest(".button-add-product").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".button-remove-product")){const n=c.closest(".button-remove-product").getAttribute("data-js-button"),a=$(n,t),r=m(d),i=I(a._id);h(d,r.filter(p=>i._id!==p._id)),f(),c.closest(".button-remove-product").classList.add("visually-hidden"),c.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}H.addEventListener("click",o)}).catch(t=>{console.error(t)});function kt(t){V(t).then(e=>{T(e)}).catch(e=>{console.error(e)})}function $(t,e){return e.find(s=>s._id.toString()===t)}function I(t){return m(d).find(o=>o._id===t)}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function At(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:r,is10PercentOff:i})=>{const p=parseInt(n.toString()[0]),L=Bt(o,14);return`  <li class="popular-item">
            <button class="button-remove-product" data-js-button=${e}>
        <svg class="svg-remove-product" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </button>
      <button class="button-add-product" type="button" >
        <svg class="svg-add-product" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${L}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function xt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=Mt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
`}).join("")}function Mt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let b=[];const q=document.querySelector(".products-discount");async function Ct(){b=(await et()).slice(0,2);const e=m(d),o=Ft(e),s=xt(b,o);Tt(s)}Ct();function Tt(t){q.insertAdjacentHTML("beforeend",t)}q.addEventListener("click",Ot);q.addEventListener("click",_t);function Ot(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=m(d);if(n.find(a=>c===a._id))h(d,n.filter(a=>c!==a._id)),f();else{const a=b.find(r=>c===r._id);n.push(a),h(d,n),f()}s.forEach(a=>{a.classList.toggle("is-hidden")})}function _t(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=b.find(n=>s===n._id);T(c)}function Ft(t=[]){return t.map(e=>e._id)}const l=document.querySelector(".feedback-form"),y="feedback-form-state",Y=document.getElementById("footer-button"),qt=ct(()=>{const t={email:l.elements.email.value};localStorage.setItem(y,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e}});l.addEventListener("input",()=>{qt(),E()});l.addEventListener("submit",t=>{t.preventDefault();const e={email:l.elements.email.value};console.log(e),localStorage.removeItem(y),l.reset(),E()});Y.addEventListener("click",function(){const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,E()}});const E=()=>{const t=l.elements.email.value,e=Nt(t),o=t.trim()!=="";Y.disabled=!(e&&o)},Nt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),jt=()=>{const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,E()}};jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const C=document.getElementById("scrollToTopBtn"),Q=360;window.onscroll=function(){document.body.scrollTop>Q||document.documentElement.scrollTop>Q?C.classList.add("show"):C.classList.remove("show")};C.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
