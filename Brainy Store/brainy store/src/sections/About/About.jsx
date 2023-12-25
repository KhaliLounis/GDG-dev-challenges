import React from 'react'
import './about.css'
import AboutComp from '../../comps/AboutComp/AboutComp'
import { about } from './aboutData'
const About = () => {

  return (

      <div className='about' >
        <h1 className='us'>About us</h1>
        {about.map((item,index) => (
          <AboutComp key={index} bg={item.background} classs={index} title={item.title} desc={item.desc} img={item.img} />
        ))
          }
      
      </div>
    
  )
}

export default About
