import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Animator, Fade, MoveIn, batch } from 'react-scroll-motion';
import { projects } from './App'; // Importing the projects array from App.jsx

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { project } = useParams();

  const selectedProject = projects.find((proj) => proj.name === project);

  if (!selectedProject) {
    navigate('/'); // Navigate back to main page if project is not found
    return null;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <Animator animation={batch(Fade(), MoveIn(800, 0))}>
        {selectedProject.images.slice(2).map((image, index) => ( // Start from the 3rd image
          <img
            key={index}
            style={{
              width: '50%',
              marginTop: '20px',
            }}
            src={image}
            alt={`${project}${index + 3}`} // Example alt text, adjust as needed
          />
        ))}
      </Animator>
    </div>
  );
};

export default ProjectDetails;
