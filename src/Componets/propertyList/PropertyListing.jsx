import React, { useState, useMemo } from "react";
import {
  Search,
  Bed,
  Bath,
  Maximize2,
  Share2,
  ChevronDown,
} from "lucide-react";

export default function PropertyListing() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    category: "",
    priceMin: 5000,
    priceMax: 50000,
    areaMin: 1000,
    areaMax: 3000,
    sortBy: "default",
  });

  const allProperties = [
    {
      id: 1,
      title: "Division Road house",
      address: "304 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      bathrooms: 1,
      area: 200,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Pembroke Pines",
      type: "House",
    },
    {
      id: 2,
      title: "Division Road house",
      address: "304 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      bathrooms: 1,
      area: 200,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Pembroke Pines",
      type: "House",
    },
    {
      id: 3,
      title: "Division Road house",
      address: "304 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      bathrooms: 1,
      area: 200,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Pembroke Pines",
      type: "Villa",
    },
    {
      id: 4,
      title: "Division Road house",
      address: "304 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      bathrooms: 1,
      area: 200,
      image:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Miami",
      type: "Apartment",
    },
    {
      id: 5,
      title: "Division Road house",
      address: "304 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      bathrooms: 1,
      area: 200,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Orlando",
      type: "House",
    },
    {
      id: 6,
      title: "Division Road house",
      address: "304 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      bathrooms: 1,
      area: 200,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Tampa",
      type: "Villa",
    },
    {
      id: 7,
      title: "Luxury Beachfront Villa",
      address: "125 Ocean Drive Miami Beach,",
      price: 450000,
      beds: 3,
      bathrooms: 2,
      area: 350,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Miami Beach",
      type: "Villa",
    },
    {
      id: 8,
      title: "Modern Downtown Apartment",
      address: "890 Central Avenue Orlando,",
      price: 180000,
      beds: 2,
      bathrooms: 1,
      area: 150,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Orlando",
      type: "Apartment",
    },
    {
      id: 9,
      title: "Suburban Family Home",
      address: "456 Maple Street Tampa,",
      price: 320000,
      beds: 4,
      bathrooms: 3,
      area: 280,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Tampa",
      type: "House",
    },
    {
      id: 10,
      title: "Cozy Studio Apartment",
      address: "78 Park Lane Fort Lauderdale,",
      price: 120000,
      beds: 1,
      bathrooms: 1,
      area: 80,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Fort Lauderdale",
      type: "Apartment",
    },
    {
      id: 11,
      title: "Elegant Colonial House",
      address: "234 Heritage Road Jacksonville,",
      price: 380000,
      beds: 5,
      bathrooms: 4,
      area: 400,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Jacksonville",
      type: "House",
    },
    {
      id: 12,
      title: "Penthouse with City View",
      address: "1200 Skyline Boulevard Miami,",
      price: 580000,
      beds: 3,
      bathrooms: 3,
      area: 300,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      location: "Miami",
      type: "Apartment",
    },
    {
      id: 13,
      title: "Charming Cottage",
      address: "67 Countryside Lane Sarasota,",
      price: 210000,
      beds: 2,
      bathrooms: 2,
      area: 180,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      agent: "Emilia Sigh",
      agentPhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      status: "For sale",
      location: "Sarasota",
      type: "House",
    },
  ];

  // Filter and search logic
  const filteredProperties = useMemo(() => {
    let result = [...allProperties];

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Location filter
    if (filters.location) {
      result = result.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Property type filter
    if (filters.propertyType) {
      result = result.filter(
        (property) =>
          property.type.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }

    // Price range filter - only apply if different from defaults
    if (filters.priceMin !== 5000 || filters.priceMax !== 50000) {
      result = result.filter(
        (property) =>
          property.price >= filters.priceMin &&
          property.price <= filters.priceMax
      );
    }

    // Area range filter - only apply if different from defaults
    if (filters.areaMin !== 1000 || filters.areaMax !== 3000) {
      result = result.filter(
        (property) =>
          property.area >= filters.areaMin && property.area <= filters.areaMax
      );
    }

    // Sort
    if (filters.sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "area-low") {
      result.sort((a, b) => a.area - b.area);
    } else if (filters.sortBy === "area-high") {
      result.sort((a, b) => b.area - a.area);
    }

    return result;
  }, [searchTerm, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      category: "",
      priceMin: 5000,
      priceMax: 50000,
      areaMin: 1000,
      areaMax: 3000,
      sortBy: "default",
    });
    setSearchTerm("");
    setShowAll(false);
  };

  // Display properties show 6 by default,
  const displayedProperties = showAll
    ? filteredProperties
    : filteredProperties.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b rounded-lg m-4">
        <div className=" px-3 p-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm mb-3 sm:mb-4">
            <span className="text-gray-600">Property</span>
            <span className="text-gray-400">/</span>
            <span className="text-green-600 font-medium">Property List</span>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ml-auto ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Filters Section */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showFilters ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 border-t">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 items-center">
              {/* Keyword Search */}
              <input
                type="text"
                placeholder="Enter keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base transition-all duration-200"
              />

              {/* Location */}
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base transition-all duration-200 bg-white"
              >
                <option value="">Selection Location</option>
                <option value="Pembroke Pines">Pembroke Pines</option>
                <option value="Miami">Miami</option>
                <option value="Miami Beach">Miami Beach</option>
                <option value="Orlando">Orlando</option>
                <option value="Tampa">Tampa</option>
                <option value="Fort Lauderdale">Fort Lauderdale</option>
                <option value="Jacksonville">Jacksonville</option>
                <option value="Sarasota">Sarasota</option>
              </select>

              {/* Property Type */}
              <select
                value={filters.propertyType}
                onChange={(e) =>
                  handleFilterChange("propertyType", e.target.value)
                }
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base transition-all duration-200 bg-white"
              >
                <option value="">Property Type</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
              </select>

              {/* Category */}
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base transition-all duration-200 bg-white"
              >
                <option value="">Select Category</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>

            {/* Price Range & Area Range */}
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Price Range
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={filters.priceMin}
                    onChange={(e) =>
                      handleFilterChange("priceMin", parseInt(e.target.value))
                    }
                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none z-10"
                    style={{
                      background: "transparent",
                      WebkitAppearance: "none",
                    }}
                  />
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={filters.priceMax}
                    onChange={(e) =>
                      handleFilterChange("priceMax", parseInt(e.target.value))
                    }
                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none z-10"
                    style={{
                      background: "transparent",
                      WebkitAppearance: "none",
                    }}
                  />
                  <div className="relative h-1 bg-gray-300 rounded-full">
                    <div
                      className="absolute h-1 bg-green-500 rounded-full"
                      style={{
                        left: `${
                          ((filters.priceMin - 5000) / (50000 - 5000)) * 100
                        }%`,
                        right: `${
                          100 -
                          ((filters.priceMax - 5000) / (50000 - 5000)) * 100
                        }%`,
                      }}
                    />
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-green-500 rounded-full -top-1.5 shadow-md cursor-pointer"
                      style={{
                        left: `${
                          ((filters.priceMin - 5000) / (50000 - 5000)) * 100
                        }%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-green-500 rounded-full -top-1.5 shadow-md cursor-pointer"
                      style={{
                        left: `${
                          ((filters.priceMax - 5000) / (50000 - 5000)) * 100
                        }%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mt-3 font-medium">
                  <span>${filters.priceMin.toLocaleString()}</span>
                  <span>${filters.priceMax.toLocaleString()}</span>
                </div>
              </div>

              {/* Area Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Area Range
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1000"
                    max="3000"
                    step="100"
                    value={filters.areaMin}
                    onChange={(e) =>
                      handleFilterChange("areaMin", parseInt(e.target.value))
                    }
                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none z-10"
                    style={{
                      background: "transparent",
                      WebkitAppearance: "none",
                    }}
                  />
                  <input
                    type="range"
                    min="1000"
                    max="3000"
                    step="100"
                    value={filters.areaMax}
                    onChange={(e) =>
                      handleFilterChange("areaMax", parseInt(e.target.value))
                    }
                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none z-10"
                    style={{
                      background: "transparent",
                      WebkitAppearance: "none",
                    }}
                  />
                  <div className="relative h-1 bg-gray-300 rounded-full">
                    <div
                      className="absolute h-1 bg-green-500 rounded-full"
                      style={{
                        left: `${
                          ((filters.areaMin - 1000) / (3000 - 1000)) * 100
                        }%`,
                        right: `${
                          100 - ((filters.areaMax - 1000) / (3000 - 1000)) * 100
                        }%`,
                      }}
                    />
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-green-500 rounded-full -top-1.5 shadow-md cursor-pointer"
                      style={{
                        left: `${
                          ((filters.areaMin - 1000) / (3000 - 1000)) * 100
                        }%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-green-500 rounded-full -top-1.5 shadow-md cursor-pointer"
                      style={{
                        left: `${
                          ((filters.areaMax - 1000) / (3000 - 1000)) * 100
                        }%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mt-3 font-medium">
                  <span>{filters.areaMin} Sqft</span>
                  <span>{filters.areaMax} Sqft</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="">
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base transition-all duration-200 bg-white"
                  />
                </div>
              </div>
            </div>

            <style jsx>{`
              input[type="range"] {
                pointer-events: all;
              }
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 16px;
                height: 16px;
                background: transparent;
                cursor: pointer;
                border-radius: 50%;
              }
              input[type="range"]::-moz-range-thumb {
                width: 16px;
                height: 16px;
                background: transparent;
                cursor: pointer;
                border: none;
                border-radius: 50%;
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Results Header */}
        <div className="bg-white p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <p className="text-sm sm:text-base text-gray-700">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {showAll
                ? filteredProperties.length
                : Math.min(6, filteredProperties.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">
              {filteredProperties.length}
            </span>{" "}
            Results
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
              Sort by:
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
              className="flex-1 sm:flex-none px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white transition-all duration-200"
            >
              <option value="default">Default</option>
              <option value="price-low">Low to High</option>
              <option value="price-high">High to Low</option>
              <option value="area-low">Small to Large</option>
              <option value="area-high">Large to Small</option>
            </select>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg text-gray-500 mb-4">
              No properties found matching your criteria
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 text-sm sm:text-base"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {displayedProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Property Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-t from-green-500 to-lime-400 py-2 px-3 text-white rounded text-md font-medium">
                        {property.status}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors">
                        <svg
                          className="w-4 h-4 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors">
                        <svg
                          className="w-4 h-4 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {property.address}
                    </p>
                    <p className="text-xl font-bold text-gray-900 mb-4">
                      ${property.price.toLocaleString()}
                    </p>

                    {/* Property Features */}
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {property.beds} beds
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {property.bathrooms} Bathrooms
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {property.area} sqft
                        </span>
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center">
                          <img className="rounded-full w-full h-full object-cover" src={property.agentPhoto} alt="" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {property.agent}
                        </span>
                      </div>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More / Show Less Button */}
            {filteredProperties.length > 6 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-lime-400 text-white rounded-lg hover:bg-green-600 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  {showAll
                    ? "Show Less"
                    : `Load More (${filteredProperties.length - 6} more)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
