import React from "react";

const MessageUp = ({ isOpen, onClose, data }) => {
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
          MESSAGE DETAILS
        </h2>

        {/* Job Info */}
        <div className="space-y-4 text-white text-sm">
          <div>
            <span className="font-semibold text-amber-500">NAME:</span>
            <p className="text-white break-words">{data.name}</p>
          </div>

          <div>
            <span className="font-semibold text-amber-500">EMAIL:</span>
            <p className="text-white break-words whitespace-pre-line">
              {data.email}
            </p>
          </div>

          <div>
            <span className="font-semibold text-amber-500">PHONE:</span>
            <p className="text-white break-words">{data.phone}</p>
          </div>

        {
            data.message && (
              <div>
                <span className="font-semibold text-amber-500">
                  MESSAGE:
                </span>
                <p className="text-white break-words">{data.message}</p>
              </div>
            )
        }

          {
            data.requirement && (
              <div>
                <span className="font-semibold text-amber-500">
                  REQUIREMENTS:
                </span>
                <p className="text-white break-words">{data.requirement}</p>
              </div>
            )
          }

          {
            data.consultant && (
              <div>
                <span className="font-semibold text-amber-500">
                  CONSULTANT:
                </span>
                <p className="text-white break-words">{data.consultant}</p>
              </div>
            )
          }

          {
            data.date && (
              <div>
                <span className="font-semibold text-amber-500">DATE:</span>
                <p className="text-white break-words">{data.date}</p>
              </div>
            )
          }

          {
            data.activity && (
              <div>
                <span className="font-semibold text-amber-500">ACTIVITY:</span>
                <p className="text-white break-words">{data.activity}</p>
              </div>
            )
          }

          {
            data.details && (
              <div>
                <span className="font-semibold text-amber-500">DETAILS:</span>
                <p className="text-white break-words">{data.details}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MessageUp;
