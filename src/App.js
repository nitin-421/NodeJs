// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import AddProductForm from './AddProductForm';
import { products as productsData } from './Data.js'; // import productsData from './Product.json'; 
import './App.css';

function App() {
  const [products, setProducts] = useState(productsData); // cart 
  const [cartItems, setCartItems] = useState([]); // cart items
  const [showCart, setShowCart] = useState(false); // show cart
  const [showAddForm, setShowAddForm] = useState(false); // show add form

  const addToCart = (product) => {
    if (product.stock <= 0) return;
  
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addProduct = (newProduct) => {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setShowAddForm(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Hello Store</h1>
        <button className="cart-button" onClick={() => setShowCart(true)}>
          Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </header>

      <main>
        <button className="add-product-btn" onClick={() => setShowAddForm(true)}>
          Add New Product
        </button>
        <ProductList products={products} addToCart={addToCart} />
      </main>

      {showCart && (
        <Cart 
          cartItems={cartItems} 
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}

      {showAddForm && (
        <AddProductForm 
          onAdd={addProduct}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}

export default App;