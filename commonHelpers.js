import{c as E}from"./assets/get-api-301aac24.js";import"./assets/vendor-99d50140.js";const a="added-item";let i=[];const I=document.querySelector(".js-item-count"),l=document.querySelector(".js-empty-basket"),u=document.querySelector(".js-filled-basket"),m=document.querySelector(".js-items-container"),L=document.querySelector(".total-count-text"),g=document.querySelector(".js-checkout-form"),$=document.querySelector(".js-item-button");g.addEventListener("submit",_);$.addEventListener("click",q);C();function C(){try{f(),b(i),m.innerHTML=y(i),r(i)}catch(e){console.log(e.message)}}function f(){const e=localStorage.getItem(a);e&&(i=JSON.parse(e))}function q(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":h();break;case"delete-item-button":const c=p(e);w(c),f(),m.innerHTML=y(i);break;case"decrease-button":d(e,-1);break;case"increase-button":d(e,1);break}}function h(){i=[],localStorage.setItem(a,JSON.stringify(i)),b(i)}function b(e){I.textContent=e.length,D(e.length)}function w(e){for(let t=0;t<=i.length;t+=1){const{_id:s}=i[t];if(s===e){i.splice(t,1),v(i),r(i);return}}}function p(e){return e.target.closest("li").dataset.id}function d(e,t){try{const s=p(e),c=e.target.closest("div");let n=Number(c.children.counter.textContent)+t;if(c.children.counter.textContent=n,x(s,n),r(i),n<=1){j(c);return}O(c)}catch(s){console.log(s.message)}}function j(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function O(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function x(e,t){for(let s=0;s<=i.length;s+=1){const{_id:c}=i[s];if(c===e){i[s].count=t,v(i);return}}}function v(e){localStorage.setItem(a,JSON.stringify(e))}function D(e){if(e===0){l.classList.remove("hide"),u.classList.add("hide");return}else l.classList.add("hide"),u.classList.remove("hide")}function y(e){return e.map(({_id:t,name:s,img:c,category:n,size:o,is10PercentOff:A,price:S,count:k=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${c}" alt="${s}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${s}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="./images/icons.svg#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${n}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${o}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${S}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="./images/icons.svg#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${k}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="./images/icons.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function r(e){let t=0;e.forEach(({price:s,count:c=1})=>{t+=s*c}),L.textContent=`$${t.toFixed(2)}`}const T=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function _(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!B(t))throw new Error("Your E-mail is not valid");let s=[];i.forEach(({_id:n,count:o=1})=>{s.push({productId:n,amount:o})});const c=await E(t,s);N(c)}catch{M()}}function B(e){return T.test(e)}function N(e){h(),g.reset(),console.log(e)}function M(e){console.log(e)}
//# sourceMappingURL=commonHelpers.js.map
