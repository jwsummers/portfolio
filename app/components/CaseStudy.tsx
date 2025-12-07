'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type CaseStudy = {
  title: string;
  role: string;
  timeframe?: string;
  context: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  tools: string[];
  repo?: string;
  extraLink?: {
    label: string;
    href: string;
  };
};

const caseStudies: CaseStudy[] = [
  {
    title: 'Operational Labor Overcharge Analysis',
    role: 'Data & Operations Analyst (Portfolio Case Study)',
    timeframe: 'Modeled after 2025 stretch assignment work',
    context:
      'End-to-end analytics project simulating my real stretch-role work at CarMax. Uses mock data to mirror how labor overcharges, overlapping labor, and operational inefficiencies show up in automotive reconditioning workflows.',
    problem:
      'Leaders needed a clearer picture of where labor overcharges and misapplied operations were occurring, which technicians and categories were driving cost risk, and whether issues were isolated mistakes or systemic patterns.',
    approach: [
      'Cleaned and modeled repair order issue data in Excel, adding calculated fields for billed vs. correct labor, cost overcharge, and severity scoring.',
      'Loaded data into PostgreSQL and built a reusable view with derived fields for action quality, severity score, and operational risk buckets.',
      'Used SQL (including window functions) to analyze weekly trends, category rollups, technician-level variance, and high-risk operation groups.',
      'Performed exploratory data analysis in Python (Pandas) to quantify distributions, outliers, and technician performance indices.',
      'Built a Power BI dashboard with KPIs, technician and category breakdowns, trend lines, and slicers for severity, week, and operation group.',
    ],
    outcomes: [
      'Identified that incorrect labor time and overlapping labor were the primary drivers of total cost overcharge in the dataset.',
      'Surfaced a small subset of technicians and operation groups that contributed a disproportionate share of high-severity overcharges.',
      'Demonstrated how a severity-weighted risk score can prioritize coaching and process review instead of treating all issues equally.',
      'Produced an interactive dashboard that supports “where should we look first?” conversations for leaders and production managers.',
      'Showcased my full-stack analytics workflow: Excel → SQL → Python → Power BI, tied to a real operational domain.',
    ],
    tools: [
      'Excel (data cleaning & calculated fields)',
      'PostgreSQL & SQL (views, window functions, KPIs)',
      'Python (Pandas, EDA, visualizations)',
      'Power BI (interactive dashboard)',
      'Git & GitHub (version control, documentation)',
    ],
    repo: 'https://github.com/jwsummers/ops-labor-analysis',
    // If you ever publish a public Power BI link or PDF summary, you can add it here:
    // extraLink: {
    //   label: 'View Dashboard Overview (PDF)',
    //   href: 'https://...'
    // },
  },
  {
  title: 'Mobile Mechanic Operations Performance Analysis',
  role: 'Business & Operations Data Analyst (Portfolio Case Study)',
  timeframe: 'Modeled on 12 months of mobile repair operations',
  context:
    'End-to-end business analytics project simulating the real-world performance of a single-technician mobile mechanic operating in Maricopa County, AZ. Built using mock data to reflect pricing strategy, service mix, customer retention, and the operational impact of mobile travel.',
  problem:
    'The business needed clear visibility into which services were most profitable, how repeat customers impacted revenue, whether mobile travel distance reduced profit margins, and how monthly demand patterns affected business stability.',
  approach: [
    'Modeled a full 12-month dataset (320 repair orders) including labor hours, labor revenue, parts cost, parts markup, travel distance, travel cost, and total profit.',
    'Loaded and analyzed the data in PostgreSQL, writing KPI-driven SQL queries to evaluate service profitability, customer lifetime value, monthly trends, and mobile efficiency.',
    'Used Python (Pandas) for exploratory data analysis to validate distributions, profit margin variability, travel vs profit relationships, and revenue consistency.',
    'Designed a Tableau executive dashboard featuring KPI cards, monthly revenue & profit trends, top services by profit, customer retention breakdowns, and travel efficiency visualizations.',
    'Structured the project using a professional multi-tool analytics workflow: CSV → SQL → Python → Tableau.',
  ],
  outcomes: [
    'Identified diagnostics and A/C compressor replacement as the highest-margin services in the business.',
    'Confirmed that repeat customers generated the majority of total revenue and profit.',
    'Found that long-distance jobs (11–15 miles) produced higher average profit due to larger repair scope, while mid-range travel (6–10 miles) showed weaker margin efficiency.',
    'Determined that premium vehicle brands did not consistently outperform standard brands in average profitability.',
    'Produced an executive-ready interactive Tableau dashboard that supports pricing, service focus, and retention strategy decisions.',
  ],
  tools: [
    'PostgreSQL & SQL (KPI design, aggregations, business logic)',
    'Python (Pandas, EDA, validation)',
    'Tableau (interactive executive dashboard)',
    'Git & GitHub (version control, documentation)',
  ],
  repo: 'https://github.com/jwsummers/mobile_mechanic_ops_analysis',
  extraLink: {
    label: 'View Interactive Dashboard (Tableau Public)',
    href: 'https://public.tableau.com/app/profile/jason.summers2480/viz/MobileMechanicOperationsAnalysis/MobileMechanicOperationsDashboard?publish=yes',
  },
},

];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 scroll-mt-12"
    >
      <div className="container relative mx-auto max-w-5xl px-4">
        <motion.h2
          className="section-heading text-center text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Case Studies
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 mb-10 max-w-2xl text-center text-sm text-slate-300 md:text-base"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          Deeper dives into projects where I worked through the full analytics lifecycle:
          defining the problem, structuring the data, analyzing root causes, and presenting
          findings in a way that supports real operational decisions.
        </motion.p>

        <div className="space-y-10">
          {caseStudies.map((cs, index) => (
            <motion.article
              key={cs.title}
              className="rounded-3xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {/* Header */}
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">
                    {cs.title}
                  </h3>
                  <p className="text-sm font-medium text-sky-300">{cs.role}</p>
                </div>
                {cs.timeframe && (
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    {cs.timeframe}
                  </p>
                )}
              </div>

              {/* Context & Problem */}
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Context
                  </h4>
                  <p className="text-sm text-slate-200 md:text-base">
                    {cs.context}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Problem
                  </h4>
                  <p className="text-sm text-slate-200 md:text-base">
                    {cs.problem}
                  </p>
                </div>
              </div>

              {/* Approach & Outcomes */}
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Approach
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-200 md:text-base">
                    {cs.approach.map((step) => (
                      <li key={step} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                    Outcomes & Insights
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-200 md:text-base">
                    {cs.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools & Links */}
              <div className="flex flex-col gap-4 border-t border-slate-700/70 pt-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Tools & Techniques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cs.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-slate-600 bg-slate-950 px-3 py-1 text-[11px] font-medium text-slate-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cs.repo && (
                    <a
                      href={cs.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 shadow-md transition hover:border-sky-400 hover:text-sky-200"
                    >
                      <FaGithub size={16} />
                      View Repository
                    </a>
                  )}
                  {cs.extraLink && (
                    <a
                      href={cs.extraLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-sky-400"
                    >
                      <FaExternalLinkAlt size={14} />
                      {cs.extraLink.label}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
