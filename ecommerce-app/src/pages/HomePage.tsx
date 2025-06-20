import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SearchContainer from '../components/SearchContainer';
import './HomePage.css';

interface Product { // интерфейс(пропсы продукта которые передаются в компоненте)
  id: string;
  key: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string | number ;
}
const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
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

const handleSearch = (query: string) => { // Хэндер поиска
  console.log('Искали:', query);
};

  return (
    <div className="main-wrapper">
      <Header />
      <main className="main-content">
        <h2 className="homepage-title">Featured Products</h2>

        {loading ? (
          <p className="loading-text">Loading products...</p>
        ) : (
          <div className="products-grid">
            <SearchContainer onSearch={handleSearch} />
            {products.map(product => (
              <ProductCard
                id={product.id}
                productKey={product.key} 
                key={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price}
                currency="EUR"
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