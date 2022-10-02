import Start from './Components/Header/Start';
import User from './Components/Profile/User';
import React, { useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Entry from './Components/Inputs/Entry';
import Profile from './Components/Profile/Profile';
//import Dummy from './Dummy'
import Data from '../src/Components/Profile/Data'
import ProgressPage from './Components/Profiler/ProgressPage';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Routes/Home/Home';
import Av from './Routes/AvailableStaff/Av';
import Enroll from './Routes/Enroll/Enroll';
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Overall from './Routes/Overall/Overall';



function App() {

  const new_d = [
    {
      
    }
  ];

  const [newEntry , setNewEntry ] = useState('')
 //stack
const [newStack, setNewStack] = useState('')
//role
const [newRole, setNewRole] = useState('')
//mail 
const [newMail, setNewMail] = useState('')
const [mydata, setMyData] = useState([...Data])

//template 
const [profileTemplate , setTemplate] = useState()

//   const a = mydata.map((member)=>{
//     return( <button className='profile'>
//            <div className='inner-profile'>
//            <div className='user-name'>
//           {member.name}                 
//             </div>
//           <div>
//          {member.mail}
//            </div>  
//            <div>
//            {member.role}
//            </div> 
//            <div>
//            {member.stacks}
//           </div>
//            </div>

//  </button> )

  

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
   <>
<BrowserRouter>
<Start />

<div className='final-render'>
<Sidebar />

<Routes>
     <Route path="/home" element ={ <Home />}/>
     <Route path="/add" element ={ <Enroll/>}/>
    <Route path="/list" element ={ <Av />}/>
     <Route path="/about" element ={ <Overall/>}/>
</Routes>

</div>
  

</BrowserRouter>

   </>
  );
}

export default App;
