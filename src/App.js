// src/App.js
import React from 'react';
import './App.css';
import Banner from './Banner/Banner';
import ContainerSlider from './ContainerSlider/ContainerSlider';
import ContainerSection3 from './ContainerSection3/ContainerSection3';

// Import images
import image1 from './Links/300 (10).jpeg';
import image2 from './Links/300 (1).jpeg';
import image3 from './Links/300.jpeg';
import image4 from './Links/image-01.jpg';
import image5 from './Links/image-02.jpg';
import image6 from './Links/image-03.jpg';
import image7 from './Links/image-04.jpg';
import image8 from './Links/image-05.jpg';
import image9 from './Links/image-06.jpg';
import image10 from './Links/image-07.png';


function App() {
  const containers = [
    { image: image1, name: "John", jobRole: "Designation Division", description: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod" },
    { image: image2, name: "Jane", jobRole: "Designation Division", description: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"  },
    { image: image3, name: "Jeremy", jobRole: "Designation Division", description: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"  }
  ];
  const additionalImages = [
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ];
  return (
    <div className="App">
      <Banner />
      <ContainerSlider containers={containers} />
      <ContainerSection3 images={additionalImages} /> 
    </div>
  );
}

export default App;
