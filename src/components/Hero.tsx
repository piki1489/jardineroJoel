import React from 'react';
import { Leaf, Sprout, TreePine } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center gap-4 mb-6">
            <Leaf className="w-8 h-8 animate-bounce" />
            <Sprout className="w-8 h-8 animate-bounce delay-100" />
            <TreePine className="w-8 h-8 animate-bounce delay-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Jardineria Ecològica</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transformem el teu espai en un paradís sostenible a La Selva del Camp i rodalies
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contacte')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Contacta'ns
            </button>
            <button 
              onClick={() => document.getElementById('serveis')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Els Nostres Serveis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}