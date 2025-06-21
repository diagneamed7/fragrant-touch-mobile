
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParfumCard from '@/components/ParfumCard';
import parfumsData from '@/data/parfums.json';

const Parfums = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Nos Parfums
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            Découvrez notre collection exclusive de parfums d'exception, 
            soigneusement sélectionnés pour révéler votre élégance unique.
          </p>
        </div>
      </section>

      {/* Parfums Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parfumsData.map((parfum, index) => (
              <div 
                key={parfum.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ParfumCard parfum={parfum} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parfums;
