import { getImagesAxios } from './js/pixabay-api';
import {
  getGalleryMarkdown,
  drawGallery,
  showHtmlObject,
  hideHtmlObject,
} from './js/render-functions';
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

const myGallery = document.querySelector('.gallery');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
const loadMoreButton = document.querySelector('.load-more-button');
const loadMessage = document.querySelector('.load-message');
const secondaryLoadMessage = document.querySelector('.secondary-load-message');

let page = 1;
let searchTermGlobal = '';
let perPage = 15; // items per page
let totalHits = 0;

searchButton.addEventListener('click', searchButtonHandler);
loadMoreButton.addEventListener('click', loadMoreButtonHandler);

async function searchButtonHandler(event) {
  event.preventDefault();
  let searchTerm = String(searchInput.value.trim());
  searchTerm = searchTerm.replace(/[*]/g, ''); // видалення спецсимволів
  let galleryMarkdown = '';
  let images = '';

  if (!searchTerm || searchTerm.length < 2) {
    iziToast.warning({
      ...iziWarning,
      message: 'Enter data for search, please. Min. 2 symbols.',
    });
    searchInput.value = ''; // clear input
    drawGallery(myGallery, ''); // clear gallery
    hideHtmlObject(loadMoreButton);
    return;
  }

  showHtmlObject(loadMessage);
  drawGallery(myGallery, ''); // clear gallery
  hideHtmlObject(loadMoreButton);

  searchTermGlobal = searchTerm; // save searchTerm in global variable;
  page = 1;

  images = await getImagesAxios(searchTerm, page, perPage);

  totalHits = images.totalHits;
  if (images.hits.length === 0) {
    iziToast.error({
      ...iziError,
      message:
        'Sorry, there are no images matching<br> your search query. Please, try again!',
    });
    searchInput.value = ''; // clear input
    hideHtmlObject(loadMessage);
    drawGallery(myGallery, ''); // clear gallery
  } else {
    searchInput.value = ''; // clear input

    galleryMarkdown = getGalleryMarkdown(images.hits);

    hideHtmlObject(loadMessage);
    drawGallery(myGallery, galleryMarkdown);

    simpleLightBox.refresh();

    if (totalHits > page * perPage) {
      showHtmlObject(loadMoreButton);
    } else {
      iziToast.warning({
        ...iziWarning,
        message:
          "We're sorry, but you've reached<br>the end of search results.",
      });
      hideHtmlObject(loadMoreButton);
    }
  }
}

async function loadMoreButtonHandler(event) {
  event.preventDefault();
  page += 1;
  let galleryMarkdown = '';
  let images = '';

  showHtmlObject(secondaryLoadMessage);

  if (totalHits > page * perPage) {
    showHtmlObject(loadMoreButton);
  } else {
    hideHtmlObject(loadMoreButton);
  }

  images = await getImagesAxios(searchTermGlobal, page, perPage); // використовуємо глобальний searchTerm

  totalHits = images.totalHits;
  if (images.hits.length === 0) {
    // тут вже не перша сторінка і якщо результат пошуку пустий то більше зображень нема
    iziToast.error({
      ...iziError,
      message: "We're sorry, but you've reached<br>the end of search results.",
    });
  } else {
    galleryMarkdown = getGalleryMarkdown(images.hits);
    drawGallery(myGallery, galleryMarkdown, 'beforeend'); // додаємо зображення на екран
    simpleLightBox.refresh();
    // scroll
    const galleryItem = document.querySelector('.gallery-item');
    window.scrollBy({
      top: galleryItem.getBoundingClientRect().height * 2,
      left: 0,
      behavior: 'smooth',
    });

    if (totalHits > page * perPage) {
      showHtmlObject(loadMoreButton);
    } else {
      iziToast.warning({
        ...iziWarning,
        message:
          "We're sorry, but you've reached<br>the end of search results.",
      });
      hideHtmlObject(loadMoreButton);
    }
  }
  hideHtmlObject(secondaryLoadMessage);
}

// обробка інших помилок
window.onerror = (message, source, lineno, colno, error) => {
  // Обробляємо всі необроблені помилки
  console.error('Unhandled error:', error);
};
