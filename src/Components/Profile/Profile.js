import React , { useState } from 'react'
import base from '../../Routes/Enroll/Base'
import profile1 from "./profile1.jpg"
import profile2 from "../Profile/profile2.jpg"
import profile3 from "../Profile/profile3.jpg"
import profile4 from "../Profile/profile4.jpg"
import profile5 from "../Profile/profile5.jpg"
import Dummy from './Dummy'

export default function Profile({data, profileTemplate}) {

       const profile =  base.map((member)=>{
              return <button className='profile'>
                     <div className='inner-profile'>
                     <div className='user-name'>
                    {member.name}                 
                      </div>
                    <div>
                   {member.mail}
                     </div>  
                     <div>
                     {member.role}
                     </div> 

                     <div>
                     {member.stacks}
                    </div>
                          


                     </div>

           </button>              
           })

           var profileTemplate;
          
  return (

       
    <> 

{profile}
    
    </>
  )
}
