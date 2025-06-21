import React from "react";
import Login from "./Login.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Vote from "./Vote.jsx";
import Notifications from "./Notification.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default App;
