const _ = require("lodash")

let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let users = [
    { id: 1, name: "ted" },
    { id: 1, name: "bob" },
    { id: 3, name: "sara" },
    { id: 4, name: "test" },
    { id: 4, name: "test" },
    { id: 5, name: "abc" }
];
const months = ['March', 'Jan', 'Feb', 'Dec'];

array.sort((a, b) => b - a)
console.log("sort: ", array)

users.sort((a, b) => (a.id > b.id ? -1 : Number(a.id > b.id)))
console.log("sort obj: ", users)
users.sort((a, b) => {
    let idOrderAsc = (a.id < b.id ? -1 : Number(a.id < b.id))
    let nameAsc = a.name.localeCompare(a.name)
    return idOrderAsc || nameAsc
})
console.log("sort obj 2 props: ", users)

months.sort((a, b) => b.localeCompare(a))
console.log("sort months: ", months)

let lds = _.orderBy(users, ["id", "name"], ["asc", "asc"])
console.log("lodash obj: ", lds)