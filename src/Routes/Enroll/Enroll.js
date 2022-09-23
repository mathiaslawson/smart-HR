import React, {useState, useEffect} from 'react'
import './Enroll.css'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'
import base from './Base'

function Enroll() {
    const [newEntry , setNewEntry ] = useState('')
    //stack
   const [newStack, setNewStack] = useState('')
   //role
   const [newRole, setNewRole] = useState('')
   //mail 
   const [newMail, setNewMail] = useState('')
  const [mydata, setMyData] = useState([])

      
  
      
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

   base.push([...retrieve])
   
    
    }

    useEffect(()=>{
          localStorage.setItem('data', JSON.stringify(mydata))
    }, [mydata])


    var retrieve = JSON.parse(localStorage.getItem('data'));
    useEffect(()=>{
      if(retrieve ){ setMyData(retrieve)}
    }, [])


    

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