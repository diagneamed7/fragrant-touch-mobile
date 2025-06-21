
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <Sparkles className="h-8 w-8 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
            <span className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
              Parfums
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/parfums"
              className={`font-medium transition-colors duration-200 ${
                isActive('/parfums') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Nos Parfums
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-yellow-600 border-b-2 border-yellow-600' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-yellow-600 bg-yellow-50' 
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link
                to="/parfums"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/parfums') 
                    ? 'text-yellow-600 bg-yellow-50' 
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
                onClick={closeMenu}
              >
                Nos Parfums
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-yellow-600 bg-yellow-50' 
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
