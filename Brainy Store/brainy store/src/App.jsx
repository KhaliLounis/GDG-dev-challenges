import React from 'react'
import './App.css'
import About from './comps/About/About'
import Hero from './comps/Hero/Hero'
import Navbar from './comps/Navbar/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>

    </div>
  )
}

export default App
