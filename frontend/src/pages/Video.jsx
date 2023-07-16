
import React,{useState,useEffect} from 'react'
import   Video_details from '../components/video_details'
import Nav1 from '../components/Nav1';

function Video() {

        const [data, setdata] = useState([])
      
        useEffect(()=>{
          fetch("http://localhost:3002/api/lectures/teach")
            .then(response => {
              return response.json()
            })
            .then(data => {
              setdata(data)
              console.log(data)
            })
        },[]);



  return (
    <>
    <Nav1 />
    <div className='flex flex-wrap gap-[2rem] justify-evenly'>
       {
        data.map((e)=>{
          return <Video_details  video={e.video} 
          name={e.name}
          description={e.description}
          />
        })
       }
    </div>
    </>
    
  )
}

export default Video