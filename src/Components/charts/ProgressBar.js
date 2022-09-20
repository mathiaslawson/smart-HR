import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import ChangingProgressProvider from "./ChangingProgressProvider"

export default function progressbar1() {

  const points = [0 , 10 , 20, 40 , 60, 60 , 60 , 60  ,60 , 60 , 60 , 60 , 60 ]
  
  return (
  <ChangingProgressProvider values={points}>
  {value => (
    <CircularProgressbar
      value={value}
      text={`${value}%`}
      circleRatio={0.75}
      strokeWidth= {14}
      styles={buildStyles({
        rotation: 1/2 + 1 / 8,
        pathColor: "orange",
        strokeLinecap: "round",
        trailColor: "gray",
        textColor:"black",
        textSize:"1rem",
        pathTransitionDuration: 10
      })}
    />
  )}
</ChangingProgressProvider>
  )
}