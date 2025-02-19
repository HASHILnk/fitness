import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./HomePage.css";
import { FaCommentAlt, FaUserCircle } from "react-icons/fa";

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false); // New state for exit animation
  const navigate = useNavigate();

  // Persist dark mode in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  // Function to handle navigation with animation
  const handleNavigation = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(path);
    }, 500); // Match the duration of the CSS animation
  };

  return (
    <div className={`homepage-container ${isDarkMode ? "dark-mode" : "light-mode"} ${isExiting ? "page-exit" : "page-enter"}`}>

      <header>
        <h1 className="heading">FITNESS</h1>
        <nav>
          <Link to="/" className="nav-btn">HOME</Link>
          <Link to="/aboutus" className="nav-btn">ABOUT US</Link>
          <FaUserCircle className="profile-icon" />
        </nav>

        {/* Theme Toggle Switch */}
        <div className="theme-switch">
          <input type="checkbox" id="theme-toggle" onChange={() => setIsDarkMode(!isDarkMode)} checked={isDarkMode} />
          <label htmlFor="theme-toggle" className="slider"></label>
        </div>

        {/* Hamburger Menu Toggle */}
        <button className={`menu-toggle ${isDrawerOpen ? "hidden" : ""}`} onClick={() => setIsDrawerOpen(true)}>
          &#9776;
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer" onClick={() => setIsDrawerOpen(false)}>&times;</button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    





<main>
        <div className="buttons">
          <button className="action-btn">Profile</button>
          <button className="action-btn" onClick={() => handleNavigation("/tools")}>Tools</button>
          <button className="action-btn">Goals</button>
          <button className="action-btn" onClick={() => handleNavigation("/aboutus")}>Our Story</button>

        </div>
        <div className="image-container1">
          <div className="images">
            <img src="/image-1.jpg" alt="Fitness" />
          </div>
          <div className="images2">
            <img src="/image-2.png" alt="Cartoon Fitness" />
          </div>
        </div>
      </main>

      {/* Chat Button and Chat Box */}
      <div id="chat-container">
        <FaCommentAlt id="chat-icon" onClick={() => setIsChatOpen(!isChatOpen)} />
        {isChatOpen && (
          <div id="chat-box">
            <div id="chat-header">Chat</div>
            <div id="chat-content">
              <p>Welcome to the chat!</p>
            </div>
            <input type="text" id="chat-input" placeholder="Type a message..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;






