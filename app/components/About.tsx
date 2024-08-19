import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaPython, FaLinux, FaDocker, FaBootstrap } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center items-center bg-muted-gradient p-8 relative">
      {/* Headshot */}
      <div className="mb-8">
        <Image
          src="/headshot.png"
          alt="Headshot"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Content Boxes */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* About Me Box */}
        <div id="aboutMe" className="relative shadow-lg p-6 transform -rotate-3 max-w-md md:max-w-lg">
          <p className="text-white">
            I am a passionate Full-Stack Developer with experience in creating modern, responsive web applications. My journey in web development has equipped me with a deep understanding of both front-end and back-end technologies, enabling me to build robust and user-friendly websites. I thrive in collaborative environments and am dedicated to staying ahead of the curve with the latest industry trends and best practices. My commitment to continuous learning and adaptability allows me to quickly master new tools and technologies, ensuring that I can contribute effectively from day one. Whether working independently or as part of a team, I am driven by a desire to deliver high-quality, impactful digital solutions that meet both user and business needs.
          </p>
        </div>

        {/* Skills Box */}
        <div id="skillsBox" className="relative shadow-lg p-6 transform rotate-3 max-w-md md:max-w-lg mt-8 md:mt-0">
          <div className="transform -rotate-3">
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
