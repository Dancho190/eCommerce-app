import React, {useState, useEffect }from 'react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';
import ProductCard from '../components/ProductCard';

interface Product { // Карточка похожих продуктов что дисплеиться внизу
  id: string;
  key: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string | number;
}

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart(); // Функции из контекста

  const [products, setProducts] = useState<Product[]>([]); // Стейты продакт карда внизу

  useEffect(() => { // Фетчим продукты внизу контейнера
  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      setProducts(Array.isArray(data) ? data.slice(0, 5) : []);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  };

  fetchProducts();
}, []);


  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className={styles.empty}>Your cart is empty 🛒</div>;
  }

return (
<div className={styles.cartContainer}>
  <div className={styles.topSection}>
    <ul className={styles.cartList}>
      {cartItems.map((item) => (
        <li key={item.key} className={styles.cartItem}>
          <img src={item.imageUrl} alt={item.name} className={styles.image} />
          <div className={styles.details}>
            <h3>{item.name}</h3>
            <p>{item.price} {item.currency}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.key)} className={styles.removeBtn}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>

    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <div className={styles.summaryRow}>
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className={`${styles.summaryRow} ${styles.total}`}>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className={styles.checkoutBtn}>Proceed to Checkout</button>
    </div>
  </div>

  {/* Рекомендованные товары снизу */}
  <div className={styles.recommendedSection}>
    <h3 className={styles.recommendedTitle}>You Might Also Like</h3>
    <div className={styles.recommendedGrid}>
      {products.slice(0, 5).map((product) => ( /* Дисплеим массив карточек продуктов с помощью map*/
        <ProductCard /* Дисплеим продакт кард со всеми пропсами из productcard */
          key={product.id}
          productKey={product.key}
          id={product.id}
          name={product.name}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
          currency="EUR"
        />
      ))}
    </div>
  </div>
</div>
);
};

export default Cart;
