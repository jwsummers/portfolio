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

      {/* Main About Section - Reimagined */}
      <div className='flex flex-col w-full md:w-3/4 lg:w-2/3 mx-auto'>
        <div
          className='relative z-10 shadow-lg p-6 w-full rounded-lg overflow-hidden' // Remove BG colors here
          style={{
            boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
          }}
        >
          {/* Background Overlay with gradient and blur */}
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 opacity-70 blur-lg -z-10'></div>

          <div className='flex flex-col md:flex-row md:justify-between items-center gap-8'>
            {/* Left: About Me Text and Headshot - Column layout */}
            <div className='flex flex-col md:w-1/2 space-y-6'>
              {/* Headshot - Centered and with a more prominent border */}
              <div className='flex justify-center'>
                <Image
                  src='/headshot.png'
                  alt='Headshot'
                  width={180}
                  height={180}
                  className='rounded-full shadow-lg border-4 border-pink-500'
                  priority // add priority for initial load.
                />
              </div>

              {/* About Me Text - More engaging and less dense. */}
              <p className='text-white text-lg font-light leading-relaxed'>
                Hi, I&apos;m Jason! A Full-Stack Developer passionate about
                crafting intuitive web experiences. I lead{' '}
                <a
                  href='https://techtunedwebdesign.com'
                  className='neon-text hover:underline'
                >
                  TechTuned Web Design
                </a>
                , where we build digital solutions tailored to your needs. My
                focus is on creating performant and user-friendly websites that
                drive results.
              </p>

              <motion.a
                href='/resume'
                className='inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center rounded-full hover:shadow-md transition duration-300 ease-in-out self-start'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Resume
              </motion.a>
            </div>

            {/* Right: About Illustration - Made more prominent and modern */}
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
                width={500} // Increased image size
                height={500} // Increased image size
                className='rounded-xl shadow-xl' // More rounded corners
                priority // Add priority for inital image loading.
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Remaining Sections - Enhanced styling */}
      <div className='w-full md:w-3/4 lg:w-2/3 space-y-12 mt-12'>
        {/* GitHub Calendar Section - Refined */}
        <motion.div
          className='bg-gray-800 p-6 rounded-lg shadow-lg' // Removed opacity for more depth
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
          }}
        >
          <h3 className='text-2xl font-semibold neon-text mb-4 text-center'>
            My Coding Footprint
          </h3>
          <p className='text-gray-300 text-center mb-4'>
            Here&apos;s a glimpse of my GitHub activity over the past six
            months:
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

        {/* TechTuned and Fiverr Section - Modernized Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto'>
          {/* TechTuned Web Design Section - Elevated Design */}
          <motion.div
            className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between' //Flex to push social icons to bottom
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              boxShadow: '0 0 20px 5px rgba(255, 105, 180, 0.8)',
            }}
          >
            <div>
              <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                {/* Left: Text */}
                <div className='md:w-1/2 space-y-3'>
                  <h3 className='text-xl font-semibold neon-text'>
                    TechTuned Web Design
                  </h3>
                  <p className='text-gray-300'>
                    I run a web design agency dedicated to creating user-centric
                    digital experiences.
                  </p>
                  <a
                    href='https://techtunedwebdesign.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline inline-block mt-2'
                  >
                    Visit TechTuned
                  </a>
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

              {/* Projects Section - More prominent display */}
              <div className='flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 md:space-x-4'>
                <a
                  href='https://7millionmedia.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
                >
                  <Image
                    src='/images/7MM.png'
                    alt='TechTuned client project'
                    width={300}
                    height={200}
                    className='object-cover w-full h-full'
                  />
                </a>
                <a
                  href='https://myautocareexpert.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
                >
                  <Image
                    src='/images/mace.png'
                    alt='TechTuned client project'
                    width={300}
                    height={200}
                    className='object-cover w-full h-full'
                  />
                </a>
              </div>
            </div>

            {/* Social Icons - Placed at the bottom */}
            <div className='flex space-x-4 mt-6'>
              <a
                href='https://www.linkedin.com/company/techtuned-web-design'
                target='_blank'
                rel='noopener noreferrer'
                className='hover-bounce text-gray-400 hover:text-white transition-colors'
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href='https://facebook.com/techtunedwebdesign'
                target='_blank'
                rel='noopener noreferrer'
                className='hover-bounce text-gray-400 hover:text-white transition-colors'
              >
                <FaFacebook size={30} />
              </a>
              <a
                href='https://twitter.com/TechTuned'
                target='_blank'
                rel='noopener noreferrer'
                className='hover-bounce text-gray-400 hover:text-white transition-colors'
              >
                <FaXTwitter size={30} />
              </a>
            </div>
          </motion.div>

          {/* Fiverr Section -  More impactful*/}
          <motion.div
            className='bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-lg shadow-lg text-center' // Gradient background
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className='text-2xl font-semibold text-white mb-4'>
              Need a Web Developer? Hire Me on Fiverr
            </h3>
            <p className='text-gray-300 mb-4'>
              Let&apos;s collaborate and bring your web development ideas to
              life.
            </p>
            <a
              href='https://www.fiverr.com/jasonwsummers?public_mode=true'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-white text-blue-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors'
            >
              View My Fiverr Profile
            </a>
            <a
              href='https://www.fiverr.com/s/o8zd8zG'
              target='_blank'
              rel='noopener noreferrer'
              className='block mt-4'
            >
              <SiFiverr size={80} color='#6C63FF' /> {/* Smaller icon size */}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
