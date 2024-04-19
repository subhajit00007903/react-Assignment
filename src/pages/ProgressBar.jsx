import React from 'react';
import '../css/ProgressBar.css';

function ProgressBar({ progress }) {
  return (
    <div className="ProgressBar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
