import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return;

    try {
      await axios.post('http://localhost:5000/api/products', {
        name,
        price: parseFloat(price),
      });
      setName('');
      setPrice('');
      window.location.reload();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4 mt-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700">Add Product</h2>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
