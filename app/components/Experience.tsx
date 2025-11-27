'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-border-top relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 scroll-mt-12"
    >
      <div className="container relative mx-auto max-w-5xl px-4">
        <motion.h2
          className="section-heading text-center text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 mb-10 max-w-2xl text-center text-sm text-slate-300 md:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I bring 20+ years of hands-on diagnostics, technician leadership, and
          operational decision-making, and now apply that background to
          data-driven analysis, cost control, and process improvement.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          {/* CarMax / Operations & Analytics */}
          <motion.div
            className="flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-900/80 p-6 shadow-xl shadow-black/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-slate-50">
              Technician Production Manager &amp; Operational Analyst (Stretch)
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-sky-300">
              CarMax &mdash; Service Operations &amp; Reconditioning
            </p>

            <p className="mt-4 text-sm text-slate-200 md:text-base">
              Lead technicians in a high-volume reconditioning environment while
              auditing repair orders, analyzing labor usage, and supporting
              leadership with clear, actionable insights.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-[15px]">
              <li>
                &bull; Review repair orders to identify overlapping, misapplied,
                or incorrect labor lines and flag potential cost overcharges.
              </li>
              <li>
                &bull; Analyze trends in labor usage, technician patterns, and
                high-severity issues to support cost-reduction and process-clarity
                initiatives.
              </li>
              <li>
                &bull; Use Excel, SQL-style thinking, and dashboard views to
                surface KPIs such as total overcharge, issue severity, and
                technician-level risk.
              </li>
              <li>
                &bull; Partner with leaders and advisors to translate findings
                into coaching conversations, clearer policies, and operational
                changes.
              </li>
            </ul>
          </motion.div>

          {/* Technical / Analytics Projects */}
          <motion.div
            className="flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-900/80 p-6 shadow-xl shadow-black/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-slate-50">
              Technical &amp; Analytics Projects
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-sky-300">
              SQL • Excel • Python • Power BI • React / Next.js
            </p>

            <p className="mt-4 text-sm text-slate-200 md:text-base">
              Build internal-style tools, dashboards, and analysis projects that
              mirror real operational problems in labor usage, technician
              efficiency, and asset tracking.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-[15px]">
              <li>
                &bull; Designed an operational labor overcharge analysis project
                using Excel, SQL (PostgreSQL), Python (Pandas), and Power BI to
                simulate the stretch work I perform at CarMax.
              </li>
              <li>
                &bull; Created dashboards and prototypes such as TechMetrix,
                Labor Tracker, and Smart Asset Tracker to visualize performance,
                workload, and resource movement.
              </li>
              <li>
                &bull; Practice end-to-end analytics workflows: data cleaning,
                feature engineering, KPI definition, exploratory analysis, and
                visual storytelling.
              </li>
              <li>
                &bull; Document projects in GitHub with clear READMEs, repository
                structure, and business-focused summaries for hiring managers.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
