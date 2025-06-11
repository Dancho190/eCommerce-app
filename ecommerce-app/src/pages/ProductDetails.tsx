// src/pages/ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetails.module.css'; // Используем специально модульный css чтобы стили не применялись ко всем
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  key: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currency: string;
  slug: string;
  categories: string[];
  productTypeId: string;
  createdAt: string;
  lastModifiedAt: string;
}

const ProductDetails: React.FC = () => {
  const { addToCart } = useCart(); // Контекст для корзины
  //(логика добавления товара в корзину)

  const { productKey } = useParams(); // Название параметра должно совпадать с маршрутом
  const [product, setProduct] = useState<Product | null>(null); // Состояния
  const [loading, setLoading] = useState(true);

  const [isSaved, setIsSaved] = useState(false); // стейты для кнопки

  const navigate = useNavigate() // навигация в корзину

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        const found = data.find((p: Product) => p.key === productKey);

        if (found) {
          setProduct(found);
        } else {
          console.warn('Product not found with key:', productKey);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productKey]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  const handleAddButton = () => { // Логика добавления товара в корзину,что меняет контекст
        addToCart({ // Меняем состояние корзины в контексте
          key: product.key, // Добавляем товар по ключу 
          name: product.name,
          price: product.price,
          currency: product.currency,
          quantity: 1,
          imageUrl: product.imageUrl,
        })
        toast.success('The product has been added to the cart!✅');
        navigate('/cart')
  }


  return (
<div className={styles["productContainer"]}>
  <div className={styles["productImageSection"]}>
    <img
      src={product.imageUrl}
      alt={product.name}
      className={styles["productImage"]}
    />
  </div>

  <div className={styles["productInfoSection"]}>
    <div className={styles["productTitleRow"]}>
      <h1 className={styles["productTitle"]}>{product.name}</h1>
      <button
        className={`${styles["saveIcon"]} ${isSaved ? styles["saved"] : ""}`}
        onClick={() => setIsSaved(!isSaved)}
        aria-label="Save product"
      >
        ♥
      </button>
    </div>

    <p className={styles["productDescription"]}>{product.description}</p>

    {product.price !== null && (
      <p className={styles["productPrice"]}>
        {product.price} {product.currency}
      </p>
    )}

    <div className={styles["buttonGroup"]}>
      <button className={styles["addToBagBtn"]} 
      onClick={handleAddButton}>
        ADD TO CART
        </button>
      <button className={styles["contactBtn"]}>CONTACT</button>
    </div>

    <div className={styles["productMeta"]}>
      <p>ID: {product.key}</p>
      <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
      <p>Updated: {new Date(product.lastModifiedAt).toLocaleDateString()}</p>
    </div>
  </div>
</div>
  );
};

export default ProductDetails;
