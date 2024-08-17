// import React from "react";
// import ProductList from "./Components/ProductList";
// import Cart from "./Components/Cart";
// import Order from "./Components/Order";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
