const { PI, square } = require('./math');
console.log(PI);

const cats = require('./shelter');      // all cats directory
console.log('REQUIRED AN ENTIRE DIRECTORY', cats);

console.log(square(9));