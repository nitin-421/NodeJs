// ProductCard.js
import React from 'react';

function ProductCard({ product, addToCart }) {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="product-card">
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="product-thumbnail"
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="price-container">
        {product.discountPercentage > 0 && (
          <>
            <span className="original-price">${product.price.toFixed(2)}</span>
            <span className="discount-percent">
              -{product.discountPercentage}%
            </span>
          </>
        )}
        <span className="final-price">
          ${discountedPrice.toFixed(2)}
        </span>
      </div>
      <div className="rating-stock">
        <span>⭐ {product.rating}</span>
        <span>Stock: {product.stock}</span>
      </div>
      <button onClick={() => addToCart(product)} disabled={product.stock <= 0}
      >
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
}

export default ProductCard;