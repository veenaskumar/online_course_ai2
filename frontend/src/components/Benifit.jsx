import React from 'react'
import '../stylesheet/Home.css'
import In from '../assets/instructor.png'
import As from '../assets/assignments.png'
import Pro from '../assets/proctored_exam.png'
import Lo from '../assets/local_chapter.png'
import Sy from '../assets/systematic_approach.png'
function Benifit() {
  return (
    <div>
         <div class="main-content">
        <h1>Benifits</h1><br/>
        <div class="benifit-card">
            <div class="benifit-text">
                <h1>Best in Class Instructors</h1>
                <p>Highly experienced faculty with high retention rate.</p>
            </div>
            <div class="benifit-img">
                <img src={In} alt=""/>
            </div>
        </div><hr/>

        <div class="benifit-card even">
            <div class="benifit-text">
                <h1>Weekly Assignments</h1>
                <p>Ensuring your progress in timely manner.</p>
            </div>
            <div class="benifit-img">
                <img src={As} alt="" />
            </div>
        </div><hr/>
    
        <div class="benifit-card">
            <div class="benifit-text">
                <h1>Proctored
                    Exams</h1>
                <p>Channelized through
                    our authorized partners.</p>
            </div>
            <div class="benifit-img">
                <img src={Pro} alt=""/>
            </div>
        </div><hr/>
        <div class="benifit-card even">
            <div class="benifit-text">
                <h1>Active
                    Local Chapters</h1>
                <p>Massive Online Open Courses.</p>
            </div>
            <div class="benifit-img">
                <img src={Lo} alt="" />
            </div>
        </div><hr/>
        <div class="benifit-card">
            <div class="benifit-text">
                <h1>Systematic
                    Approach</h1>
                <p>Enabling you towards
                    desired learning goals.</p>
            </div>
            <div class="benifit-img">
                <img src={Sy} alt="" />
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Benifit