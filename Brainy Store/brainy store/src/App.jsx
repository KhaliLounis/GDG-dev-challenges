import React from 'react'
import './App.css'
import About from './sections/About/About'
import Hero from './comps/Hero/Hero'
import Navbar from './comps/Navbar/Navbar'
import Products from './sections/Products/Products'
import Reviews from './sections/Reviews/Reviews'
import Footer from './comps/Footer/Footer'
import Cart from './sections/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Layout = () => {
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



const App = () => {
  return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>

  )
}

export default App
