let dates = ["1/7/2021", "1/6/2021", "8/18/2020", "8/6/2020"];

dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
console.log("sort dates: =>", dates)