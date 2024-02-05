
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const apiUrl = `http://localhost:5005/product/${productId}`;

    axios.get(apiUrl)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{product.title}</h1>
          <p>Price: ${product.price}</p>
          <img style={{ width: "100px", height: "100px" }} src={`http://localhost:5005/${product.image}`} alt="Product Image" />
          <p>Description: {product.description}</p>
          <p>Created At: {product.createdAt}</p>
          <p>Updated At: {product.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
