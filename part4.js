const R = require('ramda');

const person = {
    firstName: 'Dima',
    lastName: "Yagodkov"
}

const fLens = R.lens(R.prop('firstName'), R.assoc('firstName'))

const result = R.set(fLens,"Wilma", person)

console.log(result)
console.log(person)