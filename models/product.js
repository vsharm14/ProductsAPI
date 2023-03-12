const mongoose = require('mongoose');

//Product database model
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity :{
        type :Number
    }
},{
    timestamps :true
}
);

const Product = mongoose.model('Product',productSchema);
module.exports = Product;