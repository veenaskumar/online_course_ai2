const express=require('express');
const {create1,getlecture,getalllecture,update,delete1} = require('../controller/lectures');

const router=express.Router();


router.route('/teach').get(getalllecture)
router.route('/teach').post(create1)
router.route('/:id').patch(update)
router.route('/:id').delete(delete1)
router.route('/:id').get(getlecture)

module.exports=router