import React, { useState } from 'react'
import "./User.css"
import ProgressPage from '../Profiler/ProgressPage'
import Profile from '../Profile/Profile'
import Pro from '../Profiler/Profiler'
import Data from './Data'


export default function User() {
  const [mydata, setMyData] = useState([...Data])

  return (
   <>
    


     

     
     <ProgressPage /> 
     <Pro />
    
   </>
  )
}
