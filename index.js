// determine whether the collection is an object or an array and, 
// if it's an object, use a JavaScript Object method to create an array that 
// contains the object's values. You then only need to write code that processes 
// an array, regardless of what data structure is passed in to your function. 
// Use your Googling skills to figure out how to do this.




function myEach(collection, callback){
// console.log(collection)
// console.log(Array.isArray(collection))
let arrayCollection = collection
    if (false === Array.isArray(collection)){
// console.log((false === Array.isArray(collection)))
    arrayCollection = Object.values(collection)
//  console.log(arrayCollection)
    }
for(let i = 0; i < arrayCollection.length; i++){
    callback((arrayCollection[i]))
} 
return collection
};

function myMap(collection, callback){
    // console.log(collection)
    // console.log(callback)
let newArray = []
let arrayCollection = collection
    if (false === Array.isArray(collection)){
        arrayCollection = Object.values(collection)
    }
arrayCollection.forEach(element => {
newArray.push(callback(element))
})
return newArray
};

function myReduce(collection, callback, acc){
    // console.log(collection)
    // console.log(callback)
    // console.log(acc)
let arrayCollection = collection
if (false === Array.isArray(collection)){
        arrayCollection = Object.values(collection)
    }   
if (typeof acc === 'undefined'){
    acc = arrayCollection[0]
    arrayCollection = arrayCollection.slice(1)
}
for (let i = 0; i < arrayCollection.length; i++){
    acc = callback(acc, arrayCollection[i], arrayCollection)
    }
    return acc
};

function myFind(collection, predicate){
    // console.log(collection)
    // console.log(predicate)
    let checker = arr => arr.every(Boolean);
    // console.log(checker(collection))
    let arrayCollection = collection
    for (let i = 0; i < arrayCollection.length; i++){
         if(predicate(arrayCollection[i])){
         return arrayCollection[i]
        // console.log(arrayCollection[i])
         }
    }
}

function myFilter(collection, predicate){
    // console.log(collection)
    // console.log(predicate)
    let checker = arr => arr.every(Boolean)
    // console.log(checker(collection))
    let arrayCollection = collection
    let newArray = []
    for (let i = 0; i < arrayCollection.length; i++){
        if (predicate(arrayCollection[i])){
            // console.log((predicate(arrayCollection[i])))
            newArray.push(arrayCollection[i])
        }
    }
    return newArray
} 

function covertCollection(collection){
if (false === Array.isArray(collection)){
   let arrayCollection = Object.keys(collection)
   return arrayCollection
} else {
    return collection.slice()
    }  
}

function mySize(collection){
    let newCollection = covertCollection(collection)
    // console.log(collection)
let total = newCollection.length

return total

}


function myFirst(array, n = false){
if (n) {
    return array.slice(0, n)
} else {
    return array[0]  
}
};

function myLast(array, n = false){
    // console.log(array)
    if (n) {
// console.log(array.slice[3])
        return array.slice(array.length - n, array.length)
    } else {
        return array[array.length - 1]
    }
}

function myKeys(object){
    // console.log(object)
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}