import React from "react";
import './products.css'
import data from './data.json'
import Product from "../../comps/Product/Product";

function Products() {
  
  return (
    <>
      <h1 className="card__title" id="products">Products</h1>
      <div className="card__container" >
        {data.map((item, index) => (
          <Product
            key={index}
            index={index}
            img={item.Image}
            price={item.Price}
          />
        ))}
      </div>
    </>
  );
}

export default Products;