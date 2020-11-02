import { Sleep } from "./Sleep";

/**
 *
 * @param url
 * @param sleep
 * @returns {Promise<any>}
 * @constructor
 */
export const Fetcher = async (url, sleep = 0) => {
  const response = await fetch(url);
  const json = await response.json();
  await Sleep(sleep);
  return json;
};
