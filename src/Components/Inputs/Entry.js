import React from 'react'
import './Entry.css'


export default function Entry({newEntry, setNewEntry, handleSubmit, newStack, setNewStack, setNewRole, newRole, setNewMail, newMail, newComp, setNewComp, setp2p, setnewRelation, p2p, newRelation}) {

  return (<div className='w_form'>
    <form onSubmit={handleSubmit}>
        <div  className='entry-container'>

            <div className='entry-container--'>
                   <div className='entry-header'>
                       <p>Add Details</p>
                   </div>
            </div>

            <div className='entry-input'>
                <div className='entry-input---'>
                <label>Staff Name</label>
                     <input type="text"
                      required
                      value={newEntry}
                      onChange={(e)=> {setNewEntry(e.target.value)             
                      }
                }
                      />
                </div>
<br />
                <div className='entry-input---'>
                <label
                
                >Company Email</label>
                     <input type="text"
                     required
                     value={newMail}
                     onChange= {(e)=>{setNewMail(e.target.value)}}
                     />
                </div>
<br />

<div className='entry-input---'>
                <label
                
                >Staff Role</label>
                     <input type="text"
                     required
                     value={newRole}
                     onChange= {(e)=>{setNewRole(e.target.value)}}
                     />
                </div>
<br />

                <div className='entry-input---'>
                <label>Stack</label>
                     <input type="text"
                     required
                     value={newStack}
                     onChange= {(e)=>{setNewStack(e.target.value)}}
                     />
                </div>

                <div className='btn-container'>
                    <button className='entry-btn' onSubmit={handleSubmit}>Add Staff</button>
                </div>

            </div>

            

        </div>
    </form>


    <div className='stats_d'>
        <div className='stats-h'>
            Projects completed
        </div>
        <input
          type="number"
          required
          value ={newComp}
          onChange = {(e)=>{setNewComp(e.target.value)}}
        ></input>
        <br /><br />
        <div className='stats-h'>
            Reporting Days
        </div>   
        <input
         type = "number"
         required
         value = {newRelation}
         onChange = {(e)=>{setnewRelation(e.target.value)}}
        ></input>
        <br /><br />
        <div className='stats-h'>
            P2P Assesment
        </div>
        
        <input
         type = "number"
         required
         value = {p2p}
         onChange = {(e)=>{setp2p(e.target.value)}}
        ></input>
    </div>



  </div>
    


  )
}
