import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Schedule from "./components/Schedule";
import MyCourses from "./components/MyCourses";
import Statistics from "./components/Statistics";
import PopCourses from "./components/PopCourses";

function App() {
  return (
    <Router>
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/Popular-Courses" element={<PopCourses/>} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </div>
  </Router>
);
};

export default App
