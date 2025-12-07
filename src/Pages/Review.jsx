import React, { useState } from "react";
import Pagination from "../Componets/review/Pagination";
import ReviewItem from "../Componets/review/ReviewItem";

const reviewsData = [
  {
    id: 1,
    reviewId: "#C01234",
    name: "Emilia Sigh",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "22/04/2025",
    time: "12:42 AM",
    rating: 4.95,
    status: "Excellent",
    review:
      "Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.",
    published: true,
  },
  {
    id: 2,
    reviewId: "#C01234",
    name: "Patilson Parkur",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "22/04/2025",
    time: "12:42 AM",
    rating: 4.95,
    status: "Excellent",
    review:
      "Dealing with Syamsudin and Bakri was a joy. I got in touch with Just Property after seeing a couple of properties that caught my eye. Both Syamsudin and Bakri strive to deliver a professional service and surpassed my expectations - they were not only help.",
    published: true,
  },
  {
    id: 3,
    reviewId: "#C01234",
    name: "Patilson Parkur",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    date: "22/04/2025",
    time: "12:42 AM",
    rating: 4.95,
    status: "Excellent",
    review:
      "Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.",
    published: true,
  },
  {
    id: 4,
    reviewId: "#C01234",
    name: "Emilia Sigh",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "22/04/2025",
    time: "12:42 AM",
    rating: 4.95,
    status: "Excellent",
    review:
      "Dealing with Syamsudin and Bakri was a joy. I got in touch with Just Property after seeing a couple of properties that caught my eye. Both Syamsudin and Bakri strive to deliver a professional service and surpassed my expectations - they were not only help.",
    published: true,
  },
  {
    id: 5,
    reviewId: "#C01234",
    name: "Emilia Sigh",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    date: "22/04/2025",
    time: "12:42 AM",
    rating: 4.95,
    status: "Excellent",
    review:
      "Dealing with Syamsudin and Bakri was a joy. I got in touch with Just Property after seeing a couple of properties that caught my eye. Both Syamsudin and Bakri strive to deliver a professional service and surpassed my expectations - they were not only help.",
    published: false,
  },
  {
    id: 6,
    reviewId: "#C01234",
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "22/04/2025",
    time: "12:42 AM",
    rating: 4.95,
    status: "Excellent",
    review: "Amazing experience with the property team. Highly recommended!",
    published: false,
  },
];


export default function Review() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredReviews = reviewsData.filter((review) => {
    if (activeTab === "all") return true;
    if (activeTab === "published") return review.published;
    if (activeTab === "deleted") return !review.published;
    return true;
  });

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReviews = filteredReviews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleApprove = (id) => {
    console.log("Approve review:", id);
  };

  const handleReject = (id) => {
    console.log("Reject review:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete review:", id);
  };

  const handleRestore = (id) => {
    console.log("Restore review:", id);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 bg-white px-6 py-4 rounded-lg shadow-sm">
          <span className="text-gray-600">Review</span>
          <span className="text-gray-400">/</span>
          <span className="text-green-500 font-medium">All Review</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => handleTabChange("all")}
            className={`px-3 sm:px-6 py-1 sm:py-2 rounded-lg font-medium transition-colors ${
              activeTab === "all"
                ? "bg-gradient-to-r from-green-400 to-lime-200 text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => handleTabChange("published")}
            className={`px-3 sm:px-6 py-1 sm:py-2 rounded-lg font-medium transition-colors ${
              activeTab === "published"
                ? "bg-gradient-to-r from-green-400 to-lime-200 text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Published
          </button>
          <button
            onClick={() => handleTabChange("deleted")}
            className={`px-3 sm:px-6 py-1 sm:py-2 rounded-lg font-medium transition-colors ${
              activeTab === "deleted"
                ? "bg-gradient-to-r from-green-400 to-lime-200 text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Deleted
          </button>
        </div>

        {/* Reviews List */}
        <div>
          {paginatedReviews.map((review) => (
            <ReviewItem
              key={review.id}
              review={review}
              onApprove={handleApprove}
              onReject={handleReject}
              onDelete={handleDelete}
              onRestore={handleRestore}
              activeTab={activeTab}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
