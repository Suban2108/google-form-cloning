import React from 'react'
import './FinalBox.css'

const FinalBox = () => {
  return (
    <div className='final-box mt-3'>
      <p>Finally, please get your resume graded by this free tool, and reply with what score you got. <span>*</span></p>

      <p>crackeddevs.com/resume-review</p>
      <p>If it is not working, just put "N/A"</p>
      <input type="text" required placeholder='Your answer'/>
      <div className="hr mb-2"></div>
    </div>
  )
}

export default FinalBox
