'use strict';

const inverse = function (array, border = 0) {
    const from = border > 0 ? border : 0;
    const count = array.length - Math.abs(border);

    if(from >= array.length - 1 || count < 2)
        return array;

    array.splice(from, count, ...array.slice(from, from + count).reverse());
    return array;
};
