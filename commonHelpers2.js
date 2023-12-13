import{g as l,S as r,b as N,m as J,s as g,d as S,e as h,f as Q,F as X,a as m,h as R,i as Z,j as tt,k as et,o as ot}from"./assets/STORAGE-0c41f7f0.js";import{P as st,a as nt,l as ct}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const at=document.getElementById("removeFromIcon");at.classList.add("visually-hidden");const q=document.getElementById("modalProduct"),rt=document.getElementById("closeModalProductBtn"),B=document.getElementById("addToCartBtn"),x=document.getElementById("removeFrom"),dt=document.getElementById("modalProductImage"),it=document.getElementById("modalProductName"),lt=document.getElementById("modalProductCategory"),ut=document.getElementById("modalProductSize"),pt=document.getElementById("modalProductPopularity"),mt=document.getElementById("modalProductDescription"),gt=document.getElementById("modalProductPrice"),ft=document.querySelector(".modal-overlay");const G=document.getElementById("scrollToTopBtn");function j(t){try{let s=function(){e.push(t),c(e)},n=function(){e.splice(o,1),c(e)},c=function(a){g(r,e),S(),a=N(e,t),h(t._id,a),J(a,B,x)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}q.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",z),B.addEventListener("click",s),x.addEventListener("click",n);const e=l(r);let o=N(e,t);J(o,B,x),G.style.display="none";dt.src=t.img,it.textContent=t.name,lt.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",ut.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",pt.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",mt.textContent=`${t.desc}`,gt.textContent=`$ ${t.price}`,q.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",z)}catch{console.log("no proructs")}}function M(){document.body.style.overflow="",q.style.display="none",document.querySelector(".modal-overlay").style.display="none",G.style.display="flex";}rt.addEventListener("click",M);document.addEventListener("keydown",function(t){t.key==="Escape"&&M()});function z(t){t.target===ft&&M()}const F=document.querySelector(".list-prod");l(r);function yt(t,e){t.innerHTML=e}async function H(t){const e=bt(t);yt(F,e)}F.addEventListener("click",ht);F.addEventListener("click",vt);function ht(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=l(r);let c=n.findIndex(a=>a._id===s);if(c!==-1)n.splice(c,1),c=-1;else{const a=l(X).find(d=>d._id===s);a&&(n.push(a),c=0)}g(r,n),h(s,c)}function vt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Q(s).then(n=>{j(n)}).catch(n=>{console.error(n)})}function bt(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:d,is10PercentOff:u})=>{const p=l(r),v=p.find(k=>k._id===e)?"":"is-hidden",f=p.find(k=>k._id===e)?"is-hidden":"",E=St(u);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${u}" style="visibility: ${E};">
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
            <svg class="card-product-svg ${v}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#check"></use>
            </svg>
            <svg class="card-product-svg ${f}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function St(t){return t===!0?"visible":"hidden"}const L=document.querySelector("#pagination"),wt=document.querySelector(".list-prod-container"),Et=document.querySelector(".filter-nomatches-container"),V="firstset";O("first");async function O(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:n,totalPages:c}=await R(s);if(c===0&&(wt.classList.add("visually-hidden"),Et.classList.remove("visually-hidden"),L.classList.add("visually-hidden")),g(V,n),H(n),c){let a=1;c>3&&(a=3),(window.matchMedia("(max-width: 375px)").matches||window.matchMedia("(min-width: 768px)").matches)&&(a=3);const d={totalItems:n.length*c,itemsPerPage:s.limit,visiblePages:a,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new st(L,d).on("afterMove",async f=>{s.page=f.page;const{results:E}=await R(s);g(V,E),H(E)});const p=document.querySelector(".for-add-text-first"),v=document.querySelector(".for-add-text-last");if(p){const f=document.querySelector(".for-add-text-first");f.textContent=1}if(v){const f=document.querySelector(".for-add-text-last");f.textContent=c}c===1?L.classList.add("visually-hidden"):L.classList.remove("visually-hidden")}}class Lt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return nt.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Pt{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.reset("products"),localStorage.reset("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const W=document.querySelector(".filter-form"),P=document.querySelector(".filter-select");document.querySelector("filter-search");const C=new Lt,b=new Pt;Z().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.split("_").join(" "),P.append(s)});const e=$t();P.append(e)});function $t(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}W.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,b.clearLocalStorage(),b.defaultApiOptions()):(o.keyword=e,C.getFoodList(o).then(function(s){b.updateLsWithList(s,o),O(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}W.reset()});P.addEventListener("change",function(){const t=P.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),b.defaultApiOptions()):(e.category=t,C.category=t,C.getFoodList().then(function(o){b.updateLsWithList(o,e),O(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const U=document.querySelector(".popular-product-list");tt(5).then(t=>{U.insertAdjacentHTML("beforeend",Bt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=T(n,t);A(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");It(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),d=T(a,t),u=l(r);A(d._id)||(u.push(d),g(r,u),S(),h(d._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=T(c,t),d=l(r),u=A(a._id);g(r,d.filter(p=>u._id!==p._id)),S(),h(a._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}U.addEventListener("click",o)}).catch(t=>{console.error(t)});function It(t){Q(t).then(e=>{j(e)}).catch(e=>{console.error(e)})}function T(t,e){return e.find(s=>s._id.toString()===t)}function A(t){return l(r).find(o=>o._id===t)}function kt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function Bt(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:d,is10PercentOff:u})=>{const p=parseInt(c.toString()[0]),v=kt(o,14);return`  <li class="popular-item">

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
            <h3 class="popular-card-title">${v}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function xt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",c=s?"is-hidden":"",a=Tt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
`}).join("")}function Tt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let $=[];const D=document.querySelector(".products-discount");async function At(){$=(await et()).slice(0,2);const e=l(r),o=jt(e),s=xt($,o);qt(s)}At();function qt(t){D.insertAdjacentHTML("beforeend",t)}D.addEventListener("click",Ct);D.addEventListener("click",_t);function Ct(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=l(r);if(n.find(c=>s===c._id))g(r,n.filter(c=>s!==c._id)),S(),h(s,-1);else{const c=$.find(a=>s===a._id);n.push(c),g(r,n),S(),h(s,0)}}function _t(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=$.find(c=>s===c._id);j(n)}function jt(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),y={menu:document.querySelector("[data-menu]"),one:document.querySelector("[data-one]"),two:document.querySelector("[data-two]")};i.addEventListener("submit",Mt);function Mt(t){t.preventDefault();const e=i.elements.email.value;ot(e).then(o=>{console.log(o),o.message.includes("Welcome to the Food Boutique! 🥦🍓 With Food Boutique, you're not just subscribing to food, you're signing up for a fresher, fitter, and happier you. Get ready to elevate your wellness journey, one bite at a time!")?(y.menu.classList.remove("is-hidden"),y.one.classList.remove("is-hidden")):(y.menu.classList.remove("is-hidden"),y.two.classList.remove("is-hidden"))}).catch(o=>{y.menu.classList.remove("is-hidden"),y.two.classList.remove("is-hidden")})}const w="feedback-form-state",Y=document.getElementById("footer-button"),Ft=ct(()=>{const t={email:i.elements.email.value};localStorage.setItem(w,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(w);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{Ft(),I()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(w),i.reset(),I()});Y.addEventListener("click",function(){const t=localStorage.getItem(w);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,I()}});const I=()=>{const t=i.elements.email.value,e=Ot(t),o=t.trim()!=="";Y.disabled=!(e&&o)},Ot=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Dt=()=>{const t=localStorage.getItem(w);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,I()}};Dt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};Array.from(t.menu.children).forEach(s=>{s.addEventListener("click",o)});function o(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const _=document.getElementById("scrollToTopBtn"),K=360;window.onscroll=function(){document.body.scrollTop>K||document.documentElement.scrollTop>K?_.classList.add("show"):_.classList.remove("show")};_.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
