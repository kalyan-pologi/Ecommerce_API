const mongoose = require('mongoose');
// creating user schema
const productSchema = new mongoose.Schema({
    Id:{
        type:String,
        // required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
 },  
 {timestamps:true
    

});

const product = mongoose.model('product',productSchema);
module.exports=product;
