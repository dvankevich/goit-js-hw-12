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
