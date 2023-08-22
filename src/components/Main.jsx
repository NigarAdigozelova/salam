import React, { useState } from 'react'
import "../styles/main.scss"

const Main = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(2);

  const getRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  }

  return (
    <>
      <div className='hero'>
        <h1 style={{ fontSize: "50px" }} >Random generator</h1>
        <div className='container'>
          <div className='random'>Random number:  <span>{randomNum}</span></div>
          <div className='range'>
            <div className='min'>
              <p>Min:</p>
              <input
                type='number'
                value={minVal}
                onChange={e => setMinVal(+e.target.value)}
              />

            </div>
            <div className='max'>
              <p>Max:</p>
              <input
                type='number'
                value={maxVal}
                onChange={e => setMaxVal(+e.target.value)}
              />


            </div>
          </div>
          <button className='button' onClick={getRandomNum}>Get random number</button>
        </div>

      </div>
    </>
  )
}

export default Main