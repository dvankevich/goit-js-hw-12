import{C as d,a as M,S as k,i as f}from"./assets/vendor-62372433.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const q="mySecretKey123";function B(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return d.AES.decrypt(e,q).toString(d.enc.Utf8)}async function y(e,t=1){try{return(await M.get("https://pixabay.com/api/",{params:{key:B(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}catch(r){throw console.error("Error fetching photos:",r),r}}function C(e){return`
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
`}function v(e){return e.map(C).join("")}function a(e,t,r="full"){switch(r){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(r,t);break}}function g(e){e.classList.remove("visually-hidden")}function p(e){e.classList.add("visually-hidden")}const b={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},w={...b,color:"#ef4040",iconUrl:"error-icon.svg"},E={...b,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},O='<li class="load-message">Loading images, please wait...</li>',n=document.querySelector(".gallery"),R=document.querySelector(".search-button"),l=document.querySelector(".search-input"),L=new k(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),c=document.querySelector(".load-more-button"),h=document.querySelector(".secondary-load-message");let u=1,S="";R.addEventListener("click",z);function z(e){e.preventDefault();let t=String(l.value.trim());t=t.replace(/[*]/g,"");let r="";if(!t||t.length<3){f.warning({...E,message:"Enter data for search, please. Min. 3 symbols."}),l.value="",a(n,"");return}a(n,O),S=t,u=1,y(t,u).then(i=>{i.hits.length===0?(f.error({...w,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),l.value="",a(n,"")):(l.value="",r=v(i.hits),a(n,r),L.refresh(),g(c))}).catch(i=>{console.error("сталося щось дивне",i)})}c.addEventListener("click",H);function H(e){e.preventDefault(),u+=1;let t="";g(h),p(c),y(S,u).then(r=>{if(r.hits.length===0)f.error({...w,message:"We're sorry, but you've reached<br>the end of search results."});else{t=v(r.hits),a(n,t,"beforeend"),L.refresh();const i=document.querySelector(".gallery-item");window.scrollBy({top:i.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),g(c)}}).catch(r=>{console.error("сталося щось дивне",r)}),p(h)}window.onerror=(e,t,r,i,o)=>{console.error("Unhandled error:",o)};
//# sourceMappingURL=commonHelpers.js.map
