import React from 'react';
import IconCloud from "./IconCloud";
import Image from 'next/image';

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
      <h2 className="section-heading">Who I Am</h2>

      {/* About Section Container */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:w-3/4 lg:w-2/3 space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Headshot and About Me Box */}
        <div className="flex flex-col md:w-1/2 md:items-center items-center">
          <div className="relative mb-8 md:mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl"></div>
            </div>
            <Image
              src="/headshot.png"
              alt="Headshot"
              width={150}
              height={150}
              className="relative z-10 rounded-full shadow-lg border-4 border-white"
            />
          </div>

          {/* About Me Box */}
          <div id="aboutMe" className="relative z-10 shadow-lg p-6 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg">
            <p className="text-white">
              I am a passionate Full-Stack Developer with experience in creating modern, responsive web applications. My journey in web development has equipped me with a deep understanding of both front-end and back-end technologies, enabling me to build robust and user-friendly websites. I thrive in collaborative environments and am dedicated to staying ahead of the curve with the latest industry trends and best practices. My commitment to continuous learning and adaptability allows me to quickly master new tools and technologies, ensuring that I can contribute effectively from day one. Whether working independently or as part of a team, I am driven by a desire to deliver high-quality, impactful digital solutions that meet both user and business needs.
            </p>
          </div>
        </div>

        {/* Icon Cloud */}
        <div id="iconCloud" className="flex justify-center items-center md:w-1/2 relative z-10 shadow-lg p-6 bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg mt-8 md:mt-0">
          <div className="w-full">
            <h3 className="text-center text-xl font-semibold mb-4">Skills</h3>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>

      </div>

      {/* View Resume Button */}
      <a href="/resume" className="mt-12 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
        View My Resume
      </a>
    </div>
  );
};

export default About;
