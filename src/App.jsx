import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Login from "./pages/Login";              // Warden Login
import StudentLogin from "./pages/StudentLogin"; // Student Login
import Navbar from "./components/Navbar";         // Your updated Navbar
import Loader from "./components/Loader";   
import Warden from "./pages/Warden";      // 🚀 Add this line

export default function App() {
  const [loading, setLoading] = useState(true); // ⏳ Loader state

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate loading time (e.g., 1.2 seconds)
    const timeout = setTimeout(() => setLoading(false), 1200);

    // 🚫 Disable Right-Click
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // 🚫 Disable Inspect Shortcuts (Ctrl+U, Ctrl+Shift+I, F12, etc.)
    const disableShortcuts = (e) => {
      if (
        (e.ctrlKey && e.key.toLowerCase() === "u") ||               // Ctrl+U
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") || // Ctrl+Shift+J
        e.key === "F12"                                             // F12
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // Cleanup
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  if (loading) return <Loader />; // ✅ Show loader until done

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/warden" element={<Warden />} />
      </Routes>
    </Router>
  );
}
