import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Jardí Ecològic'
  },
  {
    url: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Hort Urbà'
  },
  {
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Poda Professional'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Manteniment'
  },
  {
    url: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Disseny de Jardins'
  },
  {
    url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Reg Eficient'
  }
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Els Nostres Projectes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative h-72 overflow-hidden rounded-xl cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}