'use client';

import React from 'react';
import WordCycle from './components/WordCycle';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home: React.FC = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Words to cycle through in WordCycle component
  const words = ['modern', 'responsive', 'user-friendly'];

  return (
    <>
      <Navbar />
      <div className='relative h-screen flex flex-col justify-center items-center bg-animated text-white text-center px-4'>
        {/* Abstract Background Shapes */}
        <div className='absolute inset-0 z-0 overflow-hidden'>
          <div className='bg-gradient-to-r from-pink-500 to-purple-500 opacity-50 rounded-full w-96 h-96 -top-20 -left-20 transform scale-150'></div>
          <div className='bg-gradient-to-r from-blue-500 to-green-500 opacity-50 rounded-full w-72 h-72 -bottom-20 -right-20 transform scale-150'></div>
        </div>

        <div className='relative z-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg neon-text'>
            Hi, I&apos;m Jason Summers.{' '}
            <span className='wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
          </h1>

          <p className='text-lg md:text-xl mb-4'>
            Full-Stack Developer | Creating{' '}
            <WordCycle words={words} className='text-green-300 font-bold' /> web
            applications
          </p>

          <div className='flex justify-center space-x-4 mb-4'>
            <a
              href='https://linkedin.com/in/jason-w-summers/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-bounce'
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href='https://github.com/jwsummers'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-bounce'
            >
              <FaGithub size={30} />
            </a>
            <a
              href='https://twitter.com/JWSummers_dev'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-bounce'
            >
              <FaTwitter size={30} />
            </a>
          </div>

          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center'>
            <Link
              href='#projects'
              className='w-40 md:w-auto px-4 py-2 md:px-6 md:py-3 bg-blue-600 rounded hover:bg-blue-700 hover-bounce text-sm md:text-base text-center'
            >
              View Projects
            </Link>
            <Link
              href='#contact'
              className='w-40 md:w-auto px-4 py-2 md:px-6 md:py-3 bg-green-600 rounded hover:bg-green-700 hover-bounce text-sm md:text-base text-center'
            >
              Contact Me
            </Link>
          </div>

          {/* Subheading under call-to-action buttons */}
          <p className='mt-6 max-w-lg mx-auto'>
            <span className='text-green-300 font-semibold shadow-lg'>
              Passionate
            </span>{' '}
            about delivering impactful digital solutions, leveraging my
            experience to make a seamless transition into full-time web
            development, and always{' '}
            <span className='text-green-300 font-semibold shadow-lg'>
              eager
            </span>{' '}
            to learn, grow, and refine my skills.
          </p>
        </div>

        {/* Interactive Down Arrow */}
        <div
          className='absolute bottom-10 text-center w-full cursor-pointer animate-bounce'
          onClick={handleScroll}
        >
          <FaArrowDown className='inline-block text-gray-400' size={24} />
        </div>
      </div>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
