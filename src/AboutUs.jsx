import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use for navigation
import "./AboutUs.css";
import { FaUserCircle } from "react-icons/fa";
import imageUrl from '/Users/moham/fitness-website/public/image3.jpg'; // Correctly import the image

const AboutUs = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Added state for theme toggle
  const [isAnimating, setIsAnimating] = useState(true);
  

  useEffect(() => {
    // Remove the animation class after 500ms
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`about-container ${isAnimating ? "page-enter" : ""}`}>
      <header>
        <h1 className="abusheading">FITNESS</h1>
        <nav>
          <Link to="/" className="nav-btn">HOME</Link>
          <Link to="/aboutus" className="nav-btn">ABOUT US</Link>
          <FaUserCircle className="profile-icon" />
        </nav>

        {/* Hamburger Menu Toggle */}
        <button
          className={`menu-toggle ${isDrawerOpen ? "hidden" : ""}`}
          onClick={() => setIsDrawerOpen(true)}
        >
          &#9776;
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer" onClick={() => setIsDrawerOpen(false)}>
          &times;
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Image with Overlay */}
      <div className="image-container">
        <img src="./jogging.jpg" alt="Background" className="background-image" />
        <div className="overlay1">
          <h2>About Us</h2>
          <p1>Your Fitness Journey Starts Here</p1>
          <p2 class="custom-paragraph">“Achieve Your Fitness Goals with Smart Tracking & Personalized Plans.”</p2>

        </div>
      </div>
      {/* Image with Overlay */}
      <div className="image-container2">
  <div className="left-images">
    <img src="./image1.jpg" alt="Image 1" className="left-image image1" />
    <img src="./image2.jpg" alt="Image 2" className="left-image image2" />
  </div>
  <div className="overlay">
    <h2>Who We Are</h2>
    <p className="custom-paragraph1">
    "At this platform, we make fitness simple and accessible with tools like BMR calculators, body fat analyzers, and macro trackers. Our personalized goal-setting and daily reminders keep you on track to achieve a healthier, balanced lifestyle."
    </p>
  </div>
</div>

<div className="image-container3">
      <div className="grid-image">
        <div className="image-grid">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="grid-item"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          ))}
        </div>
      </div>
      <div className="overlay2">
        <h2>Our Mission</h2>
        <p className="custom-paragraph2">
  - Helping users achieve their fitness goals with personalized tools. <br />
  - Encouraging consistency through daily goal tracking. <br />
  - Providing reliable, science-backed fitness data.
</p>
      </div>
    </div>


    <div className="image-container4">
  <div className="left-image1">
    <img src="./image4.png" alt="Image 1" className="left-image1" />
  </div>
  <div className="overlay3">
    <h2>Who We Are</h2>
    <p className="custom-paragraph3">
    "At this platform, we make fitness simple and accessible with tools like BMR calculators, body fat analyzers, and macro trackers. Our personalized goal-setting and daily reminders keep you on track to achieve a healthier, balanced lifestyle."
    </p>
  </div>
</div>
    </div>
  );
};

export default AboutUs;
