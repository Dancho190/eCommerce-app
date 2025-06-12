import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';


export interface ProductInCart {
  key: string, // Добавляем продукт в корзину по ключу
  name: string,
  price: number,
  currency: string,
  quantity: number,
  imageUrl:string,
}

interface CartContextType { // Фукнции что меняют состояние корзины
  cartItems: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined); // Создание контекста

export const useCart = () => { // Сама функция контекста
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

  // Загружаем из localStorage при монтировании
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse cart from localStorage:', err);
      }
    }
  }, []);

  // Сохраняем в localStorage при каждом изменении корзины
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: ProductInCart) => { // Добавляем товар в корзину
    setCartItems(prev => {
       const existing = prev.find(item => item.key === product.key); // Находим товар по ключу
      if (existing) {
        return prev.map(item =>
          item.key === product.key ? { ...item, quantity: item.quantity + product.quantity } : item // показываем массив товаров по ключу
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = ( key: string) => { // Удаляем товар из корзины 
     setCartItems(prev => prev.filter(item => item.key !== item.key));;
     console.log(key)
  };

  const clearCart = () => setCartItems([]); // Меняем состояние корзины

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
  );
};

