import{s as d,c as H}from"./assets/get-api-69bce14c.js";import"./assets/vendor-8c378b12.js";const u="added-item";let o=[],a=[];const N=document.querySelector(".js-item-count"),v=document.querySelector(".js-empty-basket"),y=document.querySelector(".js-filled-basket"),E=document.querySelector(".js-items-container"),P=document.querySelector(".total-count-text"),$=document.querySelector(".js-checkout-form"),F=document.querySelector(".js-item-button"),J=document.querySelector("#countProducts"),c={};$.addEventListener("submit",U);F.addEventListener("click",W);R();function R(){try{G(),m(o),A(),E.innerHTML=q(o,a),h(o)}catch(e){console.log(e.message)}}function C(){const e=localStorage.getItem(u);e&&(o=JSON.parse(e))}function z(e,t){for(let n=0;n<=o.length;n+=1){const{_id:s}=o[n];if(s===e){o[n].count=t,g(o);return}}}function A(){a=[],o.forEach(e=>{e.count<2||e.count===void 0?a.push({hide:"hide",disabled:"disabled"}):a.push({hide:"",disabled:""})}),console.log(a)}function G(){C(),o.forEach(e=>{e.category=e.category.split("_").join(" "),g(o)})}function W(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":w();break;case"delete-item-button":const s=I(e);Y(s),C(),E.innerHTML=q(o,a);break;case"decrease-button":L(e,-1);break;case"increase-button":L(e,1);break}}function w(){o=[],localStorage.setItem(u,JSON.stringify(o)),m(o)}function Y(e){for(let t=0;t<=o.length;t+=1){const{_id:n}=o[t];if(n===e){o.splice(t,1),g(o),m(o),h(o);return}}}function m(e){N.textContent=e.length,J.textContent=`Cart (${e.length})`,X(e.length)}function I(e){return e.target.closest("li").dataset.id}function L(e,t){try{const n=I(e),s=e.target.closest("div");let i=Number(s.children.counter.textContent)+t;if(s.children.counter.textContent=i,z(n,i),h(o),i<=1){K(s);return}V(s)}catch(n){console.log(n.message)}}function K(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function V(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function g(e){localStorage.setItem(u,JSON.stringify(e))}function X(e){if(e===0){v.classList.remove("hide"),y.classList.add("hide");return}else v.classList.add("hide"),y.classList.remove("hide")}function q(e,t){for(let n=0;n<e.length;n+=1)e[n].hide=t[n].hide,e[n].disabled=t[n].disabled;return e.map(({_id:n,name:s,img:i,category:l,size:x,is10PercentOff:oe,price:O,count:_=1,hide:B="",disabled:D=""})=>`<li class="item-container" data-id="${n}">
          <div class="item-img-link">
            <img class="item-img" src="${i}" alt="${s}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${s}</h4>
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
        `).join("")}function h(e){let t=0;e.forEach(({price:n,count:s=1})=>{t+=n*s}),P.textContent=`$${t.toFixed(2)}`}const Q=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;async function U(e){try{e.preventDefault();const t=e.target.elements.email.value;if(console.log(S(t)),!S(t))throw console.dir(t),new Error("Your E-mail is not valid");let n=[];o.forEach(({_id:i,count:l=1})=>{n.push({productId:i,amount:l})});const s=await H(t,n);Z(s)}catch(t){M(t)}}function S(e){return Q.test(e)}function Z(e){console.dir(c),c.message=e.message,c.title="Order success",c.image="./images/success_order.png",j(c),b(),ne()}function M(e){c.message=e.message,c.title="Something went wrong",c.image="./images/error.png",j(c),b()}function j(e){f.innerHTML=`<img class="modal-img" src="${e.image}" alt="${e.title}">
      <div class="modal-title-message">${e.title}</div>
      <div class="modal-text">${e.message}</div>`}const ee=document.querySelector("[js-modal-open]"),te=document.querySelector("[data-modal-close]"),T=document.querySelector("[data-modal]"),f=document.querySelector("#js-modal-info"),p=document.querySelector(".backdrop");function b(){try{ee.addEventListener("click",r),p.addEventListener("click",r),document.addEventListener("keydown",k),te.addEventListener("click",r)}catch(e){M(e)}}function r(){document.removeEventListener("keydown",k),p.removeEventListener("click",r),T.classList.toggle("is-hidden"),f.innerHTML=""}function k(e){e.code==="Escape"&&(p.removeEventListener("click",r),document.removeEventListener("keydown",k),T.classList.toggle("is-hidden"),f.innerHTML="")}function ne(){w(),$.reset()}b();
//# sourceMappingURL=commonHelpers.js.map
