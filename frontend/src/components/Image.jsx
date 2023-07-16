import React from 'react'
import ALogo from '../assets/learning-vs-training-cover.webp'
import '../stylesheet/Home.css'

function Image() {
  return (
    <div>
        <div class="body-img">
        
    <img src={ALogo} alt="" width={"100%"} id="im" />
    <div class="centered">
        <h1>KEC ONLINE COURSES</h1>
        <p class="text-abstract">Education is the movement from darkness to light</p>
    </div>
</div><br/><br/></div>
  )
}

export default Image