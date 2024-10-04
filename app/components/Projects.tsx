import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import Image from 'next/image';

const projects = [
  {
    title: 'TechTuned Web Design',
    description: 'Website for TechTuned Web Design, a Web Development & Design agency',
    image: '/images/TechTuned.png',
    github: 'https://github.com/jwsummers/TechTunedWebDesign',
    live: 'https://techtuned.netlify.app/',
  },
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
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const projectTemplate = (project: any) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 flex flex-col items-center">
        <div className="mb-3 w-full h-48 relative">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h4 className="mb-1 text-xl font-bold">{project.title}</h4>
          <p className="mt-0 mb-3">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button
              label="GitHub"
              icon="pi pi-github"
              className="p-button p-button-rounded"
              onClick={() => window.open(project.github, '_blank')}
            />
            <Button
              label="Live Demo"
              icon="pi pi-external-link"
              className="p-button-success p-button-rounded"
              onClick={() => window.open(project.live, '_blank')}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className="bg-muted-gradient-2 py-12">
      <h2 className="section-heading">What I&apos;ve Done</h2>
      <p className="mt-6 mb-4 p-4 text-center max-w-lg mx-auto">Here are some of my latest projects, feel free to inspect the code or live site by following the links provided.</p>
      <div className="max-w-6xl mx-auto">
        <Carousel
          value={projects}
          itemTemplate={projectTemplate}
          numVisible={2}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
        />
      </div>
    </div>
  );
};

export default Projects;
