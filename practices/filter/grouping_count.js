'use strict';

function grouping_count(collection) {

    //implement here
    // let result = {};
    // for (let i = 0; i < collection.length; i++) {
    //     if (result[collection[i]] != null) {
    //         result[collection[i]] = result[collection[i]] + 1;
    //     } else {
    //         result[collection[i]] = 1;
    //     }
    // }
    // return result;

    let result = {};
    let array = collection.filter((a, index, self) => self.indexOf(a) === index);
    for (let i = 0; i < array.length; i++) {
        result[array[i]] = collection.filter(b => b === array[i]).length;
    }
    return result;

    // let result = {};
    // let array = collection.filter((a, index, self) => self.indexOf(a) === index);
    // return new Map(array.map(c => [c, collection.filter(b => b === c).length]));

}

module.exports = grouping_count;