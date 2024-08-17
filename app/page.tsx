import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center bg-animated text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg neon-text">
          Hi, I&apos;m Jason Summers
        </h1>
        <p className="text-lg md:text-xl mb-8">Full-Stack Developer | Creating modern, responsive web applications</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <a href="https://linkedin.com/in/jason-w-summers/" target="_blank" rel="noopener noreferrer" className="hover-bounce">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/jwsummers" target="_blank" rel="noopener noreferrer" className="hover-bounce">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/JWSummers_dev" target="_blank" rel="noopener noreferrer" className="hover-bounce">
            <FaTwitter size={30} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link href="#projects" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover-bounce">
            View Projects
          </Link>
          <Link href="#contact" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 hover-bounce">
            Contact Me
          </Link>
        </div>
        <div className="mt-8 mb-8 w-full">
          <hr className="border-t border-gray-500 w-3/4 mx-auto" />
          <div className="text-center mt-2">
            <FaArrowDown className="inline-block text-gray-400" size={24} />
          </div>
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
