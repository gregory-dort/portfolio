import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
