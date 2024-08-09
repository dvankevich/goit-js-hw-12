import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './pixabay-api';

const myGallery = document.querySelector('.gallery');
// const simpleLightBox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 500,
//   overlayOpacity: 0.8,
// });

const images = getImages().hits;

function getItemMarkdown(item) {
  // webformatURL — посилання на маленьке зображення для списку карток у галереї
  // largeImageURL — посилання на велике зображення для модального вікна
  // tags — рядок з описом зображення. Підійде для атрибута alt
  // likes — кількість вподобайок
  // views — кількість переглядів
  // comments — кількість коментарів
  // downloads — кількість завантажень
  return `
  <li class="gallery-item">
    <a href="${item.largeImageURL}"
      class="galery-item-image-link">
      <img class="galery-item-image"
        src="${item.webformatURL}"
        alt="${item.tags}" />
    </a>
    <ul class="image-info">
      <li class="image-info-item">
        <p class="info-item-caption">Likes</p>
        <p class="info-item-value">${item.likes}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Views</p>
        <p class="info-item-value">${item.views}</p>

      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Comments</p>
        <p class="info-item-value">${item.comments}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Downloads</p>
        <p class="info-item-value">${item.downloads}</p>
      </li>
    </ul>
  </li>
`;
}

console.log(getItemMarkdown(images[0]));

let galleryMarkdown = '';

function getGalleryMarkdown(images) {
  return images.map(getItemMarkdown).join('');
}

galleryMarkdown = getGalleryMarkdown(images);

export function drawGallery(gallery, markdown) {
  gallery.innerHTML = markdown;
}

drawGallery(myGallery, '');

drawGallery(myGallery, galleryMarkdown);
console.log(document.querySelectorAll('.gallery a'));
//simpleLightBox.refresh();
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
