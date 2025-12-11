import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={agent.image} 
          alt={agent.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{agent.name}</h3>
          <p className="text-gray-600 text-sm">{agent.title}</p>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
        {agent.description}
      </p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4" />
          <span>{agent.email}</span>
        </div>
        <div className="flex items-center border-y border-gray-300 py-2 gap-2 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          <span>{agent.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{agent.location}</span>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
          Write Message
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="flex-1 px-4 py-2 border border-lime-500 text-green-500 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-1">
          View Details
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
export default AgentCard;