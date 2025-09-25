import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Visualizations from './components/Visualizations';
import Posters from './components/Posters';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Visualizations />
      <Posters />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;