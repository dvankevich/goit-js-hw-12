import response from '../testdata/cats.json';
import empty from '../testdata/empty.json';

/**
 *
 * @param {string} searchTerm
 * @returns JSON object
 */
export function getImages(searchTerm) {
  if (searchTerm === 'test') {
    return empty;
  }
  return response;
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
