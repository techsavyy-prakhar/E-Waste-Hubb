const express = require('express');
const router = express.Router(); 

const categories = require('../models/categories');
const { checkAuthentication } = require('../middlewares');


router.get('/home', async (req,res)=>{
    const category = await categories.find({});
    res.render('home',{category});
})


module.exports = router;