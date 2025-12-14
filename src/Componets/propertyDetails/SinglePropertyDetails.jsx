import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize2, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function SinglePropertyDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = {
    title: 'T35 Avenue Glondon Center',
    address: '45 Connor St. London, 44523',
    priceRange: '$5,000 - $50,000',
    beds: 1,
    bathrooms: 3,
    area: 200,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    amenities: [
      { name: 'Swimming pool', available: true },
      { name: 'Terrace', available: true },
      { name: 'Radio', available: true },
      { name: 'Grill', available: true },
      { name: 'Cable', available: true },
      { name: 'Air Conditioning', available: true },
      { name: 'Coffee pot', available: true },
      { name: 'Balcony', available: true },
      { name: 'Computer', available: true },
      { name: 'Parquet', available: true },
      { name: 'Internet', available: true },
      { name: 'Towelwes', available: true },
      { name: 'Roof terrace', available: true },
      { name: 'Oven', available: true }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Hero Image Slider */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              src={property.images[currentImageIndex]}
              alt="Property"
              className="w-full h-full object-cover"
            />
            
            {/* Image Label */}
            <div className="absolute top-6 left-6 bg-black/70 text-white rounded-lg p-4">
              <div className="font-semibold text-sm sm:text-base">Front View</div>
              <div className="text-xs sm:text-sm opacity-90 mt-1 max-w-xs sm:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'w-8 bg-white' 
                      : 'w-1.5 bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* View in Full Screen Button */}
            <button className="absolute bottom-6 left-6 bg-gradient-to-b from-green-500 to-lime-400 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all shadow-lg">
              View in Full Screen
            </button>
          </div>
        </div>

        {/* Property Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">{property.address}</span>
              </div>
            </div>
            
            <div className="text-left lg:text-right">
              <div className="text-sm text-gray-600 mb-1">Price Range</div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                {property.priceRange}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 sm:gap-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2.5 rounded-lg">
              <Bed className="w-5 h-5 text-green-600" />
              <span className="text-sm sm:text-base font-medium text-gray-700">{property.beds} beds</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2.5 rounded-lg">
              <Bath className="w-5 h-5 text-green-600" />
              <span className="text-sm sm:text-base font-medium text-gray-700">{property.bathrooms} Bath</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2.5 rounded-lg">
              <Maximize2 className="w-5 h-5 text-green-600" />
              <span className="text-sm sm:text-base font-medium text-gray-700">{property.area} sqft</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.galleryImages.map((image, index) => (
              <div key={index} className="relative h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Description</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-green-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-sm sm:text-base text-gray-700">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}