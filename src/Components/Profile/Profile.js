import React , { useState , useEffect, useRef } from 'react'
import base from '../../Routes/Enroll/Base'
import Av from '../../Routes/AvailableStaff/Av';
import axios from 'axios';
import { map } from 'rsuite/esm/utils/ReactChildren';
import close from './cancel.png'
import del from './del.png'
import refresh from './refresh.png'
import edit from './edit.png'
import mail from '../../Routes/Overall/mail.png'
import name from '../../Routes/Overall/press-pass.png'

export default function Profile() {
  const [values, setProfile] = useState("")
  const [def , setdef]  = useState()
  const [relay, setrelay] = useState("")
  const [relayed, setrelayed] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:5000/avlist").then(function(response){
      setProfile(response.data)
    })
  }, [])
var result = Object.entries(values)



const popup =  async (event) =>{
  
 const elements = document.getElementById("b").classList.add('body')
 const trigger = document.getElementById("av-body").children[0]
 

 const profile = document.getElementById('hm')
 if(true){
  
   document.getElementById("dets").style.display="block"
 }


 //mail for info .....

 const right = event.target.children[1]
 const mail = right.children[1].innerText

 

 try{      
 await  axios.post("http://localhost:5000/ov",{
       mail 
     }).then(function(response){
       setrelay(response.data)
       const r = relay.data[0]
       setrelayed(r)
     })
 } catch (error){
         console.log(error)
 }
}


//close pop-up
const close_button = event => {
  console.log(event.target)
  const elements = document.getElementById("b").classList.remove('body')
  document.getElementById("dets").style.display="none"
}

//delete pop-up

const delete_button = async (event) =>{
   const mail = relayed.mail
   try{
    await axios.post("http://localhost:5000/del", {
  mail
    }).then(function(response){
      console.log("delted")
    })
   } catch (error) {
    console.log(error)
   }

   document.getElementById('del').style.display="flex"
  setTimeout(() => {
    window.location.reload();
  }, 2000);
   

}

//close everything

// const close_every = event =>{
//       const elements = document.getElementById('av-body')
//       if(elements) {
//         document.getElementById("b").classList.remove('body')
//         document.getElementById("dets").style.display="none"
//       }
// }



const profile = result.map((m)=>{
  return <div className='profile' onClick={popup} id="hm">{  
      m.map((a)=>{
        return <div className='inner-profile' id="ey">
             <span>{a.name}</span>
          <span  className="mail">{a.mail}</span>
          <span>{a.role}</span>
            </div>       
      })
  }         
   </div>
})

const take_name = relayed.name

        
  return (
    <div id='av-body' >
      <div className='pop-up'>
          <div className='pop-inner'  id="dets">

            <div>
              <img src={close} className="close" onClick={close_button}></img>
            </div>
                       <div className="name">
                          <img src={name} className="name"></img>
                         {relayed.name}</div>
                       <div>
                       <div className="mail">
                          <img src={mail} ></img>   
                         {relayed.mail}</div>
                           </div>
                       <div>

                        <div className='pop-icons'>

                        <img className="del-icon" onClick={delete_button}
                          src={del}> 
                        </img>
                        <img src={edit} className="edit-icons"></img>
                        <img src={refresh} className="refresh-icons"></img>
                        </div>  

                        <div className='del-notice' id="del">Staff {relayed.name} has been deleted!</div>                   
          
          </div>
          <div>
               
            </div>
            <div>
              
            </div>

          
          </div>
      </div>

<div  id="b">
      
      <h2 className='heading'>Available Staff</h2>
<div className='user-container'>
{
 profile
}

</div>
   </div>
    
    </div>


  
  )
}
