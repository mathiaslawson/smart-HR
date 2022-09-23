import React from 'react'
import './Overall.css'

import base from '../Enroll/Base';

import { RadialBarChart, RadialBar,BarChart, Tooltip, Legend, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'


const list = base.map((member)=>{
    return <button className='s-profile'>
    <div className='btn-content'>
   
          <span>{member.name}</span>
          <span>{member.mail}</span>
          <span>{member.role}</span>
    </div>
</button>
})

const data = [
    {
      "name": "Work Ethics (2021/2022)",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Completed Projects (2021/2022)",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Reporting Days(2021/2022)",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Interpersonal Work Relations(2021/2022",
      "uv": 2780,
      "pv": 3908
    }
  ]

  const data2 = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]
  

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
         <BarChart width={1200} height={450} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
            
         </div>

    </div>  
    <div className='radial'>
      <div>
        <RadialBarChart 
  width={630} 
  height={450} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data2} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>  
</div>
<div>
        <RadialBarChart 
  width={630} 
  height={450} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data2} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>  
</div>
        </div> 
</div>
</>

    
  
  )
}

export default Overall