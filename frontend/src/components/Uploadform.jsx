import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Uploadform() {
    const [video_id,setvideo_id]=useState('')
    const [video,setvideo]=useState('')
    const [name,setname]=useState('')
    const [field,setfield]=useState('')
    const [description,setdescription]=useState('')
    const[data,setdata]=useState('')
    // const navigate=useNavigate();
    function handleSubmit(){


        const info={
           id:video_id,
           video:video,
           name:name,
           field:field,
           description:description


        }

        console.log('hi')
        fetch('http://localhost:3002/api/lectures/teach', {
           method: 'POST',
           body: JSON.stringify(info),
           headers: {
              "Content-Type": "application/json",
           },
        })
           .then((res) => res.json())
            .then((res)=>{
                console.log(res)
                setdata(data)
            })
            .catch(err => console.log(err))
        }
     
  return (
    <div className='flex flex-col gap-[2rem] justify-center items-center'>
         <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[760px] py-[10px] px-[10px]'>
                    <input type="text" name="video_id" id="video_id" placeholder='Id for Current Video' className=' w-[760px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' value={video_id} onChange={(e)=>{setvideo_id(e.target.value)}} />
                    
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[760px] py-[10px] px-[10px]'>
                    <input type="url" name="video" id="video" placeholder='Paste the Video Link' className=' w-[760px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' onChange={(e)=>{setvideo(e.target.value)}}  />
                    
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[760px] py-[10px] px-[10px]'>
                    <input type="text" name="name" id="name" placeholder='Name of the Video' className=' w-[760px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' onChange={(e)=>{setname(e.target.value)}}  />
                    
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[760px] py-[10px] px-[10px]'>
                    <input type="text" name="field" id="ield" placeholder='Name of the field' className=' w-[760px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' onChange={(e)=>{setfield(e.target.value)}}  />
                    
                </div>
                <div className='flex flex-row  items-center gap-[0.5rem] rounded-lg border border-blue-600 w-[760px] py-[10px] px-[10px]'>
                    <input type='text' name="desc" id="desc" placeholder='Description of the Video' className=' w-[760px] placeholder:text-[15px] placeholder:indent-[10px] font-semibold' onChange={(e)=>{setdescription(e.target.value)}}  />
                    
                </div>
                <div className='border w-[200px] text-center rounded-full py-[8px] bg-sky-600 hover:bg-sky-900 text-white font-bold'>
                    <input type='button' value="Upload" className='cursor-pointer' onClick={()=> handleSubmit()}/>
                </div>
                <h2>{data.message}</h2>
    </div>
  )
}

export default Uploadform