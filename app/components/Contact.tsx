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
import Image from 'next/image';

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
      id='contact'
      className='relative bg-muted-gradient-1 py-24 overflow-hidden'
    >
      <div className='absolute inset-0'>
        <Image
          src='/images/vaporwave-bg.jpg'
          alt='Vaporwave background'
          layout='fill'
          objectFit='cover'
          className='opacity-50 blur-lg select-none pointer-events-none'
          priority
        />
      </div>
      {/* Neon Background Blobs */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10'>
        <motion.div
          className='absolute bg-pink-500 rounded-full blur-2xl opacity-25'
          style={{ top: '12%', left: '8%', width: '160px', height: '160px' }}
          animate={{ x: ['0px', '40px', '0px'], y: ['0px', '18px', '0px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-blue-500 rounded-full blur-2xl opacity-20'
          style={{ top: '68%', right: '10%', width: '190px', height: '190px' }}
          animate={{ x: ['0px', '-60px', '0px'], y: ['0px', '-25px', '0px'] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-purple-500 rounded-full blur-2xl opacity-20'
          style={{
            bottom: '14%',
            left: '35%',
            width: '110px',
            height: '110px',
          }}
          animate={{ x: ['0px', '30px', '0px'], y: ['0px', '-13px', '0px'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className='relative container mx-auto px-4'>
        {/* Animated Chat Icon */}
        <motion.div
          className='flex justify-center mb-4'
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className='bg-gradient-to-tr from-[#01fff0] via-[#a300fa] to-[#f906c7] p-4 rounded-full shadow-lg neon-shadow animate-pulse'>
            <FaCommentDots className='text-white text-3xl' />
          </div>
        </motion.div>

        <motion.h2
          className='section-heading text-center'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Say Hi!
        </motion.h2>

        <motion.p
          className='text-lg text-center text-gray-200 max-w-lg mx-auto mb-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let’s build something awesome, chat code, or just connect. Use the
          form or find me on social—my inbox is always open!
        </motion.p>

        {!isSubmitted ? (
          <motion.div
            className='max-w-2xl mx-auto rounded-2xl shadow-xl bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-12'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.form onSubmit={handleSubmit} className='space-y-7'>
              {/* Name Field */}
              <div>
                <Label
                  htmlFor='name'
                  className='block text-sm font-bold mb-2 text-white/80'
                >
                  Name
                </Label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-[#01fff0]'>
                    <FaUser />
                  </span>
                  <Input
                    id='name'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete='name'
                    className='pl-10 w-full rounded-xl bg-black/30 border border-white/10 text-white focus:ring-[#01fff0] focus:border-[#01fff0]'
                  />
                </div>
              </div>
              {/* Email Field */}
              <div>
                <Label
                  htmlFor='email'
                  className='block text-sm font-bold mb-2 text-white/80'
                >
                  Email
                </Label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-[#01fff0]'>
                    <FaEnvelope />
                  </span>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete='email'
                    className='pl-10 w-full rounded-xl bg-black/30 border border-white/10 text-white focus:ring-[#01fff0] focus:border-[#01fff0]'
                  />
                </div>
              </div>
              {/* Message Field */}
              <div>
                <Label
                  htmlFor='message'
                  className='block text-sm font-bold mb-2 text-white/80'
                >
                  Message
                </Label>
                <textarea
                  id='message'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full rounded-xl bg-black/30 border border-white/10 text-white focus:ring-[#01fff0] focus:border-[#01fff0] p-3 resize-none'
                  placeholder="What's on your mind?"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type='submit'
                className='w-full px-7 py-3 rounded-xl font-bold text-lg bg-gradient-to-tr from-[#01fff0] via-[#a300fa] to-[#f906c7] text-black neon-shadow transition-all duration-200 hover:scale-105 focus:outline-none'
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Send it!
              </motion.button>
            </motion.form>

            {/* Or Social Links */}
            <div className='flex justify-center gap-6 mt-8'>
              <a
                href='https://linkedin.com/in/jason-w-summers/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#01fff0] hover:text-[#f906c7] transition'
                aria-label='LinkedIn'
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href='https://github.com/jwsummers'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#a300fa] hover:text-[#01fff0] transition'
                aria-label='GitHub'
              >
                <FaGithub size={32} />
              </a>
              <a
                href='https://twitter.com/JWSummers_dev'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#f906c7] hover:text-[#01fff0] transition'
                aria-label='Twitter'
              >
                <FaXTwitter size={32} />
              </a>
            </div>

            {/* Or Email Direct */}
            <div className='text-center text-sm text-white/60 mt-6'>
              Prefer email?{' '}
              <a
                href='mailto:jwsummers.dev@gmail.com'
                className='underline text-[#01fff0] hover:text-[#f906c7] transition'
              >
                jwsummers.dev@gmail.com
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className='flex flex-col items-center justify-center py-20 text-center'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className='text-5xl mb-4 animate-bounce'>🎉</span>
            <h3 className='text-3xl font-bold text-[#01fff0] mb-2'>
              Thank you for reaching out!
            </h3>
            <p className='text-lg text-white/90 max-w-md mx-auto'>
              I appreciate your message and will get back to you as soon as
              possible. In the meantime, feel free to connect on social!
            </p>
            <div className='flex justify-center gap-6 mt-6'>
              <a
                href='https://linkedin.com/in/jason-w-summers/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#01fff0] hover:text-[#f906c7] transition'
                aria-label='LinkedIn'
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href='https://github.com/jwsummers'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#a300fa] hover:text-[#01fff0] transition'
                aria-label='GitHub'
              >
                <FaGithub size={32} />
              </a>
              <a
                href='https://twitter.com/JWSummers_dev'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#f906c7] hover:text-[#01fff0] transition'
                aria-label='Twitter'
              >
                <FaXTwitter size={32} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
      <style jsx global>{`
        .neon-shadow {
          box-shadow: 0 0 14px #01fff0, 0 0 8px #a300fa, 0 0 18px #f906c7;
        }
      `}</style>
    </section>
  );
}
