import React from 'react';
import { Bed, Bath, Maximize, Share2 } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden transition-shadow">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-lime-300 text-white px-3 py-1 rounded-md text-sm font-medium">
          For sale
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{property.address}</p>
        <p className="text-2xl font-bold text-gray-900 mb-4">${property.price.toLocaleString()}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>Bathrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop"
              alt={property.agent}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">{property.agent}</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;