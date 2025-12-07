import React from "react";

export default function Stats() {
  return (
    <div className="bg-gray-50 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left Side */}
        <div className="space-y-4 md:space-y-6">
          {/* Product Viewed Card */}
          <div className="bg-white rounded-2xl px-6 py-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-500 text-xs md:text-sm mb-2">
                  Product Viewed
                </p>
                <div className="flex items-baseline gap-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    561
                  </h2>
                  <span className="text-gray-500 text-xs md:text-sm">
                    /Days
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-3 md:mt-4">
                  <span className="text-green-500 text-xs md:text-sm font-medium">
                    20% increase
                  </span>
                </div>
              </div>

              {/* Circular Progress */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 ml-4">
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28"
                    stroke="#f0f0f0"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28"
                    stroke="#4ade80"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.2} ${
                      2 * Math.PI * 28
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-gray-400 text-xs md:text-sm">
                  Last month
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-green-500 font-semibold text-xs md:text-sm">
                    20%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Listed Card */}
          <div className="bg-white rounded-2xl px-6 py-8 md:py-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-500 text-xs md:text-sm mb-2">
                  Product Listed
                </p>
                <div className="flex items-baseline gap-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    3,456
                  </h2>
                  <span className="text-gray-500 text-xs md:text-sm">
                    /Unit
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-3 md:mt-4">
                  <span className="text-green-500 text-xs md:text-sm font-medium">
                    20% increase
                  </span>
                </div>
              </div>

              {/* Circular Progress */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 ml-4">
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28"
                    stroke="#f0f0f0"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28"
                    stroke="#4ade80"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.2} ${
                      2 * Math.PI * 28
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-gray-400 text-xs md:text-sm">
                  Last month
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-green-500 font-semibold text-xs md:text-sm">
                    20%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Bubble Chart */}
        <div className="bg-white rounded-2xl 2xl:px-6 pt-0 pb-4 shadow-sm">
          <div className="relative h-64 md:h-72 flex items-center justify-center">
            {/* Customers Bubble */}
            <div className="absolute left-[5%] top-[15%] ">
              <div className="border border-gray-50 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-green-500 flex flex-col items-center justify-center text-white shadow-lg">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  55
                </div>
                <div className="text-xs md:text-sm mt-1">Customers</div>
              </div>
            </div>

            {/* Views Bubble */}
            <div className="absolute right-[12%] top-[8%]">
              <div className="border border-gray-50 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-lime-400 flex flex-col items-center justify-center text-white shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  25
                </div>
                <div className="text-xs md:text-sm mt-1">VILE</div>
              </div>
            </div>

            {/* Agent Bubble */}
            <div className="absolute right-[20%] bottom-[20%] sm:bottom-[0%] ">
              <div className="border border-gray-50 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-amber-400 flex flex-col items-center justify-center text-white shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  20
                </div>
                <div className="text-xs md:text-sm mt-1">Agent</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 md:mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              <span className="text-xs md:text-sm text-gray-600">
                Customers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-lime-400"></div>
              <span className="text-xs md:text-sm text-gray-600">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400"></div>
              <span className="text-xs md:text-sm text-gray-600">Agent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
