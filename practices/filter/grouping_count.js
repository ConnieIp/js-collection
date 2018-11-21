'use strict';

function grouping_count(collection) {

    //implement here
    let result = {};
    for (let i = 0; i < collection.length; i++) {
        if (result[collection[i]] != null) {
            result[collection[i]] = result[collection[i]] + 1;
        } else {
            result[collection[i]] = 1;
        }
    }
    return result;
}

module.exports = grouping_count;