
import React from 'react';
import { Instagram, MessageCircle, Mail, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-yellow-400" />
              <span className="font-playfair text-2xl font-bold">Parfums</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Découvrez notre collection de parfums d'exception. 
              Révélez votre élégance avec nos fragrances soigneusement sélectionnées.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-yellow-400">Liens Rapides</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Accueil
              </a>
              <a href="/parfums" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Nos Parfums
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-yellow-400">Nous Contacter</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/NUMERO?text=Bonjour, je souhaite plus d'informations sur vos parfums."
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:contact@parfums-boutique.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@parfums-boutique.com</span>
              </a>
              <a 
                href="tel:+33123456789"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+33 1 23 45 67 89</span>
              </a>
              <a 
                href="https://instagram.com/parfums_boutique"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span>@parfums_boutique</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Parfums Boutique. Tous droits réservés. | Révélez votre élégance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
