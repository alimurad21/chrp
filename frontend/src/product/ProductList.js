import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Product List</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products yet.</p>
      ) : (
        <ul className="space-y-3">
          {products.map(product => (
            <li
              key={product._id}
              className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <span className="font-medium text-gray-800">{product.name}</span>
              <span className="text-blue-600 font-semibold">${product.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
