import React from "react";
import "./cart.css";
import { useCart } from "../../Context";
import CartItem from "../../comps/CartItem/CartItem";
import Navbar from "../../comps/Navbar/Navbar";
import Footer from "../../comps/Footer/Footer";

const Cart = () => {
  const { carting } = useCart();
  const { cart, setCart } = carting;
  let total = 0;
  return (
    <>
      <Navbar />
      <div className="cart">
        <h1 className="brainy" style={{ textAlign: "center" }}>
          Cart
        </h1>
        {cart.length === 0 && (
          <h1 className="card__title">Your cart is currently empty.</h1>
        )}
        <div className="card__container">
          {cart.map((item, index) => {
            total += item.Price;
            return (
              <CartItem
                key={index}
                index={index}
                img={item.Image}
                price={item.Price}
              />
            );
          })}
        </div>
        {cart.length !== 0 && (
          <div className="cart-buttons">
            <div className="purchase">
            <button >Purchase</button>
            <p>Total: {total.toFixed(2)}$</p>

            </div>
            <button  onClick={() => setCart([])}>
              Clear cart
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
