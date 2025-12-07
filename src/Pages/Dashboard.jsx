import React from "react";
import Hero from "../Componets/dashboard/Hero";
import DashboardMetrics from "../Componets/dashboard/TargetMetricCard";
import DashboardCharts from "./../Componets/dashboard/DashboardCharts";
import Stats from "../Componets/dashboard/Stats";
import PropertiesMap from "../Componets/dashboard/PropertiesMap";
import ReviewAndProperty from "../Componets/dashboard/ReviewAndProperty";

const Dashboard = () => {
  return (
    <>
      <div>
        <Hero />
        <DashboardMetrics />
        <DashboardCharts />
        <div className="w-12/12 flex flex-col md:flex-row justify-between gap-4 mt-8">
          <div className=" w-12/12 md:w-8/12">
            <Stats />
            <PropertiesMap />
          </div>
          <div className="w-12/12 md:w-4/12">
            <ReviewAndProperty />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
