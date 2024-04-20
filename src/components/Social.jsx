import React from 'react'
import './Social.css'
export const Social = () => {
  return (
    <div className='socialContainer'>
      <div className='socialNested'>
        <div className='social-left'>
            <p className='fa-envelopeP'><i className="fa-solid fa-envelope"></i>umeshbhagat28@gmail.com</p>
            <p className='fa-phoneP'><i className="fa-solid fa-phone"></i>9322446667</p>
        </div>
        <div className='social-right'>
            <p><i className="fa-brands fa-whatsapp"></i></p>
            <p><i className="fa-brands fa-facebook"></i></p>
            <p><i className="fa-brands fa-instagram"></i></p>
            <p><i className="fa-brands fa-twitter"></i></p>
           
        </div>
        </div>
    </div>
  )
}
