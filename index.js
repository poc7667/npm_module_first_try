'use strict';

module.exports = {
    multiplyTwoNumber: function (a, b) {
        return a*b;
    },
    numFormatter: function(number, locale) {
        return number.toLocaleString(locale);
    }
}