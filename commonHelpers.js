import{c as E}from"./assets/get-api-d562484e.js";import"./assets/vendor-8c378b12.js";const a="added-item";let n=[];const I=document.querySelector(".js-basket-icon"),L=document.querySelector(".js-item-count"),u=document.querySelector(".js-empty-basket"),d=document.querySelector(".js-filled-basket"),g=document.querySelector(".js-items-container"),C=document.querySelector(".total-count-text"),h=document.querySelector(".js-checkout-form"),q=document.querySelector(".js-item-button"),w=document.querySelector("#countProducts"),i=I.ownerDocument.location.origin;console.dir(i);h.addEventListener("submit",M);q.addEventListener("click",x);j();function j(){try{f(),p(n),g.innerHTML=S(n),l(n)}catch(e){console.log(e.message)}}function f(){const e=localStorage.getItem(a);e&&(n=JSON.parse(e))}function x(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":b();break;case"delete-item-button":const c=y(e);D(c),f(),g.innerHTML=S(n);break;case"decrease-button":m(e,-1);break;case"increase-button":m(e,1);break}}function b(){n=[],localStorage.setItem(a,JSON.stringify(n)),p(n)}function p(e){L.textContent=e.length,w.textContent=`Cart (${e.length})`,B(e.length)}function D(e){for(let t=0;t<=n.length;t+=1){const{_id:s}=n[t];if(s===e){n.splice(t,1),v(n),l(n);return}}}function y(e){return e.target.closest("li").dataset.id}function m(e,t){try{const s=y(e),c=e.target.closest("div");let o=Number(c.children.counter.textContent)+t;if(c.children.counter.textContent=o,_(s,o),l(n),o<=1){O(c);return}T(c)}catch(s){console.log(s.message)}}function O(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function T(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function _(e,t){for(let s=0;s<=n.length;s+=1){const{_id:c}=n[s];if(c===e){n[s].count=t,v(n);return}}}function v(e){localStorage.setItem(a,JSON.stringify(e))}function B(e){if(e===0){u.classList.remove("hide"),d.classList.add("hide");return}else u.classList.add("hide"),d.classList.remove("hide")}function S(e){return e.map(({_id:t,name:s,img:c,category:o,size:r,is10PercentOff:J,price:k,count:$=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${c}" alt="${s}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${s}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${i}/images/icons.svg#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${o}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${r}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${k}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="${i}/images/icons.svg#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${$}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${i}/images/icons.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function l(e){let t=0;e.forEach(({price:s,count:c=1})=>{t+=s*c}),C.textContent=`$${t.toFixed(2)}`}const N=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function M(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!P(t))throw new Error("Your E-mail is not valid");let s=[];n.forEach(({_id:o,count:r=1})=>{s.push({productId:o,amount:r})});const c=await E(t,s);A(c)}catch{F()}}function P(e){return N.test(e)}function A(e){b(),h.reset(),console.log(e)}function F(e){console.log(e)}
//# sourceMappingURL=commonHelpers.js.map
