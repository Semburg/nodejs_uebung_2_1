
function showPop(array){
    let newArray = array.map(item => item.population )
    return newArray
}

// function filterOverMil(array){
//     let newArray = array.map(item => item.population >1000000)
//     return newArray
// }

function filterOverMil(array){
    let newArray = array.filter(function(item){
        return item.population >100000 ;
    })
    return newArray;
}

function filterUnderMil(array){
    let newArray = array.filter(function(item){
        return item.population <100000 ;
    })
    return newArray;
}

// function filterOverMil2(array){
//     let x = array.length;
//     let newArray; 

//     for(let i = 0; i<x; i++){
//         if(array[i].population > 100000){
//             newArray.push(array[i])
            
//         }
//     }
    
// }

module.exports = {filterOverMil, showPop, filterUnderMil}