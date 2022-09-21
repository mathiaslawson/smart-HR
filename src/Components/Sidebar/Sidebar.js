import React from 'react'
import './sidebar.css'
import icons from './Icons'
import { Link } from 'react-router-dom'


const take = icons.map((member)=>{
    return <div className='side-container'>
    <div className='side-'>
     <Link to={member.link}>
     <button className='side-btn'>
              <img src={member.image} className="side-icon">
              </img>   
         </button>
     </Link>
       </div>
       </div>
})

function sidebar() {

  return (
    <div>
        {take}
    </div>
  )
}

export default sidebar