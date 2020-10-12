import {Sleep} from "./Sleep";

/**
 *
 * @param key
 * @param url
 * @param sleep
 * @returns {Promise<Error|any>}
 * @constructor
 */
export const Fetcher = async (key, url, sleep = 0) => {
  const response = await fetch(url);
  const json = await response.json();
  await Sleep(sleep);
  return json;
}