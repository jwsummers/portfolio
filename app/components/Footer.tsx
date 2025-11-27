'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6'; // v6 for consistent icon sizing

const Footer: React.FC = () => {
  return (
    <footer className='relative mt-0 bg-white/2 border-t-2 border-t-transparent border-gradient-to-r from-[#01fff0] via-[#a300fa] to-[#f906c7] backdrop-blur-lg z-10'>
      {/* Faint animated blob for flavor */}
      <div className='absolute -top-10 right-1/4 w-40 h-40 bg-[#a300fa] opacity-20 blur-2xl rounded-full pointer-events-none -z-10 animate-pulse' />
      <div className='container mx-auto flex flex-col items-center py-8'>
        <div className='flex space-x-7 mb-3'>
          <a
            href='https://linkedin.com/in/jason-w-summers'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#01fff0] hover:text-[#f906c7] neon-footer transition-all duration-200'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href='https://github.com/jwsummers'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#a300fa] hover:text-[#01fff0] neon-footer transition-all duration-200'
            aria-label='GitHub'
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:hello@jasonwsummers.com"
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#f906c7] hover:text-[#01fff0] neon-footer transition-all duration-200'
            aria-label='Email'
          >
            <FaEnvelope size={28} />
          </a>
        </div>
        <p className='text-sm text-white/80 tracking-widest font-semibold'>
          &copy; {new Date().getFullYear()} Jason Summers — All Rights Reserved.
        </p>
      </div>
      <style jsx global>{`
        .neon-footer {
          filter: drop-shadow(0 0 10px #01fff0) drop-shadow(0 0 4px #a300fa);
        }
        .neon-footer:hover {
          filter: drop-shadow(0 0 16px #f906c7) drop-shadow(0 0 10px #01fff0);
          transform: scale(1.17) translateY(-2px);
        }
        footer {
          border-top: 2px solid;
          border-image: linear-gradient(to right, #01fff0, #a300fa, #f906c7) 1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
