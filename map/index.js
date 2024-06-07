
const testArray = ['a', 'b', 'c', 'd', 'e'];


const myMap = (array) => {
    const initArray = [];
    
    for (let i = 0; i < array.length; i++ ) {
        const obj = {
            id: i,
            value: array[i]
        }
    
        initArray.push(obj);
    }

    return initArray;
}

console.log(myMap(testArray))

console.log(testArray.map((value, i) => {
    const obj = {
        id: i,
        value: value
    }

    return obj
}))