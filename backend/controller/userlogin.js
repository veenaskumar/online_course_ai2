
const {Login,validate}=require('../db/userlogin')

const insert=async(req,res)=>{
    try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
    console.log(req.body);

		const user = await Login.findOne({ email: req.body.email });
    console.log(typeof(req.body.name))
		if (user){
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
        }
         else{
                const data={
                    name:req.body.name,
                    password:req.body.password,
                    email:req.body.email,
                }
                await Login.insertMany(data)
              
                res.status(201).send({ message: "User created successfully" });
            }
            } catch (err) {
         res.status(400).send({ message:"something went wrong"});
         console.log(err);
	}
    

}

const load=async(req,res)=>{
    
    try{
        const check=await Login.findOne({name:req.body.name});
   if(check.name===req.body.name && check.password===req.body.password){
    res.send({message:"Success"});
   }
else if(check.name===req.body.name && check.password!=req.body.password){
    res.send({message:"password incorrect"});
}
   else{
    res.send({message:"User doesn't exists"});
   }
}
   catch{
    res.send({message:"User doesn't exists"})
  }


}

module.exports={load,insert}