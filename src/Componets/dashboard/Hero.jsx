import React from "react";
import heroImage from "../../assets/dashboard-assests/d-hero.png";

const DashboardHero = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video lg:h-[300px] bg-gray-100">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>


        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(144, 238, 144, 0.7), rgba(144, 238, 144, 0) 70%)",
          }}
        ></div>

        <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-10 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Dashboard
          </h1>
          <p className="text-lg sm:text-xl font-medium">
            Welcome to Omah Property Admin
          </p>
        </div>

        <div
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 
                      p-4 md:p-6 rounded-xl shadow-2xl backdrop-blur-sm 
                      bg-gradient-to-br from-green-400 to-lime-300 w-44 sm:w-72"
        >
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
            Total Properties
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            4,562
          </p>
          <p className="text-sm text-gray-700">
            431 more to break last month record
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
