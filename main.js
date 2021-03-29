let {data} = require('./data')
let {filterUnderMil, showPop, filterOverMil} = require('./functions')

console.log(data);
// console.log(filterOverMil(data));
console.log(showPop(data));



console.log("-----Lösung_under 100 tsd-----");
console.log(filterUnderMil(data));
console.log("-----Lösung_over 100-----");
console.log(filterOverMil(data));


console.log("-----directe Lösung function in main: -----");

let newArray = data.filter(function(item){
    return item.population <100000 ;
})
console.log(newArray);

console.log(data);
