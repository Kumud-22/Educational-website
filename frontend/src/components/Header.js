import React from 'react';
import { FaSearch, FaBookOpen, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">Insane Knowledge</div>
          <nav className="flex space-x-4">
            <button className="hover:text-gray-400 transition">
              Categories
            </button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your course"
              className="bg-gray-700 text-white rounded-full px-4 py-2 pl-10 placeholder-gray-400 focus:outline-none focus:bg-gray-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <FaBookOpen className="hover:text-gray-400 transition h-6 w-6" />
          <FaShoppingCart className="hover:text-gray-400 transition h-6 w-6" />
          <FaUser className="hover:text-gray-400 transition h-6 w-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
