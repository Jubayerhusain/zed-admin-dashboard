export default function StatCard({ title, value, unit, percentage, color }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            <span className="text-gray-500 text-sm">/{unit}</span>
          </div>
        </div>

        <div className="relative w-24 h-24">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="#f0f0f0"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold" style={{ color }}>
              {percentage}%
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mt-4">
        <span className={`text-sm font-semibold`} style={{ color }}>
          {percentage}% increase
        </span>
        <span className="text-gray-400 text-sm pr-4">Last month</span>
      </div>
    </div>
  );
}
