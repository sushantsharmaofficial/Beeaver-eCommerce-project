import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Store/store.jsx";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import OrderPage from "./Pages/OrderPage.jsx";
import MyCart from "./Pages/MyCart.jsx";
import SingleProductPage from "./Pages/SingleProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/orders",
        element: <OrderPage />,
      },
      {
        path: "/products/:id", // Dynamic route for single product
        element: <SingleProductPage />, // Create SingleProductPage component
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
