import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import Sidebar from "./Sidebar";
import "../styles/Home.css";

const data = [
  { name: "Mon", activity: 1 },
  { name: "Tue", activity: 2 },
  { name: "Wed", activity: 3 },
  { name: "Thu", activity: 5 },
  { name: "Fri", activity: 2 },
  { name: "Sat", activity: 3 },
  { name: "Sun", activity: 4 },
];

const pieData = [
  { name: "Completed", value: 60 },
  { name: "Pending", value: 40 },
];

const COLORS = ["#0088FE", "#FFBB28"];

const Home = () => (
  <div className="home-container">
    <Sidebar />
    <div className="home-content full-width">
      <h2 className="heading">Home</h2>
      <p>Welcome Back !</p>
      <div className="activity-container">
        <div className="activity-box">
          <h3 className="subheading">My Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="activity" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="pie-chart-container">
        <h3 className="subheading">Chemistry</h3>
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <h3 className="subheading">My Courses</h3>
      <div className="myCourses-container">
        <div className="course-item chem">
          <div className="course-title">Chemistry is Easy !</div>
          <div className="course-details">8 lectures | 4 Practical work</div>
        </div>
        <div className="course-item geo">
          <div className="course-title">Economic Geography</div>
          <div className="course-details">4 lectures | 2 Practical work</div>
        </div>
      </div>
      <h3 className="subheading">Popular Courses</h3>
      <div className="myCourses-container">
        <div className="course-item maths">
          <div className="course-title">Maths</div>
          <div className="course-details">Logic and Problem Solving !</div>
          <div className="course-details">24 lectures | 16 Practical work</div>
        </div>
        <div className="course-item physics">
          <div className="course-title">Languages</div>
          <div className="course-details">German Grammar and Vocabulary</div>
          <div className="course-details">9 lectures | 6 Practical work</div>
        </div>
        <div className="course-item chemistry">
          <div className="course-title">Chemistry</div>
          <div className="course-details">Chemistry and the Environment</div>
          <div className="course-details">15 lectures | 10 Practical work</div>
        </div>
      </div>
      
    </div>
  </div>
);

export default Home;
