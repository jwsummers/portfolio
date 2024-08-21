import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Cook-E',
    description: 'An online recipe book web app built with React, TypeScript, Postgres, and NodeJS',
    image: '/images/cookE.png',
    github: 'https://github.com/jwsummers/Cook-E',
    live: 'https://github.com/jwsummers/Cook-E',
  },
  {
    title: 'M.A.C.E | My Auto Care Expert',
    description: 'A website for a small business to improve online presence, customer experience, and SEO',
    image: '/images/mace.png',
    github: 'https://github.com/jwsummers/mace',
    live: 'https://myautocareexpert.com',
  },
  {
    title: 'T.R.E.D. | Tire Replacement Evaluation Device',
    description: 'A web app for technicians to compare tire sizes to make decisions on replacement based off company standards',
    image: '/images/tred.png',
    github: 'https://github.com/jwsummers/Tire-Calculator',
    live: 'https://tred.netlify.app/',
  },
  {
    title: 'Labor Tracker',
    description: 'A web app for tracking repair orders as well as commission labor hours',
    image: '/images/laborTracker.png',
    github: 'https://github.com/jwsummers/labor-tracker',
    live: 'https://labortracker.netlify.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="bg-muted-gradient-2 py-12">
      <h2 className="section-heading">What I&apos;ve Done</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={800}
              height={600}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-200">{project.title}</h3>
            <p className="text-lg mb-4 text-gray-400">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
