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

/**
 * show warning message
 * @param {string} message
 */
export function messageWarning(message) {
  iziToast.warning({
    ...iziWarning,
    message: message,
  });
}

/**
 * show error message
 * @param {string} message
 */
export function messageError(message) {
  iziToast.error({
    ...iziError,
    message: message,
  });
}

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

/**
 * @param {Array} images array
 * @returns HTML markdown for gallery
 */
export function getGalleryMarkdown(images) {
  return images.map(getItemMarkdown).join('');
}

/**
 * @param {Object} gallery gallery DOM object
 * @param {String} markdown HTML markdown for gallery
 * @param {String} mode:
 * full (default) - replace with InnerHTML
 * beforebegin, afterbegin, beforeend, afterend - insert with insertAdjacentHTML
 */
export function drawGallery(gallery, markdown, mode = 'full') {
  switch (mode) {
    case 'full':
      gallery.innerHTML = markdown;
      break;

    default:
      gallery.insertAdjacentHTML(mode, markdown);
      break;
  }
}

/**
 * add class visually-hidden to Object
 * @param {Object} htmlObject DOM Object to show
 */
export function showHtmlObject(htmlObject) {
  htmlObject.classList.remove('visually-hidden');
}

/**
 * remove class visually-hidden from Object
 * @param {Object} htmlObject DOM Object to hide
 */
export function hideHtmlObject(htmlObject) {
  htmlObject.classList.add('visually-hidden');
}
