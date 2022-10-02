import React, {useState, useEffect} from 'react'
import './Enroll.css'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'
import base from './Base'
import axios from 'axios'

function Enroll() {
    const [newEntry , setNewEntry ] = useState('')
    //stack
   const [newStack, setNewStack] = useState('')
   //role
   const [newRole, setNewRole] = useState('')
   //mail 
   const [newMail, setNewMail] = useState('')
  const [mydata, setMyData] = useState([])

  //work ethics = completed projects , Reporting Days, Interpersonal Work Relations // base metric system developed by @ingucell 

  //completed projects 
  const [newComp, setNewComp] = useState('')

  //Reporting Dats
  const [newRelation, setnewRelation] = useState('')

  //P2p Assesments 
  const [p2p , setp2p] = useState('')


  
      
    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!newEntry || !newStack || !newRole || !newMail) return;
      setNewEntry('');
      setNewStack('');
      setNewRole('');
      setNewMail('');
      setNewComp('');
      setp2p('');
      setnewRelation('');
    
      setMyData(([...mydata,
      {
       name: newEntry,
       stacks: newStack,
       mail: newMail,
       role: newRole,
       comp: newComp,
       p2p: p2p
     }  
     
    ]))

      try{
        await axios.post("http://localhost:5000/fontend",{
          newEntry, newMail, newRole, newStack, newComp, p2p
         
        })
    } catch (error){
            console.log(error)
    }

  //  base.push([...retrieve])
   
    
    }

    // useEffect(()=>{
    //       localStorage.setItem('data', JSON.stringify(mydata))
    // }, [mydata])


    // var retrieve = JSON.parse(localStorage.getItem('data'));
    // useEffect(()=>{
    //   if(retrieve ){ setMyData(retrieve)}
    // }, [])



    

  return (
    <div className='entry-container'><Entry 
    newEntry ={newEntry}
    setNewEntry = {setNewEntry}
    setNewStack = {setNewStack}
    setNewRole = {setNewRole}
    handleSubmit = {handleSubmit}
    setNewMail = {setNewMail}
    setNewComp = {setNewComp}
    setnewRelation = {setnewRelation}
    setp2p = {setp2p}
    newRelation = {newRelation}
    p2p = {p2p}
    newComp = {newComp}
    newMail = {newMail}
    newRole = {newRole}
    newStack = {newStack}
  /></div>
  )
}

export default Enroll