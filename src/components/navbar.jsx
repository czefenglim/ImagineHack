import React from "react";

function navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center w-full">
      {/* Left: Logo */}
      <div className="text-xl font-semibold text-blue-500">FactBridge</div>

      {/* Center: Navigation links */}
      <div className="flex space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:text-blue-500">
          Report
        </a>
        <a href="#" className="hover:text-blue-500">
          Dashboard
        </a>
        <a href="#" className="hover:text-blue-500">
          Vote
        </a>
        <a href="#" className="hover:text-blue-500">
          Notifications
        </a>
      </div>

      {/* Right: Avatar and icon */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/30"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        {/* Icon (e.g., logout or settings) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700 hover:text-blue-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12H3m0 0l3-3m-3 3l3 3m13-9v6a2 2 0 002 2h2m0-8h-2a2 2 0 00-2 2v6"
          />
        </svg>
      </div>
    </nav>
  );
}

export default navbar;
