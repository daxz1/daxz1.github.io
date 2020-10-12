/**
 *
 * @param ms
 * @returns {Promise<unknown>}
 * @constructor
 */
export const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));