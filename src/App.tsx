import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import ServiceAreas from './components/sections/ServiceAreas';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen max-w-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceAreas />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
