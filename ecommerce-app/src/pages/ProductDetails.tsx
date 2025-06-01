import React from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"

const ProductDetail = () => {
  const { productKey } = useParams();
   console.log('Product Key:', productKey);

  // Fetch product from API or use already loaded products
  // Пример: const product = products.find(p => p.key === key);

  return (
    <div>
      <h1>Product Details for: {productKey}</h1>
      {/* Тут вставить подробности по продукту */}
    </div>
  );
};

export default ProductDetail;