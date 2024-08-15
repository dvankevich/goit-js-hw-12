import { getApiKey } from './crypto';
import axios from 'axios';

/**
 * @param {string} searchTerm
 * @param {Number} page number. default: 1.
 * @param {Number} itemsPerPage number. default: 15.
 * @returns JSON object
 */
export async function getImagesAxios(searchTerm, page = 1, itemsPerPage = 15) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: getApiKey(),
        q: searchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: itemsPerPage,
        page: page,
      },
    });
    //console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}
