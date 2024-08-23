import{C as v,a as L,S as B,i as m}from"./assets/vendor-62372433.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const C="mySecretKey123";function E(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return v.AES.decrypt(e,C).toString(v.enc.Utf8)}L.defaults.baseURL="https://pixabay.com/api";async function S(e,t=1,s=15){try{return(await L.get("/",{params:{key:E(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}})).data}catch(r){throw console.error("Error fetching photos:",r),r}}function O(e){return`
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
`}function M(e){return e.map(O).join("")}function c(e,t,s="full"){switch(s){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(s,t);break}}function u(e){e.classList.remove("visually-hidden")}function n(e){e.classList.add("visually-hidden")}const H={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},k={...H,color:"#ef4040",iconUrl:"error-icon.svg"},b={...H,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},g=document.querySelector(".gallery"),W=document.querySelector(".search-button"),p=document.querySelector(".search-input"),q=new B(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),i=document.querySelector(".load-more-button"),y=document.querySelector(".load-message"),w=document.querySelector(".secondary-load-message");let l=1,R="",f=15,d=0;W.addEventListener("click",z);async function z(e){e.preventDefault();let t=String(p.value.trim());t=t.replace(/[*]/g,"");let s="",r="";if(!t||t.length<2){m.warning({...b,message:"Enter data for search, please. Min. 2 symbols."}),p.value="",c(g,""),n(i);return}u(y),c(g,""),n(i),R=t,l=1,r=await S(t,l,f),d=r.totalHits,r.hits.length===0?(m.error({...k,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),p.value="",n(y),c(g,"")):(p.value="",s=M(r.hits),n(y),c(g,s),q.refresh(),d>l*f?u(i):(m.warning({...b,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 118"),n(i)))}i.addEventListener("click",D);async function D(e){e.preventDefault(),l+=1;let t="",s="";const r=Date.now();if(console.log("--- show load message ---"),u(w),d>l*f?u(i):(console.log("message in line 146"),n(i)),s=await S(R,l,f),d=s.totalHits,s.hits.length===0)m.error({...k,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 163");else{t=M(s.hits),c(g,t,"beforeend"),q.refresh();const o=document.querySelector(".gallery-item");window.scrollBy({top:o.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),d>l*f?u(i):(m.warning({...b,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 191"),n(i))}console.log(Date.now()-r,"--- hide load message ---"),n(w)}window.onerror=(e,t,s,r,o)=>{console.error("Unhandled error:",o)};
//# sourceMappingURL=commonHelpers.js.map
