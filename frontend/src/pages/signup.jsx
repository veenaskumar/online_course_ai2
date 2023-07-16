import React from 'react'
import Navbar from '../components/signupbar'
import Signupform from '../components/signupform'
import '../stylesheet/signup.css'

function Signup() {
    
    return (
        <div className='flex flex-col justify-center px-[60px]'>
            <Navbar />
            <Signupform />
        </div>
    )
}

export default Signup