import React from "react";
import ProductList from "../Components/ProductList";
import Banner from "../Components/Banner";
import Faq from "../Components/FAQ";
import Testimonial from "../Components/Testomonials";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Promotional Section */}
      <div className="container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
        <div className="bg-purple-700 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Free Shipping</h2>
          <p>On orders over $50! Limited time offer.</p>
        </div>
        <div className="bg-purple-100 text-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">New Arrivals</h2>
          <p>Check out the latest products in our store!</p>
        </div>
        <div className="bg-purple-700 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Seasonal Sale</h2>
          <p>Up to 50% off on selected items!</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto my-20 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-purple-100 p-6 text-center rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Clothing</h3>
          </div>
          <div className="bg-purple-100 p-6 text-center rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Electronics</h3>
          </div>
          <div className="bg-purple-100 p-6 text-center rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Home & Garden</h3>
          </div>
          <div className="bg-purple-100 p-6 text-center rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Beauty</h3>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-0">
        <ProductList limit={4} />
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto my-20 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
          Featured Products
        </h2>
        <ProductList limit={4} />
      </div>

      {/* faq */}
      <Faq />

      {/* testomonials */}
      <Testimonial />
    </div>
  );
};

export default Home;
