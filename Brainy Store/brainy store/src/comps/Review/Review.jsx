import React from 'react'
import './review.css'

const Review = ({index, title, paragraph}) => {
  return (
      <div key={index} className="rev_card">
        <h1>{title} </h1>
        <p>{paragraph}</p>
      </div>
  )
}

export default Review
