import React from 'react'
import './Box7.css'

const Box7 = () => {
    return (
        <div className='box7 mt-3'>
            <p> Are you able to work on weekends if we have a strict deadline and something needs finished <span>*</span></p>
            <div className="option">
                <div className="radio mt-3">
                    <input type="radio" /><label htmlFor="">Yes</label>
                </div>
                <div className="radio mt-3">
                    <input type="radio" /><label htmlFor="">No</label>
                </div>
                <div className="radio mt-3 mb-2">
                    <input type="radio" /><label htmlFor="">May be</label>
                </div>
            </div>

        </div>
    )
}

export default Box7
