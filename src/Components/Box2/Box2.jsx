import React from 'react'
import './Box2.css'

const Box2 = ({title}) => {
  return (
    <div className='box2 mt-3'>
      <p>{title} <span>*</span></p>
      <input type="text" required placeholder='Your answer'/>
      <div className="hr mb-2"></div>
    </div>
  )
}

export default Box2
