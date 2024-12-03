import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacte" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacte</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Informació de Contacte</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-transform">
                <Phone className="w-6 h-6 text-green-600" />
                <span>+34 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 text-green-600" />
                <span>joel@jardineria-ecologica.cat</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-green-600" />
                <span>La Selva del Camp, Tarragona</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-green-600" />
                <span>Dilluns a Dissabte: 8:00 - 19:00</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="El teu nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correu electrònic</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="el-teu@correu.cat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Missatge</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all h-32"
                placeholder="En què podem ajudar-te?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Enviar Missatge
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}