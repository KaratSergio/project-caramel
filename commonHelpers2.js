import{g as i,S as r,b as D,m as N,s as g,d as b,e as y,f as Q,F as G,a as m,h as J,i as X,j as Z,k as tt}from"./assets/STORAGE-5a580755.js";import{P as et,a as ot,l as st}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const nt=document.getElementById("removeFromIcon");nt.classList.add("visually-hidden");const T=document.getElementById("modalProduct"),ct=document.getElementById("closeModalProductBtn"),I=document.getElementById("addToCartBtn"),B=document.getElementById("removeFrom"),at=document.getElementById("modalProductImage"),rt=document.getElementById("modalProductName"),dt=document.getElementById("modalProductCategory"),it=document.getElementById("modalProductSize"),lt=document.getElementById("modalProductPopularity"),ut=document.getElementById("modalProductDescription"),pt=document.getElementById("modalProductPrice"),mt=document.querySelector(".modal-overlay");const W=document.getElementById("scrollToTopBtn");function _(t){try{let s=function(){e.push(t),c(e)},n=function(){e.splice(o,1),c(e)},c=function(a){g(r,e),b(),a=D(e,t),y(t._id,a),N(a,I,B)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}T.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",R),I.addEventListener("click",s),B.addEventListener("click",n);const e=i(r);let o=D(e,t);N(o,I,B),W.style.display="none";at.src=t.img,rt.textContent=t.name,dt.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",it.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",lt.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",ut.textContent=`${t.desc}`,pt.textContent=`$ ${t.price}`,T.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",R)}catch{console.log("no proructs")}}function j(){document.body.style.overflow="",T.style.display="none",document.querySelector(".modal-overlay").style.display="none",W.style.display="flex";}ct.addEventListener("click",j);document.addEventListener("keydown",function(t){t.key==="Escape"&&j()});function R(t){t.target===mt&&j()}const q=document.querySelector(".list-prod");i(r);function gt(t,e){t.innerHTML=e}async function z(t){const e=ht(t);gt(q,e)}q.addEventListener("click",ft);q.addEventListener("click",yt);function ft(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=i(r);let c=n.findIndex(a=>a._id===s);if(c!==-1)n.splice(c,1),c=-1;else{const a=i(G).find(d=>d._id===s);a&&(n.push(a),c=0)}g(r,n),y(s,c)}function yt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Q(s).then(n=>{_(n)}).catch(n=>{console.error(n)})}function ht(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:d,is10PercentOff:l})=>{const p=i(r),h=p.find(k=>k._id===e)?"":"is-hidden",f=p.find(k=>k._id===e)?"is-hidden":"",E=vt(l);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${l}" style="visibility: ${E};">
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
            <svg class="card-product-svg ${h}" 
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
      `}).join("")}function vt(t){return t===!0?"visible":"hidden"}const w=document.querySelector("#pagination"),bt=document.querySelector(".list-prod-container"),St=document.querySelector(".filter-nomatches-container"),H="firstset";F("first");async function F(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:n,totalPages:c}=await J(s);if(c===0&&(bt.classList.add("visually-hidden"),St.classList.remove("visually-hidden"),w.classList.add("visually-hidden")),g(H,n),z(n),c){let a=1;c>3&&(a=3),(window.matchMedia("(max-width: 375px)").matches||window.matchMedia("(min-width: 768px)").matches)&&(a=3);const d={totalItems:n.length*c,itemsPerPage:s.limit,visiblePages:a,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new et(w,d).on("afterMove",async f=>{s.page=f.page;const{results:E}=await J(s);g(H,E),z(E)});const p=document.querySelector(".for-add-text-first"),h=document.querySelector(".for-add-text-last");if(p){const f=document.querySelector(".for-add-text-first");f.textContent=1}if(h){const f=document.querySelector(".for-add-text-last");f.textContent=c}c===1?w.classList.add("visually-hidden"):w.classList.remove("visually-hidden")}}class Et{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return ot.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class wt{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.reset("products"),localStorage.reset("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const V=document.querySelector(".filter-form"),L=document.querySelector(".filter-select");document.querySelector("filter-search");const M=new Et,v=new wt;X().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.split("_").join(" "),L.append(s)});const e=Lt();L.append(e)});function Lt(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}V.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,v.clearLocalStorage(),v.defaultApiOptions()):(o.keyword=e,M.getFoodList(o).then(function(s){v.updateLsWithList(s,o),F(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}V.reset()});L.addEventListener("change",function(){const t=L.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),v.defaultApiOptions()):(e.category=t,M.category=t,M.getFoodList().then(function(o){v.updateLsWithList(o,e),F(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const U=document.querySelector(".popular-product-list");Z(5).then(t=>{U.insertAdjacentHTML("beforeend",kt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=x(n,t);A(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");Pt(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),d=x(a,t),l=i(r);A(d._id)||(l.push(d),g(r,l),b(),y(d._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=x(c,t),d=i(r),l=A(a._id);g(r,d.filter(p=>l._id!==p._id)),b(),y(a._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}U.addEventListener("click",o)}).catch(t=>{console.error(t)});function Pt(t){Q(t).then(e=>{_(e)}).catch(e=>{console.error(e)})}function x(t,e){return e.find(s=>s._id.toString()===t)}function A(t){return i(r).find(o=>o._id===t)}function $t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function kt(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:d,is10PercentOff:l})=>{const p=parseInt(c.toString()[0]),h=$t(o,14);return`  <li class="popular-item">

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
            <h3 class="popular-card-title">${h}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function It(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",c=s?"is-hidden":"",a=Bt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
`}).join("")}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let P=[];const O=document.querySelector(".products-discount");async function xt(){P=(await tt()).slice(0,2);const e=i(r),o=Ct(e),s=It(P,o);At(s)}xt();function At(t){O.insertAdjacentHTML("beforeend",t)}O.addEventListener("click",Tt);O.addEventListener("click",Mt);function Tt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=i(r);if(n.find(c=>s===c._id))g(r,n.filter(c=>s!==c._id)),b(),y(s,-1);else{const c=P.find(a=>s===a._id);n.push(c),g(r,n),b(),y(s,0)}}function Mt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=P.find(c=>s===c._id);_(n)}function Ct(t=[]){return t.map(e=>e._id)}const u=document.querySelector(".feedback-form"),S="feedback-form-state",Y=document.getElementById("footer-button"),_t=st(()=>{const t={email:u.elements.email.value};localStorage.setItem(S,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(S);if(t){const{email:e}=JSON.parse(t);u.elements.email.value=e}});u.addEventListener("input",()=>{_t(),$()});u.addEventListener("submit",t=>{t.preventDefault();const e={email:u.elements.email.value};console.log(e),localStorage.removeItem(S),u.reset(),$()});Y.addEventListener("click",function(){const t=localStorage.getItem(S);if(t){const{email:e}=JSON.parse(t);u.elements.email.value=e,$()}});const $=()=>{const t=u.elements.email.value,e=jt(t),o=t.trim()!=="";Y.disabled=!(e&&o)},jt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),qt=()=>{const t=localStorage.getItem(S);if(t){const{email:e}=JSON.parse(t);u.elements.email.value=e,$()}};qt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(n=>{n.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const C=document.getElementById("scrollToTopBtn"),K=360;window.onscroll=function(){document.body.scrollTop>K||document.documentElement.scrollTop>K?C.classList.add("show"):C.classList.remove("show")};C.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
