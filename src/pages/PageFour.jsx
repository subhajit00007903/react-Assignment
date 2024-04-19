import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../pages/ProgressBar';

import '../css/PageFour.css';

const options = ['5 x 1/2 = ? \nIntroductory\nArithmetic', '3x +5 = ?\nPre-Algebra', 'x=2a−b±b2−4ac​​\nAlgebra', '\nGeometry'];

function PageFour() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(80); // Set initial progress to 57.1428
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    setProgress(progress + 30); 
    navigate('/five');
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="PageFour">
      <button className="backButton" onClick={handleBackClick}>🠔</button> 
      <ProgressBar progress={progress} /> 
      <h1>What is your comfort level with math?</h1>
      
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </div>
        ))}
      </div>

      <button disabled={!selectedOption} onClick={handleContinueClick}>Continue</button>
    </div>
  );
}

export default PageFour;
