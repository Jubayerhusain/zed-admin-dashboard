import React from 'react';
import {  CheckCircle } from 'lucide-react';

const AgentDetails = () => {
  const details = [
    { label: 'Agent Name', value: 'Annette Black' },
    { label: 'Agency', value: 'All American Real State' },
    { label: 'Agent License', value: 'All American Real State' },
    { label: 'Tax Number', value: 'TN305 9859L PQ856' },
    { label: 'Agent City', value: 'New York' }
  ];

  return (
    <div className="space-y-4 ">
      {details.map((detail, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-600 font-medium">{detail.label}:</span>
            <span className="text-gray-900">{detail.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AgentDetails;