import React from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

function Reportform() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10 px-5">
      <form className="flex flex-col gap-5 w-full max-w-2xl">
        <h2 className="text-black font-bold text-2xl">Report Fake News</h2>

        {/* Content Type Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-lg">Types of content</label>
          <select
            id="category"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="">-- Choose an option --</option>
            <option value="report">Report</option>
            <option value="dashboard">Dashboard</option>
            <option value="vote">Vote</option>
            <option value="notifications">Notifications</option>
          </select>
        </div>

        {/* Content URL */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-lg">Content URL or Source</label>
          <input
            type="text"
            placeholder="https://example.com"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-lg">Description</label>
          <textarea
            placeholder="Describe why you think this content is fake"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-40 resize-none"
          />
        </div>

        {/* Upload Evidence */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-lg">Upload Evidence</label>
          <div className="rounded-lg border border-gray-300 p-5 flex flex-col items-center justify-center gap-2 w-full bg-white cursor-pointer hover:border-blue-400 transition">
            <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
            <p className="text-sm text-gray-600">
              Drag and drop files here or click to select files
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default Reportform;
