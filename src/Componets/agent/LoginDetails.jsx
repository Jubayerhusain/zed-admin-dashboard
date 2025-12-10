import { ChevronRight } from "lucide-react";

const LoginDetails = ({ formData, setFormData, onNext, onPrev }) => {
  // Common classes
  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out text-gray-800 placeholder-gray-400 shadow-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
        Login & User Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Address */}
        <div>
          <label className={labelClass}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="nathan.roberts@example.com"
            className={inputClass}
          />
        </div>
        {/* password */}
        <div>
          <label className={labelClass}>
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="********"
            className={inputClass}
          />
        </div>
         {/* confirm password */}
        <div>
          <label className={labelClass}>
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            placeholder="********"
            className={inputClass}
          />
        </div>
      </div>
      {/* Descripstion */}
      <div>
        <label className={labelClass}>
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData.description,
              description: e.target.value,
            })
          }
          placeholder="What would you like to say? (e.g., your role, interests, or profile summary)"
          rows="4"
          className={`${inputClass} resize-y`}
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address */}
        <div>
          <label className={labelClass}>
            Your Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="123 Main St, Anytown"
            className={inputClass}
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className={labelClass}>
            Zip code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) =>
              setFormData({ ...formData, zipCode: e.target.value })
            }
            placeholder="43625"
            className={inputClass}
          />
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4 border-t mt-6">
        <button
          onClick={onPrev}
          className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center gap-2"
        >
          <ChevronRight size={18} className="rotate-180" /> Previous
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-b from-green-500 to-lime-400 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center gap-2"
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default LoginDetails;
