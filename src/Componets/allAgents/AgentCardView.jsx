import React from "react";
import { ChevronRight } from "lucide-react";
import AgentCard from "./AgentCard";

const AgentCardView = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 9;

  const allAgents = Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    name: "Annette Black",
    title: "Dog Trainer",
    description: "Titles that Echo: Leaving a Lasting Impression on Readers",
    email: "manhhachkt08@gmail.com",
    phone: "843.555.0130",
    location: "Portland, Illinois",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  }));

  const totalPages = Math.ceil(allAgents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAgents = allAgents.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 sm:p-4">
      <div className="">
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-4 mb-6 bg-white p-4 sm:p-6 rounded-lg shadow">
            <span className="font-medium text-gray-900">Property</span>
            <span className="mx-2">/</span>
            <span className="text-green-600">All agents listing</span>
          </div>
        </div>

        <div className="bg-white p-3 sm:p-5 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 mt-3">Agent Card View</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {currentAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, allAgents.length)}{" "}
              of {allAgents.length} agents
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-l from-green-400  to-lime-300 text-white hover:bg-green-700"
                }`}
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Previous
              </button>
              <div className="flex items-center gap-2 px-3">
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-400  to-lime-300 text-white hover:bg-green-700"
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCardView;
