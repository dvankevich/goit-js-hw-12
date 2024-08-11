import { getImages } from './js/pixabay-api';
import { getImagesTest } from './js/pixabay-api';
import { getGalleryMarkdown, drawGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const iziCommon = {
  message: 'Common message',
  theme: 'dark',
  position: 'topRight',
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  imageWidth: 24,
};

const iziError = {
  ...iziCommon,
  color: '#ef4040',
  iconUrl: 'error-icon.svg', // зображення має бути у папці public
};

const iziWarning = {
  ...iziCommon,
  title: 'Warning',
  color: '#ffa000',
  iconUrl: 'caution-icon.svg',
};

const loadMessageMarkdown =
  '<li class="load-message">Loading images, please wait...</li>';
const myGallery = document.querySelector('.gallery');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

searchButton.addEventListener('click', searchButtonHandler);

function searchButtonHandler(event) {
  event.preventDefault();
  let searchTerm = String(searchInput.value.trim());
  searchTerm = searchTerm.replace(/[*]/g, ''); // видалення спецсимволів
  let galleryMarkdown = '';
  let images = '';
  // console.log(searchTerm.length);

  if (!searchTerm || searchTerm.length < 3) {
    iziToast.warning({
      ...iziWarning,
      message: 'Enter data for search, please. Min. 3 symbols.',
    });
    // console.log('Enter data for search, please. Min. 3 symbols.');
    searchInput.value = ''; // clear input
    drawGallery(myGallery, ''); // clear gallery
    return;
  }

  console.log(`fetch data from backend with search term: ${searchTerm}`);
  drawGallery(myGallery, loadMessageMarkdown);

  // -----
  //images = getImages(searchTerm);
  //console.log(images.hits);
  //
  //console.log(getImages(searchTerm));

  getImages(searchTerm)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          ...iziError,
          message:
            'Sorry, there are no images matching<br> your search query. Please, try again!',
        });
        // console.log(
        //   'Sorry, there are no images matching your search query. Please, try again!'
        // );
        searchInput.value = ''; // clear input
        drawGallery(myGallery, ''); // clear gallery
      } else {
        searchInput.value = ''; // clear input

        galleryMarkdown = getGalleryMarkdown(images.hits);

        drawGallery(myGallery, galleryMarkdown);
        simpleLightBox.refresh();
      }
    })
    .catch(error => {
      console.error('сталося щось дивне', error);
    });
}

// обробка інших помилок
window.onerror = (message, source, lineno, colno, error) => {
  // Обробляємо всі необроблені помилки
  console.error('Unhandled error:', error);
};
