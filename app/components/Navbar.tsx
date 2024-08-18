"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            Jason Summers
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 absolute md:relative w-full md:w-auto left-0 md:left-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out md:top-auto ${isOpen ? 'top-12' : 'top-[-300px] md:top-0'}`}>
          <Link href="#about" className="hover:text-gray-300 px-4 py-2 md:px-0">About Me</Link>
          <Link href="#projects" className="hover:text-gray-300 px-4 py-2 md:px-0">Projects</Link>
          <Link href="#contact" className="hover:text-gray-300 px-4 py-2 md:px-0">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
