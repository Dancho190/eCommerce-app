import { Link } from 'react-router-dom';
import './ProductCard.css';

type Props = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-img" />

      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
        <p className="product-card-description">
          {product.description.slice(0, 80)}...
        </p>

        <Link to={`/product/${product.id}`} className="product-card-button">
          View Details
        </Link>
      </div>
    </div>
  );
}
