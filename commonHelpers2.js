import{g as _,a as I,b as q,s as u,d as j,e as z}from"./assets/get-api-69bce14c.js";import{a as H,P as R,l as Q}from"./assets/vendor-8c378b12.js";class K{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([s,o])=>`${encodeURIComponent(s)}=${encodeURIComponent(o)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},s=this.paramsFromApi(e);return H.get(`${this.URL}/products?${s}`).then(o=>o.data)}}class V{updateLsWithList(e,s){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(s))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}function k(t){const{_id:e,name:s,img:o,category:c,size:n,price:a,popularity:r}=t;return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${o} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
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
      `}const b=document.querySelector(".list-prod"),G=document.querySelector(".filter-form"),f=document.querySelector(".filter-select"),p=new K,E=new V;_().then(t=>{t.forEach(s=>{const o=document.createElement("option");o.value=s,o.textContent=s,f.appendChild(o)});const e=U();f.appendChild(e)});function U(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}G.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let s=JSON.parse(localStorage.getItem("options"))||{};s.keyword=e,p.searchQuery=e,console.log("foodApi.searchQuery:",p.searchQuery),p.getFoodList().then(function(o){E.updateLsWithList(o,s);const c=JSON.parse(localStorage.getItem("products")),n=c.length;console.log(n),T(c)}).catch(function(o){console.error("Error fetching food list:",o.message)})}catch(s){console.error("Error:",s.message)}});f.addEventListener("change",function(){const t=f.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),E.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,p.category=t,p.getFoodList().then(function(s){E.updateLsWithList(s,e);const o=JSON.parse(localStorage.getItem("products")),c=o.length;T(o)}).catch(function(s){console.error("Error fetching list:",s.message)}))}catch(e){console.error("Error:",e.message)}});function T(t){let e=1;const s=1,o=90,c=JSON.parse(localStorage.getItem("products"));b.innerHTML="";let n,a;isNaN((s-1)*o)?n=0:n=(s-1)*o,a=+e*+o,console.log(n),console.log(a);try{if(c&&t>=1){let r=(t-1)*8;const l=c.slice(n+r,a+r);for(let i=0;i<l.length;i+=1){const S=k(l[i]);b.insertAdjacentHTML("beforeend",S)}}else if(c&&c.length>0){const r=c.slice(n,a);for(let l=0;l<r.length;l+=1){const i=k(r[l]);b.insertAdjacentHTML("beforeend",i)}}}catch(r){console.log(r)}}const y=document.getElementById("modalProduct"),W=document.getElementById("closeModalProductBtn"),Y=document.getElementById("addToCartBtn"),X=document.getElementById("modalProductImage"),Z=document.getElementById("modalProductName"),tt=document.getElementById("modalProductCategory"),et=document.getElementById("modalProductSize"),ot=document.getElementById("modalProductPopularity"),st=document.getElementById("modalProductDescription"),ct=document.getElementById("modalProductPrice");function $(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}X.src=t.img,Z.textContent=t.name,tt.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",et.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ot.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",st.textContent=`${t.desc}`,ct.textContent=`$ ${t.price}`,y.style.display="block",window.addEventListener("click",w)}function g(){document.body.style.overflow="",y.style.display="none",window.removeEventListener("click",w)}W.addEventListener("click",g);window.addEventListener("click",w);document.addEventListener("keydown",function(t){t.key==="Escape"&&g()});function w(t){t.target===y&&g()}window.addEventListener("click",function(t){t.target===y&&g()});Y.addEventListener("click",function(){g()});const nt=document.querySelector(".list-prod");function x(t,e){localStorage.setItem(t,JSON.stringify(e))}function at(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}function rt(t,e){t.innerHTML=e}async function O(t){const e=it(t);rt(nt,e),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-js-product-id");o.querySelector(".buy-btn");const n=o.querySelector(".prod-img"),a=t.find(r=>r._id.toString()===c);console.log("Selected productId:",c),lt(c,t),n?$(a):console.error("Selected product not found:",c)})})}function it(t){return t.map(({_id:e,name:s,img:o,category:c,size:n,price:a,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${o} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
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
      `).join("")}const A="added-item";function lt(t,e){let s=at(A);s||(s=[]);const o=e.find(c=>c._id.toString()===t);if(console.log(`tut ${o}`),o){s.push(o),x(A,s),console.log(s);const c=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);c&&(c.disabled=!0)}else console.error("Selected product not found:",t)}const dt=document.querySelector("#pagination"),ut={keyword:"",category:"",page:1,limit:9};pt(ut);async function pt(t){const{keyword:e,category:s}=t,o={keyword:e||"",category:s||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?o.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(o.limit=8);const{results:c,totalPages:n}=await I(o);if(x("firstGet",c),O(c),n>1){const a={totalItems:c.length*n,itemsPerPage:o.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new R(dt,a).on("afterMove",async l=>{o.page=l.page;const{results:i}=await I(o);O(i)})}}const B=document.querySelector(".popular-list"),N="added-itemX";function gt(t){localStorage.setItem(N,JSON.stringify(t))}function mt(){try{const t=localStorage.getItem(N);return t?JSON.parse(t):[]}catch(t){console.log(t)}}q(5).then(t=>{B.insertAdjacentHTML("beforeend",yt(t));function e(s){let o=s.target;if(o.closest(".popular-card")){const n=o.closest(".popular-card").getAttribute("data-js-product-id");j(n).then(a=>{$(a)}).catch(a=>{console.error(a)})}else if(o.closest(".btn-add")){const n=o.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),a=ft(n,t),r=mt();r.find(i=>i._id===a._id)||(r.push(a),gt(r)),o.closest(".btn-add").classList.add("visually-hidden")}}B.addEventListener("click",e)}).catch(t=>{console.error(t)});function ft(t,e){return e.find(o=>o._id.toString()===t)}function ht(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function yt(t){return t.map(({_id:e,name:s,img:o,category:c,popularity:n,size:a,price:r,is10PercentOff:l})=>{const i=parseInt(n.toString()[0]),S=ht(s,14);return`  <li class="popular-item">
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
            <h3 class="popular-card-title">${S}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const F="product-discount";function D(){try{const t=localStorage.getItem(F);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function C(t){localStorage.setItem(F,JSON.stringify(t))}function vt(t=[],e=[]){return t.map(s=>{const o=e.includes(s._id),c=o?"":"is-hidden",n=o?"is-hidden":"",a=St(s.name,14);return` <div class="card-product-discount" data-id="${s._id}">
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
        <h3 class="card-product-title">${a}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">$${s.price}</p>
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
`}).join("")}function St(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let h=[];const L=document.querySelector(".products-discount");async function bt(){h=(await z()).slice(0,2);const e=D(),s=wt(e),o=vt(h,s);Et(o)}bt();function Et(t){L.insertAdjacentHTML("beforeend",t)}L.addEventListener("click",Pt);L.addEventListener("click",$t);function Pt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const s=t.target.closest(".card-product-discount"),o=e.querySelectorAll("svg"),c=s.dataset.id,n=D();if(n.find(a=>c===a._id))C(n.filter(a=>c!==a._id));else{const a=h.find(r=>c===r._id);n.push(a),C(n)}o.forEach(a=>{a.classList.toggle("is-hidden")})}function $t(t){const e=t.target.closest(".card-product-discount"),s=t.target.closest(".card-product-btn");if(!e||s)return;const o=e.dataset.id,c=h.find(n=>o===n._id);$(c)}function wt(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form"),m="feedback-form-state",J=document.getElementById("footer-button"),Lt=Q(()=>{const t={email:d.elements.email.value};localStorage.setItem(m,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{Lt(),v()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(m),d.reset(),v()});J.addEventListener("click",function(){const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}});const v=()=>{const t=d.elements.email.value,e=It(t),s=t.trim()!=="";J.disabled=!(e&&s)},It=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),kt=()=>{const t=localStorage.getItem(m);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,v()}};kt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",o)});function o(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const P=document.getElementById("scrollToTopBtn"),M=360;window.onscroll=function(){document.body.scrollTop>M||document.documentElement.scrollTop>M?P.classList.add("show"):P.classList.remove("show")};P.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
