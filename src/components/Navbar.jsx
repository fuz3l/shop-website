import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link to="/">Galaxy Eyewear</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2">Home</Link>
          <Link to="/products" className="block text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2">Products</Link>
          <Link to="/about" className="block text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2">About</Link>
          <Link to="/contact" className="block text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
