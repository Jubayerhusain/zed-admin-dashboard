import { ChevronRight, Upload } from "lucide-react";
import { useState } from "react";

const UploadFiles = ({ onPrev, onSubmit }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload your Image <span className="text-red-500">*</span>
        </label>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
            dragActive ? "border-green-500 bg-green-50" : "border-gray-300"
          }`}
        >
          <Upload className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="text-gray-600 mb-2">
            <span className="text-green-500 font-medium cursor-pointer hover:underline">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-sm text-gray-500">
            JPEG, PNG, JPG (Recommended image size : 800x400px)
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
        >
          <ChevronRight size={18} className="rotate-180" /> Previous
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-gradient-to-b from-green-500 to-lime-400 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2"
        >
          Submit <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default UploadFiles;
