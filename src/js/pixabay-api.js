import { getApiKey } from './crypto';

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
