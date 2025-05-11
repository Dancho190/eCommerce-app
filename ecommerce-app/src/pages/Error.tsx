import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error: React.FC = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <p>Looks like you've found the doorway to the great nothing.</p>
        <p>Sorry about that! Please visit our homepage to get where you need to go.</p>
        <Link to="/" className="error-button">Take me there</Link>
      </div>
      <div className="error-image-container">
        <img src="/EucalyptusForest.jpg" alt="Error Illustration" className="error-image" />
      </div>
    </div>
  );
};

export default Error;