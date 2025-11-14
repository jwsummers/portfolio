'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const explicitTheme = {
  light: ['#E5E5E5', '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1'],
  dark: ['#1F2937', '#374151', '#4B5563', '#6B7280', '#9CA3AF'],
};

const selectLastHalfYear = (contributions: any[]) => {
  if (!contributions || contributions.length === 0) return [];
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return contributions.filter((activity: { date: string | number | Date }) => {
    const date = new Date(activity.date);
    return date >= sixMonthsAgo;
  });
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-border-top relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 scroll-mt-12"
    >
      <motion.h2
        className="section-heading text-3xl font-semibold text-slate-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>

      {/* Main Content Card */}
      <div className="mt-8 flex w-full flex-col items-center gap-10 rounded-3xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 md:w-4/5 md:flex-row lg:w-2/3">
        {/* Left: Headshot & Socials */}
        <div className="flex flex-col items-center gap-6 md:w-1/4">
          <div className="relative">
            <Image
              src="/headshot.png"
              alt="Jason Summers"
              width={120}
              height={120}
              className="rounded-full border-4 border-sky-500/60 shadow-lg shadow-black/50"
              priority
            />
          </div>

          <div className="flex gap-4 text-slate-300">
            <a
              href="https://linkedin.com/in/jason-w-summers/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://facebook.com/techtunedwebdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
              aria-label="Facebook"
            >
              <FaFacebook size={26} />
            </a>
            <a
              href="https://twitter.com/TechTuned"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
              aria-label="Twitter / X"
            >
              <FaXTwitter size={26} />
            </a>
          </div>
        </div>

        {/* Right: Story / Positioning */}
        <div className="flex-1">
          <motion.p
            className="mb-6 text-base text-slate-200 md:text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-sky-300">Hey, I&apos;m Jason.</span>{' '}
            I&apos;ve spent over 20 years diagnosing complex automotive systems—electrical,
            drivability, network, and control modules—while leading technicians and making tough
            repair decisions in a high-volume environment.
          </motion.p>

          <motion.p
            className="mb-6 text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            As a Technician Production Manager, I oversee a team of technicians, approve
            repairs, and manage workload and throughput. I collaborate closely with leaders,
            advisors, and other departments to balance cost, quality, and cycle time.
          </motion.p>

          <motion.p
            className="mb-6 text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I&apos;m part of a company-wide stretch assignment analyzing labor line usage:
            identifying overlapping and misapplied labors, researching trends, and presenting
            findings to senior management as part of a major cost-reduction and process-clarity
            initiative. It&apos;s where my diagnostic mindset, attention to detail, and comfort with
            data really intersect.
          </motion.p>

          <motion.p
            className="mb-6 text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Over the past several years, I&apos;ve also taught myself modern development tools
            (React, JavaScript/TypeScript, SQL, Node.js) and built internal-style dashboards and
            workflow applications. I don&apos;t position myself as a freelance web designer—instead,
            I use these tools to prototype systems, visualize operations, and support better
            decisions as a technical / diagnostic / operations analyst.
          </motion.p>

          <motion.p
            className="text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I&apos;m actively pursuing roles such as Technical Systems Analyst, Diagnostic / Connected
            Vehicle Analyst, or Operations Analyst—positions where deep diagnostics, systems
            thinking, and data-informed decision making are core to the work.{' '}
            <a
              href="/resume"
              className="text-sky-300 underline underline-offset-2 hover:text-sky-200 transition"
            >
              View my resume
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/jason-w-summers/"
              target='blank'
              className="text-sky-300 underline underline-offset-2 hover:text-sky-200 transition"
            >
              LinkedIn
            </a>{' '} if you&apos;d like to talk.
          </motion.p>

          {/* Skills / Focus Areas */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Systems diagnostics &amp; root cause analysis
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Labor line &amp; cost analysis
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Operations &amp; workflow optimization
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              SQL &amp; relational data
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Dashboards &amp; reporting
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              React-based internal tools
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Cross-functional communication
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Technical documentation
            </span>
          </div>
        </div>
      </div>

      {/* GitHub Calendar */}
      <motion.div
        className="mt-12 w-full rounded-3xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-xl shadow-black/40 md:w-4/5 lg:w-2/3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="mb-3 text-center text-2xl font-semibold text-slate-50">
          Technical Tools &amp; Coding Activity
        </h3>
        <p className="mb-4 text-center text-sm text-slate-300 md:text-base">
          I regularly use modern development tools to build internal-style prototypes, dashboards,
          and automations that support analysis and decision making. Here&apos;s a snapshot of my
          recent GitHub activity:
        </p>
        <div className="mx-auto w-full max-w-lg overflow-x-auto">
          <GitHubCalendar
            username="jwsummers"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={explicitTheme}
            transformData={selectLastHalfYear}
            labels={{
              totalCount: '{{count}} contributions in the last six months',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
