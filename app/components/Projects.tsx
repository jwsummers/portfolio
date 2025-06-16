import React, { useState } from 'react';
import ScrollingBanner from './ScrollingBanner';
import { HoverEffect } from './ui/card-hover-effect';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const projects = [
    {
      title: 'TechMetrix',
      description:
        'AutoMate is a smart, user-friendly web application designed to help individuals track, manage, stay on top of vehicle maintenance and repair needs, and even get AI-powered predictions for upcoming issues.',
      image: '/images/AutoMate.png',
      link: 'https://github.com/jwsummers/AutoMate',
      skills: [
        'html5',
        'nextdotjs',
        'Vercel',
        'npm',
        'github',
        'git',
        'typescript',
        'react',
        'tailwindcss',
        'postgresql',
        'nodedotjs',
      ],
    },
    {
      title: 'TechMetrix',
      description:
        'TechMetrix is an efficiency tracking tool for automotive technicians, enabling streamlined repair order management, performance tracking, and workflow optimization.',
      image: '/images/TechMetrix.png',
      link: 'https://techmetrix.vercel.app/',
      skills: [
        'html5',
        'nextdotjs',
        'Vercel',
        'npm',
        'github',
        'git',
        'typescript',
        'react',
        'tailwindcss',
        'prisma',
        'postgresql',
        'nodedotjs',
      ],
    },
    {
      title: 'TechTuned Web Design',
      description:
        'Website for TechTuned Web Design, a Web Development & Design agency',
      image: '/images/TechTuned.png',
      link: 'https://techtunedwebdesign.com/',
      skills: [
        'html5',
        'css3',
        'javascript',
        'sass',
        'bootstrap',
        'netlify',
        'npm',
        'github',
        'git',
        'jquery',
      ],
    },
    {
      title: 'OnTrack | Daily Food Logging',
      description:
        'A web app for tracking and logging daily food and water intake',
      image: '/images/OnTrack.png',
      link: 'https://github.com/jwsummers/OnTrack',
      skills: [
        'html5',
        'css3',
        'netlify',
        'npm',
        'github',
        'git',
        'typescript',
        'javascript',
        'react',
        'tailwindcss',
        'firebase',
        'nodedotjs',
      ],
    },
    {
      title: 'Andover Wrestling Club Golf Tournament',
      description:
        'A website for a youth sports organization to promote a fundraising event and allow for online registration and sponsorship',
      image: '/images/AWCgolf.png',
      link: 'https://andoverwcgolftournament.com',
      skills: [
        'html5',
        'css3',
        'javascript',
        'sass',
        'bootstrap',
        'netlify',
        'npm',
        'github',
        'git',
        'jquery',
      ],
    },
    {
      title: '7 Million Media LLC',
      description:
        'A website for a Professional Photographer to improve online presence, customer experience, and SEO',
      image: '/images/7MM.png',
      link: 'https://7millionmedia.com',
      skills: [
        'html5',
        'css3',
        'javascript',
        'sass',
        'bootstrap',
        'netlify',
        'npm',
        'github',
        'git',
        'jquery',
      ],
    },
    {
      title: 'M.A.C.E | My Auto Care Expert',
      description:
        'A website for a small business to improve online presence, customer experience, and SEO',
      image: '/images/mace.png',
      link: 'https://myautocareexpert.com',
      skills: [
        'html5',
        'css3',
        'javascript',
        'sass',
        'bootstrap',
        'netlify',
        'npm',
        'github',
        'git',
        'jquery',
      ],
    },
    {
      title: 'Cook-E',
      description:
        'An online recipe book web app built with React, TypeScript, Postgres, and NodeJS',
      image: '/images/cookE.png',
      link: 'https://github.com/jwsummers/Cook-E',
      skills: [
        'html5',
        'css3',
        'javascript',
        'react',
        'typescript',
        'postgres',
        'nodedotjs',
        'bootstrap',
        'netlify',
        'npm',
        'github',
        'git',
      ],
    },
    {
      title: 'T.R.E.D. | Tire Replacement Evaluation Device',
      description:
        'A web app for technicians to compare tire sizes to make decisions on replacement based on company standards',
      image: '/images/tred.png',
      link: 'https://tred.netlify.app/',
      skills: ['html5', 'css3', 'netlify', 'npm', 'github', 'git'],
    },
    {
      title: 'Labor Tracker',
      description:
        'A web app for tracking repair orders as well as commission labor hours',
      image: '/images/laborTracker.png',
      link: 'https://labortracker.netlify.app/',
      skills: ['html5', 'css3', 'netlify', 'npm', 'github', 'git', 'jest'],
    },
    {
      title: 'Smart Asset Tracker',
      description:
        'A web app for tracking tracking company assets and their status utilizing ArcGIS',
      image: '/images/S.A.T..png',
      link: 'https://github.com/jwsummers/Smart-Asset-Tracker',
      skills: [
        'html5',
        'nextdotjs',
        'css3',
        'netlify',
        'npm',
        'github',
        'git',
        'typescript',
        'react',
        'tailwindcss',
        'prisma',
        'postgresql',
        'express',
        'nodedotjs',
      ],
    },
  ];

  const filteredProjects =
    selectedSkills.length > 0
      ? projects.filter((project) =>
          selectedSkills.every((skill) => project.skills.includes(skill))
        )
      : projects;

  const availableSkills = [
    'typescript',
    'javascript',
    'react',
    'jquery',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'tailwindcss',
    'postgresql',
    'vercel',
    'jest',
    'git',
    'github',
    'bootstrap',
    'sass',
    'netlify',
    'npm',
    'firebase',
  ].filter((skill) => !selectedSkills.includes(skill));

  const addSkillToFilter = (skill: string) => {
    setSelectedSkills((prev) => [...prev, skill]);
  };

  const removeSkillFromFilter = (skill: string) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  const formatSkillName = (slug: string) => {
    const formattedNames: { [key: string]: string } = {
      nodedotjs: 'Node.JS',
      nextdotjs: 'Next.JS',
    };

    return formattedNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  };

  return (
    <section id='projects' className='bg-muted-gradient-2 py-16 relative'>
      {/* Animated Background Blobs */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10'>
        <motion.div
          className='absolute bg-purple-500 rounded-full filter blur-2xl opacity-30'
          style={{ top: '10%', left: '10%', width: '150px', height: '150px' }}
          animate={{
            x: ['0px', '50px', '0px'],
            y: ['0px', '20px', '0px'],
            rotate: [0, 360, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-blue-500 rounded-full filter blur-2xl opacity-30'
          style={{ top: '70%', right: '10%', width: '200px', height: '200px' }}
          animate={{
            x: ['0px', '-50px', '0px'],
            y: ['0px', '-20px', '0px'],
            rotate: [360, 0, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-pink-500 rounded-full filter blur-2xl opacity-30'
          style={{
            bottom: '10%',
            left: '40%',
            width: '100px',
            height: '100px',
          }}
          animate={{
            x: ['0px', '30px', '0px'],
            y: ['0px', '-10px', '0px'],
            rotate: [0, -360, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className='container max-w-6xl mx-auto px-6 relative'>
        {/* Section Heading */}
        <motion.h2
          className='section-heading text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          My Projects
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className='mt-6 mb-8 text-center text-gray-300 max-w-lg mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore my portfolio! Use the scrolling bar to filter projects by
          technology, or clear all filters to view everything.
        </motion.p>

        {/* Scrolling Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ScrollingBanner
            iconSlugs={availableSkills}
            onSkillSelect={addSkillToFilter}
          />
        </motion.div>

        {/* Filtered Skills */}
        <motion.div
          className='flex flex-wrap gap-4 justify-center mt-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {selectedSkills.map((skill) => (
            <motion.div
              key={skill}
              className='flex items-center bg-gray-800 rounded-full shadow-md p-3 pr-4 cursor-pointer hover:shadow-lg transition-shadow duration-300'
              onClick={() => removeSkillFromFilter(skill)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={`https://cdn.simpleicons.org/${skill}`}
                alt={skill}
                width={32}
                height={32}
                unoptimized
              />
              <p className='text-white text-sm ml-2 mr-1'>
                {formatSkillName(skill)}
              </p>
              <FaTimes className='text-gray-500 hover:text-white ml-1' />
            </motion.div>
          ))}
        </motion.div>

        {/* Clear Filters Button */}
        {selectedSkills.length > 0 && (
          <motion.div
            className='text-center mt-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => setSelectedSkills([])}
              className='px-5 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <HoverEffect items={filteredProjects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
