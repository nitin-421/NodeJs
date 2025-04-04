// Cart.js
import React from "react";

function Cart({ cartItems, onClose, onRemove, onUpdateQuantity }) {
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + item.price * (1 - item.discountPercentage / 100) * item.quantity,
    0
  );

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose} className="close-cart">
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (<p>Your cart is empty</p>) : 
        (<>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>
                    ${(item.price*(1 - item.discountPercentage / 100)).toFixed(2)}
                  </p>
                  <div className="quantity-controls">
                    <button onClick={()=>onUpdateQuantity(item.id,item.quantity-1)} aria-label="Decrease quantity">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="remove-item" aria-label="Remove item">
                  ❌
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>)}
      </div>
    </div>
  );
}

export default Cart;
