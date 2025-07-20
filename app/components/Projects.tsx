'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Format skill names for display
const formatSkillName = (slug: string) => {
  const formatted: { [key: string]: string } = {
    nodedotjs: 'Node.js',
    nextdotjs: 'Next.js',
    tailwindcss: 'Tailwind',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    postgresql: 'PostgreSQL',
    vercel: 'Vercel',
    github: 'GitHub',
    git: 'Git',
    netlify: 'Netlify',
    css3: 'CSS3',
    html5: 'HTML5',
    sass: 'Sass',
    bootstrap: 'Bootstrap',
    jest: 'Jest',
    prisma: 'Prisma',
    firebase: 'Firebase',
    react: 'React',
    express: 'Express',
  };
  return formatted[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};

// List of skills to filter by (show most relevant/modern techs first)
const skillFilterList = [
  'react',
  'nextdotjs',
  'typescript',
  'tailwindcss',
  'nodedotjs',
  'prisma',
  'postgresql',
  'firebase',
  'vercel',
  'netlify',
  'css3',
  'html5',
  'sass',
  'bootstrap',
  'github',
  'git',
  'jest',
  'express',
  'javascript',
];

const projects = [
  {
    title: 'AutoMate',
    description:
      'An AI-powered web app to help users manage vehicle maintenance, get predictive reminders, and track repair history—all in a sleek, intuitive interface.',
    image: '/images/AutoMate.png',
    link: 'https://github.com/jwsummers/AutoMate',
    live: 'https://automatenance.vercel.app/',
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'postgresql',
      'nodedotjs',
      'vercel',
      'github',
      'git',
    ],
  },
  {
    title: 'VerifAI',
    description:
      'An AI detection tool that analyzes images and text to verify authenticity—perfect for content creators and businesses needing reliable verification.',
    image: '/images/VerifAI.png',
    link: 'https://github.com/jwsummers/VerifAI-WebApp',
    live: 'https://verifai-scan.vercel.app/',
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'postgresql',
      'nodedotjs',
      'vercel',
      'github',
      'git',
      'firebase',
    ],
  },
  {
    title: 'TechMetrix',
    description:
      'An efficiency dashboard for automotive teams—track repair orders, team stats, and workflow optimization in real-time with a modern, gamified UI.',
    image: '/images/TechMetrix.png',
    link: 'https://github.com/jwsummers/TechMetrix',
    live: 'https://techmetrix.vercel.app/',
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'prisma',
      'postgresql',
      'nodedotjs',
      'vercel',
      'github',
      'git',
    ],
  },
  {
    title: 'TechTuned Web Design',
    description:
      'Modern agency website for TechTuned—showcasing client projects, services, and a design-focused workflow.',
    image: '/images/TechTuned.png',
    link: 'https://github.com/jwsummers/TechTuned-Web-Design',
    live: 'https://techtunedwebdesign.com/',
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
    ],
  },
  {
    title: 'OnTrack | Daily Food Logging',
    description:
      'A wellness web app for logging daily food and water intake, tracking healthy habits, and visualizing progress with real-time stats.',
    image: '/images/OnTrack.png',
    link: 'https://github.com/jwsummers/OnTrack',
    live: null,
    skills: [
      'react',
      'typescript',
      'tailwindcss',
      'firebase',
      'css3',
      'html5',
      'netlify',
      'github',
      'git',
    ],
  },
  {
    title: 'Andover Wrestling Club Golf Tournament',
    description:
      'Event landing page and registration system for a youth sports fundraiser—streamlined UX and mobile-friendly design.',
    image: '/images/AWCgolf.png',
    link: 'https://github.com/jwsummers/AWC-Golf-Tournament',
    live: 'https://andoverwcgolftournament.com',
    skills: [
      'html5',
      'css3',
      'javascript',
      'bootstrap',
      'netlify',
      'github',
      'git',
    ],
  },
  {
    title: '7 Million Media LLC',
    description:
      'A portfolio site for a professional photographer—custom galleries, SEO-focused, and fully responsive.',
    image: '/images/7MM.png',
    link: 'https://github.com/jwsummers/7MillionMedia',
    live: 'https://7millionmedia.com',
    skills: [
      'html5',
      'css3',
      'javascript',
      'bootstrap',
      'netlify',
      'github',
      'git',
    ],
  },
  {
    title: 'M.A.C.E | My Auto Care Expert',
    description:
      'Business website for a local auto repair company—designed to boost online presence, credibility, and bookings.',
    image: '/images/mace.png',
    link: 'https://github.com/jwsummers/MACE',
    live: 'https://myautocareexpert.com',
    skills: [
      'html5',
      'css3',
      'javascript',
      'bootstrap',
      'netlify',
      'github',
      'git',
    ],
  },
  {
    title: 'Cook-E',
    description:
      'A digital recipe book—create, save, and organize recipes with a slick UI and cloud sync.',
    image: '/images/cookE.png',
    link: 'https://github.com/jwsummers/Cook-E',
    live: null,
    skills: [
      'react',
      'typescript',
      'postgresql',
      'nodedotjs',
      'bootstrap',
      'netlify',
      'github',
      'git',
    ],
  },
  {
    title: 'T.R.E.D.',
    description:
      'A tire replacement evaluation tool for technicians—instantly compare tire sizes against company specs.',
    image: '/images/tred.png',
    link: 'https://github.com/jwsummers/TRED',
    live: 'https://tred.netlify.app/',
    skills: ['html5', 'css3', 'netlify', 'github', 'git'],
  },
  {
    title: 'Labor Tracker',
    description:
      'A commission and repair order tracker for technicians—log hours, calculate payouts, and visualize your week.',
    image: '/images/laborTracker.png',
    link: 'https://github.com/jwsummers/Labor-Tracker',
    live: 'https://labortracker.netlify.app/',
    skills: ['html5', 'css3', 'netlify', 'github', 'git', 'jest'],
  },
  {
    title: 'Smart Asset Tracker',
    description:
      'Track and manage company assets with real-time status updates and ArcGIS-powered mapping.',
    image: '/images/S.A.T..png',
    link: 'https://github.com/jwsummers/Smart-Asset-Tracker',
    live: null,
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'prisma',
      'postgresql',
      'express',
      'nodedotjs',
      'github',
      'git',
    ],
  },
];

