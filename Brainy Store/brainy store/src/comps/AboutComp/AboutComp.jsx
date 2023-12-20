import React from 'react'
import './aboutComp.css'
const AboutComp = ({title, desc, img,classs,bg}) => {
  let rev= classs===1 ? 'rev' : ''
  return (
    <div className={'aboutcomp '+rev} style={{backgroundColor: bg}}>
      <div className='about-text'>

        <h1>{title[0]} <span className='brainy'>{title[1]}</span> {title[2]} </h1>
        {console.log(desc)}
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      <img src={img} alt={title} />
    </div>
  )
}

export default AboutComp
