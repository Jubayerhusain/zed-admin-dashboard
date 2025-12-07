import StatCard from "../Componets/analytics/StatCard";
import TotalRevenue from "../Componets/analytics/TotalRevenue";
import BuyStatistic from "../Componets/analytics/BuyStatistic";
import RentStatistic from "../Componets/analytics/RentStatistic";
import SaleStatistic from "../Componets/analytics/SaleStatistic";
import BubbleChart from "./../Componets/shared/BubbleChart";
import PropertiesMap from "../Componets/shared/PropertiesMap";

function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm mb-8">
      <span className="text-gray-600">Property</span>
      <span className="text-gray-400">/</span>
      <span className="text-green-500 font-medium">Analytics</span>
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 ">
      <div className="">
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SaleStatistic />
          <RentStatistic />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BuyStatistic />
          <TotalRevenue />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Properties For Sale"
            value="2,556"
            unit="Unit"
            percentage={20}
            color="#4ade80"
          />
          <StatCard
            title="Properties For Rent"
            value="3,456"
            unit="Unit"
            percentage={20}
            color="#4ade80"
          />
          <StatCard
            title="Target This Month"
            value="456"
            unit="Unit"
            percentage={65}
            color="#4ade80"
          />
          <StatCard
            title="Customer"
            value="1000"
            unit=""
            percentage={5}
            color="#4ade80"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="md:col-span-4 mt-8 py-14 bg-white rounded-xl">
          <BubbleChart />
        </div>
        <div className="md:col-span-8">
          <PropertiesMap />
        </div>
      </div>
    </div>
  );
}
