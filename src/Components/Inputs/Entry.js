import React from 'react'
import './Entry.css'


export default function Entry({newEntry, setNewEntry, handleSubmit, newStack, setNewStack, setNewRole, newRole, setNewMail, newMail}) {

  return (
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
  )
}
