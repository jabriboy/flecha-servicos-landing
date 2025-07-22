import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import ServiceAreas from './components/sections/ServiceAreas';
import Gallery from './components/sections/Gallery';
import Articles from './components/sections/Articles';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen max-w-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ServiceAreas />
        <Gallery />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
