import React , { useState , useEffect } from 'react'
import base from '../../Routes/Enroll/Base'

export default function Profile() {


  var retrieve = JSON.parse(localStorage.getItem('data'));
  console.log(retrieve)


       const profile =  retrieve.map((member)=>{
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
