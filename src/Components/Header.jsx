import React, { useState } from "react";
import { SiKasasmart } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // Import the hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Import close icon for toggling
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown menu
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="bg-slate-100 z-50 sticky top-0 shadow-sm">
      {/* Mobile Navbar */}
      <header className="lg:hidden container mx-auto pt-3 pb-1">
        <div className="flex justify-between items-center py-4 px-4">
          <Link to="/">
            <div className="logo flex gap-2 items-center">
              <div className="text-2xl">
                <SiKasasmart />
              </div>
              <h3 className="font-serif text-2xl">
                <span className="text-purple-700">Y</span>our{" "}
                <span className="text-purple-700">M</span>art
              </h3>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="menu flex items-center">
              <Link to="/mycart">
                <div className="cart relative">
                  <BsFillCartFill className="text-purple-700 text-2xl" />
                  {cart.length !== 0 && (
                    <span className="absolute -top-6 -right-2 text-white bg-purple-700 border-1 border-white text-sm rounded-md px-1 py-0.5">
                      {cart.length}
                    </span>
                  )}
                </div>
              </Link>
              <div>
                <FaUser className="text-purple-700 hover:text-purple-900 transition-all duration-100 drop-shadow-md ml-4 text-2xl cursor-pointer" />
              </div>
            </div>
            {/* Hamburger Icon */}
            <div className="ml-4 cursor-pointer" onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <AiOutlineClose className="text-3xl text-purple-700" />
              ) : (
                <HiMenu className="text-3xl text-purple-700" />
              )}
            </div>
          </div>
        </div>
        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="bg-white shadow-lg rounded-md mt-2 py-2 absolute w-full left-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/products"
                className="block px-4 py-2 text-md font-medium hover:bg-purple-700 hover:text-white transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/orders"
                className="block px-4 py-2 text-md font-medium hover:bg-purple-700 hover:text-white transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                Orders
              </Link>
              <Link
                to="/mycart"
                className="block px-4 py-2 text-md font-medium hover:bg-purple-700 hover:text-white transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                My Cart
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Navbar */}
      <header className="hidden container mx-auto lg:flex justify-between items-center gap-10 py-6">
        <Link to="/">
          <div className="logo flex gap-2 items-center">
            <div className="text-4xl">
              <SiKasasmart />
            </div>
            <h3 className="font-serif text-5xl">
              <span className="text-purple-700">Y</span>our{" "}
              <span className="text-purple-700">M</span>art
            </h3>
          </div>
        </Link>
        <form action="submit" className="flex items-center">
          <input
            type="text"
            className="px-5 py-2 border-2 border-purple-700 rounded-lg"
            placeholder="Search Products..."
          />
          <button className="-m-9 p-3">
            <FiSearch className="text-purple-700" />
          </button>
        </form>
        <div className="menu flex gap-10 items-center">
          <Link
            to="/products"
            className="text-md font-medium pr-8 border-r-2 hover:text-purple-700 hover:underline border-gray-500"
          >
            Products
          </Link>
          <Link
            to="/orders"
            className="text-md font-medium pr-8 border-r-2 hover:text-purple-700 hover:underline border-gray-500"
          >
            Orders
          </Link>
          <Link
            to="/mycart"
            className="text-md font-medium pr-8 hover:text-purple-700 hover:underline"
          >
            My Cart
          </Link>
        </div>
        <div className="buttons flex gap-5 items-center">
          <Link to="/mycart">
            <div className="cart relative">
              <BsFillCartFill className="text-purple-700 hover:text-purple-900 transition-all duration-100 drop-shadow-md text-2xl" />
              {cart.length !== 0 && (
                <span className="absolute -top-6 -right-2 text-white bg-purple-700 border-1 border-white text-sm rounded-md px-1 py-0.5">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
          <div>
            <FaUser className="text-purple-700 hover:text-purple-900 transition-all duration-100 drop-shadow-md text-2xl cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
