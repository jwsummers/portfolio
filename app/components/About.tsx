import React, { useEffect } from 'react';
import IconCloud from "./IconCloud";
import Image from 'next/image';
import { motion } from 'framer-motion';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "bootstrap",
  "sass",
  "python",
  "linux",
  "netlify",
  "visualstudiocode",
  "figma",
  "npm",
  "gulp"
];

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center items-center bg-muted-gradient-1 p-8 relative section-border-top">
      {/* Heading Animation */}
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Who I Am
      </motion.h2>

      {/* About Section Container */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full md:w-3/4 lg:w-2/3 space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Headshot and About Me Box */}
        <motion.div
          className="flex flex-col md:w-1/2 md:items-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="relative mb-8 md:mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl"></div>
            </div>
            <Image
              src="/headshot.png"
              alt="Headshot"
              width={150}
              height={150}
              className="relative z-10 rounded-full shadow-lg border-4 border-white hover:scale-110 transform transition duration-500 ease-in-out"
            />
          </div>

          {/* About Me Box with Animation */}
          <motion.div
            id="aboutMe"
            className="relative z-10 shadow-lg p-6 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <p className="text-white mb-4">
              I am a passionate Full-Stack Developer and the founder of <span className='neon-text'><a href="https://techtuned.netlify.app/">TechTuned Web Design</a></span>, an agency focused on building innovative, user-friendly digital solutions for clients. My journey in web development has equipped me with a deep understanding of both front-end and back-end technologies, enabling me to create robust, responsive websites that meet modern standards. I thrive in collaborative environments and am dedicated to staying ahead of the curve with the latest industry trends and best practices.Whether working independently or leading projects at TechTuned Web Design, I am driven by a desire to deliver high-quality, impactful solutions that meet both user and business needs.
            </p>
            
            {/* View Resume Button moved inside the about me box */}
            <motion.a
              href="/resume"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              View My Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* About Image */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center md:self-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src="/images/about.png"
            alt="About illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mt-8 md:mt-0"
          />
        </motion.div>
      </div>

      {/* Icon Cloud moved below, centered */}
      <motion.div
        id="iconCloud"
        className="w-full md:w-3/4 lg:w-2/3 mt-12 flex justify-center items-center relative z-10 p-6 rounded-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="w-full">
          <h3 className="text-center text-xl font-semibold mb-4 neon-text underline">Professional Skills</h3>
          <IconCloud iconSlugs={slugs} />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
