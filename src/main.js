import { getImages } from './js/pixabay-api';
import { getGalleryMarkdown, drawGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const loadMessageMarkdown =
  '<li class="load-message">Loading images, please wait...</li>';
const myGallery = document.querySelector('.gallery');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', function (event) {
  let searchTerm = String(searchInput.value.trim());
  searchTerm = searchTerm.replace(/[*]/g, ''); // видалення спецсимволів
  event.preventDefault();
  console.log(searchTerm.length);

  if (!searchTerm || searchTerm.length < 3) {
    console.log('Enter data for search, please. Min. 3 symbols.');
    return;
  }

  console.log(`fetch data from backend with search term: ${searchTerm}`);
  drawGallery(myGallery, loadMessageMarkdown);
});

let galleryMarkdown = '';
let images = getImages().hits;

//drawGallery(myGallery, loadMessageMarkdown);

galleryMarkdown = getGalleryMarkdown(images);
//drawGallery(myGallery, galleryMarkdown);
//drawGallery(myGallery, 'Loading images, please wait...');

//console.log(document.querySelectorAll('.gallery a'));
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
