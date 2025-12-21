'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

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
                            href="https://github.com/jwsummers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 transition hover:text-sky-300"
                            aria-label="GitHub"
                          >
                            <FaGithub size={30} />
                          </a>
            <a
              href="mailto:hello@jasonwsummers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
              aria-label="Email"
            >
              <FaEnvelope size={26} />
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
            I&apos;m an automotive operations and technical analyst with 20+ years of experience diagnosing complex problems, coaching technicians, and supporting repair decisions in high-volume service environments. Throughout my career, I&apos;ve been drawn to understanding patterns, identifying root causes, and making sense of operational data behind real-world decisions.
          </motion.p>

          <motion.p
            className="mb-6 text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            As a Technician Production Manager, I oversee technician workflow, approve repairs, and manage throughput while balancing cost, quality, and cycle time. I work closely with service advisors, operations leaders, and cross-functional teams to ensure repairs are appropriate, well-documented, and aligned with operational standards, while continuously looking for trends and opportunities to improve how the operation runs.
          </motion.p>

          <motion.p
            className="mb-6 text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I&apos;m currently part of a company-wide operational analysis initiative focused on labor usage and repair consistency. In this role, I review large volumes of repair order data to identify overlapping or misapplied labor, investigate trends, and present findings to senior leadership as part of a cost-reduction and process-clarity effort. This work sits at the intersection of technical judgment, attention to detail, and structured analysis.
          </motion.p>

          <motion.p
            className="mb-6 text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Over the past several years, I&apos;ve expanded my analytical toolkit to support this work, using Excel, SQL, Python, and BI tools to explore data, build dashboards, and translate operational complexity into clear, actionable insight. I use technology as a decision-support layer, not as an end in itself, grounded in practical service and operations experience.
          </motion.p>

          <motion.p
            className="text-sm text-slate-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I&apos;m most effective in behind-the-scenes, collaborative roles where analytical thinking, technical understanding, and clear communication help organizations make better operational decisions.{' '}Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/jason-w-summers/"
              target="blank"
              className="text-sky-300 underline underline-offset-2 hover:text-sky-200 transition"
            >
              LinkedIn
            </a>{' '}
            if you&apos;d like to talk.
          </motion.p>

          {/* Skills / Focus Areas */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Root cause &amp; trend analysis
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Labor line &amp; cost analysis
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Operations &amp; workflow optimization
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              SQL, Excel &amp; relational data
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Dashboards &amp; reporting (Power BI)
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Prototyping internal tools (React)
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Cross-functional communication
            </span>
            <span className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-1 text-xs font-semibold text-slate-100">
              Technical documentation &amp; clarity
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
          Analytics &amp; Coding Activity
        </h3>
        <p className="mb-4 text-center text-sm text-slate-300 md:text-base">
          I regularly use modern analytics and development tools to build prototypes, dashboards,
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
