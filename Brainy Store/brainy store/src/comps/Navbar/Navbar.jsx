import React from 'react'
import './navbar.css'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'
import search from '../../assets/search.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1 className='brainy'>Brainy</h1>
      </div>
      <div className='search'>
        <img src={search} alt={search} />
        <input type="text" placeholder='Search for products' />
      </div>
      <div className='sign'>
        <button>Sign Up</button>
        <button>Log in</button>
      </div>
      <div className='icons'>
        <img src={heart} alt="heart" />
        <img src={cart} alt="cart" />
      </div>
    </div>
  )
}

export default Navbar
