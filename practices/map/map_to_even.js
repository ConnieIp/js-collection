'use strict';

function map_to_even(collection) {
    // return [2,4,6,8,10];
    // let result = [];
    // for (let i = 0; i < collection.length; i++) {
    //     result.push(collection[i] * 2);
    // }
    // return result;
    return collection.map(a => a * 2);
}
module.exports = map_to_even;