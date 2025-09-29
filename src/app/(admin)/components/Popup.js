import Image from "next/image";
import React from "react";

const Popup = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-gray-900 w-full max-w-5xl h-[70%] rounded-xl shadow-2xl p-6 relative overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Blog Details
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-sm">
          {/* Left Column - Text Info */}
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-amber-500">Title:</span>
              <p className="text-white break-words">{data.title}</p>
            </div>
            <div>
              <span className="font-semibold text-amber-500">Heading:</span>
              <p className="text-white break-words">{data.heading}</p>
            </div>
            <div>
              <span className="font-semibold text-amber-500">Tag:</span>
              <p className="text-white break-words">{data.tag}</p>
            </div>
            <div>
              <span className="font-semibold text-amber-500">Description:</span>
              <p className="text-white break-words whitespace-pre-line" dangerouslySetInnerHTML={{ __html: data.description }}>
                
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-start md:items-center">
            <div className="bg-gray-800 p-2 rounded-md shadow-md border border-gray-700">
              <Image
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
                className="rounded object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
