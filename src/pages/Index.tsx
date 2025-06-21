
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <Sparkles className="h-16 w-16 text-gold-500 mx-auto mb-6 animate-scale-in" />
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Révélez votre 
              <span className="text-gold-600 block">élégance</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-light">
              Parfums d'exception
            </p>
            <Link
              to="/parfums"
              className="btn-gold inline-flex items-center space-x-2 text-lg animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <span>Voir les parfums</span>
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              À propos de nous
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre collection soigneusement sélectionnée de parfums d'exception. 
              Nous vous proposons les plus grandes marques de parfumerie pour révéler votre 
              personnalité unique et sublimer votre élégance naturelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                Qualité Premium
              </h3>
              <p className="text-gray-600">
                Seulement les meilleures marques et fragrances authentiques
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                Service Personnalisé
              </h3>
              <p className="text-gray-600">
                Conseils experts pour trouver le parfum qui vous correspond
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                Élégance Assurée
              </h3>
              <p className="text-gray-600">
                Chaque parfum raconte une histoire unique de sophistication
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
