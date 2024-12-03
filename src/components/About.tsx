import React from 'react';

export function About() {
  return (
    <section id="sobre-nosaltres" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="rounded-xl overflow-hidden h-[500px] shadow-2xl transform hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">Sobre en Joel</h2>
            <p className="text-lg text-gray-600">
              Amb més d'una dècada d'experiència en jardineria ecològica, ens especialitzem en crear i mantenir jardins sostenibles a La Selva del Camp i rodalies. La nostra passió és treballar en harmonia amb la natura, utilitzant tècniques respectuoses amb el medi ambient.
            </p>
            <p className="text-lg text-gray-600">
              Ens comprometem a utilitzar mètodes 100% ecològics, des del control natural de plagues fins al compostatge orgànic. Cada projecte és una oportunitat per crear un espai verd que beneficiï tant als nostres clients com al medi ambient.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-3xl text-green-600">10+</h4>
                <p className="text-gray-600">Anys d'Experiència</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-3xl text-green-600">100%</h4>
                <p className="text-gray-600">Ecològic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}