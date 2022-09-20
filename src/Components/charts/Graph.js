import React from 'react'
import './graph.css'
import {Bar, Line} from 'react-chartjs-2'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'


const Grpah= ()=> {

    const percentage = 90
   
  return (
    <div className='graph' >
  <div>
  <h2 className='over'>Overall Performance Statistics</h2>
<div className='rep'>
<button type="button" class="btn btn-danger">
  Reporting <span class="badge bg-secondary">40/100</span>
</button>
<button type="button" class="btn btn-danger">
  Presenation <span class="badge bg-secondary">10/100</span>
</button>
<button type="button" class="btn btn-success">
  Knowledge <span class="badge bg-secondary">90/100</span>
</button>
<button type="button" class="btn btn-success">
  Performance <span class="badge bg-secondary">80/100</span>
</button>
<button type="button" class="btn btn-warning">
  Projects <span class="badge bg-secondary">60/100</span>
</button>
</div>


  </div>


        <div style={{width:380, height:300}}>
            <div data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">

            <CircularProgressbar
  value={percentage}
  strokeWidth={10}
  text={`${percentage}%`}
  styles={buildStyles({
    pathColor: `rgb(240, 188, 120)`,
    textColor: 'black',
    trailColor: 'bisque',
    backgroundColor: 'white',
    pathTransitionDuration: 2
  })} />

            </div>
        </div>

    </div>
    
   
    
  )

}

export default Grpah;
