let arr = [2, 1, 5]

let sumAll = arr.reduce((total, current) => {
    console.log("total => ", total)
    console.log("current => ", current)
    return total + current
})
console.log("sumAll =>", sumAll)