export default function Projects() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Filtering logic
  const filteredProjects =
    selectedSkills.length === 0
      ? projects
      : projects.filter((project) =>
          selectedSkills.every((skill) => project.skills.includes(skill))
        );

  return (
    <section id='projects' className='bg-muted-gradient-2 py-20 relative'>
      {/* Neon background blobs */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10'>
        <motion.div
          className='absolute bg-purple-500 rounded-full blur-2xl opacity-25'
          style={{ top: '10%', left: '10%', width: '180px', height: '180px' }}
          animate={{
            x: ['0px', '40px', '0px'],
            y: ['0px', '18px', '0px'],
            rotate: [0, 360, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-blue-500 rounded-full blur-2xl opacity-20'
          style={{ top: '65%', right: '8%', width: '200px', height: '200px' }}
          animate={{
            x: ['0px', '-60px', '0px'],
            y: ['0px', '-25px', '0px'],
            rotate: [360, 0, 360],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-pink-500 rounded-full blur-2xl opacity-20'
          style={{
            bottom: '10%',
            left: '35%',
            width: '120px',
            height: '120px',
          }}
          animate={{
            x: ['0px', '25px', '0px'],
            y: ['0px', '-12px', '0px'],
            rotate: [0, -360, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className='container max-w-6xl mx-auto px-4 relative'>
        <motion.h2
          className='section-heading text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className='mt-6 mb-10 text-center text-gray-300 max-w-xl mx-auto text-lg'
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Here are some of my favorite projects—from SaaS tools and dashboards
          to client sites and utility apps. Use the neon pills to filter by
          technology, or explore everything to see my range as a builder.
        </motion.p>

        {/* Neon Pill Filter */}
        <motion.div
          className='flex flex-wrap gap-3 justify-center mb-8'
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {skillFilterList.map((skill) => (
            <button
              key={skill}
              onClick={() =>
                selectedSkills.includes(skill)
                  ? setSelectedSkills(selectedSkills.filter((s) => s !== skill))
                  : setSelectedSkills([...selectedSkills, skill])
              }
              className={`flex items-center px-4 py-2 rounded-full font-semibold shadow-sm border-2
                transition-all duration-200
                ${
                  selectedSkills.includes(skill)
                    ? 'bg-gradient-to-tr from-[#01fff0] via-[#a300fa] to-[#f906c7] text-black border-[#01fff0] neon-shadow scale-105'
                    : 'bg-black/40 text-white border-white/10 hover:border-[#a300fa]'
                }
              `}
            >
              <Image
                src={`https://cdn.simpleicons.org/${skill}`}
                alt={skill}
                width={22}
                height={22}
                className='mr-2'
                unoptimized
              />
              <span className='text-sm'>{formatSkillName(skill)}</span>
            </button>
          ))}
          {selectedSkills.length > 0 && (
            <button
              onClick={() => setSelectedSkills([])}
              className='ml-4 px-4 py-2 rounded-full font-semibold bg-white/10 text-[#01fff0] border border-[#01fff0] neon-shadow hover:bg-[#01fff0]/10 transition'
            >
              Show All
            </button>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className='group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:border-[#01fff0] hover:shadow-neon'
              whileHover={{ y: -8, scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className='w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg bg-gradient-to-br from-[#23243b] to-[#120621]'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={260}
                  className='object-cover w-full h-full transition group-hover:scale-105'
                  unoptimized
                />
              </div>
              <h3 className='text-2xl font-bold text-[#01fff0] mb-2 tracking-tight'>
                {project.title}
              </h3>
              <p className='text-white/90 text-base mb-4 flex-1'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className='flex items-center bg-[#16191e] border border-[#01fff0]/20 px-2 py-1 rounded-lg text-xs text-[#01fff0] font-semibold'
                  >
                    <Image
                      src={`https://cdn.simpleicons.org/${skill}`}
                      alt={skill}
                      width={16}
                      height={16}
                      className='mr-1'
                      unoptimized
                    />
                    {formatSkillName(skill)}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 mt-auto'>
                {project.live && (
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#01fff0] to-[#a300fa] text-black font-semibold rounded-xl shadow-md hover:scale-105 transition'
                  >
                    Live
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2 bg-black/70 text-[#01fff0] border border-[#01fff0] font-semibold rounded-xl shadow-md hover:bg-[#01fff0]/10 hover:scale-105 transition'
                >
                  Code
                  <FaGithub size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx global>{`
        .neon-shadow {
          box-shadow: 0 0 14px #01fff0, 0 0 8px #a300fa, 0 0 18px #f906c7;
        }
        .hover\\:shadow-neon:hover {
          box-shadow: 0 0 16px #01fff0, 0 0 8px #a300fa;
        }
      `}</style>
    </section>
  );
}
