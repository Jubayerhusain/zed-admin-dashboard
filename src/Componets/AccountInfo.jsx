import { ChevronRight } from 'lucide-react';

const AccountInfo = ({ formData, setFormData, onNext }) => {
  // Common  classes
  const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out text-gray-800 placeholder-gray-400 shadow-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
        Account Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className={labelClass}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="Philip"
            className={inputClass}
          />
        </div>

        {/* Last Name */}
        <div>
          <label className={labelClass}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Marjorie"
            className={inputClass}
          />
        </div>

        {/* Company Phone */}
        <div>
          <label className={labelClass}>
            Company Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(907) 555-0101"
            className={inputClass}
          />
        </div>

        {/* Gender Select */}
        <div>
          <label className={labelClass}>
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>

            {/* icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        {/* Max Rooms Select */}
        <div>
          <label className={labelClass}>
            Max Rooms
          </label>
          <div className="relative">
            <select
              value={formData.maxRooms}
              onChange={(e) => setFormData({ ...formData, maxRooms: e.target.value })}
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className={labelClass}>
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className={inputClass}
            style={{ color: formData.dob ? '#1f2937' : '#9ca3af' }} 
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t mt-6">
        <button
          onClick={onNext}
          className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center gap-2"
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;