'use client';

import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
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
    <div
      id='contact'
      className='bg-muted-gradient-1 py-20 relative overflow-hidden' // Added padding and overflow hidden
    >
      {/* Animated Background Blobs */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10'>
        <motion.div
          className='absolute bg-purple-500 rounded-full filter blur-2xl opacity-30'
          style={{ top: '10%', left: '10%', width: '150px', height: '150px' }}
          animate={{
            x: ['0px', '50px', '0px'],
            y: ['0px', '20px', '0px'],
            rotate: [0, 360, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-blue-500 rounded-full filter blur-2xl opacity-30'
          style={{ top: '70%', right: '10%', width: '200px', height: '200px' }}
          animate={{
            x: ['0px', '-50px', '0px'],
            y: ['0px', '-20px', '0px'],
            rotate: [360, 0, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bg-pink-500 rounded-full filter blur-2xl opacity-30'
          style={{
            bottom: '10%',
            left: '40%',
            width: '100px',
            height: '100px',
          }}
          animate={{
            x: ['0px', '30px', '0px'],
            y: ['0px', '-10px', '0px'],
            rotate: [0, -360, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className='relative container mx-auto px-4'>
        <motion.h2
          className='section-heading'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Let&apos;s Connect
        </motion.h2>

        {!isSubmitted ? (
          <motion.div
            className='max-w-3xl mx-auto bg-gray-800/50 rounded-2xl shadow-xl p-10 backdrop-blur-md' // Added background, shadow, and padding
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className='space-y-6' // Using space-y-6 for consistent spacing
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Label
                  className='block text-sm font-bold mb-2 text-gray-300'
                  htmlFor='name'
                >
                  Your Name
                </Label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400'>
                    <FaUser />
                  </span>
                  <Input
                    id='name'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    required
                    className='pl-10 w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-pink-500 focus:border-pink-500' // Added styling
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Label
                  className='block text-sm font-bold mb-2 text-gray-300'
                  htmlFor='email'
                >
                  Your Email
                </Label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400'>
                    <FaEnvelope />
                  </span>
                  <Input
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    required
                    type='email'
                    className='pl-10 w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-pink-500 focus:border-pink-500' // Added styling
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Label
                  htmlFor='message'
                  className='block text-sm font-bold mb-2 text-gray-300'
                >
                  Your Message
                </Label>
                <Input
                  as='textarea'
                  id='message'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  required
                  className='w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-pink-500 focus:border-pink-500 resize-none'
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type='submit'
                className='w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:bg-gradient-to-l hover:shadow-md transition duration-300 ease-in-out font-semibold'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {/* Footer Text */}
              <motion.div
                className='mt-6 text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className='text-gray-300 text-sm'>
                  For website development inquiries, visit{' '}
                  <a
                    href='https://techtunedwebdesign.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-pink-500 hover:underline'
                  >
                    TechTuned Web Design
                  </a>{' '}
                  or email us at{' '}
                  <a
                    href='mailto:contact@techtunedwebdesign.com'
                    className='text-pink-500 hover:underline'
                  >
                    contact@techtunedwebdesign.com
                  </a>
                  .
                </p>
              </motion.div>
            </motion.form>
          </motion.div>
        ) : (
          <motion.div
            className='text-center text-gray-300'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className='text-3xl font-bold'>Thank you for reaching out!</h3>
            <p className='mt-4 text-lg'>
              I will get back to you as soon as possible.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
