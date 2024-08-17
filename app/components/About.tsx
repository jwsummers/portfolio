import React from 'react';
import Image from 'next/image';


const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center items-center bg-muted-gradient p-8">
      <div className="text-center mb-8">
      <Image 
          src="/headshot.png" 
          alt="Headshot" 
          width={128} 
          height={128} 
          className="rounded-full mx-auto" 
        />
        <h2 className="section-heading">About Me</h2>
      </div>
      <p className="max-w-2xl text-center mb-8">
        I am a passionate Full-Stack Developer with experience in creating modern, responsive web applications. My journey in web development has equipped me with skills in both front-end and back-end technologies, enabling me to build robust and user-friendly websites.
      </p>
      <a href="/resume" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View My Resume</a>
  </div>
  );
};

export default About;
