import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../Store/productSlice";
import { addToCart } from "../Store/cartSlice";
import Loader from "../Components/Loader";
import { BsCurrencyDollar } from "react-icons/bs";

const SingleProductPage = () => {
  const { id } = useParams(); // Get product ID from URL params
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProductsRequest()); // Fetch products if not already in state
    }
  }, [dispatch, items.length]);

  const product = items.find((product) => product.id === parseInt(id)); // Find product by ID

  if (loading) return <Loader />;
  if (error) return <p>Error loading product: {error}</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="w-full h-96">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold text-purple-700 mb-4">
            {product.title}
          </h1>
          <div className="flex items-center mb-4 text-xl font-semibold text-gray-700">
            <BsCurrencyDollar className="mr-1" /> {product.price}
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
