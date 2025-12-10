import React, { useState } from "react";
import AccountInfo from "./AccountInfo";
import LoginDetails from "./LoginDetails";
import UploadFiles from "./UploadFiles";

const AddAgent = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    <>
      <div className="flex relative bg-gray-200">
        {/* Main Content */}
        <main className="flex-1 p-5 bg-gray-200">
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
              <div className="flex items-center justify-between mb-12 w-full border-y border-[#171C191A] py-6">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                          step.active
                            ? "bg-gradient-to-b from-green-400 to-lime-300 text-white"
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
              <div className="w-full">
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
    </>
  );
};

export default AddAgent;
