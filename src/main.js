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
  event.preventDefault();
  let searchTerm = String(searchInput.value.trim());
  searchTerm = searchTerm.replace(/[*]/g, ''); // видалення спецсимволів
  let galleryMarkdown = '';
  let images = '';
  // console.log(searchTerm.length);

  if (!searchTerm || searchTerm.length < 3) {
    console.log('Enter data for search, please. Min. 3 symbols.');
    searchInput.value = ''; // clear input
    drawGallery(myGallery, ''); // clear gallery
    return;
  }

  console.log(`fetch data from backend with search term: ${searchTerm}`);
  drawGallery(myGallery, loadMessageMarkdown);

  images = getImages(searchTerm);
  // console.log(images);

  if (!images) {
    console.log(
      'Sorry, there are no images matching your search query. Please, try again!'
    );
    searchInput.value = ''; // clear input
    drawGallery(myGallery, ''); // clear gallery
  } else {
    searchInput.value = ''; // clear input
    galleryMarkdown = getGalleryMarkdown(images.hits);
    drawGallery(myGallery, galleryMarkdown);
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.8,
    });
  }
});
