'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-[#16191e] via-[#19192a] to-[#260b36] overflow-hidden'>
      {/* Neon moving background */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute w-[600px] h-[600px] top-[-100px] left-[-200px] rounded-full bg-[#7F6FFF] opacity-30 blur-3xl animate-pulse'></div>
        <div className='absolute w-[500px] h-[500px] bottom-[-100px] right-[-100px] rounded-full bg-[#f906c7] opacity-30 blur-3xl animate-pulse delay-200'></div>
        <div className='absolute w-[700px] h-[700px] bottom-[-200px] left-[20vw] rounded-full bg-[#01fff0] opacity-20 blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Glass morphism card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='relative z-10 max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center'
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className='text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#01fff0] via-[#a300fa] to-[#f906c7] drop-shadow-[0_0_10px_#01fff0] mb-6'
        >
          Jason Summers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className='mb-3'
        >
          <span className='inline-block px-4 py-2 rounded-xl bg-black/40 text-[#01fff0] font-semibold text-lg shadow-md border border-white/10 uppercase tracking-wider'>
            Full Stack Software Engineer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className='text-lg md:text-xl text-white/90 mb-6'
        >
          I’m a builder at heart—transitioning from a 20-year career as a master
          automotive technician into the fast lane of web and SaaS development.
          I create neon-powered, glassy web apps and AI-driven tools with
          real-world impact. Always learning, always building, always leveling
          up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className='flex gap-4 mb-8'
        >
          <Link
            href='#projects'
            className='relative inline-block px-8 py-3 rounded-2xl font-bold bg-gradient-to-tr from-[#f906c7] via-[#a300fa] to-[#01fff0] text-black neon-shadow hover:scale-105 hover:-translate-y-1 transition-transform shadow-lg focus:outline-none'
          >
            View Projects
            <span className='absolute bottom-0 left-0 w-full h-1 bg-[#01fff0] rounded-bl-2xl rounded-br-2xl opacity-70 blur-sm'></span>
          </Link>
          <Link
            href='#contact'
            className='relative inline-block px-8 py-3 rounded-2xl font-bold bg-white/10 text-[#01fff0] neon-shadow hover:bg-[#01fff0]/10 hover:scale-105 hover:-translate-y-1 transition-transform shadow-lg border border-[#01fff0]/40 focus:outline-none'
          >
            Contact Me
            <span className='absolute bottom-0 left-0 w-full h-1 bg-[#01fff0] rounded-bl-2xl rounded-br-2xl opacity-40 blur-sm'></span>
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className='flex gap-6'
        >
          <a
            href='https://github.com/jwsummers'
            target='_blank'
            rel='noopener noreferrer'
            className='group'
            aria-label='GitHub'
          >
            <Github className='w-7 h-7 text-[#a300fa] group-hover:text-[#01fff0] transition-all duration-200 drop-shadow-glow' />
          </a>
          <a
            href='https://linkedin.com/in/jason-w-summers'
            target='_blank'
            rel='noopener noreferrer'
            className='group'
            aria-label='LinkedIn'
          >
            <Linkedin className='w-7 h-7 text-[#01fff0] group-hover:text-[#f906c7] transition-all duration-200 drop-shadow-glow' />
          </a>
          <a
            href='mailto:jwsummers.dev@gmail.com'
            className='group'
            aria-label='Email'
          >
            <Mail className='w-7 h-7 text-[#f906c7] group-hover:text-[#01fff0] transition-all duration-200 drop-shadow-glow' />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
