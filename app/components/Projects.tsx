'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Format skill names for display
const formatSkillName = (slug: string) => {
  const formatted: { [key: string]: string } = {
    nodedotjs: 'Node.js',
    nextdotjs: 'Next.js',
    tailwindcss: 'Tailwind',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    postgresql: 'PostgreSQL',
    vercel: 'Vercel',
    github: 'GitHub',
    git: 'Git',
    netlify: 'Netlify',
    css3: 'CSS3',
    html5: 'HTML5',
    sass: 'Sass',
    bootstrap: 'Bootstrap',
    jest: 'Jest',
    prisma: 'Prisma',
    firebase: 'Firebase',
    react: 'React',
    express: 'Express',
  };
  return formatted[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};

// Curated projects aligned with diagnostics / systems / ops / analysis
const projects = [
  {
    title: 'AutoMate',
    description:
      'A vehicle maintenance and repair-tracking system that consolidates service history, upcoming work, and predictive reminders. Designed to give users a clear view of what has been done, what is due next, and how maintenance decisions impact long-term reliability.',
    image: '/images/AutoMate.png',
    link: 'https://github.com/jwsummers/AutoMate',
    live: 'https://automatenance.vercel.app/',
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'postgresql',
      'nodedotjs',
      'vercel',
      'github',
      'git',
    ],
  },
  {
    title: 'TechMetrix',
    description:
      'An efficiency dashboard concept for automotive teams. It aggregates repair order data to track workload, billed hours, and team performance over time, helping leaders see patterns in throughput, efficiency, and where bottlenecks or rework might be driving extra cost or delay.',
    image: '/images/TechMetrix.png',
    link: 'https://github.com/jwsummers/TechMetrix',
    live: 'https://techmetrix.vercel.app/',
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'prisma',
      'postgresql',
      'nodedotjs',
      'vercel',
      'github',
      'git',
    ],
  },
  {
    title: 'Labor Tracker',
    description:
      'A commission and repair-order tracker built for technicians. It allows logging jobs, tracking hours and flagged labor, and reviewing weekly totals. This grew out of a need to understand where time was really going in a pay period and how different job mixes impacted efficiency and payout.',
    image: '/images/laborTracker.png',
    link: 'https://github.com/jwsummers/Labor-Tracker',
    live: 'https://labortracker.netlify.app/',
    skills: ['html5', 'css3', 'netlify', 'github', 'git', 'jest'],
  },
  {
    title: 'T.R.E.D.',
    description:
      'A tire replacement evaluation tool that encodes company tire-size guidelines into a quick, technician-friendly check. It compares proposed tire sizes against approved spec ranges, reducing fitment errors and policy violations by turning a mental rulebook into a simple decision-support tool.',
    image: '/images/tred.png',
    link: 'https://github.com/jwsummers/TRED',
    live: 'https://tred.netlify.app/',
    skills: ['html5', 'css3', 'netlify', 'github', 'git'],
  },
  {
    title: 'Smart Asset Tracker',
    description:
      'A prototype for tracking company assets, their status, and their locations. It combines a structured asset registry with mapping to visualize where equipment is, what condition it is in, and how it moves over time—supporting audits, loss prevention, and lifecycle planning.',
    image: '/images/S.A.T..png',
    link: 'https://github.com/jwsummers/Smart-Asset-Tracker',
    live: null,
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'prisma',
      'postgresql',
      'express',
      'nodedotjs',
      'github',
      'git',
    ],
  },
  {
    title: 'VerifAI',
    description:
      'An AI-assisted verification tool that analyzes text and images to estimate the likelihood of AI generation or manipulation. It is positioned as a risk and authenticity check—normalizing unstructured content into a simple signal that can support moderation, quality, or due diligence workflows.',
    image: '/images/VerifAI.png',
    link: 'https://github.com/jwsummers/VerifAI-WebApp',
    live: 'https://verifai-scan.vercel.app/',
    skills: [
      'react',
      'nextdotjs',
      'typescript',
      'tailwindcss',
      'postgresql',
      'nodedotjs',
      'vercel',
      'github',
      'git',
      'firebase',
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20"
    >
      <div className="container relative mx-auto max-w-6xl px-4">
        <motion.h2
          className="section-heading text-center text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Systems &amp; Analysis Projects
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 mb-10 max-w-2xl text-center text-sm text-slate-300 md:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Selected work where I combined my diagnostic mindset with modern tools to analyze systems,
          track operations, and support better decisions. These projects reflect how I think about
          data, workflows, and real-world constraints—not just how I write code.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-900/80 p-6 shadow-xl shadow-black/40 transition hover:-translate-y-1 hover:border-sky-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="mb-4 h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={260}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  unoptimized
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-slate-200 md:text-base">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] font-medium text-slate-100"
                  >
                    <Image
                      src={`https://cdn.simpleicons.org/${skill}`}
                      alt={skill}
                      width={14}
                      height={14}
                      className="mr-1"
                      unoptimized
                    />
                    {formatSkillName(skill)}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-sky-400"
                  >
                    Live
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 shadow-md transition hover:border-sky-400 hover:text-sky-200"
                >
                  Code
                  <FaGithub size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
