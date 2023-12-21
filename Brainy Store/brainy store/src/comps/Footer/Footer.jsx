import React from 'react'
import './footer.css'
import Android from '../../assets/android.svg'
const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer'>
        <div className='img'>

        <img src={Android} alt={Android} />
        </div>
        <h1 className='brainy'>Brainy</h1>
      </div>
    </div>

  )
}

export default Footer
