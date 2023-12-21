import React from 'react'
import './App.css'
import About from './sections/About/About'
import Hero from './comps/Hero/Hero'
import Navbar from './comps/Navbar/Navbar'
import Products from './sections/Products/Products'
import Reviews from './sections/Reviews/Reviews'
import Footer from './comps/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Products/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default App
