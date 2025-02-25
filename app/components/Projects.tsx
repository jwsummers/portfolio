import React, { useState } from 'react';
import ScrollingBanner from './ScrollingBanner';
import { HoverEffect } from './ui/card-hover-effect';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const projects = [
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
    <section id='projects' className='bg-muted-gradient-2 py-12'>
      <div className='container max-w-6xl mx-auto px-6'>
        {/* Section Heading */}
        <motion.h2
          className='section-heading text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          What I&apos;ve Done
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className='mt-6 mb-4 text-center text-gray-300 max-w-lg mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Here are some of my latest projects. Select a skill to filter projects
          or clear all filters to see everything.
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
          className='flex flex-wrap gap-4 justify-center mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {selectedSkills.map((skill) => (
            <motion.div
              key={skill}
              className='flex flex-col items-center bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer'
              onClick={() => removeSkillFromFilter(skill)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={`https://cdn.simpleicons.org/${skill}`}
                alt={skill}
                width={48}
                height={48}
                unoptimized
              />
              <p className='text-white text-sm mt-2'>
                {formatSkillName(skill)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Clear Filters Button */}
        {selectedSkills.length > 0 && (
          <motion.div
            className='text-center mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => setSelectedSkills([])}
              className='px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear All Filters
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
