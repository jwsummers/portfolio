'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const explicitTheme = {
  light: ['#E5E5E5', '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1'],
  dark: ['#2E2F48', '#414591', '#6C63FF', '#C084F5', '#D76D77'],
};

const selectLastHalfYear = (contributions: any[]) => {
  if (!contributions || contributions.length === 0) return [];
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return contributions.filter((activity: { date: string | number | Date }) => {
    const date = new Date(activity.date);
    return date >= sixMonthsAgo;
  });
};

const About: React.FC = () => {
  return (
    <section
      id='about'
      className='relative min-h-screen flex flex-col justify-center items-center bg-muted-gradient-1 p-8 section-border-top scroll-mt-12'
    >
      <motion.h2
        className='section-heading'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>

      {/* Main Content Card */}
      <div className='w-full md:w-4/5 lg:w-2/3 mx-auto rounded-3xl shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 mt-8 p-8 flex flex-col md:flex-row gap-10 items-center'>
        {/* Left: Small Headshot & Socials */}
        <div className='flex flex-col items-center md:w-1/4 gap-6'>
          {/* Small, soft-glow headshot */}
          <div className='relative'>
            <Image
              src='/headshot.png'
              alt='Jason Summers'
              width={120}
              height={120}
              className='rounded-full border-4 border-[#01fff0] shadow-lg'
              priority
            />
            <span className='absolute -bottom-2 -right-2 block w-6 h-6 bg-[#a300fa] rounded-full blur-sm opacity-70'></span>
          </div>
          {/* Socials */}
          <div className='flex gap-4'>
            <a
              href='https://linkedin.com/in/jason-w-summers/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#01fff0] hover:text-[#a300fa] transition'
              aria-label='LinkedIn'
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href='https://facebook.com/techtunedwebdesign'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#a300fa] hover:text-[#01fff0] transition'
              aria-label='Facebook'
            >
              <FaFacebook size={28} />
            </a>
            <a
              href='https://twitter.com/TechTuned'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#f906c7] hover:text-[#01fff0] transition'
              aria-label='Twitter'
            >
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Right: Personal Story/Skills */}
        <div className='flex-1'>
          <motion.p
            className='text-white/90 text-lg mb-6'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className='font-semibold text-[#01fff0]'>
              Hey, I’m Jason.
            </span>{' '}
            After 20 years as a master automotive technician and team leader, I
            made the jump into web and SaaS development—fueled by a passion for
            problem-solving, building things, and making a real impact.
            <br />
            <br />
            I specialize in crafting bold, neon-powered web apps, SaaS tools,
            and real-world digital solutions. My focus: performance, usability,
            and a touch of creative fun. I love blending hands-on technical
            know-how with design and business strategy.
            <br />
            <br />
            <a href='https://www.techtunedwebdesign.com'>
              <span className='font-semibold text-[#a300fa]'>TechTuned</span>
            </a>{' '}
            is my platform for building, experimenting, and sharing products
            that solve problems—from asset tracking to AI-powered tools. I’m
            always learning, always iterating.
            <br />
            <br />
            I’m looking to join a forward-thinking team or company, or to launch
            digital products that make a difference. Want to connect?{' '}
            <a
              href='/resume'
              className='text-[#01fff0] underline hover:text-[#f906c7] transition'
            >
              Check out my resume
            </a>{' '}
            or drop me a message!
          </motion.p>

          {/* Optional: Skills/Stack List */}
          <div className='flex flex-wrap gap-3 mt-4'>
            <span className='bg-[#01fff0]/20 text-[#01fff0] px-4 py-2 rounded-xl text-xs font-semibold'>
              React
            </span>
            <span className='bg-[#a300fa]/20 text-[#a300fa] px-4 py-2 rounded-xl text-xs font-semibold'>
              Next.js
            </span>
            <span className='bg-[#f906c7]/20 text-[#f906c7] px-4 py-2 rounded-xl text-xs font-semibold'>
              Tailwind CSS
            </span>
            <span className='bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold'>
              TypeScript
            </span>
            <span className='bg-[#0ff] text-[#16191e] px-4 py-2 rounded-xl text-xs font-semibold'>
              SaaS
            </span>
            <span className='bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold'>
              Node.js
            </span>
            <span className='bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold'>
              Prisma
            </span>
            <span className='bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold'>
              PostgreSQL
            </span>
            <span className='bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold'>
              AI APIs
            </span>
            {/* ...add any other you want */}
          </div>
        </div>
      </div>

      {/* GitHub Calendar */}
      <motion.div
        className='w-full md:w-4/5 lg:w-2/3 bg-white/10 rounded-3xl shadow-lg p-8 mt-12'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className='text-2xl font-bold text-white/90 mb-4 text-center'>
          My Coding Footprint
        </h3>
        <p className='text-gray-300 text-center mb-4'>
          Here’s a glimpse of my GitHub activity over the past six months:
        </p>
        <div className='w-full max-w-lg mx-auto overflow-x-auto'>
          <GitHubCalendar
            username='jwsummers'
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={explicitTheme}
            transformData={selectLastHalfYear}
            labels={{
              totalCount: '{{count}} contributions in the last six months',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
