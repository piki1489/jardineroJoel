import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Joel Jardins Ecològics. Tots els drets reservats.</p>
      </footer>
    </div>
  );
}

export default App;