import { HoverEffect } from "./ui/card-hover-effect";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TechTuned Web Design",
      description:
        "Website for TechTuned Web Design, a Web Development & Design agency",
      image: "/images/TechTuned.png",
      link: "https://techtunedwebdesign.com/",
    },
    {
      title: "OnTrack | Daily Food Logging",
      description:
        "A web app for tracking and logging daily food and water intake",
      image: "/images/OnTrack.png",
      link: "https://github.com/jwsummers/OnTrack",
    },
    {
      title: "7 Million Media LLC",
      description:
        "A website for a Professional Photographer to improve online presence, customer experience, and SEO",
      image: "/images/7MM.png",
      link: "https://7millionmedia.com",
    },
    {
      title: "M.A.C.E | My Auto Care Expert",
      description:
        "A website for a small business to improve online presence, customer experience, and SEO",
      image: "/images/mace.png",
      link: "https://myautocareexpert.com",
    },
    {
      title: "Cook-E",
      description:
        "An online recipe book web app built with React, TypeScript, Postgres, and NodeJS",
      image: "/images/cookE.png",
      link: "https://github.com/jwsummers/Cook-E",
    },
    {
      title: "T.R.E.D. | Tire Replacement Evaluation Device",
      description:
        "A web app for technicians to compare tire sizes to make decisions on replacement based on company standards",
      image: "/images/tred.png",
      link: "https://tred.netlify.app/",
    },
    {
      title: "Labor Tracker",
      description:
        "A web app for tracking repair orders as well as commission labor hours",
      image: "/images/laborTracker.png",
      link: "https://labortracker.netlify.app/",
    },
    {
      title: "Smart Asset Tracker",
      description:
        "A web app for tracking tracking company assets and their status utilizing ArcGIS",
      image: "/images/S.A.T..png",
      link: "https://github.com/jwsummers/Smart-Asset-Tracker",
    },
  ];

  return (
    <section id="projects" className="bg-muted-gradient-2 py-12">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="section-heading text-center">What I&apos;ve Done</h2>
        <p className="mt-6 mb-4 text-center text-gray-300 max-w-lg mx-auto">
          Here are some of my latest projects. Feel free to explore the live
          sites or inspect the code.
        </p>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Projects;
