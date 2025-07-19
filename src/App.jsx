import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Login from "./pages/Login";              // Warden Login
import StudentLogin from "./pages/StudentLogin"; // Student Login
import Navbar from "./components/Navbar";         // Your updated Navbar
import Loader from "./components/Loader";         // 🚀 Add this line

export default function App() {
  const [loading, setLoading] = useState(true); // ⏳ Loader state

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate loading time (e.g., 1.2 seconds)
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />; // ✅ Show loader until done

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}
