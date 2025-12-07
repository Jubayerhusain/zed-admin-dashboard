import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Cell,
} from "recharts";
import { FaBuilding, FaDollarSign, FaChartLine } from "react-icons/fa";

const revenueData = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 15000 },
  { name: "Mar", revenue: 20000 },
  { name: "Apr", revenue: 16000 },
  { name: "May", revenue: 25000 },
  { name: "Jun", revenue: 22000 },
  { name: "Jul", revenue: 28000 },
  { name: "Aug", revenue: 20000 },
  { name: "Sep", revenue: 18000 },
  { name: "Oct", revenue: 24000, highlight: true },
  { name: "Nov", revenue: 22000 },
  { name: "Dec", revenue: 15000 },
];

const overviewData = [
  { name: "Jan", totalSale: 30000, totalRent: 10000, totalBuy: 5000 },
  { name: "Feb", totalSale: 25000, totalRent: 15000, totalBuy: 7000 },
  { name: "Mar", totalSale: 35000, totalRent: 18000, totalBuy: 8000 },
  { name: "Apr", totalSale: 28000, totalRent: 12000, totalBuy: 9000 },
  { name: "May", totalSale: 40000, totalRent: 10000, totalBuy: 10000 },
  { name: "Jun", totalSale: 38000, totalRent: 15000, totalBuy: 12000 },
  { name: "Jul", totalSale: 50000, totalRent: 18000, totalBuy: 15000 },
  { name: "Aug", totalSale: 30000, totalRent: 16000, totalBuy: 13000 },
  { name: "Sep", totalSale: 42000, totalRent: 14000, totalBuy: 11000 },
  { name: "Oct", totalSale: 39000, totalRent: 17000, totalBuy: 9000 },
  { name: "Nov", totalSale: 45000, totalRent: 19000, totalBuy: 10000 },
  { name: "Dec", totalSale: 40000, totalRent: 20000, totalBuy: 8000 },
];

// Tooltip for Bar Chart
const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-xl text-xs">
        <p className="font-bold text-gray-800 mb-1">{label}</p>
        <p className="text-green-600">
          Revenue: ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

// Tooltip for Area Chart
const CustomAreaTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-xl text-sm">
        <p className="font-bold text-gray-800 mb-1">{label}</p>
        <p className="text-green-600">
          Total Sale: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-lime-600">
          Total Rent: ${payload[1].value.toLocaleString()}
        </p>
        <p className="text-yellow-600">
          Total Buy: ${payload[2].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

// Sub Components
const OverviewHeaderCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className="flex items-center space-x-2 p-2 rounded-lg">
    <Icon size={48} className={`p-2 rounded-md ${colorClass} text-white`} />
    <div>
      <p className="text-sm font-medium text-gray-700">{title}</p>
      <p className="text-base font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const DashboardCharts = () => {
  const octoberIndex = 9;
  const barCount = revenueData.length;

  return (
    // Main grid container
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Total Revenue Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg h-[450px] relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Total Revenue
            </h2>
            <div className="flex items-end">
              <p className="text-3xl font-extrabold text-gray-900 mr-2">
                $678,345
              </p>
              <p className="text-sm text-gray-500">
                last month{" "}
                <span className="text-green-500 font-semibold">$563,443</span>
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-ellipsis-vertical"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>

        <div
          className="absolute z-10 p-2 bg-white rounded-lg shadow-md text-sm hidden sm:block text-gray-800"
          style={{
            left: `${(octoberIndex / barCount) * 100 + 100 / (barCount * 2)}%`,
            transform: "translate(-50%, 0)",
            top: "135px",
            textAlign: "center",
          }}
        >
          <p className="font-bold">October</p>
          <p className="font-semibold text-green-600">
            $6000 <span className="text-xs text-green-500">+3.4%</span>
          </p>
        </div>

        <ResponsiveContainer width="100%" height="70%">
          <BarChart
            data={revenueData}
            margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
            barCategoryGap="10%"
          >
            {/* Gradient Define */}
            <defs>
              <linearGradient id="limeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bef220" /> 
                <stop offset="100%" stopColor="#80cc00" /> 
              </linearGradient>

              <linearGradient id="limeHighlight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a3e635" />
                <stop offset="100%" stopColor="#65a30d" /> 
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              stroke="#6b7280"
              className="text-xs"
            />

            <YAxis hide domain={[0, 30000]} />

            <Tooltip content={<CustomBarTooltip />} />

            <Bar
              dataKey="revenue"
              radius={[4, 4, 0, 0]}
              barSize={30}
              fill="url(#limeGradient)"
            >
              {revenueData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    entry.highlight
                      ? "url(#limeHighlight)"
                      : "url(#limeGradient)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg h-[450px]">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <button className="text-gray-400 hover:text-gray-600">...</button>
        </div>

        <div className="flex justify-around mb-4">
          <OverviewHeaderCard
            title="Total Sale"
            value="2,346 Unit"
            icon={FaBuilding}
            colorClass="bg-green-500"
          />
          <OverviewHeaderCard
            title="Total Rent"
            value="1,252 Unit"
            icon={FaChartLine}
            colorClass="bg-lime-500"
          />
          <OverviewHeaderCard
            title="Total Buy"
            value="1,252 Unit"
            icon={FaDollarSign}
            colorClass="bg-yellow-500"
          />
        </div>

        <ResponsiveContainer width="100%" height="65%">
          <AreaChart
            data={overviewData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              stroke="#f0f0f0"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis dataKey="name" tickLine={false} stroke="#d1d5db" />
            <YAxis domain={[30000, 60000]} tickCount={4} stroke="#d1d5db" />
            <Tooltip content={<CustomAreaTooltip />} />

            <Area
              type="monotone"
              dataKey="totalBuy"
              stackId="1"
              stroke="#fcd34d"
              fill="#fcd34d60"
            />
            <Area
              type="monotone"
              dataKey="totalRent"
              stackId="1"
              stroke="#a7f3d0"
              fill="#a7f3d0"
            />
            <Area
              type="monotone"
              dataKey="totalSale"
              stackId="1"
              stroke="#10b981"
              fill="#10b98160"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
