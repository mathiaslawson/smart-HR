import { useState }from 'react'
import './Av.css'
import Profile from '../../Components/Profile/Profile'
import Data from '../../Components/Profile/Data'
import Entry from '../../Components/Inputs/Entry'

function Av() {
    

    const [mydata, setMyData] = useState([...Data])



  return (
    <div>
<div className='user-container'>   
     <Profile 
      
           /> 

     </div>

   
    </div>
  )
}

export default Av