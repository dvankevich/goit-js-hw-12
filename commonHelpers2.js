import{g as m}from"./assets/crypto-55b241c4.js";import{S as g,i as n}from"./assets/vendor-3e3f3885.js";function p(e){const o=`https://pixabay.com/api/?${new URLSearchParams({key:m(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).catch(a=>console.log("Error fetching photos:",a))}function f(e){return`
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
`}function h(e){return e.map(f).join("")}function t(e,i){e.innerHTML=i}const l={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},u={...l,color:"#ef4040",iconUrl:"error-icon.svg"},y={...l,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},d='<li class="load-message">Loading images, please wait...</li>',s=document.querySelector(".gallery"),w=document.querySelector(".search-button"),r=document.querySelector(".search-input"),v=new g(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});w.addEventListener("click",k);function k(e){e.preventDefault();let i=String(r.value.trim());i=i.replace(/[*]/g,"");let o="";if(!i||i.length<3){n.warning({...y,message:"Enter data for search, please. Min. 3 symbols."}),r.value="",t(s,"");return}console.log(`fetch data from backend with search term: ${i}`),t(s,d),p(i).then(a=>{a.hits.length===0?(n.error({...u,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),r.value="",t(s,"")):(r.value="",o=h(a.hits),t(s,o),v.refresh())}).catch(a=>{console.error("сталося щось дивне",a)})}window.onerror=(e,i,o,a,c)=>{console.error("Unhandled error:",c)};
//# sourceMappingURL=commonHelpers2.js.map
