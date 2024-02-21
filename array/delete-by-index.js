let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];

delete array[1]
array = array.filter((val) => val != undefined)
console.log("del array index n: =>", array)