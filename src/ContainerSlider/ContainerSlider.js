// src/ContainerSlider.js
import React, { useState, useEffect } from 'react';
import './ContainerSlider.css';

const ContainerSlider = ({ containers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? containers.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === containers.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === containers.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change container every 3 seconds
    return () => clearInterval(interval);
  }, [containers.length]);

  return (
    <div className="container-slider-section">
      <h2 className="container-slider-title">Section title goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      <div className="container-slider-container">
        <button className="prev-button" onClick={goToPrevSlide}>&#10094;</button>
        <div className="container-slider-items">
          {containers.map((container, index) => (
            <div className='manage-content'>
            <div key={index} className={`container-item ${index === currentIndex ? 'active' : ''}`}>
              <div className="container-content">
                <img src={container.image} alt={`Slide ${index}`} className="container-image" />
                <div className="container-info">
                  <p className="container-name">{container.name}</p>
                  <p className="container-job-role">{container.jobRole}</p>
                </div>
              </div>
              <div className='description-manage'>
                <p className={`container-description ${index === currentIndex ? 'active' : ''}`}>
                {container.description}
              </p>
              </div>
              <button className="explore-more-button">Explore More &gt;</button>
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={goToNextSlide}>&#10095;</button>
        <div className="slider-dots">
          {containers.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerSlider;
