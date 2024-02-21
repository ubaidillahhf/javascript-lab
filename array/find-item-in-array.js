let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let users = [
    { id: 1, name: "ted" },
    { id: 1, name: "bob" },
    { id: 3, name: "sara" },
    { id: 4, name: "test" },
    { id: 4, name: "test" },
    { id: 5, name: "abc" }
];

// includes: bool
console.log("includes: =>", array.includes(11)) // ✅
console.log("includes obj: =>", users.includes({ id: 5, name: "abc" })); // obx ❌

// find: first found or undefined
let findTwo = array.find((x) => { return x == 7 })
let findArrOfObj = users.find((x) => x.name == "abc")
console.log("find: search item with find =>", findTwo) // ✅
console.log("find obj: search item obj with find =>", findArrOfObj) // ✅

// every: check all, bool
console.log("every: search all and check all value is under n =>", array.every((x) => x < 8)) // ✅
console.log("every obj: search all and check all item obj value is not 'doe' =>", users.every((x) => x.name != "abc")) // ✅

// some: check at least one, bool
console.log("some: search all and check all value is under n =>", array.some((x) => x == 12)) // ✅

// filter: make array
console.log("filter: take under 5 =>", array.filter((val, idx, arr) => val < 5)) // ✅