import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Jason Summers | Web Developer</Link>
        </div>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-gray-300">About Me</Link>
          <Link href="#projects" className="hover:text-gray-300">Projects</Link>
          <Link href="#contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
