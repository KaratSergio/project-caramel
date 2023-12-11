import{S as m,s as u,c as N}from"./assets/STORAGE-f85fcccd.js";import"./assets/vendor-8c378b12.js";const H="/project-caramel/assets/success_order-9f386e63.png",P="/project-caramel/assets/error-2fc6af04.png";let o=[],a=[];const b=document.querySelector(".js-item-count"),y=document.querySelector(".js-empty-basket"),k=document.querySelector(".js-filled-basket"),S=document.querySelector(".js-items-container"),F=document.querySelector(".total-count-text"),E=document.querySelector(".js-checkout-form"),G=document.querySelector(".js-item-button"),J=document.querySelector("#countProducts"),s={};E.addEventListener("submit",Z);G.addEventListener("click",Y);R();function R(){try{W(),g(o),A(),S.innerHTML=I(o,a),h(o)}catch{l()}}function L(){const e=localStorage.getItem(m);e&&(o=JSON.parse(e))}function f(e){localStorage.setItem(m,JSON.stringify(e))}function z(e,c){for(let t=0;t<=o.length;t+=1){const{_id:n}=o[t];if(n===e){o[t].count=c,f(o);return}}}function A(){a=[],o.forEach(e=>{e.count<2||e.count===void 0?a.push({hide:"hide",disabled:"disabled"}):a.push({hide:"",disabled:""})})}function W(){L(),o.forEach(e=>{e.category=e.category.split("_").join(" "),f(o)})}function Y(e){const c=e.target.closest("button");if(!c)return;switch(c.attributes.class.value){case"basket-clear-container":$();break;case"delete-item-button":const n=C(e);K(n),L(),S.innerHTML=I(o,a);break;case"decrease-button":v(e,-1);break;case"increase-button":v(e,1);break}}function $(){o=[],localStorage.setItem(m,JSON.stringify(o)),g(o)}function K(e){for(let c=0;c<=o.length;c+=1){const{_id:t}=o[c];if(t===e){o.splice(c,1),f(o),g(o),h(o);return}}}function g(e){b&&(b.textContent=e.length),J.textContent=`Cart (${e.length})`,Q(e.length)}function C(e){return e.target.closest("li").dataset.id}function v(e,c){try{const t=C(e),n=e.target.closest("div");let i=Number(n.children.counter.textContent)+c;if(n.children.counter.textContent=i,z(t,i),h(o),i<=1){V(n);return}X(n)}catch{l()}}function V(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function X(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function Q(e){if(e===0){y.classList.remove("hide"),k.classList.add("hide");return}else y.classList.add("hide"),k.classList.remove("hide")}function I(e,c){for(let t=0;t<e.length;t+=1)e[t].hide=c[t].hide,e[t].disabled=c[t].disabled;return e.map(({_id:t,name:n,img:i,category:d,size:O,is10PercentOff:ae,price:T,count:_=1,hide:B="",disabled:D=""})=>`<li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${i}" alt="${n}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${n}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${u}#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${d}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${O}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${T}</p>
              <div class="item-counter-container">
                <button class="decrease-button" ${D} name="decrease" type="button">
                  <svg class="decrease-icon ${B}" width="18" height="18">
                    <use href="${u}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${_}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${u}#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function h(e){let c=0;e.forEach(({price:t,count:n=1})=>{c+=t*n}),F.textContent=`$${c.toFixed(2)}`}const U=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;async function Z(e){try{e.preventDefault();const c=e.target.elements.email.value;if(!ee(c))throw new Error("Your E-mail is not valid");let t=[];o.forEach(({_id:i,count:d=1})=>{t.push({productId:i,amount:d})});const n=await N(c,t);te(n)}catch{l()}}function ee(e){return U.test(e)}function te(e){console.dir(s),s.message=e.message,s.title="Order success",s.image=H,w(s),x(),p(),ie()}function l(){s.message="Sorry, Go to the main page and try again...",s.title="Something went wrong",s.image=P,w(s),x(),p()}function w(e){q.innerHTML=`<img class="modal-img" src="${e.image}" alt="${e.title}">
      <div class="modal-title-message">${e.title}</div>
      <div class="modal-text">${e.message}</div>`}const oe=document.querySelector("[js-modal-open]"),ce=document.querySelector("[data-modal-close]"),ne=document.querySelector("[data-modal]"),q=document.querySelector("#js-modal-info"),j=document.querySelector(".backdrop");function p(){try{oe.addEventListener("click",r),j.addEventListener("click",r),document.addEventListener("keydown",M),ce.addEventListener("click",r)}catch{l()}}function r(){document.removeEventListener("keydown",M),j.removeEventListener("click",r),ne.classList.toggle("is-hidden"),se(),q.innerHTML=""}function M(e){e.code==="Escape"&&r()}function x(){document.body.style.overflow="hidden"}function se(){document.body.style.overflow=""}function ie(){$(),E.reset()}p();
//# sourceMappingURL=commonHelpers.js.map
