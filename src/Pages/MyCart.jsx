import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../Store/cartSlice";
import { placeOrder } from "../Store/orderSlice";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false); // State for alert

  // Calculate total products and total price
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Discount logic: let's say 10% discount for example
  const discount = totalPrice * 0.1;
  const payableAmount = totalPrice - discount;

  const handlePlaceOrder = () => {
    dispatch(placeOrder(cart)); // Dispatch the order action
    setOrderPlaced(true); // Show the alert message

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className="relative container mx-auto mb-20">
      <h1 className="text-3xl font-bold text-start px-5 md:px-0 py-10">
        Your Cart
      </h1>

      {/* Alert Message for Order Placed - Positioned absolutely */}
      {orderPlaced && (
        <div
          className="fixed right-1/2 transform translate-x-1/2 top-20 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md shadow-lg z-50"
          role="alert"
        >
          <strong className="font-bold">Order placed successfully!</strong>
          <span className="block sm:inline">
            {" "}
            Your order has been processed.
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-0 gap-6 md:gap-20">
        {/* Cart Items */}
        <div className="w-full md:w-2/3">
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between mb-10 items-start bg-white p-5 rounded-lg shadow-lg"
                >
                  <div className="flex gap-6 items-center">
                    <img
                      src={item.image}
                      className="h-28 w-28 rounded-lg object-contain"
                      alt={item.title}
                    />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className=" text-md font-semibold mb-1 text-gray-500">
                        ${item.price}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          className="px-3 py-1 bg-gray-300 rounded-l-md hover:bg-gray-400 transition"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        <p className="px-4 py-1 bg-white border border-gray-300">
                          {item.quantity}
                        </p>
                        <button
                          className="px-3 py-1 bg-gray-300 rounded-r-md hover:bg-gray-400 transition"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-semibold text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="ml-2 md:ml-0 text-red-500 hover:text-red-700 transition"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <RiDeleteBin6Fill className="h-7 w-7" />
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center p-10 bg-purple-100 rounded-lg shadow-md">
              <p className="text-xl text-gray-600">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="w-full md:w-1/3  mt-10 md:mt-0 bg-slate-700 text-white rounded-lg p-6 shadow-lg">
          {cart.length > 0 ? (
            <>
              <h3 className="text-3xl font-bold mb-5">Cart Summary</h3>
              <div className="flex justify-between mb-4">
                <p>Total Products</p>
                <p>{totalProducts}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Total Price</p>
                <p className="flex items-center">
                  <BsCurrencyDollar /> {totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Discount (10%)</p>
                <p className="flex items-center">
                  <BsCurrencyDollar /> {discount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between font-bold text-lg mb-5">
                <p>Payable Amount</p>
                <p className="flex items-center">
                  <BsCurrencyDollar /> {payableAmount.toFixed(2)}
                </p>
              </div>
              <button
                className="bg-white text-purple-700 font-semibold w-full py-3 rounded-md hover:bg-purple-800 hover:text-white transition-colors duration-300"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </>
          ) : (
            <div className="text-center">
              <p>No Items Selected</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
