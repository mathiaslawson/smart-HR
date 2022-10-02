import { useState }from 'react'
import './Av.css'
import Profile from '../../Components/Profile/Profile'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'
import base from '../Enroll/Base'

function Av() {

  console.log(base)
    
  
  return (
    <div className='av-whole'>
<div className='user-container'>   
     <Profile/> 
     </div>  
    </div>
  )
}

export default Av