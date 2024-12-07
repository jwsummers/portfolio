import React from 'react';
import IconCloud from "./IconCloud";
import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHubCalendar from "react-github-calendar";
import { FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { SiFiverr } from "react-icons/si";

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

const explicitTheme = {
  light: ['#E5E5E5', '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1'],
  dark: ['#2E2F48', '#414591', '#6C63FF', '#C084F5', '#D76D77'],
};

const selectLastHalfYear = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity: { date: string | number | Date }) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center items-center bg-muted-gradient-1 p-8 section-border-top scroll-mt-12">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Me
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
    className="md:w-1/2 flex justify-center items-center"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
  >
    <Image
      src="/images/about.png"
      alt="About illustration"
      width={500}
      height={500}
      className="rounded-lg shadow-lg"
    />
  </motion.div>
</div>

      {/* Remaining Sections */}
      <div className="w-full md:w-3/4 lg:w-2/3 space-y-12 mt-12">
        {/* Skills Cloud and GitHub Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0 md:gap-x-16">
        <motion.div
            className="md:w-1/2 bg-gray-800 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-xl font-semibold neon-text mb-2">GitHub Activity</h3>
            <GitHubCalendar
              username="jwsummers"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={explicitTheme}
              transformData={selectLastHalfYear}
              labels={{
                totalCount: '{{count}} contributions in the last six months',
              }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <IconCloud iconSlugs={slugs} />
          </motion.div>
        </div>

        {/* TechTuned and Fiverr Section */}
<div className="flex flex-col space-y-12 w-full md:w-3/4 lg:w-2/3 mx-auto">
  {/* TechTuned Web Design Section */}
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
  >
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left: Text and Social Icons */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-xl font-semibold neon-text mb-2">TechTuned Web Design</h3>
        <p className="text-white">
          Visit my web design agency:{" "}
          <a
            href="https://techtuned.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            TechTuned Website
          </a>
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/company/techtuned-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-bounce"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://facebook.com/techtunedwebdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-bounce"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com/TechTuned"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-bounce"
          >
            <FaXTwitter size={30} />
          </a>
        </div>
      </div>

      {/* Right: Logo */}
      <div className="md:w-1/2 flex justify-end">
        <Image
          src="/images/TT-Logo-Black-RB.png"
          alt="TechTuned Web Design Logo"
          width={250}
          height={250}
          className="rounded-lg"
        />
      </div>
    </div>

    {/* Projects Section */}
    <div className="flex justify-between mt-8 space-x-4">
      <a
        href="https://7millionmedia.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Image
          src="/images/7MM.png"
          alt="TechTuned client project"
          width={300}
          height={200}
          className="rounded-lg shadow-lg w-full"
        />
      </a>
      <a
        href="https://myautocareexpert.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Image
          src="/images/mace.png"
          alt="TechTuned client project"
          width={300}
          height={200}
          className="rounded-lg shadow-lg w-full"
        />
      </a>
    </div>
  </motion.div>

  {/* Fiverr Section */}
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
  >
    <h3 className="text-xl font-semibold neon-text mb-2">Hire Me on Fiverr</h3>
    <p className="text-white">
      Collaborate with me on{" "}
      <a
        href="https://www.fiverr.com/jasonwsummers?public_mode=true"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Fiverr
      </a>{" "}
      to bring your ideas to life!
    </p>
    <a
      href="https://www.fiverr.com/s/o8zd8zG"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center mt-4"
    >
      <SiFiverr size={150} color="#ff00ff" />
    </a>
  </motion.div>
</div>


      </div>
    </div>
  );
};

export default About;
