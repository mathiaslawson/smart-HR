import React from 'react'
import "./pp.css"
import ProgressBar from '../charts/ProgressBar'
export default function ProgressPage() {
  return (
    <div className='over-dash'>
                <div className='dashboard'>
                  <div className='inner-dash'>
                  <div className='pro' style={{ width: 100, height: 100 }}>
                          <ProgressBar />
                          <span>Reporting</span>
                      </div>
                  </div>
                  <div className='inner-dash'>
                  <div className='pro' style={{ width: 100, height: 100 }}>
                          <ProgressBar />
                          <span>Presenation</span>
                      </div>
                  </div>
                  <div className='inner-dash'>
                  <div className='pro' style={{ width: 100, height: 100 }}>
                          <ProgressBar />
                          <span>Knowledge</span>
                      </div>
                  </div>
                  <div className='inner-dash'>
                  <div className='pro' style={{ width: 100, height: 100 }}>
                          <ProgressBar />
                         <span>Performance</span>
                      </div>
                  </div>
                  

                  <div className='inner-dash'>
                  <div className='pro' style={{ width: 100, height: 100 }}>
                          <ProgressBar />
                          <span>Projects</span>
                      </div>
                  </div>
                  
                      

                </div>
    </div>
  )
}
