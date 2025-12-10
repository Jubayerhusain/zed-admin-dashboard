import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RiMoreFill } from "react-icons/ri";

const AdminCustomer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const itemsPerPage = 6;

  const allCustomers = [
    {
      id: "#C01234",
      name: "Patilson Parkur",
      image: "https://i.pravatar.cc/150?img=12",
      date: "22/04/2025",
      time: "12:42 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01234",
      name: "Emilia Sigh",
      image: "https://i.pravatar.cc/150?img=47",
      date: "22/04/2025",
      time: "12:42 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01234",
      name: "Patilson Parkur",
      image: "https://i.pravatar.cc/150?img=33",
      date: "22/04/2025",
      time: "12:42 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01234",
      name: "Patilson Parkur",
      image: "https://i.pravatar.cc/150?img=11",
      date: "22/04/2025",
      time: "12:42 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01234",
      name: "Emilia Sigh",
      image: "https://i.pravatar.cc/150?img=45",
      date: "22/04/2025",
      time: "12:42 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01234",
      name: "Emilia Sigh",
      image: "https://i.pravatar.cc/150?img=44",
      date: "22/04/2025",
      time: "12:42 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01235",
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=13",
      date: "23/04/2025",
      time: "10:30 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01236",
      name: "Sarah Wilson",
      image: "https://i.pravatar.cc/150?img=48",
      date: "23/04/2025",
      time: "11:15 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
    {
      id: "#C01237",
      name: "Mike Johnson",
      image: "https://i.pravatar.cc/150?img=14",
      date: "24/04/2025",
      time: "09:20 AM",
      location: "Flat 2345 Center London 27803",
      phone: "+51 1234 5678",
      email: "info@zedproperty.com",
    },
  ];

  const totalPages = Math.ceil(allCustomers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const customers = allCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages;
  };

  const handleEdit = (customer) => {
    console.log("Edit customer:", customer);
    setOpenDropdown(null);
  };

  const handleDelete = (customer) => {
    console.log("Delete customer:", customer);
    setOpenDropdown(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="mb-4 md:mb-6">
        <div className="text-xs sm:text-sm text-gray-600 bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow">
          Review / <span className="text-green-600">Customer</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-200">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 md:p-6 hover:bg-gray-50 transition-colors"
            >
              {/* Desktop and Tablet */}
              <div className="hidden lg:flex items-start justify-between">
                {/* Profile */}
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="text-gray-500 text-xs sm:text-sm mb-1">
                      {customer.id}
                    </div>
                    <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">
                      {customer.name}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm">
                      {customer.date}{" "}
                      <span className="font-semibold text-gray-900">
                        {customer.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex gap-8 xl:gap-16">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-700 mb-2">
                      Location
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 truncate max-w-[200px]">
                      {customer.location}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-700 mb-2">
                      Phone Number
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {customer.phone}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-700 mb-2">
                      Email Address
                    </div>
                    <div className="text-xs md:text-sm text-blue-600 truncate max-w-[180px]">
                      {customer.email}
                    </div>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button className="px-4 md:px-6 py-2 bg-white border-2 border-green-400 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2 font-medium text-xs md:text-sm whitespace-nowrap">
                    Show Order History
                    <ChevronDown size={16} />
                  </button>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <RiMoreFill className="text-gray-800 font-semibold text-xl" />
                    </button>

                    {openDropdown === index && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setOpenDropdown(null)}
                        />
                        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
                          <button
                            onClick={() => handleEdit(customer)}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(customer)}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile and Tablet */}
              <div className="lg:hidden space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <div className="text-gray-500 text-xs mb-1">
                        {customer.id}
                      </div>
                      <div className="font-semibold text-sm text-gray-900 mb-1">
                        {customer.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {customer.date}{" "}
                        <span className="font-semibold text-gray-900">
                          {customer.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <RiMoreFill className="text-gray-800 font-semibold text-xl" />
                    </button>

                    {openDropdown === index && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setOpenDropdown(null)}
                        />
                        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
                          <button
                            onClick={() => handleEdit(customer)}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(customer)}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs font-semibold text-gray-700 mb-1">
                      Location
                    </div>
                    <div className="text-xs text-gray-600">
                      {customer.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-700 mb-1">
                      Phone Number
                    </div>
                    <div className="text-xs text-gray-600">
                      {customer.phone}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-xs font-semibold text-gray-700 mb-1">
                      Email Address
                    </div>
                    <div className="text-xs text-blue-600 break-all">
                      {customer.email}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full px-4 py-2.5 bg-white border-2 border-green-400 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2 font-medium text-sm">
                  Show Order History
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-end gap-3 p-3 sm:p-4 border-t">
          <div className="text-xs text-gray-600 sm:hidden">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="hidden sm:inline">← Previous</span>
              <span className="sm:hidden">←</span>
            </button>

            {getPageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded ${
                  currentPage === pageNumber
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="hidden sm:inline">Next →</span>
              <span className="sm:hidden">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomer;
