import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('visualizations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            Create.
            <br />
            <span className="text-gray-400">Visualize.</span>
            <br />
            Inspire.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            We transform architectural visions into stunning visual experiences. 
            From 3D renders to compelling posters, we bring your projects to life.
          </p>
          
          <button
            onClick={scrollToNext}
            className="inline-flex items-center space-x-2 text-lg font-medium bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <span>View Our Work</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;