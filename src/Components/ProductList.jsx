import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../Store/productSlice";
import ProductCard from "./ProductCart";
import Loader from "./Loader";

const ProductList = ({ limit }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  const productsToShow = limit ? items.slice(0, limit) : items;

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className=" container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  lg:gap-10 mt-20 mb-20">
      {productsToShow.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
