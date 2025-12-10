import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  Gift,
  Bell,
  Grid,
  Users,
  Building,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import AccountInfo from "../Componets/agent/AccountInfo";
import LoginDetails from "../Componets/agent/LoginDetails";
import UploadFiles from "../Componets/agent/UploadFiles";
import logo from "../assets/logo.png";

const Dashboard11 = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    dashboard: false,
    agent: false,
    property: false,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    maxRooms: "2",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
    address: "",
    zipCode: "",
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

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  const steps = [
    {
      number: 1,
      title: "Get started",
      subtitle: "Account information",
      active: currentStep === 1,
      completed: currentStep > 1,
    },
    {
      number: 2,
      title: "Login details",
      subtitle: "Set your email",
      active: currentStep === 2,
      completed: currentStep > 2,
    },
    {
      number: 3,
      title: "Upload files",
      subtitle: "Successfully submitted",
      active: currentStep === 3,
      completed: false,
    },
  ];

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
                {/* <Grid className="text-white" size={20} /> */}
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
                  className="w-full pl-10 bg-[#F3F3F5] pr-4 py-2 shadow-sm rounded-3xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 bg-[#F3F3F5] hover:bg-gray-100 rounded-[12px]">
              <MessageSquare size={20} />
            </button>
            <button className="p-2 bg-[#F3F3F5] hover:bg-gray-100 rounded-[12px]">
              <Gift size={20} />
            </button>
            <button className="p-2 bg-[#F3F3F5]  hover:bg-gray-100 rounded-[12px]">
              <Bell size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex relative bg-gray-50">
        {/* Sidebar Drawer */}
        <aside
          className={`
          bg-gray-100 p-2 border-r border-gray-200 min-h-screen p-4
          transition-all duration-300 ease-in-out
          ${isDrawerOpen ? "w-64" : "w-0 p-0 overflow-hidden"}
        `}
        >
          <nav
            className={`space-y-2 bg-white p-4 rounded-md ${
              isDrawerOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            {/* Dashboard Sub navigation */}
            <div className="mb-4">
              <button
                onClick={() => toggleMenu("dashboard")}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Grid size={18} />
                  <span>Dashboard</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    openMenus.dashboard ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`
                ml-6 space-y-1 overflow-hidden transition-all duration-300
                ${openMenus.dashboard ? "max-h-48 mt-1" : "max-h-0"}
              `}
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Review
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Order List
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Customer
                </a>
              </div>
            </div>

            {/* Agent sub navigation section */}
            <div className="mb-4">
              <button
                onClick={() => toggleMenu("agent")}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Users size={18} />
                  <span>Agent</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    openMenus.agent ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`
                ml-6 space-y-1 overflow-hidden transition-all duration-300
                ${openMenus.agent ? "max-h-48 mt-1" : "max-h-0"}
              `}
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Review
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Order List
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Customer
                </a>
              </div>
            </div>

            {/* Property sub navigation Section */}
            <div>
              <button
                onClick={() => toggleMenu("property")}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Building size={18} />
                  <span>Property</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    openMenus.property ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`
                ml-6 space-y-1 overflow-hidden transition-all duration-300
                ${openMenus.property ? "max-h-48 mt-1" : "max-h-0"}
              `}
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Review
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Order List
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Customer
                </a>
              </div>
            </div>
          </nav>
        </aside>


          {/* ei khane outlet use korbo  */}


        {/* Main Content */}
        <main className="flex-1 p-5 bg-white">
          <div className="bg-gray-200 rounded-xl p-5">
            <div className="mb-6 bg-white p-6 rounded-[8px]  flex items-center gap-2 text-[16px] font-semibold text-gray-600">
              <span>Agents</span>
              <span>/</span>
              <span className="text-green-500">Add Agent</span>
            </div>

            {/*Container */}
            <div className="bg-white rounded-[8px] shadow-sm p-8">
              <h1 className="text-[24px] font-bold mb-8">
                {currentStep === 1 ? "Add Agent Wizard" : "Add Agent"}
              </h1>

              {/* Steps sections */}
              <div className="flex items-center justify-between mb-12 max-w-4xl border-y border-[#171C191A] py-6">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                          step.active
                            ? "bg-green-500 text-white"
                            : step.completed
                            ? "bg-gray-200 text-gray-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step.number}
                      </div>
                      <div>
                        <div
                          className={`font-medium ${
                            step.active ? "text-green-500" : "text-gray-600"
                          }`}
                        >
                          {step.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step Content */}
              <div className="max-w-4xl">
                {currentStep === 1 && (
                  <AccountInfo
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                  />
                )}
                {currentStep === 2 && (
                  <LoginDetails
                    formData={formData}
                    setFormData={setFormData}
                    onNext={handleNext}
                    onPrev={handlePrev}
                  />
                )}
                {currentStep === 3 && (
                  <UploadFiles onPrev={handlePrev} onSubmit={handleSubmit} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard11;
