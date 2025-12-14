import React from "react";
import { Instagram, Facebook, Twitter, Phone, Star } from "lucide-react";
import map from "../../assets/dashboard-assests/map.png";

export default function PropertySidebar() {
  const agent = {
    name: "Samuel Rofriguez",
    role: "Agent",
    address: "Midnight Corner St. Suite 600 San Francisco, CADGE 94107",
    phone: "+123 456 79633",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
  };

  const reviews = [
    {
      id: 1,
      name: "Emilia Sigh",
      date: "22/04/2025",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      id: 2,
      name: "Pattison Parkur",
      date: "22/04/2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    },
    {
      id: 3,
      name: "Pattison Parkur",
      date: "22/04/2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Sale Badge */}
      <div className="bg-white rounded-2xl shadow-lg">
        <div className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 rounded-2xl p-8 text-center text-white shadow-lg">
          <div className="text-2xl font-bold mb-2">SALE</div>
          <div className="text-lg font-semibold">$5,000 - $50,000</div>
        </div>

        {/* Agent Card */}
        <div className="rounded-b-2xl shadow-lg p-6">
          <div className="flex flex-col items-center text-center">
            {/* Agent Photo */}
            <div className="w-24 h-24 mb-4">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            {/* Agent Info */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {agent.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{agent.role}</p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {agent.address}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-4">
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 vie-green-pink-500 to-lime-400 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <Instagram className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 vie-green-pink-500 to-lime-400 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <Facebook className="w-5 h-5 text-white ml-1" />
                ``
              </button>
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 vie-green-pink-500 to-lime-400 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <Twitter className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 w-full my-4"></div>

            {/* Phone Number */}
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <Phone className="w-4 h-4" />
              <span>{agent.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details - Map */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 pb-0">
          <h3 className="text-lg font-bold text-gray-900 ">Property Details</h3>
        </div>

        {/* Map Image */}
        <div className="relative h-64 p-4 rounded-lg">
          <img
            src={map}
            alt="Map"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* View Button */}
        <div className="p-4 pt-3">
          <button className="w-full bg-gradient-to-b from-green-500 to-lime-400 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md">
            View in Full Screen
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Property Reviews
        </h3>

        <div className="space-y-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {/* Avatar */}
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>

              {/* Review Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="font-semibold text-gray-900 mb-1 truncate">
                  {review.name}
                </div>

                {/* Star Rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
