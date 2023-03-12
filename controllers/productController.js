
const Product = require('../models/product');
const mongo = require('mongodb');

//API to create products inventory
    module.exports.createProduct = async function(req,res){
       console.log("this is the array",req.body);

       let reqArray = req.body;
       Product.collection.insert(reqArray,function(error,products) {
         if(error){
            return res.json({
               "status" : '401',
               "data" : "its error"
            })}else{
               return res.json({
                  "status" : 200,
                  "data" : products
               })
         }
      })
    }

    //API to fetch products from inventory
module.exports.showProducts = async function(req,res){
   console.log("going to get the list of all products from the databse");
   Product.find((err,products) =>{
      if(err){
         return res.json({
            "satus" : 401,
            "data" : "some issues are there in fetching list of objects"  
         });
      }else{
         return res.json({
            "status" : 200,
            "data" : products
         })
      }
   })
}

//API to delete products from inventory
module.exports.deleteProduct = async function(req,res){
   console.log("this is the id of the object that we are going to delete",req.params.id);
   Product.findByIdAndDelete(req.params.id, (err,product) =>{
      if(err){
         console.log("is not found");
         return res.json({
            "status" : 204,
            "data" : "this product not found in system"
         });
      }else{
         console.log("we have got the requested id and its being deleted from the database as well");
         return res.json({
            "status" : 200,
            "data" : [`${product._id} + is deleted successfully`]
         })
      }
   })
   
}

//API to update products in inventory
module.exports.updateProduct = async function(req,res){
 console.log("we are form the inside products : UPDATE FUNCTONS",req.params.id,req.query.quantity);  
 Product.findByIdAndUpdate(req.params.id,{quantity : req.query.quantity},(error,product)=>{
   if(error){
      return res.json({
         "status" : 202,
         data : " is not updated"
            })
   }else{
      return res.json({
         "status" : 200,
         data : product
      })
   }
 })
}