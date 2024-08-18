"use client";

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Resume: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Mobile Nav Toggle Button */}
      <div className="bg-gray-900 fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 md:hidden z-50">
        <h1 className="text-white text-lg">Jason Summers</h1>
        <button onClick={toggleNav} className="text-white focus:outline-none">
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop and Mobile Nav Menu */}
<nav
  className={`bg-gray-900 fixed top-0 left-0 w-full h-full md:h-16 flex flex-col md:flex-row items-center justify-center md:justify-between transition-transform duration-300 ${
    navOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
  } z-50`}
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
    <a href="#about" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>About</a>
    <a href="#experience" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Experience</a>
    <a href="#education" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Education</a>
    <a href="#skills" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Skills</a>
    <a href="#interests" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Interests</a>
    <a href="#certifications" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Certifications</a>
    <a href="#projects" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Projects</a>
    <a href="#blogs" className="text-white text-lg py-4 md:py-0 mx-2" onClick={toggleNav}>Blogs</a>
  </div>
</nav>


      <section id="about" className="pt-24 md:pt-32">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Jason <span className="text-blue-600">Summers</span></h1>
          <p className="text-lg mb-2">Finksburg, MD 21048</p>
          <a href="mailto:jwsummers.dev@gmail.com" className="text-blue-600">jwsummers.dev@gmail.com</a>
        </div>
        <p className="max-w-4xl mx-auto mb-8">
          With decades of expertise in complex problem-solving and web development, I bring a dynamic blend of skills and a diverse background to the IT arena. My journey as a seasoned programmer and freelance web developer has positioned me to seamlessly transition into roles encompassing full-stack web development, application security, and software engineering. I am deeply passionate about creating secure, responsive, user-friendly applications and driven to leverage my extensive background to forge impactful solutions in this field. My commitment to continuous learning and adaptation shines through as I aim to not only protect but also enhance the digital frameworks that power our world. Eager to contribute my diverse expertise, I am looking for opportunities where innovation in web development and security is not just welcomed but celebrated.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://linkedin.com/in/jason-w-summers/" target="_blank" rel="noopener noreferrer" className="hover-bounce">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/jwsummers" target="_blank" rel="noopener noreferrer" className="hover-bounce">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/JWSummers_dev" target="_blank" rel="noopener noreferrer" className="hover-bounce">
            <FaTwitter size={30} />
          </a>
        </div>
      </section>

      <section id="experience" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Web Developer</h3>
          <p className="italic">Freelance | Self - September 2018 - Present</p>
          <ul className="list-disc pl-5">
            <li>Built and currently managing <a href="https://myautocareexpert.com" className="text-blue-600 hover:underline">My Auto Care Expert</a>, a small business website focused on customer engagement and appointment scheduling, delivering a seamless user experience with dynamic web pages and API integration for secure email contact.</li>
            <li>Developing <a href="https://github.com/jwsummers/Cook-E" className="text-blue-600 hover:underline">Cook-E Online Recipe Book</a>, using React and TypeScript, with a secure backend powered by Node.js and Express.js, featuring secure user authentication with bcrypt and a PostgreSQL database integration.</li>
            <li>Created <a href="https://github.com/jwsummers/Tire-Calculator" className="text-blue-600 hover:underline">T.R.E.D (Tire Replacement Evaluation Device)</a>, a JavaScript-based tool designed to streamline tire replacement procedures with a focus on responsive design and user accessibility.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">State Inspection Technician</h3>
          <p className="italic">CarMax - March 2007 - Present</p>
          <ul className="list-disc pl-5">
            <li>Increased operational efficiency by 20% while reducing quality issues.</li>
            <li>Trained new associates and management on internal systems and procedures, demonstrating leadership and communication skills.</li>
            <li>Utilized analytical and problem-solving abilities to diagnose and resolve technical challenges, skills that translate well to web development and project management.</li>
          </ul>
        </div>
      </section>

      <section id="education" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Carroll Community College</h3>
          <p className="italic">Computer Science (Continuous | In Progress) - February 2022 - Present</p>
          <p>GPA: 4.0</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Coursera</h3>
          <p className="italic">Cybersecurity Certificate Program - July 2023 - December 2023</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">FreeCodeCamp</h3>
          <p className="italic">Responsive Web Development and Programming - October 2016 - December 2021</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Anne Arundel Community College</h3>
          <p className="italic">Computer Science (Continuous | In Progress) - August 2016 - May 2018</p>
          <p>GPA: 3.8</p>
        </div>
      </section>

      <section id="skills" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold">Web Development Tools & Skills</h3>
            <ul className="list-disc pl-5">
              <li>HTML5 | CSS3</li>
              <li>JavaScript | jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GulpJS</li>
              <li>ExpressJS</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>TailwindCSS</li>
              <li>Sass</li>
              <li>SQL | Postgres</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="interests" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Interests</h2>
        <div className="flex justify-center mb-8">
          <Image
            src="/images/interest.jpg"
            alt="Hiking Image"
            width={300}
            height={200}
            className="rounded shadow"
          />
        </div>
        <p>When I`&apos;`m not working on projects, learning, or keeping up to date on tech news and the latest trends, I enjoy disconnecting and being outside with my family. I live in a rural area and take pleasure in working in the yard, gardening, and caring for our chickens.</p>
        <p>When forced indoors, I relish quality family time, watching TV, movies, and playing video games. I also like to stay involved with the tech communities and engage with others on Discord and LinkedIn.</p>
      </section>

      <section id="certifications" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc pl-5">
          <li>FreeCodeCamp - Responsive Web Development</li>
          <li>Google Cybersecurity Professional Certificate</li>
          <li>CompTIA Security+</li>
          <li>TryHackMe - Pre Security | Introduction to Cybersecurity | SOC Level 1 | Cyber Defense</li>
        </ul>
      </section>

      <section id="projects" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h4 className="font-semibold">Cook-E | Online Recipe Book</h4>
            <a href="https://github.com/jwsummers/Cook-E">
              <Image
                src="/images/cookE.png"
                alt="Image of Cook-E web application"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
            <p>A web application featuring secure authentication/login allowing saving and viewing of recipes in a personal online recipe book.</p>
          </div>
          <div>
            <h4 className="font-semibold">T.R.E.D.</h4>
            <a href="https://tred.netlify.app/">
              <Image
                src="/images/TRED.jpg"
                alt="Image of T.R.E.D web application"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
            <p>A web application tool used to compare tire sizes to test for adherence to company standards.</p>
          </div>
          <div>
            <h4 className="font-semibold">Labor Tracker</h4>
            <a href="https://labortracker.netlify.app/">
              <Image
                src="/images/labortracker.jpg"
                alt="Image of Labor Tracker web application"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
            <p>A web application to monitor repair order history, labor hours, and efficiency.</p>
          </div>
          <div>
            <h4 className="font-semibold">M.A.C.E</h4>
            <a href="https://myautocareexpert.com">
              <Image
                src="/images/mech.jpg"
                alt="Image of mobile mechanic website"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
            <p>A website for a mobile mechanic business to improve customer reach, SEO, and provide contact and appointment scheduling.</p>
          </div>
          <div>
            <h4 className="font-semibold">Adversary SOC Analyst Emulation</h4>
            <a href="https://github.com/jwsummers/SOC-Analyst-Enviornment/tree/main">
              <Image
                src="/images/hack.jpg"
                alt="Image of SOC analyst project"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
            <p>A simulation environment for training SOC analysts, emulating adversary threats to hone incident response skills.</p>
          </div>
        </div>
      </section>

      <section id="blogs" className="pt-24 mb-10">
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold">AI Overlord Chronicles</h4>
            <a href="https://medium.com/@jwsummers.dev/ai-overlord-chronicles-a-funyet-stern-warning-4b500434c8a2">
              <Image
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QDj6QBotIBQGGsSlyS_HKw.jpeg"
                alt="AI Overlord Chronicles"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
          </div>
          <div>
            <h4 className="font-semibold">From Tech to Tech</h4>
            <a href="https://medium.com/@jwsummers.dev/from-tech-to-tech-my-journey-from-automotive-technician-to-cybersecurity-aspirant-a-reflection-000b00a53118">
              <Image
                src="https://miro.medium.com/v2/resize:fit:914/format:webp/1*tIeFc1zd5cqyCBLXiy5eow@2x.jpeg"
                alt="From Tech to Tech"
                width={300}
                height={200}
                className="rounded shadow"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
