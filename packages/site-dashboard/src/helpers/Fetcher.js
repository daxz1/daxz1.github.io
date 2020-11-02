/**
 *
 * @param url
 * @returns {Promise<any>}
 * @constructor
 */
export const Fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
