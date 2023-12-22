import React, { useState } from 'react';
import './cartItem.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../Context';
import Data from '../../sections/Products/data.json'

const CartItem = ({ index, img, price, name }) => {
  const {carting} = useCart();
  const {cart,setCart} = carting;
  const {dataArray} = useCart();
  const {data,setData} = dataArray;
  const [like, setLike] = useState(data.find((item) => item.Price === price).Liked);

  const handleLikeClick = () => {
    setCart(cart.map((item)=>{
      if(item.Price===price){
        return{
          ...item,
          Liked: !item.Liked
        }
      }
      return item
    }))
    setData(data.map((item)=>{
      if(item.Price===price){
        return{
          ...item,
          Liked: !item.Liked
        }
      }
      return item
    }))
    setLike((prevLike) => !prevLike);
  }

  return (
    <div key={index} className="card">
      <img src={img} alt="" className="card__img" />
      <div className="card__detailss">
        <div className='name'>
          <p>{name}</p>
        </div>
        <div className='details detailss'>

          <span>{price}$</span>
          {!like ? (
            <FaRegHeart
              style={{ cursor: 'pointer' }}
              className={`${like && 'active__heart'}`}
              onClick={handleLikeClick}
            />
          ) : (
            <FaHeart
              style={{ cursor: 'pointer' }}
              className={`${like && 'active__heart'}`}
              onClick={handleLikeClick}
            />
          )}
        </div>
      </div>
      <div className="card__buttons">
        <button onClick={()=> setCart(prev => prev.filter(item=> item.Price!==price))}>Remove from cart</button>
        <button>Hide</button>
      </div>
    </div>
  );
};

export default CartItem;
