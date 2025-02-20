import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Inbox from "./Inbox";
import Services from "./Services";
import Projects from "./Projects";
import Reviews from "./Reviews";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar Fixed on the Left */}
      <Sidebar />

      {/* Content Area */}
      <div
        style={{
          marginLeft: "250px",
          padding: "20px",
          width: "100%",
          color: "white",
          marginTop: "5rem"
        }}
      >
        <Routes>
          <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
