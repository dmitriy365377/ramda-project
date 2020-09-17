const R = require('ramda');

const products = [
    { name: 'Jeans', price: 80, category: 'clothes', stock: 40 },
    { name: 'R2', price: 112, category: 'star-wars', stock: 80 },
    { name: 'Iphone', price: 444, category: 'phone', stock: 80 },
]

// const predicate = prod => prod.category === 'clothes'

const predicate = R.where({
    category: R.equals(R.__, "clothes"),
    stock: R.lt(R.__, 50)
})

const getResults = R.pipe(R.filter(predicate), R.pluck('name'))

const result = getResults(products)
console.log(result);