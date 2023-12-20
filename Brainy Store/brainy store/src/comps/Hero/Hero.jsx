import React from 'react'
import './hero.css'
import brainy from '../../assets/brainy.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='brainy-image'>
        <img src={brainy} alt="brainy" />
      </div>
      <div className='landing'>
        <h1>Welcome to <span className='brainy'>Brainy</span> Store</h1>
        <p>your ultimate destination for swag items</p>
        <button>Discover Products</button>
      </div>
    </div>
  )
}

export default Hero
