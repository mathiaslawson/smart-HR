import React, {useState} from 'react'
import './Enroll.css'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'

function Enroll() {
    const [newEntry , setNewEntry ] = useState('')
    //stack
   const [newStack, setNewStack] = useState('')
   //role
   const [newRole, setNewRole] = useState('')
   //mail 
   const [newMail, setNewMail] = useState('')
  
      const [mydata, setMyData] = useState([...Data])
  
      
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!newEntry || !newStack || !newRole || !newMail) return;
      setNewEntry('');
      setNewStack('');
      setNewRole('');
      setNewMail('');
    
      setMyData(([...mydata,
      {
       name: newEntry,
       stacks: newStack,
       mail: newMail,
       role: newRole,
     }  
    ]))
  
    }


  return (
    <div className='entry-container'><Entry 
    newEntry ={newEntry}
    setNewEntry = {setNewEntry}
    setNewStack = {setNewStack}
    setNewRole = {setNewRole}
    handleSubmit = {handleSubmit}
    setNewMail = {setNewMail}
    newMail = {newMail}
    newRole = {newRole}
    newStack = {newStack}
  /></div>
  )
}

export default Enroll