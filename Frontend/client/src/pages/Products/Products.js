
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./Products.module.css";
import ProductCard from "./ProductCard"; 

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `http://localhost:5005/product/getall`;

    axios.get(apiUrl)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.productlist}>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product._id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
