const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullname').get(function() {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', function() {
    this.first = 'Yo';
    this.last = 'Mama';
    console.log('ABOUT TO SAVE!!');
})
personSchema.post('save', function() {
    console.log('JUST SAVED!!');
})
// > CONNECTION OPEN!!!
// > const p = new Person({first: 'Serdar', last: 'Kaya'})
// undefined
// > p
// {
//   first: 'Serdar',
//   last: 'Kaya',
//   _id: new ObjectId('68bab0290ff8460bcd8e330a')
// }
// > p.save().then(res => console.log(res))
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 2136,
//   [Symbol(trigger_async_id_symbol)]: 2129
// }
// > ABOUT TO SAVE!!
// JUST SAVED!!
// {
//   first: 'Yo',           // again these will appear
//   last: 'Mama',
//   _id: new ObjectId('68bab0290ff8460bcd8e330a'),
//   __v: 0
// }



const Person = mongoose.model('Person', personSchema);