import response from '../testdata/cats.json';
import empty from '../testdata/empty.json';
import { getApiKey } from './crypto';

// BUGs
// цікава поведінка з запитами кирилицею, можливо через перекодування.
// запит "кіт" перетворюється на %D0%BA%D1%96%D1%82 і виводить зовсім не котів.
// simpleLightBox після такого запиту веде себе некорректно.
// Забрав encodeURIComponent  - "кіт" видає релевантний пошук, а от "чорна кішка" вже ні.
//
// також в консолі видає попередження:
// Source map error: No sources are declared in this source map.
// Resource URL: http://localhost:5173/@fs/home/dima/01FullStack/02js/goit-js-hw-11/node_modules/.vite/deps/chunk-CQXHTUV2.js?v=729a0ab5
// Source Map URL: chunk-CQXHTUV2.js.map

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

export function getImagesTest(searchTerm) {
  return fakeFetch(searchTerm)
    .then(searchTerm => {
      console.log(searchTerm, 'in getImagesTest');
      if (searchTerm === 'test') {
        return empty;
      } else {
        return response;
      }
    })
    .catch(error => {
      console.error(error);
      return empty;
    });
}

const fakeFetch = searchTerm => {
  return new Promise((resolve, reject) => {
    const timeout = Math.round(Math.random() * 2000);
    console.log(
      `emulate fetch search result with timeout: ${timeout} for search term: ${searchTerm}`
    );
    setTimeout(() => {
      if (!(searchTerm === 'error')) {
        resolve(searchTerm);
      } else {
        reject('http error in reject');
      }
    }, timeout);
  });
};
