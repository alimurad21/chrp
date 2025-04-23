import React from 'react';
import ProductForm from './product/ProductForm';
import ProductList from './product/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Product Manager</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
