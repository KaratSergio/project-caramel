import{g as S,s as f,S as a,a as m,c as H}from"./assets/STORAGE-8edae94b.js";import"./assets/vendor-8c378b12.js";const P="/project-caramel/assets/success_order-9f386e63.png",F="/project-caramel/assets/error-2fc6af04.png";let c=[],r=[];const o={},p=document.querySelector(".js-item-count"),y=document.querySelector(".js-empty-basket"),k=document.querySelector(".js-filled-basket"),E=document.querySelector(".js-items-container"),N=document.querySelector(".total-count-text"),L=document.querySelector(".js-checkout-form"),R=document.querySelector(".js-item-button"),z=document.querySelector("#countProducts");L.addEventListener("submit",Z);R.addEventListener("click",J);A();function A(){try{Y(),h(c),W(),E.innerHTML=w(c,r),g(c)}catch{d()}}function G(e,s){for(let t=0;t<=c.length;t+=1){const{_id:n}=c[t];if(n===e){c[t].count=s,f(a,c);return}}}function W(){r=[],c.forEach(e=>{e.count<2||e.count===void 0?r.push({hide:"hide",disabled:"disabled"}):r.push({hide:"",disabled:""})})}function Y(){c=S(a),c.forEach(e=>{e.category=e.category.split("_").join(" "),f(a,c)})}function J(e){const s=e.target.closest("button");if(!s)return;switch(s.attributes.class.value){case"basket-clear-container":$();break;case"delete-item-button":const n=C(e);K(n),S(a),E.innerHTML=w(c,r);break;case"decrease-button":v(e,-1);break;case"increase-button":v(e,1);break}}function $(){c=[],localStorage.setItem(a,JSON.stringify(c)),h(c)}function K(e){for(let s=0;s<=c.length;s+=1){const{_id:t}=c[s];if(t===e){c.splice(s,1),f(a,c),h(c),g(c);return}}}function h(e){p&&(p.textContent=e.length),z.textContent=`Cart (${e.length})`,X(e.length)}function C(e){return e.target.closest("li").dataset.id}function v(e,s){try{const t=C(e),n=e.target.closest("div");let i=Number(n.children.counter.textContent)+s;if(n.children.counter.textContent=i,G(t,i),g(c),i<=1){U(n);return}V(n)}catch{d()}}function U(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function V(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function X(e){if(e===0){y.classList.remove("hide"),k.classList.add("hide");return}else y.classList.add("hide"),k.classList.remove("hide")}function w(e,s){for(let t=0;t<e.length;t+=1)e[t].hide=s[t].hide,e[t].disabled=s[t].disabled;return e.map(({_id:t,name:n,img:i,category:u,size:T,is10PercentOff:ae,price:_,count:B=1,hide:D="",disabled:O=""})=>`<li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${i}" alt="${n}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${n}</h4>
              <button type="button" class="delete-item-button" aria-label="Delete">
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
                <button class="decrease-button" ${O} name="decrease" type="button aria-label="decrease"">
                  <svg class="decrease-icon ${D}" width="18" height="18">
                    <use href="${m}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${B}</p>
                <button class="increase-button" name="increase" type="button" aria-label="increase">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${m}#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function g(e){let s=0;e.forEach(({price:t,count:n=1})=>{s+=t*n}),N.textContent=`$${s.toFixed(2)}`}const Q=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;async function Z(e){try{e.preventDefault();const s=e.target.elements.email.value;if(!ee(s))throw new Error("Your E-mail is not valid");let t=[];c.forEach(({_id:i,count:u=1})=>{t.push({productId:i,amount:u})});const n=await H(s,t);te(n)}catch{d()}}function ee(e){return Q.test(e)}function te(e){console.dir(o),o.message=e.message,o.title="Order success",o.image=P,I(o),x(),b(),ie()}function d(){o.message="Sorry, Update page and try again...",o.title="Something went wrong",o.image=F,I(o),x(),b()}function I(e){q.innerHTML=`<img class="modal-img" src="${e.image}" alt="${e.title}">
      <div class="modal-title-message">${e.title}</div>
      <div class="modal-text">${e.message}</div>`}const ce=document.querySelector("[data-js-modal-open]"),se=document.querySelector("[data-modal-close]"),ne=document.querySelector("[data-modal]"),q=document.querySelector("#js-modal-info"),j=document.querySelector(".backdrop");function b(){try{ce.addEventListener("click",l),j.addEventListener("click",l),document.addEventListener("keydown",M),se.addEventListener("click",l)}catch{d()}}function l(){document.removeEventListener("keydown",M),j.removeEventListener("click",l),ne.classList.toggle("is-hidden"),oe(),q.innerHTML=""}function M(e){e.code==="Escape"&&l()}function x(){document.body.style.overflow="hidden"}function oe(){document.body.style.overflow=""}function ie(){$(),L.reset()}b();
//# sourceMappingURL=commonHelpers.js.map
