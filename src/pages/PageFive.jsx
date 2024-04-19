import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../pages/ProgressBar';

import '../css/PageFive.css';

function PageFive() {
  const [progress, setProgress] = useState(71.4285); // Set initial progress to 71.4285
  const navigate = useNavigate();

  const handleContinueClick = () => {
    setProgress(progress + 60); 
    navigate('/six');
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="PageFive">
      <button className="backButton" onClick={handleBackClick}>🠔</button> 
      <ProgressBar progress={progress} /> 
      <div className="content">
        <div className="image-container">
          <img src="https://qph.fs.quoracdn.net/main-qimg-382425740fb8e3c20e4d97eba77deec1" alt="Celebrating Character" />
        </div>
        <div className="text">
          <h1>You're On Your Way!</h1>
          <p className="stars">★★★★★</p>
          <div className="review">
            <p>“Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.” — Jacob S.</p>
          </div>
        </div>
      </div>
      <button onClick={handleContinueClick}>Continue</button> {/* Add an onClick handler to the button */}
    </div>
  );
}

export default PageFive;
