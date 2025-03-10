import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';

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
    <div
      id='about'
      className='min-h-screen flex flex-col justify-center items-center bg-muted-gradient-1 p-8 section-border-top scroll-mt-12'
    >
      <motion.h2
        className='section-heading'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>

      {/* Main About Section */}
      <div className='flex flex-col w-full md:w-3/4 lg:w-2/3 mx-auto'>
        <div
          className='relative z-10 shadow-lg p-6 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg bg-gray-900/55'
          style={{
            boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
          }}
        >
          <div className='flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0'>
            {/* Left: About Me Text and Headshot */}
            <motion.div
              className='flex flex-col md:w-1/2 space-y-4'
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Headshot */}
              <div className='flex justify-center mb-4'>
                <Image
                  src='/headshot.png'
                  alt='Headshot'
                  width={150}
                  height={150}
                  className='rounded-full shadow-lg border-4 border-white'
                />
              </div>
              <p className='text-white mb-4'>
                I am a passionate Full-Stack Developer and the founder of{' '}
                <span className='neon-text'>
                  <a href='https://techtunedwebdesign.com'>
                    TechTuned Web Design
                  </a>
                </span>
                , a web design agency committed to creating user-friendly
                digital solutions for clients. My journey in web development has
                equipped me with a deep understanding of both front-end and
                back-end technologies, enabling me to build robust, responsive
                websites. Whether leading projects at TechTuned or collaborating
                on freelance work, I’m driven by the desire to deliver impactful
                solutions that meet both user and business needs.
              </p>
              <a
                href='/resume'
                className='inline-block px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out'
              >
                View My Resume
              </a>
            </motion.div>
            {/* Right: About Image */}
            <motion.div
              className='md:w-1/2 flex justify-center items-center'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src='/images/about.png'
                alt='About illustration'
                width={400}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Remaining Sections */}
      <div className='w-full md:w-3/4 lg:w-2/3 space-y-12 mt-12'>
        {/* GitHub Calendar Section */}
        <motion.div
          className='bg-gray-800/55 w-full p-6 rounded-lg shadow-lg'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
          }}
        >
          <h3 className='text-xl font-semibold neon-text mb-4 text-center'>
            GitHub Activity
          </h3>
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

        {/* TechTuned and Fiverr Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
          {/* TechTuned Web Design Section */}
          <motion.div
            className='bg-gray-800/55 p-6 rounded-lg shadow-lg'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
            }}
          >
            <div className='flex flex-col md:flex-row justify-between items-center'>
              {/* Left: Text and Social Icons */}
              <div className='md:w-1/2 space-y-4'>
                <h3 className='text-xl font-semibold neon-text mb-2'>
                  TechTuned Web Design
                </h3>
                <p className='text-white'>
                  Visit my web design agency:{' '}
                  <a
                    href='https://techtuned.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline'
                  >
                    TechTuned Website
                  </a>
                </p>
                <div className='flex space-x-4 mt-4'>
                  <a
                    href='https://www.linkedin.com/company/techtuned-web-design'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover-bounce'
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href='https://facebook.com/techtunedwebdesign'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover-bounce'
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    href='https://twitter.com/TechTuned'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover-bounce'
                  >
                    <FaXTwitter size={30} />
                  </a>
                </div>
              </div>

              {/* Right: Logo */}
              <div className='md:w-1/2 flex justify-end'>
                <Image
                  src='/images/TT-Logo-Black-RB.png'
                  alt='TechTuned Web Design Logo'
                  width={200}
                  height={200}
                  className='rounded-lg md:w-[250px] md:h-[250px] w-[150px] h-[150px]'
                />
              </div>
            </div>

            {/* Projects Section */}
            <div className='flex flex-col md:flex-row justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4'>
              <a
                href='https://7millionmedia.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1'
              >
                <Image
                  src='/images/7MM.png'
                  alt='TechTuned client project'
                  width={300}
                  height={200}
                  className='rounded-lg shadow-lg w-full'
                />
              </a>
              <a
                href='https://myautocareexpert.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1'
              >
                <Image
                  src='/images/mace.png'
                  alt='TechTuned client project'
                  width={300}
                  height={200}
                  className='rounded-lg shadow-lg w-full'
                />
              </a>
            </div>
          </motion.div>

          {/* Fiverr Section */}
          <motion.div
            className='bg-gray-800/55 p-6 rounded-lg shadow-lg'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
            }}
          >
            <h3 className='text-xl font-semibold neon-text mb-2'>
              Hire Me on Fiverr
            </h3>
            <p className='text-white'>
              Collaborate with me on{' '}
              <a
                href='https://www.fiverr.com/jasonwsummers?public_mode=true'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:underline'
              >
                Fiverr
              </a>{' '}
              to bring your ideas to life!
            </p>
            <a
              href='https://www.fiverr.com/s/o8zd8zG'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center mt-4'
            >
              <SiFiverr size={150} color='#ff00ff' />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
