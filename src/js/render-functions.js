import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const myGallery = document.querySelector('.gallery');
const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

const itemMarkdown = `    <li class="gallery-item">
      <a href="https://pixabay.com/get/gf64bcba6d887d2c3b6bc019500819bd1cbb1d6722145784ce67b367a2a4bb6592136f3862fa13eb0c54d115ffde01998603e8bd3cdaae73cc9c5ce79485e7e38_1280.jpg" class="galery-item-image-link">
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

// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень

let galleryMarkdown = '';
for (let index = 0; index < 6; index++) {
  galleryMarkdown += itemMarkdown;
}

export function drawGallery(gallery, markdown) {
  gallery.innerHTML = markdown;
}

drawGallery(myGallery, '');

drawGallery(myGallery, galleryMarkdown);
simpleLightBox.refresh();
