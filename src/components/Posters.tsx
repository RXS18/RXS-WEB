import React from 'react';

const Posters: React.FC = () => {
  const posters = [
    {
      title: "Architecture Exhibition 2024",
      description: "Contemporary design showcase",
      image: "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg",
      size: "large"
    },
    {
      title: "Sustainable Living",
      description: "Green building campaign",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      size: "medium"
    },
    {
      title: "Urban Planning Forum",
      description: "City development conference",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      size: "medium"
    },
    {
      title: "Design Awards 2024",
      description: "Annual recognition event",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      size: "large"
    },
    {
      title: "Innovation in Construction",
      description: "Technology symposium",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
      size: "small"
    },
    {
      title: "Heritage Preservation",
      description: "Conservation initiative",
      image: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg",
      size: "small"
    }
  ];

  return (
    <section id="posters" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Visual Communication
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bold designs that capture attention and communicate your message. 
            From event posters to brand campaigns, we make ideas unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {posters.map((poster, index) => (
            <div 
              key={index}
              className={`group cursor-pointer ${
                poster.size === 'large' ? 'md:col-span-2 lg:row-span-2' :
                poster.size === 'medium' ? 'md:col-span-1 lg:row-span-1' :
                'md:col-span-1 lg:row-span-1'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] bg-white shadow-lg">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {poster.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {poster.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posters;