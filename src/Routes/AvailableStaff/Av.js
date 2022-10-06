import { useState }from 'react'
import './Av.css'
import Profile from '../../Components/Profile/Profile'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'
import base from '../Enroll/Base'

function Av() {

  return (
   <>
    <div className='profile-container'>
       <Profile/> 
      </div>
   </>     
  )
}

export default Av