import React from 'react';

const Visualizations: React.FC = () => {
  const projects = [
    {
      title: "Modern Villa",
      description: "Contemporary residential design with sustainable materials",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      category: "Residential"
    },
    {
      title: "Urban Complex",
      description: "Mixed-use development in downtown district",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      category: "Commercial"
    },
    {
      title: "Zen Garden House",
      description: "Minimalist architecture blending indoor and outdoor spaces",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      category: "Residential"
    },
    {
      title: "Corporate Headquarters",
      description: "Glass and steel tower with innovative facade system",
      image: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
      category: "Commercial"
    },
    {
      title: "Eco Resort",
      description: "Sustainable hospitality design integrated with nature",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      category: "Hospitality"
    },
    {
      title: "Cultural Center",
      description: "Public architecture celebrating local heritage",
      image: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg",
      category: "Public"
    }
  ];

  return (
    <section id="visualizations" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Project Visualizations
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every great building begins with an even greater vision. 
            We create photorealistic 3D renders that help you see the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visualizations;