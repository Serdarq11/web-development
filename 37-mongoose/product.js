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
            min: [0, 'price must be positive ya dodo']
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
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    });

    // productSchema.methods.greet = function() {
    //     console.log('HELLO, HI! HOWDY!!');
    //     console.log(`- from ${this.name}`); // calling the instance from below -> foundProduct
    // }

    productSchema.methods.toggleOnSale = function() {
        this.onSale = !this.onSale;
        return this.save();    // this refers to particular instance of Product
    }


    productSchema.methods.addCategory = function(newCat) {
        this.categories.push(newCat);
        return this.save();    // this refers to particular instance of Product
    }

    productSchema.statics.fireSale = function() {
        return this.updateMany({}, {onSale: true, price: 0})    // 'this' directly refer to the Product itself, below
    }

    const Product = mongoose.model('Product', productSchema);

    const findProduct = async () => {
        const foundProduct = await Product.findOne({name: 'Bike Helmet'});
        //foundProduct.greet();
        console.log(foundProduct);
        await foundProduct.toggleOnSale();
        console.log(foundProduct);
        await foundProduct.addCategory('Outdoors');
        console.log(foundProduct);
    }

    //findProduct();
    Product.fireSale().then(res => console.log(res));

    // const bike = new Product({name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS'});  // size: ValidatorError: `XS` is not a valid enum value for path `size`.  
    // //if don't type name, we get an error because the name is required
    // //if type additional information like color : 'red', we don't get error but it does not seem. 
    // bike.save()
    //     .then( data => {
    //         console.log('IT WORKED!')
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log('OH NO, ERROR');
    //         console.log(err);
    //     })



    // Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 100}, {new: true, runValidators: true})   // we type runValidators: true because if we update the price with a negative value, it won't give an error
    //     .then( data => {
    //         console.log('IT WORKED!')
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log('OH NO, ERROR');
    //         console.log(err);
    //     })