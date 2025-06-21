import { React, useState } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

function VoteCom() {
  const [checkResult, setCheckResult] = useState(""); // "Real" or "False"
  const [analysis, setAnalysis] = useState("");
  const [evidenceSources, setEvidenceSources] = useState([""]);
  const [files, setFiles] = useState([]);

  const handleAddSource = () => {
    setEvidenceSources([...evidenceSources, ""]);
  };

  const handleSourceChange = (index, value) => {
    const updatedSources = [...evidenceSources];
    updatedSources[index] = value;
    setEvidenceSources(updatedSources);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles); // ✅ store File objects only
  };

  const handleSubmit = async () => {
    if (!checkResult) {
      alert("Please select Real or False before submitting.");
      return;
    }

    // Convert files to base64 here
    let encodedFiles = [];
    try {
      encodedFiles = await Promise.all(
        files.map(
          (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () =>
                resolve({ name: file.name, data: reader.result });
              reader.onerror = (error) => reject(error);
            })
        )
      );
    } catch (err) {
      alert("Error reading files: " + err.message);
      return;
    }

    const payload = {
      "Check Result": checkResult,
      "Detailed Analysis": analysis,
      "Evidence Source URLS": evidenceSources.filter(
        (url) => url.trim() !== ""
      ),
      "Evidence Files": encodedFiles,
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/api/evaluation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Submission successful!");
      } else {
        alert("❌ Submission failed: " + result.msg);
      }

      console.log(result);
    } catch (error) {
      console.error("Error submitting evaluation:", error);
      alert("❌ Failed to submit evaluation.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl mx-auto border border-gray-300 rounded-lg p-6 bg-white mb-6">
        <p className="font-semibold text-[24px]">
          Fact-Check Evaluation & Evidence Upload
        </p>
        <p className="text-[20px]">
          Provide your evaluation and supporting evidence for the selected
          report
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Evaluation Details
        </h2>

        {/* Fact-Check Result */}
        <div className="flex gap-4">
          <button
            className={`flex items-center gap-2 px-6 py-4 border rounded-lg w-40 justify-center ${
              checkResult === "Real"
                ? "bg-green-100 border-green-500 text-green-700"
                : "border-gray-300"
            }`}
            onClick={() => setCheckResult("Real")}
          >
            <CheckCircleIcon className="w-5 h-5" />
            Real
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-4 border rounded-lg w-40 justify-center ${
              checkResult === "False"
                ? "bg-red-100 border-red-500 text-red-700"
                : "border-gray-300"
            }`}
            onClick={() => setCheckResult("False")}
          >
            <XCircleIcon className="w-5 h-5" />
            False
          </button>
        </div>

        {/* Evidence Sources */}
        <div>
          <h3 className="text-gray-600 font-medium mb-2">Evidence Sources</h3>
          <div className="space-y-2">
            {evidenceSources.map((src, index) => (
              <input
                key={index}
                type="url"
                placeholder={`https://source${index + 1}.com`}
                value={src}
                onChange={(e) => handleSourceChange(index, e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            ))}
            <button
              type="button"
              onClick={handleAddSource}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add Another Source
            </button>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <h3 className="text-gray-600 font-medium mb-2">
            Upload Evidence Files
          </h3>
          <label
            htmlFor="upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer"
          >
            <ArrowUpTrayIcon className="w-8 h-8 text-gray-400 mb-1" />
            <span className="text-sm text-gray-500">
              Drag and drop files here, or click to browse
            </span>
            <input
              id="upload"
              type="file"
              className="hidden"
              multiple
              accept=".pdf,.doc,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
          </label>
          <div className="mt-2 text-sm text-gray-600">
            {files.length > 0 &&
              files.map((file, index) => <div key={index}>• {file.name}</div>)}
          </div>
        </div>

        {/* Detailed Analysis */}
        <div>
          <h3 className="text-gray-600 font-medium mb-2">Detailed Analysis</h3>
          <textarea
            value={analysis}
            onChange={(e) => setAnalysis(e.target.value)}
            rows={4}
            placeholder="Provide detailed analysis of your fact-checking process and findings..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Save as Draft
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit Evaluation
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoteCom;
