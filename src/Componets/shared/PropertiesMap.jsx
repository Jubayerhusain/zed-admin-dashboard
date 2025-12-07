import React from "react";
import mapImage from "../../assets/dashboard-assests/map.png";
export default function PropertiesMap() {
  const locations = [
    { name: "Europe", units: 653 },
    { name: "Asia", units: 653 },
    { name: "Africa", units: 653 },
    { name: "Australia", units: 653 },
    { name: "America", units: 653 },
    { name: "USA", units: 653 },
  ];

  return (
    <div className="bg-gray-50 mt-8">
      <div className=" bg-white rounded-xl shadow-sm  p-6">
        <div className="w-12/12 flex flex-col md:flex-row gap-6">
          {/* Left Side */}
          <div className="w-12/12 md:w-5/12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Properties Map Location
            </h2>

            <div className="space-y-5 md:space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-200 to-lime-200"></div>
                      <span className="text-gray-700 text-sm md:text-base font-medium">
                        {location.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm md:text-base">
                      {location.units} Unit
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-lime-400 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side*/}
          <div className="relative h-auto w-12/12 md:w-7/12 bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={mapImage}
              alt="Map Location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
