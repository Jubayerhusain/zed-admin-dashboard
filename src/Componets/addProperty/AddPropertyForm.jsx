import React, { useState } from "react";

export default function AddPropertyForm() {
  const [formData, setFormData] = useState({
    propertyType: "",
    propertyStatus: "For Rent",
    propertyPrice: "28000",
    maxRooms: "1",
    beds: "1",
    baths: "1",
    area: "2000",
    price: "30000",
    premiere: "Premiere",
    description: "",
    address: "",
    zipCode: "12345",
    videoLink: "",
    features: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Property added successfully!");
  };

  const features = [
    "Emergency Exit",
    "CCTV",
    "Free Wi-Fi",
    "Free Parking Area",
    "Air Conditioning",
    "Security Ground",
    "Terrace",
    "Laundry Service",
    "Elevator Lift",
    "Balcony",
  ];

  return (
    <div className="">
      <div className="  rounded-lg shadow-sm transition-all duration-300">
        <div className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm bg-white p-5 rounded-md shadow">
          <span className="text-gray-600">Property</span>
          <span className="text-gray-400">/</span>
          <span className="text-green-600">Add Property</span>
        </div>

        <div className="mb-4 sm:mb-6 text-xs sm:text-sm bg-white p-5 rounded-md shadow">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
            Add Property
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Property Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="propertyType"
                  placeholder="Office, Villa, Apartment"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Property Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="propertyStatus"
                  value={formData.propertyStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>

              <div className="w-full sm:col-span-2 lg:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Property Price <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 sm:px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    name="propertyPrice"
                    value={formData.propertyPrice}
                    onChange={handleInputChange}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <select className="px-2 sm:px-3 text-sm sm:text-base border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-700 outline-none">
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Max Rooms <span className="text-red-500">*</span>
                </label>
                <select
                  name="maxRooms"
                  value={formData.maxRooms}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Beds <span className="text-red-500">*</span>
                </label>
                <select
                  name="beds"
                  value={formData.beds}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              <div className="w-full sm:col-span-2 lg:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Baths <span className="text-red-500">*</span>
                </label>
                <select
                  name="baths"
                  value={formData.baths}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="2000 sqft"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="w-full">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 sm:px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <select className="px-2 sm:px-3 text-sm sm:text-base border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-700 outline-none">
                    <option>USD</option>
                  </select>
                </div>
              </div>

              <div className="w-full sm:col-span-2 lg:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Premiere
                </label>
                <select
                  name="premiere"
                  value={formData.premiere}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option>Premiere</option>
                  <option>Standard</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Write here"
                value={formData.description}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address of your property"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="12345"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Media <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 md:p-12 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 transition-transform duration-300 hover:scale-110">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Drop files here or click to upload.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Video Link (MP4) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="videoLink"
                placeholder="Video Link (MP4)"
                value={formData.videoLink}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-3">
                Additional features
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {features.map((feature) => (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => handleFeatureToggle(feature)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border text-xs sm:text-sm transition-all duration-200 transform hover:scale-105 ${
                      formData.features.includes(feature)
                        ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                        : "bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-sm"
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base rounded-md hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
              >
                Submit
              </button>
              <button
                type="button"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-700 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
