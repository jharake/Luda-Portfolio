import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Animator, Fade, MoveIn, batch } from 'react-scroll-motion';
import { projects } from './App'; // Importing the projects array from App.jsx
import './ProjectDetails.css';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { project } = useParams();
  
  const selectedProject = projects.find((proj) => proj.name === project);

  if (!selectedProject) {
    navigate('/');
    return null;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMouseMove = (event) => {
    const carousel = document.getElementById('carousel');
    const rect = carousel.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width) * 100;
    // carousel.style.transform = `translateX(-${offsetX / 2}%)`;
  };

  useEffect(() => {
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id='img-container'>
      <button id='backButton' onClick={handleBackClick}>Back</button>
      <div
        id="carousel"
      >
        {selectedProject.images.slice(2).map((image, index) => (
          <Animator key={index} animation={batch(Fade(), MoveIn(800, 0))}>
            <img
              key={index}
              className="carousel-image"
              src={image}
              alt={`${project}${index + 3}`}
              onError={() => console.log(`Failed to load image: ${image}`)} // Log any failed image loads
            />
          </Animator>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
