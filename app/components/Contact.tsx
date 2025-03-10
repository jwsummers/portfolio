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
    <div id='contact' className='bg-muted-gradient-1 pb-0'>
      <motion.h2
        className='section-heading'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Let&apos;s Connect
      </motion.h2>

      {!isSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className='max-w-lg mx-auto contact-form'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Name Field */}
          <motion.div
            className='mb-4'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Label
              className='block text-sm font-bold mb-2 text-gray-300'
              htmlFor='name'
            >
              Name
            </Label>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <FaUser className='text-gray-400' />
              </span>
              <Input
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='peer pl-8'
              />
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div
            className='mb-4'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Label
              className='block text-sm font-bold mb-2 text-gray-300'
              htmlFor='email'
            >
              Email
            </Label>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <FaEnvelope className='text-gray-400' />
              </span>
              <Input
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                type='email'
                className='peer pl-8'
              />
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div
            className='mb-4'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Label
              htmlFor='message'
              className='block text-sm font-bold text-gray-300 transition-colors duration-300 ease-in-out'
            >
              Message
            </Label>
            <Input
              as='textarea'
              id='message'
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              className='peer'
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
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
            <p className='text-gray-300'>
              For Website Development inquiries, visit{' '}
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
      ) : (
        <motion.div
          className='text-center text-gray-300'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className='text-2xl font-bold'>Thank you for reaching out!</h3>
          <p className='mt-4'>I will get back to you as soon as possible.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
