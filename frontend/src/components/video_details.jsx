import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
function Video_details(props) {
    
    return (
        <div >
            <div className='shadow-xl w-[400px] p-[20px] rounded-lg'>
            <video width="320" height="240" controls>
  <source src={props.video} type="video/mp4" />
  {/* <source src="movie.ogg" type="video/ogg" /> */}
</video>
                <h1 className='text-left font-bold indent-[45px]'>{ props.profile_name}</h1><br />
                <div className='flex gap-[2rem] content-center'>
                 
                    <div>{props.name}</div>
                </div>
                <div className='flex gap-[2rem] content-center'>
                  
                    <div>{props.description}</div>
                </div>
                

            </div>
        </div>
    )
}

export default Video_details