import{g as l,S as r,b as F,m as O,s as g,d as f,e as h,f as Q,F as Y,a as m,h as q,i as G,j as X,k as Z}from"./assets/STORAGE-5a580755.js";import{P as tt,a as et,l as ot}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const st=document.getElementById("removeFromIcon");st.classList.add("visually-hidden");const B=document.getElementById("modalProduct"),nt=document.getElementById("closeModalProductBtn"),P=document.getElementById("addToCartBtn"),I=document.getElementById("removeFrom"),ct=document.getElementById("modalProductImage"),at=document.getElementById("modalProductName"),rt=document.getElementById("modalProductCategory"),dt=document.getElementById("modalProductSize"),it=document.getElementById("modalProductPopularity"),lt=document.getElementById("modalProductDescription"),ut=document.getElementById("modalProductPrice"),pt=document.querySelector(".modal-overlay");const V=document.getElementById("scrollToTopBtn");function T(t){try{let s=function(){e.push(t),c(e)},n=function(){e.splice(o,1),c(e)},c=function(a){g(r,e),f(),a=F(e,t),h(t._id,a),O(a,P,I)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}B.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",N),P.addEventListener("click",s),I.addEventListener("click",n);const e=l(r);let o=F(e,t);O(o,P,I),V.style.display="none";ct.src=t.img,at.textContent=t.name,rt.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",dt.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",it.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",lt.textContent=`${t.desc}`,ut.textContent=`$ ${t.price}`,B.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",N)}catch{console.log("no proructs")}}function M(){document.body.style.overflow="",B.style.display="none",document.querySelector(".modal-overlay").style.display="none",V.style.display="block";}nt.addEventListener("click",M);document.addEventListener("keydown",function(t){t.key==="Escape"&&M()});function N(t){t.target===pt&&M()}const C=document.querySelector(".list-prod");l(r);function mt(t,e){t.innerHTML=e}async function D(t){const e=yt(t);mt(C,e)}C.addEventListener("click",gt);C.addEventListener("click",ht);function gt(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=l(r);let c=n.findIndex(a=>a._id===s);if(c!==-1)n.splice(c,1),c=-1;else{const a=l(Y).find(d=>d._id===s);a&&(n.push(a),c=0)}g(r,n),h(s,c)}function ht(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Q(s).then(n=>{T(n)}).catch(n=>{console.error(n)})}function yt(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:d,is10PercentOff:i})=>{const u=l(r),w=u.find(L=>L._id===e)?"":"is-hidden",K=u.find(L=>L._id===e)?"is-hidden":"",W=ft(i);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${i}" style="visibility: ${W};">
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
            <svg class="card-product-svg ${w}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#check"></use>
            </svg>
            <svg class="card-product-svg ${K}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function ft(t){return t===!0?"visible":"hidden"}const J=document.querySelector("#pagination"),vt=document.querySelector(".list-prod-container"),bt=document.querySelector(".filter-nomatches-container"),R="firstset";_("first");async function _(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:n,totalPages:c}=await q(s);if(c===0&&(vt.classList.add("visually-hidden"),bt.classList.remove("visually-hidden"),J.classList.add("visually-hidden")),g(R,n),D(n),c>1){const a={totalItems:n.length*c,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new tt(J,a).on("afterMove",async i=>{s.page=i.page;const{results:u}=await q(s);g(R,u),D(u)})}}class St{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return et.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Et{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const wt=document.querySelector(".filter-form"),b=document.querySelector(".filter-select"),y=new St,A=new Et;G().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,b.appendChild(s)});const e=Lt();b.appendChild(e)});function Lt(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}wt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,y.searchQuery=e,console.log("foodApi.searchQuery:",y.searchQuery),y.getFoodList().then(function(s){A.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")).length;console.log(c),_(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});b.addEventListener("change",function(){const t=b.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),A.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,y.category=t,y.getFoodList().then(function(o){A.updateLsWithList(o,e);const n=JSON.parse(localStorage.getItem("products")).length;console.log(e),_(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const z=document.querySelector(".popular-product-list");X(5).then(t=>{z.insertAdjacentHTML("beforeend",$t(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=$(n,t);k(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");Pt(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),d=$(a,t),i=l(r);k(d._id)||(i.push(d),g(r,i),f(),h(d._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=$(c,t),d=l(r),i=k(a._id);g(r,d.filter(u=>i._id!==u._id)),f(),h(a._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}z.addEventListener("click",o)}).catch(t=>{console.error(t)});function Pt(t){Q(t).then(e=>{T(e)}).catch(e=>{console.error(e)})}function $(t,e){return e.find(s=>s._id.toString()===t)}function k(t){return l(r).find(o=>o._id===t)}function It(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function $t(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:d,is10PercentOff:i})=>{const u=parseInt(c.toString()[0]),w=It(o,14);return`  <li class="popular-item">

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
            <h3 class="popular-card-title">${w}</h3>
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
`}).join("")}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let S=[];const j=document.querySelector(".products-discount");async function At(){S=(await Z()).slice(0,2);const e=l(r),o=Ct(e),s=kt(S,o);xt(s)}At();function xt(t){j.insertAdjacentHTML("beforeend",t)}j.addEventListener("click",Tt);j.addEventListener("click",Mt);function Tt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=l(r);if(n.find(c=>s===c._id))g(r,n.filter(c=>s!==c._id)),f(),h(s,-1);else{const c=S.find(a=>s===a._id);n.push(c),g(r,n),f(),h(s,0)}}function Mt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=S.find(c=>s===c._id);T(n)}function Ct(t=[]){return t.map(e=>e._id)}const p=document.querySelector(".feedback-form"),v="feedback-form-state",U=document.getElementById("footer-button"),_t=ot(()=>{const t={email:p.elements.email.value};localStorage.setItem(v,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(v);if(t){const{email:e}=JSON.parse(t);p.elements.email.value=e}});p.addEventListener("input",()=>{_t(),E()});p.addEventListener("submit",t=>{t.preventDefault();const e={email:p.elements.email.value};console.log(e),localStorage.removeItem(v),p.reset(),E()});U.addEventListener("click",function(){const t=localStorage.getItem(v);if(t){const{email:e}=JSON.parse(t);p.elements.email.value=e,E()}});const E=()=>{const t=p.elements.email.value,e=jt(t),o=t.trim()!=="";U.disabled=!(e&&o)},jt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Ft=()=>{const t=localStorage.getItem(v);if(t){const{email:e}=JSON.parse(t);p.elements.email.value=e,E()}};Ft();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(n=>{n.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const x=document.getElementById("scrollToTopBtn"),H=360;window.onscroll=function(){document.body.scrollTop>H||document.documentElement.scrollTop>H?x.classList.add("show"):x.classList.remove("show")};x.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
