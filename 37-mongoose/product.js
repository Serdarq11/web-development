const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

    const productSchema = new mongoose.Schema({
        name: {     // the long way of making schema
            type: String,
            required: true,      // by default it is true
            maxlenght: 20
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        }
    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product({name: 'Tire Pump', price: 599, categories: ['Cycling']});  
    // if don't type name, we get an error because the name is required
    // if type additional information like color : 'red', we don't get error but it does not seem. 
    // bike.save()
    //     .then( data => {
    //         console.log('IT WORKED!')
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log('OH NO, ERROR');
    //         console.log(err);
    //     })
    Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 100}, {new: true, runValidators: true})   // we type runValidators: true because if we update the price with a negative value, it won't give an error
        .then( data => {
            console.log('IT WORKED!')
            console.log(data)
        })
        .catch(err => {
            console.log('OH NO, ERROR');
            console.log(err);
        })