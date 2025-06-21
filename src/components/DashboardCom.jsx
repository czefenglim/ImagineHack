import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardCom() {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  const ToEvaluation = () => {
    // simulate login
    navigate("/vote");
  };

  useEffect(() => {
    // ✅ Use the correct backend URL and endpoint
    fetch("http://127.0.0.1:5000/api/pending-reports")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setReports(data);
        console.log("Fetched reports:", data); // ✅ Optional debug log
      })
      .catch((error) => {
        console.error("Error fetching reports:", error);
      });
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f4faff",
        fontFamily: "Segoe UI",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h2 className="text-2xl font-bold">Pending Reports</h2>
        <div>
          <button
            style={{
              marginRight: 10,
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: 6,
              background: "#fff",
            }}
          >
            Filter
          </button>
          <button
            style={{
              padding: "8px 12px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: 6,
              border: "none",
            }}
          >
            + New Report
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "20px", marginBottom: 30 }}></div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <select style={{ marginRight: 10 }}>
          <option>All Categories</option>
        </select>
        <select>
          <option>Priority: All</option>
        </select>
      </div>

      {/* Report Cards */}
      {/* <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 20,
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span
            style={{
              backgroundColor: "#ffe58f",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              marginRight: 8,
            }}
          >
            Medium Priority
          </span>
          <span
            style={{
              backgroundColor: "#b7eb8f",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              marginRight: 8,
            }}
          >
            Health
          </span>
          <span style={{ fontSize: 12, color: "#777" }}>4 hours ago</span>
        </div>
        <h3 style={{ margin: "4px 0" }}>
          Misinformation about vaccine side effects
        </h3>
        <p style={{ color: "#555" }}>
          Article spreading false information about COVID-19 vaccine causing
          severe health complications without scientific backing.
        </p>
        <p style={{ fontSize: 12, color: "#999" }}>
          👤 Submitted by: Dr. Sarah Johnson👁️ 892 views🔁 45 shares
        </p>
        <button
          style={{
            marginTop: 10,
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: 6,
            border: "none",
          }}
        >
          Start Evaluation
        </button>
      </div> */}
      {/* Dynamic Report Cards */}
      <div>
        {reports.map((report) => (
          <div
            key={report._id}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              marginBottom: 16,
            }}
          >
            <h3 style={{ margin: "4px 0" }}>
              {report["First AI Evaluation Report"]?.Title || "No title"}
            </h3>
            <p style={{ color: "#555" }}>
              {report["First AI Evaluation Report"]?.["Evaluation Summary"] ||
                "No summary"}
            </p>
            <button
              style={{
                marginTop: 10,
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 6,
                border: "none",
              }}
              onClick={ToEvaluation}
            >
              Start Evaluation
            </button>
          </div>
        ))}
      </div>

      {/* <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 20,
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span
            style={{
              backgroundColor: "#d9f7be",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              marginRight: 8,
            }}
          >
            Low Priority
          </span>
          <span
            style={{
              backgroundColor: "#efdbff",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              marginRight: 8,
            }}
          >
            Technology
          </span>
          <span style={{ fontSize: 12, color: "#777" }}>6 hours ago</span>
        </div>
        <h3 style={{ margin: "4px 0" }}>False claims about AI capabilities</h3>
        <p style={{ color: "#555" }}>
          Blog post making exaggerated claims about artificial intelligence
          replacing all human jobs within the next year.
        </p>
        <p style={{ fontSize: 12, color: "#999" }}>
          👤 Submitted by: Tech Analyst👁️ 567 views🔁 23 shares
        </p>
        <button
          style={{
            marginTop: 10,
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: 6,
            border: "none",
          }}
        >
          Start Evaluation
        </button>
      </div> */}

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
          style={{ padding: "6px 10px", marginRight: 4, borderRadius: 6 }}
        >
          Previous
        </button>
        <button
          style={{
            padding: "6px 10px",
            backgroundColor: "#007bff",
            color: "#fff",
            marginRight: 4,
            borderRadius: 6,
          }}
        >
          1
        </button>
        <button
          style={{ padding: "6px 10px", marginRight: 4, borderRadius: 6 }}
        >
          2
        </button>
        <button style={{ padding: "6px 10px", borderRadius: 6 }}>3</button>
        <button style={{ padding: "6px 10px", marginLeft: 4, borderRadius: 6 }}>
          Next
        </button>
      </div>

      <div
        style={{
          textAlign: "right",
          fontSize: 12,
          color: "#777",
          marginTop: 10,
        }}
      >
        Showing 2 of 24 reports
      </div>
    </div>
  );
}

export default DashboardCom;
