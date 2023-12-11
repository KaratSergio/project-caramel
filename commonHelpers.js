import{g as S,s as f,S as a,a as m,c as H}from"./assets/STORAGE-faa10d26.js";import"./assets/vendor-8c378b12.js";const P="/project-caramel/assets/success_order-9f386e63.png",F="/project-caramel/assets/error-2fc6af04.png";let c=[],r=[];const o={},b=document.querySelector(".js-item-count"),y=document.querySelector(".js-empty-basket"),k=document.querySelector(".js-filled-basket"),E=document.querySelector(".js-items-container"),N=document.querySelector(".total-count-text"),L=document.querySelector(".js-checkout-form"),R=document.querySelector(".js-item-button"),z=document.querySelector("#countProducts");L.addEventListener("submit",Z);R.addEventListener("click",J);A();function A(){try{Y(),h(c),W(),E.innerHTML=w(c,r),g(c)}catch{d()}}function G(e,n){for(let t=0;t<=c.length;t+=1){const{_id:s}=c[t];if(s===e){c[t].count=n,f(a,c);return}}}function W(){r=[],c.forEach(e=>{e.count<2||e.count===void 0?r.push({hide:"hide",disabled:"disabled"}):r.push({hide:"",disabled:""})})}function Y(){c=S(a),c.forEach(e=>{e.category=e.category.split("_").join(" "),f(a,c)})}function J(e){const n=e.target.closest("button");if(!n)return;switch(n.attributes.class.value){case"basket-clear-container":$();break;case"delete-item-button":const s=C(e);K(s),S(a),E.innerHTML=w(c,r);break;case"decrease-button":v(e,-1);break;case"increase-button":v(e,1);break}}function $(){c=[],localStorage.setItem(a,JSON.stringify(c)),h(c)}function K(e){for(let n=0;n<=c.length;n+=1){const{_id:t}=c[n];if(t===e){c.splice(n,1),f(a,c),h(c),g(c);return}}}function h(e){b&&(b.textContent=e.length),z.textContent=`Cart (${e.length})`,X(e.length)}function C(e){return e.target.closest("li").dataset.id}function v(e,n){try{const t=C(e),s=e.target.closest("div");let i=Number(s.children.counter.textContent)+n;if(s.children.counter.textContent=i,G(t,i),g(c),i<=1){U(s);return}V(s)}catch{d()}}function U(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function V(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function X(e){if(e===0){y.classList.remove("hide"),k.classList.add("hide");return}else y.classList.add("hide"),k.classList.remove("hide")}function w(e,n){for(let t=0;t<e.length;t+=1)e[t].hide=n[t].hide,e[t].disabled=n[t].disabled;return e.map(({_id:t,name:s,img:i,category:u,size:T,is10PercentOff:ae,price:_,count:B=1,hide:D="",disabled:O=""})=>`<li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${i}" alt="${s}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${s}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${m}#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${u}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${T}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${_}</p>
              <div class="item-counter-container">
                <button class="decrease-button" ${O} name="decrease" type="button">
                  <svg class="decrease-icon ${D}" width="18" height="18">
                    <use href="${m}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${B}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${m}#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function g(e){let n=0;e.forEach(({price:t,count:s=1})=>{n+=t*s}),N.textContent=`$${n.toFixed(2)}`}const Q=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;async function Z(e){try{e.preventDefault();const n=e.target.elements.email.value;if(!ee(n))throw new Error("Your E-mail is not valid");let t=[];c.forEach(({_id:i,count:u=1})=>{t.push({productId:i,amount:u})});const s=await H(n,t);te(s)}catch{d()}}function ee(e){return Q.test(e)}function te(e){console.dir(o),o.message=e.message,o.title="Order success",o.image=P,I(o),x(),p(),ie()}function d(){o.message="Sorry, Update page and try again...",o.title="Something went wrong",o.image=F,I(o),x(),p()}function I(e){q.innerHTML=`<img class="modal-img" src="${e.image}" alt="${e.title}">
      <div class="modal-title-message">${e.title}</div>
      <div class="modal-text">${e.message}</div>`}const ce=document.querySelector("[js-modal-open]"),ne=document.querySelector("[data-modal-close]"),se=document.querySelector("[data-modal]"),q=document.querySelector("#js-modal-info"),j=document.querySelector(".backdrop");function p(){try{ce.addEventListener("click",l),j.addEventListener("click",l),document.addEventListener("keydown",M),ne.addEventListener("click",l)}catch{d()}}function l(){document.removeEventListener("keydown",M),j.removeEventListener("click",l),se.classList.toggle("is-hidden"),oe(),q.innerHTML=""}function M(e){e.code==="Escape"&&l()}function x(){document.body.style.overflow="hidden"}function oe(){document.body.style.overflow=""}function ie(){$(),L.reset()}p();
//# sourceMappingURL=commonHelpers.js.map
