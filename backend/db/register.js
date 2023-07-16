const mongoose=require('mongoose');
 mongoose.connect("mongodb://127.0.0.1:27017/wtproject")
 .then(()=>console.log("db is connected"))
 .catch((err)=>{console.log(err)});


 const registerShema= new mongoose.Schema({
 name:{
     type:String,
     required:true
    },
   id:{
    type:Number,
    required:true
   },
    video:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    field:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true
    }
 })
const Register=mongoose.model("register",registerShema);
module.exports=Register;