let users = [
    { id: 1, name: "ted" },
    { id: 1, name: "bob" },
    { id: 3, name: "sara" },
    { id: 4, name: "test" },
    { id: 4, name: "test" },
    { id: 5, name: "abc" }
];

// filter
let newUserFilter = users.filter((val, idx, arr) => arr.findIndex(t => t.id == val.id || t.name == val.name) == idx)
console.log("Unique Obj with filter => ", newUserFilter)

// set
let newUserSet = Array.from(users.reduce((val, t) => val.set(t.id, t), new Map()).values());
console.log("Unique Obj with set => ", newUserSet)
