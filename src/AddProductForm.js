// AddProductForm.js
import React, { useState } from 'react';

function AddProductForm({ onAdd, onClose }) {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    category: 'beauty',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    images: [],
    thumbnail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: 
        name === 'price' ||
        name === 'discountPercentage' || 
        name === 'rating' || 
        name === 'stock' ? 
        parseFloat(value) || 0: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newProduct);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>Add New Product</h2>
          <button onClick={onClose} className="close-form">×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
            >
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label>Discount (%):</label>
              <input
                type="number"
                name="discountPercentage"
                value={newProduct.discountPercentage}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                value={newProduct.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
              />
            </div>
            <div className="form-group">
              <label>Stock:</label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Thumbnail URL:</label>
            <input
              type="url"
              name="thumbnail"
              value={newProduct.thumbnail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;