const _ = require("lodash")

let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];

// lodash (require new package)
let listUniqueLodash = _.uniq(array)
console.log(`Unique array with lodash => ${listUniqueLodash}`)

// filter
let listUniqueFilter = array.filter((val, idx, arr) => {
    return arr.indexOf(val) == idx
});
console.log(`Unique array with filter => ${listUniqueFilter}`)

// using Set
let listUniqueSet = [...new Set(array)]
console.log(`Unique array with set => ${listUniqueSet}`)