const myGallery = document.querySelector('.gallery');

const itemMarkdown = `    <li class="gallery-item">
      <a href="" class="galery-item-image-link">
        <img class="galery-item-image"
          src="https://pixabay.com/get/g6c45b412d164ddb540292fe4a772cf6f1eb0f664be5f90ab44685310b9bd4d962e65ab1264913e40ec529661deac2d02941cf845ab60cede687f3d24d09f9b15_640.jpg"
          alt="simba, cat, portrait" />
      </a>
      <ul class="image-info">
        <li class="image-info-item">
          <p class="info-item-caption">Likes</p>
          <p class="info-item-value">1813</p>
        </li>
        <li class="image-info-item">
          <p class="info-item-caption">Views</p>
          <p class="info-item-value">900290</p>

        </li>
        <li class="image-info-item">
          <p class="info-item-caption">Comments</p>
          <p class="info-item-value">229</p>
        </li>
        <li class="image-info-item">
          <p class="info-item-caption">Downloads</p>
          <p class="info-item-value">610937</p>
        </li>
      </ul>
    </li>`;

let galleryMarkdown = '';
for (let index = 0; index < 6; index++) {
  galleryMarkdown += itemMarkdown;
}

export function drawGallery(gallery, markdown) {
  gallery.innerHTML = markdown;
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

clearGallery(myGallery);

drawGallery(myGallery, galleryMarkdown);
