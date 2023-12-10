import{s as d,c as H}from"./assets/get-api-50b9f757.js";import"./assets/vendor-8c378b12.js";const N="/project-caramel/assets/success_order-9f386e63.png",P="/project-caramel/assets/error-2fc6af04.png",u="added-item";let o=[],a=[];const F=document.querySelector(".js-item-count"),v=document.querySelector(".js-empty-basket"),y=document.querySelector(".js-filled-basket"),E=document.querySelector(".js-items-container"),J=document.querySelector(".total-count-text"),$=document.querySelector(".js-checkout-form"),R=document.querySelector(".js-item-button"),z=document.querySelector("#countProducts"),c={};$.addEventListener("submit",ee);R.addEventListener("click",K);A();function A(){try{Y(),m(o),W(),E.innerHTML=q(o,a),f(o)}catch(e){console.log(e.message)}}function C(){const e=localStorage.getItem(u);e&&(o=JSON.parse(e))}function G(e,t){for(let s=0;s<=o.length;s+=1){const{_id:n}=o[s];if(n===e){o[s].count=t,g(o);return}}}function W(){a=[],o.forEach(e=>{e.count<2||e.count===void 0?a.push({hide:"hide",disabled:"disabled"}):a.push({hide:"",disabled:""})}),console.log(a)}function Y(){C(),o.forEach(e=>{e.category=e.category.split("_").join(" "),g(o)})}function K(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":I();break;case"delete-item-button":const n=w(e);V(n),C(),E.innerHTML=q(o,a);break;case"decrease-button":L(e,-1);break;case"increase-button":L(e,1);break}}function I(){o=[],localStorage.setItem(u,JSON.stringify(o)),m(o)}function V(e){for(let t=0;t<=o.length;t+=1){const{_id:s}=o[t];if(s===e){o.splice(t,1),g(o),m(o),f(o);return}}}function m(e){F.textContent=e.length,z.textContent=`Cart (${e.length})`,U(e.length)}function w(e){return e.target.closest("li").dataset.id}function L(e,t){try{const s=w(e),n=e.target.closest("div");let i=Number(n.children.counter.textContent)+t;if(n.children.counter.textContent=i,G(s,i),f(o),i<=1){X(n);return}Q(n)}catch(s){console.log(s.message)}}function X(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function Q(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function g(e){localStorage.setItem(u,JSON.stringify(e))}function U(e){if(e===0){v.classList.remove("hide"),y.classList.add("hide");return}else v.classList.add("hide"),y.classList.remove("hide")}function q(e,t){for(let s=0;s<e.length;s+=1)e[s].hide=t[s].hide,e[s].disabled=t[s].disabled;return e.map(({_id:s,name:n,img:i,category:l,size:x,is10PercentOff:ce,price:O,count:_=1,hide:B="",disabled:D=""})=>`<li class="item-container" data-id="${s}">
          <div class="item-img-link">
            <img class="item-img" src="${i}" alt="${n}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${n}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${d}#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${l}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${x}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${O}</p>
              <div class="item-counter-container">
                <button class="decrease-button" ${D} name="decrease" type="button">
                  <svg class="decrease-icon ${B}" width="18" height="18">
                    <use href="${d}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${_}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${d}#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function f(e){let t=0;e.forEach(({price:s,count:n=1})=>{t+=s*n}),J.textContent=`$${t.toFixed(2)}`}const Z=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;async function ee(e){try{e.preventDefault();const t=e.target.elements.email.value;if(console.log(S(t)),!S(t))throw console.dir(t),new Error("Your E-mail is not valid");let s=[];o.forEach(({_id:i,count:l=1})=>{s.push({productId:i,amount:l})});const n=await H(t,s);te(n)}catch(t){M(t)}}function S(e){return Z.test(e)}function te(e){console.dir(c),c.message=e.message,c.title="Order success",c.image=N,j(c),b(),ne()}function M(e){c.message=e.message,c.title="Something went wrong",c.image=P,j(c),b()}function j(e){h.innerHTML=`<img class="modal-img" src="${e.image}" alt="${e.title}">
      <div class="modal-title-message">${e.title}</div>
      <div class="modal-text">${e.message}</div>`}const se=document.querySelector("[js-modal-open]"),oe=document.querySelector("[data-modal-close]"),T=document.querySelector("[data-modal]"),h=document.querySelector("#js-modal-info"),p=document.querySelector(".backdrop");function b(){try{se.addEventListener("click",r),p.addEventListener("click",r),document.addEventListener("keydown",k),oe.addEventListener("click",r)}catch(e){M(e)}}function r(){document.removeEventListener("keydown",k),p.removeEventListener("click",r),T.classList.toggle("is-hidden"),h.innerHTML=""}function k(e){e.code==="Escape"&&(p.removeEventListener("click",r),document.removeEventListener("keydown",k),T.classList.toggle("is-hidden"),h.innerHTML="")}function ne(){I(),$.reset()}b();
//# sourceMappingURL=commonHelpers.js.map
