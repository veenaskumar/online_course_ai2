import React from 'react'
import Navbar from '../components/signupbar'
import Loginform from '../components/loginform'

function login() {
  return (
   <div  className='flex flex-col justify-center px-[60px]'>
    <Navbar />
    <Loginform />
   </div>
  )
}

export default login