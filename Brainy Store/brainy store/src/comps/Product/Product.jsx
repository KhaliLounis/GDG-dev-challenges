import React, { useState } from 'react'
import './product.css'
import { FaRegHeart,FaHeart } from "react-icons/fa";

const Product = ({index,img,price}) => {
  
  const [like, setLike] = useState(false);

  return (
    <div key={index} className="card">
        <img src={img} alt="" className="card__img" />
        <div className="card__details">
          <span className="card__price">{price}$</span>
          {!like ?
          <FaRegHeart
            style={{ cursor:"pointer" }}
            className={`like ${like && "active__heart"}`}
            onClick={() => {
              setLike(!like);
            }}
          /> :
          <FaHeart
            style={{ cursor:"pointer" }}
            className={`like ${like && "active__heart"}`}
            onClick={() => {
              setLike(!like);
            }}/>}

        </div>

        <div className="card__buttons">
          <button>Purchase</button>
          <button>Hide</button>
        </div>
    </div>
  )
}

export default Product
