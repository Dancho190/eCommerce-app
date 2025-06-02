import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

interface Product { // интерфейс(пропсы продукта которые передаются в компоненте)
  id: string;
  key: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number | string;
}
const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        console.log('Products data:', data);
        // если данные приходят в data.results
        // setProducts(Array.isArray(data) ? data : data.results);
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error loading products:', err);
      } finally {
         setLoading(false);
    }
  };

  fetchProducts();
}, []);
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main-content">
        <h2 className="homepage-title">Featured Products</h2>

        {loading ? (
          <p className="loading-text">Loading products...</p>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                productKey={product.key} 
                key={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
