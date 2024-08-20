import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaPython, FaLinux, FaDocker, FaBootstrap, FaGit } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center items-center bg-muted-gradient-1 p-8 relative section-border-top">
      <h2 className="section-heading">Who I Am</h2>

      {/* Headshot with Abstract Design */}
      <div className="relative mb-8">
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

      {/* Content Boxes */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full md:w-3/4 lg:w-2/3 space-y-8">
        {/* About Me Box */}
        <div id="aboutMe" className="relative shadow-lg p-6 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg">
          <p className="text-white">
            I am a passionate Full-Stack Developer with experience in creating modern, responsive web applications. My journey in web development has equipped me with a deep understanding of both front-end and back-end technologies, enabling me to build robust and user-friendly websites. I thrive in collaborative environments and am dedicated to staying ahead of the curve with the latest industry trends and best practices. My commitment to continuous learning and adaptability allows me to quickly master new tools and technologies, ensuring that I can contribute effectively from day one. Whether working independently or as part of a team, I am driven by a desire to deliver high-quality, impactful digital solutions that meet both user and business needs.
          </p>
        </div>

        {/* Skills Box */}
        <div id="skillsBox" className="relative shadow-lg p-6 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg">
          <h3 className="text-center text-xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-green-300">
            <div className="flex flex-col items-center">
              <FaHtml5 size={30} className="text-orange-600" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt size={30} className="text-blue-600" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJsSquare size={30} className="text-yellow-500" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact size={30} className="text-cyan-500" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs size={30} className="text-green-600" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase size={30} className="text-purple-600" />
              <span>SQL</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPython size={30} className="text-blue-400" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center">
              <FaLinux size={30} className="text-yellow-500" />
              <span>Linux</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDocker size={30} className="text-blue-500" />
              <span>Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap size={30} className="text-indigo-600" />
              <span>Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJsSquare size={30} className="text-blue-400" />
              <span>TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase size={30} className="text-green-500" />
              <span>Prisma</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJsSquare size={30} className="text-blue-400" />
              <span>jQuery</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJsSquare size={30} className="text-green-600" />
              <span>ExpressJS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGit size={30} className="text-blue-400" />
              <span>Git</span>
            </div>
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
