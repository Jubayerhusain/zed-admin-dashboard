import React, { useState } from 'react';
import { Users, Calendar, Info, Search, MoreVertical } from 'lucide-react';
import { RiMoreFill } from "react-icons/ri";

const AdminOrderList = () => {
  const [activeTab, setActiveTab] = useState('All Order');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const tabs = ['All Order', 'Pending', 'Approved', 'Negotiation', 'Rejected'];

  const allOrders = [
    {
      id: '#0001234',
      date: '26/4/2025',
      customer: 'James yun',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC356',
      agent: 'Kevin Jr',
      status: 'Pending'
    },
    {
      id: '#0001235',
      date: '26/4/2025',
      customer: 'James yun',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC356',
      agent: 'Kevin Jr',
      status: 'Approved'
    },
    {
      id: '#0001236',
      date: '26/4/2025',
      customer: 'James yun',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC356',
      agent: 'Kevin Jr',
      status: 'Negotiation'
    },
    {
      id: '#0001237',
      date: '26/4/2025',
      customer: 'James yun',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC356',
      agent: 'Kevin Jr',
      status: 'Approved'
    },
    {
      id: '#0001238',
      date: '26/4/2025',
      customer: 'James yun',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC356',
      agent: 'Kevin Jr',
      status: 'Rejected'
    },
    {
      id: '#0001239',
      date: '27/4/2025',
      customer: 'Sarah Smith',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$621k',
      type: 'ABC357',
      agent: 'Kevin Jr',
      status: 'Pending'
    },
    {
      id: '#0001240',
      date: '27/4/2025',
      customer: 'Mike Johnson',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$721k',
      type: 'ABC358',
      agent: 'Kevin Jr',
      status: 'Approved'
    },
    {
      id: '#0001241',
      date: '27/4/2025',
      customer: 'Emily Davis',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC359',
      agent: 'Kevin Jr',
      status: 'Negotiation'
    },
    {
      id: '#0001242',
      date: '28/4/2025',
      customer: 'John Wilson',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$421k',
      type: 'ABC360',
      agent: 'Kevin Jr',
      status: 'Rejected'
    },
    {
      id: '#0001243',
      date: '28/4/2025',
      customer: 'Lisa Anderson',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$821k',
      type: 'ABC361',
      agent: 'Kevin Jr',
      status: 'Approved'
    },
    {
      id: '#0001244',
      date: '28/4/2025',
      customer: 'David Brown',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$521k',
      type: 'ABC362',
      agent: 'Kevin Jr',
      status: 'Pending'
    },
    {
      id: '#0001245',
      date: '29/4/2025',
      customer: 'Emma White',
      property: 'T35 Avenue GGlondon Center',
      location: 'Flat 2345 Center London 27803',
      price: '$921k',
      type: 'ABC363',
      agent: 'Kevin Jr',
      status: 'Approved'
    }
  ];

  const totalPages = Math.ceil(allOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const orders = allOrders.slice(indexOfFirstItem, indexOfLastItem);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'text-yellow-600';
      case 'Approved':
        return 'text-green-600';
      case 'Negotiation':
        return 'text-blue-600';
      case 'Rejected':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <div className="text-gray-600 text-sm mb-4 bg-white p-5 rounded shadow-sm">
          Review / <span className="text-green-600">Order List</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-6 flex items-center justify-between shadow-sm">
            <div>
              <div className="text-3xl font-bold text-gray-800">245</div>
              <div className="text-gray-600 text-sm">Total Customers</div>
            </div>
            <div className="bg-gradient-to-b from-green-400 to-lime-300 rounded-lg p-3">
              <Users className="text-white" size={24} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-between shadow-sm">
            <div>
              <div className="text-3xl font-bold text-gray-800">245</div>
              <div className="text-gray-600 text-sm">Total Transaction</div>
            </div>
            <div className="bg-gradient-to-b from-green-400 to-lime-300 rounded-lg p-3">
              <Calendar className="text-white" size={24} />
            </div>
          </div>

          <div className="bg-gradient-to-t from-green-500 to-lime-400 rounded-lg p-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-lg p-2">
                <Info className="text-white" size={24} />
              </div>
              <div>
                <div className="text-white font-bold text-xl">INFORMATION</div>
                <div className="text-white/90 text-sm">Total Transaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tabs */}
        <div className="flex items-center justify-between border-b">
          <div className="flex gap-4 p-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Agent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.property}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.agent}</td>
                  <td className={`px-6 py-4 text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </td>
                  <td className="px-6 py-4 text-sm relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <RiMoreFill className='text-xl font-bold' />
                    </button>
                    
                    {openDropdown === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                        <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b">
                          Accept order
                        </button>
                        <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b">
                          Reject order
                        </button>
                        <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                          View Details
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 p-4 border-t">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm rounded ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            ← Previous
          </button>
          
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 text-sm rounded ${
                currentPage === pageNumber
                  ? 'bg-gradient-to-b from-green-500 to-lime-400 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {pageNumber}
            </button>
          ))}
          
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm rounded ${
              currentPage === totalPages 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderList;