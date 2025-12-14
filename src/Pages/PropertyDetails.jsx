import React from "react";
import SinglePropertyDetail from "../Componets/propertyDetails/SinglePropertyDetails";
import PropertySidebar from "../Componets/propertyDetails/PropertySidebar";

const PropertyDetails = () => {
  return (
    <div className=" bg-gray-100 min-h-screen p-4 ">
      <div>
        <div className="bg-white p-5 rounded-lg shadow">
          <p>
            Property / <span className="text-green-500">Property Details</span>
          </p>
          <p>Property / T35 Avenue GGlondon Center</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 sm:col-span-3 ">
            <PropertySidebar />
        </div>
        <div className="col-span-12 sm:col-span-9 ">
          <SinglePropertyDetail />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
