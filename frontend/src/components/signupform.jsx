import React,{useState,useEffect} from 'react'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
// import {RiLockPasswordFill} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import loginform from './loginform'

// import { response } from 'express';
// import { text } from 'express'   
// import SideImage from '../assets/learn_online.jpg'


function Signupform() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const[data,setdata]=useState('')
    const naviagte=useNavigate()


    function handleSubmit(){


        const info={
            name:name,
            password:password,
            email:email
        }

        fetch('http://localhost:3002/api/auth/signup', {
           method: 'POST',
           body: JSON.stringify(info),
           headers: {
              "Content-Type": "application/json",
           },
        })
           .then((res) => res.json())
            .then((res)=>{
                console.log(res.message)
                setdata(res)
                if(res.message==='User created successfully'){
                naviagte('/home')
                // console.log('hi')
            }
        })
     }
    
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-col justify-evenly gap-[1rem]  py-[30px] max-w-[800px]'>
            <p className='text-slate-500 tracking-normal font-semibold ' id='pick_up'>START A NEW PATH</p>
            <h1 className='text-2xl font-bold'>Create new account</h1>
            <div className='text-[13px] font-light flex gap-[0.3rem] decoration-none'>Already a Memeber
                <Link to ="/" className='text-sky-600 text-[13px] cursor-pointer'>Login</Link>
                </div>
            <form>  
            <div className='flex flex-col justify-evenly gap-[2rem]'>
                <div className='flex gap-[2rem]'>
                   
                    <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px]  w-[560px]'>
                    <input type='text' name='fname' placeholder='First Name' id='fname' className='w-[492px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <IoMdContact />
                
                
                    </div>
                
                {/* <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 py-[10px] px-[10px]  '>
                    <input type='text' name='lname' placeholder='Last Name' id='lname ' className=' placeholder:text-[15px] placeholder:indent-[10px] font-semibold' />
                    <IoMdContact />
                </div> */}
                </div>
                
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]'>
                    <input type="email" name="email" id="email" placeholder='Email' className='w-[492px]  placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <AiOutlineMail />
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[560px] py-[10px] px-[10px]'>
                    <input type="password" name="password" id="password" placeholder='Password' className='w-[492px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold'value={password} onChange={(e)=>{setpassword(e.target.value)}} />
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
                    <input type='button' value="Create account" className='cursor-pointer' onClick={()=> handleSubmit()}/>
                </div>

                {/* <div>{name}</div> */}

            </div>
            </form>
           

        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRi0KiRgw9zzSVoVx5vgltV2tD1ZluK8c9Jg&usqp=CAU" alt="" height={"700px"} width={"500px"}/>
        </div>
        </div>
            
        
       
        
    )
}

export default Signupform