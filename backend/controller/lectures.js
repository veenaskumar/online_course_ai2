const Lecture=require('../db/lectures');

const create1=async(req,res)=>{
    try{
    const data={
        id:req.body.id,
        video:req.body.video,
        name:req.body.name,
        field:req.body.field,
        description:req.body.description,
    }
    await Lecture.insertMany(data)
  
    res.status(201).send({ message: "inserted" });  
}
 catch (err) {
res.status(400).send({ message:"something went wrong"});
console.log(err);
}   
}

const getlecture=async(req,res)=>{
    const lid=req.params.id;
    const t=await Lecture.findOne({ id:lid});
    if(!t){
        res.send("no data");
    }
    res.status(200).json(t)  

}

const getalllecture=async(req,res)=>{
    const t= await Lecture.find({})
    if(!t)
    res.status(500).json("no data");
 res.status(200).json(t)
}

const update=async(req,res)=>{
    try{
        const lid=Number(req.params.id);
        const t=await Lecture.findOneAndUpdate({id:lid},{...req.body});
        if(!t){
            res.send("no data");
        }
        res.status(200).json(t)  
    } catch(err){
        res.status(500).json({msg:err})
    }
}
const delete1=async(req,res)=>{
    try{
    const lid=Number(req.params.id);
    const t=await Lecture.findOneAndDelete({ id:lid});
    if(!t){
        res.send("no data");
    }
    res.status(200).json(t)  
} catch(err){
    res.status(500).json({msg:err})
}

}

module.exports={create1,getlecture,getalllecture,update,delete1}