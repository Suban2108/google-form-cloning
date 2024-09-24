import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mt-3'>
            <div className="button">
                <button className='submit'>Submit</button>
                <button>Clear Form</button>
            </div>

            <div className='Never_submit mt-3'>
                Never submit passwords through Google Forms.
            </div>
            <br />
            <div className='report'>This form was created inside CrackedDevs.com. <span>Report Abuse</span></div>
            <br />
            <div className='Google-form'><span>Google</span> Forms</div>
        </div>
    )
}

export default Footer
