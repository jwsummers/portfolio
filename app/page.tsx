import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudy';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
