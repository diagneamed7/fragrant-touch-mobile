
import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface Parfum {
  id: number;
  nom: string;
  description: string;
  prix: string;
  image: string;
  categorie: string;
}

interface ParfumCardProps {
  parfum: Parfum;
}

const ParfumCard: React.FC<ParfumCardProps> = ({ parfum }) => {
  const handleWhatsAppClick = () => {
    const message = `Bonjour, je suis intéressé par le parfum ${parfum.nom}. Est-il disponible ?`;
    const whatsappUrl = `https://wa.me/NUMERO?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="perfume-card group">
      <div className="relative overflow-hidden">
        <img
          src={parfum.image}
          alt={parfum.nom}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {parfum.categorie}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="h-6 w-6 text-yellow-400" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
          {parfum.nom}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {parfum.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-playfair text-2xl font-bold text-yellow-600">
            {parfum.prix}
          </span>
          <button
            onClick={handleWhatsAppClick}
            className="btn-gold flex items-center space-x-2 text-sm"
            aria-label={`Commander ${parfum.nom}`}
          >
            <MessageCircle className="h-4 w-4" />
            <span>Commander</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParfumCard;
