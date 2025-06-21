
import React from 'react';
import { MessageCircle, Mail, Phone, Instagram, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Contactez-nous
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            Notre équipe est à votre disposition pour vous conseiller 
            et répondre à toutes vos questions sur nos parfums.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Methods */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/NUMERO?text=Bonjour, je souhaite plus d'informations sur vos parfums."
                  className="flex items-center space-x-4 text-gray-700 hover:text-gold-600 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-gold-50 p-3 rounded-full group-hover:bg-gold-100 transition-colors">
                    <MessageCircle className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-gray-500">Réponse rapide garantie</p>
                  </div>
                </a>

                <a 
                  href="mailto:contact@parfums-boutique.com"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gold-600 transition-colors group"
                >
                  <div className="bg-gold-50 p-3 rounded-full group-hover:bg-gold-100 transition-colors">
                    <Mail className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">contact@parfums-boutique.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+33123456789"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gold-600 transition-colors group"
                >
                  <div className="bg-gold-50 p-3 rounded-full group-hover:bg-gold-100 transition-colors">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-sm text-gray-500">+33 1 23 45 67 89</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/parfums_boutique"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gold-600 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-gold-50 p-3 rounded-full group-hover:bg-gold-100 transition-colors">
                    <Instagram className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm text-gray-500">@parfums_boutique</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Pourquoi nous choisir ?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gold-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Authenticité garantie</h3>
                    <p className="text-gray-600 text-sm">Tous nos parfums sont 100% authentiques</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gold-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Livraison rapide</h3>
                    <p className="text-gray-600 text-sm">Expédition sous 24h partout en France</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gold-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Conseils experts</h3>
                    <p className="text-gray-600 text-sm">Notre équipe vous guide dans votre choix</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gold-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Satisfaction client</h3>
                    <p className="text-gray-600 text-sm">Plus de 1000 clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
