import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {IoMdContact} from 'react-icons/io'
// import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { date } from 'joi'
import Signup from '../pages/signup'
function Loginform() {
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const[data,setdata]=useState('')
    const navigate=useNavigate();
    function handleSubmit(){


        const info={
            name:name,
            password:password,
        }

        fetch('http://localhost:3002/api/auth/login', {
           method: 'POST',
           body: JSON.stringify(info),
           headers: {
              "Content-Type": "application/json",
           },
        })
           .then((res) => res.json())
           .then((res)=>{
            setdata(res)
            console.log(res.message)
            if(res.message==='Success'){
            navigate('/home')
            // console.log('hi')
        }
    })
     }
  return (
    <div className='flex items-center justify-between'>
         <div className='flex flex-col justify-evenly gap-[1rem]  py-[90px] max-w-[800px]'>
            {/* <p className='text-slate-500 tracking-normal font-semibold ' id='pick_up'>START A NEW PATH</p> */}
            <h1 className='text-2xl font-bold'>Welcome Back</h1><br />
            {/* <p className='text-[13px] font-light'>Already A Member? <span className='text-sky-600 text-[13px] cursor-pointer'>Log In</span></p> */}
            <form>  
            <div className='flex flex-col justify-evenly gap-[2rem]'>
                <div className='flex gap-[2rem]'>
                   
                    <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px] w-[460px]'>
                    <input type='text' name='fname' placeholder='Name' id='fname' className=' w-[460px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <IoMdContact />
                
                
                    </div>
                
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px]  '>
                    <input type='text' name='lname' placeholder='Last Name' id='lname ' className=' placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <IoMdContact />
                </div> */}
                </div>
                
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]'>
                    <input type="email" name="email" id="email" placeholder='Email' className='w-[492px]  placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <AiOutlineMail />
                </div> */}
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[460px] py-[10px] px-[10px]'>
                    <input type="password" name="password" id="password" placeholder='Password' className=' w-[460px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    <RiLockPasswordLine />
                </div>
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]    '>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' className='w-[492px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <RiLockPasswordFill />
                </div> */}  
                {
                     <p>{data.message}</p>
                }
                
                <div className='border w-[200px] text-center rounded-full py-[8px] bg-sky-600 hover:bg-sky-900 text-white font-bold'>
                    <input type='button' value="Login" className='cursor-pointer' onClick={()=> handleSubmit()}/>
                </div>
                <div className='text-[13px] font-light flex gap-[0.3rem] decoration-none'>Don't You are a member 
                <Link to ="/signup" className='text-sky-600 text-[13px] cursor-pointer'>Sign Up</Link>
                </div>

                {/* <div>{name}</div> */}

            </div>
            </form>
           

        </div>
        <div>
            <img src="data:image/png;base64,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" alt=""  height={"700px"} width={"500px"}/>
        </div>
    </div>
   
    
   
  )
}

export default Loginform