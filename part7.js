const R = require('ramda');

// const product = {
//     name: 'widget',
//     price: 10,
//     shippinWeight: '2 lbs'
// }

// // const getProps = R.pick(['name', 'price'])

// const getProps = R.pickBy(val => Number(val))

// const result = getProps(product)
// console.log(result)

const getName = () => Promise.resolve('Dima');
const getHobbies = () => new Promise((res, rej) => {
    setTimeout(() => res(['ku', 'nu']), 500)
})
//.then(([name, hobbies]) => ({ name: name, hobbies: hobbies }))
Promise.all([getName(), getHobbies()])
    .then(R.zip(['name', 'hobbies']))
    .then(console.log)