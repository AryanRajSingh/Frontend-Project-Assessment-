// src/Banner.js
import React from 'react';
import './Banner.css';
import video1 from '../Links/video_01.mp4';


const Banner = () => {
    const handleExploreClick1 = () => {
      const section = document.getElementById('explore-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const handleExploreClick2 = () => {
      const section = document.getElementById('explore-more-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="banner">
        <video className="banner-video" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <h1>
            Lorem ipsum <span style={{ color: "brown" }}>dolor</span>
          </h1>

          <div className="button-group">
            <button className="explore-button1" onClick={handleExploreClick1}>
              Explore &gt;
            </button>
            <button className="explore-button2" onClick={handleExploreClick2}>
              Explore &gt;
            </button>
          </div>
        </div>
        <div className="transparent-ampersand">&</div>
      </div>
    );
  };
  
  export default Banner;
  
