import React, { useState } from 'react';
import ScrollingBanner from './ScrollingBanner';
import { HoverEffect } from './ui/card-hover-effect';

const Projects: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const projects = [
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

  return (
    <section id='projects' className='bg-muted-gradient-2 py-12'>
      <div className='container max-w-6xl mx-auto px-6'>
        <h2 className='section-heading text-center'>What I&apos;ve Done</h2>
        <p className='mt-6 mb-4 text-center text-gray-300 max-w-lg mx-auto'>
          Here are some of my latest projects. Select a skill to filter projects
          or clear all filters to see everything.
        </p>

        {/* Scrolling Banner */}
        <ScrollingBanner
          iconSlugs={availableSkills}
          onSkillSelect={addSkillToFilter}
        />

        {/* Filtered Skills */}
        <div className='flex flex-wrap gap-2 justify-center mb-4'>
          {selectedSkills.map((skill) => (
            <div
              key={skill}
              className='flex items-center justify-center bg-animated text-white px-4 py-2 m-4 rounded-full cursor-pointer shadow-md'
              onClick={() => removeSkillFromFilter(skill)}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Clear Filters Button */}
        {selectedSkills.length > 0 && (
          <div className='text-center mb-4'>
            <button
              onClick={() => setSelectedSkills([])}
              className='px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition'
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Project Cards */}
        <HoverEffect items={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
