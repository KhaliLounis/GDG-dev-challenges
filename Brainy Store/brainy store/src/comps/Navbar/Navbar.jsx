import React from 'react'
import './navbar.css'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'
import search from '../../assets/search.svg'
import {Link} from 'react-router-dom'
import Cart from '../../sections/Cart/Cart'


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='nav-link'><h1 className='brainy'>Brainy</h1></Link>
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
        <Link to="/cart"><img src={cart} alt="cart" /> </Link> 
      </div>
    </div>
  )
}

export default Navbar
