import React, { useState } from "react";
import { Search, ChevronDown, Menu } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { PiBuildingOffice } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

import logo from "../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const SubNavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? "bg-gradient-to-r from-green-400 to-lime-200 text-gray-800 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
};

const NavItem = ({
  icon: Icon,
  title,
  onClick,
  isOpen,
  isDrawerOpen,
  children,
}) => {
  const location = useLocation();
  const isActive = location.pathname.includes(
    title.toLowerCase().replace(" ", "")
  );

  return (
    <div className="mb-2">
      <button
        onClick={onClick}
        className={`w-full flex items-center ${
          isDrawerOpen ? "justify-between" : "justify-center"
        } p-2 ${
          isActive
            ? "bg-green-100 text-green-700"
            : "text-gray-900 hover:bg-gray-100"
        } font-medium rounded-lg transition-colors duration-200`}
        title={isDrawerOpen ? title : title}
      >
        <div className="flex items-center gap-3">
          <Icon size={isDrawerOpen ? 18 : 24} />
          {isDrawerOpen && <span>{title}</span>}
        </div>
        {isDrawerOpen && (
          <ChevronDown
            size={18}
            className={`transform transition-transform ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        )}
      </button>

      <div
        className={`
          ml-6 space-y-1 overflow-hidden transition-all duration-300
          ${isDrawerOpen && isOpen ? "max-h-96 mt-1" : "max-h-0"}
          ${isDrawerOpen ? "" : "hidden"} 
        `}
      >
        {children}
      </div>
    </div>
  );
};

const AdminLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const [openMenus, setOpenMenus] = useState({
    dashboard: true,
    agent: true,
    property: true,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="rounded-2xl w-10 h-10 flex items-center justify-center">
                <img className="rounded-2xl" src={logo} alt="Logo" />
              </div>
              <span className="text-xl font-bold">ZedProperty</span>
            </div>

            <div className=" max-w-md mx-8 hidden md:block rounded-2xl">
              <div className="relative">
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search Here"
                  className="w-full pl-10 bg-[#F3F3F5] pr-4 py-2 shadow-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 bg-[#F3F3F5] hover:bg-gray-100 rounded-[12px]">
              <AiOutlineMessage />
            </button>
            <button className="p-2 bg-[#F3F3F5]  hover:bg-gray-100 rounded-[12px]">
              <IoMdNotificationsOutline />
            </button>
          </div>
        </div>
      </header>

      <div className="flex relative bg-gray-50">
        <aside
          className={`
          bg-gray-100 border-r border-gray-200 min-h-screen p-2 
          transition-all duration-300 ease-in-out
          ${isDrawerOpen ? "w-64" : "w-20"} 
        `}
        >
          <nav
            className={`space-y-2 bg-white p-2 h-full rounded-md transition-opacity duration-300`}
          >
            {/* Dashboard Sub navigation */}
            <NavItem
              icon={MdDashboard}
              title="Dashboard"
              onClick={() => toggleMenu("dashboard")}
              isOpen={openMenus.dashboard}
              isDrawerOpen={isDrawerOpen}
            >
              <SubNavLink to="/">Dashboard</SubNavLink>
              <SubNavLink to="/admin/analytics">Analytics</SubNavLink>
              <SubNavLink to="/admin/review">Review</SubNavLink>
              <SubNavLink to="/admin/order-list">Order List</SubNavLink>
              <SubNavLink to="/admin/customer">Customer</SubNavLink>
            </NavItem>

            {/* Agent sub navigation */}
            <NavItem
              icon={PiUserCircleDuotone}
              title="Agent"
              onClick={() => toggleMenu("agent")}
              isOpen={openMenus.agent}
              isDrawerOpen={isDrawerOpen}
            >
              <SubNavLink to="/admin/add-agent">Add Agent</SubNavLink>
              <SubNavLink to="/admin/all-agents">All Agents</SubNavLink>
              <SubNavLink to="/admin/agent-profile">Agent Profile</SubNavLink>
            </NavItem>

            {/* Property sub navigation */}
            <NavItem
              icon={PiBuildingOffice}
              title="Property"
              onClick={() => toggleMenu("property")}
              isOpen={openMenus.property}
              isDrawerOpen={isDrawerOpen}
            >
              <SubNavLink to="/admin/add-property">
                Add Property
              </SubNavLink>
              <SubNavLink to="/admin/property-list">
                Property List
              </SubNavLink>
              <SubNavLink to="/admin/property-details">
                Property Details
              </SubNavLink>
            </NavItem>

            {/* Settings */}
            <NavItem
              icon={IoSettingsOutline}
              title="Settings"
              onClick={() => toggleMenu("settings")}
              isOpen={openMenus.settings}
              isDrawerOpen={isDrawerOpen}
            >
              <SubNavLink to="/settings">Settings</SubNavLink>
            </NavItem>
          </nav>
        </aside>

        <main className="flex-1 p-5 overflow-scroll h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
