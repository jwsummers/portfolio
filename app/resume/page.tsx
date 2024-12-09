"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaBars } from "react-icons/fa6";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaTimes } from "react-icons/fa";

const Resume: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto pt-24 px-4">
        {/* Download ATS Resume Button */}
        <div className="text-center mb-8">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() =>
              window.open("/ATS-Friendly-Resume.pdf", "_blank", "noopener")
            }
          >
            Download ATS Resume
          </button>
        </div>

        {/* Resume Content */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Sidebar Navigation */}
          <aside className="hidden md:block md:w-1/4">
            <nav className=" fixed top-20 mt-16 space-y-4">
              <a
                href="#summary"
                className="block text-purple-400 hover:underline"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-purple-400 hover:underline"
              >
                Experience
              </a>
              <a
                href="#education"
                className="block text-purple-400 hover:underline"
              >
                Education
              </a>
              <a
                href="#skills"
                className="block text-purple-400 hover:underline"
              >
                Skills
              </a>
              <a
                href="#certifications"
                className="block text-purple-400 hover:underline"
              >
                Certifications
              </a>
              <a
                href="#projects"
                className="block text-purple-400 hover:underline"
              >
                Projects
              </a>
              <a
                href="#blogs"
                className="block text-purple-400 hover:underline"
              >
                Blogs
              </a>
              <a
                href="#interests"
                className="block text-purple-400 hover:underline"
              >
                Interests
              </a>
            </nav>
          </aside>

          {/* Mobile Dropdown Navigation */}
          <aside className="block md:hidden mb-4">
            <button
              className="w-full px-4 py-2 bg-gray-800 text-white flex items-center justify-between rounded-md"
              onClick={toggleDropdown}
            >
              <span>Resume Sections</span>
              {dropdownOpen ? <FaTimes /> : <FaBars />}
            </button>
            {dropdownOpen && (
              <nav className="bg-gray-700 p-4 rounded-md space-y-2 mt-2">
                <a
                  href="#summary"
                  className="block text-purple-400 hover:underline"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="block text-purple-400 hover:underline"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="block text-purple-400 hover:underline"
                >
                  Education
                </a>
                <a
                  href="#skills"
                  className="block text-purple-400 hover:underline"
                >
                  Skills
                </a>
                <a
                  href="#certifications"
                  className="block text-purple-400 hover:underline"
                >
                  Certifications
                </a>
                <a
                  href="#projects"
                  className="block text-purple-400 hover:underline"
                >
                  Projects
                </a>
                <a
                  href="#blogs"
                  className="block text-purple-400 hover:underline"
                >
                  Blogs
                </a>
                <a
                  href="#interests"
                  className="block text-purple-400 hover:underline"
                >
                  Interests
                </a>
              </nav>
            )}
          </aside>

          {/* Main Content */}
          <main className="md:w-3/4 space-y-12">
            {/* Summary Section */}
            <section
              id="summary"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="text-center mb-4">
                <h1 className="text-4xl font-bold text-white">
                  Jason <span className="text-purple-400">Summers</span>
                </h1>
                <p className="text-lg text-gray-300">Finksburg, MD 21048</p>
                <a
                  href="mailto:jwsummers.dev@gmail.com"
                  className="text-purple-400"
                >
                  jwsummers.dev@gmail.com
                </a>
              </div>
              <p className="text-gray-300">
                With decades of expertise in complex problem-solving and web
                development, I bring a dynamic blend of skills and a diverse
                background to the IT arena. My journey as a seasoned programmer
                and freelance web developer has positioned me to seamlessly
                transition into roles encompassing full-stack web development
                and software engineering. I am deeply passionate about creating
                secure, responsive, user-friendly applications and driven to
                leverage my extensive background to forge impactful solutions in
                this field. My commitment to continuous learning and adaptation
                shines through as I aim to not only protect but also enhance the
                digital frameworks that power our world. Eager to contribute my
                diverse expertise, I am looking for opportunities where
                innovation in web development and security is not just welcomed
                but celebrated.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://linkedin.com/in/jason-w-summers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="text-purple-400" />
                </a>
                <a
                  href="https://github.com/jwsummers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="text-purple-400" />
                </a>
                <a
                  href="https://twitter.com/JWSummers_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} className="text-purple-400" />
                </a>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white">Experience</h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  Founder & Web Developer
                </h3>
                <p className="italic text-gray-400">
                  TechTuned Web Design - June 2024 - Present
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>
                    Established and operate a freelance web development agency
                    specializing in creating responsive, user-friendly websites.
                  </li>
                  <li>
                    Manage all phases of the web development lifecycle, from
                    concept and design to implementation and optimization.
                  </li>
                  <li>
                    Collaborate directly with clients to determine requirements
                    and deliver measurable results.
                  </li>
                  <li>
                    Implement best practices in code quality, security, and SEO
                    to enhance site performance and visibility.
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  State Inspection Technician & Cross-Trained Technician
                  Production Manager
                </h3>
                <p className="italic text-gray-400">
                  CarMax - March 2007 - Present
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>
                    Led a team of 18, maximizing efficiency by 30% and
                    minimizing quality comebacks.
                  </li>
                  <li>
                    Managed team workloads, monitored repair processes, and
                    provided business approvals for repairs.
                  </li>
                  <li>
                    Engaged in daily collaboration with 5 diverse departments to
                    address intricate challenges, ensuring alignment with both
                    company and state standards and regulations within the
                    dynamic environment of a Fortune 500 company.
                  </li>
                  <li>
                    Trained new associates, including upper management, on
                    internal computer systems and daily business operations.
                  </li>
                  <li>
                    Led complex investigations for intricate problems, staying
                    updated on evolving technology and common failures.
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  Web Developer
                </h3>
                <p className="italic text-gray-400">
                  Freelance | Self - September 2018 - Present
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>
                    Developed various web solutions, including tools to manage
                    repair orders and digital recipe storage apps.
                  </li>
                  <li>
                    Created secure and user-friendly web applications using
                    React, TypeScript, and more.
                  </li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white">Education</h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  Carroll Community College
                </h3>
                <p className="italic text-gray-400">
                  Computer Science (Continuous | In Progress) - February 2022 -
                  Present
                </p>
                <p className="text-gray-300">GPA: 4.0</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  Coursera - Google Cybersecurity Program
                </h3>
                <p className="italic text-gray-400">
                  Cybersecurity Certificate Program - July 2023 - December 2023
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  FreeCodeCamp
                </h3>
                <p className="italic text-gray-400">
                  Responsive Web Development and Programming - October 2016 -
                  December 2021
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  Anne Arundel Community College
                </h3>
                <p className="italic text-gray-400">
                  Computer Science (Continuous | In Progress) - August 2016 -
                  May 2018
                </p>
                <p className="text-gray-300">GPA: 3.8</p>
              </div>
            </section>

            {/* Skills Section */}
            <section
              id="skills"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Front-End Development
                  </h3>
                  <p>
                    HTML5, CSS3, JavaScript, React, Next.js, jQuery, Bootstrap,
                    TailwindCSS, SASS, Responsive Design, UI/UX Design
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Back-End Development
                  </h3>
                  <p>
                    Node.js, Express.js, SQL, PostgreSQL, Python, RESTful APIs,
                    ArcGIS
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Tools & Workflow
                  </h3>
                  <p>
                    Git, Gulp.js, Webpack, TypeScript, NPM, Linux, Netlify, SEO
                    Best Practices
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section
              id="certifications"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Certifications
              </h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>FreeCodeCamp - Responsive Web Development</li>
                <li>Google Cybersecurity Professional Certificate</li>
                <li>CompTIA Security+</li>
                <li>
                  TryHackMe - Pre Security | Introduction to Cybersecurity | SOC
                  Level 1 | Cyber Defense
                </li>
              </ul>
            </section>

            <section
              id="projects"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    TechTuned Web Design
                  </h4>
                  <a
                    href="https://techtunedwebdesign.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/TechTuned.png"
                      alt="Image of TechTuned Web Design Website"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-gray-300 mt-2">
                    A website for my Web Design agency.
                  </p>
                </div>

                {/* Project 2 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Cook-E | Online Recipe Book
                  </h4>
                  <a
                    href="https://github.com/jwsummers/Cook-E"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/cookE.png"
                      alt="Image of Cook-E web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-gray-300 mt-2">
                    A web application featuring secure authentication/login
                    allowing saving and viewing of recipes in a personal online
                    recipe book.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    T.R.E.D.
                  </h4>
                  <a
                    href="https://tred.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/tred.png"
                      alt="Image of T.R.E.D web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-gray-300 mt-2">
                    A web application tool used to compare tire sizes to test
                    for adherence to company standards.
                  </p>
                </div>

                {/* Project 4 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Labor Tracker
                  </h4>
                  <a
                    href="https://labortracker.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/laborTracker.png"
                      alt="Image of Labor Tracker web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-gray-300 mt-2">
                    A web application to monitor repair order history, labor
                    hours, and efficiency.
                  </p>
                </div>

                {/* Project 5 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    M.A.C.E
                  </h4>
                  <a
                    href="https://myautocareexpert.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/mech.jpg"
                      alt="Image of mobile mechanic website"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-gray-300 mt-2">
                    A website for a mobile mechanic business to improve customer
                    reach, SEO, and provide contact and appointment scheduling.
                  </p>
                </div>

                {/* Project 6 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Smart Asset Tracker
                  </h4>
                  <a
                    href="https://github.com/jwsummers/Smart-Asset-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/S.A.T..png"
                      alt="Image of mobile mechanic website"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-gray-300 mt-2">
                    A website for a mobile mechanic business to improve customer
                    reach, SEO, and provide contact and appointment scheduling.
                  </p>
                </div>
              </div>
            </section>
            <section
              id="blogs"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Blog Post 1 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    AI Overlord Chronicles
                  </h4>
                  <a
                    href="https://medium.com/@jwsummers.dev/ai-overlord-chronicles-a-funyet-stern-warning-4b500434c8a2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QDj6QBotIBQGGsSlyS_HKw.jpeg"
                      alt="AI Overlord Chronicles"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    From Tech to Tech
                  </h4>
                  <a
                    href="https://medium.com/@jwsummers.dev/from-tech-to-tech-my-journey-from-automotive-technician-to-cybersecurity-aspirant-a-reflection-000b00a53118"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://miro.medium.com/v2/resize:fit:914/format:webp/1*tIeFc1zd5cqyCBLXiy5eow@2x.jpeg"
                      alt="From Tech to Tech"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                </div>
              </div>
            </section>

            <section
              id="interests"
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Interests</h2>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/interest.jpg"
                  alt="Hiking Image"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:opacity-90 transition"
                />
              </div>
              <p className="text-gray-300 mb-4">
                When I&apos;m not working on projects, learning, or keeping up
                to date on tech news and the latest trends, I enjoy
                disconnecting and being outside with my family. I live in a
                rural area and take pleasure in working in the yard, gardening,
                and caring for our chickens.
              </p>
              <p className="text-gray-300">
                When forced indoors, I relish quality family time, watching TV,
                movies, and playing video games. I also like to stay involved
                with the tech communities and engage with others on Discord and
                LinkedIn.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Resume;
