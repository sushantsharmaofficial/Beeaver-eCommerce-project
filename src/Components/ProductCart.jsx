import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className="product group shadow-lg rounded-md p-5 hover:-translate-y-3 hover:shadow-2xl cursor-pointer transition-all duration-200">
      <div className="image relative overflow-hidden">
        <Link key={product.id} to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-md h-60 sm:h-72 w-full object-contain"
          />
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="absolute text-white bg-purple-700 py-2 sm:py-3 font-semibold -bottom-32 group-hover:bottom-0 transition-all rounded-md left-0 w-full"
        >
          ADD TO CART
        </button>
      </div>
      <div className="info py-4 sm:py-5">
        <Link key={product.id} to={`/products/${product.id}`}>
          <h3 className="font-bold text-md sm:text-lg text-purple-600">
            {product.title.slice(0, 30)}...
          </h3>
        </Link>
        <div className="price flex items-center font-bold text-md sm:text-lg mt-2">
          <BsCurrencyDollar />
          {product.price}
        </div>
        <div className="text text-xs sm:text-sm my-2 sm:my-3">
          {product.description.slice(0, 200)}...
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
