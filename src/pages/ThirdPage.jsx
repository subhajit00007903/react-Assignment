import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../pages/ProgressBar';

import '../css/ThirdPage.css';

function ThirdPage() {
  const [progress, setProgress] = useState(42.8571);
  const navigate = useNavigate();

  const handleContinueClick = () => {
    setProgress(progress + 25);
    navigate('/fourth');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="backButton" onClick={handleBackClick}>🠔</button> 
      
      <div className="ThirdPage">
      <ProgressBar progress={progress} />
        <img src=" " alt="" />
        <h2>You’re in the right place. Brilliant gets you hands-on to help improve your professional skills and knowledge. You’ll interact with concepts and solve fun problems in math, science, and computer science. Continue</h2>
      </div>
      <div className="buttonContainer">
        <button onClick={handleContinueClick}>Continue</button>
      </div>
    </>
  );
}

export default ThirdPage;
