import{g as u,S as i,b as F,m as q,s as p,d as f,e as H,a as m,f as j,h as W,i as G,j as Y}from"./assets/STORAGE-be40333c.js";import{P as X,a as Z,l as tt}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const et=document.getElementById("removeFromIcon");et.classList.add("visually-hidden");const $=document.getElementById("modalProduct"),ot=document.getElementById("closeModalProductBtn"),L=document.getElementById("addToCartBtn"),P=document.getElementById("removeFrom"),st=document.getElementById("modalProductImage"),ct=document.getElementById("modalProductName"),nt=document.getElementById("modalProductCategory"),rt=document.getElementById("modalProductSize"),at=document.getElementById("modalProductPopularity"),dt=document.getElementById("modalProductDescription"),it=document.getElementById("modalProductPrice"),lt=document.querySelector(".modal-overlay");const Q=document.getElementById("scrollToTopBtn");function C(t){try{let s=function(){e.push(t),n(e)},c=function(){e.splice(o,1),n(e)},n=function(r){p(i,e),f(),r=F(e,t),q(r,L,P)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",B),L.addEventListener("click",s),P.addEventListener("click",c);const e=u(i);let o=F(e,t);q(o,L,P),Q.style.display="none";st.src=t.img,ct.textContent=t.name,nt.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",rt.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",at.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",dt.textContent=`${t.desc}`,it.textContent=`$ ${t.price}`,$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",B)}catch{console.log("no proructs")}}function M(){document.body.style.overflow="",$.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",B),Q.style.display="block";}ot.addEventListener("click",M);document.addEventListener("keydown",function(t){t.key==="Escape"&&M()});function B(t){t.target===lt&&M()}const T=document.querySelector(".list-prod"),v="added-item",ut=[];p(v,ut);function pt(t,e){t.innerHTML=e}async function N(t){const e=yt(t);pt(T,e)}const V=u("firstset"),mt=ft(V),D=mt.includes(V._id);T.addEventListener("click",gt);T.addEventListener("click",ht);function gt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id"),n=u(v),r=n.findIndex(a=>a._id===c);if(r!==-1)n.splice(r,1),p(v,n);else{const a=u("firstset").find(d=>d._id===c);a&&(n.push(a),p(v,n))}s.forEach(a=>{a.classList.toggle("is-hidden")})}function ht(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");H(s).then(c=>{C(c)}).catch(c=>{console.error(c)})}function ft(t=[]){return t.map(e=>e._id)}function yt(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:r,popularity:a,is10PercentOff:d})=>{const g=D?"":"is-hidden",w=D?"is-hidden":"",K=vt(d);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: ${K};">
              <use href="${m}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${r}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${g}" width="18" height="18">
            <use href="${m}#check"></use>
            </svg>
            <svg class="card-product-svg ${w}" width="18" height="18">
            <use href="${m}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function vt(t){return t===!0?"visible":"hidden"}const J=document.querySelector("#pagination"),bt=document.querySelector(".list-prod-container"),Et=document.querySelector(".filter-nomatches-container"),St="firstset";O("first");async function O(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await j(s);if(n===0&&(bt.classList.add("visually-hidden"),Et.classList.remove("visually-hidden"),J.classList.add("visually-hidden")),p(St,c),N(c),n>1){const r={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?r.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(r.visiblePages=5),new X(J,r).on("afterMove",async d=>{s.page=d.page;const{results:g}=await j(s);N(g)})}}class wt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return Z.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Lt{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const Pt=document.querySelector(".filter-form"),b=document.querySelector(".filter-select"),h=new wt,A=new Lt;W().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,b.appendChild(s)});const e=It();b.appendChild(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}Pt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,h.searchQuery=e,console.log("foodApi.searchQuery:",h.searchQuery),h.getFoodList().then(function(s){A.updateLsWithList(s,o);const n=JSON.parse(localStorage.getItem("products")).length;console.log(n),O(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});b.addEventListener("change",function(){const t=b.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),A.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,h.category=t,h.getFoodList().then(function(o){A.updateLsWithList(o,e);const c=JSON.parse(localStorage.getItem("products")).length;console.log(e),O(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const R=document.querySelector(".popular-product-list");G(5).then(t=>{R.insertAdjacentHTML("beforeend",Bt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const c=s.getAttribute("data-js-button"),n=I(c,t);k(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const r=c.closest(".popular-card").getAttribute("data-js-product-id");kt(r)}else if(c.closest(".button-add-product")){const n=c.closest(".button-add-product").previousElementSibling,r=n.getAttribute("data-js-button"),a=I(r,t),d=u(i);k(a._id)||(d.push(a),p(i,d),f()),c.closest(".button-add-product").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".button-remove-product")){const n=c.closest(".button-remove-product").getAttribute("data-js-button"),r=I(n,t),a=u(i),d=k(r._id);p(i,a.filter(g=>d._id!==g._id)),f(),c.closest(".button-remove-product").classList.add("visually-hidden"),c.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}R.addEventListener("click",o)}).catch(t=>{console.error(t)});function kt(t){H(t).then(e=>{C(e)}).catch(e=>{console.error(e)})}function I(t,e){return e.find(s=>s._id.toString()===t)}function k(t){return u(i).find(o=>o._id===t)}function $t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function Bt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:r,price:a,is10PercentOff:d})=>{const g=parseInt(n.toString()[0]),w=$t(o,14);return`  <li class="popular-item">
            <button class="button-remove-product" data-js-button=${e}>
        <svg class="svg-remove-product" width="12" height="12">
          <use href="${m}#check"></use>
        </svg>
      </button>
      <button class="button-add-product" type="button" >
        <svg class="svg-add-product" width="12" height="12">
          <use href="${m}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${w}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${g}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function At(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",r=xt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${m}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${r}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${m}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="${m}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function xt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let E=[];const _=document.querySelector(".products-discount");async function Ct(){E=(await Y()).slice(0,2);const e=u(i),o=_t(e),s=At(E,o);Mt(s)}Ct();function Mt(t){_.insertAdjacentHTML("beforeend",t)}_.addEventListener("click",Tt);_.addEventListener("click",Ot);function Tt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=u(i);if(n.find(r=>c===r._id))p(i,n.filter(r=>c!==r._id)),f();else{const r=E.find(a=>c===a._id);n.push(r),p(i,n),f()}s.forEach(r=>{r.classList.toggle("is-hidden")})}function Ot(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=E.find(n=>s===n._id);C(c)}function _t(t=[]){return t.map(e=>e._id)}const l=document.querySelector(".feedback-form"),y="feedback-form-state",U=document.getElementById("footer-button"),Ft=tt(()=>{const t={email:l.elements.email.value};localStorage.setItem(y,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e}});l.addEventListener("input",()=>{Ft(),S()});l.addEventListener("submit",t=>{t.preventDefault();const e={email:l.elements.email.value};console.log(e),localStorage.removeItem(y),l.reset(),S()});U.addEventListener("click",function(){const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,S()}});const S=()=>{const t=l.elements.email.value,e=qt(t),o=t.trim()!=="";U.disabled=!(e&&o)},qt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),jt=()=>{const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,S()}};jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const x=document.getElementById("scrollToTopBtn"),z=360;window.onscroll=function(){document.body.scrollTop>z||document.documentElement.scrollTop>z?x.classList.add("show"):x.classList.remove("show")};x.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
