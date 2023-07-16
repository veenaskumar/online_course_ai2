const express=require('express');
const {rescreate1,getallregister} = require('../controller/register');

const register=express.Router();


register.route('/:name').get(getallregister)
register.route('/reg').post(rescreate1)

module.exports=register