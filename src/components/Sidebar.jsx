import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBook, FaStar, FaCalendar, FaChartBar, FaUser } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <h2 className="logo">E-LEARNING</h2>
      <ul className="menu">   
        <li onClick={() => navigate("/")}> <FaHome /> Home</li>
        <li onClick={() => navigate("/courses")}><FaBook /> All Courses</li>
        <li onClick={() => navigate("/popular")}><FaStar /> Popular Courses</li>
        <li onClick={() => navigate("/schedule")}><FaCalendar /> Schedule</li>
        <li onClick={() => navigate("/my-courses")}><FaCalendar /> My Courses</li>
        <li onClick={() => navigate("/statistics")}><FaChartBar /> Statistics</li>
      </ul>
      <div className="profile">
        <FaUser /> Profile
      </div>
      <div className="logout">
        <button onClick={() => navigate("/logout")}>Log out</button>
      </div>
    </nav>
  );
};

export default Sidebar;
