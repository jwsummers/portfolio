'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const navLinks = [
  { href: '/#about', label: 'About Me' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <Link href='/'>
            <Image
              src='/images/JSdark.png'
              alt='JS Logo'
              width={65}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white hover:text-[#01fff0] transition-colors duration-300 focus:outline-none'
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
        <div
          className={`md:flex ${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 absolute md:static left-0 md:left-auto w-full md:w-auto bg-gray-900/90 md:bg-transparent backdrop-blur-lg md:backdrop-blur-0 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen ? 'top-16' : 'top-[-300px] md:top-0'
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className='nav-link group relative px-3 py-2 font-semibold text-white tracking-wide transition-colors duration-200'
            >
              {label}
              <span
                className='absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-[#01fff0] via-[#a300fa] to-[#f906c7] rounded-full opacity-80 shadow-neon
                  group-hover:w-full transition-all duration-300'
              ></span>
            </Link>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .shadow-neon {
          box-shadow: 0 0 8px #01fff0, 0 0 4px #a300fa;
        }
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link .absolute {
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover .absolute {
          width: 100% !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
