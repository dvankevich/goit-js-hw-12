import{C as v,a as L,S as B,i as m}from"./assets/vendor-62372433.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const C="mySecretKey123";function E(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return v.AES.decrypt(e,C).toString(v.enc.Utf8)}L.defaults.baseURL="https://pixabay.com/api";async function S(e,t=1,o=15){try{return(await L.get("/",{params:{key:E(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:t}})).data}catch(s){throw console.error("Error fetching photos:",s),s}}function O(e){return`
  <li class="gallery-item">
    <a href="${e.largeImageURL}"
      class="galery-item-image-link">
      <img class="galery-item-image"
        src="${e.webformatURL}"
        alt="${e.tags}" />
    </a>
    <ul class="image-info">
      <li class="image-info-item">
        <p class="info-item-caption">Likes</p>
        <p class="info-item-value">${e.likes}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Views</p>
        <p class="info-item-value">${e.views}</p>

      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Comments</p>
        <p class="info-item-value">${e.comments}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Downloads</p>
        <p class="info-item-value">${e.downloads}</p>
      </li>
    </ul>
  </li>
`}function M(e){return e.map(O).join("")}function c(e,t,o="full"){switch(o){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(o,t);break}}function f(e){e.classList.remove("visually-hidden")}function n(e){e.classList.add("visually-hidden")}const H={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},k={...H,color:"#ef4040",iconUrl:"error-icon.svg"},b={...H,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},u=document.querySelector(".gallery"),W=document.querySelector(".search-button"),p=document.querySelector(".search-input"),q=new B(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),i=document.querySelector(".load-more-button"),h=document.querySelector(".load-message"),w=document.querySelector(".secondary-load-message");let l=1,R="",g=15,d=0;W.addEventListener("click",z);i.addEventListener("click",U);async function z(e){e.preventDefault();let t=String(p.value.trim());t=t.replace(/[*]/g,"");let o="",s="";if(!t||t.length<2){m.warning({...b,message:"Enter data for search, please. Min. 2 symbols."}),p.value="",c(u,""),n(i);return}f(h),c(u,""),n(i),R=t,l=1,s=await S(t,l,g),d=s.totalHits,s.hits.length===0?(m.error({...k,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),p.value="",n(h),c(u,"")):(p.value="",o=M(s.hits),n(h),c(u,o),q.refresh(),d>l*g?f(i):(m.warning({...b,message:"We're sorry, but you've reached<br>the end of search results."}),n(i)))}async function U(e){e.preventDefault(),l+=1;let t="",o="";if(f(w),d>l*g?f(i):n(i),o=await S(R,l,g),d=o.totalHits,o.hits.length===0)m.error({...k,message:"We're sorry, but you've reached<br>the end of search results."});else{t=M(o.hits),c(u,t,"beforeend"),q.refresh();const s=document.querySelector(".gallery-item");window.scrollBy({top:s.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),d>l*g?f(i):(m.warning({...b,message:"We're sorry, but you've reached<br>the end of search results."}),n(i))}n(w)}window.onerror=(e,t,o,s,r)=>{console.error("Unhandled error:",r)};
//# sourceMappingURL=commonHelpers.js.map
