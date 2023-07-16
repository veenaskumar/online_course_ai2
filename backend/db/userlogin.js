const mongoose=require('mongoose');

const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
mongoose.connect('mongodb://127.0.0.1:27017/wtproject')
.then(()=>console.log('mongodb conneted........'))
.catch((err)=>console.log(err));

const Loginschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

const Login=mongoose.model('login',Loginschema);
module.exports=Login

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { Login, validate };