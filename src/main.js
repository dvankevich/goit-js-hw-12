import { getImages } from './js/pixabay-api';
import { getGalleryMarkdown, drawGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const myGallery = document.querySelector('.gallery');

//drawGallery(myGallery, '');

let galleryMarkdown = '';
let images = getImages().hits;

galleryMarkdown = getGalleryMarkdown(images);
//drawGallery(myGallery, galleryMarkdown);
//drawGallery(myGallery, 'Loading images, please wait...');

//console.log(document.querySelectorAll('.gallery a'));
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
