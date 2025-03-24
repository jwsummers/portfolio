'use client';

import React from 'react';
import WordCycle from './components/WordCycle';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
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
      <div className='relative h-screen flex flex-col justify-center items-center bg-animated text-white text-center px-4 overflow-hidden'>
        {/* Animated Background Gradients (Using more colors for richness) */}
        <div className='absolute inset-0 z-0'>
          <div className='bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-40 rounded-full w-96 h-96 -top-20 -left-20 transform scale-150 animate-pulse'></div>
          <div className='bg-gradient-to-tl from-blue-500 via-green-500 to-yellow-500 opacity-40 rounded-full w-72 h-72 -bottom-20 -right-20 transform scale-150 animate-pulse'></div>
        </div>

        <div className='relative z-10'>
          {/* Avatar with Border and Shadow */}
          <div className='md:flex justify-center sm:hidden mb-6'>
            <Image
              src='/images/AvatarRB.png'
              alt='Headshot'
              width={200}
              height={200}
              className='rounded-full shadow-lg border-4 border-pink-500'
            />
          </div>

          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg neon-text'>
            Hi, I&apos;m Jason Summers{' '}
            <span className='wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
          </h1>

          <p className='text-lg md:text-xl mb-6 text-gray-300'>
            Full-Stack Developer crafting{' '}
            <WordCycle
              words={words}
              className='text-white neon-text font-semibold'
            />{' '}
            web experiences.
          </p>

          {/* Social Links */}
          <div className='flex justify-center space-x-6 mb-8'>
            <a
              href='https://linkedin.com/in/jason-w-summers/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-400 hover:text-pink-500 hover:scale-110 transition-transform duration-300'
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href='https://github.com/jwsummers'
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-400 hover:text-pink-500 hover:scale-110 transition-transform duration-300'
            >
              <FaGithub size={30} />
            </a>
            <a
              href='https://twitter.com/JWSummers_dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-400 hover:text-pink-500 hover:scale-110 transition-transform duration-300'
            >
              <FaTwitter size={30} />
            </a>
          </div>

          {/* Call to Action Buttons (Styled Consistently) */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center'>
            <Link
              href='#projects'
              className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-md transition duration-300 ease-in-out'
            >
              Explore Projects
            </Link>
            <Link
              href='#contact'
              className='px-6 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-gray-800 font-semibold rounded-full hover:shadow-md transition duration-300 ease-in-out'
            >
              Connect With Me
            </Link>
          </div>

          {/* Subheading with Emphasis */}
          <p className='mt-8 max-w-lg mx-auto text-gray-300'>
            <span className='text-green-400 font-semibold shadow-lg'>
              Passionate
            </span>{' '}
            about delivering impactful digital solutions, and committed to
            making a seamless transition into full-time web development.
            I&apos;m always{' '}
            <span className='text-green-400 font-semibold shadow-md'>
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
