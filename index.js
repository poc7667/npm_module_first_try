'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

// 也可以直接用 exports 當縮寫
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};