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
        <CountUp start={0} end={relayed.reportingDays} delay={0} >
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

const we_optimal = (100 * 100) * 1
const we_gain = ((relayed.reportingDays) * 100)/1
const skill_optimal =  ((1) * 100)/2 * 100
const skill_gain = ((relayed.projectsCompleted)*100)/2 * 100

const total_optimal = (skill_optimal + we_optimal) /2
const total_gain = (we_gain + we_optimal) /2

  const data = [
      {
        "name": "JAN (WE) (W1)",
        "optimal":  we_optimal,
        "gain": we_gain
      },
      {
        "name": "JAN (SKILL) (W1)",
        "optimal": skill_optimal,
        "gain": skill_gain
      },
      {
        "name": "JAN (TOTAL) (W1))",
        "optimal": total_optimal,
        "gain": total_gain
      },
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
  <Bar dataKey="optimal" fill="#8884d8" />
  <Bar dataKey="gain" fill="#82ca9d" />
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
  <Line name="Optimal Staff can gain" type="monotone" dataKey="optimal" stroke="#8884d8" />
  <Line name="Score gained" type="monotone" dataKey="gain" stroke="#82ca9d" />
</LineChart>
</div>


</>

    
  
  )
}

export default Overall