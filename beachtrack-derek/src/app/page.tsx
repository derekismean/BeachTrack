"use client"; // Ensures this component runs only on the client side.

import { useState } from "react";
import "../styles/homepage.css";
import dynamic from "next/dynamic";

// Dynamically import the Map component (client-side only)
const DynamicMap = dynamic(() => import("./components/Map"), { ssr: false });

export default function Home() {
  // State to track the active tab (Recent, Open Rooms, Events)
  const [activeTab, setActiveTab] = useState("recent");

  // Function to return content based on the selected tab
  const getTabContent = () => {
    switch (activeTab) {
      case "recent":
        return <div className="no-content-message">No recent searches</div>;
      case "openRooms":
        return <div className="no-content-message"></div>; // Placeholder for open rooms data
      case "events":
        return <div className="no-content-message">Log in to create/join events!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      
      <div className="content-wrapper">
        {/* Left Side: Search and Tab Navigation */}
        <div className="left-content">
          {/* Search Bar Section */}
          <div className="search-wrapper">
            <div className="search-bar">
              <button className="menu-button">☰</button> {/* Sidebar Menu Button */}
              <input type="text" placeholder="Search by building, time, date" /> {/* Search Input */}
              <button className="search-button">🔍</button> {/* Search Button */}
            </div>
          </div>

          {/* Tab Navigation for switching between Recent, Open Rooms, and Events */}
          <div className="tab-navigation">
            <button 
              className={`tab-button ${activeTab === "recent" ? "active" : ""}`}
              onClick={() => setActiveTab("recent")}
            >
              Recent
            </button>
            <button 
              className={`tab-button ${activeTab === "openRooms" ? "active" : ""}`}
              onClick={() => setActiveTab("openRooms")}
            >
              Open Rooms
            </button>
            <button 
              className={`tab-button ${activeTab === "events" ? "active" : ""}`}
              onClick={() => setActiveTab("events")}
            >
              Events
            </button>
          </div>

          {/* Content Area that updates based on the selected tab */}
          <div className="content-area">
            {getTabContent()}
          </div>
        </div>

        {/* Right Side: Map Component */}
        <div className="right-content">
          <DynamicMap />
        </div>
      </div>
    </div>
  );
}
