let arr = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10]

console.log("pop: =>", arr.pop())
console.log("shift: =>", arr.shift())
console.log("last arr: =>", arr)

// slice (slice in new)
let arr2 = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10]
console.log("getSlice: =>", arr2.slice(2, 5))
console.log("arr2 slice: =>", arr2)

// splice (change reference)
let arr3 = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10]
let getSplice = arr3.splice(1, 3)
console.log("arr3 splice: =>", arr3)
console.log("getSplice: =>", getSplice)