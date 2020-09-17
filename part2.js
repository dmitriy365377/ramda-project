const R = require('ramda');


// const average = R.lift(R.divide)(R.sum, R.length);
// console.log(average([8, 6, 7, 5, 3])); //=> 5.8



// const x = R.adjust(R.subtract(R.__, 10), 1, [100, 200, 300])
// console.log(x)


// const products = [
//     { name: 'Jeans', price: 80, category: 'clothes', stock: 100 },
//     { name: 'Andrey', price: 50, category: 'car', stock: 22 },
//     { name: 'Dima', price: 100, category: 'bom-bom', stock: 33 }
// ]

// const predicate = R.T

// const getResults = R.pipe(R.filter(predicate), R.pluck('name'))
// const result = getResults(products)
// console.log(result)


const arr = [10, 20, 30]
const f = x => x >= 10

const g = (h) => {
    return h >= 10
}

console.log(R.all(g, arr))