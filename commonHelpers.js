import{C as v,a as L,S as W,i as c}from"./assets/vendor-62372433.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const y of n.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const B="mySecretKey123";function C(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return v.AES.decrypt(e,B).toString(v.enc.Utf8)}L.defaults.baseURL="https://pixabay.com/api";async function S(e,t=1,s=15){try{return(await L.get("/",{params:{key:C(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}})).data}catch(o){throw console.error("Error fetching photos:",o),o}}function E(e){return`
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
`}function M(e){return e.map(E).join("")}function u(e,t,s="full"){switch(s){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(s,t);break}}function m(e){e.classList.remove("visually-hidden")}function i(e){e.classList.add("visually-hidden")}const H={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},k={...H,color:"#ef4040",iconUrl:"error-icon.svg"},p={...H,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},g=document.querySelector(".gallery"),O=document.querySelector(".search-button"),h=document.querySelector(".search-input"),q=new W(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),a=document.querySelector(".load-more-button"),b=document.querySelector(".load-message"),w=document.querySelector(".secondary-load-message");let l=1,R="",f=15,d=0;O.addEventListener("click",z);function z(e){e.preventDefault();let t=String(h.value.trim());t=t.replace(/[*]/g,"");let s="";if(!t||t.length<2){c.warning({...p,message:"Enter data for search, please. Min. 2 symbols."}),h.value="",u(g,""),i(a);return}m(b),u(g,""),i(a),R=t,l=1,S(t,l,f).then(o=>{d=o.totalHits,o.hits.length===0?(c.error({...k,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),h.value="",i(b),u(g,"")):(h.value="",s=M(o.hits),i(b),u(g,s),q.refresh(),d>l*f?m(a):(c.warning({...p,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 118"),i(a)))}).catch(o=>{console.error("сталося щось дивне",o)})}a.addEventListener("click",D);function D(e){e.preventDefault(),l+=1;let t="";const s=Date.now();console.log("--- show load message ---"),m(w),d>l*f?m(a):(c.warning({...p,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 146"),i(a)),S(R,l,f).then(o=>{if(d=o.totalHits,o.hits.length===0)c.error({...k,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 163");else{t=M(o.hits),u(g,t,"beforeend"),q.refresh();const r=document.querySelector(".gallery-item");window.scrollBy({top:r.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),d>l*f?m(a):(c.warning({...p,message:"We're sorry, but you've reached<br>the end of search results."}),console.log("message in line 191"),i(a))}}).catch(o=>{console.error("сталося щось дивне",o)}),console.log(Date.now()-s,"--- hide load message ---"),i(w)}window.onerror=(e,t,s,o,r)=>{console.error("Unhandled error:",r)};
//# sourceMappingURL=commonHelpers.js.map
