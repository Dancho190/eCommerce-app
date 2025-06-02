import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  id: string;
  key: string;
  productKey: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number | null ;
  currency: string // Пока что захардкодил,но потом добавим другие currencies с бэка
}

const ProductCard: React.FC<ProductCardProps> = ({ id, productKey, name, description, imageUrl, price  }) => {
  return (
    <Link to={`/products/${productKey}`} className="product-card-link"> {/* Навигация по пропсу(ключу продукта из коммерстулз) */}
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price"> {typeof price === 'number'
    ? `€ ${price.toFixed(2)}`
    : '€'}
    </p>
    </div>
    </Link>
  );
};

export default ProductCard;
