import React from 'react';
import Intro from '../../Components/Introduction/Intro'; 
import Projects from '../../Components/Projects/Projects';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
