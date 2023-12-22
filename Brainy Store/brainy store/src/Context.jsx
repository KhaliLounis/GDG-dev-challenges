import { createContext, useContext, useState } from "react";

import React from 'react'
import Data from './sections/Products/data.json'
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const AppContext = ({children}) => {

  const [data,setData] = useState(Data);
  const [cart,setCart] = useState([]);
  return (
    <CartContext.Provider value={{carting: {cart,setCart}, dataArray:{data,setData}}}>
        {children}
    </CartContext.Provider>
      
    
  )
}

export default AppContext
