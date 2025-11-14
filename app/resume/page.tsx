"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaBars } from "react-icons/fa6";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTimes } from "react-icons/fa";

const Resume: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // match navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="fixed left-0 top-24 z-50 rounded-full bg-sky-600 p-2 text-white shadow-md md:hidden"
        style={{ marginLeft: "5px" }}
        onClick={toggleDropdown}
      >
        {dropdownOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar Navigation (mobile) */}
      <aside
        className={`fixed top-20 left-0 z-40 h-full w-64 bg-slate-900/95 transform ${
          dropdownOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <button
          className="absolute right-4 top-4 text-slate-200"
          onClick={toggleDropdown}
        >
          <FaTimes />
        </button>

        <nav className="mt-12 space-y-4 p-4">
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("summary");
            }}
            className="block text-sky-300 hover:underline"
          >
            About
          </button>
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("experience");
            }}
            className="block text-sky-300 hover:underline"
          >
            Experience
          </button>
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("education");
            }}
            className="block text-sky-300 hover:underline"
          >
            Education
          </button>
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("skills");
            }}
            className="block text-sky-300 hover:underline"
          >
            Skills
          </button>
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("certifications");
            }}
            className="block text-sky-300 hover:underline"
          >
            Certifications
          </button>
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("projects");
            }}
            className="block text-sky-300 hover:underline"
          >
            Projects
          </button>
          <button
            onClick={() => {
              closeDropdown();
              scrollToSection("blogs");
            }}
            className="block text-sky-300 hover:underline"
          >
            Interests
          </button>
        </nav>
      </aside>

      <div className="container mx-auto mb-8 px-4 pt-36">
        {/* Download ATS Resume Button */}
        <div className="mt-4 mb-8 text-center">
          <button
            className="transform rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-sky-500"
            onClick={() =>
              window.open("/ATS-Friendly-Resume.pdf", "_blank", "noopener")
            }
          >
            Download ATS Resume
          </button>
        </div>

        <div className="flex w-full flex-col md:flex-row">
          {/* Sidebar Navigation (desktop) */}
          <aside className="hidden md:block md:w-1/4">
            <nav className="fixed space-y-4 text-sm">
              <button
                onClick={() => scrollToSection("summary")}
                className="sidebar-link block text-sky-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="sidebar-link block text-sky-300"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="sidebar-link block text-sky-300"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="sidebar-link block text-sky-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="sidebar-link block text-sky-300"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="sidebar-link block text-sky-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("blogs")}
                className="sidebar-link block text-sky-300"
              >
                Interests
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="space-y-12 md:w-3/4 md:pl-10">
            {/* Summary Section */}
            <section
              id="summary"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <div className="mb-4 text-center">
                <h1 className="text-4xl font-bold text-slate-50">
                  Jason <span className="text-sky-400">Summers</span>
                </h1>
                <p className="text-md mt-1 font-medium text-sky-300">
                  Technical Systems &amp; Diagnostic Analyst
                </p>
                <p className="text-sm text-slate-300">Finksburg, MD 21048</p>
                <a
                  href="mailto:hello@jasonwsummers.com"
                  className="text-sm text-sky-300 underline underline-offset-2"
                >
                  hello@jasonwsummers.com
                </a>
              </div>
              <p className="text-sm text-slate-200 md:text-base">
                I bring 20+ years of experience diagnosing complex automotive
                systems and leading technicians in a high-volume, Fortune 100
                environment. As a State Inspection Technician and cross-trained
                Technician Production Manager at CarMax, I&apos;ve led a team of
                18, made repair and cost decisions, and collaborated across
                departments to balance safety, quality, and cycle time.
              </p>
              <p className="mt-4 text-sm text-slate-200 md:text-base">
                I&apos;m currently part of a company-wide stretch assignment
                focused on analyzing labor line usage: identifying overlapping
                and misapplied labors, researching trends, and presenting
                findings to senior leadership to support a major cost-reduction
                and process-clarity initiative.
              </p>
              <p className="mt-4 text-sm text-slate-200 md:text-base">
                Alongside this, I&apos;ve spent several years learning modern
                development and data tools (React, TypeScript, SQL, Node.js) and
                building internal-style dashboards and utilities that support
                analysis. I&apos;m targeting roles such as Technical Systems
                Analyst, Diagnostic / Connected Vehicle Analyst, or Operations
                Analyst, where deep diagnostics, systems thinking, and
                data-informed decision making are central to the work.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/in/jason-w-summers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="text-sky-400" />
                </a>
                <a
                  href="https://github.com/jwsummers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="text-sky-400" />
                </a>
                <a
                  href="https://twitter.com/JWSummers_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} className="text-sky-400" />
                </a>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <h2 className="text-2xl font-bold text-slate-50">Experience</h2>

              {/* CarMax role */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-sky-300">
                  State Inspection Technician &amp; Technician Production
                  Manager (Cross-Trained)
                </h3>
                <p className="italic text-slate-400">
                  CarMax &mdash; March 2007 &ndash; Present
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-200 md:text-base">
                  <li>
                    Lead and support a team of up to 18 technicians in a
                    high-volume reconditioning operation, allocating work,
                    monitoring progress, and aligning output with production
                    targets and safety standards.
                  </li>
                  <li>
                    Perform advanced diagnostics on electrical, drivability,
                    network, and systems-level issues, focusing on root cause
                    analysis and long-term reliability rather than quick fixes.
                  </li>
                  <li>
                    Provide business approvals for repairs and parts usage,
                    balancing cost, risk, warranty impact, and customer
                    experience in a Fortune 100 environment.
                  </li>
                  <li>
                    Collaborate daily with multiple departments (Sales,
                    Service, Parts, Management) to resolve complex cases and
                    remove operational bottlenecks.
                  </li>
                  <li>
                    Train new associates and leaders on internal systems, shop
                    workflows, and standard operating procedures to improve
                    consistency and ramp-up speed.
                  </li>
                </ul>
              </div>

              {/* Stretch assignment - can be part of CarMax but highlighted */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-sky-300">
                  Special Assignment &mdash; Labor Line &amp; Operations
                  Analysis
                </h3>
                <p className="italic text-slate-400">
                  CarMax (Company-wide initiative) &mdash; 2025 &ndash; Present
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-200 md:text-base">
                  <li>
                    Analyze repair labor line usage to identify overlapping,
                    misapplied, or unclear labors that impact accuracy of
                    billing, reporting, and policy compliance.
                  </li>
                  <li>
                    Research patterns across data sets, validate findings with
                    subject-matter experts, and document edge cases and
                    exceptions.
                  </li>
                  <li>
                    Summarize insights into clear recommendations and present
                    findings to senior leaders as part of a broad cost-reduction
                    and process-clarity initiative.
                  </li>
                  <li>
                    Partner with stakeholders to suggest clearer labor
                    definitions and structures that support better reporting and
                    decision making.
                  </li>
                </ul>
              </div>

              {/* Technical tools / project work */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-sky-300">
                  Technical Tools &amp; Internal-Style Apps (Self-Directed)
                </h3>
                <p className="italic text-slate-400">
                  Personal Projects &amp; Prototypes &mdash; 2018 &ndash;
                  Present
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-200 md:text-base">
                  <li>
                    Design and build dashboards and utilities (e.g. technician
                    labor trackers, asset trackers, efficiency dashboards) to
                    visualize workload, asset status, and operational trends.
                  </li>
                  <li>
                    Use modern tools (React, Next.js, TypeScript, SQL/PostgreSQL,
                    Node.js) to prototype internal-style systems that support
                    decision making rather than marketing or client-facing
                    design.
                  </li>
                  <li>
                    Experiment with AI-assisted analysis and automation (e.g.
                    VerifAI, AutoMate) to help classify content, forecast
                    maintenance, or organize operational data.
                  </li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <h2 className="text-2xl font-bold text-slate-50">Education</h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-sky-300">
                  Carroll Community College
                </h3>
                <p className="italic text-slate-400">
                  A.S. Computer Science (In Progress) &mdash; February 2022
                  &ndash; Present
                </p>
                <p className="text-sm text-slate-200">GPA: 4.0</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-sky-300">
                  Coursera &mdash; Google Cybersecurity Professional Certificate
                </h3>
                <p className="italic text-slate-400">
                  Cybersecurity Certificate Program &mdash; July 2023 &ndash;
                  December 2023
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-sky-300">
                  FreeCodeCamp
                </h3>
                <p className="italic text-slate-400">
                  Responsive Web Development &amp; Programming &mdash; October
                  2016 &ndash; December 2021
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-sky-300">
                  Anne Arundel Community College
                </h3>
                <p className="italic text-slate-400">
                  Computer Science &mdash; August 2016 &ndash; May 2018
                </p>
                <p className="text-sm text-slate-200">GPA: 3.8</p>
              </div>
            </section>

            {/* Skills Section */}
            <section
              id="skills"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-50">Skills</h2>
              <div className="space-y-4 text-sm text-slate-200 md:text-base">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-sky-300">
                    Diagnostics &amp; Operations
                  </h3>
                  <p>
                    Systems diagnostics, root cause analysis, electrical and
                    drivability troubleshooting, repair decision-making, labor
                    usage review, operations &amp; workflow optimization,
                    cross-functional collaboration, technical training and
                    documentation.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-sky-300">
                    Analysis &amp; Data Tools
                  </h3>
                  <p>
                    Data querying and reporting (SQL/PostgreSQL), trend
                    analysis, dashboard and KPI visualization, Excel/Sheets,
                    basic Python, exploratory analysis, translating operational
                    questions into structured data problems.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-sky-300">
                    Technical Platforms &amp; Development
                  </h3>
                  <p>
                    React, Next.js, TypeScript, JavaScript, Node.js, Express,
                    REST APIs, Prisma, Firebase, PostgreSQL, Git/GitHub, basic
                    ArcGIS integration, Netlify, Vercel, responsive UI with
                    Tailwind and CSS.
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section
              id="certifications"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-50">
                Certifications
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-sm text-slate-200 md:text-base">
                <li>CompTIA Security+</li>
                <li>Google Cybersecurity Professional Certificate</li>
                <li>FreeCodeCamp &mdash; Responsive Web Development</li>
                <li>
                  TryHackMe &mdash; Pre Security, Introduction to Cybersecurity,
                  SOC Level 1, Cyber Defense
                </li>
              </ul>
            </section>

            {/* Projects Section (curated, aligned with main site) */}
            <section
              id="projects"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <h2 className="mb-6 text-2xl font-bold text-slate-50">
                Selected Systems &amp; Analysis Projects
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* AutoMate */}
                <div className="transform rounded-lg bg-slate-800 p-4 shadow-lg transition hover:scale-[1.01]">
                  <h4 className="mb-2 text-xl font-semibold text-sky-300">
                    AutoMate &mdash; Vehicle Maintenance Tracker
                  </h4>
                  <a
                    href="https://automatenance.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/AutoMate.png"
                      alt="AutoMate web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    A system that consolidates vehicle service history and
                    upcoming maintenance into a clear, timeline-based view,
                    helping users see what has been done, what is due, and how
                    their decisions affect long-term reliability.
                  </p>
                </div>

                {/* TechMetrix */}
                <div className="transform rounded-lg bg-slate-800 p-4 shadow-lg transition hover:scale-[1.01]">
                  <h4 className="mb-2 text-xl font-semibold text-sky-300">
                    TechMetrix &mdash; Technician Efficiency Dashboard
                  </h4>
                  <a
                    href="https://techmetrix.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/TechMetrix.png"
                      alt="TechMetrix dashboard"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    A dashboard concept to visualize repair orders, workload,
                    and efficiency for an automotive team, helping leaders see
                    patterns in throughput, rework, and team performance.
                  </p>
                </div>

                {/* Labor Tracker */}
                <div className="transform rounded-lg bg-slate-800 p-4 shadow-lg transition hover:scale-[1.01]">
                  <h4 className="mb-2 text-xl font-semibold text-sky-300">
                    Labor Tracker &mdash; RO &amp; Commission Tool
                  </h4>
                  <a
                    href="https://labortracker.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/laborTracker.png"
                      alt="Labor Tracker web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    A tool for technicians to log repair orders, track hours and
                    flagged labor, and review weekly totals to better understand
                    efficiency and payout patterns.
                  </p>
                </div>

                {/* T.R.E.D. */}
                <div className="transform rounded-lg bg-slate-800 p-4 shadow-lg transition hover:scale-[1.01]">
                  <h4 className="mb-2 text-xl font-semibold text-sky-300">
                    T.R.E.D. &mdash; Tire Replacement Evaluation
                  </h4>
                  <a
                    href="https://tred.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/tred.png"
                      alt="T.R.E.D. web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    A decision-support tool that encodes tire size rules into a
                    quick check, reducing fitment errors and policy violations
                    by turning guidelines into a consistent workflow.
                  </p>
                </div>

                {/* Smart Asset Tracker */}
                <div className="transform rounded-lg bg-slate-800 p-4 shadow-lg transition hover:scale-[1.01]">
                  <h4 className="mb-2 text-xl font-semibold text-sky-300">
                    Smart Asset Tracker
                  </h4>
                  <a
                    href="https://github.com/jwsummers/Smart-Asset-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/S.A.T..png"
                      alt="Smart Asset Tracker"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    A prototype for tracking company assets, status, and
                    locations, combining a structured asset registry with
                    mapping to support audits, loss prevention, and lifecycle
                    planning.
                  </p>
                </div>

                {/* VerifAI */}
                <div className="transform rounded-lg bg-slate-800 p-4 shadow-lg transition hover:scale-[1.01]">
                  <h4 className="mb-2 text-xl font-semibold text-sky-300">
                    VerifAI &mdash; Content Authenticity Check
                  </h4>
                  <a
                    href="https://verifai-scan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/VerifAI.png"
                      alt="VerifAI web application"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md hover:opacity-90 transition"
                    />
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    An AI-assisted tool that estimates the likelihood of content
                    being AI-generated or manipulated, framed as a signal that
                    can support moderation, quality checks, or due diligence.
                  </p>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section
              id="interests"
              className="rounded-lg bg-slate-900 p-6 shadow-lg shadow-black/40"
            >
              <h2 className="mb-6 text-2xl font-bold text-slate-50">
                Interests
              </h2>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/interest.jpg"
                  alt="Hiking Image"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md transition hover:opacity-90"
                />
              </div>
              <p className="mb-4 text-sm text-slate-200 md:text-base">
                Outside of work and learning, I live in a rural area and enjoy
                being outdoors with my family, working in the yard, gardening,
                and taking care of our chickens. It&apos;s a good balance to the
                analytical and technical work I do day to day.
              </p>
              <p className="text-sm text-slate-200 md:text-base">
                When I&apos;m indoors, I spend time with my family, read,
                watch movies, play games, and stay connected with tech and
                engineering communities on Discord and LinkedIn.
              </p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resume;
