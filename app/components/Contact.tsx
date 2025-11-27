'use client';

import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import {
  FaEnvelope,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaCommentDots,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      <div className="container relative mx-auto px-4">
        {/* Subtle icon header */}
        <motion.div
          className="mb-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-full bg-slate-800 p-4 shadow-lg shadow-black/40">
            <FaCommentDots className="text-3xl text-sky-400" />
          </div>
        </motion.div>

        <motion.h2
          className="section-heading text-center text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 mt-4 max-w-xl text-center text-sm text-slate-300 md:text-base"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          If you&apos;re hiring for Data, Operational, or Business Analyst roles or you&apos;re interested in the kind of
          internal tools and dashboards I build, feel free to reach out. You can
          use the form below or contact me directly by email or LinkedIn.
        </motion.p>

        {!isSubmitted ? (
          <motion.div
            className="mx-auto max-w-2xl rounded-2xl border border-slate-700/60 bg-slate-900/80 px-8 py-10 shadow-xl shadow-black/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <motion.form onSubmit={handleSubmit} className="space-y-7">
              {/* Name Field */}
              <div>
                <Label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-100"
                >
                  Name
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sky-400">
                    <FaUser />
                  </span>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={cn(
                      'w-full rounded-xl border border-slate-700 bg-slate-950/80 pl-10 text-slate-50',
                      'focus:border-sky-400 focus:ring-sky-400'
                    )}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <Label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-100"
                >
                  Email
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sky-400">
                    <FaEnvelope />
                  </span>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={cn(
                      'w-full rounded-xl border border-slate-700 bg-slate-950/80 pl-10 text-slate-50',
                      'focus:border-sky-400 focus:ring-sky-400'
                    )}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <Label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-100"
                >
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    'w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-3 text-slate-50',
                    'focus:border-sky-400 focus:ring-sky-400'
                  )}
                  placeholder="How can I help, or what would you like to discuss?"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full rounded-xl bg-sky-500 px-7 py-3 text-lg font-semibold text-slate-950 shadow-md shadow-black/40 transition hover:bg-sky-400 focus:outline-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send message
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/jason-w-summers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:text-sky-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
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
            </div>

            {/* Direct email */}
            <div className="mt-6 text-center text-sm text-slate-300">
              Prefer email?{' '}
              <a
                href="mailto:hello@jasonwsummers.com"
                className="text-sky-300 underline underline-offset-2 transition hover:text-sky-200"
              >
                hello@jasonwsummers.com
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center py-20 text-center"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 text-5xl">✅</span>
            <h3 className="mb-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Thanks for reaching out.
            </h3>
            <p className="mx-auto max-w-md text-sm text-slate-200 md:text-base">
              I appreciate your message and will follow up as soon as I can. If
              anything is time-sensitive, you can also email me directly at{' '}
              <a
                href="mailto:hello@jasonwsummers.com"
                className="text-sky-300 underline underline-offset-2 hover:text-sky-200"
              >
                hello@jasonwsummers.com
              </a>
              .
            </p>
            <div className="mt-6 flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/jason-w-summers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:text-sky-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
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
                href="https://twitter.com/JWSummers_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:text-sky-300"
                aria-label="Twitter / X"
              >
                <FaXTwitter size={30} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
