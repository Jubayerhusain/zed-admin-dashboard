import { Building2, ChevronDown } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function BuyStatistic() {
  const data = [
    { month: 'Jan', value: 32000 },
    { month: 'Feb', value: 30000 },
    { month: 'Mar', value: 28000 },
    { month: 'Apr', value: 35000 },
    { month: 'May', value: 37000 },
    { month: 'Jun', value: 36000 },
    { month: 'Jul', value: 30000 },
    { month: 'Aug', value: 33000 },
    { month: 'Sep', value: 31000 },
    { month: 'Oct', value: 34000 },
    { month: 'Nov', value: 36000 },
    { month: 'Dec', value: 33000 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Buy Statistic</h2>
        <button className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-500 rounded-lg text-sm font-medium hover:bg-green-50">
          Downloand CSV
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Buy</p>
          <p className="text-gray-900 font-bold text-lg">1,252 Unit</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBuy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            labelStyle={{ color: '#6b7280', fontSize: '12px' }}
            itemStyle={{ color: '#111827', fontSize: '12px', fontWeight: 600 }}
          />
          <Area type="monotone" dataKey="value" stroke="#facc15" strokeWidth={2} fillOpacity={1} fill="url(#colorBuy)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BuyStatistic;