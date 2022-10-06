import React, {useState, useEffect} from 'react'

import './Overall.css'
import axios from 'axios'

import { BarChart, Tooltip, Legend, Bar, CartesianGrid, XAxis, YAxis, Line, LineChart } from 'recharts'
import { ReplyAllTwoTone, VideoCameraBack } from '@mui/icons-material'
import { map } from 'rsuite/esm/utils/ReactChildren'
import line from  './line.png'
import name from './press-pass.png'
import mail from './mail.png'
import CountUp from 'react-countup'
import profiler from './resume.png'
import code from './code.png'



function Overall() {
 
//get requiest via axios to API
  const [values, setProfile] = useState("")
  const [relay, setrelay] = useState("")
  const [relayed, setrelayed] = useState("")
  

  useEffect(()=>{
    axios.get("http://localhost:5000/avlist").then(function(response){
      setProfile(response.data)
    })
    
  }, [])

var result = Object.entries(values)

//console.log(result)
const read_click =  async (event) =>{
  event.preventDefault();
    //get if from frontend
       const first = event.target.children[1]
       const mail = first.children[1].innerText
       //console.log(typeof mail)
      try{      
     await axios.post("http://localhost:5000/ov",{
          mail 
        }).then(function(response){
          setrelay(response.data)
          const r = relay.data
          setrelayed(r[0])
       
        })
    } catch (error){
            console.log(error)
    }

   
}

const test_profile  =<div className='ov-inner-profiler'>
      <div className='ov--'>

        <div className='ov-h'>

        <div>
        <img src={profiler} className="profiler-img"/>
        </div>
            <h2 className='ov-heading'>Profiler</h2>
          
        </div>

      <div className='dis'>
        <div>
        <img src={name} />
        </div>
       
              <span className='profiler-name'>{relayed.name}</span>
      </div>
        
      </div>
      <div>
        <div className='dis'>
        <div>
        <img src={mail} />
        </div>
        <span className='profiler-mail'> {relayed.mail}</span>
        </div>        
      </div>

      <div>
        <div className='dis'>
        <div>
        <img src={code} />
        </div>
        <span className='profiler-mail'> {relayed.stack}</span>
        </div>        
      </div>


      <div className='ov-stats'>
        <div className='stats--'>
        <h2>Projects Completed</h2>
        <div>
        <CountUp start={0} end={relayed.projectsCompleted} delay={0} >
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} className='counts2 counts'/>
    </div>
  )}
</CountUp>
           
        </div>
        <div>
          <img src={line} className="line"></img>
        </div>
        </div>
        <div className='stats--'>
        <h2>Peer to Peer Assesment</h2>
        <div>
        <CountUp start={0} end={relayed.p2p} delay={0} >
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} className='counts counts3'/>
    </div>
  )}
</CountUp>
           
        </div>
        <div>
          <img src={line} className="line line-2"></img>
        </div>
        </div>
        <div className='stats--'>
           <h2>Reporting Days</h2>
           <div>
        <CountUp start={0} end={36} delay={0} >
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} className='counts'/>
    </div>
  )}
</CountUp>
           
        </div>
        </div>
      </div>
{/* Caution */}
 <div className='caution'>
    <icon>

    </icon>
  

  <div>
     This is the caution area
  </div>
 </div>

     
      
  </div>



const list = result.map((m)=>{
  return <button className='profile' onClick={read_click}>{
   
      m.map((a)=>{
        return <div className='inner-profile'>
          <span >{a.name}</span>
          <span>{a.mail}</span>
          <span>{a.role}</span>
          </div> 
      })
    
  }
   </button>
})

  const data = [
      {
        "name": "Work Ethics(2021/2022)",
        "uv": (relayed.projectsCompleted) * 100,
        "pv": (relayed.p2p) * 100
      },
      {
        "name": "Completed Projects(2021/2022)",
        "uv": (relayed.projectsCompleted) * 100,
        "pv": 1398
      },
      {
        "name": "P2P(2021/2022)",
        "uv": 2000,
        "pv": 9800
      },
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


    //workethics = if 1 r_days : work ethics =  100
                 // then. 3/5 : ???  
                       //workethics  ??? = (100 * 3/5) / 1
                       
    //completed projects = if 2 p's : p's done = 100
                   //then 1/2 : ??
                         //completed projects ??? = (2 * 1/2) /2                   


  return (
  <>




<div className='ov-main'>
    <div className='ov-'>
         <div className='ov-profile-list'>
                 <div className='profiles'>
                  
                  <div >
                  {list}
                  </div>
                           
                 </div>
         </div>
         <div>


      
         <BarChart width={800} height={500} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
            
         </div>

         {/* profile */}

         <div className='ov-profiler'>
{test_profile}
</div>

    </div  >  
    <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className="line-chart">
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
</div>


</>

    
  
  )
}

export default Overall