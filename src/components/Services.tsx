import React from 'react';
import { 
  Scissors, 
  Sprout, 
  Shovel, 
  Flower2, 
  Droplets, 
  TreePine 
} from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Poda Experta',
    description: 'Poda precisa i acurada per promoure un creixement saludable'
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: 'Cultiu Orgànic',
    description: 'Utilitzem mètodes 100% naturals i sostenibles'
  },
  {
    icon: <Shovel className="w-8 h-8" />,
    title: 'Manteniment',
    description: 'Cura regular de jardins i espais verds'
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: 'Disseny de Jardins',
    description: 'Creació d\'espais verds únics i sostenibles'
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Reg Eficient',
    description: 'Sistemes de reg intel·ligent i estalvi d\'aigua'
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: 'Gestió Ecològica',
    description: 'Tractaments respectuosos amb el medi ambient'
  }
];

export function Services() {
  return (
    <section id="serveis" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Els Nostres Serveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-green-600 mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}