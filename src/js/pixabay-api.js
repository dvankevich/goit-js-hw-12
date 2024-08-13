import { getApiKey } from './crypto';
import axios from 'axios';

/**
 *
 * @param {string} searchTerm
 * @returns JSON object
 */
export function getImages(searchTerm) {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  const apiParams = new URLSearchParams({
    key: getApiKey(),
    //q: encodeURIComponent(searchTerm), // працює і без того
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const queryUrl = `https://pixabay.com/api/?${apiParams}`;
  //console.log(queryUrl);
  return fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error fetching photos:', error));
}

export async function getImagesAxios(searchTerm, page = 1) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: getApiKey(),
        q: searchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });
    console.log(response);

    return response;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}
