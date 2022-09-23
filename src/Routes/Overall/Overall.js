import React from 'react'
import './Overall.css'

import base from '../Enroll/Base';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const data = [{name: 'Page A', uv: 400, pv:2400, amt:2400 } ];



const list = base.map((member)=>{
    return <button className='s-profile'>
    <div className='btn-content'>
   
          <span>{member.name}</span>
          <span>{member.mail}</span>
          <span>{member.role}</span>
    </div>
</button>
})

console.log(base)


function Overall() {
  return (
  <>


<div className='ov-main'>
    <div className='ov-'>
         <div className='ov-profile-list'>
                 <div className='profiles'>
                            {list}
                 </div>
         </div>
         <div>
            Profile Stats 
         </div>
         <div>
            Profiler
         </div>
    </div>    

</div>
{/* <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart> */}
</>

    
  
  )
}

export default Overall