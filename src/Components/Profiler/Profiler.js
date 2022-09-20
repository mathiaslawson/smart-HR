import React from 'react'
import './pp.css'
import profile2 from "../Profile/profile2.jpg"
import profile3 from "../Profile/profile3.jpg"
import profile4 from "../Profile/profile4.jpg"
import profile5 from "../Profile/profile5.jpg"
import profile1 from "../Profile/profile1.jpg"

export default function Profiler() {
  return (
    <div>
           <div className='profiler'>
                   <div className='inner-pro'>
                          <div className='profile-pic'>
                          <img src={profile1} alt={""}></img>
                          </div>
                          <div className='profile-info'>
                          <button type="button" class="btn btn-primary">
  Name: <span class="badge bg-warning" style={{color:"black"}}>Mathias Prince Lawson</span>
</button>

<button type="button" class="btn btn-primary">
  Role: <span class="badge bg-warning" style={{color:"black"}}>Implementation</span>
</button>

<button type="button" class="btn btn-primary">
  Department:<span class="badge bg-warning" style={{color:"black"}}>Automation & Development</span>
</button>

                          </div>
                   </div>

           </div>
    </div>
  )
}
