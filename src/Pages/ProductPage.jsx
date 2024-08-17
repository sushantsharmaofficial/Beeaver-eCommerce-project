import React from "react";
import ProductList from "../Components/ProductList";

const ProductPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-start py-10">All Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;
