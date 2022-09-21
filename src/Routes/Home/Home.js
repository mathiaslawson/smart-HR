import React from 'react'
import './Home.css'
import Icons from '../../Components/Sidebar/Icons'

function Home() {

   const main = Icons.map((m)=>{
      return  <div className='home'>
      <div className='home-'>
          <div className='home-intro'>
              {m.intro}
          </div>
          <div className='available'>
               <button className='available-'>
                 <p className='des'>{m.name}</p> 
                  <img src={m.image} className="main-icons"></img>
               </button>
          </div>
      </div>
  </div>
  
   })


  return (
   <div className='ll'>   
      {main}
    </div>

   
  )
}

export default Home