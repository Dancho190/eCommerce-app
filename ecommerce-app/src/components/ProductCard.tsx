import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number | string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">{typeof price === 'number' ? `€${price.toFixed(2)}` : price}</p>
    </div>
  );
};

export default ProductCard;
