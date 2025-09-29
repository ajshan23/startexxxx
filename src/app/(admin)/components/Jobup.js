import React from "react";

const Jobup = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-gray-900 w-full max-w-4xl h-[70%] rounded-xl shadow-2xl p-6 relative overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Job Details
        </h2>

        {/* Job Info */}
        <div className="space-y-4 text-white text-sm">
          <div>
            <span className="font-semibold text-amber-500">Heading:</span>
            <p className="text-white break-words">{data.Heading}</p>
          </div>

          <div>
            <span className="font-semibold text-amber-500">Description:</span>
            <p className="text-white break-words whitespace-pre-line">
              {data.Description}
            </p>
          </div>

          <div>
            <span className="font-semibold text-amber-500">Location:</span>
            <p className="text-white break-words">{data.Location}</p>
          </div>

          <div>
            <span className="font-semibold text-amber-500">Type:</span>
            <p className="text-white break-words">{data.Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobup;
