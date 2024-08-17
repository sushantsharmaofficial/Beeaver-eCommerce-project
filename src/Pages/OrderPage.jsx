import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="container mx-auto mb-20 px-4 lg:px-0">
      <h2 className="text-3xl font-bold text-start py-10">Your Orders</h2>

      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md bg-white mb-10 p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Order {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {order.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-10 lg:gap-48 border-b pb-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-28 object-cover rounded-lg"
                    />
                    <div className="w-[200px] md:w-[200px] lg:w-[300px]">
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-gray-500">Price: ${item.price}</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        // No Orders - Centered box with purple theme
        <div className="flex items-center justify-center h-[300px]">
          <div className="text-center bg-purple-100 border border-purple-300 rounded-lg shadow-md p-10 w-full max-w-md">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              No Orders Yet
            </h3>
            <p className="text-gray-600">You haven't placed any orders yet.</p>
            <p className="text-gray-600">
              Browse our products and place your first order!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
