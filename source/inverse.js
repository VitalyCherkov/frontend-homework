'use strict';

const inverse = function (array, border) {
    border = border || 0;

    let from = border > 0 ? border : 0;
    let count = array.length - Math.abs(border);

    if(from >= array.length - 1 || count < 2)
        return array;

    array.splice(from, count, ...array.slice(from, from + count).reverse());
    return array;
};
