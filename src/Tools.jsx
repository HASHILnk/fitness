import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { FaUserCircle } from "react-icons/fa";
import "./Tools.css";

const Tools = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="tools-container">
      <header>
        <h1 className="heading">FITNESS</h1>
        <nav>
          <button className="nav-btn" onClick={() => navigate("/")}>HOME</button>  {/* ✅ Navigates to Home */}
          <button className="nav-btn" onClick={() => navigate("/about")}>ABOUT US</button>  {/* ✅ Navigates to About */}
          <FaUserCircle className="profile-icon" />
        </nav>

        {/* Hamburger Menu Toggle */}
        <button className="menu-toggle" onClick={() => setIsDrawerOpen(true)}>
          &#9776;
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer" onClick={() => setIsDrawerOpen(false)}>
          &times;
        </button>
        <ul>
          <li><button onClick={() => navigate("/")}>Home</button></li>  {/* ✅ Navigates to Home */}
          <li><button onClick={() => navigate("/about")}>About Us</button></li>  {/* ✅ Navigates to About */}
          <li><button onClick={() => navigate("/services")}>Services</button></li>  {/* ✅ Navigates to Services */}
          <li><button onClick={() => navigate("/contact")}>Contact</button></li>  {/* ✅ Navigates to Contact */}
        </ul>
      </div>

      <main>
        <h2>Welcome to the Tools Page</h2>
      </main>
    </div>
  );
};

export default Tools;
