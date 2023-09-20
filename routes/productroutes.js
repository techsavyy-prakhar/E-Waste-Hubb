const express = require('express');
const router = express.Router(); 

const products = require('../models/products');
const { checkAuthentication } = require('../middlewares');
// const {isAuthenticated} = require('../middlewares');

router.get('/:categoryname/products', checkAuthentication, async (req,res)=>{
    
    const {categoryname} = req.params;

    const product = await products.find({Category:categoryname});
    
    if (product[0].Percentage >= 95) {
      req.flash(
        "success",
        `Hey, your product category contains metals such  as ${product[0].Metals}  which are ${product[0].Percentage} % retrievable which can help you earn upto 2000 Coins`
      );
    }
    else if(product[0].Percentage==90){
        req.flash(
          "success",
          `Hey, your product category contains metals such  as ${product[0].Metals}  which are ${product[0].Percentage} % retrievable which can help you earn upto 1500 Coins`
        );
    }
    else if(product[0].Percentage==85){
        req.flash(
          "success",
          `Hey, your product category contains metals such  as ${product[0].Metals}  which are ${product[0].Percentage} % retrievable which can help you earn upto 1000 Coins`
        );
    }
    else if(product[0].Percentage==80){
        req.flash(
          "success",
          `Hey, your product category contains metals such  as ${product[0].Metals}  which are ${product[0].Percentage} % retrievable which can help you earn upto 500 Coins`
        );
    }
    

    
    res.render('products',{product});
})


module.exports = router;