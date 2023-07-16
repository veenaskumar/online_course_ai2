const express=require('express');
const user=express.Router();
const {load,insert}=require('../controller/userlogin')

user.route('/signup').post(insert);
user.route('/login').post(load)

module.exports=user