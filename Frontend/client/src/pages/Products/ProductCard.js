// ProductCard.js

import React from "react";
import style from "./Products.module.css";

const ProductCard = ({ product }) => {
  const { title, price, description, image, createdAt, updatedAt } = product;

  return (
    <div className={style.productcard}>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <img style={{ width: "100px", height: "100px" }} src={`http://localhost:5005/${image}`} alt="Product Image" />
      <p>Description: {description}</p>
      <p>Created At: {createdAt}</p>
      <p>Updated At: {updatedAt}</p>
    </div>
  );
};

export default ProductCard; 
