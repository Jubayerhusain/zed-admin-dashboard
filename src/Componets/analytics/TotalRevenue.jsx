import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TotalRevenue() {
  const data = [
    { month: "Jan", value: 55000 },
    { month: "Feb", value: 65000 },
    { month: "Mar", value: 60000 },
    { month: "Apr", value: 50000 },
    { month: "May", value: 70000 },
    { month: "Jun", value: 62000 },
    { month: "Jul", value: 68000 },
    { month: "Aug", value: 58000 },
    { month: "Sep", value: 52000 },
    { month: "Oct", value: 60000 },
    { month: "Nov", value: 56000 },
    { month: "Dec", value: 54000 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Total Revenue</h2>
        <button className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-500 rounded-lg text-sm font-medium hover:bg-green-50">
          Downloand CSV
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-bold text-gray-900">$678,345</p>
        <p className="text-sm text-gray-500 mt-1">
          last month{" "}
          <span className="text-green-500 font-semibold">$563,443</span>
        </p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bef264" stopOpacity={1} />
              <stop offset="100%" stopColor="#4ade80" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#6b7280", fontSize: "12px" }}
            itemStyle={{ color: "#111827", fontSize: "12px", fontWeight: 600 }}
          />
          <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}