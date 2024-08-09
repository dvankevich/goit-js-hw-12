import response from '../testdata/cats.json';

/**
 *
 * @param {string} searchTerm
 * @returns JSON object
 */
export function getImages(searchTerm) {
  //sleep(3000);
  if (searchTerm === 'test') {
    return '';
  }
  return response;
}

// emulate API delay. for test progress message.
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
