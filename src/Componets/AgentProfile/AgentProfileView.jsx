import React from "react";
import AgentProfileCard from "./AgentProfileCard";
import AgentDetails from "./AgentDetails";
import CircularProgress from "./CircularProgress";
import PropertyCard from "./PropertyCard";

const AgentProfileView = () => {
  const properties = [
    {
      id: 1,
      title: "Division Road house",
      address: "506 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      sqft: 200,
      agent: "Emilia Sigh",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Division Road house",
      address: "506 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      sqft: 200,
      agent: "Emilia Sigh",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Division Road house",
      address: "506 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      sqft: 200,
      agent: "Emilia Sigh",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
        {
      id: 4,
      title: "Division Road house",
      address: "506 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      sqft: 200,
      agent: "Emilia Sigh",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Division Road house",
      address: "506 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      sqft: 200,
      agent: "Emilia Sigh",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Division Road house",
      address: "506 Division Road Pembroke Pines,",
      price: 250000,
      beds: 1,
      sqft: 200,
      agent: "Emilia Sigh",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg">
      <div className="">
        <div className="text-sm text-gray-600 mb-6  bg-white shadow-sm rounded-xl p-5">
          <span className="font-medium text-gray-900">Property</span>
          <span className="mx-2">/</span>
          <span className="text-green-600">All agents listing</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <AgentProfileCard />
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Agent Card View
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have. Nostrud tem exrotation duis labors nisi ut
              aliquid sed duis aute cupidata. There are many variations of
              passages of Lorem Ipsum available, but the majority have.
            </p>

            <AgentDetails />

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Property Status
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2,356</p>
                    <p className="text-gray-600 font-medium mt-1">For Sale</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Target 3%/month
                    </p>
                  </div>
                  <CircularProgress percentage={84} label="For Sale" />
                </div>

                <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2,854</p>
                    <p className="text-gray-600 font-medium mt-1">For Rent</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Target 3%/month
                    </p>
                  </div>
                  <CircularProgress percentage={67} label="For Rent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentProfileView;
