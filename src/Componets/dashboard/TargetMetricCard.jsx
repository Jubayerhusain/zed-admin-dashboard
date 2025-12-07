import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { PiBuildings } from "react-icons/pi";
import { PiBuildingApartmentDuotone } from "react-icons/pi";

const TargetMetricCard = ({
  title,
  target,
  value,
  percentage,
  // icon prop-কে রিসিভ করে এটিকে Icon হিসেবে নাম দেওয়া হলো
  icon: Icon, 
  colorClass,
  barColorClass,
  borderColorClass,
}) => {
  return (
    <div
      className={`
        w-full p-5 sm:p-10 rounded-xl shadow-md 
        ${colorClass} transition duration-300 ease-in-out
        border-b-4 ${borderColorClass} 
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 text-gray-800">
          {/* এখানে Icon কম্পোনেন্টটি রেন্ডার করা হলো */}
          <Icon size={20} className="text-gray-600" />
          <span className="font-semibold text-lg">{title}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-1">
        Target <span className="font-bold">{target}</span>/month
      </p>

      <div className="flex justify-between items-end mb-3">
        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {value}
        </span>
        <span className="text-lg sm:text-xl font-bold text-gray-800">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div
          className={`h-2.5 rounded-full ${barColorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Properties for Sale",
      target: "3k",
      value: "2,356",
      percentage: 71,
      icon: HiOutlineBuildingOffice,
      colorClass: "bg-green-100/70",
      barColorClass: "bg-green-500",
      borderColorClass: "border-green-500",
    },
    {
      title: "Properties for Rent",
      target: "3k",
      value: "2,356",
      percentage: 71,
      icon: PiBuildings,
      colorClass: "bg-lime-100/70",
      barColorClass: "bg-lime-500",
      borderColorClass: "border-lime-500",
    },
    {
      title: "Properties for Buy",
      target: "3k",
      value: "2,356",
      percentage: 90,
      icon: PiBuildingApartmentDuotone,
      colorClass: "bg-yellow-100/70",
      barColorClass: "bg-yellow-500",
      borderColorClass: "border-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
      {metrics.map((metric, index) => (
        <TargetMetricCard
          key={index}
          title={metric.title}
          target={metric.target}
          value={metric.value}
          percentage={metric.percentage}
          icon={metric.icon}
          colorClass={metric.colorClass}
          barColorClass={metric.barColorClass}
          borderColorClass={metric.borderColorClass}
        />
      ))}
    </div>
  );
};

export default DashboardMetrics;