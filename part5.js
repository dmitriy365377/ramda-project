const R = require('ramda');


const pets = [
    { name: 'Spike', type: 'dog' },
    { name: 'Mittens', type: 'cat' },
    { name: 'Rover', type: 'dog' },
    { name: 'Fluffy', type: 'cat' },
    { name: 'Fido', type: 'dog' },
    { name: 'Spike-2', type: 'dog' },
]

const dogCheck = pet => pet.type == 'dog';
const catCheck = pet => pet.type == 'cat';

//const result = R.reject(dogCheck, pets);

const result = R.partition(dogCheck, pets);

console.log(result)