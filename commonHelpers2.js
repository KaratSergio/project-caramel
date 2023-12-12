import{g as l,S as r,b as O,m as q,s as g,d as f,e as h,f as U,F as X,a as m,h as N,i as Z,j as tt,k as et}from"./assets/STORAGE-5a580755.js";import{P as ot,a as st,l as nt}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const ct=document.getElementById("removeFromIcon");ct.classList.add("visually-hidden");const A=document.getElementById("modalProduct"),at=document.getElementById("closeModalProductBtn"),P=document.getElementById("addToCartBtn"),I=document.getElementById("removeFrom"),rt=document.getElementById("modalProductImage"),dt=document.getElementById("modalProductName"),it=document.getElementById("modalProductCategory"),lt=document.getElementById("modalProductSize"),ut=document.getElementById("modalProductPopularity"),pt=document.getElementById("modalProductDescription"),mt=document.getElementById("modalProductPrice"),gt=document.querySelector(".modal-overlay");const K=document.getElementById("scrollToTopBtn");function M(t){try{let s=function(){e.push(t),c(e)},n=function(){e.splice(o,1),c(e)},c=function(a){g(r,e),f(),a=O(e,t),h(t._id,a),q(a,P,I)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}A.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",D),P.addEventListener("click",s),I.addEventListener("click",n);const e=l(r);let o=O(e,t);q(o,P,I),K.style.display="none";rt.src=t.img,dt.textContent=t.name,it.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",lt.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ut.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",pt.textContent=`${t.desc}`,mt.textContent=`$ ${t.price}`,A.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",D)}catch{console.log("no proructs")}}function C(){document.body.style.overflow="",A.style.display="none",document.querySelector(".modal-overlay").style.display="none",K.style.display="block";}at.addEventListener("click",C);document.addEventListener("keydown",function(t){t.key==="Escape"&&C()});function D(t){t.target===gt&&C()}const _=document.querySelector(".list-prod");l(r);function ht(t,e){t.innerHTML=e}async function J(t){const e=vt(t);ht(_,e)}_.addEventListener("click",yt);_.addEventListener("click",ft);function yt(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=l(r);let c=n.findIndex(a=>a._id===s);if(c!==-1)n.splice(c,1),c=-1;else{const a=l(X).find(d=>d._id===s);a&&(n.push(a),c=0)}g(r,n),h(s,c)}function ft(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");U(s).then(n=>{M(n)}).catch(n=>{console.error(n)})}function vt(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:d,is10PercentOff:i})=>{const u=l(r),L=u.find(w=>w._id===e)?"":"is-hidden",Y=u.find(w=>w._id===e)?"is-hidden":"",G=bt(i);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${i}" style="visibility: ${G};">
              <use href="${m}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} width="140" height="140" loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${n.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${d}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button" aria-label="Buy">
            <svg class="card-product-svg ${L}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#check"></use>
            </svg>
            <svg class="card-product-svg ${Y}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function bt(t){return t===!0?"visible":"hidden"}const $=document.querySelector("#pagination"),R=document.querySelector(".list-prod-container"),z=document.querySelector(".filter-nomatches-container"),H="firstset";j("first");async function j(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:n,totalPages:c}=await N(s);if(c===0&&(R.classList.add("visually-hidden"),z.classList.remove("visually-hidden"),$.classList.add("visually-hidden")),g(H,n),J(n),c>=1){R.classList.remove("visually-hidden"),$.classList.remove("visually-hidden"),z.classList.add("visually-hidden");const a={totalItems:n.length*c,itemsPerPage:s.limit,visiblePages:5,page:s.page,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 767px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new ot($,a).on("afterMove",async i=>{s.page=i.page;const{results:u}=await N(s);g(H,u),J(u)})}}class St{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return st.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Et{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const Lt=document.querySelector(".filter-form"),b=document.querySelector(".filter-select"),y=new St,x=new Et;Z().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,b.appendChild(s)});const e=wt();b.appendChild(e)});function wt(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}Lt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,y.searchQuery=e,console.log("foodApi.searchQuery:",y.searchQuery),y.getFoodList().then(function(s){x.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")).length;console.log(c),j(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});b.addEventListener("change",function(){const t=b.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),x.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,y.category=t,y.getFoodList().then(function(o){x.updateLsWithList(o,e);const n=JSON.parse(localStorage.getItem("products")).length;console.log(e),j(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const Q=document.querySelector(".popular-product-list");tt(5).then(t=>{Q.insertAdjacentHTML("beforeend",$t(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=k(n,t);B(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");Pt(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),d=k(a,t),i=l(r);B(d._id)||(i.push(d),g(r,i),f(),h(d._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=k(c,t),d=l(r),i=B(a._id);g(r,d.filter(u=>i._id!==u._id)),f(),h(a._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}Q.addEventListener("click",o)}).catch(t=>{console.error(t)});function Pt(t){U(t).then(e=>{M(e)}).catch(e=>{console.error(e)})}function k(t,e){return e.find(s=>s._id.toString()===t)}function B(t){return l(r).find(o=>o._id===t)}function It(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function $t(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:d,is10PercentOff:i})=>{const u=parseInt(c.toString()[0]),L=It(o,14);return`  <li class="popular-item">

            <button class="button-remove-product" data-js-button=${e} type="button" aria-label="Delete" >

        <svg class="svg-remove-product" width="12" height="12">
          <use href="${m}#check"></use>
        </svg>
      </button>

      <button class="button-add-product" data-js-button=${e} type="button" aria-label="Add" >

        <svg class="svg-add-product" width="12" height="12">
          <use href="${m}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${L}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${u}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function kt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",c=s?"is-hidden":"",a=Bt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
        <h3 class="card-product-title">${a}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn">
            <svg class="card-product-svg ${n}" 
            data-js-discont="${o._id}" width="18" height="18">
            <use href="${m}#check"></use>
          </svg>
          <svg class="card-product-svg ${c}" 
          data-js-discont="${o._id}" width="18" height="18">
          <use href="${m}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let S=[];const F=document.querySelector(".products-discount");async function At(){S=(await et()).slice(0,2);const e=l(r),o=Ct(e),s=kt(S,o);xt(s)}At();function xt(t){F.insertAdjacentHTML("beforeend",t)}F.addEventListener("click",Tt);F.addEventListener("click",Mt);function Tt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=l(r);if(n.find(c=>s===c._id))g(r,n.filter(c=>s!==c._id)),f(),h(s,-1);else{const c=S.find(a=>s===a._id);n.push(c),g(r,n),f(),h(s,0)}}function Mt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=S.find(c=>s===c._id);M(n)}function Ct(t=[]){return t.map(e=>e._id)}const p=document.querySelector(".feedback-form"),v="feedback-form-state",W=document.getElementById("footer-button"),_t=nt(()=>{const t={email:p.elements.email.value};localStorage.setItem(v,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(v);if(t){const{email:e}=JSON.parse(t);p.elements.email.value=e}});p.addEventListener("input",()=>{_t(),E()});p.addEventListener("submit",t=>{t.preventDefault();const e={email:p.elements.email.value};console.log(e),localStorage.removeItem(v),p.reset(),E()});W.addEventListener("click",function(){const t=localStorage.getItem(v);if(t){const{email:e}=JSON.parse(t);p.elements.email.value=e,E()}});const E=()=>{const t=p.elements.email.value,e=jt(t),o=t.trim()!=="";W.disabled=!(e&&o)},jt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Ft=()=>{const t=localStorage.getItem(v);if(t){const{email:e}=JSON.parse(t);p.elements.email.value=e,E()}};Ft();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(n=>{n.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const T=document.getElementById("scrollToTopBtn"),V=360;window.onscroll=function(){document.body.scrollTop>V||document.documentElement.scrollTop>V?T.classList.add("show"):T.classList.remove("show")};T.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
