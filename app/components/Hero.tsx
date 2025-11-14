'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center 
      pt-24 text-center overflow-hidden
      bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 
      bg-cover bg-center"
      style={{ backgroundImage: "url('/images/HeroBG.jpg')" }}
    >
      {/* Soft accent blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 mx-4 flex max-w-2xl flex-col items-center 
        rounded-3xl border border-slate-700/60 bg-slate-900/70 p-8 
        shadow-2xl shadow-black/40 md:p-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl"
        >
          Jason Summers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-sky-500/40 
            bg-sky-950/40 px-4 py-1 text-sm font-semibold uppercase 
            tracking-[0.18em] text-sky-300"
          >
            Technical Systems &amp; Diagnostic Analyst
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mb-6 text-base text-slate-200 md:text-lg"
        >
          I specialize in understanding how complex systems behave in the real world—vehicles,
          workflows, data, and tools. After 20+ years diagnosing automotive systems and leading
          technicians, I now focus on analyzing operations, uncovering root causes, and turning
          noisy performance data into clear, actionable decisions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mb-8 text-sm text-slate-300 md:text-base"
        >
          I&apos;m pursuing roles where deep diagnostics, systems thinking, and operational insights
          matter — Technical Systems Analyst, Diagnostic / Connected Vehicle Analyst, and
          Operations Analyst. I bridge real-world technical experience with SQL, dashboards,
          and internal applications.
        </motion.p>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200">
            Systems diagnostics & root cause investigation
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200">
            Operations analysis
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200">
            SQL, dashboards & internal tools
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#experience"
            className="inline-block rounded-xl bg-sky-500 px-7 py-2.5 
              text-sm font-semibold text-slate-950 shadow-md transition 
              hover:bg-sky-400 hover:-translate-y-0.5"
          >
            View Experience
          </Link>
          <Link
            href="#projects"
            className="inline-block rounded-xl border border-slate-500 px-7 py-2.5 
              text-sm font-semibold text-slate-50 shadow-md transition 
              hover:border-sky-400 hover:text-sky-200 hover:-translate-y-0.5"
          >
            See Systems Projects
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/jwsummers"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="GitHub"
          >
            <Github className="h-7 w-7 text-slate-300 transition group-hover:text-sky-400" />
          </a>
          <a
            href="https://linkedin.com/in/jason-w-summers"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-7 w-7 text-slate-300 transition group-hover:text-sky-400" />
          </a>
          <a
            href="mailto:hello@jasonwsummers.com"
            className="group"
            aria-label="Email"
          >
            <Mail className="h-7 w-7 text-slate-300 transition group-hover:text-sky-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
