import React , { useState , useEffect, useRef } from 'react'
import base from '../../Routes/Enroll/Base'
import Av from '../../Routes/AvailableStaff/Av';

export default function Profile() {
  var retrieve = JSON.parse(localStorage.getItem('data'));
  //const ref = useRef(retrieve);

  
  const handleClick = event =>{
    const check_button = event.currentTarget.children[1 || 0 || 2 || 3].innerHTML;
    retrieve.filter((m)=>{
    if((m.mail === check_button)){
      //  console.log("this account belongs to : " + m.name+ "with the email address " + m.mail+ "he is an/a " + m.role )
    }   
  })
  }

       const profile =  retrieve.map((member)=>{
              return <button className='profile'  id={"s"} >
                     <div className='inner-profile' onClick={handleClick}>
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
        
  return (


    <> 

{profile}
    
    </>
  )
}
