const mongoose=require('mongoose');
 mongoose.connect("mongodb://127.0.0.1:27017/wtproject")
 .then(()=>console.log("db is connected"))
 .catch((err)=>{console.log(err)});


 const lectureShema= new mongoose.Schema({
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
        required:true,
        trim:true,
        maxlength:[100,"max length is 100"]
    }
 })
const Lecture=mongoose.model("lecture",lectureShema);
module.exports=Lecture;