import React from 'react';
import { Star, Bed, Bath, Maximize, ChevronRight } from 'lucide-react';

export default function ReviewAndProperty() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="space-y-6">
        {/* Customer Review Section */}
        <div className="bg-white rounded-2xl p-2 sm:p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Customer Review
          </h2>
          
          {/* Review Card */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-8 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Emilia Sigh"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">Emilia Sigh</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-500">5m ago</span>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.
            </p>
          </div>
          
          {/* See More Button */}
          <button className="w-full bg-gradient-to-t from-lime-400 to-green-400 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:from-lime-500 hover:to-green-600 transition-all">
            See More Reviews
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Recent Property Section */}
        <div className="bg-white rounded-2xl p-2 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Property
          </h2>
          
          {/* Property Card */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden h-auto sm:h-56">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                98AB Alexander Court, London
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                45 Connor St, London, 44523
              </p>
              
              {/* Property Details */}
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>2 Beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>3 Bathrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Maximize className="w-4 h-4" />
                  <span>2,000 Sqft</span>
                </div>
              </div>
            </div>
            
            {/* See More Button */}
            <button className="w-full bg-gradient-to-t from-lime-400 to-green-400 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:from-lime-500 hover:to-green-600 transition-all">
              See More Reviews
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}