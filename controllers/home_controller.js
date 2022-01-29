// Import Model;
const product = require('../models/home_model');

//reading product list
module.exports.homes = (req, res)=>{
    product.find({} ,(err, productdetails)=>{
        if(err){
            console.log('error in fetching the product list');
            return;       
        }
        // console.log(productdetails);
        return res.render('home', 
            {
                title: 'Product List',
                product_list: productdetails
            }
        );
    });
    
}

//adding
module.exports.add =(req , res) =>{
    return res.render('../views/add');
}
//adding product list
module.exports.addProduct = (req, res)=>{
    product.create(
        {
           name: req.body.name,
           quantity: req.body.quantity,
        } , (err , newProduct) =>{
        if(err){
            console.log(err);
            return;        
        }
        console.log(newProduct);
         return res.redirect('/');
    });
}
//editing
module.exports.edit = (req , res) =>{
    return res.render('edit',{
        title:'Edit',
        product_id:req.params.id
    })
    
}
//updating product list\

module.exports.updateProduct = async function (req, res) {
    let prod = await product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      quantity: req.body.quantity,
    });
   
    return res.redirect("/");
  };

//deleteing product list
module.exports.deleteProduct = (req, res) =>{
    let id = req.query.id
    product.findByIdAndDelete(id ,(err , deleteproduct) =>{
        if(err){
            console.log(err)
            return;       
        }
         return res.redirect('/');
    });
    
}

