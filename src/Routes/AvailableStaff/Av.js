import { useState }from 'react'
import './Av.css'
import Profile from '../../Components/Profile/Profile'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'

function Av() {
    
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
    <div>
<div className='user-container'>   
     <Profile 
       data={mydata}
           /> 

     </div>

     <Entry 
       newEntry ={newEntry}
       setNewEntry = {setNewEntry}
       setNewStack = {setNewStack}
       setNewRole = {setNewRole}
       handleSubmit = {handleSubmit}
       setNewMail = {setNewMail}
       newMail = {newMail}
       newRole = {newRole}
       newStack = {newStack}
     />
    </div>
  )
}

export default Av