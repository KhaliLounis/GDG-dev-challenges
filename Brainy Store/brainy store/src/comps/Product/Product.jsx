import React, { useState } from 'react';
import './product.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../Context';

const Product = ({ index, img, price }) => {
  const { carting } = useCart();
  const { cart, setCart } = carting;
  const { dataArray } = useCart();
  const { data, setData } = dataArray;
  const [like, setLike] = useState(data.find((item) => item.Price === price).Liked);

  const handleLikeClick = () => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.Price === price) {
          return {
            ...item,
            Liked: !item.Liked,
          };
        }
        return item;
      })
    );
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.Price === price) {
          return {
            ...item,
            Liked: !item.Liked,
          };
        }
        return item;
      })
    );
    setLike((prevLike) => !prevLike);
  };

  const handleAddToCart = () => {

    const itemExists = cart.some((item) => item.Price === price);

    if (!itemExists) {
      setCart([...cart, { Image: img, Price: price, Liked: like }]);
    }
  };

  return (
    <div key={index} className="card">
      <img src={img} alt="" className="card__img" />
      <div className="card__details">
        <span className="card__price">{price}$</span>
        {!like ? (
          <FaRegHeart
            style={{ cursor: 'pointer' }}
            className={`like ${like && 'active__heart'}`}
            onClick={handleLikeClick}
          />
        ) : (
          <FaHeart
            style={{ cursor: 'pointer' }}
            className={`like ${like && 'active__heart'}`}
            onClick={handleLikeClick}
          />
        )}
      </div>

      <div className="card__buttons">
        <button onClick={handleAddToCart}>Add to cart</button>
        <button>Hide</button>
      </div>
    </div>
  );
};

export default Product;
