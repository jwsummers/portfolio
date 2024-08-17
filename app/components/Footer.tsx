import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-0">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://linkedin.com/in/jason-w-summers" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-blue-500" />
          </a>
          <a href="https://github.com/jwsummers" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/JWSummers_dev" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-blue-400" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Jason Summers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
