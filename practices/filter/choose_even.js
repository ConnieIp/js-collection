'use strict';

function choose_even(collection) {

    //implement here
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            result.push(collection[i]);
        }
    }
    return result;
    // return collection.filter(a => a % 2 === 0);
}

module.exports = choose_even;