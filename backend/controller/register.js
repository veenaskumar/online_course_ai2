const Register=require('../db/register')

const rescreate1=async(req,res)=>{
    try{
    const data={
        name:req.body.name,
        id:req.body.id,
        video:req.body.video,
        name:req.body.name,
        field:req.body.field,
        description:req.body.description,
    }
    await Register.insertMany(data)
  
    res.status(201).send({ message: "inserted" });  
}
 catch (err) {
res.status(400).send({ message:"something went wrong"});
console.log(err);
}   
}


const getallregister=async(req,res)=>{
    const sname=req.body.name;
    const t= await Register.find({name:sname})
    if(!t)
    res.status(500).json("no data");
 res.status(200).json(t)
}

module.exports={rescreate1,getallregister}