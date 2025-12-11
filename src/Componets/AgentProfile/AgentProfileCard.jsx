import React from 'react';
import { Facebook, Instagram, Youtube, Music2, } from 'lucide-react';

const AgentProfileCard = () => {
  return (
    <div className=" bg-gray-50 h-full border border-gray-200 rounded-lg">
      <div className="flex flex-col items-center mb-6 bg-gradient-to-r from-green-400 to-lime-400 to-green-400 rounded-xl py-8">
        <div className="w-24 h-24 rounded-full bg-white p-1 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop"
            alt="Annette Black"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold">Annette Black</h2>
        <p className="text-gray-800">Nursing Assistant</p>
      </div>

      <div className="space-y-3 p-6 text-sm text-gray-800">
        <div className="flex justify-between">
          <span className="text-gray-800">Age:</span>
          <span className="font-medium text-gray-800">32</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800">Customer Gender:</span>
          <span className="font-medium">Male</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800">City:</span>
          <span className="font-medium">New York City</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800">State:</span>
          <span className="font-medium">New York</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800">Country:</span>
          <span className="font-medium">USA</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800">Post Code:</span>
          <span className="font-medium">12435</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-800">Email:</span>
          <span className="font-medium text-xs">manhhac08@gmail.com</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
          <Youtube className="w-4 h-4" />
        </a>
        <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
          <Music2 className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default AgentProfileCard;