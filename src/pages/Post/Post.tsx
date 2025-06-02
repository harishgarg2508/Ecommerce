import React, { useEffect, useState } from "react";
import "./Post.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import {ArrowLeft  } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
      fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="post-container">
      <Link to="/" className="back-link"><ArrowLeft />Back to Home</Link>
      <img src={product.image} alt="product.title" />
      <div className="post-details">
      <h1>{product.title}</h1>
      <p> {product.description}</p>

      </div>
    
      <h2>${product.price}</h2>
    </div>
  );
};

export default Post;